#!/usr/bin/env node
// News to Blog Analysis Pipeline

import { GoogleGenerativeAI } from '@google/generative-ai';
import { monitorNews } from './news-monitor.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 80) // Increase limit
    .replace(/^-|-$/g, '')
    .replace(/-$/, ''); // Ensure no trailing dash
};

const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute)) + ' min';
};

const checkForDuplicates = async (newsArticle, analysisTitle) => {
  try {
    const articlesFilePath = path.join(__dirname, '..', 'src', 'data', 'blog', 'articles.ts');
    const articlesContent = await fs.readFile(articlesFilePath, 'utf-8');
    
    // Extract all existing titles and check for similarity
    const titleMatches = articlesContent.match(/title:\s*["`']([^"`']+)["`']/g) || [];
    const existingTitles = titleMatches.map(match => 
      match.replace(/title:\s*["`']([^"`']+)["`']/, '$1').toLowerCase()
    );
    
    // Check for keyword overlap with recent articles (last 30 days)
    const recentDatePattern = /date:\s*["`'](202[4-9]-\d{2}-\d{2})["`']/g;
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
    
    // Keywords to check for similarity
    const newsKeywords = [
      ...newsArticle.title.toLowerCase().split(/\s+/).filter(w => w.length > 3),
      ...(newsArticle.keywords || []).map(k => k.toLowerCase()),
      'helmplicht', 'elektrische step', 'e-step', 'e-bike', 'rdw'
    ].filter((v, i, arr) => arr.indexOf(v) === i); // unique
    
    const analysisKeywords = analysisTitle.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    
    // Check for similar titles
    for (const existingTitle of existingTitles) {
      const similarity = calculateTitleSimilarity(analysisTitle.toLowerCase(), existingTitle);
      if (similarity > 0.7) {
        return {
          isDuplicate: true,
          reason: `Similar title exists: "${existingTitle}"`,
          similarity
        };
      }
      
      // Check keyword overlap
      const existingKeywords = existingTitle.split(/\s+/).filter(w => w.length > 3);
      const keywordOverlap = newsKeywords.filter(k => 
        existingKeywords.some(ek => ek.includes(k) || k.includes(ek))
      ).length;
      
      if (keywordOverlap >= 2 && (existingTitle.includes('helmplicht') || existingTitle.includes('elektrische step') || existingTitle.includes('e-step'))) {
        return {
          isDuplicate: true,
          reason: `Similar topic covered recently: "${existingTitle}"`,
          keywordOverlap
        };
      }
    }
    
    return { isDuplicate: false };
    
  } catch (error) {
    console.log(`⚠️ Could not check for duplicates: ${error.message}`);
    return { isDuplicate: false };
  }
};

const calculateTitleSimilarity = (title1, title2) => {
  const words1 = title1.split(/\s+/);
  const words2 = title2.split(/\s+/);
  const allWords = [...new Set([...words1, ...words2])];
  
  let matchCount = 0;
  for (const word of words1) {
    if (words2.includes(word) && word.length > 3) {
      matchCount++;
    }
  }
  
  return matchCount / Math.max(words1.length, words2.length);
};

const fetchArticleContent = async (url) => {
  try {
    // Simple content extraction - in production you'd use a proper web scraper
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; KentekenEstep-NewsBot/1.0)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const html = await response.text();
    
    // Basic content extraction (you might want to use readability or similar)
    const contentMatch = html.match(/<article[^>]*>(.*?)<\/article>/s) ||
                         html.match(/<main[^>]*>(.*?)<\/main>/s) ||
                         html.match(/<div[^>]*class="[^"]*content[^"]*"[^>]*>(.*?)<\/div>/s);
    
    if (contentMatch) {
      return contentMatch[1]
        .replace(/<script[^>]*>.*?<\/script>/gs, '')
        .replace(/<style[^>]*>.*?<\/style>/gs, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 2000); // Limit length
    }
    
    return '';
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return '';
  }
};

const generateAnalysisArticle = async (newsArticle) => {
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    generationConfig: {
      temperature: 0.7,
      topP: 0.8,
      maxOutputTokens: 4000
    }
  });

  console.log(`📝 Analyseren: ${newsArticle.title}`);

  // Fetch full content if needed
  let fullContent = newsArticle.summary;
  if (newsArticle.url && fullContent.length < 200) {
    const fetchedContent = await fetchArticleContent(newsArticle.url);
    if (fetchedContent.length > fullContent.length) {
      fullContent = fetchedContent;
    }
  }

  const analysisPrompt = `
Je bent een expert Nederlandse elektrische step journalist voor KentekenEstep.nl. Schrijf een diepgaande analyse artikel gebaseerd op dit nieuws:

ORIGINEEL NIEUWS:
Titel: ${newsArticle.title}
Bron: ${newsArticle.source}
URL: ${newsArticle.url}
Content: ${fullContent}
Keywords: ${newsArticle.keywords?.join(', ') || 'N/A'}

OPDRACHT: Schrijf een uitgebreide analyse die verder gaat dan het originele nieuws.

STRUCTUUR VEREISTEN:
1. NIEUWS SAMENVATTING (1 alinea)
   - Vat het originele nieuws bondig samen
   - Vermeld de bron

2. NEDERLANDSE CONTEXT (2-3 alineas)  
   - Plaats in Nederlandse elektrische step markt context
   - Relatie tot SELANA Alpha (€1.900, enige goedgekeurde model)
   - RDW regelgeving, kenteken, verzekering (€6/maand)
   - Vergelijking met huidige situatie

3. IMPACT ANALYSE (3-4 alineas)
   - Wat betekent dit voor consumenten?
   - Gevolgen voor de Nederlandse markt?
   - Prijsimplicaties?
   - Regelgeving impact (boetes €340-350)?

4. TOEKOMST VOORSPELLINGEN (2-3 alineas)
   - Verwachtingen komende 6-12 maanden
   - Mogelijke overheidsreacties
   - EU/internationale impact

5. PRAKTISCH ADVIES (2 alineas)
   - Wat moeten huidige e-step eigenaren weten?
   - Advies voor potentiële kopers

6. FAQ SECTIE (4-5 Q&A)
   - Concrete vragen die lezers zullen hebben
   - Directe, praktische antwoorden

TECHNISCHE VEREISTEN:
- Gebruik HTML formatting (h2, h3, p, ul, li)
- SEO-geoptimaliseerde headers
- Nederlandse taal, professionele toon
- Lengte: 800-1200 woorden
- Voeg een key takeaways box toe
- Eindig met bronvermelding

STIJL:
- Analytisch maar toegankelijk
- Feitelijk met onderbouwing
- Nederlandse elektrische step focus (gebruik "elektrische step" als primaire term, "e-step" als variatie)
- Vergelijkingen met EU waar relevant

Retourneer JSON format:
{
  "title": "Pakkende titel die de analyse benadrukt (niet alleen nieuws herhaling)",
  "excerpt": "150-woord samenvatting van je analyse",
  "content": "Volledige HTML artikel content",
  "category": "Nieuws",
  "tags": ["5-7", "relevante", "tags", "inclusief", "nederlandse", "termen"],
  "keyInsights": ["3-5 belangrijkste inzichten uit je analyse"],
  "imagePrompt": "Beschrijving voor een professionele afbeelding die de impact/analyse visualiseert (Nederlandse context)"
}
`;

  try {
    const response = await model.generateContent(analysisPrompt);
    const responseText = response.response.text().trim();
    
    // Clean up response - remove markdown code blocks if present
    const cleanResponse = responseText.replace(/```json\s*|\s*```/g, '').trim();
    
    const result = JSON.parse(cleanResponse);
    
    return {
      ...result,
      slug: generateSlug(result.title),
      author: "Iwan",
      date: new Date().toISOString().split('T')[0],
      readTime: calculateReadTime(result.content),
      featured: newsArticle.priority >= 5,
      published: true,
      metadata: {
        basedOnNews: true,
        originalUrl: newsArticle.url,
        originalSource: newsArticle.source,
        originalTitle: newsArticle.title,
        analysisGenerated: new Date().toISOString(),
        priority: newsArticle.priority,
        generationMethod: 'automated-news-analysis'
      }
    };
  } catch (error) {
    console.error(`Error generating analysis for "${newsArticle.title}":`, error.message);
    throw error;
  }
};

const generateImageWithGemini = async (prompt, title) => {
  // For now, return a working Unsplash image
  // In a full implementation, you'd generate the actual image
  const slug = generateSlug(title);
  const imageName = `${slug}.webp`;
  
  console.log(`🖼️ Image needed: ${imageName}`);
  console.log(`   Prompt: ${prompt.substring(0, 100)}...`);
  
  // TODO: Implement actual image generation
  // Return working Unsplash image for now
  return "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop&crop=center&q=80";
};

const addArticleToFile = async (article) => {
  const articlesPath = path.join(__dirname, '../src/data/blog/articles.ts');
  
  try {
    let articlesContent = await fs.readFile(articlesPath, 'utf8');
    
    // Find the insertion point (after the array declaration)
    const insertPoint = articlesContent.indexOf('export const blogArticles: BlogArticle[] = [') + 
                       'export const blogArticles: BlogArticle[] = ['.length;
    
    if (insertPoint === -1) {
      throw new Error('Could not find insertion point in articles.ts');
    }
    
    // Generate the new article object
    const newArticle = `
  // 🆕 AUTO-GENERATED ARTICLE - ${new Date().toISOString().split('T')[0]}
  {
    id: ${Date.now()}, // Temporary ID, should be replaced with proper ID management
    title: ${JSON.stringify(article.title)},
    slug: ${JSON.stringify(article.slug)},
    excerpt: ${JSON.stringify(article.excerpt)},
    author: ${JSON.stringify(article.author)},
    date: ${JSON.stringify(article.date)},
    category: ${JSON.stringify(article.category)},
    tags: ${JSON.stringify(article.tags)},
    image: ${JSON.stringify(article.image)},
    featured: ${article.featured},
    readTime: ${JSON.stringify(article.readTime)},
    published: ${article.published},
    content: \`${article.content.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`
  },`;
    
    // Insert the new article
    const newContent = articlesContent.slice(0, insertPoint) + 
                      newArticle + 
                      articlesContent.slice(insertPoint);
    
    await fs.writeFile(articlesPath, newContent, 'utf8');
    console.log(`✅ Article added to articles.ts: ${article.title}`);
    
  } catch (error) {
    console.error('Error adding article to file:', error.message);
    throw error;
  }
};

const runPipeline = async (maxArticles = 2, minPriority = 4) => {
  console.log('🚀 Starting News-to-Blog Pipeline...\n');
  
  // 1. Monitor news feeds
  const relevantNews = await monitorNews();
  
  // 2. Filter high-priority news
  const highPriorityNews = relevantNews
    .filter(article => article.priority >= minPriority)
    .slice(0, maxArticles);

  console.log(`\n🎯 Processing ${highPriorityNews.length} high-priority articles...\n`);

  if (highPriorityNews.length === 0) {
    console.log('📭 No high-priority news to process today.');
    return [];
  }

  const generatedArticles = [];

  // 3. Generate analysis articles
  for (const newsItem of highPriorityNews) {
    try {
      console.log(`\n🔬 Generating analysis for: ${newsItem.title}`);
      
      const analysisArticle = await generateAnalysisArticle(newsItem);
      
      // Check for duplicates before proceeding
      const duplicateCheck = await checkForDuplicates(newsItem, analysisArticle.title);
      if (duplicateCheck.isDuplicate) {
        console.log(`🚫 Skipping duplicate: ${duplicateCheck.reason}`);
        continue;
      }
      console.log(`✅ No duplicates found for: ${analysisArticle.title}`);
      
      // Generate image
      analysisArticle.image = await generateImageWithGemini(
        analysisArticle.imagePrompt,
        analysisArticle.title
      );
      
      // Add to articles file
      await addArticleToFile(analysisArticle);
      
      generatedArticles.push(analysisArticle);
      
      console.log(`✅ Generated: ${analysisArticle.title}`);
      console.log(`   Slug: ${analysisArticle.slug}`);
      console.log(`   Read time: ${analysisArticle.readTime}`);
      
    } catch (error) {
      console.error(`❌ Error processing "${newsItem.title}":`, error.message);
    }
  }

  console.log(`\n🎉 Pipeline completed! Generated ${generatedArticles.length} articles.`);
  return generatedArticles;
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const maxArticles = parseInt(process.argv[2]) || 2;
  const minPriority = parseInt(process.argv[3]) || 4;
  
  runPipeline(maxArticles, minPriority)
    .then(articles => {
      console.log('\n📊 Final Summary:');
      articles.forEach(article => {
        console.log(`   📄 ${article.title}`);
        console.log(`   🏷️ Tags: ${article.tags.join(', ')}`);
        console.log(`   📰 Based on: ${article.metadata.originalSource}\n`);
      });
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Pipeline failed:', error.message);
      process.exit(1);
    });
}

export { runPipeline };
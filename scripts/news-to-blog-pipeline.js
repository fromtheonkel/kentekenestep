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
    .substring(0, 60)
    .replace(/^-|-$/g, '');
};

const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute)) + ' min';
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
Je bent een expert Nederlandse e-step journalist voor KentekenEstep.nl. Schrijf een diepgaande analyse artikel gebaseerd op dit nieuws:

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
   - Plaats in Nederlandse e-step markt context
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
- Nederlandse e-step focus
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
  // For now, return a placeholder path
  // In a full implementation, you'd generate the actual image
  const slug = generateSlug(title);
  const imageName = `${slug}.webp`;
  
  console.log(`🖼️ Image needed: ${imageName}`);
  console.log(`   Prompt: ${prompt.substring(0, 100)}...`);
  
  // TODO: Implement actual image generation
  // For now, return path to a default image
  return `/images/news-default.webp`;
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
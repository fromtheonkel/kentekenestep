#!/usr/bin/env node
// News Monitor for E-Step related content

import { GoogleGenerativeAI } from '@google/generative-ai';
import https from 'https';
import { JSDOM } from 'jsdom';
import { config } from 'dotenv';

// Load environment variables from .env.local
config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// RSS feeds are more reliable than HTML scraping
const RSS_SOURCES = [
  {
    name: 'NU.nl Binnenland',
    url: 'https://www.nu.nl/rss/Binnenland',
    type: 'rss'
  },
  {
    name: 'NOS Binnenland', 
    url: 'https://feeds.nos.nl/nosnieuwsbinnenland',
    type: 'rss'
  },
  {
    name: 'RTL Nieuws',
    url: 'https://www.rtlnieuws.nl/rss.xml',
    type: 'rss'
  },
  {
    name: 'Telegraaf Binnenland',
    url: 'https://www.telegraaf.nl/rss/binnenland',
    type: 'rss'
  }
];

// Fallback manual news sources with working selectors
const MANUAL_SOURCES = [
  {
    name: 'RDW Nieuws 2025',
    url: 'https://www.rdw.nl/nieuws/2025/',
    selector: 'article h2 a, .article-title a, h3 a, .news-item a'
  },
  {
    name: 'NOS Homepage',
    url: 'https://nos.nl',
    selector: 'article h2 a, .list-item h2 a, .article-title a'
  },
  {
    name: 'NU.nl Homepage',
    url: 'https://www.nu.nl',
    selector: 'article h2 a, .list-item h2 a, h3 a'
  }
];

const fetchPage = (url) => {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { 
      headers: { 
        'User-Agent': 'Mozilla/5.0 (compatible; KentekenEstep-NewsBot/1.0)'
      } 
    }, (response) => {
      let data = '';
      
      response.on('data', chunk => data += chunk);
      response.on('end', () => {
        if (response.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`HTTP ${response.statusCode}: ${url}`));
        }
      });
    });
    
    request.on('error', reject);
    request.setTimeout(10000, () => {
      request.destroy();
      reject(new Error(`Timeout: ${url}`));
    });
  });
};

const parseRSSFeed = (xml, source) => {
  try {
    const dom = new JSDOM(xml, { contentType: 'text/xml' });
    const document = dom.window.document;
    
    const articles = [];
    const items = document.querySelectorAll('item');
    
    items.forEach((item, index) => {
      if (index >= 20) return; // Limit to first 20 per RSS feed
      
      const title = item.querySelector('title')?.textContent?.trim();
      const link = item.querySelector('link')?.textContent?.trim();
      const description = item.querySelector('description')?.textContent?.trim();
      const pubDate = item.querySelector('pubDate')?.textContent?.trim();
      
      if (title && link) {
        articles.push({
          title,
          url: link,
          summary: description?.replace(/<[^>]*>/g, '').substring(0, 200) || '', // Strip HTML tags
          date: pubDate || '',
          source: source.name
        });
      }
    });
    
    return articles;
  } catch (error) {
    console.error(`Error parsing RSS from ${source.name}:`, error.message);
    return [];
  }
};

const extractArticles = (html, source) => {
  try {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const articles = [];
    const elements = document.querySelectorAll(source.selector);
    
    elements.forEach((element, index) => {
      if (index >= 15) return; // Limit to first 15 per source
      
      const title = element.textContent?.trim();
      const href = element.getAttribute('href');
      
      if (title && href && title.length > 10) {
        let url = href;
        if (!href.startsWith('http')) {
          if (source.name.includes('RDW')) {
            url = href.startsWith('/') ? `https://www.rdw.nl${href}` : `https://www.rdw.nl/${href}`;
          } else if (source.name.includes('NOS')) {
            url = href.startsWith('/') ? `https://nos.nl${href}` : `https://nos.nl/${href}`;
          } else {
            url = href.startsWith('/') ? `https://www.nu.nl${href}` : `https://www.nu.nl/${href}`;
          }
        }
                   
        articles.push({
          title,
          url,
          summary: '',
          date: '',
          source: source.name
        });
      }
    });
    
    return articles;
  } catch (error) {
    console.error(`Error extracting from ${source.name}:`, error.message);
    return [];
  }
};

const assessRelevance = async (article) => {
  try {
    // Use more stable model and add retry logic
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `Beoordeel of dit nieuwsartikel relevant is voor KentekenEstep.nl (Nederlandse e-step website):

Titel: ${article.title}
Samenvatting: ${article.summary}
Bron: ${article.source}

Relevant als het gaat over:
- Elektrische steps, e-steps, e-scooters, step, elektrische mobiliteit
- Nederlandse regelgeving (RDW, kenteken, verzekering, boetes)
- Europese micromobiliteit regelgeving
- Nieuwe e-step modellen/merken (SELANA, NIU, Segway, etc.)
- Ongevallen/veiligheid met steps
- Technologische ontwikkelingen in micromobiliteit
- Deelsteps, shared mobility
- Verkeersveiligheid gerelateerd aan steps

NIET relevant:
- Algemene fiets nieuws zonder e-step context
- Auto/motor nieuws
- Algemene verkeersveiligheid zonder e-step focus

Antwoord ALLEEN met dit JSON formaat:
{"relevant": true, "priority": 4, "reason": "korte uitleg", "keywords": ["term1", "term2"]}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim();
    
    // Clean up response - remove markdown code blocks if present
    const cleanResponse = responseText.replace(/```json\s*|\s*```/g, '').trim();
    
    const assessment = JSON.parse(cleanResponse);
    
    // Add delay to respect rate limits (6 requests per minute = 10 second delay)
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    return assessment;
  } catch (error) {
    console.error(`Error assessing ${article.title}:`, error.message);
    
    // If rate limited, wait longer
    if (error.message.includes('429') || error.message.includes('quota')) {
      console.log('   ⏳ Rate limited, waiting 60 seconds...');
      await new Promise(resolve => setTimeout(resolve, 60000));
    }
    
    return { relevant: false, priority: 1, reason: "Assessment failed", keywords: [] };
  }
};

const monitorNews = async () => {
  console.log('🔍 E-Step News Monitor gestart...\n');
  
  const allArticles = [];
  
  // First try RSS feeds (more reliable)
  console.log('📰 Fetching from RSS feeds...\n');
  
  for (const source of RSS_SOURCES) {
    try {
      console.log(`📡 ${source.name}...`);
      const xml = await fetchPage(source.url);
      const articles = parseRSSFeed(xml, source);
      allArticles.push(...articles);
      console.log(`   ✅ Gevonden: ${articles.length} artikelen`);
      
      // Add delay to be respectful
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.log(`   ❌ RSS fout: ${error.message}`);
    }
  }
  
  console.log(`\n📊 RSS totaal: ${allArticles.length} artikelen`);
  console.log('\n📰 Fetching from manual sources...\n');
  
  // Fallback to manual scraping
  for (const source of MANUAL_SOURCES) {
    try {
      console.log(`📡 ${source.name}...`);
      const html = await fetchPage(source.url);
      const articles = extractArticles(html, source);
      allArticles.push(...articles);
      console.log(`   ✅ Gevonden: ${articles.length} artikelen`);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.log(`   ❌ Scraping fout: ${error.message}`);
    }
  }
  
  console.log(`\n📊 Totaal gevonden: ${allArticles.length} artikelen`);
  console.log('🤖 Beoordelen relevantie...\n');
  
  const relevantArticles = [];
  
  console.log(`🔍 Voorbeelden van gevonden artikelen:`);
  allArticles.slice(0, 10).forEach((article, i) => {
    const isRelevant = article.title.toLowerCase().includes('helmplicht') && 
                      (article.title.toLowerCase().includes('e-bike') || article.title.toLowerCase().includes('step'));
    const relevantMarker = isRelevant ? ' 🎯' : '';
    console.log(`${i + 1}. ${article.title} (${article.source})${relevantMarker}`);
  });
  console.log('');

  // Smart selection: prioritize potentially relevant articles
  const potentiallyRelevant = allArticles.filter(article => {
    const title = article.title.toLowerCase();
    const summary = article.summary.toLowerCase();
    return title.includes('helmplicht') || title.includes('e-step') || title.includes('e-bike') || 
           title.includes('rdw') || title.includes('kenteken') || title.includes('verzekering') ||
           summary.includes('step') || summary.includes('e-bike');
  });
  
  // Take 3 potentially relevant + 2 random articles
  const articlesToProcess = [
    ...potentiallyRelevant.slice(0, 3),
    ...allArticles.filter(a => !potentiallyRelevant.includes(a)).slice(0, 2)
  ].slice(0, 5);
  
  console.log(`📋 Processing ${articlesToProcess.length} articles (${potentiallyRelevant.length} potentially relevant)`);
  console.log('');
  
  for (const article of articlesToProcess) {
    const assessment = await assessRelevance(article);
    
    console.log(`🤖 Beoordeling: "${article.title.substring(0, 50)}..." - ${assessment.relevant ? 'RELEVANT' : 'NIET relevant'} (P${assessment.priority})`);
    console.log(`   💭 ${assessment.reason}`);
    
    if (assessment.relevant && assessment.priority >= 3) {
      relevantArticles.push({
        ...article,
        ...assessment
      });
      
      console.log(`✅ Relevant (P${assessment.priority}): ${article.title}`);
      console.log(`   📍 ${article.source} - ${assessment.reason}`);
      console.log(`   🔗 ${article.url}`);
    }
    console.log('');
  }
  
  // Sort by priority
  relevantArticles.sort((a, b) => b.priority - a.priority);
  
  console.log(`\n📈 Resultaat: ${relevantArticles.length} relevante artikelen gevonden`);
  
  if (relevantArticles.length > 0) {
    console.log('\n🎯 Top prioriteiten:');
    relevantArticles.slice(0, 5).forEach((article, index) => {
      console.log(`${index + 1}. [P${article.priority}] ${article.title}`);
      console.log(`   Keywords: ${article.keywords.join(', ')}`);
    });
  } else {
    console.log('\n📭 Geen relevante nieuws gevonden vandaag.');
  }
  
  return relevantArticles;
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  monitorNews()
    .then(articles => {
      process.exit(articles.filter(a => a.priority >= 4).length > 0 ? 0 : 1);
    })
    .catch(error => {
      console.error('❌ Monitor failed:', error.message);
      process.exit(1);
    });
}

export { monitorNews };
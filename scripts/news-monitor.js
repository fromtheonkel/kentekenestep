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
        const url = href.startsWith('http') ? href : 
                   href.startsWith('/') ? `https://${source.name.toLowerCase().includes('nos') ? 'nos.nl' : 'nu.nl'}${href}` : 
                   `https://${source.name.toLowerCase().includes('nos') ? 'nos.nl' : 'nu.nl'}/${href}`;
                   
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
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    
    const prompt = `
Beoordeel of dit nieuwsartikel relevant is voor KentekenEstep.nl (Nederlandse e-step website):

Titel: ${article.title}
Samenvatting: ${article.summary}
Bron: ${article.source}

Relevant als het gaat over:
- E-steps, elektrische steps, e-scooters, step, elektrische mobiliteit
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

Antwoord alleen met JSON:
{
  "relevant": true/false,
  "priority": 1-5,
  "reason": "korte uitleg waarom wel/niet relevant",
  "keywords": ["gevonden", "relevante", "termen"]
}
`;

    const result = await model.generateContent(prompt);
    return JSON.parse(result.response.text());
  } catch (error) {
    console.error(`Error assessing ${article.title}:`, error.message);
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
  allArticles.slice(0, 5).forEach((article, i) => {
    console.log(`${i + 1}. ${article.title} (${article.source})`);
  });
  console.log('');

  for (const article of allArticles.slice(0, 20)) { // Limit to prevent API overuse
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
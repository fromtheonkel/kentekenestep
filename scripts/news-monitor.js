#!/usr/bin/env node
// News Monitor for E-Step related content

import { GoogleGenerativeAI } from '@google/generative-ai';
import https from 'https';
import { JSDOM } from 'jsdom';
import { config } from 'dotenv';

// Load environment variables from .env.local
config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const NEWS_SOURCES = [
  {
    name: 'NU.nl',
    urls: [
      'https://www.nu.nl/zoeken?q=rdw+goedgekeurde+step',
      'https://www.nu.nl/zoeken?q=e-step+rdw',
      'https://www.nu.nl/zoeken?q=elektrische+step+rdw',
      'https://www.nu.nl/zoeken?q=elektrische+step'
    ],
    selector: 'article, .list-item, .article'
  },
  {
    name: 'NOS.nl', 
    urls: [
      'https://nos.nl/zoeken?q=rdw+step',
      'https://nos.nl/zoeken?q=e-step+rdw',
      'https://nos.nl/zoeken?q=elektrische+step+rdw',
      'https://nos.nl/zoeken?q=e-step'
    ],
    selector: '.search-result-item, article, .article'
  },
  {
    name: 'AD.nl',
    urls: [
      'https://www.ad.nl/zoeken?q=rdw+goedgekeurde+step',
      'https://www.ad.nl/zoeken?q=e-step+rdw',
      'https://www.ad.nl/zoeken?q=elektrische+step+rdw',
      'https://www.ad.nl/zoeken?q=elektrische+step'
    ],
    selector: '.teaser, article, .article'
  },
  {
    name: 'Rijksoverheid',
    url: 'https://www.rijksoverheid.nl/onderwerpen/voertuigen-op-de-weg',
    selector: '.news-item, article'
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

const extractArticles = (html, source) => {
  try {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const articles = [];
    const elements = document.querySelectorAll('article, .article, .news-item, .teaser, .list-item');
    
    elements.forEach((element, index) => {
      if (index >= 10) return; // Limit to first 10 per source
      
      const titleEl = element.querySelector('h1, h2, h3, h4, .title, .headline, a[title]');
      const linkEl = element.querySelector('a[href]') || titleEl?.closest('a');
      const summaryEl = element.querySelector('.summary, .excerpt, .intro, p');
      const dateEl = element.querySelector('time, .date, .timestamp');
      
      if (titleEl && linkEl) {
        const title = titleEl.textContent?.trim();
        const href = linkEl.getAttribute('href');
        
        if (title && href) {
          articles.push({
            title,
            url: href.startsWith('http') ? href : `https://${source.name.toLowerCase().replace('.nl', '')}.nl${href}`,
            summary: summaryEl?.textContent?.trim()?.substring(0, 200) || '',
            date: dateEl?.textContent?.trim() || '',
            source: source.name
          });
        }
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
  
  for (const source of NEWS_SOURCES) {
    console.log(`📡 Fetching from ${source.name}...`);
    let sourceArticles = [];
    
    // Handle sources with multiple URLs
    const urls = source.urls || [source.url];
    
    for (const url of urls) {
      try {
        console.log(`   📡 Checking: ${url}`);
        const html = await fetchPage(url);
        const articles = extractArticles(html, source);
        sourceArticles.push(...articles);
        console.log(`   ✅ Gevonden: ${articles.length} artikelen`);
        
        // Add small delay to be respectful
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        console.log(`   ❌ Fout: ${error.message}`);
      }
    }
    
    console.log(`📊 ${source.name} totaal: ${sourceArticles.length} artikelen`);
    allArticles.push(...sourceArticles);
    console.log('');
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
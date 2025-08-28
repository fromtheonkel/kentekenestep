#!/usr/bin/env node
// Quick News Test

import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from 'dotenv';

config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const testNewsAnalysis = async () => {
  console.log('🔍 Testing news analysis capability...\n');
  
  // Fake news item for testing
  const testNews = {
    title: "Minister kondigt nieuwe boetes aan voor illegale e-steps",
    summary: "Vanaf 2025 krijgen bestuurders van niet-goedgekeurde e-steps boetes tot €500",
    source: "NU.nl",
    url: "https://example.com/fake-news"
  };
  
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        maxOutputTokens: 1000
      }
    });

    console.log('📰 Test nieuws:');
    console.log(`   Titel: ${testNews.title}`);
    console.log(`   Samenvatting: ${testNews.summary}`);
    console.log(`   Bron: ${testNews.source}\n`);

    console.log('🤖 AI Analyse genereren...\n');

    const analysisPrompt = `
Je bent een expert Nederlandse e-step journalist voor KentekenEstep.nl.

ORIGINEEL NIEUWS:
Titel: ${testNews.title}
Samenvatting: ${testNews.summary}
Bron: ${testNews.source}

Schrijf een korte analyse (200 woorden) die ingaat op:
1. Nederlandse context (SELANA Alpha €1.900, RDW goedkeuring)
2. Impact voor consumenten
3. Vergelijking met huidige boetes (€340-350)

Formatteer als JSON:
{
  "title": "Analyserende titel",
  "excerpt": "Korte samenvatting",
  "keyPoints": ["punt 1", "punt 2", "punt 3"]
}
`;

    const response = await model.generateContent(analysisPrompt);
    let responseText = response.response.text();
    
    // Clean up response (remove code blocks if present)
    responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    const result = JSON.parse(responseText);
    
    console.log('✅ Gegenereerde analyse:');
    console.log(`📄 Titel: ${result.title}`);
    console.log(`📝 Excerpt: ${result.excerpt}`);
    console.log(`🔑 Key Points:`);
    result.keyPoints.forEach((point, i) => {
      console.log(`   ${i + 1}. ${point}`);
    });
    
    console.log('\n🎉 News analysis werkt perfect!');
    console.log('💡 Klaar voor volledige automatisering!');
    
  } catch (error) {
    console.error('❌ Analysis test failed:', error.message);
  }
};

testNewsAnalysis();
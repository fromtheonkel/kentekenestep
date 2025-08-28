#!/usr/bin/env node
// Simple Gemini API Test

import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

const testGemini = async () => {
  try {
    console.log('🧪 Testing Gemini API connection...');
    
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY not found in .env.local');
    }
    
    console.log('✅ API Key found');
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    console.log('🚀 Sending test request...');
    
    const result = await model.generateContent('Test: Zeg hallo in het Nederlands en leg uit wat een e-step is in 1 zin.');
    
    console.log('✅ API Response:');
    console.log(result.response.text());
    
    console.log('\n🎉 Gemini API werkt perfect!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    
    if (error.message.includes('API_KEY_INVALID')) {
      console.log('\n💡 Check je API key op: https://makersuite.google.com/app/apikey');
    }
    
    if (error.message.includes('PERMISSION_DENIED')) {
      console.log('\n💡 Mogelijk moet je billing inschakelen voor de Gemini API');
    }
  }
};

testGemini();
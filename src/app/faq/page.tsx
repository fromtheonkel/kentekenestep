"use client";

import React from 'react';
import { HelpCircle, ChevronDown, ChevronRight, AlertCircle, CheckCircle, Info, Zap } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  category: 'algemeen' | 'rdw' | 'technisch' | 'financieel';
}

const faqs: FAQItem[] = [
  {
    category: 'rdw',
    question: 'Wat is de status van RDW goedkeuring voor e-steps?',
    answer: 'Momenteel is alleen de SELANA Alpha officieel goedgekeurd door de RDW. Dit betekent dat dit het enige model is waarmee je legaal op de openbare weg mag rijden. Andere fabrikanten werken aan goedkeuring van hun modellen.'
  },
  {
    category: 'financieel',
    question: 'Hoeveel kost een RDW goedgekeurde e-step?',
    answer: 'De SELANA Alpha kost €1.900 inclusief BTW. Daarnaast heb je een verzekering nodig die ongeveer €6 per maand kost. Totaal ben je dus ongeveer €2.000 aan aanschafkosten kwijt plus lopende verzekeringspremie.'
  },
  {
    category: 'rdw',
    question: 'Heb ik een rijbewijs nodig voor een RDW goedgekeurde e-step?',
    answer: 'Ja, voor RDW goedgekeurde e-steps heb je minimaal een bromfietscertificaat (AM) nodig. Als je een geldig auto rijbewijs (B) hebt, dan mag je ook op een RDW goedgekeurde e-step rijden.'
  },
  {
    category: 'financieel',
    question: 'Is een verzekering verplicht?',
    answer: 'Ja, voor RDW goedgekeurde e-steps is een WA-verzekering verplicht, net zoals bij brommers. De kosten zijn ongeveer €6 per maand. Zonder verzekering mag je niet op de openbare weg rijden.'
  },
  {
    category: 'technisch',
    question: 'Wat is het verschil tussen RDW goedgekeurd en niet-goedgekeurd?',
    answer: 'RDW goedgekeurde e-steps mogen op fietspaden en wegen rijden, hebben een kenteken en zijn verzekerd. Niet-goedgekeurde e-steps mogen alleen op privéterrein gebruikt worden en zijn illegaal op openbare wegen.'
  },
  {
    category: 'rdw',
    question: 'Waar mag ik rijden met een RDW goedgekeurde e-step?',
    answer: 'Met een RDW goedgekeurde e-step mag je op fietspaden, fietsstroken en wegen waar max 50 km/h geldt. Je mag NIET op de stoep, in voetgangerszones of op snelwegen.'
  },
  {
    category: 'technisch',
    question: 'Hoe lang gaat de batterij mee?',
    answer: 'De SELANA Alpha heeft een bereik van 45-60 km per lading, afhankelijk van je gewicht, rijstijl en weersomstandigheden. Opladen duurt ongeveer 4-6 uur.'
  },
  {
    category: 'algemeen',
    question: 'Wanneer komen er meer goedgekeurde modellen?',
    answer: 'Verschillende fabrikanten werken aan RDW goedkeuring. NIU, Segway en andere merken hebben aanvragen lopend. Verwacht wordt dat er in 2025 meer modellen bijkomen, maar exacte data zijn nog niet bekend.'
  },
  {
    category: 'financieel',
    question: 'Kan ik een e-step leasen in plaats van kopen?',
    answer: 'Ja, er zijn lease-opties beschikbaar voor de SELANA Alpha. Lease-tarieven variëren, maar rekenen op ongeveer €60-80 per maand inclusief verzekering en onderhoud.'
  },
  {
    category: 'technisch',
    question: 'Welke veiligheidsuitrusting is verplicht?',
    answer: 'Een helm is verplicht voor RDW goedgekeurde e-steps. De step moet uitgerust zijn met verlichting, richtingaanwijzers en een bel. Reflecterende kleding is aanbevolen maar niet verplicht.'
  },
  {
    category: 'rdw',
    question: 'Hoe krijg ik een kenteken voor mijn e-step?',
    answer: 'Het kenteken wordt geregeld door de dealer bij aankoop van een RDW goedgekeurd model. Je hoeft dit niet zelf aan te vragen bij de RDW.'
  },
  {
    category: 'algemeen',
    question: 'Mag ik passagiers meenemen?',
    answer: 'Nee, RDW goedgekeurde e-steps zijn ontworpen voor één persoon. Passagiers meenemen is niet toegestaan en kan gevaarlijk zijn.'
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('alle');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    { id: 'alle', label: 'Alle vragen', icon: HelpCircle, color: 'slate' },
    { id: 'rdw', label: 'RDW & Regelgeving', icon: CheckCircle, color: 'green' },
    { id: 'financieel', label: 'Prijzen & Verzekering', icon: AlertCircle, color: 'orange' },
    { id: 'technisch', label: 'Technische vragen', icon: Zap, color: 'blue' },
    { id: 'algemeen', label: 'Algemeen', icon: Info, color: 'purple' }
  ];

  const filteredFaqs = selectedCategory === 'alle' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-100 p-4 rounded-full">
              <HelpCircle className="h-12 w-12 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Veelgestelde Vragen</h1>
          <p className="text-xl text-slate-600 mb-8">
            Antwoorden op de meest gestelde vragen over RDW goedgekeurde e-steps
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Link 
              href="/rdw-info" 
              className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
            >
              📋 RDW Regelgeving
            </Link>
            <Link 
              href="/vergelijken" 
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
            >
              🔍 Vergelijk E-Steps
            </Link>
            <Link 
              href="/contact" 
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
            >
              📞 Contact
            </Link>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isSelected 
                      ? 'bg-orange-500 text-white shadow-lg' 
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div key={index} className="bg-white rounded-lg shadow border overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                      faq.category === 'rdw' ? 'bg-green-500' :
                      faq.category === 'financieel' ? 'bg-orange-500' :
                      faq.category === 'technisch' ? 'bg-blue-500' :
                      'bg-purple-500'
                    }`} />
                    <h3 className="font-semibold text-slate-900 text-lg">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {isOpen ? (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-4">
                    <div className="pl-6 border-l-2 border-slate-100">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-orange-900 mb-4">Vraag niet beantwoord?</h2>
          <p className="text-orange-700 mb-6">
            Staat jouw vraag er niet tussen? Neem gerust contact met ons op!
          </p>
          <Link 
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-colors inline-block"
          >
            Contact opnemen
          </Link>
        </div>

        {/* Popular Topics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Populaire onderwerpen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">RDW Goedkeuring</h3>
              <p className="text-slate-600 text-sm mb-4">
                Alles over officiële goedkeuring en regelgeving
              </p>
              <Link href="/rdw-info" className="text-green-600 hover:text-green-700 font-medium text-sm">
                Lees meer →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <AlertCircle className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Verzekeringen</h3>
              <p className="text-slate-600 text-sm mb-4">
                Verplichte WA-verzekering en kosten
              </p>
              <Link href="/vergelijken" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                Vergelijk →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Zap className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Technische Specs</h3>
              <p className="text-slate-600 text-sm mb-4">
                Bereik, snelheid en technische details
              </p>
              <Link href="/vergelijken" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Bekijk specs →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">KentekenEstep.nl</div>
              <p className="text-slate-400">
                Onafhankelijke informatie over e-steps en RDW regelgeving
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Vergelijken</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/vergelijken" className="hover:text-white">RDW Goedgekeurd</Link></li>
                <li><Link href="/vergelijken" className="hover:text-white">Top 3 Modellen</Link></li>
                <li><Link href="/vergelijken" className="hover:text-white">Prijsvergelijking</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Informatie</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/rdw-info" className="hover:text-white">E-Step Regelgeving</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 KentekenEstep.nl. Affiliate links kunnen commissie opleveren.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
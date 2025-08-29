"use client";

import React, { useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, Car, FileText, HelpCircle, ExternalLink, Calendar, Euro, Scale } from 'lucide-react';

const RDWInfoPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Welke e-steps zijn legaal op de openbare weg?",
      answer: "Sinds 1 juli 2025 is alleen de SELANA Alpha officieel goedgekeurd door de RDW voor gebruik op de openbare weg. Daarnaast zijn er 4 oudere 'bijzondere bromfietsen' die ook mogen: Yedoo Mezeq, Kickbike Cruise, Kickbike Fat Max en Kickbike Luxury. Alle andere e-steps zijn niet toegestaan op de openbare weg.",
      category: "wetgeving"
    },
    {
      question: "Hoe herken ik een legale e-step?",
      answer: "Een legale e-step heeft een blauw kenteken dat begint met de letter 'E'. Dit kenteken wordt uitgegeven door de RDW en toont aan dat de e-step officieel is goedgekeurd. Zonder dit kenteken is de e-step niet toegestaan op straat.",
      category: "herkenning"
    },
    {
      question: "Wat kost een kenteken voor mijn e-step?",
      answer: "Het aanvragen van een kenteken kost €18,- bij de RDW. Daarbovenop komen nog de kosten voor de kentekenplaat zelf (ongeveer €15-25). Totaal ben je dus circa €35-45 kwijt voor een volledig kenteken.",
      category: "kosten"
    },
    {
      question: "Moet ik een rijbewijs hebben voor een legale e-step?",
      answer: "Nee, voor RDW goedgekeurde e-steps (bijzondere bromfietsen) is geen rijbewijs vereist. Je moet wel minimaal 16 jaar oud zijn om er mee te mogen rijden.",
      category: "eisen"
    },
    {
      question: "Is verzekering verplicht voor mijn e-step?",
      answer: "Ja, een WA-verzekering is verplicht voor alle legale e-steps. Zonder verzekering ben je niet gedekt voor schade aan anderen en kun je een boete krijgen. De verzekering kost ongeveer €6-10 per maand.",
      category: "verzekering"
    },
    {
      question: "Waar mag ik rijden met een legale e-step?",
      answer: "Met een RDW goedgekeurde e-step mag je op het fietspad, bromfietspad of op de rijbaan (als er geen fietspad is). Je mag NIET op de stoep rijden - die is alleen voor voetgangers. De maximumsnelheid is 25 km/u.",
      category: "verkeer"
    },
    {
      question: "Wat gebeurt er als ik met een illegale e-step wordt betrapt?",
      answer: "De politie kan een boete uitschrijven tot €400 en je e-step in beslag nemen. Daarnaast ben je niet verzekerd voor eventuele schade. Dit geldt voor alle e-steps zonder RDW goedkeuring en kenteken.",
      category: "boetes"
    },
    {
      question: "Kunnen bestaande e-steps nog goedgekeurd worden?",
      answer: "Nee, alleen nieuwe modellen die specifiek zijn ontworpen volgens RDW eisen kunnen goedkeuring krijgen. Bestaande e-steps die je al hebt gekocht kunnen niet alsnog worden goedgekeurd. Deze mag je alleen op eigen, afgesloten terrein gebruiken.",
      category: "bestaand"
    },
    {
      question: "Wat zijn de technische eisen voor RDW goedkeuring?",
      answer: "RDW goedgekeurde e-steps moeten voldoen aan strenge eisen: maximaal 25 km/u, voor- en achterremmen, richtingaanwijzers, verlichting, 10-inch luchtbanden, VIN-nummer, en maximaal 4kW motorvermogen. Ze moeten ook uitgebreide veiligheidstesten doorstaan.",
      category: "technisch"
    },
    {
      question: "Komen er binnenkort meer legale e-steps?",
      answer: "Ja, er zijn momenteel 5 fabrikanten die een aanvraag hebben ingediend bij de RDW voor nieuwe e-step modellen. De verwachting is dat er in de komende maanden meer goedgekeurde modellen beschikbaar komen, maar dit proces duurt lang vanwege strenge veiligheidseisen.",
      category: "toekomst"
    },
    {
      question: "Wat is het verschil met e-steps met stepondersteuning?",
      answer: "E-steps met alleen stepondersteuning (zonder gashendel) vallen onder dezelfde regels als e-bikes. Deze mag je wel gebruiken zonder kenteken, maar je moet zelf mee steppen om te blijven rijden. Heeft je e-step zowel stepondersteuning als een gashendel? Dan mag je er niet mee de weg op.",
      category: "types"
    },
    {
      question: "Tot wanneer heb ik tijd om een kenteken aan te vragen?",
      answer: "Voor de 17 eerder aangewezen bijzondere bromfietsen (zoals Yedoo en Kickbike modellen) geldt: je hebt tot 1 juli 2026 om een kenteken aan te vragen. Na deze datum mag je zonder kenteken niet meer de weg op en zijn de kosten hoger (minimaal €116,65).",
      category: "deadline"
    }
  ];

  const categoryColors = {
    wetgeving: "bg-green-50 border-green-200 text-green-800",
    herkenning: "bg-blue-50 border-blue-200 text-blue-800", 
    kosten: "bg-yellow-50 border-yellow-200 text-yellow-800",
    eisen: "bg-purple-50 border-purple-200 text-purple-800",
    verzekering: "bg-orange-50 border-orange-200 text-orange-800",
    verkeer: "bg-indigo-50 border-indigo-200 text-indigo-800",
    boetes: "bg-red-50 border-red-200 text-red-800",
    bestaand: "bg-gray-50 border-gray-200 text-gray-800",
    technisch: "bg-cyan-50 border-cyan-200 text-cyan-800",
    toekomst: "bg-emerald-50 border-emerald-200 text-emerald-800",
    types: "bg-pink-50 border-pink-200 text-pink-800",
    deadline: "bg-violet-50 border-violet-200 text-violet-800"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo_estep_rdw.svg" 
                  alt="KentekenEstep.nl Logo" 
                  width="40" 
                  height="40" 
                  className="h-10 w-auto"
                />
                <div className="text-2xl font-bold text-slate-700">KentekenEstep.nl</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-slate-600 hover:text-slate-800">Home</a>
              <a href="/vergelijken" className="text-slate-600 hover:text-slate-800">Vergelijken</a>
              <a href="#" className="text-slate-600 hover:text-slate-800">RDW Info</a>
              <a href="#" className="text-slate-600 hover:text-slate-800">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            RDW Elektrische Step Regelgeving
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200">
            Alles wat je moet weten over legale elektrische steps in Nederland
          </p>
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 text-blue-800">
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6" />
              <p className="font-medium">
                Sinds 1 juli 2025: Kentekenplicht voor bijzondere bromfietsen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Huidige Status E-Steps in Nederland
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">1 Legaal Model</h3>
              <p className="text-green-700">SELANA Alpha met RDW typegoedkeuring</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <img 
                src="/logo_estep_rdw.svg" 
                alt="E-Step Logo" 
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-blue-800 mb-2">4 Bijzondere Bromfietsen</h3>
              <p className="text-blue-700">Yedoo en Kickbike modellen toegestaan</p>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-800 mb-2">Alle Andere Illegaal</h3>
              <p className="text-red-700">Alleen eigen terrein toegestaan</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-yellow-800 mb-2">Belangrijke Update</h3>
                <p className="text-yellow-700 mb-3">
                  <strong>1 juli 2025:</strong> Kentekenplicht ingevoerd voor bijzondere bromfietsen. 
                  Alleen RDW goedgekeurde e-steps met kenteken mogen de openbare weg op.
                </p>
                <p className="text-yellow-700">
                  <strong>Deadline:</strong> Eigenaren van eerder toegelaten voertuigen hebben tot 1 juli 2026 om een kenteken aan te vragen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-slate-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Veelgestelde Vragen
            </h2>
            <p className="text-xl text-slate-600">
              Alle antwoorden op basis van officiële RDW informatie
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow border overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${categoryColors[faq.category as keyof typeof categoryColors]}`}>
                      {faq.category}
                    </span>
                    <HelpCircle className={`w-5 h-5 text-slate-400 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Vereisten voor Legale E-Steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <FileText className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-blue-800 mb-3">RDW Typegoedkeuring</h3>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• Nationale typegoedkeuring verplicht</li>
                <li>• Uitgebreide veiligheidstesten</li>
                <li>• VIN-nummer op frame</li>
                <li>• Fabrikant verantwoordelijk</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <Car className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-green-800 mb-3">Kenteken & Verzekering</h3>
              <ul className="text-green-700 space-y-2 text-sm">
                <li>• Blauw kenteken (begint met E)</li>
                <li>• WA-verzekering verplicht</li>
                <li>• Kosten: €18 + kentekenplaat</li>
                <li>• Deadline: 1 juli 2026</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6">
              <Scale className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-purple-800 mb-3">Technische Specificaties</h3>
              <ul className="text-purple-700 space-y-2 text-sm">
                <li>• Max 25 km/u snelheid</li>
                <li>• Voor- en achterremmen</li>
                <li>• Richtingaanwijzers</li>
                <li>• 10-inch luchtbanden</li>
                <li>• Max 4kW motorvermogen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Official Links */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Officiële RDW Bronnen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://www.rdw.nl/paginas/kenteken-aanvragen-voor-uw-bijzondere-bromfiets/e-steps"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex items-center gap-4"
            >
              <ExternalLink className="w-8 h-8 text-blue-600" />
              <div className="text-left">
                <h3 className="font-bold text-slate-900">RDW E-Steps Info</h3>
                <p className="text-slate-600 text-sm">Officiële RDW pagina over e-steps</p>
              </div>
            </a>
            
            <a 
              href="https://www.rdw.nl/paginas/kenteken-aanvragen-voor-uw-bijzondere-bromfiets"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex items-center gap-4"
            >
              <ExternalLink className="w-8 h-8 text-green-600" />
              <div className="text-left">
                <h3 className="font-bold text-slate-900">Kenteken Aanvragen</h3>
                <p className="text-slate-600 text-sm">Kenteken aanvragen bij RDW</p>
              </div>
            </a>
          </div>
          
          <div className="mt-8 text-sm text-slate-600">
            <p>Deze informatie is gebaseerd op officiële RDW bronnen en is bijgewerkt per juli 2025.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">KentekenEstep.nl</div>
              <p className="text-slate-400">
                Onafhankelijke informatie over e-steps en RDW regelgeving
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Informatie</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">RDW Regelgeving</a></li>
                <li><a href="#" className="hover:text-white">Kenteken Aanvragen</a></li>
                <li><a href="#" className="hover:text-white">Verzekering</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/" className="hover:text-white">E-Step Vergelijker</a></li>
                <li><a href="#" className="hover:text-white">RDW Checker</a></li>
                <li><a href="#" className="hover:text-white">Kosten Calculator</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 KentekenEstep.nl. Gebaseerd op officiële RDW informatie.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RDWInfoPage;
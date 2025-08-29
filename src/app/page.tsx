"use client";

import React from 'react';
import LatestBlog from '@/components/LatestBlog';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KentekenEstep.nl",
    "url": "https://kentekenestep.nl",
    "description": "Informatie over RDW goedgekeurde elektrische steps in Nederland",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kentekenestep.nl/vergelijken",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Welke elektrische steps zijn toegestaan in Nederland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alleen door de RDW goedgekeurde elektrische steps mogen op openbare wegen rijden. Momenteel is de SELANA Alpha het enige officieel goedgekeurde model (€1.900)."
          }
        },
        {
          "@type": "Question", 
          "name": "Is een verzekering verplicht voor elektrische steps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, een WA-verzekering is verplicht voor alle elektrische steps in Nederland sinds 2024. De kosten zijn ongeveer €6 per maand."
          }
        },
        {
          "@type": "Question",
          "name": "Heb ik een rijbewijs nodig voor een elektrische step?", 
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Voor RDW goedgekeurde elektrische steps heb je minimaal een bromfietsrijbewijs (AM) nodig. Als je een geldig autorijbewijs (B) hebt, mag je ook rijden."
          }
        }
      ]
    }
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-700 to-slate-900 text-white pt-32 pb-16 relative overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          webkit-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          style={{ 
            WebkitBackfaceVisibility: 'hidden',
            WebkitPerspective: 1000,
            WebkitTransform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden',
            perspective: 1000,
            transform: 'translate3d(0,0,0)'
          }}
        >
          <source src="/video/E_step_op_fietspad_met_kenteken.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Elektrische Steps met <span className="text-orange-400">RDW Goedkeuring!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Een overzicht van goedgekeurde elektrische steps waarmee je nu of binnenkort het fietspad mee op mag
            </p>
            <Link 
              href="/vergelijken"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              Vergelijk Elektrische Steps
            </Link>
          </div>
        </div>
      </section>

      {/* 🆕 BLOG SECTIE - VERPLAATST NAAR TOP */}
      <LatestBlog />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* E-Step Vergelijker Widget */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-orange-50 rounded-3xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="lg:flex">
                {/* Left Side - Content */}
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                    RDW Goedgekeurde Elektrische Steps
                  </h2>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Elektrische steps zijn ideaal voor de laatste mile. Van huis naar de trein, van de trein naar kantoor, even bij vrienden langs op iets meer dan loopafstand. Om het veilig te houden heb je in Nederland een door het RDW goedgekeurde elektrische step nodig om legaal het fietspad op te gaan.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">Verzekerd met je step op pad.</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">Eenvoudig in 3 minuten geregeld.</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">Volledig legaal op de openbare weg.</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="/vergelijken"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-base transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
                  >
                    Vergelijk alle modellen
                  </Link>
                </div>
                
                {/* Right Side - Product Card */}
                <div className="lg:w-2/5 bg-slate-50 p-8 lg:p-12 relative">
                  {/* Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Enige goedgekeurde
                    </span>
                  </div>
                  
                  {/* Product Info */}
                  <div className="mt-8 lg:mt-0">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">SA</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">SELANA Alpha</h3>
                        <p className="text-slate-600">Eerste RDW Goedgekeurde Elektrische Step</p>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex text-yellow-400 text-xl">
                        <span>★★★★★</span>
                      </div>
                      <span className="text-slate-600 font-medium">9,4</span>
                      <span className="text-slate-500 text-sm">Nieuwe release</span>
                    </div>
                    
                    {/* Pricing */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <p className="text-slate-600 text-sm mb-1">Aanschafprijs</p>
                        <p className="text-2xl font-bold text-slate-900">€ 1.900</p>
                        <button className="text-orange-600 text-sm underline hover:text-orange-700">
                          Bekijk specificaties
                        </button>
                      </div>
                      <div className="text-center">
                        <p className="text-slate-600 text-sm mb-1 flex items-center justify-center gap-1">
                          Verzekering
                        </p>
                        <p className="text-2xl font-bold text-slate-900">€ 6,-</p>
                        <button className="text-orange-600 text-sm underline hover:text-orange-700">
                          Per maand
                        </button>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">RDW goedkeuring met kenteken</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">45-60 km bereik per lading</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">Richtingaanwijzers en verlichting</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">Premium kwaliteit met 2 jaar garantie</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <a 
                      href="https://selana.nl/?utm_source=kentekenestep&utm_medium=referral&utm_campaign=homepage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl font-bold text-base transition-all transform hover:scale-105 shadow-lg text-center block"
                    >
                      Bekijk SELANA Alpha
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEO Rich Content - Nederlandse Elektrische Step Regelgeving */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Elektrische Step Regelgeving <span className="text-orange-500">Nederland 2025</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Alles wat je moet weten over legale elektrische steps in Nederland: RDW goedkeuring, verzekeringen, boetes en toegestane modellen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Regelgeving Overzicht */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Legale Elektrische Steps in Nederland
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-green-900">RDW Typegoedkeuring Verplicht</h4>
                      <p className="text-green-700">Alleen door RDW goedgekeurde elektrische steps mogen op openbare wegen rijden sinds juli 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-green-900">WA-Verzekering Verplicht</h4>
                      <p className="text-green-700">Kosten ongeveer €6 per maand voor wettelijke aansprakelijkheidsverzekering</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-green-900">Kenteken Nodig</h4>
                      <p className="text-green-700">Alle nieuwe elektrische steps hebben vanaf juli 2025 een kenteken nodig, bestaande tot juli 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-green-900">Rijbewijs AM of Hoger</h4>
                      <p className="text-green-700">Bromfietsrijbewijs (AM) of autorijbewijs (B) vereist voor bestuurders</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.23 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  Boetes & Risico's
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">€340-350 Boete</h4>
                    <p className="text-red-800 text-sm">Voor rijden zonder verzekering of met niet-goedgekeurde e-step</p>
                  </div>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Inbeslagname Mogelijk</h4>
                    <p className="text-red-800 text-sm">Politie kan uw e-step in beslag nemen bij overtreding</p>
                  </div>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Geen Dekking bij Ongevallen</h4>
                    <p className="text-red-800 text-sm">Zonder verzekering bent u persoonlijk aansprakelijk voor alle schade</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Goedgekeurde Modellen */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100">
                <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  RDW Goedgekeurde Elektrische Steps (2025)
                </h3>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-200 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-slate-900">SELANA Alpha</h4>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      ✓ RDW Goedgekeurd
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Prijs:</span>
                      <span className="font-semibold text-slate-900 ml-2">€1.900</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Bereik:</span>
                      <span className="font-semibold text-slate-900 ml-2">45-60 km</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Max snelheid:</span>
                      <span className="font-semibold text-slate-900 ml-2">25 km/h</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Verzekering:</span>
                      <span className="font-semibold text-slate-900 ml-2">€6/maand</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link 
                      href="/vergelijken"
                      className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm"
                    >
                      Bekijk specificaties →
                    </Link>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <strong>Meer modellen verwacht:</strong> NIU, Segway, en andere merken werken aan RDW goedkeuring. 
                    Verwacht wordt dat er in 2025-2026 meer modellen bijkomen.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Belangrijke Data 2025-2026</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      JUL
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Juli 2025</h4>
                      <p className="text-slate-600 text-sm">Kentekenplicht van kracht voor nieuwe elektrische steps</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      JUL
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Juli 2026</h4>
                      <p className="text-slate-600 text-sm">Deadline kenteken voor bestaande goedgekeurde elektrische steps</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      NU
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Sinds 2024</h4>
                      <p className="text-slate-600 text-sm">WA-verzekering al verplicht voor alle elektrische steps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Wil je legaal en verzekerd op pad?</h3>
              <p className="text-lg mb-6 text-green-100">
                Bekijk de vergelijker voor actuele prijzen en beschikbaarheid van RDW goedgekeurde elektrische steps
              </p>
              <Link 
                href="/vergelijken"
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
              >
                Vergelijk Elektrische Steps
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section voor betere discoverability */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Veelgestelde <span className="text-orange-500">Vragen</span>
            </h2>
            <p className="text-xl text-slate-600">
              De belangrijkste vragen over elektrische steps in Nederland beantwoord
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Welke elektrische steps zijn toegestaan in Nederland?</h3>
              <p className="text-slate-600 leading-relaxed">
                Alleen door de RDW goedgekeurde elektrische steps mogen op openbare wegen rijden. Momenteel is de SELANA Alpha het enige officieel goedgekeurde model (€1.900). NIU, Segway en andere merken werken aan goedkeuring voor hun modellen.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Is een verzekering verplicht voor elektrische steps?</h3>
              <p className="text-slate-600 leading-relaxed">
                Ja, een WA-verzekering is verplicht voor alle elektrische steps in Nederland sinds 2024. De kosten zijn ongeveer €6 per maand. Zonder verzekering riskeer je een boete van €340-350 en persoonlijke aansprakelijkheid voor alle schade.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Heb ik een rijbewijs nodig voor een elektrische step?</h3>
              <p className="text-slate-600 leading-relaxed">
                Voor RDW goedgekeurde elektrische steps heb je minimaal een bromfietsrijbewijs (AM) nodig. Als je een geldig autorijbewijs (B) hebt, mag je ook op een RDW goedgekeurde elektrische step rijden.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Wanneer heb ik een kenteken nodig?</h3>
              <p className="text-slate-600 leading-relaxed">
                Nieuwe elektrische steps hebben sinds juli 2025 een kenteken nodig. Voor bestaande goedgekeurde elektrische steps geldt een uitstel tot juli 2026. Het kenteken wordt geregeld door de dealer bij aankoop.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Wat kost het om legaal op pad te gaan?</h3>
              <p className="text-slate-600 leading-relaxed">
                Voor de SELANA Alpha betaal je €1.900 aanschafprijs + €6 per maand voor verzekering. Daarnaast zijn er kosten voor een rijbewijs AM (€200-300) als je die nog niet hebt.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Waar mag ik rijden met een RDW goedgekeurde elektrische step?</h3>
              <p className="text-slate-600 leading-relaxed">
                Met een RDW goedgekeurde elektrische step mag je op fietspaden, fietsstroken en wegen waar maximaal 50 km/h geldt. Je mag NIET op de stoep, in voetgangerszones of op snelwegen rijden.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/faq"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              Meer vragen? Bekijk volledige FAQ →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup */}
        <section className="mt-16 bg-slate-700 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Blijf op de hoogte</h2>
          <p className="text-xl text-slate-200 mb-8">
            Ontvang de laatste updates over RDW goedkeuringen en elektrische step regelgeving
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Jouw email adres"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-lg font-bold transition-colors text-sm sm:text-base whitespace-nowrap">
                Aanmelden
              </button>
            </div>
          </div>
          
          <div className="mt-8 space-y-3">
            <p className="text-lg font-medium text-slate-200">
              Geen spam, alleen belangrijke updates
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-green-400">🔒</span>
                <span>Veilig & GDPR compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">📧</span>
                <span>Max 1 email per week</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">🚫</span>
                <span>Altijd uitschrijven mogelijk</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">KentekenEstep.nl</div>
              <p className="text-slate-400">
                Onafhankelijke informatie over elektrische steps en RDW regelgeving
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
                <li><Link href="/rdw-info" className="hover:text-white">Elektrische Step Regelgeving</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
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
    </>
  );
}
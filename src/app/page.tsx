"use client";

import React, { useState, useEffect } from 'react';
import LatestBlog from '@/components/LatestBlog';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  // Scroll event for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section') as HTMLElement;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsHeaderSticky(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`bg-white shadow-sm border-b transition-all duration-300 ${isHeaderSticky ? 'fixed top-0 left-0 right-0 z-50' : 'relative'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <Image 
                  src="/logo_estep_rdw.svg" 
                  alt="KentekenEstep.nl Logo" 
                  width={40} 
                  height={40} 
                  className="h-10 w-auto"
                />
                <div className="text-2xl font-bold text-slate-700">KentekenEstep.nl</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-600 hover:text-slate-800 font-semibold">Home</Link>
              <Link href="/vergelijken" className="text-slate-600 hover:text-slate-800">Vergelijken</Link>
              <Link href="/blog" className="text-slate-600 hover:text-slate-800">Blog</Link>
              <Link href="/rdw-info" className="text-slate-600 hover:text-slate-800">E-Step Regelgeving</Link>
              <Link href="/contact" className="text-slate-600 hover:text-slate-800">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16">
        {isHeaderSticky && <div className="h-16"></div>}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              E-Steps met <span className="text-orange-400">goedkeuring!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Een overzicht van goedgekeurde E-Steps waarmee je nu of binnenkort het fietspad mee op mag
            </p>
            <Link 
              href="/vergelijken"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              Vergelijk E-Steps
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isHeaderSticky && <div className="h-16 -mt-12"></div>}
        
        {/* E-Step Vergelijker Widget */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-orange-50 rounded-3xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="lg:flex">
                {/* Left Side - Content */}
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                    RDW Goedgekeurde E-Steps
                  </h2>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    E-steps zijn ideaal voor de laatste mile. Van huis naar de trein, van de trein naar kantoor, even bij vrienden langs op iets meer dan loopafstand. Om het veilig te houden heb je in Nederland een door het RDW goedgekeurde step nodig om legaal het fietspad op te gaan.
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
                        <p className="text-slate-600">Eerste RDW Goedgekeurde E-Step</p>
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

      {/* 🆕 BLOG SECTIE - TOEGEVOEGD HIER */}
      <LatestBlog />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup */}
        <section className="mt-16 bg-slate-700 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Blijf op de hoogte</h2>
          <p className="text-xl text-slate-200 mb-8">
            Ontvang de laatste updates over RDW goedkeuringen en e-step regelgeving
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Jouw email adres"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-colors">
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
  );
}
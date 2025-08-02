"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Search, User, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  // Scroll event for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsHeaderSticky(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReadMore = (articleId: number) => {
    setSelectedArticle(articleId);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  const handleMoreInfo = (productType: string) => {
    // GTM Event tracking - alleen als dataLayer beschikbaar is
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      try {
        (window as any).dataLayer.push({
          event: 'cta_button_click',
          product_type: productType,
          product_name: productType === 'selana' ? 'SELANA Alpha' : productType,
          button_location: 'homepage_vergelijker',
          button_text: 'Bekijk e-step',
          destination_url: productType === 'selana' ? 'https://selana.nl' : null,
          product_price: productType === 'selana' ? 1750 : null
        });
      } catch (error) {
        console.log('GTM tracking error:', error);
      }
    }

    // Navigate to product specific pages or sections
    switch(productType) {
      case 'selana':
        window.open('https://selana.nl/?utm_source=kentekenestep&utm_medium=referral&utm_campaign=homepage', '_blank');
        break;
      case 'onkel':
        // For now, scroll to newsletter signup since Onkel isn't available yet
        document.querySelector('.newsletter-signup')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'others':
        // Scroll to newsletter signup for updates
        document.querySelector('.newsletter-signup')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  // Blog Image Component - Only for SVG illustrations now
  const BlogImage = ({ type, className = "" }: { type: string; className?: string }) => {
    switch (type) {
      case 'market-growth':
        return (
          <svg className={className} viewBox="0 0 400 300" fill="none">
            <defs>
              <linearGradient id="marketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            {/* Background */}
            <rect width="400" height="300" fill="#f8fafc"/>
            
            {/* Chart bars */}
            <rect x="60" y="180" width="40" height="80" fill="#e2e8f0" rx="4"/>
            <rect x="120" y="160" width="40" height="100" fill="#cbd5e1" rx="4"/>
            <rect x="180" y="120" width="40" height="140" fill="#94a3b8" rx="4"/>
            <rect x="240" y="80" width="40" height="180" fill="url(#marketGrad)" rx="4"/>
            <rect x="300" y="40" width="40" height="220" fill="url(#marketGrad)" rx="4"/>
            
            {/* Arrow trend */}
            <path d="M 80 200 Q 180 120 320 60" stroke="#10b981" strokeWidth="3" fill="none"/>
            <path d="M 310 50 L 320 60 L 310 70" stroke="#10b981" strokeWidth="3" fill="none"/>
            
            {/* E-scooters icons */}
            <g transform="translate(320, 20)">
              <rect x="0" y="10" width="20" height="8" fill="#374151" rx="2"/>
              <circle cx="5" cy="20" r="3" fill="#6b7280"/>
              <circle cx="15" cy="20" r="3" fill="#6b7280"/>
              <rect x="8" y="0" width="2" height="15" fill="#374151"/>
            </g>
            
            {/* Title */}
            <text x="200" y="30" textAnchor="middle" className="fill-slate-700 text-lg font-bold">Marktgroei E-Steps</text>
          </svg>
        );

      case 'rdw-approval':
        return (
          <svg className={className} viewBox="0 0 400 300" fill="none">
            <defs>
              <linearGradient id="approvalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            {/* Background */}
            <rect width="400" height="300" fill="#f1f5f9"/>
            
            {/* Certificate */}
            <rect x="100" y="60" width="200" height="150" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="8"/>
            <rect x="110" y="70" width="180" height="20" fill="url(#approvalGrad)" rx="4"/>
            
            {/* RDW Logo placeholder */}
            <circle cx="150" cy="120" r="15" fill="#3b82f6"/>
            <text x="150" y="125" textAnchor="middle" className="fill-white text-xs font-bold">RDW</text>
            
            {/* Approval stamp */}
            <circle cx="250" cy="160" r="25" fill="#10b981" opacity="0.9"/>
            <path d="M 240 160 L 248 168 L 260 152" stroke="white" strokeWidth="3" fill="none"/>
            
            {/* E-scooter */}
            <g transform="translate(320, 80)">
              <rect x="0" y="10" width="30" height="12" fill="#374151" rx="3"/>
              <circle cx="8" cy="25" r="5" fill="#6b7280"/>
              <circle cx="22" cy="25" r="5" fill="#6b7280"/>
              <rect x="13" y="0" width="3" height="22" fill="#374151"/>
              {/* License plate */}
              <rect x="5" y="30" width="20" height="8" fill="#fbbf24" rx="1"/>
              <text x="15" y="36" textAnchor="middle" className="fill-black text-xs">AA-BB-1</text>
            </g>
            
            <text x="200" y="250" textAnchor="middle" className="fill-slate-700 text-lg font-bold">RDW Goedkeuring</text>
          </svg>
        );

      case 'license-plate':
        return (
          <svg className={className} viewBox="0 0 400 300" fill="none">
            <defs>
              <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            {/* Background */}
            <rect width="400" height="300" fill="#fefce8"/>
            
            {/* Large license plate */}
            <rect x="100" y="100" width="200" height="80" fill="url(#plateGrad)" stroke="#d97706" strokeWidth="2" rx="8"/>
            <rect x="110" y="110" width="20" height="60" fill="#1e40af" rx="4"/>
            <text x="140" y="145" className="fill-black text-2xl font-bold">AA-BB-12</text>
            
            {/* EU symbol */}
            <circle cx="120" cy="125" r="8" fill="#1e40af"/>
            <text x="120" y="130" textAnchor="middle" className="fill-yellow-400 text-xs font-bold">EU</text>
            <text x="120" y="155" textAnchor="middle" className="fill-white text-xs">NL</text>
            
            {/* Calendar icon */}
            <g transform="translate(50, 50)">
              <rect x="0" y="5" width="30" height="25" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="4"/>
              <rect x="0" y="5" width="30" height="8" fill="#ef4444" rx="4"/>
              <text x="15" y="22" textAnchor="middle" className="fill-slate-700 text-xs font-bold">JUL</text>
              <text x="15" y="32" textAnchor="middle" className="fill-slate-700 text-xs">1</text>
            </g>
            
            {/* Clock */}
            <g transform="translate(320, 50)">
              <circle cx="15" cy="15" r="15" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
              <circle cx="15" cy="15" r="2" fill="#374151"/>
              <path d="M 15 15 L 15 8" stroke="#374151" strokeWidth="2"/>
              <path d="M 15 15 L 20 15" stroke="#374151" strokeWidth="2"/>
            </g>
            
            <text x="200" y="250" textAnchor="middle" className="fill-slate-700 text-lg font-bold">Kentekenplicht 2025</text>
          </svg>
        );

      case 'illegal-warning':
        return (
          <svg className={className} viewBox="0 0 400 300" fill="none">
            <defs>
              <linearGradient id="warningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
            {/* Background */}
            <rect width="400" height="300" fill="#fef2f2"/>
            
            {/* Warning triangle */}
            <path d="M 200 60 L 300 200 L 100 200 Z" fill="url(#warningGrad)" stroke="#b91c1c" strokeWidth="2"/>
            <text x="200" y="185" textAnchor="middle" className="fill-white text-4xl font-bold">!</text>
            
            {/* Crossed out e-scooter */}
            <g transform="translate(180, 220)">
              <rect x="0" y="10" width="25" height="10" fill="#6b7280" rx="2" opacity="0.6"/>
              <circle cx="6" cy="22" r="4" fill="#9ca3af" opacity="0.6"/>
              <circle cx="19" cy="22" r="4" fill="#9ca3af" opacity="0.6"/>
              <rect x="11" y="0" width="2" height="20" fill="#6b7280" opacity="0.6"/>
              
              {/* Red X */}
              <path d="M -5 -5 L 30 35" stroke="#ef4444" strokeWidth="4"/>
              <path d="M 30 -5 L -5 35" stroke="#ef4444" strokeWidth="4"/>
            </g>
            
            {/* Fine amount */}
            <g transform="translate(50, 220)">
              <rect x="0" y="0" width="60" height="30" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="4"/>
              <text x="30" y="12" textAnchor="middle" className="fill-slate-700 text-xs">Boete</text>
              <text x="30" y="25" textAnchor="middle" className="fill-red-600 text-sm font-bold">€400</text>
            </g>
            
            {/* Police badge */}
            <g transform="translate(300, 220)">
              <path d="M 15 0 L 25 10 L 15 20 L 5 10 Z" fill="#1e40af"/>
              <circle cx="15" cy="10" r="6" fill="white"/>
              <text x="15" y="14" textAnchor="middle" className="fill-blue-700 text-xs font-bold">P</text>
            </g>
            
            <text x="200" y="280" textAnchor="middle" className="fill-slate-700 text-lg font-bold">Risico&apos;s Illegaal Gebruik</text>
          </svg>
        );

      default:
        return <FileText className={`w-16 h-16 text-slate-400 ${className}`} />;
    }
  };

  const blogPosts = [
    {
      id: 5,
      title: "Selana Alpha €150 goedkoper: maar is €1.750 nog steeds te duur?",
      excerpt: "De Selana Alpha krijgt een prijsverlaging naar €1.750, maar met een wachttijd van 3 maanden en een prijs die nog altijd 3-4x hoger ligt dan illegale alternatieven, rijzen er vragen over de toegankelijkheid.",
      content: `
        <p>Na bijna een jaar op de markt heeft Selana eindelijk de prijs van hun Alpha e-step verlaagd van €1.900 naar €1.750. Een stap in de goede richting, maar de vraag blijft: is dit genoeg om de gemiddelde Nederlandse consument te overtuigen?</p>

        <h3>€1.750: Een kritische blik op de prijs</h3>
        <p>Laten we eerlijk zijn: <strong>€1.750 is nog altijd een behoorlijk bedrag</strong> voor een elektrische step. Ter vergelijking:</p>
        <ul>
          <li><strong>Illegale e-steps</strong>: €400-800 voor vergelijkbare specificaties</li>
          <li><strong>Gewone fiets</strong>: €300-600 voor dagelijks transport</li>
          <li><strong>E-bike</strong>: €1.200-2.000 voor elektrisch vervoer</li>
          <li><strong>Selana Alpha</strong>: €1.750 + verzekering + kenteken</li>
        </ul>
        
        <p>Je betaalt dus een <strong>legaliteitspremie van ongeveer €1.000-1.350</strong> ten opzichte van vergelijkbare niet-goedgekeurde modellen. De vraag is of die legaliteit dat waard is voor de gemiddelde gebruiker.</p>

        <h3>3 maanden wachttijd: een serieus probleem</h3>
        <p>Nog problematischer is de <strong>levertijd van 3 maanden</strong>. In een tijd waarin we gewend zijn aan next-day delivery, voelt dit archaïsch aan. Vooral als je bedenkt dat:</p>
        <ul>
          <li>Illegale alternatieven vaak <strong>binnen 1-3 dagen</strong> geleverd worden</li>
          <li>Je €1.750 vooruit moet betalen voor iets dat je pas over een kwartaal krijgt</li>
          <li>Er <strong>geen garantie</strong> is dat de levertijd niet verder oploopt</li>
          <li>Je intussen gewoon lopend of met het OV moet</li>
        </ul>

        <p><strong>Interesse gewekt ondanks onze kritiek?</strong><br>
        <a href="https://selana.nl/products/alpha?utm_source=kentekenestep&utm_medium=blog&utm_campaign=selana_price_drop_2025&utm_content=review" target="_blank" rel="noopener noreferrer" style="color: #ea580c; font-weight: 600; text-decoration: underline;">Bekijk de Selana Alpha voor €1.750</a></p>
        
        <p style="font-size: 14px; color: #64748b;"><em>Disclaimer: Dit is een kritische analyse. We hebben geen commerciele relatie met Selana, maar sommige links kunnen affiliate-links bevatten voor transparantie.</em></p>
      `,
      author: "Iwan",
      date: "2025-07-30",
      readTime: "8 min",
      category: "Product Update",
      image: "https://selana.nl/cdn/shop/files/SELANA_Alpha1.jpg?v=1751712644&width=800",
      tags: ["SELANA", "Alpha", "Prijskritiek", "RDW", "Analyse"],
      featured: true
    },
    {
      id: 1,
      title: "Meer RDW Goedgekeurde E-Steps Komen Eraan",
      excerpt: "De markt voor legale e-steps staat op het punt om flink uit te breiden. Meerdere fabrikanten werken aan RDW goedkeuring voor hun modellen.",
      content: `
        <p>Na het succes van de SELANA Alpha als eerste RDW goedgekeurde e-step in Nederland, staan er meer legale alternatieven op de planning. Verschillende fabrikanten hebben aangekondigd dat zij bezig zijn met het doorlopen van de RDW goedkeuringsprocedure.</p>
        
        <h3>Wat betekent dit voor consumenten?</h3>
        <p>Voor Nederlandse consumenten betekent dit meer keuze in volledig legale e-steps. Tot nu toe was de SELANA Alpha de enige optie voor wie legaal gebruik wilde maken van een elektrische step op de openbare weg.</p>
      `,
      author: "Iwan",
      date: "2025-07-06",
      readTime: "4 min",
      category: "Markt Update",
      image: "market-growth",
      tags: ["RDW", "Goedkeuring", "Markt", "Toekomst"],
      featured: true
    }
  ];

  const categories = ['all', 'Product Update', 'Markt Update', 'Product Review', 'Regelgeving'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get the selected article
  const currentArticle = selectedArticle ? blogPosts.find(post => post.id === selectedArticle) : null;

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
              <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
              <Link href="/vergelijken" className="text-slate-600 hover:text-slate-800">Vergelijken</Link>
              <Link href="/rdw-info" className="text-slate-600 hover:text-slate-800">E-Step Regelgeving</Link>
              <Link href="/blog" className="text-slate-600 hover:text-slate-800 font-semibold">Blog</Link>
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
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isHeaderSticky && <div className="h-16 -mt-12"></div>}
        
        {/* Article Detail View */}
        {currentArticle ? (
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={handleBackToList}
              className="mb-8 flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors bg-white rounded-lg px-4 py-2 shadow-sm border border-slate-200 hover:shadow-md"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Terug naar overzicht
            </button>

            {/* Article Header */}
            <header className="mb-12 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                  {currentArticle.category}
                </span>
                <span className="text-slate-400 text-sm">•</span>
                <div className="flex items-center gap-1 text-slate-500 text-sm bg-slate-50 px-3 py-1 rounded-full">
                  <Calendar className="w-3 h-3" />
                  {currentArticle.readTime} lezen
                </div>
                {currentArticle.featured && (
                  <>
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                      ⭐ Uitgelicht
                    </span>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                {currentArticle.title}
              </h1>
              
              <div className="flex items-center gap-8 text-slate-600 bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {currentArticle.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{currentArticle.author}</div>
                    <div className="text-sm text-slate-500">Auteur</div>
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-300"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center text-white">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {new Date(currentArticle.date).toLocaleDateString('nl-NL', { 
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="text-sm text-slate-500">Gepubliceerd</div>
                  </div>
                </div>
              </div>
            </header>

            {/* Article Image */}
            <div className="mb-12 h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center p-8 shadow-sm border border-slate-100 overflow-hidden">
              {currentArticle.image?.startsWith('http') ? (
                <Image 
                  src={currentArticle.image} 
                  alt="Article afbeelding" 
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              ) : (
                <BlogImage 
                  type={currentArticle.image} 
                  className="w-full h-full" 
                />
              )}
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-orange-500 to-orange-600"></div>
              
              <div 
                dangerouslySetInnerHTML={{ __html: currentArticle.content }}
                className="article-content text-slate-700 leading-relaxed text-lg"
              />
            </div>
          </div>
        ) : (
          <>
            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Zoek artikelen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === category
                          ? 'bg-orange-500 text-white'
                          : 'bg-white text-slate-600 hover:bg-orange-50 border border-slate-300'
                      }`}
                    >
                      {category === 'all' ? 'Alle Categorieën' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* All Articles */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                {searchTerm || selectedCategory !== 'all' ? 'Zoekresultaten' : 'Alle Artikelen'}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-slate-500 text-lg mb-4">Geen artikelen gevonden.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Toon alle artikelen
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map(post => (
                    <article key={post.id} className="bg-white rounded-lg shadow border hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
                          {post.image?.startsWith('http') ? (
                            <Image 
                              src={post.image} 
                              alt="Article afbeelding" 
                              width={400}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <BlogImage 
                              type={post.image} 
                              className="w-full h-full" 
                            />
                          )}
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-medium">
                              {post.category}
                            </span>
                            <span className="text-slate-500 text-sm">•</span>
                            <span className="text-slate-500 text-sm">{post.readTime} lezen</span>
                            {post.featured && (
                              <>
                                <span className="text-slate-500 text-sm">•</span>
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                                  Uitgelicht
                                </span>
                              </>
                            )}
                          </div>
                          
                          <h3 className="text-2xl font-bold text-slate-900 mb-3 cursor-pointer hover:text-orange-600 transition-colors" onClick={() => handleReadMore(post.id)}>
                            {post.title}
                          </h3>
                          
                          <p className="text-slate-600 mb-4">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map(tag => (
                              <span key={tag} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {post.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString('nl-NL')}
                              </div>
                            </div>
                            <button 
                              onClick={() => handleReadMore(post.id)}
                              className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1"
                            >
                              Lees artikel <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
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
                <li><Link href="/rdw-info" className="hover:text-white">E-Step Regelgeving</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white">Waar mag je rijden?</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/contact" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
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
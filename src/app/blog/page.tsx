"use client";

import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag, User, ExternalLink, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Blog Image Component
  const BlogImage = ({ type, className = "" }) => {
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
            
            <text x="200" y="280" textAnchor="middle" className="fill-slate-700 text-lg font-bold">Risico's Illegaal Gebruik</text>
          </svg>
        );

      default:
        return <FileText className={`w-16 h-16 text-slate-400 ${className}`} />;
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Meer RDW Goedgekeurde E-Steps Komen Eraan",
      excerpt: "De markt voor legale e-steps staat op het punt om flink uit te breiden. Meerdere fabrikanten werken aan RDW goedkeuring voor hun modellen.",
      content: `
        <p>Na het succes van de SELANA Alpha als eerste RDW goedgekeurde e-step in Nederland, staan er meer legale alternatieven op de planning. Verschillende fabrikanten hebben aangekondigd dat zij bezig zijn met het doorlopen van de RDW goedkeuringsprocedure.</p>
        
        <h3>Wat betekent dit voor consumenten?</h3>
        <p>Voor Nederlandse consumenten betekent dit meer keuze in volledig legale e-steps. Tot nu toe was de SELANA Alpha de enige optie voor wie legaal gebruik wilde maken van een elektrische step op de openbare weg.</p>
        
        <h3>Verwachte timeline</h3>
        <ul>
          <li><strong>Q2 2025:</strong> Verwachting van 2-3 nieuwe goedgekeurde modellen</li>
          <li><strong>Q4 2025:</strong> Mogelijk 5-7 legale opties beschikbaar</li>
          <li><strong>2026:</strong> Verwachting van een volwassen markt met 10+ modellen</li>
        </ul>
        
        <h3>Uitdagingen voor fabrikanten</h3>
        <p>Het verkrijgen van RDW goedkeuring is complex en kostbaar. Fabrikanten moeten voldoen aan strenge eisen op het gebied van:</p>
        <ul>
          <li>Constructie en veiligheid</li>
          <li>Verlichting en signalering</li>
          <li>Remmen en stabiliteit</li>
          <li>Geluidsniveau</li>
          <li>Milieuaspecten</li>
        </ul>
      `,
      author: "Iwan",
      date: "2025-07-06",
      readTime: "4 min",
      category: "Markt Update",
      image: "market-growth",
      tags: ["RDW", "Goedkeuring", "Markt", "Toekomst"],
      featured: true
    },
    {
      id: 2,
      title: "SELANA Alpha: De Eerste RDW Goedgekeurde E-Step",
      excerpt: "Een mijlpaal in de Nederlandse e-step markt. Hoe de SELANA Alpha de weg vrijmaakte voor legaal gebruik van elektrische steps.",
      content: `
        <p>Op 12 maart 2024 maakte SELANA geschiedenis door als eerste fabrikant een RDW goedkeuring te krijgen voor hun Alpha e-step. Dit was een doorbraak voor de Nederlandse e-step markt.</p>
        
        <h3>Het goedkeuringsproces</h3>
        <p>Het proces duurde bijna twee jaar en kostte SELANA naar schatting €500.000 aan ontwikkeling en testen. De Alpha moest voldoen aan dezelfde eisen als andere motorvoertuigen.</p>
        
        <h3>Unieke eigenschappen van de Alpha</h3>
        <ul>
          <li><strong>NFC Keycard:</strong> Vergrendeling en ontgrendeling via kaart</li>
          <li><strong>Richtingaanwijzers:</strong> Verplicht voor RDW goedkeuring</li>
          <li><strong>Kenteken houder:</strong> Ingebouwde bevestiging</li>
          <li><strong>Verzekering interface:</strong> Compatibel met Nederlandse verzekeraars</li>
          <li><strong>Snelheidsbegrenzer:</strong> Maximaal 25 km/h</li>
        </ul>
        
        <h3>Impact op de markt</h3>
        <p>De goedkeuring van de Alpha heeft geleid tot:</p>
        <ul>
          <li>Verhoogde interesse van andere fabrikanten</li>
          <li>Duidelijkheid over wet- en regelgeving</li>
          <li>Nieuwe marktkansen voor legale e-steps</li>
          <li>Bewustwording bij consumenten</li>
        </ul>
        
        <h3>Prijs en beschikbaarheid</h3>
        <p>Met een prijs van €1.900 is de Alpha aanzienlijk duurder dan illegale alternatieven. Dit komt door de ontwikkelkosten en de kleine productieaantallen. Verwacht wordt dat prijzen dalen naarmate meer fabrikanten toetreden.</p>
      `,
      author: "Iwan",
      date: "2025-07-03",
      readTime: "6 min",
      category: "Product Review",
      image: "rdw-approval",
      tags: ["SELANA", "Alpha", "RDW", "Review"],
      featured: true
    },
    {
      id: 3,
      title: "Kentekenplicht E-Steps: Wat Verandert er op 1 Juli 2025?",
      excerpt: "Belangrijke wijzigingen in de regelgeving voor RDW goedgekeurde e-steps. Alles wat je moet weten over de nieuwe kentekenplicht.",
      content: `
        <p>Per 1 juli 2025 treden er belangrijke wijzigingen in werking voor RDW goedgekeurde e-steps. De belangrijkste verandering is de invoering van de kentekenplicht voor alle legale elektrische steps.</p>
        
        <h3>Wat houdt de kentekenplicht in?</h3>
        <p>Vanaf 1 juli 2025 moeten alle RDW goedgekeurde e-steps voorzien zijn van een kenteken. Dit kenteken moet zichtbaar bevestigd worden aan de achterzijde van de step.</p>
        
        <h3>Kosten en aanvraag</h3>
        <ul>
          <li><strong>Kenteken aanvraag:</strong> €32,60 (eenmalig)</li>
          <li><strong>Tenaamstelling:</strong> €16,90 (bij verkoop)</li>
          <li><strong>Vervangingskosten:</strong> €71,30 (bij verlies/diefstal)</li>
        </ul>
        
        <h3>Verzekeringskantoor</h3>
        <p>Naast het kenteken wordt ook een verzekering verplicht. Verwachte kosten:</p>
        <ul>
          <li><strong>WA verzekering:</strong> €8-15 per maand</li>
          <li><strong>Casco uitbreiding:</strong> €15-25 per maand extra</li>
          <li><strong>Diefstal dekking:</strong> Sterk aanbevolen</li>
        </ul>
        
        <h3>Overgangsregeling</h3>
        <p>Voor bestaande eigenaren van RDW goedgekeurde e-steps geldt een overgangsregeling:</p>
        <ul>
          <li><strong>1 juli - 31 december 2025:</strong> Waarschuwingen in plaats van boetes</li>
          <li><strong>Vanaf 1 januari 2026:</strong> Volledige handhaving met boetes</li>
        </ul>
        
        <h3>Handhaving</h3>
        <p>De politie krijgt nieuwe bevoegdheden:</p>
        <ul>
          <li>Controle op kenteken en verzekering</li>
          <li>Boete van €140 bij ontbreken kenteken</li>
          <li>Boete van €400 bij ontbreken verzekering</li>
          <li>Mogelijke inbeslagname bij herhaalde overtredingen</li>
        </ul>
        
        <h3>Wat moet je doen?</h3>
        <p>Als eigenaar van een RDW goedgekeurde e-step moet je voor 1 juli 2025:</p>
        <ul>
          <li>Een kenteken aanvragen bij de RDW</li>
          <li>Een WA verzekering afsluiten</li>
          <li>Het kenteken correct bevestigen</li>
          <li>Je verzekeringspapieren altijd bij je hebben</li>
        </ul>
      `,
      author: "Iwan",
      date: "2025-06-12",
      readTime: "5 min",
      category: "Regelgeving",
      image: "license-plate",
      tags: ["Kenteken", "Regelgeving", "Verzekering", "RDW"],
      featured: true
    },
    {
      id: 4,
      title: "Illegale E-Steps: Risico's en Gevolgen",
      excerpt: "Wat zijn de risico's van het gebruik van niet-goedgekeurde e-steps op de openbare weg? Een overzicht van boetes en consequenties.",
      content: `
        <p>Hoewel er veel aantrekkelijke e-steps te koop zijn, is het belangrijk om te weten dat de meeste modellen niet toegestaan zijn op de Nederlandse openbare weg.</p>
        
        <h3>Waarom zijn de meeste e-steps illegaal?</h3>
        <p>Nederlandse wetgeving vereist RDW goedkeuring voor gemotoriseerde voertuigen die sneller gaan dan 6 km/h. De meeste e-steps hebben geen goedkeuring omdat:</p>
        <ul>
          <li>Ze niet voldoen aan constructie-eisen</li>
          <li>Ontbrekende verlichting en richtingaanwijzers</li>
          <li>Geen adequate remmen</li>
          <li>Ontbrekende geluidsisolatie</li>
        </ul>
        
        <h3>Boetes en consequenties</h3>
        <ul>
          <li><strong>Rijden zonder kenteken:</strong> €140</li>
          <li><strong>Rijden zonder verzekering:</strong> €400</li>
          <li><strong>Rijden met illegaal voertuig:</strong> €400</li>
          <li><strong>Inbeslagname:</strong> Mogelijk bij herhaalde overtredingen</li>
        </ul>
        
        <h3>Waar mag je wel rijden?</h3>
        <p>Niet-goedgekeurde e-steps mogen alleen gebruikt worden op:</p>
        <ul>
          <li>Eigen terrein</li>
          <li>Privé terreinen met toestemming</li>
          <li>Speciale oefenterreinen</li>
        </ul>
      `,
      author: "Iwan",
      date: "2025-05-28",
      readTime: "3 min",
      category: "Regelgeving",
      image: "illegal-warning",
      tags: ["Illegal", "Boetes", "Risico", "Wetgeving"],
      featured: false
    }
  ];

  const categories = ['all', 'Markt Update', 'Product Review', 'Regelgeving'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const latestPosts = blogPosts.slice(0, 3);

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
              <a href="/rdw-info" className="text-slate-600 hover:text-slate-800">E-Step Regelgeving</a>
              <a href="#" className="text-slate-600 hover:text-slate-800 font-semibold">Blog</a>
              <a href="#" className="text-slate-600 hover:text-slate-800">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              E-Step <span className="text-orange-400">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Blijf op de hoogte van de laatste ontwikkelingen in RDW regelgeving en e-step nieuws
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        {/* Featured Articles */}
        {searchTerm === '' && selectedCategory === 'all' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Uitgelichte Artikelen</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map(post => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
                    <BlogImage type={post.image} className="w-full h-full" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-slate-500 text-sm">•</span>
                      <span className="text-slate-500 text-sm">{post.readTime} lezen</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('nl-NL')}
                      </div>
                      <button className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">
                        Lees meer <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

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
                      <BlogImage type={post.image} className="w-full h-full" />
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
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
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
                        <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1">
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

        {/* Newsletter Signup */}
        <section className="mt-16 bg-slate-700 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Blijf op de hoogte</h2>
          <p className="text-xl text-slate-200 mb-8">
            Ontvang de laatste updates over RDW goedkeuringen en e-step regelgeving
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Jouw email adres"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 border-0 focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
              Abonneren
            </button>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Geen spam, alleen belangrijke updates
          </p>
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
                <li><a href="/vergelijken" className="hover:text-white">RDW Goedgekeurd</a></li>
                <li><a href="/vergelijken" className="hover:text-white">Top 3 Modellen</a></li>
                <li><a href="/vergelijken" className="hover:text-white">Prijsvergelijking</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Informatie</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/rdw-info" className="hover:text-white">E-Step Regelgeving</a></li>
                <li><a href="#" className="hover:text-white">Verzekering</a></li>
                <li><a href="#" className="hover:text-white">Waar mag je rijden?</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 KentekenEstep.nl. Affiliate links naar MediaMarkt kunnen commissie opleveren.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
"use client";

import React, { useState, useEffect } from 'react';
import { Search, Shield, Zap, Battery, Scale, Star, CheckCircle, ArrowRight, Filter, AlertTriangle, ExternalLink, X, Mail } from 'lucide-react';

const EScooterLandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Show popup after 1 minute or when leaving page
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let isPopupShown = false;

    // Show after 1 minute
    timer = setTimeout(() => {
      if (!isPopupShown) {
        setShowPopup(true);
        isPopupShown = true;
      }
    }, 60000); // 1 minute = 60000ms

    // Show when leaving page (exit intent)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isPopupShown) {
        setShowPopup(true);
        isPopupShown = true;
        // Optional: Show browser dialog
        e.preventDefault();
        e.returnValue = '';
      }
    };

    // Show when mouse leaves top of window (exit intent)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isPopupShown) {
        setShowPopup(true);
        isPopupShown = true;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleEmailSubmit = () => {
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setEmailSubmitted(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };

  const featuredScooters = [
    {
      id: 1,
      brand: 'SELANA',
      model: 'Alpha',
      rdwNumber: 'RDW-2024-SELANA-001',
      maxSpeed: 25,
      range: 52.5,
      batteryCapacity: 576,
      weight: 28.3,
      price: 1900,
      rating: null,
      isRDWApproved: true,
      image: '/images/selana_alpha.jpeg',
      features: ['RDW Goedgekeurd', 'Kenteken Verplicht', 'Verzekering Mogelijk', 'NFC Keycard', 'Richtingaanwijzers'],
      description: 'De enige volledig legale e-step in Nederland',
      available: 'Pre-order - Ivm wachtlijst, levering kan 3 maanden duren',
      legalStatus: 'Volledig legaal op openbare weg',
      affiliate: null
    },
    {
      id: 2,
      brand: 'SEGWAY',
      model: 'Ninebot E2 PRO E',
      rdwNumber: null,
      maxSpeed: 25,
      range: 35,
      batteryCapacity: 275,
      weight: 18.8,
      price: 299,
      rating: 3.5,
      reviews: 10,
      isRDWApproved: false,
      image: '/images/segway-e2-pro.jpeg',
      features: ['Opvouwbaar', '10" Banden', 'LED Verlichting', 'App Connectie', 'Find My Support'],
      description: 'Populair model - Alleen eigen terrein',
      available: 'Direct leverbaar bij MediaMarkt',
      legalStatus: 'ALLEEN EIGEN TERREIN - Niet toegestaan op openbare weg',
      affiliate: 'https://www.mediamarkt.nl/nl/product/_segway-ninebot-kickscooter-e2-pro-e-1800747.html'
    },
    {
      id: 3,
      brand: 'XIAOMI',
      model: '5 EU',
      rdwNumber: null,
      maxSpeed: 25,
      range: 45,
      batteryCapacity: 460,
      weight: 17.5,
      price: 429.99,
      rating: 5.0,
      reviews: 2,
      isRDWApproved: false,
      image: '/images/xiaomi-5-eu.jpeg',
      features: ['Opvouwbaar', 'Schokdempers', '10" Tubeless Banden', 'Koolstofstaal Frame'],
      description: 'Premium model - Alleen eigen terrein',
      available: 'Direct leverbaar bij MediaMarkt',
      legalStatus: 'ALLEEN EIGEN TERREIN - Niet toegestaan op openbare weg',
      affiliate: 'https://www.mediamarkt.nl/nl/product/_xiaomi-5-eu-elektrische-step-grijs-1879086.html'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Email Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            {!emailSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Nieuwe RDW Goedkeuringen?
                  </h3>
                  <p className="text-slate-600">
                    Blijf op de hoogte wanneer er nieuwe e-steps RDW goedgekeurd worden!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Jouw email adres"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleEmailSubmit}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Houd me op de hoogte
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Geen spam, alleen updates over nieuwe RDW goedkeuringen
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Bedankt!</h3>
                <p className="text-slate-600">Je ontvangt een bevestiging per email.</p>
              </div>
            )}
          </div>
        </div>
      )}

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
              <a href="/vergelijken" className="text-slate-600 hover:text-slate-800">Vergelijken</a>
              <a href="/rdw-info" className="text-slate-600 hover:text-slate-800">E-Step Regelgeving</a>
              <a href="/blog" className="text-slate-600 hover:text-slate-800">Blog</a>
              <a href="/contact" className="text-slate-600 hover:text-slate-800">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vergelijk <span className="text-orange-400">RDW Goedgekeurde</span><br />
              Elektrische Steps
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Ontdek de enige volledig legale e-step én populaire alternatieven voor eigen terrein.
            </p>
            
            {/* Important Notice */}
            <div className="max-w-4xl mx-auto mb-8 bg-orange-100 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center justify-center gap-3 text-orange-800">
                <AlertTriangle className="w-6 h-6" />
                <p className="font-medium">
                  <strong>Let op:</strong> Alleen de SELANA Alpha is RDW goedgekeurd. Andere modellen zijn alleen toegestaan op eigen terrein!
                </p>
              </div>
            </div>
            
            <a 
              href="/vergelijken" 
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
            >
              Start Vergelijking <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="font-semibold text-slate-900">RDW Status</h3>
              <p className="text-slate-600 text-sm">Officiële goedkeuring check</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900">Gebruik Locatie</h3>
              <p className="text-slate-600 text-sm">Openbare weg vs eigen terrein</p>
            </div>
            <div className="flex flex-col items-center">
              <Scale className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="font-semibold text-slate-900">Eerlijke Vergelijking</h3>
              <p className="text-slate-600 text-sm">Inclusief juridische risico's</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="font-semibold text-slate-900">MediaMarkt Prices</h3>
              <p className="text-slate-600 text-sm">Actuele winkel prijzen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Top 3 E-Steps Vergelijking
            </h2>
            <p className="text-xl text-slate-600">
              1 legaal model + 2 populaire alternatieven voor eigen terrein
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredScooters.map((scooter) => (
              <div key={scooter.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${scooter.isRDWApproved ? 'ring-2 ring-green-500' : ''}`}>
                {/* Status Badge */}
                <div className="relative">
                  <img 
                    src={scooter.image} 
                    alt={`${scooter.brand} ${scooter.model}`}
                    className="w-full h-56 object-contain bg-gradient-to-br from-gray-50 to-gray-100 p-4"
                    loading={scooter.id === 1 ? "eager" : "lazy"}
                  />
                  <div className="absolute top-4 left-4">
                    {scooter.isRDWApproved ? (
                      <div className="bg-green-100 border border-green-200 px-3 py-1 rounded-full flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-700">RDW Goedgekeurd</span>
                      </div>
                    ) : (
                      <div className="bg-orange-100 border border-orange-200 px-3 py-1 rounded-full flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-700">Eigen Terrein</span>
                      </div>
                    )}
                  </div>
                  {scooter.isRDWApproved && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        LEGAAL
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {scooter.brand} {scooter.model}
                      </h3>
                      {scooter.rdwNumber && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-slate-600">{scooter.rdwNumber}</span>
                        </div>
                      )}
                      <p className="text-sm text-slate-500 mt-1">{scooter.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">€{scooter.price.toLocaleString()}</div>
                      {scooter.rating && (
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 text-orange-400 fill-current" />
                          <span className="text-sm">{scooter.rating}</span>
                          <span className="text-xs text-slate-500">({scooter.reviews})</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-slate-600">{scooter.maxSpeed} km/h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Battery className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-slate-600">{scooter.range} km</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {scooter.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className={`px-2 py-1 rounded text-xs ${
                        feature === 'RDW Goedgekeurd' ? 'bg-green-100 text-green-700' : 
                        feature === 'Kenteken Verplicht' ? 'bg-blue-100 text-blue-700' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {feature}
                      </span>
                    ))}
                    {scooter.features.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{scooter.features.length - 2} meer
                      </span>
                    )}
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <div className="text-sm">
                      <p className={`font-medium ${scooter.isRDWApproved ? 'text-green-700' : 'text-orange-700'}`}>
                        {scooter.legalStatus}
                      </p>
                      <p className="text-slate-600 mt-1">
                        {scooter.available}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href="/vergelijken" 
                      className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-800 transition-colors text-center"
                    >
                      Vergelijken
                    </a>
                    {scooter.affiliate ? (
                      <a 
                        href={scooter.affiliate}
                        target="_blank"
                        rel="nofollow noopener"
                        className="px-4 py-2 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Kopen
                      </a>
                    ) : (
                      <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                        Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Warning */}
      <section className="py-16 bg-red-50 border-t-4 border-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-900">
            Belangrijk: Waar mag je rijden?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">✅ SELANA Alpha</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Openbare weg toegestaan</li>
                <li>• Fietspaden toegestaan</li>
                <li>• Verzekering mogelijk</li>
                <li>• Kenteken verplicht</li>
                <li>• Geen helm vereist (16+)</li>
              </ul>
            </div>
            <div className="bg-orange-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-800 mb-4">⚠️ Andere E-steps</h3>
              <ul className="text-orange-700 space-y-2">
                <li>• ALLEEN eigen terrein</li>
                <li>• Niet op openbare weg</li>
                <li>• Niet op fietspaden</li>
                <li>• Risico €400 boete</li>
                <li>• Inbeslagname mogelijk</li>
              </ul>
            </div>
          </div>
          <p className="text-lg mt-8 text-red-800">
            Gebruik van niet-RDW goedgekeurde e-steps op de openbare weg is illegaal en kan leiden tot boetes en inbeslagname.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Maak een bewuste keuze
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Vergelijk alle opties en begrijp de juridische implicaties van elke e-step
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/vergelijken" 
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors inline-block"
            >
              Volledige Vergelijking
            </a>
            <button 
              onClick={() => setShowPopup(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-700 transition-colors"
            >
              RDW Updates Ontvangen
            </button>
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
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Waar mag je rijden?</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
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
};

export default EScooterLandingPage;
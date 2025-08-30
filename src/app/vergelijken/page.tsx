"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, Zap, Battery, Weight, CheckCircle, AlertTriangle, ExternalLink, ChevronDown, ChevronUp, Star, RotateCcw } from 'lucide-react';

export default function VergelijkenPage() {
  const [showTop3, setShowTop3] = useState(true);
  const [rdwFilter, setRdwFilter] = useState('all'); // 'all', 'rdw', 'non-rdw'
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [rangeFilter, setRangeFilter] = useState([0, 60]);
  const [weightFilter, setWeightFilter] = useState([0, 35]);
  const [sortBy, setSortBy] = useState('price'); // 'price', 'range', 'weight', 'rating'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc', 'desc'
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const allScooters = [
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
      reviews: 0,
      isRDWApproved: true,
      image: '/images/selana_alpha.jpeg',
      features: ['RDW Goedgekeurd', 'Kenteken Verplicht', 'Verzekering Mogelijk', 'NFC Keycard', 'Richtingaanwijzers'],
      description: 'De enige volledig legale e-step in Nederland',
      available: 'Pre-order - Ivm wachtlijst, levering kan 3 maanden duren',
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
      affiliate: 'https://www.mediamarkt.nl/nl/product/_xiaomi-5-eu-elektrische-step-grijs-1879086.html'
    },
    // Additional scooters for better filtering demonstration
    {
      id: 4,
      brand: 'SEGWAY',
      model: 'Ninebot Max G2',
      rdwNumber: null,
      maxSpeed: 25,
      range: 65,
      batteryCapacity: 551,
      weight: 24.3,
      price: 649,
      rating: 4.2,
      reviews: 15,
      isRDWApproved: false,
      image: '/images/segway-max-g2.jpeg',
      features: ['Lange Range', '10.5" Banden', 'IPX5 Waterbestendig', 'Cruise Control'],
      description: 'Lange afstand model - Alleen eigen terrein',
      available: 'Direct leverbaar',
      affiliate: null
    },
    {
      id: 5,
      brand: 'XIAOMI',
      model: 'Pro 2',
      rdwNumber: null,
      maxSpeed: 25,
      range: 45,
      batteryCapacity: 474,
      weight: 14.2,
      price: 379,
      rating: 4.1,
      reviews: 8,
      isRDWApproved: false,
      image: '/images/xiaomi-pro-2.jpeg',
      features: ['Lichtgewicht', 'Opvouwbaar', '8.5" Banden', 'E-ABS Remmen'],
      description: 'Lichtgewicht model - Alleen eigen terrein',
      available: 'Direct leverbaar',
      affiliate: null
    }
  ];

  const brands = [...new Set(allScooters.map(scooter => scooter.brand))];

  // Filtering and sorting logic
  const filteredAndSortedScooters = useMemo(() => {
    let filtered = allScooters.filter(scooter => {
      // RDW Filter
      if (rdwFilter === 'rdw' && !scooter.isRDWApproved) return false;
      if (rdwFilter === 'non-rdw' && scooter.isRDWApproved) return false;
      
      // Price Filter
      if (scooter.price < priceRange[0] || scooter.price > priceRange[1]) return false;
      
      // Range Filter
      if (scooter.range < rangeFilter[0] || scooter.range > rangeFilter[1]) return false;
      
      // Weight Filter
      if (scooter.weight < weightFilter[0] || scooter.weight > weightFilter[1]) return false;
      
      // Brand Filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(scooter.brand)) return false;
      
      // Search Filter
      if (searchTerm && !`${scooter.brand} ${scooter.model}`.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      
      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      let aValue = (a as any)[sortBy];
      let bValue = (b as any)[sortBy];
      
      // Handle rating (null values should go to end)
      if (sortBy === 'rating') {
        if (aValue === null) aValue = -1;
        if (bValue === null) bValue = -1;
      }
      
      if (sortOrder === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

    return filtered;
  }, [allScooters, rdwFilter, priceRange, rangeFilter, weightFilter, selectedBrands, searchTerm, sortBy, sortOrder]);

  const top3Scooters = allScooters.slice(0, 3);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const resetFilters = () => {
    setRdwFilter('all');
    setPriceRange([0, 2000]);
    setRangeFilter([0, 60]);
    setWeightFilter([0, 35]);
    setSelectedBrands([]);
    setSearchTerm('');
    setSortBy('price');
    setSortOrder('asc');
  };

  const activeFiltersCount = [
    rdwFilter !== 'all',
    priceRange[0] !== 0 || priceRange[1] !== 2000,
    rangeFilter[0] !== 0 || rangeFilter[1] !== 60,
    weightFilter[0] !== 0 || weightFilter[1] !== 35,
    selectedBrands.length > 0,
    searchTerm !== ''
  ].filter(Boolean).length;

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
              <a href="#" className="text-slate-600 hover:text-slate-800 font-semibold">Vergelijken</a>
              <a href="/rdw-info" className="text-slate-600 hover:text-slate-800">RDW Info</a>
              <a href="#" className="text-slate-600 hover:text-slate-800">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Elektrische Step Vergelijker
          </h1>
          <p className="text-xl text-slate-600">
            Vergelijk alle e-steps en vind het perfecte model voor jouw situatie
          </p>
        </div>

        {/* Top 3 Section (Collapsible) */}
        <div className="mb-8 bg-white rounded-lg shadow border">
          <button
            onClick={() => setShowTop3(!showTop3)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-2xl font-bold text-slate-900">Top 3 Aanbevolen</h2>
            {showTop3 ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>
          
          {showTop3 && (
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {top3Scooters.map((scooter, index) => (
                  <div key={scooter.id} className={`relative border-2 rounded-lg p-4 ${
                    scooter.isRDWApproved ? 'border-green-500 bg-green-50' :
                    index === 1 ? 'border-gray-400 bg-gray-50' :
                    'border-orange-400 bg-orange-50'
                  }`}>
                    <div className={`absolute -top-3 left-4 px-3 py-1 rounded-full text-sm font-bold ${
                      index === 0 ? 'bg-green-500 text-white' :
                      index === 1 ? 'bg-gray-500 text-white' :
                      'bg-orange-500 text-white'
                    }`}>
                      #{index + 1}
                    </div>
                    
                    <img 
                      src={scooter.image} 
                      alt={`${scooter.brand} ${scooter.model}`}
                      className="w-full h-32 object-contain bg-white rounded mb-3"
                    />
                    
                    <h3 className="font-bold text-lg mb-2">{scooter.brand} {scooter.model}</h3>
                    <p className="text-2xl font-bold text-slate-900 mb-2">€{scooter.price.toLocaleString()}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        {scooter.maxSpeed} km/h
                      </span>
                      <span className="flex items-center gap-1">
                        <Battery className="w-4 h-4" />
                        {scooter.range} km
                      </span>
                    </div>
                    
                    {scooter.isRDWApproved ? (
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium mb-3">
                        ✅ RDW Goedgekeurd
                      </div>
                    ) : (
                      <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-medium mb-3">
                        ⚠️ Alleen eigen terrein
                      </div>
                    )}
                    
                    {scooter.isRDWApproved && (
                      <Link 
                        href="/selana-alpha"
                        className="block w-full bg-slate-700 text-white py-2 rounded hover:bg-slate-800 transition-colors text-center"
                      >
                        Bekijk Details
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Filter Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow border p-6 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      {activeFiltersCount}
                    </span>
                  )}
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-sm text-slate-600 hover:text-slate-800 flex items-center gap-1"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                )}
              </div>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Zoeken</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Zoek merk of model..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* RDW Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">RDW Status</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="rdwStatus"
                      checked={rdwFilter === 'rdw'}
                      onChange={() => setRdwFilter('rdw')}
                      className="mr-3 text-green-600"
                    />
                    <span className="text-green-700 font-medium">Alleen RDW Goedgekeurd</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="rdwStatus"
                      checked={rdwFilter === 'non-rdw'}
                      onChange={() => setRdwFilter('non-rdw')}
                      className="mr-3 text-orange-600"
                    />
                    <span className="text-orange-700 font-medium">Alleen Eigen Terrein</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="rdwStatus"
                      checked={rdwFilter === 'all'}
                      onChange={() => setRdwFilter('all')}
                      className="mr-3"
                    />
                    <span>Alle E-Steps</span>
                  </label>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Merk</h4>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="mr-3 text-orange-600"
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Prijs</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>€{priceRange[0]}</span>
                    <span>€{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Bereik</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="70"
                    step="5"
                    value={rangeFilter[1]}
                    onChange={(e) => setRangeFilter([rangeFilter[0], parseInt(e.target.value)])}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>{rangeFilter[0]} km</span>
                    <span>{rangeFilter[1]} km</span>
                  </div>
                </div>
              </div>

              {/* Weight Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Gewicht</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="35"
                    step="1"
                    value={weightFilter[1]}
                    onChange={(e) => setWeightFilter([weightFilter[0], parseInt(e.target.value)])}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>{weightFilter[0]} kg</span>
                    <span>{weightFilter[1]} kg</span>
                  </div>
                </div>
              </div>

              {/* Sort Options */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Sorteren</h4>
                <div className="space-y-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="price">Prijs</option>
                    <option value="range">Bereik</option>
                    <option value="weight">Gewicht</option>
                    <option value="rating">Beoordeling</option>
                  </select>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSortOrder('asc')}
                      className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                        sortOrder === 'asc' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Laag → Hoog
                    </button>
                    <button
                      onClick={() => setSortOrder('desc')}
                      className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                        sortOrder === 'desc' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Hoog → Laag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">
                {filteredAndSortedScooters.length} e-steps gevonden
              </h2>
              {activeFiltersCount > 0 && (
                <p className="text-slate-600 mt-1">
                  Met {activeFiltersCount} actieve filter{activeFiltersCount !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {/* Scooter Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredAndSortedScooters.map(scooter => (
                <div key={scooter.id} className={`bg-white rounded-lg shadow border hover:shadow-lg transition-shadow ${
                  scooter.isRDWApproved ? 'border-l-4 border-l-green-500' : ''
                }`}>
                  <div className="relative">
                    <img 
                      src={scooter.image} 
                      alt={`${scooter.brand} ${scooter.model}`}
                      className="w-full h-48 object-contain bg-gradient-to-br from-gray-50 to-gray-100 p-4"
                    />
                    
                    <div className="absolute top-4 left-4">
                      {scooter.isRDWApproved ? (
                        <div className="bg-green-100 border border-green-200 px-3 py-1 rounded-full flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-green-700">RDW</span>
                        </div>
                      ) : (
                        <div className="bg-orange-100 border border-orange-200 px-3 py-1 rounded-full flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-medium text-orange-700">Eigen Terrein</span>
                        </div>
                      )}
                    </div>

                    {scooter.rating && (
                      <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 text-orange-400 fill-current" />
                        <span className="text-sm font-medium">{scooter.rating}</span>
                        <span className="text-xs text-slate-500">({scooter.reviews})</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {scooter.brand} {scooter.model}
                        </h3>
                        <p className="text-sm text-slate-500">{scooter.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900">€{scooter.price.toLocaleString()}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <Zap className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="text-sm font-medium">{scooter.maxSpeed} km/h</div>
                        <div className="text-xs text-gray-500">Max snelheid</div>
                      </div>
                      <div className="text-center">
                        <Battery className="w-5 h-5 text-green-600 mx-auto mb-1" />
                        <div className="text-sm font-medium">{scooter.range} km</div>
                        <div className="text-xs text-gray-500">Bereik</div>
                      </div>
                      <div className="text-center">
                        <Weight className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                        <div className="text-sm font-medium">{scooter.weight} kg</div>
                        <div className="text-xs text-gray-500">Gewicht</div>
                      </div>
                    </div>

                    {scooter.isRDWApproved && (
                      <div className="flex gap-3">
                        <Link 
                          href="/selana-alpha"
                          className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-800 transition-colors text-center"
                        >
                          Details
                        </Link>
                        {scooter.affiliate && (
                          <a 
                            href={scooter.affiliate}
                            target="_blank"
                            rel="nofollow noopener"
                            className="px-4 py-2 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-1"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Kopen
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredAndSortedScooters.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">Geen e-steps gevonden met deze filters.</p>
                <button 
                  onClick={resetFilters}
                  className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Reset Alle Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
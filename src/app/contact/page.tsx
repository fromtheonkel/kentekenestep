"use client";

import React, { useState } from 'react';
import { Mail, MessageCircle, Plus, CheckCircle, Send, User, Building, ExternalLink, AlertTriangle, FileText } from 'lucide-react';
import { trackFormStart, trackFormSubmit } from '@/lib/gtm';

export default function ContactPage() {
  const [generalForm, setGeneralForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [productForm, setProductForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productName: '',
    rdwNumber: '',
    price: '',
    website: '',
    affiliateProgram: '',
    description: '',
    specifications: ''
  });

  const [generalSubmitted, setGeneralSubmitted] = useState(false);
  const [productSubmitted, setProductSubmitted] = useState(false);

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Track form submission attempt
      trackFormSubmit('contact_general');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'general',
          ...generalForm
        }),
      });

      if (response.ok) {
        setGeneralSubmitted(true);
        setGeneralForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setGeneralSubmitted(false), 60000); // 1 minute
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Er is iets misgegaan. Probeer het later opnieuw of stuur een email naar iwanvandenenk@gmail.com');
    }
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Track form submission attempt
      trackFormSubmit('contact_product_addition');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'product',
          ...productForm
        }),
      });

      if (response.ok) {
        setProductSubmitted(true);
        setProductForm({
          companyName: '', contactPerson: '', email: '', phone: '', 
          productName: '', rdwNumber: '', price: '', website: '', 
          affiliateProgram: '', description: '', specifications: ''
        });
        setTimeout(() => setProductSubmitted(false), 60000); // 1 minute
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Er is iets misgegaan. Probeer het later opnieuw of stuur een email naar iwanvandenenk@gmail.com');
    }
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
              <a href="/rdw-info" className="text-slate-600 hover:text-slate-800">E-Step Regelgeving</a>
              <a href="/blog" className="text-slate-600 hover:text-slate-800">Blog</a>
              <a href="#" className="text-slate-600 hover:text-slate-800 font-semibold">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Neem <span className="text-orange-400">Contact</span> Op
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Vragen over e-steps? Wilt u uw RDW goedgekeurde model toevoegen? We helpen u graag!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* General Contact Form */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Algemene Vragen</h2>
                  <p className="text-slate-600">Stel uw vraag over e-steps, regelgeving of de website</p>
                </div>
              </div>

              {generalSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Bericht verzonden!</h3>
                  <p className="text-green-800">Bedankt voor uw vraag. Wij nemen zo spoedig mogelijk contact op.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        value={generalForm.name}
                        onChange={(e) => setGeneralForm({...generalForm, name: e.target.value})}
                        onFocus={() => trackFormStart('contact_general')}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        value={generalForm.email}
                        onChange={(e) => setGeneralForm({...generalForm, email: e.target.value})}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Onderwerp *
                    </label>
                    <select
                      value={generalForm.subject}
                      onChange={(e) => setGeneralForm({...generalForm, subject: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Selecteer een onderwerp</option>
                      <option value="algemene-vraag">Algemene vraag</option>
                      <option value="rdw-regelgeving">RDW regelgeving</option>
                      <option value="product-info">Product informatie</option>
                      <option value="website-feedback">Website feedback</option>
                      <option value="technische-issue">Technische issue</option>
                      <option value="samenwerking">Samenwerking</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Bericht *
                    </label>
                    <textarea
                      value={generalForm.message}
                      onChange={(e) => setGeneralForm({...generalForm, message: e.target.value})}
                      rows={6}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Beschrijf uw vraag of opmerking..."
                      required
                    />
                  </div>

                  <button
                    onClick={handleGeneralSubmit}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Verstuur Bericht
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Product Addition Form */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Plus className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">E-Step Toevoegen</h2>
                  <p className="text-slate-600">RDW goedgekeurde step met affiliate programma</p>
                </div>
              </div>

              {/* Requirements Notice */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-orange-900 mb-1">Vereisten</h3>
                    <ul className="text-orange-800 text-sm space-y-1">
                      <li>• RDW goedgekeurd voertuig met geldig RDW nummer</li>
                      <li>• Actief affiliate programma met commissiestructuur</li>
                      <li>• Nederlandse markt beschikbaarheid</li>
                    </ul>
                  </div>
                </div>
              </div>

              {productSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Aanvraag ontvangen!</h3>
                  <p className="text-green-800">Wij beoordelen uw product en nemen binnen 5 werkdagen contact op.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Company Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      Bedrijfsinformatie
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Bedrijfsnaam *
                        </label>
                        <input
                          type="text"
                          value={productForm.companyName}
                          onChange={(e) => setProductForm({...productForm, companyName: e.target.value})}
                          onFocus={() => trackFormStart('contact_product_addition')}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Contactpersoon *
                        </label>
                        <input
                          type="text"
                          value={productForm.contactPerson}
                          onChange={(e) => setProductForm({...productForm, contactPerson: e.target.value})}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          value={productForm.email}
                          onChange={(e) => setProductForm({...productForm, email: e.target.value})}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          value={productForm.phone}
                          onChange={(e) => setProductForm({...productForm, phone: e.target.value})}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      Productinformatie
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Product naam *
                        </label>
                        <input
                          type="text"
                          value={productForm.productName}
                          onChange={(e) => setProductForm({...productForm, productName: e.target.value})}
                          placeholder="Bijv. SELANA Alpha"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          RDW Nummer *
                        </label>
                        <input
                          type="text"
                          value={productForm.rdwNumber}
                          onChange={(e) => setProductForm({...productForm, rdwNumber: e.target.value})}
                          placeholder="RDW-2024-MERK-001"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Adviesprijs (€) *
                        </label>
                        <input
                          type="number"
                          value={productForm.price}
                          onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                          placeholder="1900"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          value={productForm.website}
                          onChange={(e) => setProductForm({...productForm, website: e.target.value})}
                          placeholder="https://www.voorbeeld.nl"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Affiliate Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      Affiliate Programma
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Affiliate programma details *
                      </label>
                      <textarea
                        value={productForm.affiliateProgram}
                        onChange={(e) => setProductForm({...productForm, affiliateProgram: e.target.value})}
                        rows={3}
                        placeholder="Beschrijf uw affiliate programma: commissiepercentage, tracking methode, uitbetalingsvoorwaarden..."
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      Aanvullende Informatie
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Productbeschrijving
                      </label>
                      <textarea
                        value={productForm.description}
                        onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                        rows={3}
                        placeholder="Korte beschrijving van uw product en unieke kenmerken..."
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Technische specificaties
                      </label>
                      <textarea
                        value={productForm.specifications}
                        onChange={(e) => setProductForm({...productForm, specifications: e.target.value})}
                        rows={4}
                        placeholder="Max snelheid, bereik, gewicht, batterij capaciteit, bijzondere functies..."
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleProductSubmit}
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="h-5 w-5" />
                    Aanvraag Indienen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-lg shadow border p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <FileText className="h-6 w-6 text-purple-600" />
            Veelgestelde Vragen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Hoe lang duurt een reactie?</h3>
                <p className="text-slate-600 text-sm">
                  Wij streven ernaar binnen 24 uur te reageren op algemene vragen. 
                  Voor producttoevoegingen kan het 5 werkdagen duren.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Zijn er kosten verbonden aan listing?</h3>
                <p className="text-slate-600 text-sm">
                  Nee, toevoegen van RDW goedgekeurde e-steps aan onze vergelijker is gratis. 
                  Wij verdienen via affiliate commissies bij doorverwijzingen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Wat als mijn step geen RDW goedkeuring heeft?</h3>
                <p className="text-slate-600 text-sm">
                  Momenteel richten wij ons alleen op RDW goedgekeurde modellen. 
                  Andere steps kunnen we niet toevoegen aan de vergelijker.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Hoe werkt het affiliate programma?</h3>
                <p className="text-slate-600 text-sm">
                  Wij plaatsen trackinglinks naar uw webshop. Bij verkopen via onze site 
                  ontvangen wij een commissie volgens uw affiliate voorwaarden.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Kan ik mijn productinfo later aanpassen?</h3>
                <p className="text-slate-600 text-sm">
                  Ja, neem contact op om prijzen, specificaties of andere informatie 
                  bij te werken. Wij houden de database actueel.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Zijn er eisen aan het affiliate programma?</h3>
                <p className="text-slate-600 text-sm">
                  Ja, wij werken alleen met serieuze programma's met redelijke commissies, 
                  betrouwbare tracking en tijdige uitbetalingen.
                </p>
              </div>
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
                <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white font-semibold">Contact</a></li>
                <li><a href="/disclaimer" className="hover:text-white">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 KentekenEstep.nl. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
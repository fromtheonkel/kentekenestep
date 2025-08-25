"use client";

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Scale, ExternalLink, DollarSign, FileText, Clock, Shield, Info } from 'lucide-react';

export default function DisclaimerPage() {
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
              <a href="/" className="text-slate-600 hover:text-slate-800 font-semibold">Home</a>
              <a href="/vergelijken" className="text-slate-600 hover:text-slate-800">Vergelijken</a>
              <a href="/blog" className="text-slate-600 hover:text-slate-800">Blog</a>
              <a href="/rdw-info" className="text-slate-600 hover:text-slate-800">E-Step Regelgeving</a>
              <a href="/contact" className="text-slate-600 hover:text-slate-800">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-100 p-4 rounded-full">
              <Scale className="h-12 w-12 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Disclaimer & Algemene Voorwaarden</h1>
          <p className="text-xl text-slate-600">
            Belangrijke informatie over het gebruik van KentekenEstep.nl
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
            <Clock className="h-4 w-4" />
            <span>Laatst bijgewerkt: 6 juli 2025</span>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-orange-900 mb-2">Belangrijke mededeling</h2>
              <p className="text-orange-800">
                KentekenEstep.nl is een <strong>informatieve vergelijkingswebsite</strong>. Wij geven geen persoonlijk advies 
                en zijn niet verantwoordelijk voor uw keuzes of de gevolgen daarvan. Raadpleeg altijd officiële bronnen 
                en experts voor definitieve beslissingen.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Informatief karakter */}
          <div className="bg-white rounded-lg shadow border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Info className="h-6 w-6 text-blue-600" />
              Informatief karakter website
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold text-slate-900 mb-2">Vergelijking, geen advies</h3>
                <p className="text-slate-600">
                  KentekenEstep.nl presenteert productinformatie en vergelijkingen om u te informeren. 
                  Wij geven <strong>geen persoonlijk advies</strong> over welke e-step u zou moeten kopen. 
                  Elke aankoopbeslissing is uw eigen verantwoordelijkheid.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-semibold text-slate-900 mb-2">RDW informatie</h3>
                <p className="text-slate-600">
                  Informatie over RDW goedkeuringen en regelgeving is gebaseerd op publiek beschikbare bronnen. 
                  Voor de meest actuele en juridisch bindende informatie verwijzen wij naar de 
                  <a href="https://www.rdw.nl" className="text-blue-600 hover:text-blue-700 underline ml-1" target="_blank" rel="noopener">
                    officiële RDW website
                  </a>.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold text-slate-900 mb-2">Geen juridisch advies</h3>
                <p className="text-slate-600">
                  Informatie over wetgeving en regelgeving is algemeen van aard. 
                  Voor specifieke juridische vragen raadpleegt u een advocaat of officiële instantie.
                </p>
              </div>
            </div>
          </div>

          {/* Prijzen en productinformatie */}
          <div className="bg-white rounded-lg shadow border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-green-600" />
              Prijzen en productinformatie
            </h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Prijzen kunnen wijzigen</h3>
                <p className="text-yellow-800 text-sm">
                  Prijzen worden regelmatig bijgewerkt maar kunnen tussentijds wijzigen. 
                  Controleer altijd de actuele prijs bij de winkel voor aanschaf.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">📊 Productspecificaties</h3>
                  <ul className="text-slate-600 space-y-1 text-sm">
                    <li>• Gebaseerd op fabrikantinformatie</li>
                    <li>• Kunnen afwijken van werkelijke prestaties</li>
                    <li>• Wijzigingen door fabrikant mogelijk</li>
                    <li>• Geen garantie op volledigheid</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">🔄 Beschikbaarheid</h3>
                  <ul className="text-slate-600 space-y-1 text-sm">
                    <li>• Voorraad kan wijzigen zonder waarschuwing</li>
                    <li>• Levertijden zijn indicatief</li>
                    <li>• Pre-orders hebben mogelijk wachtlijsten</li>
                    <li>• Controleer beschikbaarheid bij winkel</li>
                  </ul>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">🏪 Winkelpartners</h3>
                <p className="text-slate-600 text-sm">
                  Prijzen en voorwaarden van externe winkels vallen onder hun eigen algemene voorwaarden. 
                  Wij zijn niet verantwoordelijk voor transacties bij derden.
                </p>
              </div>
            </div>
          </div>

          {/* Uitsluiting aansprakelijkheid */}
          <div className="bg-white rounded-lg shadow border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Shield className="h-6 w-6 text-red-600" />
              Uitsluiting van aansprakelijkheid
            </h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">🚫 Beperkte aansprakelijkheid</h3>
                <p className="text-red-800 text-sm">
                  KentekenEstep.nl is niet aansprakelijk voor schade voortvloeiend uit het gebruik van 
                  de website of beslissingen gebaseerd op onze informatie.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">⚖️ Geen aansprakelijkheid voor</h3>
                  <ul className="text-slate-600 space-y-1 text-sm">
                    <li>• Onjuiste of verouderde informatie</li>
                    <li>• Beslissingen gebaseerd op website content</li>
                    <li>• Schade door gebruik van geadviseerde producten</li>
                    <li>• Verlies door wijzigende regelgeving</li>
                    <li>• Problemen met externe websites/winkels</li>
                    <li>• Technische storingen of uitval</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">🛡️ Uw eigen verantwoordelijkheid</h3>
                  <ul className="text-slate-600 space-y-1 text-sm">
                    <li>• Controleren van actuele prijzen</li>
                    <li>• Verifiëren van productspecificaties</li>
                    <li>• Naleven van verkeersregels en wetgeving</li>
                    <li>• Afsluiten van adequate verzekeringen</li>
                    <li>• Veilig gebruik van elektrische steps</li>
                    <li>• Bijhouden van regelgevingswijzigingen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Affiliate links */}
          <div className="bg-white rounded-lg shadow border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <ExternalLink className="h-6 w-6 text-purple-600" />
              Affiliate partnerships
            </h2>
            
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-2">💰 Commissie links</h3>
                <p className="text-purple-800 text-sm">
                  KentekenEstep.nl bevat affiliate links naar winkelpartners. 
                  Wij ontvangen een kleine commissie bij aankopen via deze links, 
                  zonder extra kosten voor u.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">🤝 Transparantie</h3>
                  <ul className="text-slate-600 space-y-1 text-sm">
                    <li>• Affiliate links zijn duidelijk gemarkeerd</li>
                    <li>• Commissies beïnvloeden geen vergelijkingen</li>
                    <li>• Onafhankelijke product beoordeling</li>
                    <li>• Geen verborgen kosten voor gebruikers</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">🔒 Uw privacy</h3>
                  <ul className="text-slate-600 space-y-1 text-sm">
                    <li>• Geen persoonlijke data gedeeld</li>
                    <li>• Anonieme click tracking</li>
                    <li>• Externe privacy policies van toepassing</li>
                    <li>• Opt-out via cookie instellingen</li>
                  </ul>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">🛍️ Aankopen bij partners</h3>
                <p className="text-slate-600 text-sm">
                  Transacties vinden plaats tussen u en de winkelpartner. 
                  Wij zijn niet betrokken bij levering, retourbeleid of klantenservice van partners.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectueel eigendom */}
          <div className="bg-white rounded-lg shadow border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-indigo-600" />
              Intellectueel eigendom
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="font-semibold text-slate-900 mb-2">© Auteursrecht</h3>
                <p className="text-slate-600 text-sm">
                  Alle content op KentekenEstep.nl (teksten, afbeeldingen, logo's) is eigendom van de website-eigenaar, 
                  tenzij anders vermeld. Reproductie zonder toestemming is niet toegestaan.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-semibold text-slate-900 mb-2">🏷️ Handelsmerken</h3>
                <p className="text-slate-600 text-sm">
                  Merknamen en logo's van fabrikanten zijn eigendom van de respectievelijke eigenaren. 
                  Gebruik op deze website is uitsluitend informatief.
                </p>
              </div>
            </div>
          </div>

          {/* Toepasselijk recht */}
          <div className="bg-white rounded-lg shadow border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">⚖️ Toepasselijk recht</h2>
            
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">🇳🇱 Nederlands recht</h3>
                <p className="text-slate-600 text-sm">
                  Op deze disclaimer en het gebruik van KentekenEstep.nl is Nederlands recht van toepassing. 
                  Geschillen worden voorgelegd aan de bevoegde Nederlandse rechter.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">📍 Vestigingsplaats</h3>
                  <p className="text-slate-600 text-sm">Nederland</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">📧 Contact</h3>
                  <p className="text-slate-600 text-sm">info@kentekenestep.nl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Wijzigingen */}
          <div className="bg-white rounded-lg shadow border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">📋 Wijzigingen voorwaarden</h2>
            <p className="text-slate-600 mb-4">
              Wij behouden ons het recht voor deze disclaimer en algemene voorwaarden te wijzigen. 
              Wijzigingen worden bekendgemaakt op deze pagina en zijn direct van kracht.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm text-slate-600">
                <strong>Versie:</strong> 1.0<br/>
                <strong>Laatst bijgewerkt:</strong> 6 juli 2025<br/>
                <strong>Volgende review:</strong> 6 januari 2026
              </p>
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
            <p>&copy; 2025 KentekenEstep.nl. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
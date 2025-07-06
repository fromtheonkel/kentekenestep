"use client";

import React from 'react';
import { Shield, Eye, ExternalLink, Mail, FileText, Clock, CheckCircle } from 'lucide-react';

export default function PrivacyPage() {
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
            <div className="bg-blue-100 p-4 rounded-full">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacybeleid</h1>
          <p className="text-xl text-slate-600">
            Wij respecteren uw privacy en zijn transparant over hoe wij uw gegevens gebruiken
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
            <Clock className="h-4 w-4" />
            <span>Laatst bijgewerkt: 6 juli 2025</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          
          {/* Introductie */}
          <div className="bg-white rounded-lg shadow border p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-blue-600" />
              Introductie
            </h2>
            <p className="text-slate-600 leading-relaxed">
              KentekenEstep.nl is een onafhankelijke vergelijkingswebsite voor elektrische steps en RDW regelgeving. 
              Wij verzamelen minimale gegevens en gebruiken deze uitsluitend om onze service te verbeteren. 
              Dit privacybeleid legt uit welke informatie wij verzamelen en hoe wij deze gebruiken.
            </p>
          </div>

          {/* Contact Informatie */}
          <div className="bg-white rounded-lg shadow border p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Mail className="h-6 w-6 text-blue-600" />
              Contactgegevens
            </h2>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p><strong>Website:</strong> KentekenEstep.nl</p>
              <p><strong>Eigenaar:</strong> Iwan</p>
              <p><strong>E-mail:</strong> privacy@kentekenestep.nl</p>
              <p><strong>Type:</strong> Informatieve vergelijkingswebsite</p>
            </div>
          </div>

          {/* Gegevens die wij verzamelen */}
          <div className="bg-white rounded-lg shadow border p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Eye className="h-6 w-6 text-blue-600" />
              Welke gegevens verzamelen wij?
            </h2>
            
            <div className="space-y-6">
              {/* Analytics */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">📊 Website Analytics</h3>
                <p className="text-slate-600 mb-3">
                  Wij gebruiken Google Analytics 4 om anoniem websitegebruik te meten:
                </p>
                <ul className="text-slate-600 space-y-1">
                  <li>• Bezochte pagina's en duur van bezoek</li>
                  <li>• Apparaattype (desktop, tablet, mobiel)</li>
                  <li>• Geanonimiseerde locatie (land/regio)</li>
                  <li>• Verwijzende websites</li>
                  <li>• Browser type en versie</li>
                </ul>
                <p className="text-sm text-slate-500 mt-2">
                  <strong>Belangrijk:</strong> IP-adressen worden geanonimiseerd en er worden geen persoonlijke profielen aangemaakt.
                </p>
              </div>

              {/* Cookies */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">🍪 Cookies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Noodzakelijke Cookies</h4>
                    <p className="text-sm text-green-700">
                      Voor het onthouden van uw cookie voorkeuren en beveiligingsfuncties.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-blue-700">
                      Google Analytics voor websitestatistieken (alleen met uw toestemming).
                    </p>
                  </div>
                </div>
              </div>

              {/* Affiliate */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">🔗 Affiliate Tracking</h3>
                <p className="text-slate-600 mb-3">
                  Wanneer u doorklikt naar winkelpartners, verzamelen wij:
                </p>
                <ul className="text-slate-600 space-y-1">
                  <li>• Welke product link werd aangeklikt</li>
                  <li>• Of er een aankoop heeft plaatsgevonden (anoniem)</li>
                  <li>• Commissie informatie (geen persoonlijke data)</li>
                </ul>
                <p className="text-sm text-slate-500 mt-2">
                  Deze informatie wordt gebruikt voor commissieberekening en is noodzakelijk voor de werking van affiliate partnerships.
                </p>
              </div>
            </div>
          </div>

          {/* Hoe gebruiken wij uw gegevens */}
          <div className="bg-white rounded-lg shadow border p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Hoe gebruiken wij uw gegevens?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Website verbetering</h3>
                  <p className="text-slate-600">Analytics helpen ons te begrijpen welke content nuttig is en waar verbeteringen nodig zijn.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Technische functionaliteit</h3>
                  <p className="text-slate-600">Cookies zorgen ervoor dat de website correct functioneert en uw voorkeuren onthoudt.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Affiliate commissies</h3>
                  <p className="text-slate-600">Tracking van doorverwijzingen zorgt ervoor dat wij de website kunnen onderhouden via commissies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Uw rechten */}
          <div className="bg-white rounded-lg shadow border p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Uw rechten (AVG/GDPR)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">🔍 Recht op inzage</h3>
                <p className="text-slate-600 text-sm">U kunt opvragen welke gegevens wij van u hebben.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">✏️ Recht op correctie</h3>
                <p className="text-slate-600 text-sm">U kunt onjuiste gegevens laten corrigeren.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">🗑️ Recht op verwijdering</h3>
                <p className="text-slate-600 text-sm">U kunt verzoeken uw gegevens te laten verwijderen.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">⚙️ Recht op beperking</h3>
                <p className="text-slate-600 text-sm">U kunt de verwerking van uw gegevens beperken.</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                <strong>Contact:</strong> Voor het uitoefenen van uw rechten kunt u contact opnemen via privacy@kentekenestep.nl
              </p>
            </div>
          </div>

          {/* Externe services */}
          <div className="bg-white rounded-lg shadow border p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <ExternalLink className="h-6 w-6 text-purple-600" />
              Externe services
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Google Analytics 4</h3>
                <p className="text-slate-600 text-sm mb-2">
                  Voor websitestatistieken. Google heeft zijn eigen privacybeleid.
                </p>
                <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-700 text-sm underline" target="_blank" rel="noopener">
                  Google Privacy Policy →
                </a>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Affiliate Partners</h3>
                <p className="text-slate-600 text-sm mb-2">
                  Wanneer u doorklikt naar winkelpartners gelden hun privacyvoorwaarden.
                </p>
                <p className="text-slate-500 text-xs">
                  Wij delen geen persoonlijke gegevens met affiliate partners.
                </p>
              </div>
            </div>
          </div>

          {/* Beveiliging */}
          <div className="bg-white rounded-lg shadow border p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">🔒 Beveiliging</h2>
            <p className="text-slate-600 mb-4">
              Wij nemen de beveiliging van uw gegevens serieus:
            </p>
            <ul className="text-slate-600 space-y-2">
              <li>• Alle verbindingen zijn beveiligd met SSL/TLS encryptie</li>
              <li>• Wij slaan minimale gegevens op</li>
              <li>• Analytics gegevens worden geanonimiseerd</li>
              <li>• Cookies hebben beperkte geldigheid</li>
              <li>• Regelmatige veiligheidsupdates van de website</li>
            </ul>
          </div>

          {/* Wijzigingen */}
          <div className="bg-white rounded-lg shadow border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">📋 Wijzigingen in dit beleid</h2>
            <p className="text-slate-600 mb-4">
              Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Belangrijke wijzigingen zullen we duidelijk communiceren op de website.
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
                <li><a href="#" className="hover:text-white font-semibold">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
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
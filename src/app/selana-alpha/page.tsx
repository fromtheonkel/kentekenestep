"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, XCircle, Battery, Zap, Weight, Ruler, Shield, Navigation, Eye, Bluetooth, Wrench, Euro, Calendar, MapPin } from 'lucide-react';
import { trackCTA } from '@/lib/gtm';
import { generateBreadcrumbStructuredData } from '@/lib/structured-data';

export default function SelanaAlphaPage() {
  // Generate breadcrumb and product structured data
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: "Home", url: "https://kentekenestep.nl" },
    { name: "Vergelijken", url: "https://kentekenestep.nl/vergelijken" },
    { name: "SELANA Alpha", url: "https://kentekenestep.nl/selana-alpha" }
  ]);

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SELANA Alpha",
    "description": "De eerste volledig RDW goedgekeurde elektrische step in Nederland met kenteken en verzekering",
    "brand": {
      "@type": "Brand",
      "name": "SELANA"
    },
    "model": "Alpha",
    "image": "https://kentekenestep.nl/images/selana_alpha.jpeg",
    "url": "https://kentekenestep.nl/selana-alpha",
    "category": "Elektrische Step",
    "offers": {
      "@type": "Offer",
      "price": "1900",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/PreOrder",
      "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "seller": {
        "@type": "Organization",
        "name": "SELANA"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Max Snelheid",
        "value": "25 km/h"
      },
      {
        "@type": "PropertyValue",
        "name": "Bereik",
        "value": "45-60 km"
      },
      {
        "@type": "PropertyValue",
        "name": "Gewicht",
        "value": "28,3 kg"
      },
      {
        "@type": "PropertyValue",
        "name": "Batterij Capaciteit",
        "value": "576 Wh"
      },
      {
        "@type": "PropertyValue",
        "name": "RDW Goedkeuring",
        "value": "Ja"
      },
      {
        "@type": "PropertyValue",
        "name": "RDW Nummer",
        "value": "RDW-2024-SELANA-001"
      }
    ],
    "isRelatedTo": {
      "@type": "Thing",
      "name": "RDW Goedkeuring",
      "description": "Officiële typegoedkeuring van de Rijksdienst voor het Wegverkeer"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData)
        }}
      />
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Link 
              href="/vergelijken" 
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Terug naar vergelijken
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="lg:flex">
            {/* Product Image */}
            <div className="lg:w-1/2 bg-white p-8 lg:p-12 flex items-center justify-center">
              <img 
                src="/images/selana_raw.png" 
                alt="SELANA Alpha elektrische step"
                className="max-w-full max-h-96 object-contain"
              />
            </div>
            
            {/* Product Info */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 border border-green-200 px-3 py-1 rounded-full flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">RDW Goedgekeurd</span>
                  </div>
                  <div className="bg-blue-100 border border-blue-200 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-blue-700">Enige legale e-step</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-slate-900 mb-2">SELANA Alpha</h1>
                <p className="text-xl text-slate-600">De eerste en enige RDW goedgekeurde elektrische step in Nederland</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-slate-900">€1.900</div>
                  <div className="text-sm text-slate-600">Exclusief verzekering</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-900">€6/maand</div>
                  <div className="text-sm text-slate-600">WA-verzekering</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Zap className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">25 km/h</div>
                  <div className="text-sm text-slate-600">Max snelheid</div>
                </div>
                <div className="text-center">
                  <Battery className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold">45-60 km</div>
                  <div className="text-sm text-slate-600">Bereik</div>
                </div>
                <div className="text-center">
                  <Weight className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold">28,3 kg</div>
                  <div className="text-sm text-slate-600">Gewicht</div>
                </div>
                <div className="text-center">
                  <Ruler className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold">10"</div>
                  <div className="text-sm text-slate-600">Luchtbanden</div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mb-6">
                <p className="text-orange-800 text-sm">
                  <strong>Pre-order:</strong> Vanwege wachtlijst kan levering tot 3 maanden duren
                </p>
              </div>

              <a 
                href="https://selana.nl/?utm_source=kentekenestep&utm_medium=referral&utm_campaign=details"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackCTA.selanaBestellenButton}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg text-center block"
              >
                Bekijk op Selana.nl
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Voordelen */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              Voordelen
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-green-900">Enige RDW goedgekeurde e-step</h4>
                  <p className="text-green-700 text-sm">Volledig legaal op Nederlandse fietspaden en wegen</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-green-900">Richtingaanwijzers</h4>
                  <p className="text-green-700 text-sm">Veilig aangeven van richting zoals bij een brommer</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-green-900">Volledige verlichting</h4>
                  <p className="text-green-700 text-sm">Koplamp, achterlicht en reflectoren voor maximale zichtbaarheid</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-green-900">10 inch luchtbanden</h4>
                  <p className="text-green-700 text-sm">Comfortabel rijden met goede demping en grip</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-green-900">Premium kwaliteit</h4>
                  <p className="text-green-700 text-sm">Hoogwaardige materialen en 2 jaar fabrieksgarantie</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-green-900">Verzekering mogelijk</h4>
                  <p className="text-green-700 text-sm">WA-verzekering voor €6/maand beschermt tegen aansprakelijkheid</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nadelen */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <XCircle className="w-5 h-5 text-white" />
              </div>
              Nadelen
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-red-900">Hoge aanschafprijs</h4>
                  <p className="text-red-700 text-sm">€1.900 is aanzienlijk duurder dan illegale alternatieven</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-red-900">Niet inklapbaar</h4>
                  <p className="text-red-700 text-sm">Moeilijk op te bergen in kleine ruimtes of mee te nemen in het OV</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-red-900">Zwaarder dan concurrentie</h4>
                  <p className="text-red-700 text-sm">28,3 kg is aanzienlijk zwaarder dan de meeste andere e-steps</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-red-900">GPS tracking abonnement</h4>
                  <p className="text-red-700 text-sm">Extra maandelijkse kosten voor GPS tracking en app functies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-red-900">Lange wachttijd</h4>
                  <p className="text-red-700 text-sm">Pre-order met leveringstijd tot 3 maanden</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Specificaties */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Volledige Specificaties</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-slate-900 border-b pb-2">Motor & Prestaties</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Motorvermogen:</span>
                  <span className="font-medium">500W piek</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Max snelheid:</span>
                  <span className="font-medium">25 km/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Bereik:</span>
                  <span className="font-medium">45-60 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Max hellingshoek:</span>
                  <span className="font-medium">15°</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-slate-900 border-b pb-2">Batterij & Opladen</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Batterijcapaciteit:</span>
                  <span className="font-medium">576 Wh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Batterijtype:</span>
                  <span className="font-medium">Li-ion</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Oplaadtijd:</span>
                  <span className="font-medium">4-6 uur</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Uitneembare batterij:</span>
                  <span className="font-medium">Nee</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-slate-900 border-b pb-2">Afmetingen & Gewicht</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Gewicht:</span>
                  <span className="font-medium">28,3 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Max belasting:</span>
                  <span className="font-medium">120 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Inklapbaar:</span>
                  <span className="font-medium">Nee</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Bandenmaat:</span>
                  <span className="font-medium">10" luchtbanden</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-slate-900 border-b pb-2">Veiligheid & Verlichting</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Richtingaanwijzers:</span>
                  <span className="font-medium">✅ Ja</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Koplamp:</span>
                  <span className="font-medium">✅ LED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Achterlicht:</span>
                  <span className="font-medium">✅ LED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Reflectoren:</span>
                  <span className="font-medium">✅ Ja</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-slate-900 border-b pb-2">Smart Features</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">NFC Keycard:</span>
                  <span className="font-medium">✅ Ja</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">App connectie:</span>
                  <span className="font-medium">✅ Bluetooth</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">GPS tracking:</span>
                  <span className="font-medium">€/maand extra</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Display:</span>
                  <span className="font-medium">LCD scherm</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-slate-900 border-b pb-2">Juridisch</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">RDW goedkeuring:</span>
                  <span className="font-medium text-green-600">✅ Ja</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Kenteken vereist:</span>
                  <span className="font-medium">✅ Ja</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Verzekering vereist:</span>
                  <span className="font-medium">✅ WA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Rijbewijs:</span>
                  <span className="font-medium">AM of B</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Cost of Ownership */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Totale Kosten</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Eenmalige kosten</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>SELANA Alpha e-step</span>
                  <span className="font-semibold">€1.900</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Kenteken aanvragen</span>
                  <span className="font-semibold">€18</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Helm (optioneel)</span>
                  <span className="font-semibold">€50</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t-2 font-bold">
                  <span>Totaal eenmalig</span>
                  <span>€1.968</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Maandelijkse kosten</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>WA-verzekering</span>
                  <span className="font-semibold">€6</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>GPS tracking (optioneel)</span>
                  <span className="font-semibold">€TBD</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Onderhoud/elektriciteit</span>
                  <span className="font-semibold">€5</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t-2 font-bold">
                  <span>Totaal per maand</span>
                  <span>€11+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 mt-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om legaal op pad te gaan?</h2>
          <p className="text-xl text-green-100 mb-6">
            De SELANA Alpha is momenteel de enige manier om legaal met een e-step door Nederland te rijden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://selana.nl/?utm_source=kentekenestep&utm_medium=referral&utm_campaign=details_cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackCTA.selanaBestellenFooter}
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Bestel bij SELANA
            </a>
            <Link 
              href="/vergelijken"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Terug naar vergelijken
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
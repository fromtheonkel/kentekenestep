"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Shield, FileText, CreditCard, AlertTriangle, ExternalLink } from 'lucide-react';
import { trackCTA } from '@/lib/gtm';

export default function GoedgekeurdeElektrischeStepsPage() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Goedgekeurde Elektrische Steps Nederland 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Officiële RDW typegoedkeuring ✓ Kenteken ✓ Verzekering ✓ Legaal op openbare weg
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/vergelijken"
                onClick={() => trackCTA.homeVergelijkenButton()}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Vergelijk Goedgekeurde E-Steps
              </Link>
              <Link 
                href="/selana-alpha"
                onClick={() => trackCTA.homeSelanaButton()}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Bekijk SELANA Alpha €1.900
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes E-Steps Legal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wat maakt een elektrische step goedgekeurd?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Voor gebruik op openbare wegen moet een e-step voldoen aan strenge Nederlandse en Europese eisen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">RDW Typegoedkeuring</h3>
              <p className="text-gray-600">
                Officiële certificering door de Rijksdienst voor het Wegverkeer (RDW).
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenteken Verplicht</h3>
              <p className="text-gray-600">
                Kenteken registratie bij RDW vanaf juli 2025. Kosten €18-40.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WA-Verzekering</h3>
              <p className="text-gray-600">
                Verplichte verzekering vanaf €42 per jaar. Verzekeringssticker vereist.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Veiligheidseisen</h3>
              <p className="text-gray-600">
                Richtingaanwijzers, verlichting, remmen en andere veiligheidsvoorzieningen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Available Models */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Beschikbare Goedgekeurde Modellen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Momenteel is er één officieel RDW goedgekeurde elektrische step beschikbaar in Nederland.
            </p>
          </div>

          {/* SELANA Alpha Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-200">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">SELANA Alpha</h3>
                    <p className="text-green-100">Nationale Typegoedkeuring</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">€1.900</div>
                    <div className="text-green-100">Incl. BTW</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Specificaties:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Max snelheid: 25 km/h</li>
                      <li>• Bereik: Tot 52,5 km</li>
                      <li>• Batterij: 576 Wh</li>
                      <li>• Gewicht: 28,3 kg</li>
                      <li>• Wielen: 10 inch tubeless</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Inclusief:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        RDW Typegoedkeuring
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Richtingaanwijzers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        LED verlichting
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Dubbel remsysteem
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        2 jaar garantie
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/selana-alpha"
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
                  >
                    Volledige Specificaties
                  </Link>
                  <a 
                    href="https://selana.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCTA.selanaBestellenButton()}
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors text-center inline-flex items-center justify-center"
                  >
                    Bestellen bij SELANA
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Legal E-Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom kiezen voor een goedgekeurde e-step?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">Voordelen ✅</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Legaal overal:</strong> Rijden op openbare weg, fietspad en voetgangersgebied</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Geen boetes:</strong> Officieel toegestaan door RDW</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Verzekering mogelijk:</strong> WA-dekking beschikbaar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Veiligheid:</strong> Voldoet aan alle veiligheidseisen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Kwaliteit:</strong> Getest en gecertificeerd</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">Illegale E-Steps ❌</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>€340 boete:</strong> Voor rijden zonder verzekering</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Inbeslagname:</strong> Politie kan step in beslag nemen</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Geen verzekering:</strong> Persoonlijke aansprakelijkheid</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Alleen privé terrein:</strong> Niet op openbare weg</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Financieel risico:</strong> Schade eigen rekening</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Total Cost Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Totale Kosten Vergelijking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoewel illegale e-steps goedkoper lijken, loopt de totale investering vaak hoger uit.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Kostenpost</th>
                  <th className="px-6 py-4 text-left font-bold text-red-600">Illegale E-Step</th>
                  <th className="px-6 py-4 text-left font-bold text-green-600">SELANA Alpha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Aanschafprijs</td>
                  <td className="px-6 py-4 text-red-600">€300 - €700</td>
                  <td className="px-6 py-4 text-green-600">€1.900</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Kenteken (eenmalig)</td>
                  <td className="px-6 py-4 text-red-600">Niet mogelijk</td>
                  <td className="px-6 py-4 text-green-600">€18 - €40</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Verzekering (per jaar)</td>
                  <td className="px-6 py-4 text-red-600">Niet mogelijk</td>
                  <td className="px-6 py-4 text-green-600">€42 - €60</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Boete risico</td>
                  <td className="px-6 py-4 text-red-600">€340 + inbeslagname</td>
                  <td className="px-6 py-4 text-green-600">€0</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Gebruiksgebied</td>
                  <td className="px-6 py-4 text-red-600">Alleen eigen terrein</td>
                  <td className="px-6 py-4 text-green-600">Overal legaal</td>
                </tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="px-6 py-4">5-jaar totaal (excl. boetes)</td>
                  <td className="px-6 py-4 text-red-600">€300 - €700</td>
                  <td className="px-6 py-4 text-green-600">€2.150 - €2.240</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              <strong>Let op:</strong> Eén boete van €340 plus inbeslagname maakt illegale e-steps duurder dan legale alternatieven.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Veelgestelde Vragen
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hoeveel goedgekeurde elektrische steps zijn er in Nederland?
              </h3>
              <p className="text-gray-700">
                Momenteel is er slechts één officieel RDW goedgekeurde elektrische step: de SELANA Alpha voor €1.900. 
                Andere merken zoals Segway, Xiaomi en NIU hebben nog geen Nederlandse typegoedkeuring aangevraagd.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Wat kost een kenteken voor een elektrische step?
              </h3>
              <p className="text-gray-700">
                Een kenteken kost €18 als je een bestaand kenteken gebruikt, of €40 voor een nieuw kenteken. 
                Dit is een eenmalige kost bij de RDW. Vanaf juli 2025 is een kenteken verplicht voor alle RDW goedgekeurde e-steps.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kan ik een illegale e-step later laten goedkeuren?
              </h3>
              <p className="text-gray-700">
                Nee, individuele e-steps kunnen niet achteraf worden goedgekeurd. Alleen fabrikanten kunnen typegoedkeuring 
                aanvragen voor hun modellen. Illegale e-steps mogen alleen op eigen privé terrein worden gebruikt.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hoe weet ik zeker dat een e-step RDW goedgekeurd is?
              </h3>
              <p className="text-gray-700">
                Check de officiële RDW database op rdw.nl. Zoek naar het merk en model, of vraag de verkoper naar het 
                RDW goedkeuringsnummer. Momenteel staat alleen de SELANA Alpha op de lijst als "bijzondere bromfiets".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor een legale elektrische step?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Vergelijk specificaties, bekijk prijzen en maak een weloverwogen keuze voor je nieuwe RDW goedgekeurde e-step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/vergelijken"
              onClick={() => trackCTA.homeVergelijkenButton()}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Vergelijk Goedgekeurde E-Steps
            </Link>
            <Link 
              href="/selana-alpha"
              onClick={() => trackCTA.homeSelanaButton()}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Bekijk SELANA Alpha Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
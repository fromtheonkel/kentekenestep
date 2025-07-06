'use client'

import React, { useState, useEffect } from 'react'
import { Cookie, Shield, CheckCircle, XCircle, BarChart, ExternalLink, Settings } from 'lucide-react'

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<string | null>(null)

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookieConsent')
    if (savedConsent) {
      setConsent(savedConsent)
      if (savedConsent === 'accepted') {
        enableTracking()
      }
    } else {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const enableTracking = () => {
    // Trigger GTM dataLayer events for consent
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'cookie_consent_granted',
        consent_analytics: true,
        consent_marketing: true,
        consent_affiliate: true
      })
      
      // Enable Google Analytics
      window.dataLayer.push({
        event: 'gtm_init'
      })
    }
  }

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setConsent('accepted')
    setShowBanner(false)
    enableTracking()
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setConsent('declined')
    setShowBanner(false)
    
    // Trigger GTM dataLayer event for consent declined
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'cookie_consent_declined',
        consent_analytics: false,
        consent_marketing: false,
        consent_affiliate: false
      })
    }
  }

  const resetConsent = () => {
    localStorage.removeItem('cookieConsent')
    setConsent(null)
    setShowBanner(true)
  }

  // Show consent status indicator when banner is hidden
  if (!showBanner && consent) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={resetConsent}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg ${
            consent === 'accepted' 
              ? 'bg-green-100 text-green-800 hover:bg-green-200 border border-green-300' 
              : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300'
          }`}
          title="Klik om cookie voorkeuren te wijzigen"
        >
          {consent === 'accepted' ? (
            <>
              <CheckCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Cookies geaccepteerd</span>
            </>
          ) : (
            <>
              <XCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Cookies geweigerd</span>
            </>
          )}
        </button>
      </div>
    )
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          <div className="flex items-start space-x-3 flex-1">
            <div className="flex-shrink-0 mt-1">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                Cookie-instellingen KentekenEstep.nl
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Wij gebruiken cookies om onze website te verbeteren en jouw ervaring te optimaliseren. 
                Dit omvat <strong>Google Analytics</strong> voor websitestatistieken en{' '}
                <strong>affiliate tracking</strong> voor winkelpartnerschappen.{' '}
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-orange-600 hover:text-orange-700 underline inline-flex items-center gap-1"
                >
                  <Settings className="h-3 w-3" />
                  {showDetails ? 'Verberg details' : 'Toon details'}
                </button>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={declineCookies}
              className="px-6 py-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium transition-colors border border-slate-300"
            >
              Alleen noodzakelijk
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-emerald-500 text-white hover:bg-emerald-600 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Cookie className="h-4 w-4" />
              <span>Alle cookies accepteren</span>
            </button>
          </div>
        </div>

        {/* Detailed info */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
              
              <div className="bg-slate-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="h-4 w-4 text-blue-600" />
                  <h4 className="font-semibold text-slate-900">Analytics</h4>
                </div>
                <p className="mb-2">
                  <strong>Google Analytics 4:</strong> Anonieme websitestatistieken om gebruikerservaring te verbeteren
                </p>
                <p className="text-slate-500">
                  • Pagina bezoeken<br/>
                  • Apparaat type<br/>
                  • Geanonimiseerde locatie
                </p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ExternalLink className="h-4 w-4 text-orange-600" />
                  <h4 className="font-semibold text-slate-900">Affiliate Tracking</h4>
                </div>
                <p className="mb-2">
                  <strong>Winkelpartnerschappen:</strong> Tracking van doorverwijzingen naar online winkels
                </p>
                <p className="text-slate-500">
                  • Klik tracking<br/>
                  • Aankoop conversies<br/>
                  • Commissie berekening
                </p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <h4 className="font-semibold text-slate-900">Noodzakelijk</h4>
                </div>
                <p className="mb-2">
                  <strong>Functionele cookies:</strong> Voor correct functioneren van de website
                </p>
                <p className="text-slate-500">
                  • Cookie voorkeuren<br/>
                  • Veiligheid<br/>
                  • Basisfunctionaliteit
                </p>
              </div>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              <p>
                <strong>Privacy:</strong> Wij respecteren je privacy. Je kunt je voorkeuren altijd wijzigen. 
                Meer info in ons{' '}
                <a href="/privacy" className="text-orange-600 hover:text-orange-700 underline">
                  privacybeleid
                </a>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[]
  }
}
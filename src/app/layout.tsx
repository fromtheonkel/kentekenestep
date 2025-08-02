import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import CookieConsentBanner from '@/components/CookieConsentBanner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'KentekenEstep.nl - RDW Goedgekeurde E-Steps Vergelijken',
    template: '%s | KentekenEstep.nl'
  },
  description: "Vergelijk RDW goedgekeurde elektrische steps en populaire alternatieven. Ontdek de enige volledig legale e-step in Nederland en meer. ✓ SELANA Alpha ✓ Prijzen ✓ Reviews ✓ Regelgeving",
  keywords: [
    'RDW goedgekeurde e-steps', 
    'legale e-step Nederland', 
    'kenteken e-step', 
    'SELANA Alpha', 
    'e-step verzekering', 
    'elektrische step vergelijken',
    'e-step regelgeving',
    'e-step kenteken aanvragen',
    'legaal e-step rijden'
  ],
  authors: [{ name: 'Iwan' }],
  creator: 'KentekenEstep.nl',
  publisher: 'KentekenEstep.nl',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.kentekenestep.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.kentekenestep.nl',
    title: 'KentekenEstep.nl - RDW Goedgekeurde E-Steps',
    description: 'Het complete overzicht van legale e-steps in Nederland. Vergelijk RDW goedgekeurde modellen, bekijk prijzen en lees over regelgeving.',
    siteName: 'KentekenEstep.nl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KentekenEstep.nl - RDW Goedgekeurde E-Steps',
    description: 'Vergelijk legale e-steps in Nederland - SELANA Alpha en meer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        {/* Google Tag Manager - EXACT zoals jij het had */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-KW6X22NL');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Initialize consent to denied by default - EXACT zoals jij het had */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
              });
            `,
          }}
        />

        {/* Structured Data voor SEO (nieuw toegevoegd) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "KentekenEstep.nl",
              "description": "Overzicht van RDW goedgekeurde e-steps in Nederland",
              "url": "https://www.kentekenestep.nl",
              "publisher": {
                "@type": "Organization",
                "name": "KentekenEstep.nl",
                "url": "https://www.kentekenestep.nl"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) - EXACT zoals jij het had */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KW6X22NL"
            height="0" 
            width="0" 
            style={{display:'none', visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <Header />
        <main>
          {children}
        </main>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Goedgekeurde Elektrische Steps Nederland 2025 | RDW Kenteken & Verzekering',
  description: "Overzicht RDW goedgekeurde e-steps - Elektrische steps met kenteken, typegoedkeuring en verzekering. SELANA Alpha €1.900. Legaal op openbare weg.",
  keywords: "goedgekeurde elektrische step, elektrische step met kenteken, RDW goedgekeurd, elektrische step kenteken, goedgekeurde e steps, elektrische step rdw goedgekeurd, SELANA Alpha, kenteken estep",
  openGraph: {
    title: 'Goedgekeurde Elektrische Steps Nederland 2025 | RDW Kenteken',
    description: 'Goedgekeurde elektrische steps met kenteken: RDW typegoedkeuring, verzekering en SELANA Alpha €1.900. Legaal op openbare weg.',
    url: 'https://kentekenestep.nl',
    siteName: 'KentekenEstep.nl',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: 'https://kentekenestep.nl/logo_estep_rdw.svg',
        width: 512,
        height: 512,
        alt: 'KentekenEstep.nl Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goedgekeurde Elektrische Steps met Kenteken Nederland 2025',
    description: 'RDW goedgekeurde elektrische steps met kenteken. SELANA Alpha €1.900. Verzekering & regelgeving.',
    images: ['https://kentekenestep.nl/logo_estep_rdw.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://kentekenestep.nl',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo_estep_rdw.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logo_estep_rdw.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    other: [
      { rel: 'mask-icon', url: '/logo_estep_rdw.svg', color: '#000000' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Initialize dataLayer and gtag function FIRST */}
        <Script id="gtag-base" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });
          `}
        </Script>

        {/* Then load GTM */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
              
              // Use Cloudflare proxy for better performance
              j.src = '/analytics/?id='+i+dl;
                
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KW6X22NL');
          `}
        </Script>

        {/* GTM NoScript fallback */}
        <noscript>
          <iframe 
            src="/analytics/?id=GTM-KW6X22NL"
            height="0" 
            width="0" 
            style={{display:'none', visibility:'hidden'}}
          />
        </noscript>
        
        <Header />
        <main>{children}</main>
        <CookieConsentBanner />
      </body>
    </html>
  )
}
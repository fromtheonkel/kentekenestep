// src/lib/structured-data.ts
// Utility functions for generating structured data across the website

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbStructuredData(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KentekenEstep.nl",
    "url": "https://kentekenestep.nl",
    "logo": "https://kentekenestep.nl/logo_estep_rdw.svg",
    "description": "Onafhankelijke informatie over RDW goedgekeurde elektrische steps in Nederland",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "Netherlands"
    },
    "knowsAbout": [
      "Elektrische steps",
      "RDW goedkeuring",
      "Nederlandse regelgeving",
      "E-step verzekeringen",
      "SELANA Alpha"
    ],
    "sameAs": [
      "https://kentekenestep.nl"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Dutch",
      "url": "https://kentekenestep.nl/contact"
    }
  };
}

export function generateWebSiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KentekenEstep.nl",
    "url": "https://kentekenestep.nl",
    "description": "Informatie over RDW goedgekeurde elektrische steps in Nederland",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kentekenestep.nl/vergelijken",
      "query-input": "required name=search_term_string"
    }
  };
}
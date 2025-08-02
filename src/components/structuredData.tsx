export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KentekenEstep.nl",
    "description": "Overzicht van RDW goedgekeurde e-steps in Nederland",
    "url": "https://www.kentekenestep.nl",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.kentekenestep.nl/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "KentekenEstep.nl",
      "url": "https://www.kentekenestep.nl"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
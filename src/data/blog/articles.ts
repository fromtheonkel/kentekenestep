// src/data/blog/articles.ts - VERVANG je huidige bestand hiermee

export interface BlogArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  featured: boolean;
  readTime: string;
  published: boolean;
}

export const categories = [
  'all',
  'Nieuws',
  'Reviews',
  'Regelgeving',
  'Tips',
  'Vergelijking'
];

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: "Selana Alpha €150 goedkoper of toch weer niet?",
    slug: "selana-alpha-prijsverlaging-2025",
    excerpt: "De Selana Alpha kreeg een prijsverlaging naar €1.750, maar met een wachttijd van 3 maanden en een prijs die nog altijd 3-4x hoger ligt dan illegale alternatieven, rijzen er vragen over de toegankelijkheid.",
    author: "Iwan",
    date: "2025-08-04",
    category: "Nieuws",
    tags: ["Selana", "Alpha", "Prijzen", "RDW", "Legaal"],
    // Geen image = mooie gradient fallback
    featured: true,
    readTime: "3 min",
    published: true,
    content: `
      <h2>Prijsverlaging van €150</h2>
      <p>De Selana Alpha, de enige volledig RDW-goedgekeurde e-step in Nederland, heeft een prijsverlaging gekregen van €150. De nieuwe prijs was €1.750, maar dit lijkt al weer terug gedraaid. Misschien omdat er toch nog geen concurrentie is.</p>
      
      <h2>Wachttijd en beschikbaarheid</h2>
      <p>Ondanks de hoge prijs is er nog altijd een wachttijd van ongeveer 3 maanden. Dit maakt de Selana Alpha niet alleen duur, maar ook moeilijk verkrijgbaar.</p>
      
      <h2>Vergelijking met illegale alternatieven</h2>
      <p>Populaire e-steps zoals de Segway Ninebot kosten tussen de €300-500, wat de Selana Alpha 3-4x duurder maakt. Dit roept vragen op over de toegankelijkheid van legaal e-step rijden in Nederland.</p>
      
      <h2>Conclusie</h2>
      <p>Hoewel een prijsverlaging welkom zal zijn, blijft de Selana Alpha een dure optie voor wie legaal wil rijden. De hoge prijs en wachttijd zorgen ervoor dat veel mensen kiezen voor illegale alternatieven.</p>
    `
  },
  {
    id: 2,
    title: "RDW Regelgeving 2025: Wat je moet weten over kenteken en verzekering",
    slug: "rdw-regelgeving-2025-kenteken-verzekering",
    excerpt: "Een complete gids over de nieuwe RDW regelgeving voor e-steps in 2025. Van kenteken aanvragen tot verplichte verzekeringen - alles wat je moet weten.",
    author: "Iwan",
    date: "2025-08-02",
    category: "Regelgeving",
    tags: ["RDW", "Kenteken", "Verzekering", "Wet", "2025"],
    featured: true,
    readTime: "5 min",
    published: true,
    content: `
      <h2>Nieuwe regelgeving 2025</h2>
      <p>Per 2025 zijn er strengere regels voor e-steps in Nederland. Alleen RDW-goedgekeurde modellen zijn nog legaal op de openbare weg.</p>
      
      <h2>Kenteken verplicht</h2>
      <p>RDW-goedgekeurde e-steps hebben een kenteken nodig. Dit proces kost €40 en duurt gemiddeld 2-3 weken.</p>
      
      <h2>Verzekering</h2>
      <p>Een WA-verzekering is verplicht voor alle e-steps met kenteken. Kosten liggen tussen €80-150 per jaar.</p>
      
      <h2>Wat betekent dit voor jou?</h2>
      <p>Als je legaal wilt rijden, heb je een RDW-goedgekeurde e-step nodig. Momenteel is de Selana Alpha de enige optie, maar er komen meer modellen aan.</p>
    `
  },
  {
    id: 3,
    title: "Top 5 Illegale E-Steps: Wat je koopt maar niet mag rijden",
    slug: "top-5-illegale-e-steps-2025",
    excerpt: "Een overzicht van de populairste e-steps die je overal kunt kopen, maar niet legaal mag gebruiken op Nederlandse wegen. Van Segway tot Xiaomi.",
    author: "Iwan", 
    date: "2025-07-28",
    category: "Reviews",
    tags: ["Segway", "Xiaomi", "Illegaal", "Populair"],
    featured: false,
    readTime: "4 min",
    published: true,
    content: `
      <h2>Waarom zijn ze illegaal?</h2>
      <p>Deze e-steps hebben geen RDW-goedkeuring en mogen daarom niet op de openbare weg gebruikt worden. Toch zijn ze populair vanwege hun lagere prijs.</p>
      
      <h2>De populairste modellen</h2>
      <p>Segway Ninebot, Xiaomi Mi, en andere bekende merken staan hoog in de populariteit maar laag in legaliteit. Ze kosten vaak 3-4x minder dan legale alternatieven.</p>
      
      <h2>Risico's</h2>
      <p>Rijden met een illegale e-step kan leiden tot boetes en inbeslagname. De kosten kunnen uiteindelijk hoger uitvallen dan een legale e-step.</p>
    `
  },
  {
    id: 4,
    title: "E-Step Verzekering: Complete gids voor 2025",
    slug: "e-step-verzekering-gids-2025",
    excerpt: "Alles over e-step verzekeringen: welke zijn verplicht, wat kosten ze, en waar kun je het beste terecht? Complete vergelijking van alle opties.",
    author: "Iwan",
    date: "2025-07-25",
    category: "Tips",
    tags: ["Verzekering", "WA", "Kosten", "Vergelijking"],
    featured: false,
    readTime: "6 min", 
    published: true,
    content: `
      <h2>Verplichte verzekering</h2>
      <p>Voor RDW-goedgekeurde e-steps is een WA-verzekering verplicht. Dit kost tussen €80-150 per jaar, afhankelijk van de verzekeraar.</p>
      
      <h2>Beste opties</h2>
      <p>Verschillende verzekeraars bieden e-step verzekeringen aan. Vergelijk altijd de voorwaarden en dekking.</p>
    `
  },
  {
    id: 5,
    title: "Kenteken Aanvragen: Stap-voor-stap handleiding",
    slug: "kenteken-aanvragen-e-step-handleiding",
    excerpt: "Een praktische handleiding voor het aanvragen van een kenteken voor je RDW-goedgekeurde e-step. Inclusief kosten, benodigde documenten en verwachte doorlooptijd.",
    author: "Iwan",
    date: "2025-07-20",
    category: "Tips", 
    tags: ["Kenteken", "RDW", "Aanvragen", "Handleiding"],
    featured: false,
    readTime: "4 min",
    published: true,
    content: `
      <h2>Stap 1: Documenten verzamelen</h2>
      <p>Je hebt het COC (Certificate of Conformity) nodig van je e-step fabrikant, plus een geldig identiteitsbewijs.</p>
      
      <h2>Stap 2: Aanvragen bij RDW</h2>
      <p>Dit kan online of bij een RDW vestiging. Kosten: €40. Verwachte doorlooptijd: 2-3 weken.</p>
      
      <h2>Stap 3: Kenteken ontvangen</h2>
      <p>Je ontvangt het kenteken per post. Monteer het zichtbaar op je e-step volgens de voorschriften.</p>
    `
  }
];

// Helper functions
export const getFeaturedArticles = () => blogArticles.filter(article => article.featured && article.published);

export const getLatestArticle = () => {
  const published = blogArticles.filter(article => article.published);
  return published.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
};

export const getArticlesByCategory = (category: string) => {
  if (category === 'all') return blogArticles.filter(article => article.published);
  return blogArticles.filter(article => article.category === category && article.published);
};

export const getArticleBySlug = (slug: string) => {
  return blogArticles.find(article => article.slug === slug && article.published) || null;
};

export const searchArticles = (searchTerm: string) => {
  return blogArticles.filter(article => 
    article.published && (
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );
};
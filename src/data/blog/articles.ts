export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'selana-alpha-prijs-update',
    title: 'Selana Alpha €150 goedkoper: maar is €1.750 nog steeds te duur?',
    slug: 'selana-alpha-prijs-update',
    excerpt: 'De Selana Alpha krijgt een prijsverlaging naar €1.750, maar met een wachttijd van 3 maanden en een prijs die nog altijd 3-4x hoger ligt dan illegale alternatieven, rijzen er vragen over de toegankelijkheid.',
    content: `
      <p>Na bijna een jaar op de markt heeft Selana eindelijk de prijs van hun Alpha e-step verlaagd van €1.900 naar €1.750. Een stap in de goede richting, maar de vraag blijft: is dit genoeg om de gemiddelde Nederlandse consument te overtuigen?</p>

      <h3>€1.750: Een kritische blik op de prijs</h3>
      <p>Laten we eerlijk zijn: <strong>€1.750 is nog altijd een behoorlijk bedrag</strong> voor een elektrische step. Ter vergelijking:</p>
      <ul>
        <li><strong>Illegale e-steps</strong>: €400-800 voor vergelijkbare specificaties</li>
        <li><strong>Gewone fiets</strong>: €300-600 voor dagelijks transport</li>
        <li><strong>E-bike</strong>: €1.200-2.000 voor elektrisch vervoer</li>
        <li><strong>Selana Alpha</strong>: €1.750 + verzekering + kenteken</li>
      </ul>
      
      <p>Je betaalt dus een <strong>legaliteitspremie van ongeveer €1.000-1.350</strong> ten opzichte van vergelijkbare niet-goedgekeurde modellen. De vraag is of die legaliteit dat waard is voor de gemiddelde gebruiker.</p>

      <h3>3 maanden wachttijd: een serieus probleem</h3>
      <p>Nog problematischer is de <strong>levertijd van 3 maanden</strong>. In een tijd waarin we gewend zijn aan next-day delivery, voelt dit archaïsch aan. Vooral als je bedenkt dat:</p>
      <ul>
        <li>Illegale alternatieven vaak <strong>binnen 1-3 dagen</strong> geleverd worden</li>
        <li>Je €1.750 vooruit moet betalen voor iets dat je pas over een kwartaal krijgt</li>
        <li>Er <strong>geen garantie</strong> is dat de levertijd niet verder oploopt</li>
        <li>Je intussen gewoon lopend of met het OV moet</li>
      </ul>

      <p><strong>Interesse gewekt ondanks onze kritiek?</strong><br>
      <a href="https://selana.nl/products/alpha?utm_source=kentekenestep&utm_medium=blog&utm_campaign=selana_price_drop_2025&utm_content=review" target="_blank" rel="noopener noreferrer" style="color: #ea580c; font-weight: 600; text-decoration: underline;">Bekijk de Selana Alpha voor €1.750</a></p>
      
      <p style="font-size: 14px; color: #64748b;"><em>Disclaimer: Dit is een kritische analyse. We hebben geen commerciele relatie met Selana, maar sommige links kunnen affiliate-links bevatten voor transparantie.</em></p>
    `,
    author: 'Iwan',
    date: '2025-07-30',
    readTime: '8 min',
    category: 'Product Update',
    tags: ['SELANA', 'Alpha', 'Prijskritiek', 'RDW', 'Analyse'],
    featured: true,
    image: 'https://selana.nl/cdn/shop/files/SELANA_Alpha1.jpg?v=1751712644&width=800'
  },
  {
    id: 'meer-rdw-goedgekeurde-e-steps',
    title: 'Meer RDW Goedgekeurde E-Steps Komen Eraan',
    slug: 'meer-rdw-goedgekeurde-e-steps',
    excerpt: 'De markt voor legale e-steps staat op het punt om flink uit te breiden. Meerdere fabrikanten werken aan RDW goedkeuring voor hun modellen.',
    content: `
      <p>Na het succes van de SELANA Alpha als eerste RDW goedgekeurde e-step in Nederland, staan er meer legale alternatieven op de planning. Verschillende fabrikanten hebben aangekondigd dat zij bezig zijn met het doorlopen van de RDW goedkeuringsprocedure.</p>
      
      <h3>Wat betekent dit voor consumenten?</h3>
      <p>Voor Nederlandse consumenten betekent dit meer keuze in volledig legale e-steps. Tot nu toe was de SELANA Alpha de enige optie voor wie legaal gebruik wilde maken van een elektrische step op de openbare weg.</p>
      
      <h3>Verwachte timeline</h3>
      <ul>
        <li><strong>Q2 2025:</strong> Verwachting van 2-3 nieuwe goedgekeurde modellen</li>
        <li><strong>Q4 2025:</strong> Mogelijk 5-7 legale opties beschikbaar</li>
        <li><strong>2026:</strong> Verwachting van een volwassen markt met 10+ modellen</li>
      </ul>
      
      <h3>Uitdagingen voor fabrikanten</h3>
      <p>Het verkrijgen van RDW goedkeuring is complex en kostbaar. Fabrikanten moeten voldoen aan strenge eisen op het gebied van:</p>
      <ul>
        <li>Constructie en veiligheid</li>
        <li>Verlichting en signalering</li>
        <li>Remmen en stabiliteit</li>
        <li>Geluidsniveau</li>
        <li>Milieuaspecten</li>
      </ul>
    `,
    author: 'Iwan',
    date: '2025-07-06',
    readTime: '4 min',
    category: 'Markt Update',
    tags: ['RDW', 'Goedkeuring', 'Markt', 'Toekomst'],
    featured: true,
    image: 'market-growth'
  },
  {
    id: 'selana-alpha-eerste-rdw-goedgekeurd',
    title: 'SELANA Alpha: De Eerste RDW Goedgekeurde E-Step',
    slug: 'selana-alpha-eerste-rdw-goedgekeurd',
    excerpt: 'Een mijlpaal in de Nederlandse e-step markt. Hoe de SELANA Alpha de weg vrijmaakte voor legaal gebruik van elektrische steps.',
    content: `
      <p>Op 12 maart 2024 maakte SELANA geschiedenis door als eerste fabrikant een RDW goedkeuring te krijgen voor hun Alpha e-step. Dit was een doorbraak voor de Nederlandse e-step markt.</p>
      
      <h3>Het goedkeuringsproces</h3>
      <p>Het proces duurde bijna twee jaar en kostte SELANA naar schatting €500.000 aan ontwikkeling en testen. De Alpha moest voldoen aan dezelfde eisen als andere motorvoertuigen.</p>
      
      <h3>Unieke eigenschappen van de Alpha</h3>
      <ul>
        <li><strong>NFC Keycard:</strong> Vergrendeling en ontgrendeling via kaart</li>
        <li><strong>Richtingaanwijzers:</strong> Verplicht voor RDW goedkeuring</li>
        <li><strong>Kenteken houder:</strong> Ingebouwde bevestiging</li>
        <li><strong>Verzekering interface:</strong> Compatibel met Nederlandse verzekeraars</li>
        <li><strong>Snelheidsbegrenzer:</strong> Maximaal 25 km/h</li>
      </ul>
      
      <h3>Impact op de markt</h3>
      <p>De goedkeuring van de Alpha heeft geleid tot:</p>
      <ul>
        <li>Verhoogde interesse van andere fabrikanten</li>
        <li>Duidelijkheid over wet- en regelgeving</li>
        <li>Nieuwe marktkansen voor legale e-steps</li>
        <li>Bewustwording bij consumenten</li>
      </ul>
      
      <h3>Prijs en beschikbaarheid</h3>
      <p>Met een prijs van €1.900 is de Alpha aanzienlijk duurder dan illegale alternatieven. Dit komt door de ontwikkelkosten en de kleine productieaantallen. Verwacht wordt dat prijzen dalen naarmate meer fabrikanten toetreden.</p>
    `,
    author: 'Iwan',
    date: '2025-07-03',
    readTime: '6 min',
    category: 'Product Review',
    tags: ['SELANA', 'Alpha', 'RDW', 'Review'],
    featured: true,
    image: 'rdw-approval'
  },
  {
    id: 'kentekenplicht-e-steps-juli-2025',
    title: 'Kentekenplicht E-Steps: Wat Verandert er op 1 Juli 2025?',
    slug: 'kentekenplicht-e-steps-juli-2025',
    excerpt: 'Belangrijke wijzigingen in de regelgeving voor RDW goedgekeurde e-steps. Alles wat je moet weten over de nieuwe kentekenplicht.',
    content: `
      <p>Per 1 juli 2025 treden er belangrijke wijzigingen in werking voor RDW goedgekeurde e-steps. De belangrijkste verandering is de invoering van de kentekenplicht voor alle legale elektrische steps.</p>
      
      <h3>Wat houdt de kentekenplicht in?</h3>
      <p>Vanaf 1 juli 2025 moeten alle RDW goedgekeurde e-steps voorzien zijn van een kenteken. Dit kenteken moet zichtbaar bevestigd worden aan de achterzijde van de step.</p>
      
      <h3>Kosten en aanvraag</h3>
      <ul>
        <li><strong>Kenteken aanvraag:</strong> €32,60 (eenmalig)</li>
        <li><strong>Tenaamstelling:</strong> €16,90 (bij verkoop)</li>
        <li><strong>Vervangingskosten:</strong> €71,30 (bij verlies/diefstal)</li>
      </ul>
      
      <h3>Verzekeringskantoor</h3>
      <p>Naast het kenteken wordt ook een verzekering verplicht. Verwachte kosten:</p>
      <ul>
        <li><strong>WA verzekering:</strong> €8-15 per maand</li>
        <li><strong>Casco uitbreiding:</strong> €15-25 per maand extra</li>
        <li><strong>Diefstal dekking:</strong> Sterk aanbevolen</li>
      </ul>
    `,
    author: 'Iwan',
    date: '2025-06-12',
    readTime: '5 min',
    category: 'Regelgeving',
    tags: ['Kenteken', 'Regelgeving', 'Verzekering', 'RDW'],
    featured: true,
    image: 'license-plate'
  },
  {
    id: 'illegale-e-steps-risicos-gevolgen',
    title: 'Illegale E-Steps: Risico&apos;s en Gevolgen',
    slug: 'illegale-e-steps-risicos-gevolgen',
    excerpt: 'Wat zijn de risico&apos;s van het gebruik van niet-goedgekeurde e-steps op de openbare weg? Een overzicht van boetes en consequenties.',
    content: `
      <p>Hoewel er veel aantrekkelijke e-steps te koop zijn, is het belangrijk om te weten dat de meeste modellen niet toegestaan zijn op de Nederlandse openbare weg.</p>
      
      <h3>Waarom zijn de meeste e-steps illegaal?</h3>
      <p>Nederlandse wetgeving vereist RDW goedkeuring voor gemotoriseerde voertuigen die sneller gaan dan 6 km/h. De meeste e-steps hebben geen goedkeuring omdat:</p>
      <ul>
        <li>Ze niet voldoen aan constructie-eisen</li>
        <li>Ontbrekende verlichting en richtingaanwijzers</li>
        <li>Geen adequate remmen</li>
        <li>Ontbrekende geluidsisolatie</li>
      </ul>
      
      <h3>Boetes en consequenties</h3>
      <ul>
        <li><strong>Rijden zonder kenteken:</strong> €140</li>
        <li><strong>Rijden zonder verzekering:</strong> €400</li>
        <li><strong>Rijden met illegaal voertuig:</strong> €400</li>
        <li><strong>Inbeslagname:</strong> Mogelijk bij herhaalde overtredingen</li>
      </ul>
      
      <h3>Waar mag je wel rijden?</h3>
      <p>Niet-goedgekeurde e-steps mogen alleen gebruikt worden op:</p>
      <ul>
        <li>Eigen terrein</li>
        <li>Privé terreinen met toestemming</li>
        <li>Speciale oefenterreinen</li>
      </ul>
    `,
    author: 'Iwan',
    date: '2025-05-28',
    readTime: '3 min',
    category: 'Regelgeving',
    tags: ['Illegal', 'Boetes', 'Risico', 'Wetgeving'],
    featured: false,
    image: 'illegal-warning'
  }
];

export const categories = ['all', 'Product Update', 'Markt Update', 'Product Review', 'Regelgeving'];

// Helper functions
export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(article => article.slug === slug);
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  if (category === 'all') return blogArticles;
  return blogArticles.filter(article => article.category === category);
}

export function getFeaturedArticles(): BlogArticle[] {
  return blogArticles.filter(article => article.featured);
}

export function getLatestArticles(limit = 3): BlogArticle[] {
  return blogArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
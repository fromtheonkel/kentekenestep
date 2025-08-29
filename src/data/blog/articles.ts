// src/data/blog/articles.ts - Met mooie stock photos

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

// Helper function to create a new blog article with defaults
export const createBlogArticle = (article: Partial<BlogArticle> & { 
  title: string; 
  slug: string; 
  excerpt: string; 
  content: string; 
}): BlogArticle => {
  const nextId = Math.max(...blogArticles.map(a => a.id), 0) + 1;
  
  return {
    id: nextId,
    author: "Iwan",
    date: new Date().toISOString().split('T')[0], // Today's date
    category: "Nieuws",
    tags: [],
    featured: false,
    readTime: "3 min",
    published: true,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop&crop=center&q=80",
    ...article
  };
};

export const blogArticles: BlogArticle[] = [
  // 🆕 NEW ARTICLE - Add new articles here at the top
  {
    id: 9,
    title: "Helmplicht e-step Nederland: wordt de helm ook verplicht voor jongeren?",
    slug: "helmplicht-e-step-nederland-jongeren-2027-tieman",
    excerpt: "Minister Tieman overweegt een helmplicht voor jongeren tot 18 jaar op e-steps om 'verschuivingseffecten' te voorkomen. Wat betekent dit voor de nog prille e-step markt in Nederland? Een analyse van de plannen en gevolgen.",
    author: "Iwan",
    date: "2025-08-28",
    category: "Nieuws",
    tags: ["helmplicht", "jongeren", "regelgeving", "Minister Tieman", "veiligheid"],
    image: "/images/e-step-helm.webp",
    featured: true,
    readTime: "7 min",
    published: true,
    content: `<p class="lead">Minister Tieman heeft aangekondigd een helmplicht in te voeren voor jongeren tot 18 jaar op fatbikes en e-bikes. Maar het verhaal stopt daar niet: de minister overweegt expliciet om deze helmplicht uit te breiden naar "alle lichte elektrische voertuigen", inclusief e-steps. Wat betekent dit voor de nog prille Nederlandse e-step markt?</p>

<h2>Het grote verhaal: van fatbike naar alle lichte elektrische voertuigen</h2>

<p>Op 28 augustus 2025 kondigde minister Robert Tieman (Infrastructuur en Waterstaat) aan een helmplicht te willen invoeren voor kinderen tot 18 jaar die rijden op een elektrische fiets, zoals een fatbike. Mogelijk wordt de helmplicht uitgebreid naar andere lichte elektrische voertuigen, zoals de e-step.</p>

<p>De aanleiding is alarmerend: de laatste cijfers tonen dat er in 2024 6 keer zo veel jongeren op de elektrische fiets op de spoedeisende hulp (SEH) zijn beland met hersenletsel. Maar waarom zouden e-steps automatisch meegepakt worden in deze regelgeving?</p>

<h2>De rationale: het "verschuivingseffect"</h2>

<p>De minister is helder over zijn beweegredenen. Om een verschuivingseffect te voorkomen, wordt ook gekeken naar een leeftijdsgebonden helmplicht voor álle lichte elektrische voertuigen (bijvoorbeeld de e-step).</p>

<p>Dit verschuivingseffect is een logische zorg. Als jongeren een helm moeten dragen op e-bikes maar niet op e-steps, dan zou je kunnen verwachten dat ze massaal overstappen naar e-steps.</p>

<h2>De paradox: meer regels voor een markt die nauwelijks bestaat</h2>

<p>Hier ontstaat een opmerkelijke situatie. Terwijl de minister regels overweegt voor e-steps om verschuiving te voorkomen, is de legale e-step markt in Nederland nog microscopisch klein.</p>

<p>Sinds 1 juli 2025 hebben e-steps een kenteken nodig. Momenteel is de Selana Alpha de enige RDW goedgekeurde e-step. De werkelijkheid is dat de meeste e-steps die worden aangeboden niet goedgekeurd zijn en niet de weg op mogen.</p>`
  },
  {
    id: 8,
    title: "Nieuwe e-scooter regels Spanje vs Nederland: wat verandert er?",
    slug: "nieuwe-e-scooter-regels-spanje-vs-nederland-wat-verandert-er",
    excerpt: "In de wereld van elektrische mobiliteit staan zowel Spanje als Nederland voor belangrijke veranderingen in 2025 en 2026. Beide landen voeren nieuwe regelgeving in voor elektrische scooters, maar de aanpak verschilt aanzienlijk.",
    author: "Iwan",
    date: "2025-08-25",
    category: "Nieuws",
    tags: ["RDW", "verzekering", "kenteken", "regelgeving", "Spanje"],
    image: "/images/spanje_estep.webp",
    featured: false,
    readTime: "5 min",
    published: true,
    content: `<p class="lead">In de wereld van elektrische mobiliteit staan zowel Spanje als Nederland voor belangrijke veranderingen in 2025 en 2026. Beide landen voeren nieuwe regelgeving in voor elektrische scooters en andere persoonlijke mobiliteitsmiddelen (PMV's), maar de aanpak verschilt aanzienlijk. Dit artikel analyseert de verschillen en overeenkomsten tussen beide landen.</p>

<h2>Spanje: revolutionaire veranderingen in 2026</h2>

<h3>De nieuwe wetgeving</h3>

<p>Vanaf januari 2026 wordt het verplicht om een wettelijke aansprakelijkheidsverzekering te hebben en je voertuig te registreren bij de DGT voor elektrische scooters in Spanje. Deze maatregel geldt voor alle voertuigen voor persoonlijke mobiliteit, waaronder:</p>

<ul>
<li>elektrische scooters</li>
<li>Segways</li>
<li>Monowheels</li>
<li>Hoverboards</li>
<li>Andere PMV's</li>
</ul>

<h3>Doelstellingen van de Spaanse regelgeving</h3>

<p>Het doel is volgens de regering tweeledig: slachtoffers van ongevallen beschermen en voorkomen dat ze hulpeloos achterblijven als de bestuurder insolvent is, en het beheer van schadevergoedingen verbeteren.</p>

<h3>Registratie en identificatie</h3>

<p>De nieuwe wet voorziet ook in de oprichting van een openbaar register van scooters en eigenaars tegen 2 januari 2026. Eigenaren van elektrische steps zullen hun voertuigen ook moeten registreren bij de provinciale verkeersautoriteiten. Hier krijgen de steps een soort kentekenplaat of identificatienummer toegewezen.</p>

<h3>Omvang van de maatregel</h3>

<p>Deze maatregel, die naar verwachting in 2026 in werking zal treden, zal van toepassing zijn op alle ongeveer vijf miljoen elektrische steps in Spanje.</p>

<h2>Nederland: gefaseerde implementatie sinds 2025</h2>

<h3>Huidige Nederlandse regels</h3>

<p>Nederland heeft al een voorsprong genomen met regelgeving voor elektrische steps. U moet de e-step verzekeren voor wettelijke aansprakelijkheid (WA). U plakt de sticker van de verzekeraar op de e-step.</p>

<h3>Kentekenplicht timeline</h3>

<p>Sinds 1 juli 2025 hebben e-steps een kenteken nodig. Dit geldt ook voor alle andere bijzondere bromfietsen. Voor bestaande voertuigen geldt: Goedgekeurde e-steps van vóór 1 juli 2025 hebben vanaf 1 juli 2026 een kenteken nodig.</p>

<h3>Goedkeuring: het cruciale verschil</h3>

<p>Een belangrijk punt in Nederland is dat de meeste steps zonder trapondersteuning zijn niet goedgekeurd. Daar mag u niet mee rijden op de weg. Let op: de meeste e-steps die worden aangeboden, zijn niet goedgekeurd. Een kenteken aanvragen voor een niet-goedgekeurde e-step is niet mogelijk.</p>

<h2>Vergelijking: Spanje vs Nederland</h2>

<h3>Overeenkomsten</h3>

<ul>
<li><strong>Verzekeringsverplichting</strong>
  <ul>
    <li>Beide landen vereisen een WA-verzekering</li>
    <li>Focus op bescherming van slachtoffers</li>
    <li>Verzekeraar meldt status aan overheidsinstantie (DGT/RDW)</li>
  </ul>
</li>
<li><strong>Registratie bij Overheid</strong>
  <ul>
    <li>Spanje: Registratie bij DGT vanaf 2026</li>
    <li>Nederland: Kentekenregistratie bij RDW sinds juli 2025</li>
  </ul>
</li>
<li><strong>Identificatie op Voertuig</strong>
  <ul>
    <li>Spanje: Kentekenplaat of identificatienummer</li>
    <li>Nederland: Kenteken</li>
  </ul>
</li>
</ul>

<h3>Belangrijke Verschillen</h3>

<ul>
<li><strong>Timeline</strong>
  <ul>
    <li><strong>Nederland</strong>: Gefaseerde invoering - WA-verzekering al verplicht, kenteken vanaf juli 2025</li>
    <li><strong>Spanje</strong>: Alles tegelijk vanaf januari 2026</li>
  </ul>
</li>
<li><strong>voertuiggoedkeuring</strong>
  <ul>
    <li><strong>Nederland</strong>: alleen goedgekeurde e-steps mogen de weg op, met strikte typegoedkeuring</li>
    <li><strong>Spanje</strong>: geen duidelijke typegoedkeuringsvereiste genoemd, focus ligt op registratie en verzekering</li>
  </ul>
</li>
<li><strong>boetes</strong>
  <ul>
    <li><strong>Nederland</strong>: de politie kan een boete geven. Of uw e-step in beslag nemen, met boetes rond de €340-350 voor niet-verzekerd zijn</li>
    <li><strong>Spanje</strong>: nog onduidelijk wat boetes zullen worden</li>
  </ul>
</li>
<li><strong>bestaande voertuigen</strong>
  <ul>
    <li><strong>Nederland</strong>: bestaande goedgekeurde e-steps krijgen uitstel tot juli 2026</li>
    <li><strong>Spanje</strong>: alle voertuigen moeten vanaf januari 2026 voldoen</li>
  </ul>
</li>
</ul>

<h2>De Nederlandse voorsprong</h2>

<h3>Typegoedkeuring als onderscheidend element</h3>

<p>Het grootste verschil tussen beide landen ligt in de nadruk op typegoedkeuring. Nederland hanteert een striktere benadering waarbij alleen goedgekeurde voertuigen toegestaan zijn op de openbare weg. Dit betekent dat veel populaire importmodellen niet legaal gebruikt kunnen worden.</p>

<h3>Marktimplicaties</h3>

<p>Deze verschillen hebben belangrijke gevolgen voor fabrikanten en consumenten:</p>

<ul>
<li><strong>Nederland</strong>: beperkte keuze, maar garantie op veiligheid en legaliteit</li>
<li><strong>Spanje</strong>: mogelijk bredere keuze, maar onzekerheid over specifieke veiligheidsvereisten</li>
</ul>

<h2>Conclusie</h2>

<p>Beide landen maken belangrijke stappen in de regulering van elektrische mobiliteit, maar kiezen verschillende benaderingen. Nederland kiest voor een gefaseerde, strikt gereguleerde invoering met nadruk op typegoedkeuring. Spanje daarentegen kiest voor een bredere, meer inclusieve benadering die zich richt op registratie en verzekering.</p>

<p>Voor consumenten betekent dit dat zij goed moeten opletten welke regels gelden in hun land en ervoor moeten zorgen dat hun voertuig voldoet aan alle lokale vereisten. De komende jaren zullen cruciaal zijn voor de ontwikkeling van de elektrische micromoboliteitsmarkt in beide landen.</p>

<p>Voor de nieuwste updates over e-step regelgeving en goedgekeurde modellen, blijf onze blog volgen.</p>`
  },
  {
    id: 7,
    title: "België verscherpt e-step controles na stijging ongevallen - volgt Nederland?",
    slug: "belgi-verscherpt-e-step-controles-na-stijging-ongevallen-volgt-nederland",
    excerpt: "De Belgische minister van Consumentenbescherming kondigt strengere maatregelen aan na 62% stijging van e-step ongevallen. Nederland voert al jaren een striktere koers - volgen er meer restricties?",
    author: "Iwan",
    date: "2025-08-24",
    category: "Nieuws",
    tags: ["België", "ongevallen", "regelgeving", "Nederland", "e-step"],
    image: "/images/belgie-estep.png",
    featured: false,
    readTime: "5 min",
    published: true,
    content: `<p class="lead">De Belgische minister van Consumentenbescherming Rob Beenders heeft aangekondigd dat er strengere controles komen op de verkoop van elektrische steps na een zorgwekkende stijging van ongevallen. Nederland voert al jaren een striktere koers - wat betekent dit voor Nederlandse consumenten?</p>

<h2>Alarmerende cijfers uit België</h2>

<p>De cijfers spreken voor zich: ongevallen met e-steps zijn in de eerste drie maanden van 2025 met maar liefst <strong>62 procent gestegen</strong> ten opzichte van dezelfde periode vorig jaar. Deze stijgende trend begon al in 2024 en lijkt nu te versnellen. Gemiddeld vonden er in het eerste kwartaal van 2025 elke dag vijf ongevallen met e-steps met slachtoffers plaats.</p>

<p>Minister Beenders wijst op specifieke risico's zoals te hoge snelheid en technische gebreken als slecht vastgedraaide wieltjes of sturen. <em>"We moeten onveilige e-steps uit de handel halen,"</em> stelt de minister, die van september tot december jaarlijkse controles wil uitvoeren, zowel in fysieke winkels als online.</p>

<h2>Belgische aanpak: controle op verkopers</h2>

<p>De Belgische strategie richt zich primair op verkopers en distributeurs. Na een eerste test in Brussel zijn al zes types e-steps uit de handel gehaald. Beenders benadrukt dat veel verkochte e-steps simpelweg niet conform de geldende regels zijn, ondanks dat verkopers aan strikte veiligheidsvoorschriften moeten voldoen.</p>

<p>Daarnaast overwegen Belgische politieke partijen verdergaande maatregelen. De CD&V stelt voor om de maximumsnelheid te verlagen van 25 km/u naar 20 km/u en nummerplaten verplicht te stellen voor alle e-steps.</p>

<h2>Nederland: al jaren een striktere koers</h2>

<p>Terwijl België nu maatregelen neemt, voert Nederland al jaren een veel restrictievere aanpak. In Nederland mogen alleen goedgekeurde elektrische steps of steps met trapondersteuning op de openbare weg rijden. De meeste steps zonder trapondersteuning zijn niet goedgekeurd en mogen niet op de weg.</p>

<h2>Nieuwe Nederlandse regelgeving vanaf 2025</h2>

<p>Sinds 1 juli 2025 hebben e-steps een kenteken nodig. Dit geldt voor alle bijzondere bromfietsen. De kentekenplicht wordt gefaseerd ingevoerd:</p>

<ul>
<li>nieuwe e-steps vanaf juli 2025: direct kenteken verplicht</li>
<li>goedgekeurde e-steps van vóór 1 juli 2025 hebben vanaf 1 juli 2026 een kenteken nodig</li>
</ul>

<h2>Beperkt aanbod legale e-steps in Nederland</h2>

<p>Er zijn op dit moment slechts 5 elektrische steps waarmee je in Nederland op de openbare weg mag rijden. Dit beperkte aanbod contrasteert sterk met andere Europese landen waar e-steps veel breder beschikbaar zijn.</p>

<h2>Gevolgen van illegaal rijden</h2>

<p>Voor Nederlandse consumenten zijn de gevolgen van het rijden met een niet-goedgekeurde e-step aanzienlijk:</p>

<ul>
<li>de politie kan een boete geven of de e-step in beslag nemen</li>
<li>je bent niet verzekerd voor schade die je veroorzaakt bij anderen. Je aansprakelijkheidsverzekering dekt de schade niet</li>
<li>wie na 1 juli 2026 zonder kenteken op een elektrische step rijdt, riskeert een boete van honderden euro's</li>
</ul>

<h2>Verschillen in aanpak België vs Nederland</h2>

<table className="w-full border-collapse border border-gray-300 my-6">
<thead>
<tr className="bg-gray-50">
<th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aspect</th>
<th className="border border-gray-300 px-4 py-2 text-left font-semibold">België</th>
<th className="border border-gray-300 px-4 py-2 text-left font-semibold">Nederland</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border border-gray-300 px-4 py-2"><strong>huidige situatie</strong></td>
<td className="border border-gray-300 px-4 py-2">veel e-steps legaal toegestaan</td>
<td className="border border-gray-300 px-4 py-2">zeer beperkt aantal toegestaan</td>
</tr>
<tr>
<td className="border border-gray-300 px-4 py-2"><strong>nieuwe maatregelen</strong></td>
<td className="border border-gray-300 px-4 py-2">scherpere controles, mogelijk nummerplaten</td>
<td className="border border-gray-300 px-4 py-2">kentekenplicht al ingevoerd</td>
</tr>
<tr>
<td className="border border-gray-300 px-4 py-2"><strong>ongevallen trend</strong></td>
<td className="border border-gray-300 px-4 py-2">+62% in Q1 2025</td>
<td className="border border-gray-300 px-4 py-2">beperkte data door laag gebruik</td>
</tr>
<tr>
<td className="border border-gray-300 px-4 py-2"><strong>regelgeving</strong></td>
<td className="border border-gray-300 px-4 py-2">reactief (na problemen)</td>
<td className="border border-gray-300 px-4 py-2">proactief (preventie-gericht)</td>
</tr>
</tbody>
</table>

<h2>Zal Nederland de Belgische aanpak volgen?</h2>

<p>Het is onwaarschijnlijk dat Nederland de Belgische aanpak zal overnemen, en wel om deze redenen:</p>

<ul>
<li><strong>Nederland heeft al strengere regels</strong>: Nederland blijft achter op het gebied van e-step beschikbaarheid door de strikte regelgeving. Verhuurdiensten van e-steps, zoals Lime en Tier, zijn hier nog niet op grote schaal beschikbaar.</li>
<li><strong>andere problematiek</strong>: terwijl België reageert op een stijging van ongevallen, probeert Nederland juist de markt gecontroleerd open te stellen met strikte veiligheidseisen vooraf.</li>
<li><strong>focus op toelating, niet handhaving</strong>: met de aankomende regelgeving wordt een belangrijke stap gezet richting een veiligere en beter gereguleerde inzet van e-steps in Nederland.</li>
</ul>

<h2>Conclusie voor Nederlandse consumenten</h2>

<p>Voor consumenten die een e-step overwegen, betekent dit:</p>

<ol>
<li><strong>controleer altijd de toelating</strong>: controleer of het model goedgekeurd is voor de openbare weg en vraag of de fabrikant of verkoper registratie bij de RDW aanbiedt</li>
<li><strong>reken op beperkte keuze</strong>: het aanbod legale e-steps in Nederland blijft voorlopig zeer beperkt</li>
<li><strong>bereid je voor op kosten</strong>: naast de aanschafprijs moet je rekenen op kentekenkosten (€18 voor bestaande modellen) en WA-verzekering</li>
<li><strong>geen versoepelingen verwacht</strong>: de Nederlandse aanpak lijkt eerder te leiden tot meer restricties dan minder</li>
</ol>

<p>De Belgische ontwikkelingen onderstrepen het belang van veiligheid bij e-steps, maar zullen waarschijnlijk niet leiden tot een koerswijziging in Nederland. Ons land kiest bewust voor een voorzichtige, veiligheid-gerichte aanpak die probeert problemen te voorkomen in plaats van te reageren op ontstane situaties.</p>

<hr>

<p><em>Wil je meer weten over welke e-steps wel legaal zijn in Nederland? Bekijk onze <a href="https://www.kentekenestep.nl/vergelijken" rel="noopener noreferrer">vergelijkingstool</a> voor een overzicht van alle goedgekeurde modellen.</em></p>`
  },
  {
    id: 6,
    title: "E-step ongeluk in Gouda: wat als de step WEL verzekerd was geweest?",
    slug: "gouda-estep-vonnis-verzekering-analyse",
    excerpt: "Een recent vonnis uit Gouda toont de enorme financiële risico's van onverzekerde e-steps. Maar wat waren de gevolgen geweest als dezelfde tiener een goedgekeurde, verzekerde e-step had gebruikt? Een analyse van de rechtszaak en de nieuwe wetgeving.",
    author: "Iwan",
    date: "2025-08-24",
    category: "Nieuws", 
    tags: ["rechtszaak", "verzekering", "Gouda", "aansprakelijkheid", "RDW"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop&crop=center&q=80",
    featured: true,
    readTime: "8 min",
    published: true,
    content: `<p class="lead">Een recent vonnis uit Gouda werpt licht op de financiële consequenties van e-step ongevallen. Wat gebeurt er als ouders aansprakelijk worden gesteld voor een ongeval met een onverzekerde e-step? En hoe anders waren de gevolgen geweest met een goedgekeurde, verzekerde variant?</p>

<h2>Een baanbrekende rechtszaak</h2>

<p>Het <a href="https://www.nrc.nl/nieuws/2025/08/12/is-de-e-step-een-motorrijtuig-en-betaalt-de-bestuurder-dus-altijd-de-schade-a4902819" target="_blank" rel="noopener noreferrer">recente artikel van NRC</a> beschrijft een belangrijke rechtszaak uit Gouda die richtinggevend kan zijn voor toekomstige gevallen. Een tiener reed met hoge snelheid op een ongoedgekeurde e-step door een woonerf, waarbij hij het pad van een fietser kruiste. De fietser viel en liep botbreuken op.</p>

<p>De rechter kwam tot een heldere uitspraak: ondanks dat de e-step niet was goedgekeurd door de RDW, werd het voertuig gekwalificeerd als motorrijtuig. Dit betekent dat de ouders <strong>volledig aansprakelijk zijn voor alle materiële en immateriële schade</strong> van het slachtoffer. Een uitkomst die vergaande financiële gevolgen heeft voor de betrokken familie.</p>

<p>Deze zaak illustreert een belangrijk juridisch principe: voor de aansprakelijkheid maakt het niet uit of een e-step wel of niet goedgekeurd is. Beide worden behandeld als motorrijtuig. Het verschil zit echter in wat er daarna gebeurt.</p>

<h2>De werkelijke situatie: onverzekerd rijden</h2>

<p>In de Goudse zaak moeten de ouders alle kosten voor hun eigen rekening nemen. Bij ongevallen met botbreuken kunnen deze snel oplopen tot tienduizenden euro's. Medische behandeling, fysiotherapie, mogelijke inkomstenderving van het slachtoffer en smartengeld — het zijn allemaal kostenposten die zich opstapelen.</p>

<p>Omdat ongoedgekeurde e-steps niet verzekerbaar zijn, valt er geen beroep te doen op een verzekeringsmaatschappij. De ouders staan er alleen voor en moeten in het ergste geval langdurig afbetalen of hun spaargeld aanspreken. Voor sommige families kan dit betekenen dat ze jarenlang onder een financiële last gebukt gaan.</p>

<p>Juridisch gezien is de positie ook helder: de step wordt als motorrijtuig beschouwd, waardoor de bescherming van zwakke verkeersdeelnemers van toepassing is. In dit geval betekende dat 100% aansprakelijkheid, omdat er geen sprake was van eigen schuld van het slachtoffer.</p>

<h2>Het alternatieve scenario: verzekerd rijden</h2>

<p>Stel dat dezelfde tiener een RDW-goedgekeurde e-step had gebruikt, compleet met kenteken en WA-verzekering. De juridische uitkomst was identiek geweest — hij zou nog steeds volledig aansprakelijk zijn gesteld. Het cruciale verschil ligt in de financiële afhandeling.</p>

<p>In dat geval zou de WA-verzekering alle schade aan het slachtoffer hebben gedekt. De ouders zouden slechts het eigen risico hebben moeten betalen, doorgaans tussen de €150 en €300. Alle medische kosten, inkomstenderving en smartengeld zouden door de verzekeraar zijn vergoed. In plaats van een mogelijk jarenlange financiële last, zouden ze hebben gekeken naar een beheersbare eenmalige uitgave.</p>

<p>Ook verzekerde e-steps blijven motorrijtuigen in juridische zin, met dezelfde bescherming voor zwakke verkeersdeelnemers. Het verschil is dat er een financiële vangnet aanwezig is in de vorm van een verplichte verzekering.</p>

<h2>Nieuwe regels, nieuwe realiteit</h2>

<p>De wetgeving die sinds 1 juli 2025 van kracht is, maakt het onderscheid tussen goedgekeurde en ongoedgekeurde e-steps scherper. Alle RDW-goedgekeurde e-steps moeten nu voorzien zijn van een kenteken en een WA-verzekering. Rijden zonder verzekering leidt tot boetes en inbeslagname van het voertuig.</p>

<p>Tegelijkertijd blijft het aanbod van legale alternatieven beperkt. Volgens de RDW zijn er momenteel slechts vijf elektrische steps die goedgekeurd zijn voor gebruik op de openbare weg. Het overgrote deel van de e-steps die in winkels verkocht worden, valt nog altijd onder de categorie ongoedgekeurd.</p>

<h2>De juridische achtergrond</h2>

<p>De uitspraak van de Rechtbank Midden-Nederland (21 mei 2025; ECLI:NL:RBMNE:2025:2569) is op dit punt helder. De rechter stelde vast: <em>"Omdat de jongen tijdens de rechtszitting heeft gezegd dat de step geen vaart mindert als hij ophoudt met steppen, en evenmin als de maximumsnelheid van 25 kilometer per uur is bereikt, is het volgens de rechter een bromfiets."</em></p>

<p>Deze definitie is cruciaal omdat het betekent dat ongeacht de goedkeuringsstatus, de aansprakelijkheidsregels voor motorrijtuigen van toepassing zijn. Het verschil tussen een goedgekeurde en ongoedgekeurde e-step ligt dus niet in de juridische aansprakelijkheid, maar in de financiële dekking die beschikbaar is.</p>

<h2>De praktische betekenis voor ouders</h2>

<p>Advocaat Bas Hopman van SAP Advocaten waarschuwt in het NRC artikel voor de gevolgen: <em>"Ouders van een minderjarige die met zo'n voertuig de openbare weg op gaat kunnen voor grote financiële problemen komen te staan."</em></p>

<p>Deze waarschuwing raakt de kern van het probleem. Ongoedgekeurde e-steps worden juridisch behandeld als motorrijtuigen, maar kunnen niet verzekerd worden tegen de risico's die daaruit voortvloeien. Het gevolg is dat alle financiële risico's bij de eigenaar en gebruiker liggen.</p>

<p>Voor een verzekerde, goedgekeurde e-step liggen de verhoudingen anders. Hoewel de aansprakelijkheid hetzelfde blijft, vangt de verplichte verzekering de financiële gevolgen op. Het eigen risico blijft beperkt tot enkele honderden euro's, en vaak is er rechtsbijstand inbegrepen voor de afhandeling van claims.</p>

<h2>Een kwestie van afwegingen maken</h2>

<p>De kosten van een verzekering voor een goedgekeurde e-step liggen tussen de €4 en €10 per maand, wat neerkomt op €48 tot €120 per jaar. Tegenover deze relatief bescheiden uitgave staan potentiële schadekosten die kunnen variëren van enkele duizenden euro's voor lichte verwondingen tot meer dan €100.000 bij ernstige of blijvende letselschade.</p>

<p>Deze rekensom maakt duidelijk waarom de keuze voor een verzekerde e-step financieel gezien logisch is. Een jaarlijkse premie van rond de €100 biedt bescherming tegen kosten die een veelvoud daarvan kunnen bedragen en mogelijk jarenlang doorlopen.</p>

<h2>Praktische gevolgen in het dagelijks leven</h2>

<p>Voor families die kiezen voor een goedgekeurde, verzekerde e-step blijft de juridische aansprakelijkheid bestaan, maar is er financiële zekerheid. De verzekering neemt de schadeafhandeling over, het eigen risico blijft beperkt, en er is vaak rechtsbijstand beschikbaar. Dit geeft rust en voorkomt dat een ongeval tot langdurige financiële problemen leidt.</p>

<p>Families met ongoedgekeurde e-steps daarentegen dragen het volledige financiële risico zelf. Bij ernstige ongevallen kan dit leiden tot langdurige afbetalingsregelingen, aanslag op spaargeld of in extreme gevallen zelfs beslag op bezittingen. De financiële gevolgen van een ongeval kunnen zo jarenlang voelbaar blijven.</p>

<h2>De bredere context</h2>

<p>Het Goudse vonnis past in een bredere ontwikkeling waarbij de wetgeving probeert gelijke tred te houden met nieuwe vormen van mobiliteit. Zoals de Fietsersbond opmerkt: <em>"De RDW is sinds 1 juli begonnen meer steps toe te laten"</em>, maar het aanbod blijft vooralsnog beperkt tot vijf goedgekeurde modellen.</p>

<p>Deze beperkte keuze betekent dat veel consumenten nog altijd geconfronteerd worden met een dilemma: kiezen voor een van de weinige legale, maar duurdere opties, of een ongoedgekeurde e-step kopen met alle bijbehorende risico's. De Goudse rechtszaak laat zien wat die risico's in de praktijk kunnen betekenen.</p>

<h2>Vooruitkijken</h2>

<p>Het ongeval in Gouda had bij gebruik van een verzekerde e-step juridisch gezien exact hetzelfde uitgedraaid — de bestuurder zou nog steeds volledig aansprakelijk zijn gesteld. Het verschil zou hebben gelegen in de financiële afwikkeling: de verzekering zou de schadekosten hebben gedragen in plaats van de ouders.</p>

<p>Deze zaak onderstreept het belang van bewuste keuzes bij de aanschaf van een e-step. Wie kiest voor een goedgekeurde, verzekerde variant, kiest voor financiële zekerheid bij ongelukken. Wie kiest voor een ongoedgekeurde e-step, neemt bewust een financieel risico dat aanzienlijke gevolgen kan hebben.</p>

<p>Voor ouders die overwegen een e-step aan te schaffen, is het raadzaam eerst de <a href="https://www.rdw.nl/paginas/kenteken-aanvragen-voor-uw-bijzondere-bromfiets/e-steps" target="_blank" rel="noopener noreferrer">actuele RDW-lijst</a> te raadplegen en <a href="/" rel="noopener noreferrer">verzekeringmogelijkheden</a> te vergelijken. De keuze die zij maken kan bepalend zijn voor hun financiële toekomst.</p>

<hr>

<p><strong>Disclaimer</strong></p>

<p>Aan de in dit artikel getrokken conclusies kunnen geen rechten worden ontleend. Dit artikel bevat uitsluitend eigen analyses gebaseerd op beschikbare bronnen. Voor juridisch advies over uw specifieke situatie raadpleegt u een gekwalificeerde juridisch adviseur. De auteur en KentekenEstep.nl aanvaarden geen aansprakelijkheid voor eventuele gevolgen van handelingen gebaseerd op de informatie in dit artikel.</p>

<p><strong>Bronnen</strong></p>
<ul>
<li><a href="https://www.nrc.nl/nieuws/2025/08/12/is-de-e-step-een-motorrijtuig-en-betaalt-de-bestuurder-dus-altijd-de-schade-a4902819" target="_blank" rel="noopener noreferrer">NRC: Is de e-step een motorrijtuig en betaalt de bestuurder dus altijd de schade?</a></li>
<li>Rechtbank Midden-Nederland, 21 mei 2025; ECLI:NL:RBMNE:2025:2569</li>
<li><a href="https://www.rdw.nl/paginas/kenteken-aanvragen-voor-uw-bijzondere-bromfiets/e-steps" target="_blank" rel="noopener noreferrer">RDW Goedgekeurde E-steps Overzicht</a></li>
</ul>`
  },
  {
    id: 2,
    title: "RDW regelgeving 2025: wat je moet weten over kenteken en verzekering",
    slug: "rdw-regelgeving-2025-kenteken-verzekering",
    excerpt: "Een complete gids over de nieuwe RDW regelgeving voor e-steps in 2025. Van kenteken aanvragen tot verplichte verzekeringen - alles wat je moet weten.",
    author: "Iwan",
    date: "2025-08-02",
    category: "Regelgeving",
    tags: ["RDW", "kenteken", "verzekering", "wet", "2025"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center&q=80", // Legal documents/regulations
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
    title: "Top 5 illegale e-steps: wat je koopt maar niet mag rijden",
    slug: "top-5-illegale-e-steps-2025",
    excerpt: "Een overzicht van de populairste e-steps die je overal kunt kopen, maar niet legaal mag gebruiken op Nederlandse wegen. Van Segway tot Xiaomi.",
    author: "Iwan", 
    date: "2025-07-28",
    category: "Reviews",
    tags: ["Segway", "Xiaomi", "illegaal", "populair"],
    image: "/images/segway-e2-pro.jpeg", // Segway e-scooter (popular but illegal)
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
    title: "E-step verzekering: complete gids voor 2025",
    slug: "e-step-verzekering-gids-2025",
    excerpt: "Alles over e-step verzekeringen: welke zijn verplicht, wat kosten ze, en waar kun je het beste terecht? Complete vergelijking van alle opties.",
    author: "Iwan",
    date: "2025-07-25",
    category: "Tips",
    tags: ["verzekering", "WA", "kosten", "vergelijking"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop&crop=center&q=80", // Insurance/protection shield
    featured: false,
    readTime: "6 min", 
    published: true,
    content: `
      <h2>Verplichte verzekering</h2>
      <p>Voor RDW-goedgekeurde e-steps is een WA-verzekering verplicht. Dit kost tussen €80-150 per jaar, afhankelijk van de verzekeraar.</p>
      
      <h2>Beste opties</h2>
      <p>Verschillende verzekeraars bieden e-step verzekeringen aan. Vergelijk altijd de voorwaarden en dekking.</p>
      
      <h2>Wat is gedekt?</h2>
      <p>Een standaard WA-verzekering dekt schade aan derden. Voor eigen schade heb je aanvullende dekking nodig.</p>
    `
  },
  {
    id: 5,
    title: "Kenteken aanvragen: stap-voor-stap handleiding",
    slug: "kenteken-aanvragen-e-step-handleiding",
    excerpt: "Een praktische handleiding voor het aanvragen van een kenteken voor je RDW-goedgekeurde e-step. Inclusief kosten, benodigde documenten en verwachte doorlooptijd.",
    author: "Iwan",
    date: "2025-07-20",
    category: "Tips", 
    tags: ["kenteken", "RDW", "aanvragen", "handleiding"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&crop=center&q=80", // Application process/forms
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
      
      <h2>Tips</h2>
      <p>Controleer altijd of alle documenten compleet zijn voordat je de aanvraag indient. Dit voorkomt vertraging.</p>
    `
  }
];

// Helper functions blijven hetzelfde
export const getFeaturedArticles = () => blogArticles.filter(article => article.featured && article.published);

export const getLatestArticle = () => {
  const published = blogArticles.filter(article => article.published);
  return published.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
};

export const getLatest3Articles = () => {
  const published = blogArticles.filter(article => article.published);
  return published.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
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
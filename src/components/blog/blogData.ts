// src/components/blog/blogData.ts

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  featured: boolean;
}

// Alle artikelen direct hier - geen imports meer
export const blogPosts: BlogPost[] = [
  // Selana Alpha Prijsverlaging (nieuwste eerst)
  {
    id: 5,
    title: "Selana Alpha €150 goedkoper: maar is €1.750 nog steeds te duur?",
    excerpt: "De Selana Alpha krijgt een prijsverlaging naar €1.750, maar met een wachttijd van 3 maanden en een prijs die nog altijd 3-4x hoger ligt dan illegale alternatieven, rijzen er vragen over de toegankelijkheid.",
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

      <h3>Wat krijg je wel voor je geld?</h3>
      <p>Eerlijkheidshalve: de Selana Alpha biedt wel unieke voordelen die je nergens anders krijgt:</p>
      
      <h4>Echte legaliteit</h4>
      <ul>
        <li><strong>Geen boeterisico</strong>: €140-400 boetes vermeden</li>
        <li><strong>Verzekering mogelijk</strong>: bescherming bij diefstal/schade</li>
        <li><strong>Overal rijden</strong>: ook waar andere e-steps verboden zijn</li>
        <li><strong>Geen stress</strong>: bij politiecontroles</li>
      </ul>

      <h4>Kwalitatieve specificaties</h4>
      <ul>
        <li><strong>25 km/u topsnelheid</strong> (legaal maximum)</li>
        <li><strong>45-60km bereik</strong> op één lading</li>
        <li><strong>10-inch luchtbanden</strong> voor comfort</li>
        <li><strong>Dubbele vering</strong> voor een soepele rit</li>
        <li><strong>Richtingaanwijzers</strong> voor veiligheid</li>
        <li><strong>NFC-keycard</strong> tegen diefstal</li>
      </ul>

      <h3>De kosten komen niet alleen</h3>
      <p>Vergeet niet de <strong>bijkomende kosten</strong>:</p>
      <ul>
        <li><strong>Kenteken</strong>: €32,60 eenmalig</li>
        <li><strong>WA-verzekering</strong>: €8-15 per maand (€96-180/jaar)</li>
        <li><strong>Thuisbezorging</strong>: €100 extra (tenzij je zelf ophaalt)</li>
        <li><strong>Casco-verzekering</strong>: €15-25 extra per maand (aanbevolen bij deze prijs)</li>
      </ul>
      
      <p>In het <strong>eerste jaar</strong> ben je dus al snel <strong>€2.000-2.100</strong> kwijt voor transport dat je met een gewone fiets gratis zou hebben.</p>

      <h3>Voor wie is de Selana Alpha geschikt?</h3>
      
      <h4>✅ Geschikt voor:</h4>
      <ul>
        <li><strong>Zakelijke gebruikers</strong> die kosten kunnen aftrekken</li>
        <li><strong>Dagelijkse pendelaars</strong> die dagelijks lange afstanden afleggen</li>
        <li><strong>Regelconforme burgers</strong> die geen risicos willen nemen</li>
        <li><strong>Tech early adopters</strong> die graag het nieuwste hebben</li>
      </ul>

      <h4>❌ Minder geschikt voor:</h4>
      <ul>
        <li><strong>Incidentele gebruikers</strong> die af en toe een ritje maken</li>
        <li><strong>Studenten</strong> met een beperkt budget</li>
        <li><strong>Mensen die snel mobiliteit nodig hebben</strong> (vanwege wachttijd)</li>
        <li><strong>Prijs-bewuste kopers</strong> die kosten-baten afwegen</li>
      </ul>

      <h3>Bestellen en levering: de praktijk</h3>
      <h4>Verzending</h4>
      <ul>
        <li><strong>Gratis ophalen</strong> bij ophaallocaties (na bevestigingsmail)</li>
        <li><strong>Thuisbezorging</strong>: €100 extra</li>
        <li><strong>Wachttijd</strong>: 3 maanden (mogelijk langer)</li>
      </ul>

      <h4>Retourbeleid</h4>
      <p><strong>14 dagen retourrecht</strong> na ontvangst, mits ongebruikt. Let op: na 3 maanden wachten heb je waarschijnlijk al alternatieve transport geregeld.</p>

      <h3>Onze conclusie: afwachten of aangrijpen?</h3>
      <p>De prijsverlaging is een welkome stap, maar <strong>€1.750 blijft fors voor wat je krijgt</strong>. De 3 maanden wachttijd maakt het nog minder aantrekkelijk.</p>
      
      <p><strong>Onze aanbeveling:</strong></p>
      <ul>
        <li><strong>Heb je het geld over en wil je per se legaal rijden?</strong> Dan is dit je enige optie momenteel.</li>
        <li><strong>Zit je krap bij kas?</strong> Wacht tot meer concurrentie de prijzen drukt.</li>
        <li><strong>Heb je haast?</strong> Overweeg een e-bike of andere transportmiddelen.</li>
        <li><strong>Ben je nieuwsgierig?</strong> Wacht op onze review als we er zelf een hebben getest.</li>
      </ul>

      <div style="background-color: #fff7ed; border-left: 4px solid #fb923c; padding: 16px; margin: 32px 0;">
        <p style="color: #9a3412; margin: 0;"><strong>Update 30 juli 2025:</strong> De prijs is verlaagd naar €1.750. Wachttijd blijft 3 maanden. Meer RDW-goedgekeurde alternatieven worden verwacht in Q4 2025.</p>
      </div>

      <p><strong>Interesse gewekt ondanks onze kritiek?</strong><br>
      <a href="https://selana.nl/products/alpha?utm_source=kentekenestep&utm_medium=blog&utm_campaign=selana_price_drop_2025&utm_content=critical_review" target="_blank" rel="noopener noreferrer" style="color: #ea580c; font-weight: 600; text-decoration: underline;">Bekijk de Selana Alpha voor €1.750</a></p>
      
      <p style="font-size: 14px; color: #64748b;"><em>Disclaimer: Dit is een kritische analyse. We hebben geen commerciele relatie met Selana, maar sommige links kunnen affiliate-links bevatten voor transparantie.</em></p>
    `,
    author: "Iwan",
    date: "2025-07-30",
    readTime: "8 min",
    category: "Product Update",
    image: "https://selana.nl/cdn/shop/files/SELANA_Alpha1.jpg?v=1751712644&width=800",
    tags: ["SELANA", "Alpha", "Prijskritiek", "RDW", "Analyse"],
    featured: true
  },
  // Andere artikelen
  {
    id: 1,
    title: "Meer RDW Goedgekeurde E-Steps Komen Eraan",
    excerpt: "De markt voor legale e-steps staat op het punt om flink uit te breiden. Meerdere fabrikanten werken aan RDW goedkeuring voor hun modellen.",
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
    author: "Iwan",
    date: "2025-07-06",
    readTime: "4 min",
    category: "Markt Update",
    image: "/images/blog/market-growth.jpg",
    tags: ["RDW", "Goedkeuring", "Markt", "Toekomst"],
    featured: true
  },
  {
    id: 2,
    title: "SELANA Alpha: De Eerste RDW Goedgekeurde E-Step",
    excerpt: "Een mijlpaal in de Nederlandse e-step markt. Hoe de SELANA Alpha de weg vrijmaakte voor legaal gebruik van elektrische steps.",
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
      <p>Met een oorspronkelijke prijs van €1.900 (nu €1.750) is de Alpha aanzienlijk duurder dan illegale alternatieven. Dit komt door de ontwikkelkosten en de kleine productieaantallen. Verwacht wordt dat prijzen dalen naarmate meer fabrikanten toetreden.</p>
    `,
    author: "Iwan",
    date: "2025-07-03",
    readTime: "6 min",
    category: "Product Review",
    image: "https://selana.nl/cdn/shop/files/SELANA_side.png?v=1751712644&width=800",
    tags: ["SELANA", "Alpha", "RDW", "Review"],
    featured: true
  },
  {
    id: 3,
    title: "Kentekenplicht E-Steps: Wat Verandert er op 1 Juli 2025?",
    excerpt: "Belangrijke wijzigingen in de regelgeving voor RDW goedgekeurde e-steps. Alles wat je moet weten over de nieuwe kentekenplicht.",
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
      
      <h3>Overgangsregeling</h3>
      <p>Voor bestaande eigenaren van RDW goedgekeurde e-steps geldt een overgangsregeling:</p>
      <ul>
        <li><strong>1 juli - 31 december 2025:</strong> Waarschuwingen in plaats van boetes</li>
        <li><strong>Vanaf 1 januari 2026:</strong> Volledige handhaving met boetes</li>
      </ul>
      
      <h3>Handhaving</h3>
      <p>De politie krijgt nieuwe bevoegdheden:</p>
      <ul>
        <li>Controle op kenteken en verzekering</li>
        <li>Boete van €140 bij ontbreken kenteken</li>
        <li>Boete van €400 bij ontbreken verzekering</li>
        <li>Mogelijke inbeslagname bij herhaalde overtredingen</li>
      </ul>
      
      <h3>Wat moet je doen?</h3>
      <p>Als eigenaar van een RDW goedgekeurde e-step moet je voor 1 juli 2025:</p>
      <ul>
        <li>Een kenteken aanvragen bij de RDW</li>
        <li>Een WA verzekering afsluiten</li>
        <li>Het kenteken correct bevestigen</li>
        <li>Je verzekeringspapieren altijd bij je hebben</li>
      </ul>
    `,
    author: "Iwan",
    date: "2025-06-12",
    readTime: "5 min",
    category: "Regelgeving",
    image: "/images/blog/license-plate.jpg",
    tags: ["Kenteken", "Regelgeving", "Verzekering", "RDW"],
    featured: true
  },
  {
    id: 4,
    title: "Illegale E-Steps: Risicos en Gevolgen",
    excerpt: "Wat zijn de risicos van het gebruik van niet-goedgekeurde e-steps op de openbare weg? Een overzicht van boetes en consequenties.",
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
        <li>Prive terreinen met toestemming</li>
        <li>Speciale oefenterreinen</li>
      </ul>
    `,
    author: "Iwan",
    date: "2025-05-28",
    readTime: "3 min",
    category: "Regelgeving",
    image: "/images/blog/illegal-warning.jpg",
    tags: ["Illegal", "Boetes", "Risico", "Wetgeving"],
    featured: false
  }
];
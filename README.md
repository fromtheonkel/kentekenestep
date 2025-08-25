# KentekenEstep.nl

Een informatieve website over RDW-goedgekeurde elektrische steps in Nederland. Vergelijk legale e-steps, lees over regelgeving, en blijf op de hoogte van het laatste nieuws.

## 🚀 Live Website

**[kentekenestep.nl](https://kentekenestep.nl)**

## 📋 Features

### 🛵 **E-step Vergelijker**
- Overzicht van alle RDW-goedgekeurde e-steps
- Prijsvergelijking en specificaties
- Verzekeringsinformatie

### 📰 **Nieuwsblog**
- Actuele artikelen over e-step regelgeving
- Juridische analyses en rechtszaken
- Belgische en Nederlandse ontwikkelingen
- SEO-geoptimaliseerd met dynamische sitemap

### 🔧 **Admin Panel**
- Beveiligd publicatiesysteem (`/admin`)
- Automatische conversie van platte tekst naar HTML
- 1-click artikel publicatie met Git integratie
- IP whitelist + wachtwoord beveiliging

### 📱 **Responsive Design**
- Mobile-first design
- NRC-geïnspireerde opmaak met oranje branding
- Tailwind CSS + Typography plugin

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5 (App Router)
- **Styling**: Tailwind CSS 4.x + Typography plugin
- **Language**: TypeScript
- **Deployment**: Vercel
- **Content**: Markdown → HTML conversie
- **SEO**: Dynamische sitemap, meta tags, OpenGraph

## 🏃‍♂️ Development

### Setup

```bash
git clone https://github.com/fromtheonkel/kentekenestep.git
cd kentekenestep
npm install
```

### Environment Variables

Kopieer `.env.local.example` naar `.env.local`:

```bash
# Admin Panel Security
ADMIN_PASSWORD=your-secure-password
ADMIN_ALLOWED_IPS=127.0.0.1,::1,your-ip-address
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Build & Deploy

```bash
npm run build    # Production build
npm run start    # Start production server
```

## 📝 Content Management

### Nieuwe Artikelen Toevoegen

1. Ga naar `/admin` 
2. Login met admin wachtwoord
3. Plak platte tekst in het formulier
4. Klik "Genereer Artikel" voor preview
5. Klik "Publiceer Artikel" voor live publicatie

Artikelen worden automatisch:
- Geconverteerd naar HTML met NRC-styling
- Voorzien van SEO metadata (title, excerpt, tags)
- Toegevoegd aan de sitemap
- Gecommit en gepusht naar GitHub

### Artikel Structuur

```markdown
Artikel Titel

Lead paragraph die dient als excerpt...

## Hoofdkop 1

Eerste paragraaf onder hoofdkop.

## Hoofdkop 2

- Lijst item 1
- Lijst item 2

Conclusie paragraaf.
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── admin/              # Beveiligd admin panel
│   ├── api/
│   │   ├── auth/          # Authenticatie endpoints
│   │   └── publish-article/ # Artikel publicatie API
│   ├── blog/
│   │   ├── [slug]/        # Dynamische artikel pagina's
│   │   └── page.tsx       # Blog overzicht
│   ├── sitemap.xml/       # Dynamische sitemap
│   └── ...                # Andere pagina's
├── components/
│   ├── Header.tsx         # Navigatie
│   ├── LatestBlog.tsx     # Homepage blog sectie
│   └── CookieConsentBanner.tsx
├── data/
│   └── blog/
│       └── articles.ts    # Blog artikel database
└── lib/
    └── auth.ts           # Authenticatie logica
```

## 🔐 Security Features

- **IP Whitelist**: Alleen toegestane IP-adressen kunnen admin panel bereiken
- **Password Protection**: Vereist sterk wachtwoord voor toegang
- **Session Management**: 24-uurs login sessies
- **Environment Variables**: Wachtwoorden niet in code opgeslagen

## 📊 SEO Optimalisatie

- **Dynamische Sitemap**: Automatisch bijgewerkt met nieuwe artikelen
- **Meta Tags**: Title, description, OpenGraph per pagina
- **Structured Data**: Rich snippets voor zoekmachines
- **Static Generation**: Pre-rendered pagina's voor snelle loading
- **Custom Favicon**: KentekenEstep branding

## 🚀 Deployment

Website is gekoppeld aan Vercel voor automatische deployment:

1. Push naar `main` branch
2. Vercel bouwt en deployt automatisch
3. Live binnen 30 seconden

### Environment Variables (Productie)

In Vercel dashboard:
- `ADMIN_PASSWORD`: Sterke admin wachtwoord
- `ADMIN_ALLOWED_IPS`: Comma-separated lijst van toegestane IP's

## 📈 Analytics

- **Google Tag Manager**: GTM-KW6X22NL
- **Cookie Consent**: GDPR-compliant banner
- **Privacy-First**: Analytics opt-in vereist

## 📄 Pages

- `/` - Homepage met Selana Alpha highlight
- `/vergelijken` - E-step vergelijker  
- `/blog` - Blog overzicht
- `/blog/[slug]` - Individuele artikelen
- `/admin` - Beveiligd publicatie panel
- `/contact` - Contact informatie
- `/privacy` - Privacy policy
- `/disclaimer` - Website disclaimer
- `/rdw-info` - RDW regelgeving info

## 🤝 Contributing

Voor wijzigingen aan de website:

1. Fork de repository
2. Maak feature branch
3. Test lokaal
4. Submit pull request

## 📞 Support

Voor vragen over de website: [contact pagina](https://kentekenestep.nl/contact)

---

**© 2025 KentekenEstep.nl** - Onafhankelijke informatie over RDW-goedgekeurde e-steps
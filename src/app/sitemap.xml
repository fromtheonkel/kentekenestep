import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kentekenestep.nl'
  
  // Statische pagina's
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/vergelijken`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rdw-info`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Blog artikelen (uit je blogPosts array)
  const blogPosts = [
    { id: 5, slug: 'selana-alpha-prijskritiek', date: '2025-07-30' },
    { id: 1, slug: 'meer-rdw-goedgekeurde-e-steps-komen-eraan', date: '2025-07-06' },
    { id: 2, slug: 'selana-alpha-eerste-rdw-goedgekeurde-e-step', date: '2025-07-03' },
    { id: 3, slug: 'kentekenplicht-e-steps-wat-verandert-1-juli-2025', date: '2025-06-12' },
    { id: 4, slug: 'illegale-e-steps-risicos-en-gevolgen', date: '2025-05-28' },
  ]

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
}
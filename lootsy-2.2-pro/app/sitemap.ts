import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return [
    { url: `${base}/`, changeFrequency: 'hourly', priority: 1 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/privacy`, changeFrequency: 'monthly', priority: 0.2 },
    { url: `${base}/affiliate`, changeFrequency: 'monthly', priority: 0.2 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.2 },
    { url: `${base}/artiklar`, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${base}/k/tech`, changeFrequency: 'daily', priority: 0.6 },
    { url: `${base}/k/hem`, changeFrequency: 'daily', priority: 0.6 }
  ]
}

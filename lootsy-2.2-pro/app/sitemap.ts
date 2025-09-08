import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://lootsy.se';
  return [
    { url: `${base}/`, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/deals`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${base}/admin`, changeFrequency: 'weekly', priority: 0.1 },
  ];
}
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lootsy.se'}/sitemap.xml`,
  };
}
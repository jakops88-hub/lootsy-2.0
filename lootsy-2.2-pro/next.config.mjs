/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Byt till dina bilddomäner vid behov
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.cloudfront.net' },
      { protocol: 'https', hostname: '**.images.unsplash.com' },
      { protocol: 'https', hostname: '**.imgix.net' }
    ]
  },
  // Tvinga igenom build även om lint/TS klagar
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};
export default nextConfig;

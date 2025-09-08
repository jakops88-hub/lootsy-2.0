/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.cloudfront.net' },
      { protocol: 'https', hostname: '**.images.unsplash.com' },
      { protocol: 'https', hostname: '**.imgix.net' }
    ]
  }
};

export default nextConfig;

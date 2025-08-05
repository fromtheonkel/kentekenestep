/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'selana.nl',
        port: '',
        pathname: '/cdn/shop/files/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/**',
      }
      // Voeg hier specifieke hostnames toe, geen wildcards zoals *.example.com
    ],
    unoptimized: false, // Zet op true als je problemen hebt
  },
  swcMinify: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
};

module.exports = nextConfig;
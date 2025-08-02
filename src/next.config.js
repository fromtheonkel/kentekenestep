/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !! Dit schakelt TypeScript errors uit tijdens build
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['selana.nl'],
  },
  // Extra veiligheid voor build
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
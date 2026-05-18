/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    domains: [], 
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: { 
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  optimizeFonts: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig

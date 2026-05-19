/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimização de Imagens (Adicionamos AVIF que é melhor que WebP)
  images: { 
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  reactStrictMode: true,

  // Compilador Nativo (SWC)
  compiler: { 
    // Isso substitui o Babel, deixando o build e o site mais rápidos
    styledComponents: true,
    // Remove console.log em produção para limpar o código final
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Segurança e Performance
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  appDir: true,
  css: {
    modules: {
      localIdentName: '[local]___[hash:base64:5]'
    }
  },
  experimental: {
    serverComponentsExternalPackages: ['bcrypt'],
    serverActions: {
      allowedOrigins: ['localhost:3000'],
      bodySizeLimit: '2mb'
    }
  },
  // Configuración de CSS a nivel raíz (si es necesario)
  /*
  css: {
    modules: true,
    optimize: true
  },
  */
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;

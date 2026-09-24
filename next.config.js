/** @type {import('next').NextConfig} */

// Mapeo de slugs en inglés a rutas internas del App Router
const EN_SLUG_MAP = [
  { enSlug: '/en/pet-insurance',    internal: '/en/seguros/mascotas' },
  { enSlug: '/en/car-insurance',    internal: '/en/seguros/auto' },
  { enSlug: '/en/life-insurance',   internal: '/en/seguros/vida' },
  { enSlug: '/en/health-insurance', internal: '/en/seguros/salud' },
  { enSlug: '/en/dental-insurance', internal: '/en/seguros/dental' },
  { enSlug: '/en/commercial-auto',  internal: '/en/seguros/auto-comercial' },
  { enSlug: '/en/business-insurance', internal: '/en/seguros/comercial' },
  { enSlug: '/en/home-auto-bundle', internal: '/en/seguros/paquete-casa-auto' },
  { enSlug: '/en/extra-protection', internal: '/en/seguros/proteccion-extra' },
];

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  async redirects() {
    return [
      // Rutas antiguas sin prefijo → /es/ (301 permanente)
      { source: '/seguros/:path*', destination: '/es/seguros/:path*', permanent: true },

      // URLs internas en inglés con slug español → slug en inglés traducido (301)
      // Evita que los bots indexen /en/seguros/mascotas en lugar de /en/pet-insurance
      ...EN_SLUG_MAP.map(({ enSlug, internal }) => ({
        source: internal,
        destination: enSlug,
        permanent: true,
      })),
    ];
  },

  async rewrites() {
    return [
      // URLs en inglés con slug traducido sirven las rutas internas del App Router
      // El usuario y Google ven /en/pet-insurance, Next.js sirve app/[lang]/seguros/mascotas/
      ...EN_SLUG_MAP.map(({ enSlug, internal }) => ({
        source: enSlug,
        destination: internal,
      })),
    ];
  },
};

module.exports = nextConfig;

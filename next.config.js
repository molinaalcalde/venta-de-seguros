/** @type {import('next').NextConfig} */
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
      // Redirigir las rutas antiguas /seguros/* → /es/seguros/* (301 permanente)
      {
        source: '/seguros/:path*',
        destination: '/es/seguros/:path*',
        permanent: true,
      },
      // Redirigir /en (sin slash final) a la versión con [lang] param
      // NOTA: el middleware ya maneja esto, pero por si acaso:
      // No redirigir / ya que el middleware lo maneja
    ];
  },
};

module.exports = nextConfig;

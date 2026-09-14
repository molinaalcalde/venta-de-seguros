import { MetadataRoute } from 'next';

const BASE_URL = 'https://venta-de-seguros.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Motores principales — permitir todo
      {
        userAgent: '*',
        allow: '/',
      },
      // Bots de IA — permitir explícitamente para GEO
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      // Scrapers agresivos — bloquear
      {
        userAgent: 'Bytespider',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

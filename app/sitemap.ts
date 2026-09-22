import { MetadataRoute } from 'next';

const BASE_URL = 'https://venta-de-seguros.vercel.app';

const SEGUROS_PAGES = [
  { slug: 'auto',              priority: 0.9, freq: 'monthly' as const },
  { slug: 'mascotas',          priority: 0.9, freq: 'monthly' as const },
  { slug: 'vida',              priority: 0.9, freq: 'monthly' as const },
  { slug: 'salud',             priority: 0.9, freq: 'monthly' as const },
  { slug: 'dental',            priority: 0.8, freq: 'monthly' as const },
  { slug: 'auto-comercial',    priority: 0.8, freq: 'monthly' as const },
  { slug: 'comercial',         priority: 0.8, freq: 'monthly' as const },
  { slug: 'paquete-casa-auto', priority: 0.8, freq: 'monthly' as const },
  { slug: 'proteccion-extra',  priority: 0.7, freq: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const segurosEntries: MetadataRoute.Sitemap = SEGUROS_PAGES.map(({ slug, priority, freq }) => ({
    url: `${BASE_URL}/seguros/${slug}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));

  return [
    // ── Páginas principales ──
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // ── Páginas de detalle de seguros ──
    ...segurosEntries,
  ];
}

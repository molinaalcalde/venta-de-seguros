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

const LANGS = ['es', 'en'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Páginas de inicio por idioma ──────────────────────────────────────────
  const homeEntries: MetadataRoute.Sitemap = LANGS.map(lang => ({
    url: `${BASE_URL}/${lang}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: lang === 'es' ? 1.0 : 0.95,
    alternates: {
      languages: {
        'es-US': `${BASE_URL}/es`,
        'en-US': `${BASE_URL}/en`,
        'x-default': `${BASE_URL}/es`,
      },
    },
  }));

  // ── Páginas de seguros por idioma ─────────────────────────────────────────
  const segurosEntries: MetadataRoute.Sitemap = SEGUROS_PAGES.flatMap(({ slug, priority, freq }) =>
    LANGS.map(lang => ({
      url: `${BASE_URL}/${lang}/seguros/${slug}`,
      lastModified: now,
      changeFrequency: freq,
      priority: lang === 'es' ? priority : priority - 0.05,
      alternates: {
        languages: {
          'es-US': `${BASE_URL}/es/seguros/${slug}`,
          'en-US': `${BASE_URL}/en/seguros/${slug}`,
          'x-default': `${BASE_URL}/es/seguros/${slug}`,
        },
      },
    }))
  );

  return [
    ...homeEntries,
    ...segurosEntries,
  ];
}

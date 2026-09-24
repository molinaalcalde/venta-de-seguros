import { MetadataRoute } from 'next';

const BASE_URL = 'https://venta-de-seguros.vercel.app';

const SEGUROS_PAGES = [
  { slug: 'auto',              enSlug: 'car-insurance',      priority: 0.9, freq: 'monthly' as const },
  { slug: 'mascotas',          enSlug: 'pet-insurance',      priority: 0.9, freq: 'monthly' as const },
  { slug: 'vida',              enSlug: 'life-insurance',     priority: 0.9, freq: 'monthly' as const },
  { slug: 'salud',             enSlug: 'health-insurance',   priority: 0.9, freq: 'monthly' as const },
  { slug: 'dental',            enSlug: 'dental-insurance',   priority: 0.8, freq: 'monthly' as const },
  { slug: 'auto-comercial',    enSlug: 'commercial-auto',    priority: 0.8, freq: 'monthly' as const },
  { slug: 'comercial',         enSlug: 'business-insurance', priority: 0.8, freq: 'monthly' as const },
  { slug: 'paquete-casa-auto', enSlug: 'home-auto-bundle',   priority: 0.8, freq: 'monthly' as const },
  { slug: 'proteccion-extra',  enSlug: 'extra-protection',   priority: 0.7, freq: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Páginas de inicio ────────────────────────────────────────────────────────
  const homeEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/es`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'es-US': `${BASE_URL}/es`,
          'en-US': `${BASE_URL}/en`,
          'x-default': `${BASE_URL}/es`,
        },
      },
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          'es-US': `${BASE_URL}/es`,
          'en-US': `${BASE_URL}/en`,
          'x-default': `${BASE_URL}/es`,
        },
      },
    },
  ];

  // ── Páginas de seguros (español + inglés con slug traducido) ──────────────────
  const segurosEntries: MetadataRoute.Sitemap = SEGUROS_PAGES.flatMap(
    ({ slug, enSlug, priority, freq }) => [
      // Versión en español
      {
        url: `${BASE_URL}/es/seguros/${slug}`,
        lastModified: now,
        changeFrequency: freq,
        priority,
        alternates: {
          languages: {
            'es-US': `${BASE_URL}/es/seguros/${slug}`,
            'en-US': `${BASE_URL}/en/${enSlug}`,
            'x-default': `${BASE_URL}/es/seguros/${slug}`,
          },
        },
      },
      // Versión en inglés (slug traducido)
      {
        url: `${BASE_URL}/en/${enSlug}`,
        lastModified: now,
        changeFrequency: freq,
        priority: priority - 0.05,
        alternates: {
          languages: {
            'es-US': `${BASE_URL}/es/seguros/${slug}`,
            'en-US': `${BASE_URL}/en/${enSlug}`,
            'x-default': `${BASE_URL}/es/seguros/${slug}`,
          },
        },
      },
    ]
  );

  return [
    ...homeEntries,
    ...segurosEntries,
  ];
}

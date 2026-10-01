const BASE_URL = 'https://consultingbymf.com';

const insuranceAgencySchema = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Maria Fernanda Insurance Consulting',
  description:
    'Agente independiente de seguros que compara 10+ aseguradoras de auto, vida, salud, mascotas, dental y comerciales. Atención 100% en español. ITIN aceptado. Revisión anual y acompañamiento en reclamos incluidos.',
  url: BASE_URL,
  areaServed: { '@type': 'Country', name: 'United States' },
  availableLanguage: ['Spanish', 'English'],
  knowsLanguage: ['es', 'en'],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'NJ',
    addressCountry: 'US',
  },
  serviceType: [
    'Auto Insurance',
    'Life Insurance',
    'Health Insurance',
    'Pet Insurance',
    'Commercial Insurance',
    'Dental Insurance',
    'Umbrella Insurance',
    'Home Insurance Bundle',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Portafolio de Seguros',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro de Auto', description: 'Seguro de auto que acepta ITIN y pasaporte. Comparamos 10+ aseguradoras. Sujeto a términos y condiciones.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro de Mascotas', description: 'Cobertura veterinaria con reembolso de hasta el 90%. Cualquier veterinario con licencia en EE.UU. Sujeto a términos y condiciones.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro de Vida con Living Benefits', description: 'Pólizas de vida con acceso anticipado al capital en caso de enfermedad crítica. ITIN aceptado. Sujeto a términos y condiciones.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguros Comerciales', description: 'Paquete BOP, responsabilidad civil y Workers Comp para pequeñas y medianas empresas. Sujeto a términos y condiciones.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro de Salud', description: 'Planes de salud individuales y familiares. Comparamos 10+ aseguradoras. ITIN aceptado. Sujeto a términos y condiciones.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro Dental', description: 'Cobertura dental preventiva y mayor para familias. Sujeto a términos y condiciones.' } },
    ],
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceAgencySchema) }}
    />
  );
}

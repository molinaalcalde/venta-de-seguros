const BASE_URL = 'https://venta-de-seguros.vercel.app';

const insuranceAgencySchema = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Maria Fernanda Insurance Consulting',
  description:
    'Agencia de seguros bilingüe especializada en la comunidad hispana de Estados Unidos. Seguros de auto, vida, salud, mascotas y comerciales sin SSN requerido. Aceptamos ITIN. Atención 100% en español.',
  url: BASE_URL,
  areaServed: { '@type': 'Country', name: 'United States' },
  availableLanguage: ['Spanish', 'English'],
  knowsLanguage: ['es', 'en'],
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro de Auto sin SSN', description: 'Seguro de auto para inmigrantes que acepta ITIN. Sin número de seguro social requerido. Sujeto a términos y condiciones.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro de Mascotas VetDirect', description: 'Cobertura veterinaria con pago directo en clínicas asociadas. Sujeto a términos y condiciones.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro de Vida para Inmigrantes', description: 'Pólizas de vida con Living Benefits que aceptan ITIN. Sin SSN requerido. Sujeto a términos y condiciones.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguros Comerciales para Negocios Hispanos', description: 'Paquete BOP para pequeñas y medianas empresas hispanas. Sujeto a términos y condiciones.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro de Salud en Español sin SSN', description: 'Planes de salud individuales y familiares que aceptan ITIN. Atención 100% en español. Sujeto a términos y condiciones.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro Dental', description: 'Cobertura dental preventiva y mayor para familias hispanas. Sujeto a términos y condiciones.' } },
    ],
  },
};

// FAQ optimizado para featured snippets y AI Overviews — keywords de alto valor
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Necesito número de seguro social para sacar un seguro de auto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. En Maria Fernanda Insurance Consulting puedes cotizar y contratar tu seguro de auto sin presentar número de seguro social (SSN). Aceptamos ITIN (Número de Identificación del Contribuyente Individual) como identificación válida. Puedes asegurar tu vehículo sin importar tu situación migratoria.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Los inmigrantes indocumentados pueden tener seguro de auto en Estados Unidos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Las personas indocumentadas pueden contratar seguro de auto en los 50 estados de EE.UU. La mayoría de los estados exige seguro mínimo a todos los conductores sin importar su estatus migratorio. En Maria Fernanda Insurance Consulting aceptamos ITIN y ofrecemos cobertura para familias en todas las situaciones migratorias.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el ITIN y sirve para contratar seguros en EE.UU.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El ITIN (Individual Taxpayer Identification Number) es un número emitido por el IRS para personas que no califican para un SSN. Sí sirve para contratar seguros en Estados Unidos. En Maria Fernanda lo aceptamos para seguros de auto, vida, salud, dental, mascotas y comerciales.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Mi información personal se comparte con inmigración o el gobierno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Tu información personal es 100% confidencial. Nunca la compartimos con ICE, la migra ni ninguna agencia gubernamental sin orden judicial. Cumplimos con la ley HIPAA y todas las regulaciones estatales de privacidad de seguros.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo tener seguro de vida siendo inmigrante o indocumentado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Los inmigrantes, incluyendo personas indocumentadas, residentes permanentes y titulares de visas, pueden contratar seguro de vida en Estados Unidos sin SSN. Aceptamos ITIN. Nuestros planes incluyen Living Benefits: acceso al dinero mientras sigues vivo si te diagnostican una enfermedad grave. Sujeto a términos y condiciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el seguro de auto para inmigrantes en EE.UU.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El seguro de auto para inmigrantes comienza desde $89/mes, dependiendo del estado, vehículo e historial de manejo. Usar ITIN en vez de SSN no afecta significativamente el precio. Cotiza gratis en menos de 90 segundos sin compromiso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El seguro de salud cubre a toda mi familia sin número de seguro social?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Ofrecemos planes de salud individuales y familiares que aceptan ITIN. Tu cónyuge, hijos y dependientes pueden estar cubiertos sin necesidad de SSN. Nuestros asesores en español te explican cada plan antes de firmar. Sujeto a términos y condiciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si tengo un accidente de auto sin seguro siendo inmigrante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Manejar sin seguro en EE.UU. puede resultar en multas de $150 a $5,000 según el estado, suspensión de licencia, embargo del vehículo y responsabilidad civil personal por todos los daños causados. Siendo inmigrante, esto también puede complicar tu situación legal. El seguro mínimo obligatorio te protege a ti y a otros conductores.',
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceAgencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Auto',
  badge: '🚗 Sin SSN · ITIN Aceptado',
  heroLine1: 'Seguro de Auto',
  heroItalic: 'sin número de seguro social',
  heroSubtitle: 'Asegura tu vehículo aunque no tengas Social Security. Aceptamos ITIN, pasaporte, matrícula consular y licencia extranjera. La ley exige seguro — nosotros te lo ponemos fácil.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN', 'Desde $89/mes', 'Asistencia 24/7 en español'],
  priceFrom: 'Desde $89/mes',
  eligibilityTitle: 'Sí puedes asegurarte aunque...',
  eligibilityText: 'No importa tu situación migratoria. La ley exige seguro mínimo a todos los conductores — te ayudamos a cumplirla sin SSN y sin complicaciones.',
  eligibilityItems: [
    'No tengas número de seguro social (SSN)',
    'Tu licencia sea extranjera o matrícula consular',
    'Seas inmigrante recién llegado al país',
    'No tengas historial de crédito en USA',
    'Tengas visa temporal, DACA o estatus pendiente',
  ],
  features: [
    { emoji: '🚗', title: 'Sin SSN — Solo ITIN', desc: 'Cotiza y contrata con tu ITIN, pasaporte o matrícula consular. Cero burocracia, cero discriminación.' },
    { emoji: '🛡️', title: 'Cobertura Completa', desc: 'Responsabilidad civil, colisión, daños completos, robo y asistencia en carretera 24/7 atendida en español.' },
    { emoji: '📞', title: 'Atención en Español', desc: 'Si tienes un accidente, hablas con un asesor real en español desde el primer momento. No un bot, no un menú automático.' },
  ],
  coverageItems: [
    'Responsabilidad civil (Liability)',
    'Colisión (Collision)',
    'Daños completos (Comprehensive)',
    'Robo de vehículo',
    'Asistencia en carretera 24/7',
    'Conductor sin seguro (UM/UIM)',
    'Gastos médicos personales',
    'Auto de reemplazo',
  ],
  steps: [
    { title: 'Cotiza en 90 segundos', desc: 'Responde 3 preguntas básicas online o llama a un asesor. Sin SSN requerido para cotizar.' },
    { title: 'Elige tu cobertura', desc: 'Te explicamos cada opción en español, sin prisa. Tú decides el nivel de protección que necesitas.' },
    { title: 'Recibe tu tarjeta hoy', desc: 'En la mayoría de los casos, tu tarjeta de seguro llega por correo electrónico el mismo día.' },
  ],
  testimonials: [
    { name: 'Carlos M.', location: 'Miami, Florida', text: 'Llegué de Honduras hace 2 años y pensaba que no podía asegurarme sin SSN. Me ayudaron en 15 minutos con mi matrícula consular. Sin problemas y a buen precio.' },
    { name: 'Sandra R.', location: 'Dallas, Texas', text: 'Tengo licencia mexicana y nunca me rechazaron aquí. Los precios son buenos y el servicio en español es real, no un menú automático.' },
    { name: 'Marcos V.', location: 'Atlanta, Georgia', text: 'Tuve un accidente el año pasado. Me resolvieron todo en español, contactaron a la otra parte y no tuve que lidiar con el inglés para nada.' },
  ],
  faq: [
    { q: '¿Puedo tener seguro de auto sin número de seguro social?', a: 'Sí. No necesitas SSN para contratar seguro de auto en ningún estado de EE.UU. En Aegis aceptamos ITIN (Individual Taxpayer Identification Number) como identificación válida. Puedes cotizar y contratar con tu ITIN o pasaporte.' },
    { q: '¿Aceptan licencia extranjera o matrícula consular?', a: 'Sí. Aceptamos licencias extranjeras y matrículas consulares como identificación. Los requisitos específicos pueden variar por estado. Contáctanos para confirmar los documentos disponibles en tu estado.' },
    { q: '¿Puede un inmigrante indocumentado conducir con seguro en USA?', a: 'Sí. Las personas indocumentadas pueden contratar y mantener seguro de auto en los 50 estados. De hecho, la mayoría de los estados exige seguro mínimo a todos los conductores sin importar su estatus migratorio. Manejar sin seguro puede resultar en multas de $150 a $5,000.' },
    { q: '¿Qué documentos necesito para contratar seguro de auto?', a: 'Generalmente necesitas: identificación (ITIN, pasaporte, matrícula consular o licencia extranjera), información del vehículo (placas, número VIN, año y modelo) y una dirección postal en USA. No se requiere SSN.' },
    { q: '¿Mi información personal se comparte con inmigración o ICE?', a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE, la migra ni ninguna agencia gubernamental sin una orden judicial. Cumplimos con todas las leyes estatales de privacidad de seguros.' },
    { q: '¿Cuánto cuesta el seguro de auto para inmigrantes?', a: 'El seguro de auto comienza desde $89/mes para cobertura básica de responsabilidad civil. El precio varía según el estado, tipo de vehículo e historial de manejo. Usar ITIN en vez de SSN no afecta significativamente el precio. Sujeto a términos y condiciones.' },
  ],
  ctaTitle: 'Protege tu auto',
  ctaItalic: 'hoy mismo',
  ctaSubtitle: 'Sin SSN. Sin complicaciones. Un asesor en español te guía en todo el proceso.',
  ctaButton: 'Cotizar Seguro de Auto',
  theme: 'blue',
  schema: { description: 'Seguro de auto para inmigrantes sin SSN. Acepta ITIN, pasaporte y matrícula consular. Desde $89/mes. Atención 100% en español.', price: '89' },
};

export default function AutoPage() {
  return <InsurancePage config={config} />;
}

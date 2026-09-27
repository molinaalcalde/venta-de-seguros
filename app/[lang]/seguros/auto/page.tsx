import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Auto',
  badge: '🚗 Sin SSN · ITIN Aceptado · Desde $89/mes',
  heroLine1: 'Seguro de Auto',
  heroItalic: 'para latinos en USA — con o sin SSN',
  heroSubtitle: 'La ley exige seguro a todos los conductores, sin importar tu estatus migratorio. Aceptamos ITIN, pasaporte, matrícula consular y licencia extranjera. Cotización gratis en 90 segundos.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN', 'Desde $89/mes', 'Asistencia 24/7 en español'],
  priceFrom: 'Desde $89/mes',
  eligibilityTitle: 'Sí puedes asegurarte aunque...',
  eligibilityText: 'No importa tu situación migratoria. La ley exige seguro mínimo a todos los conductores en USA — te ayudamos a cumplirla sin SSN, sin historial de crédito y sin complicaciones.',
  eligibilityItems: [
    'No tengas número de seguro social (SSN)',
    'Tu licencia sea extranjera o matrícula consular',
    'Seas inmigrante recién llegado o con años en USA',
    'No tengas historial de crédito en Estados Unidos',
    'Tengas visa temporal, DACA o estatus pendiente',
  ],
  features: [
    { emoji: '📋', title: 'Sin SSN — Acepta ITIN, Pasaporte y Matrícula Consular', desc: 'Cotiza y contrata con tu ITIN, pasaporte mexicano, matrícula consular o licencia extranjera. Sin burocracia, sin discriminación por estatus migratorio.' },
    { emoji: '🛡️', title: 'Coberturas que Realmente Importan — Explicadas en Español', desc: 'Responsabilidad civil (Liability) para proteger a otros. Colisión para tu vehículo. Comprehensive para robo, clima y vandalismo. UM/UIM para accidentes con conductores sin seguro. Te explicamos cada una sin tecnicismos.' },
    { emoji: '📞', title: 'Si Tienes un Accidente, Hablas con una Persona Real', desc: 'Cuando más lo necesitas, te atendemos en español — no un menú automático, no un bot. Un asesor real que sabe tu idioma y entiende tu situación.' },
  ],
  coverageItems: [
    'Responsabilidad civil (Liability) — obligatoria por ley',
    'Colisión (Collision) — daños a tu vehículo en accidentes',
    'Daños completos (Comprehensive) — robo, clima, vandalismo',
    'Conductor sin seguro (UM/UIM)',
    'Protección de lesiones personales (PIP)',
    'Gastos médicos personales (MedPay)',
    'Asistencia en carretera 24/7',
    'Auto de reemplazo mientras te reparan el tuyo',
  ],
  steps: [
    { title: 'Cotiza gratis en 90 segundos', desc: 'Responde unas preguntas básicas online o llama directamente. Sin SSN, sin revisión de crédito para cotizar.' },
    { title: 'Un asesor te explica cada opción', desc: 'Te explicamos en español la diferencia entre liability, collision y comprehensive — sin prisa, sin presión. Tú decides.' },
    { title: 'Recibe tu tarjeta de seguro hoy', desc: 'En la mayoría de los casos, tu tarjeta de seguro llega por correo electrónico el mismo día. Puedes manejar legal desde hoy.' },
  ],
  testimonials: [
    { name: 'Carlos M.', location: 'Miami, Florida', text: 'Llegué de Honduras hace 2 años y pensaba que no podía asegurarme sin SSN. Me ayudaron en 15 minutos con mi matrícula consular. Sin problemas, buen precio y todo en español.' },
    { name: 'Sandra R.', location: 'Dallas, Texas', text: 'Tengo licencia mexicana y nunca me rechazaron. El servicio en español es real — hablas con una persona, no con un menú automático. Eso vale mucho cuando tienes un problema.' },
    { name: 'Marcos V.', location: 'Atlanta, Georgia', text: 'Tuve un accidente el año pasado. Me resolvieron todo en español — contactaron a la otra parte, me explicaron cada paso. No tuve que lidiar con el inglés para nada.' },
  ],
  faq: [
    { q: '¿Puedo tener seguro de auto sin número de seguro social (SSN)?', a: 'Sí. No necesitas SSN para contratar seguro de auto en ningún estado de EE.UU. Aceptamos ITIN (Individual Taxpayer Identification Number), pasaporte, matrícula consular o licencia extranjera como identificación válida. Tu estatus migratorio no es un obstáculo.' },
    { q: '¿Mi información personal se comparte con ICE o migración?', a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE, la migra ni ninguna agencia gubernamental sin una orden judicial. Cumplimos con todas las leyes estatales de privacidad de seguros. Lo que compartes con nosotros es solo tuyo.' },
    { q: '¿Qué es "full coverage" y qué cubre realmente?', a: '"Full coverage" no es un producto oficial — es una expresión común que en realidad significa combinar tres coberturas: Liability (obligatoria, protege a otros), Collision (daños a tu auto en accidente) y Comprehensive (robo, clima, vandalismo). Te explicamos cada opción para que elijas lo que realmente necesitas.' },
    { q: '¿Puede un inmigrante indocumentado conducir con seguro en USA?', a: 'Sí. Las personas indocumentadas pueden contratar y mantener seguro de auto en los 50 estados. De hecho, la mayoría de los estados exige seguro mínimo a todos los conductores sin importar su estatus migratorio. Manejar sin seguro puede resultar en multas de $150 a $5,000, suspensión de licencia y responsabilidad civil personal.' },
    { q: '¿Cuánto cuesta el seguro de auto para inmigrantes?', a: 'El seguro de auto comienza desde $89/mes para cobertura básica de responsabilidad civil. El precio varía según el estado, tipo de vehículo e historial de manejo. Usar ITIN en vez de SSN no afecta significativamente el precio. Familias que cambian de aseguradora ahorran en promedio $400–$900 al año. Sujeto a términos y condiciones.' },
    { q: '¿Aceptan licencia extranjera o matrícula consular?', a: 'Sí. Aceptamos licencias extranjeras y matrículas consulares como identificación. Los requisitos específicos pueden variar por estado. Contáctanos para confirmar los documentos disponibles en tu estado.' },
    { q: '¿Qué documentos necesito para contratar seguro de auto?', a: 'Generalmente necesitas: identificación (ITIN, pasaporte, matrícula consular o licencia extranjera), información del vehículo (placas, número VIN, año y modelo) y una dirección postal en USA. No se requiere SSN ni revisión de crédito para cotizar.' },
    { q: '¿El seguro cubre si el otro conductor no tiene seguro?', a: 'Sí, si agregas la cobertura UM/UIM (Uninsured/Underinsured Motorist). Esta cobertura te protege cuando el conductor que te chocó no tiene seguro o tiene cobertura insuficiente. Es muy recomendable en estados con alta tasa de conductores sin seguro.' },
  ],
  ctaTitle: 'Maneja tranquilo',
  ctaItalic: 'desde hoy mismo',
  ctaSubtitle: 'Sin SSN. Sin revisión de crédito. Un asesor en español te guía en todo el proceso.',
  ctaButton: 'Cotizar Seguro de Auto',
  theme: 'blue',
  schema: { description: 'Seguro de auto para latinos e inmigrantes sin SSN en USA. Acepta ITIN, pasaporte y matrícula consular. Desde $89/mes. Atención 100% en español. Cotización gratis en 90 segundos.', price: '89' },
};

export default function AutoPage() {
  return <InsurancePage config={config} />;
}

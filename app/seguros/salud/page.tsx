import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Salud',
  badge: '🏥 Planes Individuales y Familiares · ITIN',
  heroLine1: 'Seguro de Salud',
  heroItalic: 'sin número de seguro social',
  heroSubtitle: 'Planes médicos para ti y tu familia con o sin SSN. Un asesor en español te explica cada opción antes de firmar — sin letra pequeña, sin sorpresas.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN', 'Desde $199/mes', 'Individual y familiar'],
  priceFrom: 'Desde $199/mes',
  eligibilityTitle: 'Opciones para cada situación',
  eligibilityText: 'Las opciones de seguro médico varían según tu estatus migratorio y estado. Te guiamos para encontrar la mejor cobertura disponible para ti y tu familia.',
  eligibilityItems: [
    'Planes privados con ITIN para cualquier estatus',
    'ACA/Marketplace para residentes permanentes y ciudadanos',
    'DACA: elegibilidad varía por estado',
    'Planes familiares que cubren hijos con cualquier estatus',
    'Opciones para trabajadores por cuenta propia',
  ],
  features: [
    { emoji: '👨‍⚕️', title: 'Médicos y Especialistas', desc: 'Accede a médicos de familia, especialistas y atención de emergencias en tu idioma. Sin pagar de tu bolsillo en cada visita.' },
    { emoji: '👨‍👩‍👧‍👦', title: 'Cobertura Familiar Completa', desc: 'Cubre a tu cónyuge e hijos en un solo plan. Tus dependientes pueden estar cubiertos sin necesidad de SSN individual.' },
    { emoji: '📅', title: 'Inscripción con Asesor', desc: 'Te guiamos durante el Open Enrollment o si calificas para inscripción especial. No pierdes la oportunidad por falta de información.' },
  ],
  coverageItems: [
    'Consultas médicas y especialistas',
    'Hospitalización y cirugías',
    'Medicamentos recetados',
    'Atención de emergencias',
    'Estudios y laboratorios',
    'Salud mental y terapia',
    'Maternidad y pediatría',
    'Preventivo sin costo adicional',
  ],
  steps: [
    { title: 'Cuéntanos tu situación', desc: 'Estatus, tamaño de familia, ingresos aproximados. Sin juicios, sin burocracia. Completamente confidencial.' },
    { title: 'Te explicamos tus opciones', desc: 'Planes privados, ACA y programas estatales. Tu asesor en español te explica cuál aplica para ti, sin tecnicismos.' },
    { title: 'Inscripción guiada', desc: 'Te acompañamos en todo el proceso de inscripción. Sin formularios confusos ni errores que retrasen tu cobertura.' },
  ],
  testimonials: [
    { name: 'María T.', location: 'Los Angeles, California', text: 'Llevaba 3 años sin seguro médico porque pensaba que no calificaba. Mi asesora me encontró un plan para toda la familia. Mis hijos ya tienen médico.' },
    { name: 'Jorge S.', location: 'Houston, Texas', text: 'Me explicaron todo en español y sin prisa. Ahora tengo un plan donde veo a mi médico sin pagar extra en cada visita. Vale cada peso.' },
    { name: 'Ana L.', location: 'Chicago, Illinois', text: 'Pensaba que Obamacare era solo para ciudadanos. Me explicaron que hay opciones privadas con ITIN. Ahora toda mi familia está cubierta.' },
  ],
  faq: [
    { q: '¿Pueden los indocumentados tener seguro médico en USA?', a: 'Sí, aunque las opciones varían. Las personas indocumentadas no califican para el ACA/Marketplace federal, pero existen planes de salud privados, programas estatales (como Medi-Cal en California) y otros programas de cobertura para los que sí califican. Te ayudamos a identificar la mejor opción para tu estado y situación.' },
    { q: '¿Acepta el Marketplace de salud el ITIN?', a: 'El Marketplace federal (ACA/Obamacare) generalmente requiere estatus migratorio elegible y número de seguro social. Sin embargo, existen planes privados que aceptan ITIN sin restricciones de estatus migratorio. Un asesor te explica cuál opción aplica para ti.' },
    { q: '¿Cuánto cuesta el seguro médico para inmigrantes?', a: 'Los planes privados de salud comienzan desde $199/mes para un adulto. El precio varía según edad, estado, número de personas cubiertas y nivel de cobertura. Sujeto a términos, condiciones y disponibilidad por estado.' },
    { q: '¿Puede cubrir a toda mi familia en un solo plan?', a: 'Sí. Ofrecemos planes familiares que cubren a cónyuge e hijos dependientes en una sola póliza. Tus dependientes pueden estar cubiertos sin necesidad de SSN individual. Sujeto a términos y condiciones.' },
    { q: '¿Cuándo puedo inscribirme en un seguro de salud?', a: 'El Open Enrollment para el ACA ocurre generalmente de noviembre a enero. Para planes privados, puedes inscribirte en cualquier momento. Si tienes un evento de vida (nacimiento, pérdida de trabajo, mudanza), puede que califiques para inscripción especial.' },
    { q: '¿El seguro cubre medicamentos recetados?', a: 'Sí. La mayoría de planes incluyen cobertura para medicamentos recetados con copago o deducible. El costo varía según el plan y el tipo de medicamento. Sujeto a términos y condiciones.' },
  ],
  ctaTitle: 'La salud de tu familia',
  ctaItalic: 'no puede esperar',
  ctaSubtitle: 'Planes individuales y familiares sin SSN. Un asesor en español te guía sin prisa.',
  ctaButton: 'Ver Planes de Salud',
  theme: 'emerald',
  schema: { description: 'Seguro de salud para inmigrantes sin SSN. Acepta ITIN. Planes individuales y familiares desde $199/mes. Atención 100% en español.', price: '199' },
};

export default function SaludPage() {
  return <InsurancePage config={config} />;
}

import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Salud',
  badge: '🏥 Planes Individuales y Familiares · ITIN Aceptado',
  heroLine1: 'Seguro de Salud',
  heroItalic: 'para toda tu familia — con o sin SSN',
  heroSubtitle: 'Una visita al médico sin seguro en USA puede costar $300. Una emergencia, $5,000 o más. Con nuestros planes de salud desde $199/mes, tu familia tiene acceso a médicos, medicamentos y emergencias. Un asesor en español te explica cada opción sin letra pequeña.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN', 'Desde $199/mes', 'Individual y familiar'],
  priceFrom: 'Desde $199/mes',
  eligibilityTitle: 'Opciones para cada situación migratoria',
  eligibilityText: 'Las opciones de seguro médico en USA varían según tu estatus migratorio y estado. Hay opciones para casi todas las situaciones — te ayudamos a encontrar la correcta para ti sin juicios ni complicaciones.',
  eligibilityItems: [
    'Planes privados con ITIN — cualquier estatus migratorio',
    'ACA/Marketplace para residentes permanentes y ciudadanos',
    'Programas estatales: Medi-Cal (CA), Medicaid y más',
    'DACA: elegibilidad varía por estado — te orientamos',
    'Planes familiares que cubren hijos con cualquier estatus',
  ],
  features: [
    { emoji: '👨‍⚕️', title: 'Médicos, Especialistas y Emergencias en Tu Red', desc: 'Consultas con médico de familia, especialistas, hospitalizaciones y emergencias — todo dentro de tu red de cobertura. Sin pagar de tu bolsillo en cada visita más allá del copago acordado.' },
    { emoji: '💊', title: 'Medicamentos, Laboratorios y Preventivos Incluidos', desc: 'La mayoría de planes cubre medicamentos recetados, exámenes de laboratorio, estudios de imagen y servicios preventivos anuales (chequeos, vacunas) sin costo adicional en muchos planes.' },
    { emoji: '📅', title: 'Te Ayudamos a Inscribirte — Open Enrollment y Especial', desc: 'El Open Enrollment para ACA es de noviembre a enero. Si tienes una situación de vida especial (nacimiento, pérdida de empleo, mudanza), puedes inscribirte en cualquier momento. Te guiamos en todo el proceso en español, sin formularios confusos.' },
  ],
  coverageItems: [
    'Consultas médicas y especialistas',
    'Hospitalización y cirugías',
    'Medicamentos recetados',
    'Atención de emergencias',
    'Exámenes de laboratorio e imagen',
    'Salud mental y terapia',
    'Maternidad y pediatría',
    'Servicios preventivos sin costo adicional',
  ],
  steps: [
    { title: 'Cuéntanos tu situación — sin juicios', desc: 'Estatus migratorio, tamaño de familia e ingresos aproximados. Todo completamente confidencial. Nunca compartimos tu información con el gobierno.' },
    { title: 'Te explicamos todas tus opciones en español', desc: 'Planes privados, ACA, Medicaid y programas estatales. Tu asesor en español te explica cuál aplica para ti, cuánto cuesta y qué cubre — sin tecnicismos ni letra pequeña.' },
    { title: 'Inscripción guiada de principio a fin', desc: 'Te acompañamos en todo el proceso de inscripción. Sin formularios confusos ni errores que retrasen tu cobertura. Estamos contigo hasta que tengas tu tarjeta activa.' },
  ],
  testimonials: [
    { name: 'María T.', location: 'Los Angeles, California', text: 'Llevaba 3 años sin seguro médico porque pensaba que no calificaba. Mi asesora me encontró un plan para toda la familia. Mis hijos ya tienen médico de cabecera y no tengo que esperar emergencias para ir al doctor.' },
    { name: 'Jorge S.', location: 'Houston, Texas', text: 'Me explicaron todo en español y sin prisa. Ahora tengo un plan donde veo a mi médico sin pagar extra en cada visita. Vale cada peso — antes pagaba $200 por cada consulta.' },
    { name: 'Ana L.', location: 'Chicago, Illinois', text: 'Pensaba que Obamacare era solo para ciudadanos. Me explicaron que hay opciones privadas con ITIN para cualquier estatus. Ahora toda mi familia está cubierta y dormimos más tranquilos.' },
  ],
  faq: [
    { q: '¿Pueden los indocumentados tener seguro médico en USA?', a: 'Sí, aunque las opciones varían por estado. Las personas sin estatus legal no califican para el ACA/Marketplace federal, pero existen planes de salud privados que aceptan ITIN sin restricciones de estatus migratorio. En estados como California (Medi-Cal), Nueva York y Illinois hay programas específicos. Te ayudamos a identificar la mejor opción para tu situación.' },
    { q: '¿Mi información se comparte con migración o el gobierno?', a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE, la migra ni ninguna agencia gubernamental sin orden judicial. Cumplimos con HIPAA. Lo que compartes con nosotros para encontrar tu plan de salud es privado.' },
    { q: '¿Cuánto cuesta el seguro médico para inmigrantes?', a: 'Los planes privados de salud comienzan desde $199/mes para un adulto. El precio varía según edad, estado, número de personas cubiertas y nivel de cobertura. Si calificas para subsidios del ACA por nivel de ingresos, puedes pagar significativamente menos. Sujeto a términos, condiciones y disponibilidad por estado.' },
    { q: '¿Acepta el Marketplace de salud el ITIN?', a: 'El Marketplace federal (ACA/Obamacare) generalmente requiere estatus migratorio elegible. Sin embargo, hay planes privados que aceptan ITIN sin restricciones de estatus. Algunos estados también tienen programas propios que cubren a personas sin importar su estatus. Tu asesor te explica qué aplica para ti.' },
    { q: '¿Puede cubrir a toda mi familia en un solo plan?', a: 'Sí. Ofrecemos planes familiares que cubren a cónyuge e hijos dependientes en una sola póliza. Tus hijos pueden estar cubiertos aunque tengan diferente estatus que tú. Sujeto a términos y condiciones.' },
    { q: '¿Cuándo puedo inscribirme en un seguro de salud?', a: 'El Open Enrollment para el ACA ocurre generalmente de noviembre a enero. Para planes privados, puedes inscribirte en cualquier momento del año. Si tienes un evento de vida (nacimiento de un hijo, pérdida de trabajo, divorcio, mudanza a otro estado), puedes calificar para inscripción especial fuera del período normal.' },
    { q: '¿El seguro cubre medicamentos recetados?', a: 'Sí. La mayoría de planes incluyen cobertura para medicamentos recetados con copago o deducible. Los medicamentos genéricos generalmente tienen copagos bajos ($5–$20). Los medicamentos de marca pueden tener copagos más altos. Sujeto a términos y condiciones del plan.' },
  ],
  ctaTitle: 'La salud de tu familia',
  ctaItalic: 'no puede esperar',
  ctaSubtitle: 'Planes desde $199/mes con o sin SSN. Un asesor en español te guía sin prisa.',
  ctaButton: 'Ver Planes de Salud',
  theme: 'blue',
  schema: { description: 'Seguro de salud para inmigrantes latinos sin SSN en USA. Acepta ITIN. Planes individuales y familiares desde $199/mes. ACA, planes privados y programas estatales. Atención 100% en español.', price: '199' },
};

export default function SaludPage() {
  return <InsurancePage config={config} />;
}

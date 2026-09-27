import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Dental',
  badge: '🦷 Desde $19/mes · Sin SSN · Sin Espera en Limpieza',
  heroLine1: 'Seguro Dental',
  heroItalic: 'para ti y toda tu familia',
  heroSubtitle: 'Una limpieza dental en USA sin seguro cuesta $150–$300. Una endodoncia puede costar $1,500. Con nuestros planes desde $19/mes, tu familia tiene acceso a limpieza, empastes y tratamientos — sin arruinarse. Sin SSN requerido.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN', 'Desde $19/mes', 'Sin espera en preventivo'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: '¿Cómo funciona el seguro dental?',
  eligibilityText: 'El seguro dental cubre 3 niveles de tratamiento. Cuanto más preventivo, más cubre el seguro — porque lo que se cuida hoy cuesta menos que lo que se trata mañana.',
  eligibilityItems: [
    '100% cubierto: limpieza, revisión y rayos X (preventivo)',
    '80% cubierto: empastes y extracciones simples (básico)',
    '50% cubierto: coronas, endodoncias y prótesis (mayor)',
    'Sin SSN ni historial de crédito requerido',
    'Planes familiares que incluyen hijos dependientes',
  ],
  features: [
    { emoji: '🧹', title: '2 Limpiezas al Año Cubiertas al 100% — Sin Costo Extra', desc: 'Los servicios preventivos (limpieza, revisión y rayos X) no tienen período de espera y están cubiertos al 100% desde el primer día. Vas al dentista sin pagar nada de tu bolsillo por la limpieza.' },
    { emoji: '🦷', title: 'Empastes al 80% — Coronas y Endodoncias al 50%', desc: 'Los tratamientos básicos como empastes y extracciones se cubren al 80%. Los tratamientos mayores como coronas, puentes y endodoncias (root canal) se cubren al 50%. Mucho mejor que pagar el 100% de tu bolsillo.' },
    { emoji: '👶', title: 'Plan Familiar con Ortodoncia para Menores', desc: 'Los planes familiares cubren a cónyuge e hijos dependientes. Algunos planes incluyen ortodoncia para menores de 18 años. Pregunta por las opciones con braces incluidos.' },
  ],
  coverageItems: [
    'Limpieza profesional (2 al año)',
    'Examen y revisión dental',
    'Rayos X dentales',
    'Empastes y restauraciones',
    'Extracciones simples y quirúrgicas',
    'Tratamiento de conducto (endodoncia)',
    'Coronas y puentes dentales',
    'Ortodoncia infantil (planes selectos)',
  ],
  steps: [
    { title: 'Elige tu plan — individual o familiar', desc: 'Planes desde $19/mes para una persona o planes familiares que cubren a todos. Te explicamos qué cubre cada nivel.' },
    { title: 'Cobertura preventiva activa desde el día 1', desc: 'La limpieza y revisión se cubren desde el primer día — sin períodos de espera en servicios preventivos en la mayoría de planes.' },
    { title: 'Ve al dentista y presenta tu tarjeta', desc: 'Visita cualquier dentista de la red con tu tarjeta de seguro. Sin pagar adelantado por limpiezas y preventivos.' },
  ],
  testimonials: [
    { name: 'Patricia C.', location: 'Miami, Florida', text: 'Mis hijos no habían ido al dentista en 2 años porque era muy caro. Con el plan familiar ahora todos vamos. Sin problema de SSN, buen precio y los niños ya tienen sus dientes revisados.' },
    { name: 'Miguel A.', location: 'San Antonio, Texas', text: 'Me dolía una muela y estaba aguantando porque no tenía seguro. Con el seguro dental me arreglaron todo por menos de $30 en copago. Hubiera costado $400 sin seguro.' },
    { name: 'Rosa V.', location: 'Orlando, Florida', text: 'Nunca pensé que podía tener seguro dental sin Social Security. Mi asesora me explicó que con ITIN es suficiente. Ahora toda la familia está cubierta y vamos al dentista sin miedo a la cuenta.' },
  ],
  faq: [
    { q: '¿Necesito número de seguro social para tener seguro dental?', a: 'No. Puedes contratar seguro dental con tu ITIN como identificación. No se requiere SSN ni historial de crédito.' },
    { q: '¿Cuál es la diferencia entre un plan HMO y PPO dental?', a: 'Un plan HMO dental tiene copagos fijos y predecibles, sin deducible anual ni límite máximo de cobertura — ideal si quieres saber exactamente cuánto vas a pagar. Un plan PPO dental te da más libertad para elegir dentista, pero tiene deducible anual y un límite de cobertura típico de $1,000–$2,000 por año. El HMO es más económico; el PPO da más opciones.' },
    { q: '¿Hay períodos de espera en el seguro dental?', a: 'Los servicios preventivos como limpieza, revisión y rayos X generalmente no tienen período de espera — puedes usarlos desde el primer día. Los tratamientos básicos (empastes) pueden tener espera de 3–6 meses. Los tratamientos mayores (coronas, endodoncias) pueden tener espera de 6–12 meses. Esto varía por plan.' },
    { q: '¿Cuánto cuesta el seguro dental para inmigrantes?', a: 'Los planes individuales comienzan desde $19/mes y los planes familiares desde $45/mes dependiendo del estado y nivel de cobertura. Una limpieza anual sin seguro cuesta $150–$300. Dos limpiezas más revisiones al año ya justifican la prima en muchos planes. Sujeto a términos y condiciones.' },
    { q: '¿El seguro dental cubre ortodoncia para mis hijos?', a: 'Algunos planes incluyen cobertura de ortodoncia para menores de 18 años, generalmente con un límite de por vida de $1,000–$2,000. Esto varía por plan y estado. Si la ortodoncia de tus hijos es prioritaria, te recomendamos preguntar específicamente por planes que la incluyan.' },
    { q: '¿El plan cubre implantes dentales?', a: 'Los implantes dentales son considerados tratamientos mayores y están cubiertos en algunos planes premium al 50%. Muchos planes básicos no los cubren. Si necesitas implantes, consulta los detalles de cobertura del plan antes de contratar.' },
    { q: '¿Puedo agregar a toda mi familia en un plan dental?', a: 'Sí. Ofrecemos planes familiares que cubren a cónyuge e hijos dependientes. El costo familiar suele ser más económico que contratar pólizas individuales por separado. Sujeto a términos y condiciones.' },
  ],
  ctaTitle: 'Tu sonrisa merece',
  ctaItalic: 'cuidado real',
  ctaSubtitle: 'Planes desde $19/mes. Sin SSN. Sin espera en limpiezas y preventivos.',
  ctaButton: 'Cotizar Seguro Dental',
  theme: 'cyan',
  schema: { description: 'Seguro dental para latinos e inmigrantes sin SSN en USA. Acepta ITIN. Planes individuales desde $19/mes y familiares. 2 limpiezas al año cubiertas al 100%. Empastes, coronas y ortodoncia.', price: '19' },
};

export default function DentalPage() {
  return <InsurancePage config={config} />;
}

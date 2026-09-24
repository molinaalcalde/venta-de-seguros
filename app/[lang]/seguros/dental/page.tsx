import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Dental',
  badge: '🦷 Desde $19/mes · Sin SSN',
  heroLine1: 'Seguro Dental',
  heroItalic: 'para toda tu familia',
  heroSubtitle: 'El dentista en USA puede costar una fortuna sin seguro. Con nuestros planes desde $19/mes tu familia tiene acceso a limpieza, empastes y tratamientos mayores — sin arruinarse.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN', 'Desde $19/mes', 'Cobertura familiar'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: 'Sonríe sin preocuparte',
  eligibilityText: 'El seguro dental no requiere SSN. Cualquier persona con ITIN o identificación válida puede contratar un plan dental para sí mismo o su familia.',
  eligibilityItems: [
    'Sin SSN ni historial de crédito requerido',
    'Cobertura individual desde $19/mes',
    'Planes familiares que incluyen hijos dependientes',
    'Sin período de espera en servicios preventivos',
    'Acepta ITIN como identificación válida',
  ],
  features: [
    { emoji: '🦷', title: 'Limpieza Preventiva Incluida', desc: 'La limpieza y revisión anual están cubiertas al 100% desde el primer día, sin deducible en la mayoría de planes.' },
    { emoji: '💊', title: 'Tratamientos Mayores Cubiertos', desc: 'Empastes, extracciones, rayos X, endodoncia y prótesis dentales con deducible accesible. Sujeto a términos.' },
    { emoji: '👶', title: 'Cobertura para Niños', desc: 'Planes familiares que incluyen ortodoncia para menores de 18 años en algunos planes. Pregunta por la opción con ortodoncia.' },
  ],
  coverageItems: [
    'Limpieza y revisión anual',
    'Rayos X dentales',
    'Empastes y restauraciones',
    'Extracciones simples y quirúrgicas',
    'Tratamiento de conducto (endodoncia)',
    'Prótesis y dentaduras',
    'Ortodoncia infantil (algunos planes)',
    'Urgencias dentales',
  ],
  steps: [
    { title: 'Elige tu plan', desc: 'Individual desde $19/mes o familiar con todos cubiertos. Te explicamos qué cubre cada nivel de cobertura.' },
    { title: 'Activa tu cobertura', desc: 'La cobertura preventiva se activa desde el primer día en la mayoría de los planes. Sin esperas para limpiezas.' },
    { title: 'Ve al dentista', desc: 'Visita cualquier dentista de la red con tu tarjeta de seguro. Sin pagar de adelantado por servicios preventivos.' },
  ],
  testimonials: [
    { name: 'Patricia C.', location: 'Miami, Florida', text: 'Mis hijos no habían ido al dentista en 2 años porque era muy caro. Con el plan familiar ahora todos vamos. Sin problema de SSN y a muy buen precio.' },
    { name: 'Miguel A.', location: 'San Antonio, Texas', text: 'Me dolía una muela y estaba aguantando porque no tenía seguro. Con el seguro dental me arreglaron todo por menos de $30 en copago.' },
    { name: 'Rosa V.', location: 'Orlando, Florida', text: 'Nunca pensé que podía tener seguro dental sin Social. Mi asesora me explicó que con ITIN es suficiente. Ahora toda la familia está cubierta.' },
  ],
  faq: [
    { q: '¿Necesito número de seguro social para tener seguro dental?', a: 'No. Puedes contratar seguro dental con tu ITIN como identificación. No se requiere SSN.' },
    { q: '¿Cuánto cuesta el seguro dental para inmigrantes?', a: 'Los planes individuales comienzan desde $19/mes y los planes familiares desde $45/mes dependiendo del estado y nivel de cobertura. Sujeto a términos y condiciones.' },
    { q: '¿El seguro dental cubre ortodoncia para mis hijos?', a: 'Algunos planes incluyen cobertura de ortodoncia para menores de 18 años. Esto varía por plan y estado. Te recomendamos preguntar específicamente por planes que incluyan ortodoncia si es una prioridad para tu familia.' },
    { q: '¿Hay período de espera para usar el seguro dental?', a: 'Los servicios preventivos como limpieza y revisión generalmente no tienen período de espera. Para tratamientos mayores como empastes o endodoncias, algunos planes pueden tener período de espera de 3 a 12 meses. Consulta los detalles de tu plan.' },
    { q: '¿El plan de descuento dental es lo mismo que el seguro dental?', a: 'No. Un plan de descuento te da precios reducidos en el dentista pero tú pagas directamente. Un seguro dental cubre una parte del costo. Hay opciones de ambos tipos accesibles sin SSN. Te explicamos cuál conviene más para tu situación.' },
    { q: '¿Puedo agregar a toda mi familia en un plan dental?', a: 'Sí. Ofrecemos planes familiares que cubren a cónyuge e hijos dependientes. El costo familiar suele ser más económico que contratar pólizas individuales por separado. Sujeto a términos y condiciones.' },
  ],
  ctaTitle: 'Tu sonrisa merece',
  ctaItalic: 'protección',
  ctaSubtitle: 'Planes desde $19/mes. Sin SSN. Sin esperas en servicios preventivos.',
  ctaButton: 'Cotizar Seguro Dental',
  theme: 'cyan',
  schema: { description: 'Seguro dental para inmigrantes sin SSN. Acepta ITIN. Planes individuales desde $19/mes y familiares. Limpieza, empastes y tratamientos.', price: '19' },
};

export default function DentalPage() {
  return <InsurancePage config={config} />;
}

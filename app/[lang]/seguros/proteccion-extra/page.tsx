import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Umbrella',
  badge: '☂️ Umbrella · Desde $1 Millón de Cobertura',
  heroLine1: 'Protección Extra',
  heroItalic: 'cuando tu seguro regular no alcanza',
  heroSubtitle: 'Si un accidente grave supera los límites de tu seguro de auto o casa, la diferencia sale de tu bolsillo — a veces de tu casa, tus ahorros o tu negocio. La Protección Extra cierra ese espacio.',
  trustBadges: ['Desde $19/mes', 'Desde $1M de cobertura', 'Protege tus ahorros', 'Sin SSN requerido'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: '¿Quién necesita Protección Extra?',
  eligibilityText: 'Si tienes ahorros, propiedades o activos que proteger, la Protección Extra es tu última línea de defensa ante una demanda que supere los límites de tu seguro regular.',
  eligibilityItems: [
    'Tienes seguro de auto activo (requisito previo)',
    'Tienes ahorros o propiedades que proteger',
    'Eres dueño de casa, condo o negocio',
    'Tienes mascotas que podrían causar daño a terceros',
    'Tienes hijos adolescentes que manejan',
  ],
  features: [
    { emoji: '☂️', title: 'El Paraguas que Todo Cubre', desc: 'Tu seguro de auto cubre hasta $300K. Si el accidente cuesta $600K, ¿quién paga la diferencia? La Protección Extra. Exactamente para eso existe.' },
    { emoji: '🏦', title: 'Protege tus Ahorros', desc: 'Sin Protección Extra, una demanda exitosa puede resultar en embargo de tus cuentas o propiedades. Este seguro pone una barrera entre tus activos y los demandantes.' },
    { emoji: '💰', title: 'Sorprendentemente Accesible', desc: 'Por el alto nivel de cobertura que ofrece, la Protección Extra es uno de los seguros más económicos — desde $19/mes por $1 millón de cobertura adicional.' },
  ],
  coverageItems: [
    'Responsabilidad civil extra sobre auto',
    'Responsabilidad civil extra sobre hogar',
    'Protección ante demandas de terceros',
    'Gastos legales en casos complejos',
    'Cobertura desde $1 millón',
    'Incidentes con mascotas domésticas',
    'Accidentes de tus dependientes',
    'Responsabilidad civil personal global',
  ],
  steps: [
    { title: 'Confirma tus seguros base', desc: 'Necesitas tener activo al menos un seguro de auto o de hogar. La Protección Extra se añade como capa superior.' },
    { title: 'Elige tu límite de cobertura', desc: 'Desde $1 millón hasta $5 millones de cobertura adicional. Te ayudamos a elegir el monto según tus activos.' },
    { title: 'Activa tu paraguas', desc: 'Tu Protección Extra entra en vigor y tienes el nivel más alto de protección disponible — todo en español.' },
  ],
  testimonials: [
    { name: 'Eduardo M.', location: 'Newark, New Jersey', text: 'Tuve un accidente de auto grave. Los daños superaban mi seguro regular. Sin la Protección Extra, hubiera tenido que vender mi casa para pagar.' },
    { name: 'Silvia A.', location: 'Austin, Texas', text: 'Nunca pensé que la necesitaba hasta que mi perro mordió a un vecino y me amenazaron con demandar. El seguro cubrió los gastos médicos y el arreglo.' },
    { name: 'Manuel P.', location: 'Phoenix, Arizona', text: 'Como dueño de negocio tengo varios activos que proteger. La Protección Extra me da tranquilidad total por menos de $25 al mes.' },
  ],
  faq: [
    { q: '¿Qué es el seguro de Protección Extra o Umbrella?', a: 'La Protección Extra (Umbrella Insurance) es una cobertura adicional que entra en vigor cuando los límites de tu seguro de auto o casa se agotan. Por ejemplo, si tienes un accidente que causa $600,000 en daños pero tu seguro de auto solo cubre $300,000, la Protección Extra paga los $300,000 restantes.' },
    { q: '¿Cuándo necesito Protección Extra?', a: 'La necesitas si tienes ahorros, propiedades, inversiones o activos que podrían ser embargados en una demanda. También si tienes perros de razas grandes, piscina en tu casa, adolescentes que manejan, o si eres dueño de negocio.' },
    { q: '¿Cuánto cuesta la Protección Extra?', a: 'Los planes comienzan desde $19/mes por $1 millón de cobertura adicional. Es uno de los seguros con mejor relación cobertura/precio disponibles. Sujeto a términos y condiciones.' },
    { q: '¿Necesito otro seguro antes de contratar Protección Extra?', a: 'Sí. La Protección Extra requiere que tengas activo al menos un seguro de auto o de hogar. Funciona como una capa adicional sobre tus seguros existentes, no como seguro independiente.' },
    { q: '¿La Protección Extra cubre incidentes con mis mascotas?', a: 'Sí. Si tu perro u otra mascota causa daño o lesión a un tercero, la Protección Extra puede cubrir la responsabilidad civil resultante, siempre que exceda los límites de tu seguro de hogar o renters. Sujeto a términos y condiciones.' },
    { q: '¿Puedo contratar Protección Extra sin SSN?', a: 'Sí. Aceptamos ITIN como identificación válida para contratar Protección Extra, siempre que tengas los seguros base requeridos activos.' },
  ],
  ctaTitle: 'La última línea de',
  ctaItalic: 'defensa',
  ctaSubtitle: 'Desde $19/mes por $1 millón de cobertura adicional. Protege tus ahorros.',
  ctaButton: 'Añadir Protección Extra',
  theme: 'slate',
  schema: { description: 'Seguro de protección extra (umbrella) para hispanos. Desde $1 millón de cobertura adicional. Protege ahorros y propiedades ante demandas. Desde $19/mes.', price: '19' },
};

export default function ProteccionExtraPage() {
  return <InsurancePage config={config} />;
}

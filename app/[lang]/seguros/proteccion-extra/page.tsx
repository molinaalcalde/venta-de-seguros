import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Umbrella',
  badge: '☂️ Desde $19/mes · $1 Millón de Cobertura Extra',
  heroLine1: 'Protección Extra',
  heroItalic: 'cuando tu seguro regular no alcanza',
  heroSubtitle: 'Tu seguro de auto cubre hasta $300,000. Si el accidente cuesta $600,000 — ¿quién paga la diferencia? Tú: de tus ahorros, tu casa, tu negocio. La Protección Extra (Umbrella) cierra ese espacio por solo $19/mes. Sin SSN requerido.',
  trustBadges: ['Desde $19/mes', 'Desde $1M de cobertura', 'Protege tus ahorros', 'Sin SSN requerido'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: '¿Quién necesita Protección Extra?',
  eligibilityText: 'Si tienes ahorros, propiedades, un negocio o activos que has construido con esfuerzo, la Protección Extra es tu última línea de defensa. Por $19/mes obtienes $1 millón de cobertura adicional — es uno de los mejores valores en seguros.',
  eligibilityItems: [
    'Tienes seguro de auto activo (requisito previo)',
    'Tienes ahorros, propiedades o cuentas que proteger',
    'Eres dueño de casa, condo o negocio',
    'Tienes mascotas que podrían causar daño a terceros',
    'Tienes hijos adolescentes que manejan',
  ],
  features: [
    { emoji: '☂️', title: 'El Ejemplo Real: $300K No Alcanza', desc: 'Tu seguro de auto cubre $300,000. Un accidente grave causa $600,000 en daños médicos y legales. La diferencia de $300,000 sale de tus ahorros o propiedades — a menos que tengas Protección Extra. Exactamente para eso existe.' },
    { emoji: '🏦', title: 'Protege Todo lo que Construiste con Esfuerzo', desc: 'Sin Protección Extra, una demanda exitosa puede resultar en embargo de cuentas bancarias, propiedades o activos del negocio. Este seguro pone una barrera legal entre lo que tienes y quienes te demandan.' },
    { emoji: '💰', title: '$1 Millón de Cobertura por Solo $19/mes', desc: 'Es uno de los seguros con mejor relación precio-cobertura disponibles. Por menos de un dólar al día obtienes $1 millón de protección adicional sobre tu seguro de auto y hogar.' },
  ],
  coverageItems: [
    'Responsabilidad civil extra sobre tu seguro de auto',
    'Responsabilidad civil extra sobre tu seguro de hogar',
    'Protección ante demandas de terceros',
    'Gastos legales y honorarios de abogado',
    'Cobertura desde $1 millón hasta $5 millones',
    'Incidentes con mascotas domésticas',
    'Accidentes causados por tus dependientes',
    'Responsabilidad civil personal global',
  ],
  steps: [
    { title: 'Confirma que tienes seguro base activo', desc: 'Necesitas tener activo al menos un seguro de auto o de hogar. La Protección Extra funciona como una capa encima de tu cobertura existente.' },
    { title: 'Elige tu límite de cobertura', desc: 'Desde $1 millón hasta $5 millones de cobertura adicional. Te ayudamos a elegir el monto correcto según tus activos y situación.' },
    { title: 'Tu paraguas queda activo', desc: 'Tienes el nivel más alto de protección disponible. Si una demanda supera los límites de tu seguro regular, la Protección Extra entra automáticamente.' },
  ],
  testimonials: [
    { name: 'Eduardo M.', location: 'Newark, New Jersey', text: 'Tuve un accidente de auto grave — los daños y gastos médicos superaban mi seguro regular. Sin la Protección Extra, hubiera tenido que vender mi casa para pagar. Ese seguro me salvó todo lo que tenía.' },
    { name: 'Silvia A.', location: 'Austin, Texas', text: 'Nunca pensé que la necesitaba hasta que mi perro mordió a un vecino y me amenazaron con demandar por $80,000. El seguro cubrió los gastos médicos y el arreglo. $19 al mes los más bien invertidos.' },
    { name: 'Manuel P.', location: 'Phoenix, Arizona', text: 'Como dueño de negocio tengo varios activos que proteger. La Protección Extra me da tranquilidad total. Si alguien me demanda por un monto enorme, sé que estoy cubierto.' },
  ],
  faq: [
    { q: '¿Qué es la Protección Extra o Umbrella Insurance?', a: 'La Protección Extra (Umbrella Insurance) es una cobertura adicional que se activa cuando los límites de tu seguro de auto o casa se agotan. Ejemplo: tienes un accidente que causa $600,000 en daños, pero tu seguro de auto solo cubre $300,000. La Protección Extra paga los $300,000 restantes — protegiendo tus ahorros, propiedades y activos.' },
    { q: '¿Cuándo necesito Protección Extra?', a: 'La necesitas si tienes ahorros, propiedades, inversiones o activos que podrían ser embargados en una demanda. También si tienes: perros de razas grandes o agresivas, piscina en tu casa, hijos adolescentes que manejan, o si eres dueño de negocio. Si una persona te demanda por más de lo que tu seguro regular cubre, pagas la diferencia de tu bolsillo.' },
    { q: '¿Cuánto cuesta la Protección Extra?', a: 'Los planes comienzan desde $19/mes por $1 millón de cobertura adicional. Es uno de los seguros con mejor relación precio-cobertura disponibles — por menos de $1 al día tienes $1 millón de protección extra. Sujeto a términos y condiciones.' },
    { q: '¿Necesito otro seguro antes de contratar Protección Extra?', a: 'Sí. La Protección Extra requiere que tengas activo al menos un seguro de auto o de hogar con límites mínimos. Funciona como una capa adicional encima de tus seguros existentes — no es un seguro independiente.' },
    { q: '¿La Protección Extra cubre incidentes con mis mascotas?', a: 'Sí. Si tu perro u otra mascota causa daño o lesión a un tercero y la demanda supera los límites de tu seguro de hogar o renters, la Protección Extra puede cubrir la responsabilidad civil adicional. Especialmente importante si tienes razas con historial de demandas. Sujeto a términos y condiciones.' },
    { q: '¿Puedo contratar Protección Extra sin SSN?', a: 'Sí. Aceptamos ITIN como identificación válida para contratar Protección Extra, siempre que tengas los seguros base requeridos (auto y/o hogar) activos.' },
    { q: '¿Qué pasa si me demandan por más de $1 millón?', a: 'Puedes contratar Protección Extra con límites de $2 millones, $3 millones o hasta $5 millones de cobertura adicional. El costo adicional por aumentar el límite es mínimo comparado con la protección que ofrece. Te recomendamos ajustar el límite según el valor total de tus activos.' },
  ],
  ctaTitle: 'La última línea de',
  ctaItalic: 'defensa',
  ctaSubtitle: 'Desde $19/mes por $1 millón de cobertura adicional. Protege lo que has construido.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'slate',
  schema: { description: 'Protección Extra (Umbrella Insurance) para latinos en USA. Desde $1 millón de cobertura adicional sobre seguro de auto y hogar. Protege ahorros y propiedades ante demandas. Sin SSN. Desde $19/mes.', price: '19' },
};

export default function ProteccionExtraPage() {
  return <InsurancePage config={config} />;
}

'use client';

import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Umbrella, Bank, CurrencyDollar } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Umbrella',
  badgeIcon: Umbrella,
  badge: 'Desde $19/mes · $1 Millón de Cobertura Extra',
  heroLine1: 'Protección Extra',
  heroItalic: 'cuando $300K no alcanzan',
  heroSubtitle: 'Tu auto tiene $300,000 de cobertura. El accidente costó $600,000. La diferencia — $300,000 — sale de tus ahorros, tu casa, tu negocio. La Protección Extra (Umbrella) cierra esa brecha por menos de $1 al día. Sin SSN requerido.',
  trustBadges: ['Desde $19/mes', '$1M–$5M de cobertura', 'Protege tus ahorros', 'Sin SSN requerido'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: '¿Quién necesita Protección Extra?',
  eligibilityText: 'Si tienes ahorros, propiedades, un negocio o activos que construiste con esfuerzo, la Protección Extra es tu última línea de defensa. Una sola demanda exitosa puede resultar en embargo de cuentas bancarias o propiedades — a menos que tengas este seguro.',
  eligibilityItems: [
    'Tienes seguro de auto activo (requisito previo)',
    'Tienes ahorros, propiedades o cuentas que proteger',
    'Sos dueño de casa, condo o negocio',
    'Tienes mascotas (especialmente razas grandes)',
    'Tienes hijos adolescentes que manejan',
  ],
  features: [
    {
      icon: Umbrella,
      title: 'El Escenario Real: $300K No Alcanza',
      desc: 'Tu seguro de auto cubre $300,000. Un accidente grave genera $600,000 en daños médicos, legales y de propiedad. La diferencia de $300,000 no la paga nadie más — sale de tus cuentas, tus ahorros o tu casa. La Protección Extra entra exactamente en ese momento y paga esa diferencia.',
    },
    {
      icon: Bank,
      title: 'Una Barrera Legal Entre Tus Activos y Quien te Demanda',
      desc: 'Sin Protección Extra, una demanda exitosa puede resultar en embargo de cuentas bancarias, propiedades o activos del negocio. Este seguro pone una barrera legal entre lo que tienes y quien te demanda. Los abogados del otro lado lo saben — por eso demandan por cifras enormes.',
    },
    {
      icon: CurrencyDollar,
      title: 'Menos de $1 al Día por $1 Millón de Protección',
      desc: 'Es uno de los seguros con mejor relación precio-cobertura del mercado. Por menos de $1 al día obtienes $1 millón de protección adicional sobre tu seguro de auto y hogar. Para aumentar a $2, $3 o $5 millones, el costo adicional es mínimo.',
    },
  ],
  coverageItems: [
    'Responsabilidad civil extra sobre tu seguro de auto',
    'Responsabilidad civil extra sobre tu seguro de hogar',
    'Protección ante demandas de terceros',
    'Gastos legales y honorarios de abogado',
    'Cobertura desde $1 millón hasta $5 millones',
    'Incidentes con mascotas domésticas',
    'Accidentes causados por hijos adolescentes al manejar',
    'Responsabilidad civil personal global',
  ],
  steps: [
    {
      title: 'Confirma que tienes seguro base activo',
      desc: 'Necesitás tener activo al menos un seguro de auto o de hogar. La Protección Extra es una capa adicional encima de tu cobertura existente.',
    },
    {
      title: 'Elegimos juntos el límite correcto',
      desc: 'Tu asesora te ayuda a elegir entre $1M, $2M, $3M o $5M según el valor total de tus activos. Cuánto más tienes para proteger, más alto el límite recomendado.',
    },
    {
      title: 'Tu paraguas queda activo',
      desc: 'Si una demanda supera los límites de tu seguro regular, la Protección Extra entra automáticamente. El nivel más alto de protección disponible.',
    },
  ],
  testimonials: [
    {
      name: 'Eduardo M.',
      location: 'Newark, New Jersey',
      text: 'Tuve un accidente de auto grave — los daños superaban mi seguro regular. Sin la Protección Extra, hubiera tenido que vender mi casa para pagar. Ese seguro me salvó todo lo que tenía.',
    },
    {
      name: 'Silvia A.',
      location: 'Austin, Texas',
      text: 'Mi perro mordió a un vecino y me amenazaron con demandar por $80,000. El seguro cubrió los gastos médicos y el arreglo. $19 al mes los más bien invertidos de mi vida.',
    },
    {
      name: 'Manuel P.',
      location: 'Phoenix, Arizona',
      text: 'Como dueño de negocio tengo varios activos que proteger. La Protección Extra me da tranquilidad total. Si alguien me demanda por un monto enorme, sé que estoy cubierto.',
    },
  ],
  faq: [
    {
      q: '¿Qué es la Protección Extra (Umbrella Insurance)?',
      a: 'La Protección Extra es una cobertura adicional que se activa cuando los límites de tu seguro de auto o casa se agotan. Ejemplo concreto: tienes un accidente que causa $600,000 en daños, pero tu seguro de auto solo cubre $300,000. La Protección Extra paga los $300,000 restantes — protegiendo tus ahorros, propiedades y activos de un embargo.',
    },
    {
      q: '¿Cuándo necesito Protección Extra?',
      a: 'La necesitas si tienes ahorros, propiedades, inversiones o activos que podrían ser embargados en una demanda. También si tienes: perros de razas grandes, piscina en tu casa, hijos adolescentes que manejan, o si eres dueño de negocio. Una persona sin activos tiene poco que perder en una demanda. Una persona con ahorros y propiedades tiene todo que perder.',
    },
    {
      q: '¿Cuánto cuesta la Protección Extra?',
      a: 'Los planes comienzan desde $19/mes por $1 millón de cobertura adicional — menos de $1 al día. Es uno de los seguros con mejor relación precio-cobertura disponibles. Aumentar a $2 millones o $3 millones cuesta muy poco más en comparación con la protección adicional que ofrece.',
    },
    {
      q: '¿Necesito otro seguro antes de contratar Protección Extra?',
      a: 'Sí. La Protección Extra requiere que tengas activo al menos un seguro de auto o de hogar con límites mínimos. Funciona como una capa adicional encima de tus seguros existentes — no es un seguro independiente.',
    },
    {
      q: '¿La Protección Extra cubre incidentes con mascotas?',
      a: 'Sí. Si tu perro u otra mascota causa daño o lesión a un tercero y la demanda supera los límites de tu seguro de hogar, la Protección Extra puede cubrir la responsabilidad civil adicional. Especialmente importante si tienes razas con historial de demandas como Pit Bull, Rottweiler o Pastor Alemán.',
    },
    {
      q: '¿Qué pasa si me demandan por más de $1 millón?',
      a: 'Puedes contratar Protección Extra con límites de $2 millones, $3 millones o hasta $5 millones de cobertura adicional. El costo adicional por aumentar el límite es mínimo comparado con la protección. Te recomendamos ajustar el límite según el valor total de tus activos.',
    },
    {
      q: '¿Puedo contratar Protección Extra sin SSN?',
      a: 'Sí. Aceptamos ITIN como identificación válida, siempre que tengas los seguros base requeridos (auto y/o hogar) activos.',
    },
  ],
  ctaTitle: 'La última línea de',
  ctaItalic: 'defensa',
  ctaSubtitle: 'Desde $19/mes — menos de $1 al día por $1 millón de protección adicional.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'slate',
  schema: {
    description: 'Protección Extra (Umbrella Insurance) para latinos en USA. $1M a $5M de cobertura adicional sobre seguro de auto y hogar. Protege ahorros y propiedades ante demandas. Sin SSN. Desde $19/mes.',
    price: '19',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Umbrella',
  badgeIcon: Umbrella,
  badge: 'From $19/mo · $1 Million in Extra Coverage',
  heroLine1: 'Umbrella Insurance',
  heroItalic: 'when $300K isn'''t enough',
  heroSubtitle: 'Your auto policy covers $300,000. The accident caused $600,000 in damages. The remaining $300,000 comes from your savings, your home, your business. Umbrella insurance closes that gap for less than $1 a day. No SSN required.',
  trustBadges: ['From $19/mo', '$1M–$5M coverage', 'Protect your assets', 'No SSN required'],
  priceFrom: 'From $19/mo',
  eligibilityTitle: 'Who needs umbrella insurance?',
  eligibilityText: 'If you have savings, property, a business, or assets you\'ve worked hard to build, umbrella insurance is your last line of defense. One successful lawsuit can result in bank account garnishment or forced property sale — unless you have this coverage.',
  eligibilityItems: [
    'You have active auto insurance (prerequisite)',
    'You have savings, property, or accounts to protect',
    'You own a home, condo, or business',
    'You have pets (especially large breeds)',
    'You have teenage drivers in your household',
  ],
  features: [
    {
      icon: Umbrella,
      title: 'The Real Scenario: $300K Isn\'t Enough',
      desc: 'Your auto policy covers $300,000. A serious accident generates $600,000 in medical, legal, and property damages. The remaining $300,000 isn\'t covered by anyone else — it comes from your accounts, savings, or home equity. Umbrella insurance steps in exactly at that moment and pays the difference.',
    },
    {
      icon: Bank,
      title: 'A Legal Barrier Between Your Assets and Those Who Sue You',
      desc: 'Without umbrella insurance, a successful lawsuit can result in bank account garnishment, forced property sales, or seizure of business assets. This policy creates a legal barrier between what you have and those who sue you. Opposing attorneys know this — that\'s why they sue for enormous amounts.',
    },
    {
      icon: CurrencyDollar,
      title: 'Less Than $1 a Day for $1 Million in Protection',
      desc: 'This is one of the best value-for-money insurance products available. For less than $1 per day, you get $1 million in additional protection on top of your auto and home insurance. Increasing to $2M, $3M, or $5M costs very little extra compared to the protection it provides.',
    },
  ],
  coverageItems: [
    'Extra liability above your auto insurance limits',
    'Extra liability above your home insurance limits',
    'Protection against third-party lawsuits',
    'Legal costs and attorney fees',
    'Coverage from $1 million to $5 million',
    'Pet-related incidents',
    'Accidents caused by teenage drivers',
    'Personal worldwide civil liability',
  ],
  steps: [
    {
      title: 'Confirm you have active base insurance',
      desc: 'You need at least one active auto or home insurance policy. Umbrella is an additional layer on top of your existing coverage.',
    },
    {
      title: 'We help you choose the right limit',
      desc: 'Your agent helps you choose between $1M, $2M, $3M, or $5M based on your total asset value. The more you have to protect, the higher the recommended limit.',
    },
    {
      title: 'Your umbrella policy activates',
      desc: 'If a lawsuit exceeds your regular policy limits, umbrella coverage kicks in automatically. The highest level of personal protection available.',
    },
  ],
  testimonials: [
    {
      name: 'Eduardo M.',
      location: 'Newark, New Jersey',
      text: 'I had a serious car accident — the damages exceeded my regular insurance. Without umbrella coverage, I would have had to sell my house to pay. That policy saved everything I had.',
    },
    {
      name: 'Silvia A.',
      location: 'Austin, Texas',
      text: 'My dog bit a neighbor and they threatened to sue me for $80,000. Insurance covered the medical bills and the settlement. $19 a month — the best money I\'ve ever spent.',
    },
    {
      name: 'Manuel P.',
      location: 'Phoenix, Arizona',
      text: 'As a business owner I have several assets to protect. Umbrella insurance gives me total peace of mind. If someone sues me for an enormous amount, I know I\'m covered.',
    },
  ],
  faq: [
    {
      q: 'What is umbrella insurance?',
      a: 'Umbrella insurance is additional coverage that activates when your auto or home insurance limits run out. Concrete example: you cause an accident resulting in $600,000 in damages, but your auto policy only covers $300,000. Umbrella pays the remaining $300,000 — protecting your savings, property, and assets from garnishment.',
    },
    {
      q: 'When do I need umbrella insurance?',
      a: 'You need it if you have savings, property, investments, or assets that could be seized in a lawsuit. Also if you have: large dog breeds, a pool at home, teenage drivers, or if you\'re a business owner. Someone with no assets has little to lose in a lawsuit. Someone with savings and property has everything to lose.',
    },
    {
      q: 'How much does umbrella insurance cost?',
      a: 'Plans start at $19/month for $1 million in additional coverage — less than $1 per day. It\'s one of the best price-to-coverage ratios in insurance. Increasing to $2 million or $3 million costs very little more compared to the additional protection.',
    },
    {
      q: 'Do I need existing insurance before getting umbrella coverage?',
      a: 'Yes. Umbrella insurance requires that you have at least one active auto or home policy with minimum coverage limits. It works as an additional layer on top of your existing policies — not as standalone insurance.',
    },
    {
      q: 'Does umbrella insurance cover pet incidents?',
      a: 'Yes. If your dog or other pet causes injury or damage to a third party and the lawsuit exceeds your home insurance limits, umbrella can cover the additional civil liability. Especially important for breeds with lawsuit history like Pit Bulls, Rottweilers, or German Shepherds.',
    },
    {
      q: 'What if I\'m sued for more than $1 million?',
      a: 'You can get umbrella coverage with limits of $2 million, $3 million, or up to $5 million in additional coverage. The incremental cost for higher limits is minimal compared to the protection. We recommend adjusting the limit to match the total value of your assets.',
    },
  ],
  ctaTitle: 'Your last line of',
  ctaItalic: 'defense',
  ctaSubtitle: 'From $19/mo — less than $1 a day for $1 million in additional protection.',
  ctaButton: 'See my free quote',
  theme: 'slate',
  schema: {
    description: 'Umbrella insurance for Latinos in the USA. $1M to $5M in additional coverage above auto and home insurance. Protects savings and property from lawsuits. No SSN. From $19/mo.',
    price: '19',
  },
};

export default function ProteccionExtraPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}

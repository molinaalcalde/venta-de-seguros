'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { House, PiggyBank, Key, Phone, Warning } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Paquete',
  badgeIcon: House,
  badge: 'ITIN aceptado · 10+ aseguradoras · Paquete Casa + Auto · Cotización gratis',
  heroLine1: 'Seguro de Casa y Auto',
  heroItalic: 'un solo agente para todo, y casi siempre más barato que tenerlos separados',
  heroSubtitle: 'Cuando tienes los seguros en compañías distintas, pagas de más y cuando necesitas ayuda no sabes a quién llamar. Un paquete con la misma aseguradora te da un solo contacto y puede ahorrarte hasta $1,184 al año. Comparamos 10+ aseguradoras para encontrar la combinación que te conviene.',
  trustBadges: ['ITIN aceptado', '10+ aseguradoras', 'Ahorra hasta $1,184/año', 'Cotización gratis'],
  priceFrom: 'Desde $15/mes el hogar',
  eligibilityTitle: 'Para quién es este seguro',
  eligibilityText: 'Si tienes auto y rentas o tienes casa propia, combinar los dos seguros con la misma aseguradora casi siempre cuesta menos y es más simple cuando los necesitas usar.',
  eligibilityItems: [
    'Inquilinos con auto que quieren un solo seguro para todo',
    'Dueños de casa que nunca compararon si están pagando de más',
    'Familias que tienen los seguros en compañías distintas',
    'Quienes cambiaron de apartamento y no actualizaron su seguro',
    'ITIN aceptado (no necesitas SSN para calificar)',
  ],
  features: [
    {
      icon: Warning,
      title: 'Tus muebles, tu ropa, tu computadora. Si hay un incendio, eso no lo cubre nadie si no tienes tu propio seguro.',
      desc: 'El seguro del dueño del edificio cubre el edificio. Lo que hay adentro de tu apartamento, tus cosas, depende de ti. El costo promedio de recuperar lo que se daña en un incendio o robo es $6,000. Un seguro de hogar para inquilinos cuesta entre $15 y $22 al mes. La mayoría no lo sabe hasta que lo necesita.',
    },
    {
      icon: Phone,
      title: 'Cuando algo malo pasa, no quieres llamar a dos compañías distintas.',
      desc: 'Si hay una tormenta que daña tu auto y tu casa al mismo tiempo, con seguros separados tienes dos reclamos, dos empresas, dos procesos distintos. Con el paquete, un solo agente lo maneja todo. Y además, las aseguradoras ofrecen descuentos de hasta 25% por combinar las dos pólizas. Eso representa entre $466 y $1,184 al año que te queda en el bolsillo.',
    },
    {
      icon: PiggyBank,
      title: 'El 88% de las personas cree que el seguro de hogar cuesta más de $50 al mes. El promedio real es $15 a $22.',
      desc: 'Ese error cuesta caro. La mayoría de las personas que no tienen seguro de hogar no lo tienen porque creen que no pueden pagarlo, no porque no lo necesiten. El seguro de hogar también cubre responsabilidad civil si alguien se lastima en tu apartamento, gastos de alojamiento si tienes que salir temporalmente, y robo fuera del hogar. Todo eso por menos de lo que cuesta un café al día.',
    },
  ],
  coverageItems: [
    'Muebles, ropa, electrodomésticos y objetos personales',
    'Daños por incendio, agua y fenómenos naturales',
    'Robo dentro y fuera del hogar',
    'Responsabilidad civil si alguien se lastima en tu espacio',
    'Gastos de alojamiento temporal si no puedes vivir en tu hogar',
    'Descuento en tu seguro de auto al combinar ambas pólizas',
  ],
  steps: [
    {
      title: 'Cuéntanos qué tienes en 5 minutos',
      desc: 'Estado, tipo de vivienda y auto que manejas. Identificamos las combinaciones disponibles y cuánto descuento aplica en tu caso.',
    },
    {
      title: 'Comparamos el costo real: por separado vs. en paquete',
      desc: 'Ves exactamente cuánto pagas hoy y cuánto pagarías combinado. Sin tecnicismos. La diferencia suele sorprender.',
    },
    {
      title: 'Un solo agente para los dos. Revisión anual incluida.',
      desc: 'Cuando necesitas algo, llamas a un solo número. Y cada año revisamos si apareció una opción mejor, porque los precios cambian y la mayoría de agentes no vuelve a llamar.',
    },
  ],
  testimonials: [
    {
      name: 'Carmen R.',
      location: 'Houston, Texas',
      text: 'Tenía el seguro del carro con una compañía y el del apartamento con otra. Nadie me dijo que podía tenerlos juntos. Mi asesora los combinó y ahora pago $87 menos al mes. Eso es más de $1,000 al año que me quedaba en el bolsillo desde hace años.',
    },
    {
      name: 'Miguel A.',
      location: 'Orlando, Florida',
      text: 'Me robaron la laptop y el celular del apartamento. Pensé que eso no lo cubría ningún seguro porque estaba en mi casa. Pero sí lo cubría mi seguro de hogar. Recuperé $1,800. Desde entonces nunca más tuve los seguros sin revisar.',
    },
    {
      name: 'Patricia G.',
      location: 'Chicago, Illinois',
      text: 'Nunca había tenido seguro de hogar porque creía que costaba mucho. Mi asesora me explicó que era $18 al mes. Con el descuento por combinarlo con el auto, el costo del auto bajó más de lo que pago por el hogar. Salí ganando en los dos.',
    },
  ],
  faq: [
    {
      q: '¿Qué cubre el seguro de hogar para inquilinos?',
      a: 'Cubre tus pertenencias personales ante incendio, robo o daños por agua. También incluye responsabilidad civil si alguien se lastima en tu apartamento y gastos de alojamiento si no puedes vivir en tu hogar temporalmente. No cubre el edificio en sí, eso es responsabilidad del dueño de la propiedad. Un plan básico promedia $15 a $22 al mes.',
    },
    {
      q: '¿Cuánto se ahorra combinando el seguro de casa y auto?',
      a: 'El descuento por paquete varía entre 10% y 25% según la aseguradora y el estado. El ahorro promedio es entre $466 y $1,184 al año. El monto exacto depende de tu perfil, ubicación y las coberturas que elijas.',
    },
    {
      q: '¿Qué ventaja tiene tener los dos seguros en la misma compañía?',
      a: 'Cuando un mismo evento afecta tu auto y tu hogar al mismo tiempo, como una tormenta o un robo, tratas con un solo agente y un solo proceso. Con seguros en compañías distintas tienes que manejar dos reclamos por separado. Además, el descuento por paquete baja el costo total de los dos.',
    },
    {
      q: '¿Puedo tener seguro de hogar con ITIN sin SSN?',
      a: 'Sí. Los planes de seguro de hogar aceptan ITIN sin restricciones. No necesitas número de seguro social para calificar ni para cotizar.',
    },
    {
      q: '¿El seguro de hogar cubre robo fuera de mi casa?',
      a: 'Sí, en la mayoría de los planes. Si te roban el celular o la laptop fuera de tu apartamento, como en tu auto o en la calle, el seguro de hogar puede cubrirlo según los términos del plan.',
    },
    {
      q: '¿Qué pasa si ya tengo los seguros por separado?',
      a: 'Puedes combinarlos en cualquier momento. Revisamos el costo actual vs. el paquete y te mostramos si vale la pena hacer el cambio ahora o esperar a la fecha de renovación. Sin compromiso.',
    },
    {
      q: '¿Por qué mi aseguradora nunca me ofreció el paquete?',
      a: 'Algunos agentes trabajan para una sola compañía y solo ofrecen sus propios productos. Un agente independiente compara 10+ aseguradoras y puede encontrar la combinación que baja el costo total de los dos seguros, no solo uno.',
    },
  ],
  ctaTitle: 'Dos seguros, un solo agente, un solo pago',
  ctaItalic: 'y casi siempre más barato que tenerlos separados',
  ctaSubtitle: 'ITIN aceptado. 10+ aseguradoras comparadas. Cotización gratis.',
  ctaButton: 'Cotizar gratis',
  theme: 'violet',
  schema: {
    description: 'Paquete seguro de casa y auto para hispanos en USA. ITIN aceptado. Un solo agente para los dos. Ahorra hasta 25%, entre $466 y $1,184 al año. Para inquilinos y dueños de casa. Cotización gratis.',
    price: '15',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Paquete',
  badgeIcon: House,
  badge: 'Home + Auto Bundle · Premiums Up 24% · Save Up to 25%',
  heroLine1: 'Home + Auto Bundle',
  heroItalic: 'the only lever that lowers both premiums at once',
  heroSubtitle: 'Home insurance premiums rose 24% between 2021 and 2024. Auto premiums followed. Bundling is the only move that applies a discount to both policies simultaneously — $466 to $1,184 per year in real savings, according to 2026 carrier data. And while you\'re at it: 60–67% of homeowners are underinsured for what it would actually cost to rebuild today. We fix both.',
  trustBadges: ['Save up to 25%', 'Up to $1,184/yr savings', 'Renters & homeowners', 'Independent agent'],
  priceFrom: 'Bundle from $130/mo',
  eligibilityTitle: 'Who benefits most from bundling right now',
  eligibilityText: 'A record 6.8% of homeowners are actively shopping for better rates — the highest rate in years. If your renewal came in higher than last year, or you\'ve never compared your home and auto together, now is when bundling makes the most financial sense.',
  eligibilityItems: [
    'Homeowners whose renewal premium increased this year',
    'Renters who don\'t yet have renters insurance (most don\'t)',
    'Anyone with home and auto insurance from different carriers',
    'First-time homebuyers setting up coverage from scratch',
    'Multi-vehicle households looking for maximum discount',
  ],
  features: [
    {
      icon: PiggyBank,
      title: 'Premiums Up 24%. Bundling Is the Only Move That Cuts Both.',
      desc: 'Home insurance premiums rose an average of 24% between 2021 and 2024 (Consumer Federation of America). Auto followed. Most people respond by raising their deductible or cutting coverage — which just increases their financial exposure. Bundling is the only option that lowers your premium on both policies without touching your coverage. Real savings: $466 to $1,184 per year based on 2026 carrier data from NerdWallet and State Farm.',
    },
    {
      icon: Warning,
      title: 'Your Home Is Probably Insured for Less Than It Would Cost to Rebuild',
      desc: 'Between 60% and 67% of American homeowners are underinsured — their policy payout wouldn\'t cover what it would actually cost to rebuild their home today (APCIA 2022, Insurify 2025). Construction costs rose nearly 30% over five years (Verisk 2025). Only 30% of homeowners have updated their coverage to reflect current replacement costs. When we set up your bundle, we check both policies — not just the premium.',
    },
    {
      icon: Key,
      title: 'Renters: Your Landlord\'s Insurance Covers the Building, Not Your Belongings',
      desc: 'Your landlord\'s policy covers the structure — walls, roof, plumbing. It covers nothing you own: clothes, electronics, furniture, appliances. If there\'s a fire, theft, or water damage, everything you own is lost without renters insurance. Adding renters coverage to your auto policy costs as little as $15–$20/month and qualifies you for the same bundle discount as homeowners.',
    },
  ],
  coverageItems: [
    'Home: structure and full replacement cost coverage',
    'Renters: personal belongings — clothes, electronics, furniture',
    'Home liability — if someone gets injured on your property',
    'Theft and vandalism inside and outside the home',
    'Temporary housing if your home becomes uninhabitable',
    'Auto: collision and comprehensive',
    'Auto: required liability coverage',
    'Bundle discount applied to both premiums simultaneously',
  ],
  steps: [
    {
      title: 'Tell us what you have and what you\'re paying now',
      desc: 'Current carriers, coverage levels, and renewal dates. We identify every discount available to you before recommending anything.',
    },
    {
      title: 'Side-by-side comparison — current vs. bundle',
      desc: 'We show you exactly what you\'re paying now vs. what a bundle saves you. Real numbers, not estimates. You decide.',
    },
    {
      title: 'Switch on your timeline — zero gap in coverage',
      desc: 'We coordinate both policies so there\'s no day without coverage during the transition. Savings start month one.',
    },
  ],
  testimonials: [
    {
      name: 'Jennifer M.',
      location: 'Phoenix, Arizona',
      text: 'My home renewal came in $340 higher than last year. My agent bundled it with my auto, switched carriers, and I ended up paying less than I was before the increase. Took one phone call.',
    },
    {
      name: 'David R.',
      location: 'Dallas, Texas',
      text: 'I had home and auto with two different companies for years. Never thought to combine them. One bundle quote later, I\'m saving $94 a month. I genuinely don\'t know why I waited.',
    },
    {
      name: 'Carol B.',
      location: 'Atlanta, Georgia',
      text: 'My agent pointed out my home was insured for $280K but replacement cost was closer to $410K. We updated the coverage and bundled with auto — same monthly payment as before, but now I\'m actually covered if something goes wrong.',
    },
  ],
  faq: [
    {
      q: 'How much do I actually save by bundling home and auto?',
      a: 'According to 2026 data from NerdWallet and carrier comparisons, the real savings range from $466 to $1,184 per year. The discount typically runs 10–25% on both premiums simultaneously — not just one. The exact amount depends on your carrier, state, home value, and vehicles. We calculate your specific savings before recommending anything.',
    },
    {
      q: 'Do I have to switch insurance companies to get a bundle discount?',
      a: 'Not necessarily. If your current carrier offers both home and auto, they may give you a bundle discount just for combining. But in many cases, switching to a carrier that specializes in bundles saves significantly more. We compare both options and show you the numbers side by side.',
    },
    {
      q: 'What does "underinsured" mean and how do I know if it applies to me?',
      a: 'You\'re underinsured if your policy\'s dwelling coverage limit is less than what it would cost to fully rebuild your home at today\'s construction prices. With costs up nearly 30% over five years, most policies written before 2021 are now short. The risk: if your home burns down and it costs $400K to rebuild but your policy only covers $280K, you pay the $120K difference. We check this as part of every home insurance review.',
    },
    {
      q: 'Does my landlord\'s insurance cover my belongings?',
      a: 'No — never. Your landlord\'s policy covers the building structure only. Your clothes, electronics, furniture, and appliances are not covered. Renters insurance starts at around $15–$20/month and covers your personal belongings against theft, fire, and water damage, plus liability if someone is injured in your apartment.',
    },
    {
      q: 'Will there be a gap in my coverage when I switch?',
      a: 'No. We coordinate the start and end dates of both your old and new policies so there is no day without coverage during the transition. This is standard practice and something we handle completely — you don\'t need to manage the timing yourself.',
    },
    {
      q: 'Can I bundle if I have multiple vehicles?',
      a: 'Yes — and it gets better. Multi-vehicle households typically qualify for additional discounts on top of the bundle rate. More vehicles generally means more savings per vehicle. We calculate the full discount stack before finalizing your quote.',
    },
  ],
  ctaTitle: 'Lower both premiums',
  ctaItalic: 'with one move',
  ctaSubtitle: 'Bundle from $130/mo. Up to $1,184/yr in savings. Independent comparison — no pressure.',
  ctaButton: 'See my bundle savings',
  theme: 'violet',
  schema: {
    description: 'Home and auto bundle insurance. Save up to 25% — $466 to $1,184 per year. Renters and homeowners. Independent agent compares multiple carriers. No SSN required. From $130/mo.',
    price: '130',
  },
};

export default function PaquetePage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}

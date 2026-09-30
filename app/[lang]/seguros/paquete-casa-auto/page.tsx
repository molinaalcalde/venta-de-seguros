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
  badge: 'Independent Agent · 10+ Carriers · Annual Review Included · Free Quote',
  heroLine1: 'Home + Auto Bundle',
  heroItalic: 'premiums have gone up 7 straight years. this is how you fight back.',
  heroSubtitle: 'Home insurance is up 24% since 2021. Auto hit a record high in 2024. The only move that lowers both premiums at once is bundling — $466 to $1,184 per year in real savings. But only if you compare carriers first. Progressive\'s bundle discount is 5%. State Farm\'s is 22%. The difference is $700 a year. We find which one wins for your specific situation.',
  trustBadges: ['Save $466-$1,184/yr', '10+ carriers compared', 'Renters qualify too', 'Annual review included'],
  priceFrom: 'From $15/mo renters · $466+ saved/yr',
  eligibilityTitle: 'Who benefits most from bundling right now',
  eligibilityText: '57% of Americans compared their insurance in the last year — the highest rate ever recorded. If your renewal came in higher than last year, or you have home and auto at different companies, now is the moment bundling makes the most financial sense.',
  eligibilityItems: [
    'Homeowners whose renewal came in higher than last year',
    'Renters who don\'t yet have renters insurance (most don\'t — it\'s $15 to $22/mo)',
    'Anyone with home and auto policies at different companies',
    'First-time homebuyers setting up coverage from scratch',
    'Multi-vehicle households who have never compared their full discount stack',
  ],
  features: [
    {
      icon: Warning,
      title: 'Your renewal is not a formality. It is a decision.',
      desc: 'Auto insurance hit a record high in 2024, up 26% in one year. Home insurance is up 24% since 2021 — more than double the rate of inflation. Most people sign the renewal without comparing because switching feels like a project. It is not. We compare your current policies against 10+ carriers in one conversation. 57% of Americans shopped their insurance last year. The ones who did saved an average of $736.',
    },
    {
      icon: Key,
      title: '2 in 3 American homes are insured for less than it would cost to rebuild them today.',
      desc: 'Construction costs rose nearly 30% over five years. Most home policies written before 2021 now have a coverage gap — meaning if your home burns down, your payout may not cover what rebuilding actually costs today. The average shortfall is 22%. When we set up your bundle, we check both your premium and your actual coverage, not just the monthly number.',
    },
    {
      icon: Phone,
      title: '65% of insurance complaints are about how claims are handled. Here is why that matters to you.',
      desc: 'When you file a claim with a carrier directly, you call a 1-800 number and start from zero. When you work with an independent agent, you call one person who knows your policy, your history, and knows exactly who to escalate to. Claims denials get reversed. Delays get resolved. That is the difference between an agent and a direct carrier that nobody explains until you actually need it.',
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
      desc: 'Current carriers, coverage levels, and renewal dates. We identify every discount available — including whether your home is properly insured for today\'s rebuild costs.',
    },
    {
      title: 'We show you the real comparison: current vs. bundle',
      desc: 'Exact numbers, not estimates. What you pay now vs. what a bundle saves you across 10+ carriers. You see the full picture before deciding anything.',
    },
    {
      title: 'Covered, bundled, and reviewed every year',
      desc: 'We coordinate both policies so there is zero gap in coverage during any transition. And every year at renewal, we compare again — because carriers raise deductibles, change networks, and exit markets. Most agents disappear after the sale.',
    },
  ],
  testimonials: [
    {
      name: 'Jennifer M.',
      location: 'Phoenix, Arizona',
      text: 'My home renewal came in $340 higher than last year. My agent bundled it with my auto, switched carriers, and I ended up paying less than I was before the increase. One phone call.',
    },
    {
      name: 'David R.',
      location: 'Dallas, Texas',
      text: 'I had home and auto with two different companies for years. Never thought to combine them. One bundle comparison later, I\'m saving $94 a month. I genuinely don\'t know why I waited.',
    },
    {
      name: 'Carol B.',
      location: 'Atlanta, Georgia',
      text: 'My agent pointed out my home was insured for $280K but what it would cost to rebuild today is closer to $410K. We updated the coverage and bundled with auto for the same monthly payment I was already paying. Now I\'m actually covered if something goes wrong.',
    },
  ],
  faq: [
    {
      q: 'Is bundling home and auto actually worth it?',
      a: 'In most cases, yes. Real savings range from $466 to $1,184 per year, with discounts of 10 to 25% applied to both premiums simultaneously. But the discount varies significantly by carrier — Progressive\'s bundle discount is 5%, while others reach 22%. An independent agent compares the actual numbers before recommending anything.',
    },
    {
      q: 'Should I use the same company for home and auto?',
      a: 'Not always the same company — but the same agent. When your policies are managed by one independent agent, you get a single point of contact for both, one advocate when you need to file a claim, and someone who compares across carriers every year. The key is having one person accountable for the full picture, not necessarily one corporate brand.',
    },
    {
      q: 'How much do you save by bundling insurance?',
      a: 'Based on 2026 carrier data, the average savings is $542 to $973 per year nationally, with some households saving over $1,184. The exact amount depends on your state, home value, vehicles, and which carriers you compare. We calculate your specific number before making any recommendation.',
    },
    {
      q: 'Can renters bundle too?',
      a: 'Yes. Renters insurance covers your personal belongings — clothes, electronics, furniture — against fire, theft, and water damage. It also covers liability if someone is injured in your apartment. Adding renters coverage to your auto policy typically costs $15 to $22 per month and qualifies you for the same bundle discount as homeowners.',
    },
    {
      q: 'What does underinsured mean for homeowners?',
      a: 'You\'re underinsured if your policy\'s dwelling limit is less than what it would actually cost to rebuild your home today. With construction costs up nearly 30% in five years, most policies written before 2021 now have a gap. If your home is destroyed and your policy covers $280K but rebuilding costs $410K, you pay the $130K difference. We review this as part of every home insurance comparison.',
    },
    {
      q: 'Will there be a coverage gap if I switch carriers?',
      a: 'No. We coordinate the start and end dates of both policies so there is no day without coverage. This is something we handle completely — you don\'t need to manage the timing yourself.',
    },
    {
      q: 'Why use an independent agent instead of buying directly from a carrier?',
      a: 'When you buy directly from State Farm or Progressive, you see one carrier\'s options. An independent agent compares 10+ carriers, finds the actual best bundle for your situation, and stays on your side when a claim is filed and needs to be resolved. The price you pay is identical either way. The difference is who is working for you versus who is working for the carrier.',
    },
  ],
  ctaTitle: 'Your renewal is a decision, not a rubber stamp',
  ctaItalic: 'compare before you sign',
  ctaSubtitle: 'Free comparison. 10+ carriers. Annual review included. No obligation.',
  ctaButton: 'Get a free quote',
  theme: 'violet',
  schema: {
    description: 'Home and auto bundle insurance. Independent agent compares 10+ carriers. Save $466 to $1,184 per year. Renters and homeowners qualify. Annual review included. Free quote.',
    price: '15',
  },
};

export default function PaquetePage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}

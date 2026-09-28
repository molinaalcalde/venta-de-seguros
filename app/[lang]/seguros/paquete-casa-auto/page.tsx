'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { House, PiggyBank, Key, Phone, Warning } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Paquete',
  badgeIcon: House,
  badge: 'Bundle Casa + Auto · Ahorra hasta 25% · Sin SSN',
  heroLine1: 'Paquete Casa + Auto',
  heroItalic: 'tu landlord cubre las paredes — tus cosas no',
  heroSubtitle: 'El 71% de los renters latinos no tienen seguro para sus pertenencias — y la mayoría asume que el landlord los cubre. No es así. El seguro del landlord cubre la estructura del edificio, nunca lo tuyo. La buena noticia: si combinas renters o homeowners con tu seguro de auto, pagas hasta $1,184 menos al año que si los tuvieras separados. Sin SSN requerido.',
  trustBadges: ['Hasta 25% de ahorro', 'Sin SSN requerido', 'Renters y homeowners', 'Hasta $1,184/año menos'],
  priceFrom: 'Bundle desde $130/mes',
  eligibilityTitle: '¿Rentas o eres dueño? Los dos califican — y los dos ahorran',
  eligibilityText: 'El 51% de los latinos en USA son renters. El 49% son homeowners. El bundle funciona igual para los dos. La diferencia es lo que cubre: si rentas, el seguro protege TUS pertenencias (no las paredes del landlord). Si eres dueño, protege la estructura y el contenido. En ambos casos, combinarlo con el auto te da descuento en las dos pólizas.',
  eligibilityItems: [
    'Inquilinos (renters) — protege tu ropa, electrónicos y muebles, no las paredes',
    'Dueños de casa o condo (homeowners)',
    'Sin SSN ni historial crediticio requerido — acepta ITIN',
    'Múltiples vehículos incluidos en el paquete',
    'Familias con diferentes estatus migratorios en el mismo hogar',
  ],
  features: [
    {
      icon: Key,
      title: 'Lo Que Nadie Te Dijo Sobre el Seguro de Tu Landlord',
      desc: 'El seguro del landlord cubre la estructura del edificio: paredes, techo, plomería, sistemas eléctricos. No cubre absolutamente nada de lo que es tuyo. Tu ropa, tu laptop, tus electrodomésticos, tus muebles, tus joyas — si hay un robo, un incendio o una inundación, pierdes todo sin renters insurance. Y el 57% de los renters en USA no saben que esto es así hasta que les ocurre.',
    },
    {
      icon: PiggyBank,
      title: 'Hasta $1,184 Menos al Año — En Ambas Pólizas al Mismo Tiempo',
      desc: 'Al combinar renters o homeowners con auto en un bundle, el descuento aplica en las dos pólizas simultáneamente — no en una sola. Según NerdWallet y datos de aseguradoras 2026, el ahorro va de $466 a $1,184 al año. Es la misma cobertura, las mismas aseguradoras — solo que más barato por tenerlas juntas con un solo proveedor.',
    },
    {
      icon: Phone,
      title: 'Un Solo Asesor, Un Solo Número, Un Solo Pago',
      desc: 'Cuando tienes un accidente, un robo o un siniestro, llamas a un número y te atendemos en español. No tienes que explicar tu situación a dos compañías diferentes. Un asesor conoce ambas pólizas, tu historial y tu familia. Eso marca la diferencia cuando más lo necesitas.',
    },
  ],
  coverageItems: [
    'Renters: pertenencias personales — ropa, electrónicos, muebles, joyas',
    'Homeowners: estructura y contenido de la vivienda',
    'Responsabilidad civil del hogar — si alguien se lastima en tu hogar',
    'Robo y vandalismo dentro y fuera del hogar',
    'Gastos de alojamiento temporal si debes salir de tu hogar',
    'Auto: colisión y daños completos',
    'Auto: responsabilidad civil obligatoria',
    'Descuento de bundle aplicado en ambas primas',
  ],
  steps: [
    {
      title: '¿Rentas o eres dueño? ¿Cuántos vehículos?',
      desc: 'Dos preguntas básicas y calculamos tu descuento real. Sin SSN para cotizar. 100% confidencial.',
    },
    {
      title: 'Tu asesora diseña el paquete para tu situación',
      desc: 'Combinamos las coberturas de hogar y auto más convenientes para tu presupuesto, familia y estado donde vives.',
    },
    {
      title: 'El descuento entra desde el primer mes',
      desc: 'Tu bundle se activa y el ahorro aplica de inmediato en las dos pólizas. Un solo pago mensual para todo.',
    },
  ],
  testimonials: [
    {
      name: 'Isabel R.',
      location: 'Las Vegas, Nevada',
      text: 'Nunca supe que el seguro del landlord no cubría mis cosas. Me lo explicaron con calma y sin presiones. Contraté el bundle — ahora tengo ambos y pago menos que antes solo con el de auto. Ojalá lo hubiera sabido antes.',
    },
    {
      name: 'Fernando M.',
      location: 'Dallas, Texas',
      text: 'Combiné el seguro de mi casa y mis dos carros. Me ahorro casi $80 al mes comparado con tenerlos separados. Con el tiempo eso son casi $960 al año. No entiendo por qué no lo hice antes.',
    },
    {
      name: 'Claudia V.',
      location: 'Atlanta, Georgia',
      text: 'Tuve un robo en mi apartamento — se llevaron laptops, ropa y electrodomésticos. El renters insurance me cubrió todo. Sin ese seguro hubiera perdido miles de dólares. Mi asesora me lo había explicado exactamente así.',
    },
  ],
  faq: [
    {
      q: '¿El seguro del landlord no cubre mis pertenencias?',
      a: 'Correcto — nunca. El seguro del landlord (propietario del edificio) cubre la estructura: paredes, techo, plomería, sistemas eléctricos. No cubre absolutamente nada de lo que es tuyo: ropa, electrónicos, muebles, joyas, electrodomésticos. El 57% de los renters en USA no saben esto hasta que tienen un robo o siniestro. El renters insurance cubre exactamente tus pertenencias, más responsabilidad civil si alguien se lastima en tu hogar.',
    },
    {
      q: '¿Cuánto ahorro exactamente combinando los seguros?',
      a: 'El ahorro real según datos de 2026 va de $466 a $1,184 al año, dependiendo de la aseguradora y tu estado. El descuento típico es entre 10% y 25% en ambas pólizas simultáneamente — no en una sola. Es la misma cobertura, la misma aseguradora, solo que más barato por tenerlos juntos.',
    },
    {
      q: '¿Puedo hacer bundle si soy inquilino (renter) y no dueño de casa?',
      a: 'Sí. El renters insurance cubre tus pertenencias personales y te da responsabilidad civil. Puedes combinarlo con tu seguro de auto para obtener el descuento de bundle exactamente igual que un dueño de casa. El 71% de los renters latinos no tienen renters insurance — muchos por no saber que existe o que pueden hacer bundle.',
    },
    {
      q: '¿Necesito SSN para asegurar mi hogar o apartamento?',
      a: 'No. Aceptamos ITIN como identificación para contratar seguros de hogar (homeowners o renters) y de auto. No se requiere SSN ni historial de crédito en USA.',
    },
    {
      q: '¿El bundle puede incluir múltiples vehículos?',
      a: 'Sí. El paquete puede incluir más de un vehículo. Agregar vehículos adicionales a una póliza multi-auto generalmente resulta en descuentos adicionales por encima del bundle de hogar-auto.',
    },
    {
      q: '¿El seguro de hogar cubre daños por huracán, tornado o inundación?',
      a: 'Depende del estado y el plan. Los daños por viento (huracanes, tornados) generalmente están cubiertos en las pólizas estándar. Los daños por inundación generalmente NO están incluidos y requieren una póliza separada (NFIP o privada). En Florida, los huracanes pueden tener un deducible especial. Tu asesora te explica qué cubre tu póliza según donde vives.',
    },
  ],
  ctaTitle: 'Protege tus cosas y tu auto',
  ctaItalic: 'y paga menos por los dos',
  ctaSubtitle: 'Bundle desde $130/mes. Hasta $1,184 de ahorro al año. Sin SSN.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'violet',
  schema: {
    description: 'Paquete seguro de casa y auto para latinos en USA. Sin SSN, acepta ITIN. Ahorra hasta 25% combinando — hasta $1,184/año. Para renters y homeowners. Bundle desde $130/mes.',
    price: '130',
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

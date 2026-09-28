import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { House, PiggyBank, Key, Phone } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Paquete',
  badgeIcon: House,
  badge: 'Bundle Casa + Auto · Ahorrá hasta 25%',
  heroLine1: 'Paquete Casa + Auto',
  heroItalic: 'el landlord no cubre tus cosas — nunca',
  heroSubtitle: 'Combinar tu seguro de hogar (o renters) con el de auto puede ahorrarte $400–$900 al año. Y algo que mucha gente no sabe: el seguro del landlord NO cubre tus pertenencias — si hay un robo o incendio, todo lo tuyo desaparece sin seguro de renters. Sin SSN requerido.',
  trustBadges: ['Ahorrá hasta 25%', 'Sin SSN requerido', 'Para renters y homeowners', 'Un solo asesor'],
  priceFrom: 'Bundle desde $130/mes',
  eligibilityTitle: '¿Rentas o eres dueño? Los dos califican',
  eligibilityText: 'No necesitas ser dueño de casa para el descuento de bundle. Si rentas un apartamento, el seguro de renters protege TUS pertenencias — no las paredes del landlord — y combinado con el de auto te da el mismo descuento que a los dueños de casa.',
  eligibilityItems: [
    'Inquilinos (renters) — protege tus cosas aunque no seas dueño',
    'Dueños de casa o condo (homeowners)',
    'Sin SSN ni historial crediticio requerido',
    'Acepta ITIN como identificación',
    'Múltiples vehículos incluidos en el paquete',
  ],
  features: [
    {
      icon: PiggyBank,
      title: '$400 a $900 Menos al Año — En Ambas Primas',
      desc: 'Al combinar seguro de hogar y auto en un bundle, recibís descuento en las dos pólizas. Las familias que hacen este cambio ahorran entre $400 y $900 al año. Es el mismo seguro, la misma cobertura — solo que más barato por tenerlos juntos.',
    },
    {
      icon: Key,
      title: 'El Seguro del Landlord No Cubre Tus Cosas — Nunca',
      desc: 'El seguro del landlord cubre la estructura del edificio — las paredes, el techo, la plomería. No cubre tu ropa, tus electrodomésticos, tu laptop, tus muebles, ni nada que sea tuyo. Si hay un incendio, un robo o una inundación, perdés todo lo tuyo. El seguro de renters cubre exactamente eso, más responsabilidad civil si alguien se lastima en tu hogar.',
    },
    {
      icon: Phone,
      title: 'Un Solo Punto de Contacto para Todo',
      desc: 'Un asesor para ambas pólizas. Cuando tenés una pregunta, un accidente o un siniestro, llamás a un solo número y te atendemos en español. Sin tener que explicar tu situación a diferentes compañías.',
    },
  ],
  coverageItems: [
    'Hogar: estructura y contenido de la vivienda',
    'Renters: pertenencias personales — ropa, electrónicos, muebles',
    'Responsabilidad civil del hogar — si alguien se lastima en tu hogar',
    'Robo y vandalismo',
    'Gastos de alojamiento temporal si debés salir de tu hogar',
    'Auto: colisión y daños completos',
    'Auto: responsabilidad civil obligatoria',
    'Descuento de bundle en ambas primas',
  ],
  steps: [
    {
      title: 'Cuéntanos sobre tu hogar y vehículo',
      desc: '¿Rentas o eres dueño? ¿Cuántos vehículos? Sin SSN para cotizar. Proceso rápido y completamente confidencial.',
    },
    {
      title: 'Tu asesora diseña tu paquete personalizado',
      desc: 'Combinamos las coberturas de hogar y auto más convenientes para tu situación, presupuesto y estado donde vivís.',
    },
    {
      title: 'Ahorrá desde el primer mes',
      desc: 'Tu bundle entra en vigencia y el descuento se aplica de inmediato en ambas primas. Un solo pago mensual para todo.',
    },
  ],
  testimonials: [
    {
      name: 'Isabel R.',
      location: 'Las Vegas, Nevada',
      text: 'Pensaba que el seguro de renters era solo para dueños de casa. Me explicaron que yo, como inquilina, también califico para el bundle. Ahora tengo ambos y pago menos que antes solo con el de auto.',
    },
    {
      name: 'Fernando M.',
      location: 'Dallas, Texas',
      text: 'Combiné el seguro de mi casa y mis dos carros. Me ahorro casi $80 al mes comparado con tenerlos separados. Con el tiempo eso son casi $1,000 al año. Muy recomendado.',
    },
    {
      name: 'Claudia V.',
      location: 'Atlanta, Georgia',
      text: 'Tuve un robo en mi apartamento — se llevaron laptops, ropa y electrodomésticos. El seguro de renters me cubrió todo. Sin ese seguro hubiera perdido miles de dólares de cosas que compré con mucho esfuerzo.',
    },
  ],
  faq: [
    {
      q: '¿El seguro del landlord no cubre mis pertenencias?',
      a: 'Correcto — nunca. El seguro del landlord (propietario del edificio) cubre la estructura: paredes, techo, plomería, sistemas eléctricos. No cubre absolutamente nada de lo que es tuyo: ropa, electrónicos, muebles, joyas, electrodomésticos. Si hay un robo, incendio o daño por agua, perdés todo lo tuyo sin seguro de renters.',
    },
    {
      q: '¿Puedo combinar seguro de casa y auto si soy inquilino (renter)?',
      a: 'Sí. El seguro de renters cubre tus pertenencias personales y te da responsabilidad civil. Podés combinarlo con tu seguro de auto para obtener el descuento de bundle exactamente igual que un dueño de casa. No necesitás ser propietario para aprovechar el ahorro.',
    },
    {
      q: '¿Cuánto ahorro combinando los seguros en bundle?',
      a: 'El ahorro típico al combinar hogar y auto es entre 10% y 25% en las primas de ambas pólizas. Las familias que hacen este cambio ahorran en promedio entre $400 y $900 al año. Es el mismo seguro, la misma cobertura — solo que más barato por tenerlos juntos con un solo proveedor.',
    },
    {
      q: '¿Qué cubre el seguro de renters exactamente?',
      a: 'El seguro de renters cubre: tus pertenencias personales (ropa, electrónicos, muebles, joyas) ante robo, incendio, daños; responsabilidad civil si alguien se lastima en tu hogar y te demanda; gastos de hotel o alojamiento temporal si tu apartamento queda inhabitable por un siniestro cubierto. El monto de cobertura lo elegís vos según el valor de tus cosas.',
    },
    {
      q: '¿Necesito SSN para asegurar mi casa o apartamento?',
      a: 'No. Aceptamos ITIN como identificación para contratar seguros de hogar (homeowners o renters) y de auto. No se requiere SSN ni historial de crédito en USA.',
    },
    {
      q: '¿El bundle puede incluir múltiples vehículos?',
      a: 'Sí. El paquete puede incluir más de un vehículo. Agregar vehículos adicionales a una póliza multi-auto generalmente resulta en descuentos adicionales por encima del bundle de hogar-auto.',
    },
    {
      q: '¿El seguro de hogar cubre daños por huracán, tornado o inundación?',
      a: 'Depende del estado y el plan. Los daños por viento (huracanes, tornados) generalmente están cubiertos en las pólizas estándar. Los daños por inundación generalmente NO están incluidos y requieren una póliza separada (NFIP o privada). En Florida, los huracanes pueden tener un deducible especial. Te explicamos qué cubre tu póliza según dónde vivís.',
    },
  ],
  ctaTitle: 'Protegé tu hogar y tu auto',
  ctaItalic: 'con un solo plan',
  ctaSubtitle: 'Combina y ahorra hasta 25%. Sin SSN. Sin complicaciones.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'violet',
  schema: {
    description: 'Paquete seguro de casa y auto para latinos en USA. Sin SSN, acepta ITIN. Ahorrá hasta 25% combinando. Para renters y homeowners. Bundle desde $130/mes.',
    price: '130',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Paquete',
  badgeIcon: House,
  badge: 'Bundle Home + Auto · Save Up to 25%',
  heroLine1: 'Home + Auto Bundle',
  heroItalic: 'more protection, less money',
  heroSubtitle: 'Bundling your home (or renters) insurance with auto can save you $400–$900 a year. And something most people don\'t know: your landlord\'s insurance does NOT cover your belongings — if there\'s a theft or fire, everything you own is gone without renters insurance. No SSN required.',
  trustBadges: ['Save up to 25%', 'No SSN required', 'Renters & homeowners', 'One single agent'],
  priceFrom: 'Bundle from $130/mo',
  eligibilityTitle: 'Renting or owning? Both qualify',
  eligibilityText: 'You don\'t need to own a home to get the bundle discount. If you rent an apartment, renters insurance protects YOUR belongings — not the landlord\'s walls — and bundled with auto gives you the same discount as homeowners.',
  eligibilityItems: [
    'Renters — protect your things even though you don\'t own the place',
    'Homeowners and condo owners',
    'No SSN or US credit history required',
    'ITIN accepted as identification',
    'Multiple vehicles included in the bundle',
  ],
  features: [
    {
      icon: PiggyBank,
      title: '$400–$900 Less Per Year — On Both Premiums',
      desc: 'When you combine home and auto insurance in a bundle, you get a discount on both policies. Families who make this switch save between $400 and $900 per year. Same insurance, same coverage — just cheaper because they\'re together.',
    },
    {
      icon: Key,
      title: 'Your Landlord\'s Insurance Never Covers Your Stuff — Ever',
      desc: 'Your landlord\'s policy covers the building structure — walls, roof, plumbing. It never covers your clothes, appliances, laptop, furniture, or anything you own. If there\'s a fire, theft, or water damage, everything of yours is gone. Renters insurance covers exactly that, plus liability if someone gets injured in your home.',
    },
    {
      icon: Phone,
      title: 'One Contact for Everything',
      desc: 'One agent for both policies. When you have a question, an accident, or a claim, you call one number. No explaining your situation to different companies in different languages.',
    },
  ],
  coverageItems: [
    'Home: structure and contents',
    'Renters: personal belongings — clothes, electronics, furniture',
    'Home liability — if someone gets injured in your home',
    'Theft and vandalism',
    'Temporary housing if you need to leave your home',
    'Auto: collision and comprehensive',
    'Auto: required liability coverage',
    'Bundle discount on both premiums',
  ],
  steps: [
    {
      title: 'Tell us about your home and vehicle',
      desc: 'Do you rent or own? How many vehicles? No SSN to get a quote. Fast and completely confidential.',
    },
    {
      title: 'Your agent designs your personalized bundle',
      desc: 'We combine the most convenient home and auto coverages for your situation, budget, and state.',
    },
    {
      title: 'Save from the first month',
      desc: 'Your bundle activates and the discount applies immediately to both premiums. One monthly payment for everything.',
    },
  ],
  testimonials: [
    {
      name: 'Isabel R.',
      location: 'Las Vegas, Nevada',
      text: 'I thought renters insurance was only for homeowners. They explained that as a renter I also qualify for the bundle. Now I have both and pay less than I used to with just auto insurance.',
    },
    {
      name: 'Fernando M.',
      location: 'Dallas, Texas',
      text: 'I bundled my home and both cars. I save almost $80 a month compared to having them separate. Over time that\'s almost $1,000 a year. Highly recommended.',
    },
    {
      name: 'Claudia V.',
      location: 'Atlanta, Georgia',
      text: 'My apartment was burglarized — they took laptops, clothes, and appliances. Renters insurance covered everything. Without it I would have lost thousands of dollars worth of things I worked hard to buy.',
    },
  ],
  faq: [
    {
      q: 'Doesn\'t my landlord\'s insurance cover my belongings?',
      a: 'No — never. Your landlord\'s insurance covers the building structure: walls, roof, plumbing, electrical. It covers absolutely nothing you own: clothes, electronics, furniture, jewelry, appliances. If there\'s a theft, fire, or water damage, everything you own is lost without renters insurance.',
    },
    {
      q: 'Can I bundle home and auto insurance as a renter?',
      a: 'Yes. Renters insurance covers your personal belongings and provides liability coverage. You can bundle it with your auto insurance for the exact same discount as a homeowner. You don\'t need to own property to take advantage of the savings.',
    },
    {
      q: 'How much do I save by bundling?',
      a: 'The typical savings when bundling home and auto is 10%–25% on both premiums. Families who make this switch save an average of $400–$900 per year. Same insurance, same coverage — just cheaper by having them together with one provider.',
    },
    {
      q: 'What does renters insurance actually cover?',
      a: 'Renters insurance covers: your personal belongings (clothes, electronics, furniture, jewelry) against theft, fire, and damage; liability if someone gets injured in your home and sues you; temporary housing costs if your apartment becomes uninhabitable due to a covered event. You choose the coverage amount based on the value of your belongings.',
    },
    {
      q: 'Do I need an SSN to insure my home or apartment?',
      a: 'No. We accept ITIN as identification to get home insurance (homeowners or renters) and auto insurance. No SSN or US credit history required.',
    },
    {
      q: 'Does home insurance cover hurricane, tornado, or flood damage?',
      a: 'It depends on the state and plan. Wind damage (hurricanes, tornadoes) is generally covered in standard policies. Flood damage is generally NOT included and requires a separate policy (NFIP or private flood insurance). In Florida, hurricanes may have a special deductible. We explain exactly what your policy covers based on where you live.',
    },
  ],
  ctaTitle: 'Protect your home and car',
  ctaItalic: 'with one plan',
  ctaSubtitle: 'Bundle and save up to 25%. No SSN. No hassle.',
  ctaButton: 'See my free quote',
  theme: 'violet',
  schema: {
    description: 'Home and auto bundle insurance for Latinos in the USA. No SSN, accepts ITIN. Save up to 25% by bundling. For renters and homeowners. Bundle from $130/mo.',
    price: '130',
  },
};

export default function PaquetePage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}

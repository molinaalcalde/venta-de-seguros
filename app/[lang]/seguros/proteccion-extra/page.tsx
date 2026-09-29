'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Umbrella, Bank, CurrencyDollar, Warning, Car } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Umbrella',
  badgeIcon: Umbrella,
  badge: 'Desde $19/mes · $1 Millón de Cobertura Extra · Sin SSN',
  heroLine1: 'Protección Extra',
  heroItalic: 'embargarte el 25% del salario es legal — esto lo impide',
  heroSubtitle: 'Si alguien te demanda y el juicio supera el límite de tu seguro, el juez puede embargar hasta el 25% de tu salario indefinidamente, congelar tus cuentas bancarias y poner un gravamen sobre tu casa. No necesitas ser rico para que esto te afecte — necesitas tener algo que perder. Y si tienes casa, auto, ahorros o un trabajo, ya lo tienes. Por menos de $20 al mes.',
  trustBadges: ['Desde $19/mes', '$1M–$5M de cobertura', 'Protege salario y casa', 'Sin SSN requerido'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: '¿Tienes algo que perder? Entonces necesitas Protección Extra',
  eligibilityText: 'El error más común es creer que el umbrella es para gente con mucho dinero. No lo es. Cualquier persona con casa, ahorros, un salario o un negocio tiene activos que un juez puede embargar si una demanda supera los límites de su seguro regular. La clase media es exactamente el perfil que más necesita esta protección — y la que menos la tiene.',
  eligibilityItems: [
    'Tienes seguro de auto activo (requisito previo para contratar)',
    'Tienes casa con equity, ahorros o cuentas de retiro',
    'Tienes hijos adolescentes que manejan',
    'Tienes perro, piscina o recibes visitas frecuentes en tu hogar',
    'Eres dueño de negocio pequeño o trabajas por cuenta propia',
  ],
  features: [
    {
      icon: Car,
      title: 'El Escenario Más Común: Tu Hijo de 17 Años Tiene un Accidente',
      desc: 'Tu seguro de auto cubre $300,000. El accidente causó $800,000 en daños médicos y legales. La diferencia de $500,000 no la paga nadie más — sale de tu salario (hasta 25% embargado por el juez), tus cuentas bancarias, o tu casa mediante un gravamen legal. La Protección Extra entra exactamente en ese momento y cubre la diferencia. Los reclamos de lesiones de auto promediaron $28,278 en 2024 — pero los casos que van a juicio promedian $1.4 millones.',
    },
    {
      icon: Warning,
      title: 'Lo que Nadie Te Dice: El Perro, la Piscina, la Reunión Familiar',
      desc: 'En 43 estados existe la "social host liability": si alguien se lastima en tu propiedad o en tu reunión, puedes ser demandado. Si tu perro muerde a un vecino, eres responsable en la mayoría de estados sin importar el historial del animal. Si un niño se mete a tu piscina y se lastima, la "attractive nuisance doctrine" te hace responsable aunque no lo hayas invitado. Tu seguro de hogar cubre $300,000. Si la demanda supera eso, pagas el resto.',
    },
    {
      icon: Bank,
      title: 'Trabajaste Demasiado para Perderlo Todo en un Juicio',
      desc: 'El embargo de salario, el gravamen sobre la casa, las cuentas congeladas — son mecanismos legales reales que un tribunal puede aplicar si una demanda exitosa supera tus límites de seguro. Por menos de $20 al mes, la Protección Extra pone una barrera legal entre lo que construiste y quien te demande. $1 millón de cobertura adicional. Aumentar a $2M o $5M cuesta muy poco más.',
    },
  ],
  coverageItems: [
    'Responsabilidad civil extra sobre tu seguro de auto',
    'Responsabilidad civil extra sobre tu seguro de hogar',
    'Defamación e injuria — incluyendo publicaciones en redes sociales',
    'Social host liability — incidentes en reuniones en tu hogar',
    'Incidentes con mascotas que superen tu seguro de hogar',
    'Accidentes causados por hijos adolescentes al manejar',
    'Gastos legales y honorarios de abogado',
    'Cobertura desde $1M hasta $5M — incluso fuera de USA',
  ],
  steps: [
    {
      title: 'Confirma que tienes seguro base activo',
      desc: 'Necesitas auto con mínimo $250,000–$300,000 en liability y/o homeowners con $300,000 en personal liability. Si no llegas a esos mínimos, primero ajustamos tu cobertura base.',
    },
    {
      title: 'Calculamos el límite correcto según lo que tienes',
      desc: 'Tu asesora revisa el valor de tus activos — casa, ahorros, retiro, ingresos — para recomendarte entre $1M, $2M, $3M o $5M. La regla general: el límite debe cubrir tu patrimonio neto total.',
    },
    {
      title: 'Tu paraguas queda activo desde el primer mes',
      desc: 'Si una demanda supera los límites de tu seguro regular, la Protección Extra entra automáticamente. Sin trámites adicionales en el momento del siniestro.',
    },
  ],
  testimonials: [
    {
      name: 'Eduardo M.',
      location: 'Newark, New Jersey',
      text: 'Mi hijo tuvo un accidente grave — los daños superaban mi seguro de auto por $400,000. Sin la Protección Extra, el juez hubiera embargado mi salario durante años para pagar la diferencia. Ese seguro de $19 al mes me salvó todo lo que había construido.',
    },
    {
      name: 'Silvia A.',
      location: 'Austin, Texas',
      text: 'Mi perro mordió a un vecino y me amenazaron con demandar por $80,000. Mi seguro de hogar cubría $300,000 así que estaba dentro del límite — pero ahí entendí que si hubiera sido $400,000, yo hubiera pagado la diferencia. Al mes siguiente contraté la Protección Extra.',
    },
    {
      name: 'Manuel P.',
      location: 'Phoenix, Arizona',
      text: 'Tengo un negocio pequeño y varios ahorros que me costaron muchos años de trabajo. La Protección Extra me da tranquilidad total. Si alguien me demanda por un monto enorme, sé que hay una barrera entre ese juicio y lo que construí.',
    },
  ],
  faq: [
    {
      q: '¿Qué pasa exactamente si me demandan por más de lo que cubre mi seguro?',
      a: 'Si un juicio resulta en un veredicto que supera los límites de tu seguro, la diferencia la debes pagar tú personalmente. El tribunal puede embargar hasta el 25% de tu salario neto de forma indefinida, congelar tus cuentas bancarias y poner un gravamen legal (lien) sobre tu casa que se ejecuta cuando la vendes. La Protección Extra cubre esa diferencia — protegiendo tu salario, tus cuentas y tu propiedad.',
    },
    {
      q: '¿Realmente necesito esto si no soy millonario?',
      a: 'Sí. El umbrella no es para millonarios — es para cualquier persona que tenga algo que perder. Si tienes casa con equity, ahorros, un 401K o un salario estable, un juicio exitoso que supere tu seguro puede afectar todo eso. Los reclamos de lesiones de auto promediaron $28,278 en 2024 — pero los casos que van a juicio promedian $1.4 millones (Insurance Information Institute, 2020). La diferencia entre $300,000 (tu límite) y $1.4 millones (el veredicto promedio) sale de tu bolsillo.',
    },
    {
      q: '¿Qué seguros necesito tener antes de contratar Protección Extra?',
      a: 'Necesitas tener activo al menos un seguro de auto con $250,000–$300,000 en bodily injury liability y/o un seguro de homeowners o renters con $300,000 en personal liability. Si tus límites actuales son más bajos, primero ajustamos tu cobertura base para que puedas calificar. Tu asesora revisa esto contigo antes de cotizar.',
    },
    {
      q: '¿La Protección Extra cubre incidentes con mi perro?',
      a: 'Sí. Si tu perro causa lesión o daño a un tercero y la demanda supera los límites de tu seguro de hogar, la Protección Extra cubre la responsabilidad adicional. Importante: si tu perro es de una raza considerada de alto riesgo (Pit Bull, Rottweiler, Pastor Alemán), algunos carriers pueden excluir esa raza o cobrar más. Tu asesora verifica esto antes de cotizar.',
    },
    {
      q: '¿Cubre lo que pasa en reuniones o fiestas en mi casa?',
      a: 'Sí. En 43 estados existe la "social host liability": si alguien se lastima en tu propiedad o si alguien bebe en tu casa y después causa un accidente, puedes ser demandado. La Protección Extra cubre responsabilidad civil que supere el límite de tu homeowners en estos casos.',
    },
    {
      q: '¿Cubre demandas por lo que publico en redes sociales?',
      a: 'Sí. La Protección Extra cubre defamación, injuria (libel y slander), invasión de privacidad e injuria personal — incluyendo publicaciones en redes sociales. Si alguien te demanda por algo que publicaste online, la póliza cubre tanto los gastos legales como una eventual sentencia en tu contra.',
    },
    {
      q: '¿Puedo contratar Protección Extra sin SSN?',
      a: 'Sí. Aceptamos ITIN como identificación válida, siempre que tengas los seguros base requeridos activos. Tu información es 100% confidencial y nunca se comparte con ICE ni ninguna agencia gubernamental.',
    },
  ],
  ctaTitle: 'Una barrera legal entre',
  ctaItalic: 'un juicio y tu familia',
  ctaSubtitle: 'Desde $19/mes. $1M de protección adicional. Sin SSN. Tu asesora en español.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'slate',
  schema: {
    description: 'Protección Extra (Umbrella Insurance) para latinos en USA. $1M a $5M de cobertura adicional sobre seguro de auto y hogar. Protege salario, ahorros y casa ante demandas. Sin SSN. Desde $19/mes.',
    price: '19',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Umbrella',
  badgeIcon: Umbrella,
  badge: 'From $150/yr · $1M–$5M Coverage · Closes the Verdict Gap',
  heroLine1: 'Umbrella Insurance',
  heroItalic: 'your policies have caps — jury verdicts don\'t',
  heroSubtitle: 'Your auto policy covers $300,000. Your homeowners covers $300,000 in personal liability. The average jury award in personal injury cases was $1,479,368 in 2020 — and bodily injury claims have risen 66% in severity since 2015. That gap between your policy limit and a verdict is your personal financial exposure. A $1M umbrella policy costs about $150/year and closes it completely.',
  trustBadges: ['From $150/yr (~$12.50/mo)', '$1M–$5M coverage', 'Closes the verdict gap', 'Covers social media defamation'],
  priceFrom: 'From $150/yr',
  eligibilityTitle: 'High-risk triggers most people don\'t think about until it\'s too late',
  eligibilityText: 'You don\'t need to be wealthy to need umbrella coverage. You need to have assets — home equity, retirement accounts, savings, income — that a court judgment can legally attach to. If you have any of the following, your existing policies almost certainly leave you exposed.',
  eligibilityItems: [
    'Teenagers on your auto policy — the highest single risk factor',
    'Swimming pool or trampoline on your property',
    'Dog ownership (strict liability in most states regardless of breed history)',
    'Frequent home entertaining — social host liability in 43 states',
    'Net worth above $300,000 in any combination of assets',
  ],
  features: [
    {
      icon: CurrencyDollar,
      title: 'The Math Is Simple: $300K Limit vs. $1.4M Average Verdict',
      desc: 'The median jury award in personal injury cases is $100,000 — well within your policy limits. But the cases that go to trial average $1,479,368, with the mean reaching $2,448,978 in 2020 (Insurance Information Institute). Auto bodily injury claims have risen 66% in severity since 2015, from $17,014 to $28,278 on average — and litigated cases go much higher. A $1M umbrella costs $150/year and covers everything between your policy cap and a judgment against you.',
    },
    {
      icon: Warning,
      title: 'Teenagers Driving, Pools, Dogs, and Parties — Your Four Biggest Exposures',
      desc: 'A serious accident caused by your teenage driver can easily exceed $300K in damages. A pool injury falls under "attractive nuisance" doctrine — you can be liable even if the child wasn\'t invited. Dog bites trigger strict liability in most states regardless of the animal\'s history. And in 43 states, social host liability means you can be sued if a guest drinks at your home and causes an accident afterward. Each of these individually can exhaust your standard policy limits.',
    },
    {
      icon: Bank,
      title: 'Umbrella Also Covers What Your Other Policies Don\'t Touch',
      desc: 'Standard auto and homeowners policies don\'t cover defamation, libel, slander, or invasion of privacy — including what you post on social media. Umbrella does. It also provides worldwide coverage (not just in the US), covers legal defense costs even if you\'re not found liable, and extends to incidents involving rental properties, boats, and ATVs when added to the policy.',
    },
  ],
  coverageItems: [
    'Excess liability above your auto policy limits',
    'Excess liability above your homeowners personal liability limits',
    'Defamation, libel, slander — including social media',
    'Social host liability — guest injuries and alcohol-related incidents',
    'Dog bite liability exceeding homeowners limits',
    'Teenage driver accidents exceeding auto limits',
    'Legal defense costs — even when you\'re not at fault',
    'Worldwide coverage, not just in the United States',
  ],
  steps: [
    {
      title: 'Verify your underlying coverage meets minimum requirements',
      desc: 'Umbrella requires auto liability of at least $250K–$300K per person and homeowners personal liability of $300K. If your current policies are below that, we adjust them first — which often costs less than you\'d expect.',
    },
    {
      title: 'Set your limit based on your total asset exposure',
      desc: 'Add up your home equity, retirement accounts, savings, and annual income. Your umbrella limit should cover your total net worth. Most households need $1M–$2M. We show you exactly why before you decide.',
    },
    {
      title: 'Coverage activates automatically — no extra steps at claim time',
      desc: 'When a claim exceeds your underlying policy, umbrella kicks in automatically. Your insurance company handles coordination between policies. You don\'t manage anything.',
    },
  ],
  testimonials: [
    {
      name: 'Mike T.',
      location: 'Denver, Colorado',
      text: 'My 18-year-old caused a serious accident. Damages came in at $680,000. My auto policy covered $300,000. The umbrella covered the remaining $380,000. Without it, that verdict would have attached to my home and retirement accounts. $150 a year was the best money I\'ve ever spent.',
    },
    {
      name: 'Karen S.',
      location: 'Austin, Texas',
      text: 'A neighbor\'s kid got into our pool while we weren\'t home and had to be hospitalized. We were sued for $450,000. Our homeowners covered $300,000 — the umbrella covered the other $150,000 and all legal fees. I didn\'t even know what social host liability was before this.',
    },
    {
      name: 'James R.',
      location: 'Charlotte, North Carolina',
      text: 'My financial advisor told me I was underprotected. I had $800K in home equity and retirement savings and only $300K in liability coverage. Added a $2M umbrella for $280/year. That\'s 35 cents a day to protect assets I spent 25 years building.',
    },
  ],
  faq: [
    {
      q: 'How does umbrella insurance actually work when a claim happens?',
      a: 'When you\'re involved in an incident that results in a liability claim, your primary policy (auto or homeowners) pays first up to its limit. If the claim exceeds that limit, your umbrella policy activates automatically and covers the remainder up to your umbrella limit. Your insurers coordinate the payment — you don\'t manage the handoff. Legal defense costs are typically covered by umbrella as well, even if no judgment is entered.',
    },
    {
      q: 'Do I really need umbrella if I\'m not wealthy?',
      a: 'Net worth isn\'t the only thing at risk. In most states, a judgment creditor can garnish your wages (typically up to 25% of disposable income), place a lien on your home that must be paid when you sell, and freeze bank accounts. If you have a job, a mortgage, savings, or retirement accounts — you have something a judgment can attach to. The average litigated personal injury case exceeds $1M. Your $300K auto limit leaves $700K+ as your personal exposure.',
    },
    {
      q: 'What are the minimum coverage requirements before I can get umbrella?',
      a: 'Most carriers require: auto liability of $250,000 per person / $500,000 per accident, and homeowners personal liability of $300,000. If you don\'t currently carry those limits, we raise them first — the incremental cost is typically small. We review your existing policies before quoting umbrella.',
    },
    {
      q: 'Does umbrella cover what I post on social media?',
      a: 'Yes. Umbrella insurance specifically covers defamation (false statements of fact), libel (written), slander (spoken), and invasion of privacy. If someone sues you over something you posted online, umbrella covers both your legal defense and any judgment against you — up to your policy limit.',
    },
    {
      q: 'Does umbrella cover incidents outside the United States?',
      a: 'Yes. Unlike most auto and homeowners policies, umbrella coverage is typically worldwide. If you\'re involved in a covered incident while traveling abroad, your umbrella policy applies.',
    },
    {
      q: 'How much umbrella coverage do I actually need?',
      a: 'The standard recommendation is to carry at least enough to cover your total net worth: home equity + retirement accounts + savings + investments. For most middle-class households, $1M–$2M is appropriate. If you have teenagers driving, a pool, rental property, or run a business (which requires a separate commercial umbrella), you should go higher. We calculate your specific exposure before recommending a limit.',
    },
  ],
  ctaTitle: 'Close the gap between',
  ctaItalic: 'your policy and a verdict',
  ctaSubtitle: 'From $150/yr. $1M–$5M coverage. Legal defense included. Worldwide.',
  ctaButton: 'Get my umbrella quote',
  theme: 'slate',
  schema: {
    description: 'Umbrella insurance — $1M to $5M in excess liability above auto and home policies. Covers verdict gaps, social media defamation, teen drivers, pools, dogs, and social host liability. From $150/yr.',
    price: '19',
  },
};

export default function ProteccionExtraPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}

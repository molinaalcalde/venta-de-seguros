import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Paquete',
  badge: '🏠 Bundle Casa + Auto · Ahorra hasta 25%',
  heroLine1: 'Paquete Casa + Auto',
  heroItalic: 'más protección, menos dinero',
  heroSubtitle: 'Combina tu seguro de hogar (o renters) con el de auto y ahorra hasta 25% en ambas primas. Familias latinas ahorran en promedio $400–$900 al año haciendo este cambio. Un solo asesor en español para toda tu familia. Sin SSN requerido.',
  trustBadges: ['Ahorra hasta 25%', 'Sin SSN requerido', 'Renters o Homeowners', 'Un solo asesor'],
  priceFrom: 'Bundle desde $130/mes',
  eligibilityTitle: '¿Rentas o eres dueño? Los dos califican',
  eligibilityText: 'No necesitas ser dueño de casa para el descuento de bundle. Si rentas un apartamento, el seguro de renters protege tus pertenencias — y combinado con el de auto te da el descuento igual que a los dueños de casa.',
  eligibilityItems: [
    'Inquilinos (renters) — protege tus pertenencias aunque no seas dueño',
    'Dueños de casa o condo (homeowners)',
    'Sin SSN ni historial crediticio requerido',
    'Acepta ITIN como identificación',
    'Múltiples vehículos incluidos en el paquete',
  ],
  features: [
    { emoji: '💰', title: 'Hasta 25% de Ahorro — En Ambas Primas', desc: 'Al combinar seguro de hogar y auto en un bundle, recibes descuento en las dos pólizas. Las familias que hacen este cambio ahorran entre $400 y $900 al año. Sujeto a términos y condiciones.' },
    { emoji: '🔑', title: 'El Seguro de Renters Cubre Más de lo que Piensas', desc: 'El seguro de renters cubre tus pertenencias personales (ropa, electrónicos, muebles) ante robo, incendio o daños — aunque no seas dueño del apartamento. También cubre responsabilidad civil si alguien se lastima en tu hogar y gastos de hotel si tienes que salir temporalmente.' },
    { emoji: '📞', title: 'Un Solo Punto de Contacto Para Todo', desc: 'Un asesor para ambas pólizas. Cuando tienes una pregunta, un accidente o un siniestro, llamas a un solo número y te atendemos en español. Sin tener que explicar tu situación a diferentes compañías.' },
  ],
  coverageItems: [
    'Hogar: estructura y contenido de la vivienda',
    'Renters: pertenencias personales — ropa, electrónicos, muebles',
    'Responsabilidad civil del hogar',
    'Robo y vandalismo en el hogar',
    'Gastos de alojamiento temporal si sales de tu hogar',
    'Auto: colisión y daños completos',
    'Auto: responsabilidad civil',
    'Descuento de bundle en ambas primas',
  ],
  steps: [
    { title: 'Cuéntanos sobre tu hogar y vehículo', desc: '¿Rentas o eres dueño? ¿Cuántos vehículos? Sin SSN para cotizar. Proceso rápido y completamente confidencial.' },
    { title: 'Diseñamos tu paquete personalizado', desc: 'Combinamos las coberturas de hogar y auto más convenientes para tu situación, presupuesto y estado donde vives.' },
    { title: 'Activa, ahorra desde el primer mes', desc: 'Tu bundle entra en vigencia y el descuento se aplica de inmediato en ambas primas. Un solo pago mensual para todo.' },
  ],
  testimonials: [
    { name: 'Isabel R.', location: 'Las Vegas, Nevada', text: 'Pensaba que el seguro de renters era solo para dueños de casa. Me explicaron que yo, como inquilina, también califico para el bundle. Ahora tengo ambos y pago menos que antes solo con el de auto.' },
    { name: 'Fernando M.', location: 'Dallas, Texas', text: 'Combiné el seguro de mi casa y mis dos carros. Me ahorro casi $80 al mes comparado con tenerlos separados. Con el tiempo eso son casi $1,000 al año. Muy recomendado.' },
    { name: 'Claudia V.', location: 'Atlanta, Georgia', text: 'Tuve un robo en mi apartamento — se llevaron laptops, ropa y dinero. El seguro de renters me cubrió todo. Sin ese seguro hubiera perdido miles de dólares.' },
  ],
  faq: [
    { q: '¿Puedo combinar seguro de casa y auto si soy inquilino (renter)?', a: 'Sí. El seguro de renters cubre tus pertenencias personales dentro del apartamento o casa que rentas. Puedes combinarlo con tu seguro de auto para obtener el descuento de bundle — igual que un dueño de casa. No necesitas ser propietario para aprovechar el ahorro.' },
    { q: '¿Qué cubre el seguro de renters que la mayoría no sabe?', a: 'El seguro de renters cubre: tus pertenencias personales (ropa, electrónicos, muebles, joyas) ante robo, incendio o daños; responsabilidad civil si alguien se lastima en tu hogar y te demanda; gastos de alojamiento temporal (hotel) si tu apartamento queda inhabitable por un incendio u otro siniestro. El landlord tiene su propio seguro — pero ese seguro NO cubre tus pertenencias.' },
    { q: '¿Cuánto ahorro combinando los seguros en bundle?', a: 'El ahorro típico al combinar hogar y auto en un bundle es entre 10% y 25% en las primas de ambas pólizas. Las familias que hacen este cambio ahorran en promedio entre $400 y $900 al año. El ahorro exacto varía por aseguradora, estado y tipo de cobertura. Sujeto a términos y condiciones.' },
    { q: '¿Necesito SSN para asegurar mi casa o apartamento?', a: 'No. Aceptamos ITIN como identificación para contratar seguros de hogar (homeowners o renters) y de auto. No se requiere SSN ni historial de crédito en USA.' },
    { q: '¿El bundle puede incluir múltiples vehículos?', a: 'Sí. El paquete puede incluir más de un vehículo. Agregar vehículos adicionales a una póliza multi-auto generalmente resulta en descuentos adicionales por encima del bundle de hogar-auto.' },
    { q: '¿El seguro de hogar cubre daños por huracán, tornado o inundación?', a: 'Depende del estado y el plan. Los daños por viento (huracanes, tornados) generalmente están cubiertos en las pólizas estándar. Los daños por inundación generalmente NO están incluidos y requieren una póliza separada. En Florida, los huracanes pueden tener un deducible especial. Te explicamos qué cubre tu póliza específica según dónde vives.' },
  ],
  ctaTitle: 'Protege tu hogar y tu auto',
  ctaItalic: 'con un solo plan',
  ctaSubtitle: 'Combina y ahorra hasta 25%. Sin SSN. Sin complicaciones.',
  ctaButton: 'Armar mi Paquete',
  theme: 'violet',
  schema: { description: 'Paquete seguro de casa y auto para latinos en USA. Sin SSN, acepta ITIN. Ahorra hasta 25% combinando. Para renters y homeowners. Bundle desde $130/mes.', price: '130' },
};

export default function PaquetePage() {
  return <InsurancePage config={config} />;
}

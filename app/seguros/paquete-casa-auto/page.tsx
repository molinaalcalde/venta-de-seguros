import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Paquete',
  badge: '🏠 Bundle · Ahorra hasta 25%',
  heroLine1: 'Paquete Casa + Auto',
  heroItalic: 'más protección, menos dinero',
  heroSubtitle: 'Combina tu seguro de hogar (o renters) con el de auto y ahorra hasta 25% en ambas primas. Un solo asesor en español para toda tu familia. Sin SSN requerido.',
  trustBadges: ['Ahorra hasta 25%', 'Sin SSN requerido', 'Renters o Homeowners', 'Un solo asesor'],
  priceFrom: 'Bundle desde $130/mes',
  eligibilityTitle: '¿Rentas o eres dueño? Ambos califican',
  eligibilityText: 'No necesitas ser dueño de casa para beneficiarte del paquete. Si rentas, el seguro de renters protege tus pertenencias y se combina con el de auto para obtener el descuento.',
  eligibilityItems: [
    'Inquilinos (renters) — no es necesario ser dueño',
    'Dueños de casa o condo (homeowners)',
    'Sin SSN ni historial crediticio requerido',
    'Acepta ITIN como identificación',
    'Múltiples vehículos incluidos en el paquete',
  ],
  features: [
    { emoji: '💰', title: 'Hasta 25% de Ahorro', desc: 'Al combinar seguro de hogar y auto recibes un descuento significativo en ambas primas. Sujeto a términos y condiciones.' },
    { emoji: '🔑', title: 'Para Renters También', desc: 'El seguro de renters cubre tus pertenencias personales y responsabilidad civil. Se combina con el de auto para el descuento del paquete.' },
    { emoji: '📞', title: 'Un Solo Punto de Contacto', desc: 'Un asesor para ambas pólizas. Cuando tienes una pregunta o siniestro, llamas a un solo número y te atienden en español.' },
  ],
  coverageItems: [
    'Hogar: estructura y contenido',
    'Renters: pertenencias personales',
    'Responsabilidad civil del hogar',
    'Robo y vandalismo en el hogar',
    'Auto: colisión y daños completos',
    'Auto: responsabilidad civil',
    'Pérdida de uso del hogar',
    'Gastos de alojamiento temporal',
  ],
  steps: [
    { title: 'Cuéntanos sobre tu hogar', desc: '¿Rentas o eres dueño? ¿Cuántos vehículos? Sin SSN para cotizar. Proceso rápido y confidencial.' },
    { title: 'Diseñamos tu paquete', desc: 'Combinamos las coberturas de hogar y auto más convenientes para tu situación y presupuesto.' },
    { title: 'Activa y ahorra', desc: 'Tu paquete entra en vigencia y empiezas a ahorrar desde el primer mes de pago.' },
  ],
  testimonials: [
    { name: 'Isabel R.', location: 'Las Vegas, Nevada', text: 'Pensaba que el seguro de renters era solo para dueños. Me explicaron que yo, como inquilina, también califico. Ahora tengo ambos y pago menos que antes solo con el de auto.' },
    { name: 'Fernando M.', location: 'Dallas, Texas', text: 'Combiné el seguro de mi casa y mis dos carros. Me ahorro casi $80 al mes comparado con tenerlos separados. Muy recomendado sin duda.' },
    { name: 'Claudia V.', location: 'Atlanta, Georgia', text: 'Tuve un robo en mi apartamento y el seguro de renters me cubrió todo — laptops, ropa, muebles. Sin el seguro hubiera perdido miles de dólares.' },
  ],
  faq: [
    { q: '¿Puedo combinar seguro de casa y auto si soy inquilino?', a: 'Sí. El seguro de renters (para inquilinos) protege tus pertenencias personales dentro de tu apartamento o casa alquilada. Puedes combinarlo con tu seguro de auto para obtener el descuento de paquete, igual que un dueño de casa.' },
    { q: '¿Qué cubre el seguro de renters que muchos no saben?', a: 'El seguro de renters cubre: tus pertenencias personales (ropa, electrónicos, muebles) ante robo, incendio o daños; responsabilidad civil si alguien se lastima en tu hogar; y gastos de alojamiento temporal si tu apartamento queda inhabitable.' },
    { q: '¿Cuánto ahorro combinando los seguros?', a: 'El ahorro típico al combinar hogar y auto en un paquete es entre 10% y 25% en las primas de ambas pólizas. El ahorro exacto varía por aseguradora, estado y tipo de cobertura. Sujeto a términos y condiciones.' },
    { q: '¿Necesito SSN para asegurar mi casa o apartamento?', a: 'No. Aceptamos ITIN como identificación para contratar seguros de hogar (homeowners o renters) y de auto. No se requiere SSN.' },
    { q: '¿Puede incluir múltiples vehículos en el paquete?', a: 'Sí. El paquete puede incluir más de un vehículo. Agregar vehículos adicionales a una póliza multi-auto generalmente resulta en descuentos adicionales.' },
    { q: '¿El seguro de hogar cubre daños por huracán o tornado?', a: 'Depende del estado y el plan. En estados como Florida, los daños por huracán pueden requerir una póliza separada o endoso adicional. Te explicamos qué cubre tu póliza específica según tu ubicación. Sujeto a términos y condiciones.' },
  ],
  ctaTitle: 'Protege tu hogar y tu auto',
  ctaItalic: 'con un solo plan',
  ctaSubtitle: 'Combina y ahorra hasta 25%. Sin SSN. Sin complicaciones.',
  ctaButton: 'Armar mi Paquete',
  theme: 'violet',
  schema: { description: 'Paquete seguro de casa y auto para hispanos. Sin SSN, acepta ITIN. Ahorra hasta 25%. Para renters y homeowners. Bundle desde $130/mes.' },
};

export default function PaquetePage() {
  return <InsurancePage config={config} />;
}

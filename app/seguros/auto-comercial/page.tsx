import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'AutoComercial',
  badge: '🚛 Vans · Camiones · Flotas de Trabajo',
  heroLine1: 'Seguro de Auto Comercial',
  heroItalic: 'para tu trabajo y tu negocio',
  heroSubtitle: 'Tu seguro personal no cubre accidentes cuando usas el vehículo para trabajar. Con nuestro seguro comercial estás cubierto 100% en jornada laboral — sin SSN requerido.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN o EIN', 'Desde $110/mes', 'COI en 24 horas'],
  priceFrom: 'Desde $110/mes',
  eligibilityTitle: 'Protege tu herramienta de trabajo',
  eligibilityText: 'Si usas tu vehículo para trabajar — entregas, construcción, limpieza, servicios — necesitas seguro comercial. El seguro personal puede rechazar un reclamo si ocurre en jornada laboral.',
  eligibilityItems: [
    'Pickup trucks, vans y camiones de trabajo',
    'Vehículos de delivery y entregas',
    'Flotillas de 2 o más vehículos',
    'Contratistas de construcción, landscaping o servicios',
    'Negocios con EIN (sin necesitar SSN personal)',
  ],
  features: [
    { emoji: '🔨', title: 'Cobertura en Jornada Laboral', desc: 'A diferencia del seguro personal, el comercial cubre accidentes mientras trabajas, haces entregas o atiendes clientes. Sin exclusiones laborales.' },
    { emoji: '📋', title: 'COI en 24 Horas', desc: 'Muchos clientes y contratistas generales exigen un Certificado de Seguro (COI). Te lo emitimos en menos de 24 horas para que no pierdas trabajo.' },
    { emoji: '👥', title: 'Conductores Adicionales', desc: 'Agrega empleados o conductores adicionales a la póliza sin complicaciones. Cobertura completa para toda tu operación.' },
  ],
  coverageItems: [
    'Responsabilidad civil comercial',
    'Colisión durante jornada laboral',
    'Daños al vehículo y carga',
    'Robo del vehículo de trabajo',
    'Conductores adicionales',
    'Flotillas completas',
    'Certificado de Seguro (COI)',
    'Asistencia en carretera 24/7',
  ],
  steps: [
    { title: 'Cuéntanos sobre tu negocio', desc: 'Tipo de vehículo, número de conductores y para qué lo usas. Sin SSN requerido — puedes usar tu EIN.' },
    { title: 'Cotización personalizada', desc: 'Te enviamos opciones ajustadas a tu tipo de trabajo — no un precio genérico de calculadora automática.' },
    { title: 'COI disponible en 24 horas', desc: 'Una vez activa tu póliza, emitimos tu Certificado de Seguro en menos de 24 horas para presentar a clientes.' },
  ],
  testimonials: [
    { name: 'Ernesto P.', location: 'Houston, Texas', text: 'Soy contratista de construcción. Me pidieron un COI para trabajar en un proyecto y me lo tuvieron listo al otro día. Sin eso no hubiera entrado al trabajo.' },
    { name: 'Diana L.', location: 'Chicago, Illinois', text: 'Tengo 3 vans de limpieza. Antes de Aegis nadie me quería asegurar la flota sin SSN. Aquí lo hicieron sin problema y más barato que en otros lugares.' },
    { name: 'Ramón G.', location: 'Phoenix, Arizona', text: 'Mi seguro personal no cubría los accidentes yendo a entregas. Lo aprendí a las malas. Ahora tengo el comercial y trabajo tranquilo todos los días.' },
  ],
  faq: [
    { q: '¿Cuál es la diferencia entre seguro de auto personal y comercial?', a: 'El seguro personal cubre el vehículo para uso privado. Si tienes un accidente mientras haces una entrega, visitas a un cliente o vas a un trabajo, tu aseguradora personal puede rechazar el reclamo. El seguro comercial cubre explícitamente estos usos laborales.' },
    { q: '¿Necesito seguro comercial si uso mi camioneta para el trabajo?', a: 'Sí, en la mayoría de los casos. Si usas tu vehículo regularmente para visitar clientes, hacer entregas, transportar herramientas o materiales, o cualquier actividad comercial, necesitas seguro comercial. El seguro personal generalmente excluye estos usos.' },
    { q: '¿Puedo sacar seguro comercial de auto con ITIN?', a: 'Sí. Aceptamos ITIN para contratar seguros de auto comerciales. Si el seguro va a nombre de tu negocio, también puedes usar tu EIN (número de identificación del negocio) en lugar del SSN personal.' },
    { q: '¿Qué es un COI y por qué lo necesito?', a: 'Un COI (Certificate of Insurance / Certificado de Seguro) es un documento que prueba que tienes seguro activo. Muchos contratistas generales, propietarios de edificios y clientes corporativos lo exigen antes de dejarte trabajar en su propiedad. Lo emitimos en menos de 24 horas.' },
    { q: '¿Puedo asegurar múltiples vehículos en una sola póliza?', a: 'Sí. Podemos crear una póliza de flota que cubra 2 o más vehículos comerciales. Esto generalmente resulta en un ahorro por vehículo comparado con pólizas individuales. Sujeto a términos y condiciones.' },
    { q: '¿Mi información se comparte con el gobierno o migración?', a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental sin orden judicial.' },
  ],
  ctaTitle: 'Tu negocio merece',
  ctaItalic: 'protección real',
  ctaSubtitle: 'Seguro comercial desde $110/mes. Sin SSN. COI disponible en 24 horas.',
  ctaButton: 'Cotizar Auto Comercial',
  theme: 'orange',
  schema: { description: 'Seguro de auto comercial para vans, camiones y flotas. Sin SSN requerido. Acepta ITIN y EIN. COI en 24 horas. Desde $110/mes.', price: '110' },
};

export default function AutoComercialPage() {
  return <InsurancePage config={config} />;
}

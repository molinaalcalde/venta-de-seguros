'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  PawPrint, CheckCircle, Stethoscope, FirstAidKit,
  Syringe, Pill, ArrowRight, MapPin, ArrowLeft, Star,
  Shield, Lock, Headset, CreditCard, Tooth, Heart,
} from '@phosphor-icons/react';
import QuoteModal from '@/components/QuoteModal';
import LanguageSwitcher from '@/components/LanguageSwitcher';

// ── Affiliate config ─────────────────────────────────────────────────────────
const FETCH_URL =
  'https://www.fetchpet.com/mypet?a=FC87573&utm_source=firstconnect&utm_medium=brokerportal&utm_campaign=firstconnect_email&c=firstconnect&p=firstconnect&v=FVPCTRL';

const FETCH_STATES = new Set(['NJ', 'FL', 'IA', 'NV', 'PA', 'RI', 'TX']);

const STATE_NAMES_ES: Record<string, string> = {
  NJ: 'Nueva Jersey', FL: 'Florida', IA: 'Iowa',
  NV: 'Nevada', PA: 'Pensilvania', RI: 'Rhode Island', TX: 'Texas',
};
const STATE_NAMES_EN: Record<string, string> = {
  NJ: 'New Jersey', FL: 'Florida', IA: 'Iowa',
  NV: 'Nevada', PA: 'Pennsylvania', RI: 'Rhode Island', TX: 'Texas',
};

// ── Content ──────────────────────────────────────────────────────────────────
const CONTENT = {
  es: {
    plans: [
      { name: '70% Reembolso', tier: '70%', desc: 'Opción de menor costo. Tú cubres el 30% del gasto elegible, Fetch reembolsa el 70%.', highlight: false, cta: 'Cotizar 70%' },
      { name: '80% Reembolso', tier: '80%', desc: 'El equilibrio ideal. Recuperas el 80% de los gastos elegibles cubiertos.', highlight: true, cta: 'Cotizar 80%' },
      { name: '90% Reembolso', tier: '90%', desc: 'Máxima cobertura. Fetch te reembolsa el 90% de los gastos elegibles cubiertos.', highlight: false, cta: 'Cotizar 90%' },
    ],
    planFeatures: ['Cualquier vet en Estados Unidos', 'Cobertura dental completa', 'Fee de consulta incluido', 'Condiciones hereditarias de raza', 'Emergencias y cirugías', 'Medicamentos recetados'],
    plansMostPopular: 'Más popular',
    plansTitle: 'Elige tu',
    plansItalic: 'porcentaje de reembolso',
    plansSubtitle: 'Todos los planes cubren lo mismo. Tú decides cuánto recuperar. El precio se ajusta según tu mascota y estado.',
    coverage: [
      { label: 'Cualquier veterinario en Estados Unidos' },
      { label: 'Cobertura dental completa (todos los dientes adultos)' },
      { label: 'Emergencias y hospitalizaciones' },
      { label: 'Fee de consulta médica incluido' },
      { label: 'Condiciones hereditarias y de raza' },
      { label: 'Medicamentos y diagnósticos de laboratorio' },
    ],
    coverageTitle: '¿Qué está',
    coverageItalic: 'cubierto?',
    coverageSubtitle: 'Cobertura real de Fetch Pet Insurance para tu perro o gato. Sujeto a términos y condiciones.',
    howTitle: 'Cómo funciona el reembolso',
    howSubtitle: 'Simple, rápido',
    howItalic: 'y sin burocracia.',
    howSteps: [
      'Llevas a tu mascota a cualquier veterinario con licencia en Estados Unidos',
      'Pagas la factura y subes el recibo al portal de Fetch (app o web)',
      'Fetch te reembolsa según tu plan en aproximadamente una semana',
    ],
    howDisclaimer: 'Sujeto a los términos y condiciones de la póliza de Fetch Pet Insurance.',
    quoteTitle: 'Cotiza en línea',
    quoteItalic: 'en 5 minutos',
    quoteEligible: (state: string) => `Estás en ${state} — puedes activar tu póliza directamente en línea, 100% digital, sin llamadas.`,
    quoteNotEligible: 'Un asesor en español te guía en todo el proceso sin costo. Sin SSN, sin burocracia.',
    quoteSteps: [
      { step: '01', title: 'Datos de tu mascota', desc: 'Ingresa el nombre, raza, edad y sexo de tu perro o gato. El sistema actualiza el precio en tiempo real.' },
      { step: '02', title: 'Personaliza tu plan', desc: 'Elige el porcentaje de reembolso (70%, 80% o 90%), el deductible y el máximo anual según tu presupuesto.' },
      { step: '03', title: 'Paga y activa', desc: 'Paga con tarjeta de crédito o débito. La póliza queda activa de inmediato. Recibes tu póliza por email.' },
    ],
    quoteCTAEligible: (state: string) => ({ title: `Disponible en ${state}`, desc: 'Compra tu seguro de mascotas directamente en línea en fetchpet.com. Proceso 100% digital, sin llamadas.', btn: 'Obtener mi seguro de mascotas ahora' }),
    quoteCTANotEligible: { title: 'Protege a tu mascota', titleItalic: 'hoy mismo', desc: 'Un asesor en español te guía en todo el proceso. Sin SSN, sin burocracia.', btn: 'Cotizar Seguro de Mascotas gratis' },
    whyTitle: '¿Por qué',
    whyItalic: 'elegirnos?',
    whyCards: [
      { title: 'Sin SSN', desc: 'Aceptamos ITIN y pasaporte como identificación válida.' },
      { title: '100% Privado', desc: 'Tu info nunca se comparte con migración ni el gobierno.' },
      { title: 'Todo en Español', desc: 'Agentes reales que hablan tu idioma, listos para ayudarte.' },
      { title: 'Sin Sorpresas', desc: 'Tarifas claras, sin letra pequeña, sin cobros ocultos.' },
    ],
    testimonialsTitle: 'Lo que dicen',
    testimonialsItalic: 'nuestros clientes',
    testimonials: [
      { name: 'Carmen R.', location: 'Houston, Texas', text: 'Mi perro tuvo una cirugía de emergencia. Subí la factura al portal esa misma noche y en menos de una semana me depositaron el 80% de todo. No creía que fuera tan fácil.', plan: '80% Reembolso' },
      { name: 'Andrés M.', location: 'Miami, Florida', text: 'Pensé que necesitaba SSN para asegurar a mi gata. Me dijeron que solo necesitaba ITIN y en 10 minutos tenía la póliza activa. Muy fácil.', plan: '70% Reembolso' },
      { name: 'Lucía P.', location: 'Newark, New Jersey', text: 'Tres mascotas aseguradas con el 90% de reembolso. El servicio en español es real — hablas con una persona, no con un menú automático.', plan: '90% Reembolso' },
    ],
    testimonialsNote: '*Los nombres han sido cambiados para proteger la privacidad de nuestros clientes.',
    availTitle: 'Disponibilidad de compra directa en línea',
    availDesc: 'La compra directa en línea a través del portal afiliado Fetch está disponible en: Nueva Jersey, Florida, Iowa, Nevada, Pensilvania, Rhode Island y Texas. Para residentes de otros estados, un asesor en español te guiará en el proceso sin costo.',
    faqTitle: 'Preguntas',
    faqItalic: 'frecuentes',
    faq: [
      { q: '¿Necesito número de seguro social para asegurar a mi mascota?', a: 'No. Puedes contratar el seguro de mascotas con tu ITIN. No se requiere SSN ni ciudadanía. Solo necesitas tu nombre, dirección y la información básica de tu mascota.' },
      { q: '¿Cómo funciona el reembolso de Fetch?', a: 'El proceso es simple: llevas a tu mascota a cualquier veterinario con licencia en EE.UU. o Canadá, pagas la factura, y luego subes el recibo al portal de Fetch. Fetch te reembolsa según el porcentaje de tu plan (70%, 80% o 90%) en aproximadamente una semana.' },
      { q: '¿Cuánto tiempo tarda el reembolso?', a: 'En promedio, Fetch procesa los reembolsos en menos de una semana una vez que subes la factura al portal. Los tiempos exactos pueden variar según el caso. Sujeto a términos y condiciones.' },
      { q: '¿Cuánto cuesta el seguro de mascotas?', a: 'El precio varía según la raza, edad, estado y el porcentaje de reembolso que elijas (70%, 80% o 90%). También puedes personalizar el deductible y el máximo anual para ajustar el precio a tu presupuesto. Para obtener el precio exacto para tu mascota, cotiza en línea — es gratis y sin compromiso. Sujeto a términos y condiciones.' },
      { q: '¿Puedo ir a cualquier veterinario?', a: 'Sí. Fetch no tiene red restringida. Puedes llevar a tu mascota a cualquier veterinario con licencia en Estados Unidos, incluyendo especialistas y hospitales de emergencia. La cobertura también aplica en Canadá. No aplica fuera de EE.UU. y Canadá.' },
      { q: '¿El seguro cubre enfermedades preexistentes?', a: 'Las enfermedades preexistentes generalmente no están cubiertas. Las condiciones hereditarias de raza sí pueden estar cubiertas si no eran preexistentes al momento de contratar la póliza. Consulta los términos exactos con un asesor para tu caso específico.' },
      { q: '¿La compra directa en línea está disponible en mi estado?', a: 'La compra directa en línea a través del portal afiliado Fetch está disponible en: Nueva Jersey, Florida, Iowa, Nevada, Pensilvania, Rhode Island y Texas. Para residentes de otros estados, un asesor en español te guiará sin costo.' },
      { q: '¿Mi información personal se comparte con el gobierno o migración?', a: 'No. Tu información personal es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental. Cumplimos con todas las regulaciones estatales de privacidad de seguros.' },
    ],
    footerInsurance: 'Nuestros Seguros',
    footerLinks: [
      { href: '/seguros/auto', label: 'Seguro de Auto' },
      { href: '/seguros/vida', label: 'Seguro de Vida' },
      { href: '/seguros/salud', label: 'Seguro de Salud' },
      { href: '/seguros/dental', label: 'Seguro Dental' },
      { href: '/seguros/mascotas', label: 'Seguro de Mascotas' },
      { href: '/seguros/auto-comercial', label: 'Auto Comercial' },
      { href: '/seguros/comercial', label: 'Seguro Comercial' },
      { href: '/seguros/paquete-casa-auto', label: 'Paquete Casa + Auto' },
      { href: '/seguros/proteccion-extra', label: 'Protección Extra' },
    ],
    footerDisclaimer: 'Los precios son referenciales y varían según raza, edad, estado y plan elegido. Sujeto a aprobación y términos y condiciones de Fetch Pet Insurance. Maria Fernanda Insurance Consulting actúa como agente afiliado de Fetch Pet Insurance en los estados indicados.',
    heroBadge1: 'Fetch Pet Insurance · Hasta 90% de reembolso',
    heroBadge2: 'Sin SSN · Acepta ITIN',
    heroTitle: 'Seguro de',
    heroTitleSpan: 'Mascotas',
    heroItalic: 'que reembolsa rápido',
    heroDesc: 'Ve a cualquier veterinario en Estados Unidos. Sube la factura al portal de Fetch y recibe tu reembolso de hasta el 90% en menos de una semana. Sin SSN requerido.',
    heroCTAEligible: 'Obtener seguro ahora',
    heroCTANotEligible: 'Cotizar Seguro de Mascotas',
    heroSubtext: 'Precio personalizable · Sin compromiso',
    statsBar: [
      { value: 'Hasta 90%', label: 'De reembolso' },
      { value: 'Cualquier', label: 'Veterinario en Estados Unidos' },
      { value: '~7 días', label: 'Tiempo de reembolso' },
      { value: '100%', label: 'Confidencial' },
    ],
    features: [
      { emoji: '🏥', title: 'Cualquier Veterinario', desc: 'No hay red restringida. Lleva a tu mascota a cualquier veterinario con licencia en Estados Unidos — incluyendo especialistas y emergencias.' },
      { emoji: '💰', title: 'Hasta 90% de Reembolso', desc: 'Tú eliges el porcentaje: 70%, 80% o 90% de los gastos elegibles cubiertos. También personalizas el deductible y el máximo anual. Sujeto a términos y condiciones.' },
      { emoji: '🔒', title: 'Privacidad Garantizada', desc: 'Tu información es 100% confidencial. Nunca la compartimos con migración ni ninguna agencia del gobierno.' },
    ],
    quoteBtnEligible: 'Ir a fetchpet.com — portal afiliado',
    quoteBtnNotEligible: 'Hablar con un asesor en español',
    navBack: 'Cotizar gratis',
    fetchRedirectNote: 'Serás redirigido al portal de Fetch Pet Insurance · Maria Fernanda Insurance Consulting, afiliado certificado',
    noCommit: 'Sin compromiso · Respuesta en menos de 24 horas',
    footerTagline: 'Seguros para la comunidad hispana · Sin SSN · ITIN aceptado',
  },
  en: {
    plans: [
      { name: '70% Reimbursement', tier: '70%', desc: 'Most affordable option. You cover 30% of the eligible expense, Fetch reimburses 70%.', highlight: false, cta: 'Quote 70%' },
      { name: '80% Reimbursement', tier: '80%', desc: 'The ideal balance. Get back 80% of covered eligible expenses.', highlight: true, cta: 'Quote 80%' },
      { name: '90% Reimbursement', tier: '90%', desc: 'Maximum coverage. Fetch reimburses 90% of covered eligible expenses.', highlight: false, cta: 'Quote 90%' },
    ],
    planFeatures: ['Any vet in the United States', 'Full dental coverage', 'Office visit fee included', 'Hereditary and breed conditions', 'Emergencies and surgeries', 'Medications and lab tests'],
    plansMostPopular: 'Most popular',
    plansTitle: 'Choose your',
    plansItalic: 'reimbursement percentage',
    plansSubtitle: 'All plans cover the same things. You decide how much to recover. Price adjusts by pet and state.',
    coverage: [
      { label: 'Any vet in the United States' },
      { label: 'Full dental coverage (all adult teeth)' },
      { label: 'Emergencies and hospitalizations' },
      { label: 'Office visit fee included' },
      { label: 'Hereditary and breed conditions' },
      { label: 'Medications and lab tests' },
    ],
    coverageTitle: "What's",
    coverageItalic: 'covered?',
    coverageSubtitle: 'Real Fetch Pet Insurance coverage for your dog or cat. Subject to terms and conditions.',
    howTitle: 'How reimbursement works',
    howSubtitle: 'Simple, fast',
    howItalic: 'and hassle-free.',
    howSteps: [
      'Take your pet to any licensed vet in the United States',
      "Pay the bill and upload the receipt to Fetch's portal (app or web)",
      'Fetch reimburses you according to your plan in approximately one week',
    ],
    howDisclaimer: 'Subject to the terms and conditions of the Fetch Pet Insurance policy.',
    quoteTitle: 'Get a quote online',
    quoteItalic: 'in 5 minutes',
    quoteEligible: (state: string) => `You're in ${state} — you can activate your policy directly online, 100% digital, no calls.`,
    quoteNotEligible: 'A bilingual advisor guides you through the entire process at no cost. No SSN, no hassle.',
    quoteSteps: [
      { step: '01', title: "Your pet's info", desc: "Enter the name, breed, age, and sex of your dog or cat. The system updates the price in real time." },
      { step: '02', title: 'Customize your plan', desc: 'Choose your reimbursement percentage (70%, 80%, or 90%), deductible, and annual maximum to fit your budget.' },
      { step: '03', title: 'Pay and activate', desc: "Pay with credit or debit card. Policy is active immediately. You'll receive your policy by email." },
    ],
    quoteCTAEligible: (state: string) => ({ title: `Available in ${state}`, desc: 'Buy your pet insurance directly online. 100% digital process, no calls.', btn: 'Get my pet insurance now' }),
    quoteCTANotEligible: { title: 'Protect your pet', titleItalic: 'today', desc: 'A bilingual advisor guides you through the process. No SSN, no hassle.', btn: 'Get a free Pet Insurance quote' },
    whyTitle: 'Why',
    whyItalic: 'choose us?',
    whyCards: [
      { title: 'No SSN', desc: 'ITIN and passport accepted.' },
      { title: '100% Private', desc: 'Your info never shared with immigration.' },
      { title: 'All in English', desc: 'Real agents who speak your language.' },
      { title: 'No Surprises', desc: 'Clear rates, no hidden fees.' },
    ],
    testimonialsTitle: "What our",
    testimonialsItalic: 'clients say',
    testimonials: [
      { name: 'Carmen R.', location: 'Houston, Texas', text: 'My dog had emergency surgery. I uploaded the invoice that same night and in less than a week they deposited 80% of everything. I didn\'t think it would be that easy.', plan: '80% Reimbursement' },
      { name: 'Andrés M.', location: 'Miami, Florida', text: 'I thought I needed an SSN to insure my cat. They told me I only needed an ITIN and in 10 minutes the policy was active. Very easy.', plan: '70% Reimbursement' },
      { name: 'Lucía P.', location: 'Newark, New Jersey', text: 'Three pets insured at 90% reimbursement. The English service is real — you talk to a person, not an automated menu.', plan: '90% Reimbursement' },
    ],
    testimonialsNote: '*Names have been changed to protect the privacy of our clients.',
    availTitle: 'Direct online purchase availability',
    availDesc: 'Direct online purchase through the Fetch affiliate portal is available in: New Jersey, Florida, Iowa, Nevada, Pennsylvania, Rhode Island, and Texas. For residents of other states, a bilingual advisor will guide you through the process at no cost.',
    faqTitle: 'Frequently',
    faqItalic: 'asked questions',
    faq: [
      { q: 'Do I need a Social Security number to insure my pet?', a: 'No. You can get pet insurance with your ITIN. No SSN or citizenship required. You only need your name, address, and your pet\'s basic information.' },
      { q: "How does Fetch's reimbursement work?", a: "The process is simple: take your pet to any licensed vet in the U.S., pay the bill, then upload the receipt to Fetch's portal. Fetch reimburses you based on your chosen percentage (70%, 80%, or 90%) in approximately one week." },
      { q: 'How long does reimbursement take?', a: 'On average, Fetch processes reimbursements in less than a week once you upload the invoice to the portal. Exact times may vary. Subject to terms and conditions.' },
      { q: 'How much does pet insurance cost?', a: 'The price varies based on breed, age, state, and your chosen reimbursement percentage (70%, 80%, or 90%). You can also customize the deductible and annual maximum. Get your exact price online — free and no commitment. Subject to terms and conditions.' },
      { q: 'Can I go to any vet?', a: 'Yes. Fetch has no restricted network. You can take your pet to any licensed vet in the United States, including specialists and emergency hospitals. Coverage also applies in Canada. Does not apply outside the U.S. and Canada.' },
      { q: 'Does insurance cover pre-existing conditions?', a: 'Pre-existing conditions are generally not covered. Hereditary breed conditions may be covered if they were not pre-existing when the policy was purchased. Consult an advisor for your specific case.' },
      { q: 'Is direct online purchase available in my state?', a: 'Direct online purchase through the Fetch affiliate portal is available in: New Jersey, Florida, Iowa, Nevada, Pennsylvania, Rhode Island, and Texas. For residents of other states, a bilingual advisor will guide you at no cost.' },
      { q: 'Is my personal information shared with the government or immigration?', a: 'No. Your personal information is 100% confidential. We never share it with ICE or any government agency. We comply with all state insurance privacy regulations.' },
    ],
    footerInsurance: 'Our Insurance',
    footerLinks: [
      { href: '/seguros/auto', label: 'Car Insurance' },
      { href: '/seguros/vida', label: 'Life Insurance' },
      { href: '/seguros/salud', label: 'Health Insurance' },
      { href: '/seguros/dental', label: 'Dental Insurance' },
      { href: '/seguros/mascotas', label: 'Pet Insurance' },
      { href: '/seguros/auto-comercial', label: 'Commercial Auto' },
      { href: '/seguros/comercial', label: 'Business Insurance' },
      { href: '/seguros/paquete-casa-auto', label: 'Home + Auto Bundle' },
      { href: '/seguros/proteccion-extra', label: 'Umbrella Coverage' },
    ],
    footerDisclaimer: 'Prices are for reference and vary by breed, age, state, and chosen plan. Subject to approval and Fetch Pet Insurance terms and conditions. Maria Fernanda Insurance Consulting acts as an affiliate agent for Fetch Pet Insurance in the indicated states.',
    heroBadge1: 'Fetch Pet Insurance · Up to 90% Reimbursement',
    heroBadge2: 'No SSN · ITIN Accepted',
    heroTitle: 'Pet Insurance that',
    heroTitleSpan: '',
    heroItalic: 'reimburses fast',
    heroDesc: 'Visit any vet in the United States. Upload the invoice to Fetch\'s portal and receive your reimbursement of up to 90% in less than a week. No SSN required.',
    heroCTAEligible: 'Get my insurance now',
    heroCTANotEligible: 'Get a Pet Insurance Quote',
    heroSubtext: 'Customizable price · No commitment',
    statsBar: [
      { value: 'Up to 90%', label: 'Reimbursement' },
      { value: 'Any', label: 'Vet in the USA' },
      { value: '~7 days', label: 'Reimbursement time' },
      { value: '100%', label: 'Confidential' },
    ],
    features: [
      { emoji: '🏥', title: 'Any Veterinarian', desc: 'No restricted network. Take your pet to any licensed vet in the United States — including specialists and emergency hospitals.' },
      { emoji: '💰', title: 'Up to 90% Reimbursement', desc: 'You choose the percentage: 70%, 80%, or 90% of covered eligible expenses. Also customize deductible and annual maximum. Subject to terms and conditions.' },
      { emoji: '🔒', title: 'Privacy Guaranteed', desc: 'Your information is 100% confidential. We never share it with immigration or any government agency.' },
    ],
    quoteBtnEligible: 'Go to fetchpet.com — affiliate portal',
    quoteBtnNotEligible: 'Talk to a bilingual advisor',
    navBack: 'Get a free quote',
    fetchRedirectNote: 'You will be redirected to the Fetch Pet Insurance portal · Maria Fernanda Insurance Consulting, certified affiliate',
    noCommit: 'No commitment · Response within 24 hours',
    footerTagline: 'Insurance for the Hispanic community · No SSN · ITIN accepted',
  },
};

// ── Coverage icons ───────────────────────────────────────────────────────────
const COVERAGE_ICONS = [Stethoscope, Tooth, FirstAidKit, CheckCircle, Heart, Pill];

export default function MascotasLangPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isEn = lang === 'en';
  const c = isEn ? CONTENT.en : CONTENT.es;
  const STATE_NAMES = isEn ? STATE_NAMES_EN : STATE_NAMES_ES;

  const [quoteOpen, setQuoteOpen]   = useState(false);
  const [userState, setUserState]   = useState<string | null>(null);
  const [geoLoading, setGeoLoading] = useState(true);
  const [openFaq, setOpenFaq]       = useState<number | null>(null);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(d => { if (d.region_code) setUserState(d.region_code); })
      .catch(() => {})
      .finally(() => setGeoLoading(false));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isEligibleState = userState && FETCH_STATES.has(userState);
  const stateName = userState ? (STATE_NAMES[userState] ?? userState) : null;

  const schemas = [
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: c.faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: isEn ? 'Pet Insurance — Fetch Pet Insurance' : 'Seguro de Mascotas — Fetch Pet Insurance',
      description: isEn ? 'Pet insurance with up to 90% reimbursement. No SSN required. ITIN accepted. Any vet in the USA.' : 'Seguro de mascotas con reembolso de hasta el 90%. Sin SSN requerido. Acepta ITIN. Cualquier veterinario en EE.UU.',
      provider: { '@type': 'InsuranceAgency', name: 'Maria Fernanda Insurance Consulting', url: 'https://venta-de-seguros.vercel.app' },
      areaServed: { '@type': 'Country', name: 'United States' },
    },
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* ── Navbar ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={`/${lang}`} className="flex items-center gap-2 group shrink-0">
              <ArrowLeft weight="regular" className={`w-4 h-4 transition-colors ${scrolled ? 'text-slate-400 group-hover:text-slate-700' : 'text-white/70 group-hover:text-white'}`} />
              <img src="/logo.png" alt="Maria Fernanda Insurance Consulting" className={`h-8 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} />
            </Link>
            <div className="flex items-center gap-2">
              <LanguageSwitcher scrolled={scrolled} />
              <button onClick={() => setQuoteOpen(true)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-sm ${scrolled ? 'bg-slate-900 hover:bg-slate-800 text-white' : 'bg-white text-slate-900 hover:bg-white/90'}`}>
                {c.navBack}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-[#fafbfa] min-h-screen">

        {/* ── Hero ── */}
        <section className="relative w-full min-h-[600px] lg:min-h-[720px] flex flex-col justify-end overflow-hidden">
          <video src="/videos/hero2.mp4" autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 z-[1]" />
          <div className="relative z-10 w-full px-5 lg:px-10 pb-14 sm:pb-20">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="hidden lg:flex items-center gap-3 text-white/70 text-xs font-light select-none shrink-0">
                <div className="w-5 h-8 rounded-full border border-white/50 flex items-start justify-center pt-1.5"><span className="w-1 h-1.5 bg-white rounded-full animate-bounce" /></div>
                <span className="tracking-wide">Scroll Down</span>
              </div>
              <div className="max-w-2xl text-white lg:text-right">
                <div className="flex flex-wrap gap-2 mb-5 lg:justify-end">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-xs text-white font-medium">
                    <PawPrint weight="duotone" className="w-3.5 h-3.5" />{c.heroBadge1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-xs text-white font-medium">{c.heroBadge2}</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-normal tracking-tight leading-[1.06] drop-shadow-sm">
                  {c.heroTitle} <br />
                  {c.heroTitleSpan && <span className="font-sans font-light">{c.heroTitleSpan}</span>}{c.heroTitleSpan ? ' ' : ''}
                  <span className="font-editorial-italic">{c.heroItalic}</span>
                </h1>
                <p className="mt-4 text-white/85 text-sm sm:text-base font-light max-w-lg leading-relaxed lg:ml-auto">{c.heroDesc}</p>
                <div className="mt-6 flex flex-wrap gap-4 items-center lg:justify-end">
                  {geoLoading ? (
                    <div className="h-11 w-52 bg-white/20 animate-pulse rounded-full" />
                  ) : isEligibleState ? (
                    <a href={FETCH_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-lg active:scale-95">
                      <PawPrint weight="fill" className="w-4 h-4 text-[#2d5a35]" />{c.heroCTAEligible}<ArrowRight weight="bold" className="w-4 h-4" />
                    </a>
                  ) : (
                    <button onClick={() => setQuoteOpen(true)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-lg active:scale-95">
                      <PawPrint weight="fill" className="w-4 h-4 text-[#2d5a35]" />{c.heroCTANotEligible}<ArrowRight weight="bold" className="w-4 h-4" />
                    </button>
                  )}
                  <span className="text-white/60 text-xs font-light">{c.heroSubtext}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {c.statsBar.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-light text-[#2d5a35] tracking-tight">{value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 Features ── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-sm border-t-2 border-t-[#3d7a47]">
                <div className="text-3xl mb-4">{f.emoji}</div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Plans ── */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <div className="max-w-xl mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-3">
                {c.plansTitle}{' '}<span className="font-editorial-italic text-[#3d7a47]">{c.plansItalic}</span>
              </h2>
              <p className="text-sm text-slate-500 font-light">{c.plansSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.plans.map((plan) => (
                <div key={plan.name} className={`rounded-2xl p-7 flex flex-col transition-all ${plan.highlight ? 'bg-[#1a3320] text-white shadow-2xl scale-[1.02] relative' : 'bg-[#fafbfa] border border-slate-200 text-slate-900'}`}>
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7db887] text-[#1a3320] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">{c.plansMostPopular}</span>
                  )}
                  <div className="mb-5">
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-[#7db887]' : 'text-[#3d7a47]'}`}>{plan.name}</p>
                    <div className="flex items-end gap-1 mb-2">
                      <span className={`text-4xl font-light tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.tier}</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${plan.highlight ? 'text-white/60' : 'text-slate-500'}`}>{plan.desc}</p>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-7">
                    {c.planFeatures.map((label) => (
                      <li key={label} className="flex items-start gap-2.5 text-xs">
                        <span className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-[#7db887]' : 'text-[#3d7a47]'}`}>✓</span>
                        <span className={plan.highlight ? 'text-white/80' : 'text-slate-700'}>{label}</span>
                      </li>
                    ))}
                  </ul>
                  {isEligibleState ? (
                    <a href={FETCH_URL} target="_blank" rel="noopener noreferrer" className={`w-full py-3 rounded-full text-xs font-bold text-center transition-all ${plan.highlight ? 'bg-[#7db887] hover:bg-[#8fc99a] text-[#1a3320]' : 'bg-slate-900 hover:bg-slate-700 text-white'}`}>{plan.cta}</a>
                  ) : (
                    <button onClick={() => setQuoteOpen(true)} className={`w-full py-3 rounded-full text-xs font-bold transition-all ${plan.highlight ? 'bg-[#7db887] hover:bg-[#8fc99a] text-[#1a3320]' : 'bg-slate-900 hover:bg-slate-700 text-white'}`}>{plan.cta}</button>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 text-center mt-6">*{isEn ? 'Price varies by breed, age, state, deductible, and annual maximum. Subject to Fetch Pet Insurance terms and conditions.' : 'El precio varía según raza, edad, estado, deductible y máximo anual elegido. Sujeto a términos y condiciones de Fetch Pet Insurance.'}</p>
          </div>
        </section>

        {/* ── What's covered ── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-4">
                {c.coverageTitle}{' '}<span className="font-editorial-italic text-[#3d7a47]">{c.coverageItalic}</span>
              </h2>
              <p className="text-slate-500 font-light text-sm leading-relaxed mb-8">{c.coverageSubtitle}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.coverage.map(({ label }, i) => {
                  const Icon = COVERAGE_ICONS[i] ?? CheckCircle;
                  return (
                    <div key={label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 border border-slate-100 shadow-sm">
                      <Icon weight="duotone" className="w-5 h-5 text-[#3d7a47] shrink-0" />
                      <span className="text-sm text-slate-700 font-medium leading-snug">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-[#1a3320] rounded-3xl p-8 text-white">
              <p className="text-xs uppercase tracking-widest text-[#7db887] font-semibold mb-4">{c.howTitle}</p>
              <h3 className="text-2xl font-light leading-tight mb-5">
                {c.howSubtitle}<br /><span className="font-editorial-italic text-[#7db887]">{c.howItalic}</span>
              </h3>
              <div className="space-y-4">
                {c.howSteps.map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#7db887]/20 border border-[#7db887]/40 flex items-center justify-center shrink-0 text-xs font-bold text-[#7db887]">{i + 1}</div>
                    <p className="text-sm text-white/70 leading-relaxed pt-0.5">{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/30 mt-6">{c.howDisclaimer}</p>
            </div>
          </div>
        </section>

        {/* ── Cómo cotizar en línea ── */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <div className="max-w-xl mb-10">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-3">
                {c.quoteTitle}{' '}<span className="font-editorial-italic text-[#3d7a47]">{c.quoteItalic}</span>
              </h2>
              {isEligibleState ? (
                <p className="text-sm text-slate-500 font-light">{c.quoteEligible(stateName ?? '')}</p>
              ) : (
                <p className="text-sm text-slate-500 font-light">{c.quoteNotEligible}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.quoteSteps.map(({ step, title, desc }) => (
                <div key={step} className="relative bg-[#fafbfa] border border-slate-200 rounded-2xl p-7">
                  <span className="text-5xl font-light text-slate-100 absolute top-5 right-6 select-none">{step}</span>
                  <h3 className="font-semibold text-slate-900 text-base mb-2 relative">{title}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed relative">{desc}</p>
                </div>
              ))}
            </div>
            {!geoLoading && (
              <div className="mt-8 text-center">
                {isEligibleState ? (
                  <a href={FETCH_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a3320] hover:bg-[#2d5a35] text-white font-semibold text-sm transition-all shadow-md">
                    <PawPrint weight="fill" className="w-4 h-4" />{c.quoteBtnEligible}<ArrowRight weight="bold" className="w-4 h-4" />
                  </a>
                ) : (
                  <button onClick={() => setQuoteOpen(true)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a3320] hover:bg-[#2d5a35] text-white font-semibold text-sm transition-all shadow-md">
                    <PawPrint weight="fill" className="w-4 h-4" />{c.quoteBtnNotEligible}<ArrowRight weight="bold" className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ── Geo-gated CTA ── */}
        <section className="bg-gradient-to-br from-[#1a3320] to-[#2d5a35] text-white">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <div className="max-w-2xl mx-auto text-center">
              <PawPrint weight="duotone" className="w-12 h-12 text-[#7db887] mx-auto mb-5" />
              {geoLoading ? (
                <>
                  <div className="h-8 w-3/4 bg-white/10 animate-pulse rounded-lg mx-auto mb-4" />
                  <div className="h-4 w-1/2 bg-white/10 animate-pulse rounded mx-auto" />
                </>
              ) : isEligibleState ? (() => {
                const cta = c.quoteCTAEligible(stateName ?? '');
                return (
                  <>
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">{cta.title}</h2>
                    <p className="text-white/70 font-light mb-8 text-base">{cta.desc}</p>
                    <a href={FETCH_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#7db887] hover:bg-[#8fc99a] text-[#1a3320] font-bold text-sm transition-all shadow-xl hover:-translate-y-0.5">
                      <PawPrint weight="fill" className="w-5 h-5" />{cta.btn}<ArrowRight weight="bold" className="w-4 h-4" />
                    </a>
                    <p className="text-xs text-white/30 mt-4">{c.fetchRedirectNote}</p>
                  </>
                );
              })() : (
                <>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                    {c.quoteCTANotEligible.title}{' '}<span className="font-editorial-italic text-[#7db887]">{c.quoteCTANotEligible.titleItalic}</span>
                  </h2>
                  <p className="text-white/70 font-light mb-8 text-base">{c.quoteCTANotEligible.desc}</p>
                  <button onClick={() => setQuoteOpen(true)} className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#7db887] hover:bg-[#8fc99a] text-[#1a3320] font-bold text-sm transition-all shadow-xl hover:-translate-y-0.5">
                    <PawPrint weight="fill" className="w-5 h-5" />{c.quoteCTANotEligible.btn}<ArrowRight weight="bold" className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-white/30 mt-4">{c.noCommit}</p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── Why us ── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-10">
            {c.whyTitle}{' '}<span className="font-editorial-italic text-slate-400">{c.whyItalic}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Shield, ...c.whyCards[0] },
              { icon: Lock, ...c.whyCards[1] },
              { icon: Headset, ...c.whyCards[2] },
              { icon: CreditCard, ...c.whyCards[3] },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm">
                <Icon weight="duotone" className="w-6 h-6 text-[#3d7a47] mb-3" />
                <h3 className="font-semibold text-slate-900 text-sm mb-1.5">{title}</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-10">
              {c.testimonialsTitle}{' '}<span className="font-editorial-italic text-[#3d7a47]">{c.testimonialsItalic}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.testimonials.map((t, i) => (
                <div key={i} className="bg-[#fafbfa] rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, s) => <Star key={s} weight="fill" className="w-3.5 h-3.5 text-amber-400" />)}
                  </div>
                  <p className="text-sm text-slate-700 font-light leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.location}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-[#3d7a47] bg-[#d1e3d4]/60 px-2 py-1 rounded-full">{t.plan}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-5">{c.testimonialsNote}</p>
          </div>
        </section>

        {/* ── State availability ── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-10">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-start gap-4">
            <MapPin weight="duotone" className="w-6 h-6 text-[#3d7a47] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-slate-800 mb-1">{c.availTitle}</p>
              <p className="text-sm text-slate-600 font-light leading-relaxed">{c.availDesc}</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-10">
            {c.faqTitle}{' '}<span className="font-editorial-italic text-[#3d7a47]">{c.faqItalic}</span>
          </h2>
          <div className="space-y-3 max-w-3xl">
            {c.faq.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-medium text-slate-900 text-sm pr-4">{item.q}</span>
                  <span className={`text-slate-400 text-lg transition-transform duration-200 shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-slate-600 font-light leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-[#0f1a12] text-white">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
              <div>
                <div className="mb-2"><img src="/logo.png" alt="Maria Fernanda Insurance Consulting" className="h-8 w-auto brightness-0 invert" /></div>
                <p className="text-xs text-slate-400 font-light mb-4">{c.footerTagline}</p>
                <button onClick={() => setQuoteOpen(true)} className="px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold transition-all">{c.navBack}</button>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">{c.footerInsurance}</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                  {c.footerLinks.map(({ href, label }) => (
                    <Link key={href} href={`/${lang}${href}`} className="text-xs text-slate-400 hover:text-white transition-colors">{label}</Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-4">
              <p className="text-xs text-slate-500 font-light">{c.footerDisclaimer}</p>
            </div>
          </div>
        </footer>
      </main>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} initialType="Mascotas" />
    </>
  );
}

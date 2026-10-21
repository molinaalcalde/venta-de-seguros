'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { pushGTMEvent } from '@/lib/gtm';
import { X } from 'lucide-react';

const PHONE = '19082280973';

type InsKey =
  | 'home'
  | 'auto'
  | 'auto_comercial'
  | 'mascotas'
  | 'vida'
  | 'salud'
  | 'dental'
  | 'comercial'
  | 'paquete'
  | 'umbrella';

const INS_LABELS: Record<InsKey, { es: string; en: string }> = {
  home:           { es: 'General',          en: 'General' },
  auto:           { es: 'Auto',             en: 'Auto' },
  auto_comercial: { es: 'Auto Comercial',   en: 'Commercial Auto' },
  mascotas:       { es: 'Mascotas',         en: 'Pet' },
  vida:           { es: 'Vida',             en: 'Life' },
  salud:          { es: 'Salud',            en: 'Health' },
  dental:         { es: 'Dental',           en: 'Dental' },
  comercial:      { es: 'Comercial',        en: 'Commercial' },
  paquete:        { es: 'Paquete',          en: 'Bundle' },
  umbrella:       { es: 'Umbrella',         en: 'Umbrella' },
};

/* ── Mensajes por tipo de seguro e idioma ─────────────────────────────── */
const MESSAGES: Record<InsKey, { es: string; en: string }> = {
  home: {
    es: 'Hola, vi tu pagina y me interesa cotizar un seguro. Podemos hablar?',
    en: "Hi, I saw your website and I'd like to get an insurance quote. Can we talk?",
  },
  auto: {
    es: 'Hola, vi tu pagina de seguro de auto y quiero cotizar. Tienes disponibilidad?',
    en: "Hi, I saw your car insurance page and I'd like a quote. Are you available?",
  },
  mascotas: {
    es: 'Hola, vi tu pagina de seguro de mascotas y quiero cotizar para mi mascota',
    en: "Hi, I saw your pet insurance page and I'd like a quote for my pet",
  },
  vida: {
    es: 'Hola, vi tu pagina de seguro de vida y me interesa explorar opciones',
    en: "Hi, I saw your life insurance page and I'd like to explore my options",
  },
  salud: {
    es: 'Hola, vi tu pagina de seguro de salud y quiero comparar planes',
    en: "Hi, I saw your health insurance page and I'd like to compare plans",
  },
  dental: {
    es: 'Hola, vi tu pagina de seguro dental y me interesa cotizar',
    en: "Hi, I saw your dental insurance page and I'd like a quote",
  },
  comercial: {
    es: 'Hola, tengo un negocio y vi tu pagina de seguro comercial. Podemos hablar?',
    en: "Hi, I own a business and saw your commercial insurance page. Can we talk?",
  },
  auto_comercial: {
    es: 'Hola, uso mi vehiculo para trabajar y vi tu pagina de seguro. Me asesoras?',
    en: "Hi, I use my vehicle for work and saw your commercial auto page. Can you help?",
  },
  paquete: {
    es: 'Hola, me interesa un paquete casa + auto. Vi tu pagina y quiero cotizar',
    en: "Hi, I'm interested in a home + auto bundle. I saw your page and want a quote",
  },
  umbrella: {
    es: 'Hola, vi tu pagina de proteccion extra y quiero saber mas sobre umbrella',
    en: "Hi, I saw your extra protection page and want to learn about umbrella coverage",
  },
};

/* ── Copy bilingue ──────────────────────────────────────────────────────── */
const COPY = {
  es: {
    title: 'Antes de ir a WhatsApp',
    subtitle: 'Deja tu nombre y telefono para que podamos darte seguimiento y una mejor atencion.',
    nameLabel: 'Tu nombre',
    namePlaceholder: 'Ej: Maria Garcia',
    phoneLabel: 'Tu telefono',
    phonePlaceholder: '(555) 123-4567',
    cta: 'Ir a WhatsApp',
    skip: 'Continuar sin registrar',
    privacy: 'Solo usamos tus datos para contactarte sobre tu cotizacion.',
    sending: 'Guardando...',
  },
  en: {
    title: 'Before going to WhatsApp',
    subtitle: 'Leave your name and phone so we can follow up and give you better service.',
    nameLabel: 'Your name',
    namePlaceholder: 'E.g. Maria Garcia',
    phoneLabel: 'Your phone',
    phonePlaceholder: '(555) 123-4567',
    cta: 'Go to WhatsApp',
    skip: 'Continue without registering',
    privacy: 'We only use your info to contact you about your quote.',
    sending: 'Saving...',
  },
};

/* ── Detecta tipo de seguro desde la URL ────────────────────────────── */
function getInsType(pathname: string): InsKey {
  if (pathname.includes('/seguros/auto-comercial') || pathname.includes('/commercial-auto')) return 'auto_comercial';
  if (pathname.includes('/seguros/auto') || pathname.includes('/car-insurance')) return 'auto';
  if (pathname.includes('/seguros/mascotas') || pathname.includes('/pet-insurance')) return 'mascotas';
  if (pathname.includes('/seguros/vida') || pathname.includes('/life-insurance')) return 'vida';
  if (pathname.includes('/seguros/salud') || pathname.includes('/health-insurance')) return 'salud';
  if (pathname.includes('/seguros/dental') || pathname.includes('/dental-insurance')) return 'dental';
  if (pathname.includes('/seguros/comercial') || pathname.includes('/business-insurance')) return 'comercial';
  if (pathname.includes('/seguros/paquete') || pathname.includes('/home-auto-bundle')) return 'paquete';
  if (pathname.includes('/seguros/proteccion-extra') || pathname.includes('/extra-protection')) return 'umbrella';
  return 'home';
}

/* ── Formatear telefono US ──────────────────────────────────────────── */
function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function WhatsAppButton() {
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'es';
  const insType = getInsType(pathname);
  const copy = COPY[lang];

  const [modalOpen, setModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<{ nombre?: boolean; telefono?: boolean }>({});
  const formRef = useRef<HTMLDivElement>(null);

  const message = encodeURIComponent(MESSAGES[insType][lang]);
  const waUrl = `https://wa.me/${PHONE}?text=${message}`;

  const ariaLabel = lang === 'en' ? 'Chat on WhatsApp' : 'Chatea por WhatsApp';
  const tooltip = lang === 'en' ? 'Chat with us' : 'Chatea con nosotros';

  /* Observar si QuoteModal esta abierto */
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setModalOpen(document.body.dataset.quoteOpen === 'true');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-quote-open'] });
    return () => observer.disconnect();
  }, []);

  /* Cerrar con Escape */
  useEffect(() => {
    if (!showForm) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowForm(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [showForm]);

  /* Cerrar al hacer clic fuera */
  useEffect(() => {
    if (!showForm) return;
    function handleClickOutside(e: MouseEvent) {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        setShowForm(false);
      }
    }
    // Delay to avoid immediate close from the button click
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showForm]);

  function handleButtonClick(e: React.MouseEvent) {
    e.preventDefault();
    pushGTMEvent({
      event: 'whatsapp_click',
      source: 'floating_button',
      insurance_type: insType,
      page_lang: lang,
      page_path: pathname,
    });
    setShowForm(true);
  }

  function goToWhatsApp() {
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setShowForm(false);
    setNombre('');
    setTelefono('');
    setErrors({});
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: { nombre?: boolean; telefono?: boolean } = {};
    if (!nombre.trim()) newErrors.nombre = true;
    const phoneDigits = telefono.replace(/\D/g, '');
    if (phoneDigits.length < 10) newErrors.telefono = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSending(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: nombre.trim(),
          email: `whatsapp_${phoneDigits}@lead.local`,
          telefono: phoneDigits,
          tipo_seguro: INS_LABELS[insType][lang],
          canal: 'WhatsApp',
          detalles: JSON.stringify({
            canal: 'WhatsApp',
            pagina_origen: pathname,
            idioma: lang,
            tipo_seguro_key: insType,
          }),
          lead_score: 60,
        }),
      });

      pushGTMEvent({
        event: 'whatsapp_lead_captured',
        source: 'whatsapp_mini_form',
        insurance_type: insType,
        page_lang: lang,
      });
    } catch {
      // Si falla el guardado, igual mandamos al usuario a WhatsApp
    }
    setSending(false);
    goToWhatsApp();
  }

  function handleSkip() {
    pushGTMEvent({
      event: 'whatsapp_skip_form',
      source: 'whatsapp_mini_form',
      insurance_type: insType,
      page_lang: lang,
    });
    goToWhatsApp();
  }

  return (
    <>
      {/* Boton flotante */}
      <button
        onClick={handleButtonClick}
        aria-label={ariaLabel}
        title={tooltip}
        className={`fixed bottom-20 md:bottom-6 right-6 z-50 flex items-center justify-center${modalOpen ? ' hidden md:flex' : ''}`}
      >
        <span
          className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20"
          style={{ animation: 'ping 3s cubic-bezier(0,0,0.2,1) infinite' }}
        />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
      </button>

      {/* Mini-form overlay */}
      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-end justify-end pointer-events-none">
          {/* Backdrop sutil */}
          <div
            className="absolute inset-0 bg-black/20 pointer-events-auto"
            style={{ animation: 'fadeInBackdrop 200ms ease-out forwards' }}
            onClick={() => setShowForm(false)}
          />

          {/* Panel */}
          <div
            ref={formRef}
            role="dialog"
            aria-modal="true"
            aria-label={copy.title}
            className="relative pointer-events-auto w-full sm:w-[360px] sm:mr-6 sm:mb-6 bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
            style={{ animation: 'waSlideUp 300ms ease-out forwards' }}
          >
            {/* Header verde WhatsApp */}
            <div className="bg-[#25D366] px-5 pt-5 pb-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-tight">{copy.title}</h3>
                  <p className="text-white/80 text-xs mt-0.5 leading-snug max-w-[240px]">{copy.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="text-white/70 hover:text-white p-1 -mt-1 -mr-1 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-5 pt-4 pb-5 space-y-3">
              {/* Nombre */}
              <div>
                <label htmlFor="wa-nombre" className="text-xs font-medium text-slate-600 mb-1 block">
                  {copy.nameLabel}
                </label>
                <input
                  id="wa-nombre"
                  type="text"
                  value={nombre}
                  onChange={e => { setNombre(e.target.value); setErrors(prev => ({ ...prev, nombre: false })); }}
                  placeholder={copy.namePlaceholder}
                  autoComplete="name"
                  className={`w-full px-3.5 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 ${
                    errors.nombre
                      ? 'border-red-300 bg-red-50'
                      : 'border-slate-200 bg-slate-50 focus:border-[#25D366]'
                  }`}
                />
              </div>

              {/* Telefono */}
              <div>
                <label htmlFor="wa-telefono" className="text-xs font-medium text-slate-600 mb-1 block">
                  {copy.phoneLabel}
                </label>
                <input
                  id="wa-telefono"
                  type="tel"
                  inputMode="numeric"
                  value={telefono}
                  onChange={e => { setTelefono(formatPhone(e.target.value)); setErrors(prev => ({ ...prev, telefono: false })); }}
                  placeholder={copy.phonePlaceholder}
                  autoComplete="tel"
                  className={`w-full px-3.5 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 ${
                    errors.telefono
                      ? 'border-red-300 bg-red-50'
                      : 'border-slate-200 bg-slate-50 focus:border-[#25D366]'
                  }`}
                />
              </div>

              {/* Privacy note */}
              <p className="text-[11px] text-slate-400 leading-snug">{copy.privacy}</p>

              {/* CTA principal */}
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-colors disabled:opacity-60 active:scale-[0.98]"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {copy.sending}
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {copy.cta}
                  </>
                )}
              </button>

              {/* Skip */}
              <button
                type="button"
                onClick={handleSkip}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium"
              >
                {copy.skip}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { pushGTMEvent } from '@/lib/gtm';
import { X, Send, User, Phone, Lock, ArrowRight } from 'lucide-react';

const WA_PHONE = '19082280973';

type InsKey =
  | 'home' | 'auto' | 'auto_comercial' | 'mascotas' | 'vida'
  | 'salud' | 'dental' | 'comercial' | 'paquete' | 'umbrella';

const INS_LABELS: Record<InsKey, { es: string; en: string }> = {
  home:           { es: 'General',        en: 'General' },
  auto:           { es: 'Auto',           en: 'Auto' },
  auto_comercial: { es: 'Auto Comercial', en: 'Commercial Auto' },
  mascotas:       { es: 'Mascotas',       en: 'Pet' },
  vida:           { es: 'Vida',           en: 'Life' },
  salud:          { es: 'Salud',          en: 'Health' },
  dental:         { es: 'Dental',         en: 'Dental' },
  comercial:      { es: 'Comercial',      en: 'Commercial' },
  paquete:        { es: 'Paquete',        en: 'Bundle' },
  umbrella:       { es: 'Umbrella',       en: 'Umbrella' },
};

const MESSAGES: Record<InsKey, { es: string; en: string }> = {
  home:           { es: 'Hola, vi tu pagina y me interesa cotizar un seguro. Podemos hablar?', en: "Hi, I saw your website and I'd like to get an insurance quote. Can we talk?" },
  auto:           { es: 'Hola, vi tu pagina de seguro de auto y quiero cotizar. Tienes disponibilidad?', en: "Hi, I saw your car insurance page and I'd like a quote. Are you available?" },
  mascotas:       { es: 'Hola, vi tu pagina de seguro de mascotas y quiero cotizar para mi mascota', en: "Hi, I saw your pet insurance page and I'd like a quote for my pet" },
  vida:           { es: 'Hola, vi tu pagina de seguro de vida y me interesa explorar opciones', en: "Hi, I saw your life insurance page and I'd like to explore my options" },
  salud:          { es: 'Hola, vi tu pagina de seguro de salud y quiero comparar planes', en: "Hi, I saw your health insurance page and I'd like to compare plans" },
  dental:         { es: 'Hola, vi tu pagina de seguro dental y me interesa cotizar', en: "Hi, I saw your dental insurance page and I'd like a quote" },
  comercial:      { es: 'Hola, tengo un negocio y vi tu pagina de seguro comercial. Podemos hablar?', en: "Hi, I own a business and saw your commercial insurance page. Can we talk?" },
  auto_comercial: { es: 'Hola, uso mi vehiculo para trabajar y vi tu pagina de seguro. Me asesoras?', en: "Hi, I use my vehicle for work and saw your commercial auto page. Can you help?" },
  paquete:        { es: 'Hola, me interesa un paquete casa + auto. Vi tu pagina y quiero cotizar', en: "Hi, I'm interested in a home + auto bundle. I saw your page and want a quote" },
  umbrella:       { es: 'Hola, vi tu pagina de proteccion extra y quiero saber mas sobre umbrella', en: "Hi, I saw your extra protection page and want to learn about umbrella coverage" },
};

const COPY = {
  es: {
    headerName: 'Maria Fernanda',
    headerStatus: 'En linea',
    greeting: 'Hola! Para darte una mejor atencion, dejame tu nombre y numero.',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    phoneLabel: 'Telefono',
    phonePlaceholder: '(555) 123-4567',
    cta: 'Continuar a WhatsApp',
    skip: 'Ir directo a WhatsApp',
    privacy: 'Tus datos son privados y seguros',
    sending: 'Enviando...',
  },
  en: {
    headerName: 'Maria Fernanda',
    headerStatus: 'Online',
    greeting: 'Hi! To give you better service, leave me your name and number.',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    phoneLabel: 'Phone',
    phonePlaceholder: '(555) 123-4567',
    cta: 'Continue to WhatsApp',
    skip: 'Go directly to WhatsApp',
    privacy: 'Your info is private and secure',
    sending: 'Sending...',
  },
};

/* ── WhatsApp SVG icon (reusable, sized via className) ────────────── */
function WaIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

  const [quoteOpen, setQuoteOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<{ nombre?: boolean; telefono?: boolean }>({});
  const panelRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const message = encodeURIComponent(MESSAGES[insType][lang]);
  const waUrl = `https://wa.me/${WA_PHONE}?text=${message}`;

  const ariaLabel = lang === 'en' ? 'Chat on WhatsApp' : 'Chatea por WhatsApp';

  /* Observar QuoteModal */
  useEffect(() => {
    const obs = new MutationObserver(() => {
      setQuoteOpen(document.body.dataset.quoteOpen === 'true');
    });
    obs.observe(document.body, { attributes: true, attributeFilter: ['data-quote-open'] });
    return () => obs.disconnect();
  }, []);

  /* Focus nombre al abrir */
  useEffect(() => {
    if (showForm) {
      setTimeout(() => nameRef.current?.focus(), 350);
    }
  }, [showForm]);

  /* Escape */
  useEffect(() => {
    if (!showForm) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setShowForm(false); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [showForm]);

  /* Click outside */
  useEffect(() => {
    if (!showForm) return;
    const h = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setShowForm(false);
    };
    const t = setTimeout(() => document.addEventListener('mousedown', h), 100);
    return () => { clearTimeout(t); document.removeEventListener('mousedown', h); };
  }, [showForm]);

  function handleButtonClick() {
    pushGTMEvent({ event: 'whatsapp_click', source: 'floating_button', insurance_type: insType, page_lang: lang, page_path: pathname });
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
    const errs: typeof errors = {};
    if (!nombre.trim()) errs.nombre = true;
    if (telefono.replace(/\D/g, '').length < 10) errs.telefono = true;
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSending(true);
    const phoneDigits = telefono.replace(/\D/g, '');
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
          detalles: JSON.stringify({ canal: 'WhatsApp', pagina_origen: pathname, idioma: lang, tipo_seguro_key: insType }),
          lead_score: 60,
        }),
      });
      pushGTMEvent({ event: 'whatsapp_lead_captured', source: 'whatsapp_mini_form', insurance_type: insType, page_lang: lang });
    } catch { /* enviar a WA igual */ }
    setSending(false);
    goToWhatsApp();
  }

  function handleSkip() {
    pushGTMEvent({ event: 'whatsapp_skip_form', source: 'whatsapp_mini_form', insurance_type: insType, page_lang: lang });
    goToWhatsApp();
  }

  return (
    <>
      {/* ── Floating button ─────────────────────────────────────────────── */}
      <button
        onClick={handleButtonClick}
        aria-label={ariaLabel}
        className={`fixed bottom-20 md:bottom-6 right-5 z-50 group${quoteOpen ? ' hidden md:block' : ''}${showForm ? ' pointer-events-none opacity-0' : ''}`}
        style={{ transition: 'opacity 200ms' }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <span className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
          <WaIcon className="w-7 h-7 text-white" />
        </span>
      </button>

      {/* ── Chat widget panel ───────────────────────────────────────────── */}
      {showForm && (
        <div className="fixed inset-0 z-[60] pointer-events-none">
          {/* Backdrop */}
          <div
            className="absolute inset-0 pointer-events-auto bg-black/25 backdrop-blur-[2px]"
            style={{ animation: 'fadeInBackdrop 200ms ease-out forwards' }}
            onClick={() => setShowForm(false)}
          />

          {/* Panel container — bottom-right on sm+, full-width sheet on mobile */}
          <div className="absolute inset-x-0 bottom-0 sm:inset-auto sm:bottom-6 sm:right-5 flex justify-center sm:justify-end pointer-events-auto">
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label={copy.headerName}
              className="w-full sm:w-[370px] max-h-[calc(100dvh-24px)] sm:max-h-[calc(100dvh-48px)] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.16)]"
              style={{ animation: 'waSlideUp 280ms cubic-bezier(0.16,1,0.3,1) forwards' }}
            >
              {/* ── Header — WhatsApp Business style ─────────────────── */}
              <div className="bg-[#075E54] px-4 py-3.5 flex items-center gap-3 shrink-0">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full bg-[#128C7E] flex items-center justify-center ring-2 ring-white/10">
                    <span className="text-white font-bold text-sm">MF</span>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full ring-2 ring-[#075E54]" />
                </div>
                {/* Name + status */}
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-[15px] leading-tight truncate">{copy.headerName}</p>
                  <p className="text-emerald-300 text-xs mt-0.5">{copy.headerStatus}</p>
                </div>
                {/* Close */}
                <button
                  onClick={() => setShowForm(false)}
                  className="text-white/60 hover:text-white transition-colors p-1.5 -mr-1 rounded-full hover:bg-white/10"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* ── Chat body — WA background texture ───────────────── */}
              <div
                className="flex-1 overflow-y-auto px-4 py-5"
                style={{
                  backgroundColor: '#ECE5DD',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cec4' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                {/* Chat bubble — greeting message */}
                <div className="max-w-[85%]">
                  <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                    <p className="text-[14px] text-slate-700 leading-relaxed">{copy.greeting}</p>
                    <p className="text-[10px] text-slate-400 mt-1.5 text-right">
                      {new Date().toLocaleTimeString(lang === 'es' ? 'es' : 'en', { hour: '2-digit', minute: '2-digit', hour12: true })}
                    </p>
                  </div>
                </div>

                {/* Form as "reply card" */}
                <div className="mt-4">
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="px-4 pt-4 pb-3 space-y-3">
                      {/* Name input */}
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 pointer-events-none" />
                        <input
                          ref={nameRef}
                          id="wa-nombre"
                          type="text"
                          value={nombre}
                          onChange={e => { setNombre(e.target.value); setErrors(p => ({ ...p, nombre: false })); }}
                          placeholder={copy.namePlaceholder}
                          autoComplete="name"
                          className={`w-full pl-10 pr-3 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.nombre
                              ? 'bg-red-50 border border-red-200 focus:ring-red-200'
                              : 'bg-slate-50 border border-slate-100 focus:ring-emerald-100 focus:border-emerald-300 focus:bg-white'
                          }`}
                        />
                      </div>

                      {/* Phone input */}
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 pointer-events-none" />
                        <input
                          id="wa-telefono"
                          type="tel"
                          inputMode="numeric"
                          value={telefono}
                          onChange={e => { setTelefono(formatPhone(e.target.value)); setErrors(p => ({ ...p, telefono: false })); }}
                          placeholder={copy.phonePlaceholder}
                          autoComplete="tel"
                          className={`w-full pl-10 pr-3 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.telefono
                              ? 'bg-red-50 border border-red-200 focus:ring-red-200'
                              : 'bg-slate-50 border border-slate-100 focus:ring-emerald-100 focus:border-emerald-300 focus:bg-white'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Privacy line */}
                    <div className="px-4 pb-3 flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-slate-300 shrink-0" />
                      <p className="text-[11px] text-slate-400 leading-snug">{copy.privacy}</p>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold transition-all disabled:opacity-60 active:bg-[#1aad54]"
                    >
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{copy.sending}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{copy.cta}</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* ── Footer — skip link ──────────────────────────────── */}
              <div className="bg-white border-t border-slate-100 px-4 py-3 shrink-0">
                <button
                  type="button"
                  onClick={handleSkip}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-[13px] text-slate-400 hover:text-[#25D366] transition-colors font-medium group/skip"
                >
                  <span>{copy.skip}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/skip:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

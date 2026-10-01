'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'mf_cookie_consent';

export default function CookieConsent({ lang }: { lang: string }) {
  const [visible, setVisible] = useState(false);
  const isEn = lang === 'en';

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch { setVisible(true); }
  }, []);

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ decision: 'accepted', ts: new Date().toISOString() })); } catch {}
    setVisible(false);
  }

  function decline() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ decision: 'declined', ts: new Date().toISOString() })); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-white/10 px-4 py-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
          {isEn
            ? <>We use cookies and tracking technologies (including Google Analytics and Meta Pixel) to improve our services and run advertising campaigns. Non-essential cookies require your consent under applicable privacy laws. <Link href="/en/privacidad" className="underline hover:text-white">Privacy Policy</Link></>
            : <>Usamos cookies y tecnologías de seguimiento (incluyendo Google Analytics y Meta Pixel) para mejorar nuestros servicios y mostrar publicidad. Las cookies no esenciales requieren tu consentimiento. <Link href="/es/privacidad" className="underline hover:text-white">Política de Privacidad</Link></>
          }
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button onClick={decline} className="text-xs text-slate-400 hover:text-white transition-colors px-3 py-2">
            {isEn ? 'Decline' : 'Rechazar'}
          </button>
          <button onClick={accept} className="text-xs bg-white text-slate-900 font-semibold px-4 py-2 rounded-xl hover:bg-slate-100 transition-colors">
            {isEn ? 'Accept' : 'Aceptar'}
          </button>
        </div>
      </div>
    </div>
  );
}

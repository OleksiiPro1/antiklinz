'use client';

import { useEffect, useState } from 'react';

const COOKIE_NAME = 'zv_cc'; // zenvara cookie consent
const ONE_YEAR = 60 * 60 * 24 * 365;

function hasConsentCookie() {
  if (typeof document === 'undefined') return true;
  return document.cookie.split('; ').some((c) => c.startsWith(`${COOKIE_NAME}=`));
}

function setConsentCookie() {
  if (typeof document === 'undefined') return;
  const secure =
    typeof window !== 'undefined' && window.location.protocol === 'https:' ? 'Secure; ' : '';
  document.cookie = `${COOKIE_NAME}=1; Max-Age=${ONE_YEAR}; Path=/; SameSite=Lax; ${secure}`;
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!hasConsentCookie()) setShow(true);
  }, []);

  const accept = () => {
    setConsentCookie();
    setShow(false);
    try {
      window.dispatchEvent(new CustomEvent('cookie-consent-accepted'));
    } catch {}
  };

  if (!show) return null;

  return (
    <div
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="rounded-2xl border border-slate-200 bg-white/95 backdrop-blur p-4 md:p-5 shadow-xl ring-1 ring-black/5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Текст */}
            <div className="text-sm text-slate-700 md:pr-6">
              <strong className="text-slate-900">Cookies:</strong>{' '}
              Wir verwenden ausschließlich technisch notwendige Cookies,
              um grundlegende Funktionen dieser Website zu ermöglichen.
              Details finden Sie in unserer{' '}
              <a
                href="/impressum"
                className="font-medium text-[#1F3B4D] underline underline-offset-2 hover:no-underline"
              >
                Datenschutzerklärung
              </a>.
            </div>

            {/* Кнопки */}
            <div className="flex items-center gap-2">
              <a
                href="/impressum"
                className="inline-flex items-center justify-center rounded-xl px-3.5 py-2 text-sm font-semibold text-[#1F3B4D] ring-1 ring-slate-300 hover:bg-slate-50 whitespace-nowrap shrink-0 leading-none"
              >
                Mehr erfahren
              </a>

              <button
                type="button"
                onClick={accept}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#1F3B4D] hover:opacity-90"
              >
                Verstanden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

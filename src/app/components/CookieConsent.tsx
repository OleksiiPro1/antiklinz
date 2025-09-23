'use client';

import { useEffect, useState } from 'react';

const COOKIE_NAME = 'zv_cc'; // zenvara cookie consent
const ONE_YEAR = 60 * 60 * 24 * 365;

// Brand (AntikLinz)
const BURGUNDY = '#7B2E2E';
const GOLD     = '#C2A14D';
const GREEN    = '#2E4B3C';
const BASE     = '#F7F3ED';
const GRAPHITE = '#2B2B2B';

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
        <div
          className="rounded-2xl shadow-xl backdrop-blur p-4 md:p-5 ring-1"
          style={{
            background: 'rgba(255,255,255,0.92)',
            border: `1px solid ${GOLD}55`,
            color: GRAPHITE,
            boxShadow: '0 10px 30px rgba(0,0,0,.08)',
          }}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Текст */}
            <div className="text-sm md:pr-6">
              <strong style={{ color: BURGUNDY }}>Cookies:</strong>{' '}
              Wir verwenden ausschließlich technisch notwendige Cookies, damit
              grundlegende Funktionen dieser Website zuverlässig arbeiten
              (z.&nbsp;B. Navigation, Formular-Handling). Mehr Informationen finden Sie in unserer{' '}
              <a
                href="/impressum"
                className="font-medium underline underline-offset-2 hover:opacity-90"
                style={{ color: GREEN, textDecorationColor: GOLD }}
              >
                Datenschutzerklärung
              </a>
              .
            </div>

            {/* Кнопки */}
            <div className="flex items-center gap-2">
              <a
                href="/impressum"
                className="inline-flex items-center justify-center rounded-xl px-3.5 py-2 text-sm font-semibold whitespace-nowrap shrink-0 leading-none transition"
                style={{
                  color: GRAPHITE,
                  background: '#fff',
                  border: `1px solid ${GOLD}66`,
                }}
              >
                Mehr erfahren
              </a>

              <button
                type="button"
                onClick={accept}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition hover:opacity-95"
                style={{ background: BURGUNDY, color: '#fff' }}
              >
                Einverstanden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

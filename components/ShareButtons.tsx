'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

// Палитра из твоего футера
const PLUM = '#4A235A';
const CORAL = '#FF6F61';
const MINT  = '#A8E6CF';
const TEAL  = '#006D77';

// Базовый URL — возьми из env, чтобы работало и на проде, и локально
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  (typeof window !== 'undefined' ? window.location.origin : 'https://messielinz.at');

// Опционально: общий заголовок для шеринга (можешь поправить под страницу)
const DEFAULT_TITLE = 'Messie & Entrümpelung in Linz — diskret, respektvoll, ergebnisorientiert.';

type Props = {
  title?: string;           // текст для шаринга (если не передать — возьмём DEFAULT_TITLE)
  className?: string;       // чтобы легко позиционировать в футере
  small?: boolean;          // компактный режим
};

export default function ShareButtons({ title, className, small = true }: Props) {
  const pathname = usePathname();

  const { pageUrl, encodedUrl, encodedText } = useMemo(() => {
    const pageUrl = `${BASE_URL}${pathname || ''}`;
    return {
      pageUrl,
      encodedUrl: encodeURIComponent(pageUrl),
      encodedText: encodeURIComponent(title || DEFAULT_TITLE),
    };
  }, [pathname, title]);

  const links = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: 'Auf Facebook teilen',
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      label: 'Per WhatsApp weiterleiten',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      label: 'Auf LinkedIn teilen',
    },
  ];

  return (
    <div
      className={className}
      aria-label="Seite teilen"
      style={{ color: PLUM }}
    >
      <div
        className={`flex flex-wrap items-center gap-2 ${small ? 'text-xs' : 'text-sm'}`}
      >
        <span className="opacity-80">Teilen:</span>

        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            title={l.label}
            className="inline-flex items-center rounded-lg px-3 py-1.5 transition"
            style={{
              border: `1px solid ${MINT}`,
              color: TEAL,
              background: 'white',
            }}
          >
            {l.name}
          </a>
        ))}
      </div>

      
    </div>
  );
}

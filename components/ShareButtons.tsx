'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

const PLUM = '#4A235A';
const MINT  = '#A8E6CF';
const TEAL  = '#006D77';

type Props = {
  siteUrl: string;          // <- ОБЯЗАТЕЛЬНО ПРИХОДИТ ИЗ ФУТЕРА
  title?: string;
  className?: string;
  small?: boolean;
};

export default function ShareButtons({ siteUrl, title, className, small = true }: Props) {
  const pathname = usePathname();

  const { pageUrl, encodedUrl, encodedText } = useMemo(() => {
    const base = siteUrl.replace(/\/$/, '');
    const path = pathname || '/';
    const pageUrl = `${base}${path}`;
    return {
      pageUrl,
      encodedUrl: encodeURIComponent(pageUrl),
      encodedText: encodeURIComponent(
        title || 'Messie & Entrümpelung in Linz — diskret, respektvoll, ergebnisorientiert.'
      ),
    };
  }, [siteUrl, pathname, title]);

  const links = [
    { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, label: 'Auf Facebook teilen' },
    { name: 'WhatsApp', href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`, label: 'Per WhatsApp weiterleiten' },
    { name: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, label: 'Auf LinkedIn teilen' },
  ];

  return (
    <div className={className} aria-label="Seite teilen" style={{ color: PLUM }}>
      <div className={`flex flex-wrap items-center gap-2 ${small ? 'text-xs' : 'text-sm'}`}>
        <span className="opacity-80">Teilen:</span>
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            title={l.label}
            className="inline-flex items-center rounded-lg px-3 py-1.5 transition"
            style={{ border: `1px solid ${MINT}`, color: TEAL, background: 'white' }}
          >
            {l.name}
          </a>
        ))}
      </div>

  
    </div>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/blog', label: 'Blog' },
  { href: '/impressum', label: 'Impressum' },
];

const ACCENT = '#b38b5999';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] mb-4 border-b border-[#b38b5999] bg-white/90 backdrop-blur">
      {/* Wrapper */}
      <div className="mx-auto w-full max-w-[1150px] px-4">
        <div className="flex h-16 items-center justify-between md:h-18 lg:h-20">
          {/* Логотип — компактный */}
          <Link href="/" className="flex items-center gap-2">
            <span className="relative block shrink-0
                             h-8  w-28
                             sm:h-9 sm:w-32
                             md:h-10 md:w-36
                             lg:h-12 lg:w-40
                             xl:h-12 xl:w-44">
              <Image
                src="/images/logo.webp"
                alt="Antikexperte.at"
                fill
                priority
                className="object-contain"
                sizes="(min-width:1280px) 11rem, (min-width:1024px) 10rem, (min-width:768px) 9rem, (min-width:640px) 8rem, 7rem"
              />
            </span>
          </Link>

          {/* Десктоп-меню */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`uppercase tracking-wide text-[13px] lg:text-sm transition-colors
                    ${active ? 'text-gold' : 'text-black hover:text-gold'}
                    ${active ? 'underline' : 'hover:underline'}
                    underline-offset-[6px] decoration-1`}
                  style={{ textDecorationColor: ACCENT }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Бургер */}
          <button
            aria-label="Menü öffnen/schließen"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white/90 shadow-sm relative"
          >
            <span className={`absolute block h-0.5 w-6 rounded bg-black transition-transform duration-300 ${open ? 'translate-y-0 rotate-45' : '-translate-y-2'}`} />
            <span className={`absolute block h-0.5 w-6 rounded bg-black transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute block h-0.5 w-6 rounded bg-black transition-transform duration-300 ${open ? 'translate-y-0 -rotate-45' : 'translate-y-2'}`} />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        aria-hidden={!open}
        className={`md:hidden overflow-hidden border-t border-gray-200 bg-white/95 backdrop-blur transition-all duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto w-full max-w-[1150px] px-4 py-4 flex flex-col space-y-4">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`uppercase tracking-wide text-sm transition-colors
                  ${active ? 'text-gold' : 'text-black hover:text-gold'}
                  ${active ? 'underline' : 'hover:underline'}
                  underline-offset-[6px] decoration-1`}
                style={{ textDecorationColor: ACCENT }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

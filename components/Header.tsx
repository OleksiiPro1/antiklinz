'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Brand palette
const PLUM = '#4A235A';       // headings / text-strong
const CORAL = '#FF6F61';      // accents / active
const MINT = '#A8E6CF';       // soft highlight
const SAND = '#F5E6CC';       // subtle bg
const TEAL = '#006D77';       // hover / emphasis

const links = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen1', label: 'Leistungen' },
  { href: '/ueber-uns1', label: 'Über uns' },
  { href: '/blog1', label: 'Blog' },
  { href: '/kontakt1', label: 'Kontakt' },
  { href: '/impressum', label: 'Impressum' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // tiny scroll shadow for clarity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] mb-4 border-b bg-white/90 backdrop-blur
        ${scrolled ? 'shadow-sm' : ''}`}
      style={{ borderColor: MINT }}
    >
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 rounded-lg bg-white px-3 py-2 text-sm"
        style={{ color: PLUM, outlineColor: CORAL }}
      >
        Zum Inhalt springen
      </a>

      {/* Wrapper */}
      <div className="mx-auto w-full max-w-[1150px] px-4">
        <div className="flex h-16 items-center justify-between md:h-18 lg:h-20">
          {/* Logo (transparent background expected) */}
          <Link href="/" className="flex items-center gap-3" aria-label="messielinz.at – Startseite">
            <span className="relative block shrink-0
                             h-8  w-32
                             sm:h-9 sm:w-36
                             md:h-10 md:w-40
                             lg:h-12 lg:w-44">
              <Image
                src="/images/logo-messielinz.webp"   // PNG/SVG на прозрачном фоне
                alt="messielinz.at Logo"
                fill
                priority
                className="object-contain"
                sizes="(min-width:1280px) 11rem, (min-width:1024px) 10rem, (min-width:768px) 9rem, (min-width:640px) 8rem, 7rem"
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={`uppercase tracking-wide text-[13px] lg:text-sm transition-colors underline-offset-[6px] decoration-2`}
                  style={{
                    color: active ? CORAL : PLUM,
                    textDecorationColor: active ? CORAL : 'transparent',
                  }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Burger */}
          <button
            aria-label="Menü öffnen/schließen"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border bg-white/90 shadow-sm relative"
            style={{ borderColor: MINT }}
          >
            <span
              className={`absolute block h-0.5 w-6 rounded transition-transform duration-300`}
              style={{ background: PLUM, transform: open ? 'translateY(0) rotate(45deg)' : 'translateY(-8px)' }}
            />
            <span
              className={`absolute block h-0.5 w-6 rounded transition-opacity duration-200`}
              style={{ background: PLUM, opacity: open ? 0 : 1 }}
            />
            <span
              className={`absolute block h-0.5 w-6 rounded transition-transform duration-300`}
              style={{ background: PLUM, transform: open ? 'translateY(0) rotate(-45deg)' : 'translateY(8px)' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        aria-hidden={!open}
        className={`md:hidden overflow-hidden border-t bg-white/95 backdrop-blur transition-all duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ borderColor: MINT }}
      >
        <nav className="mx-auto w-full max-w-[1150px] px-4 py-4 flex flex-col space-y-4">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active ? 'page' : undefined}
                className="uppercase tracking-wide text-sm transition-colors underline-offset-[6px] decoration-2"
                style={{
                  color: active ? CORAL : PLUM,
                  textDecorationColor: active ? CORAL : 'transparent',
                }}
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

import Link from 'next/link';
import Image from 'next/image';

// Brand palette
const PLUM = '#4A235A';
const CORAL = '#FF6F61';
const MINT = '#A8E6CF';
const SAND = '#F5E6CC';
const TEAL = '#006D77';

const CONTAINER = 'mx-auto w-full max-w-[1150px] px-4';

export default function Footer() {
  return (
    <footer
      className="mt-8 border-t"
      style={{
        borderColor: MINT,
        backgroundImage:
          `linear-gradient(180deg, rgba(255,255,255,.85), rgba(245,230,204,.95)), radial-gradient(60rem 20rem at 10% -10%, ${MINT}22, transparent), radial-gradient(60rem 20rem at 90% 110%, ${CORAL}14, transparent)`,
      }}
    >
      <div className={`${CONTAINER} py-10`}>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="relative h-10 w-44 mb-4">
              <Image
                src="/images/logo-messielinz.webp"   // прозрачный фон
                alt="messielinz.at Logo"
                fill
                className="object-contain"
                sizes="176px"
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
              Messie & Entrümpelung in Linz und Umgebung – diskret, zuverlässig und schnell.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-3 text-base font-semibold" style={{ color: PLUM }}>Sitemap</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Startseite' },
                { href: '/ueber-uns', label: 'Über uns' },
                { href: '/leistungen', label: 'Leistungen' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:underline underline-offset-4"
                    style={{ color: PLUM, textDecorationColor: CORAL }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-base font-semibold" style={{ color: PLUM }}>Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li style={{ color: PLUM }}>Linz & Umgebung</li>
              <li>
                <a href="tel:+436766135140" className="hover:underline" style={{ color: TEAL }}>
                  +436766135140
                </a>
              </li>
              <li>
                <a href="mailto:hello@messielinz.at" className="hover:underline" style={{ color: TEAL }}>
                  hello@messielinz.at
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link
  href="https://wa.me/436766135140"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition"
  style={{ background: '#25D366', color: 'white' }}
>
  WhatsApp Chat starten
</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t pt-6 md:flex-row"
             style={{ borderColor: MINT }}>
          <p className="text-xs" style={{ color: PLUM }}>
            © {new Date().getFullYear()} messielinz.at – Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs">
            
            <Link href="/impressum" className="hover:underline" style={{ color: PLUM, textDecorationColor: CORAL }}>
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

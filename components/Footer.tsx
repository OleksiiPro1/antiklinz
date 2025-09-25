// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
// серверный компонент
import ShareButtons from "./ShareButtons";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://antiklinz.at";

// Brand palette (AntikLinz)

  const BURGUNDY = "#7B2E2E";
  const GOLD     = "#C2A14D";
  const GREEN    = "#2E4B3C";
  const BASE     = "#F7F3ED";
  const GRAPHITE = "#2B2B2B";

  const EMAIL = "info@antiklinz.at";
  const PHONE = "+43 676 720 26 23";

  const circle =
    "w-14 h-14 rounded-full border shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition will-change-transform";

  const bgStyle: React.CSSProperties = {
    background: `linear-gradient(145deg, ${BASE} 10%, ${GOLD} 90%)`,
    borderColor: `white`,
    boxShadow: `0 8px 20px -6px ${GRAPHITE}55`,
  };

const CONTAINER = "mx-auto w-full max-w-[1150px] px-4";

export default function Footer() {
  return (
    <footer
      aria-label="Seitenfuß"
      className="mt-12"
      style={{
        // светлый уникальный фон: тонкий бумажный градиент + золотистые «ореолы»
        backgroundImage:
          `linear-gradient(180deg, rgba(255,255,255,.94), ${BASE}),
           radial-gradient(70rem 26rem at -10% 0%, ${GOLD}1F, transparent),
           radial-gradient(70rem 26rem at 110% 100%, ${GREEN}14, transparent)`,
        borderTop: `1px solid ${GOLD}55`,
      }}
    >
      <div className={`${CONTAINER} py-10`}>
        {/* Верхняя полоса с декоративным элементом */}
        <div className="flex items-center justify-center">
          <div
            className="h-px w-full max-w-[680px] relative"
            style={{ background: `${GOLD}66` }}
          >
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs"
              style={{ background: "#fff", border: `1px solid ${GOLD}66`, color: BURGUNDY }}
            >
              AntikLinz
            </span>
          </div>
        </div>

        {/* Основная сетка */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="relative h-10 w-48 mb-4">
              <Image
                src="/images/logo.webp" // логотип с прозрачным фоном
                alt="AntikLinz Logo"
                fill
                className="object-contain"
                sizes="192px"
                priority
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: GRAPHITE }}>
              Verlassenschaften, Nachlassankauf & Entrümpelung in Linz und Oberösterreich —
              diskret, fair und termintreu.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="mb-3 text-base font-semibold" style={{ color: BURGUNDY }}>
              Sitemap
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Startseite" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/impressum", label: "Impressum" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition hover:opacity-90 underline underline-offset-4"
                    style={{ color: GRAPHITE, textDecorationColor: GOLD }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-3 text-base font-semibold" style={{ color: BURGUNDY }}>
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm">
              <li style={{ color: GRAPHITE }}>Linz, Oberösterreich</li>
              <li>
                <a
                  href="tel:+436767202623"
                  className="hover:underline"
                  style={{ color: GREEN }}
                >
                  +43 676 720 26 23
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@antiklinz.at"
                  className="hover:underline"
                  style={{ color: GREEN }}
                >
                  info@antiklinz.at
                </a>
              </li>
            </ul>

            {/* Быстрые действия */}
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="mailto:info@antiklinz.at?subject=Anfrage%20AntikLinz"
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition hover:opacity-95"
                style={{ background: BURGUNDY, color: "#fff" }}
              >
                Per E-Mail anfragen
              </Link>
              <Link
                href="tel:+436767202623"
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border transition"
                style={{ borderColor: GOLD, color: GRAPHITE }}
              >
                Jetzt anrufen
              </Link>
            </div>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div
          className="mt-10 flex flex-col items-start justify-between gap-4 border-t pt-6 md:flex-row"
          style={{ borderColor: `${GOLD}55` }}
        >
          <p className="text-xs" style={{ color: GRAPHITE }}>
            © {new Date().getFullYear()} antiklinz.at — Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-4 text-xs">
            {/* Кнопки шаринга (как в твоём примере) */}
            <ShareButtons siteUrl={SITE_URL} small className="ml-2" />
          </div>
        </div>
      </div>



              <div
      className="fixed z-[9999] right-4 bottom-24 md:right-8 md:bottom-28 flex flex-col gap-3"
      aria-label="Schnellkontakte"
    >
      {/* Телефон */}
      <a
        href="tel:+436767202623"
        aria-label="Anrufen"
        className={circle}
        style={bgStyle}
      >
        <Image src="/images/phone.svg" alt="Call" width={28} height={28} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/436767202623"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Auf WhatsApp schreiben"
        className={circle}
        style={bgStyle}
      >
        <Image src="/images/whatsapp.png" alt="WhatsApp" width={30} height={30} />
      </a>

      {/* E-Mail */}
      <a
        href={`mailto:${EMAIL}`}
        aria-label="E-Mail schreiben"
        className={circle}
        style={bgStyle}
      >
        <Image src="/images/mailgun.svg" alt="Email" width={25} height={25} />
      </a>
    </div>



    </footer>
  );
}

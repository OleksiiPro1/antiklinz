// app/not-found.tsx  (App Router) 
// или pages/404.tsx при Pages Router
import Link from "next/link";
import Image from "next/image";

const BURGUNDY = "#7B2E2E";
const GOLD     = "#C2A14D";
const GREEN    = "#2E4B3C";
const BASE     = "#F7F3ED";
const GRAPHITE = "#2B2B2B";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hintergrund mit weichen Verläufen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(70rem 50rem at 85% -10%, ${GOLD}22, transparent),
            radial-gradient(60rem 40rem at -10% 110%, ${GREEN}15, transparent),
            ${BASE}
          `,
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 w-full">
        <div
          className="rounded-3xl shadow-lg p-8 sm:p-10 text-center border"
          style={{ background: "rgba(255,255,255,0.9)", borderColor: GOLD }}
        >
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Link href="/" aria-label="Zur Startseite AntikLinz">
              <Image
                src="/images/logo.webp" // прозрачный логотип
                alt="AntikLinz Logo"
                width={240}
                height={60}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Kreis mit 404 */}
          <div
            className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border bg-white"
            style={{ borderColor: GOLD }}
          >
            <span className="text-2xl font-semibold" style={{ color: BURGUNDY }}>
              404
            </span>
          </div>

          <h1
            className="mb-4 text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ color: BURGUNDY }}
          >
            Seite nicht gefunden
          </h1>

          <p
            className="mb-8 text-base md:text-lg leading-relaxed"
            style={{ color: GRAPHITE }}
          >
            Diese Seite existiert nicht mehr oder wurde verschoben.  
            Vielleicht finden Sie die gewünschten Informationen auf unserer Startseite – 
            oder kontaktieren Sie uns direkt für Fragen zu <strong>Antiquitäten</strong>, 
            <strong> Verlassenschaften</strong> oder <strong>Entrümpelungen</strong> in Linz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition"
              style={{
                border: `1px solid ${GOLD}`,
                color: BURGUNDY,
                background: "#fff",
              }}
            >
              Zur Startseite
            </Link>

            <Link
              href="tel:+436767202623"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
              style={{ background: BURGUNDY, color: "white" }}
            >
              +43&nbsp;676&nbsp;720&nbsp;26&nbsp;23 anrufen
            </Link>
          </div>

          <div className="mt-10 mx-auto h-px w-24" style={{ background: GOLD }} />
          <p className="mt-4 text-sm" style={{ color: GRAPHITE, opacity: 0.75 }}>
            Fehlercode: 404 • AntikLinz.at
          </p>
        </div>
      </div>
    </section>
  );
}

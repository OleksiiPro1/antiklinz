// app/not-found.tsx  (или pages/404.tsx при pages Router)
import Link from "next/link";
import Image from "next/image";

const PLUM = "#4A235A";
const CORAL = "#FF6F61";
const MINT  = "#A8E6CF";
const SAND  = "#F5E6CC";
const TEAL  = "#006D77";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Soft brand background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(70rem 50rem at 85% -10%, ${MINT}33, transparent),
            radial-gradient(60rem 40rem at -10% 110%, ${CORAL}18, transparent)
          `,
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 w-full">
        <div
          className="rounded-3xl shadow-xl p-8 sm:p-10 text-center backdrop-blur-md border"
          style={{ background: "rgba(255,255,255,0.8)", borderColor: SAND }}
        >
          {/* ЛОГОТИП */}
          <div className="mb-6 flex justify-center">
            <Link href="/" aria-label="Zur Startseite">
              <Image
                src="/images/logo-messielinz.svg" // прозрачный логотип
                alt="messielinz.at"
                width={220}
                height={56}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Кружок 404 в фирменных цветах */}
          <div
            className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border bg-white"
            style={{ borderColor: MINT }}
          >
            <span className="text-2xl font-semibold" style={{ color: PLUM }}>
              404
            </span>
          </div>

          <h1
            className="mb-4 text-4xl md:text-5xl font-semibold tracking-tight"
            style={{ color: PLUM }}
          >
            Diese Seite gibt’s leider nicht.
          </h1>

          <p
            className="mb-8 text-base md:text-lg leading-relaxed"
            style={{ color: PLUM }}
          >
            Möglicherweise ist der Link veraltet oder wurde verschoben. Kein Stress —
            Sie können zur Startseite zurückkehren oder uns direkt schreiben.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition"
              style={{
                border: `1px solid ${MINT}`,
                color: TEAL,
                background: "white",
              }}
            >
              Zur Startseite
            </Link>

            {/* WhatsApp — сразу чат */}
            <Link
              href="https://wa.me/436766135140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
              style={{ background: "#25D366", color: "white" }}
            >
              WhatsApp&nbsp;Chat starten
            </Link>
          </div>

          <div className="mt-10 mx-auto h-px w-24" style={{ background: SAND }} />
          <p className="mt-4 text-sm" style={{ color: PLUM, opacity: 0.7 }}>
            Fehlercode: 404 • messielinz.at
          </p>
        </div>
      </div>
    </section>
  );
}

// app/leistungen/page.tsx
import Link from "next/link";
import Leistungen from "../components/Leistungen";

// AntikLinz palette
const BURGUNDY = "#7B2E2E";
const GOLD     = "#C2A14D";
const GREEN    = "#2E4B3C";
const BASE     = "#F7F3ED";
const GRAPHITE = "#2B2B2B";

export const metadata = {
  title: "Leistungen in Linz – Verlassenschaften, Nachlassankauf & Entrümpelung | AntikLinz",
  description:
    "AntikLinz: Leistungen in Linz & Oberösterreich – Verlassenschaften, Nachlassankauf, Entrümpelung und Ankauf von Antiquitäten. Kostenlose Besichtigung, Fixpreise, diskret und termintreu.",
};

export default function LeistungenPage() {
  return (
    <main id="main" style={{ background: BASE, color: GRAPHITE }}>
      {/* HERO */}
      <section
        className="relative"
        aria-label="Leistungen in Linz"
        style={{
          backgroundImage: `
            radial-gradient(90rem 40rem at 10% -20%, ${GOLD}22, transparent),
            radial-gradient(80rem 50rem at 110% 60%, ${GREEN}18, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-14 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm"
              style={{ background: `${GREEN}22`, color: GREEN, border: `1px solid ${GOLD}55` }}
            >
              Linz &amp; Oberösterreich • kostenlose Besichtigung
            </span>

            <h1
              className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight"
              style={{ color: BURGUNDY }}
            >
              Leistungen in Linz – Verlassenschaften, Nachlassankauf &amp; Entrümpelung
            </h1>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Diskret, verlässlich und transparent: Wir unterstützen Sie bei{" "}
              <strong>Verlassenschaften</strong>, beim <strong>Nachlassankauf</strong>, der{" "}
              <strong>Entrümpelung</strong> von Wohnung, Haus, Keller und Dachboden sowie beim{" "}
              <strong>Ankauf von Antiquitäten</strong>. Vor Start erhalten Sie einen klaren Fixpreis
              und eine verbindliche Terminvereinbarung – ohne Überraschungen.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="mailto:info@antiklinz.at?subject=Anfrage%20AntikLinz"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                style={{ background: BURGUNDY, color: "#fff" }}
              >
                Kostenlose Besichtigung anfragen
              </Link>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border transition"
                style={{ borderColor: GOLD, color: GRAPHITE, background: "#fff" }}
              >
                Mehr über uns
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="mx-auto w-full max-w-[1150px] px-4 pb-16 md:pb-20">
        {/* тонкая разделительная линия в нашей палитре */}
        <div className="my-8 h-px w-full" style={{ background: `${GOLD}55` }} />

        {/* Сетка услуг из твоего компонента */}
        <Leistungen />

        {/* дополнительный SEO-текст (уникальный) */}
        <div className="mt-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          <p className="mb-6">
            Jede Sammlung und jeder Haushalt hat eine eigene Geschichte. Damit der Prozess für Sie
            ruhig und überschaubar bleibt, arbeiten wir strukturiert, stimmen Zeitfenster klar ab
            und übernehmen auf Wunsch die Schlüsselübergabe. Unser Anspruch: eine saubere,
            termintreue Übergabe – und das sichere Gefühl, dass alles zuverlässig erledigt wurde.
          </p>
          <p>
            Ob vollständige Räumung, gezielte Teilbereiche oder der <strong>Verkauf von Antiquitäten</strong>:
            In Linz und Umgebung sind wir kurzfristig verfügbar, halten Absprachen ein und bleiben
            während des gesamten Ablaufs Ihr direkter Ansprechpartner. So behalten Sie jederzeit die
            Kontrolle über alle Schritte – transparent und ohne versteckte Kosten.
          </p>
        </div>
      </section>

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Startseite",
                item: "https://antiklinz.at/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Leistungen",
                item: "https://antiklinz.at/leistungen",
              },
            ],
          }),
        }}
      />
    </main>
  );
}

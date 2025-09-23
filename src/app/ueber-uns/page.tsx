// app/ueber-uns/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// AntikLinz Palette
const BURGUNDY = "#7B2E2E";
const GOLD     = "#C2A14D";
const GREEN    = "#2E4B3C";
const BASE     = "#F7F3ED";
const GRAPHITE = "#2B2B2B";

export const metadata: Metadata = {
  title: "Über uns – AntikLinz",
  description:
    "AntikLinz – Verlassenschaften, Nachlassankauf, Entrümpelung und Antiquitätenhandel in Linz & Oberösterreich. Diskret, fair und termintreu. Kostenlose Besichtigung.",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-28 pb-12 mx-auto px-6 w-full"
        style={{
          maxWidth: "1150px",
        }}
      >
        <div
          className="rounded-3xl border shadow-sm p-8 md:p-10 bg-white/85 backdrop-blur"
          style={{ borderColor: `${GOLD}66` }}
        >
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm"
            style={{
              background: `${GREEN}1a`,
              color: GREEN,
              border: `1px solid ${GOLD}55`,
            }}
          >
            Linz &amp; Oberösterreich • kostenlose Besichtigung
          </span>

          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mt-3"
            style={{ color: BURGUNDY }}
          >
            Über uns
          </h1>

          <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: GRAPHITE }}>
            AntikLinz steht für seriösen <strong>Antiquitätenhandel</strong> und verlässliche
            Abwicklung rund um <strong>Verlassenschaften</strong>, <strong>Nachlassankauf</strong>
            und <strong>Entrümpelung</strong>. Wir verbinden Fachkenntnis mit ruhigem Auftreten
            und klaren Abläufen – damit Entscheidungen nachvollziehbar, Termine verbindlich und
            Ergebnisse überzeugend sind.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-sm"
              style={{ background: `${GREEN}1f`, color: GREEN, border: `1px solid ${GOLD}55` }}
            >
              Kostenlose Besichtigung
            </span>
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-sm"
              style={{ borderColor: `${GOLD}66`, color: GRAPHITE, background: "#fff" }}
            >
              Fixpreis &amp; klare Abläufe
            </span>
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-sm"
              style={{ borderColor: `${GOLD}66`, color: GRAPHITE, background: "#fff" }}
            >
              Diskret &amp; termintreu
            </span>
          </div>

          {/* BILD statt Video */}
          <figure
            className="mt-8 overflow-hidden rounded-2xl border bg-white"
            style={{ borderColor: `${GOLD}66` }}
          >
            <Image
              src="/images/antiklinz-2.webp"
              alt="AntikLinz – Einblick in die Arbeit mit Antiquitäten und Verlassenschaften"
              width={1200}
              height={720}
              className="w-full h-auto object-cover"
              priority
            />
            <figcaption className="px-4 py-3 text-sm" style={{ color: GRAPHITE }}>
              Einblicke aus Linz: sorgfältige Bewertung, klare Absprachen und eine ruhige, diskrete Umsetzung.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* WER WIR SIND */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: BURGUNDY }}>
            Wer wir sind
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: GRAPHITE }}>
            Wir sind ein Linzer Team mit langjähriger Erfahrung in <strong>Antiquitäten</strong> und
            der strukturierten Abwicklung von <strong>Verlassenschaften</strong>. Uns ist wichtig,
            dass Werte erkannt, Erinnerungsstücke gesichert und Abläufe transparent geplant werden.
            Dabei bleiben wir in jeder Phase ansprechbar und dokumentieren auf Wunsch die Schritte.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: GRAPHITE }}>
            Ob einzelne Objekte oder komplette Haushalte – wir bewerten Möbel, Silber, Porzellan,
            Uhren, Gemälde und Sammlungen fachkundig. Unser Ziel: die bestmögliche Lösung zwischen
            Erhalt, Verkauf und zügiger Übergabe zu finden – immer respektvoll und verbindlich.
          </p>
        </div>
      </section>

      {/* WAS WIR TUN */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: BURGUNDY }}>
            Was wir tun
          </h2>

          <div className="grid gap-6">
            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: `${GOLD}66` }}>
              <h3 className="text-xl font-semibold" style={{ color: BURGUNDY }}>
                Verlassenschaften
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: GRAPHITE }}>
                Geordnete Abwicklung mit klaren Zuständigkeiten: Wir sichern persönliche Stücke,
                sortieren verwertbare Gegenstände und übergeben fristgerecht – diskret und nachvollziehbar.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: `${GOLD}66` }}>
              <h3 className="text-xl font-semibold" style={{ color: BURGUNDY }}>
                Nachlassankauf &amp; Antiquitäten
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: GRAPHITE }}>
                Faire Bewertung und Ankauf von Antiquitäten wie Möbel, Silber, Porzellan, Uhren,
                Gemälden und Sammlungen. Auf Wunsch mit sofortiger Auszahlung und Beleg.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: `${GOLD}66` }}>
              <h3 className="text-xl font-semibold" style={{ color: BURGUNDY }}>
                Entrümpelung &amp; Räumung
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: GRAPHITE }}>
                Strukturierte Räumungen von Wohnung, Haus, Keller oder Dachboden – mit Fixpreis,
                verbindlichen Terminen und besenreiner Übergabe.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: `${GOLD}66` }}>
              <h3 className="text-xl font-semibold" style={{ color: BURGUNDY }}>
                Beratung &amp; Einschätzung
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: GRAPHITE }}>
                Sie sind unsicher, was behalten, verkaufen oder übergeben werden soll? Wir beraten
                transparent und entwickeln einen passenden Plan – Schritt für Schritt.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WO WIR ARBEITEN */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: BURGUNDY }}>
            Wo wir arbeiten
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: GRAPHITE }}>
            Schwerpunkt <strong>Linz</strong> und Umgebung in Oberösterreich. Grenznahe Orte prüfen
            wir nach Rücksprache. Schreiben Sie uns kurz Ihr Anliegen – wir melden uns rasch mit
            Verfügbarkeit und Terminvorschlägen.
          </p>
        </div>
      </section>

      {/* VERSPRECHEN */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="rounded-3xl border bg-white p-6 md:p-8" style={{ borderColor: `${GOLD}66` }}>
          <h2 className="text-3xl font-semibold leading-tight mb-3" style={{ color: BURGUNDY }}>
            Unser Versprechen
          </h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-base leading-relaxed" style={{ color: GRAPHITE }}>
            <li>Transparente Angebote mit Fixpreis – nachvollziehbar und fair.</li>
            <li>Diskrete, ruhige Abwicklung mit klaren Ansprechpartner:innen.</li>
            <li>Respektvoller Umgang mit Erinnerungsstücken und Unterlagen.</li>
            <li>Verlässliche Termine und saubere, termintreue Übergabe.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 mx-auto px-6 w-full text-center" style={{ maxWidth: "1150px" }}>
        <h2 className="text-3xl font-semibold leading-tight" style={{ color: BURGUNDY }}>
          Sprechen wir über Ihr Anliegen
        </h2>
        <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: GRAPHITE }}>
          Kurze Nachricht genügt – wir melden uns rasch mit einer Einschätzung und Terminvorschlägen.
          Auf Wunsch mit Schlüsselübernahme und Fotodokumentation.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="mailto:info@antiklinz.at?subject=Anfrage%20AntikLinz"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
            style={{ background: BURGUNDY, color: "#fff" }}
          >
            Per E-Mail anfragen
          </Link>
          <Link
            href="tel:+436767202623"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition"
            style={{ border: `1px solid ${GOLD}`, color: GRAPHITE, background: "#fff" }}
          >
            +43&nbsp;676&nbsp;720&nbsp;26&nbsp;23 anrufen
          </Link>
        </div>
      </section>
    </>
  );
}

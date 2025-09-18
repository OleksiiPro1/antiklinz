// app/ueber-uns/page.tsx
import type { Metadata } from "next";
import Link from "next/link";


const PLUM = "#4A235A";
const CORAL = "#FF6F61";
const MINT  = "#A8E6CF";
const SAND  = "#F5E6CC";
const TEAL  = "#006D77";

export const metadata: Metadata = {
  title: "Über uns – messielinz.at",
  description:
    "messielinz.at – Messie Hilfe, Wohnungs- & Hausräumungen sowie Verlassenschaften in Linz und Umgebung. Ruhig, respektvoll und planbar mit Fixpreis und kurzfristigen Terminen.",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-12 max-w-6xl mx-auto px-6">
        <div
          className="rounded-3xl border shadow-sm p-8 md:p-10 bg-white/80 backdrop-blur"
          style={{ borderColor: SAND }}
        >
          <p className="text-sm uppercase tracking-wider" style={{ color: TEAL }}>
            messielinz.at
          </p>
          <h1
            className="text-4xl md:text-6xl font-semibold leading-tight mt-2"
            style={{ color: PLUM }}
          >
            Über uns
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
            Wir sind ein Team aus Linz, das Menschen in herausfordernden Wohnsituationen
            zuverlässig unterstützt: mit ruhigem Auftreten, klarer Planung und Lösungen,
            die sich an den Alltag unserer Kund:innen anpassen. Seit Jahren begleiten wir
            Messie Fälle, Wohnungs- &amp; Hausräumungen sowie Verlassenschaften – immer
            respektvoll, diskret und mit verbindlichen Zusagen.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-sm"
              style={{ background: `${MINT}66`, color: TEAL }}
            >
              Kostenlose Besichtigung
            </span>
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-sm"
              style={{ borderColor: SAND, color: PLUM }}
            >
              Fixpreis vor Start
            </span>
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-sm"
              style={{ borderColor: SAND, color: PLUM }}
            >
              Linz &amp; Umgebung
            </span>
          </div>

          {/* BILD */}
          <figure
            className="mt-8 overflow-hidden  shadow-sm bg-white"
            style={{ borderColor: SAND }}
          >
            <video
              className="w-full h-auto shadow-md"
              src="/videos/uber-uns.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <figcaption className="px-4 py-3 text-sm" style={{ color: PLUM }}>
              Einblicke aus Linz: sorgfältige Vorbereitung, klare Absprachen und eine
              ruhige Umsetzung – so arbeiten wir tagtäglich.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* WER WIR SIND */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: PLUM }}>
            Wer wir sind
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
            messielinz.at verbindet praktische Erfahrung mit einem feinen Gespür für sensible
            Situationen. Wir arbeiten mit einem klaren Ablauf, bleiben in jeder Phase
            ansprechbar und achten darauf, dass Entscheidungen nachvollziehbar getroffen werden.
            Unser Anspruch ist es, Räume nicht nur leer zu hinterlassen, sondern wieder
            nutzbar zu machen – als Grundlage für einen entspannten Neuanfang.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
            Ob kleine Wohnung, Haus mit Keller oder ein Nachlass, der geordnet übergeben werden
            soll: Wir planen den Umfang realistisch, stimmen Tempo und Termine mit Ihnen ab
            und halten Zusagen ein. Viele Aufträge betreuen wir mit Schlüsselübernahme, damit
            Sie sich um möglichst wenig kümmern müssen.
          </p>
        </div>
      </section>

      {/* WAS WIR TUN */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: PLUM }}>
            Was wir tun
          </h2>

          <div className="grid gap-6">
            <article
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: SAND }}
            >
              <h3 className="text-xl font-semibold" style={{ color: PLUM }}>
                Messie Hilfe
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: PLUM }}>
                Einfühlsame Begleitung bei stark belasteten Wohnungen: Wir sichern
                Erinnerungsstücke, arbeiten Schritt für Schritt und dokumentieren auf Wunsch
                den Fortschritt. Ziel ist eine spürbare Entlastung und eine Übergabe,
                die sofort nutzbar ist.
              </p>
            </article>

            <article
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: SAND }}
            >
              <h3 className="text-xl font-semibold" style={{ color: PLUM }}>
                Wohnungs- &amp; Hausräumungen
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: PLUM }}>
                Komplettlösungen für Wohnungen und Häuser in Linz und Umgebung.
                Besichtigung, Fixpreis, verlässliche Durchführung und pünktliche Übergabe
                – damit Sie schnell wieder handlungsfähig sind.
              </p>
            </article>

            <article
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: SAND }}
            >
              <h3 className="text-xl font-semibold" style={{ color: PLUM }}>
                Keller, Dachboden &amp; Garage räumen
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: PLUM }}>
                Wir schaffen wieder Platz in Bereichen, die lange ungenutzt waren.
                Geordnetes Vorgehen, kurze Wege und klare Absprachen sorgen dafür,
                dass der Ablauf überschaubar bleibt.
              </p>
            </article>

            <article
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: SAND }}
            >
              <h3 className="text-xl font-semibold" style={{ color: PLUM }}>
                Nachlass / Verlassenschaft
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: PLUM }}>
                Respektvolle Auflösung und geordnete Übergabe. Wir stimmen die Schritte
                mit Angehörigen ab, sichern bedeutsame Stücke und halten Fristen zuverlässig ein.
              </p>
            </article>

            <article
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: SAND }}
            >
              <h3 className="text-xl font-semibold" style={{ color: PLUM }}>
                Büro- &amp; Firmenräumungen
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: PLUM }}>
                Strukturiertes Vorgehen für gewerbliche Flächen: klare Zeitpläne, ruhiges Arbeiten
                und eine saubere Übergabe, damit der Betrieb rasch weiterlaufen kann.
              </p>
            </article>

            <article
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: SAND }}
            >
              <h3 className="text-xl font-semibold" style={{ color: PLUM }}>
                Schnellhilfe bei kurzfristigem Bedarf
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: PLUM }}>
                Wenn es einmal rasch gehen muss, priorisieren wir Ihr Anliegen und finden
                den nächstmöglichen Termin – transparent kommuniziert und verbindlich umgesetzt.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WO WIR ARBEITEN */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: PLUM }}>
            Wo wir arbeiten
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
            Unser Schwerpunkt liegt in <strong>Linz</strong> und den umliegenden Gemeinden
            in Oberösterreich. Bei Bedarf betreuen wir Projekte im erweiterten Umfeld –
            fragen Sie einfach an, wir geben rasch Rückmeldung zu Verfügbarkeit und Terminen.
          </p>
        </div>
      </section>

      {/* VERSPRECHEN */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border bg-white p-6 md:p-8" style={{ borderColor: SAND }}>
          <h2 className="text-3xl font-semibold leading-tight mb-3" style={{ color: PLUM }}>
            Unser Versprechen
          </h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-base leading-relaxed" style={{ color: PLUM }}>
            <li>Transparente Angebote mit Fixpreis – nachvollziehbar und fair.</li>
            <li>Diskretes, ruhiges Arbeiten und klare Zuständigkeiten.</li>
            <li>Respektvoller Umgang mit Erinnerungsstücken und Unterlagen.</li>
            <li>Verlässliche Termine und saubere Übergabe.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: PLUM }}>
            Sprechen wir über Ihr Anliegen
          </h2>
          <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
            Schicken Sie uns eine kurze Nachricht – wir melden uns rasch mit einer Einschätzung
            und Terminvorschlägen. Auf Wunsch übernehmen wir die Abwicklung mit Schlüsselübernahme.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://wa.me/436766135140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
              style={{ background: "#25D366", color: "white" }}
            >
              WhatsApp&nbsp;anfragen
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition"
              style={{ border: `1px solid ${MINT}`, color: TEAL, background: "white" }}
            >
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

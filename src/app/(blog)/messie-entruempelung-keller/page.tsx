// app/messie-entruempelung-keller/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Messie Entrümpelung Keller – strukturiert & zuverlässig | Antikexperte.at",
  description:
    "Diskrete, respektvolle und strukturierte Keller-Entrümpelung in Wien und Umgebung. Kostenlose Foto-Voranfrage, klare Angebote, zügige Umsetzung und sichere Abwicklung.",
};

const ACCENT = "#b38b5999";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="relative rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-xl overflow-hidden"
            style={{ borderColor: ACCENT }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(60rem 60rem at 85% -10%, rgba(179,139,89,.18), rgba(179,139,89,0)), radial-gradient(40rem 40rem at -15% 120%, rgba(33,33,33,.06), rgba(33,33,33,0))",
              }}
            />

            <p className="text-sm uppercase tracking-wider text-gray-600">
              Messie Entrümpelung Wien
            </p>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mt-2 mb-5">
              Messie Entrümpelung Keller – strukturiert & zuverlässig
            </h1>
            <Image
                src="/images/sl-24.webp"
                alt="Keller – Vorher"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
                priority
              />
            <p className="mt-4 text-gray-800 max-w-3xl">
              Diskret, respektvoll und effizient: Wir räumen Keller in Wien (1–23) sowie im Umland
              bis ca. 100&nbsp;km. Klare Abläufe, leise Arbeitsweise und eine schnelle, nachvollziehbare
              Abwicklung – auf Wunsch mit sofortiger Auszahlung und Beleg.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm text-white" style={{ background: ACCENT }}>
                Diskret & taktvoll
              </span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800" style={{ borderColor: ACCENT }}>
                Strukturierte Vorgehensweise
              </span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800" style={{ borderColor: ACCENT }}>
                Flexible Termine (auch abends)
              </span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800" style={{ borderColor: ACCENT }}>
                Wien & Umgebung
              </span>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
                <h3 className="text-lg font-semibold">Kostenlose Foto-Voranfrage</h3>
                <p className="mt-2 text-gray-800">
                  Senden Sie Gesamtansichten und 1–2 Details (WhatsApp/E-Mail). Sie erhalten rasch
                  einen ersten Richtwert und Terminvorschläge.
                </p>
              </div>
              <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
                <h3 className="text-lg font-semibold">Sofortige Abwicklung möglich</h3>
                <p className="mt-2 text-gray-800">
                  Nach Besichtigung: transparentes Angebot, zügige Umsetzung und sichere Wege – mit
                  Beleg und auf Wunsch Echtzeit-Überweisung.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/436766135140"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white"
                style={{ background: ACCENT }}
              >
                Foto-Voranfrage per WhatsApp
              </a>
              <a
                href="mailto:info@antikexperte.at"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
                style={{ borderColor: ACCENT }}
              >
                Termin anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DISKRETION & VORGEHEN IM KELLER */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <article className="rounded-3xl border bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm" style={{ borderColor: ACCENT }}>
              <h2 className="text-3xl font-semibold leading-tight">Diskretion & Feingefühl</h2>
              <p className="mt-3 text-gray-800">
                Wir arbeiten taktvoll und leise – ohne neugierige Blicke, ohne Aufsehen. Die Kommunikation
                bleibt klar und respektvoll, Zugänge werden geschützt, gemeinsame Bereiche sorgfältig abgedeckt.
                Auf Wunsch nutzen wir neutrale Kleidung und diskrete Fahrzeuge.
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-800">
                <li>Rücksichtsvoller Umgang mit persönlichen Dingen</li>
                <li>Saubere Übergabe – Kehre, Wische, kleine Restarbeiten nach Absprache</li>
                <li>Transparente Schritte: von der ersten Rückfrage bis zum Abschluss</li>
              </ul>
            </article>

            <article className="rounded-3xl border bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm" style={{ borderColor: ACCENT }}>
              <h2 className="text-3xl font-semibold leading-tight">Struktur statt Chaos</h2>
              <p className="mt-3 text-gray-800">
                Der Keller wird in Zonen gegliedert, Wege freigehalten, Traglinien kurz gehalten. Zerbrechliches
                wird separat gesichert, schwere Einheiten fachgerecht getragen. So bleibt der Ablauf ruhig,
                berechenbar und für Sie jederzeit nachvollziehbar.
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-800">
                <li>Schrittweise Räumung Raum-für-Raum</li>
                <li>Schonende Handhabung – Decken, Kantenschutz, Tragehilfen</li>
                <li>Dokumentation auf Wunsch (Fotos/kurze Notizen)</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* WAS WIR ÜBERNEHMEN (KELLER-TYPISCH) */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border bg-white/85 backdrop-blur p-6 md:p-8 shadow-sm" style={{ borderColor: ACCENT }}>
            <h2 className="text-3xl font-semibold leading-tight">Was wir übernehmen (kellertypisch)</h2>
            <p className="mt-3 text-gray-800">
              Kisten & Kartons, Regale, Kleinteile, Sportgeräte, Textilien, Elektrokleingeräte, Werkbänke,
              Fahrräder, Kleinmöbel und mehr. Alles wird behutsam aufgenommen und sicher herausgetragen.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Kisten, Kartons, Regale",
                "Fahrräder, Sportgeräte",
                "Werkzeug & Zubehör",
                "Elektrokleingeräte",
                "Textilien & Haushaltswaren",
                "Kleinmöbel & Sitzgelegenheiten",
              ].map((t) => (
                <div key={t} className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
                  <p className="font-medium text-gray-900">{t}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-800">
              Zerbrechliches wird separat gesichert. Bei besonderen Stücken (z. B. alte Räder, Truhen, Lampen)
              sprechen wir Empfehlungen aus und dokumentieren Auffälligkeiten.
            </p>
          </div>
        </div>
      </section>

      {/* ABLAUF IN 3 SCHRITTEN */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold leading-tight">So läuft es ab – in 3 Schritten</h2>
          <ol className="mt-6 space-y-6">
            <li className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">1) Foto-Voranfrage</h3>
              <p className="mt-2 text-gray-800">
                Senden Sie Gesamtansichten und ein, zwei Detailbilder per WhatsApp/E-Mail. Sie erhalten
                zügig einen Richtwert und Terminvorschläge.
              </p>
              <ul className="mt-3 list-disc pl-5 text-gray-800 space-y-1">
                <li>Wichtig: Zugangsweg, Stiegenhaus, Etage kurz nennen</li>
                <li>Wenn möglich: Kurzinfo zu Umfang & besonderen Stücken</li>
              </ul>
            </li>

            <li className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">2) Termin vor Ort</h3>
              <p className="mt-2 text-gray-800">
                Wir prüfen Umfang, Zugänglichkeit und Aufwand ruhig und strukturiert. Sie erhalten
                eine klare Einschätzung – ohne Druck.
              </p>
              <ul className="mt-3 list-disc pl-5 text-gray-800 space-y-1">
                <li>Behutsame Begehung & kurze Klärung offener Fragen</li>
                <li>Auf Wunsch kurze schriftliche Notiz zur Einschätzung</li>
              </ul>
            </li>

            <li className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">3) Angebot & Abtransport</h3>
              <p className="mt-2 text-gray-800">
                Nach Einigung setzen wir zügig um, halten Wege frei, schützen Ecken/Kanten und
                übergeben sauber. Beleg inklusive.
              </p>
              <ul className="mt-3 list-disc pl-5 text-gray-800 space-y-1">
                <li>Zahlung: Bar oder Echtzeit-Überweisung mit Beleg</li>
                <li>Logistik: Sicheres Tragen & sorgfältiges Herausschaffen</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* PREISE & TRANSPARENZ */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm" style={{ borderColor: ACCENT }}>
            <h2 className="text-3xl font-semibold leading-tight">Preise & Transparenz</h2>
            <p className="mt-3 text-gray-800">
              Der Preis richtet sich nach Umfang, Zugänglichkeit, Etage, Tragewegen und Zeitaufwand. Eventuelle
              Zusatzleistungen (z. B. Demontage kleiner Regale) werden vorab klar benannt – ohne Überraschungen.
              Sie erhalten ein nachvollziehbares Angebot und eine klare Abrechnung.
            </p>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
                <h3 className="font-semibold">Im Regelfall enthalten</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-800">
                  <li>Besichtigung & Einschätzung</li>
                  <li>Zügige Umsetzung mit sicherem Tragen</li>
                  <li>Saubere Übergabe (Kehre/Wische nach Absprache)</li>
                  <li>Beleg für Ihre Unterlagen</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
                <h3 className="font-semibold">Kann hinzukommen</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-800">
                  <li>Besondere Tragewege/Etagen ohne Lift</li>
                  <li>Zusätzliche Demontagen</li>
                  <li>Außergewöhnliche Formate oder Gewichte</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VORHER / NACHHER */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold leading-tight">Vorher / Nachher</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <figure className="rounded-2xl overflow-hidden border shadow-sm bg-white" style={{ borderColor: ACCENT }}>
              <Image
                src="/images/sl-24.webp"
                alt="Keller – Vorher"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
                priority
              />
              <figcaption className="px-4 py-3 text-sm text-gray-600">Vorher – enger Keller mit vielen Gegenständen.</figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border shadow-sm bg-white" style={{ borderColor: ACCENT }}>
              <Image
                src="/images/sl-24-2.webp"
                alt="Keller – Nachher"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
              <figcaption className="px-4 py-3 text-sm text-gray-600">Nachher – freier Durchgang, aufgeräumter Eindruck.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ZUSATZTEXT – vor FAQ einfügen */}
<section className="pb-10">
  <div className="max-w-6xl mx-auto px-6">
    <div
      className="rounded-3xl border bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm"
      style={{ borderColor: ACCENT }}
    >
      <h2 className="text-3xl font-semibold leading-tight">
        Qualitätsstandards, Schutz & Dokumentation
      </h2>
      <p className="mt-3 text-gray-800">
        Ein Kellerprojekt braucht Ruhe, System und verlässliche Abläufe. Wir schützen
        Stiegenhaus, Geländer und Türbereiche, halten Wege frei und arbeiten mit klaren
        Zuständigkeiten im Team. So bleibt der Ablauf berechenbar, die Anrainer werden
        nicht gestört, und Sie erhalten eine saubere Übergabe mit Beleg.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
          <h3 className="text-lg font-semibold">Schutz am Objekt</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-800">
            <li>Abdeckung sensibler Kanten, Ecken und Bodenflächen</li>
            <li>Kurze Traglinien & sichere Wege für ein ruhiges Arbeiten</li>
            <li>Schonende Handhabung – Tragehilfen & Kantenschutz</li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
          <h3 className="text-lg font-semibold">Kommunikation & Nachvollziehbarkeit</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-800">
            <li>Kurze Abstimmung vor Ort, klare Verantwortlichkeiten</li>
            <li>Transparente Schritte – vom Eintreffen bis zur Übergabe</li>
            <li>Auf Wunsch Kurzprotokoll oder Foto-Notiz zum Verlauf</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
          <h4 className="font-semibold">Wiederverwendung & Weitergabe</h4>
          <p className="mt-2 text-gray-800">
            Gegenstände mit Potential werden behutsam gesichert und – sofern gewünscht – einer
            sinnvollen Weitergabe zugeführt.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
          <h4 className="font-semibold">Bewertung von Besonderheiten</h4>
          <p className="mt-2 text-gray-800">
            Alte Räder, Truhen, Lampen oder Sammlerstücke erkennen wir zuverlässig und geben
            eine ehrliche Einschätzung.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
          <h4 className="font-semibold">Zeitfenster & Diskretion</h4>
          <p className="mt-2 text-gray-800">
            Termine werktags oder abends, taktvoll und leise, mit unauffälliger Anfahrt
            und kurzer Präsenzzeit im Haus.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <p className="text-gray-800">
          Ergebnis: ein ruhiger, strukturierter Ablauf mit klarer Dokumentation und
          sauberer Übergabe. Auf Wunsch erhalten Sie eine kompakte Bewertungsnotiz zu
          auffälligen Stücken sowie alle Unterlagen für Ihre Akte.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* FAQ */}
      <section id="faq" className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold leading-tight">Häufige Fragen (FAQ)</h2>
          <p className="mt-2 text-gray-700">Kurz beantwortet: die wichtigsten Punkte rund um Ablauf, Termin und Abwicklung.</p>

          <div className="mt-6 space-y-4">
            {[
              {
                q: "Wie diskret arbeiten Sie?",
                a: "Sehr diskret. Auf Wunsch mit neutraler Kleidung und unauffälliger Anfahrt. Kommunikation bleibt knapp, Türen und Wege werden geschützt.",
              },
              {
                q: "Reicht eine Bewertung per Foto?",
                a: "Für einen ersten Richtwert ja. Ein verbindliches Angebot entsteht nach der kurzen Besichtigung vor Ort.",
              },
              {
                q: "Welche Regionen decken Sie ab?",
                a: "Wien (1–23) und Umland bis ca. 100 km. Größere Projekte betreuen wir nach Absprache auch weiter entfernt.",
              },
              {
                q: "Wie schnell erhalte ich mein Geld?",
                a: "Bei Einigung sofort – Barzahlung oder Echtzeit-Überweisung, jeweils mit Beleg.",
              },
              {
                q: "Helfen Sie bei schweren/ sperrigen Teilen?",
                a: "Ja. Wir arbeiten mit Tragehilfen, Kantenschutz und ausreichender Manpower – sicher und ruhig.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
                  <span>{q}</span>
                  <svg
                    className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                  </svg>
                </summary>
                <p className="mt-3 leading-relaxed text-gray-700">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ABSCHLUSS-CTA */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border bg-white/85 backdrop-blur p-8 md:p-10 text-center shadow-sm" style={{ borderColor: ACCENT }}>
            <h2 className="text-3xl font-semibold leading-tight">Bereit für einen strukturierten Keller?</h2>
            <p className="mt-3 text-gray-800">
              Senden Sie uns Fotos und kurze Infos – wir melden uns rasch mit einer Einschätzung und Terminvorschlägen.
              Diskret, respektvoll und zuverlässig.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://wa.me/436766135140"
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white"
                style={{ background: ACCENT }}
              >
                WhatsApp anfragen
              </Link>
              <Link
                href="mailto:info@antikexperte.at"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
                style={{ borderColor: ACCENT }}
              >
                E-Mail senden
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

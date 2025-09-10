// app/messie-entruempelung-wien/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Messie Entrümpelung Wien – diskret, respektvoll & professionell",
  description:
    "Diskrete Messie-Entrümpelung in Wien und Umgebung: respektvoller Umgang, klare Angebote, zügige Abwicklung, Abtransport & Übergabe. Termine in allen 23 Bezirken sowie bis 100 km ins Umland.",
};

const ACCENT = "#b38b5999";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="pt-10 pb-10 max-w-6xl mx-auto px-6">
        <div
          className="rounded-3xl border shadow-sm p-8 md:p-10 bg-white/80 backdrop-blur"
          style={{ borderColor: ACCENT }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Messie Entrümpelung Wien
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mt-2">
            Messie Entrümpelung Wien - Diskret, respektvoll & professionell
          </h1>
          <p className="mt-4 text-gray-700">
            Wir unterstützen Sie in sensiblen Situationen – ruhig, strukturiert und ohne
            Vorurteile. <strong>Haus, Wohnung, Keller, Dachboden</strong>: Wir arbeiten leise,
            dokumentieren transparent und übernehmen den vollständigen <strong>Abtransport</strong>{" "}
            mit sauberer Übergabe.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm" style={{ background: ACCENT }}>
              Diskret & respektvoll
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
              Wien (1–23) & bis 100 km
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
              Kurzfristige Termine
            </span>
          </div>

          <figure className="mt-8 overflow-hidden rounded-2xl border shadow-sm bg-white" style={{ borderColor: ACCENT }}>
            <Image
              src="/images/sl-22.webp"
              alt="Diskrete Wohnungsräumung – Team arbeitet strukturiert und ruhig"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
            <figcaption className="px-4 py-3 text-sm text-gray-600">
              Sorgfältige Räumung mit klarer Dokumentation und behutsamer Übergabe.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* WARUM WIR */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <h2 className="text-3xl font-semibold leading-tight">Warum Antikexperte.at?</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">Diskretion zuerst</h3>
              <p className="mt-2 text-gray-700">
                Unauffälliges Auftreten, keine Beschriftungen am Fahrzeug, vertrauliche
                Kommunikation. Wir behandeln jeden Auftrag mit Respekt und Ruhe.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">Transparente Angebote</h3>
              <p className="mt-2 text-gray-700">
                Feste Pauschalen oder klar strukturierte Fixpreise nach Besichtigung.
                Auf Wunsch mit schriftlicher Kurznotiz zu Umfang und Leistung.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">Wertanrechnung möglich</h3>
              <p className="mt-2 text-gray-700">
                Antiquitäten, Sammlungen oder brauchbare Gegenstände rechnen wir an – das
                reduziert Ihr Gesamtbudget spürbar.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">Zügige Abwicklung</h3>
              <p className="mt-2 text-gray-700">
                Kurze Wege, klare Zeitfenster, saubere Übergabe. Termine werktags, abends
                und nach Absprache am Wochenende.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-6xl space-y-4">
          <h2 className="text-3xl font-semibold leading-tight">Leistungen im Überblick</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border bg-white p-5" style={{ borderColor: ACCENT }}>
              <h3 className="text-lg font-semibold">Räumung & Abtransport</h3>
              <p className="mt-1 text-gray-700">
                Räume, Nebenräume, Außenflächen: sichere Tragewege, Schutz von Böden
                & Geländern, strukturierte Übergabe.
              </p>
            </li>
            <li className="rounded-2xl border bg-white p-5" style={{ borderColor: ACCENT }}>
              <h3 className="text-lg font-semibold">Sichtung & Dokumentation</h3>
              <p className="mt-1 text-gray-700">
                Gezieltes Suchen nach Dokumenten, Schmuck oder Erinnerungsstücken – mit
                Protokoll und Rücksprache.
              </p>
            </li>
            <li className="rounded-2xl border bg-white p-5" style={{ borderColor: ACCENT }}>
              <h3 className="text-lg font-semibold">Weitergabe & Verwertung</h3>
              <p className="mt-1 text-gray-700">
                Brauchbares führen wir der weiteren Nutzung zu, übrige Materialien bringen
                wir über geregelte Wege weg.
              </p>
            </li>
            <li className="rounded-2xl border bg-white p-5" style={{ borderColor: ACCENT }}>
              <h3 className="text-lg font-semibold">Reinigung „besenrein“</h3>
              <p className="mt-1 text-gray-700">
                Nach Abschluss übergeben wir die Räume besenrein – ideal zur Schlüsselrückgabe
                oder Weitervermietung.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold leading-tight">So läuft es ab</h2>
          <ol className="mt-6 space-y-6">
            <li className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">1) Kontakt & Foto-Check</h3>
              <p className="mt-1 text-gray-700">
                Schicken Sie uns einige Übersichts- und Detailfotos (WhatsApp/E-Mail).
                Wir melden uns rasch mit einem Richtwert und Terminvorschlägen.
              </p>
            </li>
            <li className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">2) Besichtigung & Fixpreis</h3>
              <p className="mt-1 text-gray-700">
                Vor Ort klären wir Umfang, Zugang, Parkmöglichkeit und Zeitfenster.
                Sie erhalten ein klares Angebot – auf Wunsch schriftlich.
              </p>
            </li>
            <li className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">3) Durchführung & Übergabe</h3>
              <p className="mt-1 text-gray-700">
                Zügige Räumung, behutsamer <strong>Abtransport</strong>, besenreine Übergabe.
                Zahlung bar oder per Echtzeit-Überweisung – mit Beleg.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* PREISE */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold leading-tight">Preise & Pakete</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-lg font-semibold">Kompakt</h3>
              <p className="mt-1 text-gray-700">Einzelraum, Kellerabteil, kleine Wohnungen.</p>
              <p className="mt-3 text-sm text-gray-600">Fixpreis nach Besichtigung.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6 ring-2" style={{ borderColor: ACCENT }}>
              <h3 className="text-lg font-semibold">Standard</h3>
              <p className="mt-1 text-gray-700">2–3 Zimmer, mit Nebenräumen & Balkon.</p>
              <p className="mt-3 text-sm text-gray-600">Beliebt – inkl. besenreiner Übergabe.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-lg font-semibold">Projekt</h3>
              <p className="mt-1 text-gray-700">Großobjekte, Häuser, Archive.</p>
              <p className="mt-3 text-sm text-gray-600">Mit Zeitplan & Wertanrechnung.</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Hinweis: Durch Wertanrechnung (Antiquitäten, Sammlungen, brauchbare Möbel) können sich
            die Gesamtkosten deutlich reduzieren.
          </p>
        </div>
      </section>

      {/* DISKRETION */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border bg-white p-6 md:p-8" style={{ borderColor: ACCENT }}>
            <h2 className="text-3xl font-semibold leading-tight">Diskretion & Datenschutz</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
              <li>Unauffälliges Team, keine Außenwerbung am Fahrzeug.</li>
              <li>Vertrauliche Behandlung von Fotos, Adressen und Kontakten.</li>
              <li>Dokumente & Erinnerungsstücke werden separat gesichert und übergeben.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ANSATZ – TEXTBLOCK */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-3xl border bg-white p-6 md:p-8"
            style={{ borderColor: ACCENT }}
          >
            <h2 className="text-3xl font-semibold leading-tight">
              Unser Ansatz – ruhig, strukturiert, menschlich
            </h2>

            <p className="mt-3 text-gray-700">
              Eine Messie-Entrümpelung ist immer individuell. Wir beginnen mit einer
              ruhigen Bestandsaufnahme, legen gemeinsam Schwerpunkte fest und arbeiten
              anschließend in klaren Etappen. Kommunikation erfolgt auf Wunsch mit einer
              Kontaktperson – telefonisch oder per E-Mail – damit alle Schritte
              nachvollziehbar bleiben.
            </p>

            <p className="mt-3 text-gray-700">
              Während der Räumung sichern wir Fundstücke mit möglichem Erinnerungs- oder
              Dokumentenwert (z. B. Urkunden, Datenträger, Schmuck). Brauchbare Gegenstände
              werden der weiteren Nutzung zugeführt, übriges Material bringen wir über
              geregelte Wege weg. Am Ende übergeben wir die Räume <em>besenrein</em> – bereit
              für Rückgabe, Sanierung oder Verkauf.
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
              <li>Ruhige Erstaufnahme & klare Zuständigkeiten</li>
              <li>Transparente Absprachen mit kurzer schriftlicher Notiz auf Wunsch</li>
              <li>Wertanrechnung für Antiquitäten & Sammlungen zur Kostenreduktion</li>
              <li>Besenreine Übergabe, Zahlung bar oder per Echtzeit-Überweisung – mit Beleg</li>
            </ul>

            <p className="mt-4 text-gray-700">
              Typische Zeitfenster: <strong>kleine Wohnungen 1&nbsp;Tag</strong>, größere
              Objekte <strong>2–3&nbsp;Tage</strong>. Abweichungen sind möglich – wir planen
              realistisch und halten Sie währenddessen auf dem Laufenden.
            </p>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        <h2 className="text-4xl font-semibold tracking-tight">Häufige Fragen (FAQ)</h2>
        <p className="mt-2 text-gray-600">
          Kurz beantwortet: die wichtigsten Punkte rund um Ablauf, Termine und Zahlung.
        </p>

        <div className="mt-8 space-y-4">
          <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm open:shadow-md transition-shadow">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
              <span>Wie schnell bekommen wir einen Termin?</span>
              <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-gray-700">
              Meist innerhalb weniger Tage. Schicken Sie uns kurz Fotos – wir antworten rasch mit
              einem Vorschlag.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm open:shadow-md transition-shadow">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
              <span>Arbeiten Sie wirklich diskret?</span>
              <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-gray-700">
              Ja. Unauffälliges Auftreten, neutrale Kleidung, leise Abwicklung – und vertraulicher
              Umgang mit allen Informationen.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm open:shadow-md transition-shadow">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
              <span>Können Wertsachen gefunden und übergeben werden?</span>
              <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-gray-700">
              Natürlich. Dokumente, Schmuck, Erinnerungsstücke oder Datenträger werden separat
              gesichert und an Sie übergeben – protokolliert.
            </p>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm open:shadow-md transition-shadow">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
              <span>Wie läuft die Bezahlung?</span>
              <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-gray-700">
              Barzahlung oder Echtzeit-Überweisung – jeweils mit Beleg. Bei Projektarbeiten sind
              Teilzahlungen nach Meilensteinen möglich.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 max-w-5xl mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight">Sprechen wir vertraulich</h2>
          <p className="mt-3 text-gray-700">
            Schicken Sie uns Fotos und kurze Hinweise – wir melden uns rasch mit einer
            Ersteinschätzung und Terminvorschlägen.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/impressum"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white transition-colors"
              style={{ background: ACCENT }}
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
              style={{ borderColor: ACCENT }}
            >
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

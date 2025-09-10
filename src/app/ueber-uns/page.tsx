// app/ueber-uns/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Über uns – Antikexperte.at",
  description:
    "Antikexperte.at – über 5 Jahre Erfahrung im Ankauf & Verkauf von Antiquitäten in Wien und ganz Österreich. Transparente Bewertungen, diskrete Abwicklung, faire Preise.",
};

const ACCENT = "#b38b5999"; // ваш цвет-акцент

export default function UeberUnsPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-12 max-w-6xl mx-auto px-6">
        <div
          className="rounded-3xl border shadow-sm p-8 md:p-10 bg-white/80 backdrop-blur"
          style={{ borderColor: ACCENT }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Antikexperte.at
          </p>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mt-2">
            Über uns
          </h1>
          <p className="mt-4 text-gray-700">
            Wir sind ein Wiener Fachbetrieb mit <strong>über 5 Jahren Erfahrung</strong> im
            <strong> Ankauf und Verkauf von Antiquitäten</strong>. Für private Kundinnen und Kunden,
            Nachlässe und Sammlungen bieten wir eine klare Bewertung, faire Angebote und eine
            zügige, diskrete Abwicklung.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-sm"
              style={{ background: ACCENT }}
            >
              5+ Jahre Erfahrung
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
              Wien – alle 23 Bezirke
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
              bis 200 km & österreichweit
            </span>
          </div>
          {/* BILD – положите картинку в public/images/ueber-uns-hero.webp */}
          <figure className="mt-8 overflow-hidden rounded-2xl border shadow-sm bg-white" style={{ borderColor: ACCENT }}>
            <Image
              src="/images/sl-43.webp"
              alt="Einblick in unsere Arbeit – Auswahl an Antiquitäten"
              width={1600}
              height={900}
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="w-full h-auto object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-gray-600">
              Einblick in unsere Arbeit – Auswahl an Antiquitäten aus Wien und Umgebung.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* WER WIR SIND */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-6xl space-y-4">
          <h2 className="text-3xl font-semibold leading-tight">Wer wir sind</h2>
          <p className="text-gray-700">
            Antikexperte.at verbindet kaufmännische Sorgfalt mit echter Leidenschaft für
            historische Objekte. Seit mehr als fünf Jahren sind wir in Wien und Umgebung tätig:
            <strong> Silber, Schmuck, Porzellan, Münzen, Banknoten, Kunst & Design</strong> –
            qualitätsvolle Stücke erhalten bei uns eine fundierte Einschätzung und ein
            marktgerechtes Angebot.
          </p>
          <p className="text-gray-700">
            Unser Anspruch: <em>transparent, respektvoll und verlässlich</em> zu arbeiten – von der
            ersten Fotovoranfrage bis zur Auszahlung. Auf Wunsch kommen wir zu Ihnen nach Hause
            (1.–23. Bezirk) oder betreuen Projekte im erweiterten Umfeld.
          </p>
        </div>
      </section>

      {/* WAS WIR TUN */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <h2 className="text-3xl font-semibold leading-tight">Was wir tun</h2>

          <div className="grid gap-6">
            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">Ankauf & Verkauf</h3>
              <p className="mt-2 text-gray-700">
                Bewertung und Ankauf von <strong>Antiquitäten</strong> aller Art – Einzelstücke,
                Sammlungen und Nachlässe. Auf Basis aktueller Marktwerte und klarer Kriterien
                (Zustand, Seltenheit, Provenienz) erhalten Sie ein nachvollziehbares Angebot. Die
                Auszahlung erfolgt auf Wunsch sofort.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">Vor-Ort-Service</h3>
              <p className="mt-2 text-gray-700">
                Hausbesuche in ganz Wien (1–23) sowie im Umland. Termine sind flexibel –
                werktags, abends und nach Absprache am Wochenende. Für umfangreichere Bestände
                übernehmen wir die strukturierte Abwicklung.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-xl font-semibold">Spezielle Projekte</h3>
              <p className="mt-2 text-gray-700">
                Neben dem klassischen Ankauf unterstützen wir bei Räumungen und Projektarbeiten,
                darunter auch Formate wie <strong>„Macy’s Entrumpling“</strong>,{" "}
                <strong>„Metrupling“</strong> und <strong>„Freelance Entrumpling“</strong>
                &nbsp;(kundenindividuelle Räum- und Projektservices). Sprechen Sie uns mit Ihrem
                Bedarf an – wir finden eine passende Lösung.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WO WIR ARBEITEN */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-6xl space-y-4">
          <h2 className="text-3xl font-semibold leading-tight">Wo wir arbeiten</h2>
          <p className="text-gray-700">
            Unser Kerngebiet ist <strong>Wien (1–23)</strong>. Zusätzlich betreuen wir Kundinnen
            und Kunden <strong>im Umkreis von bis zu 100&nbsp;km</strong> (z. B. Niederösterreich,
            Burgenland). Projekte realisieren wir <strong>regelmäßig in ganz Österreich</strong> –
            je nach Volumen und Objektlage auch in Städten wie Graz, Linz, Salzburg oder Innsbruck.
          </p>
        </div>
      </section>

      {/* VERSPRECHEN */}
      <section className="pb-10 max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border bg-white p-6 md:p-8" style={{ borderColor: ACCENT }}>
            <h2 className="text-3xl font-semibold leading-tight">Unser Versprechen</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
              <li>Faire, marktnahe Angebote und klare Kommunikation – ohne Druck.</li>
              <li>Diskrete Abwicklung, flexible Termine, auf Wunsch sofortige Auszahlung.</li>
              <li>Respektvoller Umgang mit Objekten, Nachlässen und privaten Unterlagen.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold leading-tight">Sprechen wir über Ihr Anliegen</h2>
          <p className="mt-3 text-gray-700">
            Schicken Sie uns Fotos und kurze Infos – wir melden uns rasch mit einer Einschätzung
            und Terminvorschlägen.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://wa.me/436767202623"
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

// components/sections/HeroMoebel.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankauf Antiquitäten & Möbel – Wien | Faire Preise & Sofortauszahlung",
  description:
    "Ankauf von Antiquitäten & Möbeln in Wien: kostenlose Foto-Ersteinschätzung, marktnahe Preise, diskrete Abwicklung & Sofortauszahlung. Termine in Wien & Umland.",
};

const ACCENT = "#b38b5999";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
    <section className="relative pt-28 pb-8 overflow-hidden">
      {/* Deko-Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 -right-24 h-[34rem] w-[34rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(179,139,89,.35), transparent)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(161,136,127,.25), transparent)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 grid items-center gap-8 md:grid-cols-[1.05fr_.95fr]">
        {/* Textspalte */}
        <div>
          <p className="text-xs uppercase tracking-[.18em] text-gray-500">
            Ankauf von Antiquitäten &amp; Möbeln
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-light leading-[1.1]">
            Ankauf Antiquitäten Möbel – Faire Preise &amp; bester Service in Wien
          </h1>
          <p className="mt-4 text-gray-700">
            Mehr als <strong>5 Jahre Erfahrung</strong> im Ankauf &amp; Verkauf. Termine in{" "}
            <strong>Wien (1–23)</strong>, im Umland bis <strong>100&nbsp;km</strong> und – nach
            Absprache – <strong>österreichweit</strong>. Kostenlose Foto-Ersteinschätzung, klare
            Argumentation, auf Wunsch <strong>Sofortauszahlung</strong>.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-sm"
              style={{ borderColor: ACCENT }}
            >
              Kostenlose Foto-Ersteinschätzung
            </span>
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-sm text-white"
              style={{ background: ACCENT }}
            >
              Sofortauszahlung
            </span>
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-sm"
              style={{ borderColor: ACCENT }}
            >
              Diskret &amp; verlässlich
            </span>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/436767202623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white transition-colors"
              style={{ background: ACCENT }}
            >
              Fotos senden
            </a>
            <a
              href="https://wa.me/436767202623"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
              style={{ borderColor: ACCENT }}
            >
              Termin vereinbaren
            </a>
          </div>
        </div>

        {/* Bildkarte */}
        <figure
          className="relative rounded-3xl border bg-white/80 backdrop-blur p-3 shadow-sm"
          style={{ borderColor: ACCENT }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/ankauf-antiquitaten-mobel.webp"
              alt="Ausgewählte antike Möbel – Kommode, Stuhl und Beistelltisch im natürlichen Licht"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-2 pt-3 text-center text-sm text-gray-600">
            Beispielhafte Auswahl: Biedermeier-Kommode, Jugendstil-Stuhl &amp; Beistelltisch.
          </figcaption>

          {/* Badge */}
          <span
            className="absolute -top-3 -left-3 rounded-full bg-white/90 border px-3 py-1 text-xs shadow"
            style={{ borderColor: ACCENT }}
          >
            Wien &amp; Umgebung
          </span>
        </figure>
      </div>
    </section>
    <section className="relative py-12">
      {/* Deko-Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute top-10 left-[-6rem] h-[22rem] w-[22rem] rounded-full blur-3xl opacity-70"
          style={{
            background:
              "radial-gradient(closest-side, rgba(179,139,89,.28), transparent)",
          }}
        />
        <div
          className="absolute bottom-[-6rem] right-[-4rem] h-[20rem] w-[20rem] rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(closest-side, rgba(161,136,127,.22), transparent)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[.18em] text-gray-500">
            Ihre Vorteile
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
            Warum Antikexperte.at für den Ankauf antiker Möbel?
          </h2>
          <p className="mt-3 text-gray-700">
            Wir kombinieren fachliche Präzision mit schneller, respektvoller
            Abwicklung. Von der ersten Nachricht bis zur Auszahlung bleiben
            Abläufe transparent – ohne Druck, mit klaren Kriterien und
            nachvollziehbaren Argumenten.
          </p>
        </header>

        {/* Grid mit Vorteilskarten */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Karte 1 */}
          <article
            className="rounded-2xl border bg-white p-6 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <div className="flex items-start gap-3">
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: ACCENT }}
                aria-hidden
              >
                {/* Icon: Preis/Transparenz */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                >
                  <path d="M12 1a4 4 0 0 1 4 4h-2a2 2 0 1 0-4 0H8a4 4 0 0 1 4-4Zm6 6H6a2 2 0 0 0-2 2v2h16V9a2 2 0 0 0-2-2Zm-2 6H8v8h8v-8Zm-6 2h4v4h-4v-4Z" />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold">
                  Marktnahe, nachvollziehbare Preise
                </h3>
                <p className="mt-1 text-gray-700">
                  Bewertung anhand Zustand, Seltenheit, Stil, Hersteller und
                  aktueller Nachfrage. Jedes Angebot wird kurz begründet –
                  verständlich und fair.
                </p>
              </div>
            </div>
          </article>

          {/* Karte 2 */}
          <article
            className="rounded-2xl border bg-white p-6 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <div className="flex items-start gap-3">
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: ACCENT }}
                aria-hidden
              >
                {/* Icon: Foto/Einschaetzung */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                >
                  <path d="M4 6h3l1-2h8l1 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm8 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 11Z" />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold">
                  Kostenlose Foto-Ersteinschätzung
                </h3>
                <p className="mt-1 text-gray-700">
                  Senden Sie Gesamtansichten und Details (Beschläge, Furnier,
                  Signaturen). Sie erhalten zügig einen Richtwert; das
                  verbindliche Angebot entsteht bei der Besichtigung.
                </p>
              </div>
            </div>
          </article>

          {/* Karte 3 */}
          <article
            className="rounded-2xl border bg-white p-6 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <div className="flex items-start gap-3">
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: ACCENT }}
                aria-hidden
              >
                {/* Icon: Auszahlung */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                >
                  <path d="M3 6h18v4H3V6Zm0 6h18v6H3v-6Zm2 2v2h5v-2H5Zm9 0v2h5v-2h-5Z" />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold">Sofortauszahlung</h3>
                <p className="mt-1 text-gray-700">
                  Auf Wunsch zahlen wir unmittelbar – bar oder per
                  Echtzeit-Überweisung – inklusive Beleg. Diskret, strukturiert,
                  zuverlässig.
                </p>
              </div>
            </div>
          </article>

          {/* Karte 4 */}
          <article
            className="rounded-2xl border bg-white p-6 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <div className="flex items-start gap-3">
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: ACCENT }}
                aria-hidden
              >
                {/* Icon: Vor-Ort-Service */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.2 6 3.33v6.62l-6 3.33-6-3.33V7.53L12 4.2Z" />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold">Vor-Ort in Wien &amp; darüber hinaus</h3>
                <p className="mt-1 text-gray-700">
                  Termine in Wien (1–23), im Umkreis bis 100&nbsp;km und nach
                  Absprache österreichweit. Behutsame Handhabung und
                  organisierte Abholung größerer Stücke.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Hinweisleiste */}
        <div
          className="mt-7 rounded-2xl border bg-white p-4 md:p-5 flex flex-wrap items-center gap-3"
          style={{ borderColor: ACCENT }}
        >
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-sm text-white"
            style={{ background: ACCENT }}
          >
            Biedermeier · Jugendstil · Art Déco · Mid-Century
          </span>
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800" style={{ borderColor: ACCENT }}>
            Einzelstücke, Sets &amp; Nachlässe willkommen
          </span>
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800" style={{ borderColor: ACCENT }}>
            Schriftliche Kurznotiz zur Bewertung auf Wunsch
          </span>
        </div>
      </div>
    </section>
    <section className="relative py-12">
      {/* Dekor */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-10 right-[-6rem] h-[22rem] w-[22rem] rounded-full blur-3xl opacity-70"
          style={{ background: "radial-gradient(closest-side, rgba(179,139,89,.22), transparent)" }}
        />
        <div
          className="absolute bottom-[-6rem] left-[-4rem] h-[20rem] w-[20rem] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(161,136,127,.20), transparent)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[.18em] text-gray-500">
            Schwerpunkte
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
            Was wir ankaufen – Stile, Epochen & Besonderheiten
          </h2>
          <p className="mt-3 text-gray-700">
            Wir suchen charaktervolle Originale von der höfischen Arbeit bis zum eleganten
            Mid-Century-Design. Einzelstücke sind genauso willkommen wie vollständige Ensembles und
            Sammlungen. Maßgeblich sind Authentizität, stimmige Proportionen und eine nachvollziehbare
            Geschichte.
          </p>
        </header>

        {/* Tag-Bar */}
        <div
          className="mt-6 rounded-2xl border bg-white p-4 flex flex-wrap gap-2"
          style={{ borderColor: ACCENT }}
        >
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm text-white" style={{ background: ACCENT }}>
            Massivholz & Edelholzfurniere
          </span>
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800" style={{ borderColor: ACCENT }}>
            Originaloberflächen bevorzugt
          </span>
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800" style={{ borderColor: ACCENT }}>
            Signaturen · Etiketten · Werknummern
          </span>
        </div>

        {/* Grid der Epochen */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Karte 1 */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border" style={{ borderColor: ACCENT }}>
                <Image
                  src="/images/antik-mobel-4.webp" // замените на актуальный кадр мебели
                  alt="Biedermeier Kommode"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Biedermeier</h3>
                <p className="mt-1 text-gray-700">
                  Ruhige Linien, edle Furniere (Kirsch, Mahagoni, Birke), feine Schlüsselschilder.
                  Gesucht: Kommoden, Schreibmöbel, Sitzgruppen, Speisezimmerstücke.
                </p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Kommode · Vertiko · Sekretär</li>
                  <li>Salontisch · Stühle · Sofa</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Karte 2 */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border" style={{ borderColor: ACCENT }}>
                <Image
                  src="/images/antik-mobel-3.webp"
                  alt="Jugendstil Möbel"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Jugendstil & Wiener Werkstätte</h3>
                <p className="mt-1 text-gray-700">
                  Klare Geometrien, feine Beschläge, qualitätsvolle Tischlerarbeiten. Wir achten auf
                  Entwürfe, Herstelleretiketten und stimmige Oberflächen.
                </p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Vitrinen · Eckschränke · Servierwagen</li>
                  <li>Stühle · Fauteuils · Beistelltische</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Karte 3 */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border" style={{ borderColor: ACCENT }}>
                <Image
                  src="/images/antik-mobel-2.webp"
                  alt="Art Déco Sideboard"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Art Déco</h3>
                <p className="mt-1 text-gray-700">
                  Symmetrie, edle Hölzer, Lackflächen, verchromte Details. Bevorzugt: Sideboards,
                  Barschränke, Schreibtische, elegante Sitzmöbel.
                </p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Sideboard · Barschrank · Konsole</li>
                  <li>Schreibtisch · Clubsessel</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Karte 4 */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border" style={{ borderColor: ACCENT }}>
                <Image
                  src="/images/antik-mobel-1.webp"
                  alt="Mid-Century Möbel"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Mid-Century & Designklassiker</h3>
                <p className="mt-1 text-gray-700">
                  Schlanke Formen, Teak/Nuss, durchdachte Konstruktion. Gefragt sind Sideboards,
                  Lowboards, Essgruppen, Leuchten – gerne mit Herstellerhinweis.
                </p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Lowboard · Highboard · Esstisch</li>
                  <li>Stuhlsets · Stehleuchten</li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* Zusatzliste */}
        <div className="mt-8 rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
          <h3 className="text-lg font-semibold">Wir kaufen außerdem</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Barock/Rokoko: Kommoden, Spiegel, Konsolen</li>
              <li>Thonet & Wiener Geflecht – Stühle, Schaukelstühle</li>
              <li>Kabinettschränke, Bibliotheksmöbel</li>
            </ul>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Garderoben, Paravents, Spiegelrahmen</li>
              <li>Tisch- und Wandleuchten mit Charakter</li>
              <li>Gut erhaltene Komplettgruppen & Ensembles</li>
            </ul>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Tipp: Fotos von Front, Seiten, Rückwand, Beschlägen und Innenleben (Schlösser, Etiketten) helfen
            für eine schnelle Ersteinschätzung.
          </p>
        </div>
      </div>
    </section>
    <section className="relative py-12">
      {/* Soft Dekor */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-8 left-[-5rem] h-[18rem] w-[18rem] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(179,139,89,.18), transparent)" }}
        />
        <div
          className="absolute bottom-[-6rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(161,136,127,.20), transparent)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[.18em] text-gray-500">Transparente Bewertung</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
            Bewertung &amp; Preisbildung – so ermitteln wir den Wert
          </h2>
          <p className="mt-3 text-gray-700">
            Jedes Angebot basiert auf klaren Kriterien. Wir dokumentieren die wichtigsten Merkmale,
            erklären unsere Einschätzung verständlich und orientieren uns an belegbaren Vergleichsstücken.
          </p>
        </header>

        {/* Kriterien – Karten */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <h3 className="text-lg font-semibold">Herkunft &amp; Epoche</h3>
            <p className="mt-2 text-gray-700">
              Werkstatt, Region und Zeitstellung geben den Rahmen: Stilmerkmale, Proportionen und Typologien
              bilden die Basis für die Einordnung – von Biedermeier über Jugendstil bis Art Déco.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Stilreine Ausführung &amp; stimmige Details</li>
              <li>Seltene Entwürfe, Herstelleretiketten, Werknummern</li>
            </ul>
          </article>

          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <h3 className="text-lg font-semibold">Material &amp; Ausführung</h3>
            <p className="mt-2 text-gray-700">
              Massivholz, Edelholzfurniere, handwerkliche Verbindungen, originale Oberflächen und
              qualitätsvolle Beschläge wirken wertbildend – ebenso feine Lackierungen und Intarsien.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Furnierbild &amp; Spiegelung</li>
              <li>Schlösser, Schlüssel, Beschläge – Qualität &amp; Passung</li>
            </ul>
          </article>

          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <h3 className="text-lg font-semibold">Originalität &amp; Zustand</h3>
            <p className="mt-2 text-gray-700">
              Wir unterscheiden zwischen authentischer Patina, fachgerechter Restaurierung und
              späteren Veränderungen. Stimmige Substanz ist oft entscheidender als Makellosigkeit.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Oberfläche, Trägerholz, Stabilität</li>
              <li>Erhaltene Teile vs. Ersetzungen – nachvollziehbar belegt</li>
            </ul>
          </article>

          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <h3 className="text-lg font-semibold">Nachfrage &amp; Format</h3>
            <p className="mt-2 text-gray-700">
              Wohn- und ausstellungsfreundliche Maße, gesuchte Typen (z. B. Sideboards, Schreibmöbel) und
              eine gute Kombinierbarkeit beeinflussen das Ergebnis.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Proportionen &amp; Platzwirkung</li>
              <li>Vergleichbare Abschlüsse &amp; dokumentierte Verkäufe</li>
            </ul>
          </article>
        </div>

        {/* Einfluss-Matrix */}
        <div className="mt-8 rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
          <h3 className="text-lg font-semibold">Einflussfaktoren – komprimiert</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>Originalität</span><span>hoch</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 rounded-full" style={{ width: "92%", background: ACCENT }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>Material &amp; Ausführung</span><span>hoch</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 rounded-full" style={{ width: "88%", background: ACCENT }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>Herkunft &amp; Epoche</span><span>mittel–hoch</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 rounded-full" style={{ width: "78%", background: ACCENT }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>Nachfrage &amp; Format</span><span>variabel</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 rounded-full" style={{ width: "64%", background: ACCENT }} />
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border p-4 text-sm text-gray-700 bg-white/60" style={{ borderColor: ACCENT }}>
            <p>
              <strong>Hinweis:</strong> Für die Ersteinschätzung genügen gute Fotos (Front, Seiten, Rückwand,
              Beschläge/Schlüssel, Innenleben) sowie ca. Maße. Das verbindliche Angebot erstellen wir nach
              Sichtung vor Ort – transparent und schriftlich zusammengefasst.
            </p>
          </div>
        </div>

        {/* Mini-CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:info@antikexperte.at"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white"
            style={{ background: ACCENT }}
          >
            Fotos senden &amp; Kurzbewertung erhalten
          </a>
          <a
            href="/leistungen"
            className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
            style={{ borderColor: ACCENT }}
          >
            Kriterien im Detail ansehen
          </a>
        </div>
      </div>
    </section>
    <section className="relative py-12">
      {/* Soft Deko */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-10 left-[-6rem] h-[18rem] w-[18rem] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(179,139,89,.18), transparent)" }}
        />
        <div
          className="absolute bottom-[-8rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(161,136,127,.20), transparent)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {/* ABLauf in 3 Schritten */}
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[.18em] text-gray-500">Ablauf</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
            So läuft der Ankauf Ihrer Möbel ab – in 3 Schritten
          </h2>
          <p className="mt-3 text-gray-700">
            Schnell, transparent und gut dokumentiert: Wir begleiten Sie von der ersten Anfrage bis zur Auszahlung – klar erklärt und ohne Druck.
          </p>
        </header>

        <ol className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Kontakt & Foto-Check",
              body:
                "Schicken Sie uns Gesamtansichten, Innenleben/Schubladen, Beschläge/Schlüssel und Maße. So erhalten Sie rasch einen belastbaren Richtwert.",
              bullets: ["Maße (H×B×T) & grobe Zeitstellung", "Detailfotos von Oberfläche/Beschlägen", "Hinweise zu Restaurierungen"],
              footer: "Reaktionszeit: oft am selben Tag."
            },
            {
              step: "2",
              title: "Besichtigung vor Ort",
              body:
                "Wir prüfen Material, Ausführung, Originalität und Zustand direkt bei Ihnen in Wien (1–23) sowie im Umland bis ca. 100 km – flexibel nach Termin.",
              bullets: ["Behutsame Handhabung & klare Erläuterung", "Optional kurze schriftliche Notiz", "Ausweis beim Verkauf erforderlich"],
              footer: "Dauer: je nach Umfang 20–60 Min."
            },
            {
              step: "3",
              title: "Angebot & Auszahlung",
              body:
                "Sie erhalten ein transparentes, verbindliches Angebot. Bei Einigung zahlen wir sofort – bar oder via Echtzeit-Überweisung – mit Beleg.",
              bullets: ["Kaufbeleg für Ihre Unterlagen", "Sichere Abholung & Trageschutz", "Koordination auch bei mehreren Stücken"],
              footer: "Abwicklung zügig & diskret."
            }
          ].map((item) => (
            <li key={item.step} className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col" style={{ borderColor: ACCENT }}>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold" style={{ background: ACCENT, color: "#fff" }}>
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.body}</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-500">{item.footer}</p>
            </li>
          ))}
        </ol>

        {/* FOTO-LEITFADEN */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Foto-Leitfaden</h2>
          <p className="mt-3 text-gray-700">
            Gute Fotos sparen Zeit und erhöhen die Genauigkeit der Ersteinschätzung. Bitte zeigen Sie das Stück so, wie es ist – ohne vorherige „Kosmetik“.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-lg font-semibold">Ansichten & Details</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>Front, Seiten, Rückwand, Unterseite</li>
                <li>Innenleben (Schubladen/Fächer)</li>
                <li>Beschläge, Schlösser, Schlüssel (nah)</li>
                <li>Oberfläche im Streiflicht (Feinheiten sichtbar)</li>
              </ul>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
              <h3 className="text-lg font-semibold">Licht & Maße</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>Tageslicht oder weiches Raumlicht, kein Blitz</li>
                <li>Maßband im Bild oder Maße separat angeben</li>
                <li>Kurzinfo zu Alter/Herkunft, falls bekannt</li>
                <li>Hinweise auf Restaurierungen/Ersetzungen</li>
              </ul>
            </article>
          </div>

          <div className="mt-6 rounded-xl border p-4 text-sm text-gray-700 bg-white/70" style={{ borderColor: ACCENT }}>
            <strong>Tipp:</strong> Bitte nicht vorab neu lackieren oder überpflegen – wir bewerten lieber die authentische Substanz.
          </div>
        </div>

        {/* VOR-ORT-SERVICE */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Vor-Ort-Service in Wien & Umgebung</h2>
          <p className="mt-3 text-gray-700">
            Wir kommen zu Ihnen in Wien (1–23) und ins Umland bis ca. 100 km. Termine sind flexibel – werktags, abends und nach Absprache am Wochenende.
            Einzelstücke, Ensembles und komplette Positionen sind willkommen.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Flexibel", v: "Kurzfristige Termine möglich" },
              { k: "Sicher", v: "Behutsame Handhabung & Transport" },
              { k: "Transparent", v: "Kaufbeleg & klare Kommunikation" }
            ].map((b) => (
              <div key={b.k} className="rounded-2xl border bg-white p-5" style={{ borderColor: ACCENT }}>
                <p className="text-sm uppercase tracking-wide text-gray-600">{b.k}</p>
                <p className="mt-1 text-gray-800">{b.v}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@antikexperte.at"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white"
              style={{ background: ACCENT }}
            >
              Fotos senden & Termin vorschlagen
            </a>
            <a
              href="https://wa.me/436767202623"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
              style={{ borderColor: ACCENT }}
            >
              WhatsApp-Anfrage
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-5xl mx-auto px-6 pt-8 pb-14">
  <header className="max-w-3xl">
    <p className="text-xs uppercase tracking-[.18em] text-gray-500">FAQ</p>
    <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
      Häufige Fragen zum Möbelankauf
    </h2>
    <p className="mt-3 text-gray-700">
      Kurz beantwortet: die wichtigsten Punkte rund um Bewertung, Termin, Abholung und Auszahlung.
    </p>
  </header>

  <div className="mt-8 rounded-3xl border border-[#b38b5999] bg-white/80 backdrop-blur p-2 sm:p-3">
    <details className="group rounded-2xl border border-[#b38b5999] mb-3 bg-white p-5 sm:p-6 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-900">
          Kaufen Sie auch einzelne Stücke oder nur komplette Einrichtungen?
        </h3>
        <svg className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
        </svg>
      </summary>
      <p className="mt-3 leading-relaxed text-gray-700">
        Beides. Einzelobjekte, Paare und komplette Ensembles sind willkommen – ebenso Sammlungen und Nachlässe. Wir stimmen Ablauf und Termin flexibel ab.
      </p>
    </details>

    <details className="group rounded-2xl border border-[#b38b5999] mb-3 bg-white p-5 sm:p-6 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-900">Was kostet die Bewertung?</h3>
        <svg className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
        </svg>
      </summary>
      <p className="mt-3 leading-relaxed text-gray-700">
        Die Foto-Ersteinschätzung ist kostenlos. Das verbindliche Angebot erstellen wir nach Besichtigung – transparent und ohne Druck.
      </p>
    </details>

    <details className="group rounded-2xl border border-[#b38b5999] mb-3 bg-white p-5 sm:p-6 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-900">Reicht eine Ersteinschätzung per Foto?</h3>
        <svg className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
        </svg>
      </summary>
      <p className="mt-3 leading-relaxed text-gray-700">
        Für einen Richtwert ja: Gesamtansichten, Innenleben, Beschläge, wichtige Details und Maße. Das endgültige Angebot entsteht vor Ort.
      </p>
    </details>

    <details className="group rounded-2xl border border-[#b38b5999] mb-3 bg-white p-5 sm:p-6 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-900">Wie schnell erfolgt die Auszahlung?</h3>
        <svg className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
        </svg>
      </summary>
      <p className="mt-3 leading-relaxed text-gray-700">
        Direkt nach Einigung – bar oder via Echtzeit-Überweisung, immer mit Kaufbeleg. Auf Wunsch erhalten Sie eine kurze Bewertungsnotiz.
      </p>
    </details>

    <details className="group rounded-2xl border border-[#b38b5999] mb-3 bg-white p-5 sm:p-6 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-900">Organisieren Sie Abholung und Transport?</h3>
        <svg className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
        </svg>
      </summary>
      <p className="mt-3 leading-relaxed text-gray-700">
        Ja. Wir übernehmen die behutsame Abholung, stimmen Tragewege kurz ab und sorgen für sicheren Schutz beim Transport.
      </p>
    </details>

    <details className="group rounded-2xl border border-[#b38b5999] mb-3 bg-white p-5 sm:p-6 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-900">Interessieren Sie sich auch für Stücke mit Gebrauchsspuren?</h3>
        <svg className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
        </svg>
      </summary>
      <p className="mt-3 leading-relaxed text-gray-700">
        Ja. Authentische Patina und fachgerechte Reparaturen können wertbildend sein. Wir erklären transparent, wie der Zustand den Preis beeinflusst.
      </p>
    </details>

    <details className="group rounded-2xl border border-[#b38b5999] mb-3 bg-white p-5 sm:p-6 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-900">Kaufen Sie auch Designklassiker des 20. Jahrhunderts?</h3>
        <svg className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
        </svg>
      </summary>
      <p className="mt-3 leading-relaxed text-gray-700">
        Ja – ausgewählte Entwürfe mit nachvollziehbarer Herkunft und guter Substanz. Nennen Sie Marke, Modell und Maße, falls bekannt.
      </p>
    </details>

    <details className="group rounded-2xl border border-[#b38b5999] mb-3 bg-white p-5 sm:p-6 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-900">Sind Besichtigungen außerhalb Wiens möglich?</h3>
        <svg className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
        </svg>
      </summary>
      <p className="mt-3 leading-relaxed text-gray-700">
        Ja. Wien (1–23) regelmäßig, Umland bis ca. 100&nbsp;km häufig; größere Projekte nach Absprache auch österreichweit.
      </p>
    </details>

    <details className="group rounded-2xl border border-[#b38b5999] mb-3 bg-white p-5 sm:p-6 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-900">Welche Unterlagen sind hilfreich?</h3>
        <svg className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
        </svg>
      </summary>
      <p className="mt-3 leading-relaxed text-gray-700">
        Amtlicher Lichtbildausweis für den Verkauf ist erforderlich. Falls vorhanden: Rechnungen, Etiketten, alte Fotos oder Expertisen bitte bereitlegen.
      </p>
    </details>

    <details className="group rounded-2xl border border-[#b38b5999] bg-white p-5 sm:p-6 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium text-gray-900">Wie erreiche ich Sie am schnellsten?</h3>
        <svg className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
        </svg>
      </summary>
      <p className="mt-3 leading-relaxed text-gray-700">
        Am schnellsten per E-Mail mit Fotos und Maßen oder via WhatsApp. Wir melden uns in der Regel am selben Tag zurück.
      </p>
    </details>
  </div>

  <div className="mt-8 flex flex-col sm:flex-row gap-3">
    <a href="mailto:info@antikexperte.at" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white" style={{ background: "#b38b5999" }}>
      Frage stellen & Fotos senden
    </a>
    <a href="https://wa.me/436767202623" className="inline-flex items-center justify-center rounded-xl border border-[#b38b5999] px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors">
      WhatsApp-Anfrage
    </a>
  </div>
</section>


    </div>
  );
}

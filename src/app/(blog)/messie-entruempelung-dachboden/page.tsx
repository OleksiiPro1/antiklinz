import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messie Entrümpelung Dachboden – Wien & Umgebung | Diskret & gründlich",
  description:
    "Dachboden-Entrümpelung für Messie-Haushalte in Wien & Umgebung: diskret, respektvoll & strukturiert. Foto-Voranfrage gratis, transparente Angebote & sichere Abwicklung.",
};


const ACCENT = "#b38b5999";

export default function Page() {
  return (
    <>
    <section className="relative pt-10 pb-10 ">
      {/* мягкий фоновой градиент */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 60rem at 85% -10%, rgba(179,139,89,.18), rgba(179,139,89,0)), radial-gradient(40rem 40rem at -10% 120%, rgba(160,160,140,.15), rgba(160,160,140,0))",
        }}
      />

      {/* фоновое фото */}
      <div className="absolute inset-0">
        <Image
          src="/images/sl-23.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-99 blur-[1px]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/85" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div
          className="rounded-3xl border bg-white/80 backdrop-blur-md shadow-xl p-8 md:p-10"
          style={{ borderColor: ACCENT }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-600">Wien & Umgebung</p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mt-1">
            Messie Entrümpelung Dachboden – gründlich & einfühlsam
          </h1>
          <p className="mt-4 text-gray-800">
            Wir räumen verwinkelte Dachböden strukturiert, leise und respektvoll.
            Diskrete Abwicklung, klare Kommunikation und eine sichere Übergabe –
            mit fester Ansprechperson von der ersten Nachricht bis zum Abschluss.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Diskret & taktvoll", "Fester Ansprechpartner", "Rasche Terminvergabe", "Sofort-Abtransport"].map(
              (label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full px-3 py-1 text-sm border"
                  style={{ borderColor: ACCENT }}
                >
                  {label}
                </span>
              )
            )}
          </div>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Schonender Umgang mit Erinnerungsstücken & Dokumenten
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Foto-Voranfrage per WhatsApp/E-Mail – kostenlos
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Transparente Angebote ohne versteckte Posten
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Auf Wunsch Vor-/Nachher-Dokumentation
            </li>
          </ul>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/436767202623"
              className="inline-flex justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white"
              style={{ background: ACCENT }}
            >
              WhatsApp-Anfrage
            </a>
            <a
              href="mailto:info@antikexperte.at"
              className="inline-flex justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
              style={{ borderColor: ACCENT }}
            >
              E-Mail senden
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* DISKRETION & FEINGEFÜHL */}
<section className="pt-10 pb-10">
  <div className="max-w-6xl mx-auto px-6">
    <div
      className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-xl"
      style={{ borderColor: ACCENT }}
    >
      <p className="text-sm uppercase tracking-wider text-gray-600">
        Diskretion & Feingefühl
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">
        So gehen wir auf dem Dachboden vor
      </h2>
      <p className="mt-4 text-gray-800">
        Jeder Dachboden erzählt eine Geschichte. Wir arbeiten ruhig, strukturiert
        und mit Respekt – mit fester Ansprechperson und klaren Absprachen. Fundstücke
        mit Erinnerungswert oder Unterlagen werden gesichert zurückgelegt; auf Wunsch
        dokumentieren wir einzelne Schritte mit Fotos.
      </p>

      {/* Dreispaltige Highlights */}
      <div className="mt-7 grid md:grid-cols-3 gap-5">
        <article className="rounded-2xl border bg-white p-5" style={{ borderColor: ACCENT }}>
          <h3 className="text-lg font-semibold">Wertschätzung bewahren</h3>
          <p className="mt-2 text-gray-700">
            Familienalben, Briefe, Urkunden, Schlüssel & kleine Erinnerungen
            werden in markierten Boxen gesichert abgelegt – klar erkennbar und griffbereit.
          </p>
        </article>

        <article className="rounded-2xl border bg-white p-5" style={{ borderColor: ACCENT }}>
          <h3 className="text-lg font-semibold">Sicher verpackt</h3>
          <p className="mt-2 text-gray-700">
            Zerbrechliches wird getrennt verpackt, Laufwege geschützt und
            alles zügig nach unten gebracht – leise und ohne unnötige Wege.
          </p>
        </article>

        <article className="rounded-2xl border bg-white p-5" style={{ borderColor: ACCENT }}>
          <h3 className="text-lg font-semibold">Klare Kommunikation</h3>
          <p className="mt-2 text-gray-700">
            Vorab besprechen wir Bereiche, die wir genauer prüfen sollen
            (z.&nbsp;B. Kisten, Truhen, Kartons). Entscheidungen treffen Sie, wir setzen sie um.
          </p>
        </article>
      </div>

      {/* Prozessliste */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Ablauf in Kürze</h3>
          <ul className="mt-3 space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Begehung & kurze Bestandsaufnahme – Zugang, Treppen, Stellflächen.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Sichtung mit Ihnen: Was bleibt, was geprüft wird, was abgegeben werden darf.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Behutsames Verpacken & zügiger Abtransport mit eindeutiger Kennzeichnung.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Abschluss: Übergabe im aufgeräumten Zustand, auf Wunsch mit Foto-Protokoll.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
          <h3 className="text-xl font-semibold">Gut zu wissen</h3>
          <ul className="mt-3 list-disc pl-5 text-gray-800 space-y-2">
            <li>Diskrete Anfahrt & unauffälliges Auftreten auf Wunsch.</li>
            <li>Fixe Zeitfenster – werktags, abends oder nach Absprache am Wochenende.</li>
            <li>Auf Wunsch Vorab-Schätzung per Foto (WhatsApp/E-Mail) kostenlos.</li>
            <li>Transparente Angebote – keine versteckten Posten.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* LEISTUNGEN & PAKETE */}
<section className="pb-10">
  <div className="max-w-6xl mx-auto px-6">
    <div
      className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-xl"
      style={{ borderColor: ACCENT }}
    >
      <p className="text-sm uppercase tracking-wider text-gray-600">Leistungen & Pakete</p>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">
        Drei Optionen für Ihren Dachboden – transparent & planbar
      </h2>
      <p className="mt-4 text-gray-800">
        Wählen Sie den Leistungsumfang passend zu Ihrer Situation. Jede Variante
        beinhaltet eine feste Ansprechperson, behutsames Verpacken, sicheren Abtransport
        mit Beleg sowie die Übergabe im aufgeräumten Zustand.
      </p>

      {/* Karten */}
      <div className="mt-7 grid md:grid-cols-3 gap-6">
        {/* Kompakt */}
        <article className="relative rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
          <h3 className="text-xl font-semibold">Kompakt</h3>
          <p className="mt-2 text-gray-700">
            Für überschaubare Dachböden mit klarer Aufgabe.
          </p>
          <ul className="mt-4 space-y-2 text-gray-800">
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Vorab-Check per Foto & kurze Begehung vor Ort
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Sorgfältiges Verpacken & zügiger Abtransport mit Quittung
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Übergabe besenrein – klar und unkompliziert
            </li>
          </ul>
        </article>

        {/* Komfort */}
        <article className="relative rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
          <div className="absolute -top-3 right-5 rounded-full px-3 py-1 text-xs font-medium text-white"
               style={{ background: ACCENT }}>
            Beliebt
          </div>
          <h3 className="text-xl font-semibold">Komfort</h3>
          <p className="mt-2 text-gray-700">
            Mehr Sorgfalt für Erinnerungsstücke & Dokumente.
          </p>
          <ul className="mt-4 space-y-2 text-gray-800">
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Gesondertes Sichern von Fotos, Unterlagen & Kleinteilen in markierten Boxen
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Kurzes Foto-Protokoll & Beschriftung der Abstellplätze
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Flexible Zeitfenster – auch abends oder am Wochenende
            </li>
          </ul>
        </article>

        {/* Premium Plus */}
        <article className="relative rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
          <h3 className="text-xl font-semibold">Premium&nbsp;Plus</h3>
          <p className="mt-2 text-gray-700">
            Für komplexe Dachböden mit Projektleitung vor Ort.
          </p>
          <ul className="mt-4 space-y-2 text-gray-800">
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Detaillierte Planung, Fotodokumentation vorher/nachher
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Optional: kleiner Rückbau (z.&nbsp;B. Regalböden abmontieren)
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Diskrete Anfahrt ohne Beschriftung – alles aus einer Hand
            </li>
          </ul>
        </article>
      </div>

      {/* Preis-Hinweis */}
      <div className="mt-8 rounded-2xl border bg-white p-6 md:p-7" style={{ borderColor: ACCENT }}>
        <h3 className="text-xl font-semibold">Was kostet das?</h3>
        <p className="mt-2 text-gray-800">
          Die Kalkulation erfolgt transparent nach Umfang, Zugänglichkeit und Laufwegen.
          Bei klaren Fotoinformationen nennen wir häufig einen fixen Richtwert; ein
          verbindliches Angebot erhalten Sie nach der kurzen Besichtigung vor Ort.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:info@antikexperte.at"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white"
            style={{ background: ACCENT }}
          >
            Angebot anfordern
          </a>
          <a
            href="https://wa.me/436767202623"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
            style={{ borderColor: ACCENT }}
          >
            Foto-Check per WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* DISKRETION & FEINGEFÜHL */}
<section className="pb-10">
  <div className="max-w-6xl mx-auto px-6">
    <div
      className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-xl"
      style={{ borderColor: ACCENT }}
    >
      <p className="text-sm uppercase tracking-wider text-gray-600">Diskretion & Feingefühl</p>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">
        Taktvoll, respektvoll, zuverlässig – so arbeiten wir auf Ihrem Dachboden
      </h2>
      <p className="mt-4 text-gray-800">
        Dachböden erzählen oft persönliche Geschichten. Unser Team handelt entsprechend behutsam,
        wahrt Ihre Privatsphäre und arbeitet leise sowie strukturiert. Eine feste Ansprechperson
        begleitet Sie vom ersten Foto-Check bis zur Übergabe – transparent und ohne Aufhebens.
      </p>

      <div className="mt-7 grid md:grid-cols-2 gap-6">
        {/* Leitlinien */}
        <div className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
          <h3 className="text-xl font-semibold">Unsere Leitlinien vor Ort</h3>
          <ul className="mt-4 space-y-3 text-gray-800">
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Diskrete Anfahrt ohne auffällige Beschriftung und mit klar geplanter Route.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Behutsames Verpacken sensibler Inhalte (Fotos, Unterlagen, Erinnerungsstücke)
              in beschrifteten Boxen zur sicheren Übergabe.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Leise Arbeitsweise, Rücksicht auf Nachbarn und Hausgemeinschaft.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Klare Kommunikation: Schritt für Schritt erklären wir Vorgehen und Zeitplan.
            </li>
          </ul>
        </div>

        {/* Vertrauensversprechen */}
        <div className="rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
          <h3 className="text-xl font-semibold">Vertrauensversprechen</h3>
          <div className="mt-4 space-y-3 text-gray-800">
            <div className="flex gap-3">
              <div className="shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-semibold" style={{ background: ACCENT }}>1</div>
              <p>Eine Ansprechperson – kurze Wege, verlässliche Abstimmung, schnelle Rückmeldungen.</p>
            </div>
            <div className="flex gap-3">
              <div className="shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-semibold" style={{ background: ACCENT }}>2</div>
              <p>Dokumentation nach Bedarf: kurze Fotonotiz vor/nach dem Einsatz und geordnete Übergabe.</p>
            </div>
            <div className="flex gap-3">
              <div className="shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-semibold" style={{ background: ACCENT }}>3</div>
              <p>Abtransport gemäß Auftrag – strukturiert und zügig, mit Quittung für Ihre Unterlagen.</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@antikexperte.at"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white"
              style={{ background: ACCENT }}
            >
              Diskreten Termin anfragen
            </a>
            <a
              href="https://wa.me/436767202623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
              style={{ borderColor: ACCENT }}
            >
              Foto-Check per WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Hinweis */}
      <div className="mt-7 rounded-2xl border bg-white p-6" style={{ borderColor: ACCENT }}>
        <p className="text-gray-800">
          <strong>Wichtig:</strong> Wenn Sie bestimmte Gegenstände zurückbehalten möchten,
          markieren Sie diese bitte kurz – wir sichern sie separat und übergeben sie nach dem Einsatz geordnet.
        </p>
      </div>
    </div>
  </div>
</section>

{/* WAS WIR ÜBERNEHMEN – DACHBODEN-TYPISCH */}
<section className="pb-10">
  <div className="max-w-6xl mx-auto px-6">
    <div
      className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-xl"
      style={{ borderColor: ACCENT }}
    >
      <p className="text-sm uppercase tracking-wider text-gray-600">Leistungsübersicht</p>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">
        Was wir übernehmen – dachboden-typisch
      </h2>
      <p className="mt-4 text-gray-800">
        Wir arbeiten strukturiert, leise und mit Blick für Details. Typische Dachboden-Inhalte
        verpacken wir geordnet in beschriftete Boxen, empfindliche Dinge sichern wir gesondert.
        Auf Wunsch erhalten Sie eine kurze Fotonotiz vor/nach dem Einsatz.
      </p>

      <div className="mt-8 grid md:grid-cols-12 gap-6">
        {/* Linke Spalte: Kategorien */}
        <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
          {/* Kisten & Kartons */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <div className="flex items-start gap-4">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: ACCENT, color: "#fff" }}
                aria-hidden
              >
                📦
              </div>
              <div>
                <h3 className="text-lg font-semibold">Kisten & Kartons</h3>
                <p className="mt-2 text-gray-800">
                  Geordnete Sichtung, stabiles Umpacken in Boxen, kurze Beschriftung
                  (Thema/Raum) für die spätere Zuordnung.
                </p>
              </div>
            </div>
          </article>

          {/* Möbel & Kleinmöbel */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <div className="flex items-start gap-4">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: ACCENT, color: "#fff" }}
                aria-hidden
              >
                🛋️
              </div>
              <div>
                <h3 className="text-lg font-semibold">Möbel & Kleinmöbel</h3>
                <p className="mt-2 text-gray-800">
                  Behutsame Demontage, Trageschutz und gesicherter Abtransport – auch durch
                  enge Stiegenhäuser.
                </p>
              </div>
            </div>
          </article>

          {/* Textilien & Hausrat */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <div className="flex items-start gap-4">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: ACCENT, color: "#fff" }}
                aria-hidden
              >
                🧺
              </div>
              <div>
                <h3 className="text-lg font-semibold">Textilien & Hausrat</h3>
                <p className="mt-2 text-gray-800">
                  Sorgfältiges Verpacken, trockene Zwischenlagerung, klare Trennung nach
                  Themenbereichen für die Übersicht.
                </p>
              </div>
            </div>
          </article>

          {/* Bücher & Archive */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <div className="flex items-start gap-4">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: ACCENT, color: "#fff" }}
                aria-hidden
              >
                📚
              </div>
              <div>
                <h3 className="text-lg font-semibold">Bücher & Archive</h3>
                <p className="mt-2 text-gray-800">
                  Reihenfolge beibehalten, Karton mit kurzer Notiz (Autor/Sparte),
                  empfindliche Bände in Schutzfolie.
                </p>
              </div>
            </div>
          </article>

          {/* Elektro & Geräte (klein) */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <div className="flex items-start gap-4">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: ACCENT, color: "#fff" }}
                aria-hidden
              >
                🔌
              </div>
              <div>
                <h3 className="text-lg font-semibold">Elektro & Geräte (klein)</h3>
                <p className="mt-2 text-gray-800">
                  Vorsichtiges Trennen von Kabeln, Zubehör zusammenführen und separat
                  verpacken – alles gut beschriftet.
                </p>
              </div>
            </div>
          </article>

          {/* Dekor & Sammlungen */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
            <div className="flex items-start gap-4">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: ACCENT, color: "#fff" }}
                aria-hidden
              >
                🏺
              </div>
              <div>
                <h3 className="text-lg font-semibold">Dekor & Sammlungen</h3>
                <p className="mt-2 text-gray-800">
                  Einzelverpackung für Glas/Porzellan, gepolsterte Boxen, klare Kennzeichnung
                  nach Themen oder Herkunft.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Rechte Spalte: Behutsames Vorgehen */}
        <aside className="md:col-span-5 rounded-2xl border bg-white p-6 md:p-7 shadow-sm" style={{ borderColor: ACCENT }}>
          <h3 className="text-xl font-semibold">Behutsames Vorgehen</h3>
          <ul className="mt-4 space-y-3 text-gray-800">
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Diskrete Anfahrt, leise Arbeitsweise, Rücksicht auf Nachbarn und Hausgemeinschaft.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Empfindliche Inhalte separat sichern (Fotos, Unterlagen, Erinnerungsstücke).
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Boxen klar beschriften (Raum/Thema) – für maximale Nachvollziehbarkeit.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              Abtransport gemäß Auftrag – strukturiert und zügig, mit Beleg für Ihre Unterlagen.
            </li>
          </ul>

          <div className="mt-6 rounded-xl border p-4" style={{ borderColor: ACCENT }}>
            <p className="text-gray-800">
              <strong>Tipp:</strong> Markieren Sie bitte Gegenstände, die Sie behalten möchten.
              Wir sichern sie gesondert und übergeben sie gesammelt.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/436767202623"
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
        </aside>
      </div>
    </div>
  </div>
</section>

{/* ABLAUF – IN 3 SCHRITTEN */}
<section className="pb-10">
  <div className="max-w-6xl mx-auto px-6">
    <div
      className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-xl"
      style={{ borderColor: ACCENT }}
    >
      <p className="text-sm uppercase tracking-wider text-gray-600">Ablauf</p>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">
        So läuft es ab – in 3 Schritten
      </h2>

      <ol className="mt-8 grid md:grid-cols-3 gap-6">
        {/* Schritt 1 */}
        <li className="rounded-2xl border bg-white p-6 shadow-sm relative" style={{ borderColor: ACCENT }}>
          <div
            aria-hidden
            className="absolute -top-3 -left-3 h-10 w-10 rounded-xl flex items-center justify-center text-base"
            style={{ background: ACCENT, color: "#fff" }}
          >
            1
          </div>
          <h3 className="text-xl font-semibold pl-8">Foto-Voranfrage</h3>
          <p className="mt-3 text-gray-800">
            Senden Sie uns Gesamtansichten und 1–2 Detailfotos Ihres Dachbodens
            (WhatsApp/E-Mail). Kurze Hinweise zu Zugängen, Etage und Zeitfenster helfen bei der
            Planung.
          </p>
          <ul className="mt-4 space-y-2 text-gray-800">
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Blick von der Tür / zentraler Bereich</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Maße grob in Metern</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Besonderheiten (Stiege, Lift, enge Gänge)</li>
          </ul>
        </li>

        {/* Schritt 2 */}
        <li className="rounded-2xl border bg-white p-6 shadow-sm relative" style={{ borderColor: ACCENT }}>
          <div
            aria-hidden
            className="absolute -top-3 -left-3 h-10 w-10 rounded-xl flex items-center justify-center text-base"
            style={{ background: ACCENT, color: "#fff" }}
          >
            2
          </div>
          <h3 className="text-xl font-semibold pl-8">Termin vor Ort</h3>
          <p className="mt-3 text-gray-800">
            Taktvolle Besichtigung, leise Arbeitsweise, klare Abstimmung. Wir
            strukturieren die Schritte und geben eine realistische Zeiteinschätzung.
          </p>
          <ul className="mt-4 space-y-2 text-gray-800">
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Schonender Umgang mit Gegenständen</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Option: kurze Notiz mit Foto vor/nach</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Ausweis beim Auftrag erforderlich</li>
          </ul>
        </li>

        {/* Schritt 3 */}
        <li className="rounded-2xl border bg-white p-6 shadow-sm relative" style={{ borderColor: ACCENT }}>
          <div
            aria-hidden
            className="absolute -top-3 -left-3 h-10 w-10 rounded-xl flex items-center justify-center text-base"
            style={{ background: ACCENT, color: "#fff" }}
          >
            3
          </div>
          <h3 className="text-xl font-semibold pl-8">Angebot & Abtransport</h3>
          <p className="mt-3 text-gray-800">
            Sie erhalten ein verbindliches, transparentes Angebot. Nach Zusage arbeiten wir zügig
            und strukturiert. Auszahlung möglich – mit Beleg.
          </p>
          <ul className="mt-4 space-y-2 text-gray-800">
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Barzahlung oder Echtzeit-Überweisung</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Gesicherter Transport, Treppenschutz</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Kauf-/Auftragsbeleg für Ihre Unterlagen</li>
          </ul>
        </li>
      </ol>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href="https://wa.me/436767202623"
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

{/* PREISE & TRANSPARENZ */}
<section className="pb-10">
  <div className="max-w-6xl mx-auto px-6">
    <div
      className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-xl"
      style={{ borderColor: ACCENT }}
    >
      <p className="text-sm uppercase tracking-wider text-gray-600">Preise & Transparenz</p>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">
        Was beeinflusst die Kosten – was ist inkludiert?
      </h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
          <h3 className="text-lg font-semibold">Preisfaktoren</h3>
          <ul className="mt-3 space-y-2 text-gray-800">
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Umfang & Zugänglichkeit (Etage, Lift, Stiege)</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Zeitfenster & Teamgröße</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Empfindliche Inhalte (zusätzliche Sicherung)</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Entfernte Stellplätze / lange Wege</li>
          </ul>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: ACCENT }}>
          <h3 className="text-lg font-semibold">Inklusive Leistungen</h3>
          <ul className="mt-3 space-y-2 text-gray-800">
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Schonende Verpackung & sichere Tragewege</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Strukturierte Ordnung nach Bereichen</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Abtransport gemäß Vereinbarung</li>
            <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full" style={{ background: ACCENT }} /> Beleg/Bestätigung für Ihre Unterlagen</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border p-6" style={{ borderColor: ACCENT }}>
        <p className="text-gray-800">
          <strong>Hinweis:</strong> Ein verbindliches Angebot entsteht nach der Besichtigung.
          Für die Voranfrage genügen gute Fotos und ein kurzer Hinweis zu Etage/Zugang.
        </p>
      </div>
    </div>
  </div>
</section>

{/* VORHER / NACHHER – IMPRESSIONEN */}
<section className="pb-10">
  <div className="max-w-6xl mx-auto px-6">
    <div
      className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-xl"
      style={{ borderColor: ACCENT }}
    >
      <p className="text-sm uppercase tracking-wider text-gray-600">Eindruck</p>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">Vorher & Nachher</h2>
      <p className="mt-3 text-gray-800">
        Klare Wege, geordnete Boxen, gesicherte Gegenstände – so sieht ein fertig bearbeiteter
        Dachboden aus.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {/* Paar 1 */}
        <figure className="rounded-2xl overflow-hidden border bg-white shadow-sm" style={{ borderColor: ACCENT }}>
          <img src="/images/Dachboden -vorher-1.webp" alt="Dachboden – Vorher" className="w-full h-auto" />
          <figcaption className="px-4 py-2 text-sm text-gray-600">Vorher</figcaption>
        </figure>
        <figure className="rounded-2xl overflow-hidden border bg-white shadow-sm" style={{ borderColor: ACCENT }}>
          <img src="/images/Dachboden -Nachher-1.webp" alt="Dachboden – Nachher" className="w-full h-auto" />
          <figcaption className="px-4 py-2 text-sm text-gray-600">Nachher</figcaption>
        </figure>

        {/* Paar 2 */}
        <figure className="rounded-2xl overflow-hidden border bg-white shadow-sm" style={{ borderColor: ACCENT }}>
          <img src="/images/Dachboden -vorher-2.webp" alt="Dachboden – Vorher" className="w-full h-auto" />
          <figcaption className="px-4 py-2 text-sm text-gray-600">Vorher</figcaption>
        </figure>
        <figure className="rounded-2xl overflow-hidden border bg-white shadow-sm" style={{ borderColor: ACCENT }}>
          <img src="/images/Dachboden -Nachher-2.webp" alt="Dachboden – Nachher" className="w-full h-auto" />
          <figcaption className="px-4 py-2 text-sm text-gray-600">Nachher</figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section id="faq" className="pb-10">
  <div className="max-w-6xl mx-auto px-6">
    <div
      className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-xl"
      style={{ borderColor: ACCENT }}
    >
      <p className="text-sm uppercase tracking-wider text-gray-600">FAQ</p>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">Häufige Fragen</h2>

      <div className="mt-6 divide-y divide-gray-200/70 rounded-2xl border bg-white shadow-sm">
        <details className="group p-5" open>
          <summary className="flex items-start justify-between cursor-pointer list-none">
            <h3 className="text-xl font-medium">Wie läuft die erste Kontaktaufnahme?</h3>
            <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" /></svg>
          </summary>
          <p className="pt-3 text-gray-800">
            Schicken Sie uns Fotos und kurze Hinweise zu Zugang/Etage. Wir melden uns rasch mit
            Rückfragen oder einem Richtwert und schlagen Termine vor.
          </p>
        </details>

        <details className="group p-5">
          <summary className="flex items-start justify-between cursor-pointer list-none">
            <h3 className="text-xl font-medium">Arbeiten Sie diskret?</h3>
            <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" /></svg>
          </summary>
          <p className="pt-3 text-gray-800">
            Ja. Wir achten auf unauffällige Anfahrt, leise Arbeitsweise und respektvolle Kommunikation –
            auch gegenüber Nachbarn und Hausgemeinschaft.
          </p>
        </details>

        <details className="group p-5">
          <summary className="flex items-start justify-between cursor-pointer list-none">
            <h3 className="text-xl font-medium">Kann ich Dinge zurückbehalten?</h3>
            <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" /></svg>
          </summary>
          <p className="pt-3 text-gray-800">
            Natürlich. Bitte markieren Sie diese Gegenstände im Vorfeld. Wir legen sie separat ab
            und übergeben sie gesammelt.
          </p>
        </details>

        <details className="group p-5">
          <summary className="flex items-start justify-between cursor-pointer list-none">
            <h3 className="text-xl font-medium">Wie schnell erhalte ich mein Geld?</h3>
            <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" /></svg>
          </summary>
          <p className="pt-3 text-gray-800">
            Bei Einigung zahlen wir auf Wunsch sofort – bar oder via Echtzeit-Überweisung – und
            stellen den Beleg aus.
          </p>
        </details>

        <details className="group p-5">
          <summary className="flex items-start justify-between cursor-pointer list-none">
            <h3 className="text-xl font-medium">Arbeiten Sie auch außerhalb von Wien?</h3>
            <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" /></svg>
          </summary>
          <p className="pt-3 text-gray-800">
            Ja. Wir sind in ganz Wien (1–23), im Umland bis ca. 100 km und nach Absprache
            regelmäßig österreichweit unterwegs.
          </p>
        </details>
      </div>
    </div>
  </div>
</section>

{/* ABSCHLUSS-CTA */}
<section className="pb-16">
  <div className="max-w-6xl mx-auto px-6">
    <div
      className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-xl text-center"
      style={{ borderColor: ACCENT }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
        Bereit für einen geordneten Dachboden?
      </h2>
      <p className="mt-3 text-gray-800">
        Senden Sie uns Fotos und kurze Infos – wir melden uns rasch mit einer Ersteinschätzung
        und Terminvorschlägen.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://wa.me/436767202623"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white"
          style={{ background: ACCENT }}
        >
          WhatsApp-Anfrage
        </a>
        <a
          href="mailto:info@antikexperte.at"
          className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
          style={{ borderColor: ACCENT }}
        >
          E-Mail senden
        </a>
      </div>
    </div>
  </div>
</section>






     

    </>
  );
}

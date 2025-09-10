
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankauf historischer Münzen – Wien | Faire Preise & Sofortauszahlung",
  description:
    "Ankauf historischer Gold- & Silbermünzen in Wien: Taler, Gulden, Dukaten & Sammlungen. Foto-Ersteinschätzung gratis, faire Preise, diskret mit Sofortauszahlung.",
};

const ACCENT = "#b38b5999";

export default function HeroMuenzen() {
  return (
    <>
    <section className="relative overflow-hidden ">
      {/* мягкий фон + декоративные градиенты */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 60rem at 85% -10%, rgba(179,139,89,0.15), rgba(179,139,89,0)), radial-gradient(40rem 40rem at -20% 120%, rgba(179,139,89,0.12), rgba(179,139,89,0))",
        }}
      />
      {/* фон-фото */}
      
        <Image
          src="/images/Muenzen-1.webp" // положите файл в /public/images/
          alt="Ankauf Antiquitäten Münzen"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 blur-[1px]"
        />
        
      

      {/* контент-карта */}
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-8">
        <div
          className="rounded-3xl bg-white/80 backdrop-blur border shadow-sm p-8 md:p-10"
          style={{ borderColor: ACCENT }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Antikexperte.at · Wien & Umgebung
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mt-1">
            Ankauf Antiquitäten Münzen – Faire Preise bester Service in Wien
          </h1>
          <p className="mt-4 text-gray-700">
            Wir kaufen <strong>historische Münzen und Sammlungen</strong> – von Talern und Gulden
            über Dukaten bis zu modernen <strong>Gold- und Silbermünzen</strong>. Marktnahe
            Bewertung, klare Kommunikation und auf Wunsch <strong>Sofortauszahlung</strong>.
          </p>

          {/* бейджи */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-sm"
              style={{ background: ACCENT }}
            >
              Kostenlose Foto-Ersteinschätzung
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
              Sofortauszahlung (Bar / Echtzeit)
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
              Vor-Ort in Wien (1–23) & bis 100&nbsp;km
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
              Diskret & transparent
            </span>
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
            href="https://wa.me/436767202623"
            className="inline-flex justify-center items-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white shadow-sm transition-colors"
            style={{ background: "#b38b5999" }}
          >
            Jetzt Münzen anbieten (WhatsApp)
          </a>
            <a
              href="#schwerpunkte"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-900 hover:text-black transition-colors"
              style={{ borderColor: ACCENT }}
            >
              Schwerpunkte ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
    
        <section id="vorteile" className="relative">
      {/* мягкий декоративный фон */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40rem 40rem at 15% -10%, rgba(179,139,89,.10), rgba(179,139,89,0)), radial-gradient(24rem 24rem at 110% 120%, rgba(179,139,89,.10), rgba(179,139,89,0))",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: copy + cards */}
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Warum Antikexperte.at
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">
              Ihre Vorteile beim Ankauf historischer Münzen
            </h2>
            <p className="mt-4 text-gray-700">
              Wir kombinieren <strong>Numismatik-Know-how</strong> mit einem klaren,
              nachvollziehbaren Prozess. Von der ersten Foto-Einschätzung bis zur Auszahlung
              erhalten Sie alles aus einer Hand – transparent, diskret und zügig.
            </p>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-sm"
                style={{ background: ACCENT }}
              >
                Marktnahe Preise
              </span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
                Sofortauszahlung
              </span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
                Vor-Ort in Wien (1–23)
              </span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
                Bis 100&nbsp;km Umland
              </span>
            </div>

            {/* Feature cards */}
            <div className="mt-7 grid gap-4">
              <div
                className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm"
                style={{ borderColor: ACCENT }}
              >
                <h3 className="text-lg font-semibold">Transparente Bewertung</h3>
                <p className="mt-1.5 text-gray-700">
                  Wir begründen jedes Angebot: Erhaltungsgrad, Jahrgang, Prägestätte,
                  Seltenheit, Edelmetallgehalt und aktuelle Nachfrage fließen sichtbar in die
                  Bewertung ein.
                </p>
              </div>

              <div
                className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm"
                style={{ borderColor: ACCENT }}
              >
                <h3 className="text-lg font-semibold">Fachwissen &amp; sichere Prüfung</h3>
                <p className="mt-1.5 text-gray-700">
                  Echtheitscheck mit erprobten Methoden (Gewicht, Durchmesser, Randschrift,
                  Magnetismus, visuelle Merkmale). Bei Bedarf Einordnung von Varianten und
                  Prägebesonderheiten.
                </p>
              </div>

              <div
                className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm"
                style={{ borderColor: ACCENT }}
              >
                <h3 className="text-lg font-semibold">Schnell &amp; diskret bezahlt</h3>
                <p className="mt-1.5 text-gray-700">
                  Auf Wunsch <strong>sofort</strong>—Bar oder per Echtzeit-Überweisung, mit
                  Beleg. Termine flexibel: werktags, abends und nach Absprache am Wochenende.
                </p>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#ablauf"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white transition-colors"
                style={{ background: ACCENT }}
              >
                So funktioniert’s
              </a>
              <a
                href="#schwerpunkte"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-900 hover:text-black transition-colors"
                style={{ borderColor: ACCENT }}
              >
                Was wir ankaufen
              </a>
            </div>
          </div>

          {/* RIGHT: STABLE image panel (без fill/absolute) */}
          <div className="lg:pl-2">
            {/* Большой главный кадр */}
            <figure
              className="rounded-2xl overflow-hidden border shadow-sm bg-white"
              style={{ borderColor: ACCENT }}
            >
              <Image
                src="/images/Muenzen-2-1.webp"
                alt="Detailaufnahme alter Silbermünzen"
                width={1200}
                height={900}
                sizes="(min-width:1024px) 560px, 100vw"
                className="w-full h-auto object-cover"
                priority
              />
            </figure>

            {/* Две миниатюры ниже, фикс. пропорции */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <figure
                className="rounded-xl overflow-hidden border shadow-sm bg-white"
                style={{ borderColor: ACCENT }}
              >
                <Image
                  src="/images/Muenzen-2-3.webp"
                  alt="Goldmünzen – Dukaten & moderne Bullion"
                  width={800}
                  height={600}
                  sizes="(min-width:1024px) 272px, 50vw"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </figure>
              <figure
                className="rounded-xl overflow-hidden border shadow-sm bg-white"
                style={{ borderColor: ACCENT }}
              >
                <Image
                  src="/images/Muenzen-2-2.webp"
                  alt="Taler, Gulden und Prägevarianten im Tablett"
                  width={800}
                  height={600}
                  sizes="(min-width:1024px) 272px, 50vw"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </figure>
            </div>

            {/* подпись */}
            <p className="mt-3 text-xs text-gray-600">
              Beispielbilder aus unserem Arbeitsalltag.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section id="schwerpunkte" className="relative">
      {/* мягкий декоративный фон */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(42rem 42rem at -10% 0%, rgba(179,139,89,.10), rgba(179,139,89,0)), radial-gradient(26rem 26rem at 110% 120%, rgba(179,139,89,.10), rgba(179,139,89,0))",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-6">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-wider text-gray-500">Ankaufsschwerpunkte</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Was wir ankaufen – Münzen & Besonderheiten
          </h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Wir suchen sammlungswürdige <strong>Gold- und Silbermünzen</strong>, Talermaterial,
            prägehistorische Seltenheiten und vollständige Bestände. Einzelstücke sind ebenso
            willkommen wie <strong>Sammlungen</strong> und <strong>Nachlässe</strong>. Jedes Angebot
            wird klar begründet – nachvollziehbar und fair.
          </p>

          {/* badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800" style={{ borderColor: ACCENT }}>
              Österreich & Mitteleuropa
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800" style={{ borderColor: ACCENT }}>
              19.–20. Jh. & früher
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800" style={{ borderColor: ACCENT }}>
              Seltene Prägungen
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800" style={{ borderColor: ACCENT }}>
              Varianten & Fehlprägungen
            </span>
          </div>
        </div>

        {/* GRID: карточки категорий */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Goldmünzen & Bullion */}
          <article className="group rounded-2xl border bg-white/80 backdrop-blur shadow-sm overflow-hidden" style={{ borderColor: ACCENT }}>
            <div className="relative h-40">
              <Image
                src="/images/Muenzen-3-1.webp"
                alt="Goldmünzen – Dukaten, Kronen & Bullion"
                fill
                sizes="(min-width:1024px) 380px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Goldmünzen &amp; Bullion</h3>
              <p className="mt-1.5 text-gray-700">
                Dukaten, Kronen/Franz Joseph, österreichische 4/1 Dukaten, Sovereigns,
                Philharmoniker, moderne Anlagestücke.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Feingehalt</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Jahrgang</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Prägeort</li>
              </ul>
            </div>
          </article>

          {/* Silbermünzen & Taler */}
          <article className="group rounded-2xl border bg-white/80 backdrop-blur shadow-sm overflow-hidden" style={{ borderColor: ACCENT }}>
            <div className="relative h-40">
              <Image
                src="/images/Muenzen-3-2.webp"
                alt="Silbermünzen & Taler – 18.–20. Jh."
                fill
                sizes="(min-width:1024px) 380px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Silbermünzen &amp; Taler</h3>
              <p className="mt-1.5 text-gray-700">
                Taler, Gulden, Kronen; Kaiserzeit & Monarchie; hübsche Patina,
                stimmige Erhaltung und Varianten willkommen.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Erhaltung</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Variante</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Randschrift</li>
              </ul>
            </div>
          </article>

          {/* Österreich & Nachbarländer (19.–20. Jh.) */}
          <article className="group rounded-2xl border bg-white/80 backdrop-blur shadow-sm overflow-hidden" style={{ borderColor: ACCENT }}>
            <div className="relative h-40">
              <Image
                src="/images/Muenzen-3-3.webp"
                alt="Österreich & Nachbarländer – 19.–20. Jahrhundert"
                fill
                sizes="(min-width:1024px) 380px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Österreich &amp; Mitteleuropa</h3>
              <p className="mt-1.5 text-gray-700">
                Habsburgermonarchie, Republik, Nachbarländer: belegte Jahrgänge,
                gesuchte Prägestätten, komplette Reihen.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Prägestätte</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Serie</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Provenienz</li>
              </ul>
            </div>
          </article>

          {/* Mittelalter & frühe Neuzeit */}
          <article className="group rounded-2xl border bg-white/80 backdrop-blur shadow-sm overflow-hidden" style={{ borderColor: ACCENT }}>
            <div className="relative h-40">
              <Image
                src="/images/Muenzen-3-4.webp"
                alt="Mittelalter & frühe Neuzeit – Brakteaten, Kreuzer, Dukaten"
                fill
                sizes="(min-width:1024px) 380px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Mittelalter &amp; frühe Neuzeit</h3>
              <p className="mt-1.5 text-gray-700">
                Brakteaten, Kreuzer, frühe Dukaten; Typenvielfalt, Stempelbesonderheiten,
                historische Kontextbezüge.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Stempel</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Typologie</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Datierung</li>
              </ul>
            </div>
          </article>

          {/* Gedenkmünzen & Sammlerreihen */}
          <article className="group rounded-2xl border bg-white/80 backdrop-blur shadow-sm overflow-hidden" style={{ borderColor: ACCENT }}>
            <div className="relative h-40">
              <Image
                src="/images/Muenzen3-5.webp"
                alt="Gedenkmünzen & Sammlerreihen – komplette Sätze"
                fill
                sizes="(min-width:1024px) 380px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Gedenkmünzen &amp; Reihen</h3>
              <p className="mt-1.5 text-gray-700">
                Vollständige Jahrgänge, Etuis, Zertifikate; gepflegte Sammlungspflege
                erhöht die Attraktivität.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Komplett</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Etui</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Beleg</li>
              </ul>
            </div>
          </article>

          {/* Fehlprägungen & Besonderheiten */}
          <article className="group rounded-2xl border bg-white/80 backdrop-blur shadow-sm overflow-hidden" style={{ borderColor: ACCENT }}>
            <div className="relative h-40">
              <Image
                src="/images/Muenzen-3-6.webp"
                alt="Fehlprägungen & Besonderheiten – numismatische Raritäten"
                fill
                sizes="(min-width:1024px) 380px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Fehlprägungen &amp; Besonderheiten</h3>
              <p className="mt-1.5 text-gray-700">
                Achsverdrehung, Dezentrierung, Stempelrisse, seltene Randvarianten
                und Probeabschläge – bitte Details nennen.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Achsverdrehung</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Randtyp</li>
                <li className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: ACCENT }}>Probe</li>
              </ul>
            </div>
          </article>
        </div>

        {/* Hinweis + CTA */}
        <div className="mt-8 rounded-2xl border bg-white/80 backdrop-blur p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4" style={{ borderColor: ACCENT }}>
          <p className="text-gray-700">
            <strong>Tipp:</strong> Für eine schnelle Ersteinschätzung senden Sie bitte
            Gesamtansichten, <em>Randschrift</em>, Durchmesser/Grammangabe und eine kurze Notiz
            zu Jahrgang &amp; Prägestätte. Ein verbindliches Angebot entsteht nach Sichtung.
          </p>
          <a
            href="https://wa.me/436767202623"
            className="shrink-0 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm uppercase tracking-wide text-white transition-colors"
            style={{ background: ACCENT }}
          >
            Fotos senden
          </a>
        </div>
      </div>
    </section>
    <section id="schwerpunkte" className="relative">
      {/* мягкий декоративный фон */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(38rem 38rem at 15% -10%, rgba(179,139,89,.10), rgba(179,139,89,0)), radial-gradient(24rem 24rem at 110% 120%, rgba(179,139,89,.10), rgba(179,139,89,0))",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Ankaufsschwerpunkte
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">
            Was wir ankaufen – Münzen & Epochen
          </h2>
          <p className="mt-4 text-gray-700">
            Wir suchen einzelne Stücke ebenso wie vollständige Sammlungen. Im Fokus stehen
            historische Münzen mit Charakter – von klassischen Talern bis zu feinen Goldprägungen.
            Jede Einlieferung wird sachlich, nachvollziehbar und respektvoll bewertet.
          </p>
        </div>

        {/* grid of cards */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Gold */}
          <article
            className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <h3 className="text-lg font-semibold">Goldmünzen & Dukaten</h3>
            <p className="mt-1.5 text-gray-700">
              Dukaten, Kronen/Niemand, historische Handelsgold-Stücke sowie moderne Anlagemünzen
              (z.&nbsp;B. Philharmoniker). Gehalt, Erhaltung und Prägejahr bestimmen die Einordnung.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Dukat
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                1–10 Kronen
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Philharmoniker
              </span>
            </div>
          </article>

          {/* Silber */}
          <article
            className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <h3 className="text-lg font-semibold">Silber: Taler, Gulden, Kronen</h3>
            <p className="mt-1.5 text-gray-700">
              18.–20. Jahrhundert: Taler, Vereinsmünzen, Gulden-Serien, Kronen/Schilling.
              Gewicht, Randschrift, Prägestätte und Patina sind zentrale Kriterien.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Taler
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Gulden
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Kronen
              </span>
            </div>
          </article>

          {/* Mittelalter & früher */}
          <article
            className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <h3 className="text-lg font-semibold">Mittelalter & frühe Neuzeit</h3>
            <p className="mt-1.5 text-gray-700">
              Geprägte Geschichte: Groschen, Kreuzer, regionale Prägungen. Varianten und seltene
              Typen werden behutsam eingeordnet – Authentizität steht an erster Stelle.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Groschen
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Kreuzer
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Regional
              </span>
            </div>
          </article>

          {/* Moderne Numismatik */}
          <article
            className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <h3 className="text-lg font-semibold">Moderne Numismatik</h3>
            <p className="mt-1.5 text-gray-700">
              Gedenkmünzen, PP/Proof-Ausgaben, Serien und Sets. Original-Etuis, Zertifikate und
              lückenlose Reihen erhöhen die Attraktivität.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                PP / Proof
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Serien
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Etui & Zertifikat
              </span>
            </div>
          </article>

          {/* Varianten & Fehlprägungen */}
          <article
            className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <h3 className="text-lg font-semibold">Seltene Varianten & Besonderheiten</h3>
            <p className="mt-1.5 text-gray-700">
              Rand- und Stempelvarianten, Prägebesonderheiten, Jahrgangsdifferenzen: Wir prüfen
              sorgfältig und ordnen wertrelevante Details transparent ein.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Randschrift
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Stempel
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Jahrgang
              </span>
            </div>
          </article>

          {/* Sammlungen */}
          <article
            className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <h3 className="text-lg font-semibold">Sammlungen & Nachlässe</h3>
            <p className="mt-1.5 text-gray-700">
              Gemischte Lots, Alben, Tabletts – wir erfassen strukturiert und machen ein
              marktgerechtes Gesamtangebot. Einzelne Highlights werden separat gewürdigt.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Alben
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Lots
              </span>
              <span className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: ACCENT }}>
                Highlights
              </span>
            </div>
          </article>
        </div>

        {/* Info box: Ersteinschätzung */}
        <div
          className="mt-8 rounded-2xl border bg-white p-6 md:p-7 shadow-sm"
          style={{ borderColor: ACCENT }}
        >
          <h3 className="text-xl font-semibold">Für die Ersteinschätzung hilfreich</h3>
          <ul className="mt-3 list-disc pl-5 space-y-1.5 text-gray-700">
            <li>Fotos: Vorder- & Rückseite, Rand (Randschrift), ggf. mehrere Detailaufnahmen.</li>
            <li>Angaben (falls möglich): Durchmesser, Gewicht, Jahrgang, Prägestätte.</li>
            <li>Unterlagen: Etuis, Zertifikate, alte Belege oder Notizen zur Herkunft.</li>
            <li>Hinweis: Bitte nicht polieren – die originale Oberfläche ist wichtig.</li>
          </ul>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            
            <a
              href="https://wa.me/436767202623"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-900 hover:text-black transition-colors"
              style={{ borderColor: ACCENT }}
            >
              Jetzt Fotos senden
            </a>
          </div>
        </div>
      </div>
    </section>
     <section id="ablauf" className="relative">
      {/* Декоративный фон */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(42rem 42rem at 10% -10%, rgba(179,139,89,.10), rgba(179,139,89,0)), radial-gradient(28rem 28rem at 110% 120%, rgba(179,139,89,.12), rgba(179,139,89,0))",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Ablauf & Auszahlung
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-1">
            So läuft der Ankauf ab – klar, schnell und nachvollziehbar
          </h2>
          <p className="mt-4 text-gray-700">
            Von der ersten Nachricht bis zur Zahlung vergeht oft nur wenig Zeit. Wir arbeiten
            strukturiert, erklären jeden Schritt und halten die Abwicklung angenehm schlank.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {/* Step 1 */}
          <article
            className="relative rounded-2xl border bg-white/85 backdrop-blur p-6 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <div
              aria-hidden
              className="absolute -top-3 -left-3 rounded-full border px-3 py-1 text-xs bg-white"
              style={{ borderColor: ACCENT }}
            >
              1
            </div>
            <h3 className="text-lg font-semibold">Kontakt & Foto-Check</h3>
            <p className="mt-2 text-gray-700">
              Senden Sie uns Bilder per E-Mail oder Messenger: Vorder-/Rückseite, Rand, gern auch
              ein Lineal/ Maßband im Bild. Nützlich sind Jahrgang, Prägestätte, Durchmesser und
              Gewicht (falls verfügbar).
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-gray-700">
              <li>Ersteinschätzung kostenfrei & unverbindlich</li>
              <li>Hinweis: bitte nicht polieren – Oberfläche bleibt wichtig</li>
              <li>Rückfragen klären wir kurz & direkt</li>
            </ul>
          </article>

          {/* Step 2 */}
          <article
            className="relative rounded-2xl border bg-white/85 backdrop-blur p-6 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <div
              aria-hidden
              className="absolute -top-3 -left-3 rounded-full border px-3 py-1 text-xs bg-white"
              style={{ borderColor: ACCENT }}
            >
              2
            </div>
            <h3 className="text-lg font-semibold">Termin in Wien & Umland</h3>
            <p className="mt-2 text-gray-700">
              Wir prüfen Erhaltung, Echtheit und Merkmale (Randschrift, Varianten, Feingehalt).
              Termine sind flexibel – werktags, abends oder nach Absprache am Wochenende.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-gray-700">
              <li>Vor-Ort in Wien (1–23) & bis ~100&nbsp;km Umland</li>
              <li>Klare Erläuterung aller Kriterien</li>
              <li>Amtlicher Lichtbildausweis beim Verkauf erforderlich</li>
            </ul>
          </article>

          {/* Step 3 */}
          <article
            className="relative rounded-2xl border bg-white/85 backdrop-blur p-6 shadow-sm"
            style={{ borderColor: ACCENT }}
          >
            <div
              aria-hidden
              className="absolute -top-3 -left-3 rounded-full border px-3 py-1 text-xs bg-white"
              style={{ borderColor: ACCENT }}
            >
              3
            </div>
            <h3 className="text-lg font-semibold">Angebot & Auszahlung</h3>
            <p className="mt-2 text-gray-700">
              Sie erhalten ein verbindliches, marktgerechtes Angebot. Bei Einigung zahlen wir auf
              Wunsch <strong>sofort</strong> – bar oder via Echtzeit-Überweisung – und erstellen
              den Kaufbeleg.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-gray-700">
              <li>Sofortzahlung mit Beleg</li>
              <li>Strukturierte Übergabe, diskrete Abwicklung</li>
              <li>Bei größeren Posten organisieren wir die Abholung</li>
            </ul>
          </article>
        </div>

        {/* Badges row */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["Wien 1–23", "Umland bis 100 km", "Diskret & zügig", "Marktnahe Preise"].map(
            (t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-800"
                style={{ borderColor: ACCENT }}
              >
                {t}
              </span>
            )
          )}
        </div>

        {/* Transparenz box */}
        <div
          className="mt-8 rounded-2xl border bg-white p-6 md:p-7 shadow-sm"
          style={{ borderColor: ACCENT }}
        >
          <h3 className="text-xl font-semibold">Transparenz & Unterlagen</h3>
          <div className="mt-3 grid md:grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              <li>Nachvollziehbare Begründung des Angebots</li>
              <li>Kaufbeleg für Ihre Unterlagen</li>
              <li>Auf Wunsch kurze Bewertungsnotiz</li>
            </ul>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              <li>Keine Vorleistungen nötig</li>
              <li>Termine nach Ihren Möglichkeiten</li>
              <li>Respektvoller Umgang mit Sammlungen & Nachlässen</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/436767202623"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white transition-colors"
            style={{ background: ACCENT }}
          >
            Jetzt Fotos senden
          </a>
          <a
            href="#faq"
            className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-900 hover:text-black transition-colors"
            style={{ borderColor: ACCENT }}
          >
            Häufige Fragen
          </a>
        </div>
      </div>
    </section>
    <section id="faq" className="relative">
      {/* мягкий фон */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(42rem 42rem at -10% 0%, rgba(179,139,89,.10), rgba(179,139,89,0)), radial-gradient(28rem 28rem at 110% 120%, rgba(179,139,89,.10), rgba(179,139,89,0))",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Häufige Fragen (FAQ)
        </h2>
        <p className="mt-2 text-gray-700">
          Kurz beantwortet: die wichtigsten Punkte zu Bewertung, Termin und Auszahlung.
        </p>

        <div
          className="mt-8 rounded-2xl border bg-white/80 backdrop-blur shadow-sm divide-y divide-gray-200/70"
          style={{ borderColor: ACCENT }}
        >
          {/* 1 */}
          <details className="group p-5" open>
            <summary className="flex items-start justify-between cursor-pointer list-none">
              <h3 className="text-lg md:text-xl font-medium">
                Reicht eine Ersteinschätzung per Foto?
              </h3>
              <svg
                className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                />
              </svg>
            </summary>
            <p className="pt-3 text-gray-800">
              Ja, für einen <strong>Richtwert</strong> genügt das meist. Ein verbindliches Angebot
              entsteht nach der <strong>Sichtung vor Ort</strong>. Hilfreich sind Angaben zu
              Jahrgang, Prägestätte, Durchmesser und Gewicht.
            </p>
          </details>

          {/* 2 */}
          <details className="group p-5">
            <summary className="flex items-start justify-between cursor-pointer list-none">
              <h3 className="text-lg md:text-xl font-medium">
                Welche Münzen kaufen Sie an – auch einzelne Stücke?
              </h3>
              <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
              </svg>
            </summary>
            <p className="pt-3 text-gray-800">
              Wir kaufen <strong>Einzelstücke und Sammlungen</strong>: historische Taler, Gulden,
              Kronen, Dukaten, Gedenkmünzen sowie Gold- und Silbermünzen. Auch Varianten und
              besondere Prägungen prüfen wir gern.
            </p>
          </details>

          {/* 3 */}
          <details className="group p-5">
            <summary className="flex items-start justify-between cursor-pointer list-none">
              <h3 className="text-lg md:text-xl font-medium">
                Muss ich die Münzen vor dem Termin reinigen oder polieren?
              </h3>
              <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
              </svg>
            </summary>
            <p className="pt-3 text-gray-800">
              Bitte <strong>nicht polieren</strong>. Die originale Oberfläche ist wichtig für die
              Bewertung. Leicht staubfrei lagern genügt.
            </p>
          </details>

          {/* 4 */}
          <details className="group p-5">
            <summary className="flex items-start justify-between cursor-pointer list-none">
              <h3 className="text-lg md:text-xl font-medium">
                Wie schnell erfolgt die Auszahlung?
              </h3>
              <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
              </svg>
            </summary>
            <p className="pt-3 text-gray-800">
              Bei Einigung zahlen wir auf Wunsch <strong>sofort</strong> – bar oder via
              Echtzeit-Überweisung – und erstellen den Kaufbeleg.
            </p>
          </details>

          {/* 5 */}
          <details className="group p-5">
            <summary className="flex items-start justify-between cursor-pointer list-none">
              <h3 className="text-lg md:text-xl font-medium">
                Kommen Sie auch außerhalb von Wien?
              </h3>
              <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
              </svg>
            </summary>
            <p className="pt-3 text-gray-800">
              Ja. Wir sind in <strong>Wien (1–23)</strong> und im Umland bis etwa{" "}
              <strong>100&nbsp;km</strong> unterwegs; bei passenden Projekten auch darüber hinaus.
            </p>
          </details>

          {/* 6 */}
          <details className="group p-5">
            <summary className="flex items-start justify-between cursor-pointer list-none">
              <h3 className="text-lg md:text-xl font-medium">
                Welche Unterlagen sind hilfreich?
              </h3>
              <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
              </svg>
            </summary>
            <p className="pt-3 text-gray-800">
              Falls vorhanden: Rechnungen, Zertifikate, alte Fotos, Auktionskataloge oder
              Sammlungslisten. Beim Verkauf benötigen wir einen <strong>Lichtbildausweis</strong>.
            </p>
          </details>

          {/* 7 */}
          <details className="group p-5">
            <summary className="flex items-start justify-between cursor-pointer list-none">
              <h3 className="text-lg md:text-xl font-medium">
                Können Sie auch Nachlässe und größere Bestände bewerten?
              </h3>
              <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
              </svg>
            </summary>
            <p className="pt-3 text-gray-800">
              Gern. Wir strukturieren die Sichtung, dokumentieren die Kriterien und unterbreiten
              ein <strong>transparentes</strong> Angebot; auf Wunsch mit kurzer Bewertungsnotiz.
            </p>
          </details>
        </div>
      </div>
    </section>





    </>
  );
}

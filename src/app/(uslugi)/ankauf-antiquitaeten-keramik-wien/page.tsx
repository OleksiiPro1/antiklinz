// app/ankauf-antiquitaeten-keramik-wien/page.tsx
import type { Metadata } from "next";
import bg1 from "@/../public/images/Ankauf Antiquitäten Keramik.webp";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Ankauf Antiquitäten Keramik – Faire Preise & bester Service in Wien",
  description:
    "Kostenlose Foto-Ersteinschätzung, transparente Angebote und sofortige Auszahlung. Ankauf von Porzellan, Steinzeug, Fayence & Studio-Keramik in Wien und Umgebung.",
};

export const dynamic = "error"; // страница полностью статическая (подходит для static export)
const ACCENT = "#b38b5999";     // общий акцент-цвет (как на сайте)

export default function KeramikPage() {
  return (
    <>
{/* HERO – Keramik */}
<section className="relative overflow-hidden pt-28 pb-10">
  {/* weiche „Glasur“-Flächen im Hintergrund */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 -z-10"
    style={{
      background:
        "radial-gradient(60rem 60rem at 85% -10%, rgba(179,139,89,.18), rgba(179,139,89,0)), radial-gradient(50rem 50rem at -10% 110%, rgba(161,136,127,.20), rgba(161,136,127,0))",
    }}
  />

  <div className="max-w-6xl mx-auto px-6">
    <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-8 items-center">
      {/* Textblock */}
      <div className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-sm"
           style={{ borderColor: "#b38b5999" }}>
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Antikexperte.at • Wien
        </p>
        <h1 className="mt-2 text-4xl md:text-5xl font-light leading-tight">
          Ankauf Antiquitäten Keramik – Faire Preise &amp; bester Service in Wien
        </h1>
        <p className="mt-4 text-gray-700">
          Kostenlose Foto-Ersteinschätzung, transparente Angebote auf Basis echter Marktwerte
          und – bei Einigung – <strong>sofortige Auszahlung</strong> per Barzahlung oder
          Echtzeit-Überweisung. Diskret, verlässlich und mit klarem Blick für Qualität.
        </p>

        {/* Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm text-gray-800 border"
                style={{ borderColor: "#b38b5999" }}>
            5+ Jahre Erfahrung
          </span>
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-[rgba(179,139,89,.15)]">
            Wien 1–23 &nbsp;•&nbsp; bis 100&nbsp;km
          </span>
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm text-gray-800 border"
                style={{ borderColor: "#b38b5999" }}>
            Foto-Check gratis
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/436767202623"
            className="inline-flex justify-center items-center rounded-xl px-6 py-3 text-sm uppercase tracking-wide text-white shadow-sm transition-colors"
            style={{ background: "#b38b5999" }}
          >
            Fotos senden (WhatsApp)
          </a>
          <a
            href="https://wa.me/436767202623"
            className="inline-flex justify-center items-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
            style={{ borderColor: "#b38b5999" }}
          >
            Termin vereinbaren
          </a>
        </div>
      </div>

      {/* Bildblock */}
      <figure className="relative">
        <div className="relative aspect-[5/3.3] w-full overflow-hidden rounded-3xl border shadow-sm bg-white"
             style={{ borderColor: "#b38b5999" }}>
          {/* Положи файл в /public/images/keramik-hero.webp */}
          <Image
  src={bg1}
  alt="Ankauf Antiquitäten Keramik"
  className="w-full h-auto rounded"
  priority
/>
          
          {/* zarter Glanz wie Keramikglasur */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_120%_at_80%_-20%,rgba(255,255,255,.35),rgba(255,255,255,0))]" />
        </div>
        <figcaption className="mt-3 text-sm text-gray-600">
          Porzellan, Steinzeug, Fayence &amp; Studio-Keramik – fachkundig bewertet, fair angekauft.
        </figcaption>
      </figure>
    </div>
  </div>
</section>
{/* VORTEILE */}
<section className="pt-12 pb-10 max-w-6xl mx-auto px-6">
  <div className="relative rounded-3xl border bg-white/80 backdrop-blur p-6 sm:p-8 shadow-sm overflow-hidden"
       style={{ borderColor: ACCENT }}>
    {/* мягкий декоративный фон */}
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60"
         style={{
           background:
             "radial-gradient(40rem 20rem at 100% 0%, rgba(179,139,89,.12), rgba(179,139,89,0)),radial-gradient(30rem 18rem at -10% 100%, rgba(179,139,89,.10), rgba(179,139,89,0))"
         }} />

    <p className="text-sm uppercase tracking-wider text-gray-500">Ihre Vorteile</p>
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-2">
      Warum Antikexperte.at für Keramik?
    </h2>
    <p className="mt-3 text-gray-700">
      Wir bewerten und kaufen <strong>Porzellan, Steinzeug, Fayence & Studio-Keramik</strong> in Wien und Umgebung.
      Transparent, zügig und mit sicherem Blick für Qualität – vom Einzelstück bis zur Sammlung.
    </p>

    {/* фишки — карточки */}
    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1 */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border"
             style={{ borderColor: ACCENT }}>
          {/* лупа */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
            <path fill="currentColor"
              d="M10 4a6 6 0 1 1 0 12A6 6 0 0 1 10 4m10.32 14.9l-3.76-3.76a8 8 0 1 0-1.41 1.41l3.76 3.76a1 1 0 0 0 1.41-1.41Z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Transparente Preise</h3>
        <p className="mt-1 text-gray-700 text-sm">
          Angebote auf Basis <em>aktueller Marktbeobachtung</em>, dokumentierter Vergleichsstücke sowie
          Kriterien wie Hersteller, Dekor, Erhaltung und Seltenheit.
        </p>
      </article>

      {/* 2 */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border"
             style={{ borderColor: ACCENT }}>
          {/* покал */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
            <path fill="currentColor"
              d="M7 3h10l-1 7a6 6 0 1 1-8 0L7 3Zm10 16H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2Z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Fachwissen für Keramik</h3>
        <p className="mt-1 text-gray-700 text-sm">
          Augarten, Meissen, Wiener Werkstätte, Jugendstil &amp; Art Déco, Steinzeug/Fayence,
          Studio-Keramik: sichere Einordnung von Dekoren, Marken und Malersignaturen.
        </p>
      </article>

      {/* 3 */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border"
             style={{ borderColor: ACCENT }}>
          {/* blitz */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
            <path fill="currentColor"
              d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Schnell &amp; diskret</h3>
        <p className="mt-1 text-gray-700 text-sm">
          Kostenlose Foto-Ersteinschätzung, flexible Termine, auf Wunsch <strong>sofortige Auszahlung</strong> –
          bar oder per Echtzeit-Überweisung – inklusive Beleg.
        </p>
      </article>

      {/* 4 */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border"
             style={{ borderColor: ACCENT }}>
          {/* standort */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
            <path fill="currentColor"
              d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Vor-Ort in Wien</h3>
        <p className="mt-1 text-gray-700 text-sm">
          Hausbesuche in allen 23 Bezirken, Fahrten bis ca. 100&nbsp;km ins Umland.
          Sorgsame Handhabung &amp; sichere Verpackung sind selbstverständlich.
        </p>
      </article>
    </div>

    {/* бейджи — как подсказка каналов связи */}
    <div className="mt-6 flex flex-wrap gap-2">
      <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700"
            style={{ borderColor: ACCENT }}>
        
        <a
        href="https://wa.me/436767202623"
        
      >
        Kostenlose Ersteinschätzung per WhatsApp
      </a>
      </span>
      <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700"
            style={{ borderColor: ACCENT }}>
        Sofortauszahlung mit Beleg
      </span>
      <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700"
            style={{ borderColor: ACCENT }}>
        Diskrete &amp; zügige Abwicklung
      </span>
    </div>
  </div>
</section>
{/* SCHWERPUNKTE */}
<section className="pt-12 pb-10 max-w-6xl mx-auto px-6">
  <div
    className="relative rounded-3xl border bg-white/80 backdrop-blur p-6 sm:p-8 shadow-sm overflow-hidden"
    style={{ borderColor: ACCENT }}
  >
    {/* мягкий декоративный фон */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-70"
      style={{
        background:
          "radial-gradient(50rem 24rem at 110% -10%, rgba(179,139,89,.12), rgba(179,139,89,0)),radial-gradient(40rem 20rem at -10% 120%, rgba(179,139,89,.10), rgba(179,139,89,0))",
      }}
    />

    <p className="text-sm uppercase tracking-wider text-gray-500">Schwerpunkte</p>
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-2">
      Was wir ankaufen – Keramik &amp; Porzellan
    </h2>
    <p className="mt-3 text-gray-700">
      Wir suchen qualitätsvolle Arbeiten vom <strong>18. bis 20. Jahrhundert</strong> sowie
      ausgewählte zeitgenössische Studio-Keramik. Einzelstücke sind ebenso willkommen wie
      Services, Figuren oder ganze Sammlungen.
    </p>

    {/* сетка направлений */}
    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* 1 Porzellan & Manufakturen */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: ACCENT }}>
          {/* tassen-иконка */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
            <path fill="currentColor" d="M3 7h12a3 3 0 0 1 3 3v1a4 4 0 0 1-4 4H9a6 6 0 0 1-6-6V7Zm16 2h1a2 2 0 1 1 0 4h-1v-4ZM4 18h14a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2Z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Porzellan &amp; Manufakturen</h3>
        <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Augarten, Meissen, Herend, Rosenthal</li>
          <li>Services, Tassen, Teller, Terrinen</li>
          <li>Dekore, Malersignaturen, Bodenmarken</li>
        </ul>
      </article>

      {/* 2 Fayence & Steinzeug */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: ACCENT }}>
          {/* krug-иконка */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
            <path fill="currentColor" d="M6 3h7a3 3 0 0 1 3 3v13H8a4 4 0 0 1-4-4V6a3 3 0 0 1 2-3Zm10 4h1a3 3 0 1 1 0 6h-1V7Z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Fayence &amp; Steinzeug</h3>
        <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Westerwald, Bunzlau, Kellinghusen</li>
          <li>Krüge, Teller, Dosen mit Zinnbeschlägen</li>
          <li>Zinnglasur, Salzbrand, Reliefdekor</li>
        </ul>
      </article>

      {/* 3 Jugendstil & Wiener Werkstätte */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: ACCENT }}>
          {/* blüte */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
            <path fill="currentColor" d="M12 3c1.7 2.8 3.9 3.5 6.5 2.3c-1.2 2.6-.5 4.8 2.3 6.5c-2.8 1.7-3.5 3.9-2.3 6.5c-2.6-1.2-4.8-.5-6.5 2.3c-1.7-2.8-3.9-3.5-6.5-2.3c1.2-2.6.5-4.8-2.3-6.5c2.8-1.7 3.5-3.9 2.3-6.5C8.1 6.5 10.3 5.8 12 3Z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Jugendstil &amp; Wiener Werkstätte</h3>
        <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Florale Reliefs, geometrische Linien</li>
          <li>Entwürfe mit Künstler- oder Werkstattbezug</li>
          <li>Seltene Vasen, Schauobjekte, Schalen</li>
        </ul>
      </article>

      {/* 4 Art Déco & Mid-Century */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: ACCENT }}>
          {/* diamant */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
            <path fill="currentColor" d="m12 2l4 5l6 1l-4 5l1 6l-7-3l-7 3l1-6L2 8l6-1l4-5Z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Art Déco &amp; Mid-Century</h3>
        <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Strenge Formen, elegante Glasuren</li>
          <li>Figuren, Platten, dekorative Serien</li>
          <li>Markante Farben &amp; kontrastreiche Dekore</li>
        </ul>
      </article>

      {/* 5 Studio-Keramik */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: ACCENT }}>
          {/* dreh-scheibe */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
            <path fill="currentColor" d="M12 3a9 9 0 1 0 .01 18.01A9 9 0 0 0 12 3Zm0 4a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Studio-Keramik</h3>
        <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Einzelstücke, Kleinserien, Signaturen</li>
          <li>Experimentelle Glasuren &amp; Drehscheiben-Arbeit</li>
          <li>Werkstatt- und Künstlernachweise willkommen</li>
        </ul>
      </article>

      {/* 6 Figuren & Schauobjekte */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: ACCENT }}>
          {/* figur */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
            <path fill="currentColor" d="M12 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm6 18v2H6v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5Z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Figuren &amp; Einzelstücke</h3>
        <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Tier- und Menschenfiguren, Gruppen</li>
          <li>Reliefplatten, Wandobjekte, Unikate</li>
          <li>Gute Erhaltung und feine Bemalung gesucht</li>
        </ul>
      </article>
    </div>

    {/* подсказка-футер секции */}
    <div className="mt-6 rounded-2xl border bg-white p-5" style={{ borderColor: ACCENT }}>
      <h3 className="text-lg font-semibold">Foto-Leitfaden für die Ersteinschätzung</h3>
      <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc pl-5">
        <li>Gesamtansicht, Bodenmarke/Signatur (scharf), 1–2 Detailfotos der Bemalung.</li>
        <li>Maße (H × B × T) und kurze Notiz zu Besonderheiten oder alten Restaurierungen.</li>
        <li>Bitte nichts vorab polieren – die originale Oberfläche hilft bei der Einordnung.</li>
      </ul>
    </div>
  </div>
</section>
{/* BEWERTUNG & PREISBILDUNG */}
<section className="pt-12 pb-10 max-w-6xl mx-auto px-6">
  <div
    className="relative rounded-3xl border bg-white/85 backdrop-blur p-6 sm:p-8 shadow-sm overflow-hidden"
    style={{ borderColor: ACCENT }}
  >
    {/* мягкий декоративный градиент */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-80"
      style={{
        background:
          "radial-gradient(36rem 20rem at 10% -10%, rgba(179,139,89,.10), rgba(179,139,89,0)), radial-gradient(28rem 18rem at 110% 120%, rgba(179,139,89,.12), rgba(179,139,89,0))",
      }}
    />

    <p className="text-sm uppercase tracking-wider text-gray-500">Bewertung</p>
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-2">
      Bewertung &amp; Preisbildung – so ermitteln wir den Wert
    </h2>
    <p className="mt-3 text-gray-700">
      Ein belastbares Angebot entsteht aus <strong>Merkmalen des Objekts</strong> und der
      <strong> realen Marktnachfrage</strong>. Wir dokumentieren die Kriterien nachvollziehbar –
      ohne Druck, mit klarer Kommunikation.
    </p>

    {/* сетка 2 колонки: слева объяснение, справа факторы */}
    <div className="mt-6 grid lg:grid-cols-2 gap-6">
      {/* Links: Ablauf Bewertung */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <h3 className="text-lg font-semibold">Wie wir vorgehen</h3>
        <ol className="mt-3 space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold" style={{ background: ACCENT }}>1</span>
            <div>
              <p className="font-medium">Objektanalyse</p>
              <p className="text-sm">Form, Dekor, Glasur, Technik (z. B. Biskuit, Unterglasur, Aufglasur), Markenzeichen und Signaturen.</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold" style={{ background: ACCENT }}>2</span>
            <div>
              <p className="font-medium">Datierung &amp; Herkunft</p>
              <p className="text-sm">Einordnung nach Epoche/Manufaktur und stilistischen Merkmalen; Abgleich mit Referenzen.</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold" style={{ background: ACCENT }}>3</span>
            <div>
              <p className="font-medium">Erhaltungszustand</p>
              <p className="text-sm">Kanten, Glasur, Brandrisse, Retuschen, fachgerechte Reparaturen – transparent dokumentiert.</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold" style={{ background: ACCENT }}>4</span>
            <div>
              <p className="font-medium">Marktbezug</p>
              <p className="text-sm">Vergleichbare Ergebnisse, Nachfrage nach Serie/Künstler, Seltenheit, dekorative Wirkung.</p>
            </div>
          </li>
        </ol>

        {/* маленькая памятка */}
        <div className="mt-5 rounded-xl border p-4 text-sm" style={{ borderColor: ACCENT }}>
          <p className="font-medium">Kurznotiz zur Bewertung</p>
          <p className="text-gray-700 mt-1">Auf Wunsch erhalten Sie eine kompakte schriftliche Zusammenfassung der Einschätzung.</p>
        </div>
      </article>

      {/* Rechts: Faktoren-карточки */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Faktor 1 */}
        <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
          <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: ACCENT }}>
            {/* rosette */}
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700"><path fill="currentColor" d="M12 2l2.5 3.5L18 3l-1 4l4 1l-3.5 2.5L19 13l-4 1l1 4l-3.5-2.5L12 22l-2.5-3.5L6 18l1-4l-4-1l3.5-2.5L5 8l4-1l-1-4l3.5 2.5L12 2Z"/></svg>
          </div>
          <h4 className="font-semibold">Manufaktur &amp; Entwurf</h4>
          <p className="text-sm text-gray-700 mt-1">Bodenmarken, Presszeichen, Malersignaturen; Entwurfsbezug zu Werkstätten/Künstlern.</p>
          <div className="mt-3 h-2 w-full rounded bg-gray-100">
            <div className="h-2 rounded" style={{ width: "85%", background: ACCENT }} />
          </div>
          <p className="mt-1 text-xs text-gray-500">Einfluss: hoch</p>
        </article>

        {/* Faktor 2 */}
        <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
          <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: ACCENT }}>
            {/* drop (glasur) */}
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700"><path fill="currentColor" d="M12 2s7 7.16 7 12a7 7 0 1 1-14 0c0-4.84 7-12 7-12Z"/></svg>
          </div>
          <h4 className="font-semibold">Glasur &amp; Technik</h4>
          <p className="text-sm text-gray-700 mt-1">Biskuit, Scharffeuer, Unter-/Aufglasurmalerei; Qualität der Ausführung, Farbbrillanz.</p>
          <div className="mt-3 h-2 w-full rounded bg-gray-100">
            <div className="h-2 rounded" style={{ width: "70%", background: ACCENT }} />
          </div>
          <p className="mt-1 text-xs text-gray-500">Einfluss: mittel–hoch</p>
        </article>

        {/* Faktor 3 */}
        <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
          <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: ACCENT }}>
            {/* shield (zustand) */}
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700"><path fill="currentColor" d="M12 2l7 3v6c0 5-3.5 9-7 11c-3.5-2-7-6-7-11V5l7-3Z"/></svg>
          </div>
          <h4 className="font-semibold">Erhaltungszustand</h4>
          <p className="text-sm text-gray-700 mt-1">Kanten, Haarrisse, Abplatzer, frühere Reparaturen; stimmige Oberfläche.</p>
          <div className="mt-3 h-2 w-full rounded bg-gray-100">
            <div className="h-2 rounded" style={{ width: "80%", background: ACCENT }} />
          </div>
          <p className="mt-1 text-xs text-gray-500">Einfluss: hoch</p>
        </article>

        {/* Faktor 4 */}
        <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
          <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: ACCENT }}>
            {/* chart */}
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700"><path fill="currentColor" d="M3 3h2v18H3V3Zm4 10h2v8H7v-8Zm4-6h2v14h-2V7Zm4 4h2v10h-2V11Zm4-6h2v16h-2V5Z"/></svg>
          </div>
          <h4 className="font-semibold">Seltenheit &amp; Nachfrage</h4>
          <p className="text-sm text-gray-700 mt-1">Vergleichsstücke, serienfremde Varianten, besondere Dekore oder Formnummern.</p>
          <div className="mt-3 h-2 w-full rounded bg-gray-100">
            <div className="h-2 rounded" style={{ width: "65%", background: ACCENT }} />
          </div>
          <p className="mt-1 text-xs text-gray-500">Einfluss: variabel</p>
        </article>
      </div>
    </div>

    {/* всплывающая плашка-подсказка */}
    <div className="mt-6 grid md:grid-cols-2 gap-4">
      <div className="rounded-2xl border bg-white p-5" style={{ borderColor: ACCENT }}>
        <h3 className="text-lg font-semibold">Für die Foto-Ersteinschätzung</h3>
        <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Gesamtansicht, Bodenmarke, 1–2 Details der Bemalung/Reliefs.</li>
          <li>Maße (H × B × T) und kurze Notiz zu Besonderheiten.</li>
          <li>Bitte nichts überarbeiten – die originale Oberfläche ist hilfreich.</li>
        </ul>
      </div>
      <div className="rounded-2xl border bg-white p-5" style={{ borderColor: ACCENT }}>
        <h3 className="text-lg font-semibold">Ergebnis</h3>
        <p className="mt-2 text-sm text-gray-700">
          Sie erhalten ein <strong>klar begründetes</strong> Angebot mit Bezug auf die genannten
          Kriterien. Auf Wunsch Auszahlung sofort – bar oder via Echtzeit-Überweisung.
        </p>
      </div>
    </div>
  </div>
</section>
{/* ABLAUF – IN 3 SCHRITTEN */}
<section className="pt-12 pb-10 max-w-6xl mx-auto px-6">
  <div
    className="relative rounded-3xl border bg-white/85 backdrop-blur p-6 sm:p-8 shadow-sm overflow-hidden"
    style={{ borderColor: ACCENT }}
  >
    {/* soft bg */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(36rem 20rem at 0% 0%, rgba(179,139,89,.10), rgba(179,139,89,0)), radial-gradient(28rem 18rem at 120% 120%, rgba(179,139,89,.12), rgba(179,139,89,0))",
      }}
    />

    <p className="text-sm uppercase tracking-wider text-gray-500">Ablauf</p>
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-2">
      So läuft der Ankauf Ihrer Keramik ab – in 3 Schritten
    </h2>
    <p className="mt-3 text-gray-700">
      Von der Foto-Ersteinschätzung bis zur Auszahlung: schnell, transparent und mit
      respektvollem Umgang mit jedem Objekt.
    </p>

    {/* timeline */}
    <div className="mt-8 relative">
      {/* vertical line (on md+) */}
      <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent" />

      <div className="space-y-6">
        {/* STEP 1 */}
        <article className="relative md:pl-16">
          <div className="hidden md:flex absolute left-0 top-0 h-12 w-12 items-center justify-center rounded-full border bg-white shadow-sm" style={{ borderColor: ACCENT }}>
            <span className="text-sm font-semibold">1</span>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
            <h3 className="text-xl font-semibold">Kontakt &amp; Foto-Check</h3>
            <p className="mt-2 text-gray-700">
              Senden Sie uns Bilder per E-Mail oder Messenger: <strong>Gesamtansicht</strong>,
              <strong> Bodenmarke/Signatur</strong>, <strong>Detail der Bemalung/Reliefs</strong>
              &nbsp;und die <strong>Maße</strong>. So erhalten Sie rasch einen ersten Richtwert –
              unverbindlich und kostenlos.
            </p>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
                Gute Beleuchtung, neutraler Hintergrund
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
                Marken/Nummern möglichst scharf abbilden
              </li>
            </ul>
            <div className="mt-3 rounded-xl border p-3 text-sm" style={{ borderColor: ACCENT }}>
              <p><span className="font-medium">Reaktionszeit:</span> meist am selben Tag mit Rückfragen oder Richtwert.</p>
            </div>
          </div>
        </article>

        {/* STEP 2 */}
        <article className="relative md:pl-16">
          <div className="hidden md:flex absolute left-0 top-0 h-12 w-12 items-center justify-center rounded-full border bg-white shadow-sm" style={{ borderColor: ACCENT }}>
            <span className="text-sm font-semibold">2</span>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
            <h3 className="text-xl font-semibold">Besichtigung vor Ort</h3>
            <p className="mt-2 text-gray-700">
              Wir prüfen <strong>Form, Glasur, Technik</strong> (z.&nbsp;B. Biskuit, Unter-/Aufglasur),
              <strong> Signaturen/Marken</strong>, <strong>Erhaltungszustand</strong> und die
              stilistische Einordnung. Termine sind flexibel – werktags, abends oder nach Absprache
              am Wochenende (Wien 1–23 &amp; Umgebung bis ca. 100&nbsp;km).
            </p>
            <ul className="mt-3 grid sm:grid-cols-3 gap-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
                Klare Erläuterung aller Kriterien
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
                Behutsame Handhabung
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
                Auf Wunsch Kurznotiz zur Einschätzung
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Hinweis: Für den Verkauf ist ein amtlicher Lichtbildausweis nötig.
            </p>
          </div>
        </article>

        {/* STEP 3 */}
        <article className="relative md:pl-16">
          <div className="hidden md:flex absolute left-0 top-0 h-12 w-12 items-center justify-center rounded-full border bg-white shadow-sm" style={{ borderColor: ACCENT }}>
            <span className="text-sm font-semibold">3</span>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
            <h3 className="text-xl font-semibold">Angebot &amp; Auszahlung</h3>
            <p className="mt-2 text-gray-700">
              Nach der Sichtung erhalten Sie ein <strong>verbindliches, transparentes Angebot</strong>.
              Bei Einigung zahlen wir <strong>sofort</strong> – bar oder via
              <strong> Echtzeit-Überweisung</strong> – und übernehmen die <strong>sichere Abholung</strong>.
            </p>

            {/* mini-cards */}
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl border p-4 text-sm" style={{ borderColor: ACCENT }}>
                <p className="font-medium">Zahlung</p>
                <p className="text-gray-700 mt-1">Bar oder Echtzeit-Überweisung, inkl. Beleg</p>
              </div>
              <div className="rounded-xl border p-4 text-sm" style={{ borderColor: ACCENT }}>
                <p className="font-medium">Dokumente</p>
                <p className="text-gray-700 mt-1">Kaufbeleg für Ihre Unterlagen</p>
              </div>
              <div className="rounded-xl border p-4 text-sm" style={{ borderColor: ACCENT }}>
                <p className="font-medium">Logistik</p>
                <p className="text-gray-700 mt-1">Sorgfältige Abholung – auch mehrteilige Services</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border p-4 text-sm" style={{ borderColor: ACCENT }}>
              <p className="font-medium">Tipp</p>
              <p className="text-gray-700 mt-1">
                Fotos bei Tageslicht und ein Maßband im Bild erleichtern die Vorab-Einschätzung.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
{/* WAS WIR ANKAUFEN – KERAMIK & PORZELLAN */}
<section className="pt-12 pb-10 max-w-6xl mx-auto px-6">
  <div
    className="relative rounded-3xl border bg-white/85 backdrop-blur p-6 sm:p-8 shadow-sm overflow-hidden"
    style={{ borderColor: ACCENT }}
  >
    {/* soft background */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(28rem 16rem at -10% 10%, rgba(179,139,89,.10), rgba(179,139,89,0)), radial-gradient(34rem 20rem at 120% 120%, rgba(179,139,89,.12), rgba(179,139,89,0))",
      }}
    />

    <p className="text-sm uppercase tracking-wider text-gray-500">Ankaufsschwerpunkte</p>
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-2">
      Was wir ankaufen – Keramik &amp; Porzellan
    </h2>
    <p className="mt-3 text-gray-700">
      Einzelstücke, Services und Sammlungen aus Wien, Österreich und Europa: signierte Arbeiten,
      kunsthandwerkliche Serien und qualitätsvolle Unikate sind willkommen – von der höfischen
      Tradition bis zur Studiokeramik des 20.&nbsp;Jahrhunderts.
    </p>

    {/* chips (visuell, optional) */}
    <div className="mt-5 flex flex-wrap gap-2">
      {[
        "Bodenmarke",
        "Signatur",
        "Handmalerei",
        "Vergoldung",
        "Biskuit",
        "Relief",
        "Komplettes Service",
      ].map((t) => (
        <span
          key={t}
          className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700"
          style={{ borderColor: ACCENT }}
        >
          {t}
        </span>
      ))}
    </div>

    {/* grid of categories */}
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      {/* Wiener & Mitteleuropa */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <h3 className="text-xl font-semibold">Wien &amp; Mitteleuropa</h3>
        <p className="mt-2 text-gray-700">
          Porzellan &amp; feine Keramik von <strong>Augarten</strong>, <strong>Meissen</strong>,
          <strong> Herend</strong>, <strong>Rosenthal</strong> u.&nbsp;a. – Figuren, Vasen,
          Tafelservice, dekorative Objekte.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-gray-700">
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Biskuit, Unter-/Aufglasur, feine Vergoldungen
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Service mit Originaldeckeln/Untertassen
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Bevorzugt: klare Bodenmarken &amp; Modellnummern
          </li>
        </ul>
      </article>

      {/* Jugendstil & Wiener Werkstätte */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <h3 className="text-xl font-semibold">Jugendstil &amp; Wiener Werkstätte</h3>
        <p className="mt-2 text-gray-700">
          Keramik mit markanter Formensprache: Entwürfe im Umfeld
          <strong> Hoffmann</strong>/<strong>Moser</strong>, geometrische/organische Dekore, plastische Reliefs.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-gray-700">
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Vasen, Dosen, Figurinen, Tafelaufsätze
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Handmalerei, reduzierte Farbpaletten, grafische Linien
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Belege/Etiketten steigern die Nachvollziehbarkeit
          </li>
        </ul>
      </article>

      {/* Art Déco & Moderne */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <h3 className="text-xl font-semibold">Art Déco &amp; Moderne</h3>
        <p className="mt-2 text-gray-700">
          1920er–60er: klare Konturen, elegante Proportionen, Studio-Linien und signierte
          Entwürfe. Beliebt sind dekorative Paare und formstabile Serien.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-gray-700">
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Rosenthal Studio, geometrische &amp; florale Dekore
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Paarige Vasen, Schalen, Wandplatten
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Stimmige Seriennummern/Marken bevorzugt
          </li>
        </ul>
      </article>

      {/* Fayence, Majolika, Studiokeramik */}
      <article className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: ACCENT }}>
        <h3 className="text-xl font-semibold">Fayence, Majolika &amp; Studiokeramik</h3>
        <p className="mt-2 text-gray-700">
          Charaktervolle Glasuren, handwerkliche Oberflächen, signierte Werkstätten und
          Atelierarbeiten – von historischen Fayencen bis zur Studiokeramik des 20.&nbsp;Jh.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-gray-700">
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Krakelüren, Laufglasuren, plastische Applikationen
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Ateliermarken, Monogramme, Datierungen
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Einzelexponate und geschlossene Gruppen
          </li>
        </ul>
      </article>
    </div>

    {/* Hinweise & Mini-CTA */}
    <div className="mt-8 grid md:grid-cols-3 gap-4">
      <div className="rounded-xl border p-4" style={{ borderColor: ACCENT }}>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Zustand:</span> Authentische Altersspuren sind kein Nachteil.
          Frühe Reparaturen werden sachlich eingeordnet.
        </p>
      </div>
      <div className="rounded-xl border p-4" style={{ borderColor: ACCENT }}>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Fotos:</span> Gesamtansicht, Marken/Signaturen, Details der
          Bemalung/Reliefs und Maße helfen für eine treffsichere Einschätzung.
        </p>
      </div>
      <div className="rounded-xl border p-4" style={{ borderColor: ACCENT }}>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Unterlagen:</span> Rechnungen, Etiketten, Kataloge oder
          Expertisen – falls vorhanden – bitte kurz erwähnen.
        </p>
      </div>
    </div>
  </div>
</section>
{/* BEWERTUNG & PREISBILDUNG – KERAMIK */}
<section className="pt-12 pb-10 max-w-6xl mx-auto px-6">
  <div
    className="relative rounded-3xl border bg-white/85 backdrop-blur p-6 sm:p-8 shadow-sm overflow-hidden"
    style={{ borderColor: ACCENT }}
  >
    {/* soft background */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(32rem 18rem at -10% -10%, rgba(179,139,89,.10), rgba(179,139,89,0)), radial-gradient(36rem 22rem at 110% 120%, rgba(179,139,89,.12), rgba(179,139,89,0))",
      }}
    />

    <p className="text-sm uppercase tracking-wider text-gray-500">Transparente Bewertung</p>
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-2">
      Bewertung &amp; Preisbildung – so ermitteln wir den Wert
    </h2>
    <p className="mt-3 text-gray-700">
      Für ein marktgerechtes Angebot betrachten wir <strong>Manufaktur/Marke</strong>,{" "}
      <strong>Epoche &amp; Stil</strong>, <strong>Dekor &amp; Handmalerei</strong>,{" "}
      <strong>Form &amp; Proportion</strong>, <strong>Zustand &amp; Originalität</strong> sowie{" "}
      <strong>Seltenheit &amp; Provenienz</strong>. Alle Kriterien werden klar dokumentiert – ohne
      Verkaufsdruck.
    </p>

    <div className="mt-8 grid lg:grid-cols-2 gap-8">
      {/* LEFT: Kriterien */}
      <div>
        <div className="rounded-2xl border p-5 bg-white shadow-sm" style={{ borderColor: ACCENT }}>
          <h3 className="text-xl font-semibold">Wichtige Wertfaktoren</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
              <span><strong>Manufaktur &amp; Marke:</strong> Bodenmarken, Modellnummern, Serien &amp; Entwürfe.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
              <span><strong>Epoche &amp; Stil:</strong> Klassik, Jugendstil, Art Déco, Studio-Linien des 20. Jh.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
              <span><strong>Dekor &amp; Technik:</strong> Handmalerei, Biskuit, Relief, Vergoldung, Glasurqualität.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
              <span><strong>Form &amp; Vitrinenwirkung:</strong> ausgewogene Proportion, paarige Stücke, Tafelaufsätze.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
              <span><strong>Zustand &amp; Originalität:</strong> Kanten, Deckel, Untertassen; fachgerechte frühere Arbeiten einordenbar.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
              <span><strong>Seltenheit &amp; Provenienz:</strong> Belege, Kataloge, Galerieetiketten steigern die Nachvollziehbarkeit.</span>
            </li>
          </ul>
        </div>

        {/* Mini-Note */}
        <div className="mt-4 rounded-xl border p-4 bg-white" style={{ borderColor: ACCENT }}>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Hinweis:</span> Paare, signierte Entwürfe und
            vollständig erhaltene Services erzielen häufig stärkere Ergebnisse als Einzelteile ohne
            zugehörige Komponenten.
          </p>
        </div>
      </div>

      {/* RIGHT: Einfluss-Anzeige & Checkliste */}
      <div>
        <div className="rounded-2xl border p-5 bg-white shadow-sm" style={{ borderColor: ACCENT }}>
          <h3 className="text-xl font-semibold">Einfluss auf den Preis (visuelle Orientierung)</h3>
          <div className="mt-4 space-y-3">
            {[
              { label: "Manufaktur & Marke", width: "90%" },
              { label: "Zustand & Originalität", width: "85%" },
              { label: "Dekor & Handmalerei", width: "80%" },
              { label: "Epoche & Stil", width: "75%" },
              { label: "Seltenheit & Provenienz", width: "70%" },
              { label: "Form & Proportion", width: "65%" },
            ].map((b) => (
              <div key={b.label}>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>{b.label}</span>
                  <span className="opacity-60">{b.width}</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-200/70 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: b.width,
                      background:
                        "linear-gradient(90deg, rgba(179,139,89,.35), rgba(179,139,89,.8))",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checkliste */}
        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          <div className="rounded-xl border p-4 bg-white" style={{ borderColor: ACCENT }}>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Fotos:</span> Gesamt, Marken/Signaturen, Details der
              Bemalung/Reliefs, Maße im Bild.
            </p>
          </div>
          <div className="rounded-xl border p-4 bg-white" style={{ borderColor: ACCENT }}>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Angaben:</span> Serie/Modell, Höhe/Ø, Anzahl Teile,
              Besonderheiten (z.&nbsp;B. Deckel, Paarigkeit).
            </p>
          </div>
          <div className="rounded-xl border p-4 bg-white" style={{ borderColor: ACCENT }}>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Unterlagen:</span> Rechnungen, Kataloge, Etiketten,
              Expertisen – falls vorhanden.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Mini-CTA */}
    <div className="mt-8 flex flex-col sm:flex-row gap-3">
      <a
        href="https://wa.me/436767202623"
        className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm uppercase tracking-wide text-white"
        style={{ background: ACCENT }}
      >
        Fotos senden &amp; Einschätzung erhalten
      </a>
      <a
        href="/leistungen"
        className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
        style={{ borderColor: ACCENT }}
      >
        Kriterien im Detail ansehen
      </a>
    </div>
  </div>
</section>
{/* FAQ – KERAMIK */}
<section className="pt-12 pb-14 max-w-6xl mx-auto px-6">
  <div
    className="relative rounded-3xl border bg-white/85 backdrop-blur p-6 sm:p-8 shadow-sm"
    style={{ borderColor: ACCENT }}
  >
    {/* soft background tint */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(28rem 18rem at -10% -10%, rgba(179,139,89,.10), rgba(179,139,89,0)), radial-gradient(32rem 22rem at 110% 120%, rgba(179,139,89,.12), rgba(179,139,89,0))",
      }}
    />

    <p className="text-sm uppercase tracking-wider text-gray-500">Häufige Fragen (FAQ)</p>
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-2">
      Kurz beantwortet: Keramik &amp; Porzellan im Ankauf
    </h2>
    <p className="mt-3 text-gray-700">
      Die wichtigsten Punkte rund um Bewertung, Termin und Auszahlung – kompakt und transparent.
    </p>

    <div className="mt-8 divide-y divide-gray-200/70 rounded-2xl border bg-white shadow-sm" style={{ borderColor: ACCENT }}>
      {/* 1 */}
      <details className="group p-5" open>
        <summary className="flex items-start justify-between cursor-pointer list-none">
          <h3 className="text-lg md:text-xl font-medium text-gray-900">
            Kaufen Sie auch einzelne Stücke oder nur komplette Services?
          </h3>
          <svg
            className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 text-gray-500"
            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
          </svg>
        </summary>
        <div className="pt-3 text-gray-700">
          Ja, wir kaufen <strong>Einzelstücke, Paare und komplette Services</strong>. Paare und vollständige Ensembles erzielen
          häufig stärkere Ergebnisse, aber auch besondere Solitäre sind willkommen.
        </div>
      </details>

      {/* 2 */}
      <details className="group p-5">
        <summary className="flex items-start justify-between cursor-pointer list-none">
          <h3 className="text-lg md:text-xl font-medium text-gray-900">
            Reicht eine Bewertung per Foto?
          </h3>
          <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
          </svg>
        </summary>
        <div className="pt-3 text-gray-700">
          Für einen ersten <strong>Richtwert</strong> ja. Ein verbindliches Angebot entsteht nach der
          <strong> Sichtung vor Ort</strong>, wenn wir Zustand, Glasur, Bemalung und Marken genau prüfen konnten.
        </div>
      </details>

      {/* 3 */}
      <details className="group p-5">
        <summary className="flex items-start justify-between cursor-pointer list-none">
          <h3 className="text-lg md:text-xl font-medium text-gray-900">
            Welche Fotos sind für die Ersteinschätzung sinnvoll?
          </h3>
          <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
          </svg>
        </summary>
        <div className="pt-3 text-gray-700">
          Gesamtansicht, <strong>Bodenmarken/Signaturen</strong>, Nahaufnahmen von <strong>Bemalung/Relief</strong>, Kanten/Rand,
          Deckel, Untertassen sowie ein Foto mit <strong>Maßband</strong> im Bild – ideal bei Tageslicht.
        </div>
      </details>

      {/* 4 */}
      <details className="group p-5">
        <summary className="flex items-start justify-between cursor-pointer list-none">
          <h3 className="text-lg md:text-xl font-medium text-gray-900">
            Kaufen Sie auch Stücke mit Gebrauchsspuren?
          </h3>
          <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
          </svg>
        </summary>
        <div className="pt-3 text-gray-700">
          Oft ja – <strong>Seltenheit, Marke, Dekor und Gesamtwirkung</strong> sind entscheidend. Fachgerechte ältere Arbeiten
          können einordenbar sein; der Zustand beeinflusst den Preis transparent.
        </div>
      </details>

      {/* 5 */}
      <details className="group p-5">
        <summary className="flex items-start justify-between cursor-pointer list-none">
          <h3 className="text-lg md:text-xl font-medium text-gray-900">
            Wie schnell erhalte ich mein Geld?
          </h3>
          <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
          </svg>
        </summary>
        <div className="pt-3 text-gray-700">
          <strong>Sofort bei Einigung</strong> – Barzahlung oder <strong>Echtzeit-Überweisung</strong> mit Beleg.
        </div>
      </details>

      {/* 6 */}
      <details className="group p-5">
        <summary className="flex items-start justify-between cursor-pointer list-none">
          <h3 className="text-lg md:text-xl font-medium text-gray-900">
            Kommen Sie in alle Wiener Bezirke und ins Umland?
          </h3>
          <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
          </svg>
        </summary>
        <div className="pt-3 text-gray-700">
          Ja – <strong>Wien 1–23</strong> sowie das <strong>Umland bis ca. 100&nbsp;km</strong>. Termine sind flexibel:
          werktags, abends und nach Absprache am Wochenende.
        </div>
      </details>

      {/* 7 */}
      <details className="group p-5">
        <summary className="flex items-start justify-between cursor-pointer list-none">
          <h3 className="text-lg md:text-xl font-medium text-gray-900">
            Welche Unterlagen helfen bei der Bewertung?
          </h3>
          <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
          </svg>
        </summary>
        <div className="pt-3 text-gray-700">
          <strong>Rechnungen, Kataloge, Galerie-/Händleretiketten, Expertisen</strong> und alte Fotos sind hilfreich –
          bitte, falls vorhanden, mitschicken.
        </div>
      </details>

      {/* 8 */}
      <details className="group p-5">
        <summary className="flex items-start justify-between cursor-pointer list-none">
          <h3 className="text-lg md:text-xl font-medium text-gray-900">
            Soll ich vorab reinigen oder restaurieren lassen?
          </h3>
          <svg className="ml-4 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
          </svg>
        </summary>
        <div className="pt-3 text-gray-700">
          Bitte <strong>keine Maßnahmen vorab</strong>. Wir beurteilen die originale Substanz am besten im Ist-Zustand.
          Nach der Sichtung beraten wir, was sinnvoll ist.
        </div>
      </details>
    </div>

    {/* Mini-CTA */}
    <div className="mt-8 flex flex-col sm:flex-row gap-3">
      <a
        href="https://wa.me/436767202623"
        className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm uppercase tracking-wide text-white"
        style={{ background: ACCENT }}
      >
        Fotos senden &amp; Rückmeldung erhalten
      </a>
      <a
        href="/leistungen"
        className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
        style={{ borderColor: ACCENT }}
      >
        Leistungen ansehen
      </a>
    </div>
  </div>
</section>







    </>
  );
}

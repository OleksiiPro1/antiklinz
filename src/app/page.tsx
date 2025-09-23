// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const BRAND = {
  burgundy: "#7B2E2E", // основной (бордовый)
  gold: "#C2A14D",     // акцент
  green: "#2E4B3C",    // поддерживающий
  base: "#F7F3ED",     // фон
  graphite: "#2B2B2B", // текст
  email: "info@antiklinz.at",
  phone: "+43 676 720 26 23",
};

export default function Home() {
  return (
    <main id="main" className="min-h-screen" style={{ background: BRAND.base, color: BRAND.graphite }}>
      {/* SECTION 1: HERO */}
      <section
        aria-label="Startbereich"
        className="relative"
        style={{
          backgroundImage: `
            radial-gradient(70rem 35rem at 0% 0%, ${BRAND.gold}22, transparent),
            radial-gradient(70rem 35rem at 100% 100%, ${BRAND.green}11, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Text */}
            <div>
              <h1
                className="text-3xl md:text-5xl font-extrabold leading-tight"
                style={{ color: BRAND.burgundy }}
              >
                AntikLinz – Verlassenschaften, Nachlassankauf & Entrümpelung in Linz
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Seriöser Ankauf von Antiquitäten sowie diskrete Räumungen und Verlassenschaften in
                <strong> Linz</strong> & <strong>Oberösterreich</strong>. Kostenlose Besichtigung,
                faire Bewertung, schnelle Terminvergabe.
              </p>

              <ul className="mt-5 grid gap-2 text-sm md:grid-cols-2">
                {[
                  "Kostenlose & unverbindliche Besichtigung",
                  "Faire Bewertung, klare Fixpreise",
                  "Diskret und termintreu in Linz",
                  "Ankauf: Silber, Porzellan, Gemälde, Möbel",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: BRAND.green }}
                      aria-hidden
                    />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                  style={{ background: BRAND.burgundy, color: "#fff" }}
                >
                  Kostenlose Besichtigung anfragen
                </Link>
                <Link
                  href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border transition"
                  style={{ borderColor: BRAND.gold, color: BRAND.graphite }}
                >
                  {BRAND.phone} anrufen
                </Link>
              </div>

              <p className="mt-4 text-xs opacity-80">
                Kontakt: {BRAND.email} • {BRAND.phone}
              </p>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{ background: "#fff", border: `1px solid ${BRAND.gold}` }}
              >
                <Image
                  src="/images/antiklinz-1.webp"
                  alt="Antikhandel in Linz – stimmungsvolle Szene mit historischen Objekten"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 540px, 100vw"
                  priority
                />
              </div>

              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-2 text-sm shadow-md"
                style={{ background: "#fff", border: `1px solid ${BRAND.gold}`, color: BRAND.burgundy }}
              >
                Diskret • Verlässlich • Linz
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 2: Leistungen */}
      <section
        aria-label="Unsere Leistungen"
        className="relative"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-extrabold"
              style={{ color: BRAND.burgundy }}
            >
              Unsere Leistungen in Linz &amp; Oberösterreich
            </h2>
            <p
              className="mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
              style={{ color: BRAND.graphite }}
            >
              Ob <strong>Verlassenschaft</strong>, <strong>Nachlassankauf</strong>,
              <strong> Entrümpelung</strong> oder der <strong>Ankauf von Antiquitäten</strong> –
              AntikLinz steht für faire Beratung, klare Abläufe und diskrete Umsetzung.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Leistung 1 */}
            <div
              className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
              style={{ borderColor: BRAND.gold, background: "#fff" }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: BRAND.burgundy }}>
                Verlassenschaften
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.graphite }}>
                Wir übernehmen komplette <strong>Verlassenschaften in Linz</strong> –
                transparent, zuverlässig und respektvoll gegenüber den Erinnerungsstücken.
              </p>
            </div>

            {/* Leistung 2 */}
            <div
              className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
              style={{ borderColor: BRAND.gold, background: "#fff" }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: BRAND.burgundy }}>
                Nachlassankauf
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.graphite }}>
                Ankauf von <strong>Nachlässen und Antiquitäten</strong> wie Silber, Porzellan,
                Gemälden oder Design-Objekten – sofortige Barzahlung möglich.
              </p>
            </div>

            {/* Leistung 3 */}
            <div
              className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
              style={{ borderColor: BRAND.gold, background: "#fff" }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: BRAND.burgundy }}>
                Entrümpelung & Räumung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.graphite }}>
                Schnelle und diskrete <strong>Entrümpelung von Wohnungen, Häusern und Kellern</strong> 
                – fix vereinbart, termintreu und ohne versteckte Kosten.
              </p>
            </div>
          </div>
        </div>
      </section>
          
      {/* SECTION 3: Antiquitäten Ankauf & Verkauf (визуальная версия) */}
<section
  aria-label="Antiquitäten Ankauf und Verkauf in Linz"
  className="relative"
  style={{
    background: BRAND.base,
    backgroundImage: `
      radial-gradient(70rem 30rem at -10% 0%, ${BRAND.gold}1A, transparent),
      radial-gradient(60rem 30rem at 110% 100%, ${BRAND.green}14, transparent)
    `,
  }}
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
    {/* Заголовок */}
    <div className="text-center mb-10">
      <h2
        className="text-2xl md:text-3xl font-extrabold"
        style={{ color: BRAND.burgundy }}
      >
        Übersiedlung & Antiquitäten Ankauf & Verkauf in Linz
      </h2>
    </div>

    {/* ВИЗУАЛ + ТЕКСТ */}
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      {/* БОЛЬШОЕ ИЗОБРАЖЕНИЕ С РАМКОЙ */}
      <div className="relative">
        {/* Декоративная подложка */}
        <div
          aria-hidden
          className="absolute -inset-4 rounded-[28px]"
          style={{
            background:
              `linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.85))`,
            filter: "blur(2px)",
          }}
        />
        <div
  className="relative overflow-hidden rounded-[24px] shadow-lg"
  style={{
    border: `1px solid ${BRAND.gold}`,
    boxShadow: "0 20px 60px rgba(0,0,0,.10), 0 8px 20px rgba(0,0,0,.05)",
  }}
>
  {/* src="https://antiklinz.at/images/main-vid.mp4" */}
  <video
    src="http://localhost:3004/images/main-vid.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="block h-full w-full object-cover object-left"
    style={{ aspectRatio: "4 / 3" }}
  />
</div>

        {/* акцент-бейдж */}
        <div
          className="absolute -bottom-4 left-6 rounded-2xl px-4 py-2 text-sm shadow-md"
          style={{
            background: "#fff",
            border: `1px solid ${BRAND.gold}`,
            color: BRAND.burgundy,
          }}
        >
          Fachgerechter Abtransport • Möbelankauf
        </div>
      </div>

      {/* ТЕКСТ (НЕ МЕНЯЛ СОДЕРЖАНИЕ) */}
      <div
        className="max-w-2xl lg:max-w-none text-base md:text-lg leading-relaxed space-y-6"
        style={{ color: BRAND.graphite }}
      >
        <p>
          AntikLinz ist Ihr verlässlicher Ansprechpartner, wenn es um den
          <strong> Ankauf und Verkauf von Antiquitäten in Linz</strong> geht. Wir bewerten Möbel,
          Silber, Porzellan, Uhren, Gemälde und Sammlerstücke mit langjähriger Erfahrung und
          fachkundigem Blick. Unser Ziel ist es, Ihnen faire Konditionen zu bieten – egal ob Sie
          einzelne Stücke oder eine komplette Sammlung veräußern möchten.
        </p>

        <p>
          Viele unserer Kund:innen aus <strong>Linz und Oberösterreich</strong> schätzen die
          unkomplizierte Abwicklung: Wir kommen zu einer kostenlosen Besichtigung, prüfen die
          Objekte direkt vor Ort und unterbreiten ein transparentes Angebot. Durch unsere
          Spezialisierung im Bereich <strong>Antiquitäten</strong> garantieren wir eine
          professionelle Einschätzung des tatsächlichen Wertes.
        </p>

        <p>
          Neben dem Ankauf kümmern wir uns auch um den <strong>Verkauf von Antiquitäten</strong>.
          So finden wertvolle Stücke neue Besitzer:innen, die diese Kunstwerke und
          Erinnerungsstücke weiterhin pflegen. Dadurch tragen wir aktiv dazu bei, dass das
          kulturelle Erbe in Linz bewahrt und weitergegeben wird.
        </p>

        <p>
          Unser Service richtet sich sowohl an Privatpersonen als auch an Erbengemeinschaften,
          die im Rahmen einer <strong>Verlassenschaft</strong> oder Haushaltsauflösung einen
          seriösen Partner suchen. Wir arbeiten stets diskret, termintreu und mit einem hohen
          Maß an Respekt für die Geschichte hinter jedem Objekt.
        </p>

        <p>
          Wenn Sie also Antiquitäten kaufen oder verkaufen möchten, sind Sie bei uns in besten
          Händen. Kontaktieren Sie uns telefonisch unter <strong>{BRAND.phone}</strong> oder per
          E-Mail unter <strong>{BRAND.email}</strong> und vereinbaren Sie eine kostenlose
          Besichtigung in Linz oder Umgebung.
        </p>
      </div>
    </div>

   
  </div>
</section>



      {/* SECTION 4: Warum AntikLinz */}
      <section
        aria-label="Warum AntikLinz"
        className="relative"
        style={{
          backgroundImage: `
            radial-gradient(60rem 30rem at 10% 0%, ${BRAND.green}11, transparent),
            radial-gradient(60rem 30rem at 90% 100%, ${BRAND.gold}22, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-20">
          <div className="text-center mb-14">
            <h2
              className="text-2xl md:text-3xl font-extrabold"
              style={{ color: BRAND.burgundy }}
            >
              Warum AntikLinz?
            </h2>
            <p
              className="mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
              style={{ color: BRAND.graphite }}
            >
              Erfahrung, Transparenz und Respekt – drei Werte, die uns auszeichnen.
              Mit AntikLinz haben Sie einen Partner, der Antiquitäten nicht nur
              bewertet, sondern deren Geschichte versteht.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Vorteil 1 */}
            <div
              className="relative rounded-3xl p-8 shadow-md transition hover:shadow-xl"
              style={{ background: "#fff", border: `1px solid ${BRAND.gold}` }}
            >
              <div
                className="absolute -top-5 left-6 rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold shadow"
                style={{ background: BRAND.burgundy, color: "#fff" }}
              >
                1
              </div>
              <h3
                className="mt-6 text-lg font-semibold mb-2"
                style={{ color: BRAND.burgundy }}
              >
                Fachkundige Bewertung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.graphite }}>
                Jahrzehntelange Erfahrung im <strong>Antiquitätenhandel</strong>
                ermöglicht eine realistische und faire Einschätzung von Wert
                und Seltenheit.
              </p>
            </div>

            {/* Vorteil 2 */}
            <div
              className="relative rounded-3xl p-8 shadow-md transition hover:shadow-xl"
              style={{ background: "#fff", border: `1px solid ${BRAND.gold}` }}
            >
              <div
                className="absolute -top-5 left-6 rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold shadow"
                style={{ background: BRAND.green, color: "#fff" }}
              >
                2
              </div>
              <h3
                className="mt-6 text-lg font-semibold mb-2"
                style={{ color: BRAND.burgundy }}
              >
                Diskrete Abwicklung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.graphite }}>
                Wir arbeiten leise, vertraulich und flexibel – damit die
                Abwicklung von Verlassenschaften oder Verkäufen stressfrei
                gelingt.
              </p>
            </div>

            {/* Vorteil 3 */}
            <div
              className="relative rounded-3xl p-8 shadow-md transition hover:shadow-xl"
              style={{ background: "#fff", border: `1px solid ${BRAND.gold}` }}
            >
              <div
                className="absolute -top-5 left-6 rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold shadow"
                style={{ background: BRAND.gold, color: BRAND.graphite }}
              >
                3
              </div>
              <h3
                className="mt-6 text-lg font-semibold mb-2"
                style={{ color: BRAND.burgundy }}
              >
                Alles aus einer Hand
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.graphite }}>
                Von der ersten Besichtigung bis zur Auszahlung und Übergabe –
                wir übernehmen alle Schritte, klar strukturiert und
                transparent.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
              style={{ background: BRAND.burgundy, color: "#fff" }}
            >
              Jetzt kostenlos beraten lassen
            </Link>
          </div>
        </div>
      </section>
            {/* SECTION 5: Kundenstimmen */}
      <section
        aria-label="Kundenstimmen"
        className="relative"
        style={{
          background: "white",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-20">
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-extrabold"
              style={{ color: BRAND.burgundy }}
            >
              Stimmen unserer Kund:innen
            </h2>
            <p
              className="mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
              style={{ color: BRAND.graphite }}
            >
              Vertrauen entsteht durch Erfahrungen. Hier einige Rückmeldungen von
              Kund:innen, die uns mit <strong>Antiquitäten Ankäufen</strong>,
              <strong> Verlassenschaften</strong> und <strong>Entrümpelungen in Linz</strong>
              betraut haben.
            </p>
          </div>

          {/* Grid mit Testimonials */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Familie H., Linz",
                quote:
                  "Sehr professionell – schnelle Abwicklung der Verlassenschaft, alles wurde transparent erklärt. Besonders die faire Bewertung der Antiquitäten hat uns überzeugt.",
                rating: 5,
              },
              {
                name: "Herr K., Oberösterreich",
                quote:
                  "Diskret, freundlich und zuverlässig. Die Entrümpelung wurde pünktlich erledigt und die Auszahlung erfolgte sofort. Absolut empfehlenswert!",
                rating: 5,
              },
              {
                name: "Frau M., Linz",
                quote:
                  "Vom ersten Kontakt bis zur Übergabe ein gutes Gefühl. Respektvoller Umgang mit Erinnerungsstücken und ein tolles Team.",
                rating: 5,
              },
            ].map((t, i) => (
              <figure
                key={i}
                className="rounded-2xl border p-6 flex flex-col shadow-sm"
                style={{ borderColor: BRAND.gold, background: "#fff" }}
              >
                <div className="mb-3 flex items-center gap-1" aria-label={`${t.rating} von 5 Sternen`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="inline-block h-3 w-3 rounded-full"
                      style={{
                        background: idx < t.rating ? BRAND.burgundy : `${BRAND.gold}44`,
                      }}
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed flex-1" style={{ color: BRAND.graphite }}>
                  “{t.quote}”
                </blockquote>
                <figcaption
                  className="mt-4 text-xs font-medium"
                  style={{ color: BRAND.green }}
                >
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* SEO JSON-LD für Reviews */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "AntikLinz",
                url: "https://antiklinz.at",
                telephone: BRAND.phone,
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "3",
                },
                review: [
                  {
                    "@type": "Review",
                    reviewRating: { "@type": "Rating", ratingValue: "5" },
                    author: { "@type": "Person", name: "Familie H., Linz" },
                    reviewBody:
                      "Sehr professionell – schnelle Abwicklung der Verlassenschaft, faire Bewertung der Antiquitäten.",
                  },
                  {
                    "@type": "Review",
                    reviewRating: { "@type": "Rating", ratingValue: "5" },
                    author: { "@type": "Person", name: "Herr K., Oberösterreich" },
                    reviewBody:
                      "Diskret, freundlich und zuverlässig. Entrümpelung pünktlich erledigt, sofortige Auszahlung.",
                  },
                  {
                    "@type": "Review",
                    reviewRating: { "@type": "Rating", ratingValue: "5" },
                    author: { "@type": "Person", name: "Frau M., Linz" },
                    reviewBody:
                      "Respektvoller Umgang mit Erinnerungsstücken und ein tolles Team.",
                  },
                ],
              }),
            }}
          />
        </div>
      </section>
            {/* SECTION 6: Kontakt */}
      <section
        aria-label="Kontakt und Anfrage"
        className="relative"
        style={{
          backgroundImage: `
            radial-gradient(60rem 30rem at 0% 0%, ${BRAND.gold}22, transparent),
            radial-gradient(60rem 30rem at 100% 100%, ${BRAND.green}11, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-20">
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-3xl font-extrabold"
              style={{ color: BRAND.burgundy }}
            >
              Kontakt &amp; kostenlose Besichtigung
            </h2>
            <p
              className="mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
              style={{ color: BRAND.graphite }}
            >
              Schreiben Sie uns oder rufen Sie direkt an – wir melden uns rasch und diskret
              aus Linz. Antiquitäten Ankauf, Nachlassauflösung &amp; Entrümpelung aus einer Hand.
            </p>
          </div>

          {/* Kontaktkarte */}
          <div
            className="mx-auto max-w-2xl rounded-3xl p-6 md:p-8 shadow-sm text-center"
            style={{ background: "#fff", border: `1px solid ${BRAND.gold}` }}
          >
            <ul className="space-y-3 text-sm md:text-base" style={{ color: BRAND.graphite }}>
              <li>
                <strong style={{ color: BRAND.burgundy }}>E-Mail:</strong>{" "}
                <a href="mailto:info@antiklinz.at" className="underline hover:opacity-90">
                  info@antiklinz.at
                </a>
              </li>
              <li>
                <strong style={{ color: BRAND.burgundy }}>Telefon:</strong>{" "}
                <a href="tel:+436767202623" className="underline hover:opacity-90">
                  +43 676 720 26 23
                </a>
              </li>
              <li>
                <strong style={{ color: BRAND.burgundy }}>Standort:</strong> Linz, Oberösterreich
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:info@antiklinz.at?subject=Anfrage%20AntikLinz"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                style={{ background: BRAND.burgundy, color: "#fff" }}
              >
                Per E-Mail anfragen
              </a>
              <a
                href="tel:+436767202623"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium border transition"
                style={{ borderColor: BRAND.gold, color: BRAND.graphite }}
              >
                Jetzt anrufen
              </a>
            </div>
          </div>

          {/* kurzer SEO-Absatz */}
          <div
            className="mt-10 max-w-3xl mx-auto text-sm leading-relaxed text-center"
            style={{ color: BRAND.graphite }}
          >
            AntikLinz – Ihr Ansprechpartner in Linz für <strong>Antiquitäten Ankauf</strong>,
            <strong> Verlassenschaften</strong> und <strong>Entrümpelung</strong>. Kontaktieren Sie
            uns telefonisch unter <a href="tel:+436767202623" className="underline">+43&nbsp;676&nbsp;720&nbsp;26&nbsp;23</a>{" "}
            oder per E-Mail an{" "}
            <a href="mailto:info@antiklinz.at" className="underline">info@antiklinz.at</a>.
          </div>
        </div>
      </section>

      {/* SECTION X: SEO – Ankauf Antiquitäten Möbel (Bild rechts, Text links) */}
<section
  aria-label="Ankauf von Antiquitäten und Möbeln in Linz"
  className="relative"
  style={{
    background: "#fff",
    backgroundImage: `
      radial-gradient(60rem 30rem at -10% 0%, ${BRAND.gold}14, transparent),
      radial-gradient(60rem 30rem at 110% 100%, ${BRAND.green}0f, transparent)
    `,
  }}
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      {/* TEXT LINKS (SEO) */}
      <div className="max-w-2xl text-base md:text-lg leading-relaxed space-y-6" style={{ color: BRAND.graphite }}>
        <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: BRAND.burgundy }}>
          Ankauf von Antiquitäten &amp; Möbeln in Linz
        </h2>

        <p>
          AntikLinz ist Ihre seriöse Adresse für den <strong>Ankauf Antiquitäten Möbel</strong> in Linz
          und Oberösterreich. Wir bewerten antike Möbel, Wohnaccessoires und Sammlerstücke fachkundig –
          von Biedermeier-Kommoden über Gründerzeit-Schränke bis hin zu Vintage-Designklassikern. Dank
          transparenter Konditionen und schneller Abwicklung verkaufen Sie bequem und sicher.
        </p>

        <p>
          Ob einzelne Stücke oder eine komplette Einrichtung: Wir kommen zur kostenlosen Besichtigung,
          prüfen Zustand, Originalität und Provenienz und erstellen ein faires Angebot. Besonders gefragt
          sind gut erhaltene Tische, Stühle, Sekretäre, Vitrinen, Truhen sowie passende Kleinmöbel. Auch
          Kombinationen mit <strong>Silber, Porzellan, Uhren</strong> und <strong>Gemälden</strong> sind
          möglich – alles aus einer Hand.
        </p>

        <p>
          Unser Schwerpunkt liegt auf Qualität und Authentizität. So finden antike Möbel aus Linz neue
          Besitzer:innen, die deren Charakter schätzen – und Sie profitieren von einer verlässlichen,
          diskreten Abwicklung mit klaren Fixpreisen. Auf Wunsch übernehmen wir die Abholung direkt vor Ort.
        </p>

        <ul className="grid gap-2 text-sm md:text-base">
          {[
            "Kostenlose Besichtigung in Linz & Umgebung",
            "Faire Bewertung: Zustand, Alter, Stil, Nachfrage",
            "Sofortige Auszahlung beim Ankauf möglich",
            "Diskret, termintreu, ohne versteckte Kosten",
          ].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: BRAND.green }} aria-hidden />
              {t}
            </li>
          ))}
        </ul>

        <p>
          Interessiert? Kontakt unter <strong>{BRAND.email}</strong> oder telefonisch
          unter <strong>{BRAND.phone}</strong>. Antike Möbel verkaufen in Linz – einfach, sicher und
          mit Blick für den wahren Wert.
        </p>
      </div>

      {/* BILD RECHTS */}
      <div className="relative lg:order-last">
        <div
          aria-hidden
          className="absolute -inset-4 rounded-[28px]"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,.6), rgba(255,255,255,.85))", filter: "blur(2px)" }}
        />
        <div
          className="relative overflow-hidden rounded-[24px] shadow-lg"
          style={{ border: `1px solid ${BRAND.gold}`, boxShadow: "0 20px 60px rgba(0,0,0,.10), 0 8px 20px rgba(0,0,0,.05)" }}
        >
          {/* Замените путь на вашу третью картинку */}
          <img
            src="/images/antiklinz-3.webp"
            alt="Antike Möbel in Linz – Kommode, Vitrine und Sessel in klassischem Ambiente"
            className="block h-full w-full object-cover"
            style={{ aspectRatio: "4 / 3" }}
          />
        </div>
        <div
          className="absolute -bottom-4 left-6 rounded-2xl px-4 py-2 text-sm shadow-md"
          style={{ background: "#fff", border: `1px solid ${BRAND.gold}`, color: BRAND.burgundy }}
        >
          Antike Möbel • Kostenlose Bewertung • Faire Angebote
        </div>
      </div>
    </div>
  </div>
</section>


      {/* SECTION 7: FAQ */}
<section
  aria-label="Häufige Fragen (FAQ)"
  className="relative"
  style={{
    backgroundImage: `
      radial-gradient(60rem 30rem at 12% 0%, ${BRAND.gold}22, transparent),
      radial-gradient(60rem 30rem at 88% 100%, ${BRAND.green}11, transparent)
    `,
  }}
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-20">
    <div className="text-center mb-10">
      <h2
        className="text-2xl md:text-3xl font-extrabold"
        style={{ color: BRAND.burgundy }}
      >
        Häufige Fragen (FAQ)
      </h2>
      <p
        className="mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        style={{ color: BRAND.graphite }}
      >
        Kurz und klar beantwortet: Antiquitäten, Verlassenschaften und Entrümpelung in Linz &amp; Oberösterreich.
      </p>
    </div>

    <div className="grid gap-4 md:gap-6">
      {[
        {
          q: "Kauft AntikLinz Antiquitäten direkt an?",
          a: "Ja. Wir bewerten u. a. Silber, Porzellan, Gemälde, Uhren, Möbel und Design-Objekte und unterbreiten ein faires Angebot – auf Wunsch mit sofortiger Auszahlung.",
        },
        {
          q: "Bietet ihr eine kostenlose Besichtigung in Linz an?",
          a: "Ja, die Erstbesichtigung ist kostenlos und unverbindlich. Wir prüfen vor Ort und nennen Ihnen einen transparenten Fixpreis.",
        },
        {
          q: "Wie diskret arbeitet ihr bei Verlassenschaften?",
          a: "Sehr diskret: neutrale Auftretensweise, leises Arbeiten, klare Absprachen. Auf Wunsch mit Schlüsselübernahme und Abwicklung ohne Ihre Anwesenheit.",
        },
        {
          q: "Was unterscheidet Ankauf von Kommission?",
          a: "Beim Ankauf zahlen wir sofort und übernehmen das Risiko. Kommission bedeutet Verkauf in Ihrem Namen. Wir beraten, welches Modell sich für Sie rechnet.",
        },
        {
          q: "Welche Regionen deckt ihr ab?",
          a: "Linz und ganz Oberösterreich. Grenznahe Orte nach Rücksprache möglich – einfach kurz anrufen oder eine E-Mail senden.",
        },
        {
          q: "Übernehmt ihr auch Teilräumungen (Keller/Dachboden)?",
          a: "Ja. Von einzelnen Räumen bis zur kompletten Haushaltsauflösung. Termin- und Preiszusage vor Start.",
        },
        {
          q: "Wie schnell kann ein Termin stattfinden?",
          a: "Kurzfristig – je nach Umfang oft innerhalb weniger Tage. Rufen Sie uns an: +43 676 720 26 23.",
        },
        {
          q: "Erhalte ich eine schriftliche Bestätigung/Quittung?",
          a: "Ja. Sie bekommen auf Wunsch eine schriftliche Bestätigung, Beleg über Ankauf sowie eine klare Leistungsübersicht.",
        },
      ].map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border p-4 md:p-5 transition"
          style={{ borderColor: BRAND.gold, background: "#fff" }}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <h3 className="text-base md:text-lg font-semibold" style={{ color: BRAND.burgundy }}>
              {item.q}
            </h3>
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45"
              style={{ background: `${BRAND.gold}55`, color: BRAND.graphite }}
              aria-hidden
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.graphite }}>
            {item.a}
          </p>
        </details>
      ))}
    </div>

    {/* SEO: FAQPage JSON-LD */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Kauft AntikLinz Antiquitäten direkt an?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Ja. Wir bewerten u. a. Silber, Porzellan, Gemälde, Uhren, Möbel und Design-Objekte und unterbreiten ein faires Angebot – auf Wunsch mit sofortiger Auszahlung.",
              },
            },
            {
              "@type": "Question",
              name: "Bietet ihr eine kostenlose Besichtigung in Linz an?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Ja, die Erstbesichtigung ist kostenlos und unverbindlich. Wir prüfen vor Ort und nennen Ihnen einen transparenten Fixpreis.",
              },
            },
            {
              "@type": "Question",
              name: "Wie diskret arbeitet ihr bei Verlassenschaften?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sehr diskret: neutrale Auftretensweise, leises Arbeiten, klare Absprachen. Auf Wunsch mit Schlüsselübernahme und Abwicklung ohne Ihre Anwesenheit.",
              },
            },
            {
              "@type": "Question",
              name: "Was unterscheidet Ankauf von Kommission?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Beim Ankauf zahlen wir sofort und übernehmen das Risiko. Kommission bedeutet Verkauf in Ihrem Namen. Wir beraten, welches Modell sich für Sie rechnet.",
              },
            },
            {
              "@type": "Question",
              name: "Welche Regionen deckt ihr ab?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Linz und ganz Oberösterreich. Grenznahe Orte nach Rücksprache möglich – einfach kurz anrufen oder eine E-Mail senden.",
              },
            },
            {
              "@type": "Question",
              name: "Übernehmt ihr auch Teilräumungen (Keller/Dachboden)?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Ja. Von einzelnen Räumen bis zur kompletten Haushaltsauflösung. Termin- und Preiszusage vor Start.",
              },
            },
            {
              "@type": "Question",
              name: "Wie schnell kann ein Termin stattfinden?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Kurzfristig – je nach Umfang oft innerhalb weniger Tage.",
              },
            },
            {
              "@type": "Question",
              name: "Erhalte ich eine schriftliche Bestätigung/Quittung?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Ja. Sie bekommen auf Wunsch eine schriftliche Bestätigung, Beleg über Ankauf sowie eine klare Leistungsübersicht.",
              },
            },
          ],
        }),
      }}
    />
  </div>
</section>



      


           



    </main>
  );
}

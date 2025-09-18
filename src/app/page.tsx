// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import Leistungen from './components/Leistungen';

const PLUM = '#4A235A';
const CORAL = '#FF6F61';
const MINT  = '#A8E6CF';
const SAND  = '#F5E6CC';
const TEAL  = '#006D77';

export const metadata = {
  title: 'Messie & Entrümpelung Linz | messielinz.at – diskret, schnell, zuverlässig',
  description:
    'Messie Hilfe, Räumung und Entrümpelung in Linz und Umgebung: diskret, respektvoll und mit klaren Fixpreisen. Jetzt kostenlos anfragen.',
};

export default function Home() {
  return (
    <main id="main" className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section
        className="relative"
        aria-label="Startbereich"
        style={{
          backgroundImage: `
            radial-gradient(90rem 40rem at 10% -20%, ${MINT}33, transparent),
            radial-gradient(80rem 50rem at 110% 60%, ${CORAL}22, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Text */}
            <div>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm"
                style={{ background: `${MINT}55`, color: TEAL }}
              >
                Linz & Umgebung • schnell vor Ort
              </span>

              <h1
                className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: PLUM }}
              >
                Messie & Entrümpelung in Linz —
                <br className="hidden sm:block" />
                <span style={{ color: CORAL }}>diskret</span>, respektvoll, ergebnisorientiert.
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
                Wir bringen wieder Ordnung in Wohnungen, Häuser und Keller —
                strukturiert, feinfühlig und mit klaren Fixpreisen. Sie behalten das,
                was wichtig ist. Den Rest übernehmen wir — schnell und leise.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="https://wa.me/436766135140"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
                  style={{ background: CORAL, color: 'white' }}
                >
                  Kostenlos anfragen
                </Link>
                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border transition"
                  style={{ borderColor: MINT, color: TEAL }}
                >
                  Leistungen ansehen
                </Link>
              </div>

              <ul className="mt-6 grid grid-cols-1 gap-2 text-sm md:grid-cols-3">
                {[
                  'Absolute Diskretion',
                  'Fixpreis vor Start',
                  'Kurzfristige Termine',
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2"
                    style={{ color: PLUM }}
                  >
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: CORAL }}
                      aria-hidden
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.85))',
                  border: `1px solid ${MINT}`,
                }}
              >
                {/* Заменишь на реальное фото/коллаж */}
                <Image
                  src="/images/main-hero.webp"
                  alt="Entrümpelung in Linz – vorher/nachher Eindruck"
                  fill
                  className="object-cover mix-blend-multiply"
                  sizes="(min-width:1024px) 540px, 100vw"
                />
              </div>

              {/* Badge */}
              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-3 text-sm shadow-md"
                style={{ background: 'white', border: `1px solid ${SAND}`, color: PLUM }}
              >
                <strong style={{ color: TEAL }}> 150</strong> erfolgreiche Räumungen in OÖ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: USP STRIP */}
      <section
        className="relative"
        aria-label="Warum messielinz.at"
        style={{ background: 'white' }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-10 md:py-12">
          <div
            className="grid gap-4 rounded-3xl p-6 md:grid-cols-3"
            style={{
              background:
                `linear-gradient(180deg, rgba(245,230,204,.5), rgba(245,230,204,.7))`,
              border: `1px solid ${SAND}`,
            }}
          >
            {[
              {
                title: 'Respekt & Fingerspitzengefühl',
                text:
                  'Wir arbeiten ruhig, sensibel und ohne neugierige Fragen. Persönliche Gegenstände werden sorgfältig gesichert.',
              },
              {
                title: 'Planbar durch Fixpreise',
                text:
                  'Transparente Angebote vorab – keine Überraschungen. Termin & Ablauf bleiben für Sie maximal einfach.',
              },
              {
                title: 'Schnell startklar',
                text:
                  'Kurzfristige Termine in Linz und Umgebung. Auf Wunsch mit Schlüsselübernahme und Abwicklung in Ihrer Abwesenheit.',
              },
            ].map((b, i) => (
              <div key={i} className="rounded-2xl p-5" style={{ background: 'white' }}>
                <div className="mb-2 inline-flex items-center gap-2">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ background: CORAL }}
                    aria-hidden
                  />
                  <h3 className="text-lg font-semibold" style={{ color: PLUM }}>
                    {b.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Leistungen-Teaser */}
<section
  className="relative"
  aria-label="Unsere Leistungen"
  style={{
    backgroundImage: `
      radial-gradient(60rem 30rem at 20% 100%, ${MINT}22, transparent),
      radial-gradient(50rem 20rem at 80% 0%, ${CORAL}11, transparent)
    `,
  }}
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
        Unsere Leistungen in Linz & Umgebung
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-base leading-relaxed" style={{ color: PLUM }}>
        Von der Messie-Wohnung bis zur kompletten Nachlassauflösung – wir bieten maßgeschneiderte Lösungen, 
        respektvoll und effizient umgesetzt.
      </p>
    </div>

    
     {/* Сетка услуг из твоего компонента */}
             <Leistungen />
   
  </div>
</section>

{/* SECTION 4: Prozess 1–2–3 */}
<section
  className="relative"
  aria-label="Ablauf in drei Schritten"
  style={{
    background: 'white',
  }}
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
        So läuft es mit messielinz.at
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-base leading-relaxed" style={{ color: PLUM }}>
        Transparent, einfach und zuverlässig: Unser Ablauf ist klar strukturiert, 
        damit Sie jederzeit den Überblick behalten. Schritt für Schritt zu einer befreiten Wohnung.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {/* Step 1 */}
      <div
        className="flex flex-col rounded-2xl border p-6 text-center transition hover:shadow-md"
        style={{ borderColor: SAND, background: 'white' }}
      >
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold"
          style={{ background: MINT, color: TEAL }}
        >
          1
        </div>
        <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
          Kostenlose Besichtigung
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
          Wir kommen unverbindlich zu Ihnen nach Linz oder Umgebung. 
          Gemeinsam besprechen wir, was bleiben soll und was wir für Sie übernehmen.
        </p>
      </div>

      {/* Step 2 */}
      <div
        className="flex flex-col rounded-2xl border p-6 text-center transition hover:shadow-md"
        style={{ borderColor: SAND, background: 'white' }}
      >
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold"
          style={{ background: CORAL, color: 'white' }}
        >
          2
        </div>
        <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
          Fixpreis-Angebot
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
          Direkt nach der Besichtigung erhalten Sie ein transparentes Fixpreis-Angebot. 
          Ohne versteckte Kosten – fair und verbindlich.
        </p>
      </div>

      {/* Step 3 */}
      <div
        className="flex flex-col rounded-2xl border p-6 text-center transition hover:shadow-md"
        style={{ borderColor: SAND, background: 'white' }}
      >
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold"
          style={{ background: PLUM, color: 'white' }}
        >
          3
        </div>
        <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
          Räumung & Übergabe
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
          Am vereinbarten Termin führen wir die komplette Räumung professionell durch. 
          Sie erhalten Ihr Objekt besenrein und termingerecht zurück.
        </p>
      </div>
    </div>

    {/* CTA unterhalb */}
    <div className="mt-12 text-center">
      <Link
        href="https://wa.me/436766135140"
        className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
        style={{ background: CORAL, color: 'white' }}
      >
        Jetzt kostenlose Besichtigung anfragen
      </Link>
    </div>
  </div>
</section>
{/* SECTION 5: Kundenstimmen / Cases */}
<section
  className="relative"
  aria-label="Kundenstimmen und Fallbeispiele"
  style={{
    backgroundImage: `
      radial-gradient(70rem 30rem at 10% 0%, ${MINT}22, transparent),
      radial-gradient(60rem 25rem at 90% 100%, ${CORAL}11, transparent)
    `,
  }}
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
        Einblicke in unsere Arbeit
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-base leading-relaxed" style={{ color: PLUM }}>
        Jede Räumung ist anders – doch unser Ansatz bleibt immer gleich: diskret, respektvoll und zuverlässig.
        Hier ein paar Eindrücke aus unserem Arbeitsalltag.
      </p>
    </div>

    {/* Process Fotos */}
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[
        { src: '/images/main-1.webp', alt: 'Vorbereitung und Planung vor Ort' },
        { src: '/images/main-2.webp', alt: 'Sorgfältiges Verpacken von Gegenständen' },
        { src: '/images/main-3.webp', alt: 'Transport und sichere Abwicklung' },
        { src: '/images/main-4.webp', alt: 'Übergabe nach abgeschlossener Arbeit' },
      ].map((p, i) => (
        <figure key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden border"
                style={{ borderColor: SAND, background: 'white' }}>
          <Image
            src={p.src}
            alt={p.alt}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 280px, 100vw"
          />
        </figure>
      ))}
    </div>

    {/* Testimonials */}
    <div className="mt-12 text-center mb-8">
      <h3 className="text-xl md:text-2xl font-semibold" style={{ color: PLUM }}>
        Stimmen unserer Kund:innen
      </h3>
    </div>
    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          name: 'Anonyme Kundin',
          quote:
            'Sehr einfühlsames Team – alles wurde professionell umgesetzt, ohne Stress und mit viel Respekt.',
          rating: 5,
        },
        {
          name: 'Privatkunde aus Oberösterreich',
          quote:
            'Klare Kommunikation, faire Preise und termingerechte Übergabe. Absolut empfehlenswert.',
          rating: 5,
        },
        {
          name: 'Familie aus Linz',
          quote:
            'Diskret, zuverlässig und mit viel Verständnis für unsere Situation. Wir sind sehr dankbar.',
          rating: 5,
        },
      ].map((t, i) => (
        <figure key={i} className="rounded-2xl border p-6 h-full flex flex-col"
                style={{ borderColor: SAND, background: 'white' }}>
          <div className="mb-3 flex items-center gap-1" aria-label={`${t.rating} von 5 Sternen`}>
            {Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx} className="inline-block h-3 w-3 rounded-full"
                    style={{ background: idx < t.rating ? CORAL : `${SAND}` }} />
            ))}
          </div>
          <blockquote className="text-sm leading-relaxed" style={{ color: PLUM }}>
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-4 text-xs font-medium" style={{ color: TEAL }}>
            {t.name}
          </figcaption>
        </figure>
      ))}
    </div>
  </div>

  {/* SEO: AggregateRating/Review (пример, можно расширить) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'messielinz.at',
        url: 'https://messielinz.at',
        areaServed: 'Linz, Oberösterreich',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '3',
        },
        review: [
          {
            '@type': 'Review',
            reviewRating: { '@type': 'Rating', ratingValue: '5' },
            author: { '@type': 'Person', name: 'Frau K.' },
            reviewBody:
              'Sehr einfühlsam und zuverlässig. Alles wurde wie besprochen erledigt – ich musste mich um nichts kümmern.',
          },
          {
            '@type': 'Review',
            reviewRating: { '@type': 'Rating', ratingValue: '5' },
            author: { '@type': 'Person', name: 'Herr M.' },
            reviewBody:
              'Besichtigung, Fixpreis, Termin – und pünktliche Übergabe. Genau so stellt man sich das vor.',
          },
          {
            '@type': 'Review',
            reviewRating: { '@type': 'Rating', ratingValue: '5' },
            author: { '@type': 'Person', name: 'Familie R.' },
            reviewBody:
              'Diskrete Abwicklung mit Schlüsselübernahme. Fotodokumentation und klare Kommunikation – top!',
          },
        ],
      }),
    }}
  />
</section>

<section
  className="relative"
  aria-label="Informationen zu Antiquitäten und Verlassenschaften"
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: PLUM }}>
      Ihr Antik Experte in Wien
    </h2>
    <p>
      Wer nach einem <strong>Antik Experte</strong> in Wien sucht, möchte meist mehr als nur einen
      einfachen Händler. Entscheidend ist eine fachkundige Beratung, ein geschultes Auge für
      Details und die Fähigkeit, den ideellen sowie den materiellen Wert von Antiquitäten korrekt
      einzuschätzen. Genau hier setzen wir an: mit langjähriger Erfahrung, diskretem Vorgehen
      und einem Netzwerk von Sammler:innen und Liebhaber:innen, die auf der Suche nach besonderen
      Stücken sind.
    </p>

    <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-4" style={{ color: PLUM }}>
      Antiquitäten Ankauf in Wien – seriös & transparent
    </h3>
    <p>
      Der <strong>Antiquitäten Ankauf in Wien</strong> ist Vertrauenssache. Ob Möbel, Gemälde,
      Schmuckstücke oder kleine Alltagsgegenstände aus vergangenen Epochen – jedes Objekt erzählt
      eine eigene Geschichte. Wir nehmen uns Zeit, diese Geschichten zu würdigen, und erstellen
      faire Angebote, die auf realistischen Marktwerten basieren. Dabei legen wir Wert auf
      Transparenz: Sie erfahren nachvollziehbar, wie sich unser Preis zusammensetzt und welche
      Faktoren in die Bewertung einfließen.
    </p>

    <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-4" style={{ color: PLUM }}>
      Antiquitäten &amp; Verlassenschaften in Wien
    </h3>
    <p>
      Besonders sensibel ist der Umgang mit <strong>Antiquitäten &amp; Verlassenschaften in Wien</strong>.
      Oft sind es persönliche Erinnerungsstücke, die nicht nur materiellen, sondern auch emotionalen
      Wert haben. Unser Anspruch ist es, respektvoll mit diesen Objekten umzugehen, sie im
      bestmöglichen Kontext weiterzugeben und Ihnen die Abwicklung so angenehm wie möglich zu
      gestalten. Von der ersten Kontaktaufnahme bis hin zur endgültigen Übergabe begleiten wir Sie
      zuverlässig und einfühlsam.
    </p>

    <p>
      Ob es sich um eine einzelne Rarität handelt oder um eine umfangreiche Sammlung: wir stehen als
      kompetenter Ansprechpartner zur Verfügung. Unser Ziel ist es, Antiquitäten nicht nur zu
      bewerten, sondern ihre Bedeutung sichtbar zu machen – für Käufer:innen, für Sammler:innen und
      für die nächste Generation.
    </p>
  </div>
</section>


{/* SECTION 6: FAQ + CTA */}
<section
  className="relative"
  aria-label="Häufige Fragen und Kontakt"
  style={{
    backgroundImage: `
      radial-gradient(60rem 30rem at 15% 0%, ${MINT}22, transparent),
      radial-gradient(60rem 30rem at 85% 100%, ${CORAL}11, transparent)
    `,
  }}
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
        FAQ – schnell erklärt
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-base leading-relaxed" style={{ color: PLUM }}>
        Die wichtigsten Fragen rund um Messie Hilfe, Räumungen und Nachlassauflösungen in Linz – kurz und klar beantwortet.
      </p>
    </div>

    {/* FAQ List */}
    <div className="grid gap-4 md:gap-6">
      {[
        {
          q: 'Wie diskret arbeitet ihr?',
          a: 'Sehr diskret: neutrale Kleidung, keine auffälligen Beschriftungen, ruhiges Arbeiten. Auf Wunsch mit Schlüsselübernahme und Abwicklung ohne Ihre Anwesenheit.',
        },
        {
          q: 'Gibt es eine kostenlose Besichtigung?',
          a: 'Ja. Wir kommen unverbindlich in Linz & Umgebung, besprechen den Umfang und erstellen ein Fixpreis-Angebot.',
        },
        {
          q: 'Wie läuft eine Räumung ab?',
          a: 'Nach der Besichtigung erhalten Sie den Fixpreis. Am Termin setzen wir alles strukturiert um und übergeben das Objekt termingerecht besenrein.',
        },
        {
          q: 'Welche Bereiche deckt ihr ab?',
          a: 'Linz und umliegende Regionen in Oberösterreich. Bei Bedarf prüfen wir auch angrenzende Orte – einfach anfragen.',
        },
        {
          q: 'Was passiert mit persönlichen Erinnerungsstücken?',
          a: 'Was Ihnen wichtig ist, bleibt. Wir sichern dokumentiert, legen Fundstücke separat ab und stimmen Entscheidungen mit Ihnen ab.',
        },
        {
          q: 'Wie schnell ist ein Termin möglich?',
          a: 'Kurzfristig. Häufig innerhalb weniger Tage – abhängig vom Umfang. Melden Sie sich, wir finden den nächsten passenden Slot.',
        },
        {
          q: 'Wie transparent sind die Preise?',
          a: 'Komplett transparent: Sie erhalten vor Start einen verbindlichen Fixpreis. Keine Zusatzkosten ohne vorherige Rücksprache.',
        },
        {
          q: 'Übernehmt ihr auch Nachlass / Verlassenschaft?',
          a: 'Ja, respektvoll und strukturiert. Wir unterstützen Angehörige mit klarer Planung, Dokumentation und sauberer Übergabe.',
        },
      ].map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border p-4 md:p-5 transition"
          style={{ borderColor: SAND, background: 'white' }}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <h3 className="text-base md:text-lg font-semibold" style={{ color: PLUM }}>
              {item.q}
            </h3>
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45"
              style={{ background: `${MINT}66`, color: TEAL }}
              aria-hidden
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: PLUM }}>
            {item.a}
          </p>
        </details>
      ))}
    </div>

    {/* CTA Panel */}
    <div
      className="mt-12 rounded-3xl p-6 md:p-8 text-center shadow-sm"
      style={{
        background:
          `linear-gradient(180deg, rgba(255,255,255,.9), rgba(245,230,204,.95))`,
        border: `1px solid ${SAND}`,
      }}
    >
      <h3 className="text-xl md:text-2xl font-semibold" style={{ color: PLUM }}>
        Bereit für einen Neuanfang in Linz?
      </h3>
      <p className="mt-2 max-w-2xl mx-auto text-base leading-relaxed" style={{ color: PLUM }}>
        Kostenlose Besichtigung, Fixpreis und termingerechte Übergabe – diskret und unkompliziert.
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="https://wa.me/436766135140"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
          style={{ background: CORAL, color: 'white' }}
        >
          Jetzt kostenlose Besichtigung anfragen
        </Link>
        <Link
          href="tel:+436766135140"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium border transition"
          style={{ borderColor: MINT, color: TEAL }}
        >
          +436766135140 anrufen
        </Link>
      </div>
    </div>
  </div>

  {/* SEO: FAQPage JSON-LD */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wie diskret arbeitet ihr?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Sehr diskret: neutrale Kleidung, keine auffälligen Beschriftungen, ruhiges Arbeiten. Auf Wunsch mit Schlüsselübernahme und Abwicklung ohne Ihre Anwesenheit.',
            },
          },
          {
            '@type': 'Question',
            name: 'Gibt es eine kostenlose Besichtigung?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Ja. Wir kommen unverbindlich in Linz & Umgebung, besprechen den Umfang und erstellen ein Fixpreis-Angebot.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie läuft eine Räumung ab?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Nach der Besichtigung erhalten Sie den Fixpreis. Am Termin setzen wir alles strukturiert um und übergeben das Objekt termingerecht besenrein.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Bereiche deckt ihr ab?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Linz und umliegende Regionen in Oberösterreich. Bei Bedarf prüfen wir auch angrenzende Orte – einfach anfragen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was passiert mit persönlichen Erinnerungsstücken?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Was Ihnen wichtig ist, bleibt. Wir sichern dokumentiert, legen Fundstücke separat ab und stimmen Entscheidungen mit Ihnen ab.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie schnell ist ein Termin möglich?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Kurzfristig. Häufig innerhalb weniger Tage – abhängig vom Umfang.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie transparent sind die Preise?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Komplett transparent: Sie erhalten vor Start einen verbindlichen Fixpreis. Keine Zusatzkosten ohne vorherige Rücksprache.',
            },
          },
          {
            '@type': 'Question',
            name: 'Übernehmt ihr auch Nachlass / Verlassenschaft?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Ja, respektvoll und strukturiert. Wir unterstützen Angehörige mit klarer Planung, Dokumentation und sauberer Übergabe.',
            },
          },
        ],
      }),
    }}
  />
</section>

    </main>
  );
}

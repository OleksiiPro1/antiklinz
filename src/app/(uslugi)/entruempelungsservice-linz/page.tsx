// app/leistungen/entruempelungsservice-linz/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const PLUM = '#4A235A';
const CORAL = '#FF6F61';
const MINT  = '#A8E6CF';
const SAND  = '#F5E6CC';
const TEAL  = '#006D77';

export const metadata = {
  title: 'Entrümpelungsservice in Linz – schnell & zuverlässig | messielinz.at',
  description:
    'Entrümpelungsservice in Linz: rasch verfügbar, transparent im Ablauf und respektvoll in der Umsetzung. Jetzt per WhatsApp anfragen und kurzfristig starten.',
};

export default function Page() {
  return (
    <main id="main">
      {/* SECTION 1: HERO */}
      <section
        className="relative"
        aria-label="Entrümpelungsservice in Linz – schnell & zuverlässig"
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
                Linz & Umgebung • kurzfristige Termine
              </span>

              <h1
                className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: PLUM }}
              >
                Entrümpelungsservice in Linz –{' '}
                <span style={{ color: CORAL }}>schnell</span> &{' '}
                <span style={{ color: CORAL }}>zuverlässig</span>
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
                Wenn Räume wieder benutzbar werden sollen und ein klarer Ablauf gefragt ist, hilft ein Team,
                das ruhig auftritt, zügig organisiert und von Anfang an verständlich erklärt, wie die Schritte
                aussehen; genau so arbeiten wir in Linz: mit kurzen Wegen, verbindlichen Zusagen und einer
                Umsetzung, die sich an Ihren Zeitplan anpasst, damit Sie ohne Umwege zu einem sauber übergebenen
                Ergebnis kommen.
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2 text-sm md:grid-cols-3" style={{ color: PLUM }}>
                {['Kostenlose Besichtigung', 'Fixpreis vor Start', 'Diskrete Abwicklung'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: CORAL }} aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {/* Primary CTA: WhatsApp */}
                <Link
                  href="https://wa.me/436766135140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
                  style={{ background: '#25D366', color: 'white' }}
                >
                  WhatsApp&nbsp;anfragen
                </Link>

                {/* Secondary CTA: Überblick Leistungen */}
                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border transition"
                  style={{ borderColor: MINT, color: TEAL }}
                >
                  Leistungen ansehen
                </Link>
              </div>
            </div>

            {/* Visual (замени на своё фото) */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.85))',
                  border: `1px solid ${MINT}`,
                }}
              >
                <Image
                  src="/images/Leistungen-3.webp"
                  alt="Entrümpelungsservice in Linz – professionell umgesetzt"
                  fill
                  className="object-cover mix-blend-multiply"
                  sizes="(min-width:1024px) 540px, 100vw"
                />
              </div>

              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-3 text-sm shadow-md"
                style={{ background: 'white', border: `1px solid ${SAND}`, color: PLUM }}
              >
                <strong style={{ color: TEAL }}>Direkt per WhatsApp</strong> • +43&nbsp;676&nbsp;6135140
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Warum unser Entrümpelungsservice in Linz? */}
<section
  className="relative"
  aria-label="Warum unser Entrümpelungsservice in Linz?"
  style={{
    backgroundImage: `
      radial-gradient(60rem 30rem at 20% 100%, ${MINT}22, transparent),
      radial-gradient(50rem 20rem at 80% 0%, ${CORAL}11, transparent)
    `,
  }}
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
        Warum unser Entrümpelungsservice in Linz?
      </h2>
      <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
        Wer in Linz schnell wieder freie Fläche braucht, erwartet nicht nur Tempo, sondern vor allem
        Verlässlichkeit: klare Absprachen, pünktliche Umsetzung und eine Kommunikation, die auch
        in stressigen Situationen Ruhe reinbringt. Genau darauf ist unser Service ausgerichtet – mit
        kurzen Wegen, fixen Zusagen und einem Ablauf, der sich an Ihren Alltag anpasst, damit am Ende
        ein sauber übergebener Raum bleibt und Sie ohne Umwege weitermachen können.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* USP 1 */}
      <div className="rounded-2xl border p-6 transition hover:shadow-md"
           style={{ borderColor: SAND, background: 'white' }}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
          Rasch verfügbar
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
          Kurzfristige Termine in Linz & Umgebung: wir reagieren schnell und planen so,
          dass der Start ohne lange Wartezeit möglich ist.
        </p>
      </div>

      {/* USP 2 */}
      <div className="rounded-2xl border p-6 transition hover:shadow-md"
           style={{ borderColor: SAND, background: 'white' }}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
          Fixpreis statt Fragezeichen
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
          Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Angebot mit
          klaren Konditionen – transparent und ohne spätere Überraschungen.
        </p>
      </div>

      {/* USP 3 */}
      <div className="rounded-2xl border p-6 transition hover:shadow-md"
           style={{ borderColor: SAND, background: 'white' }}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
          Ruhiges Auftreten
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
          Unauffälliges, leises Arbeiten und ein respektvoller Umgang mit Ihren Räumen
          sorgen dafür, dass Sie sich jederzeit gut aufgehoben fühlen.
        </p>
      </div>

      {/* USP 4 */}
      <div className="rounded-2xl border p-6 transition hover:shadow-md"
           style={{ borderColor: SAND, background: 'white' }}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
          Planung, die mitdenkt
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
          Von der ersten Besprechung bis zur Übergabe behalten wir den Überblick:
          klare Schritte, verlässliche Zeiten und eine Ansprechperson für alle Fragen.
        </p>
      </div>
    </div>

    {/* Mini-CTA */}
    <div className="mt-12 text-center">
      <Link
        href="https://wa.me/436766135140"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
        style={{ background: '#25D366', color: 'white' }}
      >
        Direkt per WhatsApp anfragen
      </Link>
    </div>
  </div>
</section>
{/* SECTION 3: Ablauf & Fixpreis */}
<section
  className="relative"
  aria-label="Ablauf und Fixpreis beim Entrümpelungsservice in Linz"
  style={{
    background: 'white',
  }}
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
        Ablauf &amp; Fixpreis beim Entrümpelungsservice
      </h2>
      <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
        Damit Sie genau wissen, worauf Sie sich verlassen können, arbeiten wir mit einem klaren
        Ablauf, der in drei Schritten strukturiert ist. So vermeiden wir Unklarheiten, und Sie haben
        die Sicherheit, dass jedes Detail vorher besprochen wird und Sie von Anfang an den Überblick
        behalten.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {/* Schritt 1 */}
      <div className="rounded-2xl border p-6 shadow-sm"
           style={{ borderColor: SAND, background: 'white' }}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
          1. Kostenlose Besichtigung
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
          Wir kommen direkt zu Ihnen nach Linz oder in die Umgebung und nehmen uns Zeit, die
          Ausgangssituation gemeinsam anzusehen. Dabei klären wir, welche Räume betroffen sind,
          welche Vorstellungen Sie haben und welche zeitlichen Rahmenbedingungen wichtig sind.
        </p>
      </div>

      {/* Schritt 2 */}
      <div className="rounded-2xl border p-6 shadow-sm"
           style={{ borderColor: SAND, background: 'white' }}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
          2. Transparentes Fixpreis-Angebot
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
          Direkt nach der Besichtigung erhalten Sie von uns ein verbindliches Angebot mit einem
          fairen Fixpreis. Dieser Preis ist nachvollziehbar kalkuliert, deckt alle vereinbarten
          Leistungen ab und gibt Ihnen die Sicherheit, dass es keine versteckten Kosten gibt.
        </p>
      </div>

      {/* Schritt 3 */}
      <div className="rounded-2xl border p-6 shadow-sm"
           style={{ borderColor: SAND, background: 'white' }}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
          3. Durchführung & Übergabe
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
          Am vereinbarten Termin führen wir die Arbeit zuverlässig und geordnet durch, sodass Sie am
          Ende ein Ergebnis bekommen, das sofort genutzt werden kann. Die Übergabe erfolgt pünktlich
          und so, wie es mit Ihnen abgestimmt wurde.
        </p>
      </div>
    </div>

    {/* Extra SEO-Text */}
    <div className="mt-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
      <p>
        Unser <strong>Entrümpelungsservice in Linz</strong> basiert auf Klarheit und Verbindlichkeit.
        Sie müssen nicht lange überlegen, welche Kosten oder welche Abläufe auf Sie zukommen, denn
        durch den Fixpreis und die vorherige Besichtigung ist alles eindeutig geregelt. Das schafft
        Vertrauen und erleichtert die Entscheidung, schnell den nächsten Schritt zu gehen.
      </p>
    </div>

    {/* CTA */}
    <div className="mt-12 text-center">
      <Link
        href="https://wa.me/436766135140"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
        style={{ background: '#25D366', color: 'white' }}
      >
        Jetzt über WhatsApp anfragen
      </Link>
    </div>
  </div>
</section>
{/* SECTION 4: Einblicke in den Entrümpelungsservice */}
<section
  className="relative"
  aria-label="Einblicke in den Entrümpelungsservice Linz"
  style={{
    background: 'white',
  }}
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
        Einblicke in unseren Service
      </h2>
      <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
        Damit Sie sich vorstellen können, wie wir in Linz arbeiten, zeigen wir einige Eindrücke
        aus dem Ablauf. Unsere Arbeit ist geprägt von Ruhe, Struktur und Diskretion. Jedes Projekt
        wird individuell geplant, und wir gehen Schritt für Schritt so vor, dass Sie jederzeit das
        Gefühl haben, dass alles im richtigen Tempo geschieht und Sie die Kontrolle behalten.
      </p>
    </div>

    {/* Grid mit Prozessfotos */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[
        { src: '/images/Entrumpelungsservice-1.webp', alt: 'Vorbereitung der Räume' },
        { src: '/images/Entrumpelungsservice-2.webp', alt: 'Sorgfältiges Verpacken von Gegenständen' },
        { src: '/images/Entrumpelungsservice-3.webp', alt: 'Transport innerhalb des Gebäudes' },
        { src: '/images/Entrumpelungsservice-4.webp', alt: 'Übergabe nach Abschluss der Arbeiten' },
      ].map((img, i) => (
        <figure
          key={i}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden border shadow-sm"
          style={{ borderColor: SAND, background: 'white' }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 280px, 100vw"
          />
          <figcaption
            className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-1 text-xs shadow-sm"
            style={{ color: PLUM, border: `1px solid ${SAND}` }}
          >
            {img.alt}
          </figcaption>
        </figure>
      ))}
    </div>

    {/* Extra SEO-Text */}
    <div className="mt-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
      <p className="mb-6">
        Wer unseren <strong>Entrümpelungsservice in Linz</strong> in Anspruch nimmt, bekommt mehr als
        nur ein Team, das Möbel trägt oder Kisten bewegt. Es geht um eine Zusammenarbeit, die
        Vertrauen schafft und dafür sorgt, dass jeder Schritt nachvollziehbar ist. Von der ersten
        Vorbereitung bis zur finalen Übergabe dokumentieren wir auf Wunsch den Fortschritt, sodass
        Sie jederzeit über den Stand informiert sind.
      </p>
      <p>
        Viele Kund:innen beschreiben das Gefühl nach einer erfolgreichen Räumung als eine Art
        Neubeginn. Genau dieses Ziel verfolgen wir: Räume so zu übergeben, dass sie sofort genutzt
        werden können und Sie den Kopf frei haben für die nächsten Schritte. Unsere Stärke liegt
        darin, dass wir uns an Ihre individuelle Situation anpassen und dabei immer mit ruhiger
        Hand und klarer Planung arbeiten.
      </p>
    </div>
  </div>
</section>
{/* SECTION 5: FAQ + WhatsApp CTA */}
<section
  className="relative"
  aria-label="Fragen und Antworten zum Entrümpelungsservice in Linz"
  style={{
    backgroundImage: `
      radial-gradient(60rem 30rem at 15% 0%, ${MINT}22, transparent),
      radial-gradient(60rem 30rem at 85% 100%, ${CORAL}11, transparent)
    `,
  }}
>
  <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
        Häufige Fragen zum Entrümpelungsservice
      </h2>
      <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
        Viele Menschen stellen sich ähnliche Fragen, bevor sie unseren Service in Anspruch nehmen.
        Hier beantworten wir die wichtigsten Punkte, damit Sie bereits im Vorfeld Klarheit haben und
        die Entscheidung leichter fällt.
      </p>
    </div>

    <div className="grid gap-4 md:gap-6">
      {[
        {
          q: 'Wie schnell ist ein Termin möglich?',
          a: 'In Linz können wir oft schon innerhalb weniger Tage starten. Die genaue Verfügbarkeit hängt vom Umfang ab, aber wir bemühen uns stets um eine rasche Lösung.',
        },
        {
          q: 'Muss ich bei der Entrümpelung anwesend sein?',
          a: 'Nein. Wenn Sie wünschen, übernehmen wir die Abwicklung mit Schlüsselübergabe. Dadurch sparen Sie Zeit, und gleichzeitig bleibt alles transparent und verlässlich.',
        },
        {
          q: 'Wie funktioniert die Preisgestaltung?',
          a: 'Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Fixpreis-Angebot. Damit wissen Sie genau, welche Kosten auf Sie zukommen, ohne spätere Überraschungen.',
        },
        {
          q: 'Wie wird mit persönlichen Gegenständen umgegangen?',
          a: 'Wir gehen respektvoll vor und achten darauf, dass Erinnerungsstücke oder wichtige Objekte nicht verloren gehen. Auf Wunsch besprechen wir einzelne Funde mit Ihnen.',
        },
        {
          q: 'Welche Regionen deckt ihr ab?',
          a: 'Unser Schwerpunkt liegt in Linz, wir fahren jedoch auch in umliegende Gemeinden von Oberösterreich. Bei Bedarf prüfen wir gerne Einsätze in weiteren Orten.',
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

    {/* WhatsApp CTA */}
    <div className="mt-12 text-center">
      <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: PLUM }}>
        Direkt Kontakt aufnehmen
      </h3>
      <p className="max-w-2xl mx-auto mb-6 text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
        Wenn Sie eine Frage haben oder gleich einen Termin vereinbaren möchten, schreiben Sie uns
        direkt über WhatsApp. So erhalten Sie ohne Umwege eine Antwort und können unkompliziert alle
        Details klären.
      </p>
      <Link
        href="https://wa.me/436766135140"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
        style={{ background: '#25D366', color: 'white' }}
      >
        WhatsApp&nbsp;anfragen
      </Link>
    </div>
  </div>

  {/* JSON-LD FAQ Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wie schnell ist ein Termin möglich?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In Linz können wir oft schon innerhalb weniger Tage starten. Die genaue Verfügbarkeit hängt vom Umfang ab, aber wir bemühen uns stets um eine rasche Lösung.',
            },
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei der Entrümpelung anwesend sein?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. Wenn Sie wünschen, übernehmen wir die Abwicklung mit Schlüsselübergabe. Dadurch sparen Sie Zeit, und gleichzeitig bleibt alles transparent und verlässlich.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie funktioniert die Preisgestaltung?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Fixpreis-Angebot. Damit wissen Sie genau, welche Kosten auf Sie zukommen, ohne spätere Überraschungen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie wird mit persönlichen Gegenständen umgegangen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Wir gehen respektvoll vor und achten darauf, dass Erinnerungsstücke oder wichtige Objekte nicht verloren gehen. Auf Wunsch besprechen wir einzelne Funde mit Ihnen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Regionen deckt ihr ab?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Unser Schwerpunkt liegt in Linz, wir fahren jedoch auch in umliegende Gemeinden von Oberösterreich. Bei Bedarf prüfen wir gerne Einsätze in weiteren Orten.',
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

// app/leistungen/wohnungsaufloesungen-linz/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const PLUM = '#4A235A';
const CORAL = '#FF6F61';
const MINT  = '#A8E6CF';
const SAND  = '#F5E6CC';
const TEAL  = '#006D77';

export const metadata = {
  title: 'Wohnungsauflösungen in Linz – planbar & sorgfältig | messielinz.at',
  description:
    'Wohnungsauflösungen in Linz: verlässlich geplant, sorgfältig umgesetzt und mit Fixpreis. Kostenlose Besichtigung, termingerechte Übergabe und diskrete Abwicklung.',
};

export default function Page() {
  return (
    <main id="main">
      {/* SECTION 1: HERO */}
      <section
        className="relative"
        aria-label="Wohnungsauflösungen in Linz – planbar & sorgfältig"
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
                Linz & Umgebung • verlässliche Termine
              </span>

              <h1
                className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: PLUM }}
              >
                Wohnungsauflösungen in Linz –{' '}
                <span style={{ color: CORAL }}>planbar</span> & sorgfältig umgesetzt.
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
                Wer eine Wohnung auflösen möchte, erwartet eine Begleitung, die mit Ruhe, Übersicht
                und klaren Absprachen arbeitet, damit am Ende alles termingerecht abgeschlossen ist
                und die Übergabe ohne Stress erfolgt. Genau so gehen wir vor: transparent, mit
                Fixpreis und auf Wunsch besonders diskret.
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
                

                {/* WhatsApp CTA */}
                <Link
                  href="https://wa.me/436766135140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border transition"
                  style={{ borderColor: MINT, color: TEAL }}
                >
                  WhatsApp: +43&nbsp;676&nbsp;6135140
                </Link>
              </div>
            </div>

            {/* Visual (замени на реальное фото) */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.85))',
                  border: `1px solid ${MINT}`,
                }}
              >
                <Image
                  src="/images/Leistungen-1.webp"
                  alt="Wohnungsauflösungen in Linz – planbar & sorgfältig"
                  fill
                  className="object-cover mix-blend-multiply"
                  sizes="(min-width:1024px) 540px, 100vw"
                />
              </div>

              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-3 text-sm shadow-md"
                style={{ background: 'white', border: `1px solid ${SAND}`, color: PLUM }}
              >
                <strong style={{ color: TEAL }}>Termingerechte Übergabe</strong> • klare Absprachen
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 2: Warum wir der richtige Partner sind */}
      <section
        className="relative"
        aria-label="Warum wir der richtige Partner für Wohnungsauflösungen in Linz sind"
        style={{
          backgroundImage: `
            radial-gradient(60rem 30rem at 0% 100%, ${MINT}22, transparent),
            radial-gradient(50rem 20rem at 100% 0%, ${CORAL}11, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Warum wir der richtige Partner sind
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
               style={{ color: PLUM }}>
              Eine <strong>Wohnungsauflösung in Linz</strong> ist immer ein Schritt, der gut geplant
              sein will – sei es aus privaten Gründen, nach einem Umzug oder im Rahmen eines Nachlasses.
              Genau hier setzen wir an: Wir verbinden verlässliche Planung mit persönlicher Betreuung
              und sorgen dafür, dass jede Abwicklung transparent und nachvollziehbar bleibt. Unsere
              Kund:innen schätzen besonders, dass sie bei uns alles aus einer Hand bekommen und
              jederzeit wissen, an wen sie sich wenden können.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* USP 1 */}
            <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Ein Ansprechpartner von Anfang bis Ende
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Sie haben immer eine zentrale Kontaktperson, die alle Abläufe koordiniert,
                Rückfragen beantwortet und sicherstellt, dass die Kommunikation klar und
                unkompliziert bleibt.
              </p>
            </div>

            {/* USP 2 */}
            <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Fixpreis ohne Überraschungen
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Angebot.
                Damit wissen Sie genau, welche Kosten auf Sie zukommen – fair, nachvollziehbar
                und ohne versteckte Zusatzkosten.
              </p>
            </div>

            {/* USP 3 */}
            <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Termintreue & Planungssicherheit
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wenn ein Termin fixiert ist, können Sie sich darauf verlassen, dass die Arbeit
                pünktlich und im vereinbarten Zeitfenster erledigt wird. Diese Verlässlichkeit
                gibt Ihnen Sicherheit in einer oft herausfordernden Situation.
              </p>
            </div>

            {/* USP 4 */}
            <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Diskrete Abwicklung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Auf Wunsch übernehmen wir die komplette Abwicklung ohne Ihre Anwesenheit.
                Wir treten neutral auf, handeln respektvoll und achten konsequent auf Ihre Privatsphäre.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 3: Leistungen im Überblick */}
      <section
        className="relative"
        aria-label="Leistungen Wohnungsauflösungen Linz"
        style={{ background: 'white' }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Leistungen im Überblick
            </h2>
            <p
              className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
              style={{ color: PLUM }}
            >
              Unsere <strong>Wohnungsauflösungen in Linz</strong> umfassen weit mehr als nur das
              Freimachen von Räumen. Wir begleiten Sie von der ersten Besichtigung über die Planung
              bis zur besenreinen Übergabe. Dabei berücksichtigen wir alle Besonderheiten Ihres
              Objekts und sorgen dafür, dass der gesamte Prozess für Sie einfach, transparent und
              stressfrei bleibt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Leistung 1 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
              style={{ borderColor: SAND, background: 'white' }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Komplettauflösungen
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wir übernehmen die vollständige Auflösung von Wohnungen – ob klein oder groß –
                und sorgen für eine Übergabe, die sofort weiterverwendet werden kann.
              </p>
            </div>

            {/* Leistung 2 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
              style={{ borderColor: SAND, background: 'white' }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Teilauflösungen
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Auch wenn nur bestimmte Räume wie Schlafzimmer, Wohnzimmer oder Küche betroffen
                sind, kümmern wir uns um eine strukturierte und sorgfältige Abwicklung.
              </p>
            </div>

            {/* Leistung 3 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
              style={{ borderColor: SAND, background: 'white' }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Keller & Dachboden
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wir schaffen Platz in Räumen, die oft jahrelang unbeachtet geblieben sind, und
                ermöglichen eine sinnvolle Weiterverwendung.
              </p>
            </div>

            {/* Leistung 4 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
              style={{ borderColor: SAND, background: 'white' }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Garage & Nebenräume
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wir räumen Garagen, Abstellräume und andere Nebenflächen, damit Sie den Raum
                wieder wie gewünscht nutzen können.
              </p>
            </div>

            {/* Leistung 5 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
              style={{ borderColor: SAND, background: 'white' }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Nachlass & Verlassenschaften
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wir begleiten Angehörige in sensiblen Situationen mit Einfühlungsvermögen und
                übernehmen die Organisation zuverlässig und respektvoll.
              </p>
            </div>

            {/* Leistung 6 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
              style={{ borderColor: SAND, background: 'white' }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Kurzfristige Einsätze
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wenn es schnell gehen muss, reagieren wir flexibel und bieten Ihnen kurzfristige
                Termine in Linz und Umgebung.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 4: Ablauf – von der Besichtigung bis zur Übergabe */}
      <section
        className="relative"
        aria-label="Ablauf Wohnungsauflösungen in Linz"
        style={{
          backgroundImage: `
            radial-gradient(70rem 40rem at 0% 50%, ${MINT}22, transparent),
            radial-gradient(70rem 40rem at 100% 50%, ${CORAL}11, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Ablauf – von der Besichtigung bis zur Übergabe
            </h2>
            <p
              className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
              style={{ color: PLUM }}
            >
              Damit unsere <strong>Wohnungsauflösungen in Linz</strong> für Sie transparent und
              planbar bleiben, haben wir einen klaren Ablauf entwickelt, der Ihnen von Anfang an
              Sicherheit gibt. Jeder Schritt ist verständlich, nachvollziehbar und darauf
              ausgelegt, Ihnen den Prozess so angenehm wie möglich zu machen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Schritt 1 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
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
                Wir nehmen uns Zeit für eine unverbindliche Besichtigung direkt in Linz oder der
                Umgebung. Dabei hören wir aufmerksam zu, klären offene Fragen und verschaffen uns
                ein realistisches Bild vom Umfang der Arbeit.
              </p>
            </div>

            {/* Schritt 2 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
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
                Direkt nach der Besichtigung erhalten Sie ein schriftliches Angebot mit einem
                verbindlichen Fixpreis. Damit wissen Sie von Anfang an, welche Kosten auf Sie
                zukommen, und können sich auf eine faire und transparente Basis verlassen.
              </p>
            </div>

            {/* Schritt 3 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
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
                Am vereinbarten Termin führen wir die Wohnungsauflösung zuverlässig, strukturiert
                und mit der nötigen Ruhe durch. Anschließend erfolgt die Übergabe im besenreinen
                Zustand, sodass Sie die Räume sofort nach Ihren Vorstellungen nutzen oder
                übergeben können.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            {/* WhatsApp CTA */}
                <Link
                  href="https://wa.me/436766135140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border transition"
                  style={{ borderColor: MINT, color: TEAL }}
                >
                  WhatsApp: +43&nbsp;676&nbsp;6135140
                </Link>
          </div>
        </div>
      </section>
            {/* SECTION 5: Preise & Rahmenbedingungen */}
      <section
        className="relative"
        aria-label="Preise und Rahmenbedingungen Wohnungsauflösungen Linz"
        style={{ background: 'white' }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Preise &amp; Rahmenbedingungen
            </h2>
            <p
              className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
              style={{ color: PLUM }}
            >
              Jede <strong>Wohnungsauflösung in Linz</strong> ist individuell und unterscheidet
              sich in Umfang, Lage und zeitlichen Vorgaben. Damit Sie trotzdem schon im Vorfeld
              Klarheit haben, arbeiten wir ausschließlich mit Fixpreis-Angeboten, die wir nach
              einer kostenlosen Besichtigung erstellen. So können Sie sicher sein, dass keine
              unerwarteten Zusatzkosten entstehen und die Kalkulation realistisch bleibt.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Faktor 1 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
              style={{ borderColor: SAND, background: 'white' }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Lage &amp; Zugänglichkeit
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Ob Erdgeschoss, höheres Stockwerk oder eine schwer erreichbare Wohnlage – die
                Zugänglichkeit spielt bei der Planung eine wichtige Rolle und wird in die
                Preisgestaltung einbezogen.
              </p>
            </div>

            {/* Faktor 2 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
              style={{ borderColor: SAND, background: 'white' }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Größe &amp; Ausstattung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Eine kleine Einzimmerwohnung erfordert weniger Aufwand als eine große Altbauwohnung
                mit mehreren Räumen. Auch die vorhandene Möblierung wird dabei berücksichtigt.
              </p>
            </div>

            {/* Faktor 3 */}
            <div
              className="rounded-2xl border p-6 shadow-sm"
              style={{ borderColor: SAND, background: 'white' }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Zeitrahmen &amp; Zusatzwünsche
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Manche Kund:innen benötigen kurzfristige Termine, andere wünschen zusätzliche
                Leistungen wie eine Abwicklung per Schlüsselübergabe oder eine Dokumentation für
                Dritte. Solche Wünsche werden transparent im Angebot berücksichtigt.
              </p>
            </div>
          </div>

          {/* SEO Text Block */}
          <div
            className="mt-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
            style={{ color: PLUM }}
          >
            <p className="mb-6">
              Unser Ziel ist es, Ihnen von Anfang an Sicherheit zu geben. Deshalb erhalten Sie nach
              jeder Besichtigung ein klares und verbindliches Angebot mit Fixpreis. So haben Sie
              eine solide Grundlage für Ihre Planung, können die Kosten genau einschätzen und
              müssen sich keine Gedanken über nachträgliche Anpassungen machen.
            </p>
            <p>
              Dank dieser Transparenz sind unsere <strong>Wohnungsauflösungen in Linz</strong> sowohl
              für Privatpersonen als auch für Unternehmen eine verlässliche Lösung. Egal, ob es sich
              um eine kleine Wohnung, ein ganzes Haus oder eine Kombination aus Wohn- und Nebenräumen
              handelt – wir sorgen dafür, dass die Abwicklung fair kalkuliert und planbar bleibt.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 6: Einblicke in die Arbeit */}
      <section
        className="relative"
        aria-label="Einblicke in die Arbeit bei Wohnungsauflösungen in Linz"
        style={{
          backgroundImage: `
            radial-gradient(60rem 30rem at 20% 100%, ${MINT}22, transparent),
            radial-gradient(50rem 20rem at 80% 0%, ${CORAL}11, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Einblicke in die Arbeit
            </h2>
            <p
              className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
              style={{ color: PLUM }}
            >
              Wer sich für eine <strong>Wohnungsauflösung in Linz</strong> entscheidet, möchte
              wissen, wie die Arbeit konkret abläuft und worauf man sich verlassen kann. Wir legen
              großen Wert darauf, dass unsere Kund:innen nicht nur ein Ergebnis sehen, sondern den
              gesamten Prozess nachvollziehen können – von der ersten Planung über die Durchführung
              bis hin zur besenreinen Übergabe.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
            <p className="mb-6">
              In der Vorbereitung besprechen wir Ihre Wünsche detailliert, damit Sie genau wissen,
              was wann passiert. Anschließend kümmern wir uns um die reibungslose Abwicklung, wobei
              wir strukturiert vorgehen und darauf achten, dass jeder Schritt klar nachvollziehbar
              bleibt. Dieser transparente Ansatz sorgt dafür, dass Sie sich während der gesamten
              Auflösung entspannt zurücklehnen können.
            </p>
            <p>
              Besonders wichtig ist uns die Übergabe: Wir überreichen die Wohnung in einem Zustand,
              der sofort weiterverwendet werden kann, und kontrollieren mit Ihnen gemeinsam, ob alle
              Vereinbarungen eingehalten wurden. So werden unsere <strong>Wohnungsauflösungen in Linz</strong> 
              zu einem Prozess, bei dem Vertrauen, Klarheit und Verlässlichkeit an erster Stelle stehen.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 7: FAQ */}
      <section
        className="relative"
        aria-label="Häufige Fragen Wohnungsauflösungen Linz"
        style={{
          backgroundImage: `
            radial-gradient(70rem 40rem at 10% 0%, ${MINT}22, transparent),
            radial-gradient(60rem 30rem at 90% 100%, ${CORAL}11, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Häufige Fragen zu Wohnungsauflösungen in Linz
            </h2>
            <p
              className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
              style={{ color: PLUM }}
            >
              Viele Kund:innen möchten bereits vorab genau wissen, wie eine Abwicklung funktioniert,
              welche Kosten entstehen und worauf sie sich verlassen können. Hier finden Sie die
              wichtigsten Antworten rund um unsere <strong>Wohnungsauflösungen in Linz</strong>.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            {[
              {
                q: 'Wie läuft eine Wohnungsauflösung in Linz ab?',
                a: 'Der Ablauf besteht aus drei Schritten: kostenloser Besichtigung, einem verbindlichen Fixpreis-Angebot und der Durchführung am vereinbarten Termin. Jeder Schritt wird transparent erklärt, damit Sie volle Klarheit haben.',
              },
              {
                q: 'Muss ich während der Auflösung anwesend sein?',
                a: 'Nein, das ist nicht notwendig. Auf Wunsch übernehmen wir die Abwicklung per Schlüsselübergabe, sodass Sie sich um nichts kümmern müssen.',
              },
              {
                q: 'Welche Kosten fallen an?',
                a: 'Die Kosten richten sich nach Faktoren wie Lage, Größe und zeitlichem Rahmen. Nach der Besichtigung erhalten Sie ein Fixpreis-Angebot, sodass Sie absolute Kostensicherheit haben.',
              },
              {
                q: 'Wie kurzfristig ist ein Termin möglich?',
                a: 'In vielen Fällen können wir bereits innerhalb weniger Tage tätig werden. Die genaue Planung hängt vom Umfang ab, doch wir reagieren flexibel auf kurzfristige Anfragen.',
              },
              {
                q: 'Übernehmen Sie auch Keller oder Nebenräume?',
                a: 'Ja, unsere Wohnungsauflösungen in Linz umfassen auch Keller, Dachboden, Garagen und Nebenräume. So haben Sie alles aus einer Hand.',
              },
              {
                q: 'Arbeiten Sie auch diskret?',
                a: 'Ja, Diskretion ist für uns selbstverständlich. Wir treten unauffällig auf und sorgen dafür, dass Ihre Privatsphäre jederzeit gewahrt bleibt.',
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
                  name: 'Wie läuft eine Wohnungsauflösung in Linz ab?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Der Ablauf besteht aus drei Schritten: kostenloser Besichtigung, einem verbindlichen Fixpreis-Angebot und der Durchführung am vereinbarten Termin. Jeder Schritt wird transparent erklärt, damit Sie volle Klarheit haben.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Muss ich während der Auflösung anwesend sein?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nein, das ist nicht notwendig. Auf Wunsch übernehmen wir die Abwicklung per Schlüsselübergabe, sodass Sie sich um nichts kümmern müssen.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Welche Kosten fallen an?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Die Kosten richten sich nach Faktoren wie Lage, Größe und zeitlichem Rahmen. Nach der Besichtigung erhalten Sie ein Fixpreis-Angebot, sodass Sie absolute Kostensicherheit haben.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie kurzfristig ist ein Termin möglich?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'In vielen Fällen können wir bereits innerhalb weniger Tage tätig werden. Die genaue Planung hängt vom Umfang ab, doch wir reagieren flexibel auf kurzfristige Anfragen.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Übernehmen Sie auch Keller oder Nebenräume?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, unsere Wohnungsauflösungen in Linz umfassen auch Keller, Dachboden, Garagen und Nebenräume. So haben Sie alles aus einer Hand.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Arbeiten Sie auch diskret?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, Diskretion ist für uns selbstverständlich. Wir treten unauffällig auf und sorgen dafür, dass Ihre Privatsphäre jederzeit gewahrt bleibt.',
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

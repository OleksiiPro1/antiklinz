// app/leistungen/entruempelungsdienst-linz/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const PLUM = '#4A235A';
const CORAL = '#FF6F61';
const MINT  = '#A8E6CF';
const SAND  = '#F5E6CC';
const TEAL  = '#006D77';

export const metadata = {
  title: 'Entrümpelungsdienst in Linz – Fixpreis & Termin | messielinz.at',
  description:
    'Ihr Entrümpelungsdienst in Linz: transparente Fixpreise, verlässliche Termine und diskrete Abwicklung. Kostenlose Besichtigung und rasche Hilfe in Linz & Umgebung.',
};

export default function Page() {
  return (
    <main id="main">
      {/* SECTION 1: HERO */}
      <section
        className="relative"
        aria-label="Entrümpelungsdienst in Linz – Fixpreis & Termin"
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
                Linz & Umgebung • rasche Termine
              </span>

              <h1
                className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: PLUM }}
              >
                Entrümpelungsdienst in Linz –{' '}
                <span style={{ color: CORAL }}>Fixpreis</span> & verlässlicher Termin.
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
                Wenn Räume schnell und ordentlich frei werden sollen, braucht es ein Team, das
                zuverlässig plant, termintreu arbeitet und klare Angebote legt – ohne
                komplizierte Abläufe und ohne Umwege, damit Sie rasch wieder Platz für das
                Wesentliche haben.
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2 text-sm md:grid-cols-3" style={{ color: PLUM }}>
                {['Kostenlose Besichtigung', 'Transparenter Fixpreis', 'Diskrete Abwicklung'].map((t) => (
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

            {/* Visual (заменишь на своё фото) */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.85))',
                  border: `1px solid ${MINT}`,
                }}
              >
                <Image
                  src="/images/Entrümpelungsdienst2.webp"
                  alt="Entrümpelungsdienst in Linz – Fixpreis & Termin"
                  fill
                  className="object-cover mix-blend-multiply"
                  sizes="(min-width:1024px) 540px, 100vw"
                />
              </div>

              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-3 text-sm shadow-md"
                style={{ background: 'white', border: `1px solid ${SAND}`, color: PLUM }}
              >
                <strong style={{ color: TEAL }}>Schnelle Hilfe</strong> • verlässliche Übergabe
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 2: Warum unser Entrümpelungsdienst in Linz? */}
      <section
        className="relative"
        aria-label="Warum unser Entrümpelungsdienst in Linz?"
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
              Warum unser Entrümpelungsdienst in Linz?
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Wer sich für einen <strong>Entrümpelungsdienst in Linz</strong> entscheidet, erwartet
              nicht nur ein leeres Objekt, sondern auch eine professionelle Begleitung, die von der
              ersten Anfrage bis zur Übergabe alles klar und nachvollziehbar gestaltet. Genau hier
              setzen wir an: mit Erfahrung, Flexibilität und einem respektvollen Umgang mit jeder
              Situation – damit Sie den Kopf frei haben und sich um die wirklich wichtigen Dinge
              kümmern können.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* USP 1 */}
            <div className="rounded-2xl border p-6 transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Ein Ansprechpartner von A bis Z
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Von der ersten Kontaktaufnahme über die Planung bis hin zur Durchführung haben Sie
                bei uns immer eine zentrale Ansprechperson, die alle Schritte koordiniert und Ihre
                Fragen sofort beantwortet.
              </p>
            </div>

            {/* USP 2 */}
            <div className="rounded-2xl border p-6 transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Verlässliche Terminplanung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wir legen großen Wert auf Termintreue und klare Absprachen. Sobald ein Datum fixiert
                ist, können Sie sicher sein, dass die Arbeit pünktlich und im vereinbarten Zeitrahmen
                abgeschlossen wird.
              </p>
            </div>

            {/* USP 3 */}
            <div className="rounded-2xl border p-6 transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Klare Angebote ohne Überraschungen
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Nach der kostenlosen Besichtigung erhalten Sie ein Fixpreis-Angebot, das alle
                Leistungen umfasst. Transparenz steht für uns an erster Stelle, versteckte Kosten
                gibt es nicht.
              </p>
            </div>

            {/* USP 4 */}
            <div className="rounded-2xl border p-6 transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Diskrete Abwicklung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wenn Sie möchten, übernehmen wir die komplette Abwicklung in Ihrer Abwesenheit.
                Neutrales Auftreten, respektvolles Vorgehen und absolute Diskretion sind dabei
                selbstverständlich.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 3: Leistungen im Überblick */}
      <section
        className="relative"
        aria-label="Leistungen Entrümpelungsdienst Linz"
        style={{
          background: 'white',
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Leistungen im Überblick
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Unser <strong>Entrümpelungsdienst in Linz</strong> deckt viele unterschiedliche
              Situationen ab – vom privaten Wohnraum über Nebenräume bis hin zu gewerblichen
              Objekten. Dabei achten wir stets darauf, dass der Ablauf für Sie so unkompliziert
              wie möglich bleibt und alle Details im Vorfeld geklärt werden.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Leistung 1 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Wohnräume
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Ob kleine Stadtwohnung oder großzügiges Haus – wir schaffen Platz und sorgen für
                eine Übergabe im vereinbarten Zustand, damit Sie die Räume sofort wieder nutzen
                können.
              </p>
            </div>

            {/* Leistung 2 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Keller & Dachboden
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Über die Jahre sammeln sich viele Dinge in Nebenräumen. Wir sorgen für Ordnung,
                sodass Sie Keller oder Dachboden wieder frei nutzen können.
              </p>
            </div>

            {/* Leistung 3 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Garage & Nebenräume
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Ob Garage, Abstellraum oder Nebenfläche – wir übernehmen die Räumung und geben
                Ihnen damit schnell wieder den gewünschten Platz zurück.
              </p>
            </div>

            {/* Leistung 4 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Büro & Gewerbe
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Auch für Unternehmen sind wir da: Büros, Geschäftsräume oder Lagerflächen werden
                professionell geräumt – mit klarer Terminplanung und respektvollem Umgang.
              </p>
            </div>

            {/* Leistung 5 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Nachlass & Verlassenschaften
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Bei Nachlassfällen stehen wir Angehörigen einfühlsam zur Seite und übernehmen
                die Abwicklung zuverlässig und transparent.
              </p>
            </div>

            {/* Leistung 6 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Kurzfristige Hilfe
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wenn es schnell gehen muss, reagieren wir flexibel und können in vielen Fällen
                auch kurzfristig Termine in Linz und Umgebung anbieten.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* SECTION 4: Ablauf – in drei einfachen Schritten */}
      <section
        className="relative"
        aria-label="Ablauf Entrümpelungsdienst in Linz"
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
              Ablauf – in drei einfachen Schritten
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Damit unser <strong>Entrümpelungsdienst in Linz</strong> für Sie so angenehm wie
              möglich verläuft, arbeiten wir nach einem klar strukturierten Prozess. Jeder Schritt
              wird transparent erklärt, sodass Sie genau wissen, was wann passiert und worauf Sie
              sich verlassen können.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Schritt 1 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
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
                Wir sehen uns das Objekt unverbindlich an, hören zu, welche Wünsche und
                Anforderungen Sie haben, und nehmen uns Zeit, ein realistisches Bild vom Umfang
                der Arbeit zu gewinnen.
              </p>
            </div>

            {/* Schritt 2 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
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
                Direkt nach der Besichtigung erhalten Sie ein klares Angebot mit einem verbindlichen
                Fixpreis. Damit haben Sie absolute Kostensicherheit und können verlässlich planen,
                ohne später Überraschungen zu erleben.
              </p>
            </div>

            {/* Schritt 3 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
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
                Am vereinbarten Termin führen wir die Arbeit zuverlässig, leise und strukturiert
                durch. Anschließend erhalten Sie die Räume im besenreinen Zustand zurück und können
                diese sofort nach Ihren Vorstellungen nutzen.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            
          </div>
        </div>
      </section>
            {/* SECTION 5: Preise & Rahmenbedingungen */}
      <section
        className="relative"
        aria-label="Preise und Rahmenbedingungen Entrümpelungsdienst Linz"
        style={{
          background: 'white',
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Preise &amp; Rahmenbedingungen
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Jeder Auftrag im Rahmen unseres <strong>Entrümpelungsdienstes in Linz</strong> ist
              unterschiedlich und hängt von mehreren Faktoren ab. Damit Sie dennoch volle Sicherheit
              haben, arbeiten wir mit Fixpreis-Angeboten, die nach einer kostenlosen Besichtigung
              erstellt werden. So wissen Sie von Beginn an, welche Kosten entstehen und welche
              Leistungen enthalten sind.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Faktor 1 */}
            <div className="rounded-2xl border p-6 shadow-sm"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Zugänglichkeit &amp; Lage
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Ein leicht zugängliches Erdgeschoss erfordert meist weniger Aufwand als eine Wohnung
                im oberen Stockwerk ohne Aufzug. Auch die Parksituation vor Ort kann eine Rolle für
                die Planung spielen.
              </p>
            </div>

            {/* Faktor 2 */}
            <div className="rounded-2xl border p-6 shadow-sm"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Größe &amp; Möblierung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Je mehr Räume und je umfangreicher die Möblierung, desto größer ist der Aufwand.
                Entscheidend ist auch, ob es sich um einzelne Räume oder ein komplettes Objekt
                handelt, das geräumt werden soll.
              </p>
            </div>

            {/* Faktor 3 */}
            <div className="rounded-2xl border p-6 shadow-sm"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Zeitrahmen &amp; Zusatzwünsche
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Manche Kund:innen wünschen besonders kurzfristige Termine oder zusätzliche Services
                wie Fotodokumentation oder die komplette Abwicklung per Schlüsselübergabe. Solche
                individuellen Faktoren fließen in die Preisgestaltung ein.
              </p>
            </div>
          </div>

          {/* SEO Text Block */}
          <div className="mt-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
               style={{ color: PLUM }}>
            <p className="mb-6">
              Uns ist wichtig, dass Sie nicht die Katze im Sack kaufen. Deshalb führen wir immer
              eine kostenlose Besichtigung durch, bevor wir ein Angebot legen. Auf diese Weise
              können wir den tatsächlichen Umfang seriös einschätzen und Ihnen einen Fixpreis
              nennen, der realistisch und fair ist. So vermeiden Sie Unsicherheiten und können
              sich ganz auf den Ablauf konzentrieren.
            </p>
            <p>
              Mit diesem Vorgehen stellen wir sicher, dass unser <strong>Entrümpelungsdienst in Linz</strong>
              sowohl für kleine Wohnungen als auch für große Objekte eine verlässliche Lösung bietet.
              Die transparente Preisgestaltung schafft Vertrauen und macht jeden Auftrag planbar –
              egal ob kurzfristige Hilfe oder längerfristig geplante Projekte.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 6: Einblicke in die Arbeit */}
      <section
        className="relative"
        aria-label="Einblicke in die Arbeit"
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
            
          </div>

          

          {/* SEO-Textblock */}
          <div className="mt-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
               style={{ color: PLUM }}>
            <p className="mb-6">
              Unsere Arbeitsweise zeichnet sich durch Klarheit, Verlässlichkeit und ein hohes Maß
              an Professionalität aus. Schon in der Vorbereitungsphase achten wir darauf, dass
              alle Abläufe abgestimmt sind, sodass am Einsatztag alles reibungslos verläuft.
            </p>
            <p>
              So wird unser <strong>Entrümpelungsdienst in Linz</strong> für Sie zu einem
              transparenten und nachvollziehbaren Prozess. Von der ersten Kiste bis zur endgültigen
              Übergabe legen wir Wert darauf, dass Sie sich entspannt zurücklehnen können und am
              Ende ein Ergebnis erhalten, das Ihren Erwartungen entspricht.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 7: Häufige Fragen (FAQ) */}
      <section
        className="relative"
        aria-label="Häufige Fragen Entrümpelungsdienst Linz"
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
              Häufige Fragen zum Entrümpelungsdienst in Linz
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Viele Kund:innen haben vorab ähnliche Fragen. Hier finden Sie die wichtigsten Antworten,
              damit Sie von Anfang an Klarheit haben.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            {[
              {
                q: 'Wie läuft eine Entrümpelung in Linz konkret ab?',
                a: 'Unser Entrümpelungsdienst in Linz folgt einem klaren Ablauf: kostenlose Besichtigung, verbindliches Fixpreis-Angebot und Durchführung am vereinbarten Termin. Jeder Schritt wird im Vorfeld mit Ihnen besprochen.',
              },
              {
                q: 'Welche Kosten entstehen?',
                a: 'Die Preise richten sich nach Faktoren wie Lage, Zugänglichkeit, Raumanzahl und gewünschtem Zeitrahmen. Nach der Besichtigung erhalten Sie ein Fixpreis-Angebot, damit Sie volle Kostensicherheit haben.',
              },
              {
                q: 'Muss ich während der Räumung anwesend sein?',
                a: 'Nein, auf Wunsch übernehmen wir die Abwicklung mit Schlüsselübergabe. Damit können Sie sich entspannt zurücklehnen und die Arbeit läuft diskret und zuverlässig ab.',
              },
              {
                q: 'Wie kurzfristig kann ein Termin vereinbart werden?',
                a: 'In vielen Fällen können wir schon innerhalb weniger Tage starten. Die konkrete Planung hängt vom Umfang ab, doch wir bemühen uns stets um schnelle Lösungen.',
              },
              {
                q: 'Übernehmen Sie auch gewerbliche Objekte?',
                a: 'Ja, unser Entrümpelungsdienst in Linz ist sowohl für private Wohnungen als auch für Büros, Geschäftsräume und andere gewerbliche Flächen verfügbar.',
              },
              {
                q: 'Wie wird mit persönlichen Erinnerungsstücken umgegangen?',
                a: 'Wichtige Gegenstände oder Unterlagen werden behutsam behandelt und mit Ihnen abgestimmt. So stellen wir sicher, dass nichts verloren geht, was Ihnen am Herzen liegt.',
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
                  name: 'Wie läuft eine Entrümpelung in Linz konkret ab?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Unser Entrümpelungsdienst in Linz folgt einem klaren Ablauf: kostenlose Besichtigung, verbindliches Fixpreis-Angebot und Durchführung am vereinbarten Termin. Jeder Schritt wird im Vorfeld mit Ihnen besprochen.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Welche Kosten entstehen?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Die Preise richten sich nach Faktoren wie Lage, Zugänglichkeit, Raumanzahl und gewünschtem Zeitrahmen. Nach der Besichtigung erhalten Sie ein Fixpreis-Angebot, damit Sie volle Kostensicherheit haben.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Muss ich während der Räumung anwesend sein?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nein, auf Wunsch übernehmen wir die Abwicklung mit Schlüsselübergabe. Damit können Sie sich entspannt zurücklehnen und die Arbeit läuft diskret und zuverlässig ab.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie kurzfristig kann ein Termin vereinbart werden?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'In vielen Fällen können wir schon innerhalb weniger Tage starten. Die konkrete Planung hängt vom Umfang ab, doch wir bemühen uns stets um schnelle Lösungen.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Übernehmen Sie auch gewerbliche Objekte?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, unser Entrümpelungsdienst in Linz ist sowohl für private Wohnungen als auch für Büros, Geschäftsräume und andere gewerbliche Flächen verfügbar.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie wird mit persönlichen Erinnerungsstücken umgegangen?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Wichtige Gegenstände oder Unterlagen werden behutsam behandelt und mit Ihnen abgestimmt. So stellen wir sicher, dass nichts verloren geht, was Ihnen am Herzen liegt.',
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

// app/leistungen/entruempelungsfirma-linz/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const PLUM = '#4A235A';
const CORAL = '#FF6F61';
const MINT  = '#A8E6CF';
const SAND  = '#F5E6CC';
const TEAL  = '#006D77';

export const metadata = {
  title: 'Entrümpelungsfirma Linz – professionelle Räumungen | messielinz.at',
  description:
    'Ihre Entrümpelungsfirma in Linz: schnelle, zuverlässige und professionelle Räumungen mit Fixpreis. Jetzt unverbindlich via WhatsApp Kontakt aufnehmen.',
};

export default function Page() {
  return (
    <main id="main">
      {/* SECTION 1: HERO */}
      <section
        className="relative"
        aria-label="Entrümpelungsfirma Linz – professionelle Räumungen"
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
                Entrümpelungen in Linz • kurzfristige Termine
              </span>

              <h1
                className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: PLUM }}
              >
                Entrümpelungsfirma Linz –{' '}
                <span style={{ color: CORAL }}>professionelle Räumungen</span>
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
                Als erfahrene Entrümpelungsfirma in Linz stehen wir für Zuverlässigkeit,
                Termintreue und transparente Fixpreise. Egal ob Wohnung, Haus oder Keller – wir
                kümmern uns darum, dass Sie wieder freie Räume nutzen können, ohne sich um die
                mühsamen Details sorgen zu müssen.
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2 text-sm md:grid-cols-2" style={{ color: PLUM }}>
                {[
                  'Kostenlose Besichtigung',
                  'Fixpreis-Angebot vor Start',
                  'Diskrete Abwicklung',
                  'Kurzfristige Termine in Linz & Umgebung',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: CORAL }}
                      aria-hidden
                    />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="https://wa.me/436766135140"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
                  style={{ background: CORAL, color: 'white' }}
                >
                  Jetzt kostenlose Besichtigung anfragen
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.85))',
                  border: `1px solid ${MINT}`,
                }}
              >
                <Image
                  src="/images/Leistungen-2.webp"
                  alt="Entrümpelungsfirma Linz – professionelle Räumungen"
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
                <strong style={{ color: TEAL }}>Fixpreis Garantie</strong> • Linz & Umgebung
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 2: Warum unsere Entrümpelungsfirma in Linz? */}
      <section
        className="relative"
        aria-label="Warum unsere Entrümpelungsfirma in Linz?"
        style={{
          background: 'white',
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: PLUM }}>
            Warum unsere Entrümpelungsfirma in Linz?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: PLUM }}>
            Wer eine <strong>Entrümpelungsfirma in Linz</strong> beauftragt, legt großen Wert auf
            Verlässlichkeit, Erfahrung und ein respektvolles Auftreten. Gerade wenn es um sensible
            Situationen geht, ist es entscheidend, dass nicht nur effizient gearbeitet wird, sondern
            auch auf persönliche Wünsche und Bedürfnisse eingegangen wird. Unser Team nimmt sich Zeit
            für eine umfassende Beratung und stellt sicher, dass von der ersten Besichtigung bis zur
            finalen Übergabe alles transparent und nachvollziehbar bleibt.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: PLUM }}>
            Erfahrung und Professionalität
          </h3>
          <p className="text-base leading-relaxed mb-6" style={{ color: PLUM }}>
            Seit vielen Jahren unterstützen wir Kund:innen in Linz und Umgebung bei Räumungen aller
            Art. Diese Erfahrung erlaubt uns, unterschiedlichste Projekte mit der nötigen Ruhe und
            Professionalität umzusetzen. Dabei spielt es keine Rolle, ob es sich um eine kleine
            Wohnung, ein ganzes Haus oder Geschäftsräume handelt – wir passen unseren Ablauf an die
            jeweilige Situation an.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: PLUM }}>
            Transparente Fixpreise
          </h3>
          <p className="text-base leading-relaxed mb-6" style={{ color: PLUM }}>
            Viele Menschen haben Sorge vor versteckten Kosten oder unklaren Abrechnungen. Deshalb
            erhalten Sie nach einer kostenlosen Besichtigung ein verbindliches Angebot mit einem
            klaren Fixpreis. So wissen Sie von Anfang an, welche Ausgaben auf Sie zukommen, und
            können sich darauf verlassen, dass es keine unangenehmen Überraschungen gibt.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: PLUM }}>
            Diskretion und Verlässlichkeit
          </h3>
          <p className="text-base leading-relaxed" style={{ color: PLUM }}>
            Besonders wichtig ist vielen unserer Kund:innen die diskrete Abwicklung. Wir arbeiten
            unauffällig, respektvoll und gehen auf individuelle Wünsche ein. Zudem legen wir großen
            Wert auf Pünktlichkeit und eine saubere Übergabe, damit Sie Ihre Räume schnell und ohne
            zusätzliche Belastungen wieder nutzen können. So wird unsere <strong>Entrümpelungsfirma
            in Linz</strong> zu einem verlässlichen Partner, auf den Sie sich jederzeit verlassen können.
          </p>
        </div>
      </section>
                {/* SECTION 3: Für wen eignet sich unsere Räumungsfirma in Linz? */}
      <section
        className="relative"
        aria-label="Für wen eignet sich unsere Räumungsfirma in Linz?"
        style={{
          backgroundImage: `
            radial-gradient(70rem 30rem at 0% 50%, ${MINT}22, transparent),
            radial-gradient(70rem 30rem at 100% 50%, ${CORAL}11, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: PLUM }}>
              Für wen eignet sich unsere Räumungsfirma in Linz?
            </h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Unsere <strong>Räumungsfirma in Linz</strong> richtet sich an Privatpersonen,
              Unternehmen und Familien, die Wert auf eine diskrete, zuverlässige und nachvollziehbare
              Abwicklung legen. Jeder Auftrag ist einzigartig, und genau deshalb passen wir unsere
              Vorgehensweise individuell an Ihre Situation an.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Privatpersonen */}
            <div className="rounded-2xl border p-6 shadow-sm flex flex-col justify-between"
                 style={{ borderColor: SAND, background: 'white' }}>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: PLUM }}>
                  Privatpersonen &amp; Familien
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: PLUM }}>
                  Ob Umzug, Neuanfang oder über die Jahre gewachsene Räume – wir helfen dabei, wieder
                  Platz zu schaffen, ohne Stress und mit einem klaren Plan.
                </p>
              </div>
              <Link
                href="https://wa.me/436766135140"
                className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition hover:opacity-95"
                style={{ background: CORAL, color: 'white' }}
              >
                Jetzt anfragen
              </Link>
            </div>

            {/* Unternehmen */}
            <div className="rounded-2xl border p-6 shadow-sm flex flex-col justify-between"
                 style={{ borderColor: SAND, background: 'white' }}>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: PLUM }}>
                  Unternehmen &amp; Büros
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: PLUM }}>
                  Wenn Büros oder Geschäftsräume neu genutzt werden sollen, sorgen wir für eine schnelle,
                  strukturierte Abwicklung, sodass der Betrieb möglichst ohne Unterbrechungen weiterläuft.
                </p>
              </div>
              <Link
                href="https://wa.me/436766135140"
                className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition hover:opacity-95"
                style={{ background: CORAL, color: 'white' }}
              >
                WhatsApp Kontakt
              </Link>
            </div>

            {/* Nachlässe */}
            <div className="rounded-2xl border p-6 shadow-sm flex flex-col justify-between"
                 style={{ borderColor: SAND, background: 'white' }}>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: PLUM }}>
                  Nachlässe &amp; Verlassenschaften
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: PLUM }}>
                  Gerade bei Verlassenschaften ist ein sensibler Umgang wichtig. Wir begleiten Sie
                  respektvoll und transparent durch den gesamten Prozess – von der Besichtigung bis
                  zur Übergabe.
                </p>
              </div>
              <Link
                href="https://wa.me/436766135140"
                className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition hover:opacity-95"
                style={{ background: CORAL, color: 'white' }}
              >
                Direkt anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 4: Ablauf in drei Schritten */}
      <section
        className="relative"
        aria-label="Ablauf Entrümpelungsfirma Linz"
        style={{
          background: 'white',
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" style={{ color: PLUM }}>
            Ablauf in drei Schritten
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-center" style={{ color: PLUM }}>
            Damit Sie genau wissen, wie eine Zusammenarbeit mit unserer <strong>Entrümpelungsfirma in Linz</strong> 
            abläuft, haben wir den Prozess klar und einfach strukturiert. Jeder Schritt ist darauf ausgerichtet, 
            Ihnen Sicherheit, Transparenz und eine möglichst stressfreie Abwicklung zu bieten. 
            Von der ersten Anfrage bis zur Übergabe begleiten wir Sie verlässlich und mit einem klaren Plan.
          </p>

          <div className="grid gap-10 md:grid-cols-3">
            {/* Schritt 1 */}
            <div className="rounded-2xl border p-6 shadow-sm flex flex-col justify-between"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: PLUM }}>
                1. Kostenlose Besichtigung
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: PLUM }}>
                Im ersten Schritt vereinbaren wir einen kurzfristigen Termin bei Ihnen in Linz 
                oder Umgebung. Vor Ort nehmen wir uns Zeit, die Räumlichkeiten zu besichtigen, 
                Ihre Wünsche aufzunehmen und gemeinsam zu klären, wie die Umsetzung am besten erfolgen kann.
              </p>
            </div>

            {/* Schritt 2 */}
            <div className="rounded-2xl border p-6 shadow-sm flex flex-col justify-between"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: PLUM }}>
                2. Transparentes Fixpreis-Angebot
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: PLUM }}>
                Direkt nach der Besichtigung erhalten Sie ein verbindliches Angebot mit einem 
                klaren Fixpreis. So wissen Sie genau, welche Kosten entstehen, und können sich darauf verlassen, 
                dass es keine versteckten Zusatzgebühren gibt. Alles bleibt nachvollziehbar und fair.
              </p>
            </div>

            {/* Schritt 3 */}
            <div className="rounded-2xl border p-6 shadow-sm flex flex-col justify-between"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: PLUM }}>
                3. Räumung & Übergabe
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: PLUM }}>
                Am vereinbarten Termin führen wir die Räumung zuverlässig und termingerecht durch. 
                Sie erhalten die Räume in sauberem Zustand zurück und können diese sofort wieder so nutzen, 
                wie Sie es wünschen. Diskretion und Pünktlichkeit sind dabei für uns selbstverständlich.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="https://wa.me/436766135140"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
              style={{ background: CORAL, color: 'white' }}
            >
              Jetzt über WhatsApp anfragen
            </Link>
          </div>
        </div>
      </section>
            {/* SECTION 5: Preise & Umfang */}
      <section
        className="relative"
        aria-label="Preise und Umfang Entrümpelungsfirma Linz"
        style={{
          background: 'white',
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: PLUM }}>
            Preise &amp; Umfang – was beeinflusst den Aufwand?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: PLUM }}>
            Wer eine <strong>Entrümpelungsfirma in Linz</strong> beauftragt, möchte von Anfang an Klarheit
            darüber haben, wie sich die Kosten zusammensetzen. Wir legen daher großen Wert auf Transparenz
            und nachvollziehbare Kriterien, damit Sie sich gut informiert fühlen und Vertrauen in den gesamten
            Prozess gewinnen. Jeder Auftrag ist anders, und genau deshalb nehmen wir uns Zeit, den tatsächlichen
            Umfang realistisch einzuschätzen.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: PLUM }}>
            Größe und Beschaffenheit der Räume
          </h3>
          <p className="text-base leading-relaxed mb-6" style={{ color: PLUM }}>
            Je größer eine Wohnung oder ein Haus ist und je mehr Räume betroffen sind, desto umfangreicher wird
            die Abwicklung. Auch die Art der Einrichtung, also ob es sich um moderne Möbel, schwere Stücke oder
            kleinteilige Gegenstände handelt, spielt eine Rolle bei der Kalkulation. So können wir den notwendigen
            Zeit- und Personalaufwand präzise bestimmen.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: PLUM }}>
            Zugänglichkeit &amp; Lage
          </h3>
          <p className="text-base leading-relaxed mb-6" style={{ color: PLUM }}>
            Ein entscheidender Faktor ist die Lage des Objekts. Befindet sich die Immobilie im Erdgeschoss,
            in einem höheren Stockwerk ohne Aufzug oder in einem Bereich mit schwieriger Zufahrt, wirkt sich
            dies direkt auf den Aufwand aus. Wir berücksichtigen all diese Aspekte bei unserer Besichtigung,
            damit das Angebot realistisch und fair bleibt.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: PLUM }}>
            Zeitrahmen &amp; individuelle Wünsche
          </h3>
          <p className="text-base leading-relaxed mb-6" style={{ color: PLUM }}>
            Manche Kund:innen benötigen eine besonders kurzfristige Abwicklung, während andere mehr Zeit
            für die Abstimmung und Vorbereitung einplanen möchten. Auch zusätzliche Leistungen wie eine
            diskrete Schlüsselübergabe oder eine detaillierte Dokumentation fließen in die Planung mit ein.
            So bleibt jede Räumung individuell und auf Ihre Situation zugeschnitten.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: PLUM }}>
            Transparenz durch Fixpreise
          </h3>
          <p className="text-base leading-relaxed" style={{ color: PLUM }}>
            Am Ende steht immer ein Fixpreis-Angebot, das Ihnen absolute Sicherheit gibt. Nach unserer
            kostenlosen Besichtigung in Linz wissen Sie genau, welche Kosten entstehen, und können sich
            darauf verlassen, dass keine versteckten Gebühren dazukommen. So bleibt die Zusammenarbeit
            planbar, fair und vertrauensvoll.
          </p>
        </div>
      </section>
              {/* SECTION 5: Preise & Umfang */}
      <section
        className="relative"
        aria-label="Preise und Umfang Entrümpelungsfirma Linz"
        style={{
          backgroundImage: `
            radial-gradient(80rem 40rem at 10% 0%, ${MINT}22, transparent),
            radial-gradient(70rem 30rem at 90% 100%, ${CORAL}11, transparent)
          `,
        }}
      >
        <div className="relative mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          {/* Hintergrund-Deko */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom right, white 60%, transparent)`,
              maskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)',
            }}
          />

          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" style={{ color: PLUM }}>
              Preise &amp; Umfang – was beeinflusst den Aufwand?
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: PLUM }}>
              Wenn Sie eine <strong>Entrümpelungsfirma in Linz</strong> beauftragen, möchten Sie von
              Beginn an Klarheit und Sicherheit haben. Genau deshalb nehmen wir uns Zeit, den
              tatsächlichen Umfang gemeinsam mit Ihnen zu besprechen, bevor wir ein Angebot
              erstellen. Transparenz steht bei uns an erster Stelle – so bleibt die Zusammenarbeit
              von Anfang an nachvollziehbar.
            </p>

            <div className="my-10 grid gap-10 md:grid-cols-2">
              <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
                <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: PLUM }}>
                  Größe und Ausstattung der Räume
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: PLUM }}>
                  Ob kleine Wohnung oder mehrstöckiges Haus – je nach Fläche und Möblierung gestaltet
                  sich der Aufwand unterschiedlich. Dabei spielt es auch eine Rolle, ob viele kleine
                  Gegenstände vorhanden sind oder wenige, aber große Möbelstücke bewegt werden müssen.
                </p>
              </div>

              <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
                <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: PLUM }}>
                  Zugänglichkeit &amp; Lage
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: PLUM }}>
                  Liegt die Immobilie im Erdgeschoss mit direktem Zugang oder in einem höheren Stockwerk
                  mit engen Stiegen? Solche Rahmenbedingungen wirken sich direkt auf den Aufwand aus
                  und werden von uns realistisch einkalkuliert.
                </p>
              </div>

              <div className="rounded-2xl border p-6 shadow-sm md:col-span-2" style={{ borderColor: SAND, background: 'white' }}>
                <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: PLUM }}>
                  Zeitrahmen &amp; individuelle Wünsche
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: PLUM }}>
                  Manche Kund:innen benötigen kurzfristige Unterstützung, andere legen Wert auf eine
                  besonders gründliche Abstimmung. Auch zusätzliche Wünsche wie eine diskrete Abwicklung
                  mit Schlüsselübergabe fließen in die Planung mit ein. Dadurch bleibt jedes Projekt
                  einzigartig und auf Ihre Situation zugeschnitten.
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: PLUM }}>
              Am Ende erhalten Sie immer ein verbindliches Fixpreis-Angebot. Damit wissen Sie
              genau, welche Kosten entstehen, und können sich darauf verlassen, dass die Kalkulation
              realistisch und fair bleibt. So wird die Zusammenarbeit mit unserer{' '}
              <strong>Entrümpelungsfirma in Linz</strong> zu einem verlässlichen Schritt, der
              Sicherheit gibt und Freiraum schafft.
            </p>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="https://wa.me/436766135140"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
                style={{ background: CORAL, color: 'white' }}
              >
                Jetzt über WhatsApp anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 6: Einblicke in unsere Arbeit */}
      <section
        className="relative"
        aria-label="Einblicke in unsere Arbeit"
        style={{
          backgroundImage: `
            radial-gradient(60rem 30rem at 20% 100%, ${MINT}22, transparent),
            radial-gradient(50rem 25rem at 80% 0%, ${CORAL}11, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20 relative">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" style={{ color: PLUM }}>
            Einblicke in unsere Arbeit
          </h2>

          <div className="space-y-10">
            {/* Block 1 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: PLUM }}>
                Schritt für Schritt mit klarer Struktur
              </h3>
              <p className="text-base leading-relaxed" style={{ color: PLUM }}>
                Unsere <strong>Entrümpelungsfirma in Linz</strong> arbeitet nie nach einem starren
                Schema, sondern orientiert sich an den tatsächlichen Gegebenheiten vor Ort. Wir gehen
                jeden Auftrag mit einer klaren Struktur an, sodass Sie genau wissen, wann welcher
                Schritt erfolgt. Diese Transparenz gibt Sicherheit und schafft Vertrauen, weil der
                gesamte Ablauf für Sie jederzeit nachvollziehbar bleibt.
              </p>
            </div>

            {/* Block 2 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: PLUM }}>
                Sensibler Umgang mit besonderen Situationen
              </h3>
              <p className="text-base leading-relaxed" style={{ color: PLUM }}>
                Gerade bei Verlassenschaften oder stark beanspruchten Wohnsituationen ist Einfühlungsvermögen
                besonders wichtig. Wir achten darauf, dass persönliche Wünsche respektiert werden und Sie
                selbst bestimmen können, welche Schwerpunkte im Ablauf gesetzt werden sollen. Dadurch wird
                jede Räumung individuell und behutsam umgesetzt.
              </p>
            </div>

            {/* Block 3 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: PLUM }}>
                Termintreue und Verlässlichkeit
              </h3>
              <p className="text-base leading-relaxed" style={{ color: PLUM }}>
                Wer sich für eine professionelle Räumung entscheidet, möchte nicht nur ein sauberes Ergebnis,
                sondern auch eine Abwicklung, die pünktlich und planbar erfolgt. Deshalb legen wir großen Wert
                auf Termintreue. Sie können sicher sein, dass der vereinbarte Zeitplan eingehalten wird und die
                Übergabe zum gewünschten Zeitpunkt erfolgt.
              </p>
            </div>

            {/* Block 4 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: PLUM }}>
                Vertrauen als Grundlage
              </h3>
              <p className="text-base leading-relaxed" style={{ color: PLUM }}>
                Jede Zusammenarbeit lebt vom gegenseitigen Vertrauen. Unser Ziel ist es, dieses Vertrauen durch
                klare Kommunikation, nachvollziehbare Preise und eine respektvolle Umsetzung zu stärken. So wird
                aus einer rein organisatorischen Räumung ein Schritt, der für Sie Sicherheit und neuen Freiraum
                bedeutet.
              </p>
            </div>
          </div>

          {/* CTA */}
          
        </div>
      </section>

    </main>
  );
}

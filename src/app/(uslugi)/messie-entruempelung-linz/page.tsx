// app/leistungen/messie-entruempelung-linz/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const PLUM = '#4A235A';
const CORAL = '#FF6F61';
const MINT  = '#A8E6CF';
const SAND  = '#F5E6CC';
const TEAL  = '#006D77';

export const metadata = {
  title: 'Messie Entrümpelung Linz – diskret & respektvoll | messielinz.at',
  description:
    'Diskrete Messie Hilfe und Entrümpelung in Linz: respektvoll, strukturiert und mit Fixpreis. Kostenlose Besichtigung und schnelle Terminvergabe.',
};

export default function Page() {
  return (
    <main id="main">
      {/* SECTION 1: HERO */}
      <section
        className="relative"
        aria-label="Messie Entrümpelung in Linz"
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
                Messie Hilfe in Linz • kurzfristige Termine
              </span>

              <h1
                className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: PLUM }}
              >
                Messie Entrümpelung Linz –{' '}
                <span style={{ color: CORAL }}>diskret</span>, respektvoll, strukturiert.
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
                Wir begleiten Sie Schritt für Schritt: ruhig, ohne Bewertung und mit klarer
                Planung. Sie entscheiden, was bleibt. Wir kümmern uns um den Rest – sorgfältig,
                leise und termingerecht.
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2 text-sm md:grid-cols-3" style={{ color: PLUM }}>
                {['Kostenlose Besichtigung', 'Fixpreis vor Start', 'Schlüsselübernahme möglich'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: CORAL }} aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>

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
                  Alle Leistungen
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
                  src="/images/messie-linz.webp"
                  alt="Messie Entrümpelung in Linz – diskret & respektvoll"
                  fill
                  className="object-cover mix-blend-multiply"
                  sizes="(min-width:1024px) 540px, 100vw"
                />
              </div>

              {/* маленький бейдж */}
              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-3 text-sm shadow-md"
                style={{ background: 'white', border: `1px solid ${SAND}`, color: PLUM }}
              >
                <strong style={{ color: TEAL }}>100% Diskretion</strong> • Linz & Umgebung
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 2: USPs */}
      <section
        className="relative"
        aria-label="Warum messielinz.at"
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
              Warum messielinz.at?
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Wer vor der Herausforderung einer Messie-Wohnung steht, sucht nicht einfach nur nach
              einem schnellen Räumungsservice, sondern nach einem verlässlichen Partner, der
              sensibel, strukturiert und mit viel Respekt vorgeht. Genau das bieten wir – und zwar
              nicht mit standardisierten Abläufen, sondern mit einem auf Ihre Situation abgestimmten
              Vorgehen, das Ihnen Schritt für Schritt Sicherheit gibt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* USP 1 */}
            <div className="rounded-2xl border p-6 transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Einfühlsames Vorgehen
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wir nehmen uns Zeit, gehen ruhig und respektvoll mit allen Situationen um und
                achten darauf, dass Sie sich jederzeit gut aufgehoben fühlen – ohne Druck und ohne
                unnötige Fragen.
              </p>
            </div>

            {/* USP 2 */}
            <div className="rounded-2xl border p-6 transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Klare Planung &amp; Fixpreis
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Angebot mit einem
                fairen Fixpreis. Damit wissen Sie von Anfang an, welche Kosten auf Sie zukommen und
                können verlässlich planen.
              </p>
            </div>

            {/* USP 3 */}
            <div className="rounded-2xl border p-6 transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Kurzfristige Termine
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wir sind flexibel und können meist sehr kurzfristig in Linz und Umgebung für Sie
                tätig werden. So verlieren Sie keine wertvolle Zeit und haben schnell wieder einen
                freien Wohnraum.
              </p>
            </div>

            {/* USP 4 */}
            <div className="rounded-2xl border p-6 transition hover:shadow-md"
                 style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Diskrete Abwicklung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Auf Wunsch übernehmen wir die komplette Abwicklung in Ihrer Abwesenheit. Neutrale
                Kleidung, leises Arbeiten und die Zusicherung absoluter Diskretion sind für uns
                selbstverständlich.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 3: Wann Unterstützung sinnvoll ist */}
      <section
        className="relative"
        aria-label="Wann Unterstützung sinnvoll ist"
        style={{
          background: 'white',
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Woran erkennt man, dass Unterstützung sinnvoll ist?
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Nicht jede überfüllte Wohnung ist gleich ein Extremfall, und doch gibt es Momente, in
              denen eine professionelle Begleitung spürbar Entlastung bringt. Viele unserer Kund:innen
              berichten, dass sie lange gezögert haben, bevor sie Hilfe in Anspruch genommen haben –
              und am Ende erleichtert waren, den Schritt gegangen zu sein.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border p-6" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Überfüllte Räume
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wenn Zimmer kaum mehr begehbar sind, weil Möbel, Kisten und Alltagsgegenstände jeden
                freien Platz beanspruchen, wird es schwer, alleine einen Überblick zu bekommen.
              </p>
            </div>

            <div className="rounded-2xl border p-6" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Blockierte Wege
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Sind Türen oder Fenster verstellt oder bleibt kaum Bewegungsfreiheit, entsteht oft
                das Gefühl, in den eigenen vier Wänden eingeengt zu sein.
              </p>
            </div>

            <div className="rounded-2xl border p-6" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Dauerhafte Überforderung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Wer immer wieder versucht, alleine Struktur zu schaffen, dabei aber regelmäßig das
                Gefühl hat, nicht voranzukommen, profitiert oft von einer ruhigen und erfahrenen
                Unterstützung.
              </p>
            </div>

            <div className="rounded-2xl border p-6" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Emotionale Belastung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Häufig ist es nicht nur die Menge an Gegenständen, sondern auch die Geschichte
                dahinter, die das Loslassen erschwert. Genau hier braucht es Fingerspitzengefühl.
              </p>
            </div>

            <div className="rounded-2xl border p-6" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Zeitmangel
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Beruf, Familie und Verpflichtungen lassen oft keinen Raum, sich stundenlang mit
                aufwendigen Räumarbeiten zu beschäftigen. Ein professionelles Team nimmt hier
                spürbar Druck.
              </p>
            </div>

            <div className="rounded-2xl border p-6" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Wunsch nach Neuanfang
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Viele Kund:innen berichten, dass sie nach einer begleiteten Räumung das Gefühl hatten,
                endlich wieder frei atmen zu können und Platz für einen neuen Lebensabschnitt zu haben.
              </p>
            </div>
          </div>

          {/* Mini-CTA */}
          <div className="mt-12 text-center">
            <Link
              href="https://wa.me/436766135140"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
              style={{ background: CORAL, color: 'white' }}
            >
              Unverbindlich sprechen
            </Link>
          </div>
        </div>
      </section>
            {/* SECTION 4: Unser Ansatz bei Messie-Fällen */}
      <section
        className="relative"
        aria-label="Unser Ansatz bei Messie-Fällen"
        style={{
          backgroundImage: `
            radial-gradient(70rem 30rem at 0% 50%, ${MINT}22, transparent),
            radial-gradient(70rem 30rem at 100% 50%, ${CORAL}11, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Unser Ansatz bei Messie-Fällen
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Eine Messie Entrümpelung in Linz braucht mehr als Muskelkraft – sie erfordert Ruhe,
              Einfühlungsvermögen und eine klare Struktur. Unser Ziel ist es, Räume nicht einfach
              leerzuräumen, sondern gemeinsam mit Ihnen einen Weg zu finden, der sowohl praktisch
              als auch emotional entlastend ist. So entsteht Schritt für Schritt ein neues
              Lebensumfeld, das wieder bewohnt und genutzt werden kann.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Ansatz 1 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Respekt vor Erinnerungsstücken
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Viele Objekte haben nicht nur materiellen, sondern auch persönlichen Wert. Wir
                achten darauf, dass wichtige Erinnerungsstücke gesichert werden und besprechen
                gemeinsam, was besonders aufbewahrt werden soll.
              </p>
            </div>

            {/* Ansatz 2 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Strukturierte Vorgehensweise
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Statt planlos vorzugehen, arbeiten wir mit einem klaren Ablauf, der Schritt für
                Schritt Übersicht schafft. Dadurch behalten Sie stets die Kontrolle, und das Projekt
                entwickelt sich in einem Tempo, das für Sie angenehm ist.
              </p>
            </div>

            {/* Ansatz 3 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Transparente Kommunikation
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Ob regelmäßige Updates, Fotodokumentation oder die Abstimmung einzelner Schritte –
                wir legen großen Wert auf Offenheit. So wissen Sie jederzeit, was bereits erledigt
                ist und welche Schritte noch folgen.
              </p>
            </div>
          </div>

          {/* Mini-CTA */}
          <div className="mt-12 text-center">
            <Link
              href="https://wa.me/436766135140"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
              style={{ background: CORAL, color: 'white' }}
            >
              Jetzt unverbindlich beraten lassen
            </Link>
          </div>
        </div>
      </section>
            {/* SECTION 5: Ablauf in drei Schritten */}
      <section
        className="relative"
        aria-label="Ablauf Messie Entrümpelung Linz"
        style={{
          background: 'white',
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Ablauf in drei Schritten
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Damit Sie jederzeit Klarheit haben, arbeiten wir nach einem einfachen und
              nachvollziehbaren Ablauf. So vermeiden wir Unsicherheiten, und Sie wissen von Anfang
              an, was auf Sie zukommt. Jeder Schritt ist darauf ausgelegt, Ihnen den größtmöglichen
              Komfort zu bieten und gleichzeitig sicherzustellen, dass die Entrümpelung effizient
              und respektvoll abläuft.
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
                Wir besuchen Sie in Linz oder Umgebung und nehmen uns Zeit, die Situation gemeinsam
                zu besprechen. Dabei klären wir, welche Bereiche besonders wichtig sind und welche
                Wünsche Sie für den Ablauf haben.
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
                Transparentes Fixpreis-Angebot
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Direkt im Anschluss an die Besichtigung erhalten Sie von uns ein klares Angebot mit
                einem verbindlichen Fixpreis. Dadurch wissen Sie genau, welche Kosten entstehen, und
                können sich auf eine faire und nachvollziehbare Grundlage verlassen.
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
                Am vereinbarten Termin führen wir die Räumung zuverlässig und leise durch. Sie
                erhalten Ihr Objekt besenrein und termingerecht zurück und können den Raum sofort
                wieder wie gewünscht nutzen.
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
              Jetzt kostenlose Besichtigung anfragen
            </Link>
          </div>
        </div>
      </section>
            {/* SECTION 6: Preise & Umfang */}
      <section
        className="relative"
        aria-label="Preise und Umfang Messie Entrümpelung Linz"
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
              Preise &amp; Umfang – was bestimmt den Aufwand?
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Die Kosten einer <strong>Messie Entrümpelung in Linz</strong> hängen von mehreren
              Faktoren ab, die wir immer individuell betrachten. Uns ist wichtig, dass Sie von Anfang
              an nachvollziehen können, wie sich der Preis zusammensetzt und warum jedes Projekt
              seinen eigenen Rahmen hat. So schaffen wir Transparenz und geben Ihnen die Sicherheit,
              dass keine unerwarteten Kosten entstehen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Faktor 1 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Zugänglichkeit &amp; Etage
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Ob es sich um ein Erdgeschoss oder eine höher gelegene Wohnung handelt, macht für
                den Ablauf einen Unterschied. Auch Aufzüge oder enge Stiegenhäuser beeinflussen den
                Aufwand und werden bei der Planung berücksichtigt.
              </p>
            </div>

            {/* Faktor 2 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Raumanzahl &amp; Möblierung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Je mehr Räume vorhanden sind und je stärker diese möbliert sind, desto umfangreicher
                wird das Projekt. Dabei betrachten wir nicht nur die Anzahl, sondern auch die
                Beschaffenheit und Größe der Möbelstücke.
              </p>
            </div>

            {/* Faktor 3 */}
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Zeitrahmen &amp; Zusatzwünsche
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Manche Kund:innen wünschen eine besonders kurzfristige Abwicklung oder zusätzliche
                Leistungen wie Fotodokumentation oder die Abwicklung mit Schlüsselübergabe. Diese
                individuellen Faktoren fließen in unser Fixpreis-Angebot mit ein.
              </p>
            </div>
          </div>

          {/* SEO-Text Block */}
          <div className="mt-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
            <p className="mb-6">
              Unser Anspruch ist es, faire und nachvollziehbare Preise anzubieten. Deshalb führen wir
              immer eine kostenlose Besichtigung in Linz und Umgebung durch, bevor wir ein verbindliches
              Angebot erstellen. Auf diese Weise können wir den tatsächlichen Umfang genau einschätzen
              und Ihnen garantieren, dass das Angebot auf realistischen Grundlagen basiert. So entsteht
              ein Fixpreis, der sowohl Ihre Anforderungen berücksichtigt als auch die notwendigen
              Ressourcen realistisch abbildet.
            </p>
            <p>
              Egal ob kleine Wohnung oder ein größeres Haus: Sie können sich darauf verlassen, dass
              unsere Kalkulation transparent bleibt und Sie keine unangenehmen Überraschungen erleben.
              Damit wird die <strong>Messie Entrümpelung in Linz</strong> zu einem planbaren Schritt,
              der Sicherheit gibt und den Weg für einen echten Neuanfang freimacht.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 7: Einblicke in unsere Arbeit */}
      <section
        className="relative"
        aria-label="Einblicke in unsere Arbeit"
        style={{
          background: 'white',
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Einblicke in unsere Arbeit
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Eine <strong>Messie Entrümpelung in Linz</strong> ist mehr als nur ein technischer Ablauf.
              Es geht um Vertrauen, um das richtige Gespür und um die Fähigkeit, sensibel mit jeder
              Situation umzugehen. Damit Sie sich ein Bild machen können, zeigen wir hier Eindrücke aus
              unserem Arbeitsalltag – immer neutral, professionell und respektvoll.
            </p>
          </div>

          {/* Grid mit Prozessbildern */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { src: '/images/messie-1.webp', alt: 'Vorbereitung und Planung' },
              { src: '/images/messie-2.webp', alt: 'Sorgfältiges Verpacken von Gegenständen' },
              { src: '/images/messie-3.webp', alt: 'Transport und strukturierte Abwicklung' },
              { src: '/images/messie-4.webp', alt: 'Übergabe nach abgeschlossener Arbeit' },
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

          {/* SEO-Textblock */}
          <div className="mt-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
            <p className="mb-6">
              Unsere Erfahrung zeigt, dass viele Kund:innen anfangs unsicher sind, wie eine Zusammenarbeit
              konkret aussieht. Mit den gezeigten Bildern möchten wir verdeutlichen, dass wir strukturiert
              arbeiten, mit klaren Abläufen und einem hohen Maß an Diskretion. Jede Phase – von der
              Vorbereitung über die Durchführung bis hin zur Übergabe – ist darauf ausgelegt, dass Sie
              sich auf uns verlassen können.
            </p>
            <p>
              Wichtig ist uns dabei vor allem, dass die <strong>Messie Entrümpelung in Linz</strong> nicht
              als anonymer Standardprozess verstanden wird, sondern als individuell abgestimmte Begleitung.
              Wir orientieren uns an Ihrem Tempo, Ihren Wünschen und den besonderen Umständen, die jede
              Wohnung mit sich bringt. Genau dadurch entsteht am Ende das Gefühl von Sicherheit und die
              Freiheit, in den eigenen vier Wänden neu anzufangen.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 8: Häufige Fragen (FAQ) */}
      <section
        className="relative"
        aria-label="Häufige Fragen zur Messie Entrümpelung in Linz"
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
              Häufige Fragen zur Messie Entrümpelung in Linz
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Viele unserer Kund:innen haben ähnliche Fragen, bevor sie sich für eine Begleitung
              entscheiden. Deshalb beantworten wir hier die wichtigsten Punkte rund um Abläufe,
              Diskretion und Kosten – klar und verständlich.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            {[
              {
                q: 'Wie läuft eine Messie Entrümpelung in Linz ab?',
                a: 'Der Ablauf besteht aus einer kostenlosen Besichtigung, einem klaren Fixpreis-Angebot und der anschließenden Durchführung am vereinbarten Termin. Jeder Schritt ist transparent und wird im Vorfeld mit Ihnen abgestimmt.',
              },
              {
                q: 'Muss ich während der Entrümpelung anwesend sein?',
                a: 'Nein. Auf Wunsch übernehmen wir die Abwicklung mit Schlüsselübergabe, sodass Sie nicht persönlich vor Ort sein müssen. Diskretion und Verlässlichkeit sind dabei selbstverständlich.',
              },
              {
                q: 'Wie kurzfristig ist ein Termin möglich?',
                a: 'In vielen Fällen können wir innerhalb weniger Tage in Linz tätig werden. Die konkrete Verfügbarkeit hängt vom Umfang ab, aber wir bemühen uns immer um eine schnelle Lösung.',
              },
              {
                q: 'Welche Kosten entstehen bei einer Messie Entrümpelung?',
                a: 'Die Preise richten sich nach Faktoren wie Raumgröße, Zugänglichkeit und gewünschtem Zeitrahmen. Nach der Besichtigung erhalten Sie ein transparentes Fixpreis-Angebot ohne versteckte Zusatzkosten.',
              },
              {
                q: 'Wie wird mit persönlichen Erinnerungsstücken umgegangen?',
                a: 'Besonders wichtige Gegenstände werden von uns gesichert und mit Ihnen abgestimmt. So stellen wir sicher, dass Erinnerungsstücke nicht verloren gehen und respektvoll behandelt werden.',
              },
              {
                q: 'Kann die Arbeit auch diskret erfolgen?',
                a: 'Ja, absolute Diskretion ist uns ein Anliegen. Wir treten unauffällig auf, arbeiten leise und respektvoll und sorgen dafür, dass Ihre Privatsphäre jederzeit geschützt bleibt.',
              },
              {
                q: 'Welche Regionen werden abgedeckt?',
                a: 'Wir sind vor allem in Linz und den angrenzenden Gemeinden tätig. Bei Bedarf prüfen wir auch Einsätze in weiteren Teilen von Oberösterreich – sprechen Sie uns einfach an.',
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
                  name: 'Wie läuft eine Messie Entrümpelung in Linz ab?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Der Ablauf besteht aus einer kostenlosen Besichtigung, einem klaren Fixpreis-Angebot und der anschließenden Durchführung am vereinbarten Termin. Jeder Schritt ist transparent und wird im Vorfeld mit Ihnen abgestimmt.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Muss ich während der Entrümpelung anwesend sein?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Nein. Auf Wunsch übernehmen wir die Abwicklung mit Schlüsselübergabe, sodass Sie nicht persönlich vor Ort sein müssen. Diskretion und Verlässlichkeit sind dabei selbstverständlich.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie kurzfristig ist ein Termin möglich?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'In vielen Fällen können wir innerhalb weniger Tage in Linz tätig werden. Die konkrete Verfügbarkeit hängt vom Umfang ab, aber wir bemühen uns immer um eine schnelle Lösung.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Welche Kosten entstehen bei einer Messie Entrümpelung?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Die Preise richten sich nach Faktoren wie Raumgröße, Zugänglichkeit und gewünschtem Zeitrahmen. Nach der Besichtigung erhalten Sie ein transparentes Fixpreis-Angebot ohne versteckte Zusatzkosten.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie wird mit persönlichen Erinnerungsstücken umgegangen?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Besonders wichtige Gegenstände werden von uns gesichert und mit Ihnen abgestimmt. So stellen wir sicher, dass Erinnerungsstücke nicht verloren gehen und respektvoll behandelt werden.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Kann die Arbeit auch diskret erfolgen?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Ja, absolute Diskretion ist uns ein Anliegen. Wir treten unauffällig auf, arbeiten leise und respektvoll und sorgen dafür, dass Ihre Privatsphäre jederzeit geschützt bleibt.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Welche Regionen werden abgedeckt?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Wir sind vor allem in Linz und den angrenzenden Gemeinden tätig. Bei Bedarf prüfen wir auch Einsätze in weiteren Teilen von Oberösterreich – sprechen Sie uns einfach an.',
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

// app/leistungen/sperrmuellabholung-linz/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const PLUM = '#4A235A';
const CORAL = '#FF6F61';
const MINT  = '#A8E6CF';
const SAND  = '#F5E6CC';
const TEAL  = '#006D77';

export const metadata = {
  title: 'Sperrmüllabholung in Linz – flexibel & unkompliziert | messielinz.at',
  description:
    'Sperrmüllabholung in Linz: schnell organisiert, verlässlich umgesetzt und mit klarer Abwicklung. Jetzt direkt per WhatsApp anfragen.',
};

export default function Page() {
  return (
    <main id="main">
      {/* SECTION 1: HERO */}
      <section
        className="relative"
        aria-label="Sperrmüllabholung in Linz"
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
                Linz & Umgebung • kurzfristige Abholung
              </span>

              <h1
                className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: PLUM }}
              >
                Sperrmüllabholung in Linz&nbsp;–{' '}
                <span style={{ color: CORAL }}>flexibel</span> & unkompliziert.
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
                Wenn große oder sperrige Gegenstände rasch wegmüssen, zählt eine verlässliche
                Organisation, klare Absprachen und ein Team, das pünktlich erscheint und zügig
                arbeitet; genau das bieten wir, damit Sie ohne Umwege wieder freien Platz haben —
                mit einem Ablauf, der verständlich erklärt wird und sich nahtlos in Ihren Kalender
                einfügt.
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2 text-sm md:grid-cols-3" style={{ color: PLUM }}>
                {[
                  'Schnelle Termine',
                  'Fixe Abholung nach Vereinbarung',
                  'Diskret & verlässlich',
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
                {/* WhatsApp-only CTA */}
                <Link
                  href="https://wa.me/436766135140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
                  style={{ background: '#25D366', color: 'white' }}
                >
                  Über WhatsApp anfragen
                </Link>

                {/* Optional: Direktnummer als Zweit-CTA */}
                <a
                  href="https://wa.me/436766135140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border transition"
                  style={{ borderColor: MINT, color: TEAL }}
                >
                  +43&nbsp;676&nbsp;6135140
                </a>
              </div>
            </div>

            {/* Visual (platzhalter – ersetze durch eigenes Bild) */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.85))',
                  border: `1px solid ${MINT}`,
                }}
              >
                {/* Видео вместо Image: автоплей, луп, без звука */}
                    <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                    >
                    <source src="/videos/Sperrmüllabholung.mp4" type="video/mp4" />
                    {/* Фолбэк для очень старых браузеров */}
                    Dein Browser unterstützt das Video-Tag nicht.
                    </video>
              </div>

              {/* kleiner Vertrauen-Badge */}
              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-3 text-sm shadow-md"
                style={{ background: 'white', border: `1px solid ${SAND}`, color: PLUM }}
              >
                <strong style={{ color: TEAL }}>Fix vereinbart</strong> • pünktliche Abholung
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 2: Was wir abholen & wie der Ablauf aussieht */}
      <section
        className="relative"
        aria-label="Was wir abholen und wie der Ablauf aussieht"
        style={{
          background: 'white',
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: PLUM }}>
              Was wir abholen &amp; wie der Ablauf aussieht
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Bei der <strong>Sperrmüllabholung in Linz</strong> geht es vor allem darum, sperrige
              Gegenstände unkompliziert und verlässlich aus dem Wohnraum zu schaffen. Viele unserer
              Kund:innen möchten Möbel oder alte Elektrogeräte schnell loswerden und suchen dabei
              nach einem Partner, der pünktlich kommt, sauber arbeitet und klar kommuniziert. Genau
              so verstehen wir unseren Service – als einfache Lösung, die ohne Umwege zu einem
              freien Zuhause führt.
            </p>
          </div>

          {/* Grid: Was wir abholen */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {[
              {
                title: 'Möbelstücke jeder Art',
                text: 'Von Schränken und Sofas bis hin zu Tischen oder Regalen – große Möbel nehmen viel Platz ein und werden von uns zuverlässig abgeholt.',
              },
              {
                title: 'Elektrogeräte & Haushaltsgegenstände',
                text: 'Ob Kühlschrank, Waschmaschine oder kleinere Geräte – sperrige Technik transportieren wir rasch und sicher aus der Wohnung.',
              },
              {
                title: 'Teppiche & Bodenbeläge',
                text: 'Auch sperrige Teppiche oder ausgediente Bodenbeläge gehören zu den Dingen, die viele selbst nicht transportieren können – wir übernehmen das für Sie.',
              },
              {
                title: 'Matratzen & Betten',
                text: 'Große Matratzen oder ganze Bettgestelle sind oft unhandlich. Mit Erfahrung und den passenden Hilfsmitteln schaffen wir diese Stücke problemlos weg.',
              },
              {
                title: 'Kisten & gemischte Gegenstände',
                text: 'Oft sammeln sich Kisten, Kartons oder bunt gemischte Dinge an, die einfach nur Platz wegnehmen – auch hier kümmern wir uns um die schnelle Abholung.',
              },
              {
                title: 'Weitere sperrige Objekte',
                text: 'Ganz gleich, ob Gartenmöbel, Sportgeräte oder einzelne sperrige Stücke – wir prüfen im Vorfeld alles und finden eine Lösung.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Ablauf kurz erklärt */}
          <div className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
            <p className="mb-6">
              Der Ablauf ist bewusst einfach gehalten: Nach Ihrer Anfrage über WhatsApp vereinbaren wir
              gemeinsam einen Termin, an dem unsere Mitarbeiter pünktlich erscheinen und die Abholung
              zügig durchführen. Alles, was Sie tun müssen, ist uns kurz mitzuteilen, welche Gegenstände
              abgeholt werden sollen – den Rest übernehmen wir.
            </p>
            <p>
              Damit haben Sie die Sicherheit, dass die <strong>Sperrmüllabholung in Linz</strong>
              schnell erledigt wird, ohne dass Sie selbst organisatorischen Aufwand betreiben müssen.
              Ein Anruf oder eine kurze Nachricht genügt, und schon können Sie wieder über mehr Platz
              in Ihrem Zuhause verfügen.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="https://wa.me/436766135140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
              style={{ background: '#25D366', color: 'white' }}
            >
              Jetzt per WhatsApp anfragen
            </Link>
          </div>
        </div>
      </section>
            {/* SECTION 3: Preise & Termine */}
      <section
        className="relative"
        aria-label="Preise und Termine Sperrmüllabholung Linz"
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
              Preise &amp; Termine – transparent erklärt
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Wer eine <strong>Sperrmüllabholung in Linz</strong> beauftragt, möchte von Beginn an
              wissen, welche Kosten entstehen und wie schnell ein Termin möglich ist. Deshalb legen
              wir großen Wert auf eine klare Kommunikation und faire Konditionen, die sich nach dem
              tatsächlichen Aufwand richten und für Sie nachvollziehbar bleiben.
            </p>
          </div>

          {/* Grid: Faktoren */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Kostenlose Einschätzung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Bevor wir starten, klären wir gemeinsam, welche Gegenstände abgeholt werden sollen.
                So können wir Ihnen ein transparentes Angebot geben, das Sie in Ruhe prüfen können.
              </p>
            </div>
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Faire Fixpreise
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                Nach der Einschätzung erhalten Sie ein verbindliches Angebot mit einem Fixpreis.
                Damit haben Sie die Sicherheit, dass es keine versteckten Zusatzkosten gibt und Sie
                zuverlässig planen können.
              </p>
            </div>
            <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: SAND, background: 'white' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PLUM }}>
                Flexible Terminvergabe
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: PLUM }}>
                In vielen Fällen können wir kurzfristig Termine anbieten, oft schon innerhalb weniger
                Tage. Gemeinsam finden wir den Zeitpunkt, der am besten in Ihren Alltag passt.
              </p>
            </div>
          </div>

          {/* SEO-Textblock */}
          <div className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
            <p className="mb-6">
              Gerade bei sperrigen Möbeln oder schweren Elektrogeräten zählt eine klare Planung. Mit
              unserem Service wissen Sie schon vor der Abholung, welche Kosten entstehen und wann der
              Termin stattfindet. Auf diese Weise wird die <strong>Sperrmüllabholung in Linz</strong>
              zu einem kalkulierbaren Schritt, der weder Stress noch Unsicherheiten mit sich bringt.
            </p>
            <p>
              Sie müssen keine komplizierten Abläufe organisieren – ein kurzer Austausch über WhatsApp
              genügt, und schon erhalten Sie ein faires Angebot sowie einen verbindlichen Termin. Damit
              schaffen wir Transparenz und Verlässlichkeit, die gerade bei kurzfristigen Anliegen
              besonders wichtig sind.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="https://wa.me/436766135140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
              style={{ background: '#25D366', color: 'white' }}
            >
              Jetzt Preis & Termin über WhatsApp klären
            </Link>
          </div>
        </div>
      </section>
            {/* SECTION 4: SEO Text */}
      <section
        className="relative"
        aria-label="SEO Text Sperrmüllabholung Linz"
        style={{
          background: 'white',
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: PLUM }}>
            Sperrmüllabholung in Linz – verlässlich & persönlich
          </h2>
          <div className="text-base md:text-lg leading-relaxed space-y-6" style={{ color: PLUM }}>
            <p>
              Wer in Linz größere Möbelstücke, alte Elektrogeräte oder unhandliche Gegenstände loswerden
              möchte, steht oft vor einer Herausforderung. Der Transport ist kompliziert, das Schleppen
              kräftezehrend, und häufig fehlt ein Fahrzeug, um alles selbst wegzubringen. Genau hier
              setzt unsere <strong>Sperrmüllabholung in Linz</strong> an: Wir bieten eine Lösung, die
              auf Verlässlichkeit, klare Abläufe und einen respektvollen Umgang mit jeder Situation
              ausgelegt ist.
            </p>
            <p>
              Viele Kund:innen schätzen an unserem Service, dass er nicht nur praktisch ist, sondern
              auch unkompliziert organisiert wird. Nach einer kurzen Nachricht über WhatsApp erhalten
              Sie alle Informationen, die Sie brauchen, und wir vereinbaren gemeinsam einen Termin.
              Dadurch wissen Sie bereits im Vorfeld, wann die Abholung stattfindet, wie lange sie
              dauert und welche Schritte erforderlich sind. Dieses Maß an Transparenz gibt Ihnen die
              Sicherheit, dass alles planbar bleibt.
            </p>
            <p>
              Ein weiterer Vorteil ist die persönliche Betreuung: Wir sehen jede Anfrage nicht als
              standardisierte Abholung, sondern als individuelles Projekt. Ob einzelne Stücke oder eine
              größere Menge – wir nehmen uns Zeit, die Situation genau zu verstehen, und bieten Ihnen
              eine Lösung, die zu Ihren Bedürfnissen passt. Damit wird die <strong>Sperrmüllabholung in Linz</strong>
              zu einem einfachen Schritt, der Ihnen den Alltag erleichtert und Raum für Neues schafft.
            </p>
            <p>
              Unser Anspruch ist es, dass Sie sich nicht mit mühsamen Details befassen müssen. Sie
              schicken uns eine kurze Nachricht, und wir kümmern uns um den Rest – pünktlich,
              zuverlässig und mit dem Blick für das Wesentliche. So entsteht ein Service, der nicht
              nur praktisch ist, sondern Ihnen auch das gute Gefühl gibt, einen verlässlichen Partner
              an Ihrer Seite zu haben.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="https://wa.me/436766135140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
              style={{ background: '#25D366', color: 'white' }}
            >
              Jetzt direkt über WhatsApp anfragen
            </Link>
          </div>
        </div>
      </section>
            {/* SECTION 5: FAQ Sperrmüllabholung */}
      <section
        className="relative"
        aria-label="FAQ Sperrmüllabholung Linz"
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
              Häufige Fragen zur Sperrmüllabholung in Linz
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Viele Kund:innen möchten schon vorab wissen, wie der Ablauf funktioniert, welche
              Gegenstände abgeholt werden können und wie flexibel die Terminvergabe ist. Hier
              beantworten wir die wichtigsten Fragen klar und verständlich.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            {[
              {
                q: 'Welche Gegenstände können abgeholt werden?',
                a: 'Wir holen Möbel, Elektrogeräte, Matratzen, Teppiche, Kisten und viele weitere sperrige Objekte ab. Falls Sie unsicher sind, genügt eine kurze Nachricht mit Foto über WhatsApp.',
              },
              {
                q: 'Wie läuft die Terminvereinbarung ab?',
                a: 'Sie schreiben uns über WhatsApp, wir klären die Details und schlagen Ihnen den nächstmöglichen Termin vor. Die Abholung erfolgt pünktlich und verlässlich am vereinbarten Tag.',
              },
              {
                q: 'Wie schnell kann ein Termin stattfinden?',
                a: 'In vielen Fällen sind kurzfristige Termine innerhalb weniger Tage möglich. Gerade bei dringenden Anliegen bemühen wir uns, flexibel und schnell eine Lösung zu finden.',
              },
              {
                q: 'Welche Kosten entstehen?',
                a: 'Die Preise hängen vom Umfang ab – also davon, wie viele und welche Gegenstände transportiert werden. Nach Ihrer Anfrage erhalten Sie ein transparentes Fixpreis-Angebot ohne versteckte Zusatzkosten.',
              },
              {
                q: 'Muss ich persönlich vor Ort sein?',
                a: 'Nein, wenn Sie möchten, übernehmen wir die Abholung auch nach vorheriger Schlüsselübergabe. Dadurch können Sie entspannt Ihren Alltag fortsetzen, während wir den Auftrag diskret erledigen.',
              },
              {
                q: 'Wie läuft die Abholung am Termin ab?',
                a: 'Unser Team erscheint pünktlich, bringt die nötige Erfahrung mit und arbeitet zügig, damit die Abholung schnell abgeschlossen ist. Sie erhalten den Raum danach sofort wieder frei nutzbar.',
              },
              {
                q: 'Welche Regionen werden abgedeckt?',
                a: 'Wir sind hauptsächlich in Linz und den umliegenden Gemeinden tätig. Auf Anfrage prüfen wir auch Einsätze in weiteren Teilen von Oberösterreich.',
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
                  name: 'Welche Gegenstände können abgeholt werden?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Wir holen Möbel, Elektrogeräte, Matratzen, Teppiche, Kisten und viele weitere sperrige Objekte ab. Falls Sie unsicher sind, genügt eine kurze Nachricht mit Foto über WhatsApp.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie läuft die Terminvereinbarung ab?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Sie schreiben uns über WhatsApp, wir klären die Details und schlagen Ihnen den nächstmöglichen Termin vor. Die Abholung erfolgt pünktlich und verlässlich am vereinbarten Tag.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie schnell kann ein Termin stattfinden?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'In vielen Fällen sind kurzfristige Termine innerhalb weniger Tage möglich. Gerade bei dringenden Anliegen bemühen wir uns, flexibel und schnell eine Lösung zu finden.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Welche Kosten entstehen?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Die Preise hängen vom Umfang ab – also davon, wie viele und welche Gegenstände transportiert werden. Nach Ihrer Anfrage erhalten Sie ein transparentes Fixpreis-Angebot ohne versteckte Zusatzkosten.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Muss ich persönlich vor Ort sein?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Nein, wenn Sie möchten, übernehmen wir die Abholung auch nach vorheriger Schlüsselübergabe. Dadurch können Sie entspannt Ihren Alltag fortsetzen, während wir den Auftrag diskret erledigen.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie läuft die Abholung am Termin ab?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Unser Team erscheint pünktlich, bringt die nötige Erfahrung mit und arbeitet zügig, damit die Abholung schnell abgeschlossen ist. Sie erhalten den Raum danach sofort wieder frei nutzbar.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Welche Regionen werden abgedeckt?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Wir sind hauptsächlich in Linz und den umliegenden Gemeinden tätig. Auf Anfrage prüfen wir auch Einsätze in weiteren Teilen von Oberösterreich.',
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

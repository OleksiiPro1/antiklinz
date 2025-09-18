import Link from 'next/link';
import Leistungen from '../components/Leistungen';

const PLUM = '#4A235A';
const CORAL = '#FF6F61';
const MINT  = '#A8E6CF';
const SAND  = '#F5E6CC';
const TEAL  = '#006D77';

export const metadata = {
  title: 'Leistungen in Linz – Messie Hilfe & Räumungen | messielinz.at',
  description:
    'Messie Hilfe, Räumungen und Wohnungsauflösungen in Linz & Umgebung – diskret, planbar und mit Fixpreis. Kostenlose Besichtigung und termingerechte Übergabe.',
};

export default function LeistungenPage() {
  return (
    <main id="main">
      {/* HERO */}
      <section
        className="relative"
        aria-label="Leistungen in Linz"
        style={{
          backgroundImage: `
            radial-gradient(90rem 40rem at 10% -20%, ${MINT}33, transparent),
            radial-gradient(80rem 50rem at 110% 60%, ${CORAL}22, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-14 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm"
              style={{ background: `${MINT}55`, color: TEAL }}
            >
              Linz & Umgebung • kostenlose Besichtigung
            </span>

            <h1
              className="mt-4 text-3xl md:text-5xl font-semibold leading-tight"
              style={{ color: PLUM }}
            >
              Leistungen in Linz – Messie Hilfe &amp; Räumungen
            </h1>

            <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
              Diskret, respektvoll und gut planbar: Wir unterstützen Sie bei Messie-Fällen,
              Wohnungsauflösungen sowie Räumungen von Keller, Dachboden oder Haus. 
              Sie erhalten vor Start einen transparenten Fixpreis und eine termingerechte Übergabe.
              Keine langen Wege, keine Unklarheiten – einfach eine verlässliche Umsetzung in Ihrem Tempo.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium shadow-sm transition hover:opacity-95"
                style={{ background: CORAL, color: 'white' }}
              >
                Kostenlos anfragen
              </Link>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border transition"
                style={{ borderColor: MINT, color: TEAL }}
              >
                Mehr über uns
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="mx-auto w-full max-w-[1150px] px-4 pb-16 md:pb-20">
        {/* тонкая разделительная линия в нашей палитре */}
        <div className="my-8 h-px w-full" style={{ background: SAND }} />

        {/* Сетка услуг из твоего компонента */}
        <Leistungen />

        {/* дополнительный SEO-текст (нейтрально, без запрещённых слов) */}
        <div className="mt-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: PLUM }}>
          <p className="mb-6">
            Jede Räumung hat ihre eigene Geschichte. Damit Sie sich gut aufgehoben fühlen,
            arbeiten wir ruhig und strukturiert, geben klare Zeitfenster und sind 
            auf Wunsch auch mit Schlüsselübernahme für Sie da. Unser Ziel: eine saubere Übergabe
            ohne Stress – und das gute Gefühl, dass alles verlässlich erledigt wurde.
          </p>
          <p>
            Ob Messie Hilfe, Wohnungsauflösung oder das Räumen einzelner Bereiche wie Keller
            und Dachboden: In Linz und Umgebung sind wir schnell verfügbar, stimmen uns eng mit Ihnen ab
            und halten die vereinbarten Termine ein. So bleibt der Prozess übersichtlich und Sie
            behalten jederzeit die Kontrolle über alle Schritte.
          </p>
        </div>
      </section>

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Startseite',
                item: 'https://messielinz.at/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Leistungen',
                item: 'https://messielinz.at/leistungen',
              },
            ],
          }),
        }}
      />
    </main>
  );
}

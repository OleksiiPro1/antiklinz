import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Verkauf von antiken Münzen in Linz | AntikLinz",
  description:
    "AntikLinz – Ihr Ansprechpartner für den Verkauf von antiken Münzen in Linz. Kostenlose Bewertung, transparente Konditionen und faire Angebote für Sammler- und historische Münzen.",
  keywords: [
    "Verkauf antike Münzen Linz",
    "Münzen verkaufen Linz",
    "Antike Münzen Ankauf Linz",
    "Sammlermünzen Linz",
    "AntikLinz Münzen",
  ],
  openGraph: {
    title: "Verkauf von antiken Münzen in Linz | AntikLinz",
    description:
      "Verkauf von antiken Münzen in Linz – AntikLinz bietet kostenlose Beratung, faire Bewertung und direkte Auszahlung für Münzsammlungen und Einzelstücke.",
    url: "https://antiklinz.at/verkauf-antike-muenzen-linz",
    siteName: "AntikLinz",
    locale: "de_AT",
    type: "website",
  },
};

export default function MuenzenVerkaufLinz() {
  return (
    <main id="main" className="min-h-screen" style={{ background: "#F7F3ED", color: "#2B2B2B" }}>
      {/* SECTION 1: HERO */}
      <section
        aria-label="Verkauf von antiken Münzen in Linz"
        className="relative"
        style={{
          backgroundImage: `
            radial-gradient(70rem 35rem at 0% 0%, #C2A14D22, transparent),
            radial-gradient(70rem 35rem at 100% 100%, #2E4B3C11, transparent)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Text */}
            <div>
              <h1
                className="text-3xl md:text-5xl font-extrabold leading-tight"
                style={{ color: "#7B2E2E" }}
              >
                Verkauf von antiken Münzen in Linz
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed">
                AntikLinz ist Ihre erste Adresse, wenn Sie{" "}
                <strong>antike Münzen in Linz verkaufen</strong> möchten. Wir bewerten
                historische Münzen, Sammlerstücke und seltene Einzelstücke mit Fachkenntnis
                und langjähriger Erfahrung. Sie erhalten ein faires, transparentes Angebot
                und auf Wunsch eine sofortige Auszahlung.
              </p>

              <ul className="mt-5 grid gap-2 text-sm md:grid-cols-2">
                {[
                  "Kostenlose Bewertung vor Ort",
                  "Faire Angebote für Einzelstücke & Sammlungen",
                  "Sofortige Auszahlung möglich",
                  "Diskrete & seriöse Abwicklung in Linz",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: "#2E4B3C" }}
                      aria-hidden
                    />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:info@antiklinz.at"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                  style={{ background: "#7B2E2E", color: "#fff" }}
                >
                  Kostenlose Bewertung anfragen
                </a>
                <a
                  href="tel:+436767202623"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border transition"
                  style={{ borderColor: "#C2A14D", color: "#2B2B2B" }}
                >
                  +43 676 720 26 23 anrufen
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <Image
                  src="/images/antiklinz-muenzen.webp"
                  alt="Antike Münzen in Linz – historische Sammlerstücke"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 540px, 100vw"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-2 text-sm shadow-md"
                style={{ background: "#fff", border: "1px solid #C2A14D", color: "#7B2E2E" }}
              >
                Historische Münzen • Sammlerstücke • Raritäten
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 2: Welche Münzen wir bewerten & verkaufen */}
      <section
        aria-label="Welche Münzen wir bewerten und beim Verkauf berücksichtigen"
        className="relative"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Bild links */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[28px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.85))",
                  filter: "blur(2px)",
                }}
              />
              <div
                className="relative overflow-hidden rounded-[24px] shadow-lg"
                style={{
                  border: "1px solid #C2A14D",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,.10), 0 8px 20px rgba(0,0,0,.05)",
                }}
              >
                <Image
                  src="/images/antiklinz-muenzen2.webp"
                  alt="Sammlung antiker Münzen in Linz"
                  width={600}
                  height={450}
                  className="block h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Text rechts */}
            <div
              className="max-w-2xl text-base md:text-lg leading-relaxed space-y-6"
              style={{ color: "#2B2B2B" }}
            >
              <h2
                className="text-2xl md:text-3xl font-extrabold"
                style={{ color: "#7B2E2E" }}
              >
                Welche Münzen wir beim Verkauf berücksichtigen
              </h2>

              <p>
                Der <strong>Verkauf von antiken Münzen in Linz</strong> umfasst eine große
                Vielfalt an Epochen und Prägungen. Bei AntikLinz prüfen wir nicht nur den
                Materialwert, sondern auch die geschichtliche Bedeutung, die Seltenheit und
                den Sammlerwert Ihrer Münzen. So entsteht eine fundierte Bewertung, die Ihnen
                Sicherheit und Transparenz bietet.
              </p>

              <p>
                Besonders gefragt sind antike Münzen aus dem Römischen Reich, dem Mittelalter
                und der Neuzeit. Auch Sammlermünzen aus dem 19. und 20. Jahrhundert, seltene
                Gedenkprägungen und limitierte Serien sind Teil unseres Fachgebiets. Wer den{" "}
                <strong>Verkauf von antiken Münzen in Linz</strong> plant, profitiert von
                unserer langjährigen Erfahrung und einer individuellen Einschätzung.
              </p>

              <p>
                Unser Service richtet sich sowohl an Privatpersonen als auch an Erbengemeinschaften,
                die komplette Münzsammlungen oder wertvolle Einzelstücke veräußern möchten.
                Der <strong>Verkauf von antiken Münzen in Linz</strong> erfolgt stets seriös,
                nachvollziehbar und mit sofortiger Auszahlungsoption.
              </p>

              <ul className="grid gap-2 text-sm md:text-base">
                {[
                  "Römische & griechische Münzen",
                  "Mittelalterliche Prägungen",
                  "Gedenkmünzen & Sammler-Editionen",
                  "Gold- und Silbermünzen",
                  "Komplette Sammlungen & Einzelnachlässe",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: "#2E4B3C" }}
                      aria-hidden
                    />
                    {t}
                  </li>
                ))}
              </ul>

              <p>
                Wenn Sie sich für den <strong>Verkauf von antiken Münzen in Linz</strong>{" "}
                interessieren, kontaktieren Sie uns für eine kostenlose Bewertung. Wir nehmen
                uns Zeit, jedes Stück individuell zu betrachten und ein faires Angebot zu
                erstellen – zuverlässig und kompetent.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 3: Ablauf des Verkaufsprozesses */}
      <section
        aria-label="Ablauf des Verkaufsprozesses antiker Münzen in Linz"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 10% 0%, #2E4B3C11, transparent), radial-gradient(60rem 30rem at 90% 100%, #C2A14D22, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Ablauf des Verkaufsprozesses antiker Münzen in Linz
          </h2>

          <div
            className="space-y-6 text-base md:text-lg leading-relaxed"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Der <strong>Verkauf von antiken Münzen in Linz</strong> soll für Sie so einfach
              und transparent wie möglich ablaufen. Deshalb haben wir einen klaren Prozess
              entwickelt, der vom ersten Kontakt bis zur Auszahlung alle Schritte umfasst.
              So behalten Sie jederzeit den Überblick und können sicher sein, dass Ihre
              Münzen in seriöse Hände gelangen.
            </p>

            <ol className="space-y-6">
              <li
                className="rounded-2xl p-5 shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <strong style={{ color: "#7B2E2E" }}>1) Kontaktaufnahme & erste Einschätzung</strong>
                <p className="mt-2 text-sm md:text-base">
                  Sie erreichen uns telefonisch oder per E-Mail. Schon mit einer kurzen Beschreibung
                  oder Fotos Ihrer Münzen können wir eine erste Einschätzung abgeben. So erfahren
                  Sie schnell, wie der <strong>Verkauf von antiken Münzen in Linz</strong> für Sie
                  ablaufen könnte.
                </p>
              </li>

              <li
                className="rounded-2xl p-5 shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <strong style={{ color: "#7B2E2E" }}>2) Kostenlose Begutachtung vor Ort</strong>
                <p className="mt-2 text-sm md:text-base">
                  Bei einem Termin in Linz oder Umgebung sehen wir uns Ihre Münzen persönlich an.
                  Wir prüfen Material, Prägung, Erhaltungsgrad und Seltenheit. Diese Details sind
                  entscheidend für eine realistische Bewertung und ein faires Angebot.
                </p>
              </li>

              <li
                className="rounded-2xl p-5 shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <strong style={{ color: "#7B2E2E" }}>3) Faires Angebot mit Fixpreis</strong>
                <p className="mt-2 text-sm md:text-base">
                  Nach der Begutachtung erstellen wir ein transparentes Angebot. Sie erfahren
                  sofort, welchen Betrag Sie beim <strong>Verkauf von antiken Münzen in Linz</strong>{" "}
                  erzielen können. Alle Details werden klar besprochen – ohne versteckte Bedingungen.
                </p>
              </li>

              <li
                className="rounded-2xl p-5 shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <strong style={{ color: "#7B2E2E" }}>4) Direkte Auszahlung & Abschluss</strong>
                <p className="mt-2 text-sm md:text-base">
                  Sobald Sie unser Angebot annehmen, erfolgt die Auszahlung sofort. Damit ist
                  der <strong>Verkauf von antiken Münzen in Linz</strong> für Sie abgeschlossen –
                  zuverlässig, seriös und unkompliziert.
                </p>
              </li>
            </ol>

            <p>
              Mit diesem strukturierten Prozess stellen wir sicher, dass der{" "}
              <strong>Verkauf von antiken Münzen in Linz</strong> für Sie angenehm und
              nachvollziehbar verläuft. Von der ersten Anfrage bis zur Auszahlung übernehmen
              wir alle Schritte, sodass Sie sich entspannt zurücklehnen können.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 4: Vorteile beim Verkauf */}
      <section
        aria-label="Ihre Vorteile beim Verkauf von antiken Münzen in Linz"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 0% 0%, #C2A14D22, transparent), radial-gradient(60rem 30rem at 100% 100%, #2E4B3C11, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Ihre Vorteile beim Verkauf von antiken Münzen in Linz
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl p-6 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>Fachgerechte Bewertung</h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Jede Münze wird einzeln geprüft: historische Einordnung, Material, Erhaltungsgrad und Seltenheit.
                Auf dieser Basis entsteht ein Angebot, das den realen Markt widerspiegelt.
              </p>
            </div>

            <div className="rounded-3xl p-6 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>Transparente Konditionen</h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Klare Schritte vom Erstgespräch über die kostenlose Begutachtung bis zur direkten Auszahlung — ohne
                versteckte Bedingungen.
              </p>
            </div>

            <div className="rounded-3xl p-6 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>Diskrete & sichere Abwicklung</h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Seriosität, Termintreue und eine ruhige Übergabe sorgen dafür, dass der Verkauf entspannt und sicher verläuft.
              </p>
            </div>
          </div>

          {/* SEO-Absatz */}
          <div className="mt-12 mx-auto max-w-4xl text-sm md:text-base leading-relaxed space-y-5" style={{ color: "#2B2B2B" }}>
            <p>
              Viele Verkäufer wünschen sich einen Partner, der Erfahrung, Fachkenntnis und Marktverständnis vereint.
              Genau dafür steht AntikLinz: fundierte Einschätzungen, nachvollziehbare Angebote und zügige Entscheidungen.
            </p>
            <p>
              Neben dem Materialwert betrachten wir geschichtliche Bedeutung und Nachfrage bei Sammler:innen.
              Das macht den Abschluss fair und realistisch.
            </p>
            <p>
              Ob Einzelstück oder Sammlung — Sie wissen jederzeit, welche Schritte folgen und welche Werte zugrunde liegen.
            </p>
            <p>
              Setzen Sie auf Klarheit, Diskretion und faire Konditionen — so gelingt ein professioneller Abschluss.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 5: FAQ */}
      <section
        aria-label="FAQ zum Verkauf von antiken Münzen in Linz"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 12% 0%, #C2A14D22, transparent), radial-gradient(60rem 30rem at 88% 100%, #2E4B3C11, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-20">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Häufige Fragen zum Verkauf von antiken Münzen in Linz
          </h2>

          <div className="grid gap-4 md:gap-6">
            {[
              {
                q: "Welche Münzen kann ich bei AntikLinz anbieten?",
                a: "Römische, griechische, mittelalterliche Prägungen, Gedenkmünzen, Sammler-Editionen sowie Gold- und Silbermünzen. Einzelstücke und komplette Sammlungen sind willkommen."
              },
              {
                q: "Wie läuft der Prozess ab?",
                a: "Kontaktaufnahme, kostenlose Begutachtung in Linz, Angebot mit Fixpreis, direkte Auszahlung. Jeder Schritt ist vorab erklärt und gut planbar."
              },
              {
                q: "Gibt es eine sofortige Auszahlung?",
                a: "Ja. Auf Wunsch bar oder per Überweisung — schnell und unkompliziert."
              },
              {
                q: "Bewertet ihr auch große Sammlungen?",
                a: "Natürlich. Wir nehmen uns Zeit für Struktur, Vollständigkeit und Raritäten und erstellen ein stimmiges Gesamtangebot."
              },
              {
                q: "Warum AntikLinz?",
                a: "Erfahrung, Transparenz und diskrete Abwicklung. Wir verbinden Fachwissen mit verlässlicher Kommunikation."
              }
            ].map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border p-4 md:p-5 transition"
                style={{ borderColor: "#C2A14D", background: "#fff" }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                    {item.q}
                  </h3>
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45"
                    style={{ background: "#C2A14D55", color: "#2B2B2B" }}
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          {/* SEO-Absatz */}
          <div className="mt-12 mx-auto max-w-4xl text-sm md:text-base leading-relaxed space-y-5" style={{ color: "#2B2B2B" }}>
            <p>
              Diese Antworten geben einen schnellen Überblick über Ablauf, Bewertung und Auszahlung.
              So wissen Sie vorab, was Sie erwartet und welche Unterlagen hilfreich sind.
            </p>
            <p>
              Wichtig für viele ist die zügige Abwicklung: Nach der Begutachtung erhalten Sie ein
              klares Angebot und können direkt entscheiden.
            </p>
            <p>
              Für Sammlerinnen und Sammler gilt: Auch umfangreiche Bestände werden strukturiert
              erfasst und transparent bewertet.
            </p>
            <p>
              Wenn noch Fragen offen sind, melden Sie sich gern — wir helfen persönlich weiter.
            </p>
          </div>
        </div>
      </section>



           
            {/* SECTION 6: Kontakt & kostenlose Bewertung */}
      <section
        aria-label="Kontakt & kostenlose Bewertung für den Verkauf antiker Münzen in Linz"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 0% 0%, #C2A14D22, transparent), radial-gradient(60rem 30rem at 100% 100%, #2E4B3C11, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-20 text-center">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-6"
            style={{ color: "#7B2E2E" }}
          >
            Kontakt &amp; kostenlose Bewertung
          </h2>

          <p
            className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "#2B2B2B" }}
          >
            Wenn Sie den <strong>Verkauf von antiken Münzen in Linz</strong> planen, ist eine
            professionelle Einschätzung der beste erste Schritt. AntikLinz bietet Ihnen eine
            kostenlose und unverbindliche Bewertung Ihrer Münzen direkt vor Ort in Linz oder
            Umgebung. Dabei berücksichtigen wir historische Hintergründe, Seltenheit, Material
            und Sammlerwert – so entsteht ein Angebot, das auf Fachwissen und Transparenz beruht.
          </p>

          <p
            className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "#2B2B2B" }}
          >
            Ob Sie einzelne Münzen, seltene Prägungen oder ganze Sammlungen verkaufen möchten:
            Wir begleiten Sie Schritt für Schritt. Der <strong>Verkauf von antiken Münzen in Linz</strong>{" "}
            wird durch unsere Erfahrung im Münzhandel zuverlässig und nachvollziehbar gestaltet.
            So haben Sie die Gewissheit, dass Sie einen fairen Preis für Ihre Stücke erhalten.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@antiklinz.at?subject=Anfrage%20Münzenverkauf%20Linz"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
              style={{ background: "#7B2E2E", color: "#fff" }}
            >
              Kostenlose Bewertung anfragen
            </a>
            <a
              href="tel:+436767202623"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium border transition"
              style={{ borderColor: "#C2A14D", color: "#2B2B2B" }}
            >
              Jetzt anrufen: +43 676 720 26 23
            </a>
          </div>

          {/* SEO Absatz */}
          <div
            className="mt-12 max-w-4xl mx-auto text-sm md:text-base leading-relaxed space-y-5"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Der <strong>Verkauf von antiken Münzen in Linz</strong> ist Vertrauenssache.
              Deshalb legen wir bei AntikLinz besonderen Wert auf Diskretion, Klarheit und
              eine persönliche Beratung. Unsere Kund:innen schätzen die Möglichkeit, ohne
              lange Wartezeiten eine sofortige Auszahlung zu erhalten.
            </p>
            <p>
              Gerade bei Sammlungen oder historischen Einzelstücken ist es entscheidend,
              dass Sie sich auf eine faire Bewertung verlassen können. Mit AntikLinz wählen
              Sie einen Partner, der den Markt kennt, den Wert Ihrer Objekte einschätzen
              kann und Ihnen ein transparentes Angebot erstellt.
            </p>
            <p>
              Vereinbaren Sie noch heute Ihren Termin zur kostenlosen Begutachtung.
              AntikLinz steht Ihnen für den <strong>Verkauf von antiken Münzen in Linz</strong>{" "}
              jederzeit zur Verfügung – seriös, professionell und verlässlich.
            </p>
          </div>
        </div>
      </section>





    </main>
  );
}

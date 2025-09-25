import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ankauf Antiquitäten Silber & Schmuck in Linz | AntikLinz",
  description:
    "AntikLinz – Ihr Ansprechpartner für den Ankauf von Antiquitäten, Silber und Schmuck in Linz. Kostenlose Besichtigung, faire Bewertung, transparente Fixpreise.",
  keywords: [
    "Ankauf Antiquitäten Silber Linz",
    "Ankauf Schmuck Linz",
    "Silberbesteck verkaufen Linz",
    "Antiker Schmuck Ankauf Linz",
    "AntikLinz Silber Schmuck",
  ],
  openGraph: {
    title: "Ankauf Antiquitäten Silber & Schmuck in Linz | AntikLinz",
    description:
      "Seriöser Ankauf von Silber und Schmuck in Linz – AntikLinz. Faire Bewertung, kostenlose Besichtigung, schnelle Abwicklung.",
    url: "https://antiklinz.at/ankauf-antiquitaeten-silber-schmuck-linz",
    siteName: "AntikLinz",
    locale: "de_AT",
    type: "website",
  },
};

export default function SilberSchmuckLinz() {
  return (
    <main id="main" className="min-h-screen" style={{ background: "#F7F3ED", color: "#2B2B2B" }}>
      {/* SECTION 1: HERO */}
      <section
        aria-label="Ankauf Antiquitäten Silber & Schmuck in Linz"
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
                Ankauf Antiquitäten Silber &amp; Schmuck in Linz
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed">
                AntikLinz ist Ihr seriöser Ansprechpartner für den{" "}
                <strong>Ankauf von Silber und Schmuck in Linz</strong>. Ob antike Ringe,
                Halsketten, Armbänder, Silberbesteck oder kunstvolle Schalen – wir bewerten
                Ihre Stücke fachgerecht und bieten faire Konditionen.
              </p>

              <ul className="mt-5 grid gap-2 text-sm md:grid-cols-2">
                {[
                  "Kostenlose & unverbindliche Besichtigung",
                  "Faire Bewertung von Silber & Schmuck",
                  "Sofortige Barzahlung möglich",
                  "Diskret & termintreu in Linz",
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
                  Kostenlose Besichtigung anfragen
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
                  src="/images/antiklinz-silber-schmuck.webp"
                  alt="Antiker Schmuck und Silberbesteck in Linz"
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
                Schmuck • Silberbesteck • Antiquitäten
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 2: Welche Silber- und Schmuckstücke wir ankaufen */}
      <section
        aria-label="Welche Silber- und Schmuckstücke wir ankaufen"
        className="relative"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Welche Silber- und Schmuckstücke wir ankaufen
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Text links */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: "#2B2B2B" }}>
              <p>
                AntikLinz ist Ihr Ansprechpartner, wenn es um den{" "}
                <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong> geht. Besonders
                gefragt sind kunstvoll gearbeitete Ringe, Armbänder, Halsketten und Broschen mit
                historischen Fassungen oder besonderen Edelsteinen. Auch komplette Schmucksets
                bewerten wir sorgfältig und fair.
              </p>

              <p>
                Neben Schmuckstücken liegt unser Fokus auf <strong>Silberobjekten</strong>:
                Bestecke, Schalen, Leuchter, Dosen und dekorative Arbeiten aus verschiedenen Epochen.
                Originalität, Handwerkskunst und Erhaltungszustand spielen eine große Rolle für die
                Einschätzung und den Ankauf.
              </p>

              <p>
                Ob einzelne Stücke oder ganze Sammlungen: Mit AntikLinz erhalten Sie eine seriöse
                und transparente Abwicklung. Der <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong>{" "}
                wird individuell auf Ihre Objekte abgestimmt – respektvoll, schnell und mit klaren
                Konditionen.
              </p>
            </div>

            {/* Bild rechts */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <Image
                  src="/images/antiklinz-silber.webp"
                  alt="Silberbesteck und antiker Schmuck in Linz"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 540px, 100vw"
                />
              </div>
              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-2 text-sm shadow-md"
                style={{
                  background: "#fff",
                  border: "1px solid #C2A14D",
                  color: "#7B2E2E",
                }}
              >
                Silberbesteck • Schmuckstücke • Sammlungen
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 3: Ablauf des Ankaufs */}
      <section
        aria-label="Ablauf des Ankaufs von Silber und Schmuck"
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
            Ablauf des Ankaufs von Silber &amp; Schmuck in Linz
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: "#2B2B2B" }}>
            <p>
              Wer den <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong> plant, möchte
              einen transparenten und klaren Ablauf. Bei AntikLinz achten wir auf eine
              unkomplizierte Vorgehensweise, damit Sie vom ersten Kontakt bis zur Auszahlung jederzeit
              den Überblick behalten. So können Sie sicher sein, dass Ihre wertvollen Objekte in guten
              Händen sind.
            </p>

            <ol className="space-y-6">
              <li className="rounded-2xl p-5 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                <strong style={{ color: "#7B2E2E" }}>1) Erste Kontaktaufnahme</strong>
                <p className="mt-2 text-sm md:text-base">
                  Sie erreichen uns telefonisch oder per E-Mail. Schon mit einer kurzen Beschreibung
                  oder einem Foto Ihrer Silber- oder Schmuckstücke können wir eine erste Einschätzung
                  vornehmen und einen Termin vorschlagen.
                </p>
              </li>

              <li className="rounded-2xl p-5 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                <strong style={{ color: "#7B2E2E" }}>2) Kostenlose Besichtigung</strong>
                <p className="mt-2 text-sm md:text-base">
                  Bei einem Termin in Linz oder Umgebung begutachten wir Ihre Objekte vor Ort. Wir
                  prüfen dabei Alter, Design, Verarbeitung, Material und Nachfrage. So können wir den
                  Wert für den <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong> realistisch
                  einschätzen.
                </p>
              </li>

              <li className="rounded-2xl p-5 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                <strong style={{ color: "#7B2E2E" }}>3) Angebot mit Fixpreis</strong>
                <p className="mt-2 text-sm md:text-base">
                  Direkt nach der Besichtigung erhalten Sie ein transparentes Angebot. Alle Details
                  werden klar erläutert, sodass Sie sofort eine sichere Entscheidung treffen können.
                  Unser Ziel: faire Konditionen ohne Überraschungen.
                </p>
              </li>

              <li className="rounded-2xl p-5 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                <strong style={{ color: "#7B2E2E" }}>4) Abwicklung & Auszahlung</strong>
                <p className="mt-2 text-sm md:text-base">
                  Stimmen Sie unserem Angebot zu, erfolgt die Auszahlung auf Wunsch sofort. Der{" "}
                  <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong> wird damit direkt
                  abgeschlossen – zuverlässig, diskret und verbindlich.
                </p>
              </li>
            </ol>

            <p>
              Mit diesem Ablauf stellen wir sicher, dass der <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong>{" "}
              für Sie klar strukturiert, professionell und angenehm ist. Von der ersten Anfrage bis
              zur Auszahlung übernehmen wir alle Schritte, sodass Sie sich entspannt zurücklehnen
              können.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 4: Vorteile mit AntikLinz */}
      <section
        aria-label="Vorteile mit AntikLinz"
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
            Ihre Vorteile beim Ankauf Antiquitäten Silber &amp; Schmuck in Linz
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div
              className="rounded-3xl p-6 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Fachkundige Bewertung
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Unser Team besitzt langjährige Erfahrung im Handel mit Silber und Schmuck.
                Jedes Stück – ob Ring, Kette, Armband oder Silberbesteck – wird präzise
                geprüft, um Ihnen beim <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong>{" "}
                ein faires und realistisches Angebot zu unterbreiten.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Transparente Abläufe
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Vom ersten Kontakt über die kostenlose Besichtigung bis hin zur Auszahlung:
                Alle Schritte sind nachvollziehbar und ohne versteckte Bedingungen.
                Wer den <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong> in
                Betracht zieht, erhält bei uns klare Informationen und verbindliche Fixpreise.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Diskretion & Verlässlichkeit
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Gerade bei Schmuckstücken mit Erinnerungswert oder wertvollem Familiensilber
                ist Vertrauen entscheidend. Der <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong>{" "}
                erfolgt diskret, respektvoll und immer termintreu.
              </p>
            </div>
          </div>

          {/* SEO-Absatz */}
          <div
            className="mt-12 mx-auto max-w-4xl text-sm md:text-base leading-relaxed space-y-5"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Viele Menschen stehen vor der Frage, wie sie antike Schmuckstücke oder Silberobjekte
              am besten veräußern können. Der <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong>{" "}
              durch AntikLinz bietet hier eine sichere Lösung: fachliche Einschätzung, seriöse
              Angebote und sofortige Abwicklung. Dabei legen wir Wert auf Transparenz und Klarheit.
            </p>
            <p>
              Besonders geschätzt wird, dass wir uns Zeit nehmen, um jedes Stück sorgfältig
              zu betrachten. Ob filigrane Brosche, kunstvoll gearbeiteter Ring oder komplettes
              Silberbesteck – wir prüfen Stil, Verarbeitung und Besonderheiten. So wird der{" "}
              <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong> für Sie nachvollziehbar
              und fair gestaltet.
            </p>
            <p>
              AntikLinz verbindet Fachwissen mit Verlässlichkeit. Mit uns haben Sie einen Partner,
              der Ihre Objekte nicht nur bewertet, sondern auch deren Geschichte respektiert.
              Wer einen <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong> sucht,
              findet hier eine Kombination aus Erfahrung, Diskretion und professioneller Abwicklung.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 5: FAQ */}
      <section
        aria-label="Häufige Fragen zum Ankauf Antiquitäten Silber & Schmuck in Linz"
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
            Häufige Fragen zum Ankauf Antiquitäten Silber &amp; Schmuck in Linz
          </h2>

          <div className="grid gap-4 md:gap-6">
            {[
              {
                q: "Welche Arten von Silber kauft AntikLinz an?",
                a: "Wir interessieren uns für Silberbesteck, Schalen, Kerzenleuchter, Dosen und dekorative Objekte. Der Ankauf Antiquitäten Silber & Schmuck in Linz umfasst sowohl Einzelstücke als auch komplette Sammlungen."
              },
              {
                q: "Kauft ihr auch antiken Schmuck?",
                a: "Ja, wir bewerten Ringe, Halsketten, Broschen, Armbänder und komplette Schmucksets. Beim Ankauf Antiquitäten Silber & Schmuck in Linz legen wir Wert auf Originalität und handwerkliche Details."
              },
              {
                q: "Wie läuft der Ankauf ab?",
                a: "Nach der Kontaktaufnahme vereinbaren wir eine kostenlose Besichtigung in Linz oder Umgebung. Dort prüfen wir Ihre Objekte, erstellen ein transparentes Angebot und wickeln den Ankauf Antiquitäten Silber & Schmuck in Linz direkt vor Ort ab."
              },
              {
                q: "Erhalte ich eine sofortige Auszahlung?",
                a: "Ja, beim Ankauf Antiquitäten Silber & Schmuck in Linz ist eine sofortige Barzahlung möglich. Auf Wunsch erfolgt die Auszahlung auch per Überweisung."
              },
              {
                q: "Warum AntikLinz als Partner wählen?",
                a: "Weil wir Fachwissen, Erfahrung und Diskretion kombinieren. Der Ankauf Antiquitäten Silber & Schmuck in Linz erfolgt bei uns transparent, fair und mit Respekt gegenüber den Erinnerungsstücken."
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

          {/* SEO Absatz */}
          <div
            className="mt-12 mx-auto max-w-4xl text-sm md:text-base leading-relaxed space-y-5"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Wer den <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong> in Betracht zieht,
              hat oft viele Fragen. Deshalb haben wir die wichtigsten Punkte hier zusammengefasst:
              von der Art der Objekte über den Ablauf bis hin zur Auszahlung. Unser Ziel ist es,
              Ihnen Sicherheit und Klarheit zu geben.
            </p>
            <p>
              AntikLinz ist spezialisiert auf den <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong>.
              Wir bewerten sowohl einzelne Stücke als auch umfangreiche Sammlungen. Dabei legen wir
              Wert auf eine persönliche Beratung und eine faire Preisgestaltung, die sich am
              tatsächlichen Marktwert orientiert.
            </p>
            <p>
              Durch unsere Erfahrung im Bereich <strong>Silber und Schmuck</strong> garantieren wir,
              dass Sie für Ihre Objekte ein transparentes Angebot erhalten. Der
              <strong> Ankauf Antiquitäten Silber & Schmuck in Linz</strong> ist so gestaltet, dass
              Sie eine unkomplizierte und verlässliche Lösung haben – ganz ohne lange Wartezeiten.
            </p>
            <p>
              Vertrauen Sie auf AntikLinz, wenn es um den <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong>{" "}
              geht. Unsere Kund:innen schätzen besonders die Kombination aus Diskretion,
              Fachkompetenz und klaren Abläufen. Vereinbaren Sie jetzt Ihre kostenlose Besichtigung
              und profitieren Sie von einem seriösen und transparenten Prozess.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 6: Kontakt & Abschluss */}
      <section
        aria-label="Kontakt zum Ankauf Antiquitäten Silber & Schmuck in Linz"
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
            Jetzt Ankauf Antiquitäten Silber &amp; Schmuck in Linz anfragen
          </h2>

          <p
            className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "#2B2B2B" }}
          >
            Wenn Sie Silberbesteck, antiken Schmuck oder andere wertvolle Objekte verkaufen möchten,
            ist AntikLinz der richtige Partner. Unser Schwerpunkt liegt auf dem{" "}
            <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong> – fachgerecht, transparent
            und mit sofortiger Auszahlung. Ob Einzelstück oder ganze Sammlung: Wir garantieren Ihnen
            faire Angebote und eine verlässliche Abwicklung.
          </p>

          <p
            className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "#2B2B2B" }}
          >
            Nutzen Sie die Möglichkeit einer kostenlosen Besichtigung. Wir prüfen Ihre Schmuckstücke
            und Silberobjekte direkt vor Ort und erläutern Ihnen jedes Detail. Der{" "}
            <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong> wird so zu einem klaren,
            sicheren und angenehmen Prozess – mit dem guten Gefühl, Ihre Wertgegenstände in seriöse
            Hände zu geben.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@antiklinz.at?subject=Anfrage%20Silber%20und%20Schmuck"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
              style={{ background: "#7B2E2E", color: "#fff" }}
            >
              Per E-Mail anfragen
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
              Der <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong> ist Vertrauenssache.
              Mit AntikLinz entscheiden Sie sich für einen Partner, der Wert auf Seriosität, Diskretion
              und Klarheit legt. Unsere Kund:innen schätzen die Möglichkeit, ohne Umwege und ohne
              Unsicherheiten zu verkaufen.
            </p>
            <p>
              Egal, ob Sie ein einzelnes Schmuckstück veräußern oder eine komplette Sammlung
              abgeben möchten – wir nehmen uns Zeit für jedes Detail. Die Bewertung orientiert sich
              am tatsächlichen Marktwert, sodass Sie sicher sein können, einen fairen Preis zu erhalten.
            </p>
            <p>
              Vertrauen Sie auf unsere langjährige Erfahrung im Bereich{" "}
              <strong>Silber und antiker Schmuck</strong>. Vereinbaren Sie jetzt Ihren Termin zur
              kostenlosen Besichtigung und lassen Sie uns gemeinsam den Wert Ihrer Stücke ermitteln.
              AntikLinz steht für Qualität, Transparenz und eine persönliche Betreuung beim{" "}
              <strong>Ankauf Antiquitäten Silber & Schmuck in Linz</strong>.
            </p>
          </div>
        </div>
      </section>


          


    </main>
  );
}

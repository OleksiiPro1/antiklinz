export default function PorzellanVerkaufenLinz() {
  return (
    <main id="main" className="min-h-screen" style={{ background: "#F7F3ED", color: "#2B2B2B" }}>
      {/* SECTION 1: HERO */}
      <section
        aria-label="Porzellan verkaufen in Linz"
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
                Porzellan verkaufen in Linz – seriös & transparent
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed">
                AntikLinz ist Ihre vertrauensvolle Adresse, wenn Sie{" "}
                <strong>Porzellan verkaufen in Linz</strong> möchten. Ob Einzelstücke, komplette
                Service-Sets oder wertvolle Sammlungen – wir prüfen jedes Objekt sorgfältig,
                berücksichtigen Alter, Herkunft und Zustand und bieten Ihnen faire Konditionen.
              </p>

              <ul className="mt-5 grid gap-2 text-sm md:grid-cols-2">
                {[
                  "Kostenlose Begutachtung in Linz & Umgebung",
                  "Faire Angebote mit Fixpreis",
                  "Sofortige Auszahlung möglich",
                  "Diskrete & seriöse Abwicklung",
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
                  Kostenlose Begutachtung anfragen
                </a>
                <a
                  href="tel:+436767202623"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border transition"
                  style={{ borderColor: "#C2A14D", color: "#2B2B2B" }}
                >
                  +43 676 720 26 23 anrufen
                </a>
              </div>

              <p className="mt-4 text-xs opacity-80">
                Kontakt: info@antiklinz.at • +43 676 720 26 23
              </p>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/2.6] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <img
                  src="/images/porzellan-linz.webp"
                  alt="Antikes Porzellan in Linz – Teller und Vasen auf Holztisch"
                  className="object-cover h-full w-full"
                />
              </div>

              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-2 text-sm shadow-md"
                style={{ background: "#fff", border: "1px solid #C2A14D", color: "#7B2E2E" }}
              >
                Porzellanankauf • Sammlungen • Einzelstücke
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 2: Welche Porzellanarten wir ankaufen */}
      <section
        aria-label="Welche Porzellanarten wir ankaufen"
        className="relative"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Welche Porzellanarten wir ankaufen
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Bild links */}
            <div className="relative lg:order-first">
              <div
                className="relative mx-auto aspect-[4/2.6] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <img
                  src="/images/porzellan-arten.webp"
                  alt="Verschiedene antike Porzellanarten wie Teller, Figuren und Vasen"
                  className="object-cover h-full w-full"
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
                Teller • Vasen • Figuren • Service
              </div>
            </div>

            {/* Text rechts */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: "#2B2B2B" }}>
              <p>
                Beim <strong>Porzellan verkaufen in Linz</strong> sind es oft die kleinen Details,
                die den Unterschied ausmachen: feine Malereien, Signaturen, Herstellungsort oder
                seltene Serien. Wir nehmen uns Zeit, jedes Stück sorgfältig zu prüfen und
                fachgerecht zu bewerten.
              </p>
              <p>
                Besonders gefragt sind Teller, Schalen, Vasen und Figuren aus Manufakturen wie
                Meissen, Augarten oder Rosenthal. Aber auch weniger bekannte Marken können einen
                hohen Sammlerwert haben – je nach Alter, Qualität und Erhaltungszustand.
              </p>
              <p>
                Ganz gleich, ob es sich um Einzelstücke oder komplette Service-Sets handelt:
                Wir beraten Sie umfassend, machen ein transparentes Angebot und sorgen für eine
                seriöse Abwicklung. So wird der Verkauf für Sie unkompliziert und zuverlässig.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 3: Ablauf des Verkaufs */}
      <section
        aria-label="Ablauf des Porzellan-Verkaufs in Linz"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 10% 0%, #2E4B3C11, transparent), radial-gradient(60rem 30rem at 90% 100%, #C2A14D22, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-8 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Ablauf: Porzellan verkaufen in Linz
          </h2>

          {/* Einleitender SEO-Absatz */}
          <div className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed mb-8" style={{ color: "#2B2B2B" }}>
            <p>
              Damit der Verkauf angenehm und klar strukturiert abläuft, arbeiten wir mit einem
              einfachen, nachvollziehbaren Prozess: von der ersten Nachricht bis zur Auszahlung.
              So behalten Sie jederzeit den Überblick und wissen, welche Schritte als Nächstes folgen.
            </p>
          </div>

          {/* Schritt-für-Schritt */}
          <ol className="space-y-5">
            <li
              className="rounded-2xl p-5 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <strong style={{ color: "#7B2E2E" }}>1) Kontakt & Kurzbeschreibung</strong>
              <p className="mt-2 text-sm md:text-base" style={{ color: "#2B2B2B" }}>
                Schreiben Sie uns oder rufen Sie an. Ein paar Angaben zu Marke/Manufaktur,
                ungefährem Alter und Zustand reichen für eine erste Einschätzung. Fotos helfen,
                Besonderheiten wie Malerei, Relief oder Signaturen zu erkennen.
              </p>
            </li>

            <li
              className="rounded-2xl p-5 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <strong style={{ color: "#7B2E2E" }}>2) Kostenlose Begutachtung vor Ort</strong>
              <p className="mt-2 text-sm md:text-base" style={{ color: "#2B2B2B" }}>
                Wir sehen uns die Stücke in Linz oder Umgebung persönlich an. Beurteilt werden
                u. a. Qualität der Glasur, Dekor, Formensprache, Vollständigkeit und Erhaltungsgrad.
                Auf Wunsch prüfen wir auch komplette Service-Sets auf Zusammengehörigkeit.
              </p>
            </li>

            <li
              className="rounded-2xl p-5 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <strong style={{ color: "#7B2E2E" }}>3) Angebot mit Fixpreis</strong>
              <p className="mt-2 text-sm md:text-base" style={{ color: "#2B2B2B" }}>
                Im Anschluss erhalten Sie ein klares Angebot. Alle Faktoren der Bewertung
                werden transparent erläutert, damit Sie sicher entscheiden können.
              </p>
            </li>

            <li
              className="rounded-2xl p-5 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <strong style={{ color: "#7B2E2E" }}>4) Abschluss & Auszahlung</strong>
              <p className="mt-2 text-sm md:text-base" style={{ color: "#2B2B2B" }}>
                Bei Zustimmung erfolgt die Auszahlung umgehend. Übergabe und Beleg werden
                direkt vor Ort erstellt – schnell, strukturiert und verlässlich.
              </p>
            </li>
          </ol>

          {/* Zusatztexte für SEO */}
          <div
            className="mt-10 mx-auto max-w-3xl text-sm md:text-base leading-relaxed space-y-5"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Für viele Verkäufer ist wichtig, dass neben bekannten Manufakturen auch weniger
              verbreitete Marken berücksichtigt werden. Wir nehmen uns Zeit, Dekore, Serien und
              Formnummern einzuordnen und geben eine realistische Einschätzung zum aktuellen Markt.
            </p>
            <p>
              Sie möchten zunächst nur einzelne Teller oder Vasen anbieten und später ein ganzes
              Service veräußern? Kein Problem. Wir begleiten Schritt für Schritt und passen den
              Prozess an Ihre Situation an – transparent und gut planbar.
            </p>
          </div>

          <div className="mt-6 text-center">
            <span
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm md:text-base"
              style={{ background: "#fff", border: "1px solid #C2A14D", color: "#7B2E2E" }}
            >
              Klarer Ablauf • Kostenlose Begutachtung • Fixpreis
            </span>
          </div>
        </div>
      </section>
            {/* SECTION 4: Vorteile mit AntikLinz */}
      <section
        aria-label="Vorteile mit AntikLinz"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 10% 0%, #C2A14D22, transparent), radial-gradient(60rem 30rem at 90% 100%, #2E4B3C11, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Vorteile mit AntikLinz beim Porzellan verkaufen in Linz
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div
              className="rounded-3xl p-6 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Jahrzehntelange Erfahrung
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Wir kennen den Kunst- und Antiquitätenmarkt seit vielen Jahren. Unsere Expertise
                ermöglicht eine präzise Einschätzung, die sowohl Sammler:innen als auch Verkäufer:innen
                überzeugt.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Klare Abläufe
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Von der Kontaktaufnahme über die Begutachtung bis hin zur Auszahlung – jeder Schritt
                ist transparent. Sie wissen jederzeit, was als Nächstes passiert und welche Optionen
                Sie haben.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Persönlicher Service
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Wir legen Wert auf persönliche Beratung. Jedes Stück Porzellan hat seine eigene
                Geschichte – wir nehmen uns Zeit, diese zu verstehen und richtig einzuordnen.
              </p>
            </div>
          </div>

          {/* SEO-Absatz */}
          <div
            className="mt-12 mx-auto max-w-4xl text-sm md:text-base leading-relaxed space-y-5"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Mit AntikLinz profitieren Sie nicht nur von einer realistischen Einschätzung, sondern
              auch von einem respektvollen Umgang mit Ihren Objekten. Wir verstehen, dass viele
              Porzellanstücke Erinnerungswert besitzen, und behandeln sie mit der gebotenen Sorgfalt.
            </p>
            <p>
              Besonders geschätzt wird unsere Kombination aus Fachwissen und Zuverlässigkeit.
              Verkäufer:innen wissen es zu schätzen, dass unsere Angebote nicht nur marktgerecht,
              sondern auch sofort nachvollziehbar sind.
            </p>
            <p>
              Wer Porzellan in Linz veräußern möchte, findet bei uns eine faire Lösung:
              unkompliziert, transparent und diskret. So entsteht Vertrauen – die Grundlage für
              eine erfolgreiche Zusammenarbeit.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 5: FAQ */}
      <section
        aria-label="FAQ Porzellan verkaufen in Linz"
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
            Häufige Fragen zum Porzellan verkaufen in Linz
          </h2>

          <div className="grid gap-4 md:gap-6">
            {[
              {
                q: "Welche Porzellanarten kauft AntikLinz an?",
                a: "Wir bewerten Teller, Vasen, Figuren, Schalen, Service-Sets und dekorative Stücke aus bekannten und weniger bekannten Manufakturen. Auch Einzelstücke können interessant sein."
              },
              {
                q: "Ist die Begutachtung kostenlos?",
                a: "Ja. Die Einschätzung vor Ort in Linz oder Umgebung ist für Sie unverbindlich und kostenfrei. Sie entscheiden erst danach, ob Sie unser Angebot annehmen."
              },
              {
                q: "Wie läuft der Verkauf ab?",
                a: "Nach Kontaktaufnahme vereinbaren wir einen Termin zur Begutachtung. Anschließend erhalten Sie ein klares Angebot mit Fixpreis. Bei Zustimmung erfolgt die Auszahlung sofort."
              },
              {
                q: "Kann ich auch komplette Services anbieten?",
                a: "Natürlich. Komplette Sets sind oft besonders gefragt. Wir prüfen Vollständigkeit, Muster, Signaturen und den allgemeinen Erhaltungszustand."
              },
              {
                q: "Wie schnell bekomme ich mein Geld?",
                a: "Direkt nach Annahme des Angebots. Je nach Wunsch in bar oder per Überweisung – schnell und unkompliziert."
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
                <p
                  className="mt-3 text-sm md:text-base leading-relaxed"
                  style={{ color: "#2B2B2B" }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          {/* SEO-Absatz */}
          <div
            className="mt-12 mx-auto max-w-4xl text-sm md:text-base leading-relaxed space-y-5"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Viele Interessierte stellen ähnliche Fragen, wenn sie ihr Porzellan in Linz verkaufen möchten.
              Darum haben wir die wichtigsten Antworten hier für Sie zusammengestellt. So bekommen Sie schon
              vorab einen klaren Eindruck vom Ablauf.
            </p>
            <p>
              Unsere Erfahrung zeigt, dass besonders Sets und signierte Einzelstücke sehr gefragt sind.
              Doch auch weniger bekannte Stücke können für Sammler wertvoll sein. Deshalb lohnt es sich immer,
              eine kostenlose Einschätzung einzuholen.
            </p>
            <p>
              Entscheidend ist für viele Kund:innen die schnelle Auszahlung. Bei uns erfolgt diese direkt nach
              Annahme des Angebots – transparent, fair und unkompliziert.
            </p>
            <p>
              Wenn Sie weitere Fragen haben, stehen wir Ihnen gerne persönlich zur Verfügung. So wird der
              Verkauf nicht nur praktisch, sondern auch angenehm und sicher.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 6: Kontakt & kostenlose Bewertung */}
      <section
        aria-label="Kontakt & kostenlose Bewertung – Porzellan verkaufen in Linz"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 0% 0%, #C2A14D22, transparent), radial-gradient(60rem 30rem at 100% 100%, #2E4B3C11, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-20">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-center mb-6"
            style={{ color: "#7B2E2E" }}
          >
            Kontakt & kostenlose Bewertung – Porzellan verkaufen in Linz
          </h2>

          {/* Einleitender SEO-Block */}
          <div
            className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed space-y-6 mb-10"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Sie möchten Teller, Vasen, Figuren oder ein komplettes Service veräußern?
              Wir geben Ihnen eine klare Einschätzung mit nachvollziehbaren Kriterien wie
              Manufaktur, Dekor, Alter, Zustand und Nachfrage. Die Bewertung erfolgt
              kostenfrei und unverbindlich – damit Sie in Ruhe entscheiden können.
            </p>
            <p>
              Für eine zügige Ersteinschätzung genügt eine kurze Nachricht mit ein paar
              Fotos und Maßen. Auf Wunsch vereinbaren wir einen Termin vor Ort in Linz
              oder der näheren Umgebung. Nach der Durchsicht erhalten Sie ein Angebot
              mit Fixpreis sowie eine direkte Auszahlung bei Annahme.
            </p>
            <p>
              Ob Einzelstück mit Geschichte oder umfangreiche Sammlung: Wir behandeln
              jede Anfrage sorgfältig, kommunizieren transparent und halten vereinbarte
              Termine ein. So bleibt der Verkauf planbar, respektvoll und angenehm.
            </p>
          </div>

          {/* Kontaktkarte */}
          <div
            className="mx-auto max-w-2xl rounded-3xl p-6 md:p-8 shadow-sm text-center"
            style={{ background: "#fff", border: "1px solid #C2A14D" }}
          >
            <ul className="space-y-3 text-sm md:text-base" style={{ color: "#2B2B2B" }}>
              <li>
                <strong style={{ color: "#7B2E2E" }}>E-Mail:</strong>{" "}
                <a href="mailto:info@antiklinz.at" className="underline hover:opacity-90">
                  info@antiklinz.at
                </a>
              </li>
              <li>
                <strong style={{ color: "#7B2E2E" }}>Telefon:</strong>{" "}
                <a href="tel:+436767202623" className="underline hover:opacity-90">
                  +43 676 720 26 23
                </a>
              </li>
              <li>
                <strong style={{ color: "#7B2E2E" }}>Standort:</strong> Linz, Oberösterreich
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:info@antiklinz.at?subject=Anfrage%20Porzellan%20verkaufen%20Linz"
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
                Jetzt anrufen
              </a>
            </div>
          </div>

          {/* Abschlusszeile */}
          <div
            className="mt-10 mx-auto max-w-3xl text-center text-sm md:text-base leading-relaxed"
            style={{ color: "#2B2B2B" }}
          >
            Senden Sie uns Fotos Ihrer Stücke oder vereinbaren Sie gleich einen Termin – wir melden
            uns rasch mit einer klaren Einschätzung und einem fairen Angebot.
          </div>
        </div>
      </section>



    </main>
  );
}

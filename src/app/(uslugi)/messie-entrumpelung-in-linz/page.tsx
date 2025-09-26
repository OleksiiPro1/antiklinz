export default function MessieEntruempelungLinz() {
  return (
    <main id="main" className="min-h-screen" style={{ background: "#F7F3ED", color: "#2B2B2B" }}>
      {/* SECTION 1: HERO */}
      <section
        aria-label="Messie Entrümpelung in Linz"
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
                Messie Entrümpelung in Linz – diskret & verlässlich
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Eine Wohnung im Messie-Zustand bringt viele Herausforderungen mit sich – nicht nur
                für die Bewohner:innen selbst, sondern auch für Angehörige oder Vermieter:innen. 
                Genau hier setzen wir an: Mit unserer <strong>Messie Entrümpelung in Linz</strong> 
                schaffen wir Klarheit, Struktur und Raum für einen echten Neuanfang.
              </p>

              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Unser Team geht dabei mit Einfühlungsvermögen, Diskretion und absoluter 
                Verlässlichkeit vor. Jedes Projekt wird individuell betrachtet, denn keine 
                Situation gleicht der anderen. So entsteht eine maßgeschneiderte Lösung, 
                die sowohl praktisch als auch menschlich überzeugt.
              </p>

              <ul className="mt-5 grid gap-2 text-sm md:grid-cols-2">
                {[
                  "Diskrete Abwicklung in Linz & Umgebung",
                  "Rücksichtsvoller Umgang mit persönlichen Gegenständen",
                  "Klare Abläufe & fixe Preiszusagen",
                  "Schnelle Terminvereinbarung, flexible Lösungen",
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
                  Kostenlose Erstbesichtigung anfragen
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
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <img
                  src="/images/messie-linz.webp"
                  alt="Messie Entrümpelung in Linz – Vorher-Nachher-Beispiel mit klaren Räumen"
                  className="object-cover h-full w-full"
                />
              </div>

              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-2 text-sm shadow-md"
                style={{ background: "#fff", border: "1px solid #C2A14D", color: "#7B2E2E" }}
              >
                Diskret • Menschlich • Verlässlich
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 2: Wie wir arbeiten */}
      <section
        aria-label="Wie wir arbeiten – Messie Entrümpelung in Linz"
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
                  boxShadow: "0 20px 60px rgba(0,0,0,.10), 0 8px 20px rgba(0,0,0,.05)",
                }}
              >
                <img
                  src="/images/messie-arbeitsweise.webp"
                  alt="Team bei der Messie Entrümpelung in Linz – strukturierte Vorgehensweise"
                  className="block h-full w-full object-cover"
                  style={{ aspectRatio: "4 / 3" }}
                />
              </div>

              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-2 text-sm shadow-md"
                style={{ background: "#fff", border: "1px solid #C2A14D", color: "#7B2E2E" }}
              >
                Ruhig • Strukturiert • Verbindlich
              </div>
            </div>

            {/* Text rechts */}
            <div
              className="max-w-2xl text-base md:text-lg leading-relaxed space-y-6"
              style={{ color: "#2B2B2B" }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#7B2E2E" }}>
                Wie wir arbeiten – Messie Entrümpelung in Linz
              </h2>

              <p>
                Jede Wohnung und jede Geschichte ist anders. Deshalb beginnen wir mit einer ruhigen
                Bestandsaufnahme und einem klaren Plan. Unser Ziel ist nicht nur ein freier Raum,
                sondern ein verlässlicher Ablauf, der Rücksicht nimmt und Schritt für Schritt zu
                sichtbaren Ergebnissen führt.
              </p>

              <p>
                Nach dem Erstgespräch erstellen wir einen Ablauf mit Etappen, Zuständigkeiten und
                einem realistischen Zeitfenster. Wichtige Erinnerungsstücke werden auf Wunsch
                gesichert, dokumentiert und separat abgelegt. Gegenstände mit Wert werden vor Ort
                geprüft; dafür bringen wir die nötige Erfahrung aus dem Antiquitätenhandel mit.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div
                  className="rounded-2xl p-5 shadow-sm"
                  style={{ background: "#fff", border: "1px solid #C2A14D" }}
                >
                  <h3 className="font-semibold mb-2" style={{ color: "#7B2E2E" }}>
                    Behutsame Vorgehensweise
                  </h3>
                  <p className="text-sm md:text-base">
                    Wir arbeiten leise, kündigen jeden Schritt an und dokumentieren bei Bedarf.
                    So bleibt der Überblick gewahrt und Entscheidungen können in Ruhe getroffen werden.
                  </p>
                </div>

                <div
                  className="rounded-2xl p-5 shadow-sm"
                  style={{ background: "#fff", border: "1px solid #C2A14D" }}
                >
                  <h3 className="font-semibold mb-2" style={{ color: "#7B2E2E" }}>
                    Klare Verantwortlichkeiten
                  </h3>
                  <p className="text-sm md:text-base">
                    Ein fester Ansprechpartner koordiniert Termine, Zugang und Übergaben.
                    Damit gibt es kurze Wege, verbindliche Zeiten und eine saubere Dokumentation.
                  </p>
                </div>
              </div>

              <p>
                Für Eigentümer:innen und Verwaltungen erstellen wir auf Wunsch eine kurze
                Leistungsübersicht mit Fotos der Übergabe. Bei größeren Projekten arbeiten wir in
                Teams, damit einzelne Räume zügig wieder nutzbar sind. Unser Fokus: Sicherheit,
                Transparenz und verlässliche Absprachen.
              </p>

              <ul className="grid gap-2 text-sm md:text-base">
                {[
                  "Kostenlose Erstbesichtigung & klare Fixpreise",
                  "Sicherung von Dokumenten, Erinnerungsstücken und Wertgegenständen",
                  "Koordination mit Vermieter:innen, Hausverwaltungen oder Angehörigen",
                  "Termintreue Umsetzung mit respektvoller Kommunikation",
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
                So entsteht ein Ablauf, der trägt: planbar, umsichtig und menschlich.
                Wenn Sie Unterstützung bei einer Messie Entrümpelung im Raum Linz brauchen,
                erhalten Sie bei uns klare Antworten, feste Zusagen und ein Ergebnis, das überzeugt.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 3: Vorteile einer Messie Entrümpelung in Linz */}
      <section
        aria-label="Vorteile einer Messie Entrümpelung in Linz"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 0% 0%, #C2A14D22, transparent), radial-gradient(60rem 30rem at 100% 100%, #2E4B3C11, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-20">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Vorteile einer Messie Entrümpelung in Linz
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div
              className="rounded-3xl p-6 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Klarheit schaffen
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Eine <strong>Messie Entrümpelung in Linz</strong> bringt wieder Übersicht in Räume,
                die über Jahre hinweg unüberschaubar geworden sind. Schritt für Schritt entsteht ein
                Umfeld, das neue Perspektiven eröffnet und zur Erleichterung beiträgt.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Diskrete Begleitung
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Wir achten auf ein respektvolles Vorgehen, bei dem Vertraulichkeit an erster Stelle
                steht. So bleibt die Privatsphäre gewahrt, während gleichzeitig der notwendige Raum
                für einen Neuanfang geschaffen wird.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Nachhaltiger Effekt
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Durch die strukturierte Herangehensweise wird nicht nur Platz gewonnen, sondern auch
                ein Fundament für langfristige Ordnung gelegt. Die <strong>Messie Entrümpelung in Linz</strong> 
                dient damit als Basis für einen dauerhaften positiven Wandel.
              </p>
            </div>
          </div>

          {/* SEO-Absatz */}
          <div
            className="mt-12 mx-auto max-w-4xl text-sm md:text-base leading-relaxed space-y-5"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Wer sich für eine <strong>Messie Entrümpelung in Linz</strong> entscheidet, investiert
              nicht nur in freie Flächen, sondern auch in Lebensqualität. Räume, die zuvor kaum
              betretbar waren, verwandeln sich in Orte der Ruhe und Klarheit.
            </p>
            <p>
              Für Angehörige bedeutet dies Entlastung, für Mieter:innen oder Eigentümer:innen die
              Chance, Immobilien wieder nutzbar zu machen. Der Gewinn an Raum ist ein Gewinn an
              Freiheit, und genau darin liegt der größte Vorteil.
            </p>
            <p>
              AntikLinz unterstützt Sie dabei mit Erfahrung, Fingerspitzengefühl und klaren
              Abläufen. Vertrauen Sie auf ein Team, das nicht nur aufräumt, sondern mit Verständnis
              und Weitblick arbeitet.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 4: SEO-Textblock */}
      <section
        aria-label="SEO-Text zur Messie Entrümpelung in Linz"
        className="relative"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-20">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Messie Entrümpelung in Linz – Raum für einen Neubeginn
          </h2>

          <div
            className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed space-y-6"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Eine <strong>Messie Entrümpelung in Linz</strong> ist weit mehr als nur das
              Freiräumen von Wohnungen. Oft steckt dahinter eine lange Geschichte, viele
              persönliche Erinnerungen und ein Lebensumfeld, das über Jahre hinweg gewachsen ist.
              Genau deshalb ist es entscheidend, dass die Arbeit mit Feingefühl, Erfahrung und
              einem strukturierten Vorgehen umgesetzt wird.
            </p>

            <p>
              Unser Ansatz ist es, nicht nur Möbel, Gegenstände oder Sammlungen zu entfernen,
              sondern einen klaren Weg aufzuzeigen, wie Räume wieder nutzbar werden. Dabei achten
              wir besonders auf Dinge, die für die Betroffenen oder Angehörigen eine persönliche
              Bedeutung haben. Wertvolle Stücke werden dokumentiert und separat behandelt, sodass
              nichts von Bedeutung verloren geht.
            </p>

            <p>
              Durch unsere Erfahrung in der Region Linz wissen wir, dass jede Situation ihre
              eigenen Herausforderungen mitbringt. Manchmal handelt es sich um kleine Wohnungen,
              die Schritt für Schritt freigeräumt werden, manchmal um größere Häuser, die in
              mehreren Etappen bearbeitet werden. In jedem Fall gilt: Transparenz, Diskretion und
              eine klare Kommunikation stehen bei uns im Mittelpunkt.
            </p>

            <p>
              Für Eigentümer:innen oder Vermieter:innen ist eine <strong>Messie Entrümpelung in Linz</strong>
              außerdem eine Möglichkeit, Immobilien wieder bewohnbar zu machen. Mit einem geordneten Ablauf
              und einer professionellen Umsetzung lassen sich Räume innerhalb kurzer Zeit neu nutzen – sei
              es für die Weitervermietung, den Verkauf oder die private Verwendung.
            </p>

            <p>
              Besonders geschätzt wird unser Team für die ruhige und respektvolle Arbeitsweise.
              Statt hektisch vorzugehen, nehmen wir uns die Zeit, klare Schritte zu planen und mit
              allen Beteiligten abzustimmen. So entsteht Vertrauen, und der gesamte Prozess läuft
              nachvollziehbar und verlässlich ab.
            </p>

            <p>
              Wenn Sie Unterstützung bei einer <strong>Messie Entrümpelung in Linz</strong> benötigen,
              dann haben Sie mit AntikLinz einen Partner, der sowohl die menschliche Seite versteht
              als auch die praktische Umsetzung beherrscht. Unser Ziel ist es, Räume nicht nur leer,
              sondern lebenswert zu hinterlassen – ein neuer Anfang, der spürbar entlastet.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 5: Kontakt & kostenlose Beratung */}
      <section
        aria-label="Kontakt und kostenlose Beratung zur Messie Entrümpelung in Linz"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 0% 0%, #C2A14D22, transparent), radial-gradient(60rem 30rem at 100% 100%, #2E4B3C11, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-20">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Kontakt &amp; kostenlose Beratung
          </h2>

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
                href="mailto:info@antiklinz.at?subject=Messie%20Entr%C3%BCmpelung%20Linz"
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
                Jetzt anrufen
              </a>
            </div>
          </div>

          {/* SEO-Absatz */}
          <div
            className="mt-12 mx-auto max-w-4xl text-sm md:text-base leading-relaxed space-y-6"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Wer sich für eine <strong>Messie Entrümpelung in Linz</strong> interessiert, hat meist
              viele Fragen: Wie läuft der Prozess ab? Wie lange dauert es, bis die Wohnung wieder
              nutzbar ist? Welche Kosten entstehen? Wir nehmen uns Zeit für eine persönliche Beratung
              und beantworten jede dieser Fragen nachvollziehbar und transparent.
            </p>
            <p>
              Die Erstbesichtigung vor Ort ist für Sie kostenlos und unverbindlich. Dabei verschaffen
              wir uns einen Überblick, klären offene Punkte und erstellen ein Angebot mit einem klaren
              Fixpreis. So wissen Sie von Anfang an, welche Leistungen enthalten sind und welche Schritte
              folgen. Überraschungen gibt es nicht – Verlässlichkeit steht bei uns an erster Stelle.
            </p>
            <p>
              Besonders wichtig ist uns die menschliche Seite. Eine <strong>Messie Entrümpelung in Linz</strong>
              betrifft oft nicht nur Räume, sondern auch Lebensgeschichten. Deshalb arbeiten wir mit Ruhe,
              Einfühlungsvermögen und dem Bewusstsein, dass jedes Objekt und jeder Raum seine eigene Bedeutung
              haben kann. Diese Haltung macht den Unterschied.
            </p>
            <p>
              Ob kleine Wohnung oder großes Haus, ob einzelne Räume oder komplette Liegenschaften –
              AntikLinz steht Ihnen als Partner in Linz und Umgebung zur Seite. Vereinbaren Sie jetzt
              einen Termin für eine kostenlose Beratung. Wir kümmern uns darum, dass Sie bald wieder
              freie Räume und ein gutes Gefühl haben.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 6: FAQ zur Messie Entrümpelung in Linz */}
      <section
        aria-label="FAQ zur Messie Entrümpelung in Linz"
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
            Häufige Fragen zur Messie Entrümpelung in Linz
          </h2>

          <div className="grid gap-4 md:gap-6">
            {[
              {
                q: "Wie läuft eine Messie Entrümpelung in Linz ab?",
                a: "Zunächst erfolgt eine kostenlose Besichtigung. Danach erstellen wir einen Ablaufplan mit Fixpreis. Anschließend setzen wir die Entrümpelung Schritt für Schritt um – klar strukturiert und nachvollziehbar.",
              },
              {
                q: "Muss ich während der Entrümpelung anwesend sein?",
                a: "Nein, das ist nicht notwendig. Auf Wunsch übernehmen wir die Arbeit auch in Abwesenheit, etwa mit Schlüsselübergabe. Sie erhalten anschließend eine klare Dokumentation.",
              },
              {
                q: "Wie schnell kann ein Termin stattfinden?",
                a: "In der Regel innerhalb weniger Tage. Bei dringenden Fällen sind wir flexibel und können kurzfristig reagieren.",
              },
              {
                q: "Was passiert mit persönlichen Erinnerungsstücken?",
                a: "Diese werden von uns behutsam gesichert. Wenn Sie möchten, legen wir Gegenstände separat bereit, sodass Sie selbst entscheiden können, was behalten werden soll.",
              },
              {
                q: "Welche Kosten entstehen für eine Messie Entrümpelung in Linz?",
                a: "Die Kosten hängen vom Umfang ab. Durch die kostenlose Besichtigung können wir ein transparentes Angebot mit Fixpreis erstellen – ohne versteckte Gebühren.",
              },
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
            className="mt-12 mx-auto max-w-4xl text-sm md:text-base leading-relaxed space-y-6"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Unsere FAQ geben Ihnen einen schnellen Überblick über die wichtigsten Themen rund um
              die <strong>Messie Entrümpelung in Linz</strong>. So wissen Sie bereits vor der
              Kontaktaufnahme, wie wir arbeiten und welche Schritte folgen.
            </p>
            <p>
              Besonders wichtig ist vielen Kund:innen die Frage nach Transparenz und Diskretion.
              Beide Punkte stehen für uns an oberster Stelle: klare Preise, strukturierte Abläufe
              und ein respektvoller Umgang mit allen Beteiligten.
            </p>
            <p>
              Wenn Sie weitere Fragen haben oder einen persönlichen Beratungstermin wünschen,
              kontaktieren Sie uns direkt. Wir nehmen uns Zeit und begleiten Sie verlässlich
              durch den gesamten Prozess.
            </p>
          </div>
        </div>
      </section>



    </main>
  );
}

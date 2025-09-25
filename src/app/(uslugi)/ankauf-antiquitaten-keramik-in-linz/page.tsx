// app/service/ankauf-antiquitaeten-keramik-linz/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ankauf Antiquitäten Keramik in Linz | AntikLinz",
  description:
    "AntikLinz – Ankauf von Keramik in Linz: Fayence, Majolika, Steinzeug, Delft u.v.m. Kostenlose Besichtigung, faire Bewertung, klare Fixpreise.",
};

export default function Page() {
  return (
    <main style={{ background: "#F7F3ED", color: "#2B2B2B" }}>
      {/* SECTION 1: Hero – Ankauf Antiquitäten Keramik in Linz */}
      <section
        aria-label="Ankauf Antiquitäten Keramik in Linz – Startbereich"
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
                Ankauf Antiquitäten Keramik in Linz
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Wir kaufen <strong>Keramik</strong> aus verschiedenen Epochen: Fayence, Majolika,
                Steinzeug, Delft, Glasuren mit Craquelé sowie handbemalte Teller, Vasen und Krüge.
                Sie erhalten eine fachkundige Einschätzung und ein klares Angebot mit Fixpreis.
              </p>

              <ul className="mt-5 grid gap-2 text-sm md:grid-cols-2">
                {[
                  "Kostenlose & unverbindliche Besichtigung",
                  "Bewertung nach Erhaltungszustand & Seltenheit",
                  "Sofortige Auszahlung beim Ankauf",
                  "Diskrete, termintreue Abwicklung in Linz",
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
                <Link
                  href="mailto:info@antiklinz.at"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                  style={{ background: "#7B2E2E", color: "#fff" }}
                >
                  Besichtigung anfragen
                </Link>
                <Link
                  href="tel:+436767202623"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border transition"
                  style={{ borderColor: "#C2A14D", color: "#2B2B2B" }}
                >
                  +43 676 720 26 23 anrufen
                </Link>
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
                <Image
                  src="/images/antiklinz-keramik-hero.webp"
                  alt="Antike Keramik in Linz – handbemalte Vasen, Teller und Krüge auf Holz"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 540px, 100vw"
                  priority
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
                Fayence • Majolika • Steinzeug
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 2: Welche Keramik wir ankaufen */}
      <section
        aria-label="Welche Keramik wir ankaufen"
        className="relative"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Welche Keramik wir ankaufen
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Bild links */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <Image
                  src="/images/antiklinz-keramik-kategorien.webp"
                  alt="Antike Keramik in Linz – Fayence, Majolika und Delft-Teller"
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
                Fayence • Majolika • Delft
              </div>
            </div>

            {/* Text rechts */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: "#2B2B2B" }}>
              <p>
                AntikLinz ist spezialisiert auf den <strong>Ankauf Antiquitäten Keramik in Linz</strong>.
                Besonders geschätzt sind Fayence-Objekte mit feiner Bemalung, Majolika in kräftigen Farben
                und handgefertigtes Steinzeug mit Reliefdekor. Jedes Stück wird individuell betrachtet und
                mit langjähriger Erfahrung eingeschätzt.
              </p>

              <p>
                Auch <strong>Delfter Keramik</strong> mit den typischen blauen Dekoren sowie
                kunstvoll glasierte Schalen, Vasen und Teller sind bei Sammler:innen sehr gefragt.
                Wir prüfen Originalität, Alter und künstlerische Gestaltung, bevor wir Ihnen ein faires
                Angebot unterbreiten.
              </p>

              <p>
                Ob einzelne Stücke oder ganze Sammlungen: Mit AntikLinz haben Sie einen verlässlichen
                Partner, wenn es um den <strong>Ankauf Antiquitäten Keramik in Linz</strong> geht.
                Transparenz und eine respektvolle Abwicklung stehen bei uns im Vordergrund.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 3: Ablauf des Keramik-Ankaufs */}
      <section
        aria-label="Ablauf des Keramik-Ankaufs"
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
            Ablauf des Keramik-Ankaufs
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: "#2B2B2B" }}>
            <p>
              Wer sich für den <strong>Ankauf Antiquitäten Keramik in Linz</strong> interessiert, möchte
              einen klaren und unkomplizierten Weg vom ersten Kontakt bis zum Abschluss. Genau dafür
              sorgt AntikLinz mit einem strukturierten Ablauf, der für Transparenz und Vertrauen steht.
            </p>

            <ol className="space-y-5">
              <li className="rounded-2xl p-5 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                <strong style={{ color: "#7B2E2E" }}>1) Kontaktaufnahme</strong>
                <p className="mt-2 text-sm md:text-base">
                  Sie erreichen uns telefonisch oder per E-Mail. Schon mit wenigen Angaben zu Ihren
                  Keramikstücken können wir eine erste Einschätzung geben.
                </p>
              </li>

              <li className="rounded-2xl p-5 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                <strong style={{ color: "#7B2E2E" }}>2) Kostenlose Besichtigung</strong>
                <p className="mt-2 text-sm md:text-base">
                  Wir vereinbaren einen Termin in Linz oder Umgebung und sehen uns Ihre Keramik direkt
                  vor Ort an. Dabei prüfen wir Stil, Erhaltungszustand und Besonderheiten.
                </p>
              </li>

              <li className="rounded-2xl p-5 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                <strong style={{ color: "#7B2E2E" }}>3) Angebot mit Fixpreis</strong>
                <p className="mt-2 text-sm md:text-base">
                  Nach der Besichtigung erhalten Sie ein nachvollziehbares Angebot mit einem klaren
                  Fixpreis. So wissen Sie sofort, womit Sie rechnen können.
                </p>
              </li>

              <li className="rounded-2xl p-5 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                <strong style={{ color: "#7B2E2E" }}>4) Abwicklung & Auszahlung</strong>
                <p className="mt-2 text-sm md:text-base">
                  Stimmen Sie zu, erfolgt die Auszahlung direkt und die Stücke werden zum vereinbarten
                  Zeitpunkt übernommen. Einfach, verlässlich und ohne Umwege.
                </p>
              </li>
            </ol>

            <p>
              Damit ist der <strong>Ankauf Antiquitäten Keramik in Linz</strong> für Sie so angenehm
              wie möglich gestaltet – transparent, respektvoll und mit klaren Abläufen.
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
            Ihre Vorteile beim Ankauf Antiquitäten Keramik in Linz
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div
              className="rounded-3xl p-6 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Fachkenntnis & Erfahrung
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Unser Team verfügt über jahrzehntelange Expertise im Handel mit Keramik.
                Ob Fayence, Majolika, Steinzeug oder Delft – wir erkennen den kulturellen
                und künstlerischen Wert Ihrer Stücke. Dadurch können wir beim{" "}
                <strong>Ankauf Antiquitäten Keramik in Linz</strong> faire und nachvollziehbare
                Angebote erstellen.
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
                Von der ersten Anfrage über die kostenlose Besichtigung bis hin zur Auszahlung
                läuft jeder Schritt nachvollziehbar und ohne versteckte Bedingungen. Wer den{" "}
                <strong>Ankauf Antiquitäten Keramik in Linz</strong> plant, kann sich auf eine
                klare Kommunikation und verbindliche Fixpreise verlassen.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 shadow-sm"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Diskretion & Zuverlässigkeit
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Gerade bei Stücken mit emotionalem Wert ist Vertrauen wichtig. AntikLinz steht
                für eine diskrete Abwicklung, pünktliche Termine und respektvollen Umgang.
                Der <strong>Ankauf Antiquitäten Keramik in Linz</strong> erfolgt stets
                mit Rücksicht auf Ihre Wünsche und in einer Atmosphäre gegenseitiger Wertschätzung.
              </p>
            </div>
          </div>

          {/* SEO-Absatz */}
          <div
            className="mt-12 mx-auto max-w-4xl text-sm md:text-base leading-relaxed space-y-5"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Wer den <strong>Ankauf Antiquitäten Keramik in Linz</strong> in Betracht zieht, möchte
              Sicherheit, Fairness und Klarheit. Genau das bieten wir: eine kostenlose Besichtigung,
              eine fachgerechte Bewertung und ein sofortiges Angebot mit Fixpreis. Unser Ziel ist es,
              dass Sie Ihre Keramikstücke ohne Stress verkaufen können und gleichzeitig die Gewissheit
              haben, den angemessenen Wert zu erhalten.
            </p>
            <p>
              Viele Kund:innen schätzen, dass sie bei uns alles aus einer Hand bekommen –
              von der ersten Beratung bis zur Auszahlung. So bleibt der{" "}
              <strong>Ankauf Antiquitäten Keramik in Linz</strong> überschaubar, effizient
              und angenehm. Ob einzelne Teller, komplette Services oder dekorative Vasen:
              Wir gehen auf Ihre individuellen Anliegen ein und begleiten Sie zuverlässig.
            </p>
            <p>
              AntikLinz versteht sich nicht nur als Käufer, sondern auch als Bewahrer von
              Geschichte und Handwerkskunst. Der <strong>Ankauf Antiquitäten Keramik in Linz</strong>{" "}
              trägt dazu bei, dass wertvolle Stücke neue Besitzer:innen finden, die deren
              Bedeutung zu schätzen wissen. So entsteht ein Kreislauf, der Tradition und
              Qualität verbindet.
            </p>
          </div>
        </div>
      </section>
            {/* SECTION 5: Häufige Fragen (FAQ) */}
      <section
        aria-label="Häufige Fragen zum Keramik-Ankauf in Linz"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 12% 0%, #C2A14D22, transparent), radial-gradient(60rem 30rem at 88% 100%, #2E4B3C11, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-8 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Häufige Fragen zum Ankauf Antiquitäten Keramik in Linz
          </h2>

          {/* Einleitender SEO-Absatz */}
          <div className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed mb-10" style={{ color: "#2B2B2B" }}>
            <p>
              Viele Kund:innen, die den <strong>Ankauf Antiquitäten Keramik in Linz</strong> in
              Erwägung ziehen, möchten vorab Klarheit über den Ablauf, die Bewertung und die
              Möglichkeiten erhalten. Deshalb beantworten wir hier die häufigsten Fragen,
              damit Sie genau wissen, wie wir arbeiten und was Sie erwartet.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            {/* Q1 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }} open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Welche Arten von Keramik kauft AntikLinz in Linz an?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45"
                      style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>+</span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Wir sind interessiert an <strong>Fayence, Majolika, Steinzeug, Delft</strong> sowie
                kunstvoll glasierten Tellern, Schalen, Krügen und Vasen. Besonders gefragt sind
                handbemalte Stücke mit charaktervollen Dekoren.
              </div>
            </details>

            {/* Q2 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Muss ich für den Ankauf Antiquitäten Keramik in Linz eine ganze Sammlung anbieten?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45"
                      style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>+</span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Nein. Wir kaufen sowohl Einzelstücke als auch komplette Services oder Sammlungen an.
                Oft beginnen Kund:innen mit einem besonderen Stück und entscheiden sich später,
                weitere Objekte im Rahmen des <strong>Ankaufs Antiquitäten Keramik in Linz</strong>
                zu veräußern.
              </div>
            </details>

            {/* Q3 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Wie erfolgt die Bewertung meiner Keramik?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45"
                      style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>+</span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Wir betrachten Alter, Stil, Erhaltungszustand, Seltenheit und Nachfrage.
                So können wir beim <strong>Ankauf Antiquitäten Keramik in Linz</strong> ein faires
                und transparentes Angebot unterbreiten, das dem tatsächlichen Marktwert entspricht.
              </div>
            </details>

            {/* Q4 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Wie schnell kann ein Termin in Linz vereinbart werden?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45"
                      style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>+</span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Meist können wir kurzfristig einen Besichtigungstermin anbieten. Nach der
                Begutachtung Ihrer Stücke erfolgt ein Angebot, und die Auszahlung kann direkt
                abgeschlossen werden.
              </div>
            </details>

            {/* Q5 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Bekomme ich eine schriftliche Bestätigung?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45"
                      style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>+</span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Selbstverständlich. Sie erhalten einen Beleg über die übernommenen Keramikstücke
                sowie die vereinbarten Konditionen. Damit ist Ihr <strong>Ankauf Antiquitäten Keramik in Linz</strong> klar dokumentiert.
              </div>
            </details>
          </div>

          {/* SEO-Abschluss */}
          <div className="mt-12 mx-auto max-w-3xl text-center text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
            Haben Sie weitere Fragen zum <strong>Ankauf Antiquitäten Keramik in Linz</strong>?  
            Kontaktieren Sie uns telefonisch unter{" "}
            <a href="tel:+436767202623" className="underline">+43 676 720 26 23</a> oder per E-Mail an{" "}
            <a href="mailto:info@antiklinz.at" className="underline">info@antiklinz.at</a>.  
            Wir beraten Sie gerne persönlich.
          </div>
        </div>
      </section>
            {/* SECTION 6: Kontakt & kostenlose Besichtigung */}
      <section
        aria-label="Kontakt & kostenlose Besichtigung"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 0% 0%, #C2A14D22, transparent), radial-gradient(60rem 30rem at 100% 100%, #2E4B3C11, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-6 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Kontakt & kostenlose Besichtigung
          </h2>

          {/* SEO-Einleitung */}
          <div
            className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed space-y-6 mb-10"
            style={{ color: "#2B2B2B" }}
          >
            <p>
              Wenn Sie den <strong>Ankauf Antiquitäten Keramik in Linz</strong> planen, ist eine
              persönliche Beratung der beste Weg, um den Wert Ihrer Objekte realistisch einzuschätzen.
              AntikLinz bietet Ihnen eine kostenlose Besichtigung direkt in Linz oder der näheren
              Umgebung – unkompliziert, transparent und verlässlich.
            </p>
            <p>
              Während der Besichtigung prüfen wir Alter, Stil, Besonderheiten und Erhaltungszustand
              Ihrer Keramik. Auf dieser Grundlage erhalten Sie ein klares Angebot mit Fixpreis. So
              wissen Sie sofort, welche Konditionen möglich sind, und können Ihre Entscheidung ohne
              Druck treffen.
            </p>
            <p>
              Unser Anspruch ist es, dass der <strong>Ankauf Antiquitäten Keramik in Linz</strong>{" "}
              für Sie angenehm und stressfrei verläuft. Ob einzelne Vasen, dekorative Teller oder
              komplette Services: Wir nehmen uns die Zeit für eine seriöse Einschätzung und eine
              schnelle Abwicklung – auf Wunsch mit sofortiger Auszahlung.
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
                href="mailto:info@antiklinz.at?subject=Anfrage%20Keramikankauf%20Linz"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                style={{ background: "#7B2E2E", color: "#fff" }}
              >
                Besichtigung anfragen
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

          {/* SEO-Abschluss */}
          <div
            className="mt-10 mx-auto max-w-3xl text-center text-sm md:text-base leading-relaxed"
            style={{ color: "#2B2B2B" }}
          >
            AntikLinz ist Ihr Ansprechpartner für den{" "}
            <strong>Ankauf Antiquitäten Keramik in Linz</strong>. Vereinbaren Sie noch heute eine
            kostenlose Besichtigung – schnell, professionell und fair.
          </div>
        </div>
      </section>



    </main>
  );
}

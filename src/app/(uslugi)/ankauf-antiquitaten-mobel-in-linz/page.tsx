// app/service/ankauf-antiquitaeten-moebel-linz/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ankauf Antiquitäten & Möbel in Linz | AntikLinz",
  description:
    "AntikLinz – seriöser Ankauf von Antiquitäten & Möbeln in Linz. Kostenlose Besichtigung, faire Bewertung, diskrete Abwicklung.",
};

export default function Page() {
  return (
    <main style={{ background: "#F7F3ED", color: "#2B2B2B" }}>
      {/* SECTION 1: Hero */}
      <section
        aria-label="Ankauf Antiquitäten & Möbel in Linz – Startbereich"
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
                Ankauf Antiquitäten &amp; Möbel in Linz
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Fachkundiger <strong>Möbelankauf</strong> in Linz: Biedermeier,
                Gründerzeit, Jugendstil, Art&nbsp;Deco &amp; Vintage. Kostenlose
                Besichtigung, faire Bewertung, klare Fixpreise.
              </p>

              <ul className="mt-5 grid gap-2 text-sm md:grid-cols-2">
                {[
                  "Kostenlose & unverbindliche Besichtigung",
                  "Faire Bewertung nach Zustand & Nachfrage",
                  "Sofortige Auszahlung beim Ankauf",
                  "Diskrete Abwicklung in Linz & Umgebung",
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
                  src="/images/antiklinz-moebel-hero.webp"
                  alt="Antike Möbel in Linz – Kommode, Vitrine und Stuhl in klassischem Ambiente"
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
                Biedermeier • Gründerzeit • Jugendstil
              </div>
            </div>
          </div>
        </div>
      </section>
                  {/* SECTION 2: Welche Möbel wir ankaufen */}
      <section
        aria-label="Welche Möbel wir ankaufen"
        className="relative"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-10 text-center"
            style={{ color: "#7B2E2E" }}
          >
            Welche Möbel wir ankaufen
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Bild links */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <Image
                  src="/images/antiklinz-moebel-ankauf.webp"
                  alt="Antike Möbel in Linz – Vitrine, Schreibtisch und Stuhl"
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
                Kommoden • Vitrinen • Tische
              </div>
            </div>

            {/* Text rechts */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: "#2B2B2B" }}>
              <p>
                AntikLinz sucht <strong>antike Möbelstücke</strong> aus verschiedenen Epochen –
                von Biedermeier-Kommoden über Gründerzeit-Schränke bis hin zu Jugendstil-Sekretären
                und Art&nbsp;Deco-Vitrinen. Gut erhaltene Stücke sind bei Sammler:innen wie
                Liebhaber:innen besonders gefragt.
              </p>

              <p>
                Auch <strong>Sitzmöbel und Tische</strong> zählen zu unseren Schwerpunkten: 
                elegante Stühle, Esstische, Sofas oder Schreibtische mit Geschichte. Jedes
                Objekt bringt seinen eigenen Charme mit und verdient eine fachgerechte Bewertung.
              </p>

              <p>
                Neben klassischen Möbeln interessieren wir uns für{" "}
                <strong>Designklassiker und Sammlerstücke</strong>. Zusätzlich kaufen wir
                komplette Sammlungen an, gerne auch in Verbindung mit Silber, Porzellan,
                Uhren oder Gemälden – alles aus einer Hand.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* SECTION 3: Ablauf des Antiquitäten-Ankaufs */}
      <section
        aria-label="Ablauf des Antiquitäten-Ankaufs"
        className="relative"
        style={{
          background:
            "radial-gradient(60rem 30rem at 10% 0%, #2E4B3C11, transparent), radial-gradient(60rem 30rem at 90% 100%, #C2A14D22, transparent)",
        }}
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Text links */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-extrabold mb-6"
                style={{ color: "#7B2E2E" }}
              >
                Ablauf des Antiquitäten-Ankaufs
              </h2>

              <ol className="space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "#2B2B2B" }}>
                <li className="rounded-2xl p-4 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                  <strong style={{ color: "#7B2E2E" }}>1) Kontakt & kurze Beschreibung</strong>
                  <p className="mt-2 text-sm md:text-base">
                    Schreiben Sie uns per E-Mail oder rufen Sie an. Ein paar Fotos und Maße helfen
                    für eine erste Einschätzung. Wir melden uns zügig mit einem Terminvorschlag.
                  </p>
                </li>

                <li className="rounded-2xl p-4 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                  <strong style={{ color: "#7B2E2E" }}>2) Kostenlose Besichtigung vor Ort</strong>
                  <p className="mt-2 text-sm md:text-base">
                    Wir sehen uns die Stücke in Linz und Umgebung persönlich an. Dabei prüfen wir
                    Zustand, Alter, Stilmerkmale und Nachfrage am Markt – transparent und nachvollziehbar.
                  </p>
                </li>

                <li className="rounded-2xl p-4 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                  <strong style={{ color: "#7B2E2E" }}>3) Faires Fixangebot</strong>
                  <p className="mt-2 text-sm md:text-base">
                    Sie erhalten ein klares Angebot ohne Nebenkosten. Bei Zustimmung erfolgt die
                    Auszahlung auf Wunsch sofort.
                  </p>
                </li>

                <li className="rounded-2xl p-4 shadow-sm" style={{ background: "#fff", border: "1px solid #C2A14D" }}>
                  <strong style={{ color: "#7B2E2E" }}>4) Abholung & Abschluss</strong>
                  <p className="mt-2 text-sm md:text-base">
                    Wir organisieren den sicheren Abtransport zum vereinbarten Zeitpunkt.
                    Übergabeprotokoll und Beleg sind selbstverständlich.
                  </p>
                </li>
              </ol>

              <div className="mt-6 text-sm md:text-base">
                <span className="inline-flex items-center gap-2 rounded-xl px-4 py-2"
                  style={{ background: "#fff", border: "1px solid #C2A14D", color: "#7B2E2E" }}>
                  Schnell • Transparent • Termintreu
                </span>
              </div>
            </div>

            {/* Bild rechts */}
            <div className="relative">
              <div
                className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
                style={{ background: "#fff", border: "1px solid #C2A14D" }}
              >
                <Image
                  src="/images/antiklinz-ankauf-ablauf.webp"
                  alt="Besichtigung und Bewertung antiker Möbel in Linz – ruhige Szene bei der Terminabwicklung"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 540px, 100vw"
                />
              </div>
              <div
                className="absolute -bottom-4 left-6 rounded-2xl px-4 py-2 text-sm shadow-md"
                style={{ background: "#fff", border: "1px solid #C2A14D", color: "#7B2E2E" }}
              >
                Besichtigung • Angebot • Abholung
              </div>
            </div>
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
            Ihre Vorteile mit AntikLinz
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div
              className="rounded-3xl p-6 shadow-sm transition hover:shadow-md"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Faire Marktpreise
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Unsere Bewertungen basieren auf langjähriger Erfahrung und aktuellen
                Marktkenntnissen. Sie erhalten transparente Angebote ohne versteckte
                Kosten.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 shadow-sm transition hover:shadow-md"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Rasche Terminvergabe
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Eine erste Besichtigung kann kurzfristig vereinbart werden. So sparen
                Sie Zeit und können Ihre Möbel schnell und unkompliziert verkaufen.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 shadow-sm transition hover:shadow-md"
              style={{ background: "#fff", border: "1px solid #C2A14D" }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#7B2E2E" }}>
                Diskrete Abwicklung
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Wir legen großen Wert auf Verlässlichkeit und Diskretion – besonders
                wenn es um persönliche Erinnerungsstücke oder Nachlasssituationen geht.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
            Mit AntikLinz haben Sie einen Partner, der Wertschätzung und Fachwissen
            verbindet. Vom ersten Kontakt bis zum Abschluss begleiten wir Sie klar,
            respektvoll und professionell.
          </div>
        </div>
      </section>
              {/* SECTION 5: Häufige Fragen (FAQ) – SEO-stark */}
      <section
        aria-label="Häufige Fragen zum Möbelankauf in Linz"
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
            Häufige Fragen zum Ankauf von Antiquitäten & Möbeln in Linz
          </h2>

          {/* Einleitender SEO-Absatz */}
          <div className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed mb-10" style={{ color: "#2B2B2B" }}>
            <p>
              Sie möchten <strong>Ankauf Antiquitäten Möbel in Linz</strong> professionell, fair
              und ohne Umwege abwickeln? Bei AntikLinz erhalten Sie eine klare Einschätzung, rasche
              Rückmeldung und ein Angebot, das sich an realen Marktpreisen orientiert. Ob
              Biedermeier-Kommode, Gründerzeit-Schrank, Jugendstil-Sekretär, Art&nbsp;Deco-Vitrine
              oder ein gut erhaltenes Vintage-Stück: Wir unterstützen Sie vom ersten Kontakt bis zur
              Übergabe – transparent und termintreu. Nachfolgend beantworten wir die häufigsten
              Fragen, damit Sie Ihre Entscheidung für den <strong>Ankauf Antiquitäten Möbel in Linz</strong>
              gut informiert treffen können.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            {/* Q1 */}
            <details
              className="group rounded-2xl border p-4 md:p-5 transition"
              style={{ borderColor: "#C2A14D", background: "#fff" }}
              open
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Welche Möbel kauft AntikLinz in Linz besonders häufig an?
                </h3>
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45"
                  style={{ background: "#C2A14D55", color: "#2B2B2B" }}
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Wir suchen <strong>antike Möbel</strong> mit Substanz und Stil: Kommoden, Vitrinen,
                Sekretäre, Schränke, Tische, Stühle sowie charaktervolle Sitzmöbel. Ebenso gefragt:
                <strong> Designklassiker</strong> und Sammlerstücke. Wenn Sie den
                <strong> Ankauf Antiquitäten Möbel in Linz</strong> planen, genügt eine kurze
                Beschreibung und ein Foto – wir geben Ihnen rasch Rückmeldung.
              </div>
            </details>

            {/* Q2 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Wie läuft die Bewertung beim Ankauf Antiquitäten & Möbel in Linz ab?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45" style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Wir prüfen jedes Stück vor Ort in Linz und Umgebung. In die Einschätzung fließen u. a.
                Erhaltungszustand, Alter, Stilmerkmale, Nachfrage und Seltenheit ein. Auf dieser Basis
                erhalten Sie ein nachvollziehbares Angebot mit klarem Fixpreis. Das Ziel: ein fairer
                <strong> Ankauf Antiquitäten Möbel in Linz</strong>, der beide Seiten überzeugt.
              </div>
            </details>

            {/* Q3 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Kaufen Sie auch einzelne Möbel an oder nur komplette Einrichtungen?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45" style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Beides ist möglich. Wir übernehmen Einzelstücke, ausgewählte Highlights sowie ganze
                Ensembles. Häufig begleiten wir den <strong>Ankauf Antiquitäten Möbel in Linz</strong>
                im Rahmen einer Wohnungsauflösung oder nach einem Umzug – flexibel und gut planbar.
              </div>
            </details>

            {/* Q4 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Wie schnell bekomme ich einen Termin und wann erfolgt die Auszahlung?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45" style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Termine lassen sich in der Regel kurzfristig vereinbaren. Nach der Besichtigung und
                Annahme unseres Angebots erfolgt die Auszahlung auf Wunsch umgehend. So bleibt der
                <strong> Ankauf Antiquitäten Möbel in Linz</strong> für Sie unkompliziert.
              </div>
            </details>

            {/* Q5 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Übernehmen Sie auch Kombinationen mit Silber, Porzellan, Uhren oder Gemälden?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45" style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Ja. Wir bündeln Verkäufe gerne „aus einer Hand“. Das spart Zeit und ermöglicht ein
                stimmiges Gesamtangebot. Gerade im <strong>Ankauf Antiquitäten Möbel in Linz</strong>
                ergibt die Kombination mit passenden Objekten oft ein attraktives Gesamtpaket.
              </div>
            </details>

            {/* Q6 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Muss ich meine Möbel vorher reinigen oder aufbereiten?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45" style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Nein. Eine grundlegende Sichtung reicht völlig aus. Wichtig sind authentischer
                Zustand, nachvollziehbare Herkunft und stimmige Proportionen. Für den
                <strong> Ankauf Antiquitäten Möbel in Linz</strong> zählen vor allem Substanz und
                Originalität.
              </div>
            </details>

            {/* Q7 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Gilt Ihr Service nur für Linz oder auch für die Umgebung?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45" style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Unser Schwerpunkt liegt in <strong>Linz</strong>, wir kommen jedoch auch in die
                nähere Umgebung. Senden Sie uns einfach eine kurze Anfrage mit Ort und Wunschzeit,
                dann prüfen wir die Möglichkeiten für Ihren <strong>Ankauf Antiquitäten Möbel in Linz</strong>
                und Region.
              </div>
            </details>

            {/* Q8 */}
            <details className="group rounded-2xl border p-4 md:p-5 transition" style={{ borderColor: "#C2A14D", background: "#fff" }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#7B2E2E" }}>
                  Erhalte ich einen Beleg über den Verkauf?
                </h3>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm transition group-open:rotate-45" style={{ background: "#C2A14D55", color: "#2B2B2B" }} aria-hidden>
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
                Ja, Sie erhalten eine schriftliche Bestätigung sowie einen Beleg über die
                übernommenen Stücke und die vereinbarten Konditionen. Damit ist Ihr
                <strong> Ankauf Antiquitäten Möbel in Linz</strong> sauber dokumentiert.
              </div>
            </details>
          </div>

          {/* Abschluss-CTA in Textform */}
          <div className="mt-12 mx-auto max-w-3xl text-center text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
            Haben Sie weitere Fragen zum <strong>Ankauf Antiquitäten Möbel in Linz</strong>? 
            Schreiben Sie an <a href="mailto:info@antiklinz.at" className="underline">info@antiklinz.at </a> 
            oder rufen Sie <a href="tel:+436767202623" className="underline">+43&nbsp;676&nbsp;720&nbsp;26&nbsp;23</a> an – wir beraten Sie gern.
          </div>
        </div>
      </section>
            {/* SECTION 6: Kontakt & kostenlose Besichtigung – SEO-stark */}
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

          <div className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed space-y-6" style={{ color: "#2B2B2B" }}>
            <p>
              Sie planen den <strong>Ankauf Antiquitäten Möbel in Linz</strong> und möchten eine
              klare, strukturierte Abwicklung? AntikLinz steht für zügige Rückmeldung, nachvollziehbare
              Einschätzung und verlässliche Kommunikation. Ob einzelne Highlights oder eine komplette
              Einrichtung – wir begleiten Sie vom ersten Austausch bis zur Übergabe.
            </p>
            <p>
              Für eine erste Einschätzung genügt eine kurze Nachricht mit ein paar Angaben zu Ihren
              Stücken. Wenn möglich, fügen Sie Fotos und grobe Maße hinzu. Wir melden uns rasch mit
              einem Terminvorschlag für die Besichtigung in Linz oder der näheren Umgebung und
              erstellen anschließend ein Angebot mit Fixpreis. So behalten Sie jederzeit den Überblick
              und können Ihre Entscheidung gut informiert treffen.
            </p>
            <p>
              Unser Ziel ist ein fairer <strong>Ankauf Antiquitäten Möbel in Linz</strong>, der
              Substanz und Originalität Ihrer Möbel berücksichtigt. Wir achten auf Stilmerkmale,
              Erhaltungszustand, Nachfrage und stimmige Proportionen – Faktoren, die bei antiken
              Objekten den Unterschied machen. Auf Wunsch erfolgt die Auszahlung umgehend.
            </p>
          </div>

          {/* Kontakt-CTA */}
          <div className="mt-8 mx-auto max-w-2xl rounded-3xl p-6 md:p-8 shadow-sm text-center"
               style={{ background: "#fff", border: "1px solid #C2A14D" }}>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
              Schreiben Sie uns oder rufen Sie an – wir beraten Sie gern persönlich.
            </p>
            <ul className="mt-4 space-y-2 text-sm md:text-base" style={{ color: "#2B2B2B" }}>
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
                href="mailto:info@antiklinz.at?subject=Anfrage%20Ankauf%20Antiquitaeten%20Moebel%20in%20Linz"
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

          {/* Abschlussabsatz für SEO */}
          <div className="mt-10 mx-auto max-w-3xl text-center text-sm md:text-base leading-relaxed" style={{ color: "#2B2B2B" }}>
            AntikLinz ist Ihr Ansprechpartner für den <strong>Ankauf Antiquitäten Möbel in Linz</strong>.
            Vereinbaren Sie eine kostenlose Besichtigung – unkompliziert, transparent und termintreu.
          </div>
        </div>
      </section>





    </main>
  );
}

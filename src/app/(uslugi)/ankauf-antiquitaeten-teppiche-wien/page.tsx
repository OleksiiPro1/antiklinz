
import bg1 from "@/../public/images/sl-16.webp";
import bg2 from "@/../public/images/teppiche-2.webp";
import bg3 from "@/../public/images/teppiche-1.webp";
import Image from "next/image";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ankauf antiker Teppiche – Wien | Faire Preise & Sofortauszahlung",
  description:
    "Ankauf antiker Teppiche in Wien: Perser, Kaukasus, Anatolien, Seide, Kelims & seltene Stücke. Kostenlose Foto-Ersteinschätzung, marktnahe Bewertung & Sofortauszahlung.",
};


export default function Page() {
  return (
    <>
    <section className="pt-24 max-w-4xl mx-auto px-6">
      <p className="text-sm uppercase tracking-wider text-gray-500">
        Ankauf in Wien & Umgebung
      </p>
      <h1 className="text-4xl font-light leading-tight mt-1">
        Ankauf antiker Teppiche – Faire Preise & seriöse Bewertung in Wien
      </h1>
      <Image
  src={bg1}
  alt="Ankauf von Antiquitäten und Möbeln"
  className="w-full h-auto rounded"
  priority
/>

      <p className="mt-4 text-gray-700">
        Antikexperte.at kauft <strong>antike und alte Teppiche</strong> jeder Art:
        Perserteppiche, Kaukasier, anatolische Stücke, <strong>Seidenteppiche</strong>,
        Kelims und seltene Einzelstücke. Sie erhalten eine <em>kostenlose
        Foto-Ersteinschätzung</em>, ein <strong>transparentes, marktgerechtes Angebot</strong>
        und auf Wunsch die <strong>sofortige Auszahlung</strong> – bar oder per
        Echtzeit-Überweisung.
      </p>

      <p className="mt-3 text-gray-700">
        Wir kommen <strong>in ganz Wien (1–23)</strong> zu Ihnen, fahren
        <strong> bis 100&nbsp;km ins Umland</strong> und betreuen Projekte nach
        Absprache auch <strong>österreichweit</strong>. Abholung, behutsame
        Handhabung und eine diskrete, zügige Abwicklung sind für uns
        selbstverständlich.
      </p>

      <ul className="mt-5 grid gap-2 text-gray-800">
        <li>• Kostenlose Ersteinschätzung per Foto (WhatsApp/E-Mail)</li>
        <li>• Transparente Angebote auf Basis aktueller Marktwerte</li>
        <li>• Sofortauszahlung – Bar oder Echtzeit-Überweisung</li>
        <li>• Vor-Ort-Service in Wien & flexible Termine</li>
      </ul>
    </section>
    <section className="pt-10 max-w-4xl mx-auto px-6">
      <p className="text-sm uppercase tracking-wider text-gray-500">Ihre Vorteile</p>
      <h2 className="text-3xl font-semibold leading-tight mt-1">
        Warum Antikexperte.at für den Ankauf antiker Teppiche?
      </h2>

      <div className="mt-6 grid gap-6">
        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Transparente, marktnahe Preise</h3>
          <p className="text-gray-700">
            Unsere Angebote orientieren sich an <em>aktuellen Marktbeobachtungen</em>,
            dokumentierten Vergleichsstücken und der realen Nachfrage. Jede Bewertung wird
            klar begründet – Herkunft, Material, Knüpfdichte, Format und Zustand fließen
            nachvollziehbar ein.
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Fachwissen für alte & seltene Stücke</h3>
          <p className="text-gray-700">
            Ob Perser, Kaukasier, Anatolien, China/Art&nbsp;Déco, Kelims oder Seidenteppiche:
            Wir prüfen <strong>Knotenbild, Farbpalette, Wolle/Seide</strong> und Stilmerkmale
            mit sicherem Blick für Besonderheiten – auch bei signierten oder früh restaurierten
            Exemplaren.
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Schnelle, diskrete Abwicklung</h3>
          <p className="text-gray-700">
            Kostenlose Ersteinschätzung per Foto, zügige Terminfindung in Wien (1–23) und
            im Umland bis 100&nbsp;km. Auf Wunsch <strong>sofortige Auszahlung</strong> –
            bar oder per Echtzeit-Überweisung – mit Beleg. Behutsame Handhabung und
            professionelle Abholung sind selbstverständlich.
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Foto-Ersteinschätzung, die Zeit spart</h3>
          <p className="text-gray-700">
            Senden Sie Gesamtansichten, Rückseite/Knotenbild, Ecken/Fransen sowie Maße.
            So erhalten Sie schnell einen tragfähigen Richtwert; ein verbindliches Angebot
            entsteht nach Sichtung vor Ort.
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Flexibel & verlässlich</h3>
          <p className="text-gray-700">
            Termine werktags, abends und nach Absprache am Wochenende. Einzelstücke,
            Sammlungen und großzügige Formate sind willkommen – wir finden eine passende,
            strukturierte Lösung inklusive Transport.
          </p>
        </article>
      </div>

      <ul className="mt-6 grid gap-2 text-gray-800">
        <li>• Kostenlose Ersteinschätzung per WhatsApp/E-Mail</li>
        <li>• Vor-Ort-Service in Wien & Umgebung</li>
        <li>• Sofortauszahlung mit Beleg</li>
        <li>• Sorgsame Handhabung & professionelle Abholung</li>
      </ul>
    </section>
    <section className="pt-10 max-w-4xl mx-auto px-6">
      <p className="text-sm uppercase tracking-wider text-gray-500">Schwerpunkte</p>
      <h2 className="text-3xl font-semibold leading-tight mt-1">
        Was wir ankaufen – antike & alte Teppiche
      </h2>
      <Image
  src={bg3}
  alt="Ankauf von Antiquitäten und Möbeln"
  className="w-full h-auto rounded"
  priority
/>

      <p className="mt-4 text-gray-700">
        Wir suchen <strong>antike und alte Teppiche</strong> mit Charakter – vom fein
        geknüpften Stadtteppich bis zum seltenen Nomadenstück. Einzelobjekte sind ebenso
        willkommen wie Sammlungen und größere Positionen.
      </p>

      <div className="mt-6 grid gap-6">
        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Orient – Persien</h3>
          <p className="text-gray-700">
            Tabriz, Isfahan, Nain, Kerman, Kashan, Bidjar, Feraghan sowie
            <strong> Qom/Seide</strong>. Gesucht sind klassische Medaillon-Kompositionen,
            Herati- und Boteh-Muster, feine Korkwolle und ausgewogene Farbpaletten.
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Anatolien</h3>
          <p className="text-gray-700">
            Hereke (auch <strong>Seide</strong>), Oushak und Städte-/Dorfarbeiten mit
            typischer, großzügiger Zeichnung und weicher Wolle. Frühe Stücke mit stimmiger
            Patina sind besonders gefragt.
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Kaukasus</h3>
          <p className="text-gray-700">
            Kazak, Shirvan, Kuba, Karabagh: klare Geometrie, leuchtende Naturfarbtöne und
            markante Bordüren. Auch Läufer mit seltenen Feldern nehmen wir gerne auf.
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Turkmenische Arbeiten</h3>
          <p className="text-gray-700">
            Tekke/Bukhara, Yomut – charakteristische Gül-Motive, homogenes Knotenbild und
            harmonische Rot-Nuancen. Auch ältere Reparaturen sind kein Ausschlusskriterium.
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">China & Art Déco</h3>
          <p className="text-gray-700">
            1920er–40er Jahre, großflächige Felder, florale und figürliche Motive, feine
            Wolle/Seide. Beliebt sind mutige Farbkombinationen und dekorative Formate.
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Europa & Flachgewebe</h3>
          <p className="text-gray-700">
            Aubusson, Savonnerie, Tapisserien sowie <strong>Kelims/Soumak</strong> mit gut
            erhaltener Zeichnung. Auch Biedermeier- und Jugendstil-Teppiche bewerten wir
            fundiert.
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Formate & Besonderheiten</h3>
          <p className="text-gray-700">
            Läufer, Brücken, Galerien, Raumteppiche, Gebetsteppiche und Wandteppiche.
            Signaturen/Datierungen, feine Knüpfdichte, seltene Rapport-Varianten und
            ausgewogene Proportionen wirken wertsteigernd.
          </p>
        </article>
      </div>

      <ul className="mt-6 grid gap-2 text-gray-800">
        <li>• Materialien: Wolle, Korkwolle, Seide (Kette/Schuss nach Bauart)</li>
        <li>• Alter/Epoche: Nomaden- und Dorfarbeiten bis zu feinen Stadtteppichen</li>
        <li>• Zustand: authentische Patina willkommen; frühere Reparaturen einschätzbar</li>
        <li>• Unterlagen: Galerieetiketten, Rechnungen, Expertisen – falls vorhanden</li>
      </ul>
    </section>
     <section className="pt-10 max-w-4xl mx-auto px-6">
      <p className="text-sm uppercase tracking-wider text-gray-500">Transparente Bewertung</p>
      <h2 className="text-3xl font-semibold leading-tight mt-1">
        Bewertung &amp; Preisbildung – so ermitteln wir den Wert
      </h2>
      <Image
  src={bg2}
  alt="Ankauf von Antiquitäten und Möbeln"
  className="w-full h-auto rounded"
  priority
/>

      <p className="mt-4 text-gray-700">
        Für ein belastbares Angebot betrachten wir <strong>Alter &amp; Herkunft</strong>,
        <strong> Materialqualität</strong>, <strong>Knüpfdichte</strong>, <strong>Gestaltung</strong>,
        <strong> Format</strong> und den <strong>Erhaltungszustand</strong>. Ergänzend wirken
        <strong> Seltenheit</strong> und <strong>Provenienz</strong> wertbildend. Alle Kriterien
        werden klar dokumentiert – ohne Verkaufsdruck.
      </p>

      {/* Visual Grid */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {/* Herkunft & Alter */}
        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 border">
              {/* icon: map pin */}
              <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
                <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 14.5 9A2.5 2.5 0 0 1 12 11.5Z"/>
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-semibold">Herkunft &amp; Alter</h3>
              <p className="mt-1 text-gray-700">
                Region/Manufaktur (z.&nbsp;B. Tabriz, Hereke, Kazak) und Epoche geben
                Orientierung zu Seltenheit, Stil und Marktnachfrage.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full border px-2 py-0.5 text-xs">Persien</span>
                <span className="rounded-full border px-2 py-0.5 text-xs">Anatolien</span>
                <span className="rounded-full border px-2 py-0.5 text-xs">Kaukasus</span>
              </div>
            </div>
          </div>
        </article>

        {/* Material & Färbung */}
        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 border">
              {/* icon: thread */}
              <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
                <path fill="currentColor" d="M4 6a2 2 0 0 1 2-2h12a1 1 0 1 1 0 2h-1.5L10 16.5A3.5 3.5 0 1 1 4 13V6m2 0v7a1.5 1.5 0 1 0 3 0l6.5-9H6Z"/>
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-semibold">Material &amp; Färbung</h3>
              <p className="mt-1 text-gray-700">
                Wolle/Korkwolle/Seide, Griff und Glanz, Farbstabilität und stimmige Palette –
                Qualitätsmerkmale, die den Wert steigern können.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full border px-2 py-0.5 text-xs">Seide</span>
                <span className="rounded-full border px-2 py-0.5 text-xs">Korkwolle</span>
                <span className="rounded-full border px-2 py-0.5 text-xs">feine Wolle</span>
              </div>
            </div>
          </div>
        </article>

        {/* Knüpfdichte & Handarbeit */}
        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 border">
              {/* icon: grid */}
              <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
                <path fill="currentColor" d="M3 3h8v8H3V3m10 0h8v8h-8V3M3 13h8v8H3v-8m10 0h8v8h-8v-8Z"/>
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-semibold">Knüpfdichte &amp; Handarbeit</h3>
              <p className="mt-1 text-gray-700">
                Knoten/m², gleichmäßiges Knotenbild und saubere Struktur sprechen für
                handwerkliche Qualität und beeinflussen den Preis.
              </p>
              <div className="mt-2 text-xs text-gray-600">
                Hinweis: Rückseite fotografieren – das Knotenbild wird sichtbar.
              </div>
            </div>
          </div>
        </article>

        {/* Gestaltung & Format */}
        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 border">
              {/* icon: ruler */}
              <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
                <path fill="currentColor" d="M3 17.25V21h3.75l11-11L14 6.25l-11 11M17.75 3L20 5.25l-2 2L15.75 5l2-2Z"/>
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-semibold">Gestaltung &amp; Format</h3>
              <p className="mt-1 text-gray-700">
                Medaillon, Herati, Gül &amp; Co., harmonische Proportionen und gesuchte Formate
                (z.&nbsp;B. Läufer/Galerie) sind wertrelevant.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full border px-2 py-0.5 text-xs">Medaillon</span>
                <span className="rounded-full border px-2 py-0.5 text-xs">Herati</span>
                <span className="rounded-full border px-2 py-0.5 text-xs">Gül</span>
              </div>
            </div>
          </div>
        </article>

        {/* Zustand */}
        <article className="rounded-2xl border bg-white p-5 shadow-sm md:col-span-2">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 border">
              {/* icon: shield */}
              <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
                <path fill="currentColor" d="M12 2l7 3v6c0 5-3.8 9.7-7 11c-3.2-1.3-7-6-7-11V5l7-3Z"/>
              </svg>
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Erhaltungszustand &amp; Provenienz</h3>
              <p className="mt-1 text-gray-700">
                Kanten/Fransen, Florhöhe, alte Reparaturen und stimmige Geschichte (Belege,
                Etiketten, Rechnungen) wirken sich auf das Ergebnis aus.
              </p>

              {/* Einflussanzeige */}
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                <div className="rounded-xl border p-3">
                  <p className="text-xs text-gray-600">Einfluss</p>
                  <p className="text-sm font-medium">hoch</p>
                  <div className="mt-2 h-1.5 w-full rounded bg-gray-100">
                    <div className="h-1.5 rounded bg-gray-800 w-11/12" />
                  </div>
                </div>
                <div className="rounded-xl border p-3">
                  <p className="text-xs text-gray-600">Marktnachfrage</p>
                  <p className="text-sm font-medium">mittel–hoch</p>
                  <div className="mt-2 h-1.5 w-full rounded bg-gray-100">
                    <div className="h-1.5 rounded bg-gray-800 w-9/12" />
                  </div>
                </div>
                <div className="rounded-xl border p-3">
                  <p className="text-xs text-gray-600">Seltenheit</p>
                  <p className="text-sm font-medium">variabel</p>
                  <div className="mt-2 h-1.5 w-full rounded bg-gray-100">
                    <div className="h-1.5 rounded bg-gray-800 w-7/12" />
                  </div>
                </div>
              </div>

              <div className="mt-3 text-xs text-gray-600">
                Tipp: Bitte Maße (L×B) und kurze Notizen zu Besonderheiten mitschicken.
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Hinweisbox */}
      <aside className="mt-6 rounded-2xl border bg-white p-5">
        <p className="text-sm text-gray-700">
          Das endgültige Angebot entsteht nach <strong>Sichtung vor Ort</strong>. Für die
          Ersteinschätzung genügen gute Fotos (Gesamt, Rückseite, Ecken/Fransen, Detail).
          Auf Wunsch erhalten Sie eine <em>schriftliche Kurznotiz</em> zur Bewertung.
        </p>
      </aside>
    </section>
    <section className="pt-10 max-w-4xl mx-auto px-6">
      <p className="text-sm uppercase tracking-wider text-gray-500">Ablauf</p>
      <h2 className="text-3xl font-semibold leading-tight mt-1">
        So läuft der Ankauf Ihrer Teppiche ab – in 3 Schritten
      </h2>

      {/* Timeline */}
      <ol className="mt-6 relative border-l border-gray-200">
        {/* Schritt 1 */}
        <li className="mb-8 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border bg-white">
            {/* icon: chat */}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-gray-700" fill="currentColor">
              <path d="M20 2H4a2 2 0 0 0-2 2v16l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
            </svg>
          </span>
          <h3 className="text-xl font-semibold">1) Kontakt &amp; Foto-Check</h3>
          <p className="mt-2 text-gray-700">
            Senden Sie uns Bilder per E-Mail oder Messenger: <strong>Gesamtansichten</strong>,
            <strong> Rückseite/Knotenbild</strong>, <strong>Ecken/Fransen</strong> und <strong>Maße</strong>.
            So erhalten Sie rasch einen ersten Richtwert – unverbindlich und kostenlos.
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl border bg-white p-3">
              <p className="text-xs text-gray-600">Hilfreich</p>
              <ul className="mt-1 text-sm text-gray-700 list-disc pl-4 space-y-1">
                <li>Maße (L × B) und ca. Alter/Herkunft</li>
                <li>Detailfoto vom Knotenbild</li>
                <li>Hinweise zu Reparaturen/Belegen</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-3">
              <p className="text-xs text-gray-600">Reaktionszeit</p>
              <p className="mt-1 text-sm text-gray-700">In der Regel am selben Tag mit Rückfragen oder Richtwert.</p>
            </div>
          </div>
        </li>

        {/* Schritt 2 */}
        <li className="mb-8 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border bg-white">
            {/* icon: calendar */}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-gray-700" fill="currentColor">
              <path d="M7 2v2H5a2 2 0 0 0-2 2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7Zm14 8H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10Z"/>
            </svg>
          </span>
          <h3 className="text-xl font-semibold">2) Termin vor Ort</h3>
          <p className="mt-2 text-gray-700">
            Wir prüfen Material, Knüpfdichte, Gestaltung, Format und Erhaltungszustand bei Ihnen
            vor Ort (Wien 1–23 &amp; Umgebung bis ca. 100&nbsp;km). Termine sind flexibel –
            werktags, abends oder nach Absprache am Wochenende.
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
            <li>Behutsame Handhabung, klare Erläuterung aller Kriterien</li>
            <li>Auf Wunsch kurze schriftliche Notiz zur Einschätzung</li>
            <li>Amtlicher Lichtbildausweis für den Verkauf erforderlich</li>
          </ul>
        </li>

        {/* Schritt 3 */}
        <li className="ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border bg-white">
            {/* icon: check / money */}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-gray-700" fill="currentColor">
              <path d="M21 7H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-6.5 7H9a1 1 0 0 1 0-2h5.5a1 1 0 0 1 0 2Z"/>
            </svg>
          </span>
          <h3 className="text-xl font-semibold">3) Angebot &amp; Auszahlung</h3>
          <p className="mt-2 text-gray-700">
            Nach der Sichtung erhalten Sie ein <strong>verbindliches, transparentes Angebot</strong>.
            Bei Einigung zahlen wir <strong>sofort</strong> – bar oder via Echtzeit-Überweisung – und
            übernehmen die <strong>professionelle Abholung</strong> inkl. sicheren Transports.
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            <div className="rounded-xl border bg-white p-3">
              <p className="text-xs text-gray-600">Zahlung</p>
              <p className="mt-1 text-sm text-gray-700">Barzahlung oder Echtzeit-Überweisung mit Beleg</p>
            </div>
            <div className="rounded-xl border bg-white p-3">
              <p className="text-xs text-gray-600">Dokumente</p>
              <p className="mt-1 text-sm text-gray-700">Kaufbeleg für Ihre Unterlagen</p>
            </div>
            <div className="rounded-xl border bg-white p-3">
              <p className="text-xs text-gray-600">Logistik</p>
              <p className="mt-1 text-sm text-gray-700">Sorgfältige Abholung – auch bei größeren Formaten</p>
            </div>
          </div>
        </li>
      </ol>

      {/* Hinweisbox */}
      <aside className="mt-6 rounded-2xl border bg-white p-5">
        <p className="text-sm text-gray-700">
          Tipp: Fotos bei Tageslicht und ein Maßband im Bild erleichtern die Einschätzung. Je mehr
          Details wir sehen, desto präziser der Richtwert vor dem Termin.
        </p>
      </aside>
    </section>
    <section className="pt-10 max-w-4xl mx-auto px-6">
      <p className="text-sm uppercase tracking-wider text-gray-500">Ankaufsschwerpunkte</p>
      <h2 className="text-3xl font-semibold leading-tight mt-1">
        Was wir ankaufen – Stücke &amp; Epochen
      </h2>

      <p className="mt-4 text-gray-700">
        Gesucht sind <strong>antike und ältere Teppiche</strong> mit Charakter – handgeknüpft,
        mit stimmiger Gestaltung und solider Substanz. Einzelobjekte sind ebenso willkommen wie
        Sammlungen und Nachlässe.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">Persische &amp; anatolische Arbeiten</h3>
          <p className="mt-1 text-gray-700">
            Klassische Zentren und Entwürfe mit feiner Ausführung – dekorativ bis kuratorisch.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full border px-2 py-0.5 text-xs">Tabriz</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Isfahan</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Nain</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Kashan</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Hereke (Seide)</span>
          </div>
        </article>

        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">Kaukasische &amp; nomadische Stücke</h3>
          <p className="mt-1 text-gray-700">
            Charakterstarke Geometrien, satte Naturtöne, seltene Formate.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full border px-2 py-0.5 text-xs">Kazak</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Shirvan</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Qashqai</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Baluch</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Jomud</span>
          </div>
        </article>

        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">Seltene Qualitäten</h3>
          <p className="mt-1 text-gray-700">
            Hohe Knüpfdichte, Korkwolle oder Seide, signierte Arbeiten, frühe Datierungen.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full border px-2 py-0.5 text-xs">Seidenteppiche</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Korkwolle</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">signiert</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">früh datiert</span>
          </div>
        </article>

        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">Formate &amp; Einsatz</h3>
          <p className="mt-1 text-gray-700">
            Läufer, Galerieformate, große Salonstücke, Brücken, Gebetsteppiche, Kelims.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full border px-2 py-0.5 text-xs">Läufer</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Galerie</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Salon</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Gebetsteppich</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">Kelim</span>
          </div>
        </article>
      </div>

      <aside className="mt-6 rounded-2xl border bg-white p-5">
        <p className="text-sm text-gray-700">
          Uns interessieren auch <strong>ungewöhnliche Provenienzen</strong>, Werkstattetiketten
          und ältere Händleraufkleber. Bitte bei der Anfrage kurz erwähnen.
        </p>
      </aside>
    </section>
    <section className="pt-10 max-w-4xl mx-auto px-6">
      <p className="text-sm uppercase tracking-wider text-gray-500">Foto-Leitfaden</p>
      <h2 className="text-3xl font-semibold leading-tight mt-1">
        So gelingen aussagekräftige Fotos
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">Ansichten &amp; Details</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
            <li>Gesamtansicht von oben (möglichst rechteckig im Bild)</li>
            <li>Rückseite/Knotenbild (1–2 Detailfotos)</li>
            <li>Ecken/Fransen und Kantenbereiche</li>
            <li>Florhöhe im Streiflicht (bei Bedarf)</li>
          </ul>
        </article>

        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">Licht &amp; Größenangabe</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
            <li>Tageslicht oder indirektes Licht, ohne Blitz</li>
            <li>Maßband oder Zollstock mit ins Bild legen</li>
            <li>Kurze Notiz zu Alter/Herkunft, falls bekannt</li>
            <li>Hinweise zu Reparaturen oder Besonderheiten</li>
          </ul>
        </article>
      </div>

      <aside className="mt-6 rounded-2xl border bg-white p-5">
        <p className="text-sm text-gray-700">
          Wichtig: Bitte <strong>nicht vorab reinigen lassen</strong>. Eine spätere Prüfung soll die
          originale Substanz unverfälscht zeigen.
        </p>
      </aside>
    </section>
    <section className="pt-10 max-w-4xl mx-auto px-6">
      <p className="text-sm uppercase tracking-wider text-gray-500">Vor-Ort</p>
      <h2 className="text-3xl font-semibold leading-tight mt-1">
        Vor-Ort-Service in Wien &amp; Umgebung
      </h2>

      <p className="mt-4 text-gray-700">
        Wir kommen zu Ihnen in <strong>Wien (1–23)</strong> sowie ins Umland (ca.{" "}
        <strong>bis 100&nbsp;km</strong>). Termine sind flexibel – werktags, abends und auf
        Absprache am Wochenende. Auch größere Formate und mehrere Stücke werden sorgfältig
        begutachtet und sicher transportiert.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-gray-600">Flexibel</p>
          <p className="text-sm font-medium">Kurzfristige Termine möglich</p>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-gray-600">Sicher</p>
          <p className="text-sm font-medium">Behutsame Handhabung &amp; Transport</p>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <p className="text-xs text-gray-600">Transparent</p>
          <p className="text-sm font-medium">Kaufbeleg &amp; klare Kommunikation</p>
        </div>
      </div>
    </section>
            <section className="pt-10 max-w-4xl mx-auto px-6">
      <p className="text-sm uppercase tracking-wider text-gray-500">Spezialfälle</p>
      <h2 className="text-3xl font-semibold leading-tight mt-1">
        Spezialfälle &amp; hohe Einzelwerte
      </h2>

      <p className="mt-4 text-gray-700">
        Besonders gefragt sind <strong>Seidenteppiche</strong>, <strong>früh datierte Werke</strong>,
        <strong> signierte Arbeiten</strong>, seltene Galerieformate sowie Paare in passender Größe.
        Auch stimmige <strong>Provenienzen</strong> können den Wert deutlich erhöhen.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">Merkmale mit Potenzial</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
            <li>Signaturen, Werkstatt-/Händleretiketten</li>
            <li>Frühe Datierungen, museale Muster</li>
            <li>Seltene Formate (Galerie, Übergröße)</li>
          </ul>
        </article>

        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">Unterlagen &amp; Nachweise</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
            <li>Rechnungen, alte Fotos, Kataloge</li>
            <li>Expertisen oder frühere Schätzungen</li>
            <li>Herkunftsnachweise aus Sammlungen</li>
          </ul>
        </article>
      </div>

      <aside className="mt-6 rounded-2xl border bg-white p-5">
        <p className="text-sm text-gray-700">
          Hinweis: Bitte informieren Sie uns, falls frühere <strong>Reparaturen</strong> durchgeführt
          wurden. Gute Restaurierungen werden sachlich bewertet und entsprechend eingeordnet.
        </p>
      </aside>
    </section>
    <section className="pt-10 max-w-4xl mx-auto px-6">
      <p className="text-sm uppercase tracking-wider text-gray-500">Transparenz</p>
      <h2 className="text-3xl font-semibold leading-tight mt-1">
        Transparenz &amp; Dokumente
      </h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">Was Sie erhalten</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
            <li>Verbindliches Angebot mit kurzer Begründung</li>
            <li>Kaufbeleg für Ihre Unterlagen</li>
            <li>Auf Wunsch eine kompakte Bewertungsnotiz</li>
          </ul>
        </article>

        <article className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">Abwicklung</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
            <li>Sofortzahlung: Bar oder Echtzeit-Überweisung</li>
            <li>Auszahlung &amp; Abholung strukturiert und zügig</li>
            <li>Lichtbildausweis bei Verkauf erforderlich</li>
          </ul>
        </article>
      </div>
    </section>
    <section className="pt-10 max-w-4xl mx-auto px-6">
      <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
        <h2 className="text-3xl font-semibold leading-tight">Jetzt anfragen</h2>
        <p className="mt-3 text-gray-700">
          Senden Sie uns <strong>Fotos, Maße und kurze Hinweise</strong> – wir melden uns rasch mit
          einer Ersteinschätzung und Terminvorschlägen für Wien &amp; Umgebung.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:info@antikexperte.at"
            className="inline-flex items-center justify-center rounded-xl bg-gray-800 px-6 py-3 text-sm uppercase tracking-wide text-white hover:bg-black transition-colors"
          >
            E-Mail senden
          </a>
          <a
            href="https://wa.me/436767202623"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
          >
            WhatsApp-Anfrage
          </a>
        </div>
      </div>
    </section>
    <section id="faq" className="pt-10 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-semibold leading-tight">Häufige Fragen (FAQ)</h2>
      <p className="mt-2 text-gray-600">
        Kurz beantwortet: die wichtigsten Punkte rund um Bewertung, Termin und Auszahlung.
      </p>

      <div className="mt-6 space-y-4">
        <details className="group rounded-xl border bg-white p-5 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
            Kaufen Sie auch beschädigte Teppiche?
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Häufig ja – abhängig von Art und Umfang. Gute, fachgerechte Restaurierungen sind kein Ausschlusskriterium.
            Fotos helfen für eine schnelle Ersteinschätzung.
          </p>
        </details>

        <details className="group rounded-xl border bg-white p-5 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
            Reicht eine Bewertung per Foto?
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Für einen ersten Richtwert ja. Ein verbindliches Angebot erstellen wir nach der
            Begutachtung vor Ort.
          </p>
        </details>

        <details className="group rounded-xl border bg-white p-5 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
            Soll ich den Teppich vorher reinigen lassen?
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Bitte nicht. Zuerst prüfen wir die originale Substanz. Bei Bedarf geben wir eine Empfehlung
            für schonende Maßnahmen nach der Bewertung.
          </p>
        </details>

        <details className="group rounded-xl border bg-white p-5 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
            Wie schnell erhalte ich mein Geld?
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Bei Einigung erfolgt die Auszahlung <strong>sofort</strong> – bar oder per
            Echtzeit-Überweisung – inklusive Kaufbeleg.
          </p>
        </details>

        <details className="group rounded-xl border bg-white p-5 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
            Holen Sie große Teppiche selbst ab?
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Ja, wir organisieren die Abholung – auch bei engen Treppenhäusern oder schweren Formaten.
          </p>
        </details>

        <details className="group rounded-xl border bg-white p-5 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
            In welchen Regionen sind Sie unterwegs?
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Schwerpunkt <strong>Wien (1–23)</strong> und Umgebung bis etwa <strong>100&nbsp;km</strong>.
            Projekte realisieren wir regelmäßig in ganz Österreich.
          </p>
        </details>
      </div>
    </section>



    
    
    </>
  );
}

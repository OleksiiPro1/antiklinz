
import bg1 from "@/../public/images/sl-21.webp";
import bg2 from "@/../public/images/sl-42.webp";
import bg3 from "@/../public/images/sl-41.webp";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankauf historischer Banknoten – Wien | Faire Preise & Sofortauszahlung",
  description:
    "Ankauf historischer Banknoten in Wien: Österreich-Ungarn, Erste & Zweite Republik, internationale Serien. Kostenlose Foto-Ersteinschätzung, transparente Angebote & Sofortauszahlung.",
};


export default function Page() {
  return (
    <main>
      <section className="pt-28 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-light mb-6">
          Ankauf Antiquitäten Banknoten – Faire Preise &amp; bester Service in Wien
        </h1>
        <Image
  src={bg1}
  alt="Ankauf von Antiquitäten und Möbeln"
  className="w-full h-auto rounded"
  priority
/>

        <p className="text mb-6">
          Sie möchten historische <strong>Banknoten</strong> verkaufen – einzelne
          Stücke, eine Sammlung oder einen Nachlass? Bei <span className="whitespace-nowrap">Antikexperte.at</span> erhalten Sie
          eine fundierte Einschätzung und ein faires, transparent begründetes Angebot. Wir prüfen
          Erhaltung, Seltenheit, Ausgabejahr, Signaturen, Wasserzeichen, Drucktechnik sowie
          die Nachfrage am Markt – klar erklärt und ohne Druck.
        </p>

        <p className="text mb-6">
          Unser Wiener Team bewertet Noten aus Österreich-Ungarn, Erster Republik, Zweiter
          Republik sowie internationale Emissionen – von <em>Specimen</em> bis zu seltenen
          Seriennummern. Auf Wunsch erfolgt die Auszahlung sofort (Bar oder Echtzeit-Überweisung);
          Termine sind in allen Wiener Bezirken möglich, diskret und flexibel.
        </p>

        <p className="text">
          Ideal für einen schnellen Richtwert: Fotos der Vorder- und Rückseite (inkl. Details wie
          Wasserzeichen, Sicherheitsfäden und Serien). Danach erhalten Sie ein Angebot, das Hand und Fuß hat –
          nachvollziehbar, marktgerecht und serviceorientiert.
        </p>
      </section>
      <section id="warum-antikexperte" className="pt-12 max-w-4xl mx-auto px-6">
  <header className="space-y-3">
    <p className="text-sm uppercase tracking-wider text-gray-500">Banknoten Ankauf in Wien</p>
    <h2 className="text-3xl font-semibold leading-tight">
      Warum <span className="whitespace-nowrap">Antikexperte.at</span>? – Ihre Vorteile
    </h2>
    
    <p className="text-gray-700">
      Wir stehen für <strong>faire, nachvollziehbare Angebote</strong> beim Ankauf von historischen
      Banknoten. Jede Bewertung wird Schritt für Schritt erklärt – von der Erhaltung über
      Serien und Signaturen bis zu aktuellen Marktindikatoren.
    </p>
  </header>

  <div className="grid gap-6 mt-6">
    <article className="space-y-2">
      <h3 className="text-xl font-semibold">Transparente Bewertung</h3>
      <p className="text-gray-700">
        Wir berücksichtigen Erhaltungsgrade (z.&nbsp;B. UNC, AU, VF), Wasserzeichen, Sicherheitsmerkmale,
        Druckereien, Unterschriften, Seltenheit von Seriennummern (Radar, Ersatznummern) und
        Katalogreferenzen (Pick-Nummern). So erhalten Sie ein Angebot, das fachlich solide ist.
      </p>
    </article>

    <article className="space-y-2">
      <h3 className="text-xl font-semibold">Kostenlose Ersteinschätzung – auch per Foto</h3>
      <p className="text-gray-700">
        Senden Sie Vorder- und Rückseite inklusive Detailaufnahmen (Mikrotext, Faden, Prägung).
        Für Sammlungen und Nachlässe genügt oft ein kurzer Überblick; wir kommen auf Wunsch
        <strong> in allen Wiener Bezirken</strong> vorbei.
      </p>
    </article>

    <article className="space-y-2">
      <h3 className="text-xl font-semibold">Schnelle &amp; diskrete Abwicklung</h3>
      <p className="text-gray-700">
        Auszahlung auf Wunsch sofort – Bar oder per Echtzeit-Überweisung. Sie erhalten
        nachvollziehbare Unterlagen und eine zügige Terminabwicklung ohne Druck.
      </p>
    </article>

    <article className="space-y-2">
      <h3 className="text-xl font-semibold">Wiener Expertise &amp; Marktkenntnis</h3>
      <p className="text-gray-700">
        Besondere Stärke bei Österreich-Ungarn, Erster/ Zweiter Republik sowie seltenen
        Probedrucken und Mustern. Wir beobachten Auktionsresultate und die Nachfrage in Sammlerkreisen
        – Grundlage für realistische Preisbildung.
      </p>
    </article>
  </div>

  <aside className="rounded-xl border border-gray-200 p-4 mt-6">
    <p className="text-sm text-gray-600">
      Jetzt unverbindlich anfragen:{" "}
      <a
        href="https://antikexperte.at/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline underline-offset-2"
      >
        Antikexperte.at
      </a>{" "}
      – seriöser Ansprechpartner für den <em>Banknoten Ankauf Wien</em>.
    </p>
  </aside>
</section>
{/* Was wir ankaufen – Schwerpunkte (Banknoten) */}
<section id="schwerpunkte" className="pt-12 max-w-4xl mx-auto px-6">
  <header className="space-y-3">
    <p className="text-sm uppercase tracking-wider text-gray-500">Schwerpunkte</p>
    <h2 className="text-3xl font-semibold leading-tight">Was wir ankaufen – Schwerpunkte</h2>
    <Image
  src={bg2}
  alt="Ankauf von Antiquitäten und Möbeln"
  className="w-full h-auto rounded"
  priority
/>
    <p className="text-gray-700">
      Wir kaufen <strong>historische Banknoten</strong> aus Österreich und international – vom Einzelstück
      bis zur umfangreichen Sammlung. Entscheidend sind Authentizität, Erhaltung und Seltenheit.
    </p>
  </header>

  <div className="grid gap-6 mt-6">
    <article className="space-y-2">
      <h3 className="text-xl font-semibold">Österreich &amp; Donaumonarchie</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>Österreich-Ungarn (Kronen-Ausgaben, Gulden-Noten, Probedrucke)</li>
        <li>Erste &amp; Zweite Republik (Schilling-Noten, Spezialserien, Ersatznummern)</li>
        <li>Notgeld &amp; Lagerausgaben mit klarer Herkunft</li>
      </ul>
    </article>

    <article className="space-y-2">
      <h3 className="text-xl font-semibold">Seltene Varianten</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li><em>Specimen</em>, Muster, Probedrucke, Nullnummern</li>
        <li>Fehl- &amp; Testdrucke, Wasserzeichen- und Papiervarianten</li>
        <li>Außergewöhnliche Seriennummern (Radar, Repeater, Low/000001, Stern/Ersatz)</li>
      </ul>
    </article>

    <article className="space-y-2">
      <h3 className="text-xl font-semibold">International</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>Deutschland (Mark, Rentenmark, Reichsbank, frühe Bundesbank)</li>
        <li>Schweiz, Italien, Frankreich – klassische Sammlergebiete</li>
        <li>Übersee: USA Large/Small Size, Commonwealth &amp; Asien</li>
      </ul>
    </article>

    <article className="space-y-2">
      <h3 className="text-xl font-semibold">Nachlässe &amp; Sammlungen</h3>
      <p className="text-gray-700">
        Wir übernehmen die fachkundige Sichtung kompletter Alben, Dubletten und Katalogposten
        – inklusive strukturierter Aufstellung für ein nachvollziehbares Angebot.
      </p>
    </article>
  </div>
</section>

{/* So läuft der Ankauf ab – in 3 Schritten */}
<section id="ablauf" className="pt-12 max-w-4xl mx-auto px-6">
  <header className="space-y-3">
    <p className="text-sm uppercase tracking-wider text-gray-500">Ablauf</p>
    <h2 className="text-3xl font-semibold leading-tight">So läuft der Ankauf ab – in 3 Schritten</h2>
    <p className="text-gray-700">
      Kurz, klar, zügig: von der Anfrage bis zur Auszahlung begleiten wir Sie mit transparenter Kommunikation.
    </p>
  </header>

  <ol className="space-y-6 mt-6">
    <li className="space-y-2">
      <h3 className="text-xl font-semibold">1) Kontakt &amp; Fotovoranfrage</h3>
      <p className="text-gray-700">
        Senden Sie Fotos von Vorder- und Rückseite (gerade, scharf, gute Beleuchtung) plus Detailaufnahmen
        (Wasserzeichen, Sicherheitsfaden, Unterschriften, Nummernblock). Für Sammlungen genügen Übersichten.
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>Kanäle: Telefon, E-Mail, Messenger</li>
        <li>Kurze Liste mit Stückzahlen &amp; grober Einordnung hilft</li>
      </ul>
    </li>

    <li className="space-y-2">
      <h3 className="text-xl font-semibold">2) Prüfung &amp; Bewertung</h3>
      <p className="text-gray-700">
        Wir prüfen Erhaltung (UNC/AU/EF/VF …), Papier, Druckbild, Signaturen und Referenzen. Grundlage sind
        Vergleichsergebnisse, Nachfrage und Spezialliteratur. Auf Wunsch vor Ort in Wien.
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>Transparente Begründung der Wertansätze</li>
        <li>Unverbindliches Angebot mit klarer Positionierung</li>
      </ul>
    </li>

    <li className="space-y-2">
      <h3 className="text-xl font-semibold">3) Sofortankauf &amp; Auszahlung</h3>
      <p className="text-gray-700">
        Bei Einigung erfolgt die Auszahlung sofort – Bar oder per Echtzeit-Überweisung – inklusive Beleg.
        Abholung und sichere Übergabe organisieren wir flexibel.
      </p>
    </li>
  </ol>
</section>

{/* Bewertung & Preisbildung – was den Wert bestimmt */}
<section id="bewertung-preisbildung" className="pt-12 max-w-4xl mx-auto px-6">
  <header className="space-y-3">
    <p className="text-sm uppercase tracking-wider text-gray-500">Transparente Bewertung</p>
    <h2 className="text-3xl font-semibold leading-tight">Bewertung &amp; Preisbildung – was den Wert bestimmt</h2>
    <p className="text-gray-700">
      Wir kombinieren Fachkenntnis mit aktuellen Marktindikatoren – das Ergebnis ist ein realistisch begründetes Angebot.
    </p>
  </header>

  <article className="space-y-3 mt-6">
    <h3 className="text-xl font-semibold">Die wichtigsten Faktoren</h3>
    <ul className="list-disc pl-5 text-gray-700 space-y-1">
      <li><strong>Erhaltung:</strong> Falten, Knicke, Randmängel, Press-Spuren; originale Frische von Papier &amp; Farbe</li>
      <li><strong>Seltenheit:</strong> Auflage, Jahrgang, Druckerei, Varianten, Ersatznummern</li>
      <li><strong>Nummern &amp; Signaturen:</strong> besondere Sequenzen, Radar/Repeater, Low-Number, Unterschriftenkombis</li>
      <li><strong>Spezialmerkmale:</strong> Specimen, Probedrucke, Fehl- &amp; Testdrucke mit dokumentierter Herkunft</li>
      <li><strong>Nachfrage:</strong> Auktionsresultate, Sammlertrend, regionale Beliebtheit</li>
    </ul>
    <p className="text-gray-700">
      Aussagekräftige Fotos beschleunigen die Einschätzung. Ein verbindliches Angebot entsteht nach Sichtung
      der Originale – klar dokumentiert und nachvollziehbar.
    </p>
  </article>
</section>

{/* Vor-Ort-Service in Wien (alle Bezirke) */}
<section id="service-wien" className="pt-12 max-w-4xl mx-auto px-6">
  <header className="space-y-3">
    <p className="text-sm uppercase tracking-wider text-gray-500">Vor-Ort in Wien</p>
    <h2 className="text-3xl font-semibold leading-tight">Vor-Ort-Service in Wien (alle Bezirke)</h2>
    <Image
  src={bg3}
  alt="Ankauf von Antiquitäten und Möbeln"
  className="w-full h-auto rounded"
  priority
/>
    <p className="text-gray-700">
      Termine sind werktags, abends und nach Absprache am Wochenende möglich. Diskret, flexibel und mit klarer Kommunikation.
    </p>
  </header>

  <div className="grid gap-6 mt-6">
    <article className="space-y-2">
      <h3 className="text-xl font-semibold">Flexibler Terminservice</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>Schnelle Rückmeldung auf Fotoanfragen</li>
        <li>Vor-Ort-Sichtung bei Einzelnoten, Alben &amp; Nachlässen</li>
        <li>Sichere Übergabe &amp; strukturierte Abwicklung</li>
      </ul>
    </article>

    <article className="space-y-2">
      <h3 className="text-xl font-semibold">Wien 1–23</h3>
      <p className="text-gray-700">
        Wir kommen in alle Bezirke – von Innere Stadt bis Liesing. Auf Wunsch neutraler Auftritt und
        flexible Zeitfenster.
      </p>
    </article>

    <aside className="rounded-xl border border-gray-200 p-4">
      <p className="text-sm text-gray-600">
        Tipp: Flach liegende, ungeklebte Aufbewahrung in Klarsichthüllen schützt das Papier. Bitte keine
        Heftklammern oder Klebebänder verwenden.
      </p>
    </aside>
  </div>
</section>

{/* Spezielle Expertise – seltene Serien & Signaturen */}
<section id="spezialgebiet" className="pt-12 max-w-4xl mx-auto px-6">
  <header className="space-y-3">
    <p className="text-sm uppercase tracking-wider text-gray-500">Spezialgebiet</p>
    <h2 className="text-3xl font-semibold leading-tight">Spezielle Expertise – seltene Serien &amp; Signaturen</h2>
    <p className="text-gray-700">
      Wir achten auf Details, die den Unterschied machen – oft jenseits des bloßen Katalogpreises.
    </p>
  </header>

  <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-6">
    <li>Frühe Unterschriftenkombinationen &amp; seltene Schrifttypen</li>
    <li>Serienblöcke in Folge, erste/letzte Lieferungen einer Emission</li>
    <li>Dokumentierte Provenienzen aus alten Sammlungen</li>
  </ul>

  <p className="text-gray-700 mt-3">
    Solche Feinheiten können den Marktwert deutlich beeinflussen – wir erklären, warum, und belegen die Bewertung.
  </p>
</section>

{/* Beispiele aus der Praxis */}
<section id="praxis" className="pt-12 max-w-4xl mx-auto px-6">
  <header className="space-y-3">
    <p className="text-sm uppercase tracking-wider text-gray-500">Beispiele</p>
    <h2 className="text-3xl font-semibold leading-tight">Beispiele aus der Praxis</h2>
    <p className="text-gray-700">
      Zwei kurze Fallskizzen zeigen, wie Details bei Banknoten den Preis spürbar beeinflussen können.
    </p>
  </header>

  <article className="space-y-2 mt-6">
    <h3 className="text-xl font-semibold">Schilling-Serie mit Radar-Nummer</h3>
    <p className="text-gray-700">
      Eine kleine Auswahl Schilling-Noten der Zweiten Republik wurde vorgelegt – dabei eine
      Note mit <em>Radar-Seriennummer</em> und frischer Papierstruktur (nahe UNC). Durch die
      Kombination aus Erhaltung, besonderer Nummer und Nachfrage ergab sich ein Vorschlag deutlich
      über dem üblichen Katalogniveau. Der Ablauf: Fotos – Sichtung – Angebot – sofortige Auszahlung.
    </p>
  </article>

  <article className="space-y-2">
    <h3 className="text-xl font-semibold">Österreich-Ungarn Probedrucke aus altem Album</h3>
    <p className="text-gray-700">
      Ein Nachlass enthielt mehrere Probedrucke mit klarer Herkunft. Entscheidend waren Druckbild,
      Papier, Signaturen und eine dokumentierte Geschichte. Nach der Vor-Ort-Prüfung wurde ein
      positionsgenaues Angebot erstellt und unmittelbar angenommen.
    </p>
  </article>
</section>

{/* Hinweise zur Aufbewahrung */}
<section id="aufbewahrung" className="pt-12 max-w-4xl mx-auto px-6">
  <header className="space-y-3">
    <p className="text-sm uppercase tracking-wider text-gray-500">Hinweise</p>
    <h2 className="text-3xl font-semibold leading-tight">Aufbewahrung &amp; Handling</h2>
    <p className="text-gray-700">
      Sorgfältige Aufbewahrung schützt Papier und Farbe – und erleichtert die spätere Bewertung.
    </p>
  </header>

  <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-6">
    <li>Flach lagern, nicht falten; Hüllen aus geeignetem, weichmacherfreiem Material nutzen</li>
    <li>Keine Büroklammern, Kleber oder Klebebänder verwenden</li>
    <li>Direkte starke Lichtquellen und hohe Feuchte meiden</li>
    <li>Bei Durchsicht: saubere, trockene Hände oder Baumwollhandschuhe</li>
  </ul>
  <p className="text-gray-700 mt-3">
    Für eine Einschätzung genügen Fotos von Vorder- und Rückseite sowie 2–3 Detailaufnahmen.
  </p>
</section>

{/* FAQ */}
<section id="faq" className="pt-12 max-w-4xl mx-auto px-6">
  <header className="space-y-3">
    <p className="text-sm uppercase tracking-wider text-gray-500">FAQ</p>
    <h2 className="text-3xl font-semibold leading-tight">Häufige Fragen</h2>
    <p className="text-gray-700">
      Kurz und klar: Antworten auf die wichtigsten Punkte rund um Bewertung, Termin und Auszahlung.
    </p>
  </header>

  <div className="mt-6 space-y-4">
    <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
        <span>Was beeinflusst den Wert meiner Banknoten am meisten?</span>
        <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/></svg>
      </summary>
      <p className="mt-3 text-gray-700">
        Erhaltung, Seltenheit, besondere Seriennummern, Signaturen, Varianten sowie die aktuelle Nachfrage.
      </p>
    </details>

    <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
        <span>Können Sie Werte vorab per Foto nennen?</span>
        <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/></svg>
      </summary>
      <p className="mt-3 text-gray-700">
        Für einen Richtwert ja; ein verbindliches Angebot erstellen wir nach Sichtung der Originale.
      </p>
    </details>

    <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
        <span>Wie schnell erfolgt die Auszahlung?</span>
        <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/></svg>
      </summary>
      <p className="mt-3 text-gray-700">
        In der Regel sofort nach Einigung – Bar oder per Echtzeit-Überweisung, mit Beleg.
      </p>
    </details>

    <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
        <span>Kaufen Sie auch einzelne Noten?</span>
        <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/></svg>
      </summary>
      <p className="mt-3 text-gray-700">
        Ja. Einzelstücke sind ebenso willkommen wie komplette Alben und Nachlässe.
      </p>
    </details>

    <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900">
        <span>Benötigen Sie Unterlagen?</span>
        <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/></svg>
      </summary>
      <p className="mt-3 text-gray-700">
        Falls vorhanden: Kaufbelege, alte Schätzungen, Hinweise zur Herkunft. Sie helfen, den Hintergrund zu belegen.
      </p>
    </details>
  </div>
</section>

{/* Abschluss-CTA */}
<section id="kontakt" className="pt-12 max-w-4xl mx-auto px-6">
  <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
    <h2 className="text-2xl font-semibold">Unverbindliche Einschätzung anfragen</h2>
    <p className="text-gray-700 mt-2">
      Schicken Sie uns jetzt Fotos Ihrer Banknoten (Vorder-/Rückseite + Details). Wir melden uns zeitnah
      mit einem klar begründeten Vorschlag.
    </p>
    <p className="text-sm text-gray-600 mt-3">
      <a
        href="https://antikexperte.at/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline underline-offset-2"
      >
        Antikexperte.at
      </a>{" "}
      – fair, diskret und serviceorientiert in ganz Wien.
    </p>
  </div>
</section>

    </main>
  );
}

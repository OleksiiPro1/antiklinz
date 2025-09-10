import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankauf Antiquitäten, Silber & Schmuck – Wien | Faire Preise & Sofortauszahlung",
  description:
    "Ankauf von Silber, Schmuck & Antiquitäten in Wien: Foto-Erstbewertung gratis, marktnahe Preise, diskrete Abwicklung & Sofortauszahlung. Termine Wien & Umland.",
};


// Статические импорты из /public (оставляю твои пути — если alias "@" указывает на src, то путь с ../ корректен)
import bg1 from "@/../public/images/sl-19.webp";
import bg2 from "@/../public/images/sl-39.webp";
import bg3 from "@/../public/images/sl-38.webp";
import bg4 from "@/../public/images/sl-37.webp";
import bg5 from "@/../public/images/sl-36.webp";



export default function Page() {
  return (
<>
    <section className="pt-12 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-light mb-6">
        Ankauf Antiquitäten Silber & Schmuck – Faire Preise & bester Service in Wien
      </h1>

       <div className="mb-6">
        <Image
  src={bg1}
  alt="Ankauf von Antiquitäten und Möbeln"
  className="w-full h-auto rounded"
  priority
/>
      </div>
      </section>
    <section className="pt-1 pb-20 max-w-4xl mx-auto px-6">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wider text-gray-500">Ankauf in Wien</p>
          <h2 className="text-3xl font-semibold leading-tight">
            Warum <span className="whitespace-nowrap">Antikexperte.at</span>? – Ihre Vorteile auf einen Blick
          </h2>
          <p className="text-gray-700">
            Antikexperte.at steht für seriösen Ankauf von{" "}
            <strong>Antiquitäten, Silber &amp; Schmuck</strong> in Wien. Mit geprüfter Expertise, klarer Kommunikation
            und zügiger Abwicklung erhalten Sie ein Angebot, das Hand und Fuß hat – diskret, nachvollziehbar und
            ohne Verkaufsdruck.
          </p>
        </header>

        <div className="grid gap-8">
          <article className="space-y-2">
            <h3 className="text-xl font-semibold">Faire, transparente Preise</h3>
            <p className="text-gray-700">
              Wir orientieren uns an <em>tagesaktuellen Marktwerten</em> (Auktionsresultate, Händlernetzwerk) sowie an
              den <em>Edelmetallkursen</em> für Gold, Silber und Platin. Jedes Angebot wird schrittweise erklärt –
              inklusive Zustand, Seltenheit, Hersteller und Nachfrage. Sie wissen genau, wofür Sie bezahlt werden.
            </p>
          </article>

          <article className="space-y-2">
            <h3 className="text-xl font-semibold">Kostenlose Erstbewertung – auch per Foto</h3>
            <p className="text-gray-700">
              Senden Sie uns Bilder und kurze Infos bequem per E-Mail oder Messenger. Für umfangreichere Nachlässe
              kommen wir gerne <strong>vor Ort in Wien (1.–23. Bezirk)</strong> vorbei. Die Einschätzung ist unverbindlich
              und kostenlos – ideal, um einen schnellen ersten Richtwert zu erhalten.
            </p>
          </article>

          <article className="space-y-2">
            <h3 className="text-xl font-semibold">Diskret &amp; schnell bezahlt</h3>
            <p className="text-gray-700">
              Auf Wunsch erfolgt die Auszahlung <strong>sofort</strong> – Barzahlung oder Echtzeit-Überweisung. Abholung,
              Bestandsaufnahme und Belegstellung laufen strukturiert und diskret. Wenn nötig, bieten wir flexible
              Termine am Abend oder am Wochenende.
            </p>
          </article>

          <article className="space-y-2">
            <h3 className="text-xl font-semibold">Wiener Fachbetrieb mit ausgewiesener Expertise</h3>
            <p className="text-gray-700">
              Unser Team ist spezialisiert auf <strong>Silber</strong> (Sterling 925, 800/835/900),{" "}
              <strong>Schmuck &amp; Uhren</strong> (Gold, Platin, Diamanten, Edelsteine) sowie Objekte der{" "}
              <strong>Wiener Werkstätte, Biedermeier, Jugendstil &amp; Art Déco</strong>. Jahrzehntelange Erfahrung und
              präzise Prüfmethoden sorgen für realistische, marktnahe Angebote.
            </p>
          </article>
        </div>

        <aside className="rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-600">
            Mehr über uns:{" "}
            <a
              href="https://antikexperte.at/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2"
            >
              Antikexperte.at
            </a>{" "}
            – Ihr Ansprechpartner für den seriösen Ankauf in Wien und Umgebung.
          </p>
        </aside>
        <div className="mb-6">
        <Image
  src={bg2}
  alt="Ankauf von Antiquitäten und Möbeln"
  className="w-full h-auto rounded"
  priority
/>
      </div>
      </div>
       </section>
    
        <section className="pt-1 pb-20 max-w-4xl mx-auto px-6">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wider text-gray-500">Ankaufsschwerpunkte</p>
          <h2 className="text-3xl font-semibold leading-tight">Was wir ankaufen – Schwerpunkte</h2>
          <p className="text-gray-700">
            Antikexperte.at kauft <strong>Antiquitäten, Silber und Schmuck</strong> in Wien und Umgebung an –
            fachkundig, transparent und mit einem klaren Blick für Qualität, Zustand und Provenienz. Einzelstücke sind
            ebenso willkommen wie komplette Sammlungen oder Nachlässe.
          </p>
        </header>

        {/* Silber & Tafelsilber */}
        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Silber &amp; Tafelsilber</h3>
          <p className="text-gray-700">
            Gesucht sind <strong>Sterling 925</strong> sowie klassische Feingehalte wie <strong>800/835/900</strong> –
            vom Besteckservice bis zum Solitärstück. Wir prüfen Punzen, Machart und Gewicht, berücksichtigen
            Manufakturen und dekorative Epochen.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Bestecke, Vorlegebestecke, Servierteile</li>
            <li>Kannen, Teeservices, Leuchter, Tabletts</li>
            <li>Dosen, Becher, Pokale, Rahmen</li>
            <li>Wiener Arbeit &amp; signierte Werkstätten</li>
          </ul>
          <p className="text-gray-700">
            Unser Ziel: marktnahe Angebote für <em>Silber Ankauf Wien</em> – nachvollziehbar erklärt und zügig abgewickelt.
          </p>
        </article>

        {/* Schmuck & Uhren */}
        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Schmuck &amp; Uhren</h3>
          <p className="text-gray-700">
            Wir bewerten <strong>Gold- und Platinschmuck</strong> (z. B. 585/750/900/950) ebenso wie Vintage-Stücke
            mit Diamanten und Farbedelsteinen. Zusätzlich interessieren uns mechanische <strong>Armband- und
            Taschenuhren</strong>.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Ringe, Colliers, Armreifen, Ohrringe, Broschen</li>
            <li>Diamanten (4C), Saphir, Rubin, Smaragd u. a.</li>
            <li>Altgold &amp; Bruchgold, Schmuck aus Nachlässen</li>
            <li>Marken- und Manufakturuhren, Chronographen</li>
          </ul>
          <p className="text-gray-700">
            Für den <em>Schmuck Ankauf in Wien</em> erhalten Sie eine klare Einschätzung zu Material, Steinen und
            Erhaltungszustand – auf Wunsch mit sofortiger Auszahlung.
          </p>
        </article>

        {/* Antike Kunst & Design */}
        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Antike Kunst &amp; Design</h3>
          <p className="text-gray-700">
            Wir schätzen Objekte von <strong>Biedermeier</strong> über <strong>Jugendstil</strong> und{" "}
            <strong>Art Déco</strong> bis zur <strong>Wiener Werkstätte</strong>. Wichtig sind Entwürfe,
            Signaturen, originale Oberflächen und überzeugende Provenienzen.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Skulpturen, Kleinplastiken, dekorative Objekte</li>
            <li>Wiener Werkstätte: Silber, Entwürfe, signierte Stücke</li>
            <li>Rahmen, Spiegel, Kleinmöbel mit Stilcharakter</li>
            <li>Grafik und Handzeichnungen mit Künstlernachweis</li>
          </ul>
          <p className="text-gray-700">
            Besonders gefragt: qualitätsvolle Arbeiten mit guter Dokumentation – ideal für den <em>Antiquitäten Ankauf Wien</em>.
          </p>
        </article>

        {/* Porzellan & Glas */}
        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Porzellan &amp; Glas</h3>
          <p className="text-gray-700">
            Gefragt sind Service, Figuren und dekorative Stücke etablierter Manufakturen sowie anspruchsvolles{" "}
            <strong>Glas</strong> aus Wien und Böhmen.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Porzellan: Service, Terrinen, Deckelvasen, Figuren</li>
            <li>Manufakturen (u. a. Augarten, Meissen, Herend)</li>
            <li>Glas: Lobmeyr, Loetz, graviertes und emailliertes Glas</li>
            <li>Besondere Dekore, limitierte Serien, Künstlerentwürfe</li>
          </ul>
          <p className="text-gray-700">
            Aussagekräftige Fotos helfen bei der ersten Einschätzung; gerne vereinbaren wir einen Termin in Wien.
          </p>
        </article>

        {/* Münzen & Medaillen */}
        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Münzen &amp; Medaillen</h3>
          <p className="text-gray-700">
            Wir kaufen historische und moderne <strong>Gold- und Silbermünzen</strong>, Sammlungsauflösungen sowie
            Medaillen an. Beachtet werden Erhaltungsgrad, Prägejahr, Seltenheit und Komplettheit.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Österreichische Prägungen: Kronen, Gulden, Schilling</li>
            <li>Gedenkmünzen, Dukaten, Philharmoniker</li>
            <li>Sammlungen in Alben, Kapseln oder Etuis</li>
            <li>Nachlässe und Einzelstücke</li>
          </ul>
          <p className="text-gray-700">
            Für den <em>Münzen Ankauf</em> erstellen wir ein faires Angebot – transparent und gut nachvollziehbar.
          </p>
        </article>

        <aside className="rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-600">
            Tipp: Senden Sie uns vorab Fotos (Front, Rückseite, Details, Punzen). Das beschleunigt die Einschätzung und
            hilft bei der Terminplanung in Wien (1.–23. Bezirk).
          </p>
        </aside>
        <div className="mb-6">
        <Image
  src={bg3}
  alt="Ankauf von Antiquitäten und Möbeln"
  className="w-full h-auto rounded"
  priority
/>
      </div>
      </div>
    </section>
    <section className="pt-1 pb-20 max-w-4xl mx-auto px-6">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wider text-gray-500">Ablauf</p>
          <h2 id="ankauf-ablauf-title" className="text-3xl font-semibold leading-tight">
            So läuft der Ankauf ab – in 3 Schritten
          </h2>
          <p className="text-gray-700">
            Mit <strong>Antikexperte.at</strong> gelangen Sie zügig und transparent zum Angebot: kurze Wege, klare
            Kommunikation und auf Wunsch sofortige Auszahlung in ganz Wien (1.–23. Bezirk).
          </p>
        </header>

        <ol className="space-y-8">
          {/* Schritt 1 */}
          <li className="space-y-3">
            <h3 className="text-xl font-semibold">1) Kontakt &amp; Fotovoranfrage</h3>
            <p className="text-gray-700">
              Senden Sie uns Fotos und kurze Angaben bequem per E-Mail oder Messenger. Nützlich sind Gesamtansichten
              und Details (Punzen, Stempel, Signaturen). Nennen Sie – wenn möglich – Maße, Gewicht und besondere Merkmale.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Kanäle: Telefon, E-Mail, WhatsApp</li>
              <li>Für Sammlungen/Nachlässe: einige Übersichtsfotos genügen für die Ersteinschätzung</li>
              <li>Diskret, unverbindlich, ohne Verkaufsdruck</li>
            </ul>
          </li>

          {/* Schritt 2 */}
          <li className="space-y-3">
            <h3 className="text-xl font-semibold">2) Kostenlose Bewertung – vor Ort oder im Showroom</h3>
            <p className="text-gray-700">
              Wir prüfen Material, Ausführung, Epoche und Erhaltung. Dabei kommen bewährte Methoden zum Einsatz:
              Edelmetallprüfung, Diamant- und Edelsteincheck, Sichtung von Punzen und Meisterzeichen sowie Abgleich
              mit Markt- und Vergleichswerten.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Termin in Wien (alle Bezirke) – flexibel, auch kurzfristig</li>
              <li>Transparente Preisargumentation: Materialwert, Seltenheit, Hersteller, Nachfrage</li>
              <li>Schriftliche Zusammenfassung auf Wunsch möglich</li>
            </ul>
            <p className="text-gray-700">
              Sie entscheiden in Ruhe. Die Bewertung bleibt kostenfrei und unverbindlich.
            </p>
          </li>

          {/* Schritt 3 */}
          <li className="space-y-3">
            <h3 className="text-xl font-semibold">3) Sofortankauf &amp; Auszahlung</h3>
            <p className="text-gray-700">
              Stimmen Sie zu, erfolgt der Ankauf unmittelbar. Sie erhalten <strong>sofort</strong> Ihr Geld –
              Barzahlung oder Echtzeit-Überweisung – samt Kaufbeleg. Bei größeren Posten organisieren wir die
              Abholung inkl. sicherer Verpackung und tragen die Logistik.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Klarer Kaufvertrag / Beleg für Ihre Unterlagen</li>
              <li>Zuverlässige Terminabwicklung, diskret und strukturiert</li>
              <li>Auch Einzelstücke willkommen – nicht nur komplette Sammlungen</li>
            </ul>
          </li>
        </ol>

        <aside className="rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-600">
            Tipp: Detailfotos (Punzen, Signaturen, Werknummern) beschleunigen die Einschätzung. Jetzt anfragen:{" "}
            <a
              href="https://antikexperte.at/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2"
            >
              Antikexperte.at
            </a>
            .
          </p>
        </aside>
        <div className="mb-6">
        <Image
  src={bg4}
  alt="Ankauf von Antiquitäten und Möbeln"
  className="w-full h-auto rounded"
  priority
/>
      </div>
      </div>
    </section>
    
     
     <section className="pt-1 pb-20 max-w-4xl mx-auto px-6">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wider text-gray-500">Transparente Bewertung</p>
          <h2 id="bewertung-preisbildung-title" className="text-3xl font-semibold leading-tight">
            Bewertung &amp; Preisbildung – was den Wert bestimmt
          </h2>
          <p className="text-gray-700">
            Bei <strong>Antikexperte.at</strong> erhalten Sie eine <em>klar nachvollziehbare</em> Einschätzung:
            Wir kombinieren Fachwissen, Marktbezug und präzise Prüfmethoden – ideal für den{" "}
            <em>Antiquitäten Ankauf in Wien</em>.
          </p>
        </header>

        {/* Wertfaktoren */}
        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Die wichtigsten Wertfaktoren</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              <strong>Zustand &amp; Originalität:</strong> Erhaltung, stimmige Patina, passende Teile/Beschläge und
              möglichst unveränderte Ausführung.
            </li>
            <li>
              <strong>Seltenheit &amp; Nachfrage:</strong> limitierte Serien, gefragte Epochen und Motive, aktuelle
              Sammeltrends.
            </li>
            <li>
              <strong>Hersteller &amp; Handschrift:</strong> namhafte Werkstätten, signierte Arbeiten, charakteristische
              Stilmerkmale.
            </li>
            <li>
              <strong>Provenienz &amp; Dokumentation:</strong> Herkunftsnachweise, Rechnungen, Kataloge, Zertifikate,
              Expertise.
            </li>
            <li>
              <strong>Markt- &amp; Vergleichswerte:</strong> aktuelle Ergebnisse, Händlernetzwerk, Materialpreise.
            </li>
          </ul>
          <p className="text-gray-700">
            Aus diesen Bausteinen entsteht ein <strong>transparentes Angebot</strong> – klar erläutert, schriftlich
            zusammengefasst, auf Wunsch mit Fotos der relevanten Merkmale.
          </p>
        </article>

        {/* Silber richtig erkennen */}
        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Silber richtig erkennen</h3>
          <p className="text-gray-700">
            Bei <strong>Silber</strong> prüfen wir Feingehalte, Punzen und Meisterzeichen sowie Gewicht und Machart.
            Typische Legierungen sind <strong>800/835/900</strong> und <strong>Sterling 925</strong>.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              <strong>Punzen &amp; Zeichen:</strong> Feingehaltszahlen, Stadt-/Meistermarken, Import- und
              Kontrollstempel.
            </li>
            <li>
              <strong>Ausführung:</strong> handgetriebene Arbeiten, Guss- und Schmiedetechnik, Gravuren, Monogramme.
            </li>
            <li>
              <strong>Einordnung:</strong> Epoche, Stil und Manufaktur erhöhen den Sammlerwert über den reinen
              Materialwert hinaus.
            </li>
          </ul>
          <p className="text-gray-700">
            Ergebnis: eine <em>marktnahe</em> Bewertung für den <em>Silber Ankauf Wien</em>, nachvollziehbar erklärt.
          </p>
        </article>

        {/* Diamant- & Edelsteinprüfung */}
        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Diamant- &amp; Edelsteinprüfung</h3>
          <p className="text-gray-700">
            Bei <strong>Schmuck</strong> betrachten wir Material, Fassungen und Steine. Diamanten bewerten wir nach den{" "}
            <strong>4C</strong> (Carat, Color, Clarity, Cut). Ergänzend fließen Design, Marke und Zustand ein.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              <strong>Materialanalyse:</strong> Feingehalte (z. B. 333/375/585/750 Gold; 950 Platin), Gewicht,
              Verarbeitung.
            </li>
            <li>
              <strong>Edelsteine:</strong> Schliffqualität, Farbe, Reinheit, Proportionen; bei Farbedelsteinen Charakter
              und Seltenheit.
            </li>
            <li>
              <strong>Gesamteindruck:</strong> Authentizität, Originalität der Teile, Tragbarkeit und Stilwirkung.
            </li>
          </ul>
          <p className="text-gray-700">
            Das Resultat ist eine <strong>realistische Preisfindung</strong> für den <em>Schmuck Ankauf in Wien</em> –
            zügig, verständlich und ohne Druck.
          </p>
        </article>

        {/* Transparenz & Ablaufhinweise */}
        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Transparenz bei der Preisbildung</h3>
          <p className="text-gray-700">
            Wir erläutern jeden Faktor – vom Material bis zur Nachfrage. <strong>Fotos</strong> helfen für eine erste
            Einschätzung, ein verbindliches Angebot entsteht nach der Sichtung vor Ort oder im Showroom in Wien.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Schriftliche Kurznotiz zur Bewertung auf Wunsch</li>
            <li>Klarer Ablauf: Kontakt → Prüfung → Angebot → Auszahlung</li>
            <li>Auch Einzelstücke willkommen – nicht nur Sammlungen</li>
          </ul>
        </article>

        <aside className="rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-600">
            Tipp: Legen Sie – wenn vorhanden – Belege, Zertifikate oder alte Fotos bereit. Das kann den Wert präziser
            belegen und die Preisfindung beschleunigen. Jetzt anfragen über{" "}
            <a
              href="https://antikexperte.at/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2"
            >
              Antikexperte.at
            </a>
            .
          </p>
        </aside>
        <div className="mb-6">
        <Image
  src={bg5}
  alt="Ankauf von Antiquitäten und Möbeln"
  className="w-full h-auto rounded"
  priority
/>
      </div>
      </div>
    </section>

    <section className="pt-1 pb-20 max-w-4xl mx-auto px-6">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wider text-gray-500">Vor-Ort in Wien</p>
          <h2 id="service-wien-title" className="text-3xl font-semibold leading-tight">
            Vor-Ort-Service in Wien (alle Bezirke)
          </h2>
          <p className="text-gray-700">
            <strong>Antikexperte.at</strong> kommt auf Wunsch zu Ihnen – flexibel, diskret und mit klarer Kommunikation.
            Termine sind werktags, abends und nach Absprache auch am Wochenende möglich.
          </p>
        </header>

        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Flexibler Terminservice</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Schnelle Erstreaktion auf Fotoanfragen</li>
            <li>Vor-Ort-Sichtung bei Einzelstücken, Sammlungen und Nachlässen</li>
            <li>Sichere Verpackung und strukturierte Abwicklung bei größeren Posten</li>
          </ul>
        </article>

        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Wiener Bezirke (1–23)</h3>
          <p className="text-gray-700">
            Wir sind in allen Bezirken unterwegs: 1 Innere Stadt, 2 Leopoldstadt, 3 Landstraße, 4 Wieden, 5 Margareten,
            6 Mariahilf, 7 Neubau, 8 Josefstadt, 9 Alsergrund, 10 Favoriten, 11 Simmering, 12 Meidling, 13 Hietzing,
            14 Penzing, 15 Rudolfsheim-Fünfhaus, 16 Ottakring, 17 Hernals, 18 Währing, 19 Döbling, 20 Brigittenau,
            21 Floridsdorf, 22 Donaustadt, 23 Liesing.
          </p>
        </article>

        <aside className="rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-600">
            Tipp: Halten Sie – wenn vorhanden – Belege, alte Fotos oder Zertifikate bereit. Das erleichtert die
            Einordnung und beschleunigt die Angebotserstellung.
          </p>
        </aside>
      </div>
    </section>

    <section className="pt-1 pb-20 max-w-4xl mx-auto px-6">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wider text-gray-500">Spezialgebiet</p>
          <h2 id="ww-expertise-title" className="text-3xl font-semibold leading-tight">
            Spezielle Expertise – Wiener Werkstätte &amp; Jugendstil
          </h2>
          <p className="text-gray-700">
            Arbeiten der <strong>Wiener Werkstätte</strong> sowie Stücke aus <strong>Jugendstil</strong> und{" "}
            <strong>Art Déco</strong> genießen besondere Aufmerksamkeit. Entscheidend sind Entwürfe, Signaturen,
            Ausführung und stimmige Provenienzen.
          </p>
        </header>

        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Gesuchte Namen &amp; Manufakturen</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Josef Hoffmann, Koloman Moser, Dagobert Peche</li>
            <li>Wiener Werkstätte – Silberarbeiten, signierte Entwürfe</li>
            <li>Lobmeyr, Loetz, Moser – qualitätsvolle Glasarbeiten</li>
          </ul>
        </article>

        <article className="space-y-3">
          <h3 className="text-xl font-semibold">Worauf wir achten</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Entwurfs- und Werknummern, Künstlersignaturen</li>
            <li>Originale Oberflächen, Proportionen, Verarbeitung</li>
            <li>Dokumentation: Kataloge, Rechnungen, Fotos, Literatur</li>
          </ul>
          <p className="text-gray-700">
            Ergebnis: eine fundierte Einordnung über den reinen Materialwert hinaus – ideal für{" "}
            <em>Antiquitäten Ankauf Wien</em> mit Stilfokus.
          </p>
        </article>
      </div>
    </section>

    <section className="pt-1 pb-20 max-w-4xl mx-auto px-6">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wider text-gray-500">Beispiele</p>
          <h2 id="praxis-title" className="text-3xl font-semibold leading-tight">Beispiele aus der Praxis</h2>
          <p className="text-gray-700">
            Zwei kurze Fallskizzen zeigen, wie wir bewerten und welche Faktoren zu einem starken Angebot führen können.
          </p>
        </header>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Tafelsilber-Set aus Döbling</h3>
          <p className="text-gray-700">
            Umfangreiche Garnitur mit 835er-Punzen, guter Erhaltung und passender Monogramm-Historie. Neben Gewicht und
            Feingehalt waren <em>Manufaktur</em> und <em>Vollständigkeit</em> wertsteigernd. Ergebnis: Angebot deutlich
            über dem reinen Materialwert.
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-semibold">Art-Déco-Schmuck aus der Josefstadt</h3>
          <p className="text-gray-700">
            Platinring mit Altschliff-Diamant, stimmige Proportionen, elegante Fassung. Ausschlaggebend: 4C-Profil,
            Authentizität der Teile und die klassische Formensprache der Epoche. Ergebnis: marktgerechtes, transparent
            begründetes Angebot.
          </p>
        </article>
      </div>
    </section>

    <section id="faq" className="mx-auto max-w-3xl px-4 py-10 md:py-12">
      <h2 className="text-3xl font-semibold tracking-tight">Häufige Fragen (FAQ)</h2>
      <p className="mt-2 text-gray-600">
        Kurz und bündig: die wichtigsten Punkte rund um Bewertung, Termin und Auszahlung.
      </p>

      <div className="mt-8 space-y-4">
        <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow open:shadow-md">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-lg px-1 -mx-1">
            <span>Was kostet die Bewertung?</span>
            <svg
              className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
            >
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Die Einschätzung ist kostenfrei und unverbindlich – per Foto oder vor Ort in Wien.
          </p>
        </details>

        <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow open:shadow-md">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-lg px-1 -mx-1">
            <span>Kaufen Sie auch einzelne Stücke?</span>
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Ja. Einzelobjekte sind ebenso willkommen wie Sammlungen und Nachlässe.
          </p>
        </details>

        <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow open:shadow-md">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-lg px-1 -mx-1">
            <span>Können Sie Preise vorab per Foto nennen?</span>
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Für einen ersten Richtwert oft ja. Ein verbindliches Angebot entsteht nach der Sichtung.
          </p>
        </details>

        <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow open:shadow-md">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-lg px-1 -mx-1">
            <span>Wie schnell erfolgt die Auszahlung?</span>
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Nach Einigung sofort – Barzahlung oder Echtzeit-Überweisung, mit Beleg.
          </p>
        </details>

        <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow open:shadow-md">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-lg px-1 -mx-1">
            <span>Kommen Sie in alle Bezirke?</span>
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Ja, Termine sind in Wien 1–23 möglich – flexibel und zeitnah.
          </p>
        </details>

        <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow open:shadow-md">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-lg px-1 -mx-1">
            <span>Welche Unterlagen helfen bei der Bewertung?</span>
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Rechnungen, Zertifikate, alte Fotos, Maße/Gewichte und Hinweise zur Herkunft.
          </p>
        </details>

        <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow open:shadow-md">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-lg px-1 -mx-1">
            <span>Kaufen Sie auch Stücke mit Gebrauchsspuren?</span>
            <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/>
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Oft ja – je nach Art und Umfang. Senden Sie aussagekräftige Fotos zur Ersteinschätzung.
          </p>
        </details>
      </div>
    </section>
    
        
      

    
    </>
  );
}

import type { Metadata } from "next";
import ReviewsClient from "../../components/ReviewsClient";

export const metadata: Metadata = {
  title: "Bewertungen – AntikLinz",
  description:
    "Echte Kundenstimmen zu AntikLinz. Lesen Sie Erfahrungen aus Linz & Oberösterreich oder senden Sie Ihre Rückmeldung per E-Mail – ohne Registrierung.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Bewertungen – AntikLinz",
    description:
      "Kundenstimmen zu Ankauf & Räumungen in Linz. Eigene Bewertung ohne Anmeldung möglich.",
    siteName: "AntikLinz",
    locale: "de_AT",
    type: "website",
  },
  alternates: { canonical: "https://antiklinz.at/bewertungen" },
};

const BURGUNDY = "#7B2E2E";
const GOLD = "#C2A14D";
const ACCENT = `${GOLD}99`; // прозрачное золото

export default function BewertungenPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-10 max-w-5xl mx-auto px-6">
        <div
          className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-sm"
          style={{ borderColor: ACCENT }}
        >
          <p className="text-sm uppercase tracking-wider" style={{ color: BURGUNDY }}>
            AntikLinz
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-1" style={{ color: BURGUNDY }}>
            Bewertungen
          </h1>
          <p className="mt-4" style={{ color: "#2B2B2B" }}>
            Lesen Sie ausgewählte Rückmeldungen aus Linz &amp; Oberösterreich oder schicken Sie uns
            Ihre eigene Bewertung – ganz ohne Anmeldung.{" "}
            <strong>Hinweis:</strong> Eigene Einträge werden{" "}
            <em>ausschließlich lokal</em> in Ihrem Browser vorbereitet (mailto) und nicht serverseitig gespeichert.
          </p>
        </div>
      </section>

      {/* REVIEWS (client) */}
      <section className="pb-16 max-w-5xl mx-auto px-6">
        <ReviewsClient accent={ACCENT} />
      </section>

      {/* Optional: AggregateRating JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AntikLinz",
            url: "https://antiklinz.at",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "6",
            },
          }),
        }}
      />
    </>
  );
}

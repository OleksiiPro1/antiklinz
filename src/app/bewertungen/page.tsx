// src/app/bewertungen/page.tsx
import type { Metadata } from "next";
import ReviewsClient from "../../components/ReviewsClient";

export const metadata: Metadata = {
  title: "Bewertungen – Antikexperte.at",
  description:
    "Kundenstimmen & eigene Bewertung abgeben. Schnell, diskret und ohne Registrierung. Ihre Einträge werden nur lokal in Ihrem Browser gespeichert.",
};

const ACCENT = "#b38b5999";

export default function BewertungenPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-10 max-w-5xl mx-auto px-6">
        <div
          className="rounded-3xl border bg-white/80 backdrop-blur p-8 md:p-10 shadow-sm"
          style={{ borderColor: ACCENT }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Antikexperte.at
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mt-1">
            Bewertungen
          </h1>
          <p className="mt-4 text-gray-700">
            Lesen Sie ausgewählte Kundenstimmen und geben Sie bei Wunsch Ihre
            eigene Rückmeldung ab – ganz ohne Anmeldung.{" "}
            <strong>Hinweis:</strong> Eigene Einträge werden{" "}
            <em>ausschließlich lokal</em> in Ihrem Browser gespeichert
            (localStorage) und sind nur für Sie sichtbar.
          </p>
        </div>
      </section>

      {/* REVIEWS (client) */}
      <section className="pb-16 max-w-5xl mx-auto px-6">
        <ReviewsClient accent={ACCENT} />
      </section>
    </>
  );
}

"use client";

import { useMemo, useState } from "react";

type Review = {
  id: string;
  name: string;
  rating: number; // 1..5
  text: string;
  createdAt: string; // ISO
};

const seedReviews: Review[] = [
  {
    id: "seed-1",
    name: "Familie H., Linz",
    rating: 5,
    text:
      "Sehr angenehmer Kontakt, die Bewertung unserer Möbel war nachvollziehbar und das Angebot fair. Termin wurde pünktlich eingehalten.",
    createdAt: "2025-02-10T10:00:00.000Z",
  },
  {
    id: "seed-2",
    name: "M. K., Urfahr",
    rating: 5,
    text:
      "Schnelle Rückmeldung und klare Erklärung der Schritte. Die Abwicklung vor Ort war ruhig und respektvoll – absolut empfehlenswert.",
    createdAt: "2025-03-18T14:20:00.000Z",
  },
  {
    id: "seed-3",
    name: "S. R., Traun",
    rating: 5,
    text:
      "Kompetente Einschätzung von Silber und Porzellan. Auszahlung direkt im Anschluss – alles transparent.",
    createdAt: "2025-04-22T09:15:00.000Z",
  },
  {
    id: "seed-4",
    name: "G. P., Leonding",
    rating: 5,
    text:
      "Sehr diskret bei einer Wohnungsauflösung. Gute Kommunikation, Fotos der Übergabe und Fixpreis wurden eingehalten.",
    createdAt: "2025-05-09T16:45:00.000Z",
  },
  {
    id: "seed-5",
    name: "E. T., Linz",
    rating: 5,
    text:
      "Angenehme Besichtigung, keine Hektik. Wir haben uns gut beraten gefühlt und die Sammlung zu einem fairen Preis verkauft.",
    createdAt: "2025-06-01T12:05:00.000Z",
  },
  {
    id: "seed-6",
    name: "H. W., Steyregg",
    rating: 5,
    text:
      "Zuverlässig und freundlich. Besonders die klare Erklärung der Bewertungskriterien hat überzeugt.",
    createdAt: "2025-07-14T08:30:00.000Z",
  },
];

export default function ReviewsClient({ accent }: { accent: string }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  // сортируем сидовые отзывы по дате (новые выше)
  const allReviews = useMemo(
    () =>
      [...seedReviews].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    []
  );

  const average = useMemo(() => {
    const sum = allReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / allReviews.length).toFixed(1);
  }, [allReviews]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Neue Bewertung – AntikLinz");
    const safeName = (name || "Anonym").trim();
    const body = encodeURIComponent(
      `Name: ${safeName}\nBewertung: ${rating} Sterne\n\n${text.trim()}\n\n— gesendet von der Bewertungsseite`
    );
    return `mailto:info@antiklinz.at?subject=${subject}&body=${body}`;
  }, [name, rating, text]);

  const STAR_ON = "★";
  const STAR_OFF = "★";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* SUMMARY / BADGE */}
      <div className="lg:col-span-1">
        <div
          className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm"
          style={{ borderColor: accent }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold leading-tight">Kundenstimmen</h2>
            <div className="text-yellow-500" aria-label={`${average} von 5 Sternen`}>
              {STAR_ON.repeat(5)}
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Durchschnitt: <strong>{average}/5</strong> ({allReviews.length} Bewertungen)
          </p>
          <p className="mt-4 text-gray-700">
            Rückmeldungen aus Linz &amp; Umgebung zu Ankauf, Beratung und Räumungen. Danke für Ihr Vertrauen!
          </p>
        </div>

        {/* FORM */}
        <div
          className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm mt-8"
          style={{ borderColor: accent }}
        >
          <h3 className="text-xl font-semibold leading-tight">Eigene Bewertung</h3>
          <p className="mt-2 text-sm text-gray-600">
            Ihre Nachricht wird per E-Mail vorbereitet (mailto) – ohne Registrierung.
          </p>

          <div className="mt-5 space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Name (optional)</label>
              <input
                className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                style={{ borderColor: accent }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="z. B. M. H., Linz"
                maxLength={80}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Bewertung</label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    aria-label={`${n} Sterne`}
                    className={`h-8 w-8 rounded-md border flex items-center justify-center ${
                      n <= rating ? "bg-yellow-400/80" : "bg-white"
                    }`}
                    style={{ borderColor: accent }}
                  >
                    ★
                  </button>
                ))}
                <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700">
                Ihre Nachricht <span className="text-red-500">*</span>
              </label>
              <textarea
                className="mt-1 w-full rounded-lg border px-3 py-2 min-h-[120px] outline-none focus:ring"
                style={{ borderColor: accent }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Kurze Rückmeldung zu Service, Bewertung, Abwicklung…"
                maxLength={1000}
              />
              <div className="mt-1 text-xs text-gray-500">Max. 1000 Zeichen.</div>
            </div>

            <a
              href={text.trim() ? mailtoHref : undefined}
              onClick={(e) => {
                if (!text.trim()) {
                  e.preventDefault();
                  alert("Bitte geben Sie eine kurze Nachricht ein.");
                }
              }}
              className="inline-flex justify-center rounded-xl border px-4 py-2 text-sm text-gray-800 hover:text-black disabled:opacity-50"
              style={{ borderColor: accent }}
              aria-disabled={!text.trim()}
            >
              Per E-Mail senden
            </a>
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="lg:col-span-2">
        <div className="mt-0 grid gap-4">
          {allReviews.map((r) => (
            <article
              key={r.id}
              className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm"
              style={{ borderColor: accent }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-gray-900">{r.name}</h3>
                <div className="text-yellow-500" aria-label={`${r.rating} Sterne`}>
                  {STAR_ON.repeat(r.rating)}
                  <span className="text-gray-300">{STAR_OFF.repeat(5 - r.rating)}</span>
                </div>
              </div>
              <p className="mt-2 text-gray-800">{r.text}</p>
              <p className="mt-3 text-xs text-gray-500">
                {new Date(r.createdAt).toLocaleDateString("de-AT")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

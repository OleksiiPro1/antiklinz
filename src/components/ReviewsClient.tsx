// src/app/components/ReviewsClient.tsx
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
    name: "M. H., Wien",
    rating: 5,
    text: "Sehr freundlich, klare Bewertung und faire Preise. Abwicklung war schnell und diskret.",
    createdAt: "2025-01-10T10:00:00.000Z",
  },
  {
    id: "seed-2",
    name: "Familie K., Döbling",
    rating: 5,
    text: "Hausbesuch am selben Tag, alles transparent erklärt. Gerne wieder!",
    createdAt: "2025-03-22T14:20:00.000Z",
  },
  {
    id: "seed-3",
    name: "S. R., Baden",
    rating: 5,
    text: "Kompetente Einschätzung unserer Erbstücke, verlässliche Auszahlung.",
    createdAt: "2025-05-04T09:15:00.000Z",
  },
];

export default function ReviewsClient({ accent }: { accent: string }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Neue Bewertung – Antikexperte.at");
    const body = encodeURIComponent(
      `Name: ${name.trim() || "Anonym"}\nBewertung: ${rating} Sterne\n\n${text.trim()}\n\n— gesendet von der Bewertungsseite`
    );
    return `mailto:info@antikexperte.at?subject=${subject}&body=${body}`;
  }, [name, rating, text]);

  const allReviews = seedReviews; // только статичные отзывы

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* FORM */}
      <div
        className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm lg:col-span-1"
        style={{ borderColor: accent }}
      >
        <h2 className="text-2xl font-semibold leading-tight">Eigene Bewertung</h2>
        <p className="mt-2 text-sm text-gray-600">
          Ihre Nachricht wird direkt über Ihr E-Mail-Programm versendet.
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Name (optional)</label>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring"
              style={{ borderColor: accent }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="z. B. M. H., Wien"
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

      {/* LIST */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-semibold leading-tight">Kundenstimmen</h2>

        <div className="mt-4 grid gap-4">
          {allReviews.map((r) => (
            <article
              key={r.id}
              className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm"
              style={{ borderColor: accent }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-gray-900">{r.name}</h3>
                <div className="text-yellow-500" aria-label={`${r.rating} Sterne`}>
                  {"★".repeat(r.rating)}
                  <span className="text-gray-400">
                    {"★".repeat(5 - r.rating)}
                  </span>
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

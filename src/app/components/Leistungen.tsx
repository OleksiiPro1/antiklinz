import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";

type ServiceItem = {
  slug: string;
  title?: string;
  description?: string;
  image?: string;
  width?: number;
  height?: number;
  alt?: string;
  date: string;
  excerpt: string;
};

// Brand palette
const BURGUNDY = "#7B2E2E";
const GOLD     = "#C2A14D";
const GREEN    = "#2E4B3C";
const BASE     = "#F7F3ED";
const GRAPHITE = "#2B2B2B";

export default function Leistungen() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {(services as ServiceItem[]).map((s) => {
        const displayTitle = (s.title ?? "").trim() || "Unsere Leistung";
        const altText =
          (s.alt ?? s.title ?? "").trim() ||
          "AntikLinz – Antiquitäten & Leistungen in Linz";
        const headingId = `svc-${s.slug}-h2`;

        return (
          <article
            key={s.slug}
            className="group rounded-2xl border bg-white transition hover:shadow-md"
            style={{ borderColor: GOLD }}
          >
            {/* Изображение — пока у всех одинаковое */}
            <div className="overflow-hidden rounded-t-2xl">
              <Image
                src="/images/antiklinz-3.webp"
                alt={altText}
                width={800}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                loading="lazy"
              />
            </div>

            {/* Контент */}
            <div className="p-5">
              {/* Заголовок — ЕДИНСТВЕННАЯ ссылка */}
              <h2
                id={headingId}
                className="text-xl font-semibold tracking-tight"
                style={{ color: BURGUNDY }}
              >
                <Link
                  href={`/${s.slug}`}
                  rel="bookmark"
                  className="transition-colors hover:underline underline-offset-[6px] decoration-2"
                  style={{ textDecorationColor: GOLD }}
                >
                  {displayTitle}
                  <span className="sr-only"> – mehr erfahren</span>
                </Link>
              </h2>

              {/* Метаданные */}
              {s.date && (
                <p className="mt-1 text-xs" style={{ color: GREEN }}>
                  <time dateTime={s.date}>{s.date}</time>
                </p>
              )}

              {/* Тексты */}
              {s.excerpt && (
                <p className="mt-3 text-sm leading-relaxed" style={{ color: GRAPHITE }}>
                  {s.excerpt}
                </p>
              )}
              {s.description && (
                <p className="mt-2 text-sm leading-relaxed" style={{ color: GRAPHITE }}>
                  {s.description}
                </p>
              )}

              {/* Небольшой нижний акцент */}
              <div className="mt-4 h-px w-full" style={{ background: GOLD }} />
              <div className="mt-4 flex items-center justify-between">
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-1 text-xs"
                  style={{ background: `${GREEN}22`, color: GREEN }}
                >
                  Linz & Umgebung
                </span>
                <Link
                  href={`/${s.slug}`}
                  className="text-sm font-medium"
                  style={{ color: BURGUNDY }}
                >
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

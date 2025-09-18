import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/content/services';

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
const PLUM = '#4A235A';
const CORAL = '#FF6F61';
const MINT  = '#A8E6CF';
const SAND  = '#F5E6CC';
const TEAL  = '#006D77';

export default function Leistungen() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {(services as ServiceItem[]).map((s) => {
        const displayTitle = (s.title ?? '').trim() || 'Unsere Leistung';
        const altText = (s.alt ?? s.title ?? '').trim() || 'Symbolfoto: Leistung';
        const headingId = `svc-${s.slug}-h2`;

        return (
          <article
            key={s.slug}
            className="group rounded-2xl border bg-white transition hover:shadow-md"
            style={{ borderColor: SAND }}
          >
            {/* Изображение НЕ кликабельно */}
            {s.image && s.width && s.height ? (
              <div className="overflow-hidden rounded-t-2xl">
                <Image
                  src={s.image}
                  alt={altText}
                  width={s.width}
                  height={s.height}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] w-full rounded-t-2xl" style={{ background: `${MINT}55` }} />
            )}

            {/* Контент */}
            <div className="p-5">
              {/* Заголовок — ЕДИНСТВЕННАЯ ссылка */}
              <h2 id={headingId} className="text-xl font-semibold tracking-tight">
                <Link
                  href={`/${s.slug}`}
                  rel="bookmark"
                  className="transition-colors hover:underline underline-offset-[6px] decoration-2"
                  style={{ color: PLUM, textDecorationColor: CORAL }}
                >
                  {displayTitle}
                  <span className="sr-only"> – mehr erfahren</span>
                </Link>
              </h2>

              {/* Метаданные */}
              {s.date && (
                <p className="mt-1 text-xs" style={{ color: TEAL }}>
                  <time dateTime={s.date}>{s.date}</time>
                </p>
              )}

              {/* Тексты */}
              {s.excerpt && (
                <p className="mt-3 text-sm leading-relaxed" style={{ color: PLUM }}>
                  {s.excerpt}
                </p>
              )}
              {s.description && (
                <p className="mt-2 text-sm leading-relaxed" style={{ color: PLUM }}>
                  {s.description}
                </p>
              )}

              {/* Небольшой нижний акцент */}
              <div className="mt-4 h-px w-full" style={{ background: SAND }} />
              <div className="mt-4 flex items-center justify-between">
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-1 text-xs"
                  style={{ background: `${MINT}55`, color: TEAL }}
                >
                  Linz & Umgebung
                </span>
                <Link
                  href={`/${s.slug}`}
                  className="text-sm font-medium"
                  style={{ color: CORAL }}
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

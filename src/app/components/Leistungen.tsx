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
  date: string;    // '2025-08-15'
  excerpt: string; // короткое описание
};

export default function Leistungen() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 sm:px-0">
      {(services as ServiceItem[]).map((s) => {
        const displayTitle = (s.title ?? '').trim() || 'Unsere Leistung';
        const altText = (s.alt ?? s.title ?? '').trim() || 'Symbolfoto: Leistung';
        const headingId = `svc-${s.slug}-h2`;

        return (
          <article key={s.slug} className="group">
            {/* ОДНА ссылка на карточку: изображение + заголовок */}
            <Link
              href={`/${s.slug}`}
              className="block overflow-hidden rounded border border-transparent hover:border-gold transition"
              aria-labelledby={headingId}
              rel="bookmark"
            >
              {s.image && s.width && s.height ? (
                <Image
                  src={s.image}
                  alt={altText}
                  width={s.width}
                  height={s.height}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  loading="lazy"
                />
              ) : (
                <div className="aspect-[4/3] w-full rounded bg-gray-100" />
              )}

              <h2
                id={headingId}
                className="text-[#b38b59] text-xl font-medium mt-3 mb-2 group-hover:text-gold transition-colors"
              >
                {displayTitle}
              </h2>
            </Link>

            {/* Метаданные и тексты остаются вне ссылки */}
            {s.date && (
              <p className="text-gray-500 text-sm">
                <time dateTime={s.date}>{s.date}</time>
              </p>
            )}
            {s.excerpt && <p className="text-gray-500 text-sm">{s.excerpt}</p>}
            {s.description && <p className="text-gray-500 text-sm">{s.description}</p>}
          </article>
        );
      })}
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/content/posts';

export default function BlogGrid({ limit }: { limit?: number }) {
  const list = typeof limit === 'number' ? posts.slice(0, limit) : posts;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {list.map((post) => {
        const headingId = `post-${post.slug}-h2`;
        const alt = (post as any).imageAlt ?? post.title ?? 'Beitragsbild';

        return (
          <article key={post.slug} className="group">
            {/* Одна ссылка на карточку */}
            <Link
              href={`/blog/${post.slug}`}
              className="block overflow-hidden rounded"
              aria-labelledby={headingId}
              rel="bookmark"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={post.image as string}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                />
              </div>

              <h2
                id={headingId}
                className="text-[#b38b59] text-xl font-medium mt-3 mb-2 group-hover:text-gold transition-colors"
              >
                {post.title}
              </h2>
            </Link>

            <div className="text-sm text-gray-500 mb-2">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('de-AT')}
              </time>
            </div>

            <p className="text-gray-500 text-sm">{post.excerpt}</p>
          </article>
        );
      })}
    </div>
  );
}

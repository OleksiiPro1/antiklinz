import Link from "next/link";
import Image from "next/image";
import { posts } from "@/content/posts";

export const metadata = {
  title: "Blog – Tipps & Wissen – Schätzung, Ankauf, Nachlass",
  description:
    "Entdecken Sie spannende Tipps, Ratgeber und aktuelle Neuigkeiten zu Antiquitäten und Möbeln in unserem Blog",
};

const ACCENT = "#b38b59";

export default function BlogIndexPage() {
  return (
    <main className="pt-5 pb-20 max-w-6xl mx-auto px-6">
      <h1 className="text-[#b38b59] text-4xl font-light mb-10 text-center">
        Tipps & Wissen – Schätzung, Ankauf, Nachlass
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="
              group relative rounded-2xl overflow-hidden
              bg-white/80 backdrop-blur
              border border-gray-200/60
              shadow-sm
              transition-all duration-300
              hover:-translate-y-[2px] hover:shadow-lg hover:border-[#b38b59]/50
            "
          >
            {post.image && (
              <div className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  priority={false}
                />
              </div>
            )}

            <div className="p-5">
              <h2 className="text-[#b38b59] text-xl font-semibold mb-1">
                <Link
                  href={`/${post.slug}`}
                  className="hover:underline underline-offset-4 decoration-1"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="text-gray-500 text-sm mb-3">
                {new Date(post.date).toLocaleDateString("de-AT")}
              </p>

              <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>

              <div className="mt-4">
                <Link
                  href={`/${post.slug}`}
                  className="text-[color:var(--accent,#b38b59)] hover:underline underline-offset-4 decoration-1"
                  style={{ ["--accent" as any]: ACCENT }}
                >
                  Weiterlesen →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

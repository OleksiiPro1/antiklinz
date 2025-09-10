import BlogGrid from '../components/BlogGrid';
import Image from 'next/image';
import Link from 'next/link';
// import SimpleAccordion from "./components/SimpleAccordion";
import MainPageText from "./components/MainPageText";
import Leistungen from './components/Leistungen';
const GOOGLE_REVIEW_URL =
  "https://g.page/r/CeHlBmJyZKeWEBM/review";

export const metadata = {
  title: "Antik Experte - Antiquitäten, Altwaren Ankauf Wien",
  description: "Antiquitäten Ankauf, Altwaren, Verlassenschaften Ankauf Wien. Lesen Sie unsere Tipps, Ratgeber und Neuigkeiten rund um Antiquitäten und Möbel.",
};

export default function Home() {
  return (
    <main>
      <section
      className="
        relative pt-15 md:pt-15
        min-h-[40vh] md:min-h-[50vh]
        bg-[url('/images/bg-1.webp')] bg-cover bg-center
      "
    >
      {/* Лёгкая вуаль поверх фона для контраста текста */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/70" />

      <div className="relative w-[1150px] max-w-full mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Слева — контент */}
        <div className="text-center md:text-left">
          {/* Телефон-бейдж */}
          <div className="inline-flex mb-6 rounded-full border border-[#b38b5999] bg-white/70 backdrop-blur px-2 py-1">
            <Link
              href="tel:+436767202623"
              className="text-[#000000] inline-block px-5 py-2 uppercase tracking-wide text-sm hover:text-gold transition-colors"
            >
              +43 676 720 26 23
            </Link>
          </div>

          <h3 className="text-4xl md:text-5xl font-light tracking-wide mb-4 text-[#b38b59]">
            Antik Experte<br />Antiquitäten Ankauf
          </h3>

          <p className="text-[#000000] md:text-lg leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
            Professioneller Antiquitäten-Ankauf in Wien – mit Erfahrung, Transparenz
            und rascher Abwicklung.
          </p>

          {/* Кнопки отзывов — одна линия на десктопе, колонка на мобилке */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start">
            <Link
              href="/bewertungen"
              className="inline-flex items-center justify-center rounded-xl border border-[#b38b5999] bg-white/80 px-5 py-3 text-sm uppercase tracking-wide text-[#000000] hover:border-gold hover:text-gold transition-colors"
            >
              Bewertungen ansehen
            </Link>

             <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#b38b59] px-5 py-3 text-sm uppercase tracking-wide text-white hover:opacity-90 transition-opacity"
              title="Google-Bewertung schreiben"
            >
              Google-Bewertung schreiben
            </a>
          </div>

          {/* QR-код блок — компактный, не ломает компоновку на мобилках */}
           <div className="mt-6 inline-flex items-center gap-4 rounded-2xl border border-[#b38b5999] bg-white/70 backdrop-blur p-3">
            <div className="shrink-0 rounded-lg overflow-hidden border border-[#b38b5999] bg-white">
              
              <img
                src="https://antikexperte.at/images/Antik-GB.png"
                alt="QR-Code: Google-Bewertung"
                width={110}
                height={110}
                className="block w-[110px] h-[110px]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900">
                Per QR-Code bewerten
              </p>
              <p className="text-xs text-gray-600 mt-1 max-w-[18rem]">
                Kamera öffnen → QR scannen → Google-Bewertung starten.
              </p>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs underline underline-offset-4 text-[#b38b59] hover:text-black"
              >
                Link stattdessen öffnen
              </a>
            </div>
          </div> 
        </div> 

        {/* Справа — картинка */}
        <div className="relative aspect-square md:aspect-[5/4]">
          <Image
            src="/images/sl-14.webp"
            alt="Antiquitäten Ankauf"
            fill
            className="object-contain"
            sizes="(min-width:1024px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
<section className="pt-5 pb-5 max-w-6xl mx-auto px-6">
<h1 className="mt-5 text-[#b38b59] text-4xl font-light tracking-wide mb-12 text-center">Ankauf von Antiquitäten & Verlassenschaften in Wien – Ihr Antik Experte & Antiquitätenhändler
</h1>
</section>

    <section className="pt-0 pb-5 max-w-6xl mx-auto px-6">

        <Leistungen />

      </section>

      <section className="w-[1150px] max-w-full pt-5 pb-5 max-w-6xl mx-auto px-6">
        <h2 className="text-[#b38b59] text-3xl font-light tracking-wide mb-10 text-center">Tipps & Wissen – Antik Experte für Schätzung, Ankauf & Nachlass</h2>
        <BlogGrid limit={3} />
        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-block px-6 py-3 border hover:border-gold hover:text-gold uppercase text-sm tracking-wide transition"
          >
            Unser Blog →
          </a>
        </div>
      </section>
     <main>
      <MainPageText />
    </main>
      
    </main>
  );
}

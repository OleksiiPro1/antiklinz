// components/Footer.tsx
import Image from "next/image";

const ACCENT = "#b38b5999";
const CONTAINER = "mx-auto max-w-5xl px-6";

export default function Footer() {
  return (
    <footer
      className="relative mt-5 border-t"
      style={{
        // фон на всю ширину + мягкий градиент поверх
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,.60), rgba(255,255,255,.35)), url('/images/bg-1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderColor: ACCENT,
      }}
    >
      {/* ВЕСЬ КОНТЕНТ */}
      <div className={`${CONTAINER} py-10`}>
        <div
          className="rounded-3xl border bg-white/70 backdrop-blur-md shadow-sm p-8 md:p-10 text-center"
          style={{ borderColor: ACCENT }}
        >
          {/* ЛОГО */}
          <div className="flex justify-center">
            <div className="relative w-[190px] h-[96px]">
              <Image
                src="/images/logo.webp"
                alt="Antikexperte.at Logo"
                fill
                sizes="190px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* ТЕКСТ */}
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            Wiener Fachbetrieb für Ankauf & Bewertung.{" "}
            <span className="font-medium">5+ Jahre Erfahrung</span> · Wien (1–23) · bis 100&nbsp;km & österreichweit.
          </p>

          <div className="mx-auto mt-6 h-px w-24" style={{ background: ACCENT }} />

          {/* КОНТАКТЫ */}
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:+436767202623"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-base text-white hover:opacity-95 transition"
              style={{ background: ACCENT }}
            >
              <Image src="/icons/phone.webp" alt="phone" width={18} height={18} />
              +436767202623
            </a>
            <a
              href="mailto:info@antikexperte.at"
              className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-base text-gray-800 hover:text-black transition"
              style={{ borderColor: ACCENT }}
            >
              <Image src="/icons/email.webp" alt="email" width={18} height={18} />
              info@antikexperte.at
            </a>
            <a
              href="https://wa.me/436767202623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-base text-gray-800 hover:text-black transition"
              style={{ borderColor: ACCENT }}
            >
              <Image src="/icons/whatsapp.webp" alt="WhatsApp" width={22} height={22} />
              WhatsApp
            </a>
          </div>

          <div className="mx-auto mt-6 h-px w-24" style={{ background: ACCENT }} />

          {/* СОЦСЕТИ */}
          <div className="mt-5 flex justify-center gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/x_trans24?utm_source=qr&igsh=M25wM3g0bHB5djJy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white/80 transition hover:bg-white"
              style={{ borderColor: ACCENT }}
              title="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gray-800 transition group-hover:text-black"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com/@x.transport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white/80 transition hover:bg-white"
              style={{ borderColor: ACCENT }}
              title="YouTube"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gray-800 transition group-hover:text-black"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="7" width="18" height="10" rx="3" />
                <polygon points="11,10 16,12 11,14" fill="white" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@x.transport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white/80 transition hover:bg-white"
              style={{ borderColor: ACCENT }}
              title="TikTok"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gray-800 transition group-hover:text-black"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* упрощённая нота */}
                <path d="M14 3v8.2a3.8 3.8 0 1 1-2-3.3V5.5c1.2.9 2.7 1.5 4.3 1.5V9c-1.3 0-2.6-.3-3.8-.9V14a5.2 5.2 0 1 1-2.6-4.5V3h4.1Z" />
              </svg>
            </a>
          </div>

          <div className="mx-auto mt-6 h-px w-24" style={{ background: ACCENT }} />


          {/* НАВИГАЦИЯ */}
          <nav className="mt-6">
            <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
              {[
                { href: "/", label: "Startseite" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/blog", label: "Blog" },
                { href: "/impressum", label: "Impressum" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm text-gray-800 hover:text-black transition"
                  style={{ borderColor: ACCENT }}
                >
                  <span
                    aria-hidden
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: ACCENT }}
                  />
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* низ */}
      <div className={`${CONTAINER} py-6 text-center text-sm text-gray-600`}>
        © {new Date().getFullYear()} antikexperte.at · Alle Rechte vorbehalten
      </div>

      {/* плавающие кнопки оставил как было */}
      <div className="fixed z-[9999] right-4 bottom-24 md:right-8 md:bottom-28 flex flex-col gap-3">
        <a
          href="tel:+436767202623"
          aria-label="Anrufen"
          className="w-14 h-14 rounded-full bg-[url('/images/bg-2.webp')] bg-cover border border-[#b38b5999] shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          <Image src="/icons/phone.webp" alt="Call" width={22} height={22} />
        </a>
        <a
          href="https://wa.me/436767202623"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Auf WhatsApp schreiben"
          className="w-14 h-14 rounded-full bg-[url('/images/bg-2.webp')] bg-cover border border-[#b38b5999] shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          <Image src="/icons/whatsapp.webp" alt="WhatsApp" width={34} height={34} />
        </a>
        <a
          href="mailto:info@antikexperte.at"
          aria-label="E-Mail schreiben"
          className="w-14 h-14 rounded-full bg-[url('/images/bg-2.webp')] bg-cover border border-[#b38b5999] shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          <Image src="/icons/email.webp" alt="Email" width={25} height={25} />
        </a>
      </div>
    </footer>
  );
}

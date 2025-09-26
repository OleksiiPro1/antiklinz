"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// AntikLinz palette
const BURGUNDY = "#7B2E2E";
const GOLD     = "#C2A14D";
const GREEN    = "#2E4B3C";
const BASE     = "#F7F3ED";
const GRAPHITE = "#2B2B2B";

export default function Header() {
  // Desktop dropdown (Leistungen)
  const [open, setOpen] = useState(false);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  // Mobile
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const openMenu = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpen(false), 120);
  };

  // Закрываем мобильное меню при resize на десктоп
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
        setMobileSubOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        borderColor: `${GOLD}55`,
        backgroundImage: `
          linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.86)),
          radial-gradient(70rem 30rem at 0% -20%, ${GOLD}12, transparent),
          radial-gradient(70rem 30rem at 100% 120%, ${GREEN}0F, transparent)
        `,
      }}
      role="banner"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="flex items-center justify-between py-3">
          {/* ЛОГОТИП */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Zur Startseite AntikLinz"
          >
            <Image
              src="/images/logo.webp"
              alt="AntikLinz Logo"
              width={300}
              height={40}
              priority
            />
          </Link>

          {/* НАВИГАЦИЯ (desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink href="/" label="Startseite" />

            {/* Leistungen с дропдауном */}
            <div
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <NavLink href="/leistungen" label="Leistungen" />

              {/* hover buffer */}
              <div className="absolute left-0 right-0 top-full h-3" />

              {/* Dropdown Panel */}
              <div
                className={`absolute left-0 top-[calc(100%+0.5rem)] w-[320px] rounded-2xl shadow-lg transition-all ${
                  open
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                style={{
                  background: "#fff",
                  border: `1px solid ${GOLD}55`,
                  boxShadow:
                    "0 8px 30px rgba(0,0,0,.08), 0 2px 8px rgba(0,0,0,.04)",
                }}
                role="menu"
                aria-label="Leistungen Untermenü"
              >
                <ul
  className=" ml-3 flex flex-col rounded-xl"
>
  {[
    { href: "/ankauf-antiquitaten-keramik-in-linz", label: "Antiquitäten, Keramik in Linz" },
    { href: "/ankauf-antiquitaten-mobel-in-linz", label: "Antiquitäten & Möbel in Linz" },
    { href: "/ankauf-antiquitaten-silber-schmuck-in-linz", label: "Silber & Schmuck in Linz" },
    { href: "/messie-entrumpelung-in-linz", label: "Messie Entrümpelung in Linz" },
    { href: "/porzellan-verkaufen-in-linz", label: "Porzellan verkaufen in Linz" },
    { href: "/verkauf-von-antiken-munzen-in-linz", label: "Verkauf von antiken Münzen in Linz" },
  ].map((item) => (
    <li
      key={item.href}
      className="border-b last:border-b-0"
      style={{ borderColor: `${GOLD}33` }}
    >
      <Link
        href={item.href}
        className="block px-3 py-2 text-sm"
        onClick={() => {
          setMobileOpen(false);
          setMobileSubOpen(false);
        }}
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>

              </div>
            </div>

            <NavLink href="/ueber-uns" label="Über uns" />
            <NavLink href="/impressum" label="Impressum" />
          </nav>

          {/* Бургер (mobile) */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2"
            aria-label="Menü öffnen"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              border: `1px solid ${GOLD}66`,
              color: GRAPHITE,
              background: "#fff",
            }}
          >
            {/* иконка */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${
          mobileOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
        }`}
        style={{
          background: "#fff",
          borderTop: `1px solid ${GOLD}40`,
          boxShadow: mobileOpen ? "0 8px 30px rgba(0,0,0,.06)" : "none",
        }}
        role="dialog"
        aria-label="Mobiles Menü"
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 py-4">
          <ul className="flex flex-col gap-1 text-sm font-medium" style={{ color: GRAPHITE }}>
            <li>
              <Link
                href="/"
                className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                Startseite
              </Link>
            </li>

            {/* Leistungen (accordion) */}
            <li>
              <button
                type="button"
                className="w-full flex items-center justify-between rounded-xl px-3 py-2 hover:bg-gray-50"
                onClick={() => setMobileSubOpen((v) => !v)}
                aria-expanded={mobileSubOpen}
                aria-controls="mobile-sub-leistungen"
                style={{ color: GRAPHITE }}
              >
                <span>Leistungen</span>
                <span
                  className={`inline-block transition-transform ${
                    mobileSubOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                  style={{
                    
                    width: 22,
                    height: 22,
                    borderRadius: 9999,
                    display: "grid",
                    placeItems: "center",
                    color: GRAPHITE,
                  }}
                >
                  +
                </span>
              </button>

              <div
                id="mobile-sub-leistungen"
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                  mobileSubOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul
  className="mt-1 mb-2 ml-3 flex flex-col rounded-xl border"
  style={{ borderColor: `${GOLD}55`, background: "#fff" }}
>
  {[
    { href: "/ankauf-antiquitaten-keramik-in-linz", label: "Antiquitäten, Keramik in Linz" },
    { href: "/ankauf-antiquitaten-mobel-in-linz", label: "Antiquitäten & Möbel in Linz" },
    { href: "/ankauf-antiquitaten-silber-schmuck-in-linz", label: "Silber & Schmuck in Linz" },
    { href: "/messie-entrumpelung-in-linz", label: "Messie Entrümpelung in Linz" },
    { href: "/porzellan-verkaufen-in-linz", label: "Porzellan verkaufen in Linz" },
    { href: "/verkauf-von-antiken-munzen-in-linz", label: "Verkauf von antiken Münzen in Linz" },
  ].map((item) => (
    <li
      key={item.href}
      className="border-b last:border-b-0"
      style={{ borderColor: `${GOLD}33` }}
    >
      <Link
        href={item.href}
        className="block px-3 py-2 text-sm hover:bg-gray-50"
        onClick={() => {
          setMobileOpen(false);
          setMobileSubOpen(false);
        }}
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>

              </div>
            </li>

            <li>
              <Link
                href="/ueber-uns"
                className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                Über uns
              </Link>
            </li>
            <li>
              <Link
                href="/impressum"
                className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                Impressum
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

/** Аккуратная ссылка навигации с «золотым» подчёркиванием по ховеру (desktop) */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative transition"
      style={{ color: GRAPHITE }}
    >
      <span className="inline-block py-1">{label}</span>
      <span
        className="absolute left-0 right-0 -bottom-[2px] h-[2px] origin-left scale-x-0 transition-transform"
        style={{ background: GOLD }}
      />
      <style jsx>{`
        a:hover span:last-child {
          transform: scaleX(1);
        }
      `}</style>
    </Link>
  );
}

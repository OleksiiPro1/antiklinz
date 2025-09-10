"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type LinkItem = { label: string; href: string };
type Item = { title: string; links: LinkItem[] };

export default function SimpleAccordionEntrümpelung() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: Item[] = [
    {
      title: "Messie Entrümpelung – Alle Städte anzeigen",
      links: [
        
  { label: "Messie Entrümpelung in Amstetten", href: "#" },
  { label: "Messie Entrümpelung in Bad Vöslau", href: "#" },
  { label: "Messie Entrümpelung in Berndorf", href: "#" },
  { label: "Messie Entrümpelung in Brunn am Gebirge", href: "#" },
  { label: "Messie Entrümpelung in Bruck an der Leitha", href: "#" },
  { label: "Messie Entrümpelung in Ebenfurth", href: "#" },
  { label: "Messie Entrümpelung in Ebreichsdorf", href: "#" },
  { label: "Messie Entrümpelung in Eisenstadt", href: "#" },
  { label: "Messie Entrümpelung in Fischamend", href: "#" },
  { label: "Messie Entrümpelung in Gerasdorf bei Wien", href: "#" },
  { label: "Messie Entrümpelung in Gloggnitz", href: "#" },
  { label: "Messie Entrümpelung in Groß-Enzersdorf", href: "#" },
  { label: "Messie Entrümpelung in Gänserndorf", href: "#" },
  { label: "Messie Entrümpelung in Guntramsdorf", href: "#" },
  { label: "Messie Entrümpelung in Hennersdorf", href: "#" },
  { label: "Messie Entrümpelung in Herzogenburg", href: "#" },
  { label: "Messie Entrümpelung in Himberg", href: "#" },
  { label: "Messie Entrümpelung in Hollabrunn", href: "#" },
  { label: "Messie Entrümpelung in Klosterneuburg", href: "#" },
  { label: "Messie Entrümpelung in Korneuburg", href: "#" },
  { label: "Messie Entrümpelung in Langenzersdorf", href: "#" },
  { label: "Messie Entrümpelung in Laxenburg", href: "#" },
  { label: "Messie Entrümpelung in Leoben", href: "#" },
  { label: "Messie Entrümpelung in Leopoldsdorf", href: "#" },
  { label: "Messie Entrümpelung in Linz", href: "#" },
  { label: "Messie Entrümpelung in Maria Enzersdorf", href: "#" },
  { label: "Messie Entrümpelung in Mattersburg", href: "#" },
  { label: "Messie Entrümpelung in Mistelbach", href: "#" },
  { label: "Messie Entrümpelung in Mödling", href: "#" },
  { label: "Messie Entrümpelung in Münchendorf", href: "#" },
  { label: "Messie Entrümpelung in Neunkirchen", href: "#" },
  { label: "Messie Entrümpelung in Perchtoldsdorf", href: "#" },
  { label: "Messie Entrümpelung in Pressbaum", href: "#" },
  { label: "Messie Entrümpelung in Purkersdorf", href: "#" },
  { label: "Messie Entrümpelung in Schwechat", href: "#" },
  { label: "Messie Entrümpelung in Steyr", href: "#" },
  { label: "Messie Entrümpelung in Stockerau", href: "#" },
  { label: "Messie Entrümpelung in Ternitz", href: "#" },
  { label: "Messie Entrümpelung in Theresienfeld", href: "#" },
  { label: "Messie Entrümpelung in Traismauer", href: "#" },
  { label: "Messie Entrümpelung in Traiskirchen", href: "#" },
  { label: "Messie Entrümpelung in Trumau", href: "#" },
  { label: "Messie Entrümpelung in Vösendorf", href: "#" },
  { label: "Messie Entrümpelung in Ybbs an der Donau", href: "#" }

      ],
    },
  ];

  return (
    <section
      className="w-[1150px] max-w-full mx-auto rounded-xl text-white"
      style={{ backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="space-y-3">
        {items.map((item, idx) => {
          const open = openIndex === idx;
          return (
            <div key={idx} className="border border-white/30 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(open ? null : idx)}
                className="w-full flex items-center justify-between gap-3 text-left px-4 py-3 bg-[#b38b5999] font-medium"
                aria-expanded={open}
                aria-controls={`panel-${idx}`}
                id={`accordion-${idx}`}
              >
                <span>{item.title}</span>
                {/* simple chevron */}
                <svg
                  className={`h-5 w-5 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z" />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="content"
                    id={`panel-${idx}`}
                    role="region"
                    aria-labelledby={`accordion-1-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      style={{ backgroundImage: "url(/images/bg-1.webp)" }}
                      className="p-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {item.links.map((link, i) => (
                          <Link
                            key={i}
                            href={link.href}
                            className="block text-sm md:text-base font-medium text-black hover:bg-white px-3 py-2 rounded transition"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

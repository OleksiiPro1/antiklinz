"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type LinkItem = { label: string; href: string };
type Item = { title: string; links: LinkItem[] };

export default function SimpleAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: Item[] = [
    {
      title: "Antiquitäten Ankauf & Verkauf",
      links: [
       { label: "Antiquitäten Ankauf Wien", href: "" },
{ label: "Antike Möbel & Teppiche", href: "" },
{ label: "Antiquitäten Antikvariat", href: "" },
{ label: "Antiquitäten Wien Antikvariat", href: "" },
{ label: "Antiquitäten Ankauf Antikvariat", href: "" },
{ label: "Antiquitäten Verkauf Antikvariat", href: "" },
{ label: "Antiquitäten Schätzung Antikvariat", href: "" },
{ label: "Antiquitäten Bewertung Antikvariat", href: "" },
{ label: "Antiquitäten Händler Antikvariat", href: "" },
{ label: "Antiquitäten Geschäft Antikvariat", href: "" },
{ label: "Antikhandel Antikvariat", href: "" },
{ label: "Antik Laden Antikvariat", href: "" },
{ label: "Antikmarkt Antikvariat", href: "" },
{ label: "Antik Auktion Antikvariat", href: "" },
{ label: "Antik Shop Antikvariat", href: "" },
{ label: "Nachlass Ankauf Antikvariat", href: "" },
{ label: "Verlassenschaften Antikvariat", href: "" },
{ label: "Haushaltsauflösungen Antikvariat", href: "" },
{ label: "Wohnungsauflösungen Antikvariat", href: "" },
{ label: "Alte Möbel Antikvariat", href: "" },
{ label: "Antike Möbel Antikvariat", href: "" },
{ label: "Biedermeier Möbel Antikvariat", href: "" },
{ label: "Barock Möbel Antikvariat", href: "" },
{ label: "Jugendstil Möbel Antikvariat", href: "" },
{ label: "Vintage Möbel Antikvariat", href: "" },
{ label: "Design Möbel Antikvariat", href: "" },
{ label: "Alte Bilder Antikvariat", href: "" },
{ label: "Alte Gemälde Antikvariat", href: "" },
{ label: "Ölgemälde Antikvariat", href: "" },
{ label: "Ikonen Ankauf Antikvariat", href: "" },
{ label: "Alte Kunst Antikvariat", href: "" },
{ label: "Alte Skulpturen Antikvariat", href: "" },
{ label: "Statuen Ankauf Antikvariat", href: "" },
{ label: "Druckgrafiken Antikvariat", href: "" },
{ label: "Stiche Ankauf Antikvariat", href: "" },
{ label: "Alte Uhren Antikvariat", href: "" },
{ label: "Standuhren Antikvariat", href: "" },
{ label: "Taschenuhren Antikvariat", href: "" },
{ label: "Armbanduhren Antikvariat", href: "" },
{ label: "Wanduhren Antikvariat", href: "" },
{ label: "Pendeluhr Antikvariat", href: "" },
{ label: "Antike Uhr Ankauf Antikvariat", href: "" },
{ label: "Altes Porzellan Antikvariat", href: "" },
{ label: "Meissen Porzellan Antikvariat", href: "" },
{ label: "Augarten Porzellan Antikvariat", href: "" },
{ label: "Rosenthal Porzellan Antikvariat", href: "" },
{ label: "Kaiser Porzellan Antikvariat", href: "" },
{ label: "Villeroy & Boch Porzellan Antikvariat", href: "" },
{ label: "Alte Figuren Antikvariat", href: "" },
{ label: "Bronzefiguren Antikvariat", href: "" },
{ label: "Silberfiguren Antikvariat", href: "" },
{ label: "Keramikfiguren Antikvariat", href: "" },
{ label: "Alte Bücher Antikvariat", href: "" },
{ label: "Antike Bücher Antikvariat", href: "" },
{ label: "Erstausgaben Antikvariat", href: "" },
{ label: "Bibliothek Ankauf Antikvariat", href: "" },
{ label: "Alte Papiere Antikvariat", href: "" },
{ label: "Historische Dokumente Antikvariat", href: "" },
{ label: "Manuskripte Antikvariat", href: "" },
{ label: "Autographen Antikvariat", href: "" },
{ label: "Landkarten Ankauf Antikvariat", href: "" },
{ label: "Altes Geld Antikvariat", href: "" },
{ label: "Münzen Ankauf Antikvariat", href: "" },
{ label: "Goldmünzen Antikvariat", href: "" },
{ label: "Silbermünzen Antikvariat", href: "" },
{ label: "Sammlermünzen Antikvariat", href: "" },
{ label: "Euro Münzen Sammler Antikvariat", href: "" },
{ label: "Banknoten Ankauf Antikvariat", href: "" },
{ label: "Historische Geldscheine Antikvariat", href: "" },
{ label: "Schmuck Ankauf Antikvariat", href: "" },
{ label: "Antik Schmuck Antikvariat", href: "" },
{ label: "Goldschmuck Antikvariat", href: "" },
{ label: "Silberschmuck Antikvariat", href: "" },
{ label: "Diamantschmuck Antikvariat", href: "" },
{ label: "Brillantschmuck Antikvariat", href: "" },
{ label: "Edelsteine Antikvariat", href: "" },
{ label: "Ringe Antikvariat", href: "" },
{ label: "Ketten Antikvariat", href: "" },
{ label: "Ohrringe Antikvariat", href: "" },
{ label: "Broschen Antikvariat", href: "" },
{ label: "Silber Ankauf Antikvariat", href: "" },
{ label: "Altsilber Antikvariat", href: "" },
{ label: "Silberbesteck Antikvariat", href: "" },
{ label: "Tafelbesteck Antikvariat", href: "" },
{ label: "Silbergefäße Antikvariat", href: "" },
{ label: "Silberpokale Antikvariat", href: "" },
{ label: "Silberplatten Antikvariat", href: "" },
{ label: "Gold Ankauf Antikvariat", href: "" },
{ label: "Altgold Antikvariat", href: "" },
{ label: "Barren Ankauf Antikvariat", href: "" },
{ label: "Zahngold Antikvariat", href: "" },
{ label: "Militaria Ankauf Antikvariat", href: "" },
{ label: "Orden Antikvariat", href: "" },
{ label: "Medaillen Antikvariat", href: "" },
{ label: "Uniformen Antikvariat", href: "" },
{ label: "Helme Antikvariat", href: "" },
{ label: "Sammlerstücke Militär Antikvariat", href: "" },
{ label: "Sammlungen Ankauf Antikvariat", href: "" },
{ label: "Sammlerstücke Antikvariat", href: "" },
{ label: "Glas Ankauf Antikvariat", href: "" },
{ label: "Muranoglas Antikvariat", href: "" },
{ label: "Lalique Glas Antikvariat", href: "" },
{ label: "Kristallglas Antikvariat", href: "" },
{ label: "Art Deco Objekte Antikvariat", href: "" },
{ label: "Jugendstil Objekte Antikvariat", href: "" },
{ label: "Alte Teppiche Antikvariat", href: "" },
{ label: "Orientteppiche Antikvariat", href: "" },
{ label: "Perserteppiche Antikvariat", href: "" },
{ label: "Seidenteppiche Antikvariat", href: "" },
{ label: "Handgeknüpfte Teppiche Antikvariat", href: "" },
{ label: "Alte Radios Antikvariat", href: "" },
{ label: "Alte Kameras Antikvariat", href: "" },
{ label: "Alte Musikinstrumente Antikvariat", href: "" },
{ label: "Geigen Ankauf Antikvariat", href: "" },
{ label: "Klaviere Ankauf Antikvariat", href: "" }
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
                    aria-labelledby={`accordion-2-${idx}`}
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

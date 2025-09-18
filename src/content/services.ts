// src/content/services.ts
export type Service = {
  slug: string;
  image?: string;
  width?: number;
  height?: number;
  alt?: string; // добавили alt
  title: string;
  date: string;         // '2025-08-15'
  excerpt: string;      // короткое описание
};

export const services: Service[] = [
  {
    slug: 'messie-entruempelung-linz',
    image: '/images/Leistungen-6.webp',
    width: 1200,
    height: 800,
    alt: 'Messie Entrümpelung Linz – diskret & respektvoll',
    title: 'Messie Entrümpelung Linz – diskret & respektvoll',
    date: '2025-09-10',
    excerpt: 'Diskrete Messie Hilfe in Linz: respektvoll, strukturiert und mit Fixpreis. Von der kostenlosen Besichtigung bis zur besenreinen Übergabe – alles aus einer Hand.'
  },
  {
    slug: 'entruempelungsfirma-linz',
    image: '/images/Leistungen-2.webp',
    width: 1200,
    height: 800,
    alt: 'Entrümpelungsfirma Linz – professionelle Räumungen',
    title: 'Entrümpelungsfirma Linz – professionelle Räumungen',
    date: '2025-09-11',
    excerpt: 'Ihre erfahrene Entrümpelungsfirma in Linz für Wohnungen, Häuser und Keller. Professionelle Planung, klare Abläufe und transparente Fixpreise.'
  },
  {
    slug: 'entruempelungsservice-linz',
    image: '/images/Leistungen-3.webp',
    width: 1200,
    height: 800,
    alt: 'Entrümpelungsservice Linz – schnell & zuverlässig',
    title: 'Entrümpelungsservice in Linz – schnell & zuverlässig',
    date: '2025-09-12',
    excerpt: 'Schneller und verlässlicher Entrümpelungsservice in Linz: flexible Termine, faire Konditionen und diskrete Abwicklung mit Fixpreis-Garantie.'
  },
  {
    slug: 'sperrmuellabholung-linz',
    image: '/images/Leistungen-4.webp',
    width: 1200,
    height: 800,
    alt: 'Sperrmüllabholung Linz – flexibel & unkompliziert',
    title: 'Sperrmüllabholung in Linz – flexibel & unkompliziert',
    date: '2025-09-13',
    excerpt: 'Wir holen Sperrmüll in Linz schnell und unkompliziert ab – mit kurzfristigen Terminen und klar kalkulierten Preisen. Ihre Entlastung steht im Mittelpunkt.'
  },
  {
    slug: 'entruempelungsdienst-linz',
    image: '/images/Leistungen-5.webp',
    width: 1200,
    height: 800,
    alt: 'Entrümpelungsdienst Linz – Fixpreis & Termin',
    title: 'Entrümpelungsdienst in Linz – Fixpreis & Termin',
    date: '2025-09-14',
    excerpt: 'Ihr verlässlicher Entrümpelungsdienst in Linz: Fixpreis-Vereinbarung, termingerechte Durchführung und respektvoller Umgang mit allen Gegenständen.'
  },
  {
    slug: 'wohnungsaufloesungen-linz',
    image: '/images/Leistungen-1.webp',
    width: 1200,
    height: 800,
    alt: 'Wohnungsauflösungen Linz – planbar & sorgfältig',
    title: 'Wohnungsauflösungen in Linz – planbar & sorgfältig',
    date: '2025-09-15',
    excerpt: 'Komplette Wohnungsauflösungen in Linz mit sorgfältiger Planung, klaren Abläufen und besenreiner Übergabe. Diskret, respektvoll und zuverlässig.'
  }
  
];

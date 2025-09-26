// src/content/services.ts
export type Service = {
  slug: string;
  image?: string;
  width?: number;
  height?: number;
  alt?: string; // добавили alt
  title: string;
  date: string;         // '2025-09-10'
  excerpt: string;      // короткое описание
};

export const services: Service[] = [
  {
    slug: 'ankauf-antiquitaeten-moebel-linz',
    image: '/images/antiklinz-moebel-hero.webp',
    width: 1200,
    height: 800,
    alt: 'Ankauf Antiquitäten Möbel in Linz – Kommoden, Schränke, Stühle',
    title: 'Ankauf Antiquitäten Möbel in Linz',
    date: '2025-09-10',
    excerpt: 'AntikLinz kauft antike Möbel in Linz: Biedermeier, Gründerzeit, Jugendstil oder Vintage. Kostenlose Besichtigung, faire Bewertung und schnelle Abwicklung.'
  },
  {
    slug: 'ankauf-antiquitaeten-keramik-linz',
    image: '/images/antiklinz-keramik-kategorien.webp',
    width: 1200,
    height: 800,
    alt: 'Ankauf Antiquitäten Keramik in Linz – Vasen, Schalen und Teller',
    title: 'Ankauf Antiquitäten Keramik in Linz',
    date: '2025-09-11',
    excerpt: 'Wir kaufen antike Keramik in Linz: handbemalte Teller, Vasen, Figuren und Sammlerstücke. Fachgerechte Bewertung und transparente Preise.'
  },
  {
    slug: 'ankauf-antiquitaeten-silber-schmuck-linz',
    image: '/images/antiklinz-silber-schmuck.webp',
    width: 1200,
    height: 800,
    alt: 'Ankauf Antiquitäten Silber & Schmuck in Linz – Ringe, Ketten, Besteck',
    title: 'Ankauf Antiquitäten Silber & Schmuck in Linz',
    date: '2025-09-12',
    excerpt: 'Ankauf von Silber & Schmuck in Linz: Silberbesteck, Uhren, Ringe, Halsketten und Sammlerstücke. Sofortige Barzahlung und faire Konditionen.'
  },
  {
    slug: 'verkauf-antike-muenzen-linz',
    image: '/images/antiklinz-muenzen2.webp',
    width: 1200,
    height: 800,
    alt: 'Verkauf von antiken Münzen in Linz – Goldmünzen und Sammlerstücke',
    title: 'Verkauf von antiken Münzen in Linz',
    date: '2025-09-13',
    excerpt: 'Verkauf von antiken Münzen in Linz: römische, griechische, mittelalterliche und moderne Sammlermünzen. Transparente Bewertung und sichere Abwicklung.'
  },
  {
    slug: 'porzellan-verkaufen-linz',
    image: '/images/porzellan-linz.webp',
    width: 1200,
    height: 800,
    alt: 'Porzellan verkaufen in Linz – Tassen, Teller und Figuren',
    title: 'Porzellan verkaufen in Linz',
    date: '2025-09-14',
    excerpt: 'Porzellan verkaufen in Linz leicht gemacht: Meissen, Augarten, Rosenthal und andere Manufakturen. Kostenlose Begutachtung und faire Preise.'
  },
  {
    slug: 'messie-entruempelung-linz',
    image: '/images/messie-arbeitsweise.webp',
    width: 1200,
    height: 800,
    alt: 'Messie Entrümpelung in Linz – diskret & respektvoll',
    title: 'Messie Entrümpelung in Linz – diskret & respektvoll',
    date: '2025-09-15',
    excerpt: 'Diskrete Messie Hilfe in Linz: respektvoll, strukturiert und mit Fixpreis. Von der kostenlosen Besichtigung bis zur besenreinen Übergabe – alles aus einer Hand.'
  }
];

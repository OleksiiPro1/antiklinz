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
    slug: 'ankauf-antiquitaeten-moebel-wien', 
    image: '/images/sl-9.webp',
    width: 1200,
    height: 800,
    alt: 'Antiquitäten und Möbel Ankauf in Wien',
    title: 'Ankauf Antiquitäten Möbel – Faire Preise & bester Service in Wien',
    date: '2025-08-01',
    excerpt: 'Wir kombinieren fachliche Präzision mit schneller, respektvoller Abwicklung. Von der ersten Nachricht bis zur Auszahlung bleiben Abläufe transparent.'
  },
  {
    slug: 'ankauf-antiquitaeten-keramik-wien',
    image: '/images/sl-12.webp',
    width: 1200,
    height: 800,
    alt: 'Ankauf Antiquitäten Keramik',
    title: 'Ankauf Antiquitäten Keramik – Expertenbewertung',
    date: '2025-08-02',
    excerpt: 'Kostenlose Foto-Ersteinschätzung, transparente Angebote auf Basis echter Marktwerte und – bei Einigung – sofortige Auszahlung per Barzahlung oder Echtzeit-Überweisung.'
  },
  {
    slug: 'ankauf-antiquitaeten-muenzen-wien',
    image: '/images/sl-11.webp',
    width: 1200,
    height: 800,
    alt: 'Antiquitäten Münzen verkaufen',
    title: 'Antiquitäten Münzen verkaufen in Wien – Numismatik-Ankauf & Beratung',
    date: '2025-08-03',
    excerpt: 'Wir kombinieren Numismatik-Know-how mit einem klaren, nachvollziehbaren Prozess. '
  },
  {
    slug: 'ankauf-antiquitaeten-silber-schmuck-wien',
    image: '/images/sl-19.webp',
    width: 1200,
    height: 800,
    alt: 'Ankauf Antiquitäten Silber & Schmuck',
    title: 'Ankauf Antiquitäten Silber & Schmuck – Faire Angebote in Wien',
    date: '2025-08-04',
    excerpt: 'Antikexperte.at steht für seriösen Ankauf von Antiquitäten, Silber & Schmuck in Wien. Mit geprüfter Expertise.'
  },
  {
    slug: 'ankauf-antiquitaten-banknoten',
    image: '/images/sl-21.webp',
    width: 1200,
    height: 800,
    alt: 'Ankauf Antiquitäten Banknoten',
    title: 'Ankauf Antiquitäten Banknoten – Schätzung & Ankauf',
    date: '2025-08-05',
    excerpt: 'Sie möchten historische Banknoten verkaufen – einzelne Stücke, eine Sammlung oder einen Nachlass?'
  },
  {
    slug: 'ankauf-antiquitaeten-teppiche-wien',
    image: '/images/sl-16.webp',
    width: 1200,
    height: 800,
    alt: 'Ankauf antiker Teppiche',
    title: 'Ankauf antiker Teppiche – Begutachtung & faires Angebot (Wien)',
    date: '2025-08-06',
    excerpt: 'Antikexperte.at kauft antike und alte Teppiche jeder Art: Perserteppiche, Kaukasier, anatolische Stücke, Seidenteppiche, Kelims und seltene Einzelstücke.'
  },
  
];

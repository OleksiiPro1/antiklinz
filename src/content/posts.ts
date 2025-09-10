// Простой тип записи блога
export type Post = {
  slug: string;
  title: string;
  date: string;         // '2025-08-15'
  excerpt: string;      // короткое описание
  image?: string;       // /images/...
  alt?: string;         // alt-текст для картинки

};

export const posts: Post[] = [
  {
    slug: 'antike-mobel-pflege-tipps',
    title: 'Alte Möbel Verkaufen: Ein Umfassender Testbericht',
    date: '2025-08-01',
    excerpt: 'Wir bieten professionellen Ankauf von Antiquitäten und Möbeln in Wien. Profitieren Sie von fairen Preisen, seriöser Abwicklung und bestem Service.',
    image: '/images/sl-29.webp',
    alt: 'Antike Bücher verkaufen in Wien'

  },
  {
    slug: 'verkauf-von-antiken-muenzen',
    title: 'Verkauf von antiken Münzen: Detaillierte Bewertung des Talers 1872 A',
    date: '2025-08-05',
    excerpt: 'Verkauf von antiken Münzen: Detaillierte Bewertung des Talers 1872 A. Beim Verkauf von antiken Münzen müssen Sie den Wert Ihrer Münzen richtig einschätzen...',
    image: '/images/sl-31.webp',
    alt: 'Antike Bücher verkaufen in Wien'
  },
  {
    slug: 'porzellan-verkaufen-post',
    title: 'Porzellan Verkaufen. Ein kritischer Blick auf das Porzellan-Set',
    date: '2025-08-10',
    excerpt: 'Porzellan in Wien verkaufen? Senden Sie Fotos oder vereinbaren Sie eine kurze Begutachtung. Wir prüfen Ihr Set kritisch und transparent und machen Ihnen ein marktgerechtes Angebot.',
    image: '/images/sl-26.webp',
    alt: 'Antike Bücher verkaufen in Wien'
  },
  {
    slug: 'messie-entruempelung-wien',
    title: 'Messie Entrümpelung Wien – diskret, respektvoll & professionell',
    date: '2025-08-01',
    excerpt: 'Diskrete und respektvolle Messie Entrümpelung in Wien. Wir helfen Betroffenen und Angehörigen Schritt für Schritt zu neuer Ordnung und Klarheit',
    image: '/images/sl-22.webp',
    alt: 'Messie Entrümpelung Wien'

  },
  {
    slug: 'messie-entruempelung-dachboden',
    title: 'Messie Entrümpelung Dachboden – gründlich & einfühlsam',
    date: '2025-08-05',
    excerpt: 'Professionelle Messie Entrümpelung von Dachböden. Wir schaffen Platz, gehen behutsam vor und geben Ihnen die Sicherheit, dass alle Schritte',
    image: '/images/sl-23.webp',
    alt: 'Messie Entrümpelung Dachboden',
  },
  {
    slug: 'messie-entruempelung-keller',
    title: 'Messie Entrümpelung Keller – strukturiert & zuverlässig',
    date: '2025-08-10',
    excerpt: 'Messie Entrümpelung im Keller – wir räumen überfüllte Lagerräume und schaffen wieder Klarheit. Mit diskretem Vorgehen, Organisation und jahrelanger Erfahrung.',
    image: '/images/sl-24.webp',
    alt: 'Messie Entrümpelung Keller – strukturiert & zuverlässig'
  },
];

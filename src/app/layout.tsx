import './globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   icons: {
    icon: '/apple-touch-icon.webp',
    shortcut: '/apple-touch-icon.webp',
    apple: '/apple-touch-icon.webp'
  },
  title: 'Antiquitäten Ankauf',
  description: 'Antiquitäten Ankauf. Lesen Sie unsere Tipps, Ratgeber und Neuigkeiten rund um Antiquitäten und Möbel.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4C6TMSBV48"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4C6TMSBV48');
            `,
          }}
        />
      </head>
      <body className="font-sans text-dark">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

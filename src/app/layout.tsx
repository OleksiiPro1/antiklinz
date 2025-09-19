import './globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';
import CookieConsent from "../app/components/CookieConsent";

export const metadata: Metadata = {
   icons: {
    icon: 'favicon.ico',
    shortcut: 'favicon.ico',
    apple: 'favicon.ico'
  },
  title: 'Antiquitäten Ankauf',
  description: 'Antiquitäten Ankauf. Lesen Sie unsere Tipps, Ratgeber und Neuigkeiten rund um Antiquitäten und Möbel.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans text-dark">
        <Header />
        <main>{children}</main>
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/content/services';
import Leistungen from '../components/Leistungen';

export const metadata = {
  title: "Unsere Services rund um Antiquitäten & Verlassenschaften",
  description: "Unsere Services rund um Antiquitäten & Verlassenschaften. Lesen Sie unsere Tipps, Ratgeber und Neuigkeiten rund um Antiquitäten und Möbel.",
};

export default function UslugiPage() {
  return (
    <section className="mx-auto w-[1150px] max-w-full pb-10">
       <h1 className="text-[#b38b59] text-4xl font-light tracking-wide mb-12 text-center">Unsere Services rund um Antiquitäten & Verlassenschaften
</h1> 
      {/* <h1 className="text-[#b38b59] text-4xl font-light tracking-wide mb-12 text-center">Leistungen
</h1> */}

      <Leistungen />
      
    </section>
  );
}

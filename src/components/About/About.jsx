import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const About = () => {
  return (
    <section className="w-full bg-[#fff] min-h-screen grid place-items-center font-montserrat py-16 lg:py-24">
      <div className="max-w-7xl w-full mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
          {/* Linkes Bild */}
          <div className="w-full h-full">
            <div className="relative w-full aspect-[1/1] rounded-lg overflow-hidden border-4 border-[#f7f1e8]">
              <Image
                src="/images/about-2.jpg"
                alt="Laylani's – Fleischgroßhandel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Rechter Textbereich */}
          <div className="text-center lg:text-left">
            <h2 className="text-[#DAA520] tracking-[0.2em] text-2xl lg:text-3xl mb-6">
              HERZLICH WILLKOMMEN
            </h2>
            <h3 className="text-[#000000] font-bold text-4xl lg:text-5xl mb-8">
              Laylani's –
              <br />
              IHR FLEISCHGROßHÄNDLER.
            </h3>
            <p className="text-[#000000] text-lg lg:text-xl mb-10 max-w-xl mx-auto lg:mx-0">
              Wir heißen Sie herzlich willkommen bei Laylani’s – Ihrem
              zuverlässigen Partner für Premium-Fleisch im Großhandel. Wir
              beliefern Restaurants, Hotels und Fachhändler mit hochwertigem
              Fleisch aus aller Welt – von klassischen Cuts bis hin zu
              exklusiven Sorten wie Wagyu. Qualität, Zuverlässigkeit und
              persönlicher Service stehen bei uns an erster Stelle.
            </p>
            <Link href="/about-us">
              <Button variant="secondary" className="text-sm tracking-wider">
                MEHR ÜBER UNS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

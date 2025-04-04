import React from "react";
import Image from "next/image";

const Timings = () => {
  return (
    <section className="relative w-full py-24 lg:py-32">
      {/* Hintergrundbild mit Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Hintergrundtextur"
          fill
          className="object-cover object-center w-full h-full brightness-[170%] contrast-110 saturate-105"
          sizes="100vw"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Überschrift */}
          <h2 className="text-[#F4C430] text-[2rem] lg:text-[3rem] mb-16 uppercase font-bold tracking-wide">
            Öffnungszeiten
          </h2>

          {/* Öffnungszeiten Tabelle */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 justify-center mb-12 text-white text-lg sm:text-xl font-medium tracking-wide">
            <p>Montag -Samstag</p>
            <p className="col-span-2 sm:col-span-1">04:00 – 15:00</p>
          </div>
          {/* Öffnungszeiten Tabelle */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 justify-center mb-12 text-white text-lg sm:text-xl font-medium tracking-wide">
            <p>Sonntag</p>
            <p className="col-span-2 sm:col-span-1">geschlossen</p>
          </div>

          {/* Beschreibung */}
          <p className="text-white/80 text-[0.875rem] lg:text-[1rem] leading-[1.8] tracking-wide max-w-3xl mx-auto">
            Auch wenn wir offiziell um 15:00 Uhr schließen, sind wir oft noch
            länger im Geschäft. Sollten Sie sich verspäten, rufen Sie uns
            einfach kurz an – in vielen Fällen sind wir noch da und bereiten
            Ihre Bestellung gerne vor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timings;

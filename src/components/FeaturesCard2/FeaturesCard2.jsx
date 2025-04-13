import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const FeaturesCard2 = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#1A1A1A] font-montserrat">
      {/* Hintergrundbild mit Overlays */}
      <div className="absolute inset-0 w-full z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Hintergrundtextur"
          fill
          className="object-cover object-center w-full h-full brightness-[170%] contrast-110 saturate-105"
          sizes="100vw"
          priority
          quality={100}
        />
        {/* Rauschen/Struktur-Effekt */}
        <div className="absolute inset-0 w-full h-full opacity-[0.15] mix-blend-overlay bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:4px_4px]" />
        {/* Dunkler Verlauf */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/25 via-black/20 to-black/25" />
      </div>

      {/* Inhaltsbereich */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-6xl mx-auto">
          <Fade direction="up" cascade={true}>
            <h2 className="text-[#F4C430] text-xl md:text-2xl lg:text-3xl font-bold mb-5 md:mb-8 uppercase tracking-wide leading-normal">
              WIR GARANTIEREN IHNEN ABSOLUT FRISCHES FLEISCH.
            </h2>
            <p className="text-[#f7f1e8]/90 text-base lg:text-lg mb-8 md:mb-12 leading-tight sm:leading-relaxed tracking-wide w-11/12 sm:w-5/6 md:w-4/5 mx-auto">
              Unser gesamtes Fleisch ist frisch und niemals tiefgefroren. Wir
              legen größten Wert auf Qualität und stellen sicher, dass jedes
              Produkt beim Kauf höchsten Standards entspricht. Unser Rindfleisch
              wird zudem 28 Tage gereift – für ein intensives, volles Aroma. Auf
              Wunsch verpacken wir Ihr Fleisch vakuumiert – ideal für Lagerung
              und Frischeerhalt.
            </p>
          </Fade>

          {/* Trennlinie */}
          <div className="w-44 h-[2px] bg-white mx-auto mb-16"></div>

          {/* Bild */}
          <div className="relative w-full aspect-[16/6] lg:aspect-[21/8] 2xl:aspect-[21/9] rounded-lg overflow-hidden">
            <Image
              src="/meat-2.png"
              alt="Verschiedene Premium-Cuts auf Holzbrett"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard2;

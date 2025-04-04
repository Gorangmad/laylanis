"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const cuts = [
  {
    name: "HÜFTSTEAK",
    image: "/images/products/argentine-ribeye.jpg",
    description: "Mager und geschmackvoll – ideal zum Grillen oder Braten.",
    link: "#hueftsteak",
  },
  {
    name: "RIB-EYE STEAK",
    image: "/images/products/irish-striploin.jpg",
    description: "Stark marmoriert mit intensivem, saftigem Geschmack.",
    link: "#ribeye",
  },
  {
    name: "RINDERFILET",
    image: "/images/products/argentine-ribeye.jpg",
    description: "Das zarteste Stück – perfekt pariert für höchste Ansprüche.",
    link: "#rinderfilet",
  },
  {
    name: "ROASTBEEF",
    image: "/images/products/irish-striploin.jpg",
    description: "Aus dem edelsten Rückenstück – vielseitig und aromatisch.",
    link: "#roastbeef",
  },
  {
    name: "RUMPSTEAK",
    image: "/images/products/argentine-ribeye.jpg",
    description: "Klassisch, kräftig im Geschmack und fein marmoriert.",
    link: "#rumpsteak",
  },
  {
    name: "T-BONE STEAK",
    image: "/images/products/american-tomahawk.jpg",
    description: "Zwei edle Cuts in einem – Filet & Roastbeef vereint.",
    link: "#tbone",
  },
  {
    name: "SPECIAL CUTS",
    image: "/images/products/american-tomahawk.jpg",
    description: "Außergewöhnliche Zuschnitte für besondere Anlässe.",
    link: "#specialcuts",
  },
];

const CutsHero = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#1a1a1a] pt-32 pb-24">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Hintergrundtextur"
          fill
          className="object-cover object-center brightness-[50%]"
          priority
          quality={100}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Textbereich */}
        <div className="text-center mt-8 mb-16">
          <h1 className="text-[#f7f1e8] text-4xl lg:text-5xl uppercase mb-4">
            ENTDECKEN SIE UNSERE...
          </h1>
          <h1 className="text-[#F4C430] text-5xl lg:text-7xl font-bold mb-6 uppercase font-gin leading-tight tracking-wider [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
            PREMIUM CUTS
            <br />
            FÜR JEDES GERICHT
          </h1>
          <p className="text-[#f7f1e8] text-lg lg:text-xl max-w-3xl mx-auto">
            Von zarten Steaks bis hin zu saftigen Braten – entdecken Sie unsere
            fachmännisch zugeschnittene Auswahl an Premium-Fleisch.
          </p>
        </div>

        {/* Cuts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cuts.map((cut) => (
            <Link
              key={cut.name}
              href={cut.link}
              onClick={(e) => scrollToSection(e, cut.link.substring(1))}
              className="hover:scale-105 transition-transform duration-500 group block bg-[#1a1a1a] rounded-sm overflow-hidden border border-[#333] hover:border-[#F4C430] hover:shadow-[0_0_15px_rgba(244,196,48,0.3)] duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden m-5">
                <Image
                  src={cut.image}
                  alt={cut.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-[#f7f1e8] text-2xl lg:text-3xl mb-4 font-gin">
                  {cut.name}
                </h2>
                <button className="inline-block border-2 border-[#f7f1e8] text-[#f7f1e8] px-8 py-2 uppercase tracking-wider text-sm hover:bg-[#f7f1e8] hover:text-[#1a1a1a] transition-all duration-300">
                  MEHR ERFAHREN
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CutsHero;

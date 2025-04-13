"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const countries = [
  {
    name: "MEATS OF ARGENTINA",
    image: "/images/countries/argentina.jpg",
    description: "Premium-Weiderind aus der Region Pampas",
    link: "#argentina",
  },
  {
    name: "MEATS OF IRELAND",
    image: "/images/countries/ireland.png",
    description: "Hochwertiges Weiderind von irischen Bauernhöfen",
    link: "#ireland",
  },
  {
    name: "MEATS OF URUGUAY",
    image: "/images/countries/uruguay.jpg",
    description: "Ausgezeichnetes Weiderind aus den Ebenen Südamerikas",
    link: "#uruguay",
  },
  {
    name: "MEATS OF USA",
    image: "/images/countries/usa.jpg",
    description: "Premium-Maisrindfleisch aus ausgewählten US-Farmen",
    link: "#usa",
  },
];

const OriginHero = () => {
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
        {/* Überschrift */}
        <div className="text-center mt-8 mb-16">
          <Fade direction="left">
            <h1 className="text-[#f7f1e8] text-4xl lg:text-5xl uppercase mb-4">
              HUNGRIG? WIR HABEN...
            </h1>
          </Fade>

          <Fade direction="up">
            <h1 className="text-[#F4C430] text-5xl lg:text-7xl font-bold mb-6 uppercase font-gin leading-tight tracking-wider [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
              QUALITÄTSFLEISCH
              <br />
              FÜR JEDEN ANLASS
            </h1>
          </Fade>
          <p className="text-[#f7f1e8] text-lg lg:text-xl max-w-3xl mx-auto">
            Ob Alltag oder Festtag – bei uns finden Sie eine große Auswahl an
            hochwertigem Fleisch aus aller Welt.
          </p>
        </div>

        {/* Länderkarten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Fade direction="up" cascade={true} triggerOnce={true} damping={0.2}>
            {countries.map((country) => (
              <Link
                key={country.name}
                href={country.link}
                onClick={(e) => scrollToSection(e, country.link.substring(1))}
                className="hover:scale-105 transition-transform duration-500 group block bg-[#1a1a1a] rounded-sm overflow-hidden border border-[#333] hover:border-[#F4C430] hover:shadow-[0_0_15px_rgba(244,196,48,0.3)] duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden m-5">
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-[#f7f1e8] text-2xl lg:text-3xl mb-4 font-gin">
                    {country.name}
                  </h2>
                  <p className="text-[#f7f1e8]/80 text-sm mb-4">
                    {country.description}
                  </p>
                  <button className="inline-block border-2 border-[#f7f1e8] text-[#f7f1e8] px-8 py-2 uppercase tracking-wider text-sm hover:bg-[#f7f1e8] hover:text-[#1a1a1a] transition-all duration-300">
                    MEHR ANZEIGEN
                  </button>
                </div>
              </Link>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default OriginHero;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/data/products";
import CutSection from "@/components/CutSection/CutSection";

export default function CutsPage() {
  const cuts = Object.entries(allProducts.cuts).map(([id, products]) => ({
    id,
    name: id.toUpperCase(),
    image: `${products[0].image}`,
    description: `Entdecken Sie unsere exklusive Auswahl an ${id}-Cuts. Sorgfältig ausgewählt und perfekt vorbereitet – für echten Fleischgenuss auf höchstem Niveau.`,
    products,
  }));

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center py-24 mb-16">
        <Image
          src="/hero-bg.jpeg"
          alt="Meat cuts background"
          fill
          className="object-cover brightness-[170%] contrast-110 saturate-105"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center mt-8 mb-16 px-4">
          <h1 className="text-[#f7f1e8] text-2xl sm:text-3xl lg:text-4xl uppercase mb-4">
            FÜR FEINSCHMECKER & FLEISCHLIEBHABER
          </h1>
          <h1 className="text-[#F4C430] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 uppercase font-gin leading-tight tracking-wider [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
            PREMIUM CUTS
            <br />
            VON LAYLANIS
          </h1>
          <p className="text-[#f7f1e8] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Egal ob BBQ, Dinner oder Fine Dining – bei Laylanis finden Sie die
            passende Auswahl an Premiumfleisch aus aller Welt. Qualität, der man vertraut.
          </p>
        </div>

        {/* Cut Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-5/6 max-w-[1400px] mx-auto">
          {cuts.map((cut) => (
            <Link
              key={cut.id}
              href={`#${cut.id}`}
              onClick={(e) => scrollToSection(e, cut.id)}
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
                <h2 className="text-[#f7f1e8] text-xl sm:text-2xl lg:text-3xl mb-4 font-gin">
                  {cut.name}
                </h2>
                <button className="inline-block border-2 border-[#f7f1e8] text-[#f7f1e8] px-8 py-2 uppercase tracking-wider text-sm hover:bg-[#f7f1e8] hover:text-[#1a1a1a] transition-all duration-300">
                  MEHR ERFAHREN
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cuts Sections */}
      <div className="space-y-24">
        {cuts.map((cut) => (
          <CutSection key={cut.id} cut={cut} />
        ))}
      </div>
    </main>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import ProductCard from "../ProductCard/ProductCard";
import ProductsSection from "../ProductsSection/ProductsSection";

const defaultCut = {
  id: "steaks",
  name: "PREMIUM STEAKS",
  image: "/images/products/argentine-ribeye.jpg",
  description:
    "Our premium steaks are hand-selected and expertly cut to ensure the perfect balance of flavor and tenderness. From classic ribeyes to tender filet mignon, each cut is carefully prepared to meet our high standards.",
};

const CutSection = ({ cut = defaultCut }) => {
  return (
    <section id={cut.id} className="  bg-[#1a1a1a]">
      <div className="mx-auto">
        {/* Cut Header */}
        <div className="flex flex-col md:flex-row items-center gap-20 mb-16 w-5/6 mx-auto">
          {/* Cut Image */}
          <div className="relative w-[350px] h-[200px] flex-shrink-0 border-4 border-[#F4C430] rounded-sm overflow-hidden shadow-[0_0_20px_rgba(244,196,48,0.2)]">
            <Image
              src={cut.image}
              alt={`${cut.name} cut`}
              fill
              className="object-cover"
            />
          </div>

          {/* Cut Info */}
          <div className="flex-grow">
            <h2 className="text-[#F4C430] text-4xl font-gin mb-4 [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
              {cut.name}
            </h2>
            <p className="text-[#f7f1e8]/80 text-lg leading-relaxed max-w-3xl">
              {cut.description}
            </p>
          </div>
        </div>

        {/* Products Section */}
        <ProductsSection type={cut.id} category="cuts" />
      </div>
    </section>
  );
};

export default CutSection;

import React from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard/ProductCard";

const defaultCut = {
  id: "steaks",
  name: "PREMIUM STEAKS",
  image: "/images/products/argentine-ribeye.jpg",
  description:
    "Our premium steaks are hand-selected and expertly cut to ensure the perfect balance of flavor and tenderness. From classic ribeyes to tender filet mignon, each cut is carefully prepared to meet our high standards.",
};

const CutSection = ({ cut = defaultCut }) => {
  return (
    <section
      id={cut.id}
      className="w-full py-24 lg:py-32 bg-[#1a1a1a] border-t border-[#333]"
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Image */}
          <div className="w-full lg:w-1/3 aspect-video relative rounded-sm overflow-hidden">
            <Image
              src={cut.image}
              alt={cut.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-[#F4C430] text-4xl lg:text-5xl font-bold mb-6 font-gin">
              {cut.name}
            </h2>
            <p className="text-[#f7f1e8] text-lg leading-relaxed max-w-2xl lg:max-w-none">
              {cut.description}
            </p>
          </div>
        </div>

        {/* Products */}
        <ProductCard type={cut.id} />
      </div>
    </section>
  );
};

export default CutSection;

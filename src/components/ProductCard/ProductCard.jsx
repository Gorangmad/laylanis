"use client";
import React, { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "SIRLOIN STEAK",
    description:
      "Sirloin steak is from the loin, perfect for grilling, frying, bbq or as a roasting joint.",
    price: 27.95,
    image: "/images/products/product1.png",
    perfectFor: ["BBQ", "GRILLING"],
  },
  {
    id: 2,
    name: "RIBEYE STEAK",
    description:
      "Known for its rich marbling and exceptional flavor, ribeye is perfect for pan-searing or grilling to medium-rare perfection.",
    price: 32.95,
    image: "/images/products/product1.png",
    perfectFor: ["BBQ", "GRILLING"],
  },
  {
    id: 3,
    name: "T-BONE STEAK",
    description:
      "A premium cut featuring both tenderloin and strip steak, separated by a T-shaped bone. Ideal for grilling or broiling.",
    price: 34.95,
    image: "/images/products/product1.png",
    perfectFor: ["BBQ", "GRILLING"],
  },
  {
    id: 4,
    name: "TENDERLOIN",
    description:
      "The most tender cut of beef, perfect for special occasions. Best served medium-rare to maintain its buttery texture.",
    price: 39.95,
    image: "/images/products/product1.png",
    perfectFor: ["BBQ", "GRILLING"],
  },
  {
    id: 5,
    name: "FLANK STEAK",
    description:
      "A lean and flavorful cut that's perfect for marinating. Best grilled and sliced against the grain for maximum tenderness.",
    price: 24.95,
    image: "/images/products/product1.png",
    perfectFor: ["BBQ", "GRILLING"],
  },
];

const ProductCard = () => {
  const [currentProduct, setCurrentProduct] = useState(0);

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="relative w-full min-h-screen bg-black">
      <section className="w-11/12 mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpeg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full py-16 md:py-0 lg:pb-12">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-full">
            {/* <div className="text-center py-8">
              <h2 className="text-[#E85B4E]  text-xl md:text-2xl lg:text-4xl font-bold mb-5 md:mb-8 uppercase tracking-wide leading-normal">
                Customer favorites
              </h2>
              <p className="text-[#f7f1e8]/90  text-base lg:text-lg  mb-8 md:mb-12 leading-tight sm:leading-relaxed tracking-wide w-11/12 sm:w-5/6 md:w-4/5 mx-auto">
                We have a huge selection of the finest quality meats in store.
                Below is a small selection of some of the firm favorites among
                our customers.
              </p>

              Separator Line
              <div className="w-44 h-[2px] bg-white mx-auto "></div>
            </div>  */}
            <div className="flex flex-col h-full">
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="space-y-8">
                  {/* Title */}
                  <h2 className="text-[#d94a4a] text-4xl sm:text-5xl text-center uppercase tracking-wide">
                    {products[currentProduct].name}
                  </h2>

                  {/* Description */}
                  <p className="text-white text-center font-light max-w-md mx-auto">
                    {products[currentProduct].description}
                  </p>

                  {/* Image */}
                  <div className="relative w-full aspect-[3/3] max-w-[400px] mx-auto my-8">
                    {/* Navigation Arrows - Mobile */}
                    <div className="md:hidden  absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between  sm:-mx-6">
                      <button
                        onClick={prevProduct}
                        className="w-12 h-12 rounded-full border-2 border-[#d94a4a] flex items-center justify-center group hover:bg-[#d94a4a] transition-colors"
                        aria-label="Previous product"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="rotate-180"
                        >
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="#d94a4a"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:stroke-white transition-colors"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={nextProduct}
                        className="w-12 h-12 rounded-full border-2 border-[#d94a4a] flex items-center justify-center group hover:bg-[#d94a4a] transition-colors"
                        aria-label="Next product"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="#d94a4a"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:stroke-white transition-colors"
                          />
                        </svg>
                      </button>
                    </div>

                    <Image
                      src={products[currentProduct].image}
                      alt={products[currentProduct].name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* Price */}
                  <p className="text-white text-lg text-center tracking-wide mb-8">
                    FROM €{products[currentProduct].price} PER/KG
                  </p>

                  {/* Perfect For */}
                  <div className="max-w-xs mx-auto">
                    <p className="text-[#d94a4a] text-lg mb-6 uppercase tracking-wider font-bold text-center">
                      PERFECT FOR
                    </p>
                    <div className="flex justify-center gap-8">
                      {products[currentProduct].perfectFor.map((item) => (
                        <div
                          key={item}
                          className="flex flex-col items-center space-y-2"
                        >
                          <div className="w-12 h-12">
                            <Image
                              src={`/icons/${item.toLowerCase()}.svg`}
                              alt={item}
                              width={48}
                              height={48}
                            />
                          </div>
                          <span className="text-white text-sm uppercase">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-4   md:items-center">
                {/* Left Column - Product Info */}
                <div className="md:col-span-1">
                  <h2 className="text-[#d94a4a] text-5xl mb-10 uppercase tracking-wide">
                    {products[currentProduct].name}
                  </h2>
                  <p className="text-white mb-16 font-light text-sm lg:text-base">
                    {products[currentProduct].description}
                  </p>
                  <p className="text-white text-sm lg:text-lg tracking-wide">
                    FROM €{products[currentProduct].price} PER/KG
                  </p>
                </div>

                {/* Center Column - Product Image */}
                <div className="md:col-span-2 flex justify-center items-center">
                  <div className="relative w-[520px] h-[700px]">
                    <Image
                      src={products[currentProduct].image}
                      alt={products[currentProduct].name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Right Column - Perfect For */}
                <div className="md:col-span-1 lg:pl-16">
                  <div className="text-start">
                    <p className="text-[#d94a4a] text-lg mb-8 uppercase tracking-wider font-bold">
                      PERFECT FOR
                    </p>
                    <div className="space-y-6">
                      {products[currentProduct].perfectFor.map((item) => (
                        <div
                          key={item}
                          className="flex justify-start items-center space-x-6"
                        >
                          <span className="text-white text-xl uppercase">
                            {item}
                          </span>
                          <div className="w-12 h-12">
                            <Image
                              src={`/icons/${item.toLowerCase()}.svg`}
                              alt={item}
                              width={48}
                              height={48}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows - Desktop */}
              <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 space-x-6">
                <button
                  onClick={prevProduct}
                  className="w-14 h-14 rounded-full border-2 border-[#d94a4a] flex items-center justify-center group hover:bg-[#d94a4a] transition-colors"
                  aria-label="Previous product"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="rotate-180"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#d94a4a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-white transition-colors"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextProduct}
                  className="w-14 h-14 rounded-full border-2 border-[#d94a4a] flex items-center justify-center group hover:bg-[#d94a4a] transition-colors"
                  aria-label="Next product"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#d94a4a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-white transition-colors"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;

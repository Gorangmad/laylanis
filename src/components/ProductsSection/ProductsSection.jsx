"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductCard from "../ProductCard/ProductCard";
import { allProducts } from "@/data/products";

const ProductsSection = ({ type = "hueftsteak", category = "cuts" }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // Get products based on category and type
  const products =
    category === "countries"
      ? allProducts.countries[type]?.products || []
      : allProducts.cuts[type] || [];

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex(
      (prev) => (prev - 1 + products.length) % products.length
    );
  };

  // If no products found, return null or a message
  if (!products.length) {
    return null;
  }

  return (
    <section className="relative w-full min-h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Background"
          fill
          className="object-cover brightness-[170%] contrast-110 saturate-105"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-11/12 mx-auto">
        <div className="h-full py-16 md:py-0 lg:pb-12">
          <div className="max-w-[1400px] mx-auto md:px-4 h-full">
            <div className="flex flex-col h-full">
              {/* Product Card */}
              <ProductCard product={products[currentProductIndex]} />

              {/* Navigation Arrows - Mobile */}
              <div className="md:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between sm:px-0 sm:-mx-6 z-20">
                <button
                  onClick={prevProduct}
                  className="w-12 h-12 rounded-full border-2 border-[#F4C430] flex items-center justify-center group hover:bg-gradient-to-b from-[#F4C430] to-[#DAA520] transition-colors"
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
                      stroke="#F4C430"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-white transition-colors"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextProduct}
                  className="w-12 h-12 rounded-full border-2 border-[#F4C430] flex items-center justify-center group hover:bg-gradient-to-b from-[#F4C430] to-[#DAA520] transition-colors"
                  aria-label="Next product"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#F4C430"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-white transition-colors"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Arrows - Desktop */}
              <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 space-x-6">
                <button
                  onClick={prevProduct}
                  className="w-14 h-14 rounded-full border-2 border-[#F4C430] flex items-center justify-center group hover:bg-gradient-to-b from-[#F4C430] to-[#DAA520] transition-colors"
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
                      stroke="#F4C430"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-white transition-colors"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextProduct}
                  className="w-14 h-14 rounded-full border-2 border-[#F4C430] flex items-center justify-center group hover:bg-gradient-to-b from-[#F4C430] to-[#DAA520] transition-colors"
                  aria-label="Next product"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#F4C430"
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
      </div>
    </section>
  );
};

export default ProductsSection;

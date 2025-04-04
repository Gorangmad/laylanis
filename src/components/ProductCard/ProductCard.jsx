"use client";
import React, { useEffect } from "react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  // ✅ Bild vorladen für bessere UX
  useEffect(() => {
    const img = new Image();
    img.src = product.image;
  }, [product.image]);

  return (
    <div className="flex flex-col h-full">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="space-y-8">
          {/* Titel */}
          <h2 className="text-[#F4C430] [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] text-4xl sm:text-5xl text-center uppercase tracking-wide">
            {product.name}
          </h2>

          {/* Beschreibung */}
          <p className="text-white text-center font-light max-w-md mx-auto">
            {product.description}
          </p>

          {/* Bild */}
          <div className="relative w-full aspect-[3/3] max-w-[350px] mx-auto my-8">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Preis */}
          <p className="text-white text-lg text-center tracking-wide mb-8">
            AB €{product.price} PRO KG
          </p>

          {/* Perfekt für */}
          <div className="max-w-xs mx-auto">
            <p className="text-[#F4C430] text-lg mb-6 uppercase tracking-wider font-bold text-center">
              PERFEKT FÜR
            </p>
            <div className="flex justify-center gap-8">
              {product.perfectFor.map((item) => (
                <div
                  key={item}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="w-12 h-12">
                    <img
                      src={`/icons/${item.toLowerCase()}.svg`}
                      alt={item}
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-white text-sm uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-4 md:items-center">
        {/* Linke Spalte – Info */}
        <div className="md:col-span-1">
          <h2 className="text-[#F4C430] [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] text-5xl mb-10 uppercase tracking-wide">
            {product.name}
          </h2>
          <p className="text-white mb-16 font-light text-sm lg:text-base">
            {product.description}
          </p>
          <p className="text-white text-sm lg:text-lg tracking-wide mb-6">
            AB €{product.price} PRO KG
          </p>
        </div>

        {/* Mitte – Bild */}
        <div className="md:col-span-2 flex justify-center items-center">
          <div className="relative w-[520px] h-[700px]">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-full"
              loading="eager"
            />
          </div>
        </div>

        {/* Rechte Spalte – Perfekt für */}
        <div className="md:col-span-1 lg:pl-16">
          <div className="text-start">
            <p className="text-[#F4C430] text-lg mb-8 uppercase tracking-wider font-bold">
              PERFEKT FÜR
            </p>
            <div className="space-y-6">
              {product.perfectFor.map((item) => (
                <div
                  key={item}
                  className="flex justify-start items-center space-x-6"
                >
                  <span className="text-white text-xl uppercase">{item}</span>
                  <div className="w-12 h-12">
                    <img
                      src={`/icons/${item.toLowerCase()}.svg`}
                      alt={item}
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

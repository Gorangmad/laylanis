"use client";
import React from "react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="space-y-8">
          {/* Title */}
          <h2 className="text-[#F4C430] [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] text-4xl sm:text-5xl text-center uppercase tracking-wide">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-white text-center font-light max-w-md mx-auto">
            {product.description}
          </p>

          {/* Image */}
          <div className="relative w-full aspect-[3/3] max-w-[350px] mx-auto my-8">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Price */}
          <p className="text-white text-lg text-center tracking-wide mb-8">
            FROM €{product.price} PER/KG
          </p>

          {/* Perfect For */}
          <div className="max-w-xs mx-auto">
            <p className="text-[#F4C430] text-lg mb-6 uppercase tracking-wider font-bold text-center">
              PERFECT FOR
            </p>
            <div className="flex justify-center gap-8">
              {product.perfectFor.map((item) => (
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
                  <span className="text-white text-sm uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-4 md:items-center">
        {/* Left Column - Product Info */}
        <div className="md:col-span-1">
          <h2 className="text-[#F4C430] [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] text-5xl mb-10 uppercase tracking-wide">
            {product.name}
          </h2>
          <p className="text-white mb-16 font-light text-sm lg:text-base">
            {product.description}
          </p>
          <p className="text-white text-sm lg:text-lg tracking-wide mb-6">
            FROM €{product.price} PER/KG
          </p>
        </div>

        {/* Center Column - Product Image */}
        <div className="md:col-span-2 flex justify-center items-center">
          <div className="relative w-[520px] h-[700px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Column - Perfect For */}
        <div className="md:col-span-1 lg:pl-16">
          <div className="text-start">
            <p className="text-[#F4C430] text-lg mb-8 uppercase tracking-wider font-bold">
              PERFECT FOR
            </p>
            <div className="space-y-6">
              {product.perfectFor.map((item) => (
                <div
                  key={item}
                  className="flex justify-start items-center space-x-6"
                >
                  <span className="text-white text-xl uppercase">{item}</span>
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
    </div>
  );
};

export default ProductCard;

"use client";

import React from "react";
import Image from "next/image";
import ProductCard from "../ProductCard/ProductCard";
import ProductsSection from "../ProductsSection/ProductsSection";

const CountrySection = ({ country, products }) => {
  return (
    <section id={country.id} className="pt-24 bg-[#1a1a1a]">
      <div className="mx-auto">
        {/* Country Header */}
        <div className="flex flex-col md:flex-row items-center gap-20 mb-16 w-5/6 mx-auto">
          {/* Flag */}
          <div className="relative w-[350px] h-[200px] flex-shrink-0 border-4 border-[#F4C430] rounded-sm overflow-hidden shadow-[0_0_20px_rgba(244,196,48,0.2)]">
            <Image
              src={country.flag}
              alt={`${country.name} flag`}
              fill
              className="object-cover"
            />
          </div>

          {/* Country Info */}
          <div className="flex-grow">
            <h2 className="text-[#F4C430] text-4xl font-gin mb-4 [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
              {country.name}
            </h2>
            <p className="text-[#f7f1e8]/80 text-lg leading-relaxed max-w-3xl">
              {country.description}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {/* <div className=" ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
        <ProductsSection type={country.id} category="countries" />
      </div>
    </section>
  );
};

export default CountrySection;

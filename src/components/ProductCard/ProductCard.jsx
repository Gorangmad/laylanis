"use client";
import React, { useState } from "react";
import Image from "next/image";

const allProducts = {
  hueftsteak: [
    {
      id: 1,
      name: "PREMIUM HÜFTSTEAK",
      description:
        "Premium cut from the hip, perfect for grilling. 250g portion.",
      price: 27.95,
      image: "/images/products/argentine-ribeye.jpg",
      perfectFor: ["BBQ", "GRILLING"],
    },
    {
      id: 2,
      name: "FAMILY HÜFTSTEAK",
      description:
        "Larger 400g portion, ideal for sharing or larger appetites.",
      price: 42.95,
      image: "/images/products/irish-striploin.jpg",
      perfectFor: ["BBQ", "FAMILY MEALS"],
    },
  ],
  ribeye: [
    {
      id: 1,
      name: "CLASSIC RIB-EYE",
      description: "300g of perfectly marbled ribeye steak.",
      price: 34.95,
      image: "/images/products/irish-striploin.jpg",
      perfectFor: ["BBQ", "GRILLING"],
    },
    {
      id: 2,
      name: "PREMIUM AGED RIB-EYE",
      description: "28-day aged ribeye steak, 300g of intense flavor.",
      price: 39.95,
      image: "/images/products/argentine-ribeye.jpg",
      perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
    },
  ],
  rinderfilet: [
    {
      id: 1,
      name: "CLASSIC RINDERFILET",
      description:
        "200g of our most tender cut, perfect for special occasions.",
      price: 44.95,
      image: "/images/products/argentine-ribeye.jpg",
      perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
    },
    {
      id: 2,
      name: "PREMIUM RINDERFILET",
      description: "Center-cut 250g filet, the crown jewel of tender beef.",
      price: 54.95,
      image: "/images/products/irish-striploin.jpg",
      perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
    },
  ],
  roastbeef: [
    {
      id: 1,
      name: "TRADITIONAL ROASTBEEF",
      description: "1kg joint perfect for Sunday roast.",
      price: 32.95,
      image: "/images/products/irish-striploin.jpg",
      perfectFor: ["ROASTING", "FAMILY MEALS"],
    },
    {
      id: 2,
      name: "PREMIUM AGED ROASTBEEF",
      description: "28-day aged 1.2kg joint for superior flavor.",
      price: 39.95,
      image: "/images/products/argentine-ribeye.jpg",
      perfectFor: ["ROASTING", "SPECIAL OCCASIONS"],
    },
  ],
  rumpsteak: [
    {
      id: 1,
      name: "CLASSIC RUMPSTEAK",
      description: "250g cut with perfect fat marbling.",
      price: 29.95,
      image: "/images/products/argentine-ribeye.jpg",
      perfectFor: ["BBQ", "GRILLING"],
    },
    {
      id: 2,
      name: "PREMIUM RUMPSTEAK",
      description: "300g center-cut portion with extra marbling.",
      price: 34.95,
      image: "/images/products/irish-striploin.jpg",
      perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
    },
  ],
  tbone: [
    {
      id: 1,
      name: "CLASSIC T-BONE",
      description:
        "500g of the perfect combination - tenderloin and strip steak.",
      price: 39.95,
      image: "/images/products/american-tomahawk.jpg",
      perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
    },
    {
      id: 2,
      name: "PREMIUM T-BONE",
      description: "700g cut for serious steak lovers.",
      price: 49.95,
      image: "/images/products/american-tomahawk.jpg",
      perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
    },
  ],
  specialcuts: [
    {
      id: 1,
      name: "TOMAHAWK STEAK",
      description: "1kg bone-in ribeye, our most impressive cut.",
      price: 69.95,
      image: "/images/products/american-tomahawk.jpg",
      perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
    },
    {
      id: 2,
      name: "WAGYU RIBEYE",
      description: "300g of premium marbled Wagyu beef.",
      price: 89.95,
      image: "/images/products/argentine-ribeye.jpg",
      perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
    },
  ],
};

const ProductCard = ({ type = "hueftsteak" }) => {
  const products = allProducts[type] || allProducts.hueftsteak;
  const [currentProduct, setCurrentProduct] = useState(0);

  // Ensure we have valid products
  if (!products || products.length === 0) {
    return null;
  }

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
          <div className="max-w-[1400px] mx-auto md:px-4 h-full">
            <div className="flex flex-col h-full">
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="space-y-8">
                  {/* Title */}
                  <h2 className="text-[#F4C430] [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] text-4xl sm:text-5xl text-center uppercase tracking-wide">
                    {products[currentProduct].name}
                  </h2>

                  {/* Description */}
                  <p className="text-white text-center font-light max-w-md mx-auto">
                    {products[currentProduct].description}
                  </p>

                  {/* Image */}
                  <div className="relative w-full aspect-[3/3] max-w-[350px] mx-auto my-8">
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
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
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
                  <button className="w-full max-w-xs mx-auto block bg-gradient-to-b from-[#F4C430] to-[#DAA520] hover:from-[#DAA520] hover:to-[#F4C430] text-white py-3 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm font-medium shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
                    ADD TO CART
                  </button>

                  {/* Perfect For */}
                  <div className="max-w-xs mx-auto">
                    <p className="text-[#F4C430] text-lg mb-6 uppercase tracking-wider font-bold text-center">
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
              <div className="hidden md:grid md:grid-cols-4 md:items-center">
                {/* Left Column - Product Info */}
                <div className="md:col-span-1">
                  <h2 className="text-[#F4C430] [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] text-5xl mb-10 uppercase tracking-wide">
                    {products[currentProduct].name}
                  </h2>
                  <p className="text-white mb-16 font-light text-sm lg:text-base">
                    {products[currentProduct].description}
                  </p>
                  <p className="text-white text-sm lg:text-lg tracking-wide mb-6">
                    FROM €{products[currentProduct].price} PER/KG
                  </p>
                  <button className="w-full bg-gradient-to-b from-[#F4C430] to-[#DAA520] hover:from-[#DAA520] hover:to-[#F4C430] text-white py-3 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm font-medium shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
                    ADD TO CART
                  </button>
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
                    <p className="text-[#F4C430] text-lg mb-8 uppercase tracking-wider font-bold">
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
      </section>
    </div>
  );
};

export default ProductCard;

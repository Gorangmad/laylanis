import React from "react";
import Image from "next/image";

const FeaturesCard2 = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#1A1A1A] font-montserrat">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full   z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Background texture"
          fill
          className="object-cover object-center w-full h-full brightness-[170%] contrast-110 saturate-105"
          sizes="100vw"
          priority
          quality={100}
        />
        {/* Noise texture overlay using CSS */}
        <div className="absolute inset-0 w-full h-full opacity-[0.15] mix-blend-overlay bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:4px_4px]" />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/25 via-black/20 to-black/25" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-[#E85B4E]  text-xl md:text-2xl lg:text-3xl font-bold mb-5 md:mb-8 uppercase tracking-wide leading-normal">
            WE ENSURE YOU RECEIVE THE FRESHEST MEAT POSSIBLE.
          </h2>
          <p className="text-[#f7f1e8]/90  text-base lg:text-lg  mb-8 md:mb-12 leading-tight sm:leading-relaxed tracking-wide w-11/12 sm:w-5/6 md:w-4/5 mx-auto">
            All our meat is fresh and never frozen. We take great care to ensure
            all our meats are of the highest standard when purchased. In
            addition, all our beef is 28 day aged to ensure it tastes excellent.
            You have the option to have your meat vacuum packed by us for
            storing and for sealing in that freshness.
          </p>

          {/* Separator Line */}
          <div className="w-44 h-[2px] bg-white mx-auto mb-16"></div>

          {/* Image Container */}
          <div className="relative w-full aspect-[16/6] lg:aspect-[21/8]  2xl:aspect-[21/9] rounded-lg overflow-hidden">
            <Image
              src="/meat-2.png"
              alt="Various premium meat cuts on wooden board"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard2;

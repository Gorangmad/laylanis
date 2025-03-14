import React from "react";
import Image from "next/image";

const Timings = () => {
  return (
    <section className="relative w-full py-24 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Background texture"
          fill
          className="object-cover object-center w-full h-full brightness-[170%] contrast-110 saturate-105"
          sizes="100vw"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-[#d94a4a] text-[2rem] lg:text-[3rem] mb-16 uppercase font-bold tracking-wide">
            OPENING TIMES
          </h2>

          {/* Opening Hours */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12">
            <p className="text-white text-[1.5rem] lg:text-[1.75rem] font-medium tracking-wider">
              TUESDAY - SATURDAY
            </p>
            <p className="text-white text-[1.5rem] lg:text-[1.75rem] font-medium tracking-wider">
              10:00 - 1600
            </p>
          </div>

          {/* Description */}
          <p className="text-white/80 text-[0.875rem] lg:text-[1rem] leading-[1.8] tracking-wide max-w-3xl mx-auto">
            Although we have our official closing time of 16:00 often we are
            still in the store after this time. If you find yourself running a
            little late not to worry, we may still be open, however just give us
            a quick ring to make sure and to give us time to prepare your order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timings;

import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative flex overflow-hidden w-full min-h-screen py-20 lg:py-40 justify-center items-center font-montserrat text-[#f7f1e8]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/about-3.jpg"
          alt="Butcher shop background"
          fill
          className="object-cover object-center w-full h-full brightness-[100%] contrast-110 saturate-100"
          sizes="100vw"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-11/12 px-4 lg:px-8 mx-auto">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          <p className="text-[#F4C430] text-lg md:text-xl uppercase tracking-widest mb-4">
            WELCOME TO...
          </p>
          <h1 className="text-[#f7f1e8] font-gin text-4xl md:text-5xl lg:text-7xl font-bold mb-6 uppercase tracking-wide leading-tight">
            LIAM&apos;S QUALITY <br /> MEATS.
          </h1>
          <p className="text-[#f7f1e8]/90 text-base md:text-lg leading-relaxed tracking-wide max-w-xl">
            We would like to wish you a warm welcome to our family
            Butcher&apos;s. Liam&apos;s Quality Meats is your one stop shop for
            all your meat needs on the Costa Del Sol. We look forward to
            welcoming you in store soon.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-8 border-2 border-[#f7f1e8] rounded-full flex items-center justify-center animate-bounce">
          <svg
            className="w-4 h-4 text-[#f7f1e8]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Fade } from "react-awesome-reveal";

const Hero = ({
  backgroundImage,
  overlayOpacity = 40,
  tagline,
  taglineColor = "#F4C430",
  title,
  description,
  buttonText,
  buttonLink,
  showFloatingImage = false,
  floatingImage,
  showScrollIndicator = true,
  rotateValue = 20,
  showLottie = false,
  className = "",
}) => {
  return (
    <section
      className={`relative flex overflow-hidden w-full min-h-screen py-20   justify-center items-center font-montserrat text-[#f7f1e8] ${className}`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover object-center w-full h-full brightness-[170%] contrast-110 saturate-105"
          sizes="100vw"
          priority
          quality={100}
        />
        <div className={`absolute inset-0 bg-black/${overlayOpacity}`} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-11/12 px-4 lg:px-8 mx-auto top-14 lg:top-28">
        {/* Floating Image (Optional) */}
        {showFloatingImage && floatingImage && (
          <div
            className={`absolute w-[80vw] h-[60vw] max-w-[500px] max-h-[500px] left-1/2 -translate-x-1/2 -top-20 lg:absolute lg:-right-28 lg:top-1/2 lg:-translate-y-1/2 lg:w-[57vw] lg:h-[57vw] lg:max-w-[900px] lg:max-h-[900px] lg:rotate-${rotateValue} lg:mt-10 lg:mb-0 lg:left-auto lg:translate-x-0`}
          >
            <Image
              src={floatingImage}
              alt="Floating image"
              fill
              className="object-contain"
              priority
            />
          </div>
        )}

        {/* {showLottie && (
          <div className="absolute w-full h-full -top-20 -right-80">
            <DotLottieReact
              src="/lotties/contact.lottie"
              autoplay
              loop
              style={{ width: "100%", height: "100%" }.kl
            lk]]l]op}
            />
          </div>
        )} */}

        {/* Content */}
        <div
          className={`max-w-2xl text-center lg:text-left mx-auto lg:mx-0 ${
            showFloatingImage ? "mt-[35vw] md:mt-[45vh] lg:mt-0" : ""
          }`}
        >
          {tagline && (
            <p className="text-[#F4C430] text-[3.2vw] lg:text-[1.5vw] mb-3 lg:mb-4 font-medium tracking-wide uppercase">
              {tagline}
            </p>
          )}

          {title && (
            <Fade cascade={false} direction="up">
              <h1 className="text-[#f7f1e8] font-gin text-[7vw] lg:text-[4.5vw] font-bold mb-4 lg:mb-6 leading-tight uppercase">
                {title}
              </h1>
            </Fade>
          )}

          {description && (
            <p className="text-[#f7f1e8]/90 text-[2.8vw] md:text-[2.2vw] lg:text-[1.4vw] mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0">
              {description}
            </p>
          )}

          {buttonText && buttonLink && (
            <Link href={buttonLink}>
              <Button
                variant="outline"
                className="text-[3vw] md:text-[1.8vw] lg:text-[1.2vw] px-5 lg:px-8 py-2.5 lg:py-3"
              >
                {buttonText}
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
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
      )}
    </section>
  );
};

export default Hero;

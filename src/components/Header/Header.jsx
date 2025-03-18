"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <>
      <header className="absolute w-full top-0 z-[100]">
        {/* Background with transition */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isMenuOpen
              ? "bg-black"
              : "bg-gradient-to-b from-black/80 to-transparent "
          }`}
        />

        {/* Header Content */}
        <div className="relative z-10 flex justify-between items-center py-4 md:py-6 px-4 md:px-12 text-white">
          {/* Logo */}
          <div className="logo flex items-center flex-col">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Liam's Quality Meats Logo"
                width={80}
                height={80}
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain"
                priority
              />
            </Link>
            <h1 className="text-[#F4C430] text-2xl  ">Laylani&apos;s</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-[18px] font-medium hover:text-[#F4C430] transition-colors tracking-wide"
            >
              HOME
            </Link>
            {/* Products Dropdown */}

            <Link
              href="/about-us"
              className="text-[18px] font-medium hover:text-[#F4C430] transition-colors tracking-wide"
            >
              ABOUT US
            </Link>
            <div className="relative group">
              <div className="flex flex-col items-center">
                <p className="cursor-pointer text-[18px] font-medium hover:text-[#F4C430] transition-colors tracking-wide">
                  PRODUCTS
                </p>
                {/* Invisible bridge to maintain hover */}
                <div className="absolute w-full h-12 top-full" />
                {/* Dropdown Cards Container */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-8 transition-all duration-300 ease-in-out flex gap-4 opacity-0 -translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                  {/* Origin Card */}
                  <div className="w-[280px] bg-[#FFF5EE] rounded-sm p-6 shadow-lg">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 mb-4">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-full h-full text-[#F4C430]"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        SHOP BY ORIGIN
                      </h3>
                      <Link
                        href="/products/origin"
                        className="bg-[#F4C430] text-white px-6 py-2 rounded-sm hover:bg-[#DAA520] transition-colors duration-300 uppercase tracking-wider text-sm font-medium"
                      >
                        VIEW MORE
                      </Link>
                    </div>
                  </div>
                  {/* Cuts Card */}
                  <div className="w-[280px] bg-[#FFF5EE] rounded-sm p-6 shadow-lg">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 mb-4">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-full h-full text-[#F4C430]"
                          fill="currentColor"
                        >
                          <path d="M19.96 12L22 8.5L19.96 5H14.5L12.5 2H11.5L9.5 5H4.04L2 8.5L4.04 12L2 15.5L4.04 19H9.5L11.5 22H12.5L14.5 19H19.96L22 15.5L19.96 12ZM12 17.5C9.24 17.5 7 15.26 7 12.5C7 9.74 9.24 7.5 12 7.5C14.76 7.5 17 9.74 17 12.5C17 15.26 14.76 17.5 12 17.5Z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        SHOP BY CUT
                      </h3>
                      <Link
                        href="/products/cuts"
                        className="bg-[#F4C430] text-white px-6 py-2 rounded-sm hover:bg-[#DAA520] transition-colors duration-300 uppercase tracking-wider text-sm font-medium"
                      >
                        VIEW MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-transparent text-[#F4C430] border-2 border-[#F4C430] px-8 py-3 rounded-sm 
              hover:bg-[#F4C430] hover:text-[#f7f1e8] transition-all duration-300 uppercase tracking-wider text-[16px] font-medium"
            >
              GET IN TOUCH
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-end gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "w-8 rotate-45 translate-y-2" : "w-8"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "w-8 opacity-0" : "w-6"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "w-8 -rotate-45 -translate-y-2" : "w-4"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-black transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-[#F4C430] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about-us"
              className="block text-white hover:text-[#F4C430] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <div className="space-y-4">
              <span className="block text-white">PRODUCTS</span>
              <div className="grid grid-cols-2 gap-4 pl-4">
                <Link
                  href="/products/origin"
                  className="block bg-[#FFF5EE] p-4 rounded-sm text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-8 h-8 mx-auto mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full text-[#F4C430]"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <span className="text-gray-800 text-sm font-medium">
                    SHOP BY ORIGIN
                  </span>
                </Link>
                <Link
                  href="/products/cuts"
                  className="block bg-[#FFF5EE] p-4 rounded-sm text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-8 h-8 mx-auto mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full text-[#F4C430]"
                      fill="currentColor"
                    >
                      <path d="M19.96 12L22 8.5L19.96 5H14.5L12.5 2H11.5L9.5 5H4.04L2 8.5L4.04 12L2 15.5L4.04 19H9.5L11.5 22H12.5L14.5 19H19.96L22 15.5L19.96 12ZM12 17.5C9.24 17.5 7 15.26 7 12.5C7 9.74 9.24 7.5 12 7.5C14.76 7.5 17 9.74 17 12.5C17 15.26 14.76 17.5 12 17.5Z" />
                    </svg>
                  </div>
                  <span className="text-gray-800 text-sm font-medium">
                    SHOP BY CUT
                  </span>
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="block text-[#F4C430] border-2 border-[#F4C430] py-3 text-center rounded-sm hover:bg-[#F4C430] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

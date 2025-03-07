"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute w-full top-0 z-[100]">
        {/* Background with transition */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isMenuOpen ? "bg-black" : "bg-gradient-to-b  to-transparent"
          }`}
        />

        {/* Header Content */}
        <div className="relative z-10 flex justify-between items-center py-4 md:py-6 px-4 md:px-12 text-white">
          {/* Logo */}
          <div className="logo">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Liam's Quality Meats Logo"
                width={120}
                height={120}
                className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain"
                priority
              />
            </Link>
          </div>

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-[18px] font-medium hover:text-red-500 transition-colors tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[18px] font-medium hover:text-red-500 transition-colors tracking-wide"
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="text-[18px] font-medium hover:text-red-500 transition-colors tracking-wide"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-red-500 border-2 border-red-500 px-8 py-3 rounded-sm 
              hover:bg-red-500 hover:text-[#f7f1e8] transition-all duration-300 uppercase tracking-wider text-[16px] font-medium"
            >
              <button>Get in Touch</button>
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden relative z-10 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="border-t border-white/10">
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-white text-[18px] font-medium py-4 px-4 hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white text-[18px] font-medium py-4 px-4 hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-white text-[18px] font-medium py-4 px-4 hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="text-red-500 text-[16px] font-medium py-4 px-4 mx-4 my-4 border-2 border-red-500 rounded-sm
                hover:bg-red-500 hover:text-[#f7f1e8] transition-all duration-300 uppercase tracking-wider text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

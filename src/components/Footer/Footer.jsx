import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Footer background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Top Section with Logo */}
        <div className="w-full border-b border-neutral-700">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="mb-2"
              />
              <h1 className="text-[#F4C430] text-2xl mb-4">Laylani&apos;s</h1>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Products */}
            <div>
              <h3 className="text-white text-xl uppercase mb-6">PRODUCTS</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/special-packs"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Special Packs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/meats"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Meats
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-white text-xl uppercase mb-6">ABOUT US</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/our-store"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Our Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-white text-xl uppercase mb-6">ADDRESS</h3>
              <p className="text-neutral-400">
                Laylani&apos;s Quality Meats
                <br />
                Südbahnhofstrasse
                <br />
                19 Aschaffenburg
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-xl uppercase mb-6">TELEPHONE</h3>
              <p className="text-neutral-400 mb-8">
                <Link
                  href="tel:+34693651403"
                  className="hover:text-white transition-colors"
                >
                  +34 693 651 403
                </Link>
              </p>
              <h3 className="text-white text-xl uppercase mb-6">
                OPENING TIMES
              </h3>
              <p className="text-neutral-400">
                Montag - Samstag&nbsp;&nbsp;&nbsp;04:00 - 15:00
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
          <div className="flex justify-center space-x-4">
            <Link
              href="https://instagram.com"
              className="bg-[#F4C430] rounded-full p-3 hover:bg-[#DAA520] transition-colors"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://facebook.com"
              className="bg-[#F4C430] rounded-full p-3 hover:bg-[#DAA520] transition-colors"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-700">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
            <div className="text-center text-neutral-400 text-sm">
              <p>2025 All Rights Reserved Laylani&apos;s Quality Meats</p>
              <p className="mt-1"></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

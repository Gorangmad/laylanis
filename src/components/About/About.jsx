import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full bg-[#DAA520] min-h-screen grid place-items-center font-montserrat py-16 lg:py-24">
      <div className="max-w-7xl w-full mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
          {/* Left Image */}
          <div className="w-full h-full">
            <div className="relative w-full aspect-[1/1] rounded-lg overflow-hidden border-4 border-[#f7f1e8]">
              <Image
                src="/images/about-2.jpg"
                alt="Liam and Lynda - Your Family Butcher"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-[#000000] tracking-[0.2em] text-2xl lg:text-3xl mb-6">
              HI THERE!
            </h2>
            <h3 className="text-[#f7f1e8] font-bold text-4xl lg:text-5xl mb-8">
              LIAM & LYNDA,
              <br />
              YOUR FAMILY BUTCHER.
            </h3>
            <p className="text-[#f7f1e8]/90 text-lg lg:text-xl mb-10 max-w-xl mx-auto lg:mx-0">
              We would like to welcome you to our family run, premium quality
              butchers in Benavista. Both myself and Lynda look forward to
              meeting you and your family at our butchers in Benavista. Pop in
              and say hello, or feel free to get in touch anytime. See you soon.
            </p>
            <Link
              href="/about-us"
              className="inline-block bg-[#000000] text-[#f7f1e8] border-2 border-[#DAA520] 
              px-8 py-3 rounded-sm   hover:text-[#ffd466] transition-all 
              duration-300 uppercase tracking-wider text-sm font-medium"
            >
              <button>ABOUT US</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

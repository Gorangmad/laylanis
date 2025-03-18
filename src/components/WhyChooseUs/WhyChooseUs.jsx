import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#FFF5EE] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[#F4C430] text-4xl lg:text-5xl mb-6 uppercase  ">
            WE&apos;VE GOT IT IN THE BAG
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl leading-relaxed tracking-tight">
            We have been serving up the same recipe for over 8 years on the
            Costa Del Sol. Our customers have come to love us for our Quality,
            our Service, and most importantly, their Satisfaction.
          </p>
          <div className="w-32 h-0.5 bg-[#F4C430] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Quality Card */}
          <div className="bg-[#FFF5EE] p-8 md:p-4 lg:p-8 rounded-lg shadow-[0_4px_20px_rgba(244,196,48,0.15)] hover:shadow-[0_8px_30px_rgba(244,196,48,0.2)] transition-shadow duration-300 text-center text-base  md:text-sm 2xl:text-base 2xl:w-96">
            <div className="w-16 h-16 mx-auto mb-6">
              <Image
                src="/icons/quality-badge.svg"
                alt="Quality Badge"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-[#F4C430] text-2xl lg:text-3xl mb-4 uppercase font-bold">
              QUALITY
            </h3>
            <p className="text-gray-700">
              Liam&apos;s Quality Meats is just that, premium quality. When you
              shop with us you can be assured that you are purchasing the best
              quality meats your money can buy.
            </p>
          </div>

          {/* Service Card */}
          <div className="bg-[#FFF5EE] p-8 md:p-4 lg:p-8 rounded-lg shadow-[0_4px_20px_rgba(244,196,48,0.15)] hover:shadow-[0_8px_30px_rgba(244,196,48,0.2)] transition-shadow duration-300 text-center text-base  md:text-sm 2xl:text-base 2xl:w-96">
            <div className="w-16 h-16 mx-auto mb-6">
              <Image
                src="/icons/service.svg"
                alt="Service Icon"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-[#F4C430] text-2xl lg:text-3xl mb-4 uppercase font-bold">
              SERVICE
            </h3>
            <p className="text-gray-700">
              We pride ourselves on providing friendly and personal service. We
              love our customers and want their shopping experience to be as
              pleasurable as possible.
            </p>
          </div>

          {/* Satisfaction Card */}
          <div className="bg-[#FFF5EE] p-8 md:p-4 lg:p-8 rounded-lg shadow-[0_4px_20px_rgba(244,196,48,0.15)] hover:shadow-[0_8px_30px_rgba(244,196,48,0.2)] transition-shadow duration-300 text-center text-base  md:text-sm 2xl:text-base 2xl:w-96">
            <div className="w-16 h-16 mx-auto mb-6">
              <Image
                src="/icons/satisfaction.svg"
                alt="Satisfaction Icon"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-[#F4C430] text-2xl lg:text-3xl mb-4 uppercase font-bold">
              SATISFACTION
            </h3>
            <p className="text-gray-700">
              We want to provide all our customers with 100% satisfaction. We
              have been doing just that for our customers to date and we look
              forward to continuing this well into the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

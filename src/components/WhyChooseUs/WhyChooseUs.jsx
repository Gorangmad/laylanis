import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#FFF5EE] pt-10 pb-24 lg:pb-32 lg:pt-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[#F4C430] text-4xl lg:text-5xl mb-6 uppercase">
            WARUM LAYLANI&apos;S?
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl leading-relaxed tracking-tight">
            Seit über 8 Jahren beliefern wir Kunden auf höchstem Niveau. Unsere
            Partner und Kunden schätzen uns für unsere Qualität, unsere
            Zuverlässigkeit und unseren erstklassigen Service.
          </p>
          <div className="w-32 h-0.5 bg-[#F4C430] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Qualität */}
          <div className="bg-[#FFF5EE] p-8 md:p-4 lg:p-8 rounded-lg shadow-[0_4px_20px_rgba(244,196,48,0.15)] hover:shadow-[0_8px_30px_rgba(244,196,48,0.2)] transition-shadow duration-300 text-center text-base md:text-sm 2xl:text-base 2xl:w-96">
            <div className="w-16 h-16 mx-auto mb-6">
              <Image
                src="/icons/quality-badge.svg"
                alt="Qualitätssiegel"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-[#F4C430] text-2xl lg:text-3xl mb-4 uppercase font-bold">
              QUALITÄT
            </h3>
            <p className="text-gray-700">
              Laylani&apos;s steht für kompromisslose Spitzenqualität. Unser
              Fleisch stammt aus den besten Quellen weltweit – geprüft,
              rückverfolgbar und mit höchstem Anspruch an Frische und
              Geschmack.
            </p>
          </div>

          {/* Service */}
          <div className="bg-[#FFF5EE] p-8 md:p-4 lg:p-8 rounded-lg shadow-[0_4px_20px_rgba(244,196,48,0.15)] hover:shadow-[0_8px_30px_rgba(244,196,48,0.2)] transition-shadow duration-300 text-center text-base md:text-sm 2xl:text-base 2xl:w-96">
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
              Persönliche Betreuung, individuelle Beratung und absolute
              Zuverlässigkeit – wir kümmern uns darum, dass Sie genau das
              bekommen, was Sie brauchen. Pünktlich, flexibel und effizient.
            </p>
          </div>

          {/* Zufriedenheit */}
          <div className="bg-[#FFF5EE] p-8 md:p-4 lg:p-8 rounded-lg shadow-[0_4px_20px_rgba(244,196,48,0.15)] hover:shadow-[0_8px_30px_rgba(244,196,48,0.2)] transition-shadow duration-300 text-center text-base md:text-sm 2xl:text-base 2xl:w-96">
            <div className="w-16 h-16 mx-auto mb-6">
              <Image
                src="/icons/satisfaction.svg"
                alt="Zufriedenheit Icon"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-[#F4C430] text-2xl lg:text-3xl mb-4 uppercase font-bold">
              ZUFRIEDENHEIT
            </h3>
            <p className="text-gray-700">
              Wir streben nach 100 % Zufriedenheit. Ob Gastronomie, Handel oder
              Privatkunden – unsere Partner wissen: Bei Laylani&apos;s bekommen
              sie konstant Spitzenqualität, die begeistert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

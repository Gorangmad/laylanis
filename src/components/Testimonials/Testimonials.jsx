"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper-Stile
import "swiper/css";
import "swiper/css/navigation";

// Überarbeitete Testimonials
const testimonials = [
  {
    id: 1,
    text: "Als Gastronom bin ich auf konstante Qualität angewiesen – und Laylani's liefert jedes Mal. Das Fleisch ist hervorragend marmoriert und perfekt zugeschnitten. Ein zuverlässiger Partner für die gehobene Küche.",
    author: "ANDREAS – RESTAURANTBETREIBER",
  },
  {
    id: 2,
    text: "Wir bestellen regelmäßig große Mengen für unseren Cateringbetrieb. Lieferung, Qualität und Service sind jedes Mal auf höchstem Niveau. Besonders die Sondercuts beeindrucken unsere Kunden.",
    author: "FATMA – CATERING SERVICE",
  },
  {
    id: 3,
    text: "Laylani's bietet nicht nur erstklassiges Fleisch, sondern auch eine kompetente Beratung. Die Herkunft der Ware ist transparent und die Auswahl an internationalen Spezialitäten einmalig.",
    author: "MARKUS – HOTELCHEF",
  },
  {
    id: 4,
    text: "Für unseren Fleischhandel arbeiten wir nur mit Partnern, die unsere Qualitätsstandards erfüllen. Laylani’s überzeugt durch Verlässlichkeit, Premiumware und faire Konditionen – seit Jahren.",
    author: "HANNA – METZGEREIFACHHANDEL",
  },
  {
    id: 5,
    text: "Wir beziehen unser Wagyu und Angus exklusiv über Laylani’s. Die Kunden lieben es – und wir schätzen die schnelle Abwicklung, präzisen Zuschnitte und das professionelle Team im Hintergrund.",
    author: "SAMIR – ONLINE-GOURMETSHOP",
  },
  {
    id: 6,
    text: "Ob Dry-Aged, Argentinisch oder Spezialzuschnitte: Die Auswahl bei Laylani’s lässt keine Wünsche offen. Als Großkunde bekommen wir immer individuelle Lösungen – genau das brauchen wir.",
    author: "THOMAS – FLEISCHSOMMELIER",
  },
  {
    id: 7,
    text: "Die Kommunikation, die Verlässlichkeit und vor allem die Fleischqualität bei Laylani’s ist einfach erstklassig. Für unsere Sterneküche unverzichtbar.",
    author: "ELENA – KÜCHENCHEFIN",
  },
  {
    id: 8,
    text: "Wir haben viele Großhändler getestet – aber keiner kommt an die Servicequalität und Frische von Laylani's heran. Besonders die Sonderbestellungen werden exakt nach Wunsch geliefert.",
    author: "JONAS – GROSSKÜCHENBETRIEB",
  },
];

const Testimonials = () => {
  const swiperRef = React.useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="bg-[#DAA520] py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Überschrift */}
        <h2 className="text-white text-4xl md:text-5xl text-center font-bold mb-6 uppercase tracking-wider">
          KUNDENSTIMMEN
        </h2>

        {/* Einleitungstext */}
        <p className="text-white/90 text-center text-base lg:text-lg mb-8 md:mb-12 leading-tight sm:leading-relaxed tracking-wide w-11/12 sm:w-5/6 md:w-4/5 mx-auto">
          Unsere Kunden sind das Herzstück unseres Erfolgs. Ob Gastronomie,
          Einzelhandel oder Großküche – sie vertrauen auf unsere Qualität und
          unseren Service. Hier ein kleiner Einblick in ihr Feedback.
        </p>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mb-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#fff5e9] rounded-sm p-12 relative h-[380px]">
                  {/* Zitat-Icon */}
                  <div className="absolute top-2 left-2">
                    <Image
                      src="https://cdn.prod.website-files.com/6037a09f2ee93fde2f5d9ccf/606b4083bcc5e25d00257125_quote.svg"
                      alt="Zitat"
                      width={80}
                      height={80}
                      className="opacity-90"
                    />
                  </div>

                  {/* Inhalt */}
                  <div className="flex flex-col items-center justify-between h-full">
                    <div className="flex items-center justify-center h-full">
                      <p className="text-[#333333] text-base text-center leading-[1.8] mt-8 mb-6 xl:w-5/6 line-clamp-[8]">
                        {testimonial.text}
                      </p>
                    </div>
                    <p className="text-[#333333] font-bold text-xl tracking-wider text-center">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center group hover:bg-white transition-colors"
              aria-label="Vorherige Bewertung"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="rotate-180 group-hover:stroke-[#F4C430] transition-colors"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center group hover:bg-white transition-colors"
              aria-label="Nächste Bewertung"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-[#F4C430] transition-colors"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Globale Swiper-Anpassung */}
      <style jsx global>{`
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 24px !important;
          color: white;
        }
        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    text: "The products from Laylani&apos;s were amazing!! It was highly recommended by other family members and did not disappoint. Sausages were outstanding and bacon was too. I wouldn&apos;t hesitate to recommend this butchers.",
    author: "ANGELA",
  },
  {
    id: 2,
    text: "So, we visit Laylani'sregularly and each and every time it is a pleasure. Laylani's provide a complete service with outstanding meat, a great flexible and happy service and the very best favorites of sausage rolls through to pasties and everything else in between.",
    author: "CLARE",
  },
  {
    id: 3,
    text: "We visit Laylani&apos;s butcher every time we are on the coast, he is extremely friendly and helpful! His selection of meats is amazing and delicious. We have got our Christmas hampers from him the last two years and everyone loved it. Highly recommend.",
    author: "GINA",
  },
  {
    id: 4,
    text: "Best butcher shop in town! Their selection of premium cuts is unmatched. The staff is knowledgeable and always willing to help with cooking suggestions. Their homemade sausages are a must-try!",
    author: "MICHAEL",
  },
  {
    id: 5,
    text: "I&apos;ve been a regular customer for years and the quality has never disappointed. Their Christmas turkey was the star of our family dinner. The personalized service makes every visit special.",
    author: "SARAH",
  },
  {
    id: 6,
    text: "Found this gem of a butcher shop last month and I&apos;m so glad I did! The meat quality is exceptional and their prices are very reasonable. Their marinated chicken is absolutely delicious.",
    author: "JAMES",
  },
  {
    id: 7,
    text: "The attention to detail and customer service here is outstanding. They always go above and beyond to ensure you get exactly what you need. Their dry-aged steaks are simply incredible.",
    author: "EMMA",
  },
  {
    id: 8,
    text: "What sets this butcher apart is not just the quality of meat, but their willingness to special order items and cut meat exactly to your specifications. A true traditional butcher shop!",
    author: "DAVID",
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
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl text-center font-bold mb-6 uppercase tracking-wider">
          CUSTOMER REVIEWS
        </h2>

        {/* Description */}
        <p className="text-white/90 text-center text-base lg:text-lg  mb-8 md:mb-12 leading-tight sm:leading-relaxed tracking-wide w-11/12 sm:w-5/6 md:w-4/5 mx-auto">
          We love getting feedback from our customer&apos;s and are constantly
          trying to improve their experience with us. Gladly our testimonials
          are always very complimentary which makes us extremely happy.
        </p>

        {/* Testimonial Slider */}
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
                  {/* Quote Icon */}
                  <div className="absolute top-2 left-2">
                    <Image
                      src="https://cdn.prod.website-files.com/6037a09f2ee93fde2f5d9ccf/606b4083bcc5e25d00257125_quote.svg"
                      alt="Quote icon"
                      width={80}
                      height={80}
                      className="opacity-90"
                    />
                  </div>

                  {/* Testimonial Content */}
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

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center group hover:bg-white transition-colors"
              aria-label="Previous testimonial"
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
              aria-label="Next testimonial"
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

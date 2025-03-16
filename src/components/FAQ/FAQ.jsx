"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState("DO YOU DELIVER?");

  const faqs = [
    {
      question: "DO YOU DELIVER?",
      answer:
        "We do not have a full time delivery service at this time. However please give us a call and we can try to arrange a delivery for you. We understand that sometimes people cannot make it to the shop, and if that is the case we will do everything in our power to try and assist you. Please call or Whatsapp to find out more.",
    },
    {
      question: "WHAT PAYMENT METHODS DO YOU ACCEPT?",
      answer:
        "We accept cash, all major credit/debit cards, and contactless payments.",
    },
    {
      question: "WHAT IS THE BEST WAY TO ORDER?",
      answer:
        "The best way to order is to visit our shop in person or give us a call. We can discuss your requirements and ensure you get exactly what you need.",
    },
    {
      question: "IS YOUR MEAT FRESH?",
      answer:
        "Yes, all our meat is fresh and never frozen. We take great pride in the quality of our products.",
    },
  ];

  return (
    <section className="w-full bg-[#FFF5EE] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-[#F4C430] text-[2.5rem] lg:text-[4rem] mb-6 uppercase font-bold tracking-wide">
            FAQ
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-[0.875rem] lg:text-[1.1rem] leading-[1.8] tracking-wide max-w-4xl mx-auto mb-6">
            At Liam's Quality meats we are always on hand to answer any of your
            questions. Just give us a call or text on Whatsapp and we will be
            happy to assist you. Below are some frequently asked questions by
            our customers.
          </p>

          {/* Divider */}
          <div className="w-40 h-0.5 bg-[#F4C430] mx-auto mb-16"></div>

          {/* FAQ Items */}
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="text-left">
                <button
                  onClick={() =>
                    setOpenQuestion(
                      openQuestion === faq.question ? null : faq.question
                    )
                  }
                  className="w-full bg-[#F4C430] text-white p-6 rounded-sm flex justify-between items-center group transition-all duration-300"
                >
                  <span className="text-[1.1rem] sm:text-[1.375rem] lg:text-[1.5rem] font-bold tracking-wide">
                    {faq.question}
                  </span>
                  <span className="text-4xl font-light">
                    {openQuestion === faq.question ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openQuestion === faq.question
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-3   text-gray-700 text-[0.875rem] lg:text-[1.1rem] leading-[1.8] tracking-wide">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

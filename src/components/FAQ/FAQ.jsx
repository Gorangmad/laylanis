"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState("Liefern Sie auch?");

  const faqs = [
    {
      question: "Liefern Sie auch?",
      answer:
        "Für große Bestellungen bieten wir eine Lieferung an. Einzelpersonen können bequem vorbestellen und ihre Ware bei uns abholen. Kontaktieren Sie uns gerne für individuelle Absprachen.",
    },
    {
      question: "Wie kann ich am besten bestellen?",
      answer:
        "Der schnellste und einfachste Weg ist über WhatsApp. Schreiben Sie uns Ihre Bestellung – wir kümmern uns um den Rest.",
    },
    {
      question: "Was zeichnet Ihr Fleisch aus?",
      answer:
        "Wir führen nur ausgesuchtes Premium-Fleisch – von klassischen Zuschnitten bis hin zu Spezialitäten wie Wagyu. Unsere Auswahl gehört zu den besten in ganz Deutschland.",
    },
    {
      question: "Wie kann ich Sie erreichen?",
      answer:
        "Am besten erreichen Sie uns telefonisch oder per WhatsApp. Wir beraten Sie gerne persönlich und kümmern uns um Ihre Anliegen schnell und unkompliziert.",
    },
  ];

  return (
    <section className="w-full bg-[#FFF5EE] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Überschrift */}
          <h2 className="text-[#F4C430] text-[2.5rem] lg:text-[4rem] mb-6 uppercase font-bold tracking-wide">
            FAQ
          </h2>

          {/* Beschreibung */}
          <p className="text-gray-700 text-[0.875rem] lg:text-[1.1rem] leading-[1.8] tracking-wide max-w-4xl mx-auto mb-6">
            Bei Laylani's Premium Fleisch beantworten wir Ihre Fragen gerne
            persönlich. Rufen Sie uns einfach an oder schreiben Sie uns auf
            WhatsApp. Hier finden Sie die häufigsten Fragen unserer Kunden.
          </p>

          {/* Trennlinie */}
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
                    <div className="p-3 text-gray-700 text-[0.875rem] lg:text-[1.1rem] leading-[1.8] tracking-wide">
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

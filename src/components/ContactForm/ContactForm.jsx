"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";
import { Fade } from "react-awesome-reveal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulierter Versand – hier deine echte Logik einfügen
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Fehler beim Versenden des Formulars:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#fff] text-black py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Linke Seite mit Icon */}
        <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
          <Fade direction="left">
            <div className="bg-[#fffcee] rounded-full p-8 sm:p-10 md:p-12 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              <div className="w-24 sm:w-28 md:w-32 lg:w-36">
                <Image
                  src="/icons/message.svg"
                  alt="Kontakt"
                  width={150}
                  height={150}
                  className="w-full h-full"
                />
              </div>
            </div>
          </Fade>
        </div>

        {/* Rechte Seite mit Formular */}
        <div className="w-full lg:w-2/3">
          <Fade direction="up" cascade={true} damping={0.2}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4C430] mb-3 sm:mb-4 tracking-wide">
              SCHREIBEN SIE UNS.
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg">
              Für allgemeine Anfragen können Sie uns gerne direkt über dieses
              Formular kontaktieren. Wir melden uns schnellstmöglich bei Ihnen
              zurück. In dringenden Fällen empfehlen wir, uns telefonisch zu
              erreichen.
            </p>
          </Fade>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block uppercase tracking-wider text-[#F4C430] text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  className="w-full px-4 py-3 rounded-md bg-[#000] text-white placeholder-gray-400 border-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wider text-[#F4C430] text-sm font-medium mb-2"
                >
                  E-Mail-Adresse
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ihre E-Mail"
                  className="w-full px-4 py-3 rounded-md bg-[#000] text-white placeholder-gray-400 border-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block uppercase tracking-wider text-[#F4C430] text-sm font-medium mb-2"
              >
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ihre Nachricht..."
                rows="5"
                className="w-full px-4 py-3 rounded-md bg-[#000] text-white placeholder-gray-400 border-none focus:ring-2 focus:ring-white resize-none"
                required
              />
            </div>

            <div className="mt-2">
              <Button type="submit" variant="secondary">
                {isSubmitting ? "Wird gesendet..." : "Absenden"}
              </Button>

              {submitSuccess && (
                <p className="mt-2 text-green-600 font-medium">
                  Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

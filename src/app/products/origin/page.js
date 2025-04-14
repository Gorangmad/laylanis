"use client";

import React from "react";
import OriginHero from "@/components/OriginHero/OriginHero";
import CountrySection from "@/components/CountrySection/CountrySection";

// Beispielhafte Produktdaten – bitte mit deinen echten Daten ersetzen
const countryData = {
  argentina: {
    id: "argentina",
    name: "FLEISCH AUS ARGENTINIEN",
    flag: "/images/countries/argentina.jpg",
    description:
      "Argentinien ist weltbekannt für seine außergewöhnliche Fleischqualität, insbesondere aus der Region Pampas. Die Rinder werden hauptsächlich mit Gras gefüttert, was zu magerem, geschmackvollem Fleisch mit einem unverwechselbaren Aroma führt.",
    products: [
      {
        id: 1,
        name: "Argentinisches Ribeye",
        description:
          "Premium Ribeye von grasgefütterten Rindern mit exzellenter Marmorierung",
        price: "39.99",
        image: "/images/products/argentine-ribeye.jpg",
      },
      // Weitere Produkte hinzufügen...
    ],
  },
  ireland: {
    id: "ireland",
    name: "FLEISCH AUS IRLAND",
    flag: "/images/countries/ireland.png",
    description:
      "Irisches Rindfleisch ist bekannt für seine nachhaltige und grasbasierte Aufzucht. Die grünen Weiden und das milde Klima bieten ideale Bedingungen für zartes, aromatisches Fleisch.",
    products: [
      {
        id: 1,
        name: "Irisches Striploin",
        description: "Grasgefüttertes Striploin mit perfekter Marmorierung",
        price: "34.99",
        image: "/images/products/irish-striploin.jpg",
      },
      // Weitere Produkte hinzufügen...
    ],
  },
  uruguay: {
    id: "uruguay",
    name: "FLEISCH AUS URUGUAY",
    flag: "/images/countries/uruguay.jpg",
    description:
      "Uruguayanisches Rindfleisch wird für seine natürliche Grasfütterung geschätzt. Die weitläufigen Weiden und traditionellen Methoden sorgen für nachhaltiges und besonders schmackhaftes Fleisch.",
    products: [
      {
        id: 1,
        name: "Uruguayisches Filet",
        description: "Premium-Filet von grasgefütterten Rindern",
        price: "44.99",
        image: "/images/products/uruguayan-tenderloin.jpg",
      },
      // Weitere Produkte hinzufügen...
    ],
  },
  usa: {
    id: "usa",
    name: "FLEISCH AUS DEN USA",
    flag: "/images/countries/usa.jpg",
    description:
      "US-amerikanisches Rindfleisch ist für seine hochwertige Getreide-Endmast bekannt, die zu besonders zartem und marmoriertem Fleisch führt. Unsere Auswahl stammt von ausgewählten Premium-Farmen mit höchsten Qualitätsstandards.",
    products: [
      {
        id: 1,
        name: "US Tomahawk",
        description: "Tomahawk-Steak aus Getreidefütterung in Spitzenqualität",
        price: "49.99",
        image: "/images/products/american-tomahawk.jpg",
      },
      // Weitere Produkte hinzufügen...
    ],
  },
  australia: {
    id: "australia",
    name: "FLEISCH AUS DEN AUSTRALIA",
    flag: "/images/countries/australia.jpg",
    description:
      "US-amerikanisches Rindfleisch ist für seine hochwertige Getreide-Endmast bekannt, die zu besonders zartem und marmoriertem Fleisch führt. Unsere Auswahl stammt von ausgewählten Premium-Farmen mit höchsten Qualitätsstandards.",
    products: [
      {
        id: 1,
        name: "AUSTRALIA Tomahawk",
        description: "Tomahawk-Steak aus Getreidefütterung in Spitzenqualität",
        price: "49.99",
        image: "/images/products/american-tomahawk.jpg",
      },
      // Weitere Produkte hinzufügen...
    ],
  },
  japan: {
    id: "japan",
    name: "FLEISCH AUS DEN JAPAN",
    flag: "/images/countries/japan.jpg",
    description:
      "US-amerikanisches Rindfleisch ist für seine hochwertige Getreide-Endmast bekannt, die zu besonders zartem und marmoriertem Fleisch führt. Unsere Auswahl stammt von ausgewählten Premium-Farmen mit höchsten Qualitätsstandards.",
    products: [
      {
        id: 1,
        name: "JAPAN Tomahawk",
        description: "Tomahawk-Steak aus Getreidefütterung in Spitzenqualität",
        price: "49.99",
        image: "/images/products/american-tomahawk.jpg",
      },
      // Weitere Produkte hinzufügen...
    ],
  },
};

const ProductsByOrigin = () => {
  return (
    <main className="bg-[#1a1a1a]">
      <OriginHero />
      {Object.values(countryData).map((country) => (
        <CountrySection
          key={country.id}
          country={country}
          products={country.products}
        />
      ))}
    </main>
  );
};

export default ProductsByOrigin;

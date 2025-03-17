"use client";

import React from "react";
import OriginHero from "@/components/OriginHero/OriginHero";
import CountrySection from "@/components/CountrySection/CountrySection";

// Sample product data - replace with your actual data
const countryData = {
  argentina: {
    id: "argentina",
    name: "MEATS OF ARGENTINA",
    flag: "/images/countries/argentina.jpg",
    description:
      "Argentina is renowned for its exceptional beef quality, particularly from the Pampas region. The cattle are primarily grass-fed, resulting in leaner, more flavorful meat with a distinct taste that's celebrated worldwide.",
    products: [
      {
        id: 1,
        name: "Argentine Ribeye",
        description: "Premium grass-fed ribeye with exceptional marbling",
        price: "39.99",
        image: "/images/products/argentine-ribeye.jpg",
      },
      // Add more products...
    ],
  },
  ireland: {
    id: "ireland",
    name: "MEATS OF IRELAND",
    flag: "/images/countries/ireland.png",
    description:
      "Irish beef is known for its sustainable, grass-fed practices. The emerald pastures and temperate climate create perfect conditions for raising cattle, resulting in tender, flavorful meat.",
    products: [
      {
        id: 1,
        name: "Irish Striploin",
        description: "Grass-fed striploin with perfect marbling",
        price: "34.99",
        image: "/images/products/irish-striploin.jpg",
      },
      // Add more products...
    ],
  },
  uruguay: {
    id: "uruguay",
    name: "MEATS OF URUGUAY",
    flag: "/images/countries/uruguay.jpg",
    description:
      "Uruguayan beef is celebrated for its natural, grass-fed qualities. The vast pastures and traditional farming methods produce beef that's both sustainable and exceptionally tasty.",
    products: [
      {
        id: 1,
        name: "Uruguayan Tenderloin",
        description: "Premium grass-fed tenderloin",
        price: "44.99",
        image: "/images/products/uruguayan-tenderloin.jpg",
      },
      // Add more products...
    ],
  },
  usa: {
    id: "usa",
    name: "MEATS OF USA",
    flag: "/images/countries/usa.jpg",
    description:
      "American beef is known for its high-quality grain-finishing process, resulting in well-marbled, tender meat. Our selection comes from premium farms committed to quality and taste.",
    products: [
      {
        id: 1,
        name: "American Tomahawk",
        description: "Premium grain-fed tomahawk steak",
        price: "49.99",
        image: "/images/products/american-tomahawk.jpg",
      },
      // Add more products...
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

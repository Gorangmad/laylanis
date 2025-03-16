"use client";

import React from "react";
import CutsHero from "@/components/CutsHero/CutsHero";
import CutSection from "@/components/CutSection/CutSection";

const cutsData = {
  hueftsteak: {
    id: "hueftsteak",
    name: "HÜFTSTEAK",
    image: "/images/products/argentine-ribeye.jpg",
    description:
      "Our premium Hüftsteak cuts are lean and flavorful, perfect for grilling and pan-searing. Each cut is carefully selected for its excellent meat-to-fat ratio.",
  },
  ribeye: {
    id: "ribeye",
    name: "RIB-EYE STEAK",
    image: "/images/products/irish-striploin.jpg",
    description:
      "Our Rib-Eye steaks are known for their exceptional marbling and rich flavor. Each cut is hand-selected to ensure the perfect balance of meat and fat marbling.",
  },
  rinderfilet: {
    id: "rinderfilet",
    name: "RINDERFILET",
    image: "/images/products/argentine-ribeye.jpg",
    description:
      "The most tender of all beef cuts, our Rinderfilet (beef tenderloin) offers unparalleled tenderness and refined flavor. Each piece is trimmed to perfection.",
  },
  roastbeef: {
    id: "roastbeef",
    name: "ROASTBEEF",
    image: "/images/products/irish-striploin.jpg",
    description:
      "Our premium Roastbeef cuts are selected from the finest rib and loin sections, perfect for roasting and special occasions. Known for their tenderness and marbling.",
  },
  rumpsteak: {
    id: "rumpsteak",
    name: "RUMPSTEAK",
    image: "/images/products/argentine-ribeye.jpg",
    description:
      "Our Rumpsteak selections feature a perfect balance of flavor and tenderness, with a distinctive strip of fat that adds extra succulence during cooking.",
  },
  tbone: {
    id: "tbone",
    name: "T-BONE STEAK",
    image: "/images/products/american-tomahawk.jpg",
    description:
      "Our T-Bone steaks offer two premium cuts in one - tenderloin and strip steak - separated by the distinctive T-shaped bone. Perfect for steak enthusiasts.",
  },
  specialcuts: {
    id: "specialcuts",
    name: "SPECIAL CUTS",
    image: "/images/products/american-tomahawk.jpg",
    description:
      "Discover our unique specialty cuts, including the impressive Tomahawk steak and other premium selections. Perfect for those seeking something extraordinary.",
  },
};

const ProductsByCuts = () => {
  return (
    <main className="bg-[#1a1a1a]">
      <CutsHero />
      {Object.values(cutsData).map((cut) => (
        <CutSection key={cut.id} cut={cut} />
      ))}
    </main>
  );
};

export default ProductsByCuts;

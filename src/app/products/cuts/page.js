import React from "react";
import CutsHero from "@/components/CutsHero/CutsHero";
import CutsSection from "@/components/CutsSection/CutsSection";

export const metadata = {
  title: "Meat Cuts | Liam's Quality Meats",
  description:
    "Explore our wide variety of premium meat cuts, from tender steaks to succulent roasts. Each cut is carefully selected and prepared by our expert butchers.",
};

const CutsPage = () => {
  return (
    <div className="bg-[#DAA520]">
      <CutsHero />
      <CutsSection />
    </div>
  );
};

export default CutsPage;

import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import FeaturesCard2 from "@/components/FeaturesCard2/FeaturesCard2";
import NewsletterCTA from "@/components/NewsletterCTA/NewsletterCTA";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ProductCard from "@/components/ProductCard/ProductCard";
export default function Home() {
  return (
    <div className="bg-red-500">
      <Hero />
      <About />
      <FeaturesCard2 />
      <NewsletterCTA />
      <ProductCard />
      <WhyChooseUs />
    </div>
  );
}

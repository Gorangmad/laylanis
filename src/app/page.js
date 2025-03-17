import Image from "next/image";
import Hero from "@/components/ui/Hero";
import About from "@/components/About/About";
import FeaturesCard2 from "@/components/FeaturesCard2/FeaturesCard2";
import NewsletterCTA from "@/components/NewsletterCTA/NewsletterCTA";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ProductCard from "@/components/ProductCard/ProductCard";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero
        backgroundImage="/hero-bg.jpeg"
        tagline="COSTA DEL SOL"
        title={
          <>
            PREMIUM QUALITY <br /> BUTCHERS.
          </>
        }
        description="Located in Benavista, close to Puerto Banus Liam's Quality Meats is your one stop shop for premium cuts of meat on the coast."
        buttonText="View Products"
        buttonLink="/products"
        showFloatingImage={true}
        floatingImage="/meat-1.png"
        showScrollIndicator={true}
      />
      <About />
      <FeaturesCard2 />
      <NewsletterCTA />
      <ProductCard />
      <Testimonials />
      <WhyChooseUs />
    </main>
  );
}

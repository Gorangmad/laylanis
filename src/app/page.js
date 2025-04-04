import Image from "next/image";
import Hero from "@/components/ui/Hero";
import About from "@/components/About/About";
import FeaturesCard2 from "@/components/FeaturesCard2/FeaturesCard2";
import NewsletterCTA from "@/components/NewsletterCTA/NewsletterCTA";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ProductsSection from "@/components/ProductsSection/ProductsSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import InfinitySlider from "@/components/InfinitySlider/InfinitySlider";

export default function Home() {
  return (
    <main>
      <Hero
        backgroundImage="/hero-bg.jpeg"
        tagline="LAYLANI'S"
        title={
          <>
            PREMIUM FLEISCH <br /> AUS ALLER WELT.
          </>
        }
        description="Laylani’s ist dein zuverlässiger Fleischgroßhändler aus Deutschland – spezialisiert auf Premium Cuts, internationale Herkunft und erstklassige Qualität für Gastronomie, Feinkost & Fleischliebhaber."
        buttonText="Jetzt Sortiment entdecken"
        buttonLink="/products"
        showFloatingImage={true}
        floatingImage="/meat-1.png"
        showScrollIndicator={true}
      />

      <About />
      <FeaturesCard2 />
      <NewsletterCTA />
      <ProductsSection type="hueftsteak" category="cuts" />
      <Testimonials />
      <InfinitySlider />
      <WhyChooseUs />
    </main>
  );
}

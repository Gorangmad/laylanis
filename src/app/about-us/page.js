import AboutHero from "@/components/AboutHero/AboutHero";
import NewsletterCTA from "@/components/NewsletterCTA/NewsletterCTA";
import Testimonials from "@/components/Testimonials/Testimonials";
import Timings from "@/components/Timings/Timings";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/ui/Hero";
import InfinitySlider from "@/components/InfinitySlider/InfinitySlider";
export const metadata = {
  title: "About Us | Liam's Quality Meats",
  description:
    "Learn more about Liam's Quality Meats, your family butcher on the Costa Del Sol.",
};

export default function AboutUs() {
  return (
    <main>
    <Hero
      backgroundImage="/images/about-3.jpg"
      tagline="WILLKOMMEN BEI..."
      title="LAYLANIS PREMIUM FLEISCH."
      description="Laylanis ist Ihr ehrlicher Fleischhändler mit Leidenschaft für Qualität. Ob klassische Cuts oder exklusive Sorten wie Wagyu – bei uns finden Sie eine sorgfältig ausgewählte Vielfalt an hochwertigem Fleisch. Wir freuen uns darauf, Sie bald persönlich begrüßen zu dürfen."
      showScrollIndicator={true}
      overlayOpacity={60}
      className={"lg:pb-40 pt-0"}
    />
      <Testimonials />
      <InfinitySlider />
      <Timings />
      <FAQ />
      <NewsletterCTA />
    </main>
  );
}

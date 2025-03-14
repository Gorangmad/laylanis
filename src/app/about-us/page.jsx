import AboutHero from "@/components/AboutHero/AboutHero";
import NewsletterCTA from "@/components/NewsletterCTA/NewsletterCTA";
import Testimonials from "@/components/Testimonials/Testimonials";
import Timings from "@/components/Timings/Timings";
import FAQ from "@/components/FAQ/FAQ";

export const metadata = {
  title: "About Us | Liam's Quality Meats",
  description:
    "Learn more about Liam's Quality Meats, your family butcher on the Costa Del Sol.",
};

export default function AboutUs() {
  return (
    <main>
      <AboutHero />
      <Testimonials />
      <Timings />
      <FAQ />
      <NewsletterCTA />
    </main>
  );
}

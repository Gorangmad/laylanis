import AboutHero from "@/components/AboutHero/AboutHero";
import NewsletterCTA from "@/components/NewsletterCTA/NewsletterCTA";
import Testimonials from "@/components/Testimonials/Testimonials";
import Timings from "@/components/Timings/Timings";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/ui/Hero";
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
        tagline="WELCOME TO..."
        title="LIAM'S QUALITY MEATS."
        description="We would like to wish you a warm welcome to our family Butcher's. Liam's Quality Meats is your one stop shop for all your meat needs on the Costa Del Sol. We look forward to welcoming you in store soon."
        showScrollIndicator={true}
        // className="bg-black"
        overlayOpacity={60}
        className={"lg:pb-40 pt-0"}
      />
      <Testimonials />
      <Timings />
      <FAQ />
      <NewsletterCTA />
    </main>
  );
}

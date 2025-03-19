import NewsletterCTA from "@/components/NewsletterCTA/NewsletterCTA";
import Testimonials from "@/components/Testimonials/Testimonials";
import Timings from "@/components/Timings/Timings";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/ui/Hero";
import ContactForm from "@/components/ContactForm/ContactForm";
export const metadata = {
  title: "Contact Us | Liam's Quality Meats",
  description:
    "Contact Liam's Quality Meats, your family butcher on the Costa Del Sol.",
};

export default function ContactUs() {
  return (
    <main>
      <Hero
        backgroundImage="/hero-bg.jpeg"
        tagline="SAY HELLO!"
        title="we love to talk."
        description="At Liam's Quality Meats Benavista we love to take care of our customers. Please feel free to contact us at any time. We have three main ways for you to get in touch below. We look forward to serving you soon."
        showScrollIndicator={true}
        // className="bg-black"
        // showFloatingImage={true}
        // floatingImage="/images/contact.png"
        showLottie={true}
        overlayOpacity={60}
        rotateValue={0}
        className={"lg:pb-40 pt-0 "}
      />
      <ContactForm />
      <NewsletterCTA />
    </main>
  );
}

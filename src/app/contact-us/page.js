import NewsletterCTA from "@/components/NewsletterCTA/NewsletterCTA";
import ContactForm from "@/components/ContactForm/ContactForm";
import Hero from "@/components/ui/Hero";

export const metadata = {
  title: "Kontakt | Laylanis Premium Fleisch",
  description:
    "Kontaktieren Sie Laylanis – Ihr ehrlicher Fleischhändler mit hochwertigen Fleischsorten wie Wagyu, Dry Aged und mehr.",
};

export default function ContactUs() {
  return (
    <main>
      <Hero
        backgroundImage="/hero-bg.jpeg"
        tagline="JETZT KONTAKTIEREN"
        title="Wir freuen uns auf Sie."
        description="Bei Laylanis nehmen wir uns Zeit für unsere Kundinnen und Kunden. Ob Fragen, Bestellungen oder besondere Wünsche – wir sind jederzeit für Sie erreichbar. Nutzen Sie einfach das Kontaktformular oder schreiben Sie uns direkt. Wir freuen uns auf Ihre Nachricht!"
        showScrollIndicator={true}
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

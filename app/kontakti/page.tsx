import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHero from "@/components/common/SectionHero";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactFormSection from "@/components/contact/ContactFormSection";

export const metadata = {
  title: "Kontakti | Infinit Lighting",
  description:
    "Na kontaktoni për oferta, konsultime dhe pyetje lidhur me produktet dhe shërbimin tonë.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <SectionHero
        title="Na kontaktoni"
        description="Na shkruani për oferta, projekte ose konsultime profesionale për ndriçim LED."
      />
      <ContactInfoSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}

import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function KontaktiPage() {
  return (
    <main className="text-(--color-foreground) overflow-hidden">
      <Header />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

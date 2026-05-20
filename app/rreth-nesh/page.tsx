import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function RrethNeshPage() {
  return (
    <main className="text-(--color-foreground) overflow-hidden">
      <Header />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}

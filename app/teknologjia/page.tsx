import Header from "@/components/Header";
import TechnologySection from "@/components/TechnologySection";
import Footer from "@/components/Footer";

export default function TeknologjiaPage() {
  return (
    <main className="text-(--color-foreground) overflow-hidden">
      <Header />
      <div className="pt-24">
        <TechnologySection />
      </div>
      <Footer />
    </main>
  );
}

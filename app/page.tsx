import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductHighlight from "@/components/ProductHighlight";
import BenefitsSection from "@/components/BenefitsSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatisticsSection from "@/components/StatisticsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-(--color-background) text-(--color-foreground) overflow-hidden">
      <Header />
      <HeroSection />
      {/* Shadow connector between Hero and Product sections */}
      <div className="relative h-0 overflow-visible">
        <div className="absolute -top-20 left-0 right-0 h-40 bg-gradient-to-b from-black/20 via-black/10 to-transparent pointer-events-none" />
      </div>
      <ProductHighlight />
      <BenefitsSection />
      <ProjectsSection />
      <StatisticsSection />
      <Footer />
    </main>
  );
}

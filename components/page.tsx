import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductHighlight from "@/components/ProductHighlight";
import BenefitsSection from "@/components/BenefitsSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatisticsSection from "@/components/StatisticsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b12] text-(--color-foreground)">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(164,196,45,0.10),transparent_30%),radial-gradient(circle_at_82%_42%,rgba(255,255,255,0.05),transparent_28%),linear-gradient(180deg,#03060b_0%,#080d15_42%,#06090f_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ProductHighlight />
        <BenefitsSection />
        <ProjectsSection />
        <StatisticsSection />
        <Footer />
      </div>
    </main>
  );
}

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductHighlight from "@/components/ProductHighlight";
import BenefitsSection from "@/components/BenefitsSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatisticsSection from "@/components/StatisticsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full text-(--color-foreground) overflow-hidden">
      <Header />
      <HeroSection />

      <ProductHighlight />
      <BenefitsSection />
      <ProjectsSection />
      <StatisticsSection />
      <Footer />
    </main>
  );
}

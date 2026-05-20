import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductHighlight from "@/components/ProductHighlight";
import BenefitsSection from "@/components/BenefitsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProductsSection from "@/components/ProductsSection";
import TechnologySection from "@/components/TechnologySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import StatisticsSection from "@/components/StatisticsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-(--color-foreground) overflow-hidden">
      <Header />
      <HeroSection />

      <ProductHighlight />
      <BenefitsSection />
      <ProjectsSection />
      {/* <ProductsSection />
      <TechnologySection />
      <AboutSection />
      <ContactSection /> */}
      <StatisticsSection />
      <Footer />
    </main>
  );
}

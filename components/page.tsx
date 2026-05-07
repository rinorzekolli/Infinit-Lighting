import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductHighlight from "@/components/ProductHighlight";
import BenefitsSection from "@/components/BenefitsSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatisticsSection from "@/components/StatisticsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* Overlay layers */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10 }}>
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

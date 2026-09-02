import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHero from "@/components/common/SectionHero";
import TechnologyFeatures from "@/components/technology/TechnologyFeatures";
import EnergyEfficiencySection from "@/components/technology/EnergyEfficiencySection";
import SmartSystemsSection from "@/components/technology/SmartSystemsSection";

export const metadata = {
  title: "Teknologjia | Infinit Lighting",
  description:
    "Eksploroni teknologjitë e avancuara LED që fuqizojnë zgjidhjet e ndriçimit të Infinit Lighting.",
};

export default function TechnologyPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <SectionHero
        title="Teknologjia që drejton të ardhmen"
        description="Zgjidhje moderne LED me efikasitet të lartë, kontroll inteligjent dhe jetëgjatësi maksimale."
      />
      <TechnologyFeatures />
      <EnergyEfficiencySection />
      <SmartSystemsSection />
      <Footer />
    </main>
  );
}

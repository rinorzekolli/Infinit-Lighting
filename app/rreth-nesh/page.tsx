import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";

export const metadata = {
  title: "Rreth Nesh | Infinit Lighting",
  description:
    "Mëso më shumë për Infinit Lighting - kompania e specializuar në ndriçim LED profesional.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <AboutHeroSection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <Footer />
    </main>
  );
}

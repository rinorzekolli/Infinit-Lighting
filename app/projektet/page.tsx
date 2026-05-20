import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function ProjektetPage() {
  return (
    <main className="text-(--color-foreground) overflow-hidden">
      <Header />
      <div className="pt-24">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projektet | Infinit Lighting",
  description:
    "Shfletoni projektet e realizuara të ndriçimit LED në Kosovë dhe rajon.",
};

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <Footer />
    </main>
  );
}

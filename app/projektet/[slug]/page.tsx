import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDetails from "@/components/projects/ProjectDetails";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Infinit Lighting`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="overflow-hidden">
      <Header />
      <ProjectDetails project={project} />

      {relatedProjects.length > 0 && (
        <section className="relative z-10 py-12 lg:py-16 bg-transparent border-t border-white/10">
          <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10 mb-10">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-light text-white">
              Projektet e ngjashëm
            </h2>
          </div>
          <ProjectsGrid projects={relatedProjects} />
        </section>
      )}

      <Footer />
    </main>
  );
}

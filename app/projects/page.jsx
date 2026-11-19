import PageHeader from "@/components/PageHeader";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects, categories } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        subtitle="Cloud deployments, infrastructure automation, security detections and software — each one built to learn something real."
      />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <ProjectsGrid projects={projects} categories={categories} />
      </section>
    </>
  );
}

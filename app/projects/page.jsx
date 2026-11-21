// ─────────────────────────────────────────────────────────────
// PROJECTS PAGE — header + filterable project grid.
// Projects are listed in data/projects.js.
// ─────────────────────────────────────────────────────────────
import PageHeader from "@/components/PageHeader";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects, categories } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        subtitle="Some cloud, some automation, some 'I wonder how this works'. Every one of these taught me something (usually after breaking it first)."
      />
      <ProjectsGrid projects={projects} categories={categories} />
    </section>
  );
}

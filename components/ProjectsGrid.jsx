"use client";

// ─────────────────────────────────────────────────────────────
// PROJECTS GRID — filter buttons + the grid of ProjectCards.
// Filtering happens in the browser, so this is a client component.
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects, categories }) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              active === c ? "bg-accent text-on-accent" : "border border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </>
  );
}

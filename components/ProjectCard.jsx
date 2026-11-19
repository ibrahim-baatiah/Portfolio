import Tag from "./Tag";
import Icon from "./Icon";

export default function ProjectCard({ project }) {
  return (
    <article className="card flex flex-col p-6 transition hover:-translate-y-1 hover:border-accent">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
      <div className="mt-5 flex gap-5 text-sm font-medium">
        <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:underline">
          <Icon name="github" className="h-4 w-4" /> Code
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:underline">
            <Icon name="external" className="h-4 w-4" /> Live
          </a>
        )}
      </div>
    </article>
  );
}

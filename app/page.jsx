import Button from "@/components/Button";
import Icon from "@/components/Icon";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { profile, focusAreas } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <section className="hero-bg">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:py-32 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 font-mono text-sm text-hero-muted dark:text-accent">Hi, my name is</p>
            <h1 className="text-5xl font-bold tracking-tight text-hero-text sm:text-6xl">{profile.name}</h1>
            <p className="mt-4 text-xl font-medium text-hero-muted sm:text-2xl">
              {profile.title} · {profile.location}
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-hero-muted">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/projects/" variant="hero">View my work <Icon name="arrow" className="h-4 w-4" /></Button>
              <Button href="/contact/" variant="heroOutline">Get in touch</Button>
            </div>
          </div>
          <div className="avatar mx-auto hidden h-56 w-56 items-center justify-center rounded-full border-4 border-white/30 text-7xl font-extrabold md:flex dark:border-transparent">
            {profile.initials}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading number="01" title="What I Do" />
        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((f) => (
            <div key={f.title} className="card p-6">
              <span className="inline-flex rounded-lg bg-accent-soft p-3 text-accent"><Icon name={f.icon} className="h-6 w-6" /></span>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading number="02" title="Featured Projects" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
          <div className="mt-10">
            <Button href="/projects/" variant="outline">See all projects <Icon name="arrow" className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold">Let&apos;s talk</h2>
        <p className="mt-4 text-muted">Have a question, an idea, or just want to say hi? My inbox is open.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact/">Contact me</Button>
          <Button href="/cv/" variant="outline">View CV</Button>
        </div>
      </section>
    </>
  );
}

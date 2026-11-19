import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";
import Timeline from "@/components/Timeline";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { education } from "@/data/cv";

export const metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About me" title="Hi, I'm Ibrahim 👋" subtitle={`${profile.title} based in ${profile.location}.`} />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading number="01" title="My Story" />
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-5 leading-relaxed text-muted">
            {profile.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <aside className="card h-fit space-y-6 p-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-2">Languages</h3>
              <ul className="space-y-2 text-sm">
                {profile.languages.map((l) => (
                  <li key={l.name} className="flex justify-between"><span>{l.name}</span><span className="text-muted">{l.level}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-2">Currently learning</h3>
              <p className="text-sm text-muted">{profile.learning}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading number="02" title="Skills" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.group} className="card p-5">
                <h3 className="mb-4 font-semibold">{s.group}</h3>
                <div className="flex flex-wrap gap-2">{s.items.map((i) => <Tag key={i}>{i}</Tag>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading number="03" title="Education" />
        <Timeline items={education.map((e) => ({ title: e.degree, meta: `${e.school} · ${e.location} · ${e.period}` }))} />
      </section>
    </>
  );
}

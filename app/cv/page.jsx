// ─────────────────────────────────────────────────────────────
// CV PAGE — experience, education, certifications, skills, languages.
// Content: data/cv.js, data/skills.js, data/profile.js.
// "Download PDF" uses the browser's print dialog (print styles are in globals.css).
// ─────────────────────────────────────────────────────────────
import PageHeader from "@/components/PageHeader";
import PrintButton from "@/components/PrintButton";
import ResumePrint from "@/components/ResumePrint";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import Tag from "@/components/Tag";
import Icon from "@/components/Icon";
import { profile } from "@/data/profile";
import { experience, education, certifications } from "@/data/cv";
import { skills } from "@/data/skills";

export const metadata = { title: "CV" };

// Links shown under your name at the top of the CV
const contactLinks = [
  { icon: "mail", label: "Email", href: `mailto:${profile.email}` },
  { icon: "linkedin", label: "LinkedIn", href: profile.links.linkedin },
  { icon: "github", label: "GitHub", href: profile.links.github },
];

export default function CV() {
  return (
    <>
    {/* Web version of the CV (hidden when printing) */}
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20 print:hidden">
      <PageHeader eyebrow="Curriculum vitae" title={profile.name} subtitle={`${profile.title} · ${profile.location}`}>
        {/* Contact links: icon + label. Edit the list in `contactLinks` above. */}
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {contactLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-medium text-muted transition hover:text-accent"
            >
              <Icon name={l.icon} className="h-4 w-4" /> {l.label}
            </a>
          ))}
        </div>
        <div className="mt-8"><PrintButton /></div>
      </PageHeader>

      <div className="space-y-20 print:space-y-8">
        <section>
          <SectionHeading number="01" title="Experience" />
          <Timeline
            items={experience.map((x) => ({
              title: `${x.role} — ${x.company}`,
              meta: `${x.period} · ${x.location}`,
              children: (
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {x.points.map((p) => (
                    <li key={p.title}><span className="font-semibold text-text">{p.title}:</span> {p.text}</li>
                  ))}
                </ul>
              ),
            }))}
          />
        </section>

        <section>
          <SectionHeading number="02" title="Education" />
          <Timeline items={education.map((e) => ({ title: e.degree, meta: `${e.school} · ${e.location} · ${e.period}` }))} />
        </section>

        <section>
          <SectionHeading number="03" title="Certifications" />
          <ul className="divide-y divide-border">
            {certifications.map((c) => (
              <li key={c.name} className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-center">
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noreferrer" className="font-medium hover:text-accent">{c.name}</a>
                ) : (
                  <span className="font-medium">{c.name}</span>
                )}
                <span className="text-sm text-muted">{c.issued}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading number="04" title="Skills" />
          <dl className="space-y-4">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-2 sm:grid-cols-[180px_1fr]">
                <dt className="font-semibold">{s.group}</dt>
                <dd className="flex flex-wrap gap-2">{s.items.map((i) => <Tag key={i}>{i}</Tag>)}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <SectionHeading number="05" title="Languages" />
          <p className="text-muted">{profile.languages.map((l) => `${l.name} (${l.level})`).join(" · ")}</p>
        </section>
      </div>
    </div>

    {/* Resume layout used for "Download PDF" (only visible when printing) */}
    <ResumePrint />
    </>
  );
}

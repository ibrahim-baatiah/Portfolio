// ─────────────────────────────────────────────────────────────
// RESUME PRINT LAYOUT — what you get from "Download PDF" on the CV page.
// It's hidden on screen and only appears when printing (print:block).
// Styled like a classic LaTeX resume: serif font, small-caps headings
// with a rule underneath, bold company + right-aligned location,
// italic role + right-aligned dates. Styles: `.resume` in globals.css.
// ─────────────────────────────────────────────────────────────
import { profile } from "@/data/profile";
import { experience, education, certifications } from "@/data/cv";
import { resumeHeader, resumeProjects, resumeSkills } from "@/data/resume";

// Section title with a full-width rule underneath
function Section({ title, children }) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// Two-column row: left text, right text (e.g. company | location)
function Row({ left, right, className = "" }) {
  return (
    <div className={`resume-row ${className}`}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

// "https://github.com/x/y" → "github.com/x/y" for display
const shortUrl = (url) => url.replace(/^https?:\/\//, "");

export default function ResumePrint() {
  return (
    <div className="resume hidden print:block">
      {/* ── Header ── */}
      <header className="resume-header">
        <h1>{profile.name}</h1>
        <p>
          {resumeHeader.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{" "}
          <a href={profile.links.linkedin}>LinkedIn</a> · <a href={profile.links.github}>GitHub</a> ·{" "}
          <a href={resumeHeader.website}>{shortUrl(resumeHeader.website)}</a>
        </p>
      </header>

      {/* ── Experience ── */}
      <Section title="Experience">
        <ul className="resume-list">
          {experience.map((job) => (
            <li key={job.company}>
              <Row left={<b>{job.company}</b>} right={job.location} />
              <Row left={<i>{job.role}</i>} right={<i>{job.period}</i>} />
              <ul className="resume-sublist">
                {job.points.map((p) => (
                  <li key={p.title}><b>{p.title}</b>: {p.text}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Education ── */}
      <Section title="Education">
        <ul className="resume-list">
          {education.map((e) => (
            <li key={e.school}>
              <Row left={<b>{e.school}</b>} right={e.location} />
              <Row left={<i>{e.degree}</i>} right={<i>{e.period}</i>} />
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Projects (each with its GitHub link) ── */}
      <Section title="Projects">
        <ul className="resume-list">
          {resumeProjects.map((p) => (
            <li key={p.title}>
              <Row left={<b>{p.title}</b>} right={<a href={p.repo}>{shortUrl(p.repo)}</a>} />
              <div>{p.text}</div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Certifications ── */}
      <Section title="Certifications">
        <ul className="resume-list">
          {certifications.map((c) => (
            <li key={c.name}>
              <Row left={c.url ? <a href={c.url}><b>{c.name}</b></a> : <b>{c.name}</b>} right={<i>{c.issued}</i>} />
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Technical skills ── */}
      <Section title="Technical Skills">
        <ul className="resume-list">
          {resumeSkills.map((s) => (
            <li key={s.group}><b>{s.group}</b>: {s.items}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

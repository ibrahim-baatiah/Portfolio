// ─────────────────────────────────────────────────────────────
// ABOUT PAGE — "My Story" only.
// Edit the paragraphs in data/profile.js → `story`.
// ─────────────────────────────────────────────────────────────
import SectionHeading from "@/components/SectionHeading";
import { story, storySignOff } from "@/data/profile";

export const metadata = { title: "About" };

// Turns **word** into a highlighted <span> in the accent colour
function Highlight({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <span key={i} className="font-semibold text-accent">{part.slice(2, -2)}</span>
    ) : (
      part
    )
  );
}

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
      <SectionHeading number="01" title="My Story" />

      <div className="space-y-6 text-lg leading-relaxed text-muted">
        {story.map((paragraph, i) => (
          <p key={i}><Highlight text={paragraph} /></p>
        ))}
      </div>

      <p className="mt-10 text-xl font-semibold">{storySignOff}</p>
    </section>
  );
}

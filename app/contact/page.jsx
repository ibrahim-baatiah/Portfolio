// ─────────────────────────────────────────────────────────────
// CONTACT PAGE — three cards (Email, LinkedIn, GitHub).
// To add or change a card, edit the `channels` list below.
// ─────────────────────────────────────────────────────────────
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { profile } from "@/data/profile";

export const metadata = { title: "Contact" };

const channels = [
  { icon: "mail", label: "Email", value: profile.email, cta: "Send me an email", href: `mailto:${profile.email}` },
  { icon: "linkedin", label: "LinkedIn", value: "ibrahim-baatiah", cta: "Connect with me", href: profile.links.linkedin },
  { icon: "github", label: "GitHub", value: "ibrahim-baatiah", cta: "Check out my code", href: profile.links.github },
];

export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
      <PageHeader
        eyebrow="Contact"
        title="Let's chat"
        subtitle="Got a question, an idea, or just want to chat about cloud stuff? Drop me a message, I don't bite."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="card group flex flex-col p-6 transition hover:-translate-y-1 hover:border-accent"
          >
            <span className="w-fit rounded-lg bg-accent-soft p-3 text-accent"><Icon name={c.icon} className="h-6 w-6" /></span>
            <span className="mt-5 text-sm text-muted">{c.label}</span>
            <span className="mt-1 break-all font-semibold">{c.value}</span>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              {c.cta} <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

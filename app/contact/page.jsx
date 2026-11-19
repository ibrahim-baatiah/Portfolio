import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { profile } from "@/data/profile";

export const metadata = { title: "Contact" };

const channels = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "linkedin", label: "LinkedIn", value: "ibrahim-baatiah", href: profile.links.linkedin },
  { icon: "github", label: "GitHub", value: "ibrahim-baatiah", href: profile.links.github },
  { icon: "location", label: "Location", value: profile.location },
];

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's work together" subtitle="Whether you have a question, an opportunity or just want to say hi — my inbox is open." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="space-y-4">
          {channels.map((c) => {
            const inner = (
              <>
                <span className="rounded-lg bg-accent-soft p-3 text-accent"><Icon name={c.icon} /></span>
                <span>
                  <span className="block text-sm text-muted">{c.label}</span>
                  <span className="font-medium">{c.value}</span>
                </span>
              </>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card flex items-center gap-4 p-5 transition hover:border-accent">
                {inner}
              </a>
            ) : (
              <div key={c.label} className="card flex items-center gap-4 p-5">{inner}</div>
            );
          })}
        </div>
        <ContactForm email={profile.email} />
      </section>
    </>
  );
}

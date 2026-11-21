// ─────────────────────────────────────────────────────────────
// FOOTER — copyright line and social icons.
// ─────────────────────────────────────────────────────────────
import { profile } from "@/data/profile";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="no-print border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with ☕ and Next.js.</p>
        <div className="flex gap-4">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent"><Icon name="github" /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent"><Icon name="linkedin" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent"><Icon name="mail" /></a>
        </div>
      </div>
    </footer>
  );
}

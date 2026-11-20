// ─────────────────────────────────────────────────────────────
// HOME PAGE — a centred hero that fills the space between navbar and footer,
// so navbar + hero + footer all fit on screen with no scrolling.
// Text comes from data/profile.js (greeting, headline, tagline).
// ─────────────────────────────────────────────────────────────
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    // flex-1 stretches the hero to fill <main> (see app/layout.jsx)
    <section className="hero-bg flex flex-1 items-center justify-center">
      <div className="mx-auto w-full max-w-3xl px-6 py-12 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-hero-text sm:text-7xl">{profile.greeting}</h1>

        <p className="mt-6 font-mono text-sm text-hero-muted sm:text-base dark:text-accent">{profile.headline}</p>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-hero-muted">{profile.tagline}</p>

        {/* Call-to-action buttons. Change the labels or links here. */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/about/" variant="hero">
            Learn more about me <Icon name="arrow" className="h-4 w-4" />
          </Button>
          <Button href="/projects/" variant="heroOutline">See what I&apos;ve built</Button>
        </div>
      </div>
    </section>
  );
}

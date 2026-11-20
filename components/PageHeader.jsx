// ─────────────────────────────────────────────────────────────
// PAGE HEADER — the coloured banner at the top of CV, Projects and Contact.
// Colours come from --hero in globals.css (gradient in light, navy in dark).
// ─────────────────────────────────────────────────────────────
export default function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <section className="hero-bg print-tight">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        {eyebrow && <p className="mb-3 font-mono text-sm text-hero-muted dark:text-accent">{eyebrow}</p>}
        <h1 className="text-4xl font-bold text-hero-text sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-hero-muted">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

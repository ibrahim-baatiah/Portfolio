// ─────────────────────────────────────────────────────────────
// PAGE HEADER — title block at the top of About, CV, Projects and Contact.
// Plain (no coloured banner) so every page looks the same.
// It has no width of its own: place it inside the page's container.
// ─────────────────────────────────────────────────────────────
export default function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <header className="mb-14 print:mb-6">
      {eyebrow && <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {subtitle && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>}
      {children}
    </header>
  );
}

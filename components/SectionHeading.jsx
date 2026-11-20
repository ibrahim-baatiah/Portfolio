// ─────────────────────────────────────────────────────────────
// SECTION HEADING — the "01. Title ———" style heading used across pages.
// ─────────────────────────────────────────────────────────────
export default function SectionHeading({ number, title }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      {number && <span className="font-mono text-sm text-accent">{number}.</span>}
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <span className="no-print h-px max-w-xs flex-1 bg-border" />
    </div>
  );
}

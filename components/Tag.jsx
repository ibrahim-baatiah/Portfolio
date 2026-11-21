// ─────────────────────────────────────────────────────────────
// TAG — small rounded pill used for skills and project tech.
// ─────────────────────────────────────────────────────────────
export default function Tag({ children }) {
  return (
    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">{children}</span>
  );
}

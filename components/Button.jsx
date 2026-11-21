// ─────────────────────────────────────────────────────────────
// BUTTON — link styled as a button.
// variant: "primary" | "outline" | "hero" | "heroOutline" (hero ones are for coloured banners).
// Internal links use Next.js <Link>; mailto/external links use a plain <a>.
// ─────────────────────────────────────────────────────────────
import Link from "next/link";

const styles = {
  primary: "bg-accent text-on-accent hover:opacity-90",
  outline: "border border-accent text-accent hover:bg-accent-soft",
  hero: "bg-white text-[#8b3dff] hover:bg-white/90 dark:bg-accent dark:text-on-accent",
  heroOutline: "border border-white/70 text-white hover:bg-white/10 dark:border-accent dark:text-accent dark:hover:bg-accent-soft",
};

export default function Button({ href, variant = "primary", external, children, className = "" }) {
  const cls = `inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition ${styles[variant]} ${className}`;
  if (external || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={cls}>{children}</Link>;
}

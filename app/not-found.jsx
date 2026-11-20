// ─────────────────────────────────────────────────────────────
// 404 PAGE — shown when a URL doesn't exist.
// ─────────────────────────────────────────────────────────────
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-32 text-center">
      <p className="font-mono text-accent">404</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <div className="mt-8"><Button href="/">Back home</Button></div>
    </section>
  );
}

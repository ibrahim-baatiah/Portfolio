"use client";

// ─────────────────────────────────────────────────────────────
// NAVBAR — logo, page links, theme toggle, and a menu for mobile.
// To add/rename a page link, edit the `links` array below.
// ─────────────────────────────────────────────────────────────
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Icon from "./Icon";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/cv/", label: "CV" },
  { href: "/projects/", label: "Projects" },
  { href: "/contact/", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          IB<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition hover:text-accent ${isActive(l.href) ? "font-medium text-accent" : "text-muted"}`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button type="button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="p-2 text-muted">
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block px-6 py-3 text-sm ${isActive(l.href) ? "text-accent" : "text-muted"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

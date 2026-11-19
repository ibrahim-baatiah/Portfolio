"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Icon from "./Icon";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full border border-border p-2 text-muted transition hover:border-accent hover:text-accent"
    >
      {mounted ? <Icon name={isDark ? "sun" : "moon"} className="h-4 w-4" /> : <span className="block h-4 w-4" />}
    </button>
  );
}

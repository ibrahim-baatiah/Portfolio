"use client";

// ─────────────────────────────────────────────────────────────
// THEME PROVIDER — controls light/dark mode.
// defaultTheme="light": first-time visitors always see light mode.
// Their choice from the toggle is remembered in localStorage.
// ─────────────────────────────────────────────────────────────
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

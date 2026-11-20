"use client";

// ─────────────────────────────────────────────────────────────
// PRINT BUTTON — opens the browser print dialog so the CV can be saved as PDF.
// ─────────────────────────────────────────────────────────────
import Icon from "./Icon";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition hover:opacity-90"
    >
      <Icon name="download" className="h-4 w-4" /> Download PDF
    </button>
  );
}

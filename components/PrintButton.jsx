"use client";

import Icon from "./Icon";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#8b3dff] transition hover:bg-white/90 dark:bg-accent dark:text-on-accent"
    >
      <Icon name="download" className="h-4 w-4" /> Download PDF
    </button>
  );
}

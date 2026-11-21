// ─────────────────────────────────────────────────────────────
// DOWNLOAD BUTTON — downloads the resume PDF from /public.
// To update the resume: export your Google Doc as PDF (File > Download > PDF)
// and replace public/Ibrahim_Baatiah_Resume.pdf with it (same file name).
// ─────────────────────────────────────────────────────────────
import Icon from "./Icon";

export const RESUME_PDF = "/Ibrahim_Baatiah_Resume.pdf";

export default function DownloadButton() {
  return (
    <a
      href={RESUME_PDF}
      download="Ibrahim_Baatiah_Resume.pdf"
      className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition hover:opacity-90"
    >
      <Icon name="download" className="h-4 w-4" /> Download PDF
    </a>
  );
}

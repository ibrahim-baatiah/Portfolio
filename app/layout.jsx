// ─────────────────────────────────────────────────────────────
// ROOT LAYOUT — wraps every page with the fonts, theme, navbar and footer.
// SEO title/description are set in `metadata` below.
// ─────────────────────────────────────────────────────────────
import { Inter, JetBrains_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata = {
  metadataBase: new URL("https://ibrahimdev.cloud"),
  title: { default: `${profile.name} — ${profile.title}`, template: `%s · ${profile.name}` },
  description: profile.tagline,
  openGraph: { title: profile.name, description: profile.tagline, type: "website" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Providers>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

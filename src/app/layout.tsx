import type { Metadata } from "next";
import { fraunces, inter, jbMono } from "@/lib/fonts";
import { profile } from "@/lib/data";
import "./globals.css";

// Placeholder — replace with the real deployed domain once the site is live.
const siteUrl = "https://tobechi-ogaziechi.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "Tobechi Ogaziechi",
    "Software Engineer",
    "Full-Stack Developer",
    "Fintech Engineer",
    "TypeScript Developer",
    "NestJS",
    "React Developer",
    "Next.js Developer",
    "Trading Systems Developer",
    "Nigeria Software Engineer",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jbMono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-ink text-paper">{children}</body>
    </html>
  );
}

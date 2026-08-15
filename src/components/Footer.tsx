import Link from "next/link";
import { footerLinks, profile } from "@/lib/data";
import { Container } from "./ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-14">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-xl text-paper">{profile.name}</p>
            <p className="mt-1 text-sm text-paper-faint">{profile.role}</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-paper-dim transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-paper-dim transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-paper-dim transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-paper-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}

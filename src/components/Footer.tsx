import Link from "next/link";
import { footerLinks, profile } from "@/lib/data";
import { Container } from "./ui/Container";
import { ArrowRight, ArrowUpRight, GithubIcon, LinkedinIcon, Mail } from "./ui/Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night-deep pb-8 pt-4">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-card to-night p-5 sm:p-8 lg:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-flame/10 blur-3xl"
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-xl">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-flame">
                Get in touch
              </span>
              <h2 className="mt-2 font-display text-[clamp(1.5rem,4.5vw,2.25rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white text-balance">
                Let&apos;s build something extraordinary together
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-ash">
                Ready to collaborate on complex architectures, scalable backend
                systems, or refined user experiences.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 font-display text-xs font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-flame" />
                {profile.email}
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-flame px-5 py-3 font-display text-xs font-bold text-white shadow-[0_10px_28px_rgba(255,87,34,0.3)] transition-all hover:brightness-110 active:scale-95"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-5 border-t border-white/[0.07] pt-6 text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-flame font-display text-[11px] font-extrabold text-white">
              T
            </span>
            <p className="text-[11px]">
              © {year} {profile.name}. Built with precision and code.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] transition-colors hover:text-flame"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="transition-colors hover:text-flame"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-flame"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <Link
              href="#top"
              aria-label="Back to top"
              className="inline-flex items-center gap-1 text-[11px] transition-colors hover:text-flame"
            >
              Top
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { SystemVisual } from "./SystemVisual";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 10%, rgba(217,155,63,0.12), transparent 60%)",
        }}
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-paper-faint"
          >
            <span className="h-2 w-2 rounded-full bg-signal" />
            Available for select engineering work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] tracking-tight text-paper text-balance"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-serif text-2xl italic text-accent-soft sm:text-3xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-paper-dim text-balance"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#work" variant="primary">
              View My Work
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-paper-dim transition-colors hover:text-accent"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-paper-dim transition-colors hover:text-accent"
            >
              <LinkedinIcon />
            </a>
            <span className="hidden font-mono text-xs text-paper-faint sm:inline">
              {profile.githubHandle}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <SystemVisual />
        </motion.div>
      </Container>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.79 10.78.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.17.69-3.84-1.53-3.84-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 2.86-.39c.97 0 1.94.13 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

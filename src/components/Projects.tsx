"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionKicker, SectionTitle } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { ProjectVisual } from "./ProjectVisuals";

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-28 sm:py-36">
      <Container>
        <SectionKicker index="02" label="Selected Work" />
        <SectionTitle className="max-w-2xl">
          Systems, not just code samples.
        </SectionTitle>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-dim">
            Five products that show the same throughline — a real problem, an
            architecture built to hold up under it, and a system that ships.
          </p>
        </Reveal>
      </Container>

      <div className="mt-24 flex flex-col">
        {projects.map((project, i) => (
          <ProjectCase key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCase({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <div className="border-t border-border py-20 first:border-t-0 sm:py-28">
      <Container>
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal y={30}>
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-border-strong"
            >
              <ProjectVisual variant={project.visual} />
            </motion.div>
          </Reveal>

          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">
                <span className="text-accent-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                · {project.period}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-paper text-balance sm:text-4xl">
                {project.name}
              </h3>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-paper-dim">
                {project.summary}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-faint">
                    Problem
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-faint">
                    Approach
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">
                    {project.approach}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-paper-dim"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border-strong px-3 py-1 font-mono text-[11px] text-paper-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.38}>
              <div className="mt-8 flex flex-wrap gap-5">
                {project.links.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-paper transition-colors hover:text-accent"
                    >
                      {link.label}
                      <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    <span
                      key={link.label}
                      className="inline-flex items-center gap-1.5 text-sm text-paper-faint"
                      title="Link to be added"
                    >
                      {link.label}
                      <span className="font-mono text-[10px]">(soon)</span>
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}

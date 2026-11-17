import type { Project } from "@/lib/data";
import { profile, projects } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionKicker, SectionTitle } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, ArrowUpRight, Cpu, Layers, Smartphone, Terminal, Verified } from "./ui/Icons";

const meta: Record<
  Project["visual"],
  { category: string; footer: string; Icon: typeof Layers }
> = {
  escrow: {
    category: "Escrow Infrastructure",
    footer: "Dual-rail settlement",
    Icon: Verified,
  },
  orb: {
    category: "Algorithmic Trading",
    footer: "Real-time signals",
    Icon: Terminal,
  },
  quant: {
    category: "Quant Research",
    footer: "Model interpretability",
    Icon: Cpu,
  },
  fintech: {
    category: "Fintech Backend",
    footer: "Webhook-driven",
    Icon: Layers,
  },
  webuildidea: {
    category: "Product Studio",
    footer: "Idea to deployment",
    Icon: Smartphone,
  },
};

export function Projects() {
  return (
    <section id="work" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <SectionKicker>Production code</SectionKicker>
              <SectionTitle>Featured Repositories &amp; Systems</SectionTitle>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-2 font-display text-xs font-semibold text-flame transition-colors hover:text-white"
            >
              Explore the repositories on GitHub
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => {
            const { category, footer, Icon } = meta[project.visual];
            return (
              <Reveal key={project.slug} delay={(index % 3) * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-card/80 p-5 shadow-[0_20px_50px_-40px_rgba(0,0,0,1)] transition-all duration-300 hover:border-white/15 hover:bg-card sm:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-flame">
                      <Icon className="h-3.5 w-3.5" />
                      {category}
                    </span>
                    <span className="shrink-0 rounded-full bg-card-high px-2.5 py-1 font-mono text-[9px] text-white/45">
                      {project.stack[0]}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-flame sm:text-xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ash">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/55"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <details className="group/case mt-auto pt-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
                      <span className="inline-flex items-center gap-2 text-[11px] text-white/45 transition-colors group-hover/case:text-white/70">
                        <span>{footer}</span>
                        <span className="font-display text-[10px] font-semibold uppercase tracking-[0.1em] text-flame">
                          Case study
                        </span>
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card-high text-white transition-all duration-300 group-hover:bg-flame group-open/case:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </summary>

                    <div className="space-y-3 pt-4">
                      <div>
                        <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                          Problem
                        </p>
                        <p className="mt-1 text-[12px] leading-relaxed text-ash">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                          Approach
                        </p>
                        <p className="mt-1 text-[12px] leading-relaxed text-ash">
                          {project.approach}
                        </p>
                      </div>
                      <div>
                        <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                          Highlights
                        </p>
                        <ul className="mt-1.5 space-y-1.5">
                          {project.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-2 text-[12px] leading-relaxed text-ash"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-flame" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-white/30">
                        {project.period}
                      </p>
                    </div>
                  </details>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

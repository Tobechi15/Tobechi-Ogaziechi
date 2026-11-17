import { additionalProjects, experience } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionKicker } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { MapPin } from "./ui/Icons";

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <SectionKicker>Track record</SectionKicker>
            <h2 className="mt-4 font-display text-[clamp(1.85rem,5.4vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white text-balance">
              My Work Experience
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ash">
              Roles across full-stack delivery, technical instruction, and
              research — plus the projects I keep building alongside them.
            </p>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-10 max-w-3xl sm:mt-14">
          <div
            aria-hidden
            className="absolute bottom-3 left-[15px] top-3 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-12">
            {experience.map((item, index) => (
              <Reveal key={`${item.org}-${item.role}`} delay={index * 0.06}>
                <div className="relative">
                  <span
                    aria-hidden
                    className={`absolute left-[15px] top-1.5 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-night md:left-1/2 ${
                      index === 0 ? "shadow-[0_0_14px_rgba(255,87,34,0.6)]" : ""
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        index === 0 ? "bg-flame" : "bg-white/35"
                      }`}
                    />
                  </span>

                  <div className="md:flex md:items-start md:justify-between md:gap-10">
                    <div className="pl-9 md:w-1/2 md:pl-0 md:pr-10 md:text-right">
                      <h3 className="font-display text-base font-bold text-white sm:text-lg">
                        {item.org}
                      </h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
                        {item.period}
                      </p>
                      <p className="mt-1.5 inline-flex items-center gap-1 text-[11px] text-ash">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </p>
                    </div>

                    <div className="mt-3 pl-9 md:mt-0 md:w-1/2 md:pl-10">
                      <h4 className="font-display text-[15px] font-semibold text-peach">
                        {item.role}
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {item.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-2 text-[13px] leading-relaxed text-ash"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-flame" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-3xl sm:mt-20">
            <div className="flex items-center gap-3">
              <p className="shrink-0 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-flame">
                More builds
              </p>
              <span className="h-px w-full bg-white/10" />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {additionalProjects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-2xl border border-white/[0.07] bg-card/70 p-4 transition-colors duration-300 hover:border-white/15 hover:bg-card"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[13px] font-bold leading-snug text-white">
                      {project.name}
                    </h3>
                    <span className="shrink-0 font-mono text-[9px] text-white/35">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-ash">
                    {project.description}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/55"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

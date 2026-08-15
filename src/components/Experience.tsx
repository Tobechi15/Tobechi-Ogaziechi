import { additionalProjects, experience } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionKicker, SectionTitle } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-28 sm:py-36">
      <Container>
        <SectionKicker index="03" label="Experience" />
        <SectionTitle className="max-w-2xl">
          Roles, research, and hands-on building.
        </SectionTitle>

        <div className="mt-16 flex flex-col">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-3 border-t border-border py-8 first:border-t-0 sm:grid-cols-[220px_1fr] sm:gap-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-paper-faint">
                    {item.period}
                  </p>
                  <p className="mt-1 text-xs text-paper-faint">{item.location}</p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-paper sm:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-accent-soft">{item.org}</p>
                  <ul className="mt-4 space-y-2.5">
                    {item.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-paper-dim"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 border-t border-border pt-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">
              Additional projects &amp; experiments
            </p>
            <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {additionalProjects.map((p) => (
                <div key={p.name} className="bg-ink px-6 py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-base text-paper">{p.name}</h4>
                    <span className="shrink-0 font-mono text-[10px] text-paper-faint">
                      {p.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-paper-dim">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border-strong px-2.5 py-0.5 font-mono text-[10px] text-paper-faint"
                      >
                        {s}
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

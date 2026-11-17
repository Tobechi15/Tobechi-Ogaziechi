import { skillCategories } from "@/lib/data";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const dotColors = [
  "#3572A5",
  "#FF5722",
  "#3178C6",
  "#0175C2",
  "#F7DF1E",
  "#FF8A65",
  "#34D399",
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <Container>
        <div className="rounded-[2rem] border border-black/5 bg-canvas p-5 text-ink shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] sm:p-8 lg:p-12">
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-flame">
                Stack &amp; frameworks
              </span>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,5.2vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink text-balance">
                Technologies In My Daily Workflow
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                From full-stack web and cross-platform native SDKs to deep
                learning pipelines and cloud deployments.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:gap-7">
            {skillCategories.map((category, index) => (
              <Reveal key={category.title} delay={index * 0.04}>
                <div>
                  <div className="mb-2.5 flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: dotColors[index % dotColors.length] }}
                    />
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                      {category.title}
                    </span>
                    <span className="text-[10px] text-ink/30">· {category.note}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 font-display text-[11px] font-semibold text-ink shadow-sm transition-colors hover:bg-slate-100 sm:px-3.5 sm:text-xs"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{
                            backgroundColor: dotColors[index % dotColors.length],
                          }}
                        />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

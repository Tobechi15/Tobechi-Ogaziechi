import { skillCategories } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionKicker, SectionTitle } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-28 sm:py-36">
      <Container>
        <SectionKicker index="04" label="Skills" />
        <SectionTitle className="max-w-2xl">
          A stack built for full-lifecycle delivery.
        </SectionTitle>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 3) * 0.06} className="h-full">
              <div className="group h-full bg-ink px-7 py-8 transition-colors duration-300 hover:bg-surface">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-xl text-paper">{cat.title}</h3>
                  <span className="font-mono text-[11px] text-accent-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-xs text-paper-faint">{cat.note}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-strong px-3 py-1 text-xs text-paper-dim transition-colors duration-300 group-hover:border-accent/40 group-hover:text-paper"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

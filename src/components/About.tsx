import { aboutFocusAreas, aboutParagraphs, projects, skillCategories } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionKicker, SectionTitle } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const stats = [
  { value: `${projects.length}`, label: "Systems documented" },
  { value: "4.00", label: "GPA / 5.00 · Dean's list" },
  { value: "100+", label: "Members led at NACOS" },
  { value: `${skillCategories.length}`, label: "Tooling categories" },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionKicker>About me</SectionKicker>
          <SectionTitle className="max-w-3xl">
            I turn ideas into systems that actually run.
          </SectionTitle>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {aboutParagraphs.map((paragraph, index) => (
                <Reveal key={index} delay={index * 0.06}>
                  <p
                    className={
                      index === 0
                        ? "text-[15px] leading-relaxed text-white/80 sm:text-lg"
                        : "text-sm leading-relaxed text-ash sm:text-[15px]"
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.18}>
              <p className="mt-8 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                Focus areas
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {aboutFocusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-card/70 px-3 py-1.5 text-xs text-white/75 transition-colors hover:border-flame/40 hover:text-white"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/[0.07] bg-card p-4 transition-colors hover:border-white/15 sm:p-5"
                  >
                    <div className="font-display text-2xl font-extrabold leading-none text-flame sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[11px] leading-snug text-ash">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-3 rounded-2xl border border-flame/20 bg-gradient-to-br from-flame/[0.12] to-transparent p-5">
                <p className="font-display text-sm font-bold text-white">
                  Currently building at WeBuildIdea
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-ash">
                  Taking startup and business ideas from architecture through
                  design, frontend, backend, and deployment as one continuous
                  process.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

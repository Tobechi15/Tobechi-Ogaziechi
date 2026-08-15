import { aboutFocusAreas, aboutParagraphs } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionKicker, SectionTitle } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <Container>
        <SectionKicker index="01" label="About" />
        <SectionTitle className="max-w-3xl">
          I turn ideas into systems that actually run.
        </SectionTitle>

        <div className="mt-14 grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="max-w-2xl text-lg leading-relaxed text-paper-dim">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">
                Focus areas
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {aboutFocusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 text-sm text-paper-dim"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

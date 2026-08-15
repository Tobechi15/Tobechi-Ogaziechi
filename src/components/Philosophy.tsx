import { philosophyPoints } from "@/lib/data";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function Philosophy() {
  return (
    <section className="border-t border-border py-28 sm:py-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">
              Engineering Philosophy
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-3xl italic leading-snug text-accent-soft text-balance sm:text-4xl">
              Build with purpose.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-lg leading-relaxed text-paper-dim text-balance">
              Software should solve a real problem, not simply demonstrate
              technical ability.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-x-10 gap-y-10 sm:grid-cols-2">
          {philosophyPoints.map((point, i) => (
            <Reveal key={point.title} delay={0.05 * i}>
              <div className="border-t border-border pt-5">
                <h3 className="font-serif text-lg text-paper">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-dim">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

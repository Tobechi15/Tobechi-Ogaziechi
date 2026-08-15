import { services } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionKicker, SectionTitle } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Services() {
  return (
    <section className="border-t border-border py-28 sm:py-36">
      <Container>
        <SectionKicker index="06" label="What I Can Build" />
        <SectionTitle className="max-w-2xl">
          Where I can plug in.
        </SectionTitle>

        <div className="mt-14 grid gap-x-10 gap-y-2 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 2) * 0.06}>
              <div className="flex items-start gap-5 border-t border-border py-6">
                <span className="mt-1 font-mono text-xs text-accent-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-paper">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

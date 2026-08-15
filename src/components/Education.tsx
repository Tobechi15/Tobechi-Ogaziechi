import { certifications, education, leadership } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionKicker, SectionTitle } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Education() {
  return (
    <section className="border-t border-border py-28 sm:py-36">
      <Container>
        <SectionKicker index="05" label="Education" />
        <SectionTitle className="max-w-2xl">
          Foundations in Ihie, Abia State.
        </SectionTitle>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="rounded-2xl border border-border-strong p-8 sm:p-10">
              <h3 className="font-serif text-2xl text-paper sm:text-3xl">
                {education.school}
              </h3>
              <p className="mt-1 text-sm text-paper-faint">{education.location}</p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-faint">
                    Degree
                  </p>
                  <p className="mt-1 text-sm text-paper-dim">{education.degree}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-faint">
                    Standing
                  </p>
                  <p className="mt-1 text-sm text-paper-dim">{education.gpa}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-paper-dim">{education.concentration}</p>

              <div className="mt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-faint">
                  Relevant coursework
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {education.coursework.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border-strong px-3 py-1 text-xs text-paper-dim"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-6 border-t border-border pt-5 text-xs italic text-paper-faint">
                {education.note}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                Final-year project:{" "}
                <span className="text-accent-soft">
                  Hybrid Escrow System for Freelance Payments
                </span>{" "}
                — a fiat- and cryptocurrency-settled escrow architecture, detailed under
                Selected Work above.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-border p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-faint">
                  Leadership
                </p>
                <h4 className="mt-3 font-serif text-lg text-paper">
                  {leadership.org}
                </h4>
                <p className="mt-1 text-xs text-paper-faint">
                  {leadership.location} · {leadership.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                  {leadership.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-border p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-faint">
                  Certifications
                </p>
                <ul className="mt-3 space-y-3">
                  {certifications.map((c) => (
                    <li key={c.name} className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-paper-dim">{c.name}</span>
                      <span className="shrink-0 font-mono text-[10px] text-paper-faint">
                        {c.issuer} · {c.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

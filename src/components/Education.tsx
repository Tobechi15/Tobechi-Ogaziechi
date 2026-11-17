import { certifications, education, leadership } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionKicker, SectionTitle } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Briefcase, GraduationCap, MapPin, Verified } from "./ui/Icons";

export function Education() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionKicker>Foundations</SectionKicker>
          <SectionTitle>Education, leadership &amp; credentials</SectionTitle>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-12 lg:gap-5">
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-3xl border border-white/[0.07] bg-card p-5 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-night text-flame">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-white">
                    {education.school}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-ash">
                    <MapPin className="h-3.5 w-3.5" />
                    {education.location}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-white/[0.07] bg-night/60 px-4 py-3">
                  <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                    Degree
                  </p>
                  <p className="mt-1 text-[13px] text-white/85">{education.degree}</p>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-night/60 px-4 py-3">
                  <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                    Standing
                  </p>
                  <p className="mt-1 text-[13px] text-white/85">{education.gpa}</p>
                </div>
              </div>

              <p className="mt-4 text-[13px] text-ash">{education.concentration}</p>

              <div className="mt-5">
                <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Relevant coursework
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/65"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 border-t border-white/[0.07] pt-4">
                <p className="text-[12px] leading-relaxed text-ash">
                  <span className="font-semibold text-peach">Final-year project:</span>{" "}
                  Hybrid Escrow System for Freelance Payments — a fiat- and
                  cryptocurrency-settled escrow architecture, documented under
                  featured work above.
                </p>
                <p className="mt-2 font-mono text-[10px] text-white/25">
                  {education.note}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-white/[0.07] bg-card p-5 sm:p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-night text-flame">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                    Leadership
                  </p>
                </div>
                <h3 className="mt-3 font-display text-[15px] font-bold leading-snug text-white">
                  {leadership.org}
                </h3>
                <p className="mt-1 text-[11px] text-white/40">
                  {leadership.location} · {leadership.period}
                </p>
                <p className="mt-2.5 text-[13px] leading-relaxed text-ash">
                  {leadership.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-3xl border border-white/[0.07] bg-card p-5 sm:p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-night text-emerald-400">
                    <Verified className="h-4 w-4" />
                  </span>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                    Certifications
                  </p>
                </div>
                <ul className="mt-3 divide-y divide-white/[0.07]">
                  {certifications.map((certification) => (
                    <li
                      key={certification.name}
                      className="flex items-baseline justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
                    >
                      <span className="text-[13px] text-white/80">
                        {certification.name}
                      </span>
                      <span className="shrink-0 font-mono text-[9px] text-white/35">
                        {certification.issuer} · {certification.date}
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

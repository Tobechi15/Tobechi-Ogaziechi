import Image from "next/image";
import { philosophyPoints, profile } from "@/lib/data";
import { ArrowUpRight, GithubIcon, LinkedinIcon, MapPin, Send } from "./ui/Icons";
import { Container } from "./ui/Container";
import { SectionKicker, SectionTitle } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Philosophy() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionKicker>Why collaborate with me</SectionKicker>
              <SectionTitle>
                Obsessed with clean code, measurable speed &amp; resilient
                systems.
              </SectionTitle>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ash sm:text-[15px]">
                I bridge the gap between high-fidelity user interaction and
                robust, low-latency backends. Whether you need a cross-platform
                mobile application or a complex full-stack ecosystem, I write
                maintainable, tested, high-performance software.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {philosophyPoints.map((point, index) => (
                <Reveal key={point.title} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-white/[0.07] bg-card/60 p-4 transition-colors duration-300 hover:border-white/15 hover:bg-card">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-flame">
                        0{index + 1}
                      </span>
                      <h3 className="font-display text-[13px] font-bold text-white">
                        {point.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-ash">
                      {point.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-card p-6 text-center shadow-[0_30px_70px_-40px_rgba(0,0,0,1)] sm:p-8 lg:sticky lg:top-28">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-flame/10 blur-3xl"
              />

              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-flame/20 shadow-xl sm:h-28 sm:w-28">
                <Image
                  src="/portrait.png"
                  alt={profile.name}
                  width={371}
                  height={512}
                  sizes="112px"
                  className="h-full w-full scale-105 object-cover object-top"
                />
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {profile.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] text-flame">
                @Tobechi15 · {profile.role}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-ash">
                Available for remote full-time opportunities, high-impact
                contract engineering, and open-source collaborations.
              </p>

              <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-white/40">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location} · Remote worldwide
              </p>

              <div className="mt-5 flex items-center gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-flame px-4 py-3 font-display text-xs font-bold text-white shadow-[0_8px_24px_rgba(255,87,34,0.3)] transition-all hover:brightness-110 active:scale-95"
                >
                  <Send className="h-3.5 w-3.5" />
                  Get in Touch
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-card-high text-white/70 transition-colors hover:text-flame"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-card-high text-white/70 transition-colors hover:text-flame"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>

              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-white/40 transition-colors hover:text-flame"
              >
                Or send a project brief
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

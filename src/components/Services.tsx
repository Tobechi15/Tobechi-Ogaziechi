import { services } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionKicker, SectionTitle } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { ArrowUpRight, Cpu, Layers, Smartphone } from "./ui/Icons";

const cards = [
  {
    icon: Layers,
    title: "Web Engineering",
    description: services[0].description,
    footer: "Modular architecture",
    preview: "web" as const,
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Apps",
    description:
      "Pixel-perfect mobile applications with unified state management, native-feeling navigation, and fast UI rendering across iOS and Android.",
    footer: "Full native speed",
    featured: true,
    preview: "mobile" as const,
  },
  {
    icon: Cpu,
    title: "AI, Data & Systems",
    description: services[5].description,
    footer: "Data science & EA",
    preview: "terminal" as const,
  },
];

export function Services() {
  return (
    <section id="services" className="pt-16 sm:pt-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#15181a] p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] sm:p-8 lg:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-flame/10 blur-3xl"
          />

          <Reveal>
            <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
              <div className="max-w-xl">
                <SectionKicker>My engineering capabilities</SectionKicker>
                <SectionTitle>
                  Full-Stack Engineering &amp; Distributed Architecture
                </SectionTitle>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ash md:text-[15px]">
                Specializing in end-to-end web applications, modern responsive
                platforms, cross-platform mobile apps, and machine learning
                pipelines.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-8 grid items-stretch gap-4 sm:mt-12 md:grid-cols-3 md:gap-5 lg:gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={index * 0.07} className="h-full">
                  <article
                    className={`group flex h-full flex-col justify-between rounded-3xl p-5 transition-all duration-300 sm:p-6 lg:p-7 ${
                      card.featured
                        ? "bg-flame text-white shadow-[0_24px_50px_-24px_rgba(255,87,34,0.6)] md:-translate-y-3 md:hover:-translate-y-5"
                        : "bg-card-high text-white shadow-[0_20px_40px_-30px_rgba(0,0,0,0.9)] hover:-translate-y-2 hover:shadow-[0_24px_44px_-26px_rgba(0,0,0,0.9)]"
                    }`}
                  >
                    <div>
                      <div
                        className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl ${
                          card.featured
                            ? "bg-white/20 text-white backdrop-blur-md"
                            : "bg-night text-flame"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      {card.featured && (
                        <span className="mb-2 inline-block rounded-full bg-white/25 px-2.5 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-white">
                          Featured core
                        </span>
                      )}

                      <h3 className="font-display text-xl font-bold tracking-tight sm:text-[22px]">
                        {card.title}
                      </h3>
                      <p
                        className={`mt-2 text-[13px] leading-relaxed ${
                          card.featured ? "text-white/90" : "text-ash"
                        }`}
                      >
                        {card.description}
                      </p>

                      <div className="mt-5">
                        {card.preview === "web" && <WebPreview />}
                        {card.preview === "mobile" && <MobilePreview />}
                        {card.preview === "terminal" && <TerminalPreview />}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <span
                        className={`font-display text-[11px] font-semibold uppercase tracking-[0.12em] ${
                          card.featured ? "text-white" : "text-ash"
                        }`}
                      >
                        {card.footer}
                      </span>
                      <a
                        href="#work"
                        aria-label={`See projects for ${card.title}`}
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          card.featured
                            ? "bg-white text-flame shadow-lg group-hover:rotate-45"
                            : "bg-night text-white group-hover:bg-flame group-hover:text-white"
                        }`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function WebPreview() {
  return (
    <div className="rounded-2xl bg-night-deep p-3.5 shadow-inner">
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-widest text-white/35">
          React / Next.js
        </span>
      </div>
      <div className="flex h-24 flex-col justify-center gap-2 rounded-xl bg-[#1d2021] p-3 transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="h-2 w-3/4 rounded-full bg-white/15" />
        <div className="h-1.5 w-full rounded-full bg-white/10" />
        <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
        <div className="mt-1 flex gap-1.5">
          <span className="rounded-full bg-flame/20 px-2 py-0.5 text-[9px] font-semibold text-peach">
            NestJS
          </span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/70">
            Tailwind
          </span>
        </div>
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className="rounded-2xl bg-white p-3.5 text-ink shadow-2xl">
      <div className="flex items-center justify-between pb-2">
        <span className="font-display text-[9px] font-bold uppercase tracking-wider text-flame">
          React Native
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </div>
      <div className="flex h-24 items-center gap-3 rounded-xl bg-slate-50 p-2.5 transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="flex h-[76px] w-10 shrink-0 flex-col justify-between rounded-lg bg-[#1d2021] p-1.5 shadow-sm">
          <div className="h-1 w-full rounded bg-flame" />
          <div className="flex h-8 items-center justify-center rounded bg-white/15 text-[7px] text-white">
            UI
          </div>
          <div className="mx-auto h-2.5 w-2.5 rounded-full bg-flame" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="font-display text-[11px] font-bold text-ink">
            Mobile Banking App
          </div>
          <div className="text-[10px] leading-snug text-[#555a60]">
            Wallets, transfers and KYC on real banking rails
          </div>
          <div className="mt-1 flex gap-1">
            <span className="rounded bg-flame/10 px-1.5 py-0.5 text-[8px] font-bold text-flame">
              Android
            </span>
            <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[8px] font-bold text-[#444]">
              iOS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalPreview() {
  return (
    <div className="rounded-2xl bg-night-deep p-3.5 shadow-inner">
      <div className="flex items-center justify-between pb-2">
        <span className="font-mono text-[9px] uppercase tracking-widest text-white/35">
          Python / XGBoost
        </span>
        <span className="text-emerald-400">
          <Cpu className="h-3 w-3" />
        </span>
      </div>
      <div className="flex h-24 flex-col justify-center gap-1 rounded-xl bg-[#1d2021] p-3 font-mono text-[9px] transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="text-peach">$ python train_model.py</div>
        <div className="text-white/50">&gt; Epoch 100/100: Loss 0.012</div>
        <div className="text-emerald-400">&gt; status: convergence</div>
        <div className="mt-1.5 flex items-center gap-1.5">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[94%] bg-flame" />
          </div>
          <span className="font-sans text-[8px] font-bold text-white/70">94%</span>
        </div>
      </div>
    </div>
  );
}

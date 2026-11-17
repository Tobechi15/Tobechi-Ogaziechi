"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { profile, projects } from "@/lib/data";
import { ArrowUpRight, Chat, Folder, Star, Verified } from "./ui/Icons";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-b-[2.5rem] bg-canvas pb-12 pt-28 text-ink sm:pt-32 lg:rounded-b-[4rem] lg:pb-16 lg:pt-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 78%, rgba(255,87,34,0.14), transparent 70%), radial-gradient(45% 40% at 92% 4%, rgba(255,87,34,0.08), transparent 65%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-2 py-1.5 shadow-[0_8px_24px_-14px_rgba(17,20,21,0.5)] sm:px-2.5"
        >
          <span className="flex h-5 items-center rounded-full bg-flame/10 px-2 font-display text-[10px] font-bold uppercase tracking-[0.12em] text-flame">
            Hello!
          </span>
          <span className="pr-1.5 text-[11px] font-medium text-ink/65 sm:text-xs">
            Available for full-stack &amp; mobile work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mt-5 max-w-4xl font-display text-[clamp(2.15rem,9vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink text-balance"
        >
          I&apos;m <span className="text-flame">Tobechi</span>,
          <span className="block">Software Engineer &amp; Full-Stack Builder</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-muted text-balance sm:text-base"
        >
          {profile.tagline}
        </motion.p>

        <div className="relative mt-8 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
            className="relative mx-auto flex min-h-[320px] w-full items-end justify-center sm:min-h-[390px] lg:min-h-[400px]"
          >
            <div
              aria-hidden
              className="absolute bottom-0 h-[185px] w-[255px] rounded-t-full bg-flame shadow-[0_-15px_50px_rgba(255,87,34,0.4)] sm:h-[235px] sm:w-[355px] lg:h-[275px] lg:w-[430px]"
            />
            <div
              aria-hidden
              className="absolute bottom-[70px] h-40 w-40 rounded-full bg-flame/25 blur-3xl sm:bottom-24 sm:h-56 sm:w-56"
            />

            <div className="relative z-10 w-[215px] translate-y-1 sm:w-[275px] lg:w-[325px]">
              <Image
                src="/portrait.png"
                alt={`${profile.name} — ${profile.role}`}
                width={371}
                height={512}
                priority
                sizes="(min-width: 1024px) 325px, (min-width: 640px) 275px, 215px"
                className="h-auto w-full select-none drop-shadow-[0_22px_28px_rgba(0,0,0,0.32)]"
              />
            </div>
          </motion.div>

          {/* Floating proof cards: absolute on desktop, a 2x2 feed on mobile. */}
          <div className="relative z-20 mt-8 grid grid-cols-2 gap-3 text-left lg:absolute lg:inset-x-0 lg:top-1 lg:mt-0 lg:block">
            <div className="contents lg:absolute lg:left-0 lg:top-0 lg:block lg:w-[215px] lg:space-y-3 xl:w-[235px]">
              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_18px_40px_-24px_rgba(17,20,21,0.5)] transition-transform duration-300 hover:-translate-y-1">
                <span className="mb-1 block font-display text-2xl font-black leading-none text-flame">
                  &ldquo;
                </span>
                <p className="text-[11px] italic leading-snug text-[#383c40] sm:text-xs">
                  Clean, robust and scalable full-stack applications — built with
                  exceptional speed.
                </p>
              </div>

              <div className="flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-white px-3.5 py-3 shadow-[0_18px_40px_-24px_rgba(17,20,21,0.5)] sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-flame/10 text-flame">
                  <Folder className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-base font-bold leading-none text-ink">
                    {projects.length} systems
                  </div>
                  <div className="mt-1 text-[10px] leading-tight text-muted">
                    Documented case studies
                  </div>
                </div>
              </div>
            </div>

            <div className="contents lg:absolute lg:right-0 lg:top-2 lg:block lg:w-[215px] lg:space-y-3 xl:w-[235px]">
              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_18px_40px_-24px_rgba(17,20,21,0.5)] transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-1.5 flex items-center gap-0.5 text-flame">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3" />
                  ))}
                </div>
                <div className="font-display text-sm font-extrabold leading-tight text-ink sm:text-base">
                  Production Ready
                </div>
                <p className="mt-1 text-[11px] leading-tight text-[#5b5f64] sm:text-xs">
                  Engineered for clean architecture and fault-tolerant scale.
                </p>
              </div>

              <div className="flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-white px-3.5 py-3 shadow-[0_18px_40px_-24px_rgba(17,20,21,0.5)] sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <Verified className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-base font-bold leading-none text-ink">
                    Full-Stack
                  </div>
                  <div className="mt-1 text-[10px] leading-tight text-muted">
                    Web · Mobile · Systems
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-30 mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:-mt-6">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3.5 font-display text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,87,34,0.4)] transition-all duration-300 hover:brightness-110 active:scale-95 sm:px-7"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-display text-sm font-bold text-ink shadow-sm transition-all duration-300 hover:bg-slate-50 active:scale-95 sm:px-7"
            >
              <Chat className="h-4 w-4 text-flame" />
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

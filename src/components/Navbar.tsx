"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
import { ArrowUpRight, CloseIcon, GithubIcon, LinkedinIcon, MenuIcon } from "./ui/Icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between rounded-full border border-white/10 bg-[#121214]/85 py-2 pl-3 pr-2 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:pl-5 sm:pr-2.5">
        <Link href="#top" className="flex items-center gap-2.5 rounded-full px-1 py-1.5" onClick={() => setOpen(false)}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-flame opacity-70 blur-[3px]" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-flame" />
          </span>
          <span className="font-display text-sm font-extrabold tracking-tight text-white sm:text-[15px]">
            <span className="sm:hidden">Tobechi</span>
            <span className="hidden sm:inline">Tobechi Ogaziechi</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                active === item.href
                  ? "bg-white/[0.07] text-flame"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-flame px-4 py-2.5 font-display text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(255,87,34,0.35)] transition-all hover:brightness-110 active:scale-95 md:inline-flex"
          >
            Hire Me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 h-dvh overflow-y-auto bg-night/97 px-5 pb-10 pt-24 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex min-h-full w-full max-w-[1280px] flex-col justify-between gap-10">
              <ul className="flex flex-col">
                {nav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.35 }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[10px] text-flame">
                          0{index + 1}
                        </span>
                        <span className="font-display text-2xl font-bold tracking-tight text-white">
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-white/40" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col gap-6">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-flame px-6 py-4 font-display text-sm font-bold text-white shadow-[0_12px_32px_rgba(255,87,34,0.35)]"
                >
                  Hire Me
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] text-white/40">
                    {profile.location} · Remote worldwide
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub profile"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-colors hover:text-flame"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn profile"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-colors hover:text-flame"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

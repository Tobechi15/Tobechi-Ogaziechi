"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
import { Container } from "./ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-quart ${
        scrolled
          ? "border-b border-border bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-[72px] items-center justify-between">
          <Link
            href="#top"
            className="font-serif text-lg tracking-tight text-paper transition-colors hover:text-accent"
          >
            Tobechi Ogaziechi
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative text-sm transition-colors duration-300 ${
                    active === item.href
                      ? "text-accent-soft"
                      : "text-paper-dim hover:text-paper"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                      active === item.href ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm text-paper transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              className="h-px w-6 bg-paper"
              transition={{ duration: 0.25 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              className="h-px w-6 bg-paper"
              transition={{ duration: 0.25 }}
            />
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 h-dvh bg-ink md:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
              <ul className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="border-b border-border py-4"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-serif text-3xl text-paper"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex flex-col gap-6"
              >
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink"
                >
                  Let&apos;s Talk
                </Link>
                <div className="flex gap-6 text-sm text-paper-dim">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-paper">
                    GitHub
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper">
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

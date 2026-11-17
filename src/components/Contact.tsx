"use client";

import { type FormEvent, useState } from "react";
import { contact, profile, socials } from "@/lib/data";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { ArrowUpRight, Chat, GithubIcon, LinkedinIcon, Mail, Send } from "./ui/Icons";

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail,
} as const;

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Project inquiry from ${name || "your site"}`
    );
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="pb-16 pt-8 sm:pb-24 sm:pt-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-flame">
                <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                Get in touch
              </span>
              <h2 className="mt-4 font-display text-[clamp(1.85rem,5.6vw,2.75rem)] font-extrabold leading-[1.06] tracking-[-0.02em] text-white text-balance">
                {contact.headline}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ash sm:text-[15px]">
                {contact.supporting} Tell me what you&apos;re building and
                I&apos;ll get back to you.
              </p>
            </Reveal>

            <div className="mt-7 flex flex-col gap-2.5">
              {socials.map((social, index) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <Reveal key={social.label} delay={0.06 * index}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-card/60 p-3.5 transition-all duration-300 hover:border-white/15 hover:bg-card sm:p-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-night text-flame">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[13px] font-bold text-white">
                          {social.label}
                        </span>
                        <span className="mt-0.5 block truncate text-[11px] text-white/40">
                          {social.handle}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flame" />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/[0.07] bg-card p-5 shadow-[0_30px_70px_-40px_rgba(0,0,0,1)] sm:p-7"
            >
              <div className="flex items-center gap-2.5 border-b border-white/[0.07] pb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-flame/10 text-flame">
                  <Chat className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-[13px] font-bold text-white">
                    Start a project
                  </p>
                  <p className="text-[10px] text-white/40">
                    Opens your email client, pre-filled.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-night px-3.5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-flame/60 focus:ring-2 focus:ring-flame/20"
                    />
                  </Field>

                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-white/10 bg-night px-3.5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-flame/60 focus:ring-2 focus:ring-flame/20"
                    />
                  </Field>
                </div>

                <Field label="What are you building?" htmlFor="message">
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="A short brief on the idea, product, or problem."
                    className="w-full resize-none rounded-xl border border-white/10 bg-night px-3.5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-flame/60 focus:ring-2 focus:ring-flame/20"
                  />
                </Field>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-flame px-6 py-3.5 font-display text-sm font-bold text-white shadow-[0_10px_28px_rgba(255,87,34,0.35)] transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  Send message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-display text-[10px] font-bold uppercase tracking-[0.14em] text-white/40"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

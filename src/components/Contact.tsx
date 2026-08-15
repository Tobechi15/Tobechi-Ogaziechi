"use client";

import { type FormEvent, useState } from "react";
import { contact, profile, socials } from "@/lib/data";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || "your site"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-t border-border py-28 sm:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">
                <span className="text-accent-soft">07</span> · Contact
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.04] tracking-tight text-paper text-balance">
                {contact.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim text-balance">
                {contact.supporting}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between border-b border-border pb-3 text-paper transition-colors hover:text-accent"
                  >
                    <span className="font-serif text-xl">{s.label}</span>
                    <span className="font-mono text-sm text-paper-faint transition-colors group-hover:text-accent-soft">
                      {s.handle}
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border-strong p-7 sm:p-9"
            >
              <div className="flex flex-col gap-5">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full border-b border-border bg-transparent py-2.5 text-paper outline-none transition-colors placeholder:text-paper-faint focus:border-accent"
                  />
                </Field>

                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full border-b border-border bg-transparent py-2.5 text-paper outline-none transition-colors placeholder:text-paper-faint focus:border-accent"
                  />
                </Field>

                <Field label="What are you building?" htmlFor="message">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="A short brief on the idea, product, or problem."
                    className="w-full resize-none border-b border-border bg-transparent py-2.5 text-paper outline-none transition-colors placeholder:text-paper-faint focus:border-accent"
                  />
                </Field>

                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:bg-accent hover:-translate-y-0.5"
                >
                  Send message
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
                <p className="text-xs text-paper-faint">
                  Opens your email client with the message pre-filled.
                </p>
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
        className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper-faint"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

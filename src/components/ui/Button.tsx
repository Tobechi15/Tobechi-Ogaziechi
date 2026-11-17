"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps & {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-bold tracking-[0.01em] transition-all duration-300 ease-out-expo active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-2 focus-visible:ring-offset-night";

const variants = {
  primary:
    "bg-flame text-white shadow-[0_10px_28px_rgba(255,87,34,0.35)] hover:brightness-110",
  secondary:
    "border border-slate-200 bg-white text-ink shadow-sm hover:bg-slate-50",
  ghost:
    "border border-hairline-strong bg-card/60 text-white hover:border-flame/50 hover:text-flame",
};

export function Button({
  href,
  children,
  className = "",
  variant = "primary",
  external = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

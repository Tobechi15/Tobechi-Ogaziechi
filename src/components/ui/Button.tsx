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
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-out-quart focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const variants = {
  primary:
    "bg-paper text-ink hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(201,154,74,0.45)]",
  secondary:
    "border border-border-strong text-paper hover:border-accent hover:text-accent hover:-translate-y-0.5",
  ghost:
    "text-paper-dim hover:text-paper",
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

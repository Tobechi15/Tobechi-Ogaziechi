import type { ReactNode } from "react";

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-flame">
      <span className="h-1.5 w-1.5 rounded-full bg-flame" />
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mt-4 font-display text-[clamp(1.85rem,5.4vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white text-balance ${className}`}
    >
      {children}
    </h2>
  );
}

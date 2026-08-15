import { Reveal } from "./Reveal";

export function SectionKicker({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-paper-faint">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-border-strong" />
        <span>{label}</span>
      </div>
    </Reveal>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal delay={0.08}>
      <h2
        className={`mt-5 font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-paper text-balance ${className}`}
      >
        {children}
      </h2>
    </Reveal>
  );
}

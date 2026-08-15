"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";

const codeLines = [
  { n: "01", t: [{ c: "text-paper-faint", s: "// escrow.settlement" }] },
  {
    n: "02",
    t: [
      { c: "text-accent-soft", s: "state" },
      { c: "text-paper-dim", s: " transitions = [" },
    ],
  },
  {
    n: "03",
    t: [
      { c: "text-paper-dim", s: "  " },
      { c: "text-signal", s: "'funded'" },
      { c: "text-paper-dim", s: " -> " },
      { c: "text-signal", s: "'in_progress'" },
      { c: "text-paper-dim", s: "," },
    ],
  },
  {
    n: "04",
    t: [
      { c: "text-paper-dim", s: "  " },
      { c: "text-signal", s: "'in_progress'" },
      { c: "text-paper-dim", s: " -> " },
      { c: "text-signal", s: "'delivered'" },
      { c: "text-paper-dim", s: "," },
    ],
  },
  {
    n: "05",
    t: [
      { c: "text-paper-dim", s: "  " },
      { c: "text-signal", s: "'delivered'" },
      { c: "text-paper-dim", s: " -> " },
      { c: "text-accent", s: "'released'" },
      { c: "text-paper-dim", s: "," },
    ],
  },
  { n: "06", t: [{ c: "text-paper-dim", s: "];" }] },
  { n: "07", t: [{ c: "text-paper-faint", s: "" }] },
  {
    n: "08",
    t: [
      { c: "text-accent-soft", s: "await" },
      { c: "text-paper-dim", s: " settle(" },
      { c: "text-signal", s: "rail" },
      { c: "text-paper-dim", s: ": " },
      { c: "text-signal", s: "'fiat'" },
      { c: "text-paper-dim", s: " | " },
      { c: "text-signal", s: "'crypto'" },
      { c: "text-paper-dim", s: ");" },
    ],
  },
];

export function SystemVisual() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), {
    stiffness: 150,
    damping: 20,
  });

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="[perspective:1200px]"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full max-w-[480px] rounded-2xl border border-border-strong bg-surface shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-paper-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-paper-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-paper-faint/40" />
          </div>
          <span className="font-mono text-[11px] tracking-wide text-paper-faint">
            escrow.settlement.ts
          </span>
        </div>

        <div className="px-5 py-5 font-mono text-[13px] leading-[1.9]">
          {codeLines.map((line) => (
            <div key={line.n} className="flex gap-4">
              <span className="w-4 shrink-0 select-none text-right text-paper-faint/50">
                {line.n}
              </span>
              <span className="whitespace-pre">
                {line.t.map((seg, i) => (
                  <span key={i} className={seg.c}>
                    {seg.s}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2.5 border-t border-border px-5 py-3.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[11px] tracking-wide text-paper-dim">
            settlement path: idempotent · dual-rail
          </span>
        </div>
      </motion.div>
    </div>
  );
}

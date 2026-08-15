"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

const wrap = "relative flex h-full w-full items-center justify-center overflow-hidden bg-surface";

function EscrowVisual() {
  const states = ["funded", "in progress", "delivered", "released"];
  return (
    <div className={wrap}>
      <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="escrowFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d99b3f" stopOpacity="0" />
            <stop offset="50%" stopColor="#d99b3f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d99b3f" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[70, 200, 330].map((cx, i) => (
          <g key={cx}>
            <circle cx={cx} cy={150} r={30} fill="none" stroke="rgba(245,244,239,0.18)" strokeWidth="1" />
            <circle cx={cx} cy={150} r={3} fill={i === 1 ? "#d99b3f" : "#bcbcb4"} />
          </g>
        ))}

        <line x1="100" y1="150" x2="170" y2="150" stroke="rgba(245,244,239,0.15)" strokeWidth="1" />
        <line x1="230" y1="150" x2="300" y2="150" stroke="rgba(245,244,239,0.15)" strokeWidth="1" />

        <motion.circle
          cy="150"
          r="2.5"
          fill="#d99b3f"
          animate={{ cx: [100, 300] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
        />

        <text x="70" y="200" textAnchor="middle" className="fill-paper-faint font-mono" fontSize="9">
          CLIENT
        </text>
        <text x="200" y="200" textAnchor="middle" className="fill-accent-soft font-mono" fontSize="9">
          ESCROW
        </text>
        <text x="330" y="200" textAnchor="middle" className="fill-paper-faint font-mono" fontSize="9">
          FREELANCER
        </text>
      </svg>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {states.map((s, i) => (
          <span
            key={s}
            className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide ${
              i === states.length - 1
                ? "border-accent/50 text-accent-soft"
                : "border-border-strong text-paper-faint"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function OrbVisual() {
  const bars = [42, 58, 39, 66, 51, 74, 60, 88, 70, 96, 82, 108];
  return (
    <div className={wrap}>
      <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden>
        <rect x="30" y="70" width="340" height="34" fill="rgba(217,155,63,0.1)" stroke="rgba(217,155,63,0.3)" strokeWidth="1" />
        <text x="34" y="64" className="fill-paper-faint font-mono" fontSize="9">
          OPENING RANGE
        </text>

        {bars.map((h, i) => (
          <motion.rect
            key={i}
            x={40 + i * 27}
            width="14"
            fill={i > 7 ? "#d99b3f" : "#4f9c74"}
            initial={{ height: 0, y: 230 }}
            whileInView={{ height: h, y: 230 - h }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}

        <path
          d="M40,190 C120,175 200,150 360,110"
          fill="none"
          stroke="rgba(245,244,239,0.35)"
          strokeDasharray="3 4"
          strokeWidth="1.2"
        />
        <text x="330" y="102" className="fill-paper-dim font-mono" fontSize="9">
          VWAP
        </text>
      </svg>
    </div>
  );
}

function QuantVisual() {
  const nodes = [
    [60, 90], [140, 60], [220, 110], [300, 70], [340, 140],
    [90, 170], [180, 200], [260, 180], [130, 240], [300, 230],
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 3], [6, 8], [7, 9],
  ];
  return (
    <div className={wrap}>
      <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden>
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke="rgba(245,244,239,0.14)"
            strokeWidth="1"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 5 : 3}
            fill={i % 3 === 0 ? "#d99b3f" : "#bcbcb4"}
            initial={{ opacity: 0.3, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          />
        ))}
      </svg>
    </div>
  );
}

function FintechVisual() {
  const rows = [
    { label: "wallet.credit", value: "+ NGN 84,200", tone: "text-signal" },
    { label: "kyc.verified", value: "tier 2", tone: "text-paper-dim" },
    { label: "transfer.intl", value: "USD → NGN", tone: "text-paper-dim" },
    { label: "webhook.received", value: "202 ack", tone: "text-accent-soft" },
    { label: "queue.job", value: "bullmq #4471", tone: "text-paper-dim" },
  ];
  return (
    <div className={wrap}>
      <div className="w-full max-w-[340px] px-4">
        <div className="divide-y divide-border rounded-lg border border-border">
          {rows.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center justify-between px-4 py-3 font-mono text-[11px]"
            >
              <span className="text-paper-faint">{r.label}</span>
              <span className={r.tone}>{r.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WeBuildIdeaVisual() {
  const blocks = [
    "idea", "architecture", "design", "frontend", "backend", "deploy",
  ];
  return (
    <div className={wrap}>
      <div className="grid w-full max-w-[340px] grid-cols-3 gap-3 px-4">
        {blocks.map((b, i) => (
          <motion.div
            key={b}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="flex aspect-square flex-col items-center justify-center gap-1 rounded-md border border-border-strong bg-ink/40"
          >
            <span className="font-mono text-[9px] uppercase tracking-wide text-paper-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[11px] text-paper-dim">{b}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const map: Record<Project["visual"], () => React.JSX.Element> = {
  escrow: EscrowVisual,
  orb: OrbVisual,
  quant: QuantVisual,
  fintech: FintechVisual,
  webuildidea: WeBuildIdeaVisual,
};

export function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  const Comp = map[variant];
  return <Comp />;
}

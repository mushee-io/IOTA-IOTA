import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export const gradientText =
  "bg-gradient-to-r from-zinc-900 via-pink-700 to-pink-500 bg-clip-text text-transparent";
export const pill =
  "inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700 shadow-sm backdrop-blur";
export const panel =
  "rounded-[28px] border border-white/70 bg-white/75 shadow-halo backdrop-blur-xl";
export const softPanel =
  "rounded-[24px] border border-pink-100 bg-white/85 shadow-[0_10px_40px_rgba(236,72,153,0.08)]";

export function MiniBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-zinc-100">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-zinc-900 via-pink-600 to-pink-400"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function MetricCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <motion.div whileHover={{ y: -3 }} className={`${softPanel} p-5`}>
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-2xl border border-pink-100 bg-pink-50 p-3 text-pink-600">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-pink-500">
          Live
        </span>
      </div>
      <div className="text-sm text-zinc-500">{label}</div>
      <div className="mt-1 text-3xl font-semibold text-zinc-950">{value}</div>
      <div className="mt-2 text-sm text-zinc-500">{sub}</div>
    </motion.div>
  );
}

export function DemoButton({
  label,
  icon: Icon,
  onClick,
  tone,
}: {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  tone: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${tone}`}
    >
      <span className="flex items-center gap-3">
        <span className="rounded-xl bg-white/70 p-2 shadow-sm">
          <Icon className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium">{label}</span>
      </span>
      <span className="text-zinc-400 transition group-hover:translate-x-1">→</span>
    </button>
  );
}

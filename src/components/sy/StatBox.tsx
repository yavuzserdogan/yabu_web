"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { clamp, easeOutExpo, reducedMotion } from "@/lib/motion";
import { useInView } from "@/hooks/useInView";
import type { Stat } from "@/content/types";

type Props = Stat & { compact?: boolean; duration?: number };

/** Counts up (dur-xslow, ease-out-expo) once 40% visible. TR uses a decimal comma. */
export function StatBox({ value, decimals = 0, prefix = "", unit, label, compact, duration = 1400 }: Props) {
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const out = useRef<HTMLSpanElement>(null);
  const on = useInView(ref, { threshold: 0.4 });

  const fmt = (v: number) => {
    const s = decimals ? v.toFixed(decimals) : String(Math.round(v));
    return prefix + (locale === "tr" ? s.replace(".", ",") : s);
  };

  // SSR/no-JS shows the final value; hydrate to 0 so the count-up has somewhere to start.
  useEffect(() => {
    if (!reducedMotion() && out.current) out.current.textContent = `${prefix}0`;
  }, [prefix]);

  useEffect(() => {
    if (!on || !out.current) return;
    if (reducedMotion()) { out.current.textContent = fmt(value); return; }
    const t0 = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = clamp((now - t0) / duration, 0, 1);
      if (out.current) out.current.textContent = fmt(value * easeOutExpo(t));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, value, duration]);

  return (
    <div ref={ref} className={cn("sy-stat", compact && "sy-stat--compact")}>
      <div className="sy-stat__value">
        <span ref={out}>{fmt(value)}</span>
        {unit && <span className="sy-stat__unit">{unit}</span>}
      </div>
      <div className="sy-stat__label">{label}</div>
    </div>
  );
}

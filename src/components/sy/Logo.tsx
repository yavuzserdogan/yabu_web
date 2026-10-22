import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { LOGOS, type LogoVariant } from "./logos";

type Props = {
  variant?: LogoVariant;
  height?: number;
  /** stretch to the container width (footer wordmark) */
  fill?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Logo({ variant = siteConfig.logo, height = 28, fill, className, style }: Props) {
  const mark = LOGOS[variant] ?? LOGOS.nokta;
  const isMono = variant === "mono";

  return (
    <svg
      className={cn("sy-logo", className)}
      viewBox={`0 0 ${mark.w} ${mark.h}`}
      width={fill ? "100%" : (height * mark.w) / mark.h}
      height={fill ? undefined : height}
      role="img"
      aria-label={siteConfig.name}
      style={style}
    >
      {isMono && <circle cx={50} cy={50} r={50} fill="currentColor" />}
      {mark.p.map((d, i) => (
        <path key={i} d={d} fill="currentColor" style={isMono ? { fill: "var(--bg)" } : undefined} />
      ))}
      {mark.c.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" className="sy-logo__dot" />
      ))}
      {mark.r.map(([x, y, w, h, rx], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx={rx} fill="currentColor" />
      ))}
    </svg>
  );
}

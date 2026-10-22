"use client";

import { CSSProperties, ElementType, ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  /** one entry per masked line */
  lines: ReactNode[];
  as?: ElementType;
  trigger?: "view" | "mount";
  delay?: number;
  stagger?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

/** Lines slide up from a mask (translateY 110% → 0, dur-slow ease-out-expo). */
export function Reveal({ lines, as: Tag = "div", trigger = "view", delay = 0, stagger = 80, className, style, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { threshold: 0.2 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (trigger !== "mount") return;
    const t = setTimeout(() => setMounted(true), delay || 60);
    return () => clearTimeout(t);
  }, [trigger, delay]);

  const on = trigger === "mount" ? mounted : seen;
  return (
    <Tag ref={ref} id={id} className={cn("sy-reveal", on && "is-in", className)} style={style}>
      {lines.map((line, i) => (
        <span key={i} className="sy-reveal__line">
          <span
            className="sy-reveal__in"
            style={{ transitionDelay: `${i * stagger + (trigger === "mount" ? 0 : delay)}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

type FadeProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/** Section entrance: opacity + 24px rise when scrolled into view. */
export function Fade({ as: Tag = "div", delay = 0, className, style, children }: FadeProps) {
  const ref = useRef<HTMLElement>(null);
  const on = useInView(ref);
  return (
    <Tag ref={ref} className={cn("sy-fade", on && "is-in", className)} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}

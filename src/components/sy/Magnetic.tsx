"use client";

import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { finePointer, reducedMotion } from "@/lib/motion";

type Props = {
  /** pull ratio, 0.25–0.35 in the spec */
  strength?: number;
  /** extra px around the element that still attracts */
  padding?: number;
  className?: string;
  children: ReactNode;
};

export function Magnetic({ strength = 0.35, padding = 24, className, children }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion() || !finePointer()) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      const inside = Math.abs(mx) < r.width / 2 + padding && Math.abs(my) < r.height / 2 + padding;
      if (inside) {
        el.classList.add("is-active");
        el.style.transform = `translate(${(mx * strength).toFixed(1)}px,${(my * strength).toFixed(1)}px)`;
        if (inner.current) {
          inner.current.style.transform = `translate(${(mx * strength * 0.4).toFixed(1)}px,${(my * strength * 0.4).toFixed(1)}px)`;
        }
      } else if (el.classList.contains("is-active")) {
        el.classList.remove("is-active");
        el.style.transform = "";
        if (inner.current) inner.current.style.transform = "";
      }
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [strength, padding]);

  return (
    <span ref={ref} className={cn("sy-mag", className)}>
      <span ref={inner} className="sy-mag__inner">{children}</span>
    </span>
  );
}

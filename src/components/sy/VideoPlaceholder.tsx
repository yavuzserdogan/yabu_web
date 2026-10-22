"use client";

import { CSSProperties, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { reducedMotion } from "@/lib/motion";

type Props = {
  variant?: "sphere" | "waves";
  note?: string;
  playing?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Live stand-in for the hero video — concept B (monochrome line loop) from hero-video.md.
 * Replace with a <video> once the real loop exists.
 */
export function VideoPlaceholder({ variant = "sphere", note, playing = true, className, style }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    let raf = 0;
    const t0 = performance.now();
    const red = reducedMotion();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let visible = true;

    const size = () => {
      const w = c.clientWidth, h = c.clientHeight;
      if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) {
        c.width = Math.round(w * dpr);
        c.height = Math.round(h * dpr);
      }
      return [w, h] as const;
    };

    const draw = (now: number) => {
      const [w, h] = size();
      if (!w || !h) { raf = requestAnimationFrame(draw); return; }
      const t = red ? 2 : (now - t0) / 1000;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);
      ctx.lineWidth = 1;

      if (variant === "sphere") {
        const R0 = Math.min(w, h) * 0.36, cx = w / 2, cy = h / 2, N = 22;
        for (let i = 0; i < N; i++) {
          const a = (i / N) * Math.PI + t * 0.35;
          const rx = Math.abs(Math.cos(a)) * R0;
          ctx.strokeStyle = `rgba(255,255,255,${(0.18 + 0.55 * Math.abs(Math.sin(a))).toFixed(3)})`;
          ctx.beginPath();
          ctx.ellipse(cx, cy, Math.max(rx, 0.5), R0, Math.sin(t * 0.2) * 0.35, 0, Math.PI * 2);
          ctx.stroke();
        }
        for (let j = 1; j < 8; j++) {
          const yy = -R0 + (2 * R0 * j) / 8;
          const rr = Math.sqrt(R0 * R0 - yy * yy);
          ctx.strokeStyle = "rgba(255,255,255,0.12)";
          ctx.beginPath();
          ctx.ellipse(cx, cy + yy, rr, rr * 0.18, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(cx + Math.cos(t * 0.9) * R0 * 1.25, cy + Math.sin(t * 0.9) * R0 * 0.32, Math.max(3, R0 * 0.035), 0, Math.PI * 2);
        ctx.fill();
      } else {
        const rows = 26;
        for (let k = 0; k < rows; k++) {
          const y0 = ((k + 0.5) * h) / rows;
          ctx.strokeStyle = `rgba(255,255,255,${(0.15 + 0.5 * (k / rows)).toFixed(3)})`;
          ctx.beginPath();
          for (let x = 0; x <= w; x += 8) {
            const yv = y0 + Math.sin(x * 0.012 + t * 1.2 + k * 0.35) * h * 0.035 * Math.sin(t * 0.3 + k * 0.2);
            if (x === 0) ctx.moveTo(x, yv); else ctx.lineTo(x, yv);
          }
          ctx.stroke();
        }
      }
      if (!red && playing && visible) raf = requestAnimationFrame(draw);
    };

    // pause off-screen
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(draw);
    });
    io.observe(c);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [variant, playing]);

  return (
    <div className={cn("sy-video", className)} style={style}>
      <canvas ref={ref} aria-hidden />
      {note && <span className="sy-video__note">{note}</span>}
    </div>
  );
}

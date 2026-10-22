"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { finePointer, lerp, reducedMotion } from "@/lib/motion";

type Mode = "default" | "link" | "view" | "play" | "text" | "hide";

/**
 * Custom cursor: 12px dot that trails the pointer (lerp 0.2).
 * Links/buttons → 56px difference circle; [data-cursor="view|play"] → 104px labelled circle;
 * [data-cursor-label] overrides the label. Disabled on touch devices.
 */
export function Cursor() {
  const t = useTranslations("Common.cursor");
  const ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !finePointer()) return;
    const root = document.documentElement;
    root.classList.add("sy-has-cursor");

    let x = -100, y = -100, cx = -100, cy = -100, raf = 0;
    let mode: Mode = "default";
    const red = reducedMotion();

    const setMode = (m: Mode, label?: string | null) => {
      if (m !== mode) { mode = m; el.setAttribute("data-mode", m); }
      if (labelRef.current) {
        labelRef.current.textContent =
          label || (m === "view" ? el.dataset.view : m === "play" ? el.dataset.play : "") || "";
      }
    };

    const move = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      el.classList.remove("is-out");
      const target = (e.target as Element | null)?.closest?.(
        "[data-cursor], a, button, input, textarea, select, label"
      );
      if (!target) return setMode("default");
      const m = target.getAttribute("data-cursor") as Mode | null;
      if (m) return setMode(m, target.getAttribute("data-cursor-label"));
      if (target.matches("input:not([type=checkbox]):not([type=radio]), textarea")) return setMode("text");
      setMode("link");
    };
    const tick = () => {
      cx = red ? x : lerp(cx, x, 0.2);
      cy = red ? y : lerp(cy, y, 0.2);
      el.style.transform = `translate3d(${cx.toFixed(1)}px,${cy.toFixed(1)}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    const out = () => el.classList.add("is-out");
    const down = () => el.classList.add("is-down");
    const up = () => el.classList.remove("is-down");

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", out);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    raf = requestAnimationFrame(tick);

    return () => {
      root.classList.remove("sy-has-cursor");
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", out);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <div ref={ref} className="sy-cursor is-out" data-mode="default" data-view={t("view")} data-play={t("play")} aria-hidden>
      <div className="sy-cursor__dot">
        <span ref={labelRef} className="sy-cursor__label" />
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "@/i18n/routing";
import { reducedMotion } from "@/lib/motion";

let instance: Lenis | null = null;

/** Current Lenis instance (null with reduced motion or before mount). */
export const getLenis = () => instance;

/** Lenis smooth scroll (lerp 0.1). Off with prefers-reduced-motion: native scroll stays. */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (reducedMotion()) return;
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, anchors: true });
    instance = lenis;
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      instance = null;
    };
  }, []);

  // route change: start at the top unless the URL targets an anchor
  useEffect(() => {
    if (!window.location.hash) instance?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}

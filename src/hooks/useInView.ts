"use client";

import { RefObject, useEffect, useState } from "react";

type Options = { once?: boolean; threshold?: number; rootMargin?: string };

export function useInView(ref: RefObject<Element | null>, opts: Options = {}) {
  const { once = true, threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = opts;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) setInView(false);
        });
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, once, threshold, rootMargin]);

  return inView;
}

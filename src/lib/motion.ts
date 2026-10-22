// Motion helpers shared by the Sybor components (values mirror tokens.json).

export const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
export const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function reducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function finePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

/** rAF-throttled scroll + resize listener. Runs once immediately. Returns cleanup. */
export function onScroll(fn: () => void) {
  let raf = 0;
  const run = () => {
    if (!raf) raf = requestAnimationFrame(() => { raf = 0; fn(); });
  };
  window.addEventListener("scroll", run, { passive: true });
  window.addEventListener("resize", run);
  fn();
  return () => {
    window.removeEventListener("scroll", run);
    window.removeEventListener("resize", run);
    cancelAnimationFrame(raf);
  };
}

export function copyText(text: string): Promise<void> {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  const a = document.createElement("textarea");
  a.value = text;
  a.style.position = "fixed";
  a.style.opacity = "0";
  document.body.appendChild(a);
  a.select();
  try { document.execCommand("copy"); } catch { /* ignore */ }
  document.body.removeChild(a);
  return Promise.resolve();
}

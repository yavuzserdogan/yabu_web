"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { clamp, easeInOut, lerp, reducedMotion } from "@/lib/motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/sy/Button";
import { Icon } from "@/components/sy/Icon";
import { Fade, Reveal } from "@/components/sy/Reveal";
import { VideoModal } from "@/components/sy/VideoModal";
import { VideoPlaceholder } from "@/components/sy/VideoPlaceholder";

/**
 * Cuberto-style hero. A pill-shaped video sits inside the headline; scrolling scrubs it
 * into a full-width showreel (section = 2.1 × viewport, stage sticky, progress 0 → 0.85).
 */
export function Hero() {
  const t = useTranslations("Hero");
  const tc = useTranslations("Common");
  const lines = t.raw("lines") as string[][];

  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const pill = useRef<HTMLSpanElement>(null);
  const reel = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const red = reducedMotion();
    let raf = 0;
    const frame = () => {
      const st = stage.current, se = section.current, pe = pill.current, re = reel.current;
      if (!st || !se || !pe || !re) { raf = requestAnimationFrame(frame); return; }
      const vh = window.innerHeight;
      st.style.height = `${vh}px`;
      se.style.height = red ? `${vh}px` : `${vh * 2.1}px`;

      const sr = se.getBoundingClientRect(), str = st.getBoundingClientRect(), pr = pe.getBoundingClientRect();
      const dist = Math.max(1, se.offsetHeight - vh);
      const prog = red ? 0 : clamp(-sr.top / dist, 0, 1);
      const e = easeInOut(clamp(prog / 0.85, 0, 1));
      const m = str.width < 768 ? 20 : 48;

      const x0 = pr.left - str.left, y0 = pr.top - str.top, w0 = pr.width, h0 = pr.height;
      const x1 = m, y1 = m * 0.5, w1 = str.width - 2 * m, h1 = vh - m;
      re.style.left = `${lerp(x0, x1, e)}px`;
      re.style.top = `${lerp(y0, y1, e)}px`;
      re.style.width = `${lerp(w0, w1, e)}px`;
      re.style.height = `${lerp(h0, h1, e)}px`;
      re.style.borderRadius = `${lerp(h0 / 2, 16, e)}px`;
      re.classList.toggle("is-big", e > 0.6);
      if (content.current) {
        content.current.style.opacity = String(1 - clamp(e * 1.6, 0, 1));
        content.current.style.transform = `translateY(${-e * 60}px)`;
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const lineNodes = lines.map((words, i) => (
    <Fragment key={i}>
      {words.map((w, j) =>
        w === "VIDEO" ? (
          <span key={j} ref={pill} className="sy-hero__pill" aria-hidden />
        ) : (
          <Fragment key={j}>{w}</Fragment>
        )
      )}
    </Fragment>
  ));

  return (
    <section ref={section} className={cn("sy-hero", entered && "is-in")} aria-label={t("title")}>
      <div ref={stage} className="sy-hero__stage" style={{ height: "100svh" }}>
        <div ref={content} className="sy-wrap sy-hero__content" style={{ position: "relative" }}>
          <Fade className="sy-hero__meta" delay={700}>
            <span>{t("meta")}</span>
            <span>{siteConfig.city}, {new Date().getFullYear()}</span>
            <span className="sy-hero__hint">{t("scroll")}<Icon name="arrow-down" size={16} /></span>
          </Fade>
          <Reveal as="h1" className="sy-hero__title" trigger="mount" delay={80} stagger={110} lines={lineNodes} />
          <Fade className="sy-hero__bottom" delay={500}>
            <p className="sy-hero__sub">{t("sub")}</p>
            <div className="sy-hero__ctas">
              <Button href="/iletisim" icon="arrow-right">{tc("cta.talk")}</Button>
              <Button variant="ghost" href={{ pathname: "/", hash: tc("anchors.work") }}>{tc("cta.seeWork")}</Button>
            </div>
          </Fade>
        </div>
        <div
          ref={reel}
          className="sy-hero__reel"
          data-cursor="play"
          role="button"
          tabIndex={0}
          aria-label={t("reelLabel")}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true); }
          }}
        >
          {/* TODO(video): Konsept B döngüsü (8–12 sn, ≤4 MB) gelince <video autoPlay muted loop playsInline> */}
          <VideoPlaceholder variant="sphere" />
          <span className="sy-hero__reel-tag">{t("reelTag")}</span>
        </div>
      </div>
      {open && <VideoModal onClose={() => setOpen(false)} />}
    </section>
  );
}

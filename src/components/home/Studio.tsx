"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { clamp, onScroll, reducedMotion } from "@/lib/motion";
import { useInView } from "@/hooks/useInView";
import type { Principle, Step, TeamMember } from "@/content/types";
import { Icon } from "@/components/sy/Icon";
import { Fade } from "@/components/sy/Reveal";
import { TextLink } from "@/components/sy/TextLink";

/** Words fill from fg-subtle to fg as the paragraph moves from 85% to 35% of the viewport. */
export function Manifesto({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const red = reducedMotion();
    return onScroll(() => {
      if (red) { setProgress(1); return; }
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85, end = vh * 0.35;
      setProgress(clamp((start - r.top) / (start - end + r.height * 0.5), 0, 1));
    });
  }, []);

  const on = Math.round(progress * words.length);
  return (
    <p ref={ref} className="sy-manifesto" aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className={i < on ? "is-on" : ""} aria-hidden>{w}</span>{" "}
        </Fragment>
      ))}
    </p>
  );
}

export function Principles({ items }: { items: Principle[] }) {
  return (
    <div className="sy-principles">
      {items.map((it, i) => (
        <Fade key={it.title} delay={i * 80} className="sy-principle">
          <Icon name={it.icon} size={28} />
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </Fade>
      ))}
    </div>
  );
}

export function TeamCard({ name, role, photo, linkedin }: TeamMember) {
  const t = useTranslations("Common");
  return (
    <article className="sy-member">
      <div className="sy-member__photo">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element -- grayscale hover needs the raw element
          <img src={photo} alt={name} />
        ) : (
          <>
            <div>
              <svg viewBox="0 0 100 100" aria-hidden>
                <circle cx={50} cy={38} r={18} fill="currentColor" />
                <path d="M12 100c2-24 18-38 38-38s36 14 38 38z" fill="currentColor" />
              </svg>
            </div>
            <span className="sy-member__ph">{t("teamPlaceholder")}</span>
          </>
        )}
      </div>
      <div className="sy-member__row">
        <div>
          <div className="sy-member__name">{name}</div>
          <div className="sy-member__role">{role}</div>
        </div>
        {linkedin && (
          <TextLink href={linkedin as `https://${string}`} arrow="arrow-up-right" variant="muted">LinkedIn</TextLink>
        )}
      </div>
    </article>
  );
}

export function ProcessStrip({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const on = useInView(ref, { threshold: 0.3 });
  return (
    <ol ref={ref} className={cn("sy-process", on && "is-in")}>
      {steps.map((s, i) => (
        <li key={s.title} className="sy-process__step">
          <span className="sy-process__num">0{i + 1}</span>
          <div className="sy-process__title">{s.title}<Icon name="arrow-right" size={22} /></div>
          <p className="sy-process__text">{s.text}</p>
          <div className="sy-process__time">{s.time}</div>
        </li>
      ))}
    </ol>
  );
}

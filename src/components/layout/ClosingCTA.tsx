"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { clamp, copyText, finePointer, reducedMotion } from "@/lib/motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/sy/Button";
import { Icon } from "@/components/sy/Icon";

/** Inverse closing block: giant "Konuşalım." whose letters lean toward the cursor, copyable email. */
export function ClosingCTA() {
  const t = useTranslations("Closing");
  const tc = useTranslations("Common");
  const word = t("word");
  const wordRef = useRef<HTMLHeadingElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const el = wordRef.current;
    if (!el || reducedMotion() || !finePointer()) return;
    const spans = Array.from(el.querySelectorAll("span"));
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      if (e.clientY < r.top - 120 || e.clientY > r.bottom + 120) {
        spans.forEach((s) => { s.style.transform = ""; s.style.fontVariationSettings = ""; });
        return;
      }
      spans.forEach((s) => {
        const b = s.getBoundingClientRect();
        const d = Math.abs(e.clientX - (b.left + b.width / 2)) / r.width;
        const k = clamp(1 - d * 4, 0, 1);
        s.style.transform = `translateY(${-k * 6}%)`;
        s.style.fontVariationSettings = `"wght" ${Math.round(600 + k * 250)}`;
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [word]);

  const copy = (e: MouseEvent) => {
    e.preventDefault();
    copyText(siteConfig.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <section className="sy-cta" data-theme="inverse">
      <div className="sy-wrap">
        <h2 ref={wordRef} className="sy-cta__word" aria-label={word}>
          {word.split("").map((c, i) => (
            <span key={i} aria-hidden>{c === " " ? " " : c}</span>
          ))}
        </h2>
        <div className="sy-cta__row">
          <div>
            <p className="sy-cta__text">{t("text")}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="sy-cta__mail"
              onClick={copy}
              data-cursor="view"
              data-cursor-label={tc("cursor.copy")}
            >
              {siteConfig.email}
              <Icon name={copied ? "check" : "copy"} size={28} />
              <span className={cn("sy-toast", copied && "is-on")} role="status" aria-live="polite">
                {copied && (<><Icon name="check" size={14} />{t("copied")}</>)}
              </span>
            </a>
          </div>
          <Button variant="round" magnetic href="/iletisim">{tc("cta.talk")}</Button>
        </div>
      </div>
    </section>
  );
}

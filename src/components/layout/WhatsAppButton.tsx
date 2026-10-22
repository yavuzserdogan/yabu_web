"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { onScroll } from "@/lib/motion";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/sy/Icon";

/** Appears after 700px of scroll, hides 600px before the page end (footer has its own link). */
export function WhatsAppButton() {
  const t = useTranslations("WhatsApp");
  const [show, setShow] = useState(false);

  useEffect(
    () =>
      onScroll(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setShow(y > 700 && y < max - 600);
      }),
    []
  );

  return (
    <a
      href={siteConfig.whatsapp}
      className="sy-wa"
      target="_blank"
      rel="noopener"
      aria-label={t("label")}
      aria-hidden={show ? undefined : true}
      tabIndex={show ? undefined : -1}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "none" : "translateY(16px)",
        pointerEvents: show ? "auto" : "none",
        transition: "opacity var(--dur-base) linear, transform var(--dur-base) var(--ease-out-expo), padding var(--dur-base) var(--ease-sybor)",
      }}
    >
      <span className="sy-wa__icon"><Icon name="chat" size={24} /></span>
      <span className="sy-wa__text">{t("label")}</span>
    </a>
  );
}

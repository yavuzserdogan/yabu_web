"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { finePointer } from "@/lib/motion";
import type { Service } from "@/content/types";
import { Icon } from "@/components/sy/Icon";
import { ProjectMedia } from "@/components/sy/ProjectMedia";
import { TextLink } from "@/components/sy/TextLink";

/** Big-type service rows: open on hover (desktop) / tap (touch); matching media crossfades on the right. */
export function ServiceAccordion({ items }: { items: Service[] }) {
  const t = useTranslations("Common.cta");
  const [open, setOpen] = useState(0);

  return (
    <div className="sy-svc">
      <div className="sy-svc__list">
        {items.map((s, i) => {
          const isOpen = open === i;
          return (
            <div
              key={s.slug}
              className={cn("sy-svc__item", isOpen && "is-open")}
              onPointerEnter={() => { if (finePointer()) setOpen(i); }}
            >
              <button
                type="button"
                className="sy-svc__head"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen && !finePointer() ? -1 : i)}
              >
                <span className="sy-svc__num">{s.num}</span>
                <span className="sy-svc__title">{s.title}</span>
                <Icon name="plus" size={28} className="sy-svc__plus" />
              </button>
              <div className="sy-svc__panel">
                <div>
                  <div className="sy-svc__body">
                    <p>{s.desc}</p>
                    <ul className="sy-svc__bul">{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                    <div>
                      <TextLink href={{ pathname: "/hizmetler/[slug]", params: { slug: s.slug } }} arrow variant="underline">
                        {t("details")}
                      </TextLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sy-svc__aside" aria-hidden>
        {items.map((s, i) => (
          <div key={s.slug} className={open === i ? "is-on" : ""}>
            <ProjectMedia
              project={{ tone: s.tone, kind: s.kind, slug: s.kind === "mobile" ? "food-roulette" : undefined }}
              cursor={false}
              hover={open === i}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

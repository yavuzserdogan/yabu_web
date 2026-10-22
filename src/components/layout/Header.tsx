"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { onScroll } from "@/lib/motion";
import { Link, usePathname } from "@/i18n/routing";
import { siteConfig, telHref } from "@/config/site";
import { Button } from "@/components/sy/Button";
import { Icon } from "@/components/sy/Icon";
import { Logo } from "@/components/sy/Logo";
import { Portal } from "@/components/sy/Portal";
import { TextLink } from "@/components/sy/TextLink";
import { LangSwitch } from "./LangSwitch";
import { getLenis } from "./SmoothScroll";
import { mainNav } from "./nav";

/** Sticky header: 88 → 64px after 40px, hides on scroll down past 240px, returns on scroll up. */
export function Header() {
  const t = useTranslations("Common");
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const links = mainNav({
    work: t("anchors.work"), studio: t("anchors.studio"), services: t("anchors.services"),
    faq: t("anchors.faq"), all: t("anchors.all"),
  });

  useEffect(() => {
    let last = 0;
    return onScroll(() => {
      const y = window.scrollY;
      setCompact(y > 40);
      if (y < 240) setHidden(false);
      else if (y > last + 2) setHidden(true);
      else if (y < last - 2) setHidden(false);
      last = y;
    });
  }, []);

  const isActive = (key: string) =>
    (key === "work" && pathname.startsWith("/isler")) || (key === "contact" && pathname === "/iletisim");

  return (
    <header className={cn("sy-header", compact && "is-compact", hidden && !open && "is-hidden")}>
      <div className="sy-wrap sy-header__bar">
        <Link href="/" className="sy-header__logo" aria-label={t("nav.logoHome")}>
          <Logo height={compact ? 22 : 26} />
        </Link>
        <nav className="sy-header__nav" aria-label={t("nav.mainMenu")}>
          <div className="sy-header__links">
            {links.map((l) => (
              <TextLink key={l.key} href={l.href} className={isActive(l.key) ? "is-hover" : undefined}>
                {t(`nav.${l.key}`)}
              </TextLink>
            ))}
          </div>
          <LangSwitch />
          <Button size="s" href="/iletisim" icon="arrow-right">{t("cta.talk")}</Button>
        </nav>
        <button
          type="button"
          className="sy-header__menu-btn"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="sy-menu"
        >
          {t("nav.menu")}
          <i className="sy-burger" aria-hidden />
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </header>
  );
}

type MenuProps = { open: boolean; onClose: () => void; links: ReturnType<typeof mainNav> };

function MobileMenu({ open, onClose, links }: MenuProps) {
  const t = useTranslations("Common.nav");

  const onEscape = useEffectEvent((e: KeyboardEvent) => { if (e.key === "Escape") onClose(); });

  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <Portal>
      <div
        id="sy-menu"
        className={cn("sy-menu", open && "is-open")}
        data-theme="inverse"
        role="dialog"
        aria-modal
        aria-hidden={!open}
        aria-label={t("menu")}
      >
        <div className="sy-wrap sy-menu__top">
          <Logo height={22} />
          <button type="button" className="sy-menu__close" onClick={onClose} tabIndex={open ? 0 : -1}>
            {t("close")}
            <Icon name="close" size={16} />
          </button>
        </div>
        <nav className="sy-wrap sy-menu__links" aria-label={t("mainMenu")}>
          {links.map((l, i) => (
            <Link key={l.key} href={l.href} className="sy-menu__link" onClick={onClose} tabIndex={open ? 0 : -1}>
              <span style={{ transitionDelay: `${open ? 200 + i * 80 : 0}ms` }}>{t(l.key)}</span>
              <small>0{i + 1}</small>
            </Link>
          ))}
        </nav>
        <div className="sy-wrap sy-menu__foot">
          <div className="sy-menu__contact">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={telHref(siteConfig.phone)} className="sy-muted">{siteConfig.phone}</a>
          </div>
          <div className="sy-menu__row">
            <span>
              {siteConfig.socials.map((s) => (
                <span key={s.href}><a href={s.href} target="_blank" rel="noopener">{s.label}</a> · </span>
              ))}
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
            </span>
            <LangSwitch />
          </div>
        </div>
      </div>
    </Portal>
  );
}

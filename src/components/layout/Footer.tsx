import type { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { siteConfig, telHref } from "@/config/site";
import { getServices } from "@/content/services";
import type { Locale } from "@/i18n/routing";
import { Logo } from "@/components/sy/Logo";
import { TextLink } from "@/components/sy/TextLink";
import { LangSwitch } from "./LangSwitch";
import { mainNav } from "./nav";

function Col({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="sy-footer__col">
      <h4>{title}</h4>
      <ul>{children}</ul>
    </div>
  );
}

export function Footer() {
  const t = useTranslations("Footer");
  const tc = useTranslations("Common");
  const locale = useLocale() as Locale;
  const links = mainNav({
    work: tc("anchors.work"), studio: tc("anchors.studio"), services: tc("anchors.services"),
    faq: tc("anchors.faq"), all: tc("anchors.all"),
  });

  return (
    <footer className="sy-footer" data-theme="inverse">
      <div className="sy-wrap">
        <div className="sy-footer__top">
          <p className="sy-footer__brand">{t("brand")}</p>
          <Col title={t("menu")}>
            {links.map((l) => (
              <li key={l.key}><TextLink href={l.href}>{tc(`nav.${l.key}`)}</TextLink></li>
            ))}
          </Col>
          <Col title={t("services")}>
            {getServices(locale).map((s) => (
              <li key={s.slug}>
                <TextLink href={{ pathname: "/hizmetler/[slug]", params: { slug: s.slug } }}>{s.title}</TextLink>
              </li>
            ))}
          </Col>
          <Col title={t("contact")}>
            <li><TextLink href={`mailto:${siteConfig.email}`}>{siteConfig.email}</TextLink></li>
            <li><TextLink href={telHref(siteConfig.phone)}>{siteConfig.phone}</TextLink></li>
            <li><TextLink href={telHref(siteConfig.phone2)}>{siteConfig.phone2}</TextLink></li>
            <li><TextLink href={siteConfig.whatsapp}>WhatsApp</TextLink></li>
          </Col>
          <Col title={t("follow")}>
            {siteConfig.socials.map((s) => (
              <li key={s.href}><TextLink href={s.href}>{s.label}</TextLink></li>
            ))}
            <li><LangSwitch /></li>
          </Col>
        </div>
        <div className="sy-footer__bottom">
          <span>{t("rights", { year: new Date().getFullYear() })}</span>
          {/* TODO(icerik): KVKK ve çerez politikası sayfaları hazır olunca buraya link */}
          <TextLink href="#top" variant="muted" arrow="arrow-up-right">{t("top")}</TextLink>
        </div>
        <div className="sy-footer__mark">
          <Logo fill />
        </div>
      </div>
    </footer>
  );
}

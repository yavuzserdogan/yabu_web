import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { siteConfig, telHref } from "@/config/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/sy/Reveal";
import { SectionLabel } from "@/components/sy/SectionLabel";
import { TextLink } from "@/components/sy/TextLink";
import { alternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return { title: t("title"), description: t("description"), alternates: alternates(locale, "/iletisim") };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");
  const tw = await getTranslations("WhatsApp");

  return (
    <section className="sy-wrap sy-page-head" style={{ paddingBottom: "var(--space-160)" }}>
      <SectionLabel aside={t("aside")}>{t("label")}</SectionLabel>
      <div className="sy-grid" style={{ rowGap: 64, alignItems: "start" }}>
        <div className="sy-col-5" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <Reveal as="h1" trigger="mount" className="sy-t-h1" lines={t.raw("titleLines")} />
          <p className="sy-t-bodyl sy-muted" style={{ maxWidth: 420 }}>{t("text")}</p>
          <div style={{ display: "grid", gap: 20 }}>
            <div>
              <div className="sy-t-caption sy-muted">{t("email")}</div>
              <TextLink href={`mailto:${siteConfig.email}`} variant="underline">{siteConfig.email}</TextLink>
            </div>
            <div>
              <div className="sy-t-caption sy-muted">{t("phone")}</div>
              <div><a href={telHref(siteConfig.phone)}>{siteConfig.phone}</a></div>
              <div><a href={telHref(siteConfig.phone2)}>{siteConfig.phone2}</a></div>
            </div>
            <div>
              <div className="sy-t-caption sy-muted">{t("message")}</div>
              <TextLink href={siteConfig.whatsapp} arrow="arrow-up-right">{tw("label")}</TextLink>
            </div>
          </div>
        </div>
        <div className="sy-col-from-7"><ContactForm /></div>
      </div>
    </section>
  );
}

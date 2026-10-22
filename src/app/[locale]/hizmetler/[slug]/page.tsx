import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { redirect, routing, type Locale } from "@/i18n/routing";
import { getProjects } from "@/content/projects";
import { findService, getServices, serviceSlugs } from "@/content/services";
import { assurances, steps } from "@/content/studio";
import { ProcessStrip } from "@/components/home/Studio";
import { ClosingCTA } from "@/components/layout/ClosingCTA";
import { LegacyServicePage, legacyServiceMetadata, legacyServiceSlugs } from "@/components/legacy/LegacyServicePage";
import { Accordion } from "@/components/sy/Accordion";
import { AssuranceStrip } from "@/components/sy/AssuranceStrip";
import { Button } from "@/components/sy/Button";
import { Icon } from "@/components/sy/Icon";
import { Reveal } from "@/components/sy/Reveal";
import { SectionLabel } from "@/components/sy/SectionLabel";
import { Section, Spacer } from "@/components/sy/Section";
import { VideoPlaceholder } from "@/components/sy/VideoPlaceholder";
import { ProjectCard } from "@/components/work/WorkGrid";
import { alternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => [
    ...serviceSlugs.map((s) => ({ locale, slug: s[locale] })),
    ...legacyServiceSlugs.map((slug) => ({ locale, slug })),
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const s = findService(locale, slug);
  if (!s) return legacyServiceSlugs.includes(slug) ? legacyServiceMetadata(locale, slug) : {};
  return {
    title: s.title,
    description: s.desc,
    alternates: alternates(
      locale,
      { pathname: "/hizmetler/[slug]", params: { slug: s.slug } },
      (l) => ({ pathname: "/hizmetler/[slug]", params: { slug: s.slugs[l] } })
    ),
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = findService(locale, slug);
  if (!service) {
    if (legacyServiceSlugs.includes(slug)) return <LegacyServicePage slug={slug} />;
    notFound();
  }
  // a slug from the other language (e.g. /en/services/mobil) → this language's slug
  if (service.slug !== slug) {
    redirect({ href: { pathname: "/hizmetler/[slug]", params: { slug: service.slug } }, locale });
  }

  const t = await getTranslations("ServicePage");
  const tc = await getTranslations("Common");
  const all = getServices(locale);
  const n = all.findIndex((s) => s.slug === service.slug) + 1;
  const examples = getProjects(locale).filter((p) => p.categories.includes(service.category)).slice(0, 2);

  return (
    <>
      <section className="sy-wrap sy-page-head">
        <SectionLabel num={service.num} aside={t("count", { n, total: all.length })}>{t("label")}</SectionLabel>
        <div className="sy-grid" style={{ rowGap: 32 }}>
          <Reveal as="h1" trigger="mount" className="sy-t-h1 sy-col-9" lines={service.titleLines} />
          <div className="sy-col-3" style={{ display: "grid", gap: 24 }}>
            <p className="sy-t-bodyl">{service.desc}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button magnetic href="/iletisim" icon="arrow-right">{tc("cta.quote")}</Button>
              <Button variant="ghost" href={{ pathname: "/", hash: tc("anchors.work") }}>{tc("cta.examples")}</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="sy-wrap" style={{ marginTop: "var(--space-64)" }}>
        <div style={{ aspectRatio: "16 / 7", borderRadius: 16, overflow: "hidden" }}>
          {/* TODO(video): hizmete özel video/görsel (hero-video.md, Konsept C) */}
          <VideoPlaceholder variant="waves" note={t("videoNote")} />
        </div>
      </div>

      <Section>
        <SectionLabel>{t("what")}</SectionLabel>
        <div className="sy-cols-3" style={{ marginTop: 48 }}>
          {service.items.map((w) => (
            <div key={w.title} className="sy-principle">
              <Icon name={w.icon} size={28} />
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <SectionLabel aside={service.duration}>{t("process")}</SectionLabel>
        <Spacer size={48} />
        <ProcessStrip steps={steps[locale]} />
      </Section>

      {examples.length > 0 && (
        <Section style={{ paddingTop: 0 }}>
          <SectionLabel>{t("examples")}</SectionLabel>
          <div className="sy-cols-2" style={{ marginTop: 48 }}>
            {examples.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </Section>
      )}

      <Section style={{ paddingTop: 0 }}>
        <AssuranceStrip items={assurances[locale]} />
      </Section>

      <Section style={{ background: "var(--bg-soft)" }}>
        <div className="sy-grid" style={{ rowGap: 32 }}>
          <h2 className="sy-t-h2 sy-col-4">{t("faq")}</h2>
          <div className="sy-col-8"><Accordion items={service.faq} /></div>
        </div>
      </Section>

      <ClosingCTA />
    </>
  );
}

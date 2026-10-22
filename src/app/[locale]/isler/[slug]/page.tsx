import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { caseStudySlugs, getProject, getProjects } from "@/content/projects";
import { Badge, Tag } from "@/components/sy/Badge";
import { Icon } from "@/components/sy/Icon";
import { ProjectMedia } from "@/components/sy/ProjectMedia";
import { Reveal } from "@/components/sy/Reveal";
import { SectionLabel } from "@/components/sy/SectionLabel";
import { Section, Spacer } from "@/components/sy/Section";
import { StatBox } from "@/components/sy/StatBox";
import { TextLink } from "@/components/sy/TextLink";
import { NextProject, Specs } from "@/components/work/NextProject";
import { Testimonial } from "@/components/work/Testimonial";
import { alternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => caseStudySlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getProject(locale, slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.desc,
    alternates: alternates(locale, { pathname: "/isler/[slug]", params: { slug } }),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const p = getProject(locale, slug);
  if (!p) notFound();

  const t = await getTranslations("CaseStudy");
  const tc = await getTranslations("Common");
  const studies = getProjects(locale).filter((x) => x.caseStudy);
  const i = studies.findIndex((x) => x.slug === p.slug);
  const next = studies[(i + 1) % studies.length];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      <section className="sy-wrap sy-page-head">
        <TextLink href="/isler" variant="muted"><Icon name="arrow-left" size={18} />{t("back")}</TextLink>
        <div className="sy-grid">
          <Reveal as="h1" trigger="mount" className="sy-t-h1 sy-col-8" lines={[p.name]} />
          <div className="sy-col-4" style={{ display: "grid", gap: 16 }}>
            <p className="sy-t-bodyl">{p.desc}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {p.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              <Badge status={p.status} />
            </div>
            {p.url && <div><TextLink href={p.url as `https://${string}`} arrow="arrow-up-right" variant="underline">{tc("cta.visit")}</TextLink></div>}
          </div>
        </div>
      </section>

      <div className="sy-wrap" style={{ marginTop: "var(--space-64)" }}>
        <ProjectMedia project={p} cursor={false} priority sizes="100vw" style={{ aspectRatio: "16 / 8" }} />
      </div>

      {p.specs && (
        <section className="sy-wrap" style={{ marginTop: "var(--space-64)" }}>
          <Specs
            items={[
              [t("specs.client"), p.specs.client],
              [t("specs.year"), p.year],
              [t("specs.service"), p.specs.services],
              [t("specs.platform"), p.specs.platform],
            ]}
          />
        </section>
      )}

      {(p.problem || p.solution) && (
        <Section>
          <div className="sy-grid" style={{ rowGap: 48 }}>
            <div className="sy-col-5">
              <div className="sy-t-label sy-muted" style={{ marginBottom: 16 }}>{t("problem")}</div>
              <h2 className="sy-t-h3">{p.problem}</h2>
            </div>
            <div className="sy-col-from-7">
              <div className="sy-t-label sy-muted" style={{ marginBottom: 16 }}>{t("solution")}</div>
              <h2 className="sy-t-h3">{p.solution}</h2>
              {(p.story ?? [t("story")]).map((para, k) => (
                <p key={k} className="sy-muted" style={{ marginTop: 24, maxWidth: "60ch" }}>{para}</p>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* TODO(icerik): gerçek ekran görüntüleri (masaüstü + mobil) gelince buraya ayrı görseller */}
      <section className="sy-wrap">
        <div className="sy-split-2-1">
          <ProjectMedia project={p} cursor={false} label={t("shotDesktop")} />
          <ProjectMedia project={{ tone: p.tone, kind: "mobile" }} cursor={false} label={t("shotMobile")} style={{ aspectRatio: "auto", minHeight: 280 }} />
        </div>
      </section>

      {p.stats && (
        <Section>
          <SectionLabel aside={p.placeholder ? t("resultsAside") : undefined}>{t("results")}</SectionLabel>
          <Spacer size={48} />
          <div className="sy-stats">
            {p.stats.map((s, k) => <StatBox key={k} {...s} />)}
          </div>
          {p.placeholder && <p className="sy-feature__note" style={{ marginTop: 24 }}>{tc("placeholderNote")}</p>}
        </Section>
      )}

      {p.quote && (
        <section className="sy-wrap" style={{ paddingBottom: "var(--space-96)" }}>
          <Testimonial {...p.quote} />
        </section>
      )}

      {next && next.slug !== p.slug && (
        <section className="sy-wrap">
          <NextProject project={next} label={t("next")} count={`${pad(((i + 1) % studies.length) + 1)} / ${pad(studies.length)}`} />
        </section>
      )}
    </>
  );
}

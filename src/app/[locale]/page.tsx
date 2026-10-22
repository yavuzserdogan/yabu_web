import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { getProjects, getTestimonials } from "@/content/projects";
import { getServices } from "@/content/services";
import { assurances, faq, manifesto, principles, steps, team } from "@/content/studio";
import { Hero } from "@/components/home/Hero";
import { ServiceAccordion } from "@/components/home/ServiceAccordion";
import { Manifesto, Principles, ProcessStrip, TeamCard } from "@/components/home/Studio";
import { ClosingCTA } from "@/components/layout/ClosingCTA";
import { Accordion } from "@/components/sy/Accordion";
import { AssuranceStrip } from "@/components/sy/AssuranceStrip";
import { SectionLabel } from "@/components/sy/SectionLabel";
import { Intro, Section, Spacer } from "@/components/sy/Section";
import { FeaturedWork } from "@/components/work/FeaturedWork";
import { ProjectList } from "@/components/work/ProjectList";
import { Testimonial } from "@/components/work/Testimonial";
import { alternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });
  return {
    title: { absolute: t("title") },
    description: t("description"),
    alternates: alternates(locale, { pathname: "/" }),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const tc = await getTranslations("Common");

  const projects = getProjects(locale);
  const featured = projects.filter((p) => p.featured);
  const testimonials = getTestimonials(locale);
  const services = getServices(locale);

  return (
    <>
      <Hero />

      <Section id={tc("anchors.work")}>
        <SectionLabel num="01" aside={t("work.aside")}>{t("work.label")}</SectionLabel>
        <Intro lines={t.raw("work.titleLines")} text={t("work.text")} />
        <FeaturedWork projects={featured} />
        {testimonials.length > 0 && (
          <>
            <Spacer size={128} />
            <div className="sy-quotes">
              {testimonials.map((q) => <Testimonial key={q.name} {...q} />)}
            </div>
          </>
        )}
      </Section>

      <Section id={tc("anchors.all")} style={{ paddingTop: 0 }}>
        <SectionLabel num="02" aside={tc("projectCount", { count: projects.length })}>{t("all.label")}</SectionLabel>
        <Spacer size={48} />
        <ProjectList projects={projects} />
      </Section>

      <Section id={tc("anchors.studio")}>
        <SectionLabel num="03" aside={t("studio.aside", { city: siteConfig.city })}>{t("studio.label")}</SectionLabel>
        <Spacer size={64} />
        <Manifesto text={manifesto[locale]} />
        <Spacer size={128} />
        <Principles items={principles[locale]} />
        <Spacer size={128} />
        <div className="sy-team">
          {team[locale].map((m, i) => <TeamCard key={i} {...m} />)}
        </div>
        <Spacer size={128} />
        <ProcessStrip steps={steps[locale]} />
      </Section>

      <Section id={tc("anchors.services")} style={{ paddingTop: 0 }}>
        <SectionLabel num="04" aside={t("services.aside")}>{t("services.label")}</SectionLabel>
        <Intro lines={t.raw("services.titleLines")} />
        <ServiceAccordion items={services} />
        <Spacer size={96} />
        <AssuranceStrip items={assurances[locale]} title={t("assure.title")} count={t("assure.count")} />
      </Section>

      <Section id={tc("anchors.faq")} style={{ background: "var(--bg-soft)" }}>
        <SectionLabel num="05">{t("faq.label")}</SectionLabel>
        <div className="sy-grid" style={{ marginTop: "var(--space-48)", rowGap: 32 }}>
          <h2 className="sy-t-h2 sy-col-4">{t("faq.title")}</h2>
          <div className="sy-col-8"><Accordion items={faq[locale]} /></div>
        </div>
      </Section>

      <ClosingCTA />
    </>
  );
}

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getProjects } from "@/content/projects";
import { ClosingCTA } from "@/components/layout/ClosingCTA";
import { Reveal } from "@/components/sy/Reveal";
import { SectionLabel } from "@/components/sy/SectionLabel";
import { WorkGrid } from "@/components/work/WorkGrid";
import { alternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Work" });
  return { title: t("title"), description: t("description"), alternates: alternates(locale, "/isler") };
}

export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Work");
  const tc = await getTranslations("Common");
  const projects = getProjects(locale);
  const count = String(projects.length).padStart(2, "0");

  return (
    <>
      <section className="sy-wrap sy-page-head" style={{ paddingBottom: "var(--space-64)" }}>
        <SectionLabel aside="2023 — 2026">{tc("nav.work")}</SectionLabel>
        <div className="sy-grid">
          <div className="sy-col-8" style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
            <Reveal as="h1" trigger="mount" className="sy-t-h1" lines={[t("title")]} />
            <span className="sy-t-label sy-muted sy-num" style={{ marginTop: "0.4em" }}>({count})</span>
          </div>
          <p className="sy-t-bodyl sy-muted sy-col-4">{t("text")}</p>
        </div>
      </section>
      <section className="sy-wrap" style={{ paddingBottom: "var(--space-160)" }}>
        <WorkGrid projects={projects} />
      </section>
      <ClosingCTA />
    </>
  );
}

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
          <Reveal
            as="h1"
            trigger="mount"
            className="sy-t-h1 sy-col-8"
            lines={[
              <>
                {t("title")}
                <sup className="sy-t-label sy-muted" style={{ verticalAlign: "top", marginLeft: 8 }}>({count})</sup>
              </>,
            ]}
          />
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

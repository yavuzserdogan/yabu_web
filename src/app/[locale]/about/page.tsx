import { AboutHero } from "@/components/about/AboutHero";
import { AboutProcess } from "@/components/about/AboutProcess";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutWhyUs } from "@/components/about/AboutWhyUs";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AboutPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutProcess />
      <AboutWhyUs />
    </main>
  );
}
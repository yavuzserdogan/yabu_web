import { Metadata } from "next";
import { HomeFeaturedProjects } from "@/components/home/HomeFeaturedProjects";
import HomeHero from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeSteps } from "@/components/home/HomeSteps";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

// Dinamik Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HomePage() {
  return (
    <main>
      <div className="min-h-screen">
        <HomeHero />
        <HomeServices />
        <HomeSteps />
        <HomeFeaturedProjects />
      </div>
    </main>
  );
}
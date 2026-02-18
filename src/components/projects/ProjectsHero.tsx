"use client";
import { useTranslations } from "next-intl";
import { InnerHeroLayout } from "../ui/InnerHeroLayout";

export function ProjectsHero() {
    const t = useTranslations('ProjectsPage.hero');
    return (
        <InnerHeroLayout 
            title={<>{t('titleMain')} <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">{t('titleAccent')}</span></>}
            description={t('description')}
        />
    );
}
import { Metadata } from "next";
import { HomeFeaturedProjects } from "@/components/home/HomeFeaturedProjects";
import HomeHero from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeSteps } from "@/components/home/HomeSteps";

export const metadata: Metadata = {
  title: "YaBu Digital | Yeni Nesil Yazılım Çözümleri",
  description: "Kurumsal düzeyde yazılım mühendisliği, butik tasarım ve ölçeklenebilir web/mobil çözümler sunuyoruz. Geleceği birlikte inşa edelim.",
};

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
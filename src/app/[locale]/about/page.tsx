import { AboutHero } from "@/components/about/AboutHero";
import { AboutProcess } from "@/components/about/AboutProcess";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutWhyUs } from "@/components/about/AboutWhyUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Bilgisayar mühendisliği disipliniyle butik ve ölçeklenebilir dijital çözümler üretiyoruz. Hikayemiz ve değerlerimiz hakkında bilgi edinin.",
};

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

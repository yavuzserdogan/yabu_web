import { AboutCTA } from "@/components/about/AboutCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutProcess } from "@/components/about/AboutProcess";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutWhyUs } from "@/components/about/AboutWhyUs";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutProcess />
      <AboutWhyUs />
      <AboutCTA />
    </div>
  );
}

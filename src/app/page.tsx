"use client";

import { HomeFeaturedProjects } from "@/components/home/HomeFeaturedProjects";
import HomeHero from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeSteps } from "@/components/home/HomeSteps";


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
  )
}

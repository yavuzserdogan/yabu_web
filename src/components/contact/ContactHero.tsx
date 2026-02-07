"use client";

import { InnerHeroLayout } from "../ui/InnerHeroLayout";

export function ContactHero() {
  return (
    <InnerHeroLayout 
      title={<>Hadi <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Konuşalım</span></>}
      description="Bir fikriniz mi var? Projenizi dijital dünyada büyütmek için profesyonel bir desteğe mi ihtiyacınız var? Sizi dinlemeye hazırız."
    />
  );
}
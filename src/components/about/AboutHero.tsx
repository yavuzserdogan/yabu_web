import { InnerHeroLayout } from "../ui/InnerHeroLayout";

export function AboutHero() {
  return (
    <InnerHeroLayout 
      title={<>Butik <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Dijital Stüdyo</span></>}
      description="Büyük ajansların kalitesini, küçük bir ekibin esnekliği ve samimiyetiyle birleştiriyoruz."
    >
    </InnerHeroLayout>
  );
}
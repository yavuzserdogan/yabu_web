import { InnerHeroLayout } from "../ui/InnerHeroLayout";

export function ServicesHero() {
  return (
    <InnerHeroLayout 
      title={<>Dijital <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Çözümler</span></>}
      description="İşinizi büyütmek, markanızı dijital dünyada zirveye taşımak için modern teknolojileri yaratıcı tasarımlarla harmanlıyoruz."
    />
  );
}
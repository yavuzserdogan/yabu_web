import { InnerHeroLayout } from "../ui/InnerHeroLayout";

export function ProjectsHero() {
    return (
        <InnerHeroLayout 
            title={<>Seçkin <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">İşlerimiz</span></>}
            description="Fikirleri koda, tasarımları yaşayan deneyimlere dönüştürüyoruz. Her proje, bizim için yeni bir başarı hikayesi."
        />
    );
}
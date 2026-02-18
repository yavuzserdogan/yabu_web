import { Metadata } from "next"; 
import { ContactPage } from "@/components/contact/ContactPage";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ContactPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent -z-10" />

      <ContactPage />
    </div>
  );
}
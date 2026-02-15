import { Metadata } from "next"; 
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "İletişim | Sybor Digital",
  description: "Projenizi hayata geçirmek için bizimle iletişime geçin. Ankara merkezli butik dijital çözüm ortağınız.",
};

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent -z-10" />

      <ContactPage />
    </div>
  );
}
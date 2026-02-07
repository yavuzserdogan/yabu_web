import { Mail, Phone } from "lucide-react";
import type { ContactInfoItem, FaqItem } from "@/types/contact";

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    title: "Email",
    value: "yabu@digitalstudio.com",
    link: "mailto:yabu@digitalstudio.com",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+90 555 123 45 67",
    link: "tel:+905551234567",
  }
];

export const faqs: FaqItem[] = [
  {
    q: "Proje süreci nasıl işliyor, nereden başlıyoruz?",
    a: "Her şey bir keşif toplantısıyla başlar. İhtiyaçlarınızı ve hedeflerinizi dinleriz. Ardından size özel bir yol haritası, tasarım taslakları ve teknoloji önerisi sunarız. Onayınızla birlikte tasarım ve kodlama aşamasına geçeriz.",
  },
  {
    q: "Bir web sitesi veya mobil uygulamanın tamamlanması ne kadar sürer?",
    a: "Bu tamamen projenin kapsamına bağlıdır. Kurumsal bir web sitesi ortalama 2-4 hafta sürerken, kapsamlı bir e-ticaret sitesi veya mobil uygulama projesi 6-12 hafta arasında değişebilir. Net süreyi teklif aşamasında belirtiyoruz.",
  },
  {
    q: "Hangi teknolojileri kullanıyorsunuz?",
    a: "Güncel ve performanslı teknolojileri tercih ediyoruz. Web tarafında Next.js, React ve Tailwind CSS; mobil uygulama tarafında ise hem iOS hem Android uyumlu olduğu için Flutter teknolojisini kullanıyoruz. Backend için .NET veya Node.js çözümleri sunuyoruz.",
  },
  {
    q: "Proje bittikten sonra teknik destek sağlıyor musunuz?",
    a: "Kesinlikle. Proje tesliminden sonra 30 gün boyunca ücretsiz teknik destek (bug fix) sağlıyoruz. Daha sonrası için ise işletmenizin ihtiyacına uygun aylık bakım ve destek paketlerimiz mevcuttur.",
  },
  {
    q: "Ödeme koşullarınız nasıl?",
    a: "Standart prosedürümüz %50 proje başlangıcında, %50 proje tesliminde şeklindedir. Ancak büyük kapsamlı projelerde ödemeyi belirli kilometre taşlarına (milestones) bölerek daha esnek bir plan oluşturabiliyoruz.",
  },
  {
    q: "Web sitemin SEO (Arama Motoru) uyumu olacak mı?",
    a: "Evet, geliştirdiğimiz tüm web sitelerinde temel SEO altyapısını (hız optimizasyonu, meta etiketleri, mobil uyumluluk ve sitemap) eksiksiz kuruyoruz. Siteniz Google'ın seveceği modern standartlarda kodlanır.",
  },
  {
    q: "Tasarım üzerinde revizyon hakkımız var mı?",
    a: "Evet, müşteri memnuniyeti esasımızdır. Tasarım aşamasında size sunulan demolar üzerinden 2 tur ücretsiz revizyon hakkınız bulunur. Böylece hayalinizdeki görünüme birlikte ulaşırız.",
  },
  {
    q: "Domain ve Hosting süreçleriyle siz mi ilgileniyorsunuz?",
    a: "Eğer halihazırda bir alan adınız ve sunucunuz yoksa, sizin adınıza en uygun sağlayıcıdan satın alma ve kurulum işlemlerini gerçekleştiriyoruz. Size sadece işinize odaklanmak kalıyor.",
  },
];

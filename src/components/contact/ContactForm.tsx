"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, MapPin, User, Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { contentTheme } from "@/config/content-theme";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "./contact.data";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "İsim en az 2 karakter olmalıdır")
    .max(40, "İsim ve soyisim toplam 40 karakteri geçemez"), // Ad + Soyad toplamı için
  email: z
    .string()
    .email("Geçerli bir e-posta adresi giriniz")
    .max(40, "E-posta adresi 40 karakteri geçemez"),
  phone: z
    .string()
    .regex(/^[0-9+\s()]*$/, "Geçerli bir telefon numarası giriniz")
    .min(10, "Telefon numarası en az 10 haneli olmalıdır")
    .max(14, "Telefon numarası çok uzun")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Lütfen projenizden biraz daha detaylı bahsedin")
    .max(1000, "Mesajınız çok uzun (Maksimum 1000 karakter)"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error?.message || "Bir hata oluştu");
      }

      toast.success("Mesajınız başarıyla iletildi! En kısa sürede döneceğiz.");
      form.reset();
    } catch (err) {
      toast.error("Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.");
      console.error("Gönderim hatası:", err);
    }
  }

  const t = contentTheme;

  return (
    <section className={`w-full max-w-6xl mx-auto px-4 ${t.section.padding}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-3 gap-12" // Gap değerini biraz artırdım daha ferah durması için
      >
        {/* SOL SÜTUN: İLETİŞİM BİLGİLERİ */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h2 className={`${t.typography.sectionTitle} md:text-4xl ${t.colors.text.primary} mb-3`}>
              Projenizi Hayata Geçirelim
            </h2>
            <p className={t.typography.bodyLarge}>
              Teknik detaylarla boğulmayın. Fikrinizi anlatın, biz en uygun teknolojiyle hayata geçirelim.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className={t.contactCard.base}
              >
                <div className={t.contactCard.icon}>
                  <info.icon size={20} className={t.contactCard.iconSvg} />
                </div>
                <div>
                  <p className={t.contactCard.label}>{info.title}</p>
                  <p className={t.contactCard.value}>{info.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + contactInfo.length * 0.1 }}
              className={t.contactCard.base}
            >
              <div className={t.contactCard.icon}>
                <MapPin size={20} className={t.contactCard.iconSvg} />
              </div>
              <div>
                <p className={t.contactCard.label}>Konum</p>
                <p className={t.contactCard.value}>Ankara, Türkiye</p>
              </div>
            </motion.div>
          </div>
        </div> 

        {/* SAĞ SÜTUN: FORM İÇERİĞİ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-white to-slate-50/30 rounded-3xl" />

            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-200/60 p-8 lg:p-10 shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* İsim Soyisim */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={t.form.label}>İsim Soyisim</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                              <Input placeholder="Ahmet Yılmaz" {...field} className={t.form.input} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* E-posta */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={t.form.label}>E-posta</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                              <Input
                                placeholder="ahmet@mail.com"
                                type="email"
                                {...field}
                                maxLength={40}
                                onKeyDown={(e) => e.key === " " && e.preventDefault()}
                                className={t.form.input}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Telefon */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={t.form.label}>
                          Telefon <span className="text-slate-500 font-normal text-xs">(Opsiyonel)</span>
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <Input placeholder="5XX XXX XX XX" {...field} className={t.form.input} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Mesaj */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={t.form.label}>Projeniz Hakkında</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MessageSquare size={18} className="absolute left-3 top-3 text-slate-400" />
                            <Textarea
                              placeholder="Projenizin detaylarını anlatın..."
                              className={t.form.textarea}
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-3">
                    <Button
                      type="submit"
                      className={`w-full h-12 ${t.form.button} group shadow-md hover:shadow-lg cursor-pointer`}
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <Loader2 className="animate-spin" size={18} />
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Gönder
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
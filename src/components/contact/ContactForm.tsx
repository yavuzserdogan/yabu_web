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
    .min(2, "En az 2 karakter giriniz")
    .max(50, "Çok uzun")
    .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/, "Sadece harf girebilirsiniz"),
  email: z
    .string()
    .trim()
    .min(1, "E-posta gerekli")
    .max(50, "Çok uzun")
    .refine(
      (val) =>
        /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(val),
      "Geçerli bir e-posta adresi giriniz"
    ),

  phone: z
    .string()
    .refine((val) => val === "" || /^5[0-9]{9}$/.test(val), "Telefon numarası 5 ile başlamalı ve 10 haneli olmalı")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "En az 10 karakter giriniz")
    .max(500, "En fazla 500 karakter"),
});

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 10);

  const parts = [];

  if (numbers.length > 0) parts.push(numbers.slice(0, 3));
  if (numbers.length > 3) parts.push(numbers.slice(3, 6));
  if (numbers.length > 6) parts.push(numbers.slice(6, 8));
  if (numbers.length > 8) parts.push(numbers.slice(8, 10));

  return parts.join(" ");
};


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

      toast.success("Mesajınız iletildi! En kısa sürede size dönüş yapacağız.");
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
        className="grid lg:grid-cols-3 gap-12"
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
                              <Mail
                                size={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                              />
                              <Input
                                type="email"
                                autoComplete="email"
                                spellCheck={false}
                                placeholder="ahmet@mail.com"
                                {...field}
                                maxLength={50}
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
                    render={({ field }) => {
                      const formattedValue = formatPhone(field.value || "");

                      return (
                        <FormItem>
                          <FormLabel className={t.form.label}>
                            Telefon{" "}
                            <span className="text-slate-500 font-normal text-xs">
                              (Opsiyonel)
                            </span>
                          </FormLabel>

                          <FormControl>
                            <div className="relative">
                              <Phone
                                size={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                              />

                              <Input
                                placeholder="555 555 55 55"
                                value={formattedValue}
                                maxLength={13}
                                inputMode="numeric"
                                onChange={(e) => {
                                  const raw = e.target.value.replace(/\D/g, "");

                                  // sadece 5 ile başlasın
                                  if (raw.length === 1 && raw !== "5") return;

                                  field.onChange(raw);
                                }}
                                className={t.form.input}
                              />
                            </div>
                          </FormControl>

                          <FormMessage className="text-xs" />
                        </FormItem>
                      );
                    }}
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
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
  name: z.string().min(2, "En az 2 karakter").max(50),
  email: z.string().email("Geçerli bir e-posta giriniz"),
  phone: z.string().optional(),
  message: z.string().min(10, "En az 10 karakter"),
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

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("Form Verileri:", values);
      // API çağrısı buraya gelecek
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simülasyon
      toast.success("Mesajınız iletildi!");
      form.reset();
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      toast.error("Bir hata oluştu.");
    }
  }

  const t = contentTheme;

  return (
    <section className={`w-full max-w-6xl mx-auto px-0 md:px-4 ${t.section.padding}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        {/* SOL SÜTUN */}
        <div className="lg:col-span-1 space-y-8 text-center lg:text-left">
          <div>
            <h2 className={`${t.typography.sectionTitle} text-3xl md:text-4xl ${t.colors.text.primary} mb-3`}>
              Projenizi Hayata Geçirelim
            </h2>
            <p className={t.typography.bodyLarge}>
              Teknik detaylarla boğulmayın. Fikrinizi anlatın, biz en uygun teknolojiyle hayata geçirelim.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-4 text-left">
            {contactInfo.map((info, idx) => (
              <motion.a key={idx} href={info.link} className={t.contactCard.base}>
                <div className={t.contactCard.icon}>
                  <info.icon size={20} className={t.contactCard.iconSvg} />
                </div>
                <div>
                  <p className={t.contactCard.label}>{info.title}</p>
                  <p className={t.contactCard.value}>{info.value}</p>
                </div>
              </motion.a>
            ))}
            <div className={t.contactCard.base}>
              <div className={t.contactCard.icon}><MapPin size={20} /></div>
              <div>
                <p className={t.contactCard.label}>Konum</p>
                <p className={t.contactCard.value}>Ankara, Türkiye</p>
              </div>
            </div>
          </div>
        </div>

        {/* SAĞ SÜTUN (FORM) */}
        <motion.div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-white to-slate-50/30 rounded-3xl" />
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-200/60 p-5 md:p-8 lg:p-10 shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={t.form.label}>E-posta</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                              <Input placeholder="ahmet@mail.com" {...field} className={t.form.input} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={t.form.label}>Telefon (Opsiyonel)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <Input 
                              placeholder="555 555 55 55" 
                              {...field} 
                              className={t.form.input} 
                              onChange={(e) => field.onChange(formatPhone(e.target.value))}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={t.form.label}>Projeniz Hakkında</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MessageSquare size={18} className="absolute left-3 top-3 text-slate-400" />
                            <Textarea placeholder="Detayları anlatın..." className={t.form.textarea} {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-3">
                    <Button 
                      type="submit" 
                      className={`w-full h-12 ${t.form.button} cursor-pointer`}
                      disabled={form.formState.isSubmitting}
                    >
                      {/* Hata 1: Loader2 burada loading durumunda kullanıldı */}
                      {form.formState.isSubmitting ? (
                        <Loader2 className="animate-spin" size={18} />
                      ) : (
                        <>
                          Gönder <Send size={16} className="ml-2" />
                        </>
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
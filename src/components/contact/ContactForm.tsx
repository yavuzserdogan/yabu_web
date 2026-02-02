"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, Phone } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
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

// Senior Validasyon Şeması
const formSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().min(10, "Geçerli bir numara giriniz").optional().or(z.literal("")),
  message: z.string().min(10, "Lütfen projenizden biraz daha detaylı bahsedin"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    try {
      console.log("Gönderilen Veriler:", values);
      // Resend API bağlantısı buraya gelecek
      await new Promise((r) => setTimeout(r, 1500));
      toast.success("Mesajınız ve iletişim bilgileriniz başarıyla iletildi!");
      form.reset();
    } catch (err) {
      toast.error("Bir hata oluştu, lütfen tekrar deneyin.");
      console.error("Hata:", err);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-1000"></div>
      
      <div className="relative bg-white/90 backdrop-blur-xl border border-slate-200 p-8 rounded-2xl shadow-xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              {/* AD SOYAD */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700">Ad Soyad</FormLabel>
                    <FormControl>
                      <Input placeholder="Burak Talha" {...field} className="h-11 bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* E-POSTA */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700">E-posta</FormLabel>
                    <FormControl>
                      <Input placeholder="hello@yabu.com" {...field} className="h-11 bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* TELEFON NUMARASI */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700">Telefon Numarası</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                      <Input placeholder="0555 --- -- --" {...field} className="h-11 pl-10 bg-white" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* AÇIKLAMA (MESAJ) */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700">Proje Açıklaması</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="İhtiyaçlarınızdan kısaca bahsedin..." 
                      className="min-h-32 bg-white resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full h-12 bg-slate-900 hover:bg-blue-600 text-white font-medium transition-all duration-300 group"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                <span className="flex items-center gap-2">
                  Gönder <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
}
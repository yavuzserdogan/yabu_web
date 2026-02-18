"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, MapPin, User, Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

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
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
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
  const t_ui = useTranslations('ContactPage.form');
  const theme = contentTheme;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("Form gönderiliyor:", values);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success(t_ui('success'));
      form.reset();
    } catch (error) {
      toast.error(t_ui('error'));
      console.error(error);
    }
  }

  return (
    <section className={`w-full max-w-6xl mx-auto px-0 md:px-4 ${theme.section.padding}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        <div className="lg:col-span-1 space-y-8 text-center lg:text-left">
          <div>
            <h2 className={`${theme.typography.sectionTitle} text-3xl md:text-4xl ${theme.colors.text.primary} mb-3`}>
              {t_ui('title')}
            </h2>
            <p className={theme.typography.bodyLarge}>{t_ui('subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-4 text-left">
            {contactInfo.map((info, idx) => (
              <a key={idx} href={info.link} className={theme.contactCard.base}>
                <div className={theme.contactCard.icon}>
                  <info.icon size={20} className={theme.contactCard.iconSvg} />
                </div>
                <div>
                  <p className={theme.contactCard.label}>{info.title}</p>
                  <p className={theme.contactCard.value}>{info.value}</p>
                </div>
              </a>
            ))}
            <div className={theme.contactCard.base}>
              <div className={theme.contactCard.icon}><MapPin size={20} /></div>
              <div>
                <p className={theme.contactCard.label}>{t_ui('location')}</p>
                <p className={theme.contactCard.value}>{t_ui('locationValue')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-200/60 p-5 md:p-8 lg:p-10 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className={theme.form.label}>{t_ui('labelName')}</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <Input placeholder={t_ui('placeholderName')} {...field} className={theme.form.input} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className={theme.form.label}>{t_ui('labelEmail')}</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <Input placeholder={t_ui('placeholderEmail')} {...field} className={theme.form.input} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={theme.form.label}>{t_ui('labelPhone')}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <Input
                          placeholder={t_ui('placeholderPhone')}
                          {...field}
                          className={theme.form.input}
                          onChange={(e) => field.onChange(formatPhone(e.target.value))}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={theme.form.label}>{t_ui('labelMessage')}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MessageSquare size={18} className="absolute left-3 top-3 text-slate-400" />
                        <Textarea placeholder={t_ui('placeholderMessage')} className={theme.form.textarea} {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="pt-3">
                  <Button
                    type="submit"
                    className={`w-full h-12 ${theme.form.button} cursor-pointer`}
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      <span className="flex items-center gap-2">
                        {t_ui('button')} <Send size={16} />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
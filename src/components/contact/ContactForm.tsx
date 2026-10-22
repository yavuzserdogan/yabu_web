"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/sy/Button";
import { ChipGroup } from "@/components/sy/Chip";
import { Icon } from "@/components/sy/Icon";
import { Field } from "./Field";

type Values = { name: string; email: string; phone: string; company: string; message: string };
type Key = keyof Values;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const t = useTranslations("Contact.form");
  const serviceOptions = (t.raw("serviceOptions") as string[]).map((o) => ({ value: o, label: o }));
  const budgetOptions = (t.raw("budgetOptions") as string[]).map((o) => ({ value: o, label: o }));

  const [values, setValues] = useState<Values>({ name: "", email: "", phone: "", company: "", message: "" });
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [touched, setTouched] = useState<Partial<Record<Key, boolean>>>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const validate = (k: Key, v: string) => {
    if (k === "name" && !v.trim()) return t("errorRequired");
    if (k === "email") {
      if (!v.trim()) return t("errorRequired");
      if (!EMAIL.test(v.trim())) return t("errorEmail");
    }
    return undefined;
  };
  const errorFor = (k: Key) => (touched[k] ? validate(k, values[k]) : undefined);
  const set = (k: Key) => (v: string) => setValues((s) => ({ ...s, [k]: v }));
  const blur = (k: Key) => () => setTouched((s) => ({ ...s, [k]: true }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    if (validate("name", values.name) || validate("email", values.email)) return;
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, services, budget }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div className="sy-form__ok" role="status">
        <i aria-hidden />
        {t("success")}
      </div>
    );
  }

  return (
    <form className="sy-form" onSubmit={submit} noValidate>
      <div className="sy-form__two">
        <Field label={t("name")} name="name" placeholder={t("namePh")} required autoComplete="name"
          value={values.name} onChange={set("name")} onBlur={blur("name")} error={errorFor("name")} />
        <Field label={t("email")} name="email" type="email" placeholder={t("emailPh")} required autoComplete="email"
          value={values.email} onChange={set("email")} onBlur={blur("email")} error={errorFor("email")} />
        <Field label={t("phone")} name="phone" type="tel" placeholder={t("phonePh")} optional={t("optional")} autoComplete="tel"
          value={values.phone} onChange={set("phone")} />
        <Field label={t("company")} name="company" placeholder={t("companyPh")} optional={t("optional")} autoComplete="organization"
          value={values.company} onChange={set("company")} />
      </div>
      <div className="sy-field">
        <span className="sy-field__label">{t("services")}<span>{t("servicesHint")}</span></span>
        <ChipGroup multiple label={t("services")} options={serviceOptions} value={services} onChange={setServices} />
      </div>
      <div className="sy-field">
        <span className="sy-field__label">{t("budget")}</span>
        <ChipGroup label={t("budget")} options={budgetOptions} value={budget} onChange={setBudget} />
      </div>
      <Field label={t("message")} name="message" multiline rows={3} placeholder={t("messagePh")}
        value={values.message} onChange={set("message")} />
      <div className="sy-form__foot">
        <Button type="submit" size="l" magnetic icon="arrow-right" loading={state === "sending"}>{t("submit")}</Button>
        <span className="sy-t-caption sy-muted">{t("kvkk")}</span>
      </div>
      {state === "error" && (
        <p className="sy-form__error" role="alert"><Icon name="close" size={14} />{t("errorSend")}</p>
      )}
    </form>
  );
}

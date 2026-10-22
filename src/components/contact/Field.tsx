"use client";

import { useId, type ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/sy/Icon";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  type?: string;
  placeholder?: string;
  help?: string;
  error?: string;
  optional?: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  autoComplete?: string;
};

/** Underlined input; errors use weight + an icon, never colour alone. */
export function Field({ label, name, value, onChange, onBlur, type = "text", placeholder, help, error, optional, multiline, rows = 3, required, autoComplete }: Props) {
  const id = useId();
  const msg = error || help;
  const common = {
    id,
    name,
    value,
    className: "sy-field__input",
    placeholder,
    required,
    autoComplete,
    onBlur,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": msg ? `${id}-m` : undefined,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
  };
  return (
    <div className={cn("sy-field", error && "is-error")}>
      <label className="sy-field__label" htmlFor={id}>
        {label}
        {optional && <span>{optional}</span>}
      </label>
      {multiline ? <textarea rows={rows} {...common} /> : <input type={type} {...common} />}
      {msg && (
        <div id={`${id}-m`} className="sy-field__msg">
          {error && <Icon name="close" size={14} />}
          {msg}
        </div>
      )}
    </div>
  );
}

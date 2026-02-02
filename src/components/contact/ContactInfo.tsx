"use client";

import { motion } from "framer-motion";
import { contactInfo } from "./contact.data";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactInfo.map((info, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex gap-4 p-6 bg-slate-50 rounded-xl border"
        >
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <info.icon className="text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold">{info.title}</h3>
            {info.link ? (
              <a href={info.link} className="text-slate-600 hover:text-blue-600">
                {info.value}
              </a>
            ) : (
              <p className="text-slate-600">{info.value}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

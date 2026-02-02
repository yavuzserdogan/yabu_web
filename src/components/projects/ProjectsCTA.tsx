'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ProjectsCTA() {
  return (
    <section className="py-20 bg-slate-50 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Bir Sonraki Proje Sizin mi?
      </h2>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Projenizi Başlatalım
        <ArrowRight size={20} />
      </Link>
    </section>
  );
}

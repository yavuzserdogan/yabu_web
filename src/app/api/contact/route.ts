import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const str = (v: unknown, max = 5000) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = str(body.name, 200);
    const email = str(body.email, 200);
    const phone = str(body.phone, 50);
    const company = str(body.company, 200);
    const message = str(body.message);
    const budget = str(body.budget, 100);
    const services = Array.isArray(body.services) ? body.services.map((s: unknown) => str(s, 100)).filter(Boolean) : [];

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'name and a valid email are required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({

      from: 'Sybordigital İletişim <iletisim@sybordigital.com>',

      to: 'sybordigital@gmail.com',
      subject: `Yeni Proje Talebi: ${name}${company ? ` (${company})` : ''}`,
      replyTo: email,
      text: [
        `Ad Soyad: ${name}`,
        `E-posta: ${email}`,
        `Telefon: ${phone || 'Belirtilmedi'}`,
        `Şirket: ${company || 'Belirtilmedi'}`,
        `Hizmet: ${services.length ? services.join(', ') : 'Belirtilmedi'}`,
        `Bütçe: ${budget || 'Belirtilmedi'}`,
        `Mesaj: ${message || '—'}`,
      ].join('\n'),
    });

    if (error) {
      console.error("Resend Detaylı Hata:", error);
      return NextResponse.json({
        error: error.message || JSON.stringify(error)
      }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API Catch Hatası:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

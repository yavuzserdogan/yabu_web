import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'sybordigital@gmail.com',
      subject: `Yeni Proje Talebi: ${name}`,
      replyTo: email,
      text: `Ad Soyad: ${name}\nE-posta: ${email}\nTelefon: ${phone || 'Belirtilmedi'}\nMesaj: ${message}`,
    });

    if (error) {
      console.error("Resend Hatası Detayı:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API Catch Hatası:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
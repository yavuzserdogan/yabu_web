import { Resend } from "resend";
import { NextResponse } from "next/server";
import { emailAddress } from "@/data/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, message, company } = body;

    // 🛑 Honeypot (bot koruması)
    if (company) {
      return NextResponse.json({ success: true });
    }

    // ✅ Validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Eksik alanlar mevcut" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "İletişim Formu <onboarding@resend.dev>", 
      to: [emailAddress],
      replyTo: email,
      subject: `Yeni Ön Görüşme Talebi - ${name}`,
      text: `
Yeni bir ön görüşme talebi geldi.

Ad Soyad: ${name}
Telefon: ${phone}
E-posta: ${email}

Mesaj:
${message || "Mesaj bırakılmadı"}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return NextResponse.json(
      { error: "Mail gönderilemedi" },
      { status: 500 }
    );
  }
}

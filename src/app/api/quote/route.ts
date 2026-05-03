import { NextResponse } from "next/server";

// Quote form handler — receives JSON, forwards to:
// 1. WhatsApp deep link (returned to client to open)
// 2. Optional email (uncomment SMTP block below and add env vars)
// 3. Optional Telegram bot (uncomment block below and add TELEGRAM_BOT_TOKEN/CHAT_ID)

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name = "", phone = "", area = "", service = "", message = "" } = body || {};

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing name or phone" }, { status: 400 });
    }

    const summary = [
      `New quote request from ${name}`,
      `Phone: ${phone}`,
      area ? `Area: ${area}` : "",
      service ? `Service: ${service}` : "",
      message ? `Message: ${message}` : "",
    ].filter(Boolean).join("\n");

    const wa = process.env.QUOTE_RECIPIENT_WHATSAPP || "6281808029595";
    const whatsappLink = `https://wa.me/${wa}?text=${encodeURIComponent(summary)}`;

    // ─── OPTIONAL: Telegram notification ───────────────────────────────────────
    // Add TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID to .env.local to enable.
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      try {
        await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text: summary }),
        });
      } catch (e) {
        console.error("Telegram notification failed", e);
      }
    }

    // ─── OPTIONAL: Email via SMTP / Resend / SendGrid ─────────────────────────
    // Wire up your provider here using QUOTE_RECIPIENT_EMAIL + SMTP_* env vars.
    // Example with nodemailer:
    //
    //   import nodemailer from "nodemailer";
    //   const transporter = nodemailer.createTransport({
    //     host: process.env.SMTP_HOST,
    //     port: Number(process.env.SMTP_PORT),
    //     auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    //   });
    //   await transporter.sendMail({
    //     to: process.env.QUOTE_RECIPIENT_EMAIL,
    //     from: process.env.SMTP_USER,
    //     subject: `New quote: ${name} — ${area}`,
    //     text: summary,
    //   });

    return NextResponse.json({ ok: true, whatsappLink });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}

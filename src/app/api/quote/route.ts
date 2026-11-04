import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

const FROM_EMAIL = process.env.QUOTE_FROM_EMAIL ?? "quotes@aa-flooring.ca";
const RECIPIENT_EMAIL = process.env.QUOTE_RECIPIENT_EMAIL ?? siteConfig.nap.email;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — catches bots that POST here directly, bypassing the form's own client-side check.
  if (body.company_website) {
    return NextResponse.json({ success: true });
  }

  const { name, phone, email, message, service, city, squareFootage, sourcePage } = body;

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Name, phone, email, and job details are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 }
    );
  }
  const resend = new Resend(apiKey);

  const subject = `Quote request — ${service || "General inquiry"} (${city || "—"})`;

  const rows: [string, string][] = [
    ["Service", service || "General inquiry"],
    ["City", city || "—"],
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Square footage", squareFootage || "—"],
    ["Message", message],
    ["Source page", sourcePage || "—"],
  ];

  const html = `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;">
${rows.map(([label, value]) => `  <tr><td style="padding:4px 12px;font-weight:bold;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:4px 12px;">${escapeHtml(value)}</td></tr>`).join("\n")}
</table>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    const { error } = await resend.emails.send({
      from: `A&A Flooring <${FROM_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, message: "Could not send the email." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend send failed:", err);
    return NextResponse.json({ success: false, message: "Could not send the email." }, { status: 500 });
  }
}

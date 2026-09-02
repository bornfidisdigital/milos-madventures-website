"use server";

import { site } from "@/data/site";
import { experiences } from "@/data/experiences";
import type { InquiryState } from "@/lib/inquiry";

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  if (readString(formData, "company")) {
    return {
      status: "success",
      message: "Thanks — Milo will be in touch shortly.",
    };
  }

  const name = readString(formData, "name");
  const email = readString(formData, "email");
  const whatsapp = readString(formData, "whatsapp");
  const date = readString(formData, "date");
  const guests = readString(formData, "guests");
  const experience = readString(formData, "experience");
  const notes = readString(formData, "notes");

  if (!name || !email || !whatsapp || !guests) {
    return {
      status: "error",
      message: "Please add your name, email, WhatsApp number, and guest count.",
    };
  }

  const experienceName =
    experiences.find((item) => item.slug === experience)?.name ??
    (experience === "not-sure" ? "Not sure yet" : experience || "Not specified");

  // ---------------------------------------------------------------------------
  // WEB3FORMS — one-line key swap. Do not put a real key in this file.
  // 1. Create a key at https://web3forms.com (inbox: milos.madventures@gmail.com)
  // 2. Local:  WEB3FORMS_ACCESS_KEY=paste_key_here   in .env.local
  // 3. Vercel: same env var on the project
  // WhatsApp on /plan works without this key.
  // ---------------------------------------------------------------------------
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      status: "error",
      message:
        "Email delivery is not configured on this preview yet. Please send the same details on WhatsApp, or email Milo directly.",
    };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New adventure inquiry from ${name}`,
      from_name: site.name,
      replyto: email,
      name,
      email,
      whatsapp,
      preferred_date: date || "Flexible / not set",
      guest_count: guests,
      experience: experienceName,
      notes: notes || "None",
      message: [
        `Name: ${name}`,
        `Email: ${email}`,
        `WhatsApp: ${whatsapp}`,
        `Preferred date: ${date || "Flexible / not set"}`,
        `Guest count: ${guests}`,
        `Experience: ${experienceName}`,
        `Notes: ${notes || "None"}`,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return {
      status: "error",
      message:
        "The inquiry could not be emailed just now. Please try WhatsApp — Milo answers there fastest.",
    };
  }

  return {
    status: "success",
    message:
      "Inquiry sent. This is not a booking or a payment — Milo will follow up to confirm details.",
  };
}

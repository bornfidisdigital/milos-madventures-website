"use client";

import { useActionState, useMemo, useState } from "react";
import { experienceOptions } from "@/data/experiences";
import { site, whatsappUrl } from "@/data/site";
import { submitInquiry } from "@/lib/actions";
import { initialInquiryState } from "@/lib/inquiry";

type InquiryFormProps = {
  initialExperience?: string;
};

function buildWhatsAppMessage(values: {
  name: string;
  email: string;
  whatsapp: string;
  date: string;
  guests: string;
  experienceLabel: string;
  notes: string;
}) {
  return [
    `Hi Milo — I'd like to plan an adventure with ${site.name}.`,
    `Name: ${values.name || "(not yet)"}`,
    `Email: ${values.email || "(not yet)"}`,
    `WhatsApp: ${values.whatsapp || "(not yet)"}`,
    `Preferred date: ${values.date || "flexible"}`,
    `Guests: ${values.guests || "(not yet)"}`,
    `Experience: ${values.experienceLabel}`,
    values.notes ? `Notes: ${values.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function InquiryForm({ initialExperience = "" }: InquiryFormProps) {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialInquiryState,
  );
  const [experience, setExperience] = useState(initialExperience);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");

  const experienceLabel =
    experienceOptions.find((option) => option.value === experience)?.label ??
    "Not specified";

  const waHref = useMemo(
    () =>
      whatsappUrl(
        buildWhatsAppMessage({
          name,
          email,
          whatsapp,
          date,
          guests,
          experienceLabel,
          notes,
        }),
      ),
    [name, email, whatsapp, date, guests, experienceLabel, notes],
  );

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-teal/15 bg-white px-3 py-2.5 text-ink outline-none ring-gold focus:ring-2";

  return (
    <form action={formAction} className="space-y-5">
      <p className="rounded-xl bg-sand px-4 py-3 text-sm text-muted">
        This is an inquiry form only. No payment is collected here, and sending
        it does not confirm a booking.
      </p>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input
            className={fieldClass}
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            autoComplete="name"
          />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            className={fieldClass}
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          WhatsApp number
          <input
            className={fieldClass}
            name="whatsapp"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            required
            autoComplete="tel"
            placeholder="Include country code if you are not in Jamaica"
          />
        </label>
        <label className="block text-sm font-medium">
          Preferred date
          <input
            className={fieldClass}
            type="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Guest count
          <input
            className={fieldClass}
            type="number"
            name="guests"
            min={1}
            max={40}
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            required
          />
        </label>
        <label className="block text-sm font-medium">
          Experience of interest
          <select
            className={fieldClass}
            name="experience"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
          >
            {experienceOptions.map((option) => (
              <option key={option.value || "empty"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium">
        Additional notes
        <textarea
          className={`${fieldClass} min-h-32`}
          name="notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Where you are staying, mobility notes, food preferences, celebration..."
        />
      </label>

      {state.message ? (
        <p
          role="status"
          className={`rounded-xl px-4 py-3 text-sm ${
            state.status === "success"
              ? "bg-teal/10 text-teal"
              : "bg-coral/10 text-coral"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-cream transition hover:bg-teal-mid disabled:opacity-70"
        >
          {pending ? "Sending…" : "Send inquiry by email"}
        </button>
        <a
          href={waHref}
          className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral/90"
        >
          Send via WhatsApp
        </a>
      </div>
      <p className="text-xs text-muted">
        WhatsApp opens a pre-filled message to {site.whatsappDisplay} and works
        without any API key. Email delivery needs{" "}
        <code>WEB3FORMS_ACCESS_KEY</code> in <code>.env.local</code> (or Vercel
        env) — see <code>.env.example</code>.
      </p>
    </form>
  );
}

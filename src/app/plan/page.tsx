import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Plan Your Adventure",
  description:
    "Inquire about a day with Milo's Madventures — dates, guest count, and the experience you have in mind. No online payment.",
};

type PlanPageProps = {
  searchParams: Promise<{ experience?: string }>;
};

export default async function PlanPage({ searchParams }: PlanPageProps) {
  const params = await searchParams;

  return (
    <main id="main">
      <PageHero
        eyebrow="Inquiries only"
        title="Tell Milo what kind of day you want."
        intro="Share a name, a way to reach you, a preferred date, and how many people are coming. Milo will follow up. Nothing on this page charges a card or confirms a booking."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_20rem]">
        <div className="rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(15,61,58,0.08)] sm:p-8">
          <InquiryForm initialExperience={params.experience ?? ""} />
        </div>
        <aside className="h-fit rounded-3xl bg-teal p-6 text-cream">
          <h2 className="font-display text-2xl">Reach Milo directly</h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            WhatsApp is usually fastest.
          </p>
          <p className="mt-6 text-sm">
            WhatsApp
            <br />
            <a className="font-semibold text-gold" href={`https://wa.me/${site.whatsappE164}`}>
              {site.whatsappDisplay}
            </a>
          </p>
          <p className="mt-4 text-sm">
            Email
            <br />
            <a className="font-semibold text-gold" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </aside>
      </section>
    </main>
  );
}

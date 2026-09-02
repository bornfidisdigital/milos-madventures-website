import type { Metadata } from "next";
import Link from "next/link";
import { CoverPhoto } from "@/components/CoverPhoto";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Milo's Madventures is a Jamaica-based tour and adventure outfit built around authentic, local, island-rooted days.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="The story"
        title="Local host. Real Jamaica. No laminated itinerary."
        intro="Milo's Madventures exists so visitors can spend a day the way people who live here actually spend one — on the river, around a fire, in community, eating what was cooked nearby."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <CoverPhoto
          src="/images/milos/riverside-cooking.png"
          alt="Cooking over charcoal on a Jamaica riverbank"
          className="min-h-[420px] rounded-3xl"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            This is not a fleet, a call center, or a north-coast conveyor belt.
            It is a Jamaica-rooted host business: one person (and the local
            network around him) taking guests into places that still feel like
            Jamaica.
          </p>
          <p>
            Days tend to hold some mix of river time, cooking, hidden spots, and
            unhurried eating. What they do not hold is a script that is the same
            for every group that got off the same shuttle.
          </p>
          <p>
            The distinction is simple. You are not buying a product named after
            an attraction. You are asking someone who lives here to show you a
            day.
          </p>
          <p className="rounded-xl bg-sand px-4 py-3 text-sm text-ink">
            Draft copy — pending Milo&apos;s story, in his words. Please replace
            this section with a first-person or approved biography before the
            site is considered final.
          </p>
        </div>
      </section>

      <section className="bg-sand px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Authentic",
              body: "Food, rivers, and stops that belong to everyday Jamaica — not a staged version of it.",
            },
            {
              title: "Local",
              body: "Hosted by someone from here, with a network of cooks, drivers, and small operators nearby.",
            },
            {
              title: "Jamaica-rooted",
              body: "The island is the point. The day is built around it, not around a resort schedule.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-6">
              <h2 className="font-display text-2xl text-teal">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-6">
        <p className="font-display text-3xl text-teal">Want to spend a day this way?</p>
        <Link
          href="/plan"
          className="mt-6 inline-flex rounded-full bg-teal px-6 py-3 text-sm font-semibold text-cream"
        >
          Plan your adventure
        </Link>
      </section>
    </main>
  );
}

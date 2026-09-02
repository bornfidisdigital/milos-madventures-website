import type { Metadata } from "next";
import { ExperienceCard } from "@/components/ExperienceCard";
import { PageHero } from "@/components/PageHero";
import { experienceTiers, experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Six Jamaica-rooted experience types — signature adventures, culture and nature collections, and custom private days.",
};

export default function ExperiencesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="How the days are organized"
        title="Six ways to spend a day with Milo."
        intro="The same six experience types, presented in a clearer order: signature adventures first, then themed collections, then custom and community days. Pricing is not listed as a package rate — each day is quoted with Milo."
      />

      {experienceTiers.map((tier) => {
        const items = experiences.filter((item) => item.tier === tier.id);
        return (
          <section
            key={tier.id}
            className={`px-4 py-16 sm:px-6 sm:py-20 ${
              tier.id === "collections" ? "bg-sand" : ""
            }`}
          >
            <div className="mx-auto max-w-6xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
                {tier.eyebrow}
              </p>
              <h2 className="font-display mt-3 text-3xl text-teal sm:text-4xl">
                {tier.title}
              </h2>
              <p className="mt-4 max-w-2xl text-muted">{tier.intro}</p>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {items.map((experience) => (
                  <ExperienceCard
                    key={experience.slug}
                    experience={experience}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-teal/10 px-4 py-12 sm:px-6">
        <p className="mx-auto max-w-6xl text-sm text-muted">
          Price labels currently read &quot;Custom quote.&quot; Starting-from
          amounts are placeholders until Milo confirms real numbers. No
          commercial terms were changed for this site.
        </p>
      </section>
    </main>
  );
}

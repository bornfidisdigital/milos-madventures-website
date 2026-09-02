import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "An introduction for villas, hotels, Airbnb hosts, drivers, and tour operators interested in working with Milo's Madventures.",
};

const audiences = [
  {
    title: "Villas & Airbnb hosts",
    body: "Give your guests a day that feels like Jamaica — river, food, and a local host — without you having to run the outing yourself.",
  },
  {
    title: "Hotels",
    body: "A locally led option for guests who want something more personal than a standard tour desk booking.",
  },
  {
    title: "Drivers",
    body: "If you already move visitors around the island, Milo can be the experience they spend the day with.",
  },
  {
    title: "Tour operators",
    body: "A Jamaica-rooted partner for groups who want river time, cooking, and community stops rather than a checklist circuit.",
  },
];

export default function PartnerPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Work with Milo"
        title="An introduction — not a contract."
        intro="If you host guests, drive them, or already run tours in Jamaica, this page is a first conversation. It is a marketing introduction only. Nothing here is a partnership agreement, rate sheet, or binding offer."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
          <p>
            {site.name} is looking to be the local day that villa guests, hotel
            visitors, and independent travelers actually remember. The work is
            simple: you have the guests; Milo has the river, the fire, the food,
            and the places off the usual map.
          </p>
          <p>
            There is no online booking engine and no commission structure
            published here. If the fit feels right, start with a WhatsApp or an
            inquiry and talk it through.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-teal/10 bg-white p-6"
            >
              <h2 className="font-display text-2xl text-teal">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <aside className="mt-12 rounded-2xl bg-sand px-5 py-5 text-sm leading-relaxed text-ink">
          <p className="font-semibold text-teal">Please note</p>
          <p className="mt-2 text-muted">
            This page does not create a partnership, agency relationship, or
            any obligation on either side. Commercial terms — if you later
            decide to work together — would be discussed separately and in
            writing.
          </p>
        </aside>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/plan"
            className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-cream"
          >
            Send an introduction
          </Link>
          <a
            href={whatsappUrl(
              "Hi Milo — I host / drive / operate in Jamaica and would like to talk about working together. This is not a booking request.",
            )}
            className="inline-flex items-center justify-center rounded-full border border-teal/20 px-6 py-3 text-sm font-semibold text-teal"
          >
            WhatsApp {site.whatsappDisplay}
          </a>
        </div>
      </section>
    </main>
  );
}

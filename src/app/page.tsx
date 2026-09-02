import Link from "next/link";
import { CoverPhoto } from "@/components/CoverPhoto";
import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";
import { galleryItems } from "@/data/gallery";
import { site, whatsappUrl } from "@/data/site";

const previewPhotos = galleryItems.slice(0, 3);

export default function HomePage() {
  return (
    <main id="main">
      <section className="relative min-h-[88vh] overflow-hidden bg-teal text-cream">
        <div className="pointer-events-none absolute inset-0">
          <CoverPhoto
            src="/images/milos/bamboo-raft.png"
            alt="Family and guide on a bamboo raft in a Jamaica river"
            className="h-full w-full"
            sizes="100vw"
            priority
            objectClassName="object-cover object-[center_78%]"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-teal/85 via-teal/50 to-teal/20" />
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 py-20 sm:px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
            Jamaica-rooted · Locally led
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-7xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl">
            {site.tagline} River days, hidden gems, and private adventures hosted
            by someone who lives here — not a script from a resort desk.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/experiences"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-teal transition hover:bg-gold-soft"
            >
              See experiences
            </Link>
            <Link
              href="/plan"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10"
            >
              Plan your adventure
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
            Welcome
          </p>
          <h2 className="font-display mt-3 text-4xl text-teal">
            Days that feel like Jamaica, not a tour product.
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-muted">
          <p>
            Milo&apos;s Madventures is a Jamaica-based outfit for travelers who
            want the island as locals move through it: rivers, fire cooking,
            quiet corners, and food that comes from nearby kitchens — not a
            laminated menu of attractions.
          </p>
          <p>
            Tell Milo who is coming, what kind of day you want, and where you
            are staying. He will shape the rest. Copy on this page is draft
            until Milo reviews it.
          </p>
          <Link href="/about" className="inline-flex font-semibold text-teal">
            Read Milo&apos;s story →
          </Link>
        </div>
      </section>

      <section className="bg-sand px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
                All six types
              </p>
              <h2 className="font-display mt-3 text-4xl text-teal">
                Ways to spend a day with Milo
              </h2>
            </div>
            <Link href="/experiences" className="font-semibold text-teal">
              Full experiences page →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.slug} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl text-teal">From the river and the fire</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Days on the water, cooking on the rocks, and the plate that follows.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {previewPhotos.map((photo) => (
              <CoverPhoto
                key={photo.slug}
                src={photo.src}
                alt={photo.alt}
                caption={photo.title}
                className="aspect-[4/5] rounded-2xl"
              />
            ))}
          </div>
          <Link
            href="/gallery"
            className="mt-8 inline-flex font-semibold text-teal"
          >
            Open the gallery →
          </Link>
        </div>
      </section>

      <section className="bg-teal px-4 py-16 text-cream sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-4xl">Ready when you are.</h2>
            <p className="mt-3 max-w-xl text-cream/80">
              Send a few details — dates, guest count, and the kind of day you
              want. Milo will follow up on WhatsApp or email. No payment on this
              site.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/plan"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-teal"
            >
              Plan your adventure
            </Link>
            <a
              href={whatsappUrl("Hi Milo — I'd like to plan an adventure.")}
              className="inline-flex items-center justify-center rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold"
            >
              WhatsApp {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

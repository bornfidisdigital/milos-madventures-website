import Link from "next/link";
import type { Experience } from "@/data/experiences";
import { CoverPhoto } from "@/components/CoverPhoto";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(15,61,58,0.08)]">
      <CoverPhoto
        src={experience.image}
        alt={experience.imageAlt}
        className="aspect-[16/10]"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-2xl text-teal">{experience.name}</h3>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {experience.summary}
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-ink">
          {experience.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm font-semibold text-teal">
          {experience.priceLabel}
          <span className="ml-2 text-xs font-normal uppercase tracking-wider text-muted">
            Price to confirm with Milo
          </span>
        </p>
        <Link
          href={`/plan?experience=${experience.slug}`}
          className="mt-5 inline-flex w-fit rounded-full bg-teal px-4 py-2 text-sm font-semibold text-cream transition hover:bg-teal-mid"
        >
          Inquire about this day
        </Link>
      </div>
    </article>
  );
}

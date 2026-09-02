import type { Metadata } from "next";
import { CoverPhoto } from "@/components/CoverPhoto";
import { PageHero } from "@/components/PageHero";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A photo showcase for Milo's Madventures — river days, rafting, and the food that comes with them.",
};

export default function GalleryPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Photos"
        title="River, fire, and the plate."
        intro="Real days with Milo — bamboo rafting, riverside cooking, and the food that comes with them."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <CoverPhoto
              key={item.slug}
              src={item.src}
              alt={item.alt}
              caption={item.title}
              className={`rounded-2xl ${index === 0 ? "sm:col-span-2 lg:col-span-2 min-h-[420px]" : "min-h-[320px]"}`}
              sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

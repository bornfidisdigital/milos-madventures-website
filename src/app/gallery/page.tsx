import type { Metadata } from "next";
import { CoverPhoto } from "@/components/CoverPhoto";
import { CoverVideo } from "@/components/CoverVideo";
import { PageHero } from "@/components/PageHero";
import { galleryItems, galleryVideos } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and video from Milo's Madventures — river days, rafting, and the food that comes with them.",
};

export default function GalleryPage() {
  const hasVideos = galleryVideos.length > 0;

  return (
    <main id="main">
      <PageHero
        eyebrow={hasVideos ? "Photos & video" : "Photos"}
        title="River, fire, and the plate."
        intro={
          hasVideos
            ? "Real days with Milo — bamboo rafting, riverside cooking, and clips from the water."
            : "Real days with Milo — bamboo rafting, riverside cooking, and the food that comes with them."
        }
      />

      {hasVideos ? (
        <section id="videos" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
            Video
          </p>
          <h2 className="font-display mt-3 text-3xl text-teal sm:text-4xl">
            Days in motion
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Short clips from the river and the table. Tap play — sound is on
            the native controls.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {galleryVideos.map((video) => (
              <CoverVideo
                key={video.slug}
                title={video.title}
                alt={video.alt}
                src={video.src}
                embedUrl={video.embedUrl}
                poster={video.poster}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {hasVideos ? (
          <>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Photos
            </p>
            <h2 className="font-display mt-3 mb-10 text-3xl text-teal sm:text-4xl">
              Still frames
            </h2>
          </>
        ) : null}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <CoverPhoto
              key={item.slug}
              src={item.src}
              alt={item.alt}
              caption={item.title}
              className={`rounded-2xl ${index === 0 ? "sm:col-span-2 lg:col-span-2 min-h-[420px]" : "min-h-[320px]"}`}
              sizes={
                index === 0
                  ? "(min-width: 1024px) 66vw, 100vw"
                  : "(min-width: 1024px) 33vw, 50vw"
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}

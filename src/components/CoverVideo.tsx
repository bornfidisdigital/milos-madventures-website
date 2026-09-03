import { toEmbedUrl } from "@/lib/video";

type CoverVideoProps = {
  title: string;
  alt: string;
  src?: string;
  embedUrl?: string;
  poster?: string;
  className?: string;
};

export function CoverVideo({
  title,
  alt,
  src,
  embedUrl,
  poster,
  className = "",
}: CoverVideoProps) {
  const safeEmbed = embedUrl ? toEmbedUrl(embedUrl) : null;

  return (
    <figure
      className={`overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(15,61,58,0.08)] ${className}`}
    >
      <div className="relative aspect-video bg-teal">
        {safeEmbed ? (
          <iframe
            src={safeEmbed}
            title={alt}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : src ? (
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="none"
            poster={poster}
            aria-label={alt}
          >
            <source src={src} type="video/mp4" />
            Your browser cannot play this video.
          </video>
        ) : (
          <p className="absolute inset-0 flex items-center justify-center px-4 text-sm text-cream/80">
            Video is not available.
          </p>
        )}
      </div>
      <figcaption className="px-4 py-3 text-sm text-ink">
        <span className="mr-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">
          Video
        </span>
        {title}
      </figcaption>
    </figure>
  );
}

import Image from "next/image";

type CoverPhotoProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Tailwind object-position, e.g. object-top — portraits crop better from the top. */
  objectClassName?: string;
};

export function CoverPhoto({
  src,
  alt,
  caption,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  objectClassName = "object-cover object-center",
}: CoverPhotoProps) {
  return (
    <figure className={`relative overflow-hidden bg-teal ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={objectClassName}
      />
      {caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink/80 to-transparent px-4 pb-4 pt-10 text-sm text-cream">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

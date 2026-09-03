export type GalleryItem = {
  slug: string;
  title: string;
  src: string;
  alt: string;
};

export type GalleryVideo = {
  slug: string;
  title: string;
  alt: string;
  /** Self-hosted file, e.g. `/videos/milos/river-day.mp4`. Keep clips small. */
  src?: string;
  /** Still frame from Milo's photos while the file loads. */
  poster?: string;
  /** YouTube or Vimeo watch/share URL — converted to a privacy embed. */
  embedUrl?: string;
};

/**
 * Add clips here after dropping an `.mp4` in `public/videos/milos/`
 * or pasting a YouTube/Vimeo link. The Gallery Videos section
 * and the Home feature only render when this list is not empty.
 */
export const galleryVideos: GalleryVideo[] = [
  {
    slug: "riverside-cooking-fire",
    title: "The pot on the river fire",
    alt: "A pot cooking over an open fire on a Jamaica riverbank",
    src: "/videos/milos/riverside-cooking-fire.mp4",
    poster: "/images/milos/riverside-cooking.png",
  },
  {
    slug: "riverside-fire-setup",
    title: "Building the fire",
    alt: "Charcoal and stones set for riverside cooking",
    src: "/videos/milos/riverside-fire-setup.mp4",
    poster: "/images/milos/riverside-cooking.png",
  },
  {
    slug: "riverside-cooking-prep",
    title: "Prep on the rocks",
    alt: "Chopped vegetables prepared for a riverside meal",
    src: "/videos/milos/riverside-cooking-prep.mp4",
    poster: "/images/milos/riverside-cooking.png",
  },
  {
    slug: "lobster-pot",
    title: "Lobster in the pot",
    alt: "Stirring lobster cooking in a pot over the fire",
    src: "/videos/milos/lobster-pot.mp4",
    poster: "/images/milos/seasoned-lobster.png",
  },
  {
    slug: "riverside-cooking-plating",
    title: "Plating on the bank",
    alt: "Serving a riverside meal on the rocks",
    src: "/videos/milos/riverside-cooking-plating.mp4",
    poster: "/images/milos/lobster-rice-plate.png",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    slug: "riverside-cooking",
    title: "Riverside cooking over open fire",
    src: "/images/milos/riverside-cooking.png",
    alt: "Cooking a pot over charcoal on a Jamaican riverbank",
  },
  {
    slug: "bamboo-raft",
    title: "Bamboo raft with family and guide",
    src: "/images/milos/bamboo-raft.png",
    alt: "Family and guide on a bamboo raft in a Jamaica river",
  },
  {
    slug: "river-family",
    title: "A family day in the river",
    src: "/images/milos/river-family.png",
    alt: "Family sitting together in a clear Jamaica river",
  },
  {
    slug: "night-table",
    title: "A night at the table",
    src: "/images/milos/night-table.png",
    alt: "Friends sharing a meal and drinks at a local Jamaica spot",
  },
  {
    slug: "lobster-rice-plate",
    title: "Lobster with rice and vegetables",
    src: "/images/milos/lobster-rice-plate.png",
    alt: "Plate of curry lobster, rice, vegetables, and bammy by the river",
  },
  {
    slug: "grilled-lobster",
    title: "Fresh-caught lobster, cooked on the river",
    src: "/images/milos/grilled-lobster.png",
    alt: "Whole grilled Caribbean lobsters on a cutting board on the rocks",
  },
  {
    slug: "lobster-plantain-box",
    title: "Lobster, plantain, and escovitch",
    src: "/images/milos/lobster-plantain-box.png",
    alt: "Takeout box of lobster, fried plantain, and pickled vegetables",
  },
  {
    slug: "fish-takeout",
    title: "Fish and rice, packed for the group",
    src: "/images/milos/fish-takeout.png",
    alt: "Styrofoam boxes of fish, rice, and vegetables prepared for guests",
  },
  {
    slug: "river-float",
    title: "Floating in the river",
    src: "/images/milos/river-float.png",
    alt: "Guest floating on her back in a clear Jamaica river",
  },
  {
    slug: "seasoned-lobster",
    title: "Seasoned lobster, ready for the fire",
    src: "/images/milos/seasoned-lobster.png",
    alt: "Split seasoned spiny lobsters in a tray before cooking",
  },
  {
    slug: "river-swim",
    title: "A hidden swimming hole",
    src: "/images/milos/river-swim.png",
    alt: "Guest standing in turquoise river water with jungle behind",
  },
];

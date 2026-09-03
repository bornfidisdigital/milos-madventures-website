export type PriceStatus = "placeholder";

export type Experience = {
  slug: string;
  name: string;
  tier: "signature" | "collections" | "custom";
  summary: string;
  details: string[];
  /** Displayed price language — not a confirmed commercial term. */
  priceLabel: string;
  priceStatus: PriceStatus;
  /** Real photo from Milo. */
  image: string;
  imageAlt: string;
  /** Tailwind object-position when the default center crop misses the subject. */
  imageObjectClassName?: string;
};

export const experienceTiers = [
  {
    id: "signature" as const,
    eyebrow: "Signature adventures",
    title: "The days people remember",
    intro:
      "Named experiences built around how Milo actually hosts — local rhythm, river time, and food cooked where you are standing.",
  },
  {
    id: "collections" as const,
    eyebrow: "Experience collections",
    title: "Culture, nature, and the in-between",
    intro:
      "Choose a theme and Milo shapes the day. These are collections, not rigid packages — the island, your pace.",
  },
  {
    id: "custom" as const,
    eyebrow: "Custom & community",
    title: "Private days and local connections",
    intro:
      "For families, villa groups, and travelers who want something built around them — or who want to meet the people behind the food.",
  },
];

export const experiences: Experience[] = [
  {
    slug: "jamaica-like-a-local",
    name: "Jamaica Like a Local",
    tier: "signature",
    summary:
      "A full day in the rhythm of real Jamaica — riverside cooking, swimming holes the buses skip, and the kind of welcome you only get when someone from the community is showing you around.",
    details: [
      "River time and local swimming spots",
      "Open-fire cooking and a shared meal",
      "Stops that follow the day, not a script",
    ],
    priceLabel: "Custom quote",
    priceStatus: "placeholder",
    image: "/images/milos/riverside-cooking.png",
    imageAlt: "Cooking over charcoal on a Jamaica riverbank",
  },
  {
    slug: "hidden-gems-adventure",
    name: "Hidden Gems Adventure",
    tier: "signature",
    summary:
      "Off-map places: quiet rivers, local lookouts, and food that never makes the guidebook. Built for travelers who want more than the standard north-coast circuit.",
    details: [
      "Places you will not find on a postcard rack",
      "Flexible routing based on weather and the group",
      "Time to eat, swim, and linger",
    ],
    priceLabel: "Custom quote",
    priceStatus: "placeholder",
    image: "/images/milos/bamboo-raft.png",
    imageAlt: "Bamboo raft with family and a guide on a Jamaica river",
  },
  {
    slug: "cultural-local",
    name: "Cultural & Local Experiences",
    tier: "collections",
    summary:
      "Stories, flavors, and traditions — from kitchen-side cooking to community stops that connect you with how Jamaicans actually live and celebrate.",
    details: [
      "Food, music, and everyday culture",
      "Time with people, not just places",
      "A slower, more personal day",
    ],
    priceLabel: "Custom quote",
    priceStatus: "placeholder",
    image: "/images/milos/lobster-rice-plate.png",
    imageAlt: "Curry lobster with rice, vegetables, and bammy",
  },
  {
    slug: "nature-adventure",
    name: "Nature & Adventure Experiences",
    tier: "collections",
    summary:
      "Rivers, hills, and rainforest time. Rafting, swimming, hiking, and the outdoor Jamaica that sits just beyond the resort fence.",
    details: [
      "River floating, swimming, and rainforest paths",
      "Bamboo rafting when conditions are right",
      "Outdoor days paced for the group in front of you",
    ],
    priceLabel: "Custom quote",
    priceStatus: "placeholder",
    image: "/images/milos/river-float.png",
    imageAlt: "Guest floating in a clear Jamaica river",
  },
  {
    slug: "customized-private-tours",
    name: "Customized Private Tours",
    tier: "custom",
    summary:
      "Your dates, your pace, your people. Tell Milo what you want to see and eat, and he will shape a private day around it.",
    details: [
      "Built around your group — family, friends, or villa guests",
      "Mix river, food, culture, and hidden stops",
      "One conversation to plan it; no rigid itinerary to buy",
    ],
    priceLabel: "Custom quote",
    priceStatus: "placeholder",
    image: "/images/milos/river-family.png",
    imageAlt: "A family cooling off together in a Jamaica river",
    imageObjectClassName: "object-cover object-[center_10%]",
  },
  {
    slug: "local-business-community",
    name: "Local Business & Community Experiences",
    tier: "custom",
    summary:
      "Visit and support the small farms, kitchens, and makers in Milo's network — travel that puts money into the community you are visiting.",
    details: [
      "Meet local cooks, growers, and small operators",
      "Eat what is actually being made that day",
      "A good fit for guests who want more than a tour",
    ],
    priceLabel: "Custom quote",
    priceStatus: "placeholder",
    image: "/images/milos/fish-takeout.png",
    imageAlt: "Fish, rice, and vegetables packed for a group",
  },
];

export const experienceOptions = [
  { value: "", label: "Select an experience" },
  ...experiences.map((item) => ({ value: item.slug, label: item.name })),
  { value: "not-sure", label: "Not sure yet — help us choose" },
] as const;

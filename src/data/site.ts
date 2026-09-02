export const site = {
  name: "Milo's Madventures",
  tagline: "Jamaica, the way locals live it.",
  shortDescription:
    "Authentic river days, hidden gems, and private tours rooted in real Jamaican community.",
  email: "milos.madventures@gmail.com",
  whatsappDisplay: "(876) 581-9359",
  whatsappE164: "18765819359",
  location: "Jamaica",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/plan", label: "Plan Your Adventure" },
] as const;

export function whatsappUrl(prefill?: string) {
  const base = `https://wa.me/${site.whatsappE164}`;
  if (!prefill) return base;
  return `${base}?text=${encodeURIComponent(prefill)}`;
}

export function mailtoUrl(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${site.email}?${params.toString()}`;
}

import Link from "next/link";
import { nav, site, whatsappUrl } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-teal text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {site.location}
          </p>
          <p className="font-display mt-2 text-3xl">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/80">
            {site.shortDescription}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Talk to Milo
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-gold" href={whatsappUrl()}>
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-cream/70">
            Inquiries only — no online payments and no bookings are completed on
            this site.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-cream/60 sm:px-6">
        {site.name}. A Digital Growth Pilot site, built to be handed off and
        run independently.
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, whatsappUrl } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-teal text-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-gold focus:px-3 focus:py-2 focus:text-teal"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="leading-tight" onClick={() => setOpen(false)}>
          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
            Jamaica
          </span>
          <span className="font-display text-xl tracking-tight sm:text-2xl">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition hover:text-gold ${
                  active ? "text-gold" : "text-cream/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl("Hi Milo — I'd like to plan an adventure.")}
            className="hidden rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white transition hover:bg-coral/90 sm:inline-flex"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cream/20 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5 bg-cream" />
              <span className="block h-0.5 w-5 bg-cream" />
              <span className="block h-0.5 w-5 bg-cream" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-4 py-4 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 text-base text-cream"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl("Hi Milo — I'd like to plan an adventure.")}
                className="mt-2 inline-flex rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white"
              >
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

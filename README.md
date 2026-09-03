# Milo's Madventures — marketing site

Standalone inquiry website for Milo's Madventures, a Jamaica-based tour and adventure host. Built as Digital Growth Pilot 01. No accounts, no payments, no database.

## Local preview

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Email inquiries (optional)

The Plan Your Adventure form always works via WhatsApp.

To also email inquiries to `milos.madventures@gmail.com`:

1. Create a free key at [web3forms.com](https://web3forms.com) using that inbox.
2. Copy `.env.example` to `.env.local`.
3. Set `WEB3FORMS_ACCESS_KEY`.
4. Restart `npm run dev`.

Do not commit `.env.local`.

## Live URL

Canonical production site (BDS / `bornfidisdigital` on Vercel):

https://milos-madventures-website-seven.vercel.app

`https://milos-madventures-website.vercel.app` is an older leftover project under a different Vercel team. It does not have the videos. Do not use it.

Do not point this at a custom domain until Milo has one connected.

Optional env: `WEB3FORMS_ACCESS_KEY`, `NEXT_PUBLIC_SITE_URL` = `https://milos-madventures-website-seven.vercel.app`.

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/experiences` | Six experience types, in three tiers |
| `/about` | Story / positioning |
| `/gallery` | Photos and riverside cooking clips |
| `/partner` | Partner introduction (not a contract) |
| `/plan` | Inquiry form |

## Videos

1. Drop a short `.mp4` in `public/videos/milos/` **or** paste a YouTube/Vimeo URL.
2. Add an object to `galleryVideos` in `src/data/gallery.ts`.
3. Gallery shows a Videos block; Home features the first clip.

Keep self-hosted files small when you can. `riverside-cooking-fire.mp4` is the large clip (~29 MB). Longer videos work better as a YouTube or Vimeo link (`embedUrl`).

## Placeholder content still needed from Milo

- Confirmed starting-from prices (currently "Custom quote")
- Approved About copy in Milo's voice
- Experience descriptions if he wants different wording

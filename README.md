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

## Vercel preview URL

Do not point this at a custom domain until Milo has one connected.

1. Push this project to its own GitHub repository (not a Bornfidis org), when you are ready.
2. Import that repo in Vercel as a new project.
3. Framework preset: Next.js. Build command: `npm run build`. Output: default.
4. Optional env: `WEB3FORMS_ACCESS_KEY`, `NEXT_PUBLIC_SITE_URL` = the `*.vercel.app` URL Vercel assigns.
5. Use the Vercel preview/production `*.vercel.app` URL until a domain is confirmed.

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/experiences` | Six experience types, in three tiers |
| `/about` | Story / positioning |
| `/gallery` | Photo slots for Milo's images |
| `/partner` | Partner introduction (not a contract) |
| `/plan` | Inquiry form |

## Placeholder content still needed from Milo

- Confirmed starting-from prices (currently "Custom quote")
- Final photos listed in `src/data/gallery.ts`
- Approved About copy in Milo's voice
- Experience descriptions if he wants different wording

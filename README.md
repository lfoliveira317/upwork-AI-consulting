# Apex AI — Company Website

A minimalist, professional website for an AI consulting and development company. Built with **Next.js 15**, **Tailwind CSS 4**, and **TypeScript**.

## Structure

```
app/
├── components/       # Shared UI components (Navbar, Footer, UI primitives)
├── data/
│   └── siteData.ts   # ← All site content lives here. Edit this file to update anything.
├── contact/          # Contact page with form
├── portfolio/        # Case studies (problem → approach → outcome)
├── products/         # Product listings with status
├── services/         # AI Consulting + AI Development
├── team/             # Team bios and photos
├── globals.css       # Global styles
├── layout.tsx        # Root layout
└── page.tsx          # Home page
```

## Updating Content

All content is centralized in **`app/data/siteData.ts`**. You can update:

- **Company info** — name, tagline, description, email, calendar link
- **Services** — title, description, deliverables list
- **Products** — add/remove/edit products with name, description, purpose, status
- **Portfolio** — add case studies with problem/approach/outcome structure
- **Team** — add members with name, role, bio, and optional photo

No page code changes needed for content updates.

### Adding a team photo

1. Place the image in `public/team/` (e.g., `public/team/alex.jpg`)
2. In `siteData.ts`, set the `photo` field to `"/team/alex.jpg"`

### Adding a new product

In `siteData.ts`, add to the `products` array:

```ts
{
  name: "Product Name",
  description: "What it does.",
  purpose: "Why it exists.",
  status: "Active", // or "In Development"
  url: "", // optional link
},
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
```

The site is configured for static export (`output: "export"` in `next.config.ts`). The build output in `out/` can be deployed to any static hosting.

## Tech Stack

- Next.js 15 (App Router, Static Export)
- Tailwind CSS 4
- TypeScript
- No CMS dependency — content is in code

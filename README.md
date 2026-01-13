# GiftHaven (starter)

A clean, family-friendly gift idea site with:
- Browse by recipient and occasion
- Fast client-side search (Fuse.js)
- Secret Santa name selector (runs in-browser)
- Affiliate disclosure + Amazon Associate footer text

## 1) Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## 2) Add your products

Edit `data/products.js`.

Each product looks like:
- `title`, `blurb` (your own words)
- `recipients` (e.g. `men`, `women`, `boys`, `girls`, `unisex`)
- `occasions` (e.g. `christmas`, `birthday`)
- `affiliateUrl` (your Amazon/Etsy/etc link)

## 3) Affiliate compliance (important)

- Keep the disclosure visible wherever you show product lists.
- Amazon requires this exact statement somewhere clearly visible:
  **"As an Amazon Associate I earn from qualifying purchases."**
- Follow FTC guidance on clear disclosure of material connections.

## 4) Deploy (Vercel recommended)

1. Push this project to GitHub
2. Import it in Vercel
3. Set your domain
4. Update `metadataBase` in `app/layout.jsx` to your real domain

## 5) Next upgrades

- Add more taxonomy (age ranges, budgets, hobbies)
- Add a lightweight CMS (Sanity, Contentful, or a simple admin page)
- Add structured data (Product/ItemList) + sitemap
- Add analytics (Plausible/GA4) and track outbound affiliate clicks

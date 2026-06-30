Part of Fede's private multi-business stack; internal context lives in a private vault — ask Fede.

# Hobart Book Village

Static marketing/tourism website for **Hobart Book Village** — the Catskills book village (Hobart, NY), promoting its independent bookshops and helping visitors plan a trip.

## What this is
A small, hand-written static site (no build step, no framework). Plain HTML pages share a stylesheet and a single JS file that injects the nav + footer so they're edited in one place.

## Stack
- Static **HTML + CSS + vanilla JS** — no package.json, no bundler, no dependencies.
- Google Fonts (Cormorant Garamond, Playfair Display, Inter) loaded via `<link>`.
- `serve.json` configures static serving (`cleanUrls: false`, `/` → `/index.html`).

## How to run
Serve the folder with any static file server, e.g.:
```bash
npx serve .
```
Then open the printed local URL. No build or install required.

## Structure
- `index.html` — home (hero, bookshops, intro)
- `plan.html` — plan your visit
- `events.html` + `events.js` — events listing
- `around-hobart.html` — things to do nearby
- `shop.html` + `shops.js` — bookshop pages/data
- `itineraries.html` — itineraries
- `styles.css` — all styling
- `site.js` — shared nav + footer injection + page interactions; loaded by every page
- `logo-v2.png`, `images/` — assets

## Conventions
- Nav/footer are NOT hand-coded per page — `site.js` builds them. Edit menu links in the `NAV_LINKS` array in `site.js`.
- Each page sets two `<body>` attributes that `site.js` reads:
  - `data-page="home"` (transparent nav over hero, solidifies on scroll) or `"inner"` (solid nav from top)
  - `data-active="bookshops" | "plan" | "events" | "around"` — highlights the active nav link
- Keep it dependency-free and static; new pages should follow the same `<body data-page ... data-active ...>` pattern and include `styles.css` + `site.js`.

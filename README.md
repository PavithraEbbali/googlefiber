# Google Fiber — Authorized Retailer

A one-page landing site for an independent authorized retailer of Google Fiber.
Static, ad-compliant, and driven entirely from a single content file.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript (strict) ·
Tailwind CSS v4 · Lenis

---

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

| Script | Purpose |
| ------ | ------- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

---

## Single source of truth

**All pricing, plans, copy and legal disclosures live in `lib/content.ts`.**
No `.tsx` file contains a hard-coded price, speed, plan name or fee.

Changing one price there cascades to the plan card, the hero price band, the
composed bundles that contain that plan, the comparison table, the footer
disclosure and the page metadata — with no layout edits.

```
lib/content.ts
├── plans[]            fiber tiers, composed bundles, home phone
├── SERVICE_LINE_ORDER fiber → cable → bundle → tv → mobile → phone
├── offer              the hero offer callout
├── faqs, whyFiber, howItWorks, finePrint
└── legalLinks         the eight required policy pages
```

Bundles are **composed**, not stored: `composeBundle()` derives their price,
speeds and terms from the internet plan plus add-ons they reference, so a bundle
can never drift out of sync with its parts.

Service lines with no plans are omitted from the page automatically — which is
why there is no cable, TV or mobile section (Google Fiber does not offer them).

---

## Before going live

| Item | Where |
| ---- | ----- |
| **Phone number** is a placeholder — `(888) 555-0100`, in the reserved fictional range | `contact` in `lib/content.ts` |
| **Site URL** for OpenGraph/Twitter share images | `NEXT_PUBLIC_SITE_URL` env var |
| **The eight `/legal/*` pages do not exist yet** and will 404 | `legalLinks` in `lib/content.ts` |

---

## Deploying to Vercel

1. Import the repository at [vercel.com/new](https://vercel.com/new). Next.js is
   detected automatically — no `vercel.json` is required.
2. Set one environment variable:

   ```
   NEXT_PUBLIC_SITE_URL = https://your-domain.com
   ```

   Without it, social crawlers are handed a placeholder host for the share image.
3. Deploy. The route renders as static content.

---

## Accessibility and performance notes

- Measured contrast over the hero photograph: headline 8.2:1, subline 6.0:1, and
  every stop of the animated headline gradient between 3.9:1 and 5.2:1.
- Touch targets are held at a 40–44px minimum.
- Verified with no horizontal overflow from 320px upward.
- All ambient motion animates `transform` / `stroke-dashoffset` only, is reduced
  on phones, and stops entirely under `prefers-reduced-motion`.
- Photography is statically imported, so Next supplies intrinsic dimensions and
  blur placeholders and nothing shifts on load.

---

## Project log

`ai.wing` is an append-only changelog of structural changes and the reasoning
behind them. `IMAGE-BRIEF.md` documents the photography slots and how the images
were generated and processed.

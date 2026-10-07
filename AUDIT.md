# Dr. Roja's Dental Clinic — Site Audit

**Reviewed:** `rojadental.vercel.app` (built from `main` @ `1ea436d`)
**Stack verified:** React 19 + TypeScript + Vite 6 + Tailwind 4, deployed on Vercel
**Method:** source review + local production build + rendered page inspection
**Google Business Profile check:** 2026-10-07, via `maps.app.goo.gl/mtauKva9JUmjKvuN6`

---

## ✅ Google Business Profile verification (2026-10-07)

The live Google Maps listing was pulled and compared against the site:

| Field | Google listing | Site | Match |
|---|---|---|---|
| Name | Dr. Roja's Dental Clinic | same | ✅ |
| Category | Dental clinic | `Dentist` | ✅ |
| **Rating** | **5.0** | 5.0 | ✅ **verified real** |
| Phone | +91 82474 91265 | +91 82474 91265 | ✅ |
| Address | Door no : 30, 95-58, Appikonda R.H Colony, Kurmannapalem, Gajuwaka, AP 530046 | same | ✅ |
| Hours | Wed 9 AM–9 PM | Mon–Sat 9am–9pm | ✅ |
| Website | `rojadental.vercel.app` | `rojadental.vercel.app` | ✅ |
| **Geo pin** | **17.694238, 83.1691566** | ~~17.6974, 83.1557~~ | ❌ **was 1,468 m off — now fixed** |
| Review count | *not exposed in public view* | 25+ | ⚠️ **unverified** |
| Attribute | "Identifies as women-owned" | not used | 💡 opportunity |

**Conclusions**

1. **The 5.0 rating is genuine.** A real, verified Google Business Profile exists with a perfect 5.0
   rating, and the phone, address, hours and website all reconcile exactly. The headline trust
   claim on the site is accurate.
2. **The geo-coordinates were wrong by ~1.5 km.** The schema pin sat on Duvvada Station Road
   general area rather than the clinic (Google's Plus code is `M5V9+MM Appikonda R.H Colony`).
   Corrected to the listing's own coordinates, and a `sameAs` link to the Maps listing added so
   Google can reconcile the entity.
3. **The exact review count could not be verified.** Google's public Maps view no longer exposes
   the count to unauthenticated scrapers. `25+` appears in the site copy and in the schema's
   `reviewCount`; only the client (signed in) can confirm it. **Worth one 30-second check** —
   it is the only number on the site that isn't independently verified.
4. **Note:** Google's own listing points at `rojadental.vercel.app`, not
   `drrojasdentalclinic.in`. So the canonical decision in `index.html` now agrees with the GBP —
   the domain swap should be a deliberate migration (301 + GBP website field update) rather than
   just a tag change.

---

## Verdict

The design, copywriting and local-SEO intent are genuinely strong — the bio, the Telugu
touch, the neighbourhood targeting, the WhatsApp-first conversion path and the
`Dentist` JSON-LD are all things most local clinic sites don't bother with. The build is healthy.

The problems are not in the *design*. They're in three places:

1. **Trust/legal risk** in how imagery and reviews are presented.
2. **Page weight** — ~2.7 MB to first render, for a site meant for mid-range Android phones on mobile data.
3. **Missing production plumbing** — favicon, robots, sitemap, canonical, and a schema URL that points at a domain that doesn't resolve.

---

## P0 — Trust, legal & correctness

### 1. Stock photos are presented as the client's own clinic
The hero image is served from `images.unsplash.com` (a stock library) while its alt text reads
*"Dr. Roja's Modern Dental Clinic Interior in Kurmannapalem Visakhapatnam"*, and the same URL is
used as the `image` field in the JSON-LD. The (currently unused) gallery does this for 10 more
images, labelled *"authentic before & after smile transformations"* — including "Before" and
"After" shots that are unrelated stock photos of different people.

For a medical practice this is the highest-risk item on the list. A single patient who
reverse-image-searches, or a competitor complaint, turns a 5-star reputation into a
trust problem. Under India's misleading-advertising rules this is the kind of thing a
clinic should not be doing, and Google can act on review/imagery misrepresentation.

**Fix:** shoot the clinic interior and Dr. Roja on a phone (good light, tidy room is enough);
until then, use stock imagery only as clearly decorative background without a "this is our
clinic" claim.

### 2. Reviews are hard-coded and labelled as verified Google reviews
`src/data/clinicData.ts` contains 5 reviews with `verified: true`, rendered under a
**"Verified Google Patient"** badge, and the JSON-LD asserts `aggregateRating 5.0 / 25 reviews`.
One of them also claims *"24/7 assistance"*, which contradicts the published 9am–9pm hours.

**Update (2026-10-07):** the developer confirms these were transcribed by hand from the real
Google Business Profile, and the 5.0 rating is independently verified (see the GBP check above).
So the reviews themselves are credible. Two residual notes:

- **"Verified Google Patient"** implies a verification step that didn't happen — they're Google
  reviews transcribed manually. "Google Review" conveys the same trust without the claim.
- **`reviewCount: 25`** is the one unverified number on the site. Confirm it against the profile.

Note also the review dates read *August 2026* / *July 2026* — check they're accurate.

### 3. JSON-LD pointed at a domain that isn't live (and a wrong map pin)
```json
"@id": "https://drrojasdentalclinic.in",   // does not resolve
"url": "https://drrojasdentalclinic.in",
"geo": { "latitude": 17.6974, "longitude": 83.1557 }   // 1,468 m from the real clinic
```
That domain does not resolve, and there was **no `<link rel="canonical">`** and no `og:url`.

**Fixed:** `url`/`@id`/`image` now point at the live host, coordinates match the Google listing,
and a `sameAs` was added. Canonical + `og:url` are in place.

**Still open:** if the real domain is purchased, this must be a deliberate migration —
`canonical`, `og:url` and the JSON-LD `url`/`@id` changed together, a 301 from the `vercel.app`
host, **and** the website field updated on the Google Business Profile (which currently points at
`rojadental.vercel.app`). Changing only the HTML would split the entity.

### 4. No favicon
No `favicon.ico`, no `apple-touch-icon`, no `theme-color`. The browser tab shows a blank page
icon and a saved bookmark looks unfinished. Note the logo is a **square PNG with a solid black
background (853×853, no alpha)** — it will not sit cleanly on the navy `#0C4A6E` navbar or on
the cream navbar when scrolled. A transparent-background or tooth-mark-only version is needed.

### 5. No `robots.txt` or `sitemap.xml`
`/robots.txt` returns Vercel's 404 page. There's nothing telling Google the sitemap exists.

---

## P1 — Performance (the biggest easy win)

A production build ships **4.3 MB** to `dist/`, and a first visit pulls roughly **2.7 MB**:

| Asset | Size | Rendered at | Waste |
|---|---:|---|---|
| `dr-roja.png` | **1.82 MB** (1024×1536) | 450–520 px tall | ~1.7 MB |
| `logo.png` | **391 KB** (853×853) | **40–48 px** tall | ~385 KB |
| `index.js` | 303 KB (88 KB gzip) | — | acceptable |
| Unsplash hero | ~150–300 KB | 460 px tall | third-party + no preconnect |

Specific findings:

- **The doctor photo and the logo together are 2.2 MB** where ~60–80 KB would be visually identical. Re-encoding the portrait as WebP at 800px and the logo at 128px is a ~97% reduction with no visible difference.
- **`public/dr-roja.png` and `src/assets/dr-roja.png` are byte-identical duplicates**, and `dist/` ships the 1.82 MB file *twice*. Only the `src/assets` copy is ever imported — `CLINIC_INFO.doctorImage` (which pointed at the `public/` one) is dead code.
- **No `<img>` has `width`/`height`** → layout shift (CLS) as images load.
- **Only one image uses `loading="lazy"`** (the map iframe). Everything else is eager.
- **No `preconnect` to `images.unsplash.com`**, and the hero image has no `fetchpriority="high"` — the LCP element is a third-party image that can't even start until DNS + TLS to Unsplash completes.
- **Four font families** are loaded from Google Fonts (DM Sans, Playfair Display, Space Grotesk, Noto Sans Telugu). Each is a separate render-blocking request. Telugu is used for only a few strings — trimming to DM Sans + Playfair + Telugu, and dropping Space Grotesk's weights, cuts this substantially.
- `backdrop-filter: blur()` is used on many surfaces (`.glass-card`, navbar, booking panel). It's expensive on low-end Android GPUs.

**Realistic outcome:** ~2.7 MB → **under 300 KB** first-load, LCP from ~4–5 s to ~1.5 s.

### One thing that's already done well
The `Open Now` badge in `Hero.tsx` correctly resolves India time via `Intl.DateTimeFormat`
with `timeZone: 'Asia/Kolkata'` and re-checks every 60 s — so it's accurate for visitors in
any timezone, and updates live. That's a nice touch most sites get wrong.

---

## P2 — Code & repo hygiene

| Item | Detail |
|---|---|
| **Dead component** | `src/components/BeforeAfterGallery.tsx` — 244 lines, never imported anywhere. It's fully built but unreachable. |
| **Dead config** | `metadata.json` and `.env.example` describe a server-side **Gemini API** capability. Nothing in `src/` calls it. AI Studio leftovers. |
| **Unused dependencies** | `@google/genai`, `express`, `dotenv`, `motion`, `@types/express` — all zero references in `src/`. |
| **`npm run lint` fails** | `src/components/AboutSection.tsx(4,23): error TS2307: Cannot find module '../assets/dr-roja.png'`. `tsconfig.json` is missing `"types": ["vite/client"]`. The Vite build works, but the type-check doesn't. |
| **Dead fields** | `CLINIC_INFO.phone` / `phoneRaw` duplicate `phone1` / `phone1Raw`; `phone` is never read. `doctorImage` is never read. |
| **Stale script** | `"clean": "rm -rf dist server.js"` — there is no `server.js`. |
| **Package name** | `"name": "react-example"`. |
| **`vite.config.ts`** | Contained a mojibake comment (`Do not modifyâ€"`). Fixed in this branch, along with `allowedHosts` for remote previews. |
| **Accessibility** | The mobile menu toggle has no `aria-expanded`/`aria-controls`. Review slider buttons are fine, but the carousel has no keyboard/auto-advance behaviour. |

---

## P3 — Opportunities (not bugs, upside)

1. **Buy the real domain.** `drrojasdentalclinic.in` (or `.com`). Everything else in local SEO gets easier once the canonical host is stable and matches the Google Business Profile.
2. **Rank for treatments, not just the clinic.** "root canal cost in Gajuwaka", "clear aligners Visakhapatnam", "wisdom tooth removal near Duvvada" — these are the queries people actually type. Dedicated pages only work properly on a real domain with a sitemap.
3. **A booking form with a fallback.** Right now every path is WhatsApp or a phone call. Someone browsing at 11pm on a laptop who doesn't want to open WhatsApp has no way to leave their number.
4. **Price ranges / EMI mention.** The single biggest reason people bounce from a clinic site is not knowing the cost. Even "RCT from ₹3,500" converts.
5. **Real treatment photos** — even 6 clinic/equipment photos beat 10 stock photos, and they double as Google Business Profile content.
6. **`sameAs` in the schema** linking the Google Maps listing and any social profiles.

---

## Suggested order of work

| # | Task | Effort | Impact |
|---|---|---|---|
| 1 | Compress the doctor photo + logo (→ WebP), remove the duplicate | 30 min | 🔥🔥🔥 |
| 2 | Add favicon + apple-touch-icon (transparent logo) | 20 min | 🔥🔥 |
| 3 | Add `robots.txt` + `sitemap.xml` + canonical + `og:url`; fix schema URL | 30 min | 🔥🔥🔥 |
| 4 | Decide the review/imagery policy (P0 items 1–2) | client call | 🔥🔥🔥 |
| 5 | Delete dead code, unused deps, AI Studio leftovers; fix `tsconfig` | 20 min | 🔥 |
| 6 | Add `width`/`height`, `loading="lazy"`, `fetchpriority`, image preconnect | 30 min | 🔥🔥 |
| 7 | Trim the font load | 15 min | 🔥 |
| 8 | Booking form + price ranges | half day | 🔥🔥🔥 |

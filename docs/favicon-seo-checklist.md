# Favicon & SEO Checklist — Vercel Deployment

## Favicon ✓ (done)

- [x] `/favicon.ico` in `public/`
- [x] `/apple-touch-icon.png` in `public/`
- [x] `<meta name="theme-color">` in `index.html`
- [x] `<link rel="icon">` in `index.html`

**Verify after deploy:** `curl -I https://rojadental.vercel.app/favicon.ico` → 200 OK.

## SEO-on-Vercel notes

### Client-side rendering caveat

This is a Vite SPA — the HTML body contains **zero readable text** until
JavaScript loads and React renders. Googlebot *does* execute JS, but other
crawlers (social embeds, some SEO tools) may not.

**Mitigations already in place:**
- `<title>`, `<meta description>`, Open Graph, Twitter Card, and JSON-LD are
  all in the static `<head>` — they're visible to every crawler.
- `robots.txt` and `sitemap.xml` are in `public/`.

**Future improvement:** Add a build-time prerender step (e.g.
`vite-plugin-prerender` or a Vercel Build Output API script) to inject the
first-paint HTML. Track as issue item #7.

### Canonical URL

Currently points to `https://rojadental.vercel.app/`.
When a custom domain is purchased, update **all three together**:

1. `<link rel="canonical">` in `index.html`
2. `og:url` in `index.html`
3. `url` and `@id` in the JSON-LD block
4. Website field on the Google Business Profile
5. Add a 301 redirect from the old Vercel host

### GA4 conversion events

After merging, mark these as conversions in GA4:

1. Go to **GA4 → Admin → Events**
2. Toggle **Mark as conversion** for:
   - `whatsapp_click`
   - `call_click`
   - `directions_click`

Events fire automatically — no additional code changes needed.
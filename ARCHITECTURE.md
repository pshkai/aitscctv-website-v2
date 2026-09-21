# Architecture

## Routing and rendering

There are 63 canonical topics, each with Thai and English output: 126 indexable pages. Thai uses the root; English uses `/en/`. Two route groups provide separate static root layouts so `<html lang>` is correct without cookies, redirects or request middleware. Both catch-all page modules call the same server-rendered page templates. `generateStaticParams` pre-renders the complete content collection. Unknown paths render an appropriate 404, including an English 404 under `/en/`.

The logo is Home. Six primary navigation links cover Solutions, Where We Work, Projects, About, Resources and Contact, plus the survey CTA. Mobile includes explicit Home and Support links. The header's language selector translates the current route rather than sending the reader to a homepage.

## Content and components

`model.ts` defines Company, Support, Service, Project, Industry, Article, FAQ and shared bilingual sections. `data.ts` stores the source URLs alongside the copy. The model can be populated by a CMS adapter later without changing template contracts. Content is text, rendered through React escaping; no arbitrary CMS HTML is executed.

The page registry owns canonical slugs and page descriptions. Shared components provide sections, headings, buttons, breadcrumbs, service/project cards, native details-based FAQs, process steps, footer and final CTA. The only client features are mobile-menu state, form validation/submission, the click-to-load map an optional in-page analytics event bridge, and source-library filtering/search. Marketing content remains server-rendered.

CSS tokens define ink, red accent, neutral surfaces, borders, container, spacing, radius and subtle shadow. Layout breakpoints at 600, 850, 1190 and 1400 pixels adapt the grid and navigation. Body text uses system Latin typography and a locally served OFL-licensed Thai font. Reduced-motion preferences remove transitions and smooth scrolling. Native semantic controls are used rather than a UI package.

## SEO ownership

`seo.tsx` is the single metadata/schema implementation. Every page gets a unique title and description, self-canonical, reciprocal `th`/`en` and Thai `x-default`, language-specific Open Graph, and one graph. The graph contains Organization, WebSite, WebPage and BreadcrumbList; actual service and resource pages add Service or Article. No reviews, aggregate ratings, prices or unsupported certifications are generated. FAQ markup is omitted because visible FAQs do not establish rich-result eligibility.

`sitemap.ts` uses exactly the canonical registry in both languages. `robots.ts` allows public assets/content and excludes the form API. Utility workflows are not implemented as marketing pages; the migration plan preserves their existing origin and excludes them from the new sitemap. Staging should be protected at the host, not published openly with production indexing signals.

## Forms and security

The API is intentionally a mock. It returns `{ok:true, mode:'mock', delivered:false}` after validation, without email, persistence or logging submission data. The client tells visitors this explicitly. There is no file-upload surface. Both server and client require a name, return contact, location and requirement. Email is optional and validated when supplied. Limits apply to all accepted text fields. React escapes rendered values.

The route rejects incompatible content types, malformed JSON, invalid Origin/Host pairs, filled honeypots and oversized requests. The local mock has a global 60-per-minute in-memory limiter, intentionally retaining no IP addresses. This is appropriate for the local demonstration, not distributed production enforcement. A delivery integration must use a shared limiter, a trusted proxy configuration, operational abuse controls, timeouts, delivery idempotency and a verified receiving system. Keep credentials in server-only environment variables. Return success only after the delivery provider has accepted the request; never label a click as a lead.

Headers include nosniff, strict-origin-when-cross-origin, DENY framing and restricted camera/microphone/geolocation. CSP restricts resources to self, with Google frames only for the user-activated map. Next's static inline hydration requires the documented `unsafe-inline` script/style allowance; this does not constitute a strict nonce/hash CSP. At deployment, either generate exact script hashes for static output at the edge, or adopt per-request nonces and accept dynamic rendering. Do not claim the current CSP blocks every inline-script injection. Add HSTS at the real HTTPS host after confirming subdomain policy.

## Performance

Static HTML avoids WordPress/plugin generation. Images are WebP originals under 60 KB for the main used images, resized to AVIF/WebP by Next/Image with explicit sizing. Only the hero/project lead is prioritised; lower images lazy-load. There are no videos, carousels, social scripts or trackers. Google Maps is absent until interaction. The font is local; no Google Fonts request is made. Cache immutable Next assets at the platform, retain image-optimiser caching, and enable HTTP compression at the host. No database or CMS request sits on the rendering path.

Local Lighthouse is lab evidence, not a field CWV statement. TBT is measured; no field INP is available. Use real-user monitoring after an actual launch to establish field behaviour.

## Restored content model

`expanded.ts` holds dedicated service details, category metadata and hub relationships. `expanded-page.tsx` renders the compact homepage, hubs, package/rental comparisons, customer evidence, manuals and standards. The registry drives all 63 topics. `source-faq.json` stores 150 deduplicated Thai questions with source URLs and editorial corrections. `source-library.json` contains all 415 post links and supports client-side search/category filtering without fetching an API. Original bodies remain on the legacy site. English page shells explicitly label the Thai FAQ corpus rather than pretending it is translated.

Tailwind source scanning is limited to the application `src` tree. Downloaded reference HTML is untrusted and excluded from the build. No downloaded source script is executed.

## Theme preference

The HTML defaults to `data-theme="dark"`. A static head script restores the validated `aits-theme` local-storage choice before painting; the HTML hydration-warning suppression is limited to this intentional attribute change. CSS variables style both palettes and native controls. The header button updates the document attribute and browser preference without a theme framework or backend request. React renders identical toggle markup on server and client; CSS exposes the appropriate action label.

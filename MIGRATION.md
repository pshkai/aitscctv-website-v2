# Migration and launch plan — not executed

The application has not been deployed. Production WordPress, files, database, DNS, forms and redirect configuration are untouched.

## Preserve the existing origin

Do not replace WordPress with this application as an unrestricted catch-all. The new site implements the marketing registry and reviewed redirects only. `content-inventory.json` records every discovered legacy URL. `retain-legacy` entries mean the existing origin must continue serving those paths and dependencies.

At a future launch, route the 126 canonical marketing pages, 301 mappings and Next assets/API to the new host. Keep WordPress on a private origin behind the edge and route all other existing paths to it. Maintain `/wp-admin/`, `/wp-login.php`, `/wp-json/`, `/wp-content/`, required operational assets, account/session routes, technician workflows, existing recruitment and archived editorial URLs. Preserve cookies and request methods for these workflows. Do not apply a fallback redirect to Home. Unknown URLs should retain real 404 semantics.

This split-origin rule is a genuine hosting requirement. It avoids deleting hundreds of unreviewed posts or breaking operational forms. The local marketing build returns 404 for those paths because it does not impersonate the existing application. This is deliberate and documented, not permission to discard them at launch.

## Direct redirects

`redirect-map.json` is the reviewed source of local Next.js redirects. Each entry carries old URL, final destination, explicit status 301, action and reason. Next's default permanent 308 is not used. Mappings point straight to a new 200 page, without chains or unrelated homepage destinations.

There are 37 exact mappings. Camera-count pages → `/solutions/cctv/packages/`; rental → `/solutions/cctv/rental/`; LAN/fibre/Wi-Fi/AP/telephone → their dedicated networking pages; cards and fingerprint → separate access-control detail pages; alarm systems → `/solutions/security/`; solar/film/renovation → dedicated building-service pages. Manuals → `/support/manuals/`; warranty → `/support/warranty/`; video → `/resources/videos/`; blog → `/resources/library/`. Twelve former article-to-guide/industry consolidations have been reversed so full original articles remain available. See `discovery-v3/reversed-consolidations.json`.

## Launch sequence

1. Back up the live WordPress database, files and current host/redirect configuration. Preserve a restorable origin and its operational credentials outside this repository.
2. Set up the new Node host and image cache. Use an authenticated staging domain and verify the production build there. Build with the final HTTPS canonical origin, presently `https://aitscctv.com`.
3. Install the explicit marketing route/redirect rules and the legacy-origin fallback at the edge. Use one-hop HTTP/www normalisation to the final canonical hostname. Preserve request query strings as appropriate; do not use a broad regex that captures new `/en/` routes.
4. Implement real delivery, shared rate limiting and receiving-system monitoring if launching the survey form as a lead channel. Test with controlled test records before changing the mock notice/success state. Update privacy wording to actual retention and processors. Add analytics only if desired.
5. Validate all routes, images, redirects, language pairs, 404s, portal login/session actions, historical articles and critical downloads on staging. Verify metadata after the final domain build. Check the unchanged legacy workflows with their owners during deployment testing, without altering their content.
6. Publish the new canonical sitemap. Keep a separate curated sitemap for retained useful legacy editorial URLs if they remain indexable; avoid two entries for redirected content. Remove utility URLs from search sitemaps and add noindex at their serving origin or edge without blocking the crawler from seeing that instruction.
7. Move traffic only after the route-split checks pass. Submit the new sitemap in Search Console, monitor 404/5xx and redirect reports, and compare query/landing-page behaviour when account data is available. Existing English selectors are replaced by equivalent `/en/` topic pages (restored long FAQ answers remain explicitly labelled Thai); both languages self-canonicalise.

## Rollback

Keep a versioned edge configuration and old-origin backup. Rollback switches marketing traffic back to the previous origin and restores the previous redirect rules; it does not require restoring deleted content because none is deleted in this plan. Keep new URL mappings documented during rollback to avoid loops. Do not cache 301s indefinitely during staging. Monitor the form receiving system separately from page uptime.

The absence of Search Console/backlink data does not prevent the local rebuild. It is handled conservatively by retaining unreviewed URLs, documenting decisions and avoiding blanket consolidation.

## Historical article discovery

Retain the original post/category sitemap endpoints on the legacy origin and submit the retained article sitemap as well as the new marketing sitemap at launch. The 415-entry library exposes the complete original URL set to users; its interactive search is not a replacement for the legacy article sitemap. No existing article is declared obsolete simply because it has not been rewritten locally.

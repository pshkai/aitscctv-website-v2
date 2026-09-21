# Verification record — content-preserving rebuild

Verified against the local Next.js production build. No production edits or real enquiries were performed.

| Check                     | Result / evidence                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Production build          | PASS: 126 canonical locale pages prerendered; sitemap, robots, 404 and mock API available                                                                                     |
| TypeScript                | PASS: `pnpm typecheck`                                                                                                                                                        |
| Lint                      | PASS: `pnpm lint`                                                                                                                                                             |
| Unit tests                | PASS: 5 tests; validation, language metadata, redirects and required restored routes                                                                                          |
| Browser suite             | PASS: 27 Chromium tests, no failures; `reports/e2e.json`                                                                                                                      |
| Final redirect regression | PASS: sitemap/robots/redirect/404 test repeated after reducing to 37 exact mappings                                                                                           |
| SEO/internal links        | PASS: 126 pages, 37 redirects, 15 image/download asset requests, zero failures; `reports/seo.json`                                                                            |
| Accessibility             | PASS: zero axe WCAG A/AA violations on 15 representative routes including all requested page types; keyboard menu, skip link and form focus tested                            |
| Responsive layout         | PASS: no document overflow at 360, 390, 768, 1280 and 1600px on the 13 screenshot routes                                                                                      |
| Packages/downloads        | PASS: published price/date visible; three local PDF downloads return 200 and PDF content type                                                                                 |
| FAQ/library               | PASS: accordion opens; search returns empty state and restores results; category filters are native controls; explicit heading-order and visible-label regression checks pass |
| Forms                     | PASS: required validation, optional email errors, network failure recovery, honeypot, Origin checks and mock-only success                                                     |
| Privacy/third parties     | PASS: no initial external requests; Google Maps requires explicit load; no external enquiry delivery                                                                          |
| Content preservation      | 150 questions; all 415 original post URLs; explicit source gaps and legacy-body dependency in `CONTENT-COVERAGE-REPORT.md`                                                    |
| Performance               | Actual final measurements and limitations are in `PERFORMANCE.md` and `reports/performance.json`                                                                              |

## Visual inspection

Inspected desktop and mobile **Home, CCTV hub, CCTV packages, Installation process, FAQ, Testimonials, Projects and Contact**. The comparison table remains horizontally scrollable within its region on narrow screens; the document itself does not overflow. Thai copy wraps without overlap; hierarchy, logo, photographs, forms and footer are consistent. Homepage uses nine major sections and five FAQs. The supplementary sitemap is in the footer, with six primary navigation groups.

Full screenshots: `reports/screenshots/{home,cctv,packages,process,faq,testimonials,projects,contact}-{390,1600}.png`. Additional screenshots cover About, the university case, Survey, English Home/CCTV and the open mobile menu. Contact sheets of top/middle/footer crops used for inspection are in `reports/visual-review-v3/`.

## Practical limits

Automated accessibility testing is not WCAG certification. No physical-device or screen-reader user study was performed; Chromium was tested. Performance is a local simulated lab measurement, not final-host field data; no field INP claim is made. The long restored FAQ corpus is Thai even within English shells, explicitly labelled. The original 415 article bodies remain on the public legacy site, with the source-read limitations documented. Launch needs the legacy routing policy and an independently implemented delivery integration.

## Theme revision

Dark is the default even when the OS requests light. Both themes pass the tested WCAG axe checks on Home, Packages and Contact at 360px and 1280px. Browser tests verify reload and language-navigation persistence, keyboard activation, and switching without storage access. Desktop and mobile screenshots were inspected in `reports/themes/`. Lint, TypeScript, 5 unit tests, production build and the 126-page/37-redirect SEO scan pass. Earlier Lighthouse measurements predate the theme revision and were not rerun for this colour change.

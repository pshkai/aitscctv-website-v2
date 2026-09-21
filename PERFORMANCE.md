# Measured performance — content-preserving rebuild

Local Next.js production build; Lighthouse simulated mobile throttling and explicit desktop configuration. These are lab results, not field data or a final-host benchmark. Eleven routes were measured in both modes (22 page/mode results). Home and Projects were rechecked after correcting the shared logo accessible name and Projects heading sequence. The table uses those final rechecks for those two routes; all other entries are from the original batch.

| Route        | Mobile performance | Mobile LCP | Mobile TBT | Desktop performance | Desktop LCP |
| ------------ | -----------------: | ---------: | ---------: | ------------------: | ----------: |
| home         |                 97 |    2.502 s |    22.0 ms |                 100 |     0.591 s |
| cctv         |                 97 |    2.500 s |    36.8 ms |                 100 |     0.550 s |
| packages     |                 98 |    2.498 s |    21.5 ms |                 100 |     0.549 s |
| process      |                 97 |    2.504 s |    24.0 ms |                 100 |     0.547 s |
| faq          |                 97 |    2.504 s |    24.5 ms |                 100 |     0.549 s |
| testimonials |                 96 |    2.728 s |    24.0 ms |                 100 |     0.568 s |
| projects     |                 96 |    2.728 s |    23.5 ms |                 100 |     0.569 s |
| about        |                 96 |    2.724 s |    22.0 ms |                 100 |     0.569 s |
| project      |                 99 |    1.960 s |    22.0 ms |                 100 |     0.551 s |
| contact      |                 97 |    2.501 s |    59.6 ms |                 100 |     0.548 s |
| survey       |                 97 |    2.503 s |    24.5 ms |                 100 |     0.547 s |

Final accessibility, best practices and SEO are **100** on every measured route/mode. **CLS is 0** throughout. Desktop TBT is 0 ms. Mobile FCP is approximately 0.755–0.757 s; desktop approximately 0.204–0.205 s.

## Targets and limitations

Mobile performance is **96–99**; desktop **100**. The 90+ mobile and 95+ desktop score goals are met. Mobile LCP is **1.960–2.728 seconds**. The strict below-2.5-second LCP goal is not met on every route: several are just over 2.5 s; Testimonials, Projects and About are around 2.72 s. Do not label these as universal Core Web Vitals passes. Lab TBT does not establish field INP. Real hosting, cache, network and device conditions require post-deployment measurement.

The earlier Projects accessibility score of 98 exposed a heading-level issue. It was corrected and an explicit regression test added. Projects now measures 100. Initial reports are retained with `-before-a11y-fix` filenames and in `reports/performance-before-a11y-fix.json`.

## Comparison

The original public-site audit measured About mobile performance 57, LCP 6.6 s, CLS 0.005; Contact 64, LCP 4.5 s, CLS 0.006. The rebuild measures About 96 / 2.724 s / 0, and Contact 97 / 2.501 s / 0. This is a directional comparison across different hosting conditions, not a controlled benchmark.

Previous V2 summary results are retained under `reports/previous-v2/`. The rebuild adds 34 topics, 150 source questions, source logos, downloads and the 415-link library while retaining high lab scores. Static rendering, local responsive images, a 14,320-byte Thai font, no initial third-party requests and a user-activated map remain in place. PDFs are fetched only on request and show approximate file sizes.

Evidence: `reports/performance.json` and `reports/lighthouse/*.json` / `*.html`. Source coverage and remaining review gaps are documented in `CONTENT-COVERAGE-REPORT.md`.

# AITS website v2

Content-rich local Thai/English marketing rebuild, based on the public AITS website and the 20 September 2026 audit. Production WordPress, DNS, hosting and operational workflows were not changed. All enquiry submissions are simulations.

## Stack and prerequisites

Node.js 22 or newer, pnpm 11 (the lockfile was generated with 11.19.0). Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS 4 and a shared CSS design system. Typed local content; no paid CMS, external database or delivery account required.

## Run locally

```powershell
cd C:\Users\pshka\Documents\ChatGPT\AitsCCTV\aits-website-v2
pnpm install --frozen-lockfile
pnpm dev
```

Open http://127.0.0.1:3000/ for Thai or http://127.0.0.1:3000/en/ for English. The production preview uses:

```powershell
pnpm build
pnpm start
```

Do not run development and production servers on the same port at once. Node and pnpm can be installed normally; this workspace also has a bundled pnpm at `C:\Users\pshka\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd`.

## Validate

```powershell
pnpm lint
pnpm typecheck
pnpm test
pnpm exec playwright install chromium
pnpm build
pnpm start
# In another terminal:
pnpm test:e2e
pnpm check:seo
pnpm perf
```

The E2E runner reuses the running local server. Lighthouse measures the production server; close unrelated CPU-intensive work during measurement. It launches its own Chromium on debugging port 9223. Reports are saved under `reports/`, full screenshots under `reports/screenshots/`. The browser tests contact only the local site and do not send real enquiries or click live phone/LINE actions.

## Content editing

Edit bilingual records in `src/content/data.ts`; types are in `src/content/model.ts`. Each record carries public source URLs. Core page labels/descriptions and canonical route construction are in `src/lib/site.ts`. Add both language values together. The route list automatically feeds static generation, metadata, sitemap and SEO tests. Keep claims tied to source evidence, and distinguish project facts from new-project planning advice.

Project image mappings are in `src/components/ui.tsx`. Assets are local WebP, served through Next/Image with responsive sizes. See `ASSETS.md` for provenance and font licensing. Reusable templates live in `src/components/site-page.tsx`; design tokens and responsive styles are in `src/app/globals.css`.

## Environment

Copy `.env.example` to `.env.local` if changing the canonical origin. `SITE_URL` defaults to `https://aitscctv.com` and accepts an HTTPS origin, not a path. It is read at build time. `FORM_MODE=mock` documents the only implemented mode: changing it does not enable external delivery. There are no API keys or secrets in this project. Local forms require only four fields; photos and documents are not collected. Optional details are available on the dedicated enquiry/contact pages.

## Deployment preparation

The production build is ready for a Node-compatible Next.js host, including its image optimiser and route handler. Configure the final domain and HTTPS, rebuild with the correct `SITE_URL`, and implement the legacy-origin routing policy before replacing any existing host. `MIGRATION.md` specifies this policy and rollback. Connect and test actual email/CRM delivery only as a separate deployment task, then update the form wording and privacy notice. Analytics is optional and disabled by default. Nothing has been deployed.

See `ARCHITECTURE.md`, `CONTENT-MIGRATION.md`, `MIGRATION.md`, `ANALYTICS.md` and `QA-CHECKLIST.md` for implementation and verification details.

## Content-preserving revision

The rebuild now exposes 63 topics / 126 locale routes. Edit dedicated page records in `src/content/expanded.ts` and templates in `src/components/expanded-page.tsx`. `src/content/source-faq.json` preserves 150 Thai questions; `source-library.json` indexes all 415 original post URLs. English commercial pages are translated; the restored long FAQ corpus is explicitly presented in Thai inside the English shell.

Read `CONTENT-COVERAGE-REPORT.md` for what was restored and the source-review limitations. `CONTENT-PRESERVATION-MATRIX.md` is the block-level evidence inventory. Historical articles remain accessible on the original site and must retain their routes during deployment; the local library is not a claim of complete article-body migration. Thirty-seven exact redirects replace the previous 49 after reversing twelve broad article consolidations.

Downloaded source HTML under `discovery-v3/raw` is untrusted reference material. It is not executed, imported into application code, or scanned by Tailwind; CSS scanning is restricted to `src`. Some source files were blocked by Windows security and were recorded as unavailable rather than bypassing the block.

## Dark and light modes

Dark mode is the default regardless of the operating-system preference. The header sun/moon control switches modes on desktop and mobile. The browser stores the choice under `aits-theme`; a small script in the document head restores it before painting to avoid a theme flash. When storage is unavailable, switching still works for the current page. No preference is sent to an external service. Theme tokens live in `src/app/globals.css`; the control is `src/components/theme-toggle.tsx`.

Both themes were checked on Home, Packages and Contact at mobile/desktop widths, with screenshots in `reports/themes/`. The full suite now passes 27 browser tests, including persistence, language switching, keyboard activation, blocked storage, contrast and overflow checks.

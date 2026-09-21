import lighthouse from 'lighthouse';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';
import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
const browser = await chromium.launch({ headless: true, args: ['--remote-debugging-port=9223'] });
const routes = [
  ['home', '/'],
  ['cctv', '/solutions/cctv/'],
  ['packages', '/solutions/cctv/packages/'],
  ['process', '/about/installation-process/'],
  ['faq', '/faq/'],
  ['testimonials', '/testimonials/'],
  ['projects', '/projects/'],
  ['about', '/about/'],
  ['project', '/projects/university-network/'],
  ['contact', '/contact/'],
  ['survey', '/request-site-survey/'],
];
const results = [];
await fs.mkdir('reports/lighthouse', { recursive: true });
try {
  for (const mode of ['mobile', 'desktop'])
    for (const [name, path] of routes) {
      const { lhr, report } = await lighthouse(
        'http://127.0.0.1:3000' + path,
        {
          port: 9223,
          output: 'html',
          logLevel: 'error',
          onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        },
        mode === 'desktop' ? desktopConfig : undefined,
      );
      await fs.writeFile(`reports/lighthouse/${name}-${mode}.html`, report);
      await fs.writeFile(`reports/lighthouse/${name}-${mode}.json`, JSON.stringify(lhr));
      const row = {
        name,
        mode,
        path,
        formFactor: lhr.configSettings.formFactor,
        scores: Object.fromEntries(
          Object.entries(lhr.categories).map(([k, v]) => [k, Math.round(v.score * 100)]),
        ),
        fcp: lhr.audits['first-contentful-paint'].numericValue,
        lcp: lhr.audits['largest-contentful-paint'].numericValue,
        cls: lhr.audits['cumulative-layout-shift'].numericValue,
        tbt: lhr.audits['total-blocking-time'].numericValue,
      };
      results.push(row);
      console.log(JSON.stringify(row));
      await fs.writeFile(
        'reports/performance.json',
        JSON.stringify(
          {
            date: new Date().toISOString(),
            environment:
              'Local next start, Chromium, Lighthouse simulated mobile/desktop throttling; no field data',
            results,
          },
          null,
          2,
        ),
      );
    }
} finally {
  await browser.close();
}

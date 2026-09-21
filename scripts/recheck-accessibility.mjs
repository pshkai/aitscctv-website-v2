import lighthouse from 'lighthouse';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';
import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
const summary = JSON.parse(await fs.readFile('reports/performance.json', 'utf8'));
await fs.copyFile('reports/performance.json', 'reports/performance-before-a11y-fix.json');
const browser = await chromium.launch({ headless: true, args: ['--remote-debugging-port=9223'] });
try {
  for (const mode of ['mobile', 'desktop'])
    for (const [name, path] of [
      ['home', '/'],
      ['projects', '/projects/'],
    ]) {
      for (const ext of ['json', 'html'])
        await fs.copyFile(
          `reports/lighthouse/${name}-${mode}.${ext}`,
          `reports/lighthouse/${name}-${mode}-before-a11y-fix.${ext}`,
        );
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
      summary.results[summary.results.findIndex((r) => r.name === name && r.mode === mode)] = row;
      console.log(JSON.stringify(row));
    }
  summary.recheck = {
    date: new Date().toISOString(),
    reason:
      'Logo visible-name match and Projects heading sequence corrected; affected Home/Projects pages remeasured in both modes.',
  };
  await fs.writeFile('reports/performance.json', JSON.stringify(summary, null, 2));
} finally {
  await browser.close();
}

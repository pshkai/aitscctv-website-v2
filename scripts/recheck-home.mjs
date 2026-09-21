import lighthouse from 'lighthouse';
import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
const browser = await chromium.launch({ headless: true, args: ['--remote-debugging-port=9224'] });
const results = [];
try {
  for (let run = 1; run <= 3; run++) {
    const { lhr, report } = await lighthouse('http://127.0.0.1:3000/', {
      port: 9224,
      output: 'html',
      logLevel: 'error',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    });
    await fs.writeFile(`reports/lighthouse/home-mobile-repeat-${run}.html`, report);
    await fs.writeFile(`reports/lighthouse/home-mobile-repeat-${run}.json`, JSON.stringify(lhr));
    const row = {
      run,
      scores: Object.fromEntries(
        Object.entries(lhr.categories).map(([k, v]) => [k, Math.round(v.score * 100)]),
      ),
      lcp: lhr.audits['largest-contentful-paint'].numericValue,
      fcp: lhr.audits['first-contentful-paint'].numericValue,
      cls: lhr.audits['cumulative-layout-shift'].numericValue,
      tbt: lhr.audits['total-blocking-time'].numericValue,
    };
    results.push(row);
    console.log(JSON.stringify(row));
    await fs.writeFile('reports/home-repeat.json', JSON.stringify(results, null, 2));
  }
} finally {
  await browser.close();
}

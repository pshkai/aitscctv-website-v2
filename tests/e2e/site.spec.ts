import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
const pages = [
  '/',
  '/solutions/cctv/',
  '/solutions/networking/',
  '/solutions/cctv/packages/',
  '/about/installation-process/',
  '/faq/',
  '/faq/cctv/',
  '/testimonials/',
  '/projects/',
  '/about/',
  '/projects/university-network/',
  '/contact/',
  '/request-site-survey/',
  '/en/',
  '/en/solutions/cctv/',
];
test('navigation, language counterpart and working skip target', async ({ page }) => {
  await page.goto('/solutions/cctv/');
  await expect(page.locator('h1')).toContainText('กล้อง');
  await page.getByRole('link', { name: 'Read this page in English' }).click();
  await expect(page).toHaveURL(/\/en\/solutions\/cctv\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('h1')).toContainText('CCTV');
  await page.goto('/en/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});
test('mobile menu keyboard, Escape and destination', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/');
  const button = page.locator('.menu-toggle');
  await button.click();
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(button).toBeFocused();
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await button.click();
  await page.locator('#mobile-nav').getByRole('link', { name: 'Projects', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/projects\/$/);
  await expect(page.locator('#mobile-nav')).toBeHidden();
});
test('form validation, invalid email, successful mock and failure recovery', async ({ page }) => {
  await page.goto('/en/request-site-survey/');
  await page.getByRole('button', { name: 'Send test request' }).click();
  await expect(page.locator('.field-error')).toHaveCount(4);
  await expect(page.getByLabel('Your name')).toBeFocused();
  await page.getByLabel('Your name').fill('Local test');
  await page.getByLabel('Phone or preferred contact').fill('test-contact');
  await page.getByLabel('Project location').fill('Test site');
  await page.getByLabel('Brief requirement').fill('Testing only; no enquiry delivery.');
  await page.getByText('Add optional details', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('invalid');
  await page.getByRole('button', { name: 'Send test request' }).click();
  await expect(page.locator('#error-email')).toBeVisible();
  await page.getByLabel('Email', { exact: true }).fill('test@example.test');
  await page.route('**/api/site-survey/', (r) => r.abort());
  await page.getByRole('button', { name: 'Send test request' }).click();
  await expect(page.getByRole('status')).toContainText('could not');
  await page.unroute('**/api/site-survey/');
  await page.getByRole('button', { name: 'Send test request' }).click();
  await expect(page.getByRole('status')).toContainText('no enquiry was sent');
});
test('server validation, honeypot, origin and no delivery', async ({ request }) => {
  let r = await request.post('/api/site-survey/', { data: {} });
  expect(r.status()).toBe(422);
  r = await request.post('/api/site-survey/', { data: { website: 'spam' } });
  expect(r.status()).toBe(400);
  r = await request.post('/api/site-survey/', {
    data: {},
    headers: { Origin: 'https://unrelated.test' },
  });
  expect(r.status()).toBe(403);
  r = await request.post('/api/site-survey/', {
    data: { name: 'Test', contact: 'Test', location: 'Test', requirement: 'Test' },
  });
  expect(await r.json()).toEqual({ ok: true, mode: 'mock', delivered: false });
});
test('sitemap, robots, redirects and 404', async ({ request }) => {
  const s = await request.get('/sitemap.xml');
  expect(s.status()).toBe(200);
  expect(await s.text()).toContain('https://aitscctv.com/en/solutions/cctv/');
  expect(await s.text()).not.toMatch(/technician|password-reset|logout/);
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Sitemap: https://aitscctv.com/sitemap.xml');
  const r = await request.get('/cctv-service/', { maxRedirects: 0 });
  expect(r.status()).toBe(301);
  expect(r.headers().location).toBe('/solutions/cctv/');
  expect((await request.get('/not-a-real-page/')).status()).toBe(404);
  expect((await request.get('/en/not-a-real-page/')).status()).toBe(404);
});
for (const path of pages)
  test(`accessibility and rendered content ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('main')).toBeVisible();
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
test('responsive layouts and requested screenshots', async ({ page }) => {
  test.setTimeout(120000);
  await fs.mkdir('reports/screenshots', { recursive: true });
  const cases = [
    ['home', '/'],
    ['cctv', '/solutions/cctv/'],
    ['project', '/projects/university-network/'],
    ['packages', '/solutions/cctv/packages/'],
    ['process', '/about/installation-process/'],
    ['faq', '/faq/'],
    ['testimonials', '/testimonials/'],
    ['projects', '/projects/'],
    ['about', '/about/'],
    ['contact', '/contact/'],
    ['survey', '/request-site-survey/'],
    ['home-en', '/en/'],
    ['cctv-en', '/en/solutions/cctv/'],
  ] as const;
  for (const width of [360, 390, 768, 1280, 1600]) {
    await page.setViewportSize({ width, height: width < 600 ? 844 : 1000 });
    for (const [name, path] of cases) {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1),
        `${width} ${path}`,
      ).toBe(true);
      if (width === 390 || width === 1600)
        await page.screenshot({ path: `reports/screenshots/${name}-${width}.png`, fullPage: true });
    }
    if (width === 390) {
      await page.goto('/');
      await page.getByRole('button', { name: 'เมนู' }).click();
      await page.screenshot({ path: 'reports/screenshots/menu-390.png', fullPage: true });
    }
  }
});
test('map makes no third-party request before consent and privacy has factual text', async ({
  page,
}) => {
  const outgoing: string[] = [];
  page.on('request', (r) => {
    if (!r.url().startsWith('http://127.0.0.1')) outgoing.push(r.url());
  });
  await page.goto('/en/contact/');
  await expect(page.getByRole('button', { name: 'Load Google Map' })).toBeVisible();
  await expect(page.locator('iframe')).toHaveCount(0);
  expect(outgoing).toEqual([]);
  await page.getByRole('link', { name: 'Privacy details' }).click();
  await expect(page.locator('main')).toContainText('does not email');
});

test('restored packages, downloads, FAQ and source search', async ({ page, request }) => {
  await page.goto('/solutions/cctv/packages/');
  await expect(page.locator('main')).toContainText('16,900');
  await expect(page.locator('main')).toContainText('2567');
  await page.goto('/faq/cctv/');
  await page.locator('main details').first().locator('summary').click();
  await expect(page.locator('main details').first()).toHaveAttribute('open', '');
  for (const file of ['standards.pdf', 'unv-th.pdf', 'unv-en.pdf']) {
    const res = await request.get('/downloads/' + file);
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('pdf');
  }
  await page.goto('/resources/library/');
  await page.getByRole('searchbox').fill('not-a-real-title-xyz');
  await expect(page.getByRole('status')).toContainText('0');
  await page.getByRole('searchbox').fill('');
  await expect(page.locator('.library-results li').first()).toBeVisible();
});

test('heading sequence and visible logo name match', async ({ page }) => {
  for (const route of ['/projects/', '/projects/cctv/', '/solutions/', '/industries/', '/en/']) {
    await page.goto(route);
    const a = await new AxeBuilder({ page })
      .withRules(['heading-order', 'label-content-name-mismatch'])
      .analyze();
    expect(a.violations).toEqual([]);
  }
});

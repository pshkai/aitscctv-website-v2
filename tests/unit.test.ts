import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateSurvey } from '../src/lib/form';
import { paths, href } from '../src/lib/site';
import { metadata } from '../src/lib/seo';
import redirects from '../redirect-map.json';
test('minimal request is sufficient, technical specifications are not required', () => {
  assert.deepEqual(
    validateSurvey({
      name: 'Test',
      contact: 'LINE test',
      location: 'Bangkok',
      requirement: 'Need advice',
    }),
    {},
  );
});
test('validation rejects missing, oversized and malformed fields', () => {
  assert.equal(Object.keys(validateSurvey({})).length, 4);
  assert.ok(
    validateSurvey({
      name: 'a'.repeat(101),
      contact: 'a',
      location: 'b',
      requirement: 'c',
      email: 'invalid',
    }).email,
  );
  assert.ok(validateSurvey({ name: 123 }).name);
});
test('language paths and metadata preserve the current topic', () => {
  for (const path of paths) {
    const th = metadata('th', path),
      en = metadata('en', path);
    assert.notEqual(th.title, en.title);
    assert.equal(th.alternates?.canonical, 'https://aitscctv.com' + href('th', path));
    assert.equal(en.alternates?.canonical, 'https://aitscctv.com' + href('en', path));
    assert.equal(en.alternates?.languages?.th, th.alternates?.canonical);
  }
});
test('every redirect is direct, unique, permanent and relevant', () => {
  const old = new Set(redirects.map((r) => new URL(r.oldUrl).pathname));
  assert.equal(old.size, redirects.length);
  for (const r of redirects) {
    assert.equal(r.status, 301);
    assert.ok(paths.includes(r.newDestination.replace(/^\/|\/$/g, '')));
    assert.ok(!old.has(r.newDestination));
    assert.notEqual(r.newDestination, '/');
  }
});
test('utility and legacy paths are excluded from the new sitemap model', () => {
  for (const required of [
    'solutions/cctv/packages',
    'solutions/cctv/rental',
    'faq/networking',
    'support/manuals',
    'testimonials',
  ])
    assert.ok(paths.includes(required));
  assert.equal(new Set(paths).size, paths.length);
  for (const p of paths)
    assert.doesNotMatch(p, /login|logout|account|password|technician|survey\//);
});

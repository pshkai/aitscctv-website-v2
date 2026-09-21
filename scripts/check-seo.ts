import { load } from 'cheerio';
import { paths, href, origin } from '../src/lib/site';
import redirects from '../redirect-map.json';
import fs from 'node:fs/promises';
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const failures: string[] = [];
const titles = new Set<string>(),
  descriptions = new Set<string>();
const all = new Set((['th', 'en'] as const).flatMap((l) => paths.map((p) => href(l, p))));
const redirs = new Set(redirects.map((r) => new URL(r.oldUrl).pathname));
const assets = new Set<string>();
for (const locale of ['th', 'en'] as const)
  for (const path of paths) {
    const route = href(locale, path),
      res = await fetch(base + route, { redirect: 'manual' }),
      html = await res.text(),
      $ = load(html);
    const check = (ok: boolean, message: string) => {
      if (!ok) failures.push(`${route}: ${message}`);
    };
    check(res.status === 200, 'status ' + res.status);
    check($('link[rel=canonical]').length === 1, 'canonical count');
    check($('link[rel=canonical]').attr('href') === origin + route, 'canonical destination');
    check($('meta[name=description]').length === 1, 'description count');
    check($('html').attr('lang') === locale, 'language');
    check($('h1').length === 1, 'H1 count');
    check(!$('meta[name=robots]').attr('content')?.includes('noindex'), 'noindex');
    for (const l of ['th', 'en'] as const)
      check($(`link[hreflang=${l}]`).attr('href') === origin + href(l, path), 'hreflang ' + l);
    const title = $('title').text(),
      desc = $('meta[name=description]').attr('content') || '';
    check(!!title && !titles.has(title), 'unique title');
    check(!!desc && !descriptions.has(desc), 'unique description');
    titles.add(title);
    descriptions.add(desc);
    check($('meta[property="og:title"]').length === 1, 'OG title');
    check($('script[type="application/ld+json"]').length === 1, 'one schema graph');
    $('a[href]').each((_, a) => {
      const link = $(a).attr('href')!;
      if (link.startsWith('/') && !link.startsWith('//')) {
        const target = new URL(link, base);
        check(!redirs.has(target.pathname), 'link to redirect ' + link);
        if (target.pathname.startsWith('/downloads/')) assets.add(target.pathname);
        else check(all.has(target.pathname), 'unknown internal link ' + link);
      }
    });
    $('img').each((_, img) => {
      check($(img).attr('alt') !== undefined, 'image alternative');
      const src = $(img).attr('src');
      if (src?.startsWith('/')) assets.add(src);
    });
  }
for (const asset of assets) {
  const r = await fetch(base + asset);
  if (r.status !== 200) failures.push('asset ' + asset + ' ' + r.status);
}
for (const r of redirects) {
  const response = await fetch(base + new URL(r.oldUrl).pathname, { redirect: 'manual' });
  if (response.status !== 301 || response.headers.get('location') !== r.newDestination)
    failures.push('redirect ' + r.oldUrl);
}
const sm = await (await fetch(base + '/sitemap.xml')).text(),
  $ = load(sm, { xmlMode: true });
const urls = $('url > loc')
  .map((_, x) => $(x).text())
  .get();
if (urls.length !== all.size) failures.push('sitemap count');
for (const url of urls) if (!all.has(url.replace(origin, ''))) failures.push('sitemap URL ' + url);
await fs.mkdir('reports', { recursive: true });
await fs.writeFile(
  'reports/seo.json',
  JSON.stringify(
    { pages: all.size, redirects: redirects.length, assets: assets.size, failures },
    null,
    2,
  ),
);
console.log(
  JSON.stringify(
    { pages: all.size, redirects: redirects.length, assets: assets.size, failures },
    null,
    2,
  ),
);
if (failures.length) process.exitCode = 1;

import type { Metadata } from 'next';
import type { Locale } from '@/content/model';
import { company, services, articles } from '@/content/data';
import { href, origin, pageInfo, labels } from './site';
export function metadata(locale: Locale, path: string): Metadata {
  const info = pageInfo[path];
  if (!info) return { title: '404 | AITS', robots: { index: false, follow: false } };
  const url = origin + href(locale, path);
  return {
    title: `${info.title[locale]} | AITS`,
    description: info.summary[locale],
    metadataBase: new URL(origin),
    alternates: {
      canonical: url,
      languages: {
        th: origin + href('th', path),
        en: origin + href('en', path),
        'x-default': origin + href('th', path),
      },
    },
    openGraph: {
      title: info.title[locale],
      description: info.summary[locale],
      url,
      siteName: 'AITS',
      locale: locale === 'th' ? 'th_TH' : 'en_US',
      alternateLocale: locale === 'th' ? 'en_US' : 'th_TH',
      type: 'website',
    },
    robots: { index: true, follow: true },
    icons: { icon: '/favicon.svg' },
  };
}
export function Schema({ locale, path }: { locale: Locale; path: string }) {
  const info = pageInfo[path],
    url = origin + href(locale, path);
  const organisation = {
    '@type': 'Organization',
    '@id': origin + '/#organisation',
    name: company.name[locale],
    url: origin,
    foundingDate: '2005',
    telephone: '+66-2-878-2951',
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        locale === 'th' ? '570 ถนนเจริญนคร แขวงบุคคโล' : '570 Charoen Nakhon Road, Bukkhalo',
      addressLocality: locale === 'th' ? 'ธนบุรี' : 'Thon Buri',
      addressRegion: locale === 'th' ? 'กรุงเทพฯ' : 'Bangkok',
      postalCode: '10600',
      addressCountry: 'TH',
    },
  };
  const crumbs = [
    { '@type': 'ListItem', position: 1, name: labels.home[locale], item: origin + href(locale) },
  ];
  const parts = path.split('/').filter(Boolean);
  parts.forEach((_, i) => {
    const p = parts.slice(0, i + 1).join('/');
    crumbs.push({
      '@type': 'ListItem',
      position: i + 2,
      name: pageInfo[p]?.title[locale] || p,
      item: origin + href(locale, p),
    });
  });
  const graph: object[] = [
    organisation,
    {
      '@type': 'WebSite',
      '@id': origin + '/#website',
      url: origin,
      name: 'AITS',
      inLanguage: ['th', 'en'],
      publisher: { '@id': origin + '/#organisation' },
    },
    {
      '@type': 'WebPage',
      '@id': url + '#page',
      url,
      name: info.title[locale],
      description: info.summary[locale],
      inLanguage: locale,
      isPartOf: { '@id': origin + '/#website' },
    },
    { '@type': 'BreadcrumbList', itemListElement: crumbs },
  ];
  const service =
    services.find((x) => path === 'solutions/' + x.slug) ||
    (path.startsWith('solutions/') ? info : undefined);
  if (service)
    graph.push({
      '@type': 'Service',
      name: service.title[locale],
      description: service.summary[locale],
      url,
      provider: { '@id': origin + '/#organisation' },
    });
  const article = articles.find((x) => path === 'resources/' + x.slug);
  if (article)
    graph.push({
      '@type': 'Article',
      headline: article.title[locale],
      description: article.summary[locale],
      inLanguage: locale,
      mainEntityOfPage: url,
      author: { '@id': origin + '/#organisation' },
    });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
          /</g,
          '\\u003c',
        ),
      }}
    />
  );
}

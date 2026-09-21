import type { MetadataRoute } from 'next';
import { paths, href, origin } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return (['th', 'en'] as const).flatMap((locale) =>
    paths.map((path) => ({
      url: origin + href(locale, path),
      alternates: { languages: { th: origin + href('th', path), en: origin + href('en', path) } },
    })),
  );
}

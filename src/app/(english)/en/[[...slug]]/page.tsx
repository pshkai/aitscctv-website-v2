import { SitePage } from '@/components/site-page';
import { paths } from '@/lib/site';
import { metadata } from '@/lib/seo';
type Props = { params: Promise<{ slug?: string[] }> };
export function generateStaticParams() {
  return paths.map((path) => ({ slug: path ? path.split('/') : [] }));
}
export async function generateMetadata({ params }: Props) {
  return metadata('en', (await params).slug?.join('/') || '');
}
export default async function Page({ params }: Props) {
  return <SitePage locale="en" path={(await params).slug?.join('/') || ''} />;
}

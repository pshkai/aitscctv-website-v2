import type { ReactNode } from 'react';
import { RootLayout } from '@/components/root-layout';
export default function Layout({ children }: { children: ReactNode }) {
  return <RootLayout locale="th">{children}</RootLayout>;
}

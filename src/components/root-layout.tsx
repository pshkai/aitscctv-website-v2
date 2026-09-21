import type { ReactNode } from 'react';
import type { Locale } from '@/content/model';
import { Header } from './header';
import { Footer } from './ui';
import { Analytics } from './analytics';
import '@/app/globals.css';
export function RootLayout({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html lang={locale} data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.dataset.theme=localStorage.getItem('aits-theme')==='light'?'light':'dark'}catch{}",
          }}
        />
        {locale === 'th' && (
          <link
            rel="preload"
            href="/NotoSansThai.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body>
        <a className="skip-link" href="#main">
          {locale === 'th' ? 'ข้ามไปเนื้อหา' : 'Skip to content'}
        </a>
        <Header locale={locale} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer locale={locale} />
        <Analytics />
      </body>
    </html>
  );
}

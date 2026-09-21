'use client';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';
import type { Locale } from '@/content/model';
import { href, labels, navigation } from '@/lib/site';
export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false),
    button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const path = pathname.replace(/^\/en(?=\/|$)/, '').replace(/^\/|\/$/g, '');
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setOpen(false);
          button.current?.focus();
        }
      }}
    >
      <div className="header-inner">
        <Link
          className="brand"
          href={href(locale)}
          aria-label={`AITS ${locale === 'th' ? 'ระบบความปลอดภัยและเครือข่าย' : 'SECURITY & NETWORKS'} — ${labels.home[locale]}`}
        >
          <Image
            className="official-logo"
            src="/brand/aits.webp"
            alt="AITS"
            width={120}
            height={52}
            priority
          />
          <small>{locale === 'th' ? 'ระบบความปลอดภัยและเครือข่าย' : 'SECURITY & NETWORKS'}</small>
        </Link>
        <nav className="desktop-nav" aria-label={locale === 'th' ? 'เมนูหลัก' : 'Main navigation'}>
          {navigation.map((key) => (
            <Link
              key={key}
              href={href(locale, key)}
              aria-current={path === key || path.startsWith(key + '/') ? 'page' : undefined}
            >
              {labels[key][locale]}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle locale={locale} />
          <Link
            className="language"
            href={href(locale === 'th' ? 'en' : 'th', path)}
            lang={locale === 'th' ? 'en' : 'th'}
            aria-label={locale === 'th' ? 'Read this page in English' : 'อ่านหน้านี้เป็นภาษาไทย'}
          >
            {locale === 'th' ? 'EN' : 'ไทย'}
          </Link>
          <Link className="button header-cta" href={href(locale, 'request-site-survey')}>
            {labels.survey[locale]}
          </Link>
          <button
            ref={button}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? (locale === 'th' ? 'ปิด' : 'Close') : locale === 'th' ? 'เมนู' : 'Menu'}{' '}
            <span aria-hidden="true">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        hidden={!open}
        aria-label={locale === 'th' ? 'เมนูมือถือ' : 'Mobile navigation'}
      >
        <Link href={href(locale)} onClick={() => setOpen(false)}>
          {labels.home[locale]}
        </Link>
        {navigation.map((key) => (
          <Link key={key} href={href(locale, key)} onClick={() => setOpen(false)}>
            {labels[key][locale]}
          </Link>
        ))}
        <Link href={href(locale, 'support')} onClick={() => setOpen(false)}>
          {labels.support[locale]}
        </Link>
        <Link
          className="button"
          href={href(locale, 'request-site-survey')}
          onClick={() => setOpen(false)}
        >
          {labels.survey[locale]}
        </Link>
      </nav>
    </header>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import type { Locale, FAQ, Section as SectionType, Project } from '@/content/model';
import { href, labels, pageInfo, navigation } from '@/lib/site';
import { process, company } from '@/content/data';
export const Arrow = () => <span aria-hidden="true">↗</span>;
export function Button({
  locale,
  path = 'request-site-survey',
  children,
  secondary = false,
}: {
  locale: Locale;
  path?: string;
  children?: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={`button${secondary ? ' secondary' : ''}`} href={href(locale, path)}>
      {children || labels.survey[locale]}
      <Arrow />
    </Link>
  );
}
export function Section({
  children,
  id,
  tone = '',
  className = '',
}: {
  children: ReactNode;
  id?: string;
  tone?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`section ${tone} ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="lead">{description}</p>}
    </div>
  );
}
export function Breadcrumbs({ locale, path }: { locale: Locale; path: string }) {
  const parts = path.split('/');
  return (
    <nav className="breadcrumbs" aria-label={locale === 'th' ? 'เส้นทางหน้า' : 'Breadcrumb'}>
      <ol>
        <li>
          <Link href={href(locale)}>{labels.home[locale]}</Link>
        </li>
        {parts.map((_, i) => {
          const p = parts.slice(0, i + 1).join('/');
          return (
            <li key={p}>
              {i === parts.length - 1 ? (
                <span aria-current="page">{pageInfo[p]?.title[locale]}</span>
              ) : (
                <Link href={href(locale, p)}>{pageInfo[p]?.title[locale]}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
export function PageHero({
  locale,
  path,
  children,
}: {
  locale: Locale;
  path: string;
  children?: ReactNode;
}) {
  const info = pageInfo[path];
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs locale={locale} path={path} />
        <div className="page-hero-content">
          <p className="eyebrow">AITS / {path.split('/')[0].toUpperCase()}</p>
          <h1>{info.title[locale]}</h1>
          <p className="lead">{info.summary[locale]}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
export function TextSections({ locale, sections }: { locale: Locale; sections: SectionType[] }) {
  return (
    <div className="text-sections">
      {sections.map((s, i) => (
        <section key={i}>
          <h2>{s.title[locale]}</h2>
          <p>{s.body[locale]}</p>
        </section>
      ))}
    </div>
  );
}
export function FAQBlock({ locale, items }: { locale: Locale; items: FAQ[] }) {
  return (
    <div className="faq-list">
      {items.map((q, i) => (
        <details key={i}>
          <summary>
            {q.question[locale]}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{q.answer[locale]}</p>
        </details>
      ))}
    </div>
  );
}
export function Process({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  return (
    <ol className={`process-grid${compact ? ' compact' : ''}`}>
      {process.map((p, i) => (
        <li key={i}>
          <span className="step-number">0{i + 1}</span>
          <h3>{p.title[locale]}</h3>
          <p>{p.body[locale]}</p>
        </li>
      ))}
    </ol>
  );
}
export const projectImage = (p: Project) =>
  p.slug === 'cctv-upgrade'
    ? 'cctv-work'
    : p.slug === 'industrial-access'
      ? 'access-detail'
      : 'university-cabling';
export function ProjectCard({ locale, project: p }: { locale: Locale; project: Project }) {
  return (
    <article className="project-card">
      <Link href={href(locale, 'projects/' + p.slug)}>
        <div className="project-image">
          <Image
            src={`/images/${projectImage(p)}.webp`}
            alt={
              p.slug === 'industrial-access'
                ? locale === 'th'
                  ? 'ชุดแม่เหล็กล็อกประตูในโครงการ AITS'
                  : 'Magnetic door lock in an AITS installation'
                : p.alt[locale]
            }
            fill
            sizes="(max-width: 700px) 92vw, (max-width: 1000px) 46vw, 30vw"
          />
        </div>
        <div className="project-card-body">
          <p className="eyebrow">{p.environment[locale]}</p>
          <h3>
            {p.title[locale]} <Arrow />
          </h3>
          <p>{p.summary[locale]}</p>
        </div>
      </Link>
    </article>
  );
}
export function FinalCTA({ locale }: { locale: Locale }) {
  return (
    <Section tone="dark">
      <div className="cta-row">
        <div>
          <p className="eyebrow">
            {locale === 'th' ? 'เริ่มจากความต้องการของคุณ' : 'START WITH YOUR REQUIREMENT'}
          </p>
          <h2>
            {locale === 'th'
              ? 'มีพื้นที่ มีโจทย์ เริ่มคุยกันได้'
              : 'A site. A challenge. A place to start.'}
          </h2>
          <p>
            {locale === 'th'
              ? 'ไม่ต้องเลือกอุปกรณ์ก่อน บอกปัญหาและที่ตั้งเพื่อหารือแนวทางที่เหมาะสม'
              : 'You do not need a specification yet. Share the problem and location to discuss an appropriate approach.'}
          </p>
        </div>
        <Button locale={locale} />
      </div>
    </Section>
  );
}
export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" href={href(locale)}>
              <Image
                className="official-logo"
                src="/brand/aits.webp"
                alt="AITS"
                width={120}
                height={52}
              />
            </Link>
            <p>{company.name[locale]}</p>
            <address>{company.address[locale]}</address>
          </div>
          <div>
            <h2>{locale === 'th' ? 'สำรวจ AITS' : 'Explore AITS'}</h2>
            {navigation.slice(0, 5).map((k) => (
              <Link key={k} href={href(locale, k)}>
                {labels[k][locale]}
              </Link>
            ))}
          </div>
          <div>
            <h2>{locale === 'th' ? 'ติดต่อและดูแลระบบ' : 'Contact & system care'}</h2>
            <a href="tel:+6628782951" data-event="phone_click">
              02 878 2951 {locale === 'th' ? 'ต่อ' : 'ext.'} 100
            </a>
            <a href="tel:+66944606196" data-event="phone_click">
              094 460 6196
            </a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <Link href={href(locale, 'support')}>{labels.support[locale]}</Link>
            <Link href={href(locale, 'contact')}>{labels.contact[locale]}</Link>
          </div>
        </div>
        <nav
          className="footer-sitemap"
          aria-label={locale === 'th' ? 'แผนผังเว็บไซต์เพิ่มเติม' : 'More site destinations'}
        >
          {[
            'pricing',
            'faq',
            'customers',
            'testimonials',
            'about/installation-process',
            'about/installation-standards',
            'support/manuals',
            'support/warranty',
            'resources/library',
            'resources/videos',
            'solutions/security',
            'solutions/building-services',
          ].map((p) => (
            <Link key={p} href={href(locale, p)}>
              {pageInfo[p].title[locale]}
            </Link>
          ))}
        </nav>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} A.I.T.S. Company Limited</p>
          <Link href={href(locale, 'privacy')}>{labels.privacy[locale]}</Link>
          <Link href={href(locale, 'about/installation-standards')}>
            {labels.standards[locale]}
          </Link>
        </div>
      </div>
    </footer>
  );
}

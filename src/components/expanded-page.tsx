import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/content/model';
import { services, projects, commonFAQ, bi } from '@/content/data';
import { details, specialPages, hubChildren, faqCategories } from '@/content/expanded';
import { href, pageInfo } from '@/lib/site';
import {
  Button,
  Section,
  SectionHeading,
  PageHero,
  TextSections,
  Process,
  ProjectCard,
  FinalCTA,
  FAQBlock,
} from './ui';
import { SourceLibrary } from './source-library';
import faqData from '@/content/source-faq.json';

const say = (l: Locale, th: string, en: string) => (l === 'th' ? th : en);
export function TopicLinks({ locale, paths }: { locale: Locale; paths: string[] }) {
  return (
    <div className="topic-links">
      {paths.map((p) => (
        <Link key={p} href={href(locale, p)}>
          <strong>{pageInfo[p].title[locale]}</strong>
          <span>{pageInfo[p].summary[locale]}</span>
          <b aria-hidden="true">↗</b>
        </Link>
      ))}
    </div>
  );
}
export function PackageTable({
  locale,
  historical = false,
}: {
  locale: Locale;
  historical?: boolean;
}) {
  return (
    <div
      className="table-scroll"
      tabIndex={0}
      role="region"
      aria-label={say(locale, 'ตารางราคาแพ็กเกจ', 'Package price table')}
    >
      <table className="comparison">
        <caption>
          {historical
            ? say(
                locale,
                'IP — โปรโมชั่นปี 2567 (2024) อ้างอิงเท่านั้น',
                'IP — 2024 promotion, historical reference',
              )
            : say(
                locale,
                'Dahua Analog HD 2 MP — ราคาที่เว็บไซต์เดิมเผยแพร่ ต้องยืนยันราคาปัจจุบัน',
                'Dahua Analog HD 2 MP — published prices; confirm current availability',
              )}
        </caption>
        <thead>
          <tr>
            <th scope="col">{say(locale, 'จำนวนกล้อง', 'Cameras')}</th>
            <th scope="col">{say(locale, 'ราคาชุด', 'Package')}</th>
            <th scope="col">{say(locale, 'ราคาปกติที่ระบุ', 'Listed regular price')}</th>
            <th scope="col">{say(locale, 'พื้นที่ตัวอย่าง', 'Example use')}</th>
          </tr>
        </thead>
        <tbody>
          {[4, 8, 16].map((n, i) => (
            <tr key={n}>
              <th scope="row">
                {n} {say(locale, 'ตัว', 'cameras')}
              </th>
              <td className="price">
                ฿
                {(historical ? [18900, 38900, 85900] : [16900, 30900, 64900])[i].toLocaleString(
                  'en-US',
                )}
              </td>
              <td>
                ฿
                {(historical ? [29900, 49350, 98900] : [19900, 39900, 69900])[i].toLocaleString(
                  'en-US',
                )}
              </td>
              <td>
                {
                  [
                    say(locale, 'บ้าน / ร้านขนาดเล็ก', 'Home / small shop'),
                    say(locale, 'หลายชั้น / ร้านค้า', 'Multiple floors / shop'),
                    say(locale, 'พื้นที่ใหญ่ / หลายทางเข้า', 'Larger site / multiple entrances'),
                  ][i]
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Prices({ locale }: { locale: Locale }) {
  return (
    <>
      <Section>
        <PackageTable locale={locale} />
        <p className="source-note">
          {say(
            locale,
            'รวมกล้องตามจำนวน เครื่องบันทึก HDD 1 TB และสาย RG6 ตามชุด เดินสายไม่เกิน 25 เมตรต่อจุด ราคายังไม่รวม VAT ยืนยันรุ่น งานท่อ ระยะสายเกิน และค่าใช้จ่ายหน้างานในใบเสนอราคา',
            'Published sets include the stated camera count, recorder, 1 TB HDD and RG6 cabling, with up to 25 metres per point. Prices exclude VAT. Confirm models, containment, extra cable and site costs in the quotation.',
          )}
        </p>
      </Section>
      <Section tone="soft">
        <SectionHeading
          title={say(locale, 'เลือกจำนวนจากจุดที่ต้องเห็น', 'Choose by the views you need')}
        />
        <div className="three-grid">
          {[4, 8, 16].map((n, i) => (
            <div key={n}>
              <h3>
                {n} {say(locale, 'ตัว', 'cameras')}
              </h3>
              <p>
                {
                  [
                    say(
                      locale,
                      'ทางเข้า หน้าบ้าน ด้านข้าง และพื้นที่สำคัญ เริ่มจากแผนผังเพื่อไม่ให้กล้องซ้ำมุมกัน',
                      'Plan entrances, frontage, sides and important areas without duplicating views.',
                    ),
                    say(
                      locale,
                      'เพิ่มความครอบคลุมหลายชั้นและหน้าร้าน ตรวจจุดอับและระยะเดินสายจริง',
                      'Cover multiple floors or shop areas, checking blind spots and actual cable runs.',
                    ),
                    say(
                      locale,
                      'แยกโซนทางเข้า ที่จอดรถ จุดรับเงิน และพื้นที่ทำงาน ตรวจช่องบันทึกและพื้นที่เก็บภาพ',
                      'Separate entrances, parking, payment and work zones, checking recorder channels and storage.',
                    ),
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <PackageTable locale={locale} historical />
        <p className="source-note">
          {say(
            locale,
            'ชุด IP ข้างต้นเป็นโปรโมชั่นปี 2567 ไม่ใช่ข้อเสนอปัจจุบัน แหล่งเดิมระบุ HDD 1 TB สายไม่เกิน 25 เมตรต่อจุด และราคาไม่รวม VAT',
            'The IP table is a 2024 promotion, not a current offer. The source lists a 1 TB HDD, up to 25 metres of cable per point and VAT excluded.',
          )}
        </p>
      </Section>
      <Section tone="soft">
        <h2>{say(locale, 'รับประกันและข้อมูลก่อนขอราคา', 'Warranty and quotation preparation')}</h2>
        <p>
          {say(
            locale,
            'หน้าชุด Analog ระบุรับประกันสินค้า 3 ปี บริการ 1 ปี ส่วนหน้า CCTV หลักระบุสินค้า 2 ปี บริการ 1 ปี ตรวจเงื่อนไขของรุ่นและงานจริงก่อนสั่งซื้อ เตรียมผังพื้นที่ จำนวนจุด และจำนวนวันที่ต้องการดูย้อนหลัง',
            'Analog package pages list three-year product and one-year service cover; the CCTV overview lists two-year product and one-year service cover. Confirm selected-model and job terms before ordering. Prepare a site plan, camera count and required retention.',
          )}
        </p>
        <TopicLinks
          locale={locale}
          paths={[
            'support/warranty',
            'solutions/cctv/installation',
            'solutions/cctv/rental',
            'faq/cctv',
          ]}
        />
      </Section>
      <Sources
        urls={[
          'https://aitscctv.com/cctv-camera-service/four-cctv-camera/',
          'https://aitscctv.com/cctv-camera-service/eight-cctv-camera/',
          'https://aitscctv.com/cctv-camera-service/sixteen-cctv-camera/',
          'https://aitscctv.com/cctv-camera-service/',
        ]}
        locale={locale}
      />
    </>
  );
}
function Sources({ urls, locale }: { urls: string[]; locale: Locale }) {
  return (
    <div className="container source-note">
      <details>
        <summary>{say(locale, 'แหล่งข้อมูลเดิม', 'Original sources')}</summary>
        <ul>
          {urls.map((u, i) => (
            <li key={u}>
              <a href={u}>
                {say(locale, 'อ่านต้นฉบับ', 'Read original')} {i + 1}:{' '}
                {decodeURI(new URL(u).pathname)}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
const customers = [
  ['2-btu-logo-white', 'มหาวิทยาลัยกรุงเทพธนบุรี', 'Bangkokthonburi University'],
  ['3-bts-logo-white-1', 'โรงเรียนสาธิตกรุงเทพธนบุรี', 'Bangkokthonburi Demonstration School'],
  ['4-ptt-logo-white-1', 'ตราองค์กรจากเว็บไซต์เดิม', 'Organisation emblem from the original site'],
  [
    '5-ptt-logo-white-1',
    'มหาวิทยาลัยเทคโนโลยีราชมงคล',
    'Rajamangala University of Technology emblem',
  ],
  ['6-ptt-logo-white-1', 'อึ้งเพ้ง', 'Customer logo: Ung Peng'],
  ['7-ptt-logo-white-1', 'โรงพยาบาลสัตว์ DPF', 'DPF veterinary hospital emblem'],
  ['7-star-logo-white-1', 'Seven Stars Pharmaceutical', 'Seven Stars Pharmaceutical'],
];
function CustomerLogos({ locale }: { locale: Locale }) {
  return (
    <div className="customer-logos">
      {customers.map(([file, th, en]) => (
        <figure key={file}>
          <Image
            src={'/customers/' + file + '.webp'}
            width={180}
            height={101}
            alt={locale === 'th' ? th : en}
          />
          <figcaption>{locale === 'th' ? th : en}</figcaption>
        </figure>
      ))}
    </div>
  );
}
export function NewHome({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              AITS /{' '}
              {say(locale, 'ออกแบบและติดตั้ง ตั้งแต่ปี 2548', 'DESIGN & INSTALLATION SINCE 2005')}
            </p>
            <h1>
              {say(locale, 'ระบบความปลอดภัย และเครือข่าย', 'Security & networks.')}
              <br />
              <span>{say(locale, 'เริ่มจากหน้างานจริง', 'Built around your site.')}</span>
            </h1>
            <p className="hero-intro">
              {say(
                locale,
                'กล้องวงจรปิด ระบบเข้าออก เครือข่าย และระบบอัจฉริยะ ตั้งแต่สำรวจ วางแผน ติดตั้ง จนถึงดูแลหลังส่งมอบ',
                'CCTV, access control, networks and intelligent systems. From site assessment and installation to handover and ongoing care.',
              )}
            </p>
            <div className="button-row">
              <Button locale={locale} />
              <Button locale={locale} path="pricing" secondary>
                {say(locale, 'ดูราคาและแพ็กเกจ', 'View prices & packages')}
              </Button>
            </div>
          </div>
          <div className="compact-hero-image">
            <Image
              src="/images/cctv-work.webp"
              alt={say(
                locale,
                'งานติดตั้งกล้องและสายสัญญาณของ AITS',
                'AITS camera and cabling installation',
              )}
              fill
              sizes="(max-width: 800px) 92vw, 45vw"
              priority
            />
            <span>{say(locale, 'ภาพจากงานติดตั้ง AITS', 'FROM AN AITS INSTALLATION')}</span>
          </div>
        </div>
      </section>
      <Section>
        <SectionHeading
          eyebrow="01 / SOLUTIONS"
          title={say(locale, 'เลือกทางไปตามระบบที่ต้องการ', 'Find the system you need')}
        />
        <TopicLinks locale={locale} paths={services.map((s) => 'solutions/' + s.slug)} />
        <p className="source-note">
          <Link href={href(locale, 'solutions/security')}>
            {say(locale, 'ระบบกันขโมยและแจ้งเหตุเพลิงไหม้', 'Intrusion & fire detection')} ↗
          </Link>{' '}
          ·{' '}
          <Link href={href(locale, 'industries')}>
            {say(locale, 'เลือกตามพื้นที่ใช้งาน', 'Explore by environment')} ↗
          </Link>
        </p>
      </Section>
      <Section tone="soft">
        <SectionHeading
          eyebrow="02 / PACKAGES"
          title={say(
            locale,
            'เริ่มเทียบงบได้จากชุดที่เผยแพร่',
            'A concrete starting point for your budget',
          )}
        />
        <div className="package-strip">
          {[4, 8, 16].map((n, i) => (
            <Link key={n} href={href(locale, 'solutions/cctv/packages')}>
              <span>
                Dahua Analog HD · {n} {say(locale, 'ตัว', 'cameras')}
              </span>
              <strong>฿{[16900, 30900, 64900][i].toLocaleString('en-US')}</strong>
              <span>
                {say(locale, 'HDD 1 TB · ดูอุปกรณ์และเงื่อนไข', '1 TB HDD · See equipment & terms')}{' '}
                ↗
              </span>
            </Link>
          ))}
        </div>
        <p className="source-note">
          {say(
            locale,
            'ราคาที่เว็บไซต์เดิมเผยแพร่ ไม่รวม VAT ต้องยืนยันราคาปัจจุบันและขอบเขตหน้างาน',
            'Published source prices, excluding VAT. Confirm current pricing and site-specific scope.',
          )}
        </p>
      </Section>
      <Section>
        <div className="split">
          <SectionHeading
            eyebrow="03 / HOW WE WORK"
            title={say(locale, 'งานที่ดี ต้องดูแลต่อได้', 'Built to be understood and maintained')}
          />
          <p>
            {say(
              locale,
              'วางเส้นทางสายให้ชัด จัดอุปกรณ์ให้ตรวจสอบได้ และทดสอบการใช้งานจริงก่อนส่งมอบ รายละเอียดงานท่อ ตู้ Rack และไฟเบอร์มีให้อ่านในมาตรฐานการติดตั้ง',
              'Clear cable routes, accessible equipment and functional checks before handover. Read the workmanship guide for conduit, rack and fibre details.',
            )}
          </p>
        </div>
        <Process locale={locale} compact />
        <div className="inline-links">
          <Link href={href(locale, 'about/installation-process')}>
            {say(locale, 'ขั้นตอนทำงาน', 'Installation process')} ↗
          </Link>
          <Link href={href(locale, 'about/installation-standards')}>
            {say(locale, 'มาตรฐานงานติดตั้ง', 'Workmanship standards')} ↗
          </Link>
        </div>
      </Section>
      <Section tone="soft">
        <SectionHeading
          eyebrow="04 / PROJECTS"
          title={say(locale, 'ดูวิธีทำงานจากโครงการจริง', 'See the work in real installations')}
        />
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} locale={locale} />
          ))}
        </div>
        <Link className="text-link" href={href(locale, 'projects')}>
          {say(locale, 'ผลงานแยกตามระบบ', 'Browse projects by system')} ↗
        </Link>
      </Section>
      <Section tone="dark">
        <SectionHeading
          eyebrow="05 / CUSTOMERS"
          title={say(locale, 'องค์กรที่ปรากฏบนเว็บไซต์ AITS', 'Organisations featured by AITS')}
        />
        <CustomerLogos locale={locale} />
        <div className="inline-links">
          <Link href={href(locale, 'customers')}>
            {say(locale, 'ลูกค้าและที่มา', 'Customers & sources')} ↗
          </Link>
          <Link href={href(locale, 'testimonials')}>
            {say(locale, 'รีวิวและหลักฐาน', 'Reviews & evidence')} ↗
          </Link>
        </div>
      </Section>
      <Section>
        <SectionHeading
          eyebrow="06 / HELP & RESOURCES"
          title={say(
            locale,
            'ข้อมูลที่ใช้ได้ทั้งก่อนและหลังติดตั้ง',
            'Useful before and after installation',
          )}
        />
        <TopicLinks locale={locale} paths={['resources', 'support/manuals', 'support']} />
      </Section>
      <Section tone="soft">
        <div className="split">
          <SectionHeading
            title={say(locale, 'ก่อนเริ่มงาน คุณอาจอยากรู้', 'Before you get started')}
          />
          <FAQBlock
            locale={locale}
            items={[
              ...commonFAQ,
              {
                question: bi('มีแพ็กเกจกล้องกี่ตัวบ้าง', 'Which camera packages are listed?'),
                answer: bi(
                  'มีชุด 4, 8 และ 16 ตัว ดูราคา อุปกรณ์ ระยะสาย และเงื่อนไขที่หน้าแพ็กเกจ ต้องยืนยันราคาปัจจุบันก่อนสั่งซื้อ',
                  'Published sets contain 4, 8 or 16 cameras. The package page lists prices, equipment, cabling and terms; confirm current pricing before ordering.',
                ),
              },
              {
                question: bi(
                  'มีบริการเช่ากล้องสำหรับงานชั่วคราวไหม',
                  'Are cameras available for temporary sites?',
                ),
                answer: bi(
                  'เว็บไซต์เดิมมีบริการเช่าสำหรับอีเวนต์ นิทรรศการ คอนเสิร์ต และไซต์ก่อสร้าง แจ้งระยะเวลาและจำนวนจุดเพื่อประเมินงานติดตั้งและรื้อถอน',
                  'The original service covers events, exhibitions, concerts and construction sites. Share dates and camera counts to scope setup and removal.',
                ),
              },
            ]}
          />
        </div>
        <Link className="text-link" href={href(locale, 'faq')}>
          {say(locale, 'คำถามทั้งหมด แยกตามระบบ', 'All questions, organised by system')} ↗
        </Link>
      </Section>
      <FinalCTA locale={locale} />
    </>
  );
}
export function hasExpanded(path: string) {
  return (
    !!specialPages[path] ||
    details.some((d) => d.path === path) ||
    path === 'about/installation-standards' ||
    services.some((s) => path === 'solutions/' + s.slug)
  );
}
export function ExpandedPage({ locale, path }: { locale: Locale; path: string }) {
  const d = details.find((x) => x.path === path),
    s = services.find((x) => path === 'solutions/' + x.slug);
  let body;
  if (d)
    body = (
      <>
        <Section>
          <div className="article-layout">
            <TextSections locale={locale} sections={d.sections} />
            <aside className="scope-panel">
              <h2>{say(locale, 'เตรียมคุยเรื่องหน้างาน', 'Discuss your site')}</h2>
              <p>
                {say(
                  locale,
                  'แจ้งที่ตั้ง ขอบเขตที่ต้องการ และระบบเดิม เพื่อประเมินอุปกรณ์และงานติดตั้งร่วมกัน',
                  'Share the location, intended scope and existing system to assess equipment and installation together.',
                )}
              </p>
              <Button locale={locale} />
            </aside>
          </div>
        </Section>
        {d.path === 'about/installation-process' && (
          <Section tone="soft">
            <Process locale={locale} />
          </Section>
        )}
        <Section tone="soft">
          <SectionHeading title={say(locale, 'ข้อมูลที่เกี่ยวข้อง', 'Continue planning')} />
          <TopicLinks
            locale={locale}
            paths={d.related.length ? d.related : ['pricing', 'contact']}
          />
        </Section>
        <Sources locale={locale} urls={d.sources} />
      </>
    );
  else if (s)
    body = (
      <>
        <Section>
          <SectionHeading
            title={say(
              locale,
              'เลือกบริการและข้อมูลที่ต้องการ',
              'Choose a service or planning topic',
            )}
          />
          <TopicLinks locale={locale} paths={hubChildren[s.slug]} />
        </Section>
        <Section tone="soft">
          <div className="article-layout">
            <TextSections locale={locale} sections={s.sections} />
            <aside className="scope-panel">
              <h2>{say(locale, 'ขอบเขตบริการ', 'Service scope')}</h2>
              <ul>
                {s.scope.map((x, i) => (
                  <li key={i}>{x[locale]}</li>
                ))}
              </ul>
            </aside>
          </div>
        </Section>
        {s.slug === 'cctv' && (
          <Section>
            <PackageTable locale={locale} />
            <Link className="text-link" href={href(locale, 'solutions/cctv/packages')}>
              {say(locale, 'ดูอุปกรณ์ที่รวมและเงื่อนไขราคา', 'View inclusions and pricing terms')} ↗
            </Link>
          </Section>
        )}
        <Section>
          <SectionHeading
            title={say(locale, 'สิ่งที่ต้องพิจารณาก่อนเริ่ม', 'What to consider before starting')}
          />
          <div className="three-grid">
            {s.considerations.map((c, i) => (
              <p key={i}>{c[locale]}</p>
            ))}
          </div>
        </Section>
        {s.projects.length > 0 && (
          <Section tone="soft">
            <SectionHeading
              title={say(locale, 'งานติดตั้งที่เกี่ยวข้อง', 'Related installations')}
            />
            <div className="project-grid">
              {projects
                .filter((p) => s.projects.includes(p.slug))
                .map((p) => (
                  <ProjectCard key={p.slug} project={p} locale={locale} />
                ))}
            </div>
          </Section>
        )}
        <Section>
          <FAQBlock locale={locale} items={s.faq.slice(0, 3)} />
          <TopicLinks
            locale={locale}
            paths={['about/installation-process', 'pricing', 'support/warranty']}
          />
        </Section>
      </>
    );
  else if (path === 'solutions/cctv/packages') body = <Prices locale={locale} />;
  else if (path === 'solutions/cctv/rental')
    body = (
      <>
        <Section>
          <div className="split">
            <div>
              <h2>
                {say(locale, 'ระบบชั่วคราวตามระยะใช้งาน', 'A system for your project duration')}
              </h2>
              <p>
                {say(
                  locale,
                  'สำหรับงานอีเวนต์ นิทรรศการ คอนเสิร์ต และไซต์ก่อสร้าง กำหนดจำนวนจุด วันติดตั้ง วันใช้งาน วันรื้อถอน และผู้ดูแลภาพก่อนเสนอราคา สัญญารายเดือนหรือรายปีต้องประเมินแยก',
                  'For events, exhibitions, concerts and construction. Agree views, setup, operating and removal dates and who monitors footage. Monthly and annual contracts require a separate quotation.',
                )}
              </p>
            </div>
            <div>
              <h2>{say(locale, 'อุปกรณ์ตามชุดที่เผยแพร่', 'Published equipment scope')}</h2>
              <p>
                {say(
                  locale,
                  'กล้องตามจำนวน เครื่องบันทึก 1 เครื่อง จอแสดงผล 1 ชุด UPS 1 ชุด และตู้ Rack เคลื่อนที่ 1 ชุด ต้นฉบับกล่าวถึงกล้อง 2–5 MP ให้ยืนยันรุ่นและจำนวนอุปกรณ์จริงตามสัญญา',
                  'Camera set, one recorder, one display, one UPS and one mobile rack. The source mentions 2–5 MP cameras; confirm actual models and quantities in the contract.',
                )}
              </p>
            </div>
          </div>
        </Section>
        <Section tone="soft">
          <div className="table-scroll">
            <table className="comparison">
              <caption>
                {say(
                  locale,
                  'ราคาอ้างอิงปี 2566 (2023) — ไม่ใช่ข้อเสนอปัจจุบัน',
                  '2023 historical rates — not a current offer',
                )}
              </caption>
              <thead>
                <tr>
                  <th>{say(locale, 'กล้อง', 'Cameras')}</th>
                  <th>{say(locale, 'ต่อวัน', 'Per day')}</th>
                  <th>{say(locale, 'ค่าใช้จ่ายเพิ่มเติม', 'Additional charges')}</th>
                </tr>
              </thead>
              <tbody>
                {[4, 8, 16].map((n, i) => (
                  <tr key={n}>
                    <th scope="row">{n}</th>
                    <td className="price">฿{[3500, 5500, 7500][i].toLocaleString('en-US')}</td>
                    <td>
                      {say(locale, 'ไม่รวมติดตั้งและรื้อถอน', 'Installation and removal excluded')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
        <Section>
          <h2>{say(locale, 'ติดตั้ง ดูแล และคืนอุปกรณ์', 'Setup, support and return')}</h2>
          <p>
            {say(
              locale,
              'วางจุดกล้องและเส้นทางสายให้สัมพันธ์กับพื้นที่ชั่วคราว ทดสอบก่อนเปิดงาน ตกลงการดูแลระหว่างสัญญาและการเก็บภาพเมื่อจบงาน ไม่ระบุเวลาตอบรับตายตัวแทน SLA ที่ต้องตกลงจริง',
              'Plan views and routes around temporary site conditions, test before opening and agree support and recording handling at the end. Response arrangements must be set in the actual service agreement.',
            )}
          </p>
          <TopicLinks locale={locale} paths={['faq/cctv', 'solutions/cctv/packages', 'support']} />
        </Section>
        <Sources locale={locale} urls={['https://aitscctv.com/cctv-rental-service/']} />
      </>
    );
  else if (path === 'pricing')
    body = (
      <>
        <Section>
          <TopicLinks
            locale={locale}
            paths={['solutions/cctv/packages', 'solutions/cctv/rental']}
          />
        </Section>
        <Section tone="soft">
          <PackageTable locale={locale} />
          <p className="source-note">
            {say(
              locale,
              'ราคาเผยแพร่เดิม ไม่รวม VAT ยืนยันราคาปัจจุบันและขอบเขตก่อนสั่งซื้อ',
              'Previously published prices, excluding VAT. Confirm current pricing and scope before ordering.',
            )}
          </p>
        </Section>
        <Section>
          <h2>
            {say(locale, 'ระบบอื่นประเมินจากหน้างาน', 'Other systems are scoped around the site')}
          </h2>
          <p>
            {say(
              locale,
              'จำนวนประตู ระยะสาย จำนวนผู้ใช้ สภาพพื้นที่ อุปกรณ์เดิม และข้อจำกัดเวลาทำงานมีผลต่อราคา ดูรายละเอียดบริการและคำถามราคาเดิมในแต่ละหมวดก่อนขอใบเสนอราคา',
              'Doors, cable lengths, user numbers, conditions, existing equipment and working-hour restrictions affect cost. Explore service details and source pricing questions before requesting a quotation.',
            )}
          </p>
          <TopicLinks
            locale={locale}
            paths={[
              'solutions/access-control',
              'solutions/networking',
              'solutions/automation',
              'solutions/meeting-rooms',
              'solutions/building-services',
              'faq',
            ]}
          />
        </Section>
      </>
    );
  else if (path === 'customers')
    body = (
      <>
        <Section tone="dark">
          <CustomerLogos locale={locale} />
        </Section>
        <Section>
          <h2>{say(locale, 'ที่มาของโลโก้', 'About these logos')}</h2>
          <p>
            {say(
              locale,
              'โลโก้เหล่านี้มาจากส่วนลูกค้าบนเว็บไซต์ AITS เดิม ไม่ได้แสดงคะแนน คำพูด หรือการรับรองบริการปัจจุบันขององค์กร รายละเอียดผลงานให้ดูจากเรื่องเล่าโครงการที่มีแหล่งอ้างอิง',
              'These logos appeared in the original AITS customer section. They do not represent ratings, quotations or a current endorsement. Use sourced project accounts to inspect the documented work.',
            )}
          </p>
          <TopicLinks locale={locale} paths={['projects', 'testimonials', 'about']} />
        </Section>
        <Sources locale={locale} urls={['https://aitscctv.com/']} />
      </>
    );
  else if (path === 'testimonials')
    body = (
      <>
        <Section>
          <div className="split">
            <div>
              <h2>{say(locale, 'รีวิวที่ตรวจสอบที่มาได้', 'Evidence with a visible source')}</h2>
              <p>
                {say(
                  locale,
                  'ส่วน “OUR REVIEWS” บนหน้าบริการเดิมเชื่อมไปยังบทความและผลงานที่ AITS เขียนเอง จึงนำมาแสดงเป็นเรื่องเล่าโครงการ ไม่เปลี่ยนเป็นคำพูดของลูกค้า',
                  'The original service pages’ “OUR REVIEWS” sections link to articles and projects written by AITS. They are presented as project accounts, not turned into customer quotations.',
                )}
              </p>
            </div>
            <div>
              <h2>{say(locale, 'คำรับรองจากลูกค้า', 'Attributed customer testimonials')}</h2>
              <p>
                {say(
                  locale,
                  'ยังไม่พบคำรับรองที่ระบุผู้พูดและตรวจสอบที่มาได้ในชุดหลักฐานที่นำมาใช้ จึงไม่มีการสร้างคะแนนดาวหรือคำชมขึ้นใหม่ คุณยังตรวจภาพงานและอ่านเรื่องราวต้นฉบับได้',
                  'No independently attributable customer quotations were verified in the source evidence used here. No star ratings or praise have been invented. Installation images and original accounts remain available.',
                )}
              </p>
            </div>
          </div>
        </Section>
        <Section tone="soft">
          <SectionHeading
            title={say(locale, 'เรื่องเล่าโครงการโดย AITS', 'Project accounts by AITS')}
          />
          <div className="project-grid">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} locale={locale} />
            ))}
          </div>
        </Section>
        <Section>
          <TopicLinks locale={locale} paths={['customers', 'resources/library', 'projects']} />
        </Section>
      </>
    );
  else if (path === 'support/manuals')
    body = (
      <Section>
        <div className="download-list">
          {[
            ['unv-th.pdf', 'คู่มือเครื่องบันทึก UNV ภาษาไทย', 'UNV recorder manual — Thai'],
            [
              'unv-en.pdf',
              'คู่มือ UNV Network Video Recorders V3.02 ภาษาอังกฤษ',
              'UNV Network Video Recorders manual V3.02 — English',
            ],
            ['standards.pdf', 'Let AITS Set Standard — ปี 2567', 'Let AITS Set Standard — 2024'],
          ].map(([file, th, en]) => (
            <a key={file} href={'/downloads/' + file}>
              <strong>{say(locale, th, en)}</strong>
              <span>
                PDF · {file === 'unv-en.pdf' ? '46 MB' : file === 'unv-th.pdf' ? '4 MB' : '17 MB'} ↓
              </span>
            </a>
          ))}
        </div>
        <p className="source-note">
          {say(
            locale,
            'ใช้คู่มือให้ตรงรุ่นและเวอร์ชันอุปกรณ์ สำเนาเอกสารจากหน้าคู่มือและมาตรฐานของเว็บไซต์ AITS เดิม',
            'Use the manual matching your model and version. Local copies of the documents linked by the original AITS manual and standards pages.',
          )}
        </p>
        <TopicLinks locale={locale} paths={['support', 'support/warranty', 'resources/videos']} />
      </Section>
    );
  else if (path === 'resources/library')
    body = (
      <Section>
        <SourceLibrary locale={locale} />
      </Section>
    );
  else if (path === 'resources/videos')
    body = (
      <Section>
        <h2>{say(locale, 'วิดีโอจาก AITS', 'AITS video collection')}</h2>
        <p>
          {say(
            locale,
            'เปิดหน้าวิดีโอต้นฉบับเพื่อเลือกหัวข้อและดูสื่อบนแพลตฟอร์มที่เผยแพร่ ตรวจรุ่นอุปกรณ์ก่อนทำตามขั้นตอน',
            'Open the original video collection to choose a topic and watch on its publishing platform. Check your equipment model before following instructions.',
          )}
        </p>
        <a className="text-link" href="https://aitscctv.com/video/">
          {say(locale, 'เปิดคลังวิดีโอ AITS', 'Open the AITS video collection')} ↗
        </a>
        <TopicLinks locale={locale} paths={['support/manuals', 'resources/library']} />
      </Section>
    );
  else if (path === 'faq')
    body = (
      <Section>
        <TopicLinks locale={locale} paths={faqCategories.map(([slug]) => 'faq/' + slug)} />
      </Section>
    );
  else if (path.startsWith('faq/')) {
    const items = faqData.filter((f) => f.category === path.split('/')[1]);
    body = (
      <Section>
        {locale === 'en' && (
          <p className="source-note">
            The original questions and edited answers below are in Thai. English service guides
            cover the main planning topics; Thai material is retained while full FAQ translation
            remains pending.
          </p>
        )}
        <div className="faq-list" lang="th">
          {items.map((f, i) => (
            <details key={i}>
              <summary>
                {f.q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{f.a}</p>
              <a className="text-link" href={f.source}>
                แหล่งคำถามเดิม ↗
              </a>
            </details>
          ))}
        </div>
        <TopicLinks locale={locale} paths={['faq', 'solutions', 'support']} />
      </Section>
    );
  } else if (path.startsWith('projects/')) {
    const slug = path.split('/')[1];
    body = (
      <>
        <Section>
          <TopicLinks
            locale={locale}
            paths={['projects/cctv', 'projects/networking', 'projects/access-control']}
          />
          <SectionHeading title={say(locale, 'ตัวอย่างงานติดตั้ง', 'Installation examples')} />
          <div className="project-grid">
            {projects
              .filter((p) => p.service === slug)
              .map((p) => (
                <ProjectCard key={p.slug} project={p} locale={locale} />
              ))}
          </div>
        </Section>
        <Section tone="soft">
          <h2>
            {say(locale, 'ผลงานเพิ่มเติมจากเว็บไซต์เดิม', 'More original installation accounts')}
          </h2>
          <SourceLibrary locale={locale} initialCategory={slug} />
        </Section>
      </>
    );
  } else if (path === 'about/installation-standards')
    body = (
      <>
        <Section>
          <p className="lead">
            {say(
              locale,
              'เอกสาร Let AITS Set Standard ปี 2567 อธิบายรายละเอียดงานติดตั้ง 9 ประเภท ใช้ประกอบการตกลงวิธีทำงาน โดยวัสดุและวิธีจริงต้องเหมาะกับหน้างาน',
              'The 2024 Let AITS Set Standard document describes nine workmanship topics. Use them to agree installation methods, with materials and details adapted to the actual site.',
            )}
          </p>
          <div className="standards-grid">
            {[
              [
                'ท่อเหล็ก',
                'Steel conduit',
                'เลือกวัสดุทนสภาพพื้นที่ วางเส้นทาง ยึดท่อ และตรวจงานเดินสาย',
                'Select suitable materials, plan routes, secure conduit and inspect cabling.',
              ],
              [
                'HDPE ฝังใต้ดิน',
                'Underground HDPE',
                'สำรวจแนวขุด สภาพดินและน้ำ วางท่อและคืนสภาพพื้นที่ตามแผนงาน',
                'Survey trench routes, soil and water conditions; lay conduit and reinstate the area.',
              ],
              [
                'ยึดอุปกรณ์กับฝ้า',
                'Ceiling mounting',
                'ตรวจโครงสร้างรองรับ เลือกจุดยึดและตรวจความมั่นคง ไม่อาศัยแผ่นฝ้าอย่างเดียว',
                'Assess support and fixing points and verify stability rather than relying on ceiling panels alone.',
              ],
              [
                'เจาะผนังปูน',
                'Concrete wall penetrations',
                'ตรวจตำแหน่งและสิ่งกีดขวางก่อนเจาะ เลือกเครื่องมือและเก็บขอบช่องให้เรียบร้อย',
                'Inspect the location and obstructions, select tools and finish the penetration properly.',
              ],
              [
                'ท่อ PVC',
                'PVC conduit',
                'วางแนวท่อและจุดยึดให้เหมาะสม จัดสายและตรวจเส้นทางหลังติดตั้ง',
                'Plan routes and supports, organise cables and inspect the completed path.',
              ],
              [
                'เฟล็กซ์เหล็กบนฝ้า',
                'Flexible metal conduit',
                'เลือกทางเดินและยึดรองรับ ป้องกันสายบริเวณที่ต้องใช้ความยืดหยุ่น',
                'Plan and support flexible runs to protect cables where flexibility is required.',
              ],
              [
                'กล่อง PVC',
                'PVC enclosure mounting',
                'เลือกกล่องตามอุปกรณ์และสภาพแวดล้อม จัดจุดเข้าสายและยึดให้แน่น',
                'Match enclosure to equipment and environment, organise cable entries and secure the assembly.',
              ],
              [
                'เข้าหัวไฟเบอร์และถาด',
                'Fibre termination & trays',
                'เข้าหัวหรือเชื่อม ตรวจการสูญเสีย จัดสายไม่ให้ถูกบิดหรือดึง และติดป้าย',
                'Terminate or splice, test loss, organise fibres against twisting or pulling and label connections.',
              ],
              [
                'ตู้ Rack',
                'Rack organisation',
                'วางอุปกรณ์ตามน้ำหนัก การระบายอากาศ และการเข้าถึงพอร์ต จัดสายและทดสอบระบบ',
                'Plan load, ventilation and port access, organise cables and verify system operation.',
              ],
            ].map(([th, en, bth, ben], i) => (
              <article key={en}>
                <span className="step-number">0{i + 1}</span>
                <h2>{say(locale, th, en)}</h2>
                <p>{say(locale, bth, ben)}</p>
              </article>
            ))}
          </div>
        </Section>
        <Section tone="soft">
          <a className="button" href="/downloads/standards.pdf">
            {say(
              locale,
              'อ่านเอกสารมาตรฐานฉบับเต็ม (PDF)',
              'Read the complete standards document (PDF)',
            )}{' '}
            ↓
          </a>
          <TopicLinks
            locale={locale}
            paths={[
              'about/installation-process',
              'solutions/networking/lan-cabling',
              'solutions/networking/fiber-optic',
            ]}
          />
        </Section>
      </>
    );
  return (
    <>
      <PageHero locale={locale} path={path} />
      {body}
      <FinalCTA locale={locale} />
    </>
  );
}

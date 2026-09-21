import { NewHome, ExpandedPage, hasExpanded, TopicLinks } from './expanded-page';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  services,
  projects,
  industries,
  articles,
  company,
  support,
  commonFAQ,
  bi,
} from '@/content/data';
import type { Locale } from '@/content/model';
import { href, labels, pageInfo } from '@/lib/site';
import { Schema } from '@/lib/seo';
import {
  Arrow,
  Button,
  Section,
  SectionHeading,
  PageHero,
  TextSections,
  FAQBlock,
  Process,
  ProjectCard,
  FinalCTA,
  projectImage,
} from './ui';
import { SurveyForm } from './survey-form';
import { Map } from './map';
function ServiceCards({
  locale,
  slugs,
  secondary = false,
}: {
  locale: Locale;
  slugs?: string[];
  secondary?: boolean;
}) {
  return (
    <div className="service-grid">
      {services
        .filter((s) =>
          slugs ? slugs.includes(s.slug) : secondary || s.slug !== 'building-services',
        )
        .map((s) => (
          <article key={s.slug} className="service-card">
            <span className="card-number">{s.number} /</span>
            <h3>
              <Link href={href(locale, 'solutions/' + s.slug)}>
                {s.title[locale]} <Arrow />
              </Link>
            </h3>
            <p>{s.summary[locale]}</p>
            <Link className="text-link" href={href(locale, 'solutions/' + s.slug)}>
              {labels.read[locale]} <Arrow />
            </Link>
          </article>
        ))}
    </div>
  );
}
function ProjectGrid({ locale, slugs }: { locale: Locale; slugs?: string[] }) {
  return (
    <div className="project-grid">
      {projects
        .filter((p) => !slugs || slugs.includes(p.slug))
        .map((p) => (
          <ProjectCard key={p.slug} locale={locale} project={p} />
        ))}
    </div>
  );
}
function IndustryCards({ locale }: { locale: Locale }) {
  return (
    <div className="industry-grid">
      {industries.map((s, i) => (
        <Link key={s.slug} className="industry-card" href={href(locale, 'industries/' + s.slug)}>
          <span className="card-number">0{i + 1}</span>
          <h3>{s.title[locale]}</h3>
          <p>{s.summary[locale]}</p>
          <Arrow />
        </Link>
      ))}
    </div>
  );
}
function ArticleCards({ locale }: { locale: Locale }) {
  return (
    <div className="resource-grid">
      {articles.map((a, i) => (
        <article key={a.slug} className="resource-card">
          <p className="eyebrow">
            {locale === 'th' ? 'คู่มือวางแผน' : 'PLANNING GUIDE'} / 0{i + 1}
          </p>
          <h2>
            <Link href={href(locale, 'resources/' + a.slug)}>{a.title[locale]}</Link>
          </h2>
          <p>{a.summary[locale]}</p>
          <Link className="text-link" href={href(locale, 'resources/' + a.slug)}>
            {locale === 'th' ? 'อ่านคู่มือ' : 'Read guide'} <Arrow />
          </Link>
        </article>
      ))}
    </div>
  );
}
function ContactDetails({ locale }: { locale: Locale }) {
  return (
    <div className="contact-details">
      <div>
        <p className="eyebrow">{locale === 'th' ? 'โทรคุยกับ AITS' : 'SPEAK WITH AITS'}</p>
        <a className="contact-large" href="tel:+6628782951" data-event="phone_click">
          02 878 2951
        </a>
        <p>
          {locale === 'th' ? 'ต่อ 100' : 'Extension 100'} ·{' '}
          <a href="tel:+66944606196" data-event="phone_click">
            094 460 6196
          </a>
        </p>
      </div>
      <div>
        <h2>{locale === 'th' ? 'ข้อความและอีเมล' : 'Message & email'}</h2>
        <a className="text-link" href={company.line} data-event="line_click">
          LINE @AITSCCTV <Arrow />
        </a>
        <a className="text-link" href={`mailto:${company.email}`}>
          {company.email} <Arrow />
        </a>
      </div>
      <div>
        <h2>{company.name[locale]}</h2>
        <address>{company.address[locale]}</address>
      </div>
      <div className="soft-panel">
        <h2>{locale === 'th' ? 'ระบบเดิมมีปัญหา' : 'Need help with an existing system?'}</h2>
        <p>
          {locale === 'th'
            ? 'เตรียมอาการและเลขที่งานเพื่อหารือบริการหลังการขาย'
            : 'Prepare the symptom and job reference for a support discussion.'}
        </p>
        <Link className="text-link" href={href(locale, 'support')}>
          {labels.support[locale]} <Arrow />
        </Link>
      </div>
    </div>
  );
}
export function SitePage({ locale, path }: { locale: Locale; path: string }) {
  if (!pageInfo[path]) notFound();
  let content;
  const s = services.find((x) => path === 'solutions/' + x.slug),
    p = projects.find((x) => path === 'projects/' + x.slug),
    industry = industries.find((x) => path === 'industries/' + x.slug),
    article = articles.find((x) => path === 'resources/' + x.slug);
  if (path === '') content = <NewHome locale={locale} />;
  else if (hasExpanded(path)) content = <ExpandedPage locale={locale} path={path} />;
  else if (s)
    content = (
      <>
        <PageHero locale={locale} path={path}>
          <div className="button-row">
            <Button locale={locale} />
            <Button locale={locale} secondary path={'resources/' + s.resource}>
              {locale === 'th' ? 'คู่มือเตรียมงาน' : 'Planning guide'}
            </Button>
          </div>
        </PageHero>
        <Section>
          <div className="article-layout">
            <TextSections locale={locale} sections={s.sections} />
            <aside className="scope-panel">
              <p className="eyebrow">{locale === 'th' ? 'ขอบเขตการทำงาน' : 'SCOPE OF WORK'}</p>
              <ul className="check-list">
                {s.scope.map((x, i) => (
                  <li key={i}>{x[locale]}</li>
                ))}
              </ul>
              <p>
                {locale === 'th'
                  ? 'ขอบเขตสุดท้ายระบุในใบเสนอราคาของแต่ละงาน'
                  : 'The final scope is set out in the project quotation.'}
              </p>
            </aside>
          </div>
        </Section>
        <Section tone="soft">
          <SectionHeading title={locale === 'th' ? 'สิ่งที่ควรพิจารณา' : 'Design considerations'} />
          <div className="three-grid">
            {s.considerations.map((c, i) => (
              <div className="consideration" key={i}>
                <span className="step-number">0{i + 1}</span>
                <p>{c[locale]}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <SectionHeading
            title={
              locale === 'th' ? 'ระบบที่สัมพันธ์กับพื้นที่' : 'Match the system to the environment'
            }
          />
          <SectionHeading
            title={locale === 'th' ? 'พื้นที่และรูปแบบการทำงาน' : 'Environments & workflows'}
          />
          <IndustryCards locale={locale} />
        </Section>
        <Section tone="dark">
          <SectionHeading
            title={
              locale === 'th' ? 'ตั้งแต่สำรวจจนถึงดูแลระบบ' : 'From assessment to ongoing care'
            }
          />
          <Process locale={locale} />
        </Section>
        {s.projects.length > 0 && (
          <Section>
            <SectionHeading
              title={locale === 'th' ? 'หลักฐานจากงานติดตั้ง' : 'Related installation evidence'}
            />
            <ProjectGrid locale={locale} slugs={s.projects} />
          </Section>
        )}
        <Section tone="soft">
          <div className="split">
            <div>
              <h2>{locale === 'th' ? 'ราคาและบริการหลังติดตั้ง' : 'Quotation & aftercare'}</h2>
              <p>{commonFAQ[1].answer[locale]}</p>
              <Link className="text-link" href={href(locale, 'support')}>
                {labels.support[locale]} <Arrow />
              </Link>
            </div>
            <FAQBlock locale={locale} items={s.faq} />
          </div>
        </Section>
        <FinalCTA locale={locale} />
      </>
    );
  else if (p)
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section className="project-detail">
          <div className="project-lead">
            <figure>
              <Image
                src={`/images/${projectImage(p)}.webp`}
                alt={p.alt[locale]}
                width={1024}
                height={p.slug === 'cctv-upgrade' ? 768 : 1500}
                sizes="(max-width: 850px) 92vw, 60vw"
                priority
              />
              <figcaption>
                {locale === 'th'
                  ? 'ภาพจากโครงการที่ AITS เผยแพร่'
                  : 'Photograph from AITS’s published project record'}
              </figcaption>
            </figure>
            <aside className="project-facts">
              <p className="eyebrow">{locale === 'th' ? 'ข้อมูลโครงการ' : 'PROJECT NOTES'}</p>
              <dl>
                <dt>{locale === 'th' ? 'พื้นที่' : 'Environment'}</dt>
                <dd>{p.environment[locale]}</dd>
                <dt>{locale === 'th' ? 'ระบบที่เกี่ยวข้อง' : 'Systems involved'}</dt>
                <dd>{p.technologies.join(' · ')}</dd>
              </dl>
              <Button locale={locale} path={'solutions/' + p.service} secondary>
                {locale === 'th' ? 'โซลูชันที่เกี่ยวข้อง' : 'Related solution'}
              </Button>
            </aside>
          </div>
          <div className="reading">
            <TextSections locale={locale} sections={p.sections} />
          </div>
          {p.slug === 'university-network' && (
            <figure className="project-wide">
              <Image
                src="/images/university.webp"
                alt={
                  locale === 'th'
                    ? 'เส้นทางสายและอุปกรณ์บนเพดานในโครงการมหาวิทยาลัย'
                    : 'Ceiling cable routes and equipment in the university project'
                }
                width={1024}
                height={473}
                sizes="(max-width: 850px) 92vw, 80vw"
              />
              <figcaption>
                {locale === 'th'
                  ? 'การจัดเส้นทางสายภายในอาคาร'
                  : 'Cable routing inside the building'}
              </figcaption>
            </figure>
          )}
          <p className="source-note">
            {locale === 'th' ? 'บันทึกโครงการต้นทาง' : 'Original project account'}:{' '}
            <a href={p.sources[0]}>
              {locale === 'th' ? 'เว็บไซต์ AITS' : 'AITS website'} <Arrow />
            </a>
          </p>
        </Section>
        <FinalCTA locale={locale} />
      </>
    );
  else if (industry)
    content = (
      <>
        <PageHero locale={locale} path={path}>
          <Button locale={locale} />
        </PageHero>
        <Section>
          <div className="reading">
            <TextSections locale={locale} sections={industry.sections} />
          </div>
        </Section>
        <Section tone="soft">
          <SectionHeading
            title={
              locale === 'th' ? 'ระบบที่เกี่ยวข้องกับพื้นที่นี้' : 'Solutions for this environment'
            }
          />
          <ServiceCards locale={locale} slugs={industry.services} />
        </Section>
        <Section>
          <SectionHeading
            title={locale === 'th' ? 'งานติดตั้งที่เกี่ยวข้อง' : 'Relevant installation work'}
          />
          <ProjectGrid locale={locale} slugs={[industry.project]} />
        </Section>
        <FinalCTA locale={locale} />
      </>
    );
  else if (article)
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section>
          <div className="reading">
            <TextSections locale={locale} sections={article.sections} />
            <div className="soft-panel">
              <h2>
                {locale === 'th' ? 'นำข้อมูลไปวางแผนงานของคุณ' : 'Apply this to your project'}
              </h2>
              <p>
                {locale === 'th'
                  ? 'รวบรวมคำถามและข้อมูลพื้นที่ แล้วหารือขอบเขตติดตั้งที่เหมาะสมกับการใช้งาน'
                  : 'Gather your questions and site information, then discuss an installation scope that fits your use.'}
              </p>
              <Button locale={locale} path={'solutions/' + article.service} secondary>
                {locale === 'th' ? 'ดูโซลูชันที่เกี่ยวข้อง' : 'Explore the related solution'}
              </Button>
            </div>
          </div>
        </Section>
        <FinalCTA locale={locale} />
      </>
    );
  else if (path === 'solutions')
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section>
          <SectionHeading
            title={locale === 'th' ? 'บริการออกแบบและติดตั้ง' : 'Design & installation services'}
          />
          <ServiceCards locale={locale} />
          <TopicLinks locale={locale} paths={['solutions/security', 'pricing']} />
          <div className="secondary-service">
            <h2>{locale === 'th' ? 'งานอาคารเพิ่มเติม' : 'Additional building work'}</h2>
            <p>{services[5].summary[locale]}</p>
            <Link className="text-link" href={href(locale, 'solutions/building-services')}>
              {services[5].title[locale]} <Arrow />
            </Link>
          </div>
        </Section>
        <FinalCTA locale={locale} />
      </>
    );
  else if (path === 'industries')
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section>
          <SectionHeading
            title={locale === 'th' ? 'พื้นที่และรูปแบบการทำงาน' : 'Environments & workflows'}
          />
          <IndustryCards locale={locale} />
        </Section>
        <FinalCTA locale={locale} />
      </>
    );
  else if (path === 'projects')
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section>
          <TopicLinks
            locale={locale}
            paths={['projects/cctv', 'projects/networking', 'projects/access-control']}
          />
          <SectionHeading
            title={locale === 'th' ? 'ตัวอย่างงานที่เผยแพร่' : 'Published installation accounts'}
          />
          <ProjectGrid locale={locale} />
        </Section>
        <Section tone="soft">
          <div className="split">
            <h2>
              {locale === 'th'
                ? 'อ่านขอบเขตงาน ควบคู่กับภาพ'
                : 'Read the scope alongside the photographs.'}
            </h2>
            <p>
              {locale === 'th'
                ? 'แต่ละกรณีแยกสิ่งที่ทำจริงออกจากข้อพิจารณาสำหรับงานใหม่ เพื่อให้คุณประเมินความเหมาะสมกับพื้นที่ของตนเองได้'
                : 'Each case distinguishes documented work from considerations for a new installation, helping you assess its relevance to your own site.'}
            </p>
          </div>
        </Section>
        <FinalCTA locale={locale} />
      </>
    );
  else if (path === 'resources')
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section>
          <TopicLinks
            locale={locale}
            paths={['faq', 'resources/library', 'resources/videos', 'support/manuals']}
          />
          <ArticleCards locale={locale} />
        </Section>
        <FinalCTA locale={locale} />
      </>
    );
  else if (path === 'about')
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section>
          <TopicLinks
            locale={locale}
            paths={[
              'about/installation-process',
              'about/installation-standards',
              'customers',
              'testimonials',
            ]}
          />
          <div className="about-story">
            <div className="year-block">
              <span>{locale === 'th' ? 'เริ่มต้นในปี' : 'ESTABLISHED'}</span>
              <strong>2005</strong>
              <p>Let AITS Set the Standard</p>
            </div>
            <div>
              <h2>
                {locale === 'th'
                  ? 'จากคำถามเรื่องคุณภาพ สู่แนวทางการทำงาน'
                  : 'From a question about quality to a way of working.'}
              </h2>
              <p>{company.story[locale]}</p>
              <p>
                {locale === 'th'
                  ? 'ประวัติบริษัทกล่าวถึงงานกล้องวงจรปิด เครือข่าย LAN และไฟเบอร์ งานโรงงาน และระบบประชุมทางไกล ประสบการณ์เหล่านี้สะท้อนการทำงานกับทั้งโครงสร้างพื้นฐานและอุปกรณ์ปลายทาง'
                  : 'The company history describes CCTV, LAN and fibre infrastructure, factory installations and remote-meeting systems. This work spans both infrastructure and the devices people use.'}
              </p>
              <Button locale={locale} path="about/installation-standards" secondary>
                {labels.standards[locale]}
              </Button>
            </div>
          </div>
        </Section>
        <Section tone="dark">
          <SectionHeading
            title={
              locale === 'th' ? 'สิ่งที่งานติดตั้งควรส่งมอบ' : 'What an installation should deliver'
            }
          />
          <div className="three-grid">
            {[
              bi('เข้าใจพื้นที่ก่อนเลือกอุปกรณ์', 'Understand the site before choosing equipment.'),
              bi('ควบคุมงานและตรวจการติดตั้ง', 'Supervise the work and check the installation.'),
              bi(
                'ผู้ใช้เข้าใจระบบและช่องทางดูแล',
                'Help users understand the system and the route to support.',
              ),
            ].map((x, i) => (
              <div key={i}>
                <span className="step-number">0{i + 1}</span>
                <h3>{x[locale]}</h3>
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <SectionHeading
            title={locale === 'th' ? 'เรื่องราวผ่านงานที่ทำ' : 'The story through the work'}
          />
          <TopicLinks
            locale={locale}
            paths={['projects/cctv', 'projects/networking', 'projects/access-control']}
          />
          <SectionHeading
            title={locale === 'th' ? 'ตัวอย่างงานที่เผยแพร่' : 'Published installation accounts'}
          />
          <ProjectGrid locale={locale} />
        </Section>
        <FinalCTA locale={locale} />
      </>
    );
  else if (path === 'about/installation-standards')
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section>
          <Process locale={locale} />
          <div className="reading">
            <TextSections
              locale={locale}
              sections={[
                {
                  title: bi('การเดินสายและข้อมูลที่ตามต่อได้', 'Traceable cabling and information'),
                  body: bi(
                    'โครงการเครือข่ายมหาวิทยาลัยแสดงการจัดสายในฝ้าและราง ติดป้ายปลายสาย ทดสอบด้วย LAN Tester และแนะนำทีม IT ขอบเขตเอกสารและการทดสอบสำหรับแต่ละงานควรระบุให้ตรงกับประเภทระบบ',
                    'The university network project documents ceiling and tray routing, cable-end labels, LAN-tester checks and IT guidance. Documentation and testing for each job should be defined around its system type.',
                  ),
                },
                {
                  title: bi('กำหนดเกณฑ์ส่งมอบจากการใช้งาน', 'Base handover on operation'),
                  body: bi(
                    'ระบบกล้องต้องพิจารณาภาพและการดูย้อนหลัง เครือข่ายต้องพิจารณาจุดเชื่อมต่อและผู้ใช้ ประตูต้องพิจารณาสิทธิ์และการเปิดปิด หารือรายการตรวจสอบ ผู้รับมอบ และข้อมูลที่ต้องใช้ดูแลต่อไว้ตั้งแต่กำหนดงาน',
                    'CCTV requires image and playback checks; networks require attention to connections and users; doors require permissions and operational checks. Discuss the check list, handover recipient and maintenance information when defining the project.',
                  ),
                },
              ]}
            />
            <p className="source-note">
              {locale === 'th'
                ? 'นี่คือแนวทางการทำงานของ AITS ไม่ใช่การกล่าวอ้างใบรับรองจากองค์กรภายนอก'
                : 'This describes the AITS working approach; it is not a claim of external certification.'}
            </p>
          </div>
        </Section>
        <FinalCTA locale={locale} />
      </>
    );
  else if (path === 'support')
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section>
          <TopicLinks
            locale={locale}
            paths={['support/warranty', 'support/manuals', 'solutions/cctv/maintenance']}
          />
          <div className="split">
            <div>
              <h2>
                {locale === 'th'
                  ? 'เริ่มจากอาการและข้อมูลระบบ'
                  : 'Start with the symptom and system details'}
              </h2>
              <p>{support.introduction[locale]}</p>
              <ul className="check-list">
                {support.preparation.map((x, i) => (
                  <li key={i}>{x[locale]}</li>
                ))}
              </ul>
              <a className="button" href={company.line} data-event="support_contact">
                {locale === 'th' ? 'ติดต่อผ่าน LINE' : 'Contact through LINE'} <Arrow />
              </a>
              <p>
                <a href="tel:+6628782951" data-event="support_contact">
                  02 878 2951 {locale === 'th' ? 'ต่อ' : 'ext.'} 100
                </a>
              </p>
            </div>
            <div>
              <h2>{locale === 'th' ? 'การรับประกันและบำรุงรักษา' : 'Warranty & maintenance'}</h2>
              <p>{support.warranty[locale]}</p>
              <div className="soft-panel">
                <h3>{locale === 'th' ? 'คู่มือและการตรวจเบื้องต้น' : 'Manuals & preparation'}</h3>
                <p>
                  {locale === 'th'
                    ? 'เตรียมยี่ห้อและรุ่นอุปกรณ์เพื่อเลือกคู่มือที่ตรงกัน หากไม่มีเอกสาร ให้แจ้งข้อมูลนี้เมื่อขอรับบริการ ไม่ควรใช้คู่มือคนละรุ่นเพื่อรีเซ็ตระบบ'
                    : 'Identify the manufacturer and model to select the matching manual. If the documentation is missing, provide these details when requesting support. Do not reset a system using instructions for a different model.'}
                </p>
                <Link className="text-link" href={href(locale, 'resources/maintenance')}>
                  {locale === 'th' ? 'เช็กลิสต์ก่อนแจ้งปัญหา' : 'Support preparation checklist'}{' '}
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  else if (path === 'contact')
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section>
          <div className="split">
            <ContactDetails locale={locale} />
            <div>
              <h2>{labels.survey[locale]}</h2>
              <p>
                {locale === 'th'
                  ? 'หลังหารือความต้องการ จึงตกลงการสำรวจ ขอบเขต และใบเสนอราคา ไม่ต้องระบุสเปกอุปกรณ์ตั้งแต่เริ่ม'
                  : 'Requirements are discussed before survey arrangements, scope and quotation. You do not need to specify equipment at the outset.'}
              </p>
              <SurveyForm locale={locale} />
            </div>
          </div>
          <Map locale={locale} />
        </Section>
      </>
    );
  else if (path === 'request-site-survey')
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section>
          <div className="split survey-layout">
            <div>
              <h2>
                {locale === 'th'
                  ? 'เริ่มง่าย ไม่ต้องมีสเปก'
                  : 'Start simply. No specification needed.'}
              </h2>
              <ol className="next-steps">
                <li>
                  {locale === 'th'
                    ? 'เล่าปัญหาและลักษณะพื้นที่'
                    : 'Describe the problem and space.'}
                </li>
                <li>
                  {locale === 'th'
                    ? 'หารือความต้องการและข้อมูลที่จำเป็น'
                    : 'Discuss requirements and useful details.'}
                </li>
                <li>
                  {locale === 'th'
                    ? 'ตกลงการประเมินพื้นที่และขอบเขตเสนอราคา'
                    : 'Agree assessment arrangements and quotation scope.'}
                </li>
              </ol>
              <ContactDetails locale={locale} />
            </div>
            <SurveyForm locale={locale} />
          </div>
        </Section>
      </>
    );
  else if (path === 'privacy')
    content = (
      <>
        <PageHero locale={locale} path={path} />
        <Section>
          <div className="reading">
            <TextSections
              locale={locale}
              sections={[
                {
                  title: bi('การตั้งค่าสีเว็บไซต์', 'Colour preference'),
                  body: bi(
                    'เว็บไซต์เริ่มต้นด้วยโหมดมืด เมื่อเปลี่ยนโหมด เว็บไซต์จะเก็บเฉพาะตัวเลือกสีไว้ในเบราว์เซอร์ของคุณ เพื่อใช้เมื่อกลับมาอีกครั้ง ไม่มีการส่งตัวเลือกนี้ไปยังบริการภายนอก',
                    'The website defaults to dark mode. Changing the theme saves only your colour preference in this browser for future visits. This preference is not sent to external services.',
                  ),
                },
                {
                  title: bi('แบบฟอร์มสาธิต', 'Demonstration forms'),
                  body: bi(
                    'เว็บไซต์รุ่นนี้ตรวจข้อมูลแบบฟอร์มผ่านปลายทางภายในเครื่อง ไม่มีการส่งอีเมล ส่งเข้า CRM หรือบันทึกข้อมูลลงฐานข้อมูล กรุณาใช้ข้อมูลทดสอบ การตอบกลับสำเร็จหมายถึงผ่านการตรวจสอบเท่านั้น ไม่ใช่ AITS ได้รับคำขอ',
                    'This version validates forms through a local endpoint. It does not email, send data to a CRM or save submissions in a database. Please use test information. A successful response means validation passed; it does not mean AITS received an enquiry.',
                  ),
                },
                {
                  title: bi('ช่องทางภายนอกและแผนที่', 'External channels and maps'),
                  body: bi(
                    'ลิงก์โทรศัพท์ อีเมล และ LINE จะเปิดแอปหรือบริการที่คุณเลือก ข้อมูลที่ส่งผ่านช่องทางนั้นอยู่ภายใต้การจัดการของบริการดังกล่าว แผนที่ Google ไม่โหลดจนกว่าจะเลือกเปิด เมื่อเปิดจะมีการเชื่อมต่อกับ Google',
                    'Phone, email and LINE links open your chosen app or external service. Information sent through those channels is handled by that service. Google Maps loads only after you choose to open it, at which point your browser connects to Google.',
                  ),
                },
                {
                  title: bi('คุกกี้และการวิเคราะห์การใช้งาน', 'Cookies and usage measurement'),
                  body: bi(
                    'เว็บไซต์รุ่นนี้ไม่ติดตั้งเครื่องมือติดตามจากบุคคลที่สาม ไม่ตั้งคุกกี้วิเคราะห์ และไม่เก็บข้อมูลแบบฟอร์มในพื้นที่จัดเก็บของเบราว์เซอร์ เหตุการณ์การใช้งานที่เตรียมไว้ทำงานภายในหน้าและไม่ส่งออกไปยังบริการวิเคราะห์',
                    'This version installs no third-party tracking, sets no analytics cookies and does not store form details in browser storage. Prepared interaction events remain within the page and are not transmitted to an analytics provider.',
                  ),
                },
                {
                  title: bi('ติดต่อเรื่องข้อมูล', 'Data-related contact'),
                  body: bi(
                    'หากมีคำถามเกี่ยวกับการติดต่อ AITS สามารถใช้อีเมล info@aitscctv.com เมื่อเพิ่มระบบรับคำขอจริงหรือเครื่องมือวิเคราะห์ คำอธิบายนี้ต้องปรับให้ตรงกับการเก็บ ใช้ และระยะเวลาเก็บข้อมูลที่ใช้งานจริง',
                    'For questions about contacting AITS, use info@aitscctv.com. If live enquiry delivery or analytics is introduced, this notice must be updated to describe the actual collection, use and retention arrangements.',
                  ),
                },
              ]}
            />
          </div>
        </Section>
      </>
    );
  return (
    <>
      <Schema locale={locale} path={path} />
      {content}
    </>
  );
}

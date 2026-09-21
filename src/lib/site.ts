import { articles, services, industries, projects, bi } from '@/content/data';
import type { Copy, Locale } from '@/content/model';
import { details, specialPages } from '@/content/expanded';
export const origin = (process.env.SITE_URL || 'https://aitscctv.com').replace(/\/$/, '');
if (!/^https:\/\/[a-z\d.-]+(?::\d+)?$/i.test(origin))
  throw new Error('SITE_URL must be an HTTPS origin without a path');
export const href = (locale: Locale, path = '') =>
  `${locale === 'en' ? '/en' : ''}/${path.replace(/^\/|\/$/g, '')}${path.replace(/^\/|\/$/g, '') ? '/' : ''}`;
export const labels = {
  home: bi('หน้าแรก', 'Home'),
  solutions: bi('โซลูชัน', 'Solutions'),
  industries: bi('พื้นที่ใช้งาน', 'Where we work'),
  projects: bi('ผลงาน', 'Projects'),
  about: bi('เกี่ยวกับ AITS', 'About AITS'),
  resources: bi('สาระน่ารู้', 'Resources'),
  contact: bi('ติดต่อ', 'Contact'),
  survey: bi('ขอประเมินหน้างาน', 'Request a Site Survey'),
  support: bi('บริการหลังการขาย', 'Support'),
  standards: bi('มาตรฐานการติดตั้ง', 'Installation process'),
  privacy: bi('ความเป็นส่วนตัว', 'Privacy'),
  read: bi('ดูรายละเอียด', 'Explore'),
};
export const navigation = [
  'solutions',
  'industries',
  'projects',
  'about',
  'resources',
  'contact',
] as const;
export const pageInfo: Record<string, { title: Copy; summary: Copy }> = {
  '': {
    title: bi(
      'ออกแบบ ติดตั้ง และดูแลระบบความปลอดภัยและเครือข่าย',
      'Security & network systems, built around your site',
    ),
    summary: bi(
      'AITS ออกแบบ ติดตั้ง และดูแลกล้องวงจรปิด ระบบเข้าออก และเครือข่าย สำหรับธุรกิจและบ้าน ตั้งแต่สำรวจจนถึงส่งมอบ',
      'AITS designs, installs and supports CCTV, access control and networks for businesses and homes, from site assessment to handover.',
    ),
  },
  solutions: {
    title: labels.solutions,
    summary: bi(
      'เลือกจากปัญหาที่ต้องแก้ แล้ววางอุปกรณ์และการติดตั้งเป็นระบบเดียวกัน',
      'Choose the problem to solve, then plan equipment and installation as one system.',
    ),
  },
  industries: {
    title: labels.industries,
    summary: bi(
      'ข้อจำกัดของแต่ละพื้นที่ต่างกัน เริ่มจากสภาพแวดล้อมและวิธีทำงานของคุณ',
      'Every environment has different constraints. Start with your space and how it works.',
    ),
  },
  projects: {
    title: bi('งานจริง วิธีทำงานที่เห็นได้', 'Real installations. Visible workmanship.'),
    summary: bi(
      'สำรวจขอบเขตและวิธีติดตั้งจากโครงการที่ AITS เผยแพร่',
      'Explore the scope and installation methods in AITS’s published project accounts.',
    ),
  },
  about: {
    title: bi('มาตรฐานเริ่มจากความรับผิดชอบ', 'Standards begin with accountability'),
    summary: bi(
      'รู้จัก AITS จากจุดเริ่มต้นในปี 2548 และแนวคิดเรื่องคุณภาพงานติดตั้ง',
      'Meet AITS through its founding story in 2005 and its approach to installation quality.',
    ),
  },
  'about/installation-standards': {
    title: labels.standards,
    summary: bi(
      'จากความต้องการหน้างาน สู่ระบบที่ติดตั้ง ทดสอบ และส่งมอบอย่างเข้าใจ',
      'From site requirements to a system that is installed, checked and explained at handover.',
    ),
  },
  resources: {
    title: bi('ข้อมูลที่ช่วยตัดสินใจ ก่อนเริ่มงาน', 'Make informed decisions before installation'),
    summary: bi(
      'คู่มือสั้นที่ช่วยเตรียมคำถามและข้อมูลสำหรับกล้อง เครือข่าย และระบบควบคุม',
      'Focused guides to prepare questions and requirements for cameras, networks and controls.',
    ),
  },
  contact: {
    title: bi('คุยเรื่องพื้นที่และระบบของคุณ', 'Let’s discuss your site'),
    summary: bi(
      'เลือกโทร LINE อีเมล หรือเริ่มด้วยแบบฟอร์มสั้น แจ้งปัญหาและที่ตั้ง ไม่ต้องรู้รุ่นอุปกรณ์',
      'Call, use LINE, email or start with a short form. Share the problem and location; equipment models are not required.',
    ),
  },
  'request-site-survey': {
    title: labels.survey,
    summary: bi(
      'บอกเราเกี่ยวกับพื้นที่และสิ่งที่อยากให้ระบบช่วย ข้อมูลทางเทคนิคค่อยหารือในขั้นตอนถัดไป',
      'Tell us about the space and what you need the system to do. Technical specifications can follow in the next discussion.',
    ),
  },
  support: {
    title: labels.support,
    summary: bi(
      'แจ้งปัญหาระบบเดิม ตรวจสอบการรับประกัน และเตรียมข้อมูลเพื่อขอรับบริการ',
      'Report an existing-system issue, check warranty information and prepare for service.',
    ),
  },
  privacy: {
    title: bi('ข้อมูลส่วนบุคคลและการใช้เว็บไซต์', 'Privacy & website data'),
    summary: bi(
      'คำอธิบายการทำงานของแบบฟอร์ม ช่องทางภายนอก และการจัดการข้อมูลในเว็บไซต์รุ่นนี้',
      'How forms, external channels and data handling work in this version of the website.',
    ),
  },
};
for (const [prefix, records] of Object.entries({
  solutions: services,
  projects,
  industries,
  resources: articles,
}))
  for (const r of records) pageInfo[`${prefix}/${r.slug}`] = r;
for (const d of details) pageInfo[d.path] = d;
Object.assign(pageInfo, specialPages);
pageInfo['about/installation-standards'] = {
  title: bi('มาตรฐานและรายละเอียดงานติดตั้ง', 'Installation workmanship standards'),
  summary: bi(
    'ดูวิธีเดินท่อ ยึดอุปกรณ์ จัดตู้ Rack และเข้าหัวไฟเบอร์ จากเอกสาร Let AITS Set Standard ปี 2567',
    'Conduit, mounting, rack and fibre workmanship from the 2024 Let AITS Set Standard document.',
  ),
};
export const paths = Object.keys(pageInfo);

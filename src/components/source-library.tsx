'use client';
import { useState } from 'react';
import type { Locale } from '@/content/model';
import records from '@/content/source-library.json';
export function SourceLibrary({
  locale,
  initialCategory = 'all',
}: {
  locale: Locale;
  initialCategory?: string;
}) {
  const [query, setQuery] = useState(''),
    [category, setCategory] = useState(initialCategory),
    [limit, setLimit] = useState(24);
  const matches = records.filter(
    (r) =>
      (category === 'all' || r.category === category) &&
      r.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );
  return (
    <>
      <div className="library-controls">
        <label>
          {locale === 'th' ? 'ค้นชื่อบทความ' : 'Search article titles'}
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setLimit(24);
            }}
          />
        </label>
        <label>
          {locale === 'th' ? 'หมวดหมู่' : 'Category'}
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setLimit(24);
            }}
          >
            {[
              ['all', 'ทั้งหมด', 'All'],
              ['cctv', 'กล้องวงจรปิด', 'CCTV'],
              ['networking', 'เครือข่าย', 'Networking'],
              ['access-control', 'ระบบเข้าออก', 'Access'],
              ['other', 'หัวข้ออื่น', 'Other'],
            ].map(([v, th, en]) => (
              <option value={v} key={v}>
                {locale === 'th' ? th : en}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p role="status" className="source-note">
        {matches.length}{' '}
        {locale === 'th'
          ? 'รายการ · ชื่อและบทความต้นฉบับภาษาไทย'
          : 'results · Original Thai titles and articles'}
      </p>
      <ul className="library-results">
        {matches.slice(0, limit).map((r) => (
          <li key={r.url}>
            <a href={r.url} lang="th">
              {r.title}
              <span aria-hidden="true"> ↗</span>
            </a>
            <small>{locale === 'th' ? 'บทความต้นฉบับ AITS' : 'Original AITS publication'}</small>
          </li>
        ))}
      </ul>
      {!matches.length && (
        <p>
          {locale === 'th'
            ? 'ไม่พบรายการ ลองคำค้นอื่นหรือเลือกทั้งหมด'
            : 'No results. Try another query or select All.'}
        </p>
      )}
      {matches.length > limit && (
        <button className="button secondary" onClick={() => setLimit(limit + 24)}>
          {locale === 'th' ? 'แสดงเพิ่ม' : 'Show more'}
        </button>
      )}
    </>
  );
}

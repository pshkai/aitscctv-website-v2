'use client';
import { useState } from 'react';
import type { Locale } from '@/content/model';
export function Map({ locale }: { locale: Locale }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="map-panel">
      <h2>{locale === 'th' ? 'ที่อยู่และแผนที่' : 'Address & map'}</h2>
      <p>
        {locale === 'th'
          ? 'แผนที่ Google จะเชื่อมต่อเมื่อคุณเลือกเปิดเท่านั้น'
          : 'Google Maps connects only when you choose to load it.'}
      </p>
      {loaded ? (
        <iframe
          title={locale === 'th' ? 'แผนที่ที่อยู่ AITS' : 'Map of the AITS address'}
          src="https://www.google.com/maps?q=570+Charoen+Nakhon+Road+Bangkok+10600&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      ) : (
        <button className="button secondary" onClick={() => setLoaded(true)}>
          {locale === 'th' ? 'เปิดแผนที่ Google' : 'Load Google Map'}
        </button>
      )}
    </div>
  );
}

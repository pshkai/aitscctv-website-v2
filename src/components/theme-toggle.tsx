'use client';
import type { Locale } from '@/content/model';

export function ThemeToggle({ locale }: { locale: Locale }) {
  function toggle() {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('aits-theme', theme);
    } catch {
      // The switch still works when browser storage is unavailable.
    }
  }
  return (
    <button className="theme-toggle" type="button" onClick={toggle}>
      <span className="theme-for-dark">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
        </svg>
        <span className="theme-label">{locale === 'th' ? 'โหมดสว่าง' : 'Light mode'}</span>
      </span>
      <span className="theme-for-light">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
        </svg>
        <span className="theme-label">{locale === 'th' ? 'โหมดมืด' : 'Dark mode'}</span>
      </span>
    </button>
  );
}

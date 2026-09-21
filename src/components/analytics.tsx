'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export type EventName =
  | 'site_survey_start'
  | 'site_survey_submit'
  | 'line_click'
  | 'phone_click'
  | 'service_view'
  | 'project_view'
  | 'service_to_contact'
  | 'support_contact';
export function track(name: EventName, context: Record<string, string> = {}) {
  window.dispatchEvent(new CustomEvent('aits:analytics', { detail: { name, ...context } }));
}
export function Analytics() {
  const path = usePathname();
  useEffect(() => {
    if (path.includes('/solutions/')) track('service_view', { path });
    if (path.includes('/projects/')) track('project_view', { path });
    const click = (event: MouseEvent) => {
      const a = (event.target as Element).closest('a');
      if (!a) return;
      const name = a.dataset.event as EventName | undefined;
      if (name) track(name, { path });
      if (path.includes('/support/') && (a.href.startsWith('tel:') || a.href.includes('line.me')))
        track('support_contact', { path });
      if (path.includes('/solutions/') && a.pathname.includes('/request-site-survey/'))
        track('service_to_contact', { path });
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, [path]);
  return null;
}

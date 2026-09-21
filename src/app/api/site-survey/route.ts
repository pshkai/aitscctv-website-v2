import { NextResponse } from 'next/server';
import { validateSurvey } from '@/lib/form';
const attempts = new Map<string, { count: number; until: number }>();
export async function POST(request: Request) {
  const incomingOrigin = request.headers.get('origin');
  if (incomingOrigin) {
    try {
      const parsed = new URL(incomingOrigin);
      if (
        !['http:', 'https:'].includes(parsed.protocol) ||
        parsed.host !== request.headers.get('host')
      )
        return NextResponse.json({ error: 'origin' }, { status: 403 });
    } catch {
      return NextResponse.json({ error: 'origin' }, { status: 403 });
    }
  }
  if (!request.headers.get('content-type')?.startsWith('application/json'))
    return NextResponse.json({ error: 'content_type' }, { status: 415 });
  const raw = await request.text();
  if (raw.length > 12000) return NextResponse.json({ error: 'size' }, { status: 413 });
  let data: Record<string, unknown>;
  try {
    data = JSON.parse(raw);
    if (!data || Array.isArray(data) || typeof data !== 'object') throw new Error();
  } catch {
    return NextResponse.json({ error: 'json' }, { status: 400 });
  }
  if (data.website) return NextResponse.json({ error: 'rejected' }, { status: 400 });
  const now = Date.now();
  for (const [key, value] of attempts) if (value.until < now) attempts.delete(key);
  // Deliberately global in the local mock: no IP address or personal data retained.
  const entry = attempts.get('local') || { count: 0, until: now + 60000 };
  if (++entry.count > 60)
    return NextResponse.json(
      { error: 'rate_limit' },
      { status: 429, headers: { 'Retry-After': '60' } },
    );
  attempts.set('local', entry);
  const errors = validateSurvey(data);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });
  return NextResponse.json(
    { ok: true, mode: 'mock', delivered: false },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}

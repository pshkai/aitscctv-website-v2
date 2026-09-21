import { rename, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const route = 'src/app/api/site-survey';
const hidden = 'src/app/api/site-survey.disabled';
let moved = false;
try {
  await access(route);
  await rename(route, hidden);
  moved = true;
  execFileSync(process.platform === 'win32' ? 'pnpm' : 'pnpm', ['build'], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: { ...process.env, GITHUB_PAGES: 'true', NEXT_PUBLIC_GITHUB_PAGES: 'true' },
  });
} finally {
  if (moved) await rename(hidden, route);
}

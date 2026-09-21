import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ['src/components/root-layout.tsx'],
    // This component is the App Router document root, not a Pages Router component.
    rules: { '@next/next/no-head-element': 'off' },
  },
  globalIgnores([
    '.next/**',
    'reports/**',
    'playwright-report/**',
    'test-results/**',
    'next-env.d.ts',
  ]),
]);

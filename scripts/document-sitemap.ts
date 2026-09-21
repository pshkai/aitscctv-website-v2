import { paths, pageInfo } from '../src/lib/site';
import fs from 'node:fs';
const tree: Record<string, unknown> = {};
for (const path of paths.filter(Boolean).sort()) {
  let node = tree;
  for (const part of path.split('/')) {
    node[part] ||= {};
    node = node[part] as Record<string, unknown>;
  }
}
function render(t: Record<string, unknown>, indent = ''): string {
  return Object.entries(t)
    .map(
      ([key, value]) =>
        indent + key + '/\n' + render(value as Record<string, unknown>, indent + '  '),
    )
    .join('');
}
fs.writeFileSync(
  'SITEMAP.md',
  '# New sitemap\n\n63 topics / 126 locale routes. Every route below has an English counterpart under `/en/`; the restored FAQ answers remain explicitly labelled Thai on English pages. The 415 original posts are linked through the library and retained on the legacy origin.\n\n```text\n/\n' +
    render(tree) +
    '```\n\n## Route titles\n\n| Path | English title |\n| --- | --- |\n' +
    paths.map((p) => '| /' + (p ? p + '/' : '') + ' | ' + pageInfo[p].title.en + ' |').join('\n') +
    '\n\nThe XML sitemap is `/sitemap.xml`; robots are `/robots.txt`. Forms use a mock `/api/site-survey/` endpoint.\n',
);
fs.writeFileSync('reports/routes.json', JSON.stringify(paths, null, 2));

#!/usr/bin/env node
// Body-prose word counter for the page templates in CLAUDE.md.
// Usage: node scripts/wordcount.mjs <file.mdx> [more.mdx ...]
//
// Counts only body prose. Excluded: frontmatter, import lines, headings,
// tables, JSX tags (the text inside a Callout is counted, the tag is not),
// everything under the "Go deeper" heading, and the two cross-link sections
// ("Which business areas apply" and "Where it shows up in the process",
// each from its H2 heading up to the next H2). Markdown link text is
// counted; link targets are not.

import { readFileSync } from 'node:fs';

function bodyProse(source) {
  let text = source.replace(/\r\n/g, '\n');

  // Frontmatter: a leading block fenced by --- lines.
  text = text.replace(/^---\n[\s\S]*?\n---\n/, '');

  // The Go deeper list: drop from its heading to the end of the file.
  text = text.replace(/^##\s+Go deeper\b[\s\S]*$/m, '');

  // The two cross-link lists: drop each from its H2 heading up to the next H2.
  text = text.replace(/^##\s+(?:Which business areas apply|Where it shows up in the process)\b[\s\S]*?(?=^##\s|(?![\s\S]))/gm, '');

  const kept = [];
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (line === '') continue;
    if (/^import\s/.test(line)) continue;      // import lines
    if (/^#{1,6}\s/.test(line)) continue;      // headings
    if (/^\|/.test(line)) continue;            // table rows and separators
    if (/^<\/?[A-Za-z][^>]*>$/.test(line)) continue; // a line that is only a JSX tag
    kept.push(line);
  }
  let prose = kept.join('\n');

  prose = prose.replace(/<\/?[A-Za-z][^>]*>/g, ' ');            // inline JSX tags
  prose = prose.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1');       // images: keep alt text
  prose = prose.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');        // links: keep link text
  prose = prose.replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, '');        // list markers
  prose = prose.replace(/[*_`]+/g, '');                          // emphasis and code marks
  return prose;
}

function countWords(prose) {
  return prose
    .split(/\s+/)
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('Usage: node scripts/wordcount.mjs <file.mdx> [more.mdx ...]');
  process.exit(1);
}

for (const file of files) {
  const source = readFileSync(file, 'utf8');
  console.log(`${String(countWords(bodyProse(source))).padStart(6)}  ${file}`);
}

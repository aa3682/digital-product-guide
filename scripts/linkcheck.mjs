#!/usr/bin/env node
// Internal link checker for the pages under content/.
// Usage: node scripts/linkcheck.mjs
//
// Checks every internal link, both site-relative ("/path", "/path#id") and
// same-page ("#id"), in Markdown links and href attributes. A link passes
// when its path matches a page folder under content/ and, if it carries an
// anchor, that anchor exists on the target page. Anchors come from explicit
// heading ids ("## Title [#id]") or, for headings without one, from the
// heading text in lowercase with spaces as hyphens. External links are not
// checked. Exits 1 if any link is broken.

import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const CONTENT = 'content';

function findPages(dir) {
  const pages = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) pages.push(...findPages(path));
    else if (entry.name === 'index.mdx') pages.push(path);
  }
  return pages;
}

function routeOf(file) {
  const folder = relative(CONTENT, file).split(sep).slice(0, -1).join('/');
  return '/' + folder;
}

function stripCode(source) {
  return source.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
}

function anchorsOf(source) {
  const anchors = new Set();
  for (const match of stripCode(source).matchAll(/^#{1,6}\s+(.+)$/gm)) {
    const heading = match[1].trim();
    const explicit = heading.match(/\[#([^\]]+)\]\s*$/);
    if (explicit) {
      anchors.add(explicit[1]);
    } else {
      anchors.add(
        heading
          .toLowerCase()
          .replace(/[^\p{L}\p{N}\s-]/gu, '')
          .trim()
          .replace(/\s/g, '-'),
      );
    }
  }
  return anchors;
}

function linksOf(source) {
  const links = [];
  const lines = stripCode(source).split('\n');
  lines.forEach((line, index) => {
    const patterns = [/\]\(([/#][^)\s]*)\)/g, /href="([/#][^"]*)"/g];
    for (const pattern of patterns) {
      for (const match of line.matchAll(pattern)) {
        links.push({ target: match[1], line: index + 1 });
      }
    }
  });
  return links;
}

const pages = new Map();
for (const file of findPages(CONTENT)) {
  const source = readFileSync(file, 'utf8');
  pages.set(routeOf(file), { file, source, anchors: anchorsOf(source) });
}

let broken = 0;
let checked = 0;
for (const [route, page] of pages) {
  for (const { target, line } of linksOf(page.source)) {
    checked += 1;
    const [rawPath, anchor] = target.split('#');
    const path = rawPath === '' ? route : rawPath.replace(/\/$/, '') || '/';
    const destination = pages.get(path);
    let problem = null;
    if (!destination) problem = 'no page at this path';
    else if (anchor && !destination.anchors.has(anchor)) problem = `no anchor "#${anchor}" on ${path}`;
    if (problem) {
      broken += 1;
      console.error(`${page.file}:${line}  ${target}  (${problem})`);
    }
  }
}

console.log(`${checked} internal links checked, ${broken} broken.`);
if (broken > 0) process.exit(1);

# Digital Product Guide

An open guide to launching and selling a digital product on your own. It is an open, public site organized by The Launch Path (six steps) and The Business Side (seven areas), built on Nextra 4.

## What this is

A plain-English reference for people who make a downloadable or access-based product and sell it themselves: ebooks, workbooks, templates, courses, and memberships. Software, apps, subscription software, and physical goods are out of scope. The Launch Path walks through the work in order, from choosing what to make to keeping it selling. The Business Side covers the rules and ongoing obligations that cut across those steps: how the business is set up, taxes and records, copyright and licensing, terms and refunds and privacy, payments and chargebacks, email and audience rules, and marketing claims and disclosures.

It is written first for working professionals building a first digital product on the side, and second for creators who already sell and want the business side tightened up. The guide assumes U.S. law and U.S. tax rules and says so where state rules differ. Every dollar amount, rate, threshold, deadline, or fee set by law, an agency, or a platform lives on one reference page, with its source and the date it was last checked, and is never repeated on individual pages. No platform, payment processor, marketplace, or brand is named or linked anywhere on the site except on that figures page, and there only as the source of its own fee.

## Stack

- [Nextra](https://nextra.site) 4 with `nextra-theme-docs`
- Next.js App Router
- MDX content in `content/`
- [Pagefind](https://pagefind.app) search index generated at build time
- pnpm as the only package manager

## Run locally

Requires Node.js 20+ and [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Build

```sh
pnpm build
pnpm start
```

`pnpm build` also generates the search index (Pagefind) into `public/_pagefind`.

`pnpm wordcount <path>` counts the body prose of a content page, following the word-count rules in `CLAUDE.md`.

## License

The prose in `content/` is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The code is licensed under MIT (see `LICENSE`).

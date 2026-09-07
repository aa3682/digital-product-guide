# Digital Product Guide — repo instructions

## What this is
An open, public reference site on launching and selling a digital product on your own, built as a Nextra 4 docs site. Visual reference only: https://www.promptingguide.ai/ — match its look using the stock nextra-theme-docs; never copy its content or components.

Audience: first, working professionals building a first digital product on the side; second, creators who already sell and want the business side tightened up. Write for the first audience. The 'For practitioners' callout speaks to the second.

## Hard rules
1. No platform, payment processor, marketplace, or brand names anywhere — page copy, titles, slugs, frontmatter, metadata, alt text, README, comments, branch names, commit messages, PR text. One exception: /tools/this-years-figures may name a platform, and only to source that platform's own fee from the platform's own published fee or terms page. Everywhere else use the plain category: storefront, payment processor, email service, course platform, marketplace.
2. Nothing commercial is linked from the guide: no affiliate links, referral codes, product pages, signup pages, or pages that sell anything. The platform fee or terms pages cited on /tools/this-years-figures are the only exception.
3. All content is original. No verbatim or lightly paraphrased text from books, courses, blog posts, or platform help pages. When a fact needs support, cite a public primary source with a link: federal and state statutes, IRS publications and form instructions, state revenue agency pages, FTC guidance, U.S. Copyright Office circulars, USPTO pages, and a platform's own published fee or terms page for its own fees.
4. Content is educational, not individualized legal, tax, or business advice. The standard disclaimer lives on each section landing page only (introduction, process, domains, tools). Do not repeat it on individual pages.
5. Do not invent statistics, thresholds, limits, or rates. If a number is year-specific, state the year and cite the source. If unsure, write "[VERIFY]" inline and list it in the report. On knowledge-area pages the figures rule in the area template takes precedence: any figure set by law, regulation, an agency, or a platform's fee schedule goes on /tools/this-years-figures, not on the page.
6. No personal data, no real client examples. Worked examples use obviously fictional people.

## Attribution and license
- The guide is published under a project name, not a personal name. The site names no personal name, employer, credentials, or licenses anywhere, on pages or in metadata. Its author is described only by the author line.
- Prose is CC BY 4.0 and code is MIT. This is stated on /about and in README.
- The About page carries the first two sentences of the landing-page disclaimer as plain prose, not the full Callout. This is intentional.

## Structure
Top-level sections, in this sidebar order:
1. introduction
2. process — The Launch Path, one folder per step
3. domains — The Business Side, one folder per area; the reader-facing label is The Business Side and the URL stays /domains
4. tools — calculators, checklists, worksheets
5. glossary
6. about

The Launch Path, six steps in this order (title — slug):
1. Choose the Product — choose-the-product
2. Make the Product — make-the-product
3. Set the Price — set-the-price
4. Set Up the Shop — set-up-the-shop
5. Launch — launch
6. Keep Selling — keep-selling

The Business Side, seven areas in this order (title — slug):
1. Business Setup — business-setup
2. Taxes and Records — taxes-and-records
3. Copyright and Licensing — copyright-and-licensing
4. Terms, Refunds, and Privacy — terms-refunds-and-privacy
5. Payments and Chargebacks — payments-and-chargebacks
6. Email and Audience Rules — email-and-audience-rules
7. Marketing Claims and Disclosures — marketing-claims-and-disclosures

These names and their order are fixed. Do not rename or reorder them. Operational how-to — file delivery, access, customer support setup — belongs in Set Up the Shop, not in an area. Entity choice, taxes, records, and copyright belong in The Business Side, not in a step. Slugs are lowercase-kebab-case and match the folder name.

## Stack
- Nextra 4, nextra-theme-docs, Next.js App Router, MDX in content/
- pnpm only. Never use npm or yarn.
- Keep the build warning-free.
- Custom CSS limited to one accent color variable. No custom components unless the owner asks.

## Writing style
- Plain English, short paragraphs, active voice. Define a term the first time it appears and link it to the glossary.
- Landing pages and any page outside content/process/ and content/domains/: one H1, a two-sentence summary under it, then H2 sections. End with a "Related" list linking to 2–4 other pages. Pages under those two folders follow the Page templates section instead: the opening paragraph replaces the summary, and the cross-link sections replace the Related list.
- Use Nextra callouts sparingly: one "Note" or "Warning" per page at most.
- Tables for comparisons; bullet lists for steps; prose for explanation.

## Page templates
Two fixed skeletons. Every page under process/ uses the step skeleton. Every page under domains/ (the knowledge areas) uses the area skeleton. Write the sections in the order given; do not add, remove, or reorder them.
Every step page lives at `content/process/<slug>/index.mdx` and every knowledge-area page at `content/domains/<slug>/index.mdx`, one folder per page, matching the existing scaffold.

Step page skeleton:
1. Frontmatter with `title` and `description`. The description is one sentence, plain language.
2. H1 matching the frontmatter title.
3. Opening paragraph, no heading: what this step is, in plain words.
4. "Why it matters"
5. "What actually happens" — 3–5 short H3 subsections describing the concrete work.
6. "Questions to ask yourself"
7. "Common mistakes"
8. "Which business areas apply" — links to 2–4 area pages, one line each on why it applies at this step.
9. "For practitioners" — a Callout, 3–6 sentences, addressed to someone who already sells: what to tighten, migrate, or document at this step rather than build from scratch.
10. "Next step" — one link to the following step page. The last step links back to the first.

Area page skeleton:
1. Frontmatter with `title` and `description`.
2. H1 matching the frontmatter title.
3. Opening paragraph, no heading.
4. "Key ideas" — 4–7 H3 subsections, one concept each.
5. "Where it shows up in the process" — links to the relevant step pages.
6. "Common misconceptions"
7. "For practitioners" — a Callout, 3–6 sentences, addressed to someone who already sells: the ongoing obligation this area creates, and what to check first if they have been selling without it.
8. "Go deeper" — 2–6 links, prefer fewer, to public primary sources: federal and state statutes, IRS publications and form instructions, state revenue agency pages, FTC guidance, U.S. Copyright Office circulars, USPTO pages, and a platform's own published fee or terms page for its own fees.

Conventions for both:
- 700–1,000 words. Word count means body prose only — headings, tables, the Callout title, and Go deeper link titles are excluded.
- Measure with pnpm wordcount <path>.
- Second person, plain English. No jargon without a one-line explanation.
- Headings are plain nouns or short questions. H2 for the numbered sections above, H3 within them.
- No disclaimer on individual pages; it lives on the landing pages only.
- Area pages never print yearly-changing figures — limits, thresholds, rates, deadlines. Where a figure is relevant, name the concept in plain language and link to /tools/this-years-figures (for example: 'up to the yearly limit — see this year's figures'). That page holds every number with its year and primary source and is updated once a year. Every 'Go deeper' link must be fetched and confirmed live before the PR is opened; any link that cannot be confirmed is marked [VERIFY] in the report. The rule covers figures set by law, regulation, or an agency, or a platform's fee schedule. Round hypothetical numbers in a worked example ('200 units a month for ten years') are fine and encouraged.
- Links to the U.S. Code use the granuleid form: https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-titleNN-sectionNNNN&num=0&edition=prelim (substitute the title and section). The "title:NN section:NNN" form is not used.
- Row schema on /tools/this-years-figures: one figure per row, columns Concept | What it governs | Value | Year | Source, grouped under one H2 per knowledge area with a stable id (`## Area title [#slug]`) in the site's order. A figure appears once, under the area it fits best. Every Value comes from a fetched primary source or reads VERIFY; never fill a Value from memory. A platform's fee is sourced only from that platform's own published fee or terms page; the platform is named in the Source column and nowhere else on the site.
- Figures that vary by state: Value reads "Varies by state", Year is blank, and Source links a federal locator page if one exists or otherwise names the state office in plain text ("Your state's licensing board"). Never build a per-state table.
- Figures fixed by statute that do not change yearly still get a row: Year reads "Set by statute" and Source links the statute or the agency page.
- Internal links use the site's existing slugs. Check the actual paths under content/ before writing a link.
- The Callout is the stock component from nextra/components, the same one the landing pages use. Import it with exactly this line: `import { Callout } from 'nextra/components'`
- The hard rules and writing style above apply in full to page bodies, headings, and frontmatter, including titles, descriptions, and slugs.

Worksheet page (tools):
- Path: `content/tools/<slug>/index.mdx`, one folder per page.
- 700–1,000 words of body prose, tables excluded. Measure with pnpm wordcount <path>.
- Second person, plain English.
- H2 sections in this order, headings only: "What this measures", "Before you start", first input section, second input section, "The result", "What the number does and does not tell you", "What to do with it", "For practitioners" (Callout), then Related.
- Input section names are worksheet-specific: name each for the two things the worksheet gathers.
- Checklists use the same skeleton with the input sections named "Goals to consider" / "Your goals" and "The result" renamed "Your short list".
- Tables have three columns at most so they render on a phone without horizontal scrolling.
- No regulated figures. Name the concept and link the matching section of /tools/this-years-figures.
- "For practitioners" is a Callout and comes last, followed only by the Related list.
- No disclaimer.
- Example values in tables and worked examples are round hypothetical numbers.

## How to work
- Do exactly what the prompt asks. Do not add sections, pages, or features that were not requested.
- Commit after each completed prompt with a one-line message describing the change. Never push unless the prompt says to push.
- Never delete or rewrite existing content pages unless the prompt names the file.
- End every task with a "Report" section: what was created or changed (file paths), anything marked [VERIFY], anything you were unsure about, and the exact command to view the result.
- Do only what the current prompt asks. Do not act on your own follow-up suggestions, and do not edit files outside the scope of the prompt, even to fix something you notice. List anything you would have done under a "Suggested follow-ups" heading at the end of your report and in the PR description, and leave it there.

## Glossary
One page at /glossary, alphabetical. Every term is an H3 with an explicit id: `### Term [#term-id]`. The id is the term in lowercase, spaces and slashes replaced with hyphens, all other punctuation dropped, no leading or trailing hyphens. Definitions are 1 to 3 sentences with no regulated figures; where a term turns on one, link the matching section of /tools/this-years-figures by anchor. Same-page cross-references (`[other term](#other-term-id)`) are allowed sparingly.
Links to glossary terms from any page use the anchor form /glossary#term-id; a plural link text maps to the singular term's id.

## Glossary running list
Every term that any page links to /glossary. Add a term here when a new page links it. Future prompts reference this list instead of restating it.
- access product — access-product
- digital product — digital-product
- format — format
- membership — membership
- license — license
- version — version
- deliverable — deliverable
- list price — list-price
- net — net
- anchor — anchor
- storefront — storefront
- marketplace — marketplace
- payment processor — payment-processor
- payout — payout
- audience — audience
- launch discount — launch-discount
- cadence — cadence
- retire — retire

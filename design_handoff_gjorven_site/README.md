# Handoff: gjorven.no redesign (dark gallery direction)

## Overview

`gjorven.no` is the portfolio of Reidar Gjørven, a Norwegian graphic designer and illustrator based in Stryn, Nordfjord. The current site runs on Joomla with the EventGallery component and a 2013-era template. A static export of the live site is published at `https://gjorven-no.pages.dev` and is the reference for all existing content and image URLs.

This handoff covers a full redesign of the public site in one visual direction — a dark, image-forward "gallery room" where photographs and illustrations carry the page and typography stays quiet. Five pages plus two gallery templates are specified:

| Page | Route (current) |
|---|---|
| Hjem (home / Fjordscapes) | `/index.html` |
| Galleri — Fjordscapes | `/index.html` (gallery grid section) |
| Galleri — Bestefars bok | `/bestefars-bok.html` |
| Om Reidar Gjørven | `/om-reidar-gjorven.html` |
| Oppdrag | `/oppdrag.html` |
| Referanser | `/referanser.html` |
| Kontaktinformasjon | `/kontaktinformasjon.html` |

Two further series pages exist on the live site and are **not** yet designed: `/evig-is.html` and `/floralis.html`. Both should reuse the Fjordscapes gallery template verbatim (photographic series). See "Not in scope" below.

## About the design files

The files in this bundle are **design references created in HTML** — prototypes showing intended look and behaviour, not production code to lift directly. The task is to recreate these designs in the target environment using its established patterns.

There is currently no application codebase — the live site is Joomla-generated static HTML. Two implementation routes are reasonable and the choice is the developer's:

1. **Static site (recommended).** Astro, Eleventy, or hand-written HTML + one stylesheet, deployed to Cloudflare Pages (where the preview already lives). Content is small and changes rarely; a CMS is not required. Gallery series can be driven by a small JSON/YAML manifest per series (filename + title), which is all the current EventGallery output actually provides.
2. **Joomla template override.** Keep the CMS and rebuild the template plus an EventGallery layout override. Higher effort, only worth it if Reidar wants to keep adding images through the Joomla admin.

Either way, **do not carry over the 2013 template's markup, Bootstrap 2 grid, or table-based content layouts.** The content is short and structured; write it fresh.

## Fidelity

**High-fidelity.** Colours, typography, spacing and interaction states below are final. Recreate them exactly. The only intentionally loose parts are responsive breakpoints (the mocks are desktop-only at 1280px — see "Responsive behaviour") and the image assets, which need higher-resolution replacements in two places (see "Assets").

## Design tokens

### Colour

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#141513` | Page background (all pages) |
| `--bg-panel` | `#1c1d1a` | Image tile placeholder background |
| `--bg-light` | `#f4f1ea` | Light mat behind illustrations (Bestefars bok tiles) |
| `--ink` | `#f6f3ec` | Headings, primary text on dark |
| `--ink-strong` | `#f0ece3` | Wordmark, nav on hero, active chip text on light |
| `--ink-body` | `#ddd8cc` | Body copy, lead paragraphs (Om page) |
| `--ink-muted` | `#cfcabd` | Secondary body copy |
| `--ink-nav` | `#c6c1b4` | Nav links |
| `--ink-dim` | `#b3aea2` | Wordmark subtitle |
| `--ink-faint` | `#8f8a7e` | Row meta, eyebrow labels, numerals |
| `--ink-footer` | `#7d786d` | Footer text |
| `--rule` | `rgba(240,236,227,0.12)` | All hairline dividers and section borders |
| `--rule-strong` | `rgba(240,236,227,0.24)` | Inactive filter chip border |
| `--rule-btn` | `rgba(240,236,227,0.40)` | Button border, underlined link border |
| `--hover-wash` | `rgba(240,236,227,0.10–0.12)` | Chip / button hover fill |
| `--scrim` | `rgba(10,11,10,…)` | Hero and caption gradients, lightbox overlay |

There are no accent colours and no brand hue. The images are the colour. Do not introduce one.

### Type

Two families plus a mono for labels:

- **EB Garamond** (serif) — 400 regular only. All page titles, series names, image titles in the lightbox.
- **Work Sans** (sans) — 300 light for body copy, 500 medium for the wordmark.
- **IBM Plex Mono** — 400/500. Nav, eyebrow labels, filter chips, counters, footer. Always uppercase with wide tracking.

| Role | Family | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|---|
| Hero title (home) | EB Garamond | 66px | 400 | 1.02 | normal |
| Page title | EB Garamond | 52px | 400 | 1.04 | normal |
| Gallery title | EB Garamond | 56px | 400 | 1.02–1.04 | normal |
| Series row / lightbox title | EB Garamond | 30px | 400 | — | normal |
| Reference list item | EB Garamond | 26px | 400 | — | normal |
| Card heading (Oppdrag) | EB Garamond | 28px | 400 | 1.15 | normal |
| Lead paragraph | Work Sans | 18px | 300 | 1.75 | normal |
| Body / hero paragraph | Work Sans | 16–17px | 300 | 1.70–1.75 | normal |
| Contact value | Work Sans | 20px | 300 | 1.5 | normal |
| Wordmark | Work Sans | 15px | 500 | — | 0.22em, uppercase |
| Wordmark subtitle | Work Sans | 13px | 300 | — | normal |
| Nav link | IBM Plex Mono | 12px | 400 | — | 0.06em |
| Button label | IBM Plex Mono | 12px | 400 | — | 0.14em, uppercase |
| Eyebrow label | IBM Plex Mono | 11px | 400 | — | 0.12–0.14em, uppercase |
| Filter chip | IBM Plex Mono | 11px | 400 | — | 0.12em, uppercase |
| Image caption | IBM Plex Mono | 10–11px | 400 | — | 0.08em, uppercase |
| Footer | IBM Plex Mono | 11px | 400 | — | 0.06em, uppercase |

Google Fonts import used in the mock:
`https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Work+Sans:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&display=swap`

Self-host these in production (three families, four weights — subset to `latin` + `latin-ext` for Norwegian å/ø/æ).

### Spacing, geometry, elevation

- Design width: **1280px** content frame, page gutter **56px** left and right (the paper direction used 64px; the dark direction is 56px throughout — use 56px).
- Vertical section padding: **56px**; header block **34px** top / **30px** bottom; footer band **30px**.
- Grid gaps: image grids **12px**; card grids **12–16px**; text stacks **8 / 16 / 22 / 26 / 30 / 38px** — i.e. a loose 8px-ish scale, not strict.
- **Border radius: 0 everywhere.** No rounded corners on any element, including buttons, chips, and images.
- **No shadows inside the page.** The only shadows in the mock are the canvas presentation shadow around each page frame (`0 24px 60px rgba(20,20,18,0.3)`) — that is scaffolding for the design canvas and must NOT be implemented. Two exceptions that ARE part of the design: the book cover on the Bestefars bok gallery (`0 18px 44px rgba(0,0,0,0.5)`) and the lightbox image (`0 30px 80px rgba(0,0,0,0.6)`).
- Hairlines are always 1px solid `--rule`.

## Shared components

### Header (all pages except home)

Flex row, `space-between`, padding `34px 56px 30px`, followed by a 1px `--rule` top border on the next section.

- **Left — wordmark block:** column, 3px gap. Line 1 "Reidar Gjørven", Work Sans 500 15px, `0.22em`, uppercase, `--ink-strong`. Line 2 "Grafisk designer og illustratør", Work Sans 300 13px, `--ink-dim`. Links to home.
- **Right — nav:** flex row, 26px gap, IBM Plex Mono 12px, `0.06em`, `--ink-nav`. Items, in order: Hjem · Om Reidar Gjørven · Oppdrag · Referanser · Kontaktinformasjon. Hover: `--ink-strong` (the mock inherits an underline on hover; either underline or the colour shift is acceptable, pick one and apply site-wide). Current page: `--ink-strong`, no underline.

On the home page the same header sits **over** the hero image, absolutely positioned inside it, same padding.

### Footer

Full-width band, 1px `--rule` top border, padding `30px 56px`, flex row `space-between`, IBM Plex Mono 11px `0.06em` uppercase `--ink-footer`.

- Left slot is page-dependent: series list `EVIG IS · FJORDSCAPES · BESTEFARS BOK · FLORALIS` on Om / Referanser / Kontakt / Fjordscapes gallery; `TA KONTAKT FOR NÆRMERE OPPLYSNINGER OG PRISER` on Home and Oppdrag; `BEGGE BØKENE KAN BESTILLES FRA WWW.EPOKEFORLAG.NO` on the Bestefars bok gallery.
- Right slot: `© 2026 GJORVEN.NO`.

The series names in the left slot should be links on pages where they aren't already linked in the body.

### Series filter chips (gallery pages)

Flex row, 8px gap, wraps. Order: Fjordscapes · Evig is · Bestefars bok · Floralis.

- **Inactive:** IBM Plex Mono 11px `0.12em` uppercase, `--ink-nav`, 1px `--rule-strong` border, padding `9px 15px`, transparent background. Hover: background `--hover-wash`.
- **Active:** background `--ink-strong`, text `--bg`, no border, same padding. Not a link.

### Ghost button

IBM Plex Mono 12px `0.14em` uppercase, `--ink-strong`, 1px `--rule-btn` border, padding `14px 22px`, `white-space: nowrap`. Hover: background `--hover-wash`. Used for "SE GALLERI" on the hero.

## Screens

### 1. Hjem (home)

**Purpose:** land the visitor in the work immediately; Fjordscapes is the front series.

**Layout, top to bottom:**

1. **Hero, 600px tall.** Full-bleed `midnattsol.jpg` at `object-fit: cover`, `opacity: 0.88`. Over it, a vertical gradient scrim: `linear-gradient(to bottom, rgba(10,11,10,0.74) 0%, rgba(10,11,10,0.12) 45%, rgba(10,11,10,0.9) 100%)`. Content layer is a column with `justify-content: space-between`, padding `34px 56px 52px`: header at top, hero copy at bottom.
   - Bottom row: flex, `align-items: flex-end`, `space-between`, 60px gap. Left column max-width 660px, 20px gap: `<h1>` "Fjordscapes" (EB Garamond 66px) and a paragraph (Work Sans 300 17px/1.7, `--ink-muted`): "Landskap fra norske fjorder. Med bakgrunn fra Stryn i Nordfjord har jeg bygget opp et betydelig billedarkiv med landskapsmotiver fra fjell og fjord." Right: ghost button "SE GALLERI" → Fjordscapes gallery.
2. **Teaser grid.** Padding `64px 56px`, `grid-template-columns: repeat(4, 1fr)`, 12px gap, tiles 210px tall, `object-fit: cover`. Six images, two of them spanning two columns: `breifonn` (span 2), `lodalskapa`, `natt`, `odden`, `strynefjell` (span 2), `briksdalsbru`. The asymmetric spans are deliberate — keep them.
3. **Series index.** Padding `0 56px 64px`, 1px `--rule` top border. Four rows, each a link: flex, `space-between`, `align-items: baseline`, padding `24px 0`, 1px `--rule` bottom border (last row none). Left: EB Garamond 30px `--ink`. Right: IBM Plex Mono 12px `--ink-faint` — `SERIE →` or `OPPDRAG →`. Hover: whole row to `opacity: 0.65`.
   - Evig is (SERIE) · Bestefars bok (SERIE) · Floralis (SERIE) · "Bokdesign, grafikk, logo og identitet" (OPPDRAG → Oppdrag page).
4. **Footer.**

**Note on the current site's content:** the home page today also carries "En del av motivene er videre bearbeidet som akryl- eller akvarellmalerier og digital grafikk. Noen av motivene kan leveres som doble postkort, pakker a 7 assorterte kort med konvolutter. Ta kontakt for nærmere opplysninger og priser." plus a "» Les mer..." link to `/fjordscape/mer-om-fjordscapes.html`. In this design that copy moved to the Fjordscapes gallery page intro. If the "Les mer" article should stay reachable, add it as a text link under the gallery intro — confirm with Reidar.

### 2. Galleri — Fjordscapes

**Purpose:** browse one photographic series; open any image large.

1. Header (standard).
2. **Intro block.** 1px `--rule` top border, padding `30px 56px 40px`, flex row `align-items: flex-end`, `space-between`, 60px gap. Left column (max 640px, 16px gap): `<h1>` "Fjordscapes" (EB Garamond 56px) and paragraph (Work Sans 300 16px/1.7, `--ink-muted`): "Landskap fra norske fjorder. Noen av motivene kan leveres som doble postkort, pakker a 7 assorterte kort med konvolutter. Ta kontakt for nærmere opplysninger og priser." Right: counter "24 MOTIV", IBM Plex Mono 12px `0.1em`, `--ink-footer`, `nowrap`.
3. **Filter chips** — Fjordscapes active. Padding `0 56px 26px`.
4. **Grid.** Padding `0 56px 56px`, `repeat(4, 1fr)`, 12px gap. Each tile is a link, `position: relative`, background `--bg-panel`, `overflow: hidden`. Image 200px tall, `object-fit: cover`. Caption absolutely positioned bottom, full width, padding `26px 12px 10px`, background `linear-gradient(to top, rgba(10,11,10,0.85), rgba(10,11,10,0))`, IBM Plex Mono 11px `0.08em` uppercase `--ink-strong`. Tile hover: `opacity: 0.92`.
   - **In the mock the caption is always visible.** That is the intended default. If you prefer caption-on-hover, that is a legitimate variation but must be applied consistently across both gallery templates and confirmed first.
5. Footer (series list variant).

**The 24 Fjordscapes motifs, in order** (title — source filename):
Breifonn — `breifonn.jpg` · Breifonn vinter — `breifonnvinter.jpg` · Breng — `breng.jpg` · Briksdalsbru — `briksdalsbru.jpg` · Flo — `flo.jpg` · Greidung — `greidung.jpg` · Hjellehynna — `hjellehynna.jpg` · Hornindal — `hornindal.jpg` · Husøy — `husoy.jpg` · Kjenndal — `kjenndal.jpg` · Lodalskåpa — `lodalskapa.jpg` · Loen — `loen.jpg` · Midnattsol — `midnattsol.jpg` · Natt — `natt.jpg` · Nusfjord — `nusfjord.jpg` · Odden — `odden.jpg` · Robåt, Senja — `robatsenja.jpg` · Sauesprang — `sauesprang.jpg` · Senja — `senja.jpg` · Strynefjell — `strynefjell.jpg` · Stryn høst — `strynhost.jpg` · Svane — `svane.jpg` · Tindefjell — `tindefjell.jpg` · Vinterlys — `vinterlys.jpg`

(Four of these — `strynhost`, `svane`, `tindefjell`, `vinterlys` — have no title in the current EventGallery output; the titles above were derived from their filenames. Have Reidar confirm them.)

### 3. Galleri — Bestefars bok

Same template as Fjordscapes with **one important difference: illustrations are never cropped.** Tiles show the full artwork on a light mat.

1. Header (standard).
2. **Intro block.** 1px `--rule` top border, padding `30px 56px 40px`, `grid-template-columns: 1fr 300px`, 56px gap, `align-items: end`.
   - Left, 16px gap: `<h1>` "Bestefars bok" (EB Garamond 56px/1.04); paragraph (Work Sans 300 16px/1.7, `--ink-muted`, max 60ch): "Sanger, regler, eventyr og leker. I 2008 lanserte Epoke Forlag «Bestefars bok». Design og illustrasjoner ved Reidar Gjørven. Boken inneholder sanger, barnerim, regler og eventyr. Den er nyillustrert med over 200 tegninger og akvareller."; counter "39 ILLUSTRASJONER I UTVALG" (IBM Plex Mono 12px `0.08em`, `--ink-footer`). **Verify this count against the real folder before shipping — the mock lists 35.**
   - Right: book cover `images/boksbilder/COVER_LR_Bedstefars-bok.jpg`, full column width, natural aspect, shadow `0 18px 44px rgba(0,0,0,0.5)`.
3. Filter chips — Bestefars bok active.
4. **Grid.** Padding `0 56px 56px`, `repeat(5, 1fr)`, 12px gap. Each tile is a link, column, 8px gap:
   - A **light mat**: background `--bg-light` (`#f4f1ea`), padding 14px, fixed height 168px, flex centred. Inside, the illustration at `max-width/max-height: 100%`, `object-fit: contain`.
   - Below the mat, caption in flow (not overlaid): IBM Plex Mono 10px `0.08em` uppercase `--ink-faint`.
   - Hover: `opacity: 0.85`.
5. Footer (Epoke Forlag variant).

**Illustration titles in the mock** (35 shown; folder `Bestefars_bok`): Bamse · Bebelam · Elefantbrann · Engel · Erteprinsesse · Fabelfisk · Frukt · Geita · Griser · Hane og rev · Hattekanin · Heddalstroll · Kanin · Killing · Kje · Klippesau · Konge · Kontoristen · Marikåpe · Mus · Nattmåne · Okseskaft · Pitt Pott · Prinsen · Tekanna · Tordenskjold · Trekanthatt · Tre kinesere · Alle fugler · Fyrlys · Admiral · Bukkene Bruse · Elefanten · Elefantvanter · Fiskeskjær

### 4. Om Reidar Gjørven

1. Header.
2. **Body.** 1px `--rule` top border, `grid-template-columns: 1fr 216px`, 56px gap, `padding-right: 56px`, `align-items: start`.
   - **Left column,** padding 56px, 30px gap:
     - `<h1>` "Om Reidar Gjørven" (EB Garamond 52px/1.04).
     - Paragraph, Work Sans 300 18px/1.75, `--ink-body`, max 46ch: "Reidar Gjørven har en rekke års byråerfaring og 13 års praksis fra reklameavdeling og produksjonsavdeling i bokforlag: 5 år som AD i Aschehoug Forlag, 8 år som designsjef i J. W. Cappelens Forlag."
     - Paragraph, same style: "Startet eget designstudio i 1986: Cover Design as."
     - **Client block:** 1px `--rule` top border, 12px top padding, 14px gap. Eyebrow "Største oppdragsgivere gjennom årene" (IBM Plex Mono 11px `0.14em` uppercase `--ink-faint`). Paragraph, Work Sans 300 16px/1.8, `--ink-muted`, max 52ch: "Mobil Oil, Prior Norge, Collett Kjemi, Jernbaneverket, Landkreditt, Norrek, BNP Paribas, og forlagene Aschehoug, Cappelen, Kunnskapsforlaget, Tiden, Landbruksforlaget, EDB-Kunnskap og Gyldendal Yrkesopplæring." Then link "ALLE REFERANSER" (IBM Plex Mono 11px `0.12em` uppercase, 1px `--rule-btn` bottom border, 4px bottom padding, `align-self: flex-start`, 6px top margin) → Referanser. Hover `opacity: 0.7`.
   - **Right column:** portrait `images/reidar.jpg` at a fixed **216 × 305** with `margin-top: 56px`. This is the image's exact natural size — see "Assets", it must not be scaled up.
3. Footer (series list variant).

### 5. Oppdrag

1. Header.
2. **Title band.** 1px `--rule` top border, padding `56px 56px 44px`, `<h1>` "Oppdrag" (EB Garamond 52px/1.04).
3. **Three service columns.** 1px `--rule` top border, `repeat(3, 1fr)`, no gap; vertical 1px `--rule` dividers between columns. Column padding: first `34px 34px 34px 0`, middle `34px`, last `34px 0 34px 34px` (so text aligns flush to the page gutters). Each column: 16px gap, numeral (`01`/`02`/`03`, IBM Plex Mono 11px `0.12em`, `--ink-faint`), `<h2>` (EB Garamond 28px/1.15), paragraph (Work Sans 300 16px/1.75, `--ink-muted`).
   - **01 Grafisk design og profilering** — "Reidar Gjørven utarbeider alle typer reklame- og informasjonstrykksaker, og leverer ferdig opplag på kundens lager. Solide underleverandører sikrer høy kvalitet og moderate priser."
   - **02 Forlagsdesign** — "Bokomslag og bokdesign, binddesign, bokannonser og kataloger, informasjon til bokhandlere, utforming av messemateriell til bokmessen i Frankfurt."
   - **03 Foto, grafikk og illustrasjon** — "Kreativ fotografi, grafikk og akvareller. Illustrasjoner for ethvert behov."
4. **Three work cards.** Padding `0 56px 56px`, `repeat(3, 1fr)`, 12px gap. Each is a link, `position: relative`, `overflow: hidden`: image 300px tall `object-fit: cover`, plus a bottom caption overlay — padding `30px 16px 14px`, `linear-gradient(to top, rgba(10,11,10,0.88), rgba(10,11,10,0))`, IBM Plex Mono 11px `0.1em` uppercase `--ink-strong`. Hover `opacity: 0.9`.
   - Bokomslag og bokdesign → `/bokdesign.html`. Mock image: the Bestefars bok cover, `object-position: top`.
   - Grafisk design og illustrasjon → `/grafikk-og-illustrasjon.html`. Mock image: `fabelfisk.jpg`.
   - Logo og identitet → `/logo-og-identitet.html`. Mock image: `konge.jpg` — **a stand-in.** See "Assets".
5. Footer ("ta kontakt" variant).

### 6. Referanser

1. Header.
2. **Title band.** 1px `--rule` top border, padding `56px 56px 40px`, 18px gap: `<h1>` "Referanser" (EB Garamond 52px/1.04) and eyebrow "Største oppdragsgivere gjennom årene" (IBM Plex Mono 11px `0.14em` uppercase `--ink-faint`).
3. **Two-column client list.** Padding `0 56px 56px`, `repeat(2, 1fr)`, `column-gap: 56px`. Each entry: EB Garamond 26px `--ink`, padding `18px 0`, 1px `--rule` bottom border; last entry in each column has no border.
   - Column 1: Aschehoug · Cappelen · Kunnskapsforlaget · Tiden · Landbruksforlaget · EDB-Kunnskap · Gyldendal Yrkesopplæring
   - Column 2: Mobil Oil · Prior Norge · Collett Kjemi · Jernbaneverket · Landkreditt · Norrek · BNP Paribas
   - The split is publishers first, then other clients — preserve that grouping. Entries are plain text, not links.
4. Footer (series list variant).

### 7. Kontaktinformasjon

1. Header.
2. **Body.** 1px `--rule` top border, `grid-template-columns: 1fr 520px`.
   - **Left,** padding 56px, 38px gap: `<h1>` "Kontakt" (EB Garamond 52px/1.04); then a 26px-gap stack of three labelled fields, each 8px gap — eyebrow (IBM Plex Mono 11px `0.14em` uppercase `--ink-faint`) over value (Work Sans 300 20px/1.5 `--ink-strong`):
     - ADRESSE — "Reidar Gjørven" / "Gløshamaren 51, 6783 Stryn" (two lines)
     - E-POST — "reidar(a)gjorven.no" as a link: 1px `--rule-btn` bottom border, 3px bottom padding, `align-self: flex-start`, hover `opacity: 0.7`
     - TELEFON — "+47 966 07 695"
     - Then a closing paragraph: 1px `--rule` top border, 8px top padding, Work Sans 300 16px/1.75 `--ink-muted`, max 46ch — "Ta kontakt for nærmere opplysninger og priser."
   - **Right:** `odden.jpg`, full column, `min-height: 520px`, `object-fit: cover`.
3. Footer (series list variant).

**Email obfuscation:** the current site writes the address as `reidar(a)gjorven.no` to defeat scrapers. The mock keeps that string verbatim but wires it as a link, which is contradictory. Decide one: either keep the obfuscated plain text with no `mailto:`, or ship a real `mailto:reidar@gjorven.no` and drop the `(a)`. Ask Reidar which he wants. Do not ship the current halfway state.

## Interactions & behaviour

### Lightbox (both gallery pages)

The only stateful component in the design.

- **Open:** click any gallery tile. Prevent default navigation.
- **Overlay:** covers the page frame, `rgba(10,11,10,0.94)`, `z-index` above content, column layout, centred both axes, 22px gap, 56px padding.
- **Content, photographic series (Fjordscapes):** the image at `max-width: 100%`, `max-height: 76%`, `object-fit: contain`, shadow `0 30px 80px rgba(0,0,0,0.6)`. Below it, a baseline-aligned row with 18px gap: title (EB Garamond 30px `--ink`) and "LUKK ×" (IBM Plex Mono 11px `0.1em`, `--ink-footer`).
- **Content, illustration series (Bestefars bok):** identical, except the image sits on a `--bg-light` mat with 28px padding, `max-height: 74%` — illustrations must never be shown against the dark background.
- **Close:** click anywhere on the overlay. **Add in implementation** (the mock does not have them): `Escape` to close, `←`/`→` to step through the series, and a real focusable close button for keyboard and screen-reader users. Lock body scroll while open and restore focus to the originating tile on close.
- **Prev/next affordance:** not designed. Keyboard arrows are the minimum; if you add visible arrows, style them as ghost buttons in the overlay corners.

### Hover states summary

| Element | Hover |
|---|---|
| Nav link | `--ink-strong` (or underline — pick one site-wide) |
| Ghost button | background `--hover-wash` |
| Filter chip (inactive) | background `--hover-wash` |
| Gallery tile (photo) | `opacity: 0.92` |
| Gallery tile (illustration) | `opacity: 0.85` |
| Work card (Oppdrag) | `opacity: 0.9` |
| Series index row | `opacity: 0.65` |
| Underlined text link | `opacity: 0.7` |

No transitions are specified in the mock. Add a uniform `transition: opacity 160ms ease, background-color 160ms ease` — nothing longer, nothing with movement. The design is still; keep it still.

### State management

Exactly one piece of UI state per gallery page: the index of the open image, or null.

```
activeIndex: number | null
open(i)   → activeIndex = i
close()   → activeIndex = null
next()    → (activeIndex + 1) % images.length
prev()    → (activeIndex - 1 + images.length) % images.length
```

No data fetching. Series content is static — a manifest of `{ title, filename }` per series, resolved to image paths at build time.

Optional but worth doing: reflect the open image in the URL hash (`#midnattsol`) so a specific image can be linked and the back button closes the lightbox.

### Responsive behaviour

**The mocks are desktop-only at 1280px.** Breakpoints are the developer's call, but the intended behaviour:

- **Gallery grids:** 4 columns → 3 → 2 → 1. Bestefars bok 5 → 4 → 3 → 2. Keep the 12px gap; let tile heights scale rather than fixing 200/210px below ~900px.
- **Home teaser grid:** drop the 2-column spans below 900px; all tiles equal.
- **Header:** the mono nav at 12px with five items will not fit narrow. Below ~900px, collapse to a hamburger revealing a full-height dark panel with the same items at 16px, or stack the nav under the wordmark as a wrapping row. Do not shrink the type below 12px.
- **Two-column pages (Om, Kontakt):** stack to one column; image below text. On Kontakt cap the image at ~40vh.
- **Oppdrag service columns:** 3 → 1, replacing vertical dividers with horizontal ones.
- **Hero:** reduce to ~70vh; title from 66px down to ~40px; keep the scrim.
- **Gutters:** 56px → 24px on phones.

### Accessibility

The current design has real contrast headroom on text (`#cfcabd` on `#141513` ≈ 9:1) but two things need attention in implementation:

- `--ink-faint` (`#8f8a7e`) on `--bg` is ≈ 4.3:1 — acceptable at the sizes used (11–12px is below the large-text threshold, so this is borderline AA). If you can lighten those labels slightly without changing their character, do.
- Hero text sits over a photograph. The scrim handles the mock image; other hero images may not be as dark. Either keep `midnattsol.jpg` fixed as the hero, or raise the bottom scrim stop.
- Every image needs a real `alt`. Gallery images: use the motif title. Decorative-only images: empty `alt`.
- `lang="no"` on `<html>`.

## Assets

All images live on the current site and can be pulled from `https://gjorven-no.pages.dev`.

- **Gallery images** are served through the Joomla EventGallery resizer at
  `components/com_eventgallery/helpers/<hash>.jpg?&width=1600&folder=<Folder>&file=<filename>`
  with folders `Fjordscapes` and `Bestefars_bok`. **Do not keep these URLs.** The originals are in the Joomla `images/` tree — get them from Reidar or the server and re-encode: responsive `srcset` at 400/800/1600px, AVIF or WebP with JPEG fallback. The gallery pages load 24–39 images at once; without this the pages will be heavy.
- **Book cover:** `images/boksbilder/COVER_LR_Bedstefars-bok.jpg`.
- **Two known asset problems, both needing Reidar's input:**
  1. **Portrait — `images/reidar.jpg` is only 216 × 305px.** The design now renders it at exactly that size, which is why it is small. It should be a larger presence on the Om page. **Ask for a high-resolution photo** (≥ 900px wide) and then widen the right column back toward ~400–480px.
  2. **"Logo og identitet" card on Oppdrag has no real image.** The site's only logo asset is `images/rg-logo2.gif` — the 940 × 88 header wordmark, which cannot fill a 300px-tall card. The mock currently uses an unrelated illustration (`konge.jpg`) as a placeholder. **Ask for an actual identity work sample.** Same applies to the `/logo-og-identitet.html` page itself, which is not yet designed.
- **Logo/wordmark:** the design uses type, not `rg-logo2.gif`. The old GIF should be retired. If Reidar wants a mark, that is separate work.

## Not in scope / open questions

Carry these to Reidar before or during implementation:

1. **Two undesigned series pages** — `/evig-is.html` and `/floralis.html`. Both are photographic; reuse the Fjordscapes gallery template. Titles, intro copy, and image lists needed.
2. **Three undesigned Oppdrag sub-pages** — `/bokdesign.html`, `/grafikk-og-illustrasjon.html`, `/logo-og-identitet.html`. These need a portfolio-detail template that does not exist yet.
3. **`/fjordscape/mer-om-fjordscapes.html`** ("Les mer") — keep or fold into the gallery intro?
4. Confirm the four derived Fjordscapes titles and the "39 illustrasjoner" count.
5. Email link: obfuscated text or real `mailto:`?
6. Gallery captions: always visible (as designed) or on hover?
7. High-res portrait and a logo/identity work sample (see Assets).
8. Norwegian only, or is an English version wanted? The current site is Norwegian only and the design assumes that.

## Files in this bundle

- `README.md` — this document. Self-sufficient; implement from it.
- `Gjorven Homepage Directions.dc.html` — the design prototype. Open it in a browser to see all screens. It is organised as four turns of exploration on one canvas, newest at top:
  - **Turn 4** (`4a`–`4e`) — Hjem, Om, Oppdrag, Referanser, Kontakt. **This is the direction to build.**
  - **Turn 3** (`3a`) — Bestefars bok gallery. **Build this.**
  - **Turn 2** (`2a`) — Fjordscapes gallery. **Build this.**
  - **Turn 1** (`1a`, `1b`, `1c`) — three early homepage directions. `1b` is the ancestor of everything above and is superseded by `4a`. **`1a` and `1c` are rejected alternatives — ignore them entirely.**
- `support.js` — runtime for the prototype file. Required only to view the prototype locally; not part of the implementation.
- `screenshots/` — full-page captures of the seven screens to build, at the 1280px design width:
  - `4a-hjem.png` · `4b-om.png` · `4c-oppdrag.png` · `4d-referanser.png` · `4e-kontakt.png`
  - `2a-galleri-fjordscapes.png` · `3a-galleri-bestefars-bok.png`
  - These are reference only — the HTML prototype is the source of truth for exact values, and this README overrides both where they disagree.

Note that the prototype's page frames each sit inside a presentation card with a drop shadow and an id badge (`4a`, `2a`, …). Those are canvas scaffolding, not part of the design.

---
name: Alejandro Morillo — Portfolio
description: A hand-annotated technical blueprint of a builder's career, in neo-brutalist ink and paper.
colors:
  ink: "#14120f"
  paper: "#f4efe4"
  blue: "#2d46cc"
  coral: "#ff5a36"
  acid: "#d3ff3e"
  violet: "#6f3fd1"
typography:
  hand:
    fontFamily: "Shantell Sans, Segoe Print, cursive"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.2rem, 10vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontWeight: 600
    fontSize: "0.82rem"
rounded:
  sm: "8px"
  md: "14px"
  pill: "999px"
spacing:
  1: "0.5rem"
  2: "1rem"
  3: "1.75rem"
  4: "2.75rem"
  5: "4.5rem"
  6: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.6em"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.35em 0.85em"
  panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
---

# Design System: Alejandro Morillo — Portfolio

## Overview

**Creative North Star: "The Annotated Blueprint"**

The page reads as a technical document someone has marked up by hand: flat, hard-edged neo-brutalist blocks — thick ink borders, zero-blur offset shadows, saturated color fields — carrying a second layer of genuine hand-lettering and sketchy ink marks (circles, underlines, arrows) drawn over the important words, the way a reviewer annotates a printed page. The two languages stay separate: structure is drawn in a blocky grotesk and flat color, and the hand-drawn layer is reserved for emphasis, never the whole page. This was a brief-pinned world (the user supplied a bold flat-color app-mockup reference and a hand-drawn/sketchy chart reference); it was not chosen from the studio's own catalog. Rejected explicitly during the build: soft gradients, blurred shadows, glassmorphism, generic stock-photo heroes — none of them belong in this world.

**Key Characteristics:**
- Flat, saturated color blocks on a warm paper ground — never a gradient.
- Every elevated surface casts a hard, zero-blur, offset shadow.
- A second, hand-lettered ink layer (circles, underlines, arrows) marks emphasis; it never carries body copy.
- Cards and chips sit at small, varied rotations — nothing is perfectly axis-aligned at once.

## Colors

Four saturated fields plus ink and paper; each accent owns a whole region rather than trimming a neutral surface.

### Primary
- **Voltage Blue** (`#2d46cc`): the CTO/role chip and the Fuseaix project card. Darkened from the initial pick specifically to clear 4.5:1 contrast against paper text.

### Secondary
- **Signal Coral** (`#ff5a36`): the hand-drawn scribble mark around the hero name, the milestone badge, and the most recent career-timeline card. Always paired with ink (dark) text, never paper text — coral is too bright to carry light text legibly.
- **Deep Violet** (`#6f3fd1`): reserved for the closing contact card only, marking it as the page's single destination. Darkened during the build for the same contrast reason as blue.

### Tertiary
- **Acid Highlighter** (`#d3ff3e`): the primary call-to-action button and the MaiHOTEL project card. The brightest field on the page; used sparingly so it keeps its job of marking "the action."

### Neutral
- **Ink** (`#14120f`): all body text, borders, and shadows. Every border and every hard shadow on the page uses this exact value — there is no separate "border gray."
- **Paper** (`#f4efe4`): the page ground and every card's resting background.

### Named Rules
**The Ink-on-Bright Rule.** Coral and acid are bright enough that they always carry ink (dark) text, never paper (light) text. Blue and violet are dark enough to carry paper text, and both were deliberately darkened during the build until paper-on-them cleared 4.5:1.

## Typography

**Display Font:** Archivo (variable, with system-ui fallback)
**Hand Font:** Shantell Sans (variable, with Segoe Print / cursive fallback)
**Label/Mono Font:** JetBrains Mono (variable, with ui-monospace fallback)

**Character:** Archivo is the page's structural voice — a confident, slightly technical grotesk used at black weight for the loudest moments and regular weight for reading copy. Shantell Sans is the hand layer: a genuine hand-lettered face reserved for the hero name, section titles, and short annotation lines, never for paragraphs. JetBrains Mono marks anything technical or data-like — dates, tech-stack chips, nav labels.

### Hierarchy
- **Display** (800 weight, `clamp(3.2rem, 10vw, 7rem)`, Shantell Sans, line-height 0.92): the hero name only.
- **Headline** (900 weight, Archivo, ~1.7–3rem): section titles and project-card names.
- **Title** (700–800 weight, Shantell Sans, ~1.15–2.1rem): the hand-lettered accent line under a headline (section titles, project taglines, journey roles).
- **Body** (400 weight, Archivo, 17px base, 1.5 line-height): all paragraph copy.
- **Label** (600 weight, JetBrains Mono, 0.8–0.95rem, uppercase for section labels only): chips, section kickers, the ledger table header, nav links.

### Named Rules
**The Two-Voice Rule.** Archivo carries structure and reading; Shantell Sans carries emphasis and personality. A paragraph never sets in the hand face, and a headline never sets in the hand face at body-copy length.

## Layout

Single scrolling page, one column, centered content at `min(1180px, 100% - 2.5rem)`. Sections carry `7rem` (`--space-6`) of block padding, the single largest rhythm step, so each section reads as its own "page" of the notebook. Internal rhythm steps down through `4.5rem / 2.75rem / 1.75rem / 1rem / 0.5rem`. The project grid and the agency grid are 2-column on desktop, collapsing to 1 column under 860px; the career timeline and the ledger are always a single column with a left rail for the node/arrow markers. Fixed header (avatar mark + pill nav) floats above everything at 40 z-index and hides below 760px in favor of in-page anchor links reached by scrolling.

## Elevation & Depth

Flat by default, deliberately brutalist: every elevated element (buttons, chips-that-are-stickers, cards, panels) casts a hard-edged, zero-blur, fully-opaque shadow offset down-and-right from solid ink — never a soft ambient glow. Hover states on buttons and project cards lift the element toward its shadow's origin (translate up-left) and grow the shadow one step, simulating a card being peeled off the page.

### Shadow Vocabulary
- **sm** (`box-shadow: 4px 4px 0 0 #14120f`): buttons, stickers, the resting state of project cards.
- **md** (`box-shadow: 7px 7px 0 0 #14120f`): panels (journey cards, agency cards, the ledger table) and a button/card's hover state.
- **lg** (`box-shadow: 11px 11px 0 0 #14120f`): a project card's hover state — the largest lift on the page.

### Named Rules
**The Zero-Blur Rule.** No `box-shadow` on this page ever carries a blur radius. A soft shadow anywhere would contradict the flat, cut-paper logic the whole system is built on.

## Shapes

Borders are thick and solid: `3px` on panels and stickers, `4px` on buttons — always solid ink, never a tint. Panels round to `14px`; buttons and chips are full pills (`999px`); stickers use a small `10px` radius, closer to a cut sticky-note than a pill. Nothing sits perfectly square to the grid: cards, chips, and stickers each carry a small fixed rotation (roughly `-2.5deg` to `2.5deg`) assigned per-instance so the page reads as hand-placed rather than machine-aligned, while text within each block stays perfectly horizontal and legible.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 999px`), `4px` ink border.
- **Primary:** acid background, ink text, `sm` shadow, resting at `-1.2deg` rotation.
- **Hover / Focus:** lifts `-3px, -3px` and grows to `md` shadow; active state collapses to a `1px 1px` shadow to read as "pressed."
- **Ghost:** transparent background, same border/text/shadow behavior as primary.

### Chips
- **Style:** paper background, `2px` ink border, full pill, JetBrains Mono label text. Used for dates, tech-stack tags, and nav links.
- **State:** static — chips on this page are labels, not toggles.

### Stickers
- **Style:** coral background, ink text, `10px` radius, `3px` border, `sm` shadow, small rotation. The signature "sticky note" component — used for the hero milestone badge and the photo-pending markers.

### Cards / Panels
- **Corner Style:** `14px` radius.
- **Background:** paper by default; project and journey cards recolor per entry (blue / acid / coral) to code which era or project they represent.
- **Shadow Strategy:** `md` at rest, `lg` on hover for project cards (see Elevation).
- **Border:** `3px` solid ink, always.
- **Internal Padding:** `1.75rem` (`--space-3`) standard, `2.75–4.5rem` for the large contact card.

### Navigation
- Fixed pill nav in JetBrains Mono, paper background, ink border, `sm` shadow; each link highlights with an acid background fill on hover/focus. A circular ink "AM" mark anchors the far left, rotated `-6deg`, and doubles as the "back to top" link. Collapses entirely below 760px in favor of scrolling.

### Hand-drawn ink marks (signature component)
Rough, single-stroke SVG paths (`stroke: ink or coral`, `stroke-width: 6`, round caps/joins, no fill) used for the hero's circled name, the career-timeline connector arrows, the contact headline's underline, and the "scroll down" arrow. Each one draws itself in on scroll via `stroke-dashoffset`, timed to a single `1.1s` ease — this is the page's one authored motion signature, never repeated as a generic fade-in.

## Do's and Don'ts

### Do:
- **Do** keep every shadow hard-edged and zero-blur (`Xpx Xpx 0 0 #14120f`) — see The Zero-Blur Rule.
- **Do** pair coral and acid with ink text only, and blue and violet with paper text only — see The Ink-on-Bright Rule.
- **Do** give every card, chip, and sticker a small fixed rotation rather than leaving it axis-aligned.
- **Do** reserve Shantell Sans (the hand face) for short emphasis lines; set paragraphs in Archivo.
- **Do** draw new emphasis marks as single-stroke, round-cap SVG paths, animated once via `stroke-dashoffset` on scroll into view.

### Don't:
- **Don't** introduce a soft or blurred shadow anywhere — it breaks the flat, cut-paper logic of the whole system.
- **Don't** use gradients, glassmorphism, or backdrop blur; every surface is a flat, named color.
- **Don't** set paper (light) text on coral or acid, or ink (dark) text on blue or violet — both directions fail contrast or the system's own rule.
- **Don't** let the hand-drawn ink layer carry body copy or navigation — it is an accent, not a typeface for reading.
- **Don't** align every element to the grid at once; a page with zero rotation reads as generated, not hand-placed.

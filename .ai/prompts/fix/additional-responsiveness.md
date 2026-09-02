# Fix remaining responsive issues — header, hero layering, sigils, and narrow viewports

The current implementation is already visually strong and the overall design direction should be preserved.

I have attached updated screenshots showing the remaining responsive problems.

**Important:** the bright red/orange strokes visible in the screenshots are my visual annotations/highlights indicating problematic areas. They are NOT part of the website design. Do not reproduce them, style them, or interpret them as intentional UI elements.

The task is to fix the existing implementation rather than redesign it.

---

# 1. Inspect before modifying

First inspect the current implementation and determine the actual causes of the remaining issues.

Pay particular attention to:

* header structure;
* page-level overflow;
* section/container hierarchy;
* hero layering;
* `z-index`;
* absolute positioning;
* clipping/overflow;
* bottom decorative sigil rail;
* section footer/navigation elements;
* responsive breakpoints;
* fixed widths;
* fixed heights;
* viewport-relative positioning;
* negative margins;
* transforms;
* CSS media queries;
* any JavaScript viewport-dependent logic.

Do not immediately add another collection of breakpoint-specific pixel offsets.

Identify the underlying layout problems first.

The existing desktop design remains the primary visual reference.

---

# 2. HEADER — solve the narrow mobile problem properly

## Current problem

The updated responsive header still has overlapping text.

At narrow mobile widths, several header items compete for horizontal space:

* `ZARATHUSTRA / NIETZSCHE`
* `HIDE SIGILS`
* `EXCERPTS`
* `AUDIO: MUTED`

The result is text collision and unreadable controls.

This is especially visible on very narrow devices.

## Required behavior

The header must remain:

* readable;
* usable;
* visually minimal;
* horizontally stable;
* free from text collisions;
* free from page-level horizontal overflow.

### Preferred approach

Treat the header as a **compact utility/navigation strip**, independent from the main page layout.

At very narrow widths, it is acceptable for the header itself to have horizontal overflow/scrolling if necessary.

For example:

```text
┌──────────────────────────────────────────────┐
│ ZARATHUSTRA / NIETZSCHE  →  HIDE SIGILS →  │
│ EXCERPTS → AUDIO: MUTED                    │
└──────────────────────────────────────────────┘
```

The important distinction is:

**the header may scroll horizontally**

but:

**the entire page must never horizontally scroll because of the header.**

If horizontal scrolling is used:

* keep it restricted to the header;
* hide the scrollbar visually if appropriate;
* preserve touch scrolling;
* prevent text wrapping;
* keep each control intact;
* do not allow individual labels to overlap;
* do not clip important text in the middle of a word.

Use a compact mobile-specific header layout if that produces a better result.

For example, the desktop header can remain:

```text
ZARATHUSTRA / NIETZSCHE     HIDE SIGILS     EXCERPTS     AUDIO: MUTED
```

while mobile can become:

```text
ZARATHUSTRA / NIETZSCHE  →  HIDE SIGILS  →  EXCERPTS  →  AUDIO: MUTED
```

with controlled horizontal scrolling.

Do NOT solve this by simply making the typography extremely small.

Do NOT allow the header to wrap into an arbitrary multi-line paragraph.

---

# 3. PAGE-LEVEL OVERFLOW

Audit the entire page for horizontal overflow.

This is particularly important for unusual viewport widths such as:

* Galaxy Z Fold;
* narrow foldable outer screen;
* narrow portrait screens;
* unusual tablet widths;
* browser widths between standard breakpoints.

The following must never happen:

```text
viewport
┌────────────────────┐
│ page content       │──────────────>
│                    │   hidden page
└────────────────────┘
```

There should be no accidental page-level horizontal scrollbar.

However, do not blindly apply:

```css
overflow-x: hidden;
```

as the primary fix.

That can conceal broken positioning instead of fixing it.

First identify which element is exceeding the viewport.

Then correct the element's layout.

---

# 4. HERO — preserve the artwork under the content

## Current problem

The latest mobile hero is much better compositionally, but the eagle/serpent artwork is now partially covered by content.

The overlap itself is not necessarily bad.

In fact, controlled overlap is part of the visual language of this page.

The problem is that the content currently creates an opaque block that completely destroys portions of the artwork.

The result looks like accidental occlusion rather than intentional layering.

---

# 5. Preferred hero solution: intentional transparency/layering

Explore whether the best solution is to make some hero content backgrounds partially transparent.

For example:

```css
background: rgba(0, 0, 0, 0.65);
```

rather than a completely opaque background.

However, don't blindly make everything transparent.

The goal is:

**text remains readable**

while:

**the artwork remains partially visible underneath.**

This is especially desirable for:

* philosophy text;
* hero metadata;
* lower hero content;
* content panels overlapping the eagle.

A layered composition such as:

```text
TEXT
████████████████
████ EAGLE █████
████████████████
```

should become more like:

```text
TEXT
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓ EAGLE ▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```

where the artwork remains subtly visible through the darker layer.

---

# 6. Alternative hero solution

If transparency does not produce a sufficiently readable or aesthetically strong result, use a better responsive composition.

Possible approach:

### Mobile

```text
BECOME
WHO YOU
ARE.

      eagle
      ↓
   serpent

philosophy
────────────
01  02  03
```

The artwork may move slightly behind/below the main heading rather than directly underneath the entire text block.

The important thing is to preserve the **desktop visual relationship** between typography and artwork while making the overlap intentional.

Do not simply move the image far away from the text and lose the original composition.

---

# 7. Hero z-index / layering audit

Explicitly inspect the current stacking order.

Establish a deliberate hierarchy similar to:

```text
background textures
        ↓
decorative graphics
        ↓
eagle / serpent artwork
        ↓
semi-transparent content layers
        ↓
primary typography
        ↓
interactive controls
```

The exact order may differ depending on the existing design.

The key requirement is that the layering is intentional.

Do not use arbitrary `z-index: 9999` values.

Keep the stacking model understandable.

---

# 8. Bottom sigils — THUS SPOKE ZARATHUSTRA

## Current problem

The small decorative sigils / symbols at the bottom of the:

**THUS SPOKE ZARATHUSTRA**

section are not correctly positioned on mobile.

They also appear to be misaligned in the desktop version.

This indicates that the issue is probably not purely a mobile breakpoint problem.

Inspect the actual component responsible for this decorative rail.

It may currently depend on:

* fixed pixel positions;
* incorrect flex distribution;
* absolute positioning relative to the wrong parent;
* a desktop width assumption;
* transforms;
* a fixed number of columns;
* incorrect section padding.

---

# 9. Redesign the sigil rail as a proper layout component

Treat the bottom sigil row as its own responsive layout.

For example:

```text
┌─────────────────────────────────────┐
│ +    ✣    †    →    ◉    I    ✣    ⊕ │
└─────────────────────────────────────┘
```

On desktop:

* evenly distributed;
* vertically centered;
* aligned with the section's inner content boundaries;
* stable regardless of viewport width.

On mobile:

* either reduce spacing;
* reduce the number of visible decorative symbols;
* or allow a controlled horizontal arrangement.

Do NOT let individual symbols drift based on hardcoded `left` offsets.

Prefer:

```css
display: grid;
grid-template-columns: repeat(...);
```

or a carefully configured flex layout.

The rail should be aligned to the **section container**, not the viewport.

---

# 10. Bottom sigils — THE HIGHEST WILL

Apply the same analysis to the decorative sigil row in:

**THE HIGHEST WILL**

This should use the same underlying component/layout system where appropriate.

If both sections use visually equivalent decorative rails, consider extracting a reusable component rather than maintaining two implementations.

For example:

```text
section-sigil-rail
```

with configurable:

* symbols;
* density;
* alignment;
* visibility;
* mobile behavior.

Do not duplicate layout logic unnecessarily.

---

# 11. Desktop sigil alignment

Do not focus only on mobile.

The screenshots show that the decorative symbols are not perfectly aligned on desktop either.

The rail should have:

* consistent vertical alignment;
* consistent spacing;
* consistent relationship to section borders;
* consistent left/right insets;
* predictable symbol sizing.

The symbols should look like part of the graphic system rather than randomly positioned decorations.

---

# 12. Galaxy Z Fold and unusual viewport widths

This is particularly important.

Do not design only for:

```text
320
360
390
430
768
1024
1280
1440
```

The page must also behave correctly at **intermediate and unusual widths**.

For example:

```text
280–320px
360px
390px
430px
480px
540px
600px
768px
```

and especially narrow foldable widths.

A Galaxy Z Fold may have a viewport that falls into an awkward range where the existing breakpoint logic assumes a more conventional phone/tablet width.

---

# 13. Prefer fluid responsive rules

Where possible, prefer fluid values over many breakpoint-specific overrides.

Good candidates:

```css
clamp()
min()
max()
100%
100vw
container-relative sizing
aspect-ratio
```

For example:

```css
font-size: clamp(...);
padding-inline: clamp(...);
```

rather than many independent values.

For artwork:

```css
width: clamp(...);
max-width: ...;
```

combined with responsive positioning.

Do not over-engineer this.

The goal is simply to make the composition behave gracefully between breakpoints.

---

# 14. Consider container queries where appropriate

If the current component behavior depends primarily on the width of its parent section rather than the browser viewport, consider whether container queries would produce a more robust solution.

For example, a hero component should ideally respond to:

**available hero width**

rather than only:

**global viewport width**.

Use this only where it genuinely improves the architecture.

Do not introduce container queries merely for novelty.

---

# 15. Avoid breakpoint patchwork

Do NOT turn the code into:

```css
@media 360px { ... }
@media 375px { ... }
@media 390px { ... }
@media 412px { ... }
@media 430px { ... }
@media 540px { ... }
```

with slightly different pixel offsets everywhere.

If many breakpoints are necessary, that is a signal that the underlying layout model should be corrected.

Prefer a small number of meaningful responsive states:

```text
desktop
tablet
mobile
```

with fluid behavior between them.

Only add another breakpoint when there is a real compositional reason.

---

# 16. Preserve the current visual identity

Do not change:

* artwork;
* typography style;
* color palette;
* textures;
* overall composition;
* philosophical tone;
* section ordering;
* desktop art direction.

The current implementation already has the right aesthetic.

This task is about **responsive engineering and composition refinement**, not creative redesign.

---

# 17. Validation matrix

After implementing the fixes, explicitly test:

### Narrow mobile

* 280px
* 320px
* 360px
* 390px
* 430px

### Foldable / unusual

* narrow Galaxy Z Fold-style viewport
* wider foldable viewport
* intermediate widths between mobile and tablet

### Tablet

* 600px
* 768px
* 820px
* 1024px

### Desktop

* 1280px
* 1440px
* 1920px

Check both portrait and landscape where meaningful.

For every viewport verify:

### Header

* no text overlap;
* no accidental wrapping;
* controls remain usable;
* page itself does not horizontally scroll.

### Hero

* artwork remains visible;
* artwork/content overlap is intentional;
* typography remains readable;
* no accidental clipping;
* no large unexplained empty region.

### Sections

* full intended width;
* consistent borders;
* correct internal padding;
* no desktop-width assumptions.

### Sigil rails

* correctly aligned;
* evenly distributed;
* vertically centered;
* no clipping;
* no drifting symbols.

### Overall

* no horizontal page overflow;
* no vertical content clipping;
* no broken background layers;
* no layout jumps.

---

# 18. Final implementation requirement

After fixing the issues:

1. run lint;
2. run TypeScript checks;
3. run the production build;
4. inspect the actual rendered page at the target viewport sizes;
5. fix any remaining visual problems;
6. remove temporary/debug styles;
7. keep the implementation clean and maintainable.

Do not stop after the first CSS change.

Iterate based on the rendered result.

The final goal is:

> **The desktop, tablet, mobile, and foldable versions should feel like intentionally composed versions of the same artwork — not one desktop layout being progressively squeezed into smaller screens.**

Preserve the aggressive editorial / Nietzschean / deathcore visual language while making the responsive behavior technically robust.

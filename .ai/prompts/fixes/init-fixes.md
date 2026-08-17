# Fix responsive layout issues — preserve the existing design

The current implementation is visually strong on desktop and the overall art direction should NOT be changed.

I need you to fix several responsive layout issues visible on mobile and vertical-tablet viewports.

I have attached reference screenshots showing the problems:

* mobile: `mobile_view_issues.png`
* vertical tablet: `tablet_view_issues.png`
* additional decorative overlap: `small_sigils_overlap_isse.png`

Treat the current desktop implementation as the visual baseline.

**Do not redesign the page. Fix the responsive composition.**

---

## 1. First inspect the existing implementation

Before making changes:

* inspect the current layout hierarchy;
* inspect the site header component;
* inspect the main page/container wrappers;
* inspect hero positioning;
* inspect section width/max-width rules;
* inspect absolute/fixed positioning;
* inspect transforms used for the eagle/serpent artwork;
* inspect responsive breakpoints;
* inspect the small sigil/decorative elements;
* identify any desktop-specific dimensions that are leaking into mobile/tablet layouts.

Do not blindly add `width: 100%` everywhere.

Find the actual source of each issue and fix it at the appropriate component/layout level.

---

# 2. Mobile header

### Problem

On narrow mobile screens the header is not properly responsive.

The current header contains several navigation/control items such as:

* Zarathustra / Nietzsche metadata
* Hide Sigils
* Excerpts
* Audio / Muted

At approximately 360px viewport width, these elements compete for horizontal space and the header becomes cramped and visually broken.

### Required behavior

Create a deliberate mobile header composition.

At narrow widths:

* no horizontal overflow;
* no clipped text;
* no controls running into each other;
* no accidental wrapping that destroys the visual language;
* no horizontal scrollbar;
* all important controls remain accessible;
* preserve the existing minimal editorial aesthetic.

You may change the arrangement of header elements for mobile.

For example, it may become:

```text
[ ZARATHUSTRA / NIETZSCHE ]        [ controls ]
```

or use multiple compact rows if that better matches the existing design.

Do not simply reduce the font size until everything fits.

The header should look intentionally designed for mobile.

---

# 3. Mobile section width

### Problem

In the current mobile screenshot, the content sections appear constrained to a desktop-like internal width.

There is excessive unused space on the right side and the section frames do not properly occupy the available mobile viewport.

This is especially noticeable in the hero and the following "THUS SPOKE ZARATHUSTRA" section.

### Required behavior

On narrow mobile viewports:

* sections should use the available viewport width;
* section borders should extend correctly to the mobile content width;
* internal padding should be reduced appropriately;
* there should be no hidden desktop column/grid;
* no accidental fixed `width` or `max-width` should constrain the sections;
* no horizontal overflow should occur.

Use something conceptually like:

```css
width: 100%;
max-width: ...
padding-inline: ...
```

where appropriate, but adapt the actual implementation to the existing layout.

Do not destroy the intentional margins and borders from the desktop design.

The goal is:

**desktop: constrained/art-directed composition**

**mobile: full-width/art-directed composition**

not:

**desktop layout squeezed into a narrow column.**

---

# 4. Hero eagle/serpent overlap

### Problem

This is the most important visual issue.

The hero eagle/serpent artwork currently uses positioning that works on desktop but causes the artwork to overlap important typography and content on vertical tablet and mobile layouts.

In the screenshots the artwork collides with:

* `BECOME WHO YOU ARE`
* supporting Nietzsche text;
* hero controls/content;
* other hero elements.

The overlap feels accidental rather than intentional.

### Required behavior

Keep the dramatic overlapping composition on desktop.

However, introduce a **different responsive composition** for tablet and mobile.

Do NOT simply scale the desktop artwork proportionally.

The artwork should be repositioned according to the available width.

Possible strategies include:

### Desktop

```text
┌──────────────────────────────┐
│ BECOME                       │
│ WHO YOU       EAGLE/SNAKE    │
│ ARE.                         │
│                              │
│ philosophy                   │
└──────────────────────────────┘
```

### Tablet

Allow the eagle/serpent to become slightly smaller and move toward the center/right while preserving the dramatic composition.

### Mobile

Prefer a controlled vertical composition:

```text
┌──────────────────────┐
│ BECOME               │
│ WHO YOU              │
│ ARE.                 │
│                      │
│      EAGLE           │
│      + SNAKE         │
│                      │
│ philosophy           │
│                      │
│ 01   02   03         │
└──────────────────────┘
```

The exact composition is up to you, but the artwork must no longer unintentionally cover the primary text.

The artwork can still overlap decorative elements or extend beyond its immediate container where aesthetically appropriate.

The important distinction is:

**intentional artistic overlap = good**

**text becoming unreadable because of positioning = bad**

---

# 5. Hero artwork responsive strategy

Review whether the current implementation relies on:

* `position: absolute`;
* hardcoded `top/left/right`;
* fixed pixel widths/heights;
* `transform: translate(...)`;
* negative margins;
* viewport-specific offsets.

If those values are responsible for the issue, replace them with a more robust responsive strategy.

It is completely acceptable to use different positioning rules at different breakpoints.

For example:

```css
/* desktop */
.hero-art {
  position: absolute;
  ...
}

/* tablet */
@media (...) {
  .hero-art {
    ...
  }
}

/* mobile */
@media (...) {
  .hero-art {
    position: relative;
    ...
  }
}
```

If changing the artwork to normal flow on mobile produces a better result, do that.

Do not preserve desktop positioning merely for implementation simplicity.

---

# 6. Small sigils / decorative elements

Also inspect the small sigils shown in `small_sigils_overlap_isse.png`.

They currently appear to interfere with nearby content / decorative boundaries at smaller dimensions.

Make sure:

* sigils never cover readable text;
* sigils don't collide with section controls;
* decorative elements stay inside their intended visual region;
* they don't cause unexpected overflow;
* their size and spacing can reduce on mobile;
* their positioning remains visually balanced.

These elements are decorative, so **content and readability always have priority**.

If necessary, reduce the number of visible decorative sigils at very narrow widths rather than forcing all desktop decoration into mobile.

---

# 7. Vertical tablet specifically

Do not treat tablet as simply a larger mobile viewport.

The existing 768×1024-style vertical tablet composition has enough space for a richer composition than mobile, but not enough for the desktop arrangement.

Create an intermediate responsive state.

For vertical tablet:

* retain more of the desktop visual composition;
* reduce artwork scale;
* adjust artwork position;
* preserve asymmetric editorial layout;
* maintain section borders;
* avoid excessive empty space;
* keep typography readable.

Think in terms of:

```text
desktop
   ↓
tablet composition
   ↓
mobile composition
```

rather than:

```text
desktop scaled down
```

---

# 8. Do not break desktop

This is critical.

The current desktop result is already strong.

After making the changes, verify that the existing desktop composition remains essentially unchanged.

Do not globally modify:

* typography scale;
* artwork composition;
* section proportions;
* desktop spacing;
* desktop navigation;
* colors;
* textures;
* visual identity.

Responsive fixes should primarily live inside responsive rules or responsive component composition.

---

# 9. Responsive validation

After implementing the fixes, validate at least these viewport classes:

### Mobile

* 320px
* 360px
* 390px
* 430px

### Vertical tablet

* 768 × 1024
* 820 × 1180

### Desktop

* 1280px
* 1440px
* 1920px

Also check both portrait and landscape where relevant.

Look specifically for:

* horizontal scrolling;
* clipped text;
* overflowing artwork;
* overlapping text;
* broken section borders;
* excessive empty space;
* controls colliding;
* sigils overlapping content;
* unexpected fixed-width containers.

---

# 10. Preserve the artistic intent

Do not "fix" the problem by making the design generic.

The following characteristics should remain:

* dark editorial aesthetic;
* brutalist layout;
* distressed textures;
* thin borders;
* large typography;
* asymmetric composition;
* aggressive eagle/serpent artwork;
* philosophical atmosphere;
* controlled visual tension.

The goal is not to make the page look like a standard responsive website.

The goal is to make the **same art-directed experience adapt intelligently to different aspect ratios.**

---

# 11. Implementation quality

Prefer fixing the underlying layout architecture rather than adding many one-off overrides.

Avoid a collection of hacks such as:

```css
@media (...) {
  left: 17px;
}

@media (...) {
  left: 23px;
}

@media (...) {
  left: 31px;
}
```

If several elements require unrelated pixel corrections, step back and determine whether the parent layout is wrong.

Prefer:

* fluid sizing;
* CSS grid/flex where appropriate;
* `clamp()`;
* relative units;
* container-aware layouts;
* responsive positioning;
* meaningful breakpoints.

Use absolute positioning only where it contributes to the visual composition.

---

# 12. Final validation

After implementing the fixes:

1. run lint/typecheck/build;
2. inspect all target viewport sizes;
3. verify no horizontal overflow;
4. verify the header is usable on 320–430px screens;
5. verify sections use the intended mobile width;
6. verify the eagle/serpent does not unintentionally cover text;
7. verify tablet has its own sensible composition;
8. verify decorative sigils don't overlap content;
9. verify desktop remains visually intact;
10. clean up any temporary/debug CSS.

Do not stop after making the first CSS adjustment.

Iterate until the mobile and tablet versions look like **deliberately designed responsive versions of the existing concept**, not a desktop page that has merely been squeezed into a smaller viewport.

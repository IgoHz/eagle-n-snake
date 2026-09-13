## Fix desktop section height synchronization

There is a layout issue in the current desktop/tablet implementation that needs to be fixed without changing the visual design.

### Problem

On wide desktop screens and on large tablets where the desktop layout is active, the:

**"THUS SPOKE ZARATHUSTRA"**

section on the right can require more vertical space than the hero/right-column layout currently provides.

At the moment, the section heights appear to be influenced by the hero section or a fixed viewport-based height rather than being determined naturally by their content.

This causes content in the "THUS SPOKE ZARATHUSTRA" section to become cramped/overlap or extend beyond its intended section boundaries.

The uploaded screenshot illustrates the problem.

---

## Desired behavior

The desktop composition should behave as a **content-driven two-column grid**.

Conceptually:

```text
┌──────────────────────────┬───────────────────────┐
│                          │                       │
│                          │  THUS SPOKE           │
│                          │  ZARATHUSTRA          │
│         HERO             │                       │
│                          ├───────────────────────┤
│                          │                       │
│                          │  THE HIGHEST WILL     │
│                          │                       │
└──────────────────────────┴───────────────────────┘
```

The important rule is:

> **The layout must be sized by its content, not by the hero's viewport height.**

The total height of the hero and the right-hand column must always remain synchronized.

### Specifically

* The "Thus Spoke Zarathustra" section must be allowed to grow naturally when its content requires additional height.
* The "The Highest Will" section must also contribute its natural content height.
* The hero should stretch to the resulting total height of the right-hand column.
* If the hero content/artwork requires more vertical space, the overall grid should grow accordingly.
* No content should overlap or be clipped.
* Do not solve this by simply increasing a hardcoded height.
* Do not solve this by adding arbitrary large `min-height` values.
* Do not make the right sections independently equal to `100vh`.
* Avoid JavaScript measurement unless there is a genuine reason CSS cannot express the layout.

The desired relationship is approximately:

```text
hero height
    =
right column section 1 height
    +
right column section 2 height
```

with the **actual content determining those heights**.

---

## Preferred implementation approach

First inspect the current DOM/component hierarchy and CSS before modifying anything.

If the current desktop layout uses CSS Grid, prefer solving this with native grid sizing.

For example, the conceptual structure should be closer to:

```css
.desktop-layout {
  display: grid;
  grid-template-columns: ...;
  grid-template-rows: auto auto;
}

.hero {
  grid-row: 1 / span 2;
}

.right-section {
  min-height: 0;
}
```

The exact implementation must be adapted to the existing component structure rather than blindly copying this example.

The important properties are:

* `grid-template-rows: auto ...`
* natural content height
* hero spanning the corresponding grid rows
* `align-items: stretch`
* no viewport-based height controlling the relationship

If the existing implementation uses flexbox, determine whether converting the relevant desktop composition to CSS Grid would provide a cleaner solution.

---

## Important distinction

Do not make every section have the same fixed height.

Instead, create a relationship where:

```text
┌───────────────┐
│               │
│     HERO      │
│               │
│               │
├───────────────┤
│ RIGHT TOP     │  ← natural content height
├───────────────┤
│ RIGHT BOTTOM  │  ← natural content height
└───────────────┘

Hero height = combined right-column height
```

The right column may therefore become taller or shorter depending on its actual content.

---

## Responsive behavior

Apply this behavior only to the layouts where the two-column desktop composition is actually active.

For mobile/narrow layouts:

* sections should return to normal vertical document flow;
* no artificial height synchronization should remain;
* each section should size naturally according to its own content.

Also verify the breakpoint where the large-tablet layout changes into the mobile layout.

---

## Preserve the design

Do NOT redesign the page.

Do NOT change:

* typography;
* artwork;
* colors;
* spacing system unless required to prevent the layout issue;
* section order;
* visual hierarchy;
* desktop composition;
* eagle/serpent artwork.

This is a **layout correctness fix**.

---

## Validation

After implementing the fix, test at several desktop widths, especially:

* ~1280px
* ~1440px
* ~1728px
* ~1920px
* a large tablet width where the desktop layout is still active

Also test with browser zoom / different viewport heights.

Specifically verify:

1. "Thus Spoke Zarathustra" content never overflows its section.
2. Hero and right-column total height remain synchronized.
3. Increasing the amount of text in the right section naturally increases the overall layout height.
4. Reducing the content naturally reduces the layout height.
5. No fixed `100vh`/viewport height is unintentionally controlling the grid.
6. No JavaScript resize/measurement workaround was introduced unnecessarily.
7. Mobile layout remains content-driven and unaffected.

Inspect the resulting implementation rather than assuming the first CSS change solved the problem.

# Build a conceptual Nietzsche-inspired landing page

You are working in an existing Next.js application created from the official CLI.

The goal is to build a **high-end conceptual landing page centered around Friedrich Nietzsche's eagle and serpent imagery** — the eagle with a snake around its neck/body as depicted in *Thus Spoke Zarathustra*.

This is not a generic portfolio page, SaaS landing page, or AI-generated "futuristic" website.

It should feel like a **digital philosophical artifact**: somewhere between an old Nietzsche/Zarathustra engraving, extreme black-metal/deathcore tattoo artwork, brutalist editorial design, occult symbolism, and a highly refined contemporary web experience.

The final result should look intentionally designed by a strong art director and frontend engineer.

---

## 1. FIRST: inspect the existing project

Before changing anything:

* inspect the complete repository structure;
* inspect `package.json`;
* identify the Next.js, React, TypeScript, Tailwind/CSS setup and existing dependencies;
* inspect the `design/` directory recursively;
* inspect every relevant mockup, image, SVG, texture, and other asset inside `design/`;
* understand the visual hierarchy and composition of the supplied mockup.

Do **not** immediately start coding.

The existing `design/` directory is the primary design reference for this task.

If the mockup and your assumptions conflict, **the supplied mockup wins**.

Do not replace or redesign the visual concept simply because you have a different idea.

---

# 2. Core visual concept

The central visual symbol is:

**an eagle with a serpent wrapped around its neck/body.**

The eagle and serpent should feel like a single philosophical creature rather than two unrelated illustrations.

The symbolism should evoke:

* the eagle — height, pride, strength, ascent, vision, overcoming;
* the serpent — earth, instinct, wisdom, cyclicality, tension, recurrence;
* their union — the tension between ascent and descent, spirit and earth, overcoming and recurrence.

The page should communicate Nietzschean ideas visually rather than explaining them like an academic article.

The artwork should feel:

* edgy;
* spiky;
* aggressive;
* dark;
* slightly disturbing;
* intellectual;
* occult;
* primitive/organic;
* highly graphic;
* intentionally imperfect.

Think:

**Nietzsche book engraving × deathcore tattoo × black-metal artwork × brutalist editorial website**

rather than:

**generic cyberpunk × neon × futuristic SaaS × clean geometric logo.**

---

# 3. Design language

Use the supplied mockup as the main visual authority.

Preserve its overall:

* composition;
* typography hierarchy;
* negative space;
* monochrome palette;
* borders;
* fine rules;
* graphic marks;
* image treatment;
* editorial rhythm;
* section proportions.

The visual language should primarily use:

* black;
* off-white / ivory;
* dirty paper tones;
* charcoal;
* very restrained gray.

Avoid colorful gradients.

Avoid neon.

Avoid glossy 3D effects.

Avoid generic glassmorphism.

Avoid excessive blur.

Avoid "AI website" aesthetics.

Avoid generic cyberpunk decoration.

---

# 4. Artwork treatment

The eagle/serpent artwork is the main visual identity.

When appropriate, use the supplied artwork directly from `/design`.

Do not automatically redraw it with CSS or replace it with a generic icon.

The artwork should retain:

* rough ink character;
* sharp feather structures;
* elongated spikes;
* irregular edges;
* aggressive silhouettes;
* distressed linework;
* deathcore/black-metal tattoo energy;
* asymmetry;
* strong black masses;
* controlled negative space.

It should not look like:

* a medical symbol;
* a corporate logo;
* a clean vector mascot;
* a generic tribal tattoo;
* a fantasy game logo;
* a random occult symbol.

If an asset has transparency, preserve it.

If an asset is intended as a texture, use it as a texture rather than placing it inside an arbitrary card.

---

# 5. Page structure

Use the supplied mockup to determine the exact composition, but the conceptual structure should approximately communicate:

## Hero — "BECOME WHO YOU ARE"

The first viewport should immediately establish the entire concept.

The eagle/serpent should be the dominant visual element.

Typography should remain relatively restrained so the artwork has room to breathe.

Possible primary statement:

**BECOME
WHO YOU
ARE.**

Supporting philosophical copy should be minimal.

The hero should feel like an album cover / philosophical artifact rather than a conventional marketing hero.

---

## Zarathustra / philosophy section

Introduce the relationship between Nietzsche, Zarathustra, the eagle and serpent.

Use short philosophical excerpts only.

Do not fabricate Nietzsche quotations.

If using quotations, use well-established/public-domain Nietzsche text and keep excerpts short.

The typography should feel editorial and archival.

The eagle/serpent can appear again here, but in a different scale or composition.

---

## "The Highest Will" / ascent section

Use the mountain imagery/assets from `/design` if available.

Create a strong visual contrast between:

* enormous landscape;
* tiny human figure;
* typography;
* the eagle/serpent symbol.

The mountain should represent ascent, overcoming and distance rather than simply being decorative landscape photography.

---

## Philosophical paths

Use the conceptual categories suggested by the mockup, for example:

* OVERCOME YOURSELF
* CREATE YOUR VALUES
* ETERNAL RETURN

Treat them as visual navigation points rather than ordinary feature cards.

They should feel like fragments of a philosophical system.

---

## Visual/sigil exploration

Use the supplied graphic assets and/or fragments to create a section that feels like a collection of discovered symbols.

Possible elements:

* custom sigils;
* feathers;
* snake fragments;
* thorn structures;
* small crosses;
* geometric marks;
* distressed lines;
* ornamental dividers.

Do not turn this into a standard icon grid.

It should feel closer to a **black-metal tattoo sheet / occult manuscript / design archive**.

---

## Final section

End with the strongest philosophical statement and/or the complete eagle-serpent symbol.

The ending should feel conclusive and slightly mysterious rather than like a normal SaaS CTA.

Avoid generic:

"Get Started"

"Learn More"

"Contact Us"

unless the design genuinely requires an equivalent interaction.

---

# 6. Interaction and motion

Use motion sparingly and intentionally.

The page should feel alive, but not like a motion-design demo.

Good candidates:

* subtle parallax of artwork;
* slow movement of paper/grain layers;
* subtle reveal of typography;
* feather/snake fragments moving independently;
* very restrained image distortion;
* section transitions;
* subtle hover states;
* small sigil rotations or shifts;
* artwork responding slightly to pointer movement.

The main eagle/serpent should NOT constantly spin, float, bounce or aggressively animate.

Prefer:

**slow + subtle + unsettling**

over:

**fast + flashy + futuristic.**

Respect `prefers-reduced-motion`.

---

# 7. Typography

Use the typography already implied by the supplied design.

Prioritize:

* strong editorial display typography;
* restrained monospace / technical typography for metadata;
* wide tracking where appropriate;
* dramatic line breaks;
* uppercase labels;
* small technical annotations.

Typography is part of the artwork.

Do not fill the page with large paragraphs.

Use generous negative space.

---

# 8. Layout

The desktop composition should feel deliberately asymmetric.

Avoid turning everything into:

```text
container
  └── centered
       └── card
            └── text
```

Use:

* asymmetric columns;
* overlapping artwork;
* vertical compositions;
* large empty areas;
* thin borders;
* unexpected alignment;
* visual tension.

However, keep the implementation responsive and maintainable.

On mobile, do not simply shrink the desktop layout.

Recompose the artwork and typography intentionally for narrow screens.

---

# 9. Technical requirements

Build this as a real Next.js application, not a static screenshot.

Use the project's existing stack where possible.

Prefer:

* semantic HTML;
* reusable React components;
* TypeScript;
* responsive Tailwind CSS;
* optimized Next.js image handling where appropriate;
* accessible interactions;
* good performance;
* clean component boundaries.

Do not introduce a large dependency just to implement a small visual effect.

Do not rewrite the entire project architecture unnecessarily.

Do not add unnecessary libraries.

Keep the implementation understandable and maintainable.

## Feature-Sliced Design architecture

Use **Feature-Sliced Design (FSD)** as the architectural approach for the application.

Do not treat FSD as a reason to over-engineer the page. Apply it pragmatically according to the actual complexity of the landing page.

Prefer the standard FSD hierarchy:

```text
src/
├── app/
├── pages/
├── widgets/
├── features/
├── entities/
└── shared/
```

Use the layers according to their intended responsibility.

### App

Use `app/` for:

* Next.js App Router routes;
* global styles;
* providers;
* fonts;
* application-level configuration;
* root layout;
* global metadata.

Do not put page-specific visual components into `app/` simply because they are used by the route.

### Pages

Use `pages/` for page-level composition when it makes sense within the project's Next.js architecture.

For a single conceptual landing page, it is acceptable for the page layer to primarily compose widgets rather than contain large amounts of implementation logic.

Avoid creating artificial page abstractions purely to satisfy FSD.

### Widgets

Use `widgets/` for substantial independently understandable sections of the landing page.

For example:

```text
widgets/
├── hero/
├── philosophy/
├── highest-will/
├── paths/
├── sigil-gallery/
└── conclusion/
```

A widget should represent a meaningful page section or composition, not a generic `div` wrapper.

For example:

```text
widgets/hero/
├── ui/
│   └── Hero.tsx
└── index.ts
```

The Hero widget can compose smaller shared components and assets without exposing its internal implementation.

### Features

Use `features/` only when there is a meaningful user interaction or user-oriented behavior.

Potential examples:

```text
features/
├── explore-philosophy/
├── sigil-navigation/
└── artwork-interaction/
```

Do **not** create features simply because FSD has a `features` layer.

If a section is purely presentational, it belongs in a widget rather than a feature.

### Entities

Use `entities/` for domain concepts that have their own meaning and are reused across the application.

Potential examples:

```text
entities/
├── eagle/
├── serpent/
├── philosophy/
└── quote/
```

Only introduce an entity when it provides genuine value.

For example, if the eagle/serpent artwork, metadata, variants or presentation logic is reused across multiple widgets, an `eagle` or `serpent` entity may be appropriate.

Do not create entities for every noun appearing in the copy.

### Shared

Use `shared/` for genuinely reusable infrastructure and UI primitives.

Potential structure:

```text
shared/
├── ui/
├── assets/
├── lib/
├── config/
└── styles/
```

Examples:

* typography primitives;
* ornamental dividers;
* sigil primitives;
* reusable image wrappers;
* animation utilities;
* responsive utilities;
* shared constants;
* common visual tokens.

Do not put page-specific components into `shared/`.

---

## FSD dependency rules

Respect FSD's directional dependency model:

```text
app
 ↓
pages
 ↓
widgets
 ↓
features
 ↓
entities
 ↓
shared
```

Lower layers must not import from higher layers.

In particular:

* `shared` must not know about the page;
* `entities` must not import widgets;
* `features` must not import widgets;
* widgets should compose features/entities/shared;
* page composition should remain thin.

Avoid circular dependencies.

Prefer public APIs (`index.ts`) for cross-slice imports instead of reaching into another slice's internal implementation.

---

## Next.js-specific consideration

Do not force the Next.js App Router structure to become an unnatural FSD structure.

Keep Next.js routing conventions in `app/`.

For example:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── widgets/
│   ├── hero/
│   ├── philosophy/
│   ├── highest-will/
│   ├── paths/
│   └── conclusion/
│
├── entities/
│   ├── eagle/
│   ├── serpent/
│   └── philosophy/
│
└── shared/
    ├── ui/
    ├── assets/
    ├── lib/
    └── styles/
```

The exact structure may differ if the existing project already establishes a reasonable convention.

Do not perform a large architectural migration if the existing project does not require it.

---

## Component granularity

Avoid both extremes.

Do not create:

```text
shared/ui/
├── SectionTitle.tsx
├── SectionLabel.tsx
├── SectionText.tsx
├── SectionBorder.tsx
├── SectionWrapper.tsx
├── SectionContainer.tsx
└── ...
```

just because each piece technically could be reusable.

Likewise, do not put a 500-line landing page into one component.

Extract a component when it has:

* a meaningful responsibility;
* reusable behavior;
* meaningful visual composition;
* independent state/interaction;
* or enough complexity to justify separation.

The architecture should make the code easier to understand, not make the project look architecturally impressive.

---

## Component and file naming convention

Use **kebab-case for React component file names and component directories** throughout the project.

This is an explicit project convention and should be followed consistently.

Examples:

```text
hero-section.tsx
hero-artwork.tsx
hero-content.tsx
philosophy-section.tsx
highest-will-section.tsx
sigil-gallery.tsx
quote-block.tsx
section-divider.tsx
artwork-frame.tsx
```

Directories should follow the same convention:

```text
widgets/
├── highest-will/
├── sigil-gallery/
├── philosophy-section/
└── hero-section/
```

The **React component symbol itself remains PascalCase**:

```tsx
export function HeroSection() {
  // ...
}

export function HeroArtwork() {
  // ...
}

export function SigilGallery() {
  // ...
}
```

Import using the file's kebab-case path:

```tsx
import { HeroSection } from "@/widgets/hero-section";
import { SigilGallery } from "@/widgets/sigil-gallery";
```

Do not use PascalCase filenames such as:

```text
HeroSection.tsx
HeroArtwork.tsx
SigilGallery.tsx
```

Prefer:

```text
hero-section.tsx
hero-artwork.tsx
sigil-gallery.tsx
```

## General naming rules

Apply kebab-case consistently to:

* component files;
* component directories;
* feature directories;
* entity directories;
* widget directories;
* utility files;
* hooks;
* configuration modules;
* other project-owned source files where the framework does not impose another convention.

Examples:

```text
use-scroll-progress.ts
use-artwork-parallax.ts
animation-utils.ts
image-loader.ts
design-tokens.ts
```

React symbols, types and interfaces should continue using normal TypeScript/React conventions:

```tsx
function HeroSection() {}

type HeroSectionProps = {}

interface ArtworkMetadata {}
```

## Next.js framework exceptions

Follow Next.js's required filesystem conventions when they conflict with this rule.

For example:

```text
app/
├── layout.tsx
├── page.tsx
├── loading.tsx
├── error.tsx
├── not-found.tsx
└── globals.css
```

Do not rename framework-reserved files merely to enforce the project naming convention.

The naming rule applies primarily to **application-owned components and modules**, not framework-required filenames.

## Avoid unnecessary `index.tsx` components

Prefer descriptive filenames:

```text
hero-section.tsx
```

over:

```text
index.tsx
```

when the file itself contains the component.

Use `index.ts` only when it provides a deliberate public API for a slice:

```text
widgets/
└── hero/
    ├── ui/
    │   └── hero-section.tsx
    └── index.ts
```

For example:

```ts
export { HeroSection } from "./ui/hero-section";
```

This keeps imports clean:

```tsx
import { HeroSection } from "@/widgets/hero";
```

while preserving meaningful filenames inside the slice.

## Consistency rule

Do not mix naming styles within the project.

Avoid structures such as:

```text
Hero.tsx
hero-section.tsx
SigilGallery.tsx
snake-artwork.tsx
```

Prefer:

```text
hero-section.tsx
sigil-gallery.tsx
snake-artwork.tsx
```

Keep the filesystem **kebab-case**, while keeping React/TypeScript identifiers **PascalCase/camelCase** according to normal language conventions.

## Design assets and FSD

Keep the existing root-level `design/` directory as the **design reference/source material**.

Do not blindly move the entire directory into `shared/assets`.

Instead:

1. inspect `/design`;
2. determine which files are references/mockups;
3. determine which are actual production assets;
4. use or copy production assets into an appropriate application asset location if necessary;
5. keep the original design/reference material intact unless there is a good reason to modify it.

Do not duplicate large assets unnecessarily.

---

## Architectural quality check

Before finishing, verify:

* FSD layers have clear responsibilities;
* there are no upward imports;
* page-specific components are not leaking into `shared`;
* features exist only where meaningful;
* widgets represent actual page sections;
* entities represent actual domain concepts;
* components are not unnecessarily fragmented;
* Next.js routing remains idiomatic;
* the resulting structure is easy for another engineer to understand.

**FSD is a means, not the goal.**

The primary goal remains the high-quality visual implementation of the supplied design.

---

# 10. Asset rules

The `design/` directory is an asset library.

Before creating anything new, determine whether an existing asset already solves the problem.

Reuse supplied assets whenever possible.

Do not:

* replace supplied artwork with emoji;
* replace artwork with generic Lucide/icon-library icons;
* use random stock photography;
* generate unrelated imagery;
* invent a different eagle;
* invent a different visual identity.

If an asset is only an inspiration reference rather than a production asset, interpret it stylistically rather than blindly copying it.

Use CSS for simple graphic primitives where appropriate.

Use actual image assets for complex artwork and textures.

---

# 11. Important content rule

The page is inspired by Nietzsche and *Thus Spoke Zarathustra*.

Do not turn this into a generic "motivational Nietzsche" website.

Avoid clichés such as:

* "Unlock your potential"
* "Become the best version of yourself"
* "Embrace the grind"
* generic self-help language.

The tone should be:

**philosophical, severe, enigmatic, poetic and slightly confrontational.**

The page should feel like an interpretation of Nietzsche rather than a commercial product selling Nietzsche.

---

# 12. Code quality

After implementation:

1. run the project's available lint/typecheck/build commands;
2. fix all errors;
3. inspect the page at desktop and mobile widths;
4. verify that every referenced asset actually exists;
5. verify that there are no broken images;
6. verify responsive behavior;
7. verify accessibility basics;
8. verify that animations do not cause layout instability;
9. verify that the page works with reduced motion;
10. remove dead code and unused imports.

Do not stop after the first successful render.

Iterate until the implementation visually matches the supplied mockup as closely as practical.

---

# 13. Visual quality bar

The target is **not "a nice landing page."**

The target is:

> a highly art-directed digital artifact that could plausibly be presented as a $50k experimental editorial website.

Spend disproportionate effort on:

1. the eagle/serpent composition;
2. typography;
3. spacing;
4. image treatment;
5. texture;
6. section transitions;
7. visual hierarchy;
8. responsive composition.

A technically correct page that looks generic is a failure.

A visually impressive page with broken responsiveness is also a failure.

The final result must combine both.

---

# 14. Final instruction

Work autonomously through the implementation.

Do not ask for confirmation after every small decision.

First inspect the repository and `/design`, then form an implementation plan internally, then build the page, then validate it and iterate.

Do not stop at scaffolding.

Do not create a simplified placeholder version.

Use the supplied mockup and assets as the source of truth and produce the strongest faithful implementation you can within the existing project.

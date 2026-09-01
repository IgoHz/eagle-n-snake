# SEO, Metadata, Favicon & Social Sharing

The conceptual landing page is already implemented and visually refined.

Your task is to add a complete, production-quality SEO and metadata foundation WITHOUT changing the existing visual design or page layout.

This is an existing Next.js application. Work with the current architecture and conventions rather than restructuring the application.

---

## 1. FIRST: inspect the current implementation

Before making changes:

- inspect the project structure;
- inspect `package.json`;
- identify the Next.js version and whether the App Router is being used;
- inspect `app/layout.*` and the relevant page files;
- inspect existing metadata, if any;
- inspect the `design/` directory and existing eagle/serpent artwork;
- identify the best existing asset to use as the basis for the favicon and social preview imagery.

Do not start by generating new components.

Do not modify the visual layout unless absolutely required for metadata-related reasons.

---

# 2. Favicon / site icon

Create a proper favicon system based on the existing eagle + serpent visual identity.

The icon should be a simplified representation of the core symbol:

**eagle + serpent**

It must remain recognizable at very small sizes.

Do NOT simply use the full detailed artwork as a tiny favicon if it becomes unreadable.

Instead, derive a compact mark from the existing artwork/design language.

Consider the appropriate Next.js-supported icon files and sizes, including:

- favicon;
- Apple touch icon where appropriate;
- other useful icon sizes if needed.

Prefer an SVG favicon if it is appropriate for the current Next.js setup, with raster fallbacks where useful.

The favicon should visually belong to the existing site:

- black;
- ivory/cream;
- sharp;
- aggressive;
- minimal;
- deathcore / black-metal inspired;
- no neon;
- no generic cyberpunk icon.

Keep the icon clean enough to work at 16×16 and 32×32.

Place generated/derived assets in an appropriate public/static location according to the existing project structure.

Do not introduce an icon library just for this.

---

# 3. Open Graph image

Create a dedicated Open Graph / social sharing image.

Target dimensions:

**1200 × 630**

This is NOT the same thing as the favicon.

The OG image should communicate the visual identity immediately when the page is shared on:

- LinkedIn;
- Discord;
- Slack;
- X/Twitter;
- Facebook;
- other Open Graph-compatible platforms.

Use the existing eagle + serpent artwork and visual language.

The composition should be simple and strong at a thumbnail size:

- dark/black background;
- dominant eagle + serpent artwork;
- restrained typography;
- subtle texture;
- strong negative space;
- no unnecessary UI;
- no tiny unreadable text.

Possible hierarchy:

```text
        EAGLE + SERPENT

        BECOME
        WHO YOU
        ARE.

        Nietzsche / Zarathustra
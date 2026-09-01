# Asset cleanup and image optimization

The landing page implementation is now visually close to the intended design.

Perform a **focused internal cleanup pass**. Do not redesign the page and do not change the established visual direction.

## 1. Remove unused assets

Inspect the entire repository, especially:

* `design/`
* `public/`
* image/SVG asset directories
* components and styles that reference assets

Determine which assets are actually used by the current implementation.

Remove assets that are clearly unused and were only part of the original design exploration or intermediate iterations.

Before deleting anything:

* search the entire codebase for references;
* check static/CSS references as well as TypeScript/JSX imports;
* check dynamically constructed asset paths;
* make sure an asset isn't referenced indirectly.

Do not remove assets merely because they are not imported from a React component if they may be required by CSS, metadata, favicon configuration, or another static mechanism.

After cleanup, verify that:

* no broken image references remain;
* no CSS references point to deleted files;
* no imports reference deleted assets;
* the application still builds successfully.

Do not remove assets that are intentionally part of the design source/reference material unless they are clearly unnecessary for the project itself.

If `design/` contains both source/reference material and production assets, preserve the distinction rather than blindly deleting everything that is not currently rendered.

---

## 2. Audit image sizes

Inspect all images actually used by the landing page.

For each image, consider:

* intrinsic dimensions;
* file size;
* format;
* transparency requirements;
* displayed dimensions;
* whether the image contains large amounts of unnecessary empty space;
* whether it is being rendered at a significantly smaller resolution than the source.

Identify images where optimization would provide a meaningful reduction without visible quality loss.

Prioritize optimization for:

* large hero artwork;
* large decorative images;
* photographic backgrounds;
* textures;
* repeated assets.

Do **not** blindly compress every image.

Preserve original quality when:

* the asset contains delicate linework;
* transparency is important;
* the source is already appropriately sized;
* further compression would visibly damage the artwork.

---

## 3. Choose appropriate formats

Evaluate whether each production image should remain:

* PNG
* JPEG
* WebP
* AVIF
* SVG

Use the format that best fits the asset.

For example:

* complex transparent artwork → optimized PNG/WebP where appropriate;
* photographic imagery → WebP/AVIF;
* simple vector-like graphics → SVG where practical;
* small decorative vector graphics → SVG rather than raster where this genuinely makes sense.

Do not convert assets simply for the sake of conversion.

Do not sacrifice the visual quality of the eagle/serpent artwork.

---

## 4. Next.js image handling

Inspect how images are rendered.

Where appropriate, use Next.js image optimization rather than raw `<img>` elements.

Check:

* `next/image`;
* appropriate `width` / `height`;
* responsive sizing;
* `sizes`;
* `priority` for the actual above-the-fold hero image when justified;
* lazy loading for below-the-fold imagery.

Do not mark every image as `priority`.

Do not introduce unnecessary image optimization complexity.

The hero artwork should load reliably and without layout shift.

---

## 5. Preserve visual fidelity

This is an **optimization/refactoring task**, not a design task.

Do NOT:

* redesign sections;
* change typography;
* change spacing;
* change artwork positioning;
* replace artwork;
* alter the established deathcore / black-metal / Nietzsche aesthetic;
* introduce new visual effects;
* simplify the page visually;
* replace custom artwork with generic icons.

The rendered page should look effectively identical before and after this pass.

The only intentional differences should be:

* unused files removed;
* image files optimized;
* image loading/handling improved;
* code references cleaned up where necessary.

---

## 6. Verify the result

After the cleanup:

1. run lint;
2. run TypeScript checks;
3. run the production build;
4. inspect the page visually;
5. verify the hero artwork;
6. verify all sections containing images;
7. verify desktop and mobile layouts;
8. verify there are no missing assets;
9. verify there are no console errors related to images;
10. confirm that image optimization did not introduce visible degradation.

Also provide a short final report containing:

* assets removed;
* images optimized;
* approximate size reduction where measurable;
* format changes;
* any assets intentionally preserved despite being unused by the current page because they are part of the design/reference library;
* any remaining optimization opportunities that you deliberately did not perform.

Do not make unrelated refactoring changes during this task.

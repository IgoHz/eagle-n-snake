## Add an author signature / colophon section

Add a small **author section at the very bottom of the page**, after all existing content and immediately before the end of the document.

The section should contain a link to my GitHub profile:

`https://github.com/IgoHz`

Display it as a subtle author signature, using the current year dynamically.

Suggested semantic content:

`© 2026 IHOR T. >_`

The year must be generated dynamically rather than hardcoded.

### Visual direction

Do **not** copy the visual appearance of the reference implementation literally.

The provided example is only a functional/structural reference.

Adapt the component to the existing visual language of this page:

* extremely minimal;
* monochrome;
* subtle;
* editorial / archival;
* slightly technical;
* consistent with the Nietzsche / Zarathustra aesthetic;
* restrained opacity;
* generous whitespace;
* thin visual details rather than a conventional footer.

Think of it as an **author's signature / colophon** on a philosophical artifact.

It should not compete with the eagle + serpent artwork or the final philosophical statement.

### Suggested treatment

Use something similar in spirit to:

`© 2026 IHOR T.  >_`

The `>_` suffix can be retained as a small technical signature, but style it so that it feels native to the existing design.

Possible visual details:

* small uppercase typography;
* monospace or the existing technical typeface;
* subtle letter spacing;
* reduced opacity by default;
* very restrained hover transition;
* a small decorative rule, sigil, or mark if it fits the existing design;
* alignment should follow the existing page grid rather than introducing a new layout system.

Do not add a large social-media-style author card, avatar, bio, or "About the author" section.

This is a **signature**, not an author profile.

### Interaction

The entire author signature should be one accessible link to:

`https://github.com/IgoHz`

Open it in a new tab and use:

`target="_blank"`
`rel="noopener noreferrer"`

Provide an appropriate accessible label, e.g.:

`Visit IHOR T.'s GitHub profile`

On desktop, use a subtle hover state.

Do not rely on hover for any essential information.

Respect the existing reduced-motion behavior if the project already implements it.

### Implementation

First inspect the existing component and styling structure.

Follow the project's established conventions rather than blindly reproducing the example code.

If the project uses CSS Modules, use a dedicated component and CSS Module consistent with the existing architecture.

For example, a reasonable structure would be:

`author-signature/`

* `author-signature.tsx`
* `author-signature.module.css`

However, **use the project's existing naming and component conventions if they differ**.

Reuse existing layout/padding wrappers where appropriate instead of introducing another arbitrary container.

Do not duplicate global styles.

Do not introduce a new dependency.

### Important

Before implementing, inspect the existing bottom-most section/footer area.

The author signature must feel like it was part of the original design from the beginning.

Do not alter existing sections unnecessarily.

Do not redesign the page.

Do not add unrelated footer functionality.

After implementation:

1. run typecheck/lint/build if available;
2. verify the GitHub link;
3. verify the year updates dynamically;
4. check desktop and mobile layouts;
5. make sure the signature does not create horizontal overflow;
6. make sure its spacing is visually consistent with the final section;
7. remove any unused code/imports.

The final result should be **small, elegant, almost like a creator's mark hidden at the end of the artifact**.

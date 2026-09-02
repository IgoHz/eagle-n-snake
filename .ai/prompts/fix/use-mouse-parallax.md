## Fix: mouse parallax is not visibly working

I noticed that the mouse/pointer parallax effect on the landing page appears to be completely inactive.

I am testing the page on a MacBook in desktop browsers, moving the mouse around the viewport, but I cannot see any meaningful movement of the artwork or decorative elements.

Do NOT redesign the page or change the existing visual direction. The current design looks good. Treat this strictly as an interaction/debugging task.

### First investigate the existing implementation

Inspect how the current parallax effect is implemented.

Determine:

- where the pointer/mouse event listener is attached;
- whether the event actually fires;
- what coordinates are being calculated;
- which elements are supposed to move;
- how their transforms are applied;
- whether another CSS transform/animation overrides the parallax transform;
- whether `prefers-reduced-motion` disables the effect;
- whether a parent/child transform hierarchy prevents the effect from being visible;
- whether the current implementation behaves differently in Safari/WebKit;
- whether the movement amplitude is simply too small to notice.

Do not assume the implementation is correct just because the event listener exists.

### Required behavior

The parallax should be clearly but subtly visible when moving the mouse across the desktop viewport.

For example:

- moving the pointer toward the left should move the artwork slightly in one direction;
- moving toward the right should move it in the opposite direction;
- moving vertically should produce a corresponding vertical shift;
- decorative/background layers should move at different amplitudes;
- the main eagle/serpent artwork should have the strongest but still restrained movement;
- smaller decorative elements can have slightly different movement factors.

The effect should feel like a physical layered composition rather than a game-like camera effect.

Think:

slow / subtle / atmospheric

NOT:

large / exaggerated / distracting.

### Implementation requirements

Prefer a performant implementation using:

- a client component only where interaction is actually required;
- `pointermove` rather than relying exclusively on `mousemove`;
- `requestAnimationFrame` or another mechanism that avoids excessive React state updates;
- CSS `transform: translate3d(...)` where appropriate;
- normalized pointer coordinates relative to the viewport;
- smooth interpolation/lerping so movement doesn't feel jittery.

Avoid triggering a React render on every pointer event if it isn't necessary.

For example, conceptually the pointer position can be normalized to approximately:

x: -1 ... 1
y: -1 ... 1

and different visual layers can apply different multipliers.

### Important: preserve existing transforms

Before modifying anything, inspect whether the affected elements already use:

- `transform`;
- CSS animations;
- transitions;
- keyframes;
- image positioning;
- hover transforms.

Do not accidentally overwrite an existing transform.

If an element already needs a transform for its visual positioning, compose the transforms correctly rather than replacing one with another.

If necessary, introduce a dedicated wrapper for the parallax transform.

### Reduced motion

Respect:

`prefers-reduced-motion: reduce`

However, verify that this is not currently being detected incorrectly on my MacBook and unintentionally disabling parallax for normal users.

The default desktop experience should have the parallax enabled.

### Responsiveness

Desktop:

- enable mouse/pointer parallax.

Touch devices:

- do not attempt to emulate mouse parallax;
- keep the existing mobile experience unchanged.

Tablet/stylus behavior should remain reasonable.

### Debugging

Before changing the implementation, actually trace the interaction.

If useful, temporarily verify:

- pointer events are received;
- normalized coordinates change;
- calculated translation values change.

Once the problem is identified, remove temporary debugging code.

Do not leave console logging in the production implementation.

### Visual validation

After fixing it:

1. run the application;
2. test with a desktop viewport;
3. move the pointer from all four edges toward the center;
4. verify that the eagle/serpent artwork visibly responds;
5. verify that decorative layers respond at different rates;
6. verify that the movement is smooth;
7. verify that it does not cause horizontal/vertical page overflow;
8. verify that existing animations and positioning remain intact;
9. verify mobile/touch behavior;
10. run lint/typecheck/build if available.

The important part is that the effect must be **visibly noticeable**, not merely technically implemented.

Do not report "parallax works" just because the pointer listener fires. Verify that the rendered artwork actually moves on screen.

Make the smallest clean architectural change necessary to fix the problem.
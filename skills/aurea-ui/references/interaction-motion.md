# Interaction and Motion Reference

Use this reference for hover states, feedback, transitions, microinteractions, gestures, animation, spatial behavior, delight, and interaction polish.

## Interaction before animation

Every interaction needs a clear trigger, state change, feedback, and recovery path. Animation is optional; understandable state is not.

For important controls, define:

- default;
- hover when relevant;
- focus;
- pressed/active;
- selected/open;
- loading;
- disabled;
- success;
- error.

Feedback should appear close to the action that caused it and should not require the user to infer whether anything happened.

## Affordance

Interactive elements should look interactive. Avoid hidden interactions that require experimentation unless discovery itself is safe and intentional.

- Do not rely on hover for essential controls.
- Keep cursor behavior appropriate to the control.
- Use labels for ambiguous icons.
- Make draggable, resizable, sortable, and expandable regions discoverable.
- Preserve familiar behavior for links, buttons, text selection, scrolling, and browser navigation.

## Motion has a job

Use motion to communicate one or more of:

- state change;
- spatial relationship;
- causality;
- progress;
- hierarchy;
- continuity;
- confirmation;
- meaningful brand personality.

If animation does none of these, remove or simplify it.

## Motion system

For an explicit motion-intensity choice, read [visual-direction-controls.md](visual-direction-controls.md). When implementing a selected effect, read [motion-recipes.md](motion-recipes.md) for practical examples and lifecycle rules.

Define motion as a system rather than arbitrary per-component animation.

Consider:

- a small duration scale such as fast, standard, and deliberate;
- a limited easing vocabulary;
- consistent direction for entry/exit and navigation;
- shared behavior for overlays, menus, drawers, lists, and feedback;
- reduced-motion alternatives.

Do not make users wait for animation before a frequent action can continue. Perceived responsiveness matters more than cinematic polish in task-heavy UI.

## Expressive landing-page motion and 3D

Treat current motion techniques as a vocabulary, not a checklist. A live trend scan may reveal masked media transitions, kinetic typography, scroll-linked chapters, pointer-responsive depth, interactive product demos, generative visuals, or real-time 3D. Select a technique only when it improves narrative, product understanding, hierarchy, or brand memory.

Before choosing an effect, define:

- the product or narrative job;
- the trigger and user control;
- the content that remains usable before it loads;
- the reduced-motion behavior;
- the mobile and WebGL-unavailable fallback;
- the asset, runtime, and maintenance cost;
- the measurable performance budget and QA devices.

Use the lightest implementation level that can express the idea:

| Need | Typical starting point |
| --- | --- |
| Hover, reveal, state transition, simple parallax, or depth | CSS transforms, keyframes, native browser APIs, or the project's existing motion primitives |
| Coordinated component, layout, gesture, or scroll choreography | Motion (formerly Framer Motion) or GSAP when compatible with the existing stack |
| Authored interactive vector animation with state | Rive or an established asset runtime already used by the product |
| Rapid authored 3D scene with a ready asset | Spline, with loading and fallback behavior verified in the final deployment |
| Custom product-driven, spatial, shader, data, or 3D experience | Three.js or React Three Fiber when the product value justifies specialist complexity |

These are examples, not mandatory dependencies. Check current official documentation, licensing, browser support, bundle cost, and framework compatibility before adding one. Reuse the project's existing stack when it can produce the same result coherently.

Use real-time 3D when it demonstrates the product, explains a spatial concept, visualizes meaningful data, or creates a brand artifact strong enough to justify its cost. If it is only decorative, prefer pre-rendered video, an image sequence, CSS perspective, layered media, or a static object.

### Progressive-enhancement contract

- Keep the message, navigation, and primary CTA usable before animation or 3D initializes.
- Lazy-load expensive scenes and below-fold media; pause rendering when offscreen or inactive.
- Provide a deliberate poster, still image, simplified scene, or pre-rendered video fallback rather than an empty canvas.
- Compress textures, geometry, video, and image sequences; limit device pixel ratio, particles, dynamic lights, transparency, and post-processing according to the project budget.
- Avoid scroll hijacking. Scroll-linked motion must remain interruptible, preserve reading control, and tolerate fast scrolling, resizing, and content changes.
- Do not make pointer movement, hover, or precise gestures the only way to access meaning.
- Test reduced motion, keyboard and touch input, WebGL failure, slow networks, lower-power mobile hardware, resize/orientation changes, background-tab behavior, and repeated navigation.
- Measure the final page rather than trusting a standalone demo. Watch loading experience, responsiveness, layout stability, sustained smoothness, memory, heat, and battery impact.

## Spatial consistency

Transitions should preserve a believable relationship between cause and result. Menus should emerge from their trigger region; drawers should use consistent direction; expanding content should not appear to teleport without reason.

Avoid mixing unrelated motion languages such as springy playful cards, slow cinematic fades, and sharp enterprise drawers in the same product unless the contrast is intentional and meaningful.

## Microinteractions

Good microinteractions are small, legible, and proportional to the event.

Examples:

- a save action changing to a confirmed state;
- a filter chip appearing where the filter is applied;
- a progress step updating after completion;
- a drag handle providing active feedback;
- an empty state transitioning into real content;
- a learning milestone receiving a brief brand-consistent celebration.

Do not celebrate routine actions so aggressively that frequent users are interrupted.

## Delight budget

Use delight selectively. The core product should remain calm enough that memorable moments can stand out.

Choose zero to three signature moments for a major feature or experience. They should reinforce brand or user progress, not merely prove animation capability.

Use detail libraries such as Design Spells for inspiration only after core usability is solved. Extract the principle and rebuild it in the product's own visual language.

## Loading and progress

Choose feedback based on expected duration and certainty:

- immediate state change for near-instant actions;
- skeletons when preserving layout and content shape is useful;
- spinners for short indeterminate work when no better representation exists;
- determinate progress when meaningful progress is measurable;
- optimistic updates only when failure can be recovered cleanly.

Avoid fake progress and unnecessary loading animation.

## Reduced motion

Respect `prefers-reduced-motion`. Preserve meaning with opacity changes, instant state changes, simpler transforms, or reduced distance as appropriate.

Do not remove feedback entirely just because motion is reduced.

## Performance

Prefer transform and opacity for common animation where appropriate. Avoid heavy filters, huge animated backgrounds, scroll-bound work, or constant decorative motion that degrades interaction or battery life.

Test motion on realistic hardware and in the final layout. A smooth prototype on a powerful machine is not enough evidence.

## Interaction QA

Check:

- trigger is discoverable;
- state change is perceivable;
- feedback is timely;
- keyboard and touch equivalents exist;
- focus follows overlays and dialogs correctly;
- rapid repeated actions do not break state;
- errors preserve user work;
- animations can be interrupted safely;
- reduced motion remains understandable;
- motion style matches the broader design language.

# Accessibility Reference

Use this reference whenever the task involves accessibility, WCAG, keyboard interaction, focus, contrast, semantics, ARIA, forms, error messaging, reduced motion, zoom, or touch targets.

## Baseline

Treat accessibility as mandatory product quality, not final polish. Use WCAG 2.2 as the primary web accessibility standard when applicable. Use native platform semantics whenever they express the intended behavior; add ARIA only when native semantics are insufficient.

A component library or design system does not automatically make a product accessible. Verify the actual rendered experience and interaction.

## Structure and semantics

Use meaningful document structure with logical headings, landmarks, lists, buttons, links, labels, tables, and form controls.

- Actions are generally buttons.
- Navigation is generally links.
- Do not use clickable `div` elements when a native control provides the correct behavior.
- Maintain logical reading order when CSS reorders visual layout.
- Give controls accurate accessible names, roles, values, states, and relationships.
- Use meaningful alternative text for informative images and empty alternative text for decorative images.
- Provide textual equivalents for icons, charts, status indicators, and other meaningful graphics.

## Keyboard and focus

Every interactive element must be reachable and operable with a keyboard unless the interaction inherently requires another input method and an equivalent is provided.

Provide a visible high-contrast focus indicator that is not clipped by overflow or hidden beneath sticky content. Do not remove browser focus outlines unless an equally visible replacement exists for every relevant state.

Define focus behavior for menus, popovers, dialogs, drawers, comboboxes, tabs, and nested interactive components. When modal UI opens, move focus appropriately, contain it where required, provide an accessible name, and return focus to the invoking control when it closes.

Never leave focus trapped in a visually closed surface.

## Contrast and non-color cues

Check text, icons, borders, focus rings, controls, and meaningful graphical objects against their actual backgrounds in both light and dark modes.

As a common WCAG AA baseline, normal text generally needs at least 4.5:1 contrast; large text generally needs at least 3:1; meaningful non-text UI and graphical objects generally need at least 3:1 where the criterion applies. Verify the exact applicable criterion rather than relying on memory for edge cases.

Do not communicate success, warning, danger, selection, required state, or disabled state through color alone. Pair color with text, shape, iconography, pattern, or position.

Disabled content should remain understandable even when interaction is unavailable.

## Touch and pointer interaction

Provide adequately sized, separated targets for important actions. WCAG 2.2 includes a minimum target-size success criterion; use larger targets when the product context allows.

Avoid placing destructive and safe actions so close together that accidental activation is likely. Ensure essential hover content has keyboard and touch-accessible equivalents.

## Motion

Respect `prefers-reduced-motion` when motion is not essential. Avoid flashing, rapid parallax, and motion that can distract or cause discomfort.

Reduced motion should preserve state and spatial understanding with simpler or instant transitions rather than removing all feedback.

## Forms and validation

Use visible persistent labels and programmatically associate them with controls. Identify required and optional fields consistently. Use correct input types, autocomplete values, and input modes.

Explain constraints before entry when they affect success. Validate near the field and connect errors programmatically. Error messages should state what happened and how to fix it.

Preserve entered values and the user's place after an error. For long forms, provide an error summary when useful.

Do not use placeholder text as the only label.

## Dynamic status and async UI

Make important loading, success, error, validation, and status changes perceivable to assistive technology when they occur without a page load. Use appropriate live regions or programmatic status patterns without creating excessive announcements.

Keep feedback close to the action that caused it.

## Zoom, text resizing, and reflow

Test enlarged text and zoom. Content and controls should reflow without forcing users to pan in two dimensions for ordinary reading and interaction where WCAG reflow requirements apply.

Long labels, translated content, increased line height, and user text scaling must not cover controls or make tasks impossible.

## Images, charts, and data

Alternative text should describe the image's purpose in context, not every visible detail.

For complex charts, provide a concise summary of the key insight and a data table or detailed alternative when users need exact values. Do not depend on color alone to distinguish series.

## Review checklist

Before completion, verify:

- meaningful page title, landmarks, heading structure, and reading order;
- accurate control names, roles, states, and values;
- keyboard reachability, operation, escape, and logical focus order;
- visible focus that is not clipped or obscured;
- usable contrast in all states and color modes;
- meaning is never color-only;
- images, icons, charts, and status messages have suitable text alternatives;
- forms have visible labels, useful instructions, correct types, and connected errors;
- dynamic status changes are perceivable;
- touch targets are usable and high-consequence actions resist accidental activation;
- reduced-motion preferences are respected;
- zoom, large text, long labels, and localization do not break task completion.

Use automated checks as a supplement, not a substitute, for keyboard, screen-reader, zoom, contrast, and real-interaction review.

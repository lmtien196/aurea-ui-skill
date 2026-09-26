# Design System Reference

Use this reference for any new screen, redesign, component system, theme, token, typography, spacing, visual language, or asset-direction task.

## System before screens

A design system is a decision framework, not a component catalog. Its job is to preserve product identity, usability, accessibility, and implementation consistency as the product grows.

For an existing product, inspect what already exists before introducing anything new. Reuse effective patterns. Fix root causes in tokens and shared components before applying page-specific patches.

## Product and theme analysis

For a concrete typography/palette shortlist and persistent cross-page decisions, use [design-system-selection.md](design-system-selection.md). Reuse the project's existing design records before introducing a new document.

Describe the existing or intended visual language before selecting new patterns:

| Dimension | Determine |
| --- | --- |
| Color | Brand, action, background, surface, status, focus, and data colors |
| Typography | Typeface personality, hierarchy, weight range, line height, and multilingual coverage |
| Geometry | Radius scale, control height, corner language, strokes, and silhouette |
| Elevation | Borders, shadows, overlays, layering, and surface hierarchy |
| Iconography | Family, stroke/fill treatment, optical size, and labeling conventions |
| Imagery | Illustration, photography, texture, lighting, perspective, crop, and character rules |
| Layout | Content width, grid, gutters, alignment, density, and section rhythm |
| Motion | Pace, easing character, spatial model, and reduced-motion behavior |
| Personality | Calm, technical, editorial, playful, warm, premium, utilitarian, expressive, or another clear tone |

Do not introduce a second competing visual language into an established product.

## Product-specific design principles

For a new system or major evolution, write 3 to 5 operational principles. They should help decide between alternatives.

Weak: "modern and simple."

Stronger: "Dense information may be compact, but the primary decision must always have a clear visual anchor."

Stronger: "Brand warmth comes from typography and illustration; transactional controls remain quiet and predictable."

## Identity without noise

Create identity through a small set of coherent expressive decisions. Possible levers include:

- a distinctive type pairing;
- a recognizable geometry language;
- a controlled brand accent behavior;
- a unique illustration or photographic treatment;
- a characteristic composition rhythm;
- one consistent motion personality;
- a small number of signature moments.

Do not use every lever at full strength. If everything is expressive, nothing is distinctive.

## Token architecture

Prefer layered tokens:

1. **Primitive tokens** describe raw values such as color scales, spacing steps, font sizes, radii, and shadows.
2. **Semantic tokens** describe intent such as `text-primary`, `surface-raised`, `border-subtle`, `action-primary`, `status-danger`, and `focus-ring`.
3. **Component tokens** are optional and should exist only when a component needs stable, intentional specialization.

Components should consume semantic intent whenever possible so themes can change without rewriting component logic.

Example:

```text
color.neutral.950       -> raw color
color.text.primary      -> semantic role
button.primary.text     -> optional component role
```

Avoid scattering raw hex values, arbitrary pixel values, and one-off shadows across pages.

## Color and modes

Define at least:

- page background;
- base and elevated surfaces;
- primary and secondary text;
- subtle and strong borders;
- primary and secondary actions;
- focus;
- selected state;
- disabled state;
- success, warning, danger, and informational states;
- overlay/scrim where needed.

Treat light and dark modes as related systems, not mechanical inversions. Design meaningful surface hierarchy, comfortable text contrast, visible borders, legible controls, usable charts, and appropriate imagery in both modes.

Keep status meaning independent from hue alone. Preserve brand recognition without over-saturating dark surfaces.

## Typography

Define a deliberate hierarchy for display, page title, section heading, subheading, body, secondary text, caption, label, button, and data-heavy UI.

- Maintain readable line lengths and line heights.
- Use weight and size for hierarchy before adding color.
- Avoid too many font families or weight levels.
- Test long labels, user-generated content, localization, numbers, and mixed scripts.
- For multilingual products, verify glyph coverage and optical balance across required writing systems.
- Use tabular numerals where aligned numeric comparison benefits.

Typography is one of the strongest identity levers; choose it intentionally.

## Spacing, grid, and density

Use a consistent spacing scale. Apply it to page gutters, section rhythm, component padding, control gaps, and inline relationships.

Prefer a coherent grid and content-width strategy over arbitrary centering. Use whitespace to communicate grouping before adding cards or dividers.

Choose density according to the task:

- operations and data tools may be compact;
- learning and consumer experiences may need more breathing room;
- marketing pages may use larger rhythm but still need efficient scanning.

Do not make every screen spacious to imply premium quality.

## Geometry and elevation

Use a limited radius scale with clear roles. Avoid arbitrary mixtures of sharp corners, medium cards, and fully pill-shaped containers unless the contrast is intentional.

Use elevation to communicate layering and interaction, not decoration. Prefer borders, surface contrast, and restrained shadows. Define overlay and z-index conventions so dialogs, popovers, sticky regions, and toasts do not become ad hoc.

## Components and variants

Prefer reusable, composable components with explicit variants. Define consistent behavior for buttons, inputs, selects, search, cards, tabs, navigation, breadcrumbs, tables, lists, badges, tooltips, dropdowns, popovers, dialogs, drawers, toasts, pagination, skeletons, empty states, and error states as relevant.

For every interactive component, consider:

| State | Design question |
| --- | --- |
| Default | Is purpose and affordance clear? |
| Hover | Is feedback useful and not required for understanding? |
| Focus | Is keyboard focus visible and high contrast? |
| Pressed | Does engagement feel immediate? |
| Selected | Is the current choice clear without color alone? |
| Disabled | Is unavailability understandable while remaining readable? |
| Loading | Is progress clear and duplicate action prevented when needed? |
| Success | Is completion confirmed near the action? |
| Error | Is the problem and recovery path clear? |

Design edge states as part of the system: first use, empty, partial data, no results, offline, permission, destructive confirmation, long content, and short/missing content.

## Form controls and overlays

For branded websites and applications, design controls as part of the product in both closed and open states. Styling only the input border while leaving its dropdown, calendar, or feedback popup in an unrelated browser skin is incomplete.

### Control anatomy

- Give chevrons, calendar icons, clear buttons, and other trailing affordances an explicit inset token. Start around 12–16 CSS px from the control's inner edge for ordinary controls, then adapt to the existing density and spacing scale; do not treat this as a universal minimum.
- Reserve space for the icon plus its label gap and edge inset. Use logical properties such as `padding-inline-end` and `inset-inline-end`; verify long values, localization, text resizing, and RTL where supported. Text must not run under icons.
- Center icons optically, use the shared icon family, and separate icon size from the clickable target size. Decorative icons must not intercept control clicks or add redundant accessible names.
- When replacing a native select arrow, remove the original arrow and supply one deliberate replacement; avoid doubled chevrons. This styles the trigger, not necessarily the native options popup.

### Open surfaces and feedback

Apply the same typography, surfaces, borders, radii, elevation, spacing, focus, and motion tokens to the trigger and its dropdown/listbox, calendar, popover, dialog, drawer, or toast. Include selected, disabled, error, and loading states where relevant. Portaled surfaces must receive the theme too; check viewport collision, stacking, scroll, and mobile layout.

For a value selector, use an accessible select/combobox/listbox pattern, not action-menu semantics. For a date picker, design the calendar, navigation, current/selected/unavailable dates, and input/format guidance together. Reuse the project's accessible components or proven headless primitives before building complex interaction from scratch.

Present application validation and routine feedback through styled inline messages, status regions, or toasts. Use a designed dialog when a decision genuinely requires interruption. Do not use browser `alert()`, `confirm()`, or `prompt()` as the normal product UI. Connect field errors programmatically and keep consequential errors available until resolved; a disappearing toast alone is insufficient.

### Semantics and intentional platform UI

Native semantics are compatible with a custom visual design: semantic inputs, buttons, and a styled native `<dialog>` can remain appropriate. Do not replace them with inaccessible clickable containers to achieve a visual effect. Verify keyboard operation, accessible names, focus visibility, dismissal, and focus restoration according to the chosen pattern; only modal surfaces contain focus.

If the brief explicitly requests native controls, preserve that choice. If a mobile/system picker is intentionally retained for platform usability or accessibility, state the reason and test it on the target platform; do not present it as a fully themed custom picker. Browser permission prompts, file chooser windows, browser/OS-managed authentication and security prompts, and browser-managed navigation warnings stay platform-owned; do not imitate or attempt to replace trusted system UI.

Before calling branded controls complete, inspect their open surfaces as well as their triggers using [visual-qa.md](visual-qa.md#form-control-and-overlay-verification).

## Component boundaries

Create a new component only when it represents a reusable concept or interaction, not because a page needs a wrapper.

Prefer composition over many narrowly specialized components. Keep escape hatches deliberate and documented. If a page needs repeated exceptions, the system probably needs a new semantic pattern rather than more local CSS.

## Icons and imagery

For asset briefs, generation/editing choices, responsive crops, and integration, read [visual-assets.md](visual-assets.md).

Use one consistent icon family whenever possible. Use familiar symbols for common actions and labels when meaning is ambiguous.

Before generating or selecting imagery, define palette, illustration style, lighting, perspective, texture, line/shape language, character rules, and crop behavior. Preserve recognizable mascots or brand characters unless explicitly redesigning them.

Images should reinforce brand, comprehension, storytelling, or emotion. Do not use decorative imagery merely to fill space.

## Data visualization

For data-heavy products:

- map color to meaning consistently;
- maintain readable labels and units;
- do not rely on color alone;
- prioritize the question the chart answers;
- avoid 3D chart effects and decorative noise;
- provide tabular or textual alternatives where accessibility or exact values require them;
- keep chart tokens aligned with the broader color system.

## Research handoff

When external design research was performed, do not translate a screenshot directly into components. First summarize the product-specific visual direction, then express it through tokens, layout rules, components, content, and motion.

The design system, not an inspiration screenshot, remains the source of truth.

## Performance and maintainability

Prefer optimized images, responsive media, lazy loading where appropriate, minimal layout shift, efficient rendering, and reasonable motion cost.

Document meaningful new tokens and variants in the project's existing conventions. Avoid unnecessary dependencies for purely decorative effects.

A system should make future work faster and more coherent. If a design choice requires many exceptions to survive, reconsider the choice.

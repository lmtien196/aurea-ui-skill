# Mobile and Responsive Reference

Use this reference whenever the task involves mobile, responsive behavior, tablets, breakpoints, touch interaction, safe areas, mobile navigation, overflow, or multiple viewport sizes.

## Mobile-first baseline

Design for the smallest useful screen first, then progressively enhance for larger viewports. Mobile is not a compressed desktop layout.

Start with the core user task, minimum necessary information, and actions that must remain reachable without awkward scrolling or precision tapping.

Consider thumb reach, touch target size, bottom navigation where appropriate, sticky actions, mobile menus, collapsible secondary information, vertical rhythm, keyboard behavior, input types, safe areas, long text, horizontal overflow, mobile tables, dialogs, and drawers.

Do not simply hide desktop content if doing so removes context or blocks task completion. Reorder, summarize, collapse, paginate, or progressively disclose information when that better serves the user.

## Responsive composition

Account for at least small mobile, large mobile, tablet or narrow laptop, desktop, and wide desktop when the product supports them. Prefer fluid layouts and content-driven constraints over designs that work only at a few fixed breakpoints.

Define breakpoints around layout behavior, not device-brand names.

| Region | Small screens | Larger screens |
| --- | --- | --- |
| Navigation | Compact header, menu, or bottom navigation based on frequency | Persistent header or sidebar when useful |
| Secondary information | Collapsed, summarized, or moved below primary task | Visible beside primary content |
| Grid | Single column or intentional scroller | Multi-column grid with sensible minimum widths |
| Sidebar | Drawer or inline section | Persistent sidebar with current-location state |
| Tables | Prioritized columns, list/card transform, or controlled scroll | Full table with readable relationships |
| Actions | Full-width or sticky when completion benefits | Inline or grouped with hierarchy |
| Dialogs | Full-screen or sheet when content is substantial | Dialog, popover, or drawer sized to content |
| Images | Responsive crop preserving subject and context | Wider or art-directed variant |

Check widths near each layout transition, not only exactly at named breakpoints.

## Content-driven behavior

Test realistic content:

- long names and translated labels;
- large numbers and dates;
- empty values;
- error messages;
- user-generated text;
- long lists;
- narrow screens;
- mixed-script content.

For every region, decide whether content wraps, truncates, scrolls, collapses, reorders, or expands. Never allow accidental horizontal overflow to become the only way to discover hidden content.

## Controls and touch

Use touch-friendly controls with adequate separation. Important icon-only controls should not be so small or ambiguous that users must guess or tap repeatedly.

Place frequent actions within comfortable reach. Sticky actions must not cover content, keyboard focus, toast messages, or the final list item, and must respect safe-area insets.

On touch devices, do not rely on hover to reveal essential information.

## Mobile forms and keyboards

Use correct input types, input modes, and autocomplete so the appropriate keyboard appears. Minimize typing, preserve values after errors, and place validation where it keeps context.

When the on-screen keyboard appears, ensure focused fields, primary actions, dialogs, and bottom sheets remain usable. Avoid fixed layouts that trap content behind the keyboard.

## Navigation

Adapt navigation to frequency and depth. Prioritize common destinations, make current location visible, preserve back behavior, and support deep links.

Do not reproduce a complex desktop sidebar as an equally complex mobile drawer by default. Reconsider hierarchy for the smaller context.

## Tables and dense data

Prioritize the columns needed for the primary decision. Options include:

- a list or card transformation;
- controlled horizontal scrolling with visible affordance;
- prioritized/frozen key columns;
- expandable row details;
- a dedicated detail view.

Do not shrink text and controls until a desktop table technically fits.

For charts, preserve the primary trend or decision with responsive labels, summaries, tooltips, or alternate representations rather than shrinking the whole visualization.

## Dialogs, drawers, and sheets

Define entry/exit behavior, scroll ownership, focus handling, dismissal rules, safe areas, and keyboard behavior. Preserve context when moving between list, detail, filter, and confirmation surfaces.

## Responsive inspiration rule

Never assume a desktop inspiration pattern has a valid mobile equivalent. When adopting a pattern from a reference, redesign its mobile composition independently around the user task and available space.

## Viewport verification

When rendered output exists, inspect at least:

- one small mobile;
- one large mobile;
- one tablet or narrow laptop;
- one desktop;
- one wide desktop when the app supports large canvases;
- a few widths near major layout transitions.

Verify:

- no clipped text, overlap, or accidental horizontal scrolling;
- primary action remains understandable and reachable;
- navigation, grids, tables, forms, dialogs, and sticky elements transform intentionally;
- images and charts retain useful crops, labels, and proportions;
- content density and reading order remain balanced;
- keyboard focus, on-screen keyboard, and safe-area spacing do not obscure content;
- long labels and localization do not destroy the layout.

Fix the narrowest-width failure first, then re-check larger compositions so the fix does not create a new inconsistency.

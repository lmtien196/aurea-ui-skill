# Visual QA Reference

Use this reference whenever screenshots, a rendered application, an implementation, visual regression, or final UI verification is available.

## Inspect evidence, not intentions

Inspect the actual rendered result rather than assuming source code looks correct. Review the current UI before redesigning it, compare implementation against the intended task and design system, and use screenshots or browser previews at representative widths.

If visual evidence is unavailable, state that the review is source-based and identify what remains unverified.

When screenshot details are unreadable, use [reference-image-analysis.md](reference-image-analysis.md). When exercising connected forms, routes, or data states, use [implementation-quality.md](implementation-quality.md).

## Inspection loop

1. Confirm the primary user task and intended hierarchy.
2. Compare the result with the product's design direction and system, not with an inspiration screenshot.
3. Inspect small mobile, large mobile or tablet, desktop, and wide desktop when relevant.
4. Inspect populated, empty, loading, error, disabled, success, and long-content states as available.
5. Exercise hover, focus, active, selected, open, drag, validation, and destructive states where relevant.
6. Record concrete issues with location, evidence, user impact, severity, and recommended fix.
7. Fix the highest-impact root causes first.
8. Re-render and repeat until no important issue remains.

## Repeatable browser checks

For repeatable UI checks, prefer the project's existing test tooling. If none exists and the environment supports it, consider Playwright; it is optional, not a skill dependency. Use the host's available browser tools for focused checks, and keep setup proportional to the task rather than adding a test framework solely for a small visual fix. Cover the primary flow, representative viewport sizes, keyboard interaction, and reduced motion.

Compare screenshots against a reviewed baseline in a consistent rendering environment. Inspect differences and accept only intended changes; never update baselines merely to make tests pass. A matching screenshot does not establish good design or correct motion: verify animation separately using the browser checks below. If tools are unavailable, identify the exact checks left unverified.

For implementation details, consult the official [Playwright visual-comparison guide](https://playwright.dev/docs/test-snapshots) and [emulation guide](https://playwright.dev/docs/emulation).

## What to inspect

| Category | Questions |
| --- | --- |
| Task clarity | Can users tell where they are, what matters, and what to do next? |
| Layout | Are alignment, gutters, columns, and content widths intentional at nearby widths? |
| Overflow | Is text clipped? Is horizontal scrolling accidental? Do sticky elements cover content? |
| Hierarchy | Is emphasis proportional to importance, or is everything shouting? |
| Spacing | Are section rhythm, component padding, control gaps, and density coherent? |
| Typography | Are scale, weight, line height, wrapping, numbers, and multilingual strings readable? |
| Color | Are contrast, status, focus, borders, and dark-mode surfaces clear? |
| Components | Are control height, radius, border, shadow, icon, and state behavior consistent? |
| Imagery | Are crop, aspect ratio, quality, loading, and style appropriate to the brand? |
| Interaction | Are affordances, feedback, state changes, and dismissal behavior understandable? |
| Accessibility | Do keyboard, focus, labels, semantics, and non-color cues work? |
| Performance | Is layout shift minimized? Are heavy media or motion harming responsiveness? |
| Originality | Does the result have product-specific identity or generic template/AI styling? |
| Cohesion | Do typography, geometry, imagery, motion, and copy tell the same design story? |

Pay special attention to awkward line breaks, uneven spacing, weak hierarchy, low contrast, inconsistent radii or shadows, poor image crops, broken dark mode, tiny touch targets, excessive whitespace, covered content, and unnecessary visual noise.

## Form-control and overlay verification

For branded forms, exercise the actual controls rather than accepting a screenshot of their closed state:

- Inspect chevron and trailing-icon insets against the spacing tokens. Check vertical alignment, one arrow only, and enough reserved label space with long values, zoom, and supported RTL layouts.
- Open each dropdown, calendar, popover, and dialog. Confirm that its typography, surface, border, radius, elevation, selected/disabled states, and focus treatment belong to the website, including portaled content and supported color modes.
- Check placement near viewport edges, scroll containers, sticky layers, and the mobile keyboard. Ensure content remains reachable without clipping or accidental page overflow.
- Use the keyboard to open, navigate, select, and dismiss according to the component pattern. Verify Escape where appropriate, visible focus, modal focus containment, and sensible focus restoration; non-modal dropdowns must not trap Tab navigation.
- Trigger field errors, submission feedback, and destructive confirmation/cancellation. Check designed feedback, connected error text, preserved input, and announcements; do not accept default browser alerts as product feedback.
- Record any intentionally retained native mobile picker or platform-owned UI and its rationale. Distinguish observed target-platform behavior from an untested assumption.

If interaction tools are unavailable, report open-state appearance and behavior as unverified. A styled trigger or a passing build is not proof that its popup is themed or accessible.

## Animation verification in the browser

For every promised signature moment, trigger it in the rendered application. Record the page/component, viewport, trigger, expected result, observed result, and any limitation. Capture before/during/after frames or a short recording when available; screenshots alone do not establish smoothness or correct timing.

Verify entry, completion, interruption, reverse scrolling where relevant, and repeated activation. Re-enter the route and resize across the effect's breakpoint to expose duplicate listeners, stale measurements, pin gaps, or cleanup failures. Test with reduced motion enabled before load and changed while the page is open. Exercise keyboard focus and touch equivalents; content and CTAs must stay reachable through the whole sequence.

For canvas/video effects, test loading failure and the fallback, then inspect offscreen/background activity. Use a performance trace or device observation before claiming smoothness; desktop emulation does not prove low-end mobile GPU performance. Report unavailable hardware coverage honestly.

If browser interaction is unavailable, mark motion behavior unverified and identify the exact effects still needing a runtime check. Imported libraries and successful builds prove neither motion behavior nor visual quality.

## Design-system drift checks

Look for local values or variants that have drifted away from shared tokens and components:

- one-off colors;
- arbitrary spacing;
- slightly different radii;
- duplicate button styles;
- inconsistent table density;
- repeated page-specific CSS fixes;
- icon families mixed together;
- animation styles with different timing or easing.

Fix the shared cause before the local symptom when practical.

## Originality and anti-template review

Ask:

- Could this screen belong to almost any AI-generated SaaS product?
- Is personality coming from a coherent product concept or from trendy decoration?
- Are bento grids, gradients, glass, pill shapes, giant type, glow, or 3D effects justified?
- Does the interface preserve brand-specific assets, tone, and content hierarchy?
- Are signature moments memorable because they are selective?

Do not add novelty merely to pass this check. Product-specific restraint is a valid identity.

## Interaction and state review

Do not judge only the ideal populated state. Inspect:

- first-time/onboarding;
- empty and partial data;
- no search results;
- loading and skeleton;
- offline/network/server errors;
- validation and successful submission;
- permission denied and disabled;
- destructive confirmation and cancellation;
- long text, long lists, large numbers, and missing values;
- hover, keyboard focus, pressed, selected, expanded, and dismissed states.

Check whether feedback appears near its cause, the user can recover without losing work, focus moves logically, and status changes are perceivable without relying on color or animation.

## Findings format

For each important issue, capture:

| Field | Content |
| --- | --- |
| Location | Page, component, state, and viewport |
| Observation | What is visibly or behaviorally wrong |
| Evidence | Screenshot, rendered behavior, or reproducible state |
| User impact | Why it harms comprehension, task completion, accessibility, trust, or consistency |
| Severity | Blocker, high, medium, or low based on product impact |
| Recommendation | Smallest coherent fix that solves the underlying problem |
| Verification | Viewport, state, or interaction to re-check |

Prioritize task blockers, accessibility failures, data-loss risk, mobile breakage, misleading hierarchy, and system-wide inconsistencies before cosmetic polish.

## Completion checklist

Before visual QA is complete, confirm:

- primary action is immediately discoverable;
- hierarchy matches the user task and product identity;
- layout is stable across representative and nearby widths;
- no unintended clipping, overlap, or overflow remains;
- navigation, tables, forms, dialogs, grids, and sticky elements transform intentionally;
- typography, spacing, radius, border, shadow, icon, color, and motion are coherent;
- light and dark modes work when applicable;
- contrast, focus, keyboard operation, labels, and non-color cues are usable;
- loading, empty, error, disabled, success, and long-content states are handled;
- image crops and visual assets fit the theme;
- performance behavior does not obstruct frequent workflows;
- the UI has a recognizable product-specific concept without unnecessary novelty;
- inspiration has been synthesized rather than visibly copied;
- trend-driven choices can be justified by user, brand, or content value.

Do not stop at "it works." Fix visible and behavioral problems before considering the UI complete.

# Select and Persist a Design System

Use when selecting fonts, palettes, visual style, or when multiple pages must share decisions. Reuse existing project documentation and token files first.

## Selection procedure

1. Extract constraints: product task, brand, target languages, light/dark requirements, content density, accessibility, and available assets.
2. Compare two or three viable directions across typography, palette, composition, and motion. State one reason to accept or reject each. A product category suggests questions, not a fixed color or font.
3. For typography, verify actual font source, license, available weights, glyph coverage, and loading cost. Test real headings and labels, especially Vietnamese accents and mixed scripts when relevant.
4. For palettes, map colors to semantic roles before applying them. Check actual foreground/background pairs, focus, disabled/selected states, chart distinction, and any requested themes.
5. Select the coherent direction and express it in the project's tokens and reusable components. Mark unverified font/license or contrast claims honestly.

If UI UX Pro Max is already available and relevant, its local catalog can supplement the shortlist. Inspect its supported command before running it; label its results as catalog recommendations and apply product judgment. The catalog is optional: this skill remains usable without installing another skill or its database. Live trend research follows design-research.md separately.

## Project memory

For a new site or major redesign involving implementation, record the chosen system in the project's existing design documentation. If none exists, create `design-system/MASTER.md` inside that project. Do not write project-specific choices back into the globally installed skill.

Keep it concise and useful for the next page:

```markdown
# Product design system
Updated: YYYY-MM-DD
## Intent
Audience, main task, brand principles, layout/motion/density choices.
## Implementation source of truth
Paths to actual tokens, theme configuration, shared components, and fonts.
## Typography
Display/body roles, sizes, weights, line heights, language coverage, fallback.
## Color
Semantic surface/text/action/status/focus roles and theme mappings.
## Layout and components
Content widths, spacing, responsive rules, density, component conventions.
## Motion
Named moments, durations/easing, triggers, mobile/reduced-motion variants.
## Evidence and verification
Material source URLs and access dates; checks performed and unresolved items.
```

For a legitimate page exception, use the existing override convention or `design-system/pages/<page>.md`. Include only differences, reason, affected components/tokens, and QA impact. Read the master and the relevant override before extending the site. If overrides repeatedly solve the same problem, promote that pattern into the shared system.

Code tokens control rendering. Resolve disagreement between notes and code explicitly, then update both together. Do not silently replace an established brand with a catalog recommendation.

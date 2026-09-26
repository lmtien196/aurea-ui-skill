# Design Research and Direction

Use this reference for major redesigns, new products, new visual directions, landing pages, or briefs described as modern, premium, expressive, editorial, playful, cinematic, polished, or distinctive.

## Research is a design tool, not a mood-board ritual

Do not browse first and think later. Frame the product problem before looking for references. Research should reduce uncertainty, expose proven patterns, and widen the visual vocabulary without replacing product judgment.

The goal is not "find a beautiful website." The goal is "understand what could work for this product, why, and under which constraints."

## Research sequence

1. **Frame the task.** Identify product category, primary user, primary task, content type, business goal, platform, constraints, current design language, and the decision the research needs to inform.
2. **Choose reference classes.** Decide whether the uncertainty is about flow, information architecture, visual direction, interaction, content, design-system mechanics, or a combination.
3. **Search narrowly.** Search by task and archetype: "B2B analytics filter flow", "language learning lesson navigation", "editorial portfolio typography", "mobile checkout address entry". Avoid vague searches such as "best modern UI".
4. **Collect a small diverse set.** Prefer roughly 3 to 7 useful references, each with a reason to exist. More references are not automatically better.
5. **Decompose each reference.** Identify what is transferable and what is context-specific.
6. **Compare and reject.** Explicitly note patterns that look attractive but do not fit the product.
7. **Synthesize principles.** Turn observations into product-specific design rules.
8. **Create a design-direction brief.** Use the brief as the handoff into the design system and implementation.

## Current-trend scan contract

When browsing is available, run a focused live-web scan automatically for:

- a new marketing landing page;
- a major visual redesign or new visual direction;
- a brief that explicitly asks for current, trending, cutting-edge, immersive, cinematic, motion-led, or 3D design.

Do not require an additional user request to research. Under deadline pressure, time-box and narrow the scan rather than silently skipping it.

The scan should produce:

1. **Research date and scope.** State when the scan was performed and what product category, audience, and design questions it covered.
2. **Current examples.** Inspect live pages or current New, Recent, Trending, or Popular feeds rather than relying on memory or old screenshots.
3. **Source diversity.** Use a small set of references with different roles: at least one shipped comparable product or real-product flow, at least one current visual gallery, and an official system, research, or technical source when the design decision needs one.
4. **Pattern classification.** Label each important observation as a shipped-product behavior, research or standards evidence, observed visual trend, or implementation technique.
5. **Fit and rejection.** Record why a pattern fits this product and at least one attractive pattern that should not be copied because of usability, brand, accessibility, performance, or content constraints.
6. **Traceability.** Keep the source URL and access date for references that materially influence the direction.

If live browsing is unavailable, say that currentness could not be verified. Do not present remembered examples as the newest trends or best current websites.

## Reference classes

Use different sources for different questions:

- **Real product flows:** task structure, state transitions, navigation, onboarding, checkout, settings, search, upgrade, tables, filters, and mobile behavior.
- **Research and guidelines:** usability, accessibility, domain-specific friction, content, and tested interaction guidance.
- **Design systems:** tokens, components, semantics, state models, content standards, accessibility, and scaling discipline.
- **Visual galleries:** composition, typography, art direction, imagery, color behavior, density, and visual rhythm.
- **Detail libraries:** microinteractions, motion, delight, empty states, loading, cursor behavior, transitions, and small moments of personality.

See [research-sources.md](research-sources.md) for a curated map.

## Evidence notes for each reference

For every reference that materially influences the design, capture:

- **Source and context:** what product or gallery it came from.
- **What problem it solves:** not just what it looks like.
- **Transferable principle:** hierarchy, layout, flow, typography, interaction, or another specific idea.
- **Why it fits:** user, content, brand, or platform reason.
- **What not to copy:** context-specific details, branding, or risky interaction.

Bad note: "This looks premium."

Better note: "The page feels editorial because it combines high-contrast display type, a restrained neutral palette, asymmetrical image placement, and long quiet sections. We can reuse the typography-to-whitespace relationship without copying the layout or artwork."

## Decompose references by layer

Analyze references through these layers:

| Layer | Questions |
| --- | --- |
| Product | What user task or business goal is being served? |
| IA | How is information grouped, ordered, and revealed? |
| Hierarchy | What is seen first, second, and last? |
| Layout | Grid, content width, alignment, density, rhythm, and asymmetry? |
| Type | Scale, contrast, line length, voice, multilingual behavior? |
| Color | Brand, surfaces, semantic states, contrast, and mode behavior? |
| Geometry | Radius, control shape, borders, dividers, and silhouette? |
| Imagery | Photography, illustration, texture, crops, lighting, and subject treatment? |
| Interaction | Affordance, feedback, transitions, state changes, and navigation? |
| Motion | Purpose, timing, spatial model, choreography, and reduced-motion fallback? |
| Content | Tone, CTA wording, section narrative, information density? |
| Technical | Performance cost, responsiveness, browser/platform assumptions? |

## Synthesis, not averaging

Do not create a collage by taking one visible feature from every reference. Identify a small number of principles that can coexist.

A strong synthesis usually has:

- one clear product personality;
- one dominant hierarchy model;
- a restrained set of expressive choices;
- consistent component and motion behavior;
- a deliberate balance between familiar patterns and distinctive brand moments.

If references conflict, resolve the conflict according to user goals and the existing product identity, not personal novelty preference.

## Design-direction brief

Before a major design implementation, create this internal brief. It may be shown to the user when useful, but it does not need to become a long report.

### Product intent
- Primary user:
- Primary task:
- Desired feeling:
- Trust level / stakes:
- Content density:
- Existing brand constraints:

### Design principles
Write 3 to 5 principles specific to the product. Each should help make decisions.

Example:
- "Learning progress should feel visible without turning every screen into a dashboard."
- "Chinese content is primary; transliteration and translation support it without competing for attention."
- "Warm and encouraging, never childish."

Avoid generic principles such as "simple", "modern", or "user friendly" unless they are made operational.

### Visual direction
- Typography strategy:
- Layout and whitespace:
- Color and surfaces:
- Geometry and elevation:
- Icon and illustration language:
- Image treatment:
- Motion character:
- Density:

### Responsive strategy
- Mobile composition:
- Desktop expansion:
- Priority content:
- Navigation adaptation:

### Signature moments
Choose zero to three moments where brand personality can be especially memorable: a hero transition, progress completion, empty state, learning streak, data reveal, or another meaningful moment. Do not make every interaction a signature moment.

### Anti-goals
State what the design must not become. Examples:
- not a generic glassmorphism SaaS template;
- not visually playful at the expense of data clarity;
- not a desktop layout squeezed onto mobile;
- not a collection of one-off cards and gradients.

## Research depth by work type

### Existing product tweak
Usually skip external inspiration. Inspect local patterns, fix the root cause, and preserve the system.

### New feature in an existing product
Start with the product's own components and comparable internal flows. Research external flows only for interaction questions that the product has not solved.

### New application or major redesign
Research is expected. Include at least one real-product flow source, one system/guideline source where relevant, and visual references only after the product problem is clear.

### Marketing or portfolio page
Run the current-trend scan, then research section sequencing, content narrative, typography, imagery, and motion more deeply. Still validate mobile, performance, and accessibility.

## Freshness and honesty

When browsing is available, prefer current examples and official documentation. Check that a referenced system or product still reflects its current design. If a source is inaccessible, paywalled, or stale, say so and use alternatives.

Do not claim a reference has a feature or principle that was not actually observed. Do not claim that a trend is "best practice" simply because it appears frequently.

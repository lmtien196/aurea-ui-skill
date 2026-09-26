# Aurea UI

Research, design, visual assets, implementation, and verification for product-specific websites and web applications.

[Tiếng Việt](README.vi.md) · [Skill entrypoint](skills/aurea-ui/SKILL.md) · [Sources](SOURCES.md) · [Validation](docs/VALIDATION.md) · [Release checklist](docs/RELEASE.md)

## What it helps with

- Research current examples for new marketing pages and major visual redesigns.
- Choose coherent typography, semantic colors, layout, density, and motion.
- Design responsive flows, forms, dashboards, states, and accessible interactions.
- Implement purposeful animation with motion recipes and practical 3D fallbacks.
- Analyze long screenshots without guessing unreadable details.
- Specify and integrate visual assets in the requested medium.
- Verify real navigation, data states, mutation recovery, and rendered UI.

The skill adapts to an existing product's brand and stack. It is a set of agent instructions, not a UI component package, image generator, fullstack template, or guarantee of a particular visual result.

## Install manually

Download or clone this repository. Copy the complete `skills/aurea-ui` directory into your agent's supported skills directory. Keep `SKILL.md`, `references`, and `agents` together. Back up an existing installation before replacing it.

For a standard Codex user installation, the destination is `~/.codex/skills/aurea-ui` (Windows: `%USERPROFILE%\.codex\skills\aurea-ui`). If you configured a different Codex home, use that location's `skills` directory. Start a new task/session if the agent does not yet show the skill.

The included Codex metadata enables implicit invocation. Other agents may use different discovery or activation conventions: follow the host's documentation. Cross-agent installation has not been independently verified.

## Example requests

> Use $aurea-ui to design a contemporary Vietnamese SaaS landing page. Research current references and implement one purposeful product-demo animation.

> Review this long screenshot. Separate observed layout details from assumptions, then implement a responsive version using the existing stack.

> Improve this dashboard while preserving its brand. Cover loading, empty, failed-save, retry, and permission states.

> Write a hero-asset brief with a mobile crop and room for live HTML copy. Use available image tools, or report which assets still need to be produced.

> Continue this site's design system on a pricing page. Read the project's master design decisions and document any justified exceptions.

## Capabilities and fallbacks

| Host capability | Used for | If unavailable |
| --- | --- | --- |
| Web browsing | Current design evidence and official API checks | State freshness cannot be verified; use supplied evidence |
| Image viewing/zoom | Reference analysis | Report unreadable regions; avoid reconstructing details |
| Image generation/editing | Requested visual assets | Use permitted supplied assets or provide a brief |
| Browser interaction | Rendered UI and animation verification | Report source-only review and unverified behavior |
| Project runtime | Build/type/behavior checks | Report which checks could not run |

This repository supplies none of those services and requires no account or API key of its own. Respect an explicit offline request. Do not upload private reference material to a service without appropriate authorization.

## Repository layout

```text
skills/aurea-ui/   Installable skill and routed references
scripts/            Repository validation helper
docs/               Validation scope and release checklist
README.vi.md        Vietnamese usage guide
SOURCES.md          Sources and provenance
LICENSE             MIT License
LICENSE-STATUS.md   License scope and third-party boundaries
```

Run `node scripts/validate.mjs` with Node.js 20 or later. It uses the standard library only. It validates package structure, local document links, and common portability issues; it does not render a website or prove accessibility, performance, or legal clearance.

## Status and contribution

This is an experimental preview. Motion snippets are adaptation examples and have not been runtime-tested across projects or framework versions. See [validation scope](docs/VALIDATION.md) for reproducible scenario prompts and limitations.

For issues, include the prompt, agent/model, project stack, observed behavior, expected result, and sanitized evidence. Never include credentials or private client material. Keep changes focused and rerun validation.

Released under the [MIT License](LICENSE): use in personal or commercial projects, modify, and share with the required copyright and permission notice. External references and assets retain their own terms; see [license scope](LICENSE-STATUS.md).

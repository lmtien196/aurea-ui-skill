# Motion Implementation Recipes

Read interaction-motion.md first. These original examples are starting points to adapt to the installed framework and current official APIs. Add a dependency only when the selected experience requires it. They are not a prevalidated component library for every project.

## Pick a pattern by the content

| Pattern | Useful for | Implementation and fallback |
| --- | --- | --- |
| Entrance/reveal | Establishing a short reading sequence | Motion or native APIs; content remains visible without enhancement |
| Sticky product story | Relating several explanations to one product visual | CSS sticky, normal document flow; collapse to vertical content on small screens |
| Scroll-linked sequence | Demonstrating a change over time | GSAP ScrollTrigger or supported native scroll timelines; static key frames for reduced motion |
| Shared-element transition | Preserving spatial context between states | Existing framework/Motion layout tools; immediate state change fallback |
| Pointer depth | Optional expressive media | Motion values or local animation state outside React renders; disable for coarse pointers and reduced motion |
| Real-time 3D | Meaningful spatial/product interaction | Progressive scene loading, poster fallback, measured mobile GPU budget |

## React + Motion: a reveal with visible initial content

This example animates a short decorative entrance when the section first enters view. Render its real content normally; animate only after the browser confirms no reduced-motion preference. Keep primary navigation, essential controls, and the main CTA outside delayed sequences.

```tsx
"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const entered = useInView(ref, { once: true, amount: 0.15 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (!entered) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const settle = () => {
      controls.stop();
      controls.set({ opacity: 1, y: 0 });
    };
    if (!preference.matches) {
      controls.set({ opacity: 0.6, y: 12 });
      void controls.start({
        opacity: 1, y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      });
    }
    preference.addEventListener("change", settle);
    return () => {
      preference.removeEventListener("change", settle);
      settle();
    };
  }, [entered, controls]);

  return <motion.div ref={ref} initial={false} animate={controls}>
    {children}
  </motion.div>;
}
```

Check that the entrance does not flash distracting content on hydration; omit or soften it for above-fold text if it does. Adapt reveal thresholds for very tall sections. For a stagger, cap the total delay so long lists do not postpone access.

## React + GSAP: scoped scroll progress

Use this for a supporting visual that changes as its section passes through the viewport. It preserves native scrolling and keeps text in normal flow. The caller supplies the section's visual sizing and a meaningful label outside the decorative progress bar.

```tsx
"use client";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollStory({ children }: { children: ReactNode }) {
  const section = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = section.current;
    const bar = progress.current;
    if (!root || !bar) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(bar, { scaleX: 0 }, {
        scaleX: 1, ease: "none",
        scrollTrigger: {
          trigger: root, start: "top bottom", end: "bottom top",
          scrub: true, invalidateOnRefresh: true,
        },
      });
    }, root);
    return () => media.revert();
  }, []);

  return <section ref={section}>
    <div ref={progress} aria-hidden="true"
      style={{ height: 2, background: "currentColor", transformOrigin: "left" }} />
    {children}
  </section>;
}
```

## Sticky and horizontal sequence recipes

Start a sticky story with a two-column grid: a `position: sticky` visual beside normally scrolling chapters. Use an offset matching any fixed header. Remove sticky positioning when the visual exceeds the usable viewport height, at the content's mobile breakpoint, and for the simplified reduced-motion layout.

Use pinned horizontal storytelling only when spatial sequencing serves the content and native vertical navigation stays operable. For a GSAP implementation, measure the inner track overflow relative to its wrapper, skip when overflow is zero, pin the wrapper, translate only the track, and use function-based distance/end values with refresh invalidation. Recalculate after fonts/media load or content geometry changes; remove observers, triggers, and listeners on unmount. Keep the focused control visible. Use a normal vertical list for mobile and reduced motion. Inspect the entire sequence including the release from pinning; a screenshot of its first frame is insufficient.

## Integration rules

- Give each animated element/property one owner. GSAP and Motion may coexist in separate scopes; avoid two systems writing the same transform.
- Keep per-frame scroll/pointer updates out of React state. Use animation values, library timelines, or native mechanisms.
- Scope selectors and cleanup to the component. Never kill all page ScrollTriggers to clean up one section.
- Preserve server-rendered content, stable media dimensions, real semantics, and keyboard reading order. Animation must not make invisible elements focusable.
- Re-check geometry after asynchronous layout changes. Exercise resize, rapid scroll reversal, repeated route entry, and preference changes.
- For 3D: reserve a poster-sized container, import the scene progressively, show the poster until ready or on error/context loss, pause offscreen/inactive rendering, dispose resources on teardown, and retain a non-canvas path to essential information.

## Official API references

Checked 2026-09-26; verify against the project's installed version before implementation:

- Motion scroll animations: https://motion.dev/docs/react-scroll-animations
- GSAP media conditions and cleanup: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/
- GSAP scroll lifecycle and measurement: https://gsap.com/docs/v3/Plugins/ScrollTrigger/

The broader design-control and system-persistence concepts were informed by Taste Skill and UI UX Pro Max. This reference is independently written; it does not bundle their code or databases. Reference projects: https://github.com/Leonxlnx/taste-skill and https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.

# UX Principles and Product Reasoning

Use this reference for flows, information architecture, navigation, forms, dashboards, onboarding, decision support, usability reviews, and product-structure decisions.

## Start with the user's job

Define the primary job before arranging UI. Ask:

- What is the user trying to accomplish now?
- What information is needed to make the next decision?
- What can be delayed or hidden until relevant?
- What can go wrong, and how does the user recover?
- What does success look like from the user's perspective?

Do not invent personas or research facts. When evidence is absent, use explicit assumptions and design so they can be revised cheaply.

## Information architecture

Group information according to user goals and mental models, not database shape or internal org structure.

- Give each screen a clear purpose.
- Keep frequently used destinations and actions easy to find.
- Make current location and scope visible.
- Preserve back navigation and deep links when appropriate.
- Use progressive disclosure for advanced or infrequent controls.
- Avoid parallel navigation systems that compete for attention.
- Name categories with user language rather than internal terminology.

## Usability heuristics as diagnostic lenses

Use these as reasoning prompts, not rigid laws:

1. **System status:** show what is happening, what changed, and when work is complete.
2. **Match to user language:** use concepts and order that fit the user's mental model.
3. **User control:** provide cancel, back, undo, escape, and recovery where appropriate.
4. **Consistency:** similar things should look and behave similarly; different things should be distinguishable.
5. **Error prevention:** prevent dangerous or expensive mistakes before relying on error messages.
6. **Recognition over recall:** keep relevant choices, context, and history visible when useful.
7. **Efficiency:** support common paths, power users, keyboard use, defaults, and sensible automation without harming novices.
8. **Relevant simplicity:** remove noise while preserving the information needed for confident decisions.
9. **Error recovery:** explain what happened, preserve user work, and show how to recover.
10. **Help in context:** teach at the point of need rather than forcing users into documentation for routine tasks.

## Cognitive load

Reduce unnecessary thinking, not necessary thinking.

- Chunk related information.
- Keep the number of simultaneous decisions manageable.
- Use defaults only when they are safe and likely to be correct.
- Avoid asking for information the system already knows.
- Preserve context across steps.
- Use progressive disclosure instead of hiding essential information.
- Do not over-simplify expert workflows until they become slow.

Treat concepts such as Fitts's Law, Hick's Law, proximity, similarity, continuity, and serial-position effects as useful lenses rather than universal formulas. Context and evidence win.

## Hierarchy and attention

The screen should answer quickly:

- Where am I?
- What is this screen for?
- What matters most?
- What changed?
- What can I do next?

Use order, type, spacing, alignment, contrast, grouping, and position before adding decoration. Do not make every region equally prominent.

## Navigation

Choose navigation according to task frequency and information depth.

- Keep top-level choices stable.
- Avoid hiding primary destinations behind ambiguous icons.
- Show current selection.
- Preserve predictable browser/back behavior.
- Do not use tabs for sequential steps or steppers for peer categories.
- Avoid deep nesting when a flatter, well-labeled structure works better.
- On mobile, prioritize high-frequency destinations rather than reproducing desktop navigation exactly.

## Forms

Minimize effort and uncertainty.

- Use persistent visible labels.
- Ask only for necessary information.
- Group fields by user meaning.
- Use correct input types, autocomplete, and sensible formatting.
- Explain unusual constraints before submission.
- Validate close to the problem and preserve entered values.
- Prefer forgiving input over strict formatting when the system can normalize safely.
- Make destructive or irreversible consequences explicit.
- For long forms, evaluate whether progressive steps improve completion; do not split short forms merely for visual style.

## Search, filters, and data-heavy UI

Design around decisions, not the amount of data available.

- Use filters that match meaningful user questions.
- Make applied filters visible and reversible.
- Preserve filter state when users inspect details and return.
- Provide useful empty/no-result guidance.
- Prioritize columns and metrics needed for the primary decision.
- Keep comparison relationships visible.
- Use summaries, highlighting, sorting, and grouping to reduce scanning cost.
- Do not shrink dense tables until unreadable; adapt representation on smaller screens.

## Onboarding and first use

Teach by helping users accomplish something real.

- Explain value before asking for commitment.
- Ask for setup information only when needed.
- Prefer contextual guidance over long tours.
- Use sample data only when it clearly communicates what real data will look like.
- Make empty states actionable without overwhelming the user.
- Avoid blocking experienced users with mandatory education they do not need.

## Feedback and state

Every meaningful action should have a perceivable response.

- Acknowledge input immediately.
- Distinguish loading from failure.
- Avoid spinners for operations that can use optimistic feedback safely.
- Confirm destructive or high-impact actions at the right moment.
- Use undo when it is safer and less interruptive than repeated confirmation.
- Keep success feedback close to the action and avoid celebratory interruption for routine work.

## Trust and high-stakes actions

Trust comes from clarity and predictability.

- Explain costs, permissions, destructive effects, and data sharing before commitment.
- Do not use dark patterns, hidden defaults, fake urgency, or misleading hierarchy.
- Make privacy/security-sensitive choices understandable.
- Preserve records or confirmations when users may need proof of completion.

## Familiarity versus novelty

Use familiar patterns for common tasks. Spend novelty where it can strengthen brand, comprehension, or delight without increasing task risk.

A useful rule: the more frequent, consequential, or time-sensitive the task, the more predictable the interaction should be.

## UX review questions

Before approving a flow, ask:

- Can a new user identify the next action without instruction?
- Can an experienced user complete the common path efficiently?
- Does the system preserve work and context after errors?
- Are hidden states and mode changes obvious?
- Are important consequences visible before commitment?
- Is the interface organized around the user's decisions rather than the system's data model?
- Does the design remain understandable with realistic long content, empty values, and partial data?

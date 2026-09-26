# Content Design Reference

Use this reference for UI copy, labels, instructions, onboarding, errors, empty states, notifications, product tone, and multilingual interfaces.

## Content is interface

Words determine what users think a control does, what they believe happened, and whether they trust the product. Design copy together with layout and interaction, not after the screen is finished.

## Principles

Write content that is:

- clear before clever;
- specific rather than vague;
- concise without removing necessary context;
- action-oriented where action is required;
- consistent with product terminology;
- appropriate to the user's expertise and emotional state.

Avoid filler, corporate jargon, and generic AI-style enthusiasm.

## Labels and actions

Use labels that describe the actual action or destination.

Prefer:
- "Save vocabulary"
- "Invite teammate"
- "Download report"

Over vague labels such as:
- "Submit"
- "Continue" when the destination is knowable
- "OK" for a consequential action

Use sentence case unless the established product system specifies otherwise.

## Headings and hierarchy

Headings should help scanning and orientation. Avoid repeating the same idea in the page title, subtitle, card title, and body copy.

The first screenful should communicate value and next action without requiring users to decode marketing language.

## Forms

- Use persistent labels.
- Put instructions before the user needs them.
- State formatting constraints only when the system cannot accept flexible input.
- Use helper text for durable guidance, not temporary validation.
- Make required/optional conventions consistent.
- Preserve user-entered content after errors.

## Error messages

A useful error message answers:

1. What happened?
2. What needs to change?
3. What can the user do next?

Avoid blame and vague messages such as "Something went wrong" when more specific information is safely available.

For destructive or irreversible actions, name the affected object and consequence.

## Empty states

Explain why the area is empty and the most useful next action. Do not force every empty state to contain an illustration, heading, paragraph, and multiple buttons.

Differentiate:

- first-use empty state;
- no search results;
- filtered-to-zero results;
- user has no permission;
- data is still loading;
- a real absence that requires no action.

## Success and confirmation

Confirm important completion without interrupting routine work unnecessarily. Use inline state, toast, or confirmation page according to consequence and whether users need a record.

Do not celebrate every save operation.

## Onboarding

Teach in context. Explain why a setup step matters before asking for information. Avoid long feature tours before the user has a goal.

Use progressive education when a feature becomes relevant.

## Tone

Define a small tone range rather than one fixed voice. A brand can be warm while becoming more neutral during errors, billing, security, or destructive actions.

Do not use jokes when the user may be anxious, blocked, or losing work.

## Multilingual content

Design for expansion, mixed scripts, and different word lengths. Do not assume English-length labels.

- Keep source terminology consistent.
- Avoid embedding meaning only in wordplay.
- Verify fonts support required scripts.
- Do not truncate critical labels merely to preserve a screenshot composition.
- Keep language selectors and locale-specific formatting understandable.

For learning or transliteration-heavy products, establish a hierarchy among source script, pronunciation, translation, grammar annotations, and metadata so every line does not compete equally.

## Numbers, dates, and units

Use locale-appropriate formatting. Keep units close to values. Align comparable numbers when it improves scanning. Explain abbreviations that the audience may not know.

## Notifications and permissions

Explain why permission is requested and what value it enables before invoking a browser or OS prompt when possible.

Notifications should state what changed and what action is available, not merely announce that a notification exists.

## Content QA

Check:

- terminology is consistent;
- CTA labels predict results;
- headings support scanning;
- instructions appear before errors;
- error messages support recovery;
- empty states match the actual cause;
- copy fits realistic mobile widths and localization;
- tone remains appropriate in stressful states;
- repeated interface text is not redundant;
- important meaning does not depend on placeholder text or icons alone.

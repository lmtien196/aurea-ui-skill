# UI Implementation Quality

Use when implementing real navigation, data fetching, mutations, permissions, or forms. Adapt to the project's framework and component APIs; this is not a fullstack template.

## Establish the functional contract

Identify routes, data sources, role-dependent states, primary actions, and known placeholders. Inspect existing components and shared layout before creating new ones. Choose navigation from the task and information architecture, not a universal sidebar rule.

Ensure nested/detail pages have a stable route back to their parent. Browser history alone is insufficient when a user opens a deep link in a new tab. Preserve URL/filter state where useful and verify direct route entry, refresh, and back navigation.

## Data and mutation behavior

| Situation | Expected behavior |
| --- | --- |
| Initial load | Indicate loading near the affected content and reserve useful layout |
| Background refresh | Preserve usable data and explain refreshing only when it matters |
| Empty / filtered-out data | Distinguish first use from no matching results; offer an appropriate action |
| Failed read | Show a recoverable error and retry where appropriate |
| Pending mutation | Acknowledge the action, prevent accidental duplicate submission, retain context |
| Failed mutation | Preserve user input, explain recovery, restore any optimistic state |
| Concurrent edits | Resolve stale responses/conflicts without silently overwriting newer work |

Optimistic updates suit reversible, low-risk actions when rollback and reconciliation are implemented. Cancel or account for in-flight reads, retain the previous state, restore on failure, and reconcile with the server using the project's data library. Handle overlapping mutations deliberately; one failure must not undo a later successful edit. Never display financial/authentication success before the authoritative response warrants it.

Investigate repeated requests from query-key values, effects, invalidation, retries, and focus/reconnect settings. Object reference changes alone do not establish a refetch loop. Follow the installed query library's key semantics; for TanStack Query, keys are hashed deterministically. Source: https://tanstack.com/query/latest/docs/framework/react/guides/query-keys

## Forms and permissions

Validate at the correct layer, retain entered values after recoverable failures, connect errors with fields, and move focus only when it helps recovery. Use a pending state per action instead of freezing the whole interface unnecessarily.

Show role-appropriate navigation, but rely on server authorization for protected data/actions. Cover signed-out, expired-session, forbidden, and missing-resource states. Keep credentials server-side according to the stack's conventions; never use hidden frontend controls as enforcement.

Make placeholders explicit in both UI and handoff. Implement requested primary actions or state the blocker; a “coming soon” toast is not a functional substitute.

## Integration details

- Pair semantic foreground and background roles, including overlays, selected, disabled, and focus states. Verify the rendered theme and theme provider agree.
- Check actual component semantics: avoid nested links, invalid control values, and duplicate form submissions. Library-specific restrictions apply only to that library/version.
- Keep render pure; trigger user actions from handlers and external synchronization from correctly scoped effects.
- Model time according to meaning: instants with an unambiguous offset/UTC representation, date-only values as dates, and recurring local schedules with their timezone. Avoid turning birthdays or local business dates into accidental timezone-shifted instants.
- Use the application's declared locale/timezone for display; it may intentionally differ from the device's settings.
- Keep primary input feedback prompt. Treat timing ranges as adjustable starting points; allow interruption and reduced motion. Keyboard use must remain responsive without a blanket prohibition on every visual transition.

## Verification boundary

Exercise success, error, slow response, rapid repeat actions, direct routes, mobile, keyboard, and relevant permission states in the actual application. Run existing build/type checks and meaningful behavior tests proportional to the changes. Document which checks ran and what remains unverified. A successful compile does not establish correct data behavior.

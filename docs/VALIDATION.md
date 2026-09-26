# Validation scope

## Automated package check

Run from the repository root:

```sh
node scripts/validate.mjs
```

This checks entrypoint fields, required files, local Markdown links, balanced code fences, implicit-invocation metadata, and obvious host-specific paths or credential patterns. It is deliberately dependency-free and does not replace a full YAML parser or dedicated secret scanner.

## Manual scenarios

These are evaluation prompts and acceptance criteria, not claimed completed demos.

| Scenario | Request | Expected evidence |
| --- | --- | --- |
| Motion landing page | Build a current product landing page with one scroll-driven product explanation | Live source/date notes where browsing is available; visible effect; mobile and reduced-motion alternatives; runtime observation |
| Long screenshot | Audit an unusually long page screenshot with tiny labels | Overview and readable regions; preserved order; no invented text; uncertainty localized |
| Dashboard recovery | Implement a saved filter and editable row with a failing API response | Working optimistic/reconciled state where appropriate; rollback; preserved input; direct route and retry checks |
| Asset request | Produce a hero visual and responsive implementation | Correct image/software deliverables; crop and text-safe area; clear status if generation is unavailable |
| Offline small fix | Fix one button alignment in an existing offline project | Local system preserved; no forced trend scan or unnecessary redesign |
| Branded booking form | Build a compact hotel booking form with guest selection, dates, validation, and cancellation confirmation | Deliberate icon insets and long-value spacing; themed open selector/calendar/dialog; keyboard and focus checks; mobile overflow checks; no routine browser alerts |
| Intentional platform UI | Preserve a requested native mobile date picker and add a file upload to a branded form | Explicit native choice preserved and target-platform coverage stated; website control styled where possible; OS file chooser and security UI left platform-owned |
| No browser available | Review an implementation without a browser tool | Source findings separated from unverified rendered/motion behavior |

For each run record date, agent/model, stack/package versions, viewport(s), actual tool availability, artifacts, observed results, and unresolved limitations. Do not infer mobile hardware performance from a desktop screenshot.

## Cross-agent smoke test

This checklist is for future host testing, not a claim that all hosts have passed. Keep documentation-based compatibility separate from observed runtime results.

1. Record the application/version, model, OS/runtime environment, installation path, and skill commit. Install the complete folder in one documented location without replacing another skill or changing unrelated settings.
2. Confirm that `aurea-ui` appears in the host's discovered skills. Invoke it explicitly using that host's convention and verify that the entrypoint and a task-relevant reference were actually read.
3. In a fresh session, request a small UI design task without naming the skill. Record whether the host selects it, requests consent, or does not activate it. Do not infer automatic activation from an explicit-invocation test.
4. Run a relevant manual scenario above in a disposable project. Check the rendered result when tools permit, including keyboard behavior and reduced motion for interactive work.
5. Test a missing-tool or offline scenario. Confirm that unavailable research, image generation, and browser checks are reported honestly rather than fabricated.
6. Publish the evidence and limitations for that exact host/version. A successful parse or package validation alone is not an end-to-end compatibility test.

## Current limits

- New guidance has been structurally checked, but the complete expanded package has not been benchmarked across agents.
- React/Motion/GSAP examples are instructional starting points, not a tested multi-version component library.
- No rendered sample applications, benchmark screenshots, or hardware performance results are bundled.
- The image-analysis workflow uses host-provided inspection tools; no missing external slicing script is required.
- The official skill validator may require PyYAML. The included Node check has a narrower, explicitly documented scope and does not claim to have run that validator.

# Reference Image Analysis

Use for screenshot audits, image-based implementation, long landing-page captures, panoramic references, or dense interfaces. The objective is reliable design evidence at a readable scale.

## Inspect before extracting

Identify the original image and its dimensions using available file metadata or image tools. Inspect the whole image once for page structure, reading order, section rhythm, and the location of the requested details. Do not report precise text, colors, sizes, or spacing that cannot be resolved from the evidence.

If the relevant detail is readable, continue without tiling. Large dimensions or an unusual aspect ratio are warning signs rather than mandatory thresholds. An ordinary image with tiny text may need closer inspection; a large image of a simple illustration may not.

## Read detail at a useful scale

Use the host's image zoom, original-resolution view, or local crop capability. If that is insufficient and local image processing is available, create temporary overlapping crops from the original. Preserve the original file. Cropping for inspection is not a creative edit and must not reconstruct pixels or invent missing text.

- Long pages: inspect top to bottom with enough overlap to retain headings and section boundaries.
- Wide references: inspect left to right while retaining column context.
- Two-dimensional boards: inspect in a recorded row/column order; map findings back to the overview.
- Keep a small record of crop order and source pixel bounds so observations remain traceable. Start with modest overlap, increasing it for split components or lines.

For a complete page audit, cover the whole requested page. For a targeted task, inspect only relevant regions and enough surrounding context. Do not require exhaustive OCR for a spacing or composition question.

## Merge observations

Compare adjoining regions before combining notes. Count overlapping components/text once. Restore cut text only when another view makes it legible. If OCR outputs disagree, inspect the source and report unresolved words as unreadable.

Use this compact evidence structure when useful:

| Region | Observed | Interpretation | Confidence / unresolved detail |
| --- | --- | --- | --- |
| Hero | Two-column composition, media on right | Product demonstration leads the narrative | High for layout; small caption unreadable |

Distinguish visible facts from implementation hypotheses. A screenshot cannot establish actual breakpoints, hover behavior, font files, authentication, animation, or contrast ratios without further evidence. For image-to-code work, record these as assumptions to verify in the browser.

When the original is unavailable, work with readable portions and identify the affected regions. Use available OCR only as an aid, not as authority over contradictory visual evidence. Do not enhance or upscale an image and then treat newly generated details as original evidence.

No special script or absolute path is required by this workflow. If the host cannot zoom, crop, or read the necessary detail, disclose that limitation and avoid guessing.

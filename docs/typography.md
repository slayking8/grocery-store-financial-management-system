# Merca typography decisions

Research and implementation: 8 September 2026.

## Audience and scope

The initial audience is small-business owners in Mozambique using small Android phones. The owner identified affordability, uncertain initial benefit, and varying reading confidence as design concerns. These are product requirements, not demographic findings from the sources below. No Mozambique-specific study establishing an optimal point size was found in this review. This scale is a reasoned starting point to validate with local owners on their actual phones.

## Evidence and interpretation

- [W3C Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) requires support for enlargement to 200% without losing content or functionality. It does not prescribe a universal 16px minimum. Our minimum is an explicit product requirement. Use relative units and allow containers to grow.
- [W3C Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) addresses readable layouts at 320 CSS pixels. Accommodate text by wrapping and stacking instead of shrinking it.
- [Android's Material 3 typography](https://developer.android.com/develop/ui/compose/designsystems/material3) includes a body-large style of 16 with 24 line height. Native Android scalable units are not interchangeable with CSS pixels; this is a reference for hierarchy and spacing, not a web sizing mandate. We choose 18px main text for this reading-intensive sales workflow and omit the smaller Material styles.
- [NN/g's glanceable-reading research](https://www.nngroup.com/articles/glanceable-fonts/) supports larger type for information people need to identify quickly. Apply greater emphasis to quantities, payment amounts, and change. This evidence does not establish exact breakpoint values for Merca.
- [NN/g's lower-literacy usability research](https://www.nngroup.com/articles/writing-for-lower-literacy-users/) supports simpler wording, focused information, and fewer distractions. Larger type alone does not solve comprehension. This research is not specific to Mozambique.
- [W3C Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) specifies 4.5:1 for ordinary text, with exceptions including large text and inactive controls. Secondary details should remain clearly visible. The prototype's secondary text and search placeholder were darkened.

## Applied scale

Sizes below are CSS pixels at a default 16px browser root. The implementation uses rem so larger browser text preferences increase the scale.

| Text role | 320–599px | 600–899px | 900px and above |
| --- | --- | --- | --- |
| Secondary details: units, counts, invoice detail, notification detail | 16 | 16 | 16 |
| Main text: product names, prices, labels, warnings, buttons, search | 18 | 18 | 18 |
| Section headings and cart total | 20 | 22 | 24 |
| Dialog titles | 22 | 24 | 26 |
| Quantity, amount received, subtotal, total, change | 24 | 26 | 28 |

The existing layout query at 480px changes spacing and arrangement only. It does not reduce type size. Keeping body text constant across breakpoints gives phone users the same reading priority as desktop users. Larger headings provide hierarchy where space permits. Decorative emoji are separate from the text hierarchy.

Use line height 1.5 for prose and secondary details, 1.4 for product names and controls, and 1.3 for headings and large amounts. Use regular weight for explanations, semibold for actions, and bold for names and financial values. Keep Inter with Arial and sans-serif fallbacks. Avoid uppercase labels, truncated names, fixed-height text buttons, and viewport-only font sizing.

## Validation and next step

Check computed text sizes and complete the sale flow at 320px and around each layout/type breakpoint. Include a short viewport and a 200% root-text enlargement simulation. These checks are not a complete WCAG audit or a substitute for testing Android accessibility settings on real devices.

Validate this starting scale with local shop owners: ask them to find a product, change its quantity, read the stock warning, and identify the total and change. Observe misreading, hesitation, zooming, and task completion. Adjust based on that evidence without dropping below the 16px floor.

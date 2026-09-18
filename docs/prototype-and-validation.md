# Prototype implementation and validation

## What currently exists

The application is plain HTML, CSS, and JavaScript. It has no build step or application-framework dependency. A local server can be started with `python3 -m http.server 8080`, or the HTML can be opened directly.

| File | Responsibility |
| --- | --- |
| [index.html](../index.html) | Catalogue shell, invoice, quantity/group views, confirmations, and notification markup |
| [app.js](../app.js) | Sample catalogue, grouping, shortcuts, search, order, invoice state, calculations, and interactions |
| [styles.css](../styles.css) | Responsive layout, image cards, type tokens, warning states, and spacing |
| [assets](../assets/) | Prototype rice-package illustrations |

Products, stock, categories, favourites, and ordering are sample/in-memory data. Reloading restores the initial state. Completing a sale shows feedback and resets the current invoice; it does not persist a transaction or decrement stock. Cancelling resets it without recording a sale. There is no inventory import UI, backend, printer integration, wallet integration, or accounting ledger.

A native dialog provides modality for quantity selection and confirmations. The group uses the same browser primitive styled as a full-screen view. This is a presentation prototype, not a routed multi-page application.

## Caching incident and asset revisions

After the multi-product changes, the owner reported a null-element addEventListener error, an empty initial product grid, and broken product clicks. The current files had the expected elements. An old cached script paired with new HTML was suspected; the owner subsequently confirmed cached responses were the cause.

CSS and JavaScript URLs in index.html now have content-derived version query strings. Update the corresponding URL when either file changes so a normal reload requests the matching assets. Merely running a JavaScript syntax check does not detect a cached HTML/script mismatch.

The first interaction verification used a DOM simulation. After the reported failure, checks were extended to a real Chromium browser against the local server. Preserve this lesson: validate the served page and its actual resources, not only functions evaluated in isolation.

## Checks performed during the session

Checks were targeted to each change rather than a single complete certification run. They included:

- Initial product rendering, reload, search, clear-search focus, category filtering, and product selection.
- Multi-product totals, shortfall/change/exact-payment labels, quantity subtotal, edits, and removal.
- Immediate stock feedback, multiple shortages, confirmation cancellation, explicit override, and next-sale reset.
- Payment preservation after removing every item, access to an empty invoice with payment, and reuse of that payment for replacement products.
- Bottom-of-invoice entry/reopening, cancellation confirmation, Escape/keep behavior, and icon distinctions.
- Group selection, direct search, pin/unpin, shared product identity across entry paths, and manual organization.
- Layout at 320×480, 320×568, and a short 320×300 viewport; additional desktop/tablet sizes and type-breakpoint boundaries during relevant changes.
- 200% root-text enlargement simulations for relevant group, checkout, and confirmation flows.
- Visible text-size checks, horizontal-overflow checks, selected screenshot reviews, full-screen bounds, header alignment, and measured invoice-bar clearance.

Browser checks used temporary tooling under /tmp during the session. They are not a committed, permanent regression suite, and no project package dependencies were added for them. A check mentioned here is evidence for the change at that time, not a claim that every scenario was rerun after every subsequent styling edit.

## Limits and future validation

The checks are not a full WCAG audit. A root-font enlargement simulation is not identical to every browser zoom mode or Android accessibility setting. Short viewport simulation is not real-device keyboard testing. Performance, slow connectivity, offline behavior, actual printer/wallet behavior, and real product recognition have not been validated by these checks.

The next useful product validation is observation with local shop owners using actual small phones: selecting a variety, changing quantity, spotting insufficient stock, reading total/change, replacing all products while retaining payment, and cancelling the invoice.

## Deferred design work

- Loose goods and decimal quantities, including keyboard behavior and quantity/unit accounting.
- Inventory entry and editing, owner-defined categories/groups, and real product-photo management.
- Persistence, transactions, stock movements, accounting, and the append-only ledger.
- Receipt printing, change-owed redemption, and wallet settlement.
- Customer records, receivable/payable notes, analytics, and AI assistance.
- Integration with a product-discovery app, including consent and visibility decisions.
- Production navigation, device-back behavior, offline delivery, and a maintained regression suite.

These are future concerns, not missing requirements that should be silently added to the current design task.

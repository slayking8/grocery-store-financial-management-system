# Merca: product and design rationale

## Keypad experiment

This separate copy adds the [keypad search prototype](keypad-search.md) from `pad.jpeg`, with an [expanded sample assortment](sample-assortment.md) for exercising its codes.

For the local development memory tool, see the [ai-memory usage tutorial](ai-memory-usage.md), including startup, recall, storage locations, service management, and backups.

## Movable back-to-top shortcut

Phones and tablets share a floating back-to-top button, shown after scrolling 120px. Tap to return to the top; drag to place it anywhere within the visible viewport. Its relative position is remembered on the device and kept in bounds after resizing or keyboard changes. Keyboard users can reposition it with arrow keys (Shift for larger steps). It follows the active page or dialog and respects reduced motion. This is the default for future scrolling pages as well.

## Search clear buttons by default

Every search bar, including future ones, has an accessible × button when it contains text. Clearing empties the query, refreshes results and returns focus to the input. Sales and inventory search follow this rule, including inventory queries filled from dashboard stock alerts.

## Left management drawer

The management menu slides in from the left over the current page, with a shaded backdrop, fixed drawer header and scrollable navigation. Close with ×, Escape or the backdrop; selecting a destination closes the drawer. This replaces the expanding menu beneath the page header.

## Fixed headers by default

Every page, including future pages, must keep its header visible while content scrolls. Management (Dashboard, Inventário and Configurações) and product creation now use a fixed header above a scrolling body, matching the existing product and checkout pages. Sales and grouped browsing retain their pinned navigation. This supersedes earlier scrolling-page-header decisions. See [layout rules](layout-and-visual-rules.md).

## Inventory creation and organisation

Inventário exposes Adicionar produto. Group and category management is available in Configurações; the duplicate inventory shortcut has been removed. Groups and categories can be created and removed there. Removal requires confirmation and preserves products and stock; categories that are a product's only category require reassignment first. See [inventory management](management-products.md).

## Floating stock adjustment

Adicionar and Retirar now open a floating dialog, replacing the inline adjustment form. See [stock adjustments](management-products.md).

## Persistent product editing

Editar now stays inside the product page with bottom navigation visible. Group and category editing lives in Grupo, with independent save/cancel actions and drafts retained when switching tabs. See [product editing](management-products.md).

## Product header and layout

The product header/back arrow now remains fixed above the scrolling content. The bottom tab says Grupo; the overview and horizontal movement filters have been restyled, and movement dates always occupy a separate line. See [product presentation](management-products.md).

## Movement origins and filters

[Stock history](management-products.md) now distinguishes sales from manual changes and has horizontal origin, direction, date and reason filters. Completed sales now reduce in-memory stock and record sale movements; this supersedes earlier no-stock-decrement prototype notes. Financial dashboard samples remain independent.

## Inventory stock movements

[Product details and stock movements](management-products.md) now use explicit additions and withdrawals with a reason, balance preview and session history. Direct stock overwrite in the product editor has been removed.

## Dashboard exploration

[Dashboard](dashboard.md) now includes clearly labelled financial examples, period switching, cash and profit breakdowns, debts, and live catalogue stock alerts. This supersedes the earlier catalogue-count-only dashboard scope.

## Checkout header

Factura and the × exit button remain fixed outside the scrolling checkout content. Opening an invoice still scrolls its content to the bottom, prioritizing payment and completion.

## Stock warning layout

The stock warning keeps 32px top and bottom margins and places its title beside the icon. The icon, explanation of negative stock, and Cancelar / Vender mesmo assim buttons remain outside the scrollable product list. On short viewports the buttons share a row to preserve list space.

## Current quantity entry

Quantity entry opens with the quantity field focused and selected so the numeric keyboard is requested immediately. The dialog uses a single content flow; the separate scrolling details panel and JavaScript viewport positioning were removed at the owner’s request. Tapping the quantity field selects its entire value so typing replaces it, and scrolls the whole dialog to the bottom, repeating after keyboard viewport resizing so the subtotal and action are prioritized. Tapping +/− preserves quantity-input focus if it already has focus, keeping the keyboard open. The quantity dialog uses 8px outer side margins on small phones and 8px inner padding. Quantidade and available stock share a row with space between them at 320px; they can wrap for enlarged text. Text sizes are unchanged. See [sales and invoice behavior](sales-and-invoices.md#quantity-entry-with-a-phone-keyboard) for implementation and validation limits.

## Current category and package filters

Both filter strips fill the available width using at most three columns. Names stay on one line at the existing text size; measured label widths determine whether one, two, or three columns fit. Up to two rows are used, and additional columns scroll horizontally. When all options fit, shorter rows expand to fill the width. Layout updates when the strip resizes or fonts finish loading. This supersedes the fixed three-column interpretation.

## Group card spacing

Group grids have an 8px gap below the sticky navigation so its 2px edge-covering shadow does not obscure the first cards’ top borders.

## Current product imagery

- Product image areas use one shared stone-grey background, `#C8CECC` (`--product-backdrop`), across sales, grouped varieties, management and photo preview. This replaces per-product colors and decorative circles. The muted grey-green separates white packaging and warm bread/oil colors without a white backdrop. Keep the shared color when adding products. Transparent product photographs are now used where available; originals remain in `assets/products`.

## Current management work

- [Product registration](management-products.md) — catalogue registration, multiple category tags and validation. This supersedes the earlier management-shell-only scope.

## Session records

- [Session 02: sales navigation and management entry](sessions/02-sales-navigation-and-management-entry/README.md) — current conversation, kept separately; includes final corrections, research, validation and unresolved whole-card squareness. Read this first for the latest decisions.
- The top-level topic documents below retain the earlier session’s rationale. They are historical where Session 02 supersedes them (including the home heading, group hint, navigation, filters and sale-completion behavior).

## Earlier session

This documentation records the reasoning, decisions, and corrections from the working session on 8 September 2026. It describes the current prototype rather than a complete production specification. Later user corrections supersede earlier implementations.

## Reading guide

| Document | Purpose |
| --- | --- |
| [Product context](product-context.md) | Who the system serves, why small phones come first, and the boundary between the prototype and the long-term vision |
| [Sales and invoice flow](sales-and-invoices.md) | Selection, quantity, payment, stock feedback, cancellation, and what each action preserves |
| [Catalogue and groups](catalogue-and-groups.md) | Categories, varieties, image-first groups, shortcuts, search, and exact product identity |
| [Layout and visual rules](layout-and-visual-rules.md) | Narrow screens, full-screen browsing, action placement, icons, alignment, and invoice-bar spacing |
| [Typography](typography.md) | Research sources, the 16px floor, the responsive type scale, and validation limits |
| [Prototype and validation](prototype-and-validation.md) | Current implementation boundaries, caching, verification, and deferred work |
| [Decision history](decision-history.md) | How the design evolved, including rejected interpretations that should not return |

## Rules to carry into future work

- Design for small-business operators in Mozambique using small Android phones. A 320px viewport is a primary target.
- Product recognition is image-first. Keep names, selling units, prices, and stock readable; images do not replace exact product identity.
- Never reduce text below 16px at default settings to make a layout fit. Main text and controls use 18px.
- Browsing a group is a full-screen activity. Selecting quantity and confirming exceptional actions use dialogs.
- Open invoices at their bottom actions. Preserve the received payment when all items are removed; explicit cancellation or a completed sale clears it.
- Stock shortages are visible immediately, but permission to sell anyway is requested only at checkout.
- Use distinct icons for distinct actions. Leaving checkout is ×; removing an item is −; full-screen group navigation uses a back arrow.
- Keep only the bottom space actually required by the visible invoice bar.

The original idea notes were read at the owner's request but must not be added to Git tracking. This documentation synthesizes the authorized design rationale; it does not change or stage those notes. Root [AGENTS.md](../AGENTS.md) remains the short operational guide for future agents.

# Product context and design priorities

Read [docs/README.md](docs/README.md) for the full session rationale and links to current interaction, visual, and prototype decisions. Later corrections recorded there supersede earlier approaches.

- Merca is a grocery/business financial management system for Mozambique. It may eventually serve businesses of all sizes, but the initial primary audience is small businesses, especially groceries.
- Owners may be uncertain whether the system will benefit their business. Keep the cost and effort of getting started low; a small Android phone should be sufficient to use it.
- Prioritize usability and performance on small, inexpensive Android phones. Desktop and larger-screen support also matter, but must not dictate the mobile experience.
- Treat a 320 CSS-pixel-wide viewport as a primary design target. The owner reported that the current UI is uncomfortable at this width; do not assume existing responsive styles are adequate.
- For UI changes, check narrow-screen readability, touch targets, spacing, overflow, and access to actions. Account for varying viewport heights and the on-screen keyboard rather than assuming one height from the width.
- Phones and tablets use a shared movable back-to-top button by default, including future scrolling pages. Preserve dragging, device-local position memory, viewport bounds, and active-view scrolling.
- Fixed headers are the default on every page, including future pages: the page title and navigation/exit controls must remain visible while its content scrolls. Keep headers readable and bounded on short screens and with enlarged text.
- Every search bar must have an accessible × clear button whenever it contains text, including future search bars. Clearing removes the entire query, refreshes results and returns focus to the input; hide the button when empty.
- The current scope is a frontend prototype/design, without a backend or persistent transactions unless explicitly requested.
- Do not add the user's idea notes to Git tracking (originally referred to as idea.txt; the current notes are ideas.md and text.txt).

- Never use text smaller than 16 CSS pixels at default settings, including secondary labels, hints, units, and notifications. Main text and controls use 18px. Use the rem-based role tokens in styles.css; do not shrink text to fit narrow screens. See docs/typography.md for the researched scale and rationale.

- Open invoices scrolled to the bottom, prioritizing checkout actions after product selection. Keep Cancelar factura immediately above Adicionar produtos, and require an in-app confirmation before discarding the invoice.

- Preserve the received payment when every invoice item is removed: the customer may choose different products using the same money. Cancellation stays available and clears the invoice/payment only after confirmation; completing a sale also resets them. An empty invoice with a payment must remain accessible from the product screen. Use × to leave checkout and − to remove an item, with accessible labels; do not replace these icons with visible text buttons.

- Group related products in a shallow image-first card grid; allow owner-selected shortcuts that reference the same underlying product/stock. Search exposes exact varieties directly. Show the variety and selling unit on invoices and stock warnings. Loose/decimal quantity entry is deferred.

- Product browsing, especially grouped varieties, must prioritize recognizable images over text-heavy lists. Use large image targets with readable names, units and prices underneath; keep 320px and the 16px minimum in mind. Current rice images are illustrative placeholders, not photographs of actual brands.

- Product groups open as a full-screen browsing view, not a floating card. Use the concise checkout label Total.

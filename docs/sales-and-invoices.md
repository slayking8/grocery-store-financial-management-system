# Sales and invoice behavior

## One invoice can contain different products

The initial prototype sold a single product at a time. The owner requested different products in the same invoice so the interface could represent an actual customer purchase.

Product selection opens quantity entry. Adding the product updates the invoice, and the operator can continue browsing. Selecting the same exact product again edits its existing quantity instead of creating an unrelated duplicate line. Different varieties or package sizes remain distinct lines.

## Quick quantity controls on product cards

Exact product cards provide a convenience control at the bottom. At zero, a full-width **+ Adicionar** button adds one unit without opening the quantity dialog. Once present in the invoice, it becomes **− quantity +**: plus adds one and minus removes one, returning to the add button at zero. The whole quick control turns red as soon as its quantity exceeds available stock. The displayed quantity is the quantity currently in the invoice.

Exact product cards show only the available-stock number in the top-right corner; its accessible label retains “available”. Group cards omit an aggregate stock number because each variety has its own stock.

Tapping the main card still opens the existing quantity dialog for direct entry or larger adjustments. The group entry card does not show quick controls because it does not identify one sellable product. After opening a group, each exact variety card uses the same stock badge, price · unit row and quick quantity controls as the main catalogue. Its shortcut star sits at the top-left, opposite the stock count. Quick changes update the existing invoice line and preserve received payment when the last item is removed.

## Quantity and immediate cost

The quantity dialog must show a live subtotal. The operator should see what 1, 2, or more units cost while typing or using +/−, rather than wait until opening checkout. Reopening an existing line shows its current quantity and subtotal.

Current quantities are positive whole numbers. Empty or invalid input disables adding; empty input shows no calculated subtotal. Loose goods and fractional quantities were recognized later and explicitly deferred. A displayed selling unit of 1 kg currently means a packaged unit, not support for entering 0.5 kg.

## Two stages of stock feedback

Immediate feedback and final confirmation solve different problems:

| Moment | Behavior | Reason |
| --- | --- | --- |
| Quantity exceeds available stock | Quantity field and stock label turn red; the label says how much is available | Let the operator detect a problem while entering quantity |
| Product is added to the invoice | Affected line is red with a stock-shortage message and available quantity | Make all lines needing correction/removal identifiable |
| Quantity is corrected | Red feedback disappears for that line | The warning follows the current quantity |
| Operator presses Concluir venda with sufficient payment and a shortage | A floating confirmation lists affected exact products | Ask about the exception at the point of committing the sale |
| Operator chooses Cancelar in the stock warning | Keep invoice/payment; return focus to the first affected item | Help the operator correct or remove it |
| Operator chooses Vender mesmo assim | Finish the prototype sale | Explicitly accept the shortage for this sale |

The warning must not interrupt browsing, adding products, or quantity entry. A quantity above stock can still be added. The earlier inline checkbox for Vender mesmo assim was replaced with checkout-time confirmation.

The negative-stock warning describes the intended business consequence. The current prototype does not actually decrement stock or record a stock movement.

## Payment and labels

Total is the sum of the current invoice lines. The owner requested the concise label **Total**, replacing Total a pagar.

With a nonempty invoice:

- Received amount below total: **Faltam** next to the missing amount, with red feedback; completing the sale remains disabled.
- Received amount equal to or above total: **Troco** next to the difference; exact payment shows 0 MT.
- Empty payment: Troco with a dash, with completion disabled.

Do not show Troco and Faltam together. They are mutually exclusive states, not a fixed label plus a second label in the amount field.

## Invoice entry prioritizes checkout

Every time the invoice is opened from the product screen, it starts scrolled to the bottom. The owner's rationale is that the operator already paid attention to the product list during selection; the next task is to access invoice actions and payment.

The vertical order is: product lines, Cancelar factura, Adicionar produtos, Total, Valor recebido, change/shortfall, Concluir venda. Cancelar factura must sit immediately above Adicionar produtos. The product list remains reachable by scrolling upward. Cancelling a stock warning is a deliberate exception: it returns attention to the first shortage.

## Leaving, removing, and cancelling are different

| Action | Items | Received payment | Outcome |
| --- | --- | --- | --- |
| × to leave checkout / Adicionar produtos | Preserve | Preserve | Return to browsing |
| − to remove one item | Remove only that item | Preserve | Recalculate the invoice |
| Remove the last item | Empty | Preserve | Keep cancellation available; completion is disabled |
| Add replacement items | Add to the same invoice | Reuse retained amount | Recalculate change/shortfall |
| Cancelar factura → Continuar na factura, or Escape from confirmation | Preserve | Preserve | Dismiss the confirmation |
| Cancelar factura → Sim, cancelar factura | Clear | Clear | Close invoice and show cancellation feedback |
| Complete sale, including confirmed stock override | Clear | Clear | Close invoice and show sale feedback |

An empty invoice with a retained payment remains accessible through the invoice bar. This prevents money entered for a customer from becoming inaccessible while that customer chooses replacement products.

The owner explained two coherent interpretations of removing the last item: preserve the money until explicit cancellation, or automatically cancel and clear the money. The implemented choice is preservation. The rejected intermediate behavior cleared payment but otherwise treated the empty invoice as ongoing. Do not reintroduce that hybrid or disable cancellation just because there are no products.

Cancellation confirmation is an in-app product interaction requested by the owner. It is not an assistant permission workflow.

## Quantity entry with a phone keyboard

A phone at 320 × 667 CSS pixels can have very little space left when the keyboard includes clipboard and password suggestion rows. Opening quantity entry focuses and selects the quantity input so the phone requests its numeric keyboard immediately. The owner can type a replacement value or use +/− while the keyboard remains open.

The dialog uses the current visual viewport height and offset, updating on resize and scroll. Its details scroll independently while Adicionar à factura / Actualizar quantidade remains visible below them. The focused quantity is kept within the details viewport during keyboard resizing. Product identity, unit, stock warning, and live subtotal remain available by scrolling; text is not reduced. The quantity field requests numeric input and disables autocomplete, but keyboard providers control their accessory rows.

The viewport also requests `interactive-widget=resizes-content`, following [Chrome's Android viewport guidance](https://developer.chrome.com/blog/viewport-resize-behavior/). Visual viewport measurement supports browsers that do not apply this request.

Validation: Chromium at width 320 and heights 667, 320, 240, and 180 confirmed the initial heading focus, visible quantity field and action, no page horizontal overflow, live subtotal, and successful addition of the entered quantity. Reduced viewport heights simulate available keyboard space; they do not reproduce a particular Android keyboard or password manager. Actual phone acceptance remains to be checked.

### Later correction: remove the separate scrolling panel

The owner rejected the independently scrolling details introduced above. The wrapper, pinned action layout, and JavaScript visual-viewport positioning have been removed. The dialog returns to a single normal content flow with the existing whole-dialog overflow fallback for short screens. Outer side margins remain 8px, inner side padding 8px, and the quantity/stock row remains unchanged. Pointer presses on +/− prevent focus transfer only while the quantity input is focused, preserving the open keyboard; otherwise the buttons work without focusing the input. Keyboard tab navigation remains available.

## Shared product card presentation

Exact product cards use the group-variety presentation across sales, code results and inventory: edge-to-edge image area, numeric stock at the top-right, two-line product name and a compact price · unit row. Sales cards add the quick quantity control below this shared content. The favourite star remains specific to group browsing and is omitted from reused cards elsewhere.

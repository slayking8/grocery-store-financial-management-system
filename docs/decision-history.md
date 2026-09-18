# Decision history and superseded approaches

This is a compact record of the session's progression. It preserves the reasons behind corrections so future work follows the current choice rather than an earlier implementation.

| Stage | Request or finding | Current decision and rationale |
| --- | --- | --- |
| Understand the idea | Read idea notes and code without tracking the notes | Keep the prototype/frontend scope explicit; broader financial management is future work |
| Multi-product sales | A customer needs different products on one invoice | Use a shared invoice with editable lines and combined payment calculations |
| Stock warning placement | Inline Vender mesmo assim was in the wrong place | Ask only after Concluir venda, with Cancelar and Vender mesmo assim |
| Broken initialization | Product grid appeared only after search; click handlers failed | Cached old responses were confirmed; version asset URLs and test served pages |
| Quantity cost | Quantity-only entry hid the cost of the choice | Display live subtotal during typing and +/− changes |
| Early stock feedback | The operator still needs feedback before checkout | Turn quantity/stock red immediately, without opening the confirmation |
| Audience context | Small businesses may start with inexpensive small Android phones | Persist the context; treat 320px as primary, not an edge case |
| Narrow-screen layout | Names disappeared and warnings collapsed | Wrap names, separate details, stack crowded labels/actions, and support short-screen scrolling |
| Reading effort | No text should be below 16px | Adopt 18px main text, 16px details, larger financial values, and rem-based scaling backed by documented research |
| Search clearing | The operator needs a quick way to erase the query | Show × only with text, retain the category, and restore input focus |
| Whole-invoice cancellation | Removing each line individually is tedious | Add Cancelar factura as an invoice action |
| Finding stock problems | Rejecting an override did not make affected items easy to find | Highlight exact invoice lines in red and show available stock |
| Checkout entry | Starting at the product-list top delays the next task | Open at the bottom actions; products were already considered while adding |
| Cancellation placement/safety | Significant actions should be grouped | Place cancellation immediately above Adicionar produtos and ask before discarding |
| Similar × controls | Leaving checkout and removing a line looked identical | Use × for leaving and − for line removal; retain accessible labels |
| Icon overcorrection | Replacing icons with visible text was not requested | Restore icons with different meanings instead of removing the icon design |
| Empty invoice ambiguity | Payment stayed but cancellation was disabled | Preserve payment intentionally and keep cancellation enabled; retained money can fund replacement products |
| Empty invoice alternatives | Owner described preservation versus automatic cancellation | Current implementation chooses preservation; automatic cancel/clear is an alternative, not the current rule |
| Shortfall wording | Troco Faltam x MT is contradictory | Switch the label itself: Troco or Faltam, each with an amount |
| Product varieties | Flat individual cards versus grouped choices each have drawbacks | Group related products and offer manually chosen direct shortcuts |
| Loose goods | Earlier quantity assumptions covered packaged units only | Acknowledge decimal/weighed selling but defer implementation at the owner's request |
| Text-heavy groups | Many options would make a list burdensome to read | Use image-first cards; images are central, exact readable details remain |
| Floating group picker | Browsing options should feel like another screen | Fill the viewport and provide back navigation |
| Verbose total label | Total a pagar adds unnecessary wording | Use Total |
| Group alignment | Header and hint need distributed placement | Back left, title right; hint left, dot centered, shortcut text right |
| Arrow centering | Text arrow appeared off-center in its box | Use centered SVG geometry in the back control |
| Favourite emphasis | The star control appeared too large | Reduce its box and star by 30%, without reducing other text below the minimum |
| Unconditional bottom reserve | Empty space after products is unnecessary without the bar | Keep only a small margin when the invoice bar is absent |
| Excess reserve with bar | Showing the bar brought back too much empty space | Measure its actual height and bottom offset, then add only an 8px gap |

## Do not restore these superseded behaviors

- A permanently visible stock-override checkbox in quantity entry.
- A floating stock confirmation as soon as quantity exceeds stock.
- A fixed Troco label next to a Faltam message.
- An invoice that always opens at the top.
- Clearing received money solely because the last item was removed, while treating the invoice as ongoing.
- Disabling cancellation solely because the invoice has no items.
- Using the same × for checkout navigation and line removal, or replacing both with text-only controls.
- A text-first variety list or a floating card for group browsing.
- Tiny text to preserve a dense grid.
- Automatic shortcut reordering or duplicate stock for a shortcut.
- Large fixed bottom padding whenever the invoice bar is present.

The typography scale, illustrative imagery, and untested real-device assumptions remain open to evidence from local operators. The explicit user constraints and corrected interaction meanings should remain stable unless the owner changes them.

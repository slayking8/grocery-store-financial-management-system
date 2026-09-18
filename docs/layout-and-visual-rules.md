# Layout and visual rules

## Fixed page headers are the default

Every current and future page keeps its title and navigation/exit controls visible while the body scrolls. This applies to sales, grouped browsing, checkout, Dashboard, Inventário, Configurações, product details and product creation. It supersedes earlier decisions allowing page headers to scroll away.

Management and product creation use the shared `page-dialog`, `page-header` and `page-content` layout: the header sits outside the flexible scrolling body. Management's menu remains reachable from the header even at the bottom of a page. It opens as a modal drawer from the left, with a fixed title/close header and scrollable destinations. A shaded backdrop, × or Escape dismisses it and returns focus to the menu button; selecting a destination closes it and focuses the new page heading. Reduced-motion preferences disable the entry animation. Titles have bounded scrollable areas for short viewports and enlarged text. Sales and group navigation remain sticky; checkout and product details retain their existing separate header/content structure. Focused inputs scroll within the body rather than behind the header.

Chromium checks covered pinned headers, management navigation from scrolled pages, creation scroll reset, form focus, bottom-action access and horizontal overflow at 320×568, 320×300, 1280×800 and 320×300 with 200% root text. Product creation and group/category management checks also passed after the layout change. Actual Android keyboard behavior remains untested.

## Small screens are a starting point

The 320px review exposed names being truncated, stock messages squeezed beside quantity labels, crowded invoice lines, and difficult controls. The agreed response is to give content room rather than make text smaller.

Product names wrap. On narrow screens, product prices and units have separate lines. The quantity stock message sits below the quantity label so it remains readable even when the warning becomes longer. Invoice lines give names, quantity details, amounts, and removal controls their own space. Confirmations stack their actions when necessary. Dialog content must scroll when the viewport is short.

See [Typography](typography.md) for the type scale. The 16px text minimum includes hints, counts, units, notifications, and warning details. Main text stays 18px on small phones as well as larger screens.

## Screens versus dialogs

| Surface | Presentation | Rationale |
| --- | --- | --- |
| Main catalogue | Image-oriented product grid | Recognize and reach products quickly |
| Product group | Full viewport with back navigation | Browsing many varieties needs the space of another screen |
| Quantity selection | Floating dialog | A focused step for one exact product |
| Invoice | Scrollable checkout sheet | Review multiple products and perform payment actions |
| Stock exception | Floating confirmation | An explicit decision made only when finishing |
| Invoice cancellation | Floating confirmation | Distinguish leaving temporarily from discarding the sale |

The group view is implemented using a native dialog styled to occupy the viewport. The product requirement is a full-screen experience; it is not currently a separate URL or routing system. Browser/Android system-back behavior is not established by the on-screen back-arrow implementation.

## Group header and hint alignment

The owner requested opposite-edge alignment:

- Back button at the far left and group title, such as Arroz, at the far right.
- Toque no produto at the left, a centered dot, and ☆ cria um atalho at the right.
- The hint uses equal outer columns to keep the dot geometrically centered even when the text lengths differ. Text may wrap when needed.
- The back arrow uses an SVG centered vertically and horizontally in its box; the earlier text glyph appeared off-center.

Content can have a comfortable maximum width on desktop while the group screen itself occupies the full viewport.

## Icons have distinct meanings

| Icon/action | Meaning |
| --- | --- |
| ← in group header | Return to the product catalogue |
| × in checkout header | Leave checkout while preserving the invoice |
| − on invoice line | Remove that one item |
| × in search field | Clear search text |
| ☆ / ★ on variety | Create/remove a direct shortcut |
| + / − in quantity control | Increase/decrease quantity |
| Cancelar factura | Ask whether to discard the complete invoice |

The owner disliked checkout-leaving and item-removal controls both using ×. Replacing them with text-only buttons was an overcorrection. The requested solution was different icons, with accessible labels to explain them to assistive technology.

The favourite control was explicitly reduced 30% in both box size and star size: 44px became approximately 30.8px, and 1.5rem became 1.05rem (16.8px at the default root). This does not lower the text minimum. It is a specific visual preference, not a direction to shrink every touch control. Back, close, and removal controls generally retain at least 44px dimensions. Do not describe this as a completed accessibility certification.

## Invoice entry and action grouping

Open checkout scrolled to its bottom, with attention on total, received payment, change, and completion. The operator has already considered products while adding them. Keep Cancelar factura immediately above Adicionar produtos below the lines.

The list remains available for review. A stock-warning cancellation intentionally brings the first affected item into view because correcting it becomes the next task.

## Red conveys actionable stock problems

Use red in quantity entry immediately when quantity exceeds stock. In invoices, use red text plus a tinted background, border, and explicit stock message to distinguish affected lines. This is not color alone: include the available quantity so the operator knows what to change.

Correcting or removing a shortage updates the feedback. Merely adding it must not trigger the Vender mesmo assim dialog. See [Sales and invoices](sales-and-invoices.md).

## The invoice bar must not create excess space

The owner rejected permanent empty space after the product listing. They also rejected restoring a large fixed reserve whenever the invoice bar appeared.

The current rule is precise:

- Without the invoice bar: a small 16px bottom margin.
- With the invoice bar: reserve its measured height + its bottom offset + an 8px gap.
- Recalculate when its size or the viewport changes, including wrapping caused by larger text.

The last products should clear the bar without a large empty tail. The implementation measures the bar and updates a CSS variable using ResizeObserver and the window resize event. Do not revert to fixed reserves such as 115px or 11rem.

## Visual content is illustrative for now

Rice varieties use local SVG package illustrations; other sample products use emoji. Image-first describes the desired browsing interaction, not a claim that these placeholder assets are the final visual identity. Real package photos and recognition testing with operators remain future work.

Management drawer verification: Chromium checks passed at 320×568, 320×300, 1280×800 and 320×300 with 200% root text. Checks covered left-edge placement, no page shift, scrollable destinations, navigation, close-button focus return, Escape and backdrop dismissal. Escape was checked after opening with browser mouse input; a 320px screenshot was reviewed.

Inventory search, management forms and product creation use a 3px green inset focus outline, matching product editing. Keeping the outline inside each control prevents the scrolling body from clipping its left/right edges. Chromium checks covered search, creation, editing and settings at 320×568, 320×300, desktop and enlarged text; a focused search screenshot confirmed all four sides are visible.

All search fields have an accessible × clear button, visible for any non-empty value. Clearing dispatches the normal search update and returns focus to the input. The custom control replaces browser-specific search cancel buttons and has a 44px touch target. Sales and inventory checks passed at 320×568, 320×300, desktop and enlarged text, including empty/whitespace values, result refresh, focus return and programmatically populated inventory queries.

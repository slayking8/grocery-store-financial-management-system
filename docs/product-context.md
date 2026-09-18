# Product context and scope

## Intended audience

Merca is intended to become a financial management system for businesses in Mozambique. It may eventually serve businesses of different sizes, but the initial audience is small businesses, especially groceries.

The owner explained that early customers may be unsure whether the system will benefit them and may be reluctant to invest heavily before seeing value. A small Android phone should be sufficient to start. The interface must therefore make routine selling approachable without assuming a desktop, an expensive phone, or additional equipment.

The owner also identified varying reading confidence as a concern. This is product context supplied by the owner, not a demographic conclusion established by research about Mozambique. Design around readable text, recognizable images, simple language, and predictable interactions; do not assume every operator has the same abilities.

## Why 320px matters

The owner used a 320px-wide viewport and found clipped product names, cramped stock warnings, and other uncomfortable layouts. This made narrow-screen usability a primary acceptance criterion rather than a later adaptation of the desktop interface.

Width does not determine height. 320×480 and 320×568 are useful checks, not a claim that all 320px devices have either height. Short browser viewports, browser controls, enlarged text, and the on-screen keyboard also affect available space. CSS pixels are not necessarily physical display pixels.

Small-screen constraints should change wrapping, spacing, placement, and scrolling rather than reduce text below the agreed minimum. Desktop and tablet support remain important.

## Current product scope

The owner explicitly confirmed that this is a frontend prototype/design. The immediate goal is to refine the selling experience:

1. Find the exact product or variety.
2. Choose quantity and see its cost immediately.
3. Add different products to one invoice.
4. Review payment, total, and change or shortfall.
5. Resolve stock exceptions and finish, or cancel the invoice.

The Portuguese interface and MT currency formatting reflect the intended locality. The UI should not expose backend concepts that do not help an operator make a decision.

## Long-term vision, not current functionality

The original notes describe broader inventory and accounting management: inventory/assets, accounts receivable, accounts payable, and owner's equity, with business activity recorded in an append-only ledger. The accounting-game/lemonade-stand analogy expresses the desire to understand how everyday activity changes the business's finances.

Other ideas include receipt printing, particularly for change owed to customers; electronic-wallet settlement; trusted or recurring customers; receivable/payable notes; AI summaries and business suggestions; and a possible connection to another app that helps people find available products.

The precise wallet-payment direction, receipt redemption process, and external inventory-sharing permissions have not been designed. These ideas are not authorization to implement integrations, ledger persistence, or automated money movement in this prototype.

Owner-customizable inventory and category management are part of the vision. The current sample catalogue has hardcoded categories and products; arranging cards and creating shortcuts do not constitute full inventory/category editing.

# Catalogue, groups, and shortcuts

## The product-variety problem

A grocery may sell multiple kinds of rice, including different varieties and package sizes. Showing every option independently provides direct access but can create repetitive cards and excessive scrolling. Grouping everything reduces clutter but adds a tap to frequent sales.

The accepted compromise is groups plus owner-selected shortcuts. A group organizes related products; a shortcut opens one exact variety directly. Both access the same product and stock, so a shortcut must never create duplicate inventory.

This was informed by existing product-variation and POS-shortcut patterns, not evidence of one universally best solution: [Square variations](https://squareup.com/help/us/en/article/6689-item-options) and [Shopify POS shortcuts](https://help.shopify.com/en/manual/sell-in-person/shopify-pos/customize-pos/smart-grid-management/edit).

## Current example

The prototype contains an Arroz group with four sample packaged options:

- Arroz Corrente, 1 kg.
- Arroz Basmati, 1 kg.
- Arroz Integral, 1 kg.
- Arroz Corrente, 5 kg.

Each has an independent price and stock. These examples demonstrate variety and size differences, not verified local brands or prices. Unrelated sample products open directly. The selection logic also bypasses a group picker when a group has only one option.

## Image-first, shallow browsing

The original grouped implementation used a text list in a floating dialog. The owner rejected this direction because many options would make browsing too dependent on reading. The primary audience and small-phone context require a stronger emphasis on visual recognition.

Groups now open as a full-screen image-card grid. At normal text size, the 320px layout supports two columns. Larger text can reduce the column count to keep content readable. Each card presents an image followed by name, selling unit, price, and stock. Selecting the image/card opens quantity entry.

Do not introduce a deep sequence such as category → group → brand → variety → size for a routine purchase. Keep options at one level where possible. Categories remain useful catalogue filters; groups expose the sellable choices within a product family.

The current rice-package SVGs are lightweight, distinct prototype illustrations. They are not actual packaging photographs. Actual product imagery is a future inventory-content need; current illustrations should not be presented as proof that operators can recognize real brands. Names and units remain essential, particularly for packages that look similar.

## Favourites are direct shortcuts

The star on a variety card toggles its shortcut:

- ☆ creates a shortcut on the main product screen.
- ★ indicates an existing shortcut and removes it when pressed again.
- Creating/removing a shortcut does not select a product, change its stock, or change an invoice.
- A new shortcut is appended to the catalogue. Manual organization can move it.
- Positions do not automatically shuffle according to inferred popularity.
- Shortcuts and ordering are in-memory prototype state and reset on reload.

The favourite button was reduced by 30% at the owner's request so it would not dominate the image. Its approximate dimensions are 30.8px rather than the earlier 44px; see the visual guide for the distinction between this explicit exception and other controls.

## Search and organization

Search returns matching individual varieties directly rather than requiring the operator to enter a group. Matching includes the name and selling unit, and ignores case and diacritics. Existing category filtering is preserved.

The search field shows × only when it contains text. Clearing search empties the query, refreshes results in the selected category, and returns focus to the input. It does not clear an invoice or reset the category.

Organizar provides arrows for manual card order. Group membership does not change when a card moves. The catalogue heading became Produtos rather than Mais vendidos because sales popularity is not calculated by this prototype.

## Exact identity follows the sale

Quantity entry, invoice lines, and stock confirmation must identify the exact variety and selling unit. Arroz Corrente · 1 kg and Arroz Corrente · 5 kg cannot be interchangeable labels. Adding the same variety from a group, search, or shortcut edits the same invoice line.

## Deferred loose goods

The owner recognized the packaged-product assumption and raised 1.5 kg rice as an example. Decimal quantity entry, keyboard behavior, unit conversion, weighed stock, and packaging-versus-loose accounting are not implemented. Do not silently treat package size as decimal-selling support.

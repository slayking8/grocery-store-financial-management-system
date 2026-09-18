# Navigation and sale completion

## Two business sections

The owner described the assembled experience as the sales engine and wanted a distinct entrance to the management side. The original Organizar text button consumed a separate mobile row. Replacing it with an icon to the right of search reclaims that space and gives management an entry point.

Implemented: an SVG dashboard icon with accessible name “Abrir gestão”, title “Gestão”, and a 48px-wide, at least 50px-high button opens a full-screen native dialog. The management shell contains a Produtos heading and the existing Organizar produtos action. Creating this shell and relocating the action were assistant implementation choices within the request; no broader management workflow was specified.

The initial management back arrow was corrected by the owner. Moving between sales and management should feel like switching sections. Gestão now has its title at the left and a cart icon at the right, labelled “Abrir vendas”, with the same section-switch styling. The back arrow remains appropriate inside product groups, which return to the catalogue.

## Individual best sellers versus browsing

Initially the owner requested changing Produtos to Mais vendidos. At that stage it was only a heading change over a grouped catalogue. The later correction was substantive: best-selling status belongs to an individual product, not the entire group. Arroz Corrente 5 kg and Arroz Corrente 1 kg must be separate candidates.

The owner asked for research on whether a navigation button should contain groups or every group should become a category. The implemented recommendation keeps broad categories and adds explicit browse modes:

| Entry | Contents and purpose |
| --- | --- |
| Mais vendidos | Exact individual products, with their own size and price, for quick sale entry |
| Todos | Full catalogue with group cards and ungrouped products; heading is Todos os produtos |
| Atalhos | Starred individual products chosen by the owner |
| Cereais, Mercearia, Bebidas, Padaria, Frescos, Casa | Current sample merchandise categories, preserving product groups |

The reason to avoid turning every group into a category is growth: each additional product family would lengthen the navigation strip. Todos provides a discoverable full-catalogue path without losing broad category filtering. Atalhos was an assistant recommendation separating owner preference from measured popularity. The owner continued refining this arrangement; there was no separate formal selection among alternatives.

Research used [Square’s item grid](https://squareup.com/help/us/en/article/8334-set-up-item-grid), which supports favourites and item-library access, and [Shopify’s smart grid](https://help.shopify.com/en/manual/sell-in-person/getting-started/smart-grid), which supports frequently accessed products and collections. These are precedents for quick access plus catalogue browsing, not proof that this exact layout is optimal for Merca. The recommendation is a design inference from those patterns and the owner’s small-screen constraints.

Current best sellers are a fixed illustrative list of ten product IDs in app.js. They are not calculated from sales, and no popularity claims should be inferred. Choosing a ranking period, metric, ties, empty-history behavior and persisted ranking is future work.

## Search, shortcuts, and manual order

Search exposes exact varieties directly. From Mais vendidos, Todos or Atalhos, it searches the whole catalogue; from a merchandise category, it remains category-scoped. Matching includes name, group and selling unit and ignores case/diacritics. Search headings say Resultados. Clearing search restores the selected browse mode.

Stars preserve the underlying product identity: a product selected from a group, Atalhos, search or Mais vendidos updates the same invoice line and references the same sample stock. The empty Atalhos view explains that a star inside a group creates a shortcut. Stars do not change the sample best-seller ranking.

Organizar produtos opens Todos, clears search and enables ordering arrows. The action becomes Terminar organização; reopening Gestão provides access to finish. Manual arrows are excluded from Mais vendidos so organization cannot alter the illustrative ranking. Catalogue/category ordering and shortcut ordering remain in-memory.

## Checkout and successful completion

The owner removed redundant context labels to reduce visual work: checkout now shows only Factura, without Venda actual. The successful-sale notification shows only Venda registada, without Pronto para a próxima venda. Other notifications, including cancellation, retain their relevant detail; showToast hides its subtitle only when no detail is provided.

Completing a sale, including a confirmed stock override, clears invoice and received payment, closes checkout, switches to Mais vendidos, clears search and its clear button, exits organization mode, restores the Organizar produtos label, and resets page/category scroll to the beginning. This prepares the same quick-sale starting point for the next customer.

This change does not make sale completion persistent. Existing inherited distinctions remain: leaving checkout preserves the invoice; removing the last product preserves payment; cancellation clears them only after the in-app confirmation. No cancellation-to-best-sellers behavior was added in this session.

# Groups, package filters, and sample assortment

## Select a package without adding navigation depth

The owner wanted rice browsing to support both variety and wanted package quantity, citing 5 kg, 10 kg, 25 kg and 50 kg as likely local packaged sizes while stressing owner/admin customization. These examples are owner context, not a researched national market-share claim or a fixed list imposed on every business.

Filters live above the existing image-card grid inside the full-screen group. Todos includes every option; a selected selling unit shows matching exact products. The available values derive from distinct product.unit strings for that group, sorted with numeric-aware Portuguese comparison. Custom catalogue units therefore produce options without editing a separate filter list. Unit normalization/conversion and an owner-editing UI are not implemented.

Reopening a group resets to Todos and the beginning of the horizontal filter strip. Selecting a package resets the product-list scroll while preserving horizontal filter position. Creating/removing a star keeps the selected package. Filter buttons expose aria-pressed; the filter group retains an accessible label even though the visible Tamanho da embalagem heading was removed.

Package size and quantity are different: choosing 5 kg selects a product sold as a 5 kg package; quantity entry determines the number of packages. No loose-goods or decimal-weight selling was added.

## Final filter layout

The owner rejected squeezing four soap filters into a single line around 480px. The final arrangement has **two rows and three equal-width visible columns**, with additional columns reached by horizontal scrolling. Buttons fill each column top to bottom and have equal row heights. Todos occupies one normal slot; fewer than six options leave unused slots rather than stretching each button to consume the row. More than six options require scrolling. Labels remain readable and may wrap.

The first implementation showed a visible heading and flexible buttons. Next came an equal-size wrapping grid with no heading. A request for three visible filters was mistakenly interpreted as a single row; the owner clarified that the two rows must remain. The two-row/three-column rule supersedes both earlier layouts. Horizontal snapping aligns the columns. The scrollbar is hidden, so touch swiping is the primary visible interaction; real-world discoverability is not yet validated.

The category strip is also two rows, but its columns are content-sized. Do not silently apply the package strip’s three-column rule to categories.

## Expanded sample catalogue

| Group | Current examples | Rationale and limits |
| --- | --- | --- |
| Arroz | Corrente 1, 5, 10, 25, 50 kg; Basmati and Integral 1 kg | Demonstrates variety and independently sold package sizes |
| Pão | Carcaça, baguete, white loaf, wholemeal loaf, sold by unidade | Shows that bread is a family of choices rather than one product |
| Óleo | Dona 1, 2, 5 litres; San Drop 1 and 5 litres; Fula 1 litre | Uses the owner’s named brands and demonstrates repeated sizes across brands |
| Sabonetes | Securex Care 100/175 g, Protex Herbal 150 g, Meditex by unidade | Uses the owner’s examples; Meditex does not invent a verified package weight |

Sabão Azul remains a separate laundry-soap product, distinguishing it from bathing soaps. Prices and stock are illustrative and independent per product. Search, shortcuts and invoices use the same product IDs. Group cards no longer say Escolher tipo; their “x opções ›” count is aligned right. The within-group result count is also aligned right and remains live-announced.

## Images and sources

New bread, soap and oil images are lightweight local SVG illustrations extending the existing rice-placeholder system. Oil bottles and soap wrappers include simple brand text; these are not authentic logos, packaging reproductions or photographs. Bread illustrations distinguish rolls, baguettes and loaves. Larger added rice sizes still use emoji placeholders. Group tiles use representative emoji. These assets support prototype browsing but do not establish real brand recognition.

The following sources were consulted during the implementation, and are recorded here rather than re-researched for this documentation task:

| Source | What it supported |
| --- | --- |
| [Securex at Ranxo](https://www.ranxo.co.mz/product_brand/securex/) and [100 g Securex](https://www.ranxo.co.mz/product/sabonete-securex-fresh-100g/) | Local sale of Securex and examples of package sizes |
| [Securex at Krolyc](https://krolyc.co.mz/loja/beleza-e-cuidados-pessoais/banho-e-corpo/sabonete/securex-sabonete-clear-175g/) | Local product listing; search excerpts also exposed Protex Herbal 150 g |
| [Dona at Ranxo](https://www.ranxo.co.mz/product/oleo-dona/) | Local Dona oil listing with 2/5 litre options |
| [Fula at Mega](https://megamocambique.com/pt-mz/products/oleo-alimentar-fula-1l) | Local Fula 1 litre listing |
| [White loaf at Yum Yum](https://yumyum.co.mz/homepage/pao-de-forma-branco/) | Local bread assortment example |
| [Shoprite Mozambique promotion](https://specials.shoprite.co.mz/deals/mzshopritepreco07abr19abr2026/2/) | Wholemeal loaf in a Mozambique assortment |

San Drop spelling and Meditex inclusion follow the owner’s examples; the searches did not independently establish their exact variants or market prevalence. Listings show availability, not predominance. Demo prices are not verified live prices, and the artwork should not be used as inventory evidence.

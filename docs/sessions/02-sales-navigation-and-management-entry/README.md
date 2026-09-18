# Session 02: sales navigation and management entry

This folder records only the conversation beginning with moving “Organizar” beside search and ending with the correction to two rows of package filters and the request to document the session. The session number identifies conversation order, not a newly inferred calendar date. Earlier-session rationale stays in the top-level docs files linked from [the documentation index](../../README.md).

The record distinguishes explicit owner requests, implementation decisions, researched recommendations, corrections, and unfinished requests. Later corrections in this folder supersede conflicting earlier-session approaches; unchanged inherited requirements still apply.

## Reading guide

| File | Coverage |
| --- | --- |
| [Navigation and sale completion](navigation-and-sales.md) | Section switches, individual best sellers, full catalogue, shortcuts, search, organization, checkout reset |
| [Groups, filters, and samples](groups-and-samples.md) | Dynamic package sizes, two-row filter strip, local sample assortment, image placeholders and research |
| [Layout and corrections](layout-and-corrections.md) | Sticky navigation, spacing, corners, square images, phone columns, unresolved card shape, decision sequence |
| [Validation and handoff](validation-and-handoff.md) | Checks actually performed, limitations, phone access, implementation map, next work |

## Final decisions at a glance

- Sales has an icon-only Gestão switch to the right of search. Gestão has an equivalent Vendas cart icon, not a back arrow.
- Mais vendidos contains individual product/size choices. Todos and broad merchandise categories contain product groups. Atalhos contains starred exact products.
- Both category and package navigation have two rows with horizontal scrolling. Package filters specifically have three equal-width visible columns; category buttons retain content-based column widths.
- Main search/categories/title/count and group back/title/package filters/count remain together while products scroll. The group header is opaque up to the top edge.
- Package filters derive from catalogue units, not a hard-coded set of Mozambican package sizes.
- Images are square; their bottom corners are square and outer card corners remain rounded. Whole-card squareness remains unresolved.
- Group product grids have two columns below 768 CSS pixels; tablet widths may have more.
- Checkout says Factura; successful completion says Venda registada and returns to Mais vendidos with search cleared.

## Scope boundary

This remains a plain HTML/CSS/JavaScript frontend prototype. The management area is an entry shell containing Organizar produtos, not a finished management system. Sales rankings, prices and stock are examples. No persistence, real stock decrement, or recorded transactions were introduced. Owner/admin catalogue editing and real-device acceptance testing remain future work.

The owner’s motivation is fast product retrieval during a busy day with many customers. The objective is to finish the sales experience before focusing solely on management. Small inexpensive Android phones remain the primary target, with 320px readability and the inherited 16px minimum text size preserved as requirements.

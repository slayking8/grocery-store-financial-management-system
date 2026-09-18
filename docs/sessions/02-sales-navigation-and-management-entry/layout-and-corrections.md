# Layout rationale and corrections

## Fast retrieval requires persistent navigation

The owner explained that browsing controls disappearing while scrolling undermined all the navigation work: during a busy day, finding every requested product quickly is central to completing sales. The same requirement applies inside product groups.

The main sticky block now contains search, management switch, two-row categories, the current heading/count and the organization hint when applicable. The group sticky block contains the back/title header, package filters and result count. Products scroll beneath these blocks. Changing search, category or package filter returns the relevant list to its beginning.

The entire “Toque no produto · ☆ cria um atalho” hint was removed because vertical space is scarce. Its aria-describedby reference was removed too; star buttons retain descriptive accessible labels. The earlier session’s opposite-edge hint alignment is historical, not a requirement to restore that text.

The first sticky implementation left titles/counts outside the header. The owner corrected this: Mais vendidos, Resultados and their counts must stay with navigation too. A further defect allowed products to appear above the group header through its top inset. Moving the dialog’s top padding into the opaque header and covering the edge closed that gap. Do not make this header transparent or restore the exposed top inset.

Header heights are content-driven, capped at calc(100dvh - 64px), with internal vertical scrolling for short screens or enlarged text. This supersedes an earlier 65dvh cap. A ResizeObserver updates the page or group scroll-padding-top from measured navigation height plus 8px, helping browser-driven scrolling/focus account for the sticky area. This is an implementation compromise to retain product space, not a guarantee that every navigation element is simultaneously visible on every keyboard/zoom configuration.

The owner also spotted a residual gap below the main heading. Removing the old 16px bottom margin from sales-navigation left an 8px heading-to-card gap at the checked widths. Group spacing was left as it was. Avoid reintroducing stacked margins after moving content into the sticky block.

## Corners and image proportions are separate decisions

The instruction to remove the lower left/right radii was initially applied to the entire card. The owner clarified that it referred to the inside image. The correction restores rounded outer cards and squares only the bottom corners of product-visual, variant-visual and product-image. Rounded card bottoms should not be removed again based on the initial interpretation.

Later the owner requested that cards and images always be square. Implemented so far: square image areas and square image element boxes with aspect-ratio: 1 and object-fit: contain. Images keep their internal padding, so the asset box can be smaller than its square colored visual. Square here describes the element box; a bottle, loaf or other depicted object is not stretched into a square.

**Unresolved: whole-card aspect ratio.** The assistant asked whether the whole card including name, price, unit and stock should be square, explaining that at 320px this could require a single column for readable content. The owner did not answer that question and moved on to package filters. The current outer cards still accommodate text below their square imagery and are not forced to 1:1. Do not describe the full square-card request as completed, and do not treat silence as approval of either option.

## Group product columns

The owner requested at most two product columns before tablet width. The assistant chose 768 CSS pixels as the breakpoint. Below that, groupOptions explicitly uses two columns; at 768px and above its existing auto-fit tablet grid can expose more. Checks showed 2 columns at 320/600/767, 3 at 768 and 5 at 1280. This rule is for products inside groups, distinct from the always-three-visible-column package filter strip.

The present CSS forces two group columns below 768px, including with larger root text. This is narrower than the earlier session’s adaptive one-column wording. Text sizing requirements still apply; the square-image change was not a complete large-text regression pass. A future adjustment to one column where necessary would satisfy “at most two”, but has not been implemented in this session.

## Decision sequence and rejected interpretations

| Step | Change or correction | Final interpretation |
| --- | --- | --- |
| 1 | Move Organizar beside search, replace text with management icon | Dashboard icon enters Gestão; organization action moves there |
| 2 | Replace management back arrow; reclaim freed row | Sales cart switch on right; two category rows |
| 3 | Filter group choices by package size | Derive options from exact product units |
| 4 | Remove filter heading and equalize buttons | Accessible label remains, visible heading removed |
| 5 | Remove lower radii, then clarify target | Only inside image bottoms square; card corners restored |
| 6 | Expand bread/oil/soap examples | Locally informed illustrative grouped assortment |
| 7 | Best sellers must be individual achievements | Separate Mais vendidos, Todos and Atalhos; groups stay in catalogue/categories |
| 8 | Remove redundant checkout/success text | Factura only; Venda registada only; completed sale returns home |
| 9 | Scrolling hides navigation | Sticky main and group controls; remove group instruction hint |
| 10 | Titles/counts scroll away and products leak behind header | Include counts/titles in opaque sticky areas |
| 11 | Large gap beneath main heading | Remove leftover 16px margin |
| 12 | Square cards/images and limit phone group columns | Square images and two columns below 768px implemented; whole-card choice unanswered |
| 13 | Filters crowded at 480px; show three across | Equal-width horizontal filter strip |
| 14 | Single-row interpretation rejected | Two rows, three visible columns, scroll for more |

These later decisions supersede conflicting earlier-session guidance without rewriting the history of why that older design existed.

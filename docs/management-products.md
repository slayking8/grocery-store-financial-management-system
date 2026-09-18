## Restored creation and group/category management

Inventário exposes Adicionar produto. Groups and categories are managed in Configurações, reached through the left management drawer; there is no duplicate inventory shortcut. The full-screen creation form accepts an optional photo, name, sale price, selling unit, one or more categories and an optional group. Duplicate name/unit combinations and invalid prices are rejected. Cancelling discards the draft. A successful creation opens the new product at the top, with zero stock; Adicionar records its first stock entry through the existing movement flow.

Configurações supports category creation, ordering and removal, and group creation/removal. Groups are configured independently of membership, so an empty group remains available for assignment. Removal uses an in-app confirmation and preserves products and stock. Removing a group ungroups its products. Removing a category strips that tag, but is blocked while it is any product's only category; assign another category in the product's Grupo tab first. The existing product tabs continue to support assigning/removing categories and changing or clearing a group.

All changes remain in memory. Chromium checks covered creation, validation, duplicate rejection, cancellation, used/unused category removal, group removal, stock entry and independent product/group editing. Layout checks passed at 320×568, 320×300, 1280×800 and 320×300 with 200% root text, including readable text, horizontal overflow and access to the creation actions. A 320px creation screenshot was reviewed. Actual Android keyboard behavior remains untested. This supersedes earlier notes that creation had no entry point or that group creation was deferred.

## Product opening scroll position

Opening an inventory product always starts its content at the top, including reopening the same product. The content scroller resets after the dialog becomes visible so a previous product's scroll position cannot carry over. Chromium checks covered scrolling, switching products and reopening at 320×568, 320×300 and 1280×800, with no horizontal page overflow.

## Unsaved-change actions

Grupo and Editar show save/cancel actions only while that form differs from the saved product, accompanied by Alterações por guardar. Restoring the original values, cancelling or saving hides those actions. The two forms track changes independently across tab switches, including image replacement/removal and decoding in progress. Saving remains disabled during image decoding. Successful saves retain a status message and focus the relevant navigation tab rather than leaving focus on a hidden button.

Browser checks covered initial clean state, text edits and reversions, photo removal, independent group/product saves, cancellation and narrow/enlarged-text reflow.

## Floating stock adjustments

Adicionar and Retirar now open a native floating dialog instead of expanding the product page. The shared dialog has quantity, reason, current stock/result preview, confirmation, Cancelar and ×. It initially focuses the heading so the keyboard opens only when quantity is tapped. Cancel, × and Escape discard the draft without modifying stock. Confirmation records one manual movement and closes the dialog; focus returns to the triggering action, or the product heading if withdrawal becomes unavailable.

Browser validation covered both operations at 320×568, 320×300, desktop and 200% root text, cancellation without mutation, Escape returning to the product page and confirmed movement. Existing filter, sales-origin and shortage-override checks also passed. Real Android keyboard behavior remains untested.

## Editing within the persistent product tabs

Editar is now an in-page tab inside the product content scroller, rather than a separate dialog. The fixed header and edge-to-edge bottom navigation remain visible in Geral, Grupo and Editar. Grupo contains the editable group selection and category checkboxes with its own save/cancel actions. Editar contains image, name, price and selling unit only.

Switching tabs retains unsaved drafts. Each form saves only its own fields; saving group/category membership does not overwrite an unsaved name or photo, and saving product details preserves group/category changes. Cancel resets that form to the saved product and returns to Geral. Leaving the product and reopening starts from saved values. Photo decoding is invalidated on product close; no persistence has been added.

Verification in served Chromium covered independent saves, draft preservation across tabs, required-category validation, cancel/reset, opening another product and the existing stock origin/filter flows. Navigation and horizontal reflow passed at 320×568, 320×300, desktop, and 320px with 200% text including a 300px viewport height.

## Product layout refinement

The bottom tab is now Grupo. The product header and back arrow sit outside the content scroller, remaining visible together with bottom navigation. Long titles can scroll within a bounded heading area on short, enlarged-text viewports. The overview uses a larger centred image above a compact unit/price row. Movement timestamps always occupy their own line beneath the quantity and reason.

Movement filters use one horizontal row of compact controls, with labels and selected values visible inside each control. Active selections use a green background and border. Native select controls retain keyboard and mobile picker behavior. Custom date inputs retain their separate horizontal strip.

Validation: combined-filter and stock-origin checks passed; fixed-header position, date-row geometry and unique DOM IDs passed at phone, desktop and short enlarged-text viewports. Navigation was checked at 320×568, 320×300, desktop and 200% root text. Phone screenshots of the overview and movement filters were visually reviewed.

## Movement origins and horizontal filters

The short product navigation label is now Geral. The price-per-selling-unit explanation is removed from the product overview, and available stock says unidades.

Immediately below the movement heading, a horizontally scrollable filter strip combines origin (all, sales, manual), direction (all, entries, withdrawals), date (all, today, last 7/30 days, custom range), and reason. Custom date fields appear in a second horizontal strip. Date bounds are inclusive in Africa/Maputo time; relative periods use the current date. An invalid range shows an explanation. The full movement count stays in the heading while a result count reports the filtered subset; clearing filters restores all results. Filter changes preserve the controls and focus, updating only the list. Opening another product or rerendering after a saved change resets filters.

Movements store explicit source and timestamp fields. Completed checkout now decrements each product's in-memory stock and appends a sale-origin withdrawal. Manual additions/withdrawals append manual-origin movements through the same recording helper. This supersedes the earlier no-stock-decrement prototype behavior. Cancellation and draft invoice edits do not create stock movements; the existing shortage confirmation remains required before an overselling withdrawal can produce negative stock. Nothing is persisted and the financial dashboard continues to use independent samples.

Browser checks passed for combined filters, inclusive date bounds, invalid ranges, clearing filters, new manual movements, completed sales and shortage overrides, plus horizontal filter scrolling and page reflow at 320×568, 320×300, desktop and 200% root text. Filter controls remain at least 18px.

## Persistent product navigation

The product page now has bottom navigation for Principal, Categorias and Editar. Principal shows product identity, stock actions and history; Categorias shows the group and full category list. Editar opens the existing product editor and closing it returns focus to its navigation button. The header and content scroll together above the navigation, including on short screens with enlarged text.

At the owner's request, the history disclaimer and per-movement Exemplo labels were removed. The underlying seeded movements remain illustrative; their generation and in-memory behavior are unchanged.

Chromium checks covered both views, scroll-to-bottom navigation visibility, editor entry/return focus and removed labels at 320×568, 320×300, desktop and 200% root text (including 320×300).

## Colour-coded sample stock history

Entries use green, withdrawals use a red tint, with explicit Entrada/Saída labels and signed quantities so direction does not depend on colour. Royal Aroma Jasmim has 48 sample movements, Óleo Dona 1 litro has 16, and Rani Super Basmati has 24. Examples include receipts, sales, returns, damage and count corrections, dated in September 2026. Each sample is labelled Exemplo; newly entered movements have no example label and appear first.

Sample histories reconcile to the existing catalogue balances without changing stock. These simulated sales do not add recorded transactions or change checkout behavior. The movement heading shows the total count. Reload restores sample history and clears session additions.

Validation: all history balances reconcile, all three sample counts match, and a newly confirmed entry appears before examples. Chromium layout checks passed at 320×568, 320×300, desktop and 200% root text, with no horizontal overflow or movement text below 16px.

## Stock movements and revised product presentation

The product page now combines a compact product photograph, selling unit and price, followed by a prominent stock panel with **+ Adicionar** and **− Retirar** actions. Group and category metadata is expandable. This supersedes direct stock editing described below: editing product details no longer contains a stock field and preserves the current stock.

Each operation opens an inline form with a positive whole-number quantity and required reason. A live calculation previews the before/change/after quantities in selling units. Only Confirmar entrada or Confirmar retirada changes stock; cancellation leaves it untouched. Removals cannot exceed current stock and are disabled at zero or negative stock. Additions and resulting balances must be safe integers. Negative opening stock can be replenished through additions.

The product's session movement history records signed quantity, reason, timestamp, selling unit at the time, and before/after balances. It updates the shared catalogue, inventory cards and invoice stock feedback. History and changes reset on reload; this is not a persistent ledger, and checkout retains its existing prototype behavior.

Served Chromium checks passed at 320×568, 320×300, 1280×800 and 320px with 200% root text: no horizontal overflow or visible text below 16px in either operation form. Behavior checks covered additions, withdrawals, zero/negative/fractional/unsafe quantities, missing reasons, over-withdrawal, cancellation, preserving stock through metadata edits, zero-stock withdrawal disabling, and retained history when reopening the product. A 320px screenshot was reviewed. Actual Android keyboard behavior remains untested.

## Current inventory product pages

The inventory action strip is removed. Image-first cards show the name, price, unit and availability, matching sales cards. Selecting a card opens a full-screen product page with its image, price, selling unit, stock, group and complete category list. Editar produto opens a populated form to edit these fields and the image; saving updates the shared in-memory product and sales catalogue. Closing the form discards draft edits. Product creation currently has no entry point. This supersedes the registration and per-card image buttons described below.

Browser checks at 320×480 and 320×300 confirmed the detail and edit views have no horizontal overflow, all five categories are displayed, and price/stock edits save successfully. Changes remain in memory only.

# Management: product registration

Inventário, reached through the management hamburger menu, displays the full existing catalogue as image-first cards showing name, sale price in MT, selling unit and category tags. Search matches names, packages and categories. The sales cart icon still switches to sales. Organizar produtos and its product-order controls have been removed.

Registar produto opens a full-screen form. Name, positive price (up to two decimal places, comma or point accepted), selling unit and at least one category are required. Existing categories are selectable checkboxes. Product registration cannot create categories. Gestão → Configurações owns category creation and order, including categories without products. The configured order applies to sales category filters and registration choices; the three sales browse modes stay first. Up/down controls reorder categories. Duplicate and reserved names are rejected. Products carry a `categories` array rather than one category. Configured categories become sales filters, and both sales and management searches include tags. Browse modes Todos, Mais vendidos and Atalhos are reserved names, not merchandise categories.

Each name/selling-unit combination represents one sellable product. Registration prevents duplicates ignoring case, accents and repeated whitespace. An optional existing group places a new variety in the same shallow sales group and contributes its package to the group's filters. Category filtering checks all group members rather than only the representative product. A generic package illustration represents new products; photo upload is now available as described below.

Registration updates the same in-memory catalogue used by sales. New items start with zero stock, preserving existing checkout shortage handling. Stock entry, editing existing product text, new group creation, backend storage and persistent transactions remain outside this step. Reloading restores the sample catalogue; the product reset notice is omitted from inventory at the owner’s request.

Validation used served Chromium at 320×480, 320×300 and 1280×800: registration, decimal price, required categories, duplicate prevention, custom/multiple categories, category filtering, exact search, safe rendering of special characters and invoice selection passed without browser errors. The form had no horizontal overflow or text under 16px. A separate 320px check at 200% root text confirmed no horizontal form overflow and access to Save. Screenshots were reviewed at 320px. These are browser simulations, not real Android keyboard validation.

## Terminology correction

The form now says Unidade de venda instead of Embalagem. Its hint explains the price basis with 75 MT per 1 kg and 25 MT per 500 ml examples. This describes how much one sale unit contains, whether packaged or sold individually; it does not enable fractional invoice quantities. Category configuration is in-memory and resets on reload, like products. Category renaming/deletion is not implemented.

Configuration checks in Chromium at 320×300 and 320×568 covered category creation, duplicate rejection, ordering, selection from predefined categories, registering a product and finding it through its sales category. Settings reflow was checked at 200% root text.

## Management navigation

Management opens on Dashboard by default. A hamburger disclosure menu provides Dashboard, Configurações and Inventário, with the active destination marked. Configurações is now a peer view inside management rather than a separate dialog. Registar produto is only available in Inventário, and closing or saving registration returns there. Dashboard shows current in-memory catalogue and category counts, without fabricated sales metrics. Sales remains the initial application screen. Category ordering remains available in Configurações; the removed Organizar feature was product-card ordering.

Browser checks covered navigation, Dashboard defaults/count updates, registration from inventory, configuration category creation, Escape closing the menu, checkout completion after removing organization code, and 200% text reflow at 320px and desktop widths.

## Real product photos

Registration accepts an optional JPEG, PNG or WebP image (up to 10 MB). A preview appears before saving and can be removed. Each existing inventory card has an Imagem action to replace or remove its image; closing without saving preserves the original. Images follow the same product identity into sales cards, search, groups and shortcuts. Group overview cards retain their generic family illustration.

Uploads are decoded locally, resized to at most 640 pixels on the longest side and encoded as JPEG against white. No image is uploaded to a server; uploaded images reset on reload alongside the other prototype state. Invalid files show an inline message and preserve the previous selection. Saving waits until decoding completes. Closing or resetting the form invalidates unfinished reads.

Five existing entries now have downloaded real product images: Dona 1 L and 2 L, Fula 1 L, Securex Care 175 g and Protex Herbal 150 g. Sources and original image URLs are recorded in [the image manifest](../assets/products/sources.json). Dona and Securex images come from Ranxo Mozambique, Fula from Continente, and Protex from its South African brand site. These are retailer/manufacturer product photos, not photographs of the owner's actual stock; packaging editions may differ. Source copyright remains with the respective owners; these are not claimed as openly licensed assets.

Other entries retain placeholders: generic names lack a brand or exact packaging identity, and the search did not establish usable exact matches for all remaining branded sizes. In particular, a 175 g Securex image is not assigned to the 100 g entry, nor a 2 L Dona image to 5 L. Owners can supply actual stock photographs using Imagem.

Validation: Chromium at 320×300 and 320×568 covered upload on registration, preview, resizing, replacement/removal on existing items, cancelling edits, invalid image contents, draft reset and shared sales imagery. Form reflow was checked at 200% root text. Real photographs were visually inspected before assignment. Real-device camera/gallery behavior remains untested.

## Rice, bread and soap photo expansion

A further 15 real photos replace generic sample imagery or accompany additional named products (20 photo-backed products out of 33 total). The existing rice example IDs now identify Royal Aroma Jasmim 1 kg, Rani Super Basmati 1 kg, Ashoka Basmati Integral 1 kg, Namaste Basmati Extra Longo 5 kg, Arima Tailândia 10 kg and Arima Índia 25 kg. The generic 50 kg sample retains a placeholder. Existing illustrative prices/stock are retained; these are not verified shop prices or current stock.

Bread has real images for Carcaça, Baguete, Blue Ribbon Branco 700 g and Blue Ribbon Integral 700 g; Pão de Lenha was added. The Blue Ribbon names and units replace the former generic white/brown bread entries to match their packaging. Carcaça and baguette are representative photographs from a Portuguese bakery and a bread manufacturer, not confirmed photographs from Mozambique; the local Pão de Lenha image comes from Ranxo. Blue Ribbon photographs come from its official brand site and a Bazara Mozambique listing.

Additional soap choices are Securex Romance and Pamper 175 g, plus Protex Fresh and Deep Clean 150 g, using Ranxo product photographs. Securex Care 175 g and Protex Herbal 150 g retain their previously added photos. No verified photo was found for Meditex or Securex Care 100 g, so their placeholders remain.

The owner specifically named Anabela among rice brands sold in Mozambique. Search found import records mentioning Arroz Anabela 25 kg but no usable identifiable bag photograph. It has not been assigned another brand’s photo or an invented package illustration. An owner-supplied photo can be uploaded through registration once available.

Visual checks caught conflicting retailer data: the Arima 25 kg listing says Thai while the photographed bag says Índia, so the catalogue follows the bag. A Royal Aroma listing labelled 10 kg showed a smaller/unclear weight on its image and was not used for that size. Source URLs, matching notes and product IDs are in assets/products/sources.json.

New images are stored locally as WebP at up to 640 pixels on the longest side; only proportional resizing and encoding were applied, with packaging text and existing source marks preserved. The large Blue Ribbon PNG was reduced from roughly 7.7 MB for phone performance. These bundled sample images survive reload, while user-uploaded changes remain in-memory.

Validation in served Chromium at 320×300, 320×568 and 1280×800: all 20 photo assets decoded; all 33 catalogue entries rendered; rice, bread and soap groups had no horizontal overflow; brand search found photo-backed entries; and selecting Namaste preserved its name and 5 kg unit on the invoice. Group screenshots were reviewed at 320px.

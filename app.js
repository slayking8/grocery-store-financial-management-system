const products = [
  { photo: "assets/products/arroz-royal-aroma-1kg-cutout.webp", id: 1, name: "Arroz Royal Aroma Jasmim", group: "Arroz", categories: ["Cereais", "Mercearia", "Essenciais", "Despensa", "Promoções"], emoji: "🍚", price: 12500, unit: "1 kg", stock: 9999, color: "#f2cf74", tilt: "-5deg" },
  { id: 2, name: "Óleo Dona", group: "Óleo", image: "sample-oil-dona", categories: ["Mercearia", "Despensa", "Essenciais"], emoji: "🫗", price: 18500, unit: "1 litro", stock: 18, color: "#efb253", tilt: "6deg" },
  { id: 3, name: "Açúcar Branco", categories: ["Mercearia", "Despensa"], emoji: "🧂", price: 1250000, unit: "1 kg", stock: 31, color: "#c9ddd1", tilt: "-4deg" },
  { id: 4, name: "Coca-Cola", categories: ["Bebidas", "Promoções"], emoji: "🥤", price: 15000, unit: "500 ml", stock: 12, color: "#e98578", tilt: "5deg" },
  { photo: "assets/products/bread-carcaca-cutout.webp", id: 5, name: "Pão Carcaça", group: "Pão", image: "sample-bread-roll", categories: ["Padaria", "Essenciais"], emoji: "🥖", price: 10, unit: "unidade", stock: 10000, color: "#edb974", tilt: "-10deg" },
  { id: 6, name: "Ovos", categories: ["Frescos"], emoji: "🥚", price: 2500000, unit: "unidade", stock: 27, color: "#d8d0b9", tilt: "4deg" },
  { id: 7, name: "Leite UHT", categories: ["Frescos", "Essenciais", "Promoções"], emoji: "🥛", price: 95, unit: "1 litro", stock: 9, color: "#abcddd", tilt: "-4deg" },
  { id: 8, name: "Sabão Azul", categories: ["Casa"], emoji: "🧼", price: 35, unit: "barra", stock: 16, color: "#9fcae1", tilt: "8deg" },
  { id: 9, name: "Feijão Manteiga", categories: ["Cereais", "Mercearia", "Despensa"], emoji: "🫘", price: 120, unit: "1 kg", stock: 14, color: "#cf9c77", tilt: "-3deg" },
  { id: 10, name: "Água Mineral", categories: ["Bebidas"], emoji: "💧", price: 25, unit: "500 ml", stock: 36, color: "#9ed4df", tilt: "4deg" } ,
  { photo: "assets/products/rani-basmati-1kg-cutout.webp", id: 11, name: "Arroz Rani Super Basmati", group: "Arroz", categories: ["Cereais", "Mercearia", "Essenciais", "Despensa", "Promoções"], emoji: "🍚", price: 140, unit: "1 kg", stock: 8, color: "#ded3a1", tilt: "3deg" },
  { photo: "assets/products/arroz-basmati-brown-ashoka-1kg-cutout.webp", id: 12, name: "Arroz Ashoka Basmati Integral", group: "Arroz", categories: ["Cereais"], emoji: "🍚", price: 110, unit: "1 kg", stock: 10, color: "#d6b58d", tilt: "-3deg" },
  { photo: "assets/products/namaste-5kg-cutout.webp", id: 13, name: "Arroz Namaste Basmati Extra Longo", group: "Arroz", categories: ["Cereais"], emoji: "🍚", price: 350, unit: "5 kg", stock: 6, color: "#f2cf74", tilt: "4deg" },
  { photo: "assets/products/arima-10kg-cutout.webp", id: 14, name: "Arroz Arima Tailândia", group: "Arroz", categories: ["Cereais"], emoji: "🍚", price: 680, unit: "10 kg", stock: 5, color: "#f2cf74", tilt: "0deg" },
  { photo: "assets/products/arroz-arrima-thai-25kg-cutout.webp", id: 15, name: "Arroz Arima Índia", group: "Arroz", categories: ["Cereais"], emoji: "🍚", price: 1650, unit: "25 kg", stock: 4, color: "#f2cf74", tilt: "0deg" },
  { id: 16, name: "Arroz Corrente", group: "Arroz", categories: ["Cereais"], emoji: "🍚", price: 3200, unit: "50 kg", stock: 3, color: "#f2cf74", tilt: "0deg" },
  {"id": 17, "name": "Óleo Dona", "group": "Óleo", "categories": ["Mercearia"], "emoji": "🫗", "price": 350, "unit": "2 litros", "stock": 10, "color": "#efd9a4", "tilt": "0deg", "image": "sample-oil-dona"},
  {"id": 18, "name": "Óleo Dona", "group": "Óleo", "categories": ["Mercearia"], "emoji": "🫗", "price": 800, "unit": "5 litros", "stock": 6, "color": "#efd9a4", "tilt": "0deg", "image": "sample-oil-dona"},
  {"id": 19, "name": "Óleo San Drop", "group": "Óleo", "categories": ["Mercearia"], "emoji": "🫗", "price": 160, "unit": "1 litro", "stock": 14, "color": "#f6df9c", "tilt": "0deg", "image": "sample-oil-sandrop"},
  {"id": 20, "name": "Óleo San Drop", "group": "Óleo", "categories": ["Mercearia"], "emoji": "🫗", "price": 760, "unit": "5 litros", "stock": 5, "color": "#f6df9c", "tilt": "0deg", "image": "sample-oil-sandrop"},
  {"id": 21, "name": "Óleo Fula", "group": "Óleo", "categories": ["Mercearia"], "emoji": "🫗", "price": 185, "unit": "1 litro", "stock": 12, "color": "#ead7a3", "tilt": "0deg", "image": "sample-oil-fula"},
  {"photo": "assets/products/blue-ribbon-white-700g.webp", "id": 22, "name": "Pão Blue Ribbon Branco", "group": "Pão", "categories": ["Padaria"], "emoji": "🍞", "price": 80, "unit": "700 g", "stock": 10000, "color": "#efc99c", "tilt": "0deg", "image": "sample-bread-white"},
  {"photo": "assets/products/blue-ribbon-brown-700g-cutout.webp", "id": 23, "name": "Pão Blue Ribbon Integral", "group": "Pão", "categories": ["Padaria"], "emoji": "🍞", "price": 95, "unit": "700 g", "stock": 10000, "color": "#d5bb96", "tilt": "0deg", "image": "sample-bread-whole"},
  {"photo": "assets/products/bread-baguette-cutout.webp", "id": 24, "name": "Pão Baguete", "group": "Pão", "categories": ["Padaria"], "emoji": "🥖", "price": 25, "unit": "unidade", "stock": 10000, "color": "#efcf9e", "tilt": "0deg", "image": "sample-bread-baguette"},
  {"id": 25, "name": "Sabonete Securex Care", "group": "Sabonetes", "categories": ["Casa"], "emoji": "🧼", "price": 55, "unit": "175 g", "stock": 20, "color": "#c7e4d8", "tilt": "0deg", "image": "sample-soap-securex"},
  {"id": 26, "name": "Sabonete Securex Care", "group": "Sabonetes", "categories": ["Casa"], "emoji": "🧼", "price": 35, "unit": "100 g", "stock": 24, "color": "#c7e4d8", "tilt": "0deg", "image": "sample-soap-securex"},
  {"id": 27, "name": "Sabonete Protex Herbal", "group": "Sabonetes", "categories": ["Casa"], "emoji": "🧼", "price": 60, "unit": "150 g", "stock": 18, "color": "#d5e5b9", "tilt": "0deg", "image": "sample-soap-protex"},
  {"id": 28, "name": "Sabonete Meditex", "group": "Sabonetes", "categories": ["Casa"], "emoji": "🧼", "price": 45, "unit": "unidade", "stock": 16, "color": "#c4dce8", "tilt": "0deg", "image": "sample-soap-meditex"},
  {"id": 29, "name": "Sabonete Securex Romance", "group": "Sabonetes", "categories": ["Casa"], "unit": "175 g", "price": 50, "stock": 16, "emoji": "🧼", "color": "#d8e4d9", "tilt": "0deg", "photo": "assets/products/sabonete-securex-romance-175g.webp"},
  {"id": 30, "name": "Sabonete Securex Pamper", "group": "Sabonetes", "categories": ["Casa"], "unit": "175 g", "price": 50, "stock": 16, "emoji": "🧼", "color": "#d8e4d9", "tilt": "0deg", "photo": "assets/products/sabonete-securex-pamper-175g.webp"},
  {"id": 31, "name": "Sabonete Protex Fresh", "group": "Sabonetes", "categories": ["Casa"], "unit": "150 g", "price": 80, "stock": 16, "emoji": "🧼", "color": "#d8e4d9", "tilt": "0deg", "photo": "assets/products/sabonete-protex-fresh-150g-cutout.webp"},
  {"id": 32, "name": "Sabonete Protex Deep Clean", "group": "Sabonetes", "categories": ["Casa"], "unit": "150 g", "price": 80, "stock": 16, "emoji": "🧼", "color": "#d8e4d9", "tilt": "0deg", "photo": "assets/products/sabonete-protex-clean-150g-cutout.webp"},
  {"id": 33, "name": "Pão de Lenha", "group": "Pão", "categories": ["Padaria"], "unit": "unidade", "price": 15, "stock": 10000, "emoji": "🥖", "color": "#d8e4d9", "tilt": "0deg", "photo": "assets/products/pao-de-lenha-cutout.webp"}
];

// Downloaded product photographs; provenance is recorded in assets/products/sources.json.
for (const id of [2, 17, 21, 25, 27]) {
  products.find(product => product.id === id).photo = `assets/products/product-${id}-cutout.webp`;
}

// Expand the isolated keypad prototype before building groups and browsing tiles.
addKeypadSampleCatalogue(products);

// Configured independently of product membership, including unused categories.
const configuredCategories = ["Cereais", "Mercearia", "Bebidas", "Padaria", "Frescos", "Casa", "Essenciais", "Despensa", "Promoções"];

const configuredGroups = [...new Set(products.map(product => product.group).filter(Boolean))];

// Illustrative ranking of exact products; replace with recorded sales data later.
const bestSellerIds = [5, 1, 2, products.find(product => product.group === "Sumo").id, 4, 6, 25, 10, 13, 22];
const state = { category: "Mais vendidos", query: "", selected: null, cart: [] };
const favorites = new Set();
const catalog = [];
for (const product of products) {
  const key = product.group ? `group:${product.group}` : `product:${product.id}`;
  if (!catalog.some(tile => tile.key === key)) catalog.push({ key, group: product.group, product });
}
let activeGroup = null;
let activePackageSize = null;
let toastTimer;
const money = value => `${new Intl.NumberFormat("pt-MZ", { maximumFractionDigits: 2 }).format(value)} MT`;
const $ = selector => document.querySelector(selector);
const grid = $("#productGrid"), categories = $("#categoryList");

function layoutFilters(strip) {
  const buttons = [...strip.children];
  if (!strip.clientWidth || !buttons.length) return;
  const measure = document.createElement("span");
  measure.style.cssText = "position:fixed;visibility:hidden;white-space:nowrap;pointer-events:none";
  document.body.append(measure);
  let longest = 0;
  for (const button of buttons) {
    const style = getComputedStyle(button);
    measure.style.font = style.font;
    measure.style.letterSpacing = style.letterSpacing;
    measure.textContent = button.textContent;
    longest = Math.max(longest, Math.ceil(measure.getBoundingClientRect().width +
      parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) +
      parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth)));
  }
  measure.remove();
  const style = getComputedStyle(strip);
  const available = strip.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  const gap = parseFloat(style.columnGap);
  const capacity = Math.max(1, Math.min(3, Math.floor((available + gap) / (longest + gap))));
  const rows = Math.min(2, Math.ceil(buttons.length / capacity));
  const columns = Math.min(capacity, Math.ceil(buttons.length / rows));
  strip.style.setProperty("--filter-rows", rows);
  strip.style.setProperty("--filter-width", `${Math.max(longest, (available - gap * (columns - 1)) / columns)}px`);
  strip.dataset.filtersFit = String(buttons.length <= capacity * 2 && longest <= available);
}

function renderCategories() {
  const items = ["Mais vendidos", "Todos", "Atalhos", ...configuredCategories];
  categories.innerHTML = items.map(item => `<button class="category-button ${state.category === item ? "active" : ""}" aria-pressed="${state.category === item}" data-category="${escapeHTML(item)}">${escapeHTML(item)}</button>`).join("");
  layoutFilters(categories);
}

const searchable = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const productLabel = product => `${product.name} · ${product.unit}`;
const compactSellingUnit = unit => unit === "unidade" ? "1" : unit.replace(/\blitros?\b/gi, "L").replace(/\s+(?=(?:kg|g|ml|l)\b)/gi, "");
const compactCardPrice = price => money(price).replace(/\s+MT$/, "MT");
const groupProducts = group => products.filter(product => product.group === group);

function visibleTiles() {
  if (window.keypadMode?.active) return keypadAssignments
    .filter(row => products.some(product => product.id === row.productId) && row.code.startsWith(window.keypadMode.query))
    .sort((a, b) => {
      const left = BigInt(a.code), right = BigInt(b.code);
      return left < right ? -1 : left > right ? 1 : a.code.localeCompare(b.code);
    })
    .map(row => ({ key: `product:${row.productId}`, product: products.find(product => product.id === row.productId) }));
  if (state.query) return products.filter(product =>
    (["Todos", "Mais vendidos", "Atalhos"].includes(state.category) || product.categories.includes(state.category)) &&
    searchable(`${product.name} ${product.unit} ${product.group || ""} ${product.categories.join(" ")}`).includes(searchable(state.query))
  ).map(product => ({ key: `product:${product.id}`, product }));
  if (state.category === "Mais vendidos") return bestSellerIds.map(id => ({ key: `product:${id}`, product: products.find(product => product.id === id) }));
  if (state.category === "Atalhos") return catalog.filter(tile => !tile.group && favorites.has(tile.product.id));
  return catalog.filter(tile => (tile.group || !tile.product.group) && (state.category === "Todos" || (tile.group ? groupProducts(tile.group).some(product => product.categories.includes(state.category)) : tile.product.categories.includes(state.category))));
}

function productArt(product) {
  const images = { 1: "rice-corrente", 11: "rice-basmati", 12: "rice-integral", 13: "rice-corrente-5kg" };
  const image = product.photo === null ? null : product.photo || (product.image || images[product.id] ? `assets/${product.image || images[product.id]}.svg` : null);
  return image
    ? `<img class="product-image${product.photo ? " real-photo" : ""}" src="${escapeHTML(image)}" alt="" width="160" height="160" loading="lazy" decoding="async" />`
    : `<span class="product-emoji" aria-hidden="true">${product.emoji}</span>`;
}

function quickQuantityControls(product) {
  const quantity = state.cart.find(item => item.product.id === product.id)?.quantity || 0;
  const exceedsStock = quantity > product.stock;
  return quantity
    ? `<div class="card-quantity${exceedsStock ? " stock-short" : ""}" role="group" aria-label="Quantidade de ${escapeHTML(productLabel(product))} na factura${exceedsStock ? `; stock insuficiente, ${product.stock} disponíveis` : ""}"><button type="button" data-cart-adjust="-1" aria-label="Retirar uma unidade de ${escapeHTML(productLabel(product))}">−</button><output aria-live="polite" aria-label="${quantity} na factura${exceedsStock ? `; stock insuficiente, ${product.stock} disponíveis` : ""}">${quantity}</output><button type="button" data-cart-adjust="1" aria-label="Adicionar uma unidade de ${escapeHTML(productLabel(product))}">+</button></div>`
    : `<button class="card-add" type="button" data-cart-adjust="1" aria-label="Adicionar ${escapeHTML(productLabel(product))} à factura">+ Adicionar</button>`;
}

function renderProducts() {
  const visible = visibleTiles();
  const codeSearchActive = !!window.keypadMode?.active;
  $("#sectionTitle").hidden = codeSearchActive;
  $("#sectionTitle").textContent = state.query ? "Resultados" : state.category === "Todos" ? "Todos os produtos" : state.category;
  $(".products-section").setAttribute("aria-label", codeSearchActive ? "Resultados por código" : $("#sectionTitle").textContent);
  $("#productCount").textContent = `${visible.length} ${codeSearchActive || state.query ? visible.length === 1 ? "resultado" : "resultados" : visible.length === 1 ? "opção" : "opções"}`;
  $("#emptyState").hidden = visible.length > 0;
  $("#emptyState h3").textContent = !state.query && state.category === "Atalhos" ? "Ainda sem atalhos" : "Nenhum produto encontrado";
  $("#emptyState p").textContent = window.keypadMode?.active ? "Tente outro código." : !state.query && state.category === "Atalhos" ? "Abra um grupo em Todos e toque na estrela de um produto." : "Tente pesquisar com outro nome.";
  grid.innerHTML = visible.map(tile => {
    const product = tile.product;
    const variants = tile.group ? groupProducts(tile.group) : [];
    const grouped = variants.length > 1;
    const label = grouped ? tile.group : product.name;
    const quickControls = grouped ? "" : quickQuantityControls(product);
    return `<article class="product-card" data-key="${tile.key}" ${grouped ? `data-group="${escapeHTML(tile.group)}"` : `data-id="${product.id}"`}>
      <button class="product-open" type="button" aria-label="${grouped ? `Escolher ${escapeHTML(tile.group)}: ${variants.length} opções` : `Vender ${escapeHTML(productLabel(product))}`}">
        ${grouped ? "" : `<span class="product-stock-badge" aria-label="${product.stock} disponíveis">${product.stock}</span>`}
        <div class="product-visual" style="--tilt:${product.tilt}">${grouped ? `<span class="product-emoji" aria-hidden="true">${product.emoji}</span>` : productArt(product)}</div>
        <div class="product-info"><h3 class="product-name">${escapeHTML(label)}</h3><div class="product-meta">
          ${grouped ? `<strong class="product-price group-option-count">${variants.length} opções ›</strong>` : `<strong class="product-price">${compactCardPrice(product.price)}</strong><span class="product-meta-separator" aria-hidden="true">·</span><span class="product-unit">${escapeHTML(compactSellingUnit(product.unit))}</span>`}
        </div></div>
      </button>
      ${quickControls}
    </article>`;
  }).join("");
}

function renderGroup() {
  $("#groupTitle").textContent = activeGroup;
  const variants = groupProducts(activeGroup);
  const sizes = [...new Set(variants.map(product => product.unit))].sort((a, b) => a.localeCompare(b, "pt", { numeric: true }));
  const filters = $("#packageFilters");
  const filterScroll = filters.scrollLeft;
  filters.replaceChildren(...[null, ...sizes].map(size => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-button${activePackageSize === size ? " active" : ""}`;
    button.textContent = size === null ? "Todos" : size;
    button.setAttribute("aria-pressed", String(activePackageSize === size));
    button.addEventListener("click", () => {
      activePackageSize = size;
      renderGroup();
      $("#groupDialog").scrollTop = 0;
      const selected = [...filters.children].find(item => item.getAttribute("aria-pressed") === "true");
      selected.focus({ preventScroll: true });
    });
    return button;
  }));
  layoutFilters(filters);
  filters.scrollLeft = filterScroll;
  const visible = variants.filter(product => activePackageSize === null || product.unit === activePackageSize);
  $("#groupResultCount").textContent = `${visible.length} ${visible.length === 1 ? "opção" : "opções"}`;
  $("#groupOptions").innerHTML = visible.map(product => `
    <article class="variant-card" data-id="${product.id}">
      <button class="variant-select" type="button" data-variant="${product.id}" aria-label="Escolher ${escapeHTML(productLabel(product))}">
        <span class="product-stock-badge" aria-label="${product.stock} disponíveis">${product.stock}</span>
        <span class="variant-visual">${productArt(product)}</span>
        <span class="variant-info"><strong class="variant-name">${escapeHTML(product.name)}</strong><span class="variant-meta"><strong class="variant-price">${compactCardPrice(product.price)}</strong><span class="product-meta-separator" aria-hidden="true">·</span><span class="variant-unit">${escapeHTML(compactSellingUnit(product.unit))}</span></span></span>
      </button>
      ${quickQuantityControls(product)}
      <button class="favorite-button" type="button" data-favorite="${product.id}" aria-pressed="${favorites.has(product.id)}" aria-label="${favorites.has(product.id) ? "Remover atalho de" : "Criar atalho para"} ${escapeHTML(productLabel(product))}">${favorites.has(product.id) ? "★" : "☆"}</button>
    </article>`).join("");
}

function openGroup(group) {
  const variants = groupProducts(group);
  if (variants.length === 1) { selectProduct(variants[0]); return; }
  activeGroup = group;
  activePackageSize = null;
  renderGroup();
  $("#groupDialog").showModal();
  $("#packageFilters").scrollLeft = 0;
}

function selectProduct(product, startAtOne = false) {
  state.selected = product;
  const line = state.cart.find(item => item.product.id === product.id);
  $("#productTitle").textContent = product.name;
  $("#productPrice").textContent = `${money(product.price)} · ${product.unit}`;
  $("#stockLabel").textContent = `${product.stock} disponíveis`;
  $("#quantityInput").value = line && !startAtOne ? line.quantity : 1;
  $("#addProductButton").textContent = line ? "Actualizar quantidade" : "Adicionar à factura";
  updateQuantity();
  $("#productDialog").showModal();
  $("#productDialog").scrollTop = 0;
  $("#quantityInput").focus({ preventScroll: true });
  $("#quantityInput").select();
  scrollQuantityToBottom();
}

const invoiceTotal = () => state.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

function renderInvoice() {
  $("#invoiceItems").innerHTML = state.cart.map(({ product, quantity }) => `
    <div class="invoice-item ${quantity > product.stock ? "stock-short" : ""}">
      <button class="invoice-edit" data-edit="${product.id}" aria-label="Alterar quantidade de ${escapeHTML(productLabel(product))}" ${quantity > product.stock ? `aria-describedby="stock-warning-${product.id}"` : ""}><strong>${escapeHTML(productLabel(product))}</strong><small>${quantity} × ${money(product.price)} · Alterar</small>${quantity > product.stock ? `<span id="stock-warning-${product.id}" class="invoice-stock-warning">Stock insuficiente · Só ${product.stock} disponíveis</span>` : ""}</button>
      <strong>${money(product.price * quantity)}</strong>
      <button class="remove-item" data-remove="${product.id}" aria-label="Remover ${escapeHTML(productLabel(product))}" title="Remover produto">−</button>
    </div>`).join("") || '<p class="dialog-description">A factura está vazia. Adicione produtos para começar.</p>';
  $("#cartButton").hidden = (state.cart.length === 0 && $("#receivedInput").value === "") || !$("#saleSheet").hidden;
  $("#cartCount").textContent = `${state.cart.length} ${state.cart.length === 1 ? "produto" : "produtos"}`;
  $("#cartTotal").textContent = money(invoiceTotal());
  updateCartSpacing();
  updateSale();
}

function openInvoice() {
  $("#backdrop").hidden = false;
  $("#saleSheet").hidden = false;
  document.body.style.overflow = "hidden";
  $("main").inert = true;
  renderInvoice();
  const sheet = $("#saleSheet");
  sheet.focus({ preventScroll: true });
  const content = $("#checkoutContent");
  content.scrollTop = content.scrollHeight;
}

function closeSheet() {
  $("#backdrop").hidden = true;
  $("#saleSheet").hidden = true;
  document.body.style.overflow = "";
  $("main").inert = false;
  renderInvoice();
  if (!$("#cartButton").hidden) $("#cartButton").focus();
  else $("#sectionTitle").focus({ preventScroll: true });
}

function updateSale() {
  const total = invoiceTotal();
  const raw = $("#receivedInput").value;
  const received = Number(raw);
  const panel = $("#changePanel"), output = $("#changeAmount");
  $("#totalAmount").textContent = money(total);
  $("#changeLabel").textContent = "Troco";
  panel.className = "change-panel neutral";
  output.textContent = "—";
  $("#finishButton").disabled = true;
  if (!state.cart.length || raw === "" || !Number.isFinite(received) || received < 0) return;
  const difference = received - total;
  panel.className = difference >= 0 ? "change-panel good" : "change-panel short";
  $("#changeLabel").textContent = difference >= 0 ? "Troco" : "Faltam";
  output.textContent = money(Math.abs(difference));
  $("#finishButton").disabled = difference < 0;
}

function resetInvoice() {
  state.cart = [];
  state.selected = null;
  $("#receivedInput").value = "";
  renderProducts();
  closeSheet();
}

function showToast(title, detail = "") {
  clearTimeout(toastTimer);
  $("#toast strong").textContent = title;
  $("#toast small").textContent = detail;
  $("#toast small").hidden = !detail;
  $("#toast").classList.add("show");
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2800);
}

function completeSale() {
  for (const {product, quantity} of state.cart) recordStockMovement(product, -quantity, "Venda", "sale");
  resetInvoice();
  state.category = "Mais vendidos";
  state.query = "";
  $("#searchInput").value = "";
  $("#clearSearch").hidden = true;
  renderCategories();
  renderProducts();
  categories.scrollLeft = 0;
  window.scrollTo({ top: 0, behavior: "instant" });
  showToast("Venda registada");
}

categories.addEventListener("click", event => {
  const button = event.target.closest("[data-category]"); if (!button) return;
  state.category = button.dataset.category; renderCategories(); renderProducts();
  window.scrollTo({ top: 0, behavior: "instant" });
});
function updateSearch() {
  state.query = $("#searchInput").value.trim().toLowerCase();
  $("#clearSearch").hidden = $("#searchInput").value.length === 0;
  renderProducts();
  window.scrollTo({ top: 0, behavior: "instant" });
}
$("#searchInput").addEventListener("input", updateSearch);
document.querySelectorAll("[data-clear-search]").forEach(button => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.clearSearch);
    if (input === $("#searchInput") && window.keypadMode?.active) {
      window.clearKeypadQuery();
      return;
    }
    input.value = "";
    input.dispatchEvent(new Event("input", {bubbles: true}));
    input.focus({preventScroll: true});
  });
});
$("#cancelInvoice").addEventListener("click", () => {
  $("#cancelInvoiceDialog").showModal();
  $("#keepInvoice").focus();
});
$("#keepInvoice").addEventListener("click", () => $("#cancelInvoiceDialog").close());
$("#confirmCancelInvoice").addEventListener("click", () => {
  $("#cancelInvoiceDialog").close();
  resetInvoice();
  showToast("Factura cancelada");
});
$("#managementButton").addEventListener("click", () => { showManagementView("dashboard", false); $("#managementDialog").showModal(); });
$("#closeManagement").addEventListener("click", () => $("#managementDialog").close());
function adjustCartFromCard(card, change) {
  const product = products.find(item => item.id === Number(card.dataset.id));
  if (!product) return;
  const line = state.cart.find(item => item.product.id === product.id);
  const quantity = Math.max(0, (line?.quantity || 0) + change);
  if (line && quantity) line.quantity = quantity;
  else if (line) state.cart = state.cart.filter(item => item.product.id !== product.id);
  else if (quantity) state.cart.push({product, quantity});
  const controls = card.querySelector(".card-add, .card-quantity");
  if (controls) controls.outerHTML = quickQuantityControls(product);
  renderInvoice();
  const nextAction = card.querySelector(`[data-cart-adjust="${change > 0 ? 1 : -1}"]`)
    || card.querySelector("[data-cart-adjust]");
  nextAction?.focus({preventScroll: true});
}

grid.addEventListener("click", event => {
  const card = event.target.closest(".product-card"); if (!card) return;
  const adjustment = event.target.closest("[data-cart-adjust]");
  if (adjustment) { adjustCartFromCard(card, Number(adjustment.dataset.cartAdjust)); return; }
  if (card.dataset.group) openGroup(card.dataset.group);
  else selectProduct(products.find(product => product.id === Number(card.dataset.id)), !!window.keypadMode?.active);
});
$("#closeGroup").addEventListener("click", () => { $("#groupDialog").close(); renderProducts(); });
$("#groupOptions").addEventListener("click", event => {
  const adjustment = event.target.closest("[data-cart-adjust]");
  if (adjustment) {
    adjustCartFromCard(event.target.closest(".variant-card"), Number(adjustment.dataset.cartAdjust));
    return;
  }
  const variant = event.target.closest("[data-variant]");
  if (variant) selectProduct(products.find(product => product.id === Number(variant.dataset.variant)));
  const favorite = event.target.closest("[data-favorite]");
  if (!favorite) return;
  const id = Number(favorite.dataset.favorite), key = `product:${id}`;
  if (favorites.has(id)) {
    favorites.delete(id);
    const index = catalog.findIndex(tile => tile.key === key);
    if (index >= 0) catalog.splice(index, 1);
  } else {
    favorites.add(id);
    catalog.push({ key, product: products.find(product => product.id === id) });
  }
  renderGroup(); renderProducts();
  $(`[data-favorite="${id}"]`).focus();
});
$("#closeSheet").addEventListener("click", closeSheet); $("#backdrop").addEventListener("click", closeSheet);
$("#cartButton").addEventListener("click", openInvoice);
$("#addMoreButton").addEventListener("click", closeSheet);
$("#closeProduct").addEventListener("click", () => $("#productDialog").close());
function updateQuantity() {
  const quantity = Number($("#quantityInput").value);
  const valid = Number.isSafeInteger(quantity) && quantity >= 1;
  const exceedsStock = valid && quantity > state.selected.stock;
  $("#quantityInput").closest(".quantity-control").classList.toggle("invalid", exceedsStock);
  $("#stockLabel").classList.toggle("invalid", exceedsStock);
  $("#stockLabel").textContent = exceedsStock
    ? `Só ${state.selected.stock} disponíveis`
    : `${state.selected.stock} disponíveis`;
  $("#addProductButton").disabled = !valid;
  $("#productSubtotal").textContent = valid ? money(state.selected.price * quantity) : "—";
}
// Tapping a stepper must not move focus away from an already focused input.
for (const button of [$("#minusButton"), $("#plusButton")]) {
  button.addEventListener("pointerdown", event => {
    if (event.isPrimary && event.button === 0 && document.activeElement === $("#quantityInput")) {
      event.preventDefault();
    }
  });
}
$("#minusButton").addEventListener("click", () => { $("#quantityInput").value = Math.max(1, Number($("#quantityInput").value) - 1); updateQuantity(); });
$("#plusButton").addEventListener("click", () => { $("#quantityInput").value = Number($("#quantityInput").value) + 1; updateQuantity(); });
$("#quantityInput").addEventListener("input", updateQuantity);
$("#quantityInput").addEventListener("keydown", event => {
  if (event.key === "Enter" && !event.isComposing) {
    event.preventDefault();
    event.currentTarget.blur();
  }
});
// Scroll the whole dialog after focus and as the keyboard reduces the viewport.
let quantityScrollFrame;
function scrollQuantityToBottom() {
  cancelAnimationFrame(quantityScrollFrame);
  quantityScrollFrame = requestAnimationFrame(() => {
    const dialog = $("#productDialog");
    if (dialog.open && document.activeElement === $("#quantityInput")) {
      dialog.scrollTop = dialog.scrollHeight;
    }
  });
}
$("#quantityInput").addEventListener("focus", scrollQuantityToBottom);
$("#quantityInput").addEventListener("click", () => {
  $("#quantityInput").select();
  scrollQuantityToBottom();
});
window.visualViewport?.addEventListener("resize", scrollQuantityToBottom);
window.addEventListener("resize", scrollQuantityToBottom);

$("#addProductButton").addEventListener("click", () => {
  updateQuantity();
  if ($("#addProductButton").disabled) return;
  const quantity = Number($("#quantityInput").value);
  const line = state.cart.find(item => item.product.id === state.selected.id);
  if (line) line.quantity = quantity;
  else state.cart.push({ product: state.selected, quantity });
  $("#productDialog").close();
  if ($("#groupDialog").open) $("#groupDialog").close();
  renderProducts();
  renderInvoice();
});
$("#invoiceItems").addEventListener("click", event => {
  const edit = event.target.closest("[data-edit]");
  const remove = event.target.closest("[data-remove]");
  if (edit) selectProduct(products.find(product => product.id === Number(edit.dataset.edit)));
  if (remove) {
    state.cart = state.cart.filter(item => item.product.id !== Number(remove.dataset.remove));
    renderProducts();
    renderInvoice();
    $("#addMoreButton").focus();
  }
});
$("#receivedInput").addEventListener("input", updateSale);
$("#receivedInput").addEventListener("keydown", event => {
  if (event.key === "Enter" && !event.isComposing) {
    event.preventDefault();
    event.currentTarget.blur();
  }
});
$("#closeToast").addEventListener("click", () => { clearTimeout(toastTimer); $("#toast").classList.remove("show"); });
$("#finishButton").addEventListener("click", () => {
  updateSale();
  if ($("#finishButton").disabled) return;
  const shortages = state.cart.filter(item => item.quantity > item.product.stock);
  if (shortages.length) {
    $("#stockShortages").innerHTML = shortages.map(({ product, quantity }) => `<li><strong>${escapeHTML(productLabel(product))}</strong><span>${quantity} na factura · ${product.stock} disponíveis</span></li>`).join("");
    $("#stockDialog").showModal();
    $("#cancelStock").focus();
  } else completeSale();
});
$("#cancelStock").addEventListener("click", () => {
  $("#stockDialog").close();
  const firstShortage = $(".stock-short .invoice-edit");
  if (firstShortage) {
    firstShortage.focus();
    firstShortage.scrollIntoView({ block: "center" });
  }
});
$("#confirmStock").addEventListener("click", () => { $("#stockDialog").close(); completeSale(); });
document.addEventListener("keydown", event => {
  if ($("#groupDialog").open || $("#productDialog").open || $("#stockDialog").open || $("#cancelInvoiceDialog").open || $("#saleSheet").hidden) return;
  if (event.key === "Escape") closeSheet();
  if (event.key === "Tab") {
    const controls = [...$("#saleSheet").querySelectorAll("button:not(:disabled), input")];
    const first = controls[0], last = controls[controls.length - 1];
    if (document.activeElement === $("#saleSheet")) {
      event.preventDefault();
      (event.shiftKey ? last : $("#cancelInvoice")).focus();
    }
    else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

function updateCartSpacing() {
  const bar = $("#cartButton");
  if (bar.hidden) return;
  const clearance = bar.getBoundingClientRect().height + parseFloat(getComputedStyle(bar).bottom) + 8;
  $(".app-shell").style.setProperty("--cart-clearance", `${clearance}px`);
}
new ResizeObserver(updateCartSpacing).observe($("#cartButton"));
window.addEventListener("resize", updateCartSpacing);

renderCategories(); renderProducts(); renderInvoice();

// Keep browser-driven scrolling and keyboard focus below persistent navigation.
const navigationObserver = new ResizeObserver(entries => {
  for (const { target } of entries) {
    const scroller = target.classList.contains("sales-navigation") ? document.documentElement : $("#groupDialog");
    scroller.style.scrollPaddingTop = `${target.getBoundingClientRect().height + 8}px`;
  }
});
document.querySelectorAll(".sales-navigation, .group-navigation").forEach(element => navigationObserver.observe(element));


function renderManagement() {
  $("#clearManagementSearch").hidden = $("#managementSearch").value.length === 0;
  const query = searchable($("#managementSearch").value.trim());
  const visible = products.filter(product => searchable(`${product.name} ${product.unit} ${product.categories.join(" ")}`).includes(query));
  $("#managementCount").textContent = `${visible.length} produtos`;
  $("#managementProducts").innerHTML = visible.map(product => `<article class="product-card management-card">
    <button class="product-open" type="button" data-inventory-product="${product.id}" aria-label="Ver ${escapeHTML(productLabel(product))}"><span class="product-stock-badge" aria-label="${product.stock} disponíveis">${product.stock}</span><div class="product-visual" style="--tilt:${product.tilt}">${productArt(product)}</div>
    <div class="product-info"><h3 class="product-name">${escapeHTML(product.name)}</h3><div class="product-meta"><strong class="product-price">${compactCardPrice(product.price)}</strong><span class="product-meta-separator" aria-hidden="true">·</span><span class="product-unit">${escapeHTML(compactSellingUnit(product.unit))}</span></div></div></button>
  </article>`).join("") || '<p>Nenhum produto encontrado.</p>';
}

function addCategoryChoice(name, checked = false) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.value = name;
  input.checked = checked;
  label.append(input, document.createTextNode(name));
  $("#registerCategories").append(label);
}
function registrationError(message) {
  $("#registerError").textContent = message;
  $("#registerError").hidden = false;
  $("#registerError").scrollIntoView({ block: "nearest" });
}
$("#managementSearch").addEventListener("input", renderManagement);
let inventoryProduct = null;
const stockMovements = new Map();
// Illustrative history reconciles to the existing sample stock without changing it.
for (const [id, count] of [[1, 48], [2, 16], [11, 24]]) {
  const product = products.find(item => item.id === id);
  const pattern = [
    [24, "Recepção de mercadoria"], [-8, "Venda"], [-6, "Venda"],
    [-5, "Venda"], [-7, "Venda"], [2, "Devolução de cliente"],
    [-3, "Produto danificado"], [-1, "Correcção de contagem"]
  ];
  const entries = Array.from({length: count}, (_, index) => pattern[index % pattern.length]);
  let balance = product.stock - entries.reduce((sum, [delta]) => sum + delta, 0);
  const dateFormat = new Intl.DateTimeFormat("pt-MZ", {dateStyle: "short", timeStyle: "short", timeZone: "Africa/Maputo"});
  stockMovements.set(id, entries.map(([delta, reason], index) => {
    const before = balance;
    balance += delta;
    return {delta, reason, before, after: balance, unit: product.unit, sample: true, source: reason === "Venda" ? "sale" : "manual", timestamp: Date.UTC(2026, 8, 1 + Math.floor(index / 3), 7 + (index % 3) * 4),
      date: dateFormat.format(new Date(Date.UTC(2026, 8, 1 + Math.floor(index / 3), 7 + (index % 3) * 4)))};
  }));
}
let stockDirection = 1;
function renderInventoryProduct() {
  const product = inventoryProduct;
  const movements = stockMovements.get(product.id) || [];
  $("#inventoryProductTitle").textContent = product.name;
  $("#inventoryProductDetails").innerHTML = `
    <div id="inventoryMainView"><div class="inventory-overview"><div class="product-visual">${productArt(product)}</div><div class="inventory-product-meta"><span class="inventory-unit">${escapeHTML(product.unit)}</span><strong class="inventory-price">${money(product.price)}</strong></div></div>
    <section class="inventory-stock-panel" aria-labelledby="inventoryStockTitle"><h3 id="inventoryStockTitle">Stock disponível</h3><p class="inventory-stock-value"><strong>${product.stock}</strong> <span>unidades</span></p><p class="management-note">Cada unidade: ${escapeHTML(product.unit)}</p>
    <div class="inventory-stock-actions"><button type="button" class="finish-button" data-stock-direction="1">+ Adicionar</button><button type="button" class="secondary-button" data-stock-direction="-1" ${product.stock <= 0 ? 'disabled' : ''}>− Retirar</button></div>
    </section>
    <section class="inventory-movements"><h3>Movimentos de stock (${movements.length})</h3>
      <div class="movement-filters" role="group" aria-label="Filtrar movimentos de stock" tabindex="0">
        <label class="movement-filter-chip"><span data-filter-label="movementSource">Origem</span><span aria-hidden="true">⌄</span><select id="movementSource" aria-label="Origem"><option value="all">Todas</option><option value="sale">Vendas</option><option value="manual">Manuais</option></select></label>
        <label class="movement-filter-chip"><span data-filter-label="movementDirection">Tipo</span><span aria-hidden="true">⌄</span><select id="movementDirection" aria-label="Tipo"><option value="all">Todos</option><option value="in">Entradas</option><option value="out">Saídas</option></select></label>
        <label class="movement-filter-chip"><span data-filter-label="movementPeriod">Data</span><span aria-hidden="true">⌄</span><select id="movementPeriod" aria-label="Data"><option value="all">Todas as datas</option><option value="today">Hoje</option><option value="week">Últimos 7 dias</option><option value="month">Últimos 30 dias</option><option value="custom">Escolher datas</option></select></label>
        <label class="movement-filter-chip"><span data-filter-label="movementReason">Motivo</span><span aria-hidden="true">⌄</span><select id="movementReason" aria-label="Motivo"><option value="all">Todos</option>${[...new Set(movements.map(m => m.reason))].map(reason => `<option value="${escapeHTML(reason)}">${escapeHTML(reason)}</option>`).join('')}</select></label>
        <button type="button" id="clearMovementFilters">Limpar filtros</button>
      </div>
      <div id="movementDateRange" class="movement-filters" hidden><label>De<input id="movementFrom" type="date" /></label><label>Até<input id="movementTo" type="date" /></label></div>
      <p id="movementFilterStatus" class="management-note" role="status"></p><ol id="movementList"></ol>
    </section>
    </div>`;
  renderMovementList();
}
function recordStockMovement(product, delta, reason, source) {
  const before = product.stock;
  product.stock += delta;
  const timestamp = Date.now();
  const movements = stockMovements.get(product.id) || [];
  movements.push({delta, before, after: product.stock, reason, source, timestamp, unit: product.unit,
    date: new Intl.DateTimeFormat("pt-MZ", {dateStyle:"short", timeStyle:"short", timeZone:"Africa/Maputo"}).format(timestamp)});
  stockMovements.set(product.id, movements);
}
function movementDay(timestamp) {
  const parts = new Intl.DateTimeFormat("en-GB", {timeZone:"Africa/Maputo", year:"numeric", month:"2-digit", day:"2-digit"}).formatToParts(timestamp);
  return ["year", "month", "day"].map(type => parts.find(part => part.type === type).value).join("-");
}
function renderMovementList() {
  const movements = stockMovements.get(inventoryProduct.id) || [];
  const source = $("#movementSource").value, direction = $("#movementDirection").value;
  const period = $("#movementPeriod").value, reason = $("#movementReason").value;
  $("#movementDateRange").hidden = period !== "custom";
  let from = "", to = "";
  if (period === "custom") { from = $("#movementFrom").value; to = $("#movementTo").value; }
  else if (period !== "all") {
    to = movementDay(Date.now());
    const days = period === "week" ? 6 : period === "month" ? 29 : 0;
    from = new Date(Date.parse(to + "T12:00:00Z") - days * 86400000).toISOString().slice(0,10);
  }
  for (const [id, title] of [["movementSource", "Origem"], ["movementDirection", "Tipo"], ["movementPeriod", "Data"], ["movementReason", "Motivo"]]) {
    const select = $("#" + id);
    select.closest("label").classList.toggle("is-filtered", select.value !== "all");
    $(`[data-filter-label="${id}"]`).textContent = select.value === "all" ? title : `${title}: ${select.selectedOptions[0].textContent}`;
  }
  const invalid = from && to && from > to;
  const visible = invalid ? [] : movements.filter(m => (source === "all" || m.source === source)
    && (direction === "all" || (direction === "in" ? m.delta > 0 : m.delta < 0))
    && (reason === "all" || m.reason === reason)
    && (!from || movementDay(m.timestamp) >= from) && (!to || movementDay(m.timestamp) <= to))
    .slice().sort((a,b) => b.timestamp - a.timestamp);
  $("#movementFilterStatus").textContent = invalid ? "A data inicial deve ser anterior ou igual à data final." : visible.length ? `${visible.length} de ${movements.length} movimentos` : "Nenhum movimento para estes filtros.";
  $("#movementList").innerHTML = visible.map(m => `<li class="${m.delta > 0 ? 'stock-entry' : 'stock-withdrawal'}"><span class="stock-movement-kind">${m.delta > 0 ? 'Entrada' : 'Saída'} · ${m.source === 'sale' ? 'Venda' : 'Manual'}</span><div><strong>${m.delta > 0 ? '+' : '−'}${Math.abs(m.delta)} · ${escapeHTML(m.reason)}</strong><time datetime="${new Date(m.timestamp).toISOString()}">${escapeHTML(m.date)}</time></div><p>${m.before} → ${m.after} unidades · ${escapeHTML(m.unit)}</p></li>`).join('');
}
$("#inventoryProductDetails").addEventListener("change", event => {
  if (event.target.closest(".movement-filters")) renderMovementList();
});
$("#inventoryProductDetails").addEventListener("click", event => {
  if (!event.target.closest("#clearMovementFilters")) return;
  for (const id of ["movementSource", "movementDirection", "movementPeriod", "movementReason"]) $("#" + id).value = "all";
  $("#movementFrom").value = ""; $("#movementTo").value = "";
  renderMovementList();
});
function showInventoryProductView(view) {
  $("#inventoryProductDetails").hidden = view !== "main";
  $("#inventoryEditView").hidden = view !== "edit";
  $("#inventoryCategoriesView").hidden = view !== "categories";
  document.querySelectorAll("[data-product-view]").forEach(button => {
    if (button.dataset.productView === view) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  $("#inventoryProductContent").scrollTop = 0;
}
document.querySelector(".inventory-bottom-nav").addEventListener("click", event => {
  const button = event.target.closest("[data-product-view]");
  if (button) showInventoryProductView(button.dataset.productView);
});
function stockQuantityError() {
  const input = $("#stockMovementQuantity");
  const quantity = Number(input.value);
  if (input.validity.badInput) return "Indique uma quantidade válida.";
  if (!input.value.trim()) return "Indique a quantidade.";
  if (!Number.isFinite(quantity)) return "Indique uma quantidade válida.";
  if (quantity <= 0) return "A quantidade deve ser superior a zero.";
  if (!Number.isInteger(quantity)) return "Indique uma quantidade inteira, sem casas decimais.";
  if (!Number.isSafeInteger(quantity)) return "A quantidade indicada é demasiado grande.";
  if (stockDirection < 0 && quantity > inventoryProduct.stock) return `Não pode retirar mais do que o stock disponível (${inventoryProduct.stock} unidades).`;
  if (!Number.isSafeInteger(inventoryProduct.stock + stockDirection * quantity)) return "Esta entrada ultrapassa o limite de stock suportado.";
  return "";
}
function previewStockMovement() {
  const quantity = Number($("#stockMovementQuantity").value);
  const after = inventoryProduct.stock + stockDirection * quantity;
  const valid = !stockQuantityError();
  $("#stockMovementPreview").textContent = valid ? `${inventoryProduct.stock} ${stockDirection > 0 ? '+' : '−'} ${quantity} = ${after} unidades de venda` : `Stock actual: ${inventoryProduct.stock} unidades`;
  $("#stockMovementError").hidden = true;
  return valid;
}
$("#inventoryProductDetails").addEventListener("click", event => {
  const operation = event.target.closest("[data-stock-direction]");
  if (operation) {
    stockDirection = Number(operation.dataset.stockDirection);
    const adding = stockDirection > 0;
    $("#stockMovementForm").reset();
    $("#stockMovementTitle").textContent = adding ? "Adicionar stock" : "Retirar stock";
    $("#confirmStockMovement").textContent = adding ? "Confirmar entrada" : "Confirmar retirada";
    $("#stockMovementReason").replaceChildren(new Option("Seleccionar motivo", ""), ...(adding ? ["Recepção de mercadoria", "Devolução de cliente", "Correcção de contagem"] : ["Produto danificado", "Prazo de validade", "Devolução ao fornecedor", "Uso próprio", "Correcção de contagem"]).map(reason => new Option(reason, reason)));
    previewStockMovement();
    $("#stockMovementDialog").showModal();
    $("#stockMovementDialog").scrollTop = 0;
    $("#stockMovementTitle").focus();
  }
});
$("#stockMovementQuantity").addEventListener("input", previewStockMovement);
for (const id of ["cancelStockMovement", "closeStockMovement"]) {
  $("#" + id).addEventListener("click", () => $("#stockMovementDialog").close());
}
$("#stockMovementDialog").addEventListener("keydown", event => {
  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    $("#stockMovementDialog").close();
  }
});
$("#stockMovementDialog").addEventListener("close", () => {
  const trigger = $(`[data-stock-direction="${stockDirection}"]`);
  (trigger && !trigger.disabled ? trigger : $('#inventoryProductTitle')).focus();
});
$("#stockMovementForm").addEventListener("submit", event => {
  event.preventDefault();
  const valid = previewStockMovement();
  const reason = $("#stockMovementReason").value;
  if (!valid || !reason) {
    $("#stockMovementError").textContent = !valid ? stockQuantityError() : "Seleccione o motivo do movimento.";
    $("#stockMovementError").hidden = false;
    $(!valid ? "#stockMovementQuantity" : "#stockMovementReason").focus();
    return;
  }
  const delta = stockDirection * Number($("#stockMovementQuantity").value);
  recordStockMovement(inventoryProduct, delta, reason, "manual");
  renderManagement(); renderProducts(); renderInvoice(); renderInventoryProduct();
  if (activeGroup) renderGroup();
  $("#stockMovementDialog").close();
});
$("#managementProducts").addEventListener("click", event => {
  const button = event.target.closest("[data-inventory-product]");
  if (!button) return;
  inventoryProduct = products.find(product => product.id === Number(button.dataset.inventoryProduct));
  renderInventoryProduct();
  prepareProductEditor();
  prepareProductGroup();
  showInventoryProductView("main");
  $("#inventoryProductDialog").showModal();
  // Reset the content once the dialog is visible and its scroller has layout.
  $("#inventoryProductContent").scrollTop = 0;
  $("#inventoryProductTitle").focus();
});
$("#closeInventoryProduct").addEventListener("click", () => $("#inventoryProductDialog").close());
function updateProductDraftActions() {
  if (!inventoryProduct) return;
  const normalize = value => value.trim().replace(/\s+/g, " ");
  const price = $("#registerPrice").value.trim();
  const editDirty = normalize($("#registerName").value) !== inventoryProduct.name
    || normalize($("#registerPackage").value) !== inventoryProduct.unit
    || !price || Number(price.replace(",", ".")) !== inventoryProduct.price
    || registrationPhoto.value !== (inventoryProduct.photo || null) || registrationPhoto.busy;
  const tags = [...$("#registerCategories").querySelectorAll("input:checked")].map(input => input.value);
  const groupDirty = $("#registerGroup").value !== (inventoryProduct.group || "")
    || tags.length !== inventoryProduct.categories.length || tags.some(tag => !inventoryProduct.categories.includes(tag));
  for (const [prefix, dirty] of [["productEdit", editDirty], ["productGroup", groupDirty]]) {
    $("#" + prefix + "Actions").hidden = !dirty;
    if (dirty) $("#" + prefix + "Status").textContent = "";
  }
}
for (const id of ["registerForm", "productGroupForm"]) {
  for (const type of ["input", "change"]) $("#" + id).addEventListener(type, () => {
    $(id === "registerForm" ? "#productEditStatus" : "#productGroupStatus").textContent = "";
    updateProductDraftActions();
  });
}
function prepareProductEditor() {
  $("#registerForm").reset();
  registrationPhoto.reset(inventoryProduct.photo || null);
  $("#registerName").value = inventoryProduct.name;
  $("#registerPrice").value = inventoryProduct.price;
  $("#registerPackage").value = inventoryProduct.unit;
  $("#registerError").hidden = true;
  $("#productEditStatus").textContent = "";
  $("#packageSuggestions").replaceChildren(...[...new Set(products.map(product => product.unit))].map(unit => new Option(unit, unit)));
  updateProductDraftActions();
}
function prepareProductGroup() {
  $("#registerCategories").replaceChildren();
  configuredCategories.forEach(name => addCategoryChoice(name, inventoryProduct.categories.includes(name)));
  $("#registerGroup").replaceChildren(new Option("Sem grupo", ""), ...configuredGroups.map(group => new Option(group, group)));
  $("#registerGroup").value = inventoryProduct.group || "";
  $("#productGroupError").hidden = true;
  $("#productGroupStatus").textContent = "";
  updateProductDraftActions();
}
function refreshProductCatalogue() {
  catalog.length = 0;
  for (const product of products) {
    const key = product.group ? `group:${product.group}` : `product:${product.id}`;
    if (!catalog.some(tile => tile.key === key)) catalog.push({ key, group: product.group, product });
  }
  renderManagement(); renderCategories(); renderProducts(); renderInvoice(); if (inventoryProduct) renderInventoryProduct();
}
$("#closeRegister").addEventListener("click", () => {
  prepareProductEditor(); showInventoryProductView("main");
  document.querySelector('[data-product-view="main"]').focus();
});
$("#cancelProductGroup").addEventListener("click", () => {
  prepareProductGroup(); showInventoryProductView("main");
  document.querySelector('[data-product-view="main"]').focus();
});
$("#productGroupForm").addEventListener("submit", event => {
  event.preventDefault();
  const tags = [...$("#registerCategories").querySelectorAll("input:checked")].map(input => input.value);
  if (!tags.length || tags.some(tag => !configuredCategories.includes(tag))) {
    $("#productGroupError").textContent = "Seleccione pelo menos uma categoria.";
    $("#productGroupError").hidden = false;
    return;
  }
  inventoryProduct.categories = tags;
  inventoryProduct.group = $("#registerGroup").value || undefined;
  refreshProductCatalogue();
  $("#productGroupError").hidden = true;
  updateProductDraftActions();
  $("#productGroupStatus").textContent = "Grupo e categorias guardados.";
  document.querySelector('[data-product-view="categories"]').focus({preventScroll:true});
});
function renderSettingsCategories() {
  $("#settingsGroups").innerHTML = configuredGroups.map((name, index) => `<li><span>${escapeHTML(name)}</span><button class="secondary-button" type="button" data-remove-group="${index}" aria-label="Remover grupo ${escapeHTML(name)}">Remover</button></li>`).join("");
  $("#settingsCategories").innerHTML = configuredCategories.map((name, index) => `<li><span>${escapeHTML(name)}</span><div class="category-order"><button type="button" data-category-index="${index}" data-direction="-1" aria-label="Mover ${escapeHTML(name)} para trás" ${index === 0 ? "disabled" : ""}>↑</button><button type="button" data-category-index="${index}" data-direction="1" aria-label="Mover ${escapeHTML(name)} para a frente" ${index === configuredCategories.length - 1 ? "disabled" : ""}>↓</button><button type="button" data-remove-category="${index}" aria-label="Remover categoria ${escapeHTML(name)}">×</button></div></li>`).join("");
}
$("#categoryForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#newCategoryName").value.trim().replace(/\s+/g, " ");
  const feedback = $("#categoryFeedback");
  if (!name) { feedback.textContent = "Indique o nome da categoria."; return; }
  if (["Todos", "Mais vendidos", "Atalhos", ...configuredCategories].some(item => searchable(item) === searchable(name))) {
    feedback.textContent = "Este nome já existe ou está reservado para um filtro de vendas.";
    return;
  }
  configuredCategories.push(name);
  $("#categoryForm").reset();
  renderSettingsCategories(); renderCategories();
  feedback.textContent = `Categoria ${name} adicionada.`;
});
$("#settingsCategories").addEventListener("click", event => {
  const button = event.target.closest("[data-category-index]");
  if (!button) return;
  const index = Number(button.dataset.categoryIndex), direction = Number(button.dataset.direction);
  const next = index + direction;
  if (next < 0 || next >= configuredCategories.length) return;
  [configuredCategories[index], configuredCategories[next]] = [configuredCategories[next], configuredCategories[index]];
  renderSettingsCategories(); renderCategories();
  const controls = [...$("#settingsCategories").querySelectorAll(`[data-category-index="${next}"]`)];
  (controls.find(control => Number(control.dataset.direction) === direction && !control.disabled) || controls.find(control => !control.disabled))?.focus();
});
$("#registerForm").addEventListener("submit", event => {
  event.preventDefault();
  if (registrationPhoto.busy) return;
  const name = $("#registerName").value.trim().replace(/\s+/g, " ");
  const unit = $("#registerPackage").value.trim().replace(/\s+/g, " ");
  const rawPrice = $("#registerPrice").value.trim();
  const price = Number(rawPrice.replace(",", "."));
  if (!name || !unit) return registrationError("Preencha o nome e a unidade de venda do produto.");
  if (!/^\d+(?:[.,]\d{1,2})?$/.test(rawPrice) || !Number.isFinite(price) || price <= 0 || price > 999999999) return registrationError("Indique um preço superior a zero, com até duas casas decimais.");
  if (products.some(product => product.id !== inventoryProduct.id && searchable(product.name) === searchable(name) && searchable(product.unit) === searchable(unit))) return registrationError("Este produto já existe com esta unidade de venda. Use outra unidade de venda ou um nome que identifique a variedade.");
  Object.assign(inventoryProduct, { name, unit, price, photo: registrationPhoto.value });
  refreshProductCatalogue();
  $("#registerError").hidden = true;
  updateProductDraftActions();
  $("#productEditStatus").textContent = "Produto guardado.";
  $("#editInventoryProduct").focus({preventScroll:true});
});


function showManagementView(view, focus = true) {
  const labels = { dashboard: "Dashboard", settings: "Configurações", inventory: "Inventário" };
  for (const key of Object.keys(labels)) $("#" + key + "View").hidden = key !== view;
  $("#managementTitle").textContent = labels[view];
  if ($("#managementMenu").open) $("#managementMenu").close();
  $("#managementMenuButton").setAttribute("aria-expanded", "false");
  $("#managementMenuButton").setAttribute("aria-label", "Abrir menu");
  document.querySelectorAll("[data-management-view]").forEach(button => {
    if (button.dataset.managementView === view) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  if (view === "inventory") renderManagement();
  if (view === "settings") renderSettingsCategories();
  if (view === "dashboard") renderDashboard();
  $("#managementContent").scrollTop = 0;
  if (focus) $("#managementTitle").focus({ preventScroll: true });
}
$("#managementMenuButton").addEventListener("click", () => {
  $("#managementMenu").showModal();
  $("#managementMenu .management-menu").scrollTop = 0;
  $("#managementMenuButton").setAttribute("aria-expanded", "true");
});
function closeManagementMenu() {
  $("#managementMenu").close();
  $("#managementMenuButton").focus({preventScroll: true});
}
$("#closeManagementMenu").addEventListener("click", closeManagementMenu);
$("#managementMenu").addEventListener("close", () => {
  $("#managementMenuButton").setAttribute("aria-expanded", String($("#managementMenu").open));
});
$("#managementMenu").addEventListener("cancel", event => {
  event.preventDefault();
  event.stopPropagation();
  closeManagementMenu();
});
$("#managementMenu").addEventListener("click", event => {
  const button = event.target.closest("[data-management-view]");
  if (button) return showManagementView(button.dataset.managementView);
  if (event.target !== $("#managementMenu")) return;
  const bounds = event.target.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeManagementMenu();
});


// Decode and resize locally; no image or EXIF metadata is sent to a server.
function photoEditor(prefix, saveButton) {
  const editor = { value: null, busy: false, revision: 0 };
  const preview = $("#" + prefix + "Preview"), input = $("#" + prefix + "Input");
  const status = $("#" + prefix + "Status"), remove = $("#" + prefix + "Remove");
  const render = () => {
    preview.hidden = !editor.value;
    if (editor.value) preview.src = editor.value;
    else preview.removeAttribute("src");
    remove.hidden = !editor.value;
    saveButton.disabled = editor.busy;
    input.dispatchEvent(new Event("photochange", {bubbles: true}));
  };
  editor.reset = value => {
    editor.revision++;
    editor.value = value;
    editor.busy = false;
    input.value = "";
    status.textContent = "";
    render();
  };
  remove.addEventListener("click", () => editor.reset(null));
  input.addEventListener("change", async () => {
    const file = input.files[0];
    if (!file) return;
    const revision = ++editor.revision;
    editor.busy = true;
    status.textContent = "A preparar imagem…";
    render();
    let bitmap;
    try {
      if (!["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > 10 * 1024 * 1024) throw new Error("Escolha uma imagem JPG, PNG ou WebP até 10 MB.");
      bitmap = await createImageBitmap(file);
      const scale = Math.min(1, 640 / Math.max(bitmap.width, bitmap.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(bitmap.width * scale));
      canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      const value = canvas.toDataURL("image/jpeg", 0.85);
      if (revision !== editor.revision) return;
      editor.value = value;
      status.textContent = "Imagem pronta.";
    } catch (error) {
      if (revision !== editor.revision) return;
      status.textContent = error.message.startsWith("Escolha") ? error.message : "Não foi possível abrir a imagem. Escolha outro ficheiro.";
    } finally {
      bitmap?.close();
      if (revision === editor.revision) {
        editor.busy = false;
        input.value = "";
        render();
      }
    }
  });
  return editor;
}
const registrationPhoto = photoEditor("registerPhoto", $("#registerForm [type=submit]"));
$("#registerForm").addEventListener("photochange", updateProductDraftActions);
$("#inventoryProductDialog").addEventListener("close", () => registrationPhoto.reset(null));

const filterObserver = new ResizeObserver(entries => {
  for (const { target } of entries) layoutFilters(target);
});
filterObserver.observe(categories);
filterObserver.observe($("#packageFilters"));
document.fonts.ready.then(() => {
  layoutFilters(categories);
  layoutFilters($("#packageFilters"));
});

// Independent illustrative financial fixtures, never presented as recorded transactions.
let dashboardPeriod = "today";
const dashboardSamples = {
  today: { label: "17 de Setembro · comparação com 16 de Setembro", sales: 12450, previous: 11100, count: 48, cost: 8700, expenses: [350, 200, 150], losses: 150, discount: 200, returns: 100, credit: 1450, collected: 800, purchases: 4200, supplierPaid: 1800, drawings: 500, opening: 6400, trend: [950, 2200, 1400, 3100, 2800, 2000], labels: ["08–10h", "10–12h", "12–14h", "14–16h", "16–18h", "18–20h"] },
  week: { label: "11–17 de Setembro · comparação com os 7 dias anteriores", sales: 78400, previous: 73500, count: 312, cost: 54880, expenses: [2100, 1400, 900], losses: 600, discount: 1200, returns: 500, credit: 8400, collected: 5500, purchases: 35000, supplierPaid: 11000, drawings: 3000, opening: 10900, trend: [9200, 10500, 11800, 14100, 9600, 10750, 12450], labels: ["11 Set", "12 Set", "13 Set", "14 Set", "15 Set", "16 Set", "17 Set"] },
  month: { label: "19 de Agosto–17 de Setembro · comparação com os 30 dias anteriores", sales: 326000, previous: 301000, count: 1280, cost: 228200, expenses: [9000, 6000, 3500], losses: 2400, discount: 4200, returns: 1800, credit: 32000, collected: 26000, purchases: 170000, supplierPaid: 55000, drawings: 12000, opening: 20700, trend: [72000, 83100, 92500, 78400], labels: ["19–25 Ago", "26 Ago–1 Set", "2–8 Set", "9–17 Set"] }
};
function renderDashboard() {
  const d = dashboardSamples[dashboardPeriod];
  const expense = d.expenses.reduce((a, b) => a + b, 0);
  const gross = d.sales - d.cost;
  const profit = gross - expense - d.losses;
  const receipts = d.sales - d.credit + d.collected;
  const out = d.purchases + d.supplierPaid + expense + d.drawings;
  const balance = d.opening + receipts - out;
  const pct = value => `${new Intl.NumberFormat("pt-MZ", { maximumFractionDigits: 1 }).format(value)}%`;
  const row = (label, value, cls = "") => `<div class="dashboard-row ${cls}"><span>${label}</span><strong>${value}</strong></div>`;
  const card = (label, value, note, cls = "") => `<article class="dashboard-metric ${cls}"><h4>${label}</h4><strong>${value}</strong><p>${note}</p></article>`;
  const panel = (title, body, subtitle = "") => `<section class="dashboard-panel"><h3>${title}</h3>${subtitle ? `<p class="dashboard-caption">${subtitle}</p>` : ""}${body}</section>`;
  const low = products.filter(p => p.stock > 0 && p.stock <= 5).sort((a,b) => a.stock - b.stock);
  const empty = products.filter(p => p.stock <= 0);
  $("#dashboardPeriodLabel").textContent = `${d.label} de 2026`;
  $("#dashboardContent").innerHTML = `
    <div class="dashboard-metrics">
      ${card("Vendas líquidas", money(d.sales), `↑ ${pct((d.sales / d.previous - 1) * 100)} face ao período anterior`)}
      ${card("Lucro estimado", money(profit), `${pct(profit / d.sales * 100)} das vendas fica no negócio`, "dashboard-profit")}
      ${card("Vendas realizadas", d.count, `${money(d.sales / d.count)} por venda, em média`)}
      ${card("Dinheiro disponível", money(balance), "Saldo no fim do exemplo · caixa + carteiras")}
    </div>
    <nav class="dashboard-jump" aria-label="Secções do dashboard"><a href="#dash-result">Resultado</a><a href="#dash-money">Dinheiro</a><a href="#dash-stock">Stock</a></nav>
    <div class="dashboard-columns">
    ${panel("Ritmo das vendas", `<div class="dashboard-bars" role="img" aria-label="Vendas por intervalo; valores exactos na lista abaixo">${d.trend.map((n,i) => `<div><span style="height:${Math.round(n / Math.max(...d.trend) * 100)}%"></span></div>`).join("")}</div><p class="dashboard-chart-range"><span>${d.labels[0]}</span><span>${d.labels[d.labels.length-1]}</span></p><details><summary>Ver valores por intervalo</summary>${d.trend.map((n,i) => row(d.labels[i], money(n))).join("")}</details><p class="dashboard-caption">${dashboardPeriod === "today" ? "Das 08h às 20h · dia completo de exemplo" : "Da esquerda para a direita, do início ao fim do período"}</p>`)}
    <section class="dashboard-panel" id="dash-result"><h3>O que ficou das vendas?</h3><p class="dashboard-caption">Resultado do período seleccionado</p>${row("Vendas líquidas",money(d.sales))}${row("Custo dos produtos vendidos",`− ${money(d.cost)}`)}${row("Lucro bruto",money(gross),"dashboard-subtotal")}${row("Despesas do negócio",`− ${money(expense)}`)}${row("Perdas de stock",`− ${money(d.losses)}`)}${row("Lucro estimado",money(profit),"dashboard-subtotal dashboard-positive")}<details><summary>Como calculamos o resultado</summary><p>As vendas líquidas já descontam ${money(d.discount)} em descontos e ${money(d.returns)} em devoluções. Incluem ${money(d.credit)} vendidos a crédito.</p><p>O lucro desconta o custo dos produtos vendidos, despesas e perdas. Compras de stock e retiradas do proprietário aparecem no movimento de dinheiro. Impostos não estão incluídos.</p>${row("Margem bruta",pct(gross/d.sales*100))}${row("Margem estimada final",pct(profit/d.sales*100))}</details></section>
    <section class="dashboard-panel" id="dash-money"><h3>Entradas e saídas de dinheiro</h3><p class="dashboard-caption">No período · dinheiro recebido não é o mesmo que lucro</p>${row("Saldo inicial",money(d.opening))}${row("Vendas pagas",`+ ${money(d.sales-d.credit)}`)}${row("Dívidas de clientes recebidas",`+ ${money(d.collected)}`)}${row("Total de entradas",money(receipts),"dashboard-subtotal")}${row("Compras de stock pagas",`− ${money(d.purchases)}`)}${row("Dívidas a fornecedores pagas",`− ${money(d.supplierPaid)}`)}${row("Despesas pagas",`− ${money(expense)}`)}${row("Retiradas do proprietário",`− ${money(d.drawings)}`)}${row("Saldo final",money(balance),"dashboard-subtotal")}<details><summary>Onde está o dinheiro?</summary>${row("Dinheiro em caixa",money(balance-6400))}${row("M-Pesa",money(4200))}${row("e-Mola",money(2200))}<p>Saldos ilustrativos no fim de cada período. Não houve transferências internas neste exemplo.</p></details></section>
    ${panel("Despesas do negócio", ["Renda e serviços", "Transporte", "Outras despesas"].map((label,i)=>row(label,money(d.expenses[i]))).join("")+row("Total",money(expense),"dashboard-subtotal")+`<p class="dashboard-caption">${pct(expense/d.sales*100)} das vendas · exclui compras de mercadoria e perdas.</p>`)}
    ${panel("Dívidas por resolver", `<span class="dashboard-tag">Posição em 17 de Setembro</span>${row("Clientes devem ao negócio",money(6800))}${row("Em atraso · 3 clientes",money(2100),"dashboard-warning")}${row("A pagar a fornecedores",money(12500))}${row("Vence nos próximos 7 dias",money(4500),"dashboard-warning")}<details><summary>Ver próximos compromissos</summary>${row("Fornecedor A · 18 Set",money(3000))}${row("Fornecedor B · 21 Set",money(1500))}<p>8 clientes com saldo por pagar; 4 fornecedores por liquidar. Valores de demonstração, independentes do filtro de período.</p></details>`)}
    ${panel("Produtos que mais vendem", `<p class="dashboard-caption">Ranking ilustrativo por receita no período; não deriva das vendas do protótipo.</p>${[{name:"Arroz Rani Super Basmati",unit:"1 kg",share:.22},{name:"Óleo Fula",unit:"1 litro",share:.16},{name:"Pão Carcaça",unit:"unidade",share:.12}].map((p,i)=>`<div class="dashboard-ranking"><span class="dashboard-rank">${i+1}</span><div><strong>${p.name}</strong><span>${p.unit} · ${pct(p.share*100)} das vendas</span><b>${money(d.sales*p.share)}</b></div></div>`).join("")}${row("Restantes produtos",money(d.sales*.5))}`)}
    </div>
    <section class="dashboard-panel" id="dash-stock"><div class="dashboard-section-heading"><div><h3>Stock que precisa de atenção</h3><p class="dashboard-caption">Catálogo actual do protótipo · não muda com o período</p></div><button type="button" class="secondary-button" id="dashboardInventory">Abrir inventário →</button></div>
    <div class="dashboard-stock-metrics">${card("Sem stock ou negativo",empty.length,"Produtos com quantidade igual ou inferior a zero")}${card("Pouco stock",low.length,"Até 5 unidades de venda disponíveis")}${card("Produtos no catálogo",products.length,`${configuredCategories.length} categorias definidas`)}</div>
    <details ${(low.length+empty.length) ? "open" : ""}><summary>Produtos a rever (${low.length+empty.length})</summary><div class="dashboard-stock-list">${[...empty,...low].map(p=>`<button type="button" class="dashboard-stock-item" data-dashboard-product="${p.id}"><span><strong>${escapeHTML(p.name)}</strong><span>${escapeHTML(p.unit)}</span></span><b>${p.stock} disponíveis →</b></button>`).join("") || '<p>Nenhum produto com stock igual ou inferior a 5.</p>'}</div></details>
    <details><summary>Outros números a acompanhar</summary><p>Estes indicadores precisam de dados que o catálogo ainda não recolhe. Sem dados não significa zero.</p>${row("Valor do stock ao custo", "Sem custos de compra")}${row("Produtos próximos da validade", "Sem lotes e validades")}${row("Produtos sem vender há 30 dias", "Sem histórico de vendas")}${row("Dias até esgotar o stock", "Sem consumo diário")}${row("Perdas por validade ou danos", "Sem registo de perdas")}${row("Diferença na conferência de caixa", "Sem contagem de caixa")}<p>O limite de 5 unidades é uma regra de demonstração. Numa versão real, cada produto poderá ter o seu próprio mínimo.</p></details></section>
    <p class="dashboard-footnote">Demonstração financeira com data fixa: 17 de Setembro de 2026. O catálogo mantém as alterações desta sessão até recarregar.</p>`;
}
$("#dashboardView").addEventListener("click", event => {
  const period = event.target.closest("[data-period]");
  if (period) {
    dashboardPeriod = period.dataset.period;
    document.querySelectorAll("[data-period]").forEach(button => button.setAttribute("aria-pressed", String(button === period)));
    renderDashboard();
  }
  if (event.target.closest("#dashboardInventory")) showManagementView("inventory");
  const product = event.target.closest("[data-dashboard-product]");
  if (product) {
    showManagementView("inventory");
    $("#managementSearch").value = products.find(p => p.id === Number(product.dataset.dashboardProduct)).name;
    renderManagement();
  }
});


// Catalogue creation and group/category management share the in-memory catalogue.
const newProductPhoto = photoEditor("newProductPhoto", $("#newProductForm [type=submit]"));
$("#addProduct").addEventListener("click", () => {
  $("#newProductForm").reset();
  newProductPhoto.reset(null);
  $("#newProductError").hidden = true;
  $("#newProductCategories").innerHTML = configuredCategories.map(name => `<label><input type="checkbox" value="${escapeHTML(name)}" /><span>${escapeHTML(name)}</span></label>`).join("");
  $("#newProductGroup").replaceChildren(new Option("Sem grupo", ""), ...configuredGroups.map(name => new Option(name, name)));
  $("#newProductDialog").showModal();
  $("#newProductForm").scrollTop = 0;
  $("#newProductTitle").focus();
});
for (const id of ["closeNewProduct", "cancelNewProduct"]) $("#" + id).addEventListener("click", () => $("#newProductDialog").close());
$("#newProductDialog").addEventListener("close", () => newProductPhoto.reset(null));
$("#newProductForm").addEventListener("submit", event => {
  event.preventDefault();
  if (newProductPhoto.busy) return;
  const name = $("#newProductName").value.trim().replace(/\s+/g, " ");
  const unit = $("#newProductUnit").value.trim().replace(/\s+/g, " ");
  const rawPrice = $("#newProductPrice").value.trim();
  const price = Number(rawPrice.replace(",", "."));
  const tags = [...$("#newProductCategories").querySelectorAll("input:checked")].map(input => input.value);
  let error = "";
  if (!name || !unit) error = "Preencha o nome e a unidade de venda do produto.";
  else if (!/^\d+(?:[.,]\d{1,2})?$/.test(rawPrice) || !Number.isFinite(price) || price <= 0 || price > 999999999) error = "Indique um preço superior a zero, com até duas casas decimais.";
  else if (!tags.length) error = "Seleccione pelo menos uma categoria.";
  else if (products.some(product => searchable(product.name) === searchable(name) && searchable(product.unit) === searchable(unit))) error = "Este produto já existe com esta unidade de venda.";
  if (error) {
    $("#newProductError").textContent = error;
    $("#newProductError").hidden = false;
    $("#newProductError").scrollIntoView({block: "nearest"});
    return;
  }
  const product = {id: Math.max(...products.map(item => item.id)) + 1, name, unit, price, categories: tags, group: $("#newProductGroup").value || undefined, stock: 0, photo: newProductPhoto.value, emoji: "📦", tilt: "0deg"};
  products.push(product);
  $("#managementSearch").value = "";
  refreshProductCatalogue();
  $("#newProductDialog").close();
  $(`[data-inventory-product="${product.id}"]`).click();
});
$("#groupForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#newGroupName").value.trim().replace(/\s+/g, " ");
  if (!name || configuredGroups.some(group => searchable(group) === searchable(name))) {
    $("#groupFeedback").textContent = !name ? "Indique o nome do grupo." : "Este grupo já existe.";
    return;
  }
  configuredGroups.push(name);
  $("#groupForm").reset();
  renderSettingsCategories();
  $("#groupFeedback").textContent = `Grupo ${name} adicionado.`;
});
let pendingTaxonomyRemoval = null;
$("#settingsView").addEventListener("click", event => {
  const button = event.target.closest("[data-remove-category], [data-remove-group]");
  if (!button) return;
  const isCategory = button.hasAttribute("data-remove-category");
  const name = isCategory ? configuredCategories[Number(button.dataset.removeCategory)] : configuredGroups[Number(button.dataset.removeGroup)];
  const affected = products.filter(product => isCategory ? product.categories.includes(name) : product.group === name);
  if (isCategory && affected.some(product => product.categories.length === 1)) {
    $("#categoryFeedback").textContent = `Antes de remover ${name}, atribua outra categoria aos produtos que só têm esta categoria.`;
    $("#categoryFeedback").scrollIntoView({block: "nearest"});
    return;
  }
  pendingTaxonomyRemoval = {name, isCategory};
  $("#removeTaxonomyTitle").textContent = `Remover ${isCategory ? "categoria" : "grupo"}?`;
  $("#removeTaxonomyMessage").textContent = `Remover “${name}”? ${affected.length} produtos associados. Os produtos e o stock serão mantidos.`;
  $("#removeTaxonomyDialog").showModal();
});
$("#cancelRemoveTaxonomy").addEventListener("click", () => $("#removeTaxonomyDialog").close());
$("#removeTaxonomyDialog").addEventListener("close", () => { pendingTaxonomyRemoval = null; });
$("#confirmRemoveTaxonomy").addEventListener("click", () => {
  if (!pendingTaxonomyRemoval) return;
  const {name, isCategory} = pendingTaxonomyRemoval;
  const list = isCategory ? configuredCategories : configuredGroups;
  const index = list.indexOf(name);
  if (index < 0) return;
  list.splice(index, 1);
  for (const product of products) {
    if (isCategory) product.categories = product.categories.filter(category => category !== name);
    else if (product.group === name) delete product.group;
  }
  if (isCategory && state.category === name) state.category = "Todos";
  if (!isCategory && activeGroup === name) { activeGroup = null; $("#groupDialog").close(); }
  refreshProductCatalogue();
  renderSettingsCategories();
  $("#removeTaxonomyDialog").close();
  $(isCategory ? "#newCategoryName" : "#newGroupName").focus({preventScroll: true});
  $(isCategory ? "#categoryFeedback" : "#groupFeedback").textContent = `${name} removido.`;
});

// Shared scrolling shortcut; moving it into the active dialog keeps it in that
// dialog's top layer and out of the inert background behind modal views.
(() => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "back-to-top";
  button.hidden = true;
  button.setAttribute("aria-label", "Voltar ao topo. Arraste para mover; use as setas no teclado para posicionar.");
  button.title = "Voltar ao topo · arraste para mover";
  button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14M12 19V9m-6 6 6-6 6 6"/></svg>';
  document.body.append(button);
  const enabled = matchMedia("(max-width: 1024px), (any-pointer: coarse)");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const storageKey = "merca-back-to-top-position";
  let position = { x: 1, y: .75 };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && Number.isFinite(saved.x) && Number.isFinite(saved.y)) {
      position = { x: Math.max(0, Math.min(1, saved.x)), y: Math.max(0, Math.min(1, saved.y)) };
    }
  } catch { /* The shortcut also works when browser storage is unavailable. */ }
  let target = document.scrollingElement;
  let activeSurface = document.body;
  let drag = null;
  let suppressClick = false;
  let frame = 0;
  const dialogs = [];
  const bounds = () => {
    const viewport = window.visualViewport;
    return { left: (viewport?.offsetLeft || 0) + 8, top: (viewport?.offsetTop || 0) + 8,
      width: Math.max(0, (viewport?.width || innerWidth) - 68),
      height: Math.max(0, (viewport?.height || innerHeight) - 68) };
  };
  function place() {
    const area = bounds();
    button.style.left = `${area.left + position.x * area.width}px`;
    button.style.top = `${area.top + position.y * area.height}px`;
  }
  function save() {
    try { localStorage.setItem(storageKey, JSON.stringify(position)); } catch { /* Optional preference. */ }
  }
  function sync() {
    frame = 0;
    const host = dialogs.at(-1) || document.body;
    const surface = host === document.body && !$("#saleSheet").hidden ? $("#saleSheet") : host;
    if (button.parentElement !== host) host.append(button);
    if (activeSurface !== surface) {
      activeSurface = surface;
      target = surface === document.body ? document.scrollingElement :
        surface.querySelector('.page-content, .checkout-content, #inventoryProductContent') || surface;
    }
    button.hidden = !enabled.matches || !target || target.scrollTop < 120;
    place();
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(sync); }
  new MutationObserver(records => {
    for (const { target: dialog } of records) {
      const index = dialogs.indexOf(dialog);
      if (index !== -1) dialogs.splice(index, 1);
      if (dialog.open) dialogs.push(dialog);
    }
    schedule();
  }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ["open"] });
  new MutationObserver(schedule).observe($("#saleSheet"), { attributes: true, attributeFilter: ["hidden"] });
  document.addEventListener("scroll", event => {
    const scroller = event.target === document ? document.scrollingElement : event.target;
    const host = dialogs.at(-1) || document.body;
    if (scroller instanceof Element && (host === document.body ? !scroller.closest('dialog') : scroller === host || scroller.closest('dialog') === host)) {
      // Ignore horizontal filter strips and small, independently scrolling headers.
      if (scroller === document.scrollingElement || scroller === host ||
          (!scroller.closest('header, nav, .sales-navigation, .group-navigation') && scroller.scrollHeight > scroller.clientHeight)) target = scroller;
    }
    schedule();
  }, true);
  button.addEventListener("pointerdown", event => {
    if (event.button !== 0) return;
    suppressClick = false;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, start: { ...position }, moved: false };
    button.setPointerCapture(event.pointerId);
  });
  button.addEventListener("pointermove", event => {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
    if (Math.hypot(dx, dy) > 6) drag.moved = true;
    if (!drag.moved) return;
    const area = bounds();
    position = { x: Math.max(0, Math.min(1, drag.start.x + dx / (area.width || 1))),
      y: Math.max(0, Math.min(1, drag.start.y + dy / (area.height || 1))) };
    place();
  });
  function endDrag(event) {
    if (!drag || event.pointerId !== drag.id) return;
    suppressClick = drag.moved;
    if (drag.moved) save();
    drag = null;
  }
  button.addEventListener("pointerup", endDrag);
  button.addEventListener("pointercancel", endDrag);
  button.addEventListener("lostpointercapture", endDrag);
  button.addEventListener("keydown", event => {
    if (!event.key.startsWith("Arrow")) return;
    event.preventDefault();
    const area = bounds();
    const step = event.shiftKey ? 40 : 12;
    position.x = Math.max(0, Math.min(1, position.x + (event.key === "ArrowRight" ? step : event.key === "ArrowLeft" ? -step : 0) / (area.width || 1)));
    position.y = Math.max(0, Math.min(1, position.y + (event.key === "ArrowDown" ? step : event.key === "ArrowUp" ? -step : 0) / (area.height || 1)));
    place(); save();
  });
  button.addEventListener("click", event => {
    if (suppressClick && event.detail !== 0) { suppressClick = false; return; }
    target?.scrollTo({ top: 0, behavior: reducedMotion.matches ? "instant" : "smooth" });
  });
  enabled.addEventListener("change", schedule);
  window.addEventListener("resize", schedule);
  window.visualViewport?.addEventListener("resize", schedule);
  window.visualViewport?.addEventListener("scroll", schedule);
  sync();
})();

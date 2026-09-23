// Numeric code search uses the existing sales cards and replaces the category strip.
(() => {
  window.keypadMode = {active: false, query: ''};
  const mode = window.keypadMode;
  const panel = document.createElement('section');
  panel.id = 'keypadPanel';
  panel.className = 'keypad-panel';
  panel.setAttribute('aria-label', 'Teclado numérico');
  panel.hidden = true;
  panel.innerHTML = `<div class="keypad-numbers">
    <button type="button" data-digit="1">1</button><button type="button" data-digit="2">2</button><button type="button" data-digit="3">3</button><button type="button" data-command="clear" aria-label="Limpar código">C</button>
    <button type="button" data-digit="4">4</button><button type="button" data-digit="5">5</button><button type="button" data-digit="6">6</button><button type="button" data-command="back" aria-label="Apagar último dígito">⌫</button>
    <button type="button" data-digit="7">7</button><button type="button" data-digit="8">8</button><button type="button" data-digit="9">9</button><button type="button" data-command="ok">OK</button>
    <button type="button" data-digit="0">0</button><button type="button" data-command="close" aria-label="Fechar pesquisa por código">×</button>
  </div>`;
  document.body.append(panel);
  new ResizeObserver(() => {
    document.body.style.setProperty('--keypad-height', `${panel.getBoundingClientRect().height}px`);
    updateCartSpacing();
  }).observe(panel);
  const launcher = document.createElement('button');
  launcher.className = 'keypad-launcher'; launcher.type = 'button';
  launcher.setAttribute('aria-label', 'Abrir pesquisa por código. Arraste para mover; use as setas para posicionar.');
  launcher.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h1m4 0h1m4 0h0M7 12h1m4 0h1m4 0h0M7 17h1m4 0h1m4 0h0"/></svg>';
  document.body.append(launcher);
  const productFor = row => products.find(product => product.id === row.productId);
  function render() {
    $('#searchInput').value = mode.query;
    $('#clearSearch').hidden = !mode.query;
    renderProducts();
  }
  function setActive(active) {
    mode.active = active;
    mode.query = '';
    panel.hidden = !active;
    $('#categoryList').hidden = active;
    const search = $('#searchInput');
    search.readOnly = active;
    search.inputMode = active ? 'none' : 'search';
    search.placeholder = active ? 'Código numérico' : 'Procurar produto...';
    search.setAttribute('aria-label', active ? 'Código numérico' : 'Procurar produto');
    if (active) state.query = '';
    document.body.classList.toggle('keypad-mode-active', active);
    render();
    syncLauncher();
    window.scrollTo({top: 0, behavior: 'instant'});
    $('#searchInput').focus({preventScroll: true});
  }
  function submitCode() {
    const exact = keypadAssignments.find(row => row.code === mode.query && productFor(row));
    if (exact) selectProduct(productFor(exact), true);
  }
  panel.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.digit !== undefined) { mode.query += button.dataset.digit; render(); }
    else if (button.dataset.command === 'clear') { mode.query = ''; render(); }
    else if (button.dataset.command === 'back') { mode.query = mode.query.slice(0, -1); render(); }
    else if (button.dataset.command === 'ok') submitCode();
    else if (button.dataset.command === 'close') setActive(false);
  });
  document.addEventListener('keydown', event => {
    if (!mode.active || event.ctrlKey || event.metaKey || event.altKey || (event.target.tagName === 'BUTTON' && (event.key === 'Enter' || event.key === ' '))) return;
    if (/^[0-9]$/.test(event.key)) { event.preventDefault(); mode.query += event.key; render(); }
    else if (event.key === 'Backspace') { event.preventDefault(); mode.query = mode.query.slice(0, -1); render(); }
    else if (event.key === 'Enter') { event.preventDefault(); submitCode(); }
  });
  window.clearKeypadQuery = () => { mode.query = ''; render(); $('#searchInput').focus({preventScroll:true}); };
  $('#searchInput').addEventListener('input', event => {
    if (!mode.active) return;
    mode.query = event.target.value.replace(/\D/g, '');
    render();
  });
  const config = document.createElement('dialog');
  config.id = 'keypadConfig'; config.setAttribute('aria-labelledby', 'keypadConfigTitle');
  config.innerHTML = `<header class="keypad-header"><h2 id="keypadConfigTitle">Configurar códigos</h2><button id="closeKeypadConfig" type="button" aria-label="Fechar configuração">×</button></header><form id="keypadConfigForm" class="page-content keypad-config-content">
    <p>Escolha um produto e atribua-lhe qualquer código numérico. Um código também pode ser o início de outros códigos.</p><p>As alterações duram até recarregar.</p>
    <label for="keypadConfigProduct">Produto</label><select id="keypadConfigProduct"></select>
    <label for="keypadConfigCode">Código numérico</label><input id="keypadConfigCode" type="text" inputmode="numeric" pattern="[0-9]+" autocomplete="off" maxlength="20" placeholder="Ex.: 12">
    <p id="keypadConfigFeedback" role="status"></p>
    <button type="submit" class="finish-button">Guardar código</button><button id="removeKeypadCode" type="button" class="secondary-button">Remover código deste produto</button><button id="cancelKeypadConfig" type="button" class="secondary-button">Voltar à pesquisa</button>
    </form>`;
  document.body.append(config);
  function loadConfigProduct() {
    const id = Number($('#keypadConfigProduct').value);
    const row = keypadAssignments.find(item => item.productId === id);
    $('#keypadConfigCode').value = row?.code || '';
    $('#removeKeypadCode').disabled = !row;
    $('#keypadConfigFeedback').textContent = '';
  }
  $('#configureKeypad').onclick = () => {
    $('#keypadConfigProduct').innerHTML = products.map(product => `<option value="${product.id}">${escapeHTML(productLabel(product))}${keypadAssignments.some(row => row.productId === product.id) ? '' : ' · sem código'}</option>`).join('');
    loadConfigProduct(); config.showModal(); $('#keypadConfigProduct').focus();
  };
  $('#closeKeypadConfig').onclick = $('#cancelKeypadConfig').onclick = () => config.close();
  $('#keypadConfigProduct').onchange = loadConfigProduct;
  $('#keypadConfigCode').addEventListener('input', event => { event.target.value = event.target.value.replace(/\D/g, ''); });
  $('#keypadConfigForm').onsubmit = event => {
    event.preventDefault();
    const productId = Number($('#keypadConfigProduct').value), code = $('#keypadConfigCode').value;
    const feedback = $('#keypadConfigFeedback');
    if (!/^[0-9]+$/.test(code)) { feedback.textContent = 'Introduza pelo menos um dígito.'; return; }
    const collision = keypadAssignments.find(row => row.productId !== productId && row.code === code);
    if (collision) { feedback.textContent = `O código ${code} já pertence a ${productLabel(productFor(collision))}.`; return; }
    const row = keypadAssignments.find(item => item.productId === productId);
    if (row) row.code = code; else keypadAssignments.push({productId, code});
    $('#removeKeypadCode').disabled = false;
    feedback.textContent = `Código ${code} guardado.`;
    render();
  };
  $('#removeKeypadCode').onclick = () => {
    const index = keypadAssignments.findIndex(row => row.productId === Number($('#keypadConfigProduct').value));
    if (index !== -1) keypadAssignments.splice(index, 1);
    loadConfigProduct(); render();
    $('#keypadConfigFeedback').textContent = 'Código removido. O produto e o stock foram mantidos.';
  };
  // Independent device-local placement; leave the shared scroll shortcut intact.
  let position = {x: 1, y: .58}, drag = null, suppressClick = false;
  try { const saved = JSON.parse(localStorage.getItem('merca-keypad-position')); if (saved && Number.isFinite(saved.x) && Number.isFinite(saved.y)) position = saved; } catch {}
  const bounds = () => ({width: Math.max(1, (visualViewport?.width || innerWidth) - 72), height: Math.max(1, (visualViewport?.height || innerHeight) - 72), left: (visualViewport?.offsetLeft || 0) + 8, top: (visualViewport?.offsetTop || 0) + 8});
  function place() { const b = bounds(); position.x = Math.max(0, Math.min(1, position.x)); position.y = Math.max(0, Math.min(1, position.y)); launcher.style.left = `${b.left + position.x * b.width}px`; launcher.style.top = `${b.top + position.y * b.height}px`; }
  function save() { try { localStorage.setItem('merca-keypad-position', JSON.stringify(position)); } catch {} }
  launcher.onpointerdown = event => { if (event.button !== 0) return; suppressClick = false; drag = {x:event.clientX,y:event.clientY,start:{...position},id:event.pointerId}; launcher.setPointerCapture(event.pointerId); };
  launcher.onpointermove = event => { if (!drag || drag.id !== event.pointerId) return; const dx = event.clientX-drag.x, dy = event.clientY-drag.y; if (Math.hypot(dx,dy)>6) suppressClick=true; if (!suppressClick) return; const b=bounds(); position={x:drag.start.x+dx/b.width,y:drag.start.y+dy/b.height}; place(); };
  launcher.onpointerup = launcher.onpointercancel = () => {drag=null; save();};
  launcher.onkeydown = event => { if (!event.key.startsWith('Arrow')) return; event.preventDefault(); const b=bounds(), step=event.shiftKey?40:12; position.x+=(event.key==='ArrowRight'?step:event.key==='ArrowLeft'?-step:0)/b.width; position.y+=(event.key==='ArrowDown'?step:event.key==='ArrowUp'?-step:0)/b.height; place();save(); };
  launcher.onclick = event => { if (suppressClick && event.detail) { suppressClick = false; return; } setActive(true); };
  function syncLauncher() {
    launcher.hidden = mode.active || [...document.querySelectorAll('dialog[open]')].length > 0 || !$('#saleSheet').hidden;
    place();
  }
  new MutationObserver(syncLauncher).observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});
  new MutationObserver(syncLauncher).observe($('#saleSheet'),{attributes:true,attributeFilter:['hidden']});
  window.addEventListener('resize',place); window.visualViewport?.addEventListener('resize',place); window.visualViewport?.addEventListener('scroll',place);
  syncLauncher();
})();

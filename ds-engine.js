/*!
 * Design System Popup engine — Orlando Antonio / visualsenses.design
 * One script for the whole site. Each design system lives in systems/<id>.js
 * and is fetched only when someone opens it.
 *
 * Open a design system from any link:   href="#ds-<id>"   e.g. #ds-bbb
 * or from any element:                  data-ds-open="<id>"
 * Deep link from another page:          /portfolio#ds-bbb
 * Legacy link "#design-system" opens the id in the script tag's data-default.
 */
(function () {
  'use strict';
  if (window.DSPopup) return;

  var script = document.currentScript || document.querySelector('script[src*="ds-engine"]');
  var BASE = script ? script.src.replace(/[^/]*$/, '') : '';
  var DEFAULT_ID = script && script.getAttribute('data-default');
  var VERSION = script && (script.src.split('?')[1] || '');
  var CSS = " #ds-popup,#ds-popup *{box-sizing: border-box}#ds-popup h2,#ds-popup h3,#ds-popup p{margin: 0;letter-spacing: normal;text-transform: none}#ds-popup button{text-transform: none;letter-spacing: normal;line-height: normal;margin: 0;font: inherit;color: inherit}#ds-popup input{margin: 0;box-shadow: none;font: inherit;color: inherit}#ds-popup a{text-decoration: none}#ds-popup :focus-visible{outline: 2px solid var(--primary);outline-offset: 2px}#ds-popup{--scrim: rgb(0 0 0 / .55);--sheet: #f6f6f4;--ink: #1d1d1b;--muted: #66665f;--line: #e3e3df;--dock: #1d1d1b;--chip: #ebebe7;--ease: cubic-bezier(.2,.8,.2,1);--mono: ui-monospace,\"SF Mono\",Menlo,monospace;position: fixed;inset: 0;z-index: 2147483000;display: flex;flex-direction: column;justify-content: flex-end;visibility: hidden}#ds-popup.is-open,#ds-popup.is-closing{visibility: visible}#ds-popup .p-scrim{position: absolute;inset: 0;background: var(--scrim);opacity: 0;transition: opacity .45s var(--ease)}#ds-popup .p-sheet{position: relative;height: calc(100% - 24px - env(safe-area-inset-top,0px));background: var(--sheet);border-radius: 16px 16px 0 0;transform: translateY(102%);transition: transform .6s var(--ease);display: flex;flex-direction: column;overflow: hidden;font-family: var(--font);color: var(--ink)}#ds-popup.is-open .p-scrim{opacity: 1}#ds-popup.is-open .p-sheet{transform: none}@media (prefers-reduced-motion: reduce){#ds-popup .p-scrim,#ds-popup .p-sheet{transition: none}}#ds-popup .p-bar{flex: none;display: flex;align-items: center;justify-content: space-between;gap: 16px;padding-block: 10px;padding-left: max(24px,env(safe-area-inset-left,0px));padding-right: max(14px,env(safe-area-inset-right,0px));border-bottom: 1px solid var(--line)}#ds-popup .p-bar h2{font: 700 17px/24px var(--font);color: var(--ink)}#ds-popup .p-x{width: 44px;height: 44px;display: grid;place-items: center;border-radius: 12px;border: 0;background: var(--dock);color: #fff;cursor: pointer;flex: none}#ds-popup .p-x:hover{background: #3a3a37}#ds-popup .p-x svg{width: 20px;height: 20px}#ds-popup .p-scroll{position: relative;flex: 1;overflow-y: auto;overscroll-behavior: contain;padding-bottom: 112px}#ds-popup .p-inner{max-width: 1180px;margin: 0 auto;padding-left: max(24px,env(safe-area-inset-left,0px));padding-right: max(24px,env(safe-area-inset-right,0px))}#ds-popup .p-doc{display: grid;grid-template-columns: 190px minmax(0,1fr);gap: 48px;padding-top: 32px}#ds-popup .p-toc{position: sticky;top: 24px;align-self: start;display: flex;flex-direction: column;gap: 2px}#ds-popup .p-toc a{font-size: 15px;font-weight: 500;color: var(--muted);padding: 10px 12px;border-radius: 10px}#ds-popup .p-toc a:hover,#ds-popup .p-toc a.is-active{color: var(--ink);background: var(--chip)}#ds-popup .p-sec{padding-block: 0 56px;scroll-margin-top: 16px}#ds-popup .p-sec + .p-sec{border-top: 1px solid var(--line);padding-top: 40px}#ds-popup .p-sec > h3{margin: 0 0 6px;font: 700 28px/32px var(--font);color: var(--text)}#ds-popup .p-sec > p{margin: 0 0 24px;font: 500 16px/26px var(--font);color: var(--text-muted);max-width: 64ch}#ds-popup .p-label{font: 700 13px/20px var(--font);letter-spacing: .08em;text-transform: uppercase;color: var(--muted);margin: 28px 0 12px}#ds-popup .p-panel{background: var(--surface);border-radius: var(--radius-card);padding: 24px}#ds-popup .p-dock{position: absolute;left: 50%;bottom: calc(24px + env(safe-area-inset-bottom,0px));transform: translateX(-50%);padding: 6px;border-radius: 14px;background: var(--dock);box-shadow: 0 10px 30px rgb(0 0 0 / .25)}#ds-popup .p-cta{display: inline-flex;align-items: center;gap: 8px;height: 44px;padding: 0 18px;border-radius: 10px;background: var(--cta);color: var(--on-cta);font: 700 14px/1 var(--font);white-space: nowrap}#ds-popup .p-cta svg{width: 16px;height: 16px}#ds-popup .d-grid{display: grid;grid-template-columns: repeat(12,minmax(0,1fr));gap: 16px}#ds-popup .d{grid-column: span 6;background: var(--surface);border-radius: var(--radius-card);padding: 24px;display: flex;flex-direction: column;gap: 16px;min-width: 0}#ds-popup .d.w12{grid-column: span 12}#ds-popup .d.w5{grid-column: span 5}#ds-popup .d.w7{grid-column: span 7}#ds-popup .d-head{display: flex;flex-direction: column;gap: 2px}#ds-popup .d-name{font: 700 16px/24px var(--font);color: var(--text)}#ds-popup .d-uses{font: 500 12px/18px var(--font);color: var(--text-muted)}#ds-popup .d-live{font: 500 14px/20px var(--font);color: var(--text-muted);min-height: 20px}#ds-popup .d-live strong{color: var(--text)}#ds-popup .d-row{display: flex;flex-wrap: wrap;gap: 12px;align-items: center}#ds-popup .c-btn{font: 700 16px/24px var(--font);display: inline-flex;align-items: center;justify-content: center;gap: 8px;min-height: 44px;padding: 0 24px;border: 0;border-radius: var(--radius-control);background: var(--primary);color: var(--on-primary);cursor: pointer;transition: background .15s,transform .1s}#ds-popup .c-btn:hover{background: var(--primary-hover)}#ds-popup .c-btn:active{transform: scale(.97)}#ds-popup .c-btn:disabled{background: var(--disabled);color: var(--disabled-ink);cursor: not-allowed;transform: none}#ds-popup .c-btn.ghost{background: transparent;color: var(--primary);box-shadow: inset 0 0 0 1px var(--border-strong)}#ds-popup .c-btn.ghost:hover{background: var(--hover)}#ds-popup .c-btn svg{width: 18px;height: 18px}#ds-popup .c-field{display: flex;flex-direction: column;gap: 10px;min-width: 0;position: relative;flex: 1 1 220px}#ds-popup .c-field > label{font: 700 13px/20px var(--font);color: var(--text)}#ds-popup .c-box{height: 50px;border: 1px solid var(--border);border-radius: var(--radius-field);padding: 0 16px;display: flex;align-items: center;gap: 8px;background: var(--surface);transition: border-color .15s,background .15s}#ds-popup .c-box:hover{border-color: var(--border-strong)}#ds-popup .c-box:focus-within{border-color: var(--primary);background: var(--focus-fill)}#ds-popup .c-box input{flex: 1;min-width: 0;border: 0;background: transparent;outline: none;font: 500 16px/24px var(--font);color: var(--text);height: 100%}#ds-popup .c-box input::placeholder{color: var(--placeholder)}#ds-popup .c-field.is-error .c-box{border-color: var(--danger)}#ds-popup .c-err{font: 500 14px/20px var(--font);color: var(--danger)}#ds-popup .c-err:empty{display: none}#ds-popup .c-seg{align-self: flex-start;display: inline-flex;gap: 4px;padding: 4px;border-radius: var(--radius-control);background: var(--hover);max-width: 100%;flex-wrap: wrap}#ds-popup .c-seg button{min-height: 40px;padding: 0 16px;border: 0;border-radius: var(--radius-control);background: transparent;font: 700 13px/20px var(--font);color: var(--text);cursor: pointer}#ds-popup .c-seg button:hover{background: var(--surface)}#ds-popup .c-seg button[aria-pressed=\"true\"]{background: var(--primary);color: var(--on-primary)}#ds-popup .c-dd{position: relative}#ds-popup .c-dd-btn{display: inline-flex;align-items: center;gap: 8px;height: 48px;padding: 0 20px;border: 1px solid var(--border);border-radius: var(--radius-control);background: var(--surface);font: 700 14px/20px var(--font);color: var(--text);cursor: pointer}#ds-popup .c-dd-btn:hover,#ds-popup .c-dd-btn[aria-expanded=\"true\"]{border-color: var(--border-strong);background: var(--hover)}#ds-popup .c-dd-btn svg{width: 18px;height: 18px;transition: transform .2s}#ds-popup .c-dd-btn[aria-expanded=\"true\"] svg{transform: rotate(180deg)}#ds-popup .c-menu{position: absolute;z-index: 5;left: 0;top: calc(100% + 6px);min-width: 100%;padding: 8px;border-radius: var(--radius-overlay);background: var(--surface);box-shadow: 0 0 32px rgb(0 0 0 / .1);display: flex;flex-direction: column;gap: 2px}#ds-popup .c-menu[hidden]{display: none}#ds-popup .c-opt{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 0 16px;border-radius: var(--radius-field);font: 500 16px/24px var(--font);color: var(--text);cursor: pointer;white-space: nowrap}#ds-popup .c-opt:hover,#ds-popup .c-opt.is-active{background: var(--hover)}#ds-popup .c-opt[aria-selected=\"true\"]{font-weight: 700}#ds-popup .c-opt[aria-selected=\"true\"]::after{content: \"\";width: 8px;height: 8px;border-radius: 50%;background: var(--primary)}#ds-popup .c-acc{border: 1px solid var(--border);border-radius: var(--radius-card);overflow: hidden}#ds-popup .c-acc + .c-acc{margin-top: 8px}#ds-popup .c-acc-head{display: flex;width: 100%;align-items: center;justify-content: space-between;gap: 16px;min-height: 56px;padding: 0 12px 0 20px;border: 0;background: var(--surface);font: 700 16px/24px var(--font);color: var(--text);text-align: left;cursor: pointer}#ds-popup .c-acc-head:hover{background: var(--hover)}#ds-popup .c-acc-head span{width: 44px;height: 44px;display: grid;place-items: center;flex: none}#ds-popup .c-acc-head svg{width: 20px;height: 20px}#ds-popup .c-acc-head .v{transition: opacity .2s}#ds-popup .c-acc-head[aria-expanded=\"true\"] .v{opacity: 0}#ds-popup .c-acc-body{padding: 4px 20px 18px;font: 500 16px/26px var(--font);color: var(--text-muted)}#ds-popup .c-acc-body[hidden]{display: none}#ds-popup .c-chips{display: flex;flex-wrap: wrap;gap: 8px}#ds-popup .c-chip{min-height: 36px;padding: 0 14px;border-radius: var(--radius-control);border: 1px solid var(--border);background: var(--surface);font: 700 13px/20px var(--font);color: var(--text);cursor: pointer}#ds-popup .c-chip:hover{border-color: var(--border-strong)}#ds-popup .c-chip[aria-pressed=\"true\"]{background: var(--accent);border-color: var(--accent);color: var(--on-accent)}#ds-popup .r-sw{display: grid;grid-template-columns: repeat(auto-fill,minmax(150px,1fr));gap: 12px}#ds-popup .r-card{background: var(--surface);border-radius: 14px;overflow: hidden;border: 1px solid #e6e6e2}#ds-popup .r-chip{height: 76px;display: flex;align-items: flex-end;justify-content: flex-end;padding: 8px}#ds-popup .r-ratio{font: 700 11px/16px var(--font);padding: 2px 7px;border-radius: 999px;background: rgb(255 255 255 / .92);color: #222;font-variant-numeric: tabular-nums}#ds-popup .r-meta{padding: 10px 12px 12px}#ds-popup .r-name{font: 700 13px/18px var(--font);color: var(--text);overflow-wrap: anywhere}#ds-popup .r-hex{font: 500 12px/18px var(--mono);color: var(--text-muted)}#ds-popup .r-use{font: 500 12px/16px var(--font);color: var(--text-muted);margin-top: 4px}#ds-popup .r-type{display: grid;grid-template-columns: 110px minmax(0,1fr) 160px;gap: 20px;align-items: baseline;padding: 14px 0;border-bottom: 1px solid #ececec}#ds-popup .r-type:last-child{border-bottom: 0}#ds-popup .r-role{font: 700 13px/20px var(--font);color: var(--text)}#ds-popup .r-sample{color: var(--text);font-family: var(--font);overflow-wrap: anywhere;min-width: 0}#ds-popup .r-spec{font: 500 12px/18px var(--mono);color: var(--text-muted);text-align: right;font-variant-numeric: tabular-nums}#ds-popup .r-two{display: grid;grid-template-columns: repeat(2,minmax(0,1fr));gap: 16px}#ds-popup .r-space{display: flex;flex-direction: column;gap: 10px}#ds-popup .r-srow{display: grid;grid-template-columns: 80px minmax(0,1fr);gap: 16px;align-items: center;font: 500 13px/20px var(--font);color: var(--text-muted);font-variant-numeric: tabular-nums}#ds-popup .r-bar{height: 14px;background: var(--primary);border-radius: 3px;max-width: 100%}#ds-popup .r-radii{display: grid;grid-template-columns: repeat(auto-fill,minmax(120px,1fr));gap: 16px}#ds-popup .r-radius{display: flex;flex-direction: column;gap: 10px;font: 500 13px/18px var(--font);color: var(--text-muted)}#ds-popup .r-radius div{height: 64px;border: 2px solid var(--primary);background: var(--focus-fill)}#ds-popup .r-radius strong{color: var(--text);display: block}#ds-popup .r-pairs{display: grid;grid-template-columns: repeat(auto-fill,minmax(240px,1fr));gap: 12px}#ds-popup .r-pair{background: var(--surface);border-radius: 14px;padding: 16px;display: flex;gap: 14px;align-items: center}#ds-popup .r-pchip{width: 56px;height: 56px;border-radius: 12px;display: grid;place-items: center;font: 700 19px/1 var(--font);flex: none;border: 1px solid #e6e6e2}#ds-popup .r-pair b{display: block;font: 700 14px/20px var(--font);color: var(--text)}#ds-popup .r-pair span{font: 500 13px/18px var(--font);color: var(--text-muted)}#ds-popup .r-tag{display: inline-block;font: 700 11px/16px var(--font);padding: 2px 8px;border-radius: 999px;margin-top: 6px}#ds-popup .r-tag.pass{background: #e3f1e6;color: #1f5c2c}#ds-popup .r-tag.large{background: #fdebd9;color: #8a3a00}#ds-popup .r-tag.fail{background: #fbe1e4;color: #8f1124}@media (max-width: 900px){#ds-popup .p-doc{grid-template-columns: minmax(0,1fr);gap: 8px;padding-top: 16px}#ds-popup .p-toc{position: static;flex-direction: row;overflow-x: auto;gap: 6px;padding-bottom: 12px}#ds-popup .p-toc a{white-space: nowrap;background: var(--chip)}#ds-popup .d,#ds-popup .d.w5,#ds-popup .d.w7{grid-column: span 12}#ds-popup .r-two{grid-template-columns: minmax(0,1fr)}#ds-popup .r-type{grid-template-columns: minmax(0,1fr);gap: 4px}#ds-popup .r-spec{text-align: left}}@media (max-width: 560px){#ds-popup .p-inner{padding-left: max(16px,env(safe-area-inset-left,0px));padding-right: max(16px,env(safe-area-inset-right,0px))}#ds-popup .p-bar{padding-left: max(16px,env(safe-area-inset-left,0px));padding-right: max(10px,env(safe-area-inset-right,0px))}#ds-popup .d{padding: 18px}}#ds-popup .p-loading:empty{display: none}#ds-popup .p-error{padding-block: 48px;font: 500 16px/26px var(--font,system-ui);color: var(--muted)}#ds-popup .p-dock[hidden]{display: none}#ds-popup .d-uses b{font-weight: 700;color: var(--text)}";

  var registry = {}, pending = {}, root = null, current = null, lastFocus = null, closeT = null;

  /* ---------- helpers shared with system files ---------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function lum(h) { h = h.replace('#', ''); if (h.length === 3) h = h.replace(/./g, '$&$&'); var c = [0, 2, 4].map(function (i) { var v = parseInt(h.substr(i, 2), 16) / 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; }
  function ratio(a, b) { var x = lum(a), y = lum(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); }
  var ICON = {
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    chev: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/><path class="v" d="M12 5v14"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    out: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>'
  };
  function card(name, uses, w, body) { return '<div class="d' + (w && w !== 6 ? ' w' + w : '') + '"><div class="d-head"><span class="d-name">' + esc(name) + '</span><span class="d-uses">' + uses + '</span></div>' + body + '</div>'; }

  /* Accessible dropdown (listbox) used by starters and available to system files. */
  function dropdown(host, opts) {
    var id = opts.id, options = opts.options, sel = opts.value || 0, act = 0;
    host.classList.add('c-dd');
    host.innerHTML = '<button class="c-dd-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-controls="' + id + '">' + (opts.icon || '') + '<span></span>' + ICON.chev + '</button><div class="c-menu" id="' + id + '" role="listbox" tabindex="-1" aria-label="' + esc(opts.label) + '" hidden></div>';
    var btn = host.firstChild, menu = host.lastChild;
    function render() { btn.querySelector('span').textContent = options[sel]; menu.innerHTML = options.map(function (o, i) { return '<div class="c-opt' + (i === act ? ' is-active' : '') + '" role="option" id="' + id + '-' + i + '" aria-selected="' + (i === sel) + '">' + esc(o) + '</div>'; }).join(''); menu.setAttribute('aria-activedescendant', id + '-' + act); }
    function openM() { act = sel; render(); menu.hidden = false; btn.setAttribute('aria-expanded', 'true'); menu.focus(); }
    function closeM(f) { if (menu.hidden) return; menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); if (f) btn.focus(); }
    function choose(i) { sel = i; closeM(true); render(); if (opts.onChange) opts.onChange(i, options[i]); }
    btn.addEventListener('click', function () { menu.hidden ? openM() : closeM(); });
    menu.addEventListener('click', function (e) { var o = e.target.closest('.c-opt'); if (o) choose(+o.id.split('-').pop()); });
    menu.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { act = Math.min(options.length - 1, act + 1); render(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { act = Math.max(0, act - 1); render(); e.preventDefault(); }
      else if (e.key === 'Enter' || e.key === ' ') { choose(act); e.preventDefault(); }
      else if (e.key === 'Escape') { closeM(true); e.stopPropagation(); }
      else if (e.key === 'Tab') closeM();
    });
    document.addEventListener('click', function (e) { if (!host.contains(e.target)) closeM(); });
    render();
    return { set: function (i) { sel = i; render(); }, get: function () { return sel; } };
  }

  /* Field error helper. */
  function setError(input, msg) {
    var f = input.closest('.c-field'), err = f && f.querySelector('.c-err');
    if (!f) return;
    f.classList.toggle('is-error', !!msg); err.textContent = msg;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (msg) input.setAttribute('aria-describedby', err.id);
  }

  var H = { esc: esc, ratio: ratio, icon: ICON, card: card, dropdown: dropdown, setError: setError };

  /* ---------- starter components (themed from the system's theme) ---------- */
  function starters(id, s) {
    if (!s) return '';
    var h = '', p = 'ds-' + id + '-';
    if (s.button) h += card('Button', 'Primary · With icon · Ghost · Disabled', 6, '<div class="d-row"><button class="c-btn" type="button" data-press>' + esc(s.button.primary) + '</button><button class="c-btn" type="button" data-press>' + ICON.arrow + 'Next</button><button class="c-btn ghost" type="button" data-press>' + esc(s.button.ghost || 'Learn more') + '</button><button class="c-btn" type="button" disabled>Disabled</button></div><p class="d-live" data-out="press">Pressed 0 times</p>');
    if (s.field) h += card('Text field', 'Default · Hover · Focus · Error, with validation', 6, '<form class="d-row" data-starter-form novalidate style="align-items:flex-end"><div class="c-field"><label for="' + p + 'email">' + esc(s.field.label) + '</label><div class="c-box"><input id="' + p + 'email" type="email" placeholder="' + esc(s.field.placeholder) + '" autocomplete="off"></div><span class="c-err" id="' + p + 'email-err"></span></div><button class="c-btn" type="submit">Submit</button></form><p class="d-live" data-out="form"></p>');
    if (s.segmented) h += card('Segmented toggle', esc(s.segmented.label) + ' · one choice at a time', 6, '<div class="c-seg" role="group" aria-label="' + esc(s.segmented.label) + '">' + s.segmented.options.map(function (o, i) { return '<button type="button" aria-pressed="' + (i === 0) + '">' + esc(o) + '</button>'; }).join('') + '</div><p class="d-live" data-out="seg">Selected <strong>' + esc(s.segmented.options[0]) + '</strong></p>');
    if (s.dropdown) h += card('Dropdown', esc(s.dropdown.label) + ' · mouse or arrow keys', 6, '<div data-starter-dd></div><p class="d-live" data-out="dd">Selected <strong>' + esc(s.dropdown.options[0]) + '</strong></p>');
    if (s.chips) h += card('Filter chips', esc(s.chips.label) + ' · select several', 6, '<div class="c-chips" role="group" aria-label="' + esc(s.chips.label) + '">' + s.chips.options.map(function (o) { return '<button class="c-chip" type="button" aria-pressed="false">' + esc(o) + '</button>'; }).join('') + '</div><p class="d-live" data-out="chips">None selected</p>');
    if (s.accordion) h += card('Accordion', 'Collapsed · Expanded', 6, '<div>' + s.accordion.map(function (a, i) { return '<div class="c-acc"><button class="c-acc-head" type="button" aria-expanded="' + (i === 0) + '" aria-controls="' + p + 'acc-' + i + '">' + esc(a[0]) + '<span>' + ICON.plus + '</span></button><div class="c-acc-body" id="' + p + 'acc-' + i + '"' + (i === 0 ? '' : ' hidden') + '>' + esc(a[1]) + '</div></div>'; }).join('') + '</div>');
    return h;
  }
  function wireStarters(id, el, s) {
    if (!s) return;
    var q = function (x) { return el.querySelector(x); }, qa = function (x) { return Array.prototype.slice.call(el.querySelectorAll(x)); };
    var n = 0; qa('[data-press]').forEach(function (b) { b.addEventListener('click', function () { n++; q('[data-out="press"]').textContent = 'Pressed ' + n + (n === 1 ? ' time' : ' times'); }); });
    var form = q('[data-starter-form]');
    if (form) {
      var inp = form.querySelector('input');
      inp.addEventListener('input', function () { setError(inp, ''); });
      form.addEventListener('submit', function (e) { e.preventDefault(); var v = inp.value.trim(), out = q('[data-out="form"]'); if (!v) { setError(inp, 'Enter your email address.'); out.textContent = ''; inp.focus(); return; } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { setError(inp, 'Enter an email address like name@example.com.'); out.textContent = ''; inp.focus(); return; } setError(inp, ''); out.innerHTML = '<strong>Sent.</strong> This is a demo, so nothing was submitted.'; inp.value = ''; });
    }
    var seg = q('.c-seg');
    if (seg) seg.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; seg.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); q('[data-out="seg"]').innerHTML = 'Selected <strong>' + esc(b.textContent) + '</strong>'; });
    var dd = q('[data-starter-dd]');
    if (dd) dropdown(dd, { id: 'ds-' + id + '-dd', label: s.dropdown.label, options: s.dropdown.options, onChange: function (i, v) { q('[data-out="dd"]').innerHTML = 'Selected <strong>' + esc(v) + '</strong>'; } });
    var chips = q('.c-chips');
    if (chips) chips.addEventListener('click', function (e) { var b = e.target.closest('.c-chip'); if (!b) return; b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); var on = qa('.c-chip[aria-pressed="true"]').map(function (x) { return x.textContent; }); q('[data-out="chips"]').innerHTML = on.length ? 'Showing <strong>' + on.map(esc).join(', ') + '</strong>' : 'None selected'; });
    qa('.c-acc-head').forEach(function (h) { h.addEventListener('click', function () { var o = h.getAttribute('aria-expanded') === 'true'; h.setAttribute('aria-expanded', String(!o)); document.getElementById(h.getAttribute('aria-controls')).hidden = o; }); });
  }

  /* ---------- reference sections, built from data ---------- */
  function reference(id, C) {
    var p = 'ds-' + id + '-', h = '';
    if (C.colors) {
      h += '<section class="p-sec" id="' + p + 'color"><h3>Color</h3><p>' + esc(C.colorNote || 'The ratio on each chip is contrast against white.') + '</p>';
      C.colors.forEach(function (g) { h += '<div class="p-label">' + esc(g.label) + '</div><div class="r-sw">' + g.tokens.map(function (t) { return '<div class="r-card"><div class="r-chip" style="background:' + esc(t[1]) + '"><span class="r-ratio">' + ratio(t[1], '#ffffff').toFixed(2) + ':1</span></div><div class="r-meta"><div class="r-name">' + esc(t[0]) + '</div><div class="r-hex">' + esc(t[1]) + '</div><div class="r-use">' + esc(t[2] || '') + '</div></div></div>'; }).join('') + '</div>'; });
      h += '</section>';
    }
    if (C.type) h += '<section class="p-sec" id="' + p + 'type"><h3>Typography</h3><p>' + esc(C.typeNote || '') + '</p><div class="p-panel">' + C.type.map(function (r) { return '<div class="r-type"><span class="r-role">' + esc(r[0]) + '</span><span class="r-sample" style="font-size:' + r[2] + 'px;line-height:' + r[3] + 'px;font-weight:' + r[1] + '">' + esc(r[6]) + '</span><span class="r-spec">D ' + r[2] + '/' + r[3] + ' · M ' + r[4] + '/' + r[5] + ' · ' + r[1] + '</span></div>'; }).join('') + '</div></section>';
    if (C.spacing || C.radii) h += '<section class="p-sec" id="' + p + 'space"><h3>Spacing &amp; radius</h3><p>' + esc(C.spacingNote || '') + '</p><div class="r-two"><div class="p-panel"><div class="r-space">' + (C.spacing || []).map(function (n) { return '<div class="r-srow"><span>space-' + n + '</span><div class="r-bar" style="width:' + n * 3 + 'px"></div></div>'; }).join('') + '</div></div><div class="p-panel"><div class="r-radii">' + (C.radii || []).map(function (r) { return '<div class="r-radius"><div style="border-radius:' + esc(r[1]) + '"></div><span><strong>' + esc(r[0]) + '</strong>' + esc(r[1]) + ' · ' + esc(r[2]) + '</span></div>'; }).join('') + '</div></div></div></section>';
    if (C.pairs) h += '<section class="p-sec" id="' + p + 'a11y"><h3>Accessibility</h3><p>' + esc(C.a11yNote || 'Ratios and WCAG AA verdicts are computed from the colors. Source colors stay exact; failing pairs carry a usage limit.') + '</p><div class="r-pairs">' + C.pairs.map(function (q) { var r = ratio(q[1], q[2]), v = r >= 4.5 ? ['pass', 'Any text'] : r >= 3 ? ['large', 'Large text and icons only'] : ['fail', 'Decoration or hints only']; return '<div class="r-pair"><span class="r-pchip" style="background:' + esc(q[2]) + ';color:' + esc(q[1]) + '">' + esc(q[3] || 'Aa') + '</span><div><b>' + esc(q[0]) + '</b><span>' + r.toFixed(2) + ':1</span><br><span class="r-tag ' + v[0] + '">' + (q[4] ? esc(q[4]) : v[1]) + '</span></div></div>'; }).join('') + '</div></section>';
    return h;
  }

  /* ---------- shell ---------- */
  function ensureRoot() {
    if (root) return root;
    var st = document.createElement('style'); st.id = 'ds-popup-css'; st.textContent = CSS; document.head.appendChild(st);
    root = document.createElement('div');
    root.id = 'ds-popup'; root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-hidden', 'true'); root.setAttribute('aria-labelledby', 'ds-popup-title');
    root.innerHTML = '<div class="p-scrim" data-close></div><div class="p-sheet"><header class="p-bar"><h2 id="ds-popup-title"></h2><button class="p-x" type="button" data-close aria-label="Close design system">' + ICON.x + '</button></header><div class="p-scroll"></div><div class="p-dock" hidden><a class="p-cta" target="_blank" rel="noopener"><span></span>' + ICON.out + '</a></div><div class="p-loading" role="status" aria-live="polite"></div></div>';
    document.body.appendChild(root);
    root.querySelectorAll('[data-close]').forEach(function (b) { b.addEventListener('click', close); });
    root.querySelector('.p-scroll').addEventListener('scroll', syncToc, { passive: true });
    return root;
  }

  function themeVars(t) {
    var m = { font: t.font, primary: t.primary, 'primary-hover': t.primaryHover, 'on-primary': t.onPrimary, accent: t.accent, 'on-accent': t.onAccent, danger: t.danger, surface: t.surface, hover: t.hover, 'focus-fill': t.focusFill, text: t.text, 'text-muted': t.textMuted, placeholder: t.placeholder, border: t.border, 'border-strong': t.borderStrong, disabled: t.disabled, 'disabled-ink': t.disabledInk, cta: t.cta, 'on-cta': t.onCta, 'radius-control': t.radiusControl, 'radius-field': t.radiusField, 'radius-card': t.radiusCard, 'radius-overlay': t.radiusOverlay };
    return Object.keys(m).filter(function (k) { return m[k] != null; }).map(function (k) { return '--' + k + ':' + m[k]; }).join(';');
  }

  var built = {};
  function buildSystem(id) {
    if (built[id]) return built[id];
    var C = registry[id], p = 'ds-' + id + '-';
    if (C.fontUrl && !document.querySelector('link[data-ds-font="' + id + '"]')) { var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = C.fontUrl; l.setAttribute('data-ds-font', id); document.head.appendChild(l); }
    if (C.css) { var s = document.createElement('style'); s.setAttribute('data-ds-css', id); s.textContent = C.css; document.head.appendChild(s); }
    var custom = C.components ? C.components.html : '';
    var toc = [['comp', 'Components']].concat(C.colors ? [['color', 'Color']] : [], C.type ? [['type', 'Typography']] : [], (C.spacing || C.radii) ? [['space', 'Spacing &amp; radius']] : [], C.pairs ? [['a11y', 'Accessibility']] : []);
    var el = document.createElement('div');
    el.className = 'p-system'; el.setAttribute('data-ds', id); el.setAttribute('style', themeVars(C.theme || {}));
    el.innerHTML = '<div class="p-inner"><div class="p-doc"><nav class="p-toc" aria-label="Sections">' + toc.map(function (t, i) { return '<a href="#' + p + t[0] + '"' + (i === 0 ? ' class="is-active"' : '') + '>' + t[1] + '</a>'; }).join('') + '</nav><div><section class="p-sec" id="' + p + 'comp"><h3>Components</h3><p>' + esc(C.intro || 'Every component below works. Content is sample data.') + '</p><div class="d-grid">' + custom + starters(id, C.starters) + '</div></section>' + reference(id, C) + '</div></div></div>';
    el.querySelectorAll('.p-toc a').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); var sc = root.querySelector('.p-scroll'); sc.scrollTo({ top: el.querySelector(a.getAttribute('href')).offsetTop - 16, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }); });
    built[id] = el;
    return el;
  }

  function syncToc() {
    if (!current) return;
    var el = built[current], sc = root.querySelector('.p-scroll');
    var links = Array.prototype.slice.call(el.querySelectorAll('.p-toc a')), cur = links[0];
    links.forEach(function (a) { if (el.querySelector(a.getAttribute('href')).offsetTop - 80 <= sc.scrollTop) cur = a; });
    links.forEach(function (a) { a.classList.toggle('is-active', a === cur); });
  }

  /* ---------- loading system files ---------- */
  function load(id) {
    if (registry[id]) return Promise.resolve(registry[id]);
    if (pending[id]) return pending[id];
    pending[id] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = BASE + 'systems/' + encodeURIComponent(id) + '.js' + (VERSION ? '?' + VERSION : '');
      s.async = true;
      s.onload = function () { registry[id] ? resolve(registry[id]) : reject(new Error('systems/' + id + '.js did not register')); };
      s.onerror = function () { reject(new Error('Could not load systems/' + id + '.js')); };
      document.head.appendChild(s);
    });
    pending[id].catch(function () { delete pending[id]; });
    return pending[id];
  }

  /* ---------- open / close ---------- */
  function open(id) {
    ensureRoot();
    clearTimeout(closeT);
    if (!root.classList.contains('is-open')) lastFocus = document.activeElement;
    var loading = root.querySelector('.p-loading');
    root.querySelector('#ds-popup-title').textContent = 'Loading design system…';
    root.classList.remove('is-closing'); root.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(function () { root.classList.add('is-open'); root.querySelector('.p-x').focus({ preventScroll: true }); });
    load(id).then(function (C) {
      var el = buildSystem(id), sc = root.querySelector('.p-scroll');
      loading.textContent = '';
      if (current !== id) {
        sc.innerHTML = ''; sc.appendChild(el);
        if (!el.getAttribute('data-ready')) { el.setAttribute('data-ready', '1'); wireStarters(id, el, C.starters); if (C.components && C.components.init) C.components.init(el, H); }
        current = id;
      }
      sc.scrollTop = 0;
      root.querySelector('#ds-popup-title').textContent = C.name;
      root.querySelector('.p-x').setAttribute('aria-label', 'Close ' + C.name);
      var dock = root.querySelector('.p-dock'), cta = root.querySelector('.p-cta');
      if (C.cta && C.cta.url) { dock.hidden = false; cta.href = C.cta.url; cta.querySelector('span').textContent = C.cta.label || 'View prototype'; } else dock.hidden = true;
      root.setAttribute('style', themeVars(C.theme || {}));
    }).catch(function (err) {
      root.querySelector('#ds-popup-title').textContent = 'Design system unavailable';
      root.querySelector('.p-scroll').innerHTML = '<div class="p-inner"><p class="p-error">This design system could not be loaded. Check your connection and try again.</p></div>';
      current = null;
      if (window.console) console.warn('[DSPopup]', err.message);
    });
  }

  function close(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!root || !root.classList.contains('is-open')) return;
    root.classList.remove('is-open'); root.classList.add('is-closing'); root.setAttribute('aria-hidden', 'true');
    closeT = setTimeout(function () { root.classList.remove('is-closing'); document.documentElement.style.overflow = ''; }, 600);
    if (history.replaceState && /#ds-|#design-system/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  function idFromHref(href) {
    if (!href) return null;
    var m = href.match(/#ds-([a-z0-9_-]+)$/i);
    if (m) return m[1].toLowerCase();
    if (/#design-system$/.test(href) && DEFAULT_ID) return DEFAULT_ID;
    return null;
  }

  /* Capture phase: runs before Webflow interactions such as a Page Out animation on the trigger. */
  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    var t = e.target.closest('[data-ds-open], a[href*="#ds-"], a[href$="#design-system"]');
    if (!t || (root && root.contains(t))) return;
    var id = t.getAttribute('data-ds-open') || idFromHref(t.getAttribute('href'));
    if (!id) return;
    var href = t.getAttribute('href') || '';
    var samePage = !/^https?:|^\//.test(href) || href.split('#')[0] === '' || href.split('#')[0].replace(/\/$/, '') === location.pathname.replace(/\/$/, '');
    if (t.hasAttribute('data-ds-open') || samePage) { e.preventDefault(); e.stopPropagation(); open(id); }
  }, true);

  document.addEventListener('keydown', function (e) {
    if (!root || !root.classList.contains('is-open')) return;
    if (e.key === 'Escape') { close(e); return; }
    if (e.key === 'Tab') {
      var f = Array.prototype.filter.call(root.querySelectorAll('a[href], button:not([disabled]), input, [tabindex="0"]'), function (x) { return x.offsetParent !== null && x.tabIndex > -1; });
      var a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
  });

  function fromHash() { var id = idFromHref(location.hash); if (id) open(id); }
  window.addEventListener('hashchange', fromHash);

  window.DSPopup = {
    register: function (id, config) { registry[id] = config; },
    open: open, close: close, helpers: H
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fromHash); else fromHash();
})();

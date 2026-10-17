/* Big Blue Bus — City of Santa Monica. Opens with href="#ds-bbb". */
DSPopup.register('bbb', {
  name: 'Big Blue Bus Design System',
  intro: 'Every component below works. Search the routes, pick one, switch direction and day, open a stop and choose a departure. All routes, stops and times here are sample data, not live service.',
  cta: { label: 'View prototype', url: 'https://vsenses55.github.io/city-santa-monica-prototype/' },
  fontUrl: 'https://fonts.googleapis.com/css2?family=Urbanist:wght@500;700&display=swap',

  theme: {
    font: '"Urbanist", system-ui, -apple-system, "Segoe UI", sans-serif',
    primary: '#005eb8', primaryHover: '#337ec6', onPrimary: '#ffffff',
    accent: '#009ca4', onAccent: '#ffffff', danger: '#d11242',
    surface: '#ffffff', hover: '#f2f2f2', focusFill: '#ccdff1',
    text: '#2d2d2d', textMuted: '#707070', placeholder: '#979797',
    border: '#d6d6d6', borderStrong: '#707070', disabled: '#f1f2f3', disabledInk: '#c3c3c3',
    cta: '#2ad2c9', onCta: '#0d2b2a',
    radiusControl: '999px', radiusField: '15px', radiusCard: '16px', radiusOverlay: '24px'
  },

  colors: [
    { label: 'Action & identity', tokens: [['interactive-primary', '#005EB8', 'Buttons, links, selected states'], ['interactive-primary-hover', '#337EC6', 'Hover where the component uses it'], ['data-route-indicator', '#009CA4', 'Route badges'], ['status-alert', '#FE5000', 'Alert indicators'], ['status-danger', '#D11242', 'Field errors']] },
    { label: 'Surfaces', tokens: [['surface-default', '#FFFFFF', 'Cards, fields, canvas'], ['surface-subtle', '#F8F8F8', 'Idle filters, menu items'], ['surface-muted', '#F3F3F3', 'Schedule panels'], ['surface-control', '#F0F0F0', 'Time chips, toggles'], ['interactive-form-focused', '#CCDFF1', 'Entered field, selected route']] },
    { label: 'Type & borders', tokens: [['type-heading', '#333333', 'Headings'], ['type-strong', '#2D2D2D', 'Labels, route names'], ['type-body', '#707070', 'Body copy'], ['type-placeholder', '#979797', 'Placeholder hints only'], ['border-default', '#D6D6D6', 'Card and field borders'], ['border-high-contrast', '#707070', 'Hover outlines, 3:1 boundaries']] },
    { label: 'Logo artwork only', tokens: [['brand-logo-ink', '#302E2C', 'Logo ink'], ['brand-logo-aqua', '#2AD2C9', 'Logo aqua, never text'], ['brand-logo-gold', '#FFB81C', 'Logo gold, never text']] }
  ],
  colorNote: 'Semantic tokens from the Figma Colors variables. Blue carries every primary action, teal marks route identity, and orange is reserved for warnings. The ratio on each chip is contrast against white.',

  typeNote: 'Urbanist at Medium (500) and Bold (700), replacing Santa Monica Sharp at the same weights. Eleven roles with Desktop and Mobile modes.',
  type: [
    ['display', 700, 48, 48, 48, 48, 'Ride Big Blue Bus'], ['title', 700, 40, 48, 40, 48, 'Routes'],
    ['page', 700, 33, 40, 28, 40, 'Santa Monica Blvd'], ['section', 700, 28, 32, 23, 32, 'Service Alerts'],
    ['subsection', 700, 23, 32, 23, 32, 'Upcoming departures'], ['heading', 700, 19, 20, 19, 20, 'Trip Planner'],
    ['strong', 700, 19, 24, 16, 24, 'Downtown Santa Monica'], ['body', 500, 16, 26, 16, 24, 'Plan your trip, check schedules and see service alerts.'],
    ['small', 500, 14, 20, 14, 20, 'Ocean Park Blvd & Main St'], ['label', 700, 13, 20, 13, 20, 'FROM'],
    ['caption', 500, 11, 16, 11, 16, 'Times shown are scheduled, not live.']
  ],

  spacing: [2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80],
  spacingNote: 'A 2–80px spacing scale where the token number is the value. Recipes: label to field 12, between alerts 16, card padding 24, between sections 32.',
  radii: [['radius-time', '6px', 'time chips'], ['radius-badge', '12px', 'route badges'], ['radius-field', '15px', 'fields'], ['radius-card', '16px', 'cards'], ['radius-overlay', '24px', 'menus'], ['radius-pill', '999px', 'buttons']],

  a11yNote: 'Targets WCAG AA. Source colors stay exact; the pairs below carry usage limits instead of being re-tinted. Every control above has a 44px hit area and a visible focus ring.',
  pairs: [
    ['White on blue', '#ffffff', '#005eb8', 'Aa'],
    ['White on teal', '#ffffff', '#009ca4', '12', 'Bold 19px+ numerals'],
    ['White on hover blue', '#ffffff', '#337ec6', 'Aa', 'Bold 19px+ only · button hover misses'],
    ['Orange on white', '#fe5000', '#ffffff', '!', 'Indicator with text'],
    ['Placeholder on white', '#979797', '#ffffff', 'Aa', 'Hints only'],
    ['Body on white', '#707070', '#ffffff', 'Aa']
  ],

  starters: false,
  css: "#ds-popup [data-ds=\"bbb\"]{--bbb-font:\"Urbanist\",system-ui,-apple-system,\"Segoe UI\",sans-serif;--surface:#ffffff;--surface-subtle:#f8f8f8;--surface-control:#f0f0f0;--surface-disabled:#f1f2f3;--primary:#005eb8;--primary-hover:#337ec6;--form-focused:#ccdff1;--hover-neutral:#f2f2f2;--type-heading:#333333;--type-primary:#000000;--type-strong:#2d2d2d;--type-body:#707070;--type-placeholder:#979797;--on-color:#ffffff;--border:#d6d6d6;--border-divider:#d0cece;--border-control:#d3d3d3;--border-hc:#707070;--icon-disabled:#c3c3c3;--alert:#fe5000;--danger:#d11242;--route:#009ca4;--overlay-shadow:0 0 32px 0 rgb(0 0 0 / .1)}#ds-popup [data-ds=\"bbb\"] .b-btn{font: 700 16px/24px var(--bbb-font);display: inline-flex;align-items: center;justify-content: center;gap: 8px;min-height: 44px;padding: 0 24px;border: 0;border-radius: 999px;background: var(--primary);color: var(--on-color);cursor: pointer;transition: background .15s,transform .1s}#ds-popup [data-ds=\"bbb\"] .b-btn:hover{background: var(--primary-hover)}#ds-popup [data-ds=\"bbb\"] .b-btn:active{transform: scale(.97)}#ds-popup [data-ds=\"bbb\"] .b-btn:disabled{background: var(--surface-disabled);color: var(--icon-disabled);cursor: not-allowed;transform: none}#ds-popup [data-ds=\"bbb\"] .b-btn svg{width: 18px;height: 18px}#ds-popup [data-ds=\"bbb\"] .b-btn.block{width: 100%}#ds-popup [data-ds=\"bbb\"] .stage{display: flex;flex-wrap: wrap;gap: 12px;align-items: center}#ds-popup [data-ds=\"bbb\"] .b-field{display: flex;flex-direction: column;gap: 12px;min-width: 0;position: relative}#ds-popup [data-ds=\"bbb\"] .b-field>label{font: 700 13px/20px var(--bbb-font);color: var(--type-strong)}#ds-popup [data-ds=\"bbb\"] .b-box{height: 50px;border: 1px solid var(--border);border-radius: 15px;padding: 0 16px;display: flex;align-items: center;gap: 8px;background: var(--surface);transition: border-color .15s,background .15s}#ds-popup [data-ds=\"bbb\"] .b-box:hover{border-color: var(--border-hc)}#ds-popup [data-ds=\"bbb\"] .b-box:focus-within{border-color: var(--primary);background: var(--form-focused)}#ds-popup [data-ds=\"bbb\"] .b-box input{flex: 1;min-width: 0;border: 0;background: transparent;outline: none;font: 500 16px/24px var(--bbb-font);color: var(--type-strong);height: 100%}#ds-popup [data-ds=\"bbb\"] .b-box input::placeholder{color: var(--type-placeholder)}#ds-popup [data-ds=\"bbb\"] .b-box svg{width: 20px;height: 20px;color: #7d7d7d;flex: none}#ds-popup [data-ds=\"bbb\"] .b-field.is-error .b-box{border-color: var(--danger)}#ds-popup [data-ds=\"bbb\"] .b-err{font: 500 14px/20px var(--bbb-font);color: var(--danger)}#ds-popup [data-ds=\"bbb\"] .b-err:empty{display: none}#ds-popup [data-ds=\"bbb\"] .b-box .b-btn{min-height: 36px;padding: 0 16px;margin-right: -8px;font-size: 14px}#ds-popup [data-ds=\"bbb\"] .b-menu{position: absolute;z-index: 5;left: 0;top: calc(100% + 6px);min-width: 100%;padding: 8px;border-radius: 24px;background: var(--surface);box-shadow: var(--overlay-shadow);display: flex;flex-direction: column;gap: 2px;max-height: 260px;overflow-y: auto}#ds-popup [data-ds=\"bbb\"] .b-menu[hidden]{display: none}#ds-popup [data-ds=\"bbb\"] .b-opt{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 0 16px;border-radius: 15px;background: var(--surface-subtle);font: 500 16px/24px var(--bbb-font);color: var(--type-strong);cursor: pointer;white-space: nowrap}#ds-popup [data-ds=\"bbb\"] .b-opt:hover,#ds-popup [data-ds=\"bbb\"] .b-opt.is-active{background: var(--hover-neutral)}#ds-popup [data-ds=\"bbb\"] .b-opt[aria-selected=\"true\"]{font-weight: 700}#ds-popup [data-ds=\"bbb\"] .b-opt[aria-selected=\"true\"]::after{content: \"\";width: 8px;height: 8px;border-radius: 50%;background: var(--primary)}#ds-popup [data-ds=\"bbb\"] .filters{display: flex;flex-wrap: wrap;gap: 10px;align-items: center}#ds-popup [data-ds=\"bbb\"] .dd{position: relative}#ds-popup [data-ds=\"bbb\"] .b-filter{display: inline-flex;align-items: center;gap: 8px;height: 48px;padding: 0 20px;border: 1px solid var(--border-control);border-radius: 999px;background: var(--surface-subtle);font: 700 13px/20px var(--bbb-font);color: var(--type-strong);cursor: pointer;transition: background .15s,border-color .15s}#ds-popup [data-ds=\"bbb\"] .b-filter:hover,#ds-popup [data-ds=\"bbb\"] .b-filter[aria-expanded=\"true\"]{background: var(--hover-neutral);border-color: var(--border-hc)}#ds-popup [data-ds=\"bbb\"] .b-filter svg{width: 18px;height: 18px;transition: transform .2s}#ds-popup [data-ds=\"bbb\"] .b-filter[aria-expanded=\"true\"] svg.chev{transform: rotate(180deg)}#ds-popup [data-ds=\"bbb\"] .b-toggle{display: inline-flex;gap: 4px;padding: 4px;border-radius: 999px;background: var(--surface-control);max-width: 100%}#ds-popup [data-ds=\"bbb\"] .b-tog{display: inline-flex;align-items: center;gap: 8px;min-height: 40px;padding: 0 16px;border: 0;border-radius: 999px;background: transparent;font: 700 13px/20px var(--bbb-font);color: var(--type-strong);cursor: pointer}#ds-popup [data-ds=\"bbb\"] .b-tog:hover{background: var(--hover-neutral)}#ds-popup [data-ds=\"bbb\"] .b-tog[aria-pressed=\"true\"]{background: var(--primary);color: var(--on-color)}#ds-popup [data-ds=\"bbb\"] .b-badge{display: inline-grid;place-items: center;min-width: 44px;height: 44px;padding: 0 8px;border-radius: 12px;background: var(--route);color: var(--on-color);font: 700 19px/20px var(--bbb-font);flex: none;transition: background .15s}#ds-popup [data-ds=\"bbb\"] .b-badge.sm{min-width: 32px;height: 32px;padding: 0 6px}#ds-popup [data-ds=\"bbb\"] .route-list{display: flex;flex-direction: column;gap: 8px}#ds-popup [data-ds=\"bbb\"] .b-route{display: flex;gap: 16px;align-items: center;width: 100%;padding: 12px 16px;border-radius: 16px;border: 1px solid var(--border);background: var(--surface);text-align: left;cursor: pointer;transition: background .15s,border-color .15s}#ds-popup [data-ds=\"bbb\"] .b-route:hover{background: var(--hover-neutral)}#ds-popup [data-ds=\"bbb\"] .b-route:hover .b-badge{background: var(--primary)}#ds-popup [data-ds=\"bbb\"] .b-route[aria-pressed=\"true\"]{border-color: var(--primary);background: var(--form-focused)}#ds-popup [data-ds=\"bbb\"] .b-route .rt b{display: block;font: 700 19px/24px var(--bbb-font);color: var(--type-strong)}#ds-popup [data-ds=\"bbb\"] .b-route .rt>span{font: 500 14px/20px var(--bbb-font);color: var(--type-body)}#ds-popup [data-ds=\"bbb\"] .empty{font: 500 14px/20px var(--bbb-font);color: var(--type-body);padding: 12px 4px}#ds-popup [data-ds=\"bbb\"] .rtitle{display: flex;align-items: center;gap: 12px}#ds-popup [data-ds=\"bbb\"] .rtitle .rt b{font: 700 23px/32px var(--bbb-font);color: var(--type-heading)}#ds-popup [data-ds=\"bbb\"] .rtitle .rt>span{display: block;font: 500 14px/20px var(--bbb-font);color: var(--type-body)}#ds-popup [data-ds=\"bbb\"] .acc{border: 1px solid var(--border);border-radius: 16px;overflow: hidden}#ds-popup [data-ds=\"bbb\"] .acc + .acc{margin-top: 8px}#ds-popup [data-ds=\"bbb\"] .acc__head{display: flex;width: 100%;align-items: center;justify-content: space-between;gap: 16px;min-height: 56px;padding: 0 12px 0 20px;border: 0;background: var(--surface);font: 700 16px/24px var(--bbb-font);color: var(--type-strong);text-align: left;cursor: pointer}#ds-popup [data-ds=\"bbb\"] .acc__head:hover{background: var(--hover-neutral)}#ds-popup [data-ds=\"bbb\"] .acc__icon{width: 44px;height: 44px;display: grid;place-items: center;flex: none;color: #333}#ds-popup [data-ds=\"bbb\"] .acc__icon svg{width: 20px;height: 20px}#ds-popup [data-ds=\"bbb\"] .acc__icon .v{transition: opacity .2s}#ds-popup [data-ds=\"bbb\"] .acc__head[aria-expanded=\"true\"] .acc__icon .v{opacity: 0}#ds-popup [data-ds=\"bbb\"] .acc__body{padding: 4px 20px 18px;border-top: 1px solid var(--border-divider)}#ds-popup [data-ds=\"bbb\"] .acc__body[hidden]{display: none}#ds-popup [data-ds=\"bbb\"] .times{display: flex;gap: 6px;flex-wrap: wrap;margin-top: 12px}#ds-popup [data-ds=\"bbb\"] .b-time{display: inline-grid;place-items: center;min-height: 32px;min-width: 56px;padding: 0 8px;border: 0;border-radius: 6px;background: var(--surface-control);font: 700 14px/20px var(--bbb-font);color: var(--type-primary);font-variant-numeric: tabular-nums;cursor: pointer;position: relative}#ds-popup [data-ds=\"bbb\"] .b-time::before{content: \"\";position: absolute;inset: -6px -2px}#ds-popup [data-ds=\"bbb\"] .b-time:hover{background: var(--hover-neutral);box-shadow: inset 0 0 0 1px var(--border-hc)}#ds-popup [data-ds=\"bbb\"] .b-time[aria-pressed=\"true\"]{background: var(--primary);color: var(--on-color);box-shadow: none}#ds-popup [data-ds=\"bbb\"] .xfer{display: flex;gap: 6px;align-items: center;margin-top: 14px;font: 500 13px/20px var(--bbb-font);color: var(--type-body);flex-wrap: wrap}#ds-popup [data-ds=\"bbb\"] .cal{display: flex;flex-direction: column;gap: 8px;max-width: 340px}#ds-popup [data-ds=\"bbb\"] .cal__top{display: flex;align-items: center;justify-content: space-between}#ds-popup [data-ds=\"bbb\"] .cal__top b{font: 700 16px/24px var(--bbb-font);color: var(--type-strong)}#ds-popup [data-ds=\"bbb\"] .cal__nav{display: flex;gap: 4px}#ds-popup [data-ds=\"bbb\"] .cal__nav button{width: 44px;height: 44px;border: 0;border-radius: 12px;background: var(--surface-subtle);cursor: pointer;display: grid;place-items: center}#ds-popup [data-ds=\"bbb\"] .cal__nav button:hover{background: var(--hover-neutral)}#ds-popup [data-ds=\"bbb\"] .cal__nav svg{width: 18px;height: 18px}#ds-popup [data-ds=\"bbb\"] .cal__grid{display: grid;grid-template-columns: repeat(7,minmax(0,44px));gap: 2px}#ds-popup [data-ds=\"bbb\"] .cal__dow{font: 700 11px/16px var(--bbb-font);color: var(--type-body);text-align: center;padding: 4px 0;letter-spacing: .04em}#ds-popup [data-ds=\"bbb\"] .num{height: 44px;border: 0;border-radius: 12px;background: var(--surface);font: 700 16px/24px var(--bbb-font);color: var(--type-strong);cursor: pointer;font-variant-numeric: tabular-nums}#ds-popup [data-ds=\"bbb\"] .num:hover{background: var(--hover-neutral)}#ds-popup [data-ds=\"bbb\"] .num[aria-selected=\"true\"]{background: var(--primary);color: var(--on-color)}#ds-popup [data-ds=\"bbb\"] .num.out{color: var(--icon-disabled)}#ds-popup [data-ds=\"bbb\"] .alerts{display: grid;grid-template-columns: repeat(2,minmax(0,1fr));gap: 16px}#ds-popup [data-ds=\"bbb\"] .b-alert{display: flex;gap: 16px;padding: 24px;border: 1px solid var(--border);border-radius: 16px;background: var(--surface);text-align: left;cursor: pointer;transition: background .15s;width: 100%}#ds-popup [data-ds=\"bbb\"] .b-alert:hover{background: var(--hover-neutral)}#ds-popup [data-ds=\"bbb\"] .b-alert i{width: 12px;height: 12px;border-radius: 50%;background: var(--alert);flex: none;margin-top: 6px}#ds-popup [data-ds=\"bbb\"] .b-alert b{display: block;font: 700 19px/24px var(--bbb-font);color: var(--type-strong);margin-bottom: 4px}#ds-popup [data-ds=\"bbb\"] .b-alert span{font: 500 16px/26px var(--bbb-font);color: var(--type-body)}#ds-popup [data-ds=\"bbb\"] .b-alert .more{display: block;margin-top: 8px;font: 700 14px/20px var(--bbb-font);color: var(--primary)}@media (max-width: 900px){#ds-popup [data-ds=\"bbb\"] .alerts,#ds-popup [data-ds=\"bbb\"] .two{grid-template-columns: minmax(0,1fr)}}@media (max-width: 560px){#ds-popup [data-ds=\"bbb\"] .b-filter{padding: 0 16px}}#ds-popup [data-ds=\"bbb\"] .demo-form{display:flex;flex-direction:column;gap:16px}",

  components: {
    html: [
      '<div class="d w5"><div class="d-head"><span class="d-name">Routes</span><span class="d-uses"><b>Search Field</b> · <b>Route</b> · <b>Route Indicator</b></span></div>',
      '<div class="b-field"><div class="b-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg><input id="bbb-route-search" type="search" placeholder="Search routes or streets" aria-label="Search routes or streets" autocomplete="off"></div></div>',
      '<div class="route-list" data-k="routes" role="group" aria-label="Routes"></div></div>',
      '<div class="d w7"><div class="d-head"><span class="d-name">Schedule</span><span class="d-uses"><b>Route title indicator</b> · <b>Direction toggle</b> · <b>Day filter</b> · <b>Trips filter</b> · <b>Accordion Set</b> · <b>Time</b></span></div>',
      '<div class="rtitle" data-k="rtitle"></div><div class="b-toggle" role="group" aria-label="Direction" data-k="dir"></div>',
      '<div class="filters"><div class="dd" data-k="day"></div><div class="dd" data-k="trips"></div></div><div data-k="stops"></div><p class="d-live" data-k="pick" aria-live="polite"></p></div>',
      '<div class="d w7"><div class="d-head"><span class="d-name">BBB / Trip Planner</span><span class="d-uses"><b>Text Fields</b> (Default · Hover · Input · Error) · <b>Button</b></span></div>',
      '<form data-k="planner" novalidate class="demo-form">',
      '<div class="b-field"><label for="bbb-tp-from">From</label><div class="b-box"><input id="bbb-tp-from" placeholder="Enter a starting point" autocomplete="off" role="combobox" aria-expanded="false" aria-controls="bbb-tp-from-list" aria-autocomplete="list"></div><div class="b-menu" id="bbb-tp-from-list" role="listbox" hidden></div><span class="b-err" id="bbb-tp-from-err"></span></div>',
      '<div class="b-field"><label for="bbb-tp-to">To</label><div class="b-box"><input id="bbb-tp-to" placeholder="Enter a destination" autocomplete="off" role="combobox" aria-expanded="false" aria-controls="bbb-tp-to-list" aria-autocomplete="list"></div><div class="b-menu" id="bbb-tp-to-list" role="listbox" hidden></div><span class="b-err" id="bbb-tp-to-err"></span></div>',
      '<button class="b-btn block" type="submit">Get Directions</button><p class="d-live" data-k="tp-result" aria-live="polite"></p></form></div>',
      '<div class="d w5"><div class="d-head"><span class="d-name">Date Picker</span><span class="d-uses"><b>Numeric Indicator</b> (Date · Hover · Focused · Inactive)</span></div><div class="cal" data-k="cal"></div><p class="d-live" data-k="cal-status" aria-live="polite"></p></div>',
      '<div class="d w12"><div class="d-head"><span class="d-name">BBB / Service Alerts</span><span class="d-uses"><b>Card_Alerts</b> (Default · Hover) · select a card to read more</span></div><div class="alerts">',
      '<button class="b-alert" type="button" aria-expanded="false"><i aria-hidden="true"></i><span><b>Detour on Main St</b><span>Routes 1 and 8 are detoured between Pico Blvd and Ocean Park Blvd.</span><span class="more" hidden>Sample alert. Buses use 4th St in both directions; stops on Main St between Pico Blvd and Ocean Park Blvd are not served.</span></span></button>',
      '<button class="b-alert" type="button" aria-expanded="false"><i aria-hidden="true"></i><span><b>Stop closed</b><span>The 4th St &amp; Colorado Ave stop is closed. Use 4th St &amp; Broadway.</span><span class="more" hidden>Sample alert. The nearest open stop is one block north at 4th St &amp; Broadway.</span></span></button></div></div>',
      '<div class="d"><div class="d-head"><span class="d-name">Button</span><span class="d-uses">Hover, press and tab to see the states · <b>With Icon</b> True / False</span></div><div class="stage"><button class="b-btn" type="button" data-count>Get Directions</button><button class="b-btn" type="button" data-count><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>Next trip</button><button class="b-btn" type="button" disabled>Disabled</button></div><p class="d-live" data-k="btn-status" aria-live="polite">Pressed 0 times</p></div>',
      '<div class="d"><div class="d-head"><span class="d-name">Subscription Field</span><span class="d-uses">Default · Hover · Entry · with validation</span></div><form data-k="sub" novalidate><div class="b-field"><label for="bbb-sub-email">Get service updates</label><div class="b-box"><input id="bbb-sub-email" type="email" placeholder="Email address" autocomplete="off"><button class="b-btn" type="submit">Subscribe</button></div><span class="b-err" id="bbb-sub-err"></span></div></form><p class="d-live" data-k="sub-status" aria-live="polite"></p></div>'
    ].join(''),

    init: function (root, H) {
      var esc = H.esc;
      var $ = function (k) { return root.querySelector('[data-k="' + k + '"]'); };
      var $$ = function (s, r) { return Array.prototype.slice.call((r || root).querySelectorAll(s)); };
      var SWAP = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M7 7h12l-3-3M17 17H5l3 3"/></svg>';
      var ROUTES = [
        { n: '1', name: 'Santa Monica Blvd', streets: 'Main St · Santa Monica Blvd', dirs: ['To Downtown Santa Monica', 'To Westwood'], stops: ['4th St & Broadway', 'Santa Monica Blvd & 14th St', 'Santa Monica Blvd & Bundy Dr'], xfer: ['2', '7'], start: 312, head: 12 },
        { n: '2', name: 'Wilshire Blvd', streets: 'Wilshire Blvd · Ocean Ave', dirs: ['To Ocean Ave', 'To Westwood'], stops: ['Ocean Ave & Wilshire Blvd', 'Wilshire Blvd & 14th St', 'Wilshire Blvd & Barrington Ave'], xfer: ['1', 'R10'], start: 325, head: 15 },
        { n: '7', name: 'Pico Blvd', streets: 'Pico Blvd · Rimpau', dirs: ['To Downtown Santa Monica', 'To Rimpau'], stops: ['Pico Blvd & 4th St', 'Pico Blvd & 17th St', 'Pico Blvd & Centinela Ave'], xfer: ['1', '8'], start: 318, head: 10 },
        { n: '8', name: 'Ocean Park Blvd', streets: 'Ocean Park Blvd · Main St', dirs: ['To Main St', 'To Westwood'], stops: ['Main St & Ocean Park Blvd', 'Ocean Park Blvd & 14th St', 'Ocean Park Blvd & Bundy Dr'], xfer: ['7'], start: 340, head: 20 },
        { n: 'R10', name: 'Rapid 10', streets: 'Santa Monica Fwy · Downtown LA', dirs: ['To Downtown LA', 'To Downtown Santa Monica'], stops: ['4th St & Colorado Ave', 'Lincoln Blvd & Olympic Blvd', '7th St & Flower St'], xfer: ['1', '2'], start: 330, head: 18 }
      ];
      var DAYS = ['Weekday', 'Saturday', 'Sunday'], TRIPS = ['Morning', 'Afternoon', 'Evening'];
      var STOPS = []; ROUTES.forEach(function (r) { r.stops.forEach(function (s) { if (STOPS.indexOf(s) < 0) STOPS.push(s); }); });
      var state = { route: 0, dir: 0, day: 0, trips: 0, open: 0, picked: null };
      function fmt(m) { var h = Math.floor(m / 60) % 24, mm = m % 60; return (h % 12 || 12) + ':' + (mm < 10 ? '0' : '') + mm + (h < 12 ? 'a' : 'p'); }
      function times(r, idx) {
        var head = r.head * [1, 1.5, 2][state.day], from = [360, 720, 1020][state.trips], out = [];
        var t = r.start + (state.dir ? (r.stops.length - 1 - idx) * 7 : idx * 7) + state.dir * 4;
        while (t < from) t += head;
        for (var i = 0; i < 6; i++) { out.push(Math.round(t)); t += head; }
        return out;
      }

      /* Routes */
      var search = root.querySelector('#bbb-route-search'), list = $('routes');
      function renderRoutes() {
        var q = search.value.trim().toLowerCase();
        var hits = ROUTES.map(function (r, i) { return [r, i]; }).filter(function (p) { var r = p[0]; return !q || (r.n + ' ' + r.name + ' ' + r.streets + ' ' + r.stops.join(' ')).toLowerCase().indexOf(q) > -1; });
        list.innerHTML = hits.length ? hits.map(function (p) { var r = p[0]; return '<button class="b-route" type="button" data-i="' + p[1] + '" aria-pressed="' + (p[1] === state.route) + '"><span class="b-badge">' + r.n + '</span><span class="rt"><b>' + esc(r.name) + '</b><span>' + esc(r.streets) + '</span></span></button>'; }).join('') : '<p class="empty">No routes match “' + esc(search.value) + '”. Try a street name such as Pico.</p>';
      }
      search.addEventListener('input', renderRoutes);
      list.addEventListener('click', function (e) { var b = e.target.closest('.b-route'); if (!b) return; state.route = +b.getAttribute('data-i'); state.dir = 0; state.open = 0; state.picked = null; renderRoutes(); renderSchedule(); });

      /* Schedule */
      var dayDD = H.dropdown($('day'), { id: 'bbb-day', label: 'Service day', options: DAYS, icon: H.icon.cal, onChange: function (i) { state.day = i; state.picked = null; renderSchedule(); } });
      H.dropdown($('trips'), { id: 'bbb-trips', label: 'Trips', options: TRIPS, onChange: function (i) { state.trips = i; state.picked = null; renderSchedule(); } });
      function renderSchedule() {
        var r = ROUTES[state.route];
        $('rtitle').innerHTML = '<span class="b-badge">' + r.n + '</span><span class="rt"><b>' + esc(r.name) + '</b><span>' + esc(r.dirs[state.dir]) + '</span></span>';
        $('dir').innerHTML = r.dirs.map(function (d, i) { return '<button class="b-tog" type="button" data-dir="' + i + '" aria-pressed="' + (i === state.dir) + '">' + (i === state.dir ? SWAP : '') + esc(d) + '</button>'; }).join('');
        var order = state.dir ? r.stops.slice().reverse() : r.stops;
        $('stops').innerHTML = order.map(function (s, k) {
          var idx = r.stops.indexOf(s), open = k === state.open, bid = 'bbb-acc-' + k;
          return '<div class="acc"><button class="acc__head" type="button" aria-expanded="' + open + '" aria-controls="' + bid + '" data-acc="' + k + '">' + esc(s) + '<span class="acc__icon">' + H.icon.plus + '</span></button>' +
            '<div class="acc__body" id="' + bid + '"' + (open ? '' : ' hidden') + '><div class="times" role="group" aria-label="Departures from ' + esc(s) + '">' +
            times(r, idx).map(function (t) { var key = s + '|' + t; return '<button class="b-time" type="button" data-key="' + esc(key) + '" aria-pressed="' + (state.picked === key) + '">' + fmt(t) + '</button>'; }).join('') +
            '</div><div class="xfer">Transfers<span style="display:flex;gap:4px">' + r.xfer.map(function (x) { return '<span class="b-badge sm">' + x + '</span>'; }).join('') + '</span></div></div></div>';
        }).join('');
        var st = $('pick');
        if (state.picked) { var p = state.picked.split('|'); st.innerHTML = 'Selected <strong>' + fmt(+p[1]) + '</strong> from ' + esc(p[0]) + ' · ' + DAYS[state.day] + ' sample schedule'; }
        else st.textContent = 'Choose a departure time to select it.';
      }
      $('dir').addEventListener('click', function (e) { var b = e.target.closest('.b-tog'); if (!b) return; state.dir = +b.getAttribute('data-dir'); state.open = 0; state.picked = null; renderSchedule(); $('dir').querySelector('[aria-pressed="true"]').focus(); });
      $('stops').addEventListener('click', function (e) {
        var h = e.target.closest('.acc__head');
        if (h) { var k = +h.getAttribute('data-acc'); state.open = state.open === k ? -1 : k; renderSchedule(); $('stops').querySelector('[data-acc="' + k + '"]').focus(); return; }
        var t = e.target.closest('.b-time');
        if (t) { var key = t.getAttribute('data-key'); state.picked = state.picked === key ? null : key; renderSchedule(); var nt = $$('.b-time', $('stops')).filter(function (x) { return x.getAttribute('data-key') === key; })[0]; if (nt) nt.focus(); }
      });

      /* Date picker */
      var now = new Date(), view = new Date(now.getFullYear(), now.getMonth(), 1), sel = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      function renderCal() {
        var y = view.getFullYear(), m = view.getMonth(), first = new Date(y, m, 1).getDay(), dim = new Date(y, m + 1, 0).getDate(), prevDim = new Date(y, m, 0).getDate();
        var html = '<div class="cal__top"><b>' + view.toLocaleString('en-US', { month: 'long', year: 'numeric' }) + '</b><span class="cal__nav"><button type="button" data-step="-1" aria-label="Previous month"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg></button><button type="button" data-step="1" aria-label="Next month"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></button></span></div><div class="cal__grid" role="grid" aria-label="Choose a date">';
        ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach(function (d) { html += '<span class="cal__dow" aria-hidden="true">' + d + '</span>'; });
        for (var i = 0; i < first; i++) html += '<button class="num out" type="button" tabindex="-1" data-off="-1" data-d="' + (prevDim - first + 1 + i) + '">' + (prevDim - first + 1 + i) + '</button>';
        for (var d = 1; d <= dim; d++) { var on = sel.getFullYear() === y && sel.getMonth() === m && sel.getDate() === d; html += '<button class="num" type="button" role="gridcell" aria-selected="' + on + '" data-off="0" data-d="' + d + '" aria-label="' + new Date(y, m, d).toDateString() + '">' + d + '</button>'; }
        $('cal').innerHTML = html + '</div>';
        var dow = sel.getDay();
        $('cal-status').innerHTML = '<strong>' + sel.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) + '</strong> · schedule set to ' + DAYS[dow === 0 ? 2 : dow === 6 ? 1 : 0];
      }
      $('cal').addEventListener('click', function (e) {
        var s = e.target.closest('[data-step]'); if (s) { view = new Date(view.getFullYear(), view.getMonth() + +s.getAttribute('data-step'), 1); renderCal(); return; }
        var n = e.target.closest('.num'); if (!n) return;
        sel = new Date(view.getFullYear(), view.getMonth() + +n.getAttribute('data-off'), +n.getAttribute('data-d'));
        if (+n.getAttribute('data-off')) view = new Date(sel.getFullYear(), sel.getMonth(), 1);
        var dow = sel.getDay(); state.day = dow === 0 ? 2 : dow === 6 ? 1 : 0; state.picked = null;
        renderCal(); dayDD.set(state.day); renderSchedule();
      });

      /* Trip planner */
      function setErr(input, msg) { var f = input.closest('.b-field'), err = f.querySelector('.b-err'); f.classList.toggle('is-error', !!msg); err.textContent = msg; input.setAttribute('aria-invalid', msg ? 'true' : 'false'); if (msg) input.setAttribute('aria-describedby', err.id); }
      function combo(input, menu) {
        var act = -1, items = [];
        function show() { var q = input.value.trim().toLowerCase(); items = STOPS.filter(function (s) { return q && s.toLowerCase().indexOf(q) > -1; }).slice(0, 6); act = -1; menu.innerHTML = items.map(function (s, i) { return '<div class="b-opt" role="option" id="' + menu.id + '-' + i + '" aria-selected="false">' + esc(s) + '</div>'; }).join(''); menu.hidden = !items.length; input.setAttribute('aria-expanded', String(!menu.hidden)); }
        function hide() { menu.hidden = true; input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant'); }
        function pick(i) { input.value = items[i]; hide(); setErr(input, ''); }
        input.addEventListener('input', function () { show(); setErr(input, ''); });
        input.addEventListener('focus', show);
        input.addEventListener('keydown', function (e) {
          if (menu.hidden) return;
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { act = (act + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length; $$('.b-opt', menu).forEach(function (o, i) { o.classList.toggle('is-active', i === act); }); input.setAttribute('aria-activedescendant', menu.id + '-' + act); e.preventDefault(); }
          else if (e.key === 'Enter' && act > -1) { pick(act); e.preventDefault(); }
          else if (e.key === 'Escape') { hide(); e.stopPropagation(); }
        });
        menu.addEventListener('mousedown', function (e) { var o = e.target.closest('.b-opt'); if (o) { e.preventDefault(); pick(+o.id.split('-').pop()); } });
        input.addEventListener('blur', function () { setTimeout(hide, 120); });
      }
      var from = root.querySelector('#bbb-tp-from'), to = root.querySelector('#bbb-tp-to');
      combo(from, root.querySelector('#bbb-tp-from-list')); combo(to, root.querySelector('#bbb-tp-to-list'));
      function check(input, emptyMsg) { var v = input.value.trim(); if (!v) { setErr(input, emptyMsg); return false; } if (STOPS.indexOf(v) < 0) { setErr(input, 'Choose a stop from the list. Start typing a street, such as “Pico”.'); return false; } setErr(input, ''); return true; }
      $('planner').addEventListener('submit', function (e) {
        e.preventDefault();
        var a = check(from, 'Enter a starting point.'), b = check(to, 'Enter a destination.'), out = $('tp-result');
        if (!(a && b)) { out.textContent = ''; (a ? to : from).focus(); return; }
        if (from.value === to.value) { setErr(to, 'Choose a destination different from your starting point.'); out.textContent = ''; to.focus(); return; }
        var ra = ROUTES.filter(function (r) { return r.stops.indexOf(from.value) > -1 && r.stops.indexOf(to.value) > -1; })[0];
        out.innerHTML = ra ? 'Sample result: take <strong>Route ' + ra.n + '</strong> from ' + esc(from.value) + ' to ' + esc(to.value) + '.' : 'Sample result: these stops are on different routes. Transfer where the routes meet.';
      });

      /* Alerts, buttons, subscription */
      $$('.b-alert').forEach(function (b) { b.addEventListener('click', function () { var m = b.querySelector('.more'), o = b.getAttribute('aria-expanded') === 'true'; b.setAttribute('aria-expanded', String(!o)); m.hidden = o; }); });
      var presses = 0;
      $$('[data-count]').forEach(function (b) { b.addEventListener('click', function () { presses++; $('btn-status').textContent = 'Pressed ' + presses + (presses === 1 ? ' time' : ' times'); }); });
      var email = root.querySelector('#bbb-sub-email');
      email.addEventListener('input', function () { setErr(email, ''); });
      $('sub').addEventListener('submit', function (e) {
        e.preventDefault();
        var v = email.value.trim(), out = $('sub-status');
        if (!v) { setErr(email, 'Enter your email address.'); out.textContent = ''; email.focus(); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { setErr(email, 'Enter an email address like name@example.com.'); out.textContent = ''; email.focus(); return; }
        setErr(email, ''); out.innerHTML = '<strong>Subscribed.</strong> This is a demo, so nothing was sent.'; email.value = '';
      });

      renderRoutes(); renderSchedule(); renderCal();
    }
  }
});

/* Paramount VX (UX Redesign 2023) — virtual event platform for Paramount Pictures' Virtual Showcase featuring "Rumble". Opens with href="#ds-paramount".
   Built from the paramount-vx-platform repo (Vsenses55/paramount-vx-platform): the prototype's :root tokens (taken from the Figma
   variables of "Paramount VX | UX Redesign 2023"), its styles and the data-component names that match the Figma components.
   Icons and backgrounds in systems/paramount/ (backgrounds resized for the web). Copy, room names, chat messages and prompts are from
   the build; the countdown and the Q&A, chat and help desk entries you make are sample data and nothing is sent. */
(function () {
  var SRC = (document.currentScript && document.currentScript.src) || '';
  var IMG = SRC.replace(/[^/]*$/, '') + 'paramount/';
  var esc = DSPopup.helpers.esc;
  function img(n, cls, alt) { return '<img src="' + IMG + n + '" alt="' + (alt || '') + '"' + (cls ? ' class="' + cls + '"' : '') + ' draggable="false">'; }
  function svg(n, cls, alt) { return img(n + '.svg', cls, alt); }
  function reduced() { return matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function popupOpen() { return !!document.querySelector('#ds-popup.is-open'); }
  function qa(el, s) { return Array.prototype.slice.call(el.querySelectorAll(s)); }

  /* Two-state icon toggle: swaps the Figma On/Off export and keeps aria-pressed in sync. */
  function setToggle(btn, on) {
    btn.setAttribute('aria-pressed', String(on));
    var i = btn.querySelector('img[data-on]'); if (i) i.src = IMG + (on ? i.getAttribute('data-on') : i.getAttribute('data-off')) + '.svg';
  }
  function toggleImg(on, off, cls) { return '<img src="' + IMG + off + '.svg" data-on="' + on + '" data-off="' + off + '" alt="" draggable="false"' + (cls ? ' class="' + cls + '"' : '') + '>'; }

  /* Radio group with roving focus: arrow keys move and select, like a native radio set. */
  function radioGroup(group, onChange) {
    var opts = qa(group, '[role="radio"]');
    function pick(o, focus) {
      opts.forEach(function (x) { x.setAttribute('aria-checked', String(x === o)); x.tabIndex = x === o ? 0 : -1; });
      if (focus) o.focus();
      if (onChange) onChange(o);
    }
    var cur = opts.filter(function (o) { return o.getAttribute('aria-checked') === 'true'; })[0];
    opts.forEach(function (o) {
      o.tabIndex = o === (cur || opts[0]) ? 0 : -1;
      o.addEventListener('click', function () { pick(o); });
      o.addEventListener('keydown', function (e) {
        var i = opts.indexOf(o), n = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (n) { e.preventDefault(); pick(opts[(i + n + opts.length) % opts.length], true); }
      });
    });
  }

  /* Tabs with roving focus (Home/End and arrows). */
  function tabs(list, onChange) {
    var t = qa(list, '[role="tab"]');
    function sel(x, focus) { t.forEach(function (y) { y.setAttribute('aria-selected', String(y === x)); y.tabIndex = y === x ? 0 : -1; }); if (focus) x.focus(); onChange(t.indexOf(x)); }
    t.forEach(function (x, i) {
      x.tabIndex = i === 0 ? 0 : -1;
      x.addEventListener('click', function () { sel(x); });
      x.addEventListener('keydown', function (e) {
        var k = e.key, n = k === 'ArrowRight' ? (i + 1) % t.length : k === 'ArrowLeft' ? (i - 1 + t.length) % t.length : k === 'Home' ? 0 : k === 'End' ? t.length - 1 : -1;
        if (n > -1) { e.preventDefault(); sel(t[n], true); }
      });
    });
    return function (i) { sel(t[i]); };
  }

  /* Prototype dropdown: label + current value, chevron flips, list of menu items. Full keyboard support. */
  function dropdown(dd, onChange) {
    var btn = dd.querySelector('.pvx-dd__btn'), list = dd.querySelector('.pvx-dd__list'), items = qa(list, '[role="option"]');
    function isOpen() { return !list.hidden; }
    function open(focusSel) {
      list.hidden = false; btn.setAttribute('aria-expanded', 'true');
      if (focusSel) (items.filter(function (i) { return i.getAttribute('aria-selected') === 'true'; })[0] || items[0]).focus();
    }
    function close(focus) { if (!isOpen()) return; list.hidden = true; btn.setAttribute('aria-expanded', 'false'); if (focus) btn.focus(); }
    function choose(it) {
      items.forEach(function (x) { x.setAttribute('aria-selected', String(x === it)); x.setAttribute('aria-current', String(x === it)); });
      btn.querySelector('small').textContent = it.textContent; close(true);
      if (onChange) onChange(it.textContent);
    }
    btn.addEventListener('click', function () { isOpen() ? close() : open(false); });
    btn.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(true); } });
    items.forEach(function (it, i) {
      it.tabIndex = -1;
      it.addEventListener('click', function () { choose(it); });
      it.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') { e.preventDefault(); items[Math.min(items.length - 1, i + 1)].focus(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); items[Math.max(0, i - 1)].focus(); }
        else if (e.key === 'Home') { e.preventDefault(); items[0].focus(); }
        else if (e.key === 'End') { e.preventDefault(); items[items.length - 1].focus(); }
        else if (e.key === 'Tab') close();
      });
    });
    dd.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen()) { e.stopPropagation(); close(true); } });
    document.addEventListener('click', function (e) { if (!dd.contains(e.target)) close(); });
    return { close: close };
  }

  /* Form entry: label floats up and turns blue while focused or filled. */
  function entry(label) {
    var input = label.querySelector('input');
    function sync() { label.classList.toggle('is-active', document.activeElement === input || input.value.trim() !== ''); }
    input.addEventListener('focus', sync); input.addEventListener('blur', sync);
    input.addEventListener('input', function () { label.classList.remove('is-error'); input.setAttribute('aria-invalid', 'false'); sync(); });
    return sync;
  }
  function entryHTML(id, label, type, ac, desc) {
    return '<label class="pvx-entry" for="' + id + '"><span class="pvx-entry__label"><span>' + esc(label) + '</span></span><input id="' + id + '" name="' + id + '" type="' + (type || 'text') + '" autocomplete="' + (ac || 'off') + '"' + (desc ? ' aria-describedby="' + desc + '"' : '') + ' spellcheck="false"></label>';
  }
  function stage(cls, bg, inner, label) { return '<div class="pvx-stage' + (bg ? ' has-bg' : '') + (cls ? ' ' + cls : '') + '"' + (bg ? ' style="--bg:url(\'' + IMG + bg + '\')"' : '') + (label ? ' role="group" aria-label="' + esc(label) + '"' : '') + '>' + inner + '</div>'; }

  /* One countdown for every demo: TIME UNTIL SHOW, from the build's 08:39. Runs only while the popup is open. */
  var clock = { left: 8 * 60 + 39, paused: false, subs: [] };
  setInterval(function () {
    if (!popupOpen() || clock.paused || clock.left <= 0) return;
    clock.left--; clock.subs.forEach(function (f) { f(clock.left); });
  }, 1000);
  function countHTML(cls) { return '<div class="pvx-count' + (cls ? ' ' + cls : '') + '" data-count><div class="pvx-count__label">TIME UNTIL SHOW</div><div class="pvx-count__time"><span data-m>08</span><span class="pvx-count__colon" aria-hidden="true"><i></i><i></i></span><span data-s>39</span></div></div>'; }
  function wireCount(el, extra) {
    var m = el.querySelector('[data-m]'), s = el.querySelector('[data-s]');
    function paint(t) { m.textContent = String(Math.floor(t / 60)).padStart(2, '0'); s.textContent = String(t % 60).padStart(2, '0'); el.setAttribute('aria-label', 'Time until show ' + Math.floor(t / 60) + ' minutes ' + (t % 60) + ' seconds'); if (extra) extra(t); }
    clock.subs.push(paint); paint(clock.left); return paint;
  }

  /* Scene toast + flash (shared by the scene demo). */
  function toaster(t) { var tm; return function (msg) { t.textContent = msg; t.classList.add('show'); clearTimeout(tm); tm = setTimeout(function () { t.classList.remove('show'); }, 2200); }; }
  function flash(f) { f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); }

  var ENVS = { bronson: 'Bronson Plaza', lobby: 'Lobby', theater: 'Theater' };

  var C = {
    name: 'Paramount VX Design System',
    intro: 'The components of the Paramount Pictures Virtual Showcase, working with mouse, touch and keyboard. Copy is from the build; the countdown and anything you type are sample data, and nothing is sent.',
    cta: { label: 'View prototype', url: 'https://vsenses55.github.io/paramount-vx-platform/' },

    theme: {
      font: '"Montserrat", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
      primary: '#0064ff', primaryHover: '#0b1c62', onPrimary: '#ffffff',
      accent: '#0b1c62', onAccent: '#ffffff',
      danger: '#ff5a6a',
      surface: '#ffffff', hover: 'rgba(0,100,255,.1)', focusFill: '#ffffff',
      text: '#00091c', textMuted: '#44557c', placeholder: '#8893ad',
      border: '#ced2e0', borderStrong: '#6d77a1',
      disabled: '#ced2e0', disabledInk: '#6d77a1',
      cta: '#0064ff', onCta: '#ffffff',
      radiusControl: '100px', radiusField: '8px', radiusCard: '16px', radiusOverlay: '8px'
    },

    colorNote: 'From the prototype tokens, which come from the Figma variables. The platform is dark: panels sit on Blue Charcoal at 95% over the 3D environments. The ratio on each chip is contrast against white.',
    colors: [
      { label: 'Surfaces', tokens: [['Blue Charcoal', '#00091C', 'Stage, panels (95%), menu bar, emoji set'], ['Header', '#010715', 'Settings header, dropdown list'], ['Icon BG', '#0D1424', 'Icon button and QA button fill'], ['Page', '#03070F', 'Area around the stage'], ['Madison', '#0B1C62', 'On-boarding, segmented track, Q&A entry, camera preview'], ['Message surface', '#001233', 'Blue Ribbon at 10% over Blue Charcoal: incoming bubbles, help desk field']] },
      { label: 'Interactive', tokens: [['Blue Ribbon', '#0064FF', 'Selected, hover, focus, outgoing bubbles, attach'], ['East Bay', '#44557C', 'Inactive tabs, dots, rules, scrollbar'], ['Inactive', '#3D53B2', 'Unselected segmented options']] },
      { label: 'Text', tokens: [['White', '#FFFFFF', 'Primary text and outlines'], ['Label', '#DEDEDE', 'Setting rows, panel headers'], ['Muted', '#8893AD', 'Body copy in panels, legal'], ['Placeholder', '#435172', 'Field hints'], ['Prompt heading', '#E7EAED', 'Prompt title']] },
      { label: 'Lines & feedback', tokens: [['Line 300', '#6D77A1', 'Form entry rule'], ['Line 100', '#CED2E0', 'Form entry rule on hover and focus'], ['Error', '#FF5A6A', 'Form entry rule in error'], ['Error text', '#FF8A96', 'Error labels and hints']] }
    ],

    typeNote: 'Montserrat throughout, from Regular (400) to Black (900), mostly uppercase. The platform is a fixed 1920 × 1080 stage that scales down as a whole, so the sizes do not change on mobile.',
    type: [
      ['Title', 800, 28, 28, 28, 28, 'PLEASE SIGN-IN BELOW'],
      ['Prompt', 800, 22, 24, 22, 24, 'MEET RUMBLE'],
      ['Countdown', 700, 22, 27, 22, 27, '08:39'],
      ['Panel title', 700, 16, 20, 16, 20, 'Q&A'],
      ['Button white', 700, 16, 20, 16, 20, 'ENTER HERE'],
      ['Intro', 400, 16, 28, 16, 28, 'Welcome to the Paramount Pictures Virtual Showcase Experience featuring “Rumble”!'],
      ['Button / name', 900, 12, 16, 12, 16, 'SUBMIT'],
      ['Menu item', 700, 12, 15, 12, 15, 'BRONSON'],
      ['Row label', 600, 12, 16, 12, 16, 'ADJUST QUALITY'],
      ['Body', 400, 12, 16, 12, 16, 'It’s in the lobby, right next to Rumble. Look for the camera icon.'],
      ['Helper', 500, 12, 15, 12, 15, 'Use the arrow keys on your keyboard to move forward, backward, left and right.'],
      ['Small', 600, 10, 14, 10, 14, 'FaceTime HD Camera'],
      ['Overline', 700, 10, 12, 10, 12, 'TIME UNTIL SHOW'],
      ['Legal', 500, 9, 19, 9, 19, '* By selecting to appear on camera and clicking submit, I acknowledge that I may be recorded.']
    ],

    spacing: [4, 8, 10, 12, 16, 20, 22, 24, 32, 40, 48],
    spacingNote: 'Values from the prototype in px. Recipes: HUD inset 40 from the stage edges, 10 between icon buttons, 20 between settings rows, 22 inside the chat panel, 24 between form entries, 48 between the entries and the button.',
    radii: [['segmented', '2px', 'Quality and perspective'], ['dropdown', '4px', 'Dropdown list'], ['panel', '8px', 'Panels, prompt, Q&A entry'], ['chat', '16px', 'Chat panel, icon buttons'], ['menu bar', '20px', 'Comms menu'], ['controller', '30px', 'Direction controller'], ['pill', '100px', 'Buttons, toast']],

    a11yNote: 'Ratios and WCAG AA verdicts are computed from the colors. Source colors stay exact; failing pairs carry a usage limit. Translucent surfaces are measured at their composite over Blue Charcoal.',
    pairs: [
      ['White on Blue Charcoal', '#ffffff', '#00091c', 'Aa'],
      ['White on Blue Ribbon (outgoing, attach)', '#ffffff', '#0064ff', 'Aa'],
      ['Blue Ribbon on white (Button White)', '#0064ff', '#ffffff', 'Aa'],
      ['Blue Ribbon on Blue Charcoal (selected, SEND)', '#0064ff', '#00091c', 'Aa'],
      ['White on message surface', '#ffffff', '#001233', 'Aa'],
      ['White on Madison', '#ffffff', '#0b1c62', 'Aa'],
      ['Label on Header', '#dedede', '#010715', 'Aa'],
      ['Muted on Blue Charcoal (body, legal)', '#8893ad', '#00091c', 'Aa'],
      ['East Bay on Header (inactive tab)', '#44557c', '#010715', 'Aa'],
      ['Inactive on Blue Charcoal (segmented)', '#3d53b2', '#00091c', 'L'],
      ['Placeholder on message surface', '#435172', '#001233', 'Aa'],
      ['Error text on Blue Charcoal', '#ff8a96', '#00091c', '!'],
      ['Error on white (starter fields)', '#ff5a6a', '#ffffff', '!'],
      ['Prompt heading on Blue Charcoal', '#e7eaed', '#00091c', 'Aa']
    ],

    starters: {
      button: { primary: 'Enter here', ghost: 'Forgot password?' },
      field: { label: 'Email address', placeholder: 'name@studio.com' },
      segmented: { label: 'Perspective', options: ['1st person', '3rd person'] },
      dropdown: { label: 'Languages', options: ['English', 'Español', 'Français', 'Deutsch', 'Português'] },
      accordion: [
        ['What is the Virtual Showcase?', 'Welcome to the Paramount Pictures Virtual Showcase Experience featuring “Rumble”! Here you’ll be able to socialize with the group, engage in Q&A with the cast, and enjoy an exclusive sneak peak at our upcoming film.'],
        ['How do I look around?', 'Click and drag anywhere within the environment to look around. Use the arrow keys on your keyboard to move forward, backward, left and right.']
      ]
    },

    custom: [
      /* ---------------------------------------------------------------- */
      {
        name: 'Buttons',
        uses: 'Button White · Default, Hover  ·  Button Outline · Default, Hover, Disabled  ·  Attach',
        width: 12,
        html: '<div class="pvx-tabs" role="group" aria-label="Preview state"><button type="button" aria-pressed="true" data-st="">Live</button><button type="button" aria-pressed="false" data-st="is-hover">Hover</button><button type="button" aria-pressed="false" data-st="disabled">Disabled</button></div>' +
          stage('is-buttons', '', '<div class="pvx-btngrid"><button type="button" class="pvx-white" data-b="Enter here"><span>Enter here</span>' + svg('btn-arrow') + '</button>' +
            '<button type="button" class="pvx-outline" data-b="Send">Send</button>' +
            '<button type="button" class="pvx-attach" data-b="Attach" aria-label="Attach a file">' + svg('icon-attach') + '</button>' +
            '<button type="button" class="pvx-outline" data-b="Take a photo">Take a photo</button><button type="button" class="pvx-outline is-hover" data-b="Go to theater" data-keep>Go to theater</button></div>' +
            '<p class="pvx-cap">The prompt pairs a default and a highlighted outline button</p>') +
          '<p class="d-live" aria-live="polite" data-o>Hover, press, or use Tab and Enter. “Live” shows real states; the others pin one for touch screens.</p>',
        init: function (el) {
          var out = el.querySelector('[data-o]'), btns = qa(el, '[data-b]'), counts = {};
          qa(el, '[data-st]').forEach(function (b) {
            b.addEventListener('click', function () {
              qa(el, '[data-st]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
              var s = b.getAttribute('data-st');
              btns.forEach(function (x) { if (!x.hasAttribute('data-keep')) x.classList.toggle('is-hover', s === 'is-hover'); x.disabled = s === 'disabled'; });
              out.textContent = s === 'is-hover' ? 'Showing the hover state.' : s === 'disabled' ? 'Showing the disabled state (40% opacity).' : 'Live states restored.';
            });
          });
          btns.forEach(function (b) {
            b.addEventListener('click', function () {
              var k = b.getAttribute('data-b'); counts[k] = (counts[k] || 0) + 1;
              out.innerHTML = '<strong>' + esc(k) + '</strong> pressed ' + counts[k] + (counts[k] === 1 ? ' time.' : ' times.');
            });
          });
        }
      },
      /* ---------------------------------------------------------------- */
      {
        name: 'Environment scene',
        uses: 'Environments · Bronson, Lobby, Theater  ·  Direction Controller · Default, Press  ·  Guide  ·  Button Hotspot · Default, Hover, Selected  ·  Digital Takeaway  ·  Prompt  ·  Countdown',
        width: 12,
        html: '<div class="pvx-scene" data-scene>' +
          '<div class="pvx-look" data-look><div class="pvx-world" data-world>' +
            img('bg-bronson.jpg', 'pvx-bg', 'Bronson Plaza environment').replace('<img', '<img data-env="bronson"') +
            img('bg-lobby.jpg', 'pvx-bg', 'Lobby rotunda with Rumble').replace('<img', '<img data-env="lobby" hidden') +
            img('bg-theater.jpg', 'pvx-bg', 'Theater with live cast Q&A on screen').replace('<img', '<img data-env="theater" hidden') +
            '<button type="button" class="pvx-hotspot" data-hotspot aria-label="Meet Rumble" hidden>' + svg('hotspot-default') + svg('hotspot-hover', 'hs-hover') + svg('hotspot-selected', 'hs-sel') + '</button>' +
            '<button type="button" class="pvx-take" data-take aria-label="Take a photo" hidden>' + svg('takeaway') + '</button>' +
          '</div></div>' +
          '<div class="pvx-tip" data-tip aria-hidden="true">' + svg('tip-ring', 'ring') + svg('tip-hand', 'hand') + '<p>Click and drag anywhere<br>to look around.</p></div>' +
          svg('logo', 'pvx-hud-logo', 'Paramount') + countHTML() +
          '<button type="button" class="pvx-hudbtn pvx-envbtn" data-envbtn aria-pressed="false" aria-expanded="false" aria-controls="pvx-envmenu" aria-label="Change location">' + toggleImg('env-on', 'env-off') + '</button>' +
          '<nav class="pvx-envmenu" id="pvx-envmenu" data-envmenu aria-label="Locations" hidden>' + Object.keys(ENVS).map(function (k) { return '<button type="button" class="pvx-menu-item" data-go="' + k + '" aria-current="' + (k === 'bronson') + '">' + (k === 'bronson' ? 'Bronson' : ENVS[k]) + '</button>'; }).join('') + '</nav>' +
          '<div class="pvx-dc" data-dc role="button" tabindex="0" aria-label="Direction controller: hold and drag, or focus and use the arrow keys to move">' + svg('dc-default', 'dc-default') + svg('dc-press', 'dc-press') + '</div>' +
          '<section class="pvx-prompt" data-prompt role="dialog" aria-modal="false" aria-labelledby="pvx-prompt-t" hidden><h4 id="pvx-prompt-t">Meet Rumble</h4><p>Rumble the monster is the star of our upcoming film. Snap a photo with him, or head to the theater for the sneak peek.</p><div class="pvx-pair"><button type="button" class="pvx-outline" data-pa>Take a photo</button><button type="button" class="pvx-outline is-hover" data-pb>Go to theater</button></div><button type="button" class="pvx-close" data-pclose aria-label="Close">' + svg('close-qa') + '</button></section>' +
          '<div class="pvx-toast" data-toast role="status" aria-live="polite"></div><div class="pvx-flash" data-flash></div><div class="pvx-fade" data-fade></div>' +
          '</div><p class="d-live" aria-live="polite" data-o>You’re in <strong>Bronson Plaza</strong>. Drag the scene to look around, or use the location button to move.</p>',
        init: function (el) {
          var sc = el.querySelector('[data-scene]'), look = el.querySelector('[data-look]'), world = el.querySelector('[data-world]'), tip = el.querySelector('[data-tip]');
          var envBtn = el.querySelector('[data-envbtn]'), menu = el.querySelector('[data-envmenu]'), dc = el.querySelector('[data-dc]'), hs = el.querySelector('[data-hotspot]'), take = el.querySelector('[data-take]');
          var pr = el.querySelector('[data-prompt]'), out = el.querySelector('[data-o]'), toast = toaster(el.querySelector('[data-toast]')), fl = el.querySelector('[data-flash]'), fade = el.querySelector('[data-fade]');
          var st = { env: 'bronson', x: 0, y: 0, z: 1 }, opener = null;
          wireCount(el.querySelector('[data-count]'));
          function apply() {
            var w = sc.clientWidth, h = sc.clientHeight, z = st.z, mx = Math.max(0, (w * (z * 1.12 - 1)) / 2 - 2), my = Math.max(0, (h * (z * 1.12 - 1)) / 2 - 2);
            st.x = Math.max(-mx, Math.min(mx, st.x)); st.y = Math.max(-my, Math.min(my, st.y));
            world.style.transform = 'translate(' + st.x + 'px,' + st.y + 'px) scale(' + z + ')';
          }
          function hideTip() { tip.classList.add('is-hidden'); }
          function setMenu(on) { menu.hidden = !on; setToggle(envBtn, on); envBtn.setAttribute('aria-expanded', String(on)); if (on) qa(menu, '[data-go]').filter(function (b) { return b.getAttribute('aria-current') === 'true'; })[0].focus(); }
          function openPrompt() { opener = document.activeElement; hs.classList.add('is-selected'); pr.hidden = false; pr.querySelector('[data-pa]').focus(); }
          function closePrompt(back) { if (pr.hidden) return; pr.hidden = true; hs.classList.remove('is-selected'); if (back && opener && opener.focus) opener.focus(); }
          function go(env) {
            setMenu(false); closePrompt(false);
            if (env === st.env) return;
            var swap = function () {
              st.env = env; st.x = 0; st.y = 0; st.z = 1; apply();
              qa(world, '[data-env]').forEach(function (i) { i.hidden = i.getAttribute('data-env') !== env; });
              hs.hidden = take.hidden = env !== 'lobby'; dc.hidden = env === 'theater';
              tip.classList.toggle('is-hidden', env !== 'bronson');
              qa(menu, '[data-go]').forEach(function (b) { b.setAttribute('aria-current', String(b.getAttribute('data-go') === env)); });
              out.innerHTML = 'You’re in <strong>' + ENVS[env] + '</strong>.' + (env === 'lobby' ? ' Select the hotspot to meet Rumble, or the camera for a photo.' : env === 'theater' ? ' The screening and live cast Q&A happen here.' : ' Drag the scene to look around.');
              fade.classList.remove('on');
            };
            if (reduced()) return swap();
            fade.classList.add('on'); setTimeout(swap, 350);
          }
          envBtn.addEventListener('click', function () { setMenu(menu.hidden); });
          qa(menu, '[data-go]').forEach(function (b, i, all) {
            b.addEventListener('click', function () { go(b.getAttribute('data-go')); envBtn.focus(); });
            b.addEventListener('keydown', function (e) { var n = { ArrowDown: 1, ArrowUp: -1 }[e.key]; if (n) { e.preventDefault(); all[(i + n + all.length) % all.length].focus(); } });
          });
          sc.addEventListener('keydown', function (e) {
            if (e.key !== 'Escape') return;
            if (!pr.hidden) { e.stopPropagation(); closePrompt(true); }
            else if (!menu.hidden) { e.stopPropagation(); setMenu(false); envBtn.focus(); }
          });
          document.addEventListener('click', function (e) { if (!menu.hidden && !menu.contains(e.target) && !envBtn.contains(e.target)) setMenu(false); });
          /* Look around: drag the world */
          var drag = null;
          look.addEventListener('pointerdown', function (e) {
            if (e.target.closest('button')) return;
            drag = { x: e.clientX, y: e.clientY, px: st.x, py: st.y }; look.classList.add('is-dragging'); look.setPointerCapture(e.pointerId); hideTip(); setMenu(false);
          });
          look.addEventListener('pointermove', function (e) { if (!drag) return; st.x = drag.px + (e.clientX - drag.x) * .5; st.y = drag.py + (e.clientY - drag.y) * .35; apply(); });
          function endDrag() { if (drag) out.innerHTML = 'Looking around <strong>' + ENVS[st.env] + '</strong>.'; drag = null; look.classList.remove('is-dragging'); }
          look.addEventListener('pointerup', endDrag); look.addEventListener('pointercancel', endDrag);
          /* Direction controller: hold and drag, or arrow keys while focused */
          function move(dx, dy) { st.z = Math.max(1, Math.min(1.35, st.z + dy * .05)); st.x -= dx * 40; apply(); hideTip(); }
          var dcd = null, dct = null;
          dc.addEventListener('pointerdown', function (e) {
            dc.classList.add('is-pressed'); dc.setPointerCapture(e.pointerId);
            var r = dc.getBoundingClientRect(); dcd = { cx: r.left + r.width / 2, cy: r.top + r.height / 2, dx: 0, dy: 0 };
            clearInterval(dct); dct = setInterval(function () { if (dcd) move(dcd.dx, dcd.dy); }, 60);
          });
          dc.addEventListener('pointermove', function (e) { if (!dcd) return; dcd.dx = Math.max(-1, Math.min(1, (e.clientX - dcd.cx) / 45)) * .35; dcd.dy = Math.max(-1, Math.min(1, -(e.clientY - dcd.cy) / 45)) * .35; });
          function dcEnd() { if (dcd) out.innerHTML = 'Moved through <strong>' + ENVS[st.env] + '</strong>.'; dc.classList.remove('is-pressed'); dcd = null; clearInterval(dct); }
          dc.addEventListener('pointerup', dcEnd); dc.addEventListener('pointercancel', dcEnd);
          var map = { ArrowUp: [0, 1, 'forward'], ArrowDown: [0, -1, 'backward'], ArrowLeft: [-1, 0, 'left'], ArrowRight: [1, 0, 'right'] };
          dc.addEventListener('keydown', function (e) { var m = map[e.key]; if (!m) return; e.preventDefault(); dc.classList.add('is-pressed'); move(m[0], m[1]); out.innerHTML = 'Moving <strong>' + m[2] + '</strong> in ' + ENVS[st.env] + '.'; });
          dc.addEventListener('keyup', function () { dc.classList.remove('is-pressed'); });
          /* Lobby: hotspot, prompt, digital takeaway */
          hs.addEventListener('click', openPrompt);
          pr.querySelector('[data-pclose]').addEventListener('click', function () { closePrompt(true); });
          pr.querySelector('[data-pa]').addEventListener('click', function () { closePrompt(true); flash(fl); toast('Photo saved to your digital takeaways'); out.innerHTML = '<strong>Photo saved</strong> to your digital takeaways.'; });
          pr.querySelector('[data-pb]').addEventListener('click', function () { go('theater'); envBtn.focus(); });
          take.addEventListener('click', function () { flash(fl); toast('Photo saved to your digital takeaways'); out.innerHTML = '<strong>Photo saved</strong> to your digital takeaways.'; });
          window.addEventListener('resize', apply);
          apply();
        }
      },
      /* ---------------------------------------------------------------- */
      {
        name: 'Sign-in form',
        uses: 'On-boarding · Form Entry (Default, Hover, Active, Error) · Button White · Forgot password',
        width: 6,
        html: stage('', 'bg-bronson.jpg', svg('logo', 'pvx-logo', 'Paramount') +
          '<form class="pvx-signin" novalidate data-f><div class="pvx-entries">' + entryHTML('pvx-user', 'USERNAME', 'text', 'off', 'pvx-signin-hint') + entryHTML('pvx-email', 'EMAIL ADDRESS', 'email', 'off', 'pvx-signin-hint') + '</div>' +
          '<div class="pvx-hint" id="pvx-signin-hint" aria-live="polite" data-h></div>' +
          '<button type="submit" class="pvx-white"><span>Enter here</span>' + svg('btn-arrow') + '</button></form>' +
          '<button type="button" class="pvx-link" data-forgot>Forgot password?</button>') +
          '<p class="d-live" aria-live="polite" data-o>Enter a username and an email address, then press Enter here.</p>',
        init: function (el) {
          var f = el.querySelector('[data-f]'), u = el.querySelector('#pvx-user'), m = el.querySelector('#pvx-email'), hint = el.querySelector('[data-h]'), out = el.querySelector('[data-o]');
          var syncs = qa(el, '.pvx-entry').map(entry);
          f.addEventListener('submit', function (e) {
            e.preventDefault();
            var bad = [];
            if (!u.value.trim()) bad.push(u);
            if (!/^\S+@\S+\.\S+$/.test(m.value.trim())) bad.push(m);
            [u, m].forEach(function (i) { var b = bad.indexOf(i) > -1; i.closest('.pvx-entry').classList.toggle('is-error', b); i.setAttribute('aria-invalid', String(b)); });
            if (bad.length) { hint.textContent = bad[0] === u ? 'Enter a username to continue.' : 'Enter a valid email address, like name@studio.com.'; out.textContent = bad.length === 1 ? '1 entry needs attention.' : '2 entries need attention.'; bad[0].focus(); return; }
            hint.textContent = '';
            out.innerHTML = '<strong>Welcome to Bronson Plaza, ' + esc(u.value.trim()) + '.</strong> This is a demo, so nothing was sent.';
            f.reset(); syncs.forEach(function (s) { s(); });
          });
          el.querySelector('[data-forgot]').addEventListener('click', function () { out.innerHTML = '<strong>Reset password.</strong> We’ll email a reset link to the address on your invite. Check your inbox, then come back to sign in.'; });
        }
      },
      /* ---------------------------------------------------------------- */
      {
        name: 'Help desk panel',
        uses: 'Panel Help Desk · Form Entry · Field · Attach · Button Outline · Close',
        width: 6,
        html: stage('', 'bg-lobby.jpg', '<div class="pvx-stack">' +
          '<section class="pvx-panel pvx-hd" data-panel aria-label="Help desk"><div class="pvx-hd__head">HELP DESK<button type="button" class="pvx-close" data-close aria-label="Close help desk">' + svg('close') + '</button></div>' +
          '<div class="pvx-hd__body"><form novalidate data-f>' + entryHTML('pvx-hd-name', 'NAME', 'text', 'off') + entryHTML('pvx-hd-topic', 'TOPIC', 'text', 'off') +
          '<div class="pvx-field" data-field><textarea id="pvx-hd-msg" placeholder="Describe what you need help with" aria-label="Message" aria-describedby="pvx-hd-file"></textarea></div>' +
          '<div class="pvx-actions"><button type="button" class="pvx-attach" data-attach aria-label="Attach a file">' + svg('icon-attach') + '</button><input type="file" data-file hidden tabindex="-1"><button type="submit" class="pvx-outline">Send</button></div>' +
          '<div class="pvx-file" id="pvx-hd-file" aria-live="polite" data-fn></div></form>' +
          '<div class="pvx-sent" data-sent aria-hidden="true"><h4>Request sent</h4><p>A host will reply in your chat within a few minutes.</p><button type="button" class="pvx-outline" data-again tabindex="-1">New request</button></div></div></section>' +
          '<button type="button" class="pvx-reopen" data-reopen aria-label="Open help desk" aria-hidden="true" tabindex="-1">' + svg('helpdesk-off') + '</button></div>') +
          '<p class="d-live" aria-live="polite" data-o>Describe a problem and press Send. Close collapses the panel to its Help Desk button.</p>',
        init: function (el) {
          var f = el.querySelector('[data-f]'), msg = el.querySelector('#pvx-hd-msg'), field = el.querySelector('[data-field]'), fn = el.querySelector('[data-fn]'), file = el.querySelector('[data-file]'), att = el.querySelector('[data-attach]');
          var sent = el.querySelector('[data-sent]'), again = el.querySelector('[data-again]'), panel = el.querySelector('[data-panel]'), reopen = el.querySelector('[data-reopen]'), out = el.querySelector('[data-o]');
          var syncs = qa(el, '.pvx-entry').map(entry);
          function view(isSent) { f.setAttribute('aria-hidden', String(isSent)); sent.setAttribute('aria-hidden', String(!isSent)); qa(f, 'input:not([data-file]),textarea,button').forEach(function (x) { x.tabIndex = isSent ? -1 : 0; }); again.tabIndex = isSent ? 0 : -1; }
          function show(open) { panel.setAttribute('aria-hidden', String(!open)); reopen.setAttribute('aria-hidden', String(open)); reopen.tabIndex = open ? -1 : 0; qa(panel, 'button,input,textarea').forEach(function (x) { if (!open) { x.setAttribute('data-ti', x.tabIndex); x.tabIndex = -1; } else if (x.hasAttribute('data-ti')) { x.tabIndex = +x.getAttribute('data-ti'); x.removeAttribute('data-ti'); } }); }
          att.addEventListener('click', function () { file.click(); });
          file.addEventListener('change', function () {
            var x = file.files[0], b = att.querySelector('.pvx-badge'); if (b) b.remove();
            fn.classList.remove('is-error'); fn.textContent = x ? 'Attached: ' + x.name : '';
            if (x) { att.insertAdjacentHTML('beforeend', '<span class="pvx-badge" aria-hidden="true">1</span>'); att.setAttribute('aria-label', 'Replace attached file ' + x.name); }
          });
          msg.addEventListener('input', function () { field.classList.remove('is-error'); msg.removeAttribute('aria-invalid'); if (fn.classList.contains('is-error')) { fn.classList.remove('is-error'); fn.textContent = ''; } });
          f.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!msg.value.trim()) { field.classList.add('is-error'); msg.setAttribute('aria-invalid', 'true'); fn.classList.add('is-error'); fn.textContent = 'Add a short message so a host can help.'; out.textContent = 'The message is required.'; msg.focus(); return; }
            view(true); again.focus(); out.innerHTML = '<strong>Request sent.</strong> This is a demo, so nothing was sent.';
          });
          again.addEventListener('click', function () {
            f.reset(); syncs.forEach(function (s) { s(); }); fn.textContent = ''; var b = att.querySelector('.pvx-badge'); if (b) b.remove(); att.setAttribute('aria-label', 'Attach a file');
            view(false); el.querySelector('#pvx-hd-name').focus(); out.textContent = 'Ready for a new request.';
          });
          el.querySelector('[data-close]').addEventListener('click', function () { show(false); reopen.focus(); out.textContent = 'Help desk closed. Its button reopens it.'; });
          reopen.addEventListener('click', function () { show(true); el.querySelector('[data-close]').focus(); out.textContent = 'Help desk open.'; });
          view(false); show(true);
        }
      },
      /* ---------------------------------------------------------------- */
      {
        name: 'HUD icon buttons and comms menu',
        uses: 'Button Settings · Button Help Desk · Button QA · Profile · Icon Help · Button Environments  ·  Menu Comms · BTN Mic, Video, Chat, Emoji (Active, Inactive)',
        width: 7,
        html: stage('', 'bg-bronson.jpg', '<div class="pvx-hud">' +
          '<div class="pvx-hudgroup"><p class="pvx-cap">Top right</p><div class="pvx-hudrow">' +
            '<button type="button" class="pvx-ib" aria-pressed="false" data-t="Settings">' + toggleImg('settings-on', 'settings-off') + '</button>' +
            '<button type="button" class="pvx-ib" aria-pressed="false" data-t="Help desk">' + toggleImg('helpdesk-on', 'helpdesk-off') + '</button>' +
            '<button type="button" class="pvx-qa" aria-pressed="false" data-t="Q&amp;A" aria-label="Q&amp;A"><span aria-hidden="true">QA</span></button>' +
            '<button type="button" class="pvx-profile" data-profile aria-label="Your profile and camera">' + svg('profile-icon') + '</button></div></div>' +
          '<div class="pvx-hudgroup"><p class="pvx-cap">Bottom left</p><div class="pvx-hudrow">' +
            '<button type="button" class="pvx-ib is-short" aria-pressed="false" data-t="Controls overview">' + toggleImg('help-on', 'help-off') + '</button>' +
            '<button type="button" class="pvx-ib is-short" aria-pressed="false" data-t="Environments">' + toggleImg('env-on', 'env-off') + '</button></div></div>' +
          '<div class="pvx-hudgroup"><p class="pvx-cap">Comms menu</p><div class="pvx-menubar" role="toolbar" aria-label="Comms">' +
            '<button type="button" aria-pressed="false" data-c="mic" aria-label="Microphone">' + toggleImg('mic-on', 'mic-off', 't-mic') + '</button>' +
            '<button type="button" aria-pressed="false" data-c="video" aria-label="Camera">' + toggleImg('video-on', 'video-off', 't-video') + '</button>' +
            '<button type="button" aria-pressed="false" data-c="chat" aria-label="Chat">' + toggleImg('chat-on', 'chat-off', 't-chat') + '</button>' +
            '<button type="button" aria-pressed="false" data-c="emoji" aria-label="Reactions">' + toggleImg('emoji-on', 'emoji-off', 't-emoji') + '</button></div></div>' +
          '</div>') +
          '<p class="d-live" aria-live="polite" data-o>Each button toggles between its Figma Active and Inactive states.</p>',
        init: function (el) {
          var out = el.querySelector('[data-o]');
          qa(el, '[data-t]').forEach(function (b) {
            if (!b.getAttribute('aria-label')) b.setAttribute('aria-label', b.getAttribute('data-t'));
            b.addEventListener('click', function () { var on = b.getAttribute('aria-pressed') !== 'true'; setToggle(b, on); out.innerHTML = '<strong>' + esc(b.getAttribute('data-t')) + '</strong> ' + (on ? 'open.' : 'closed.'); });
          });
          var words = { mic: ['Microphone on', 'Microphone muted'], video: ['Camera on', 'Camera off'], chat: ['Chat open', 'Chat closed'], emoji: ['Reactions open', 'Reactions closed'] };
          var bar = qa(el, '[data-c]');
          bar.forEach(function (b, i) {
            b.addEventListener('click', function () { var on = b.getAttribute('aria-pressed') !== 'true'; setToggle(b, on); out.innerHTML = '<strong>' + words[b.getAttribute('data-c')][on ? 0 : 1] + '.</strong>'; });
            b.tabIndex = i === 0 ? 0 : -1;
            b.addEventListener('keydown', function (e) { var n = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!n) return; e.preventDefault(); var t = bar[(i + n + bar.length) % bar.length]; bar.forEach(function (x) { x.tabIndex = x === t ? 0 : -1; }); t.focus(); });
          });
          el.querySelector('[data-profile]').addEventListener('click', function () { out.innerHTML = '<strong>Profile</strong> opens Settings on the Camera &amp; Mic tab.'; });
        }
      },
      /* ---------------------------------------------------------------- */
      {
        name: 'Emoji reactions',
        uses: 'Emoji Set · Heart, Thumbs up, Thumbs down, Smile, Clap, Fire',
        width: 5,
        html: stage('', 'bg-theater.jpg', '<div class="pvx-emo" data-area><div class="pvx-emocount" aria-hidden="true"><span>Reactions sent</span><b data-n>0</b></div>' +
          '<div class="pvx-emoset" role="toolbar" aria-orientation="vertical" aria-label="Reactions">' +
          [['heart', 'Heart'], ['up', 'Thumbs up'], ['down', 'Thumbs down'], ['smile', 'Smile'], ['clap', 'Clap'], ['fire', 'Fire']].map(function (e, i) { return '<button type="button" data-emoji="' + e[0] + '" aria-label="' + e[1] + '" tabindex="' + (i ? -1 : 0) + '">' + svg('emoji-' + e[0]) + '</button>'; }).join('') + '</div></div>') +
          '<p class="d-live" aria-live="polite" data-o>Pick a reaction to float it over the stage. Arrow keys move between them.</p>',
        init: function (el) {
          var area = el.querySelector('[data-area]'), set = el.querySelector('.pvx-emoset'), btns = qa(el, '[data-emoji]'), n = 0, out = el.querySelector('[data-o]'), nEl = el.querySelector('[data-n]');
          btns.forEach(function (b, i) {
            b.addEventListener('click', function () {
              n++; nEl.textContent = n; out.innerHTML = 'Sent <strong>' + esc(b.getAttribute('aria-label')) + '</strong>.';
              if (reduced()) return;
              var a = area.getBoundingClientRect(), r = b.getBoundingClientRect();
              for (var k = 0; k < 3; k++) (function (k) {
                setTimeout(function () {
                  var f = document.createElement('div'); f.className = 'pvx-floater';
                  f.style.left = (r.left - a.left - 50 + Math.random() * 30 - 15) + 'px'; f.style.top = (r.top - a.top) + 'px';
                  f.style.setProperty('--dx', (Math.random() * 60 - 30) + 'px');
                  f.innerHTML = b.innerHTML; area.appendChild(f); setTimeout(function () { f.remove(); }, 2300);
                }, k * 140);
              })(k);
            });
            b.addEventListener('keydown', function (e) {
              var d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key], t = e.key === 'Home' ? btns[0] : e.key === 'End' ? btns[btns.length - 1] : d ? btns[(i + d + btns.length) % btns.length] : null;
              if (!t) return; e.preventDefault(); btns.forEach(function (x) { x.tabIndex = x === t ? 0 : -1; }); t.focus();
            });
          });
        }
      },
      /* ---------------------------------------------------------------- */
      {
        name: 'Settings and camera panel',
        uses: 'Panel Settings · Tabs · Radio Buttons (quality) · Button Perspective · Dropdown · Camera preview · Mic levels',
        width: 6,
        html: stage('', 'bg-lobby.jpg', '<div class="pvx-stack" style="min-height:452px;align-items:start">' +
          '<section class="pvx-panel pvx-set" data-panel aria-label="Settings"><div class="pvx-set__head"><div class="pvx-ptabs" role="tablist" aria-label="Settings sections">' +
            '<button type="button" class="pvx-ptab" role="tab" id="pvx-tab-set" aria-controls="pvx-pane-set" aria-selected="true">Settings</button>' +
            '<button type="button" class="pvx-ptab" role="tab" id="pvx-tab-cam" aria-controls="pvx-pane-cam" aria-selected="false">Camera &amp; Mic</button></div>' +
            '<button type="button" class="pvx-close" data-close aria-label="Close settings">' + svg('close-settings') + '</button></div>' +
          '<div class="pvx-panes">' +
            '<div class="pvx-set__body" role="tabpanel" id="pvx-pane-set" aria-labelledby="pvx-tab-set" data-pane>' +
              '<div class="pvx-setrow"><span class="pvx-setrow__label" id="pvx-q-l">Adjust quality</span><div class="pvx-seg is-quality" role="radiogroup" aria-labelledby="pvx-q-l" data-q>' + ['Low', 'Medium', 'High'].map(function (v, i) { return '<button type="button" role="radio" aria-checked="' + (i === 0) + '" aria-label="' + v + '" data-v="' + v + '">' + v[0] + '</button>'; }).join('') + '</div></div>' +
              '<div class="pvx-setrow"><span class="pvx-setrow__label" id="pvx-p-l">Perspective</span><div class="pvx-seg is-persp" role="radiogroup" aria-labelledby="pvx-p-l" data-p>' + ['1st', '3rd'].map(function (v, i) { return '<button type="button" role="radio" aria-checked="' + (i === 1) + '" aria-label="' + v + ' person" data-v="' + v + '">' + v + '</button>'; }).join('') + '</div></div>' +
              dd('Languages', 'English', ['English', 'Español', 'Français', 'Deutsch', 'Português'], 'lang') +
              '<div class="pvx-links"><a href="https://www.paramount.com/privacy" target="_blank" rel="noopener">Privacy policy</a><a href="https://www.paramount.com/terms-of-use" target="_blank" rel="noopener">Terms of use</a></div></div>' +
            '<div role="tabpanel" id="pvx-pane-cam" aria-labelledby="pvx-tab-cam" aria-hidden="true" data-pane><div class="pvx-cam">' +
              '<button type="button" class="pvx-camview" data-cam aria-pressed="false" aria-label="Camera">' + svg('cam-profile') + '<span class="pvx-live" data-live>CAMERA OFF</span></button>' +
              dd('Choose camera', 'FaceTime HD Camera', ['FaceTime HD Camera', 'Logitech C920', 'OBS Virtual Camera'], 'cam') +
              '<button type="button" class="pvx-levels" data-lv aria-pressed="false" aria-label="Test microphone">' + new Array(11).join('<i></i>') + '<span data-lvt>Test mic</span></button>' +
              dd('Choose mic', 'MacBook Pro Microphone', ['MacBook Pro Microphone', 'AirPods Pro', 'Shure MV7'], 'mic') +
            '</div></div></div></section>' +
          '<button type="button" class="pvx-reopen" data-reopen aria-label="Open settings" aria-hidden="true" tabindex="-1" style="align-self:center">' + svg('settings-off') + '</button></div>') +
          '<p class="d-live" aria-live="polite" data-o>Change a setting. Tabs and options also work with the arrow keys.</p>',
        init: function (el) {
          var out = el.querySelector('[data-o]'), panes = qa(el, '[data-pane]'), panel = el.querySelector('[data-panel]'), reopen = el.querySelector('[data-reopen]'), close = el.querySelector('[data-close]');
          var dds = qa(el, '.pvx-dd').map(function (d) { return dropdown(d, function (v) { out.innerHTML = esc(d.querySelector('.pvx-dd__btn > span').firstChild.textContent) + ': <strong>' + esc(v) + '</strong>.'; }); });
          function focusables(p, on) { qa(p, 'button,a').forEach(function (x) { if (x.closest('.pvx-dd__list')) return; if (!on) { if (!x.hasAttribute('data-ti')) x.setAttribute('data-ti', x.tabIndex); x.tabIndex = -1; } else if (x.hasAttribute('data-ti')) { x.tabIndex = +x.getAttribute('data-ti'); x.removeAttribute('data-ti'); } }); }
          tabs(el.querySelector('[role="tablist"]'), function (i) { dds.forEach(function (d) { d.close(); }); panes.forEach(function (p, j) { p.setAttribute('aria-hidden', String(i !== j)); focusables(p, i === j); }); });
          focusables(panes[1], false);
          radioGroup(el.querySelector('[data-q]'), function (o) { out.innerHTML = 'Stream quality: <strong>' + o.getAttribute('data-v') + '</strong>.'; });
          radioGroup(el.querySelector('[data-p]'), function (o) { out.innerHTML = '<strong>' + (o.getAttribute('data-v') === '1st' ? 'First-person' : 'Third-person') + ' view.</strong>'; });
          var cam = el.querySelector('[data-cam]');
          cam.addEventListener('click', function () { var on = cam.getAttribute('aria-pressed') !== 'true'; cam.setAttribute('aria-pressed', String(on)); cam.classList.toggle('is-live', on); el.querySelector('[data-live]').textContent = on ? 'LIVE' : 'CAMERA OFF'; out.innerHTML = '<strong>' + (on ? 'Camera on' : 'Camera off') + '.</strong>'; });
          var lv = el.querySelector('[data-lv]'), bars = qa(lv, 'i'), testing = false;
          lv.addEventListener('click', function () { testing = !testing; lv.setAttribute('aria-pressed', String(testing)); el.querySelector('[data-lvt]').textContent = testing ? 'Testing' : 'Test mic'; out.innerHTML = testing ? '<strong>Mic test on.</strong> The bars show a sample level.' : 'Mic test off.'; if (!testing) bars.forEach(function (b) { b.classList.remove('on'); }); });
          setInterval(function () { if (!testing || !popupOpen()) return; var l = Math.round(3 + Math.random() * 5); bars.forEach(function (b, i) { b.classList.toggle('on', i < l); }); }, 140);
          function show(open) { dds.forEach(function (d) { d.close(); }); panel.setAttribute('aria-hidden', String(!open)); reopen.setAttribute('aria-hidden', String(open)); reopen.tabIndex = open ? -1 : 0; focusables(panel, open); if (open) focusables(panes[panes[0].getAttribute('aria-hidden') === 'true' ? 0 : 1], false); }
          close.addEventListener('click', function () { show(false); reopen.focus(); out.textContent = 'Settings closed. The settings button reopens it.'; });
          reopen.addEventListener('click', function () { show(true); close.focus(); out.textContent = 'Settings open.'; });
        }
      },
      /* ---------------------------------------------------------------- */
      {
        name: 'Chat panel',
        uses: 'Panel Chat · Message Incoming · Message Outgoing · Typing · Write a message · Go to, Chat, Call',
        width: 6,
        html: stage('', 'bg-bronson.jpg', '<div class="pvx-stack">' +
          '<section class="pvx-panel pvx-chat" data-panel aria-label="Chat"><div class="pvx-chat__top"><button type="button" class="pvx-room" data-room aria-label="Switch room, current room Chat Group XYZ">' + svg('arrow-prev') + '<span data-rn>CHAT GROUP XYZ</span></button><button type="button" class="pvx-close" data-close aria-label="Close chat">' + svg('close') + '</button></div>' +
          '<div class="pvx-msgs" data-list role="log" aria-label="Messages" tabindex="0"></div>' +
          '<div class="pvx-write"><form data-f novalidate><input data-in placeholder="WRITE A MESSAGE" autocomplete="off" aria-label="Write a message" maxlength="240"><button type="submit">SEND</button></form><div class="rule"></div></div>' +
          '<div class="pvx-chat__acts"><button type="button" data-a="goto">' + svg('icon-goto') + 'Go to</button><button type="button" data-a="chat">' + svg('icon-chat') + 'Chat</button><button type="button" data-a="call">' + svg('icon-call') + 'Call</button></div></section>' +
          '<button type="button" class="pvx-reopen" data-reopen aria-label="Open chat" aria-hidden="true" tabindex="-1">' + img('chat-off.svg', 'is-small') + '</button></div>') +
          '<p class="d-live" aria-live="polite" data-o>Write a message and press Send. The room name switches rooms.</p>',
        init: function (el) {
          var rooms = {
            'CHAT GROUP XYZ': [
              { who: 'You', when: '6 minutes', text: 'Has anyone found the photo spot yet?', out: true },
              { who: 'Adria Vossen', when: '5 minutes', text: 'It’s in the lobby, right next to Rumble. Look for the camera icon.' },
              { who: 'Marius Ciocirlan', when: '4 minutes', text: 'Grab a picture before the show starts, the line gets long.' },
              { who: 'You', when: '3 minutes', text: 'On my way over now.', out: true },
              { who: 'Adria Vossen', when: '2 minutes', text: 'See you in the theater for the Q&A after!' }
            ],
            'EVERYONE': [
              { who: 'Host', when: '12 minutes', text: 'Welcome to the Paramount Virtual Showcase! The screening starts when the countdown hits zero.' },
              { who: 'Jordan Ellis', when: '7 minutes', text: 'Bronson Plaza looks incredible at this time of day.' },
              { who: 'Priya Raman', when: '3 minutes', text: 'Does anyone know if the cast is joining the Q&A live?' }
            ]
          };
          var replies = ['Love that!', 'Same here, can’t wait for the screening.', 'Ha, agreed.', 'See you at the Q&A!', 'Good call.'];
          var room = 'CHAT GROUP XYZ', list = el.querySelector('[data-list]'), inp = el.querySelector('[data-in]'), out = el.querySelector('[data-o]'), panel = el.querySelector('[data-panel]'), reopen = el.querySelector('[data-reopen]'), closeB = el.querySelector('[data-close]'), roomB = el.querySelector('[data-room]'), timers = [];
          function mh(m) { return '<div class="pvx-msg' + (m.out ? ' is-out' : '') + '"><div class="pvx-msg__meta"><span class="pvx-msg__name">' + esc(m.out ? 'You' : m.who) + '</span><span class="pvx-msg__when">' + esc(m.when) + '</span></div><div class="pvx-msg__bubble">' + esc(m.text) + '</div></div>'; }
          function render() { el.querySelector('[data-rn]').textContent = room; roomB.setAttribute('aria-label', 'Switch room, current room ' + (room === 'EVERYONE' ? 'Everyone' : 'Chat Group XYZ')); list.innerHTML = rooms[room].map(mh).join(''); list.scrollTop = list.scrollHeight; }
          function switchRoom() { timers.forEach(clearTimeout); timers = []; room = room === 'EVERYONE' ? 'CHAT GROUP XYZ' : 'EVERYONE'; render(); out.innerHTML = 'Switched to <strong>' + (room === 'EVERYONE' ? 'Everyone' : 'Chat Group XYZ') + '</strong>.'; }
          render();
          roomB.addEventListener('click', switchRoom);
          el.querySelector('[data-f]').addEventListener('submit', function (e) {
            e.preventDefault();
            var v = inp.value.trim(); if (!v) { out.textContent = 'Write a message first.'; inp.focus(); return; }
            var r = room; rooms[r].push({ who: 'You', when: 'Just now', text: v, out: true }); inp.value = ''; render(); out.innerHTML = '<strong>Sent.</strong> This is a demo, so the reply is sample data.';
            timers.push(setTimeout(function () { if (room !== r) return; list.insertAdjacentHTML('beforeend', '<div class="pvx-msg is-typing"><div class="pvx-msg__meta"><span class="pvx-msg__name">' + (r === 'EVERYONE' ? 'Jordan Ellis' : 'Adria Vossen') + '</span><span class="pvx-msg__when">typing</span></div><div class="pvx-msg__bubble" aria-label="typing"><i></i><i></i><i></i></div></div>'); list.scrollTop = list.scrollHeight; }, 500));
            timers.push(setTimeout(function () { rooms[r].push({ who: r === 'EVERYONE' ? 'Jordan Ellis' : 'Adria Vossen', when: 'Just now', text: replies[Math.floor(Math.random() * replies.length)] }); if (room === r) render(); }, 1900));
          });
          el.querySelector('[data-a="goto"]').addEventListener('click', function () { out.innerHTML = '<strong>Go to</strong> closes chat and opens the locations menu in the build.'; });
          el.querySelector('[data-a="chat"]').addEventListener('click', switchRoom);
          el.querySelector('[data-a="call"]').addEventListener('click', function () { out.innerHTML = '<strong>' + (room === 'EVERYONE' ? 'Calling the host desk…' : 'Calling Chat Group XYZ…') + '</strong>'; });
          function show(open) { panel.setAttribute('aria-hidden', String(!open)); reopen.setAttribute('aria-hidden', String(open)); reopen.tabIndex = open ? -1 : 0; qa(panel, 'button,input,[tabindex]').forEach(function (x) { if (!open) { x.setAttribute('data-ti', x.tabIndex); x.tabIndex = -1; } else if (x.hasAttribute('data-ti')) { x.tabIndex = +x.getAttribute('data-ti'); x.removeAttribute('data-ti'); } }); }
          closeB.addEventListener('click', function () { show(false); reopen.focus(); out.textContent = 'Chat closed. The chat button in the comms menu reopens it.'; });
          reopen.addEventListener('click', function () { show(true); closeB.focus(); out.textContent = 'Chat open.'; });
        }
      },
      /* ---------------------------------------------------------------- */
      {
        name: 'Q&A panel',
        uses: 'Panel Q&A · Entry Field Q&A · Opt-in (radio) · Button Outline · Submitted question',
        width: 6,
        html: stage('', 'bg-theater.jpg', '<div class="pvx-stack">' +
          '<section class="pvx-panel pvx-qap" data-panel aria-label="Q&amp;A"><div class="pvx-qap__head"><h4>Q&amp;A</h4><button type="button" class="pvx-close" data-close aria-label="Close Q&amp;A">' + svg('close-qa') + '</button></div>' +
          '<div class="pvx-qaentry" data-entry><textarea data-t placeholder="Type your question here." aria-label="Your question" aria-describedby="pvx-qa-slot" maxlength="280"></textarea></div>' +
          '<div class="pvx-opts" role="radiogroup" aria-label="How your question is asked" data-opts>' +
            '<button type="button" class="pvx-opt" role="radio" aria-checked="false" data-stage="1"><span class="pvx-opt__dot"></span><span>I would like to appear on stage if my question is chosen.*</span></button>' +
            '<button type="button" class="pvx-opt" role="radio" aria-checked="false"><span class="pvx-opt__dot"></span><span>I prefer the moderator ask my question on my behalf.</span></button></div>' +
          '<button type="button" class="pvx-outline" data-submit>Submit</button>' +
          '<div class="pvx-qaslot" id="pvx-qa-slot" aria-live="polite" data-slot></div>' +
          '<p class="pvx-legal">* By selecting to appear on camera and clicking submit, I acknowledge that: I may be recorded; and I have read and agree to the Terms of Use and acknowledge the data collection and usage practices outlined in the Privacy Policy and any agreement specific to this event.</p></section>' +
          '<button type="button" class="pvx-reopen is-text" data-reopen aria-label="Open Q&amp;A" aria-hidden="true" tabindex="-1"><span aria-hidden="true">QA</span></button></div>') +
          '<p class="d-live" aria-live="polite" data-o>Type a question, choose how it is asked, then Submit.</p>',
        init: function (el) {
          var t = el.querySelector('[data-t]'), entryEl = el.querySelector('[data-entry]'), slot = el.querySelector('[data-slot]'), out = el.querySelector('[data-o]'), panel = el.querySelector('[data-panel]'), reopen = el.querySelector('[data-reopen]'), closeB = el.querySelector('[data-close]');
          radioGroup(el.querySelector('[data-opts]'), function (o) { out.innerHTML = o.hasAttribute('data-stage') ? '<strong>On stage</strong> if your question is chosen.' : 'The <strong>moderator</strong> asks for you.'; });
          t.addEventListener('input', function () { entryEl.classList.remove('is-error'); t.removeAttribute('aria-invalid'); if (slot.querySelector('.pvx-hint')) slot.innerHTML = ''; });
          el.querySelector('[data-submit]').addEventListener('click', function () {
            var v = t.value.trim();
            if (!v) { entryEl.classList.add('is-error'); t.setAttribute('aria-invalid', 'true'); slot.innerHTML = '<p class="pvx-hint">Type a question first.</p>'; out.textContent = 'The question is empty.'; t.focus(); return; }
            var onStage = !!el.querySelector('.pvx-opt[aria-checked="true"][data-stage]');
            slot.innerHTML = '<div class="pvx-qasent"><b>Question submitted' + (onStage ? ' · on stage' : '') + '</b>' + esc(v) + '</div>';
            t.value = ''; out.innerHTML = '<strong>Your question is in the moderator queue.</strong> This is a demo, so nothing was sent.';
          });
          function show(open) { panel.setAttribute('aria-hidden', String(!open)); reopen.setAttribute('aria-hidden', String(open)); reopen.tabIndex = open ? -1 : 0; qa(panel, 'button,textarea').forEach(function (x) { if (!open) { x.setAttribute('data-ti', x.tabIndex); x.tabIndex = -1; } else if (x.hasAttribute('data-ti')) { x.tabIndex = +x.getAttribute('data-ti'); x.removeAttribute('data-ti'); } }); }
          closeB.addEventListener('click', function () { show(false); reopen.focus(); out.textContent = 'Q&A closed. The QA button reopens it.'; });
          reopen.addEventListener('click', function () { show(true); closeB.focus(); out.textContent = 'Q&A open.'; });
        }
      },
      /* ---------------------------------------------------------------- */
      {
        name: 'Controls overview',
        uses: 'Controls Overview · Moving, Looking · Pagination dots',
        width: 6,
        html: stage('', 'bg-bronson.jpg', '<section class="pvx-panel pvx-co" aria-label="Controls overview" aria-roledescription="carousel"><div class="pvx-co__head">CONTROLS OVERVIEW</div>' +
          '<div class="pvx-slides">' +
            '<div class="pvx-slide" role="tabpanel" id="pvx-co-0" aria-labelledby="pvx-cot-0" aria-hidden="false"><h5>Moving</h5><p>Use the arrow keys on your keyboard to move forward, backward, left and right.</p><div class="gfx">' + svg('co-keys', '', 'Arrow keys') + '</div></div>' +
            '<div class="pvx-slide" role="tabpanel" id="pvx-co-1" aria-labelledby="pvx-cot-1" aria-hidden="true"><h5>Looking</h5><p>Click and drag anywhere within the environment to look around.</p><div class="gfx hand">' + svg('co-hand', '', 'Drag gesture') + '</div></div></div>' +
          '<div class="pvx-dots" role="tablist" aria-label="Controls pages"><button type="button" role="tab" id="pvx-cot-0" aria-controls="pvx-co-0" aria-selected="true" aria-label="Moving"><span></span></button><button type="button" role="tab" id="pvx-cot-1" aria-controls="pvx-co-1" aria-selected="false" aria-label="Looking"><span></span></button></div></section>') +
          '<p class="d-live" aria-live="polite" data-o>Showing <strong>Moving</strong>. In the build the pages advance every 4.5 seconds; here the dots and arrow keys switch them.</p>',
        init: function (el) {
          var sl = qa(el, '.pvx-slide'), out = el.querySelector('[data-o]'), names = ['Moving', 'Looking'];
          tabs(el.querySelector('[role="tablist"]'), function (i) { sl.forEach(function (s, j) { s.setAttribute('aria-hidden', String(i !== j)); }); out.innerHTML = 'Showing <strong>' + names[i] + '</strong>.'; });
        }
      },
      /* ---------------------------------------------------------------- */
      {
        name: 'Countdown and toast',
        uses: 'Countdown · TIME UNTIL SHOW  ·  Toast',
        width: 6,
        html: '<div class="pvx-acts" role="group" aria-label="Countdown controls"><button type="button" class="pvx-act" data-pause aria-pressed="false">Pause</button><button type="button" class="pvx-act" data-jump>Jump to 01:03</button><button type="button" class="pvx-act" data-reset>Reset</button></div>' +
          stage('', 'bg-lobby.jpg', countHTML('is-big') + '<div class="pvx-toast" data-toast role="status" aria-live="polite">The show starts in one minute</div>') +
          '<p class="d-live" aria-live="polite" data-o>Counting down to the screening. At one minute a toast appears; at zero the show prompt opens.</p>',
        init: function (el) {
          var t = el.querySelector('[data-toast]'), out = el.querySelector('[data-o]'), pause = el.querySelector('[data-pause]'), tm;
          function say(msg) { t.textContent = msg; t.classList.add('show'); clearTimeout(tm); tm = setTimeout(function () { t.classList.remove('show'); }, 2600); }
          wireCount(el.querySelector('[data-count]'), function (s) {
            if (s === 60) { say('The show starts in one minute'); out.innerHTML = '<strong>One minute</strong> until the show.'; }
            if (s === 0) { say('The show is starting'); out.innerHTML = '<strong>The show is starting.</strong> In the build a prompt offers Stay here or Go to theater.'; }
          });
          var paint = function () { clock.subs.forEach(function (f) { f(clock.left); }); };
          pause.addEventListener('click', function () { clock.paused = !clock.paused; pause.setAttribute('aria-pressed', String(clock.paused)); pause.textContent = clock.paused ? 'Resume' : 'Pause'; out.textContent = clock.paused ? 'Countdown paused.' : 'Countdown running.'; });
          el.querySelector('[data-jump]').addEventListener('click', function () { clock.left = 63; paint(); out.innerHTML = 'Jumped to <strong>01:03</strong>.'; });
          el.querySelector('[data-reset]').addEventListener('click', function () { clock.left = 8 * 60 + 39; paint(); t.classList.remove('show'); out.textContent = 'Countdown reset to 08:39.'; });
        }
      }
    ]
  };

  /* Dropdown markup used by the settings panel (prototype "Dropdown" component). */
  function dd(label, value, options, key) {
    return '<div class="pvx-dd" data-key="' + key + '"><button type="button" class="pvx-dd__btn" aria-haspopup="listbox" aria-expanded="false" aria-controls="pvx-dd-' + key + '"><span>' + esc(label) + '<small>' + esc(value) + '</small></span>' + svg('chevron') + '</button><div class="pvx-dd__rule"></div>' +
      '<div class="pvx-dd__list" id="pvx-dd-' + key + '" role="listbox" aria-label="' + esc(label) + '" hidden>' + options.map(function (o) { return '<button type="button" class="pvx-menu-item" role="option" aria-selected="' + (o === value) + '" aria-current="' + (o === value) + '">' + esc(o) + '</button>'; }).join('') + '</div></div>';
  }

  var CUSTOM = C.custom;
  delete C.custom;
  C.fontUrl = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap';
  C.css = "#ds-popup [data-ds=\"paramount\"] { --bc: #00091c; --bc95: rgba(0,9,28,.95); --hdr: #010715; --ibg: #0d1424; --mad: #0b1c62; --eb: #44557c; --br: #0064ff; --msg: rgba(0,100,255,.1); --lab: #dedede; --mu: #8893ad; --ph: #435172; --ina: #3d53b2; --l3: #6d77a1; --l1: #ced2e0; --err: #ff5a6a; --errt: #ff8a96; --line: #ced2e0; } #ds-popup [data-ds=\"paramount\"] .p-sec > h3 { font: 800 28px/32px var(--font); text-transform: uppercase; color: var(--bc); } #ds-popup [data-ds=\"paramount\"] .d, #ds-popup [data-ds=\"paramount\"] .p-panel { background: transparent; border: 1px solid var(--l1); } #ds-popup [data-ds=\"paramount\"] .d { gap: 28px; } #ds-popup [data-ds=\"paramount\"] .d-head { margin-bottom: -4px; } #ds-popup [data-ds=\"paramount\"] .d-live { padding-top: 12px; border-top: 1px solid #e6e8ef; } #ds-popup [data-ds=\"paramount\"] .d-live:empty { display: none; } #ds-popup [data-ds=\"paramount\"] .d-live { min-height: 53px; } #ds-popup [data-ds=\"paramount\"] [data-custom] { flex: 1 1 auto; display: flex; flex-direction: column; gap: 28px; min-width: 0; } #ds-popup [data-ds=\"paramount\"] .c-btn { font: 700 16px/20px var(--font); text-transform: uppercase; min-height: 50px; } #ds-popup [data-ds=\"paramount\"] .c-btn.ghost { box-shadow: inset 0 0 0 1px var(--bc); color: var(--bc); } #ds-popup [data-ds=\"paramount\"] .c-seg button, #ds-popup [data-ds=\"paramount\"] .c-dd-btn, #ds-popup [data-ds=\"paramount\"] .c-chip { text-transform: uppercase; font-weight: 700; font-size: 12px; } #ds-popup [data-ds=\"paramount\"] .c-seg { border-radius: 100px; } #ds-popup [data-ds=\"paramount\"] .c-seg button { border-radius: 100px; min-height: 44px; } #ds-popup [data-ds=\"paramount\"] .c-field > label { font: 700 12px/16px var(--font); text-transform: uppercase; letter-spacing: .02em; } #ds-popup [data-ds=\"paramount\"] .c-box { height: 50px; } #ds-popup [data-ds=\"paramount\"] .c-box:focus-within { box-shadow: inset 0 0 0 1px var(--br); } #ds-popup [data-ds=\"paramount\"] .c-acc-head { font: 700 14px/20px var(--font); text-transform: uppercase; } #ds-popup [data-ds=\"paramount\"] .c-acc-body { font-size: 14px; line-height: 22px; } #ds-popup [data-ds=\"paramount\"] .pvx-tabs { display: inline-flex; flex-wrap: wrap; gap: 4px; padding: 4px; border-radius: 100px; background: var(--msg); align-self: flex-start; max-width: 100%; } #ds-popup [data-ds=\"paramount\"] .pvx-tabs button { min-height: 44px; padding: 0 18px; border: 0; border-radius: 100px; background: transparent; font: 900 12px/16px var(--font); color: var(--bc); text-transform: uppercase; cursor: pointer; } #ds-popup [data-ds=\"paramount\"] .pvx-tabs button:hover { background: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-tabs button[aria-pressed=\"true\"] { background: var(--bc); color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-acts { display: flex; flex-wrap: wrap; gap: 8px; } #ds-popup [data-ds=\"paramount\"] .pvx-act { min-height: 44px; padding: 0 18px; border-radius: 100px; border: 1px solid var(--bc); background: transparent; font: 900 12px/16px var(--font); color: var(--bc); text-transform: uppercase; cursor: pointer; } #ds-popup [data-ds=\"paramount\"] .pvx-act:hover { background: var(--bc); color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-stage { position: relative; flex: 1 1 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px; padding: 32px 16px; border-radius: 8px; background: var(--bc); color: #fff; font-family: var(--font); overflow: hidden; min-width: 0; isolation: isolate; } #ds-popup [data-ds=\"paramount\"] .pvx-stage.has-bg::before { content: \"\"; position: absolute; inset: 0; z-index: -1; background: var(--bg) center / cover no-repeat; opacity: .32; } #ds-popup [data-ds=\"paramount\"] .pvx-stage.has-bg::after { content: \"\"; position: absolute; inset: 0; z-index: -1; background: linear-gradient(180deg, rgba(0,9,28,.35), rgba(0,9,28,.75)); } #ds-popup [data-ds=\"paramount\"] .pvx-stage :focus-visible { outline: 2px solid var(--br); outline-offset: 3px; } #ds-popup [data-ds=\"paramount\"] :where(.pvx-stage) button { margin: 0; padding: 0; border: 0; background: none; color: inherit; font-family: var(--font); cursor: pointer; -webkit-tap-highlight-color: transparent; } #ds-popup [data-ds=\"paramount\"] :where(.pvx-stage) img { display: block; max-width: none; -webkit-user-drag: none; user-select: none; } #ds-popup [data-ds=\"paramount\"] :where(.pvx-stage) p { margin: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-stack { display: grid; grid-template-columns: minmax(0, 1fr); place-items: center; width: 100%; } #ds-popup [data-ds=\"paramount\"] .pvx-stack > .pvx-panel { max-width: 100%; } #ds-popup [data-ds=\"paramount\"] .pvx-stack > * { grid-area: 1 / 1; } #ds-popup [data-ds=\"paramount\"] .pvx-stack > [aria-hidden=\"true\"] { visibility: hidden; } #ds-popup [data-ds=\"paramount\"] .pvx-cap { font: 700 10px/12px var(--font); letter-spacing: .08em; text-transform: uppercase; color: var(--mu); text-align: center; } #ds-popup [data-ds=\"paramount\"] .pvx-row { display: flex; flex-wrap: wrap; gap: 24px; align-items: center; justify-content: center; } #ds-popup [data-ds=\"paramount\"] .pvx-white { display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 250px; max-width: 100%; height: 50px; padding: 10px 10px 10px 24px; border-radius: 100px; background: #fff; color: var(--br); font: 700 16px/20px var(--font); text-transform: uppercase; transition: background .18s, color .18s; } #ds-popup [data-ds=\"paramount\"] .pvx-white { background: #fff; color: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-white img { width: 32px; height: 32px; transition: transform .2s; } #ds-popup [data-ds=\"paramount\"] .pvx-white:hover, #ds-popup [data-ds=\"paramount\"] .pvx-white.is-hover { background: var(--br); color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-white:hover img, #ds-popup [data-ds=\"paramount\"] .pvx-white.is-hover img { transform: translateX(3px); } #ds-popup [data-ds=\"paramount\"] .pvx-outline { display: inline-flex; align-items: center; justify-content: center; min-width: 190px; height: 50px; padding: 0 24px; border-radius: 100px; font: 900 12px/16px var(--font); text-transform: uppercase; transition: border-color .15s, color .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-outline { border: 1px solid #fff; color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-outline:hover, #ds-popup [data-ds=\"paramount\"] .pvx-outline.is-hover { border-color: var(--br); color: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-white:disabled, #ds-popup [data-ds=\"paramount\"] .pvx-outline:disabled, #ds-popup [data-ds=\"paramount\"] .pvx-attach:disabled { opacity: .4; cursor: not-allowed; } #ds-popup [data-ds=\"paramount\"] .pvx-outline:disabled { border-color: #fff; color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-white:disabled { background: #fff; color: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-white:disabled img { transform: none; } #ds-popup [data-ds=\"paramount\"] .pvx-attach { position: relative; flex: none; width: 50px; height: 50px; border-radius: 39px; display: flex; align-items: center; justify-content: center; transition: filter .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-attach { background: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-attach img { width: 10.67px; height: 21.41px; } #ds-popup [data-ds=\"paramount\"] .pvx-attach:hover, #ds-popup [data-ds=\"paramount\"] .pvx-attach.is-hover { filter: brightness(1.15); } #ds-popup [data-ds=\"paramount\"] .pvx-badge { position: absolute; right: -2px; top: -2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; color: var(--br); font: 900 10px/16px var(--font); text-align: center; } #ds-popup [data-ds=\"paramount\"] .pvx-stage.is-buttons { padding-block: 56px; } #ds-popup [data-ds=\"paramount\"] .pvx-btngrid { display: grid; grid-template-columns: repeat(2, minmax(0, 250px)) 50px; gap: 16px; justify-content: center; align-items: center; width: 100%; } #ds-popup [data-ds=\"paramount\"] .pvx-btngrid .pvx-white, #ds-popup [data-ds=\"paramount\"] .pvx-btngrid .pvx-outline { width: 100%; min-width: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-btngrid .pvx-attach { grid-column: 3; grid-row: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-btngrid .pvx-outline[data-b=\"Take a photo\"] { grid-column: 1; grid-row: 2; } #ds-popup [data-ds=\"paramount\"] .pvx-btngrid .pvx-outline[data-b=\"Go to theater\"] { grid-column: 2; grid-row: 2; } #ds-popup [data-ds=\"paramount\"] .pvx-pair { display: flex; gap: 11px; width: 100%; max-width: 411px; } #ds-popup [data-ds=\"paramount\"] .pvx-pair .pvx-outline { flex: 1 1 0; min-width: 0; padding: 0 12px; } #ds-popup [data-ds=\"paramount\"] .pvx-entries { display: flex; flex-wrap: wrap; gap: 24px; justify-content: center; width: 100%; } #ds-popup [data-ds=\"paramount\"] .pvx-entry { position: relative; display: flex; flex-direction: column; justify-content: flex-end; width: 250px; max-width: 100%; height: 44px; padding-bottom: 8px; border-bottom: 1px solid var(--l3); cursor: text; transition: border-color .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-entry:hover { border-bottom-color: var(--l1); } #ds-popup [data-ds=\"paramount\"] .pvx-entry__label { display: flex; align-items: center; gap: 4px; padding-left: 4px; font: 400 12px/16px var(--font); color: #fff; pointer-events: none; transition: transform .18s, color .18s; } #ds-popup [data-ds=\"paramount\"] .pvx-entry__label::before { content: \"\"; width: 1px; height: 13px; background: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-entry__label span { opacity: .4; transition: opacity .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-entry:hover .pvx-entry__label span { opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-entry input { position: absolute; left: 4px; right: 4px; bottom: 8px; height: 18px; padding: 0; border: 0; border-radius: 0; background: transparent; outline: none; font: 700 12px/16px var(--font); color: #fff; opacity: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-entry.is-active { border-bottom-color: var(--l1); } #ds-popup [data-ds=\"paramount\"] .pvx-entry.is-active .pvx-entry__label { transform: translateY(-18px); color: var(--br); font-weight: 700; } #ds-popup [data-ds=\"paramount\"] .pvx-entry.is-active .pvx-entry__label::before { display: none; } #ds-popup [data-ds=\"paramount\"] .pvx-entry.is-active .pvx-entry__label span { opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-entry.is-active input { opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-entry:focus-within { outline: 2px solid var(--br); outline-offset: 6px; border-radius: 2px; } #ds-popup [data-ds=\"paramount\"] .pvx-entry input:focus-visible { outline: none; } #ds-popup [data-ds=\"paramount\"] .pvx-entry.is-error { border-bottom-color: var(--err); } #ds-popup [data-ds=\"paramount\"] .pvx-entry.is-error .pvx-entry__label span { color: var(--errt); opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-hint { min-height: 16px; font: 600 11px/16px var(--font); color: var(--errt); text-align: center; } #ds-popup [data-ds=\"paramount\"] .pvx-signin { display: flex; flex-direction: column; align-items: center; gap: 32px; width: 100%; margin: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-signin .pvx-hint { margin-top: -16px; } #ds-popup [data-ds=\"paramount\"] .pvx-link { min-height: 44px; padding: 0 8px; font: 700 12px/16px var(--font); text-transform: uppercase; color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-link:hover { color: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-logo { width: 110px; height: auto; } #ds-popup [data-ds=\"paramount\"] .pvx-panel { position: relative; width: 300px; max-width: 100%; background: var(--bc95); border-radius: 8px; color: #fff; box-shadow: 0 12px 40px rgba(0,0,0,.35); } #ds-popup [data-ds=\"paramount\"] .pvx-close { flex: none; width: 44px; height: 44px; margin: -12px; display: grid; place-items: center; } #ds-popup [data-ds=\"paramount\"] .pvx-close img { width: 18px; height: 18px; transition: filter .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-close:hover img { filter: drop-shadow(0 0 4px rgba(0,100,255,.9)); } #ds-popup [data-ds=\"paramount\"] .pvx-reopen { display: grid; place-items: center; width: 64px; height: 64px; } #ds-popup [data-ds=\"paramount\"] .pvx-reopen img { width: 45px; height: 37px; } #ds-popup [data-ds=\"paramount\"] .pvx-reopen .is-small { width: 22px; height: 19px; } #ds-popup [data-ds=\"paramount\"] .pvx-reopen.is-text { width: 64px; height: 44px; } #ds-popup [data-ds=\"paramount\"] .pvx-reopen.is-text span { display: grid; place-items: center; width: 45px; height: 37px; border-radius: 16px; background: var(--ibg); font: 900 16px/1 var(--font); } #ds-popup [data-ds=\"paramount\"] .pvx-reopen.is-text:hover span { color: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-hd { min-height: 400px; padding: 0 24px 24px; display: flex; flex-direction: column; align-items: center; } #ds-popup [data-ds=\"paramount\"] .pvx-hd__head { flex: none; position: relative; align-self: stretch; height: 51px; margin: 0 -24px; border-radius: 8px 8px 0 0; background: var(--bc); display: flex; align-items: center; justify-content: center; font: 700 12px/16px var(--font); } #ds-popup [data-ds=\"paramount\"] .pvx-hd__head .pvx-close { position: absolute; right: 20px; top: 50%; margin: -22px -13px 0 0; } #ds-popup [data-ds=\"paramount\"] .pvx-hd__body { flex: 1; width: 100%; display: grid; } #ds-popup [data-ds=\"paramount\"] .pvx-hd__body > * { grid-area: 1 / 1; } #ds-popup [data-ds=\"paramount\"] .pvx-hd__body > [aria-hidden=\"true\"] { visibility: hidden; } #ds-popup [data-ds=\"paramount\"] .pvx-hd form { display: flex; flex-direction: column; align-items: center; gap: 8px; margin: 0; padding-top: 4px; } #ds-popup [data-ds=\"paramount\"] .pvx-hd .pvx-entry { width: 250px; } #ds-popup [data-ds=\"paramount\"] .pvx-field { width: 250px; max-width: 100%; height: 163px; padding: 14px 0; flex: none; } #ds-popup [data-ds=\"paramount\"] .pvx-field textarea { display: block; width: 100%; height: 100%; resize: none; border: 0; border-radius: 8px; background: var(--msg); padding: 20px 16px; font: 400 12px/16px var(--font); color: #fff; outline: none; box-shadow: none; transition: background .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-field textarea::placeholder { color: var(--ph); opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-field textarea:focus { background: var(--mad); } #ds-popup [data-ds=\"paramount\"] .pvx-field textarea:focus-visible { outline: 2px solid var(--br); outline-offset: 2px; } #ds-popup [data-ds=\"paramount\"] .pvx-field.is-error textarea { box-shadow: inset 0 0 0 1px var(--err); } #ds-popup [data-ds=\"paramount\"] .pvx-actions { display: flex; justify-content: space-between; align-items: center; gap: 10px; width: 250px; max-width: 100%; } #ds-popup [data-ds=\"paramount\"] .pvx-file { width: 250px; max-width: 100%; min-height: 12px; margin-top: -2px; font: 600 10px/12px var(--font); color: var(--mu); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } #ds-popup [data-ds=\"paramount\"] .pvx-file.is-error { color: var(--errt); } #ds-popup [data-ds=\"paramount\"] .pvx-sent { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; text-align: center; } #ds-popup [data-ds=\"paramount\"] .pvx-sent h4 { margin: 0; font: 800 16px/20px var(--font); text-transform: uppercase; color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-sent p { max-width: 220px; font: 400 12px/16px var(--font); color: var(--mu); } #ds-popup [data-ds=\"paramount\"] .pvx-scene { position: relative; width: 100%; aspect-ratio: 16 / 9; min-height: 420px; border-radius: 8px; overflow: hidden; background: var(--bc); color: #fff; font-family: var(--font); isolation: isolate; touch-action: none; user-select: none; -webkit-user-select: none; } #ds-popup [data-ds=\"paramount\"] :where(.pvx-scene) button { margin: 0; padding: 0; border: 0; background: none; color: inherit; font-family: var(--font); cursor: pointer; } #ds-popup [data-ds=\"paramount\"] :where(.pvx-scene) img { display: block; max-width: none; -webkit-user-drag: none; } #ds-popup [data-ds=\"paramount\"] .pvx-scene :focus-visible { outline: 2px solid var(--br); outline-offset: 3px; } #ds-popup [data-ds=\"paramount\"] :where(.pvx-scene) p, #ds-popup [data-ds=\"paramount\"] :where(.pvx-scene) h4 { margin: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-look { position: absolute; inset: 0; cursor: grab; } #ds-popup [data-ds=\"paramount\"] .pvx-look.is-dragging { cursor: grabbing; } #ds-popup [data-ds=\"paramount\"] .pvx-world { position: absolute; inset: -6%; transform-origin: 50% 50%; transition: transform .35s cubic-bezier(.2,.7,.2,1); will-change: transform; } #ds-popup [data-ds=\"paramount\"] .pvx-look.is-dragging .pvx-world { transition: none; } #ds-popup [data-ds=\"paramount\"] .pvx-world > img.pvx-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; pointer-events: none; } #ds-popup [data-ds=\"paramount\"] .pvx-world > img.pvx-bg[hidden] { display: none; } #ds-popup [data-ds=\"paramount\"] .pvx-hotspot { position: absolute; left: 43%; top: 38.5%; width: 44px; height: 44px; margin: -22px 0 0 -22px; border-radius: 50%; } #ds-popup [data-ds=\"paramount\"] .pvx-hotspot img { position: absolute; inset: 1px; width: 42px; height: 42px; transition: opacity .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-hotspot .hs-hover, #ds-popup [data-ds=\"paramount\"] .pvx-hotspot .hs-sel { opacity: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-hotspot:hover .hs-hover { opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-hotspot.is-selected .hs-sel { opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-hotspot.is-selected .hs-hover { opacity: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-hotspot::after { content: \"\"; position: absolute; inset: -5px; border-radius: 50%; border: 2px solid rgba(255,255,255,.55); animation: pvx-pulse 2s ease-out infinite; pointer-events: none; } #ds-popup [data-ds=\"paramount\"] .pvx-hotspot.is-selected::after { display: none; } @keyframes pvx-pulse { 0% { transform: scale(.8); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } } #ds-popup [data-ds=\"paramount\"] .pvx-take { position: absolute; left: 56.5%; top: 44.5%; width: 82px; height: 82px; margin: -41px 0 0 -41px; border-radius: 50%; transition: transform .2s; } #ds-popup [data-ds=\"paramount\"] .pvx-take img { width: 82px; height: 82px; } #ds-popup [data-ds=\"paramount\"] .pvx-take:hover { transform: scale(1.08); } #ds-popup [data-ds=\"paramount\"] .pvx-hud-logo { position: absolute; left: 24px; top: 24px; width: 80px; height: auto; pointer-events: none; } #ds-popup [data-ds=\"paramount\"] .pvx-scene .pvx-count { position: absolute; left: 50%; top: 22px; transform: translateX(-50%); pointer-events: none; } #ds-popup [data-ds=\"paramount\"] .pvx-tip { position: absolute; left: 50%; top: 42%; width: 152px; margin: -91px 0 0 -76px; pointer-events: none; text-align: center; transition: opacity .5s, transform .5s; } #ds-popup [data-ds=\"paramount\"] .pvx-tip.is-hidden { opacity: 0; transform: scale(.94); } #ds-popup [data-ds=\"paramount\"] .pvx-tip .ring { width: 134px; height: 134px; margin: 0 auto; } #ds-popup [data-ds=\"paramount\"] .pvx-tip .hand { position: absolute; left: 53px; top: 45px; width: 40px; height: 45px; animation: pvx-swipe 2.4s ease-in-out infinite; } #ds-popup [data-ds=\"paramount\"] .pvx-tip p { margin-top: 18px; font: 600 12px/15px var(--font); text-shadow: 0 1px 2px rgba(0,0,0,.9), 0 0 12px rgba(0,0,0,.7); } @keyframes pvx-swipe { 0%, 100% { transform: translateX(0); } 30% { transform: translateX(-10px); } 70% { transform: translateX(10px); } } #ds-popup [data-ds=\"paramount\"] .pvx-hudbtn { position: absolute; display: grid; place-items: center; width: 45px; height: 44px; transition: transform .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-hudbtn img { width: 45px; height: 36px; } #ds-popup [data-ds=\"paramount\"] .pvx-hudbtn:hover { transform: translateY(-1px); } #ds-popup [data-ds=\"paramount\"] .pvx-hudbtn:active { transform: scale(.96); } #ds-popup [data-ds=\"paramount\"] .pvx-scene .pvx-envbtn { left: 24px; bottom: 20px; } #ds-popup [data-ds=\"paramount\"] .pvx-envmenu { position: absolute; left: 24px; bottom: 76px; width: 134px; padding: 10px 0; border-radius: 8px; background: var(--bc95); display: flex; flex-direction: column; transform-origin: bottom left; transition: opacity .18s, transform .18s; } #ds-popup [data-ds=\"paramount\"] .pvx-envmenu[hidden] { display: none; } #ds-popup [data-ds=\"paramount\"] .pvx-menu-item { display: flex; align-items: center; min-height: 44px; padding: 0 34px; font: 700 12px/15px var(--font); letter-spacing: .01em; text-transform: uppercase; color: #fff; text-align: left; } #ds-popup [data-ds=\"paramount\"] .pvx-menu-item:hover, #ds-popup [data-ds=\"paramount\"] .pvx-menu-item[aria-current=\"true\"] { color: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-dc { position: absolute; left: 50%; bottom: 20px; width: 120px; height: 120px; margin-left: -60px; border-radius: 30px; cursor: pointer; touch-action: none; } #ds-popup [data-ds=\"paramount\"] .pvx-dc img { position: absolute; inset: 0; width: 120px; height: 120px; pointer-events: none; } #ds-popup [data-ds=\"paramount\"] .pvx-dc .dc-press { opacity: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-dc.is-pressed .dc-press { opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-dc.is-pressed .dc-default { opacity: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-dc[hidden] { display: none; } #ds-popup [data-ds=\"paramount\"] .pvx-prompt { position: absolute; left: 50%; top: 50%; width: min(475px, calc(100% - 32px)); transform: translate(-50%, -50%); padding: 32px; border-radius: 8px; background: var(--bc95); display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; transition: opacity .18s; z-index: 3; } #ds-popup [data-ds=\"paramount\"] .pvx-prompt[hidden] { display: none; } #ds-popup [data-ds=\"paramount\"] .pvx-prompt h4 { font: 800 22px/24px var(--font); text-transform: uppercase; color: #e7eaed; } #ds-popup [data-ds=\"paramount\"] .pvx-prompt p { width: 329px; max-width: 100%; min-height: 54px; margin: 8px 0 0; font: 400 12px/16px var(--font); color: var(--mu); } #ds-popup [data-ds=\"paramount\"] .pvx-prompt .pvx-close { position: absolute; right: 26px; top: 26px; margin: -12px; } #ds-popup [data-ds=\"paramount\"] .pvx-prompt .pvx-close img { width: 19.6px; height: 20.2px; } #ds-popup [data-ds=\"paramount\"] .pvx-toast { position: absolute; left: 50%; top: 84px; transform: translate(-50%, -8px); padding: 10px 20px; border-radius: 100px; border: 1px solid rgba(68,85,124,.6); background: var(--bc95); font: 700 12px/16px var(--font); color: #fff; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity .2s, transform .2s; z-index: 5; max-width: calc(100% - 32px); overflow: hidden; text-overflow: ellipsis; } #ds-popup [data-ds=\"paramount\"] .pvx-toast.show { opacity: 1; transform: translate(-50%, 0); } #ds-popup [data-ds=\"paramount\"] .pvx-flash { position: absolute; inset: 0; background: #fff; opacity: 0; pointer-events: none; z-index: 6; } #ds-popup [data-ds=\"paramount\"] .pvx-flash.go { animation: pvx-flash .6s ease-out; } @keyframes pvx-flash { 0% { opacity: .9; } 100% { opacity: 0; } } #ds-popup [data-ds=\"paramount\"] .pvx-fade { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; z-index: 7; transition: opacity .35s; } #ds-popup [data-ds=\"paramount\"] .pvx-fade.on { opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-count { width: 98px; text-align: center; color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-count__label { font: 700 10px/12px var(--font); white-space: nowrap; } #ds-popup [data-ds=\"paramount\"] .pvx-count__time { display: flex; justify-content: center; align-items: center; gap: 6px; margin-top: -2px; font: 700 22px/27px var(--font); font-variant-numeric: tabular-nums; } #ds-popup [data-ds=\"paramount\"] .pvx-count__colon { display: flex; flex-direction: column; gap: 3px; } #ds-popup [data-ds=\"paramount\"] .pvx-count__colon i { width: 4px; height: 4px; border-radius: 50%; background: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-count.is-big { transform: scale(1.6); margin: 18px 0; } #ds-popup [data-ds=\"paramount\"] .pvx-stage .pvx-toast { position: static; transform: none; opacity: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-stage .pvx-toast.show { opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-hud { display: flex; flex-direction: column; align-items: center; gap: 28px; width: 100%; } #ds-popup [data-ds=\"paramount\"] .pvx-hudrow { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 10px; } #ds-popup [data-ds=\"paramount\"] .pvx-ib { display: grid; place-items: center; width: 45px; height: 44px; transition: transform .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-ib img { width: 45px; height: 37px; } #ds-popup [data-ds=\"paramount\"] .pvx-ib.is-short img { height: 36px; } #ds-popup [data-ds=\"paramount\"] .pvx-ib:hover { transform: translateY(-1px); } #ds-popup [data-ds=\"paramount\"] .pvx-ib:active { transform: scale(.96); } #ds-popup [data-ds=\"paramount\"] .pvx-qa { display: grid; place-items: center; width: 45px; height: 44px; } #ds-popup [data-ds=\"paramount\"] .pvx-qa span { display: grid; place-items: center; width: 45px; height: 37px; border-radius: 16px; background: var(--ibg); font: 900 16px/1 var(--font); color: #fff; transition: color .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-qa:hover span, #ds-popup [data-ds=\"paramount\"] .pvx-qa[aria-pressed=\"true\"] span { color: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-profile { display: grid; place-items: center; width: 56px; height: 50px; border-radius: 36px; background: #fff; overflow: hidden; position: relative; } #ds-popup [data-ds=\"paramount\"] .pvx-profile img { position: absolute; left: 50%; bottom: 0; width: 28.33px; height: 41.155px; transform: translateX(-50%); } #ds-popup [data-ds=\"paramount\"] .pvx-menubar { display: flex; align-items: center; gap: 0; height: 48px; padding: 2px 8px; border-radius: 20px; background: var(--bc); box-shadow: 0 0 0 1px rgba(68,85,124,.35); } #ds-popup [data-ds=\"paramount\"] .pvx-menubar button { display: grid; place-items: center; width: 44px; height: 44px; } #ds-popup [data-ds=\"paramount\"] .pvx-menubar button:hover img { filter: brightness(1.35); } #ds-popup [data-ds=\"paramount\"] .pvx-menubar .t-mic { width: 16px; height: 24px; } #ds-popup [data-ds=\"paramount\"] .pvx-menubar .t-video { width: 23.65px; height: 23.61px; } #ds-popup [data-ds=\"paramount\"] .pvx-menubar .t-chat { width: 21.965px; height: 19px; } #ds-popup [data-ds=\"paramount\"] .pvx-menubar .t-emoji { width: 18px; height: 18px; } #ds-popup [data-ds=\"paramount\"] .pvx-hudgroup { display: flex; flex-direction: column; align-items: center; gap: 10px; } #ds-popup [data-ds=\"paramount\"] .pvx-emo { position: relative; display: flex; align-items: flex-end; justify-content: center; gap: 24px; width: 100%; min-height: 300px; } #ds-popup [data-ds=\"paramount\"] .pvx-emoset { width: 68px; padding: 8px 0; border-radius: 8px; background: var(--bc); display: flex; flex-direction: column; align-items: center; box-shadow: 0 0 0 1px rgba(68,85,124,.35); } #ds-popup [data-ds=\"paramount\"] .pvx-emoset button { display: grid; place-items: center; width: 44px; height: 44px; transition: transform .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-emoset button:hover { transform: scale(1.25); } #ds-popup [data-ds=\"paramount\"] .pvx-emoset img { max-width: 26px; max-height: 22px; } #ds-popup [data-ds=\"paramount\"] .pvx-floater { position: absolute; width: 30px; height: 30px; pointer-events: none; animation: pvx-float 2.2s cubic-bezier(.2,.6,.3,1) forwards; z-index: 4; } #ds-popup [data-ds=\"paramount\"] .pvx-floater img { width: 100%; height: 100%; object-fit: contain; } @keyframes pvx-float { 0% { transform: translate(0,0) scale(.6); opacity: 0; } 12% { opacity: 1; transform: translate(0,-20px) scale(1.15); } 100% { transform: translate(var(--dx), -250px) scale(1); opacity: 0; } } #ds-popup [data-ds=\"paramount\"] .pvx-emocount { display: flex; flex-direction: column; gap: 6px; min-width: 120px; font: 700 12px/16px var(--font); } #ds-popup [data-ds=\"paramount\"] .pvx-emocount b { font: 700 22px/27px var(--font); font-variant-numeric: tabular-nums; } #ds-popup [data-ds=\"paramount\"] .pvx-set { padding-bottom: 20px; } #ds-popup [data-ds=\"paramount\"] .pvx-set__head { height: 44px; border-radius: 8px 8px 0 0; background: var(--hdr); display: flex; align-items: center; justify-content: space-between; padding: 0 16px 0 27px; } #ds-popup [data-ds=\"paramount\"] .pvx-set__head .pvx-close img { width: 16.1px; height: 16.1px; } #ds-popup [data-ds=\"paramount\"] .pvx-ptabs { display: flex; gap: 0; margin-left: -8px; } #ds-popup [data-ds=\"paramount\"] .pvx-ptab { min-height: 44px; padding: 0 8px; font: 900 12px/16px var(--font); text-transform: uppercase; color: var(--eb); } #ds-popup [data-ds=\"paramount\"] .pvx-ptab:hover { color: var(--mu); } #ds-popup [data-ds=\"paramount\"] .pvx-ptab[aria-selected=\"true\"] { color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-panes { display: grid; } #ds-popup [data-ds=\"paramount\"] .pvx-panes > * { grid-area: 1 / 1; } #ds-popup [data-ds=\"paramount\"] .pvx-panes > [aria-hidden=\"true\"] { visibility: hidden; } #ds-popup [data-ds=\"paramount\"] .pvx-set__body { display: flex; flex-direction: column; align-items: center; gap: 20px; padding-top: 20px; } #ds-popup [data-ds=\"paramount\"] .pvx-setrow { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 249px; max-width: calc(100% - 32px); } #ds-popup [data-ds=\"paramount\"] .pvx-setrow__label { font: 600 12px/16px var(--font); color: var(--lab); text-transform: uppercase; } #ds-popup [data-ds=\"paramount\"] .pvx-seg { display: flex; gap: 4px; align-items: center; justify-content: center; padding: 4px; height: 26px; border-radius: 2px; background: var(--mad); } #ds-popup [data-ds=\"paramount\"] .pvx-seg button { position: relative; height: 18px; border-radius: 2px; font: 700 10px/18px var(--font); color: var(--ina); background: var(--bc); transition: background .15s, color .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-seg button::before { content: \"\"; position: absolute; left: -2px; right: -2px; top: -13px; bottom: -13px; } #ds-popup [data-ds=\"paramount\"] .pvx-seg.is-quality button { width: 40px; } #ds-popup [data-ds=\"paramount\"] .pvx-seg.is-persp button { width: 56px; font-weight: 600; background: var(--hdr); } #ds-popup [data-ds=\"paramount\"] .pvx-seg button:hover { color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-seg button[aria-checked=\"true\"] { background: var(--br); color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-dd { position: relative; width: 250px; max-width: calc(100% - 32px); } #ds-popup [data-ds=\"paramount\"] .pvx-dd__btn { display: flex; align-items: center; justify-content: space-between; width: 100%; min-height: 44px; padding-right: 8px !important; font: 700 12px/16px var(--font); text-transform: uppercase; text-align: left; } #ds-popup [data-ds=\"paramount\"] .pvx-dd__btn small { display: block; font: 600 10px/14px var(--font); color: var(--mu); text-transform: none; } #ds-popup [data-ds=\"paramount\"] .pvx-dd__btn img { width: 15px; height: 7.656px; transition: transform .2s; } #ds-popup [data-ds=\"paramount\"] .pvx-dd__btn[aria-expanded=\"true\"] img { transform: scaleY(-1); } #ds-popup [data-ds=\"paramount\"] .pvx-dd__rule { height: 1px; background: var(--eb); transform: scaleY(.5); margin-top: 4px; } #ds-popup [data-ds=\"paramount\"] .pvx-dd__list { position: absolute; left: 0; right: 0; top: calc(100% + 8px); z-index: 5; padding: 6px 0; border-radius: 4px; border: 1px solid rgba(68,85,124,.5); background: var(--hdr); display: flex; flex-direction: column; box-shadow: 0 12px 30px rgba(0,0,0,.4); } #ds-popup [data-ds=\"paramount\"] .pvx-dd__list[hidden] { display: none; } #ds-popup [data-ds=\"paramount\"] .pvx-dd__list .pvx-menu-item { padding: 0 16px; min-height: 36px; } #ds-popup [data-ds=\"paramount\"] .pvx-dd__list .pvx-menu-item:focus-visible { outline-offset: -2px; } #ds-popup [data-ds=\"paramount\"] .pvx-links { display: flex; gap: 15px; font: 600 10px/16px var(--font); } #ds-popup [data-ds=\"paramount\"] .pvx-links a { display: inline-flex; align-items: center; min-height: 44px; color: var(--mu); text-decoration: underline; } #ds-popup [data-ds=\"paramount\"] .pvx-links a:hover { color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-cam { display: flex; flex-direction: column; gap: 17px; width: 250px; max-width: calc(100% - 32px); padding-top: 20px; margin: 0 auto; } #ds-popup [data-ds=\"paramount\"] .pvx-cam .pvx-dd { max-width: 100%; } #ds-popup [data-ds=\"paramount\"] .pvx-camview { position: relative; display: block; width: 193px; height: 114.6px; border-radius: 2px; background: var(--mad) !important; overflow: hidden; } #ds-popup [data-ds=\"paramount\"] .pvx-camview img { position: absolute; left: 61px; top: 10.25px; width: 71.85px; height: 104.38px; opacity: .35; transition: opacity .2s; } #ds-popup [data-ds=\"paramount\"] .pvx-camview.is-live img { opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-live { position: absolute; right: 8px; top: 8px; padding: 2px 6px; border-radius: 2px; background: var(--bc); font: 800 9px/12px var(--font); letter-spacing: .1em; color: var(--mu); } #ds-popup [data-ds=\"paramount\"] .pvx-camview.is-live .pvx-live { background: var(--br); color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-levels { display: flex; align-items: center; gap: 10px; min-height: 44px; } #ds-popup [data-ds=\"paramount\"] .pvx-levels i { width: 10px; height: 20px; border-radius: 1px; background: var(--mad); transition: background .08s; } #ds-popup [data-ds=\"paramount\"] .pvx-levels i.on { background: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-levels span { margin-left: 4px; font: 700 10px/12px var(--font); text-transform: uppercase; color: var(--mu); } #ds-popup [data-ds=\"paramount\"] .pvx-chat { width: 348px; height: 448px; padding: 22px 23px; border-radius: 16px; display: flex; flex-direction: column; align-items: center; gap: 22px; } #ds-popup [data-ds=\"paramount\"] .pvx-chat__top { display: flex; align-items: center; justify-content: space-between; width: 100%; } #ds-popup [data-ds=\"paramount\"] .pvx-room { display: flex; align-items: center; gap: 10px; min-height: 44px; margin: -12px 0; font: 700 12px/16px var(--font); text-transform: uppercase; } #ds-popup [data-ds=\"paramount\"] .pvx-room img { width: 8.53px; height: 14.47px; } #ds-popup [data-ds=\"paramount\"] .pvx-room:hover { color: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-msgs { width: 100%; flex: 1 1 auto; min-height: 0; padding-right: 6px; overflow-y: auto; display: flex; flex-direction: column; gap: 22px; scrollbar-width: thin; scrollbar-color: var(--eb) transparent; overscroll-behavior: contain; } #ds-popup [data-ds=\"paramount\"] .pvx-msg { display: flex; flex-direction: column; gap: 5px; flex: none; } #ds-popup [data-ds=\"paramount\"] .pvx-msg__meta { display: flex; justify-content: space-between; align-items: center; } #ds-popup [data-ds=\"paramount\"] .pvx-msg__name { font: 900 12px/16px var(--font); text-transform: uppercase; } #ds-popup [data-ds=\"paramount\"] .pvx-msg__when { font: 700 10px/16px var(--font); } #ds-popup [data-ds=\"paramount\"] .pvx-msg__bubble { padding: 19px 26px; border-radius: 0 10px 10px 10px; background: var(--msg); font: 400 12px/16px var(--font); overflow-wrap: anywhere; } #ds-popup [data-ds=\"paramount\"] .pvx-msg.is-out .pvx-msg__name { color: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-msg.is-out .pvx-msg__bubble { background: var(--br); border-radius: 10px 0 10px 10px; } #ds-popup [data-ds=\"paramount\"] .pvx-msg.is-typing .pvx-msg__bubble { display: flex; gap: 5px; width: 84px; } #ds-popup [data-ds=\"paramount\"] .pvx-msg.is-typing i { width: 6px; height: 6px; border-radius: 50%; background: var(--mu); animation: pvx-blink 1s infinite; } #ds-popup [data-ds=\"paramount\"] .pvx-msg.is-typing i:nth-child(2) { animation-delay: .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-msg.is-typing i:nth-child(3) { animation-delay: .3s; } @keyframes pvx-blink { 0%, 100% { opacity: .25; } 50% { opacity: 1; } } #ds-popup [data-ds=\"paramount\"] .pvx-write { width: 100%; display: flex; flex-direction: column; gap: 6px; flex: none; } #ds-popup [data-ds=\"paramount\"] .pvx-write form { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 0; height: 22px; } #ds-popup [data-ds=\"paramount\"] .pvx-write input { flex: 1; min-width: 0; height: 44px; padding: 0; border: 0; border-radius: 0; background: transparent; outline: none; box-shadow: none; font: 400 12px/16px var(--font); color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-write input::placeholder { color: var(--ph); opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-write button { min-height: 44px; min-width: 44px; padding: 0 4px; font: 700 12px/16px var(--font); color: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-write button:hover { color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-write .rule { height: 1px; background: var(--ph); } #ds-popup [data-ds=\"paramount\"] .pvx-write:focus-within .rule { background: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-write input:focus-visible { outline: none; } #ds-popup [data-ds=\"paramount\"] .pvx-chat__acts { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px 16px; flex: none; } #ds-popup [data-ds=\"paramount\"] .pvx-chat__acts button { display: flex; align-items: center; gap: 6px; min-height: 44px; white-space: nowrap; font: 900 12px/16px var(--font); text-transform: uppercase; } #ds-popup [data-ds=\"paramount\"] .pvx-chat__acts img { width: 46px; height: 36px; transition: filter .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-chat__acts button:hover img { filter: brightness(1.3); } #ds-popup [data-ds=\"paramount\"] .pvx-qap { width: 350px; padding: 26px 23px; display: flex; flex-direction: column; gap: 16px; } #ds-popup [data-ds=\"paramount\"] .pvx-qap__head { display: flex; justify-content: space-between; align-items: center; } #ds-popup [data-ds=\"paramount\"] .pvx-qap__head h4 { margin: 0; font: 700 16px/20px var(--font); color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-qap__head .pvx-close img { width: 20.2px; height: 20.2px; } #ds-popup [data-ds=\"paramount\"] .pvx-qaentry { width: 100%; height: 88.8px; border-radius: 8px 0 8px 8px; background: var(--mad); transition: background .15s, box-shadow .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-qaentry:focus-within { background: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-qaentry.is-error { box-shadow: inset 0 0 0 1px var(--err); } #ds-popup [data-ds=\"paramount\"] .pvx-qaentry textarea { display: block; width: 100%; height: 100%; padding: 16px 21px; border: 0; background: transparent; resize: none; outline: none; box-shadow: none; font: 400 12px/16px var(--font); color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-qaentry textarea::placeholder { color: #fff; opacity: 1; } #ds-popup [data-ds=\"paramount\"] .pvx-qaentry:focus-within textarea::placeholder { color: transparent; } #ds-popup [data-ds=\"paramount\"] .pvx-qaentry textarea:focus-visible { outline: 2px solid #fff; outline-offset: 2px; border-radius: 8px 0 8px 8px; } #ds-popup [data-ds=\"paramount\"] .pvx-opts { display: flex; flex-direction: column; gap: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-opt { display: flex; gap: 10px; align-items: center; min-height: 44px; text-align: left; font: 500 12px/15px var(--font); color: var(--mu); } #ds-popup [data-ds=\"paramount\"] .pvx-opt__dot { flex: none; width: 18px; height: 18px; border-radius: 50%; border: 1px solid var(--mu); display: flex; align-items: center; justify-content: center; transition: border-color .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-opt__dot::after { content: \"\"; width: 10px; height: 10px; border-radius: 50%; background: var(--br); transform: scale(0); transition: transform .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-opt:hover { color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-opt:hover .pvx-opt__dot { border-color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-opt[aria-checked=\"true\"] { color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-opt[aria-checked=\"true\"] .pvx-opt__dot { border-color: var(--br); } #ds-popup [data-ds=\"paramount\"] .pvx-opt[aria-checked=\"true\"] .pvx-opt__dot::after { transform: scale(1); } #ds-popup [data-ds=\"paramount\"] .pvx-qap .pvx-outline { width: 100%; } #ds-popup [data-ds=\"paramount\"] .pvx-qaslot { min-height: 76px; display: flex; flex-direction: column; justify-content: center; } #ds-popup [data-ds=\"paramount\"] .pvx-qasent { padding: 14px 16px; border-radius: 8px; background: var(--msg); font: 400 12px/16px var(--font); overflow-wrap: anywhere; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; } #ds-popup [data-ds=\"paramount\"] .pvx-qasent b { display: block; margin-bottom: 4px; font: 900 10px/12px var(--font); letter-spacing: .08em; color: var(--br); text-transform: uppercase; } #ds-popup [data-ds=\"paramount\"] .pvx-qaslot .pvx-hint { text-align: left; } #ds-popup [data-ds=\"paramount\"] .pvx-legal { font: 500 9px/19px var(--font); color: var(--mu); } #ds-popup [data-ds=\"paramount\"] .pvx-co { height: 300px; overflow: hidden; } #ds-popup [data-ds=\"paramount\"] .pvx-co__head { height: 41px; background: var(--bc); display: flex; align-items: center; justify-content: center; font: 700 12px/16px var(--font); letter-spacing: .02em; color: var(--lab); } #ds-popup [data-ds=\"paramount\"] .pvx-co .pvx-slides { display: grid; height: 215px; } #ds-popup [data-ds=\"paramount\"] .pvx-slide { grid-area: 1 / 1; position: relative; text-align: center; transition: opacity .25s; } #ds-popup [data-ds=\"paramount\"] .pvx-slide[aria-hidden=\"true\"] { opacity: 0; visibility: hidden; } #ds-popup [data-ds=\"paramount\"] .pvx-slide h5 { margin: 12px 0 0; font: 700 20px/24px var(--font); color: #fff; } #ds-popup [data-ds=\"paramount\"] .pvx-slide p { width: 232px; max-width: calc(100% - 32px); margin: 8px auto 0; font: 500 12px/15px var(--font); color: var(--mu); } #ds-popup [data-ds=\"paramount\"] .pvx-slide .gfx { position: absolute; left: 50%; top: 100px; width: 145px; height: 95px; margin-left: -72.5px; display: grid; place-items: center; } #ds-popup [data-ds=\"paramount\"] .pvx-slide .gfx img { width: 145px; height: 95px; } #ds-popup [data-ds=\"paramount\"] .pvx-slide .gfx.hand img { width: 64px; height: 73px; } #ds-popup [data-ds=\"paramount\"] .pvx-dots { display: flex; justify-content: center; margin-top: -6px; } #ds-popup [data-ds=\"paramount\"] .pvx-dots button { display: grid; place-items: center; width: 44px; height: 44px; } #ds-popup [data-ds=\"paramount\"] .pvx-dots button span { width: 10px; height: 10px; border-radius: 50%; background: var(--eb); transition: background .15s; } #ds-popup [data-ds=\"paramount\"] .pvx-dots button[aria-selected=\"true\"] span { background: var(--br); } @media (max-width: 760px) { #ds-popup [data-ds=\"paramount\"] .pvx-btngrid { grid-template-columns: minmax(0, 250px); } #ds-popup [data-ds=\"paramount\"] .pvx-btngrid > * { grid-column: 1 !important; grid-row: auto !important; } #ds-popup [data-ds=\"paramount\"] .pvx-btngrid .pvx-attach { justify-self: center; order: 9; } #ds-popup [data-ds=\"paramount\"] .d-live { min-height: 73px; } #ds-popup [data-ds=\"paramount\"] .pvx-scene { aspect-ratio: auto; height: 460px; min-height: 0; } #ds-popup [data-ds=\"paramount\"] .pvx-hud-logo { width: 56px; left: 16px; top: 18px; } #ds-popup [data-ds=\"paramount\"] .pvx-scene .pvx-count { top: 16px; } #ds-popup [data-ds=\"paramount\"] .pvx-scene .pvx-envbtn { left: 16px; bottom: 16px; } #ds-popup [data-ds=\"paramount\"] .pvx-envmenu { left: 16px; bottom: 70px; } #ds-popup [data-ds=\"paramount\"] .pvx-dc { width: 96px; height: 96px; margin-left: -48px; bottom: 14px; border-radius: 24px; } #ds-popup [data-ds=\"paramount\"] .pvx-dc img { width: 96px; height: 96px; } #ds-popup [data-ds=\"paramount\"] .pvx-hotspot { left: 40%; top: 40%; } #ds-popup [data-ds=\"paramount\"] .pvx-take { left: 64%; top: 46%; } #ds-popup [data-ds=\"paramount\"] .pvx-prompt { padding: 28px 20px 24px; } #ds-popup [data-ds=\"paramount\"] .pvx-prompt .pvx-close { right: 18px; top: 18px; } #ds-popup [data-ds=\"paramount\"] .pvx-pair { flex-direction: column; } #ds-popup [data-ds=\"paramount\"] .pvx-pair .pvx-outline { flex: none; width: 100%; } #ds-popup [data-ds=\"paramount\"] .pvx-stage { padding: 28px 16px; } #ds-popup [data-ds=\"paramount\"] .pvx-emo { min-height: 300px; } #ds-popup [data-ds=\"paramount\"] .pvx-chat { padding: 22px 16px; } #ds-popup [data-ds=\"paramount\"] .pvx-chat__acts { gap: 4px 10px; } } @media (prefers-reduced-motion: reduce) { #ds-popup [data-ds=\"paramount\"] .pvx-hotspot::after, #ds-popup [data-ds=\"paramount\"] .pvx-tip .hand, #ds-popup [data-ds=\"paramount\"] .pvx-msg.is-typing i { animation: none; } #ds-popup [data-ds=\"paramount\"] .pvx-floater { animation-duration: .01ms; } #ds-popup [data-ds=\"paramount\"] .pvx-world, #ds-popup [data-ds=\"paramount\"] .pvx-fade, #ds-popup [data-ds=\"paramount\"] .pvx-white, #ds-popup [data-ds=\"paramount\"] .pvx-white img, #ds-popup [data-ds=\"paramount\"] .pvx-toast { transition: none; } }";
  C.components = {
    html: CUSTOM.map(function (c, i) { return '<div class="d' + (c.width && c.width !== 6 ? ' w' + c.width : '') + '"><div class="d-head"><span class="d-name">' + esc(c.name) + '</span><span class="d-uses">' + esc(c.uses) + '</span></div><div data-custom="' + i + '">' + c.html + '</div></div>'; }).join(''),
    init: function (root) { CUSTOM.forEach(function (c, i) { if (c.init) c.init(root.querySelector('[data-custom="' + i + '"]')); }); }
  };
  DSPopup.register('paramount', C);
})();

/* Sherri Show TV — daytime talk show site. Opens with href="#ds-sherri".
   Built from the sherri-show-tv repo (Vsenses55/sherri-show-tv): component classes and the Figma primitives sheet.
   Shows, guests, dates and episodes here are sample data. */
(function () {
  var CUSTOM = [
    {
      name: 'Section header & ticker',
      uses: 'SectionHeader · HeaderLabel · Ticker',
      width: 12,
      html:
        '<div class="s-head"><svg class="dots" viewBox="0 0 47 13" aria-hidden="true"><circle cx="6.5" cy="6.5" r="6.5" fill="#FEDC61"/><circle cx="23.5" cy="6.5" r="6.5" fill="#00DCE6"/><circle cx="40.5" cy="6.5" r="6.5" fill="#FF5872"/></svg>' +
        '<p class="s-title">The Sherri Show</p><button class="s-more" type="button" data-more>See more<svg viewBox="0 0 8 9" aria-hidden="true"><path d="M0 0l8 4.5L0 9z" fill="currentColor"/></svg></button></div>' +
        '<div class="s-tick"><button class="s-tick-btn" type="button" aria-label="Pause announcements" aria-pressed="false" data-tick></button><div class="s-tick-win" role="marquee" aria-label="Announcements"><div class="s-tick-track" data-track></div></div></div>' +
        '<p class="d-live" data-live>Announcements scrolling</p>',
      init: function (el) {
        var items = ['Upcoming guest: Oprah Winfrey (sample)', 'Special giveaway this Friday', 'New episodes every weekday at 2pm'];
        var line = items.map(function (t) { return '<span>' + t + '</span><span aria-hidden="true">•</span>'; }).join('');
        var track = el.querySelector('[data-track]'), tick = el.querySelector('.s-tick'), btn = el.querySelector('[data-tick]'), live = el.querySelector('[data-live]');
        track.innerHTML = line + line + line + line;
        var PAUSE = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2h3v12H4zM9 2h3v12H9z" fill="currentColor"/></svg>';
        var PLAY = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2l10 6-10 6z" fill="currentColor"/></svg>';
        function set(paused) {
          tick.classList.toggle('is-paused', paused);
          btn.setAttribute('aria-pressed', String(paused));
          btn.setAttribute('aria-label', paused ? 'Play announcements' : 'Pause announcements');
          btn.innerHTML = paused ? PLAY : PAUSE;
          live.textContent = paused ? 'Announcements paused' : 'Announcements scrolling';
        }
        set(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        btn.addEventListener('click', function () { set(!tick.classList.contains('is-paused')); });
        el.querySelector('[data-more]').addEventListener('click', function () { live.innerHTML = '<strong>See more</strong> opens the full section page (demo).'; });
      }
    },
    {
      name: 'Buttons',
      uses: 'Button: primary · secondary · text-arrow · link · small · arrow-up',
      width: 6,
      html:
        '<div class="s-stack"><button class="s-btn" type="button" data-b>Submit</button><button class="s-btn teal" type="button" data-b>Subscribe</button><button class="s-btn" type="button" disabled>Submit</button>' +
        '<button class="s-arrow" type="button" data-b>Watch now<svg viewBox="0 0 18 9" aria-hidden="true"><path d="M0 4h15.5L12.5 1l.9-.9L18 4.5 13.4 9l-.9-.9 3-3H0z" fill="currentColor"/></svg></button>' +
        '<button class="s-link" type="button" data-b>Learn more<svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="9" fill="#222"/><path d="M7 5l4 4-4 4" stroke="#fff" stroke-width="2" fill="none"/></svg></button>' +
        '<button class="s-small" type="button" data-b>Update</button>' +
        '<span class="s-dark"><button class="s-up" type="button" aria-label="Back to top" data-b data-label="Back to top"><svg viewBox="0 0 50 50" aria-hidden="true"><circle cx="25" cy="25" r="24.5" fill="none" stroke="currentColor"/><path d="M25 17l-7 7 1.4 1.4 4.6-4.6V33h2V20.8l4.6 4.6L32 24z" fill="currentColor"/></svg></button></span></div>' +
        '<p class="d-live" data-live>Press any button</p>',
      init: function (el) {
        var live = el.querySelector('[data-live]');
        Array.prototype.forEach.call(el.querySelectorAll('[data-b]'), function (b) {
          b.addEventListener('click', function () { live.innerHTML = 'Pressed <strong>' + (b.getAttribute('data-label') || b.textContent) + '</strong>'; });
        });
      }
    },
    {
      name: 'Stay connected form',
      uses: 'InputField: default · hover · focus · error · StayConnected',
      width: 6,
      html:
        '<form class="s-form" novalidate>' +
        '<div class="s-field"><label class="s-lab" for="s-name">Name*</label><div class="s-box"><input id="s-name" type="text" placeholder="Name" autocomplete="off" aria-describedby="s-name-msg"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff" stroke-width="2"/></svg></div><p class="s-msg" id="s-name-msg"></p></div>' +
        '<div class="s-field"><label class="s-lab" for="s-mail">Email Address*</label><div class="s-box"><input id="s-mail" type="email" placeholder="Email Address" autocomplete="off" aria-describedby="s-mail-msg"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff" stroke-width="2"/></svg></div><p class="s-msg" id="s-mail-msg">We only send show news and giveaways.</p></div>' +
        '<div class="s-field" data-terms><label class="s-check"><input type="checkbox" id="s-terms" aria-describedby="s-terms-msg"><span class="s-cb"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7l3.5 3.5L12 4" stroke="currentColor" stroke-width="2.2" fill="none"/></svg></span>I agree to the terms and conditions</label><p class="s-msg" id="s-terms-msg"></p></div>' +
        '<div><button class="s-btn teal" type="submit">Subscribe</button></div></form><p class="d-live" data-live></p>',
      init: function (el) {
        var form = el.querySelector('form'), live = el.querySelector('[data-live]');
        var name = el.querySelector('#s-name'), mail = el.querySelector('#s-mail'), terms = el.querySelector('#s-terms');
        var HELP = 'We only send show news and giveaways.';
        function setErr(input, msg, fallback) {
          var f = input.closest('.s-field'), m = f.querySelector('.s-msg');
          f.classList.toggle('is-error', !!msg);
          m.textContent = msg || fallback || '';
          input.setAttribute('aria-invalid', msg ? 'true' : 'false');
        }
        name.addEventListener('input', function () { setErr(name, ''); });
        mail.addEventListener('input', function () { setErr(mail, '', HELP); });
        terms.addEventListener('change', function () { setErr(terms, ''); });
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var first = null, n = name.value.trim(), v = mail.value.trim();
          if (!n) { setErr(name, 'Enter your name.'); first = first || name; } else setErr(name, '');
          if (!v) { setErr(mail, 'Enter your email address.'); first = first || mail; }
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { setErr(mail, 'Enter an email address like name@example.com.'); first = first || mail; }
          else setErr(mail, '', HELP);
          if (!terms.checked) { setErr(terms, 'Check the box to agree to the terms.'); first = first || terms; } else setErr(terms, '');
          if (first) { live.textContent = ''; first.focus(); return; }
          live.innerHTML = '<strong>Subscribed.</strong> This is a demo, so nothing was sent.';
          form.reset(); setErr(mail, '', HELP);
        });
      }
    },
    {
      name: 'Ticket calendar',
      uses: 'Calendar · DateCard · EventCard · ticket button (sample schedule)',
      width: 12,
      html: '<div class="s-cal"><div class="s-dates" role="radiogroup" aria-label="Taping date" data-dates></div><div class="s-evs"><div class="s-ph" aria-hidden="true">Guest image</div><div class="s-list" data-list aria-live="polite"></div></div></div><p class="d-live" data-live>Pick a date, then choose a taping</p>',
      init: function (el) {
        var days = [
          ['SEPT', 30, 'TUE', [['morning', 'Ja Rule', '10:00 AM', 1], ['afternoon', 'Ja Rule', '02:00 PM', 0]]],
          ['OCT', 1, 'WED', [['morning', 'Common', '10:00 AM', 1], ['afternoon', 'Common', '02:00 PM', 1]]],
          ['OCT', 2, 'THU', [['morning', 'Tiffany Haddish', '10:00 AM', 0]]],
          ['OCT', 3, 'FRI', [['morning', 'Ne-Yo', '10:00 AM', 1], ['afternoon', 'Ne-Yo', '02:00 PM', 1]]],
          ['OCT', 4, 'MON', [['afternoon', 'Keke Palmer', '02:00 PM', 1]]],
          ['OCT', 5, 'TUE', [['morning', 'Anthony Anderson', '10:00 AM', 0], ['afternoon', 'Anthony Anderson', '02:00 PM', 0]]],
          ['OCT', 6, 'WED', []]
        ];
        var row = el.querySelector('[data-dates]'), list = el.querySelector('[data-list]'), live = el.querySelector('[data-live]'), sel = 0;
        row.innerHTML = days.map(function (d, i) { return '<button class="s-date" type="button" role="radio" aria-checked="false" tabindex="-1" aria-label="' + d[2] + ' ' + d[0] + ' ' + d[1] + '"><span class="top"><span class="m">' + d[0] + '</span><span class="n">' + d[1] + '</span></span><span class="b">' + d[2] + '</span></button>'; }).join('');
        var btns = Array.prototype.slice.call(row.querySelectorAll('.s-date'));
        function pick(i, focus) {
          sel = i;
          btns.forEach(function (b, j) { b.setAttribute('aria-checked', String(j === i)); b.tabIndex = j === i ? 0 : -1; });
          if (focus) { btns[i].focus(); btns[i].scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
          var ev = days[i][3];
          list.innerHTML = ev.length ? ev.map(function (e, k) {
            return '<div class="s-ev"><div class="s-ev-info"><p class="s-ev-type">' + (e[0] === 'morning' ? 'Morning Taping' : 'Afternoon Taping') + '</p><p class="s-ev-guest">Guest: ' + e[1] + '</p><p class="s-ev-time">' + e[2] + '</p></div><button class="s-tk" type="button" data-ev="' + k + '"' + (e[3] ? '' : ' disabled') + '>' + (e[3] ? 'TICKETS' : 'SOLD OUT') + '</button></div>';
          }).join('') : '<p class="s-none">No events scheduled</p>';
        }
        row.addEventListener('click', function (e) { var b = e.target.closest('.s-date'); if (b) { pick(btns.indexOf(b)); live.textContent = 'Pick a taping for ' + b.getAttribute('aria-label'); } });
        row.addEventListener('keydown', function (e) {
          var k = e.key, i = sel;
          if (k === 'ArrowRight' || k === 'ArrowDown') i = Math.min(btns.length - 1, sel + 1);
          else if (k === 'ArrowLeft' || k === 'ArrowUp') i = Math.max(0, sel - 1);
          else if (k === 'Home') i = 0; else if (k === 'End') i = btns.length - 1; else return;
          e.preventDefault(); pick(i, true);
        });
        list.addEventListener('click', function (e) {
          var b = e.target.closest('.s-tk'); if (!b || b.disabled) return;
          var ev = days[sel][3][+b.getAttribute('data-ev')];
          live.innerHTML = 'Held 2 tickets for <strong>' + ev[1] + ', ' + days[sel][2] + ' ' + days[sel][0] + ' ' + days[sel][1] + ' at ' + ev[2] + '</strong> (demo).';
        });
        pick(0);
      }
    },
    {
      name: 'Episode player & search',
      uses: 'NavigationBar search · VideoPlayer · Player playlist',
      width: 12,
      html:
        '<div class="s-search"><svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="7.5" cy="7.5" r="6" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 12l5 5" stroke="currentColor" stroke-width="2"/></svg><input type="search" placeholder="Search Sherri Show" aria-label="Search episodes" aria-controls="s-plist" autocomplete="off" data-q></div>' +
        '<div class="s-player"><div class="s-screen" aria-live="polite"><span class="play" aria-hidden="true"><svg viewBox="0 0 28 28"><path d="M8 4l16 10L8 24z" fill="#fff"/></svg></span><span class="k" data-k></span><span class="t" data-t></span></div>' +
        '<div class="s-rail"><ul class="s-plist" id="s-plist" aria-label="Episodes" data-list></ul></div></div>',
      init: function (el) {
        var eps = [['Episode 1', 'Celebrity guest hour'], ['Episode 2', 'Friday giveaway special'], ['Episode 3', 'Cooking with Sherri'], ['Episode 4', 'Music guest performance'], ['Episode 5', 'Lifestyle makeover'], ['Episode 6', 'Audience Q&A']];
        var list = el.querySelector('[data-list]'), q = el.querySelector('[data-q]'), cur = 0;
        function show() { el.querySelector('[data-k]').textContent = 'Now playing · ' + eps[cur][0] + ' (sample)'; el.querySelector('[data-t]').textContent = eps[cur][1]; }
        function render() {
          var term = q.value.trim().toLowerCase();
          var hits = eps.map(function (e, i) { return i; }).filter(function (i) { return !term || (eps[i][0] + ' ' + eps[i][1]).toLowerCase().indexOf(term) > -1; });
          list.innerHTML = hits.length ? hits.map(function (i) { return '<li><button class="s-ep" type="button" data-i="' + i + '" aria-current="' + (i === cur) + '"><span class="k">' + eps[i][0] + '</span><span class="t">' + eps[i][1] + '</span></button></li>'; }).join('') : '<li class="s-empty">No episodes match “' + q.value.replace(/[<>&"]/g, '') + '”. Try another word.</li>';
        }
        list.addEventListener('click', function (e) { var b = e.target.closest('.s-ep'); if (!b) return; cur = +b.getAttribute('data-i'); show(); render(); var nb = list.querySelector('[data-i="' + cur + '"]'); if (nb) nb.focus(); });
        list.addEventListener('keydown', function (e) {
          if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
          var all = Array.prototype.slice.call(list.querySelectorAll('.s-ep')), i = all.indexOf(document.activeElement);
          if (i < 0) return; e.preventDefault();
          var n = all[e.key === 'ArrowDown' ? Math.min(all.length - 1, i + 1) : Math.max(0, i - 1)]; n.focus();
        });
        q.addEventListener('input', render);
        q.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown') { var f = list.querySelector('.s-ep'); if (f) { e.preventDefault(); f.focus(); } } });
        show(); render();
      }
    }
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  DSPopup.register('sherri', {
  name: 'Sherri Show TV Design System',
  intro: 'Every component below works. Try them with the mouse and the keyboard. Shows, guests and dates are sample data.',
  cta: { label: 'View live site', url: 'https://vsenses55.github.io/sherri-show-tv/' },

  theme: {
    font: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
    primary: '#fe3b84', primaryHover: '#e5347a', onPrimary: '#ffffff',
    accent: '#032a36', onAccent: '#ffffff',
    danger: '#fe3b84',
    surface: '#ffffff', hover: '#e4fafc', focusFill: '#e4fafc',
    text: '#222222', textMuted: '#4e4e4e', placeholder: '#7a7a7a',
    border: '#d3d3d3', borderStrong: '#7a7a7a',
    disabled: '#f4f4f4', disabledInk: '#d3d3d3',
    cta: '#0b4152', onCta: '#ffffff',
    radiusControl: '4px', radiusField: '4px', radiusCard: '8px', radiusOverlay: '8px'
  },

  colors: [
    { label: 'Brand', tokens: [['primary-500', '#FE3B84', 'Primary buttons, links, errors, selected date'], ['secondary-500', '#43BBCF', 'Secondary buttons, ticket CTA, field focus'], ['accent-500', '#FFD755', 'Playlist scrollbar, active episode'], ['deep-teal', '#032A36', 'Footer, playlist rail, field labels'], ['info-500', '#1F9BC1', 'Terms checkbox']] },
    { label: 'Show dots', tokens: [['dot-yellow', '#FEDC61', 'Section header dots'], ['dot-cyan', '#00DCE6', 'Section header dots'], ['dot-coral', '#FF5872', 'Section header dots, search icon']] },
    { label: 'Surfaces & lines', tokens: [['surface', '#FFFFFF', 'Page, date tiles'], ['surface-subtle', '#F4F4F4', 'Fields, ticker, calendar panel'], ['surface-tint', '#E4FAFC', 'Search bar, field hover, footer links'], ['border-field', '#E9E9E9', 'Field outline'], ['border-default', '#D3D3D3', 'Ticker, date tiles, panels']] },
    { label: 'Text', tokens: [['text-heading', '#222222', 'Headings, card titles'], ['text-body', '#4E4E4E', 'Reading text'], ['text-nav', '#383838', 'Search and location text'], ['text-helper', '#7A7A7A', 'Helper text, placeholders, nav links'], ['text-ticker', '#646464', 'Ticker announcements']] },
    { label: 'Status (Figma primitives)', tokens: [['danger-500', '#FE3B3E', 'Destructive states'], ['success-500', '#3BFEBD', 'Confirmations'], ['warning-500', '#FFB555', 'Warnings'], ['danger-100', '#FFD8D8', 'Error tint'], ['success-100', '#D8FFF2', 'Success tint']] }
  ],

  typeNote: 'Inter, self-hosted in five weights: Regular 400, Medium 500, Semi Bold 600, Bold 700 and Black 900. Black uppercase carries headings, buttons and labels; Regular carries reading text. Section titles step 24, 32, 38 at the 834px and 1376px breakpoints.',
  type: [
    ['section title', 900, 38, 46, 24, 29, 'THE SHERRI SHOW'],
    ['page heading', 900, 36, 54, 24, 36, 'LATEST EPISODE'],
    ['date numeral', 900, 38, 38, 38, 38, '30'],
    ['card title', 900, 18, 22, 18, 22, 'NAME OF GUEST'],
    ['button', 900, 16, 16, 16, 16, 'SUBMIT'],
    ['eyebrow', 900, 14, 16, 14, 16, 'MON, SEPTEMBER 10'],
    ['nav link', 700, 14, 21, 12, 18, 'Episodes'],
    ['body', 400, 16, 24, 16, 24, 'New episodes every weekday at 2pm.'],
    ['field label', 400, 16, 22, 16, 22, 'Email Address'],
    ['helper', 400, 12, 16, 12, 16, 'We only send show news and giveaways.'],
    ['micro button', 900, 10, 13, 10, 13, 'UPDATE']
  ],

  spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 80],
  spacingNote: 'Pixel values as used in the build. Recipes: label to field 16, between cards 16, between columns 24, section padding 40 on mobile and 60 on desktop.',
  radii: [['radius-sm', '4px', 'buttons, fields, ticker, date tiles'], ['radius-md', '8px', 'thumbnails, panels, footer'], ['radius-full', '999px', 'back-to-top button']],

  pairs: [
    ['White on primary pink', '#ffffff', '#fe3b84', 'Aa'],
    ['White on secondary teal', '#ffffff', '#43bbcf', 'Aa'],
    ['White on deep teal', '#ffffff', '#032a36', 'Aa'],
    ['Deep teal on yellow', '#032a36', '#ffd755', 'Aa'],
    ['Heading on white', '#222222', '#ffffff', 'Aa'],
    ['Body on white', '#4e4e4e', '#ffffff', 'Aa'],
    ['Pink link on white', '#fe3b84', '#ffffff', 'Aa'],
    ['Helper on white', '#7a7a7a', '#ffffff', 'Aa'],
    ['Placeholder on field', '#7a7a7a', '#f4f4f4', 'Aa'],
    ['Ticker on subtle', '#646464', '#f4f4f4', 'Aa'],
    ['Subscribe label on teal', '#1f9bc1', '#43bbcf', 'Aa'],
    ['Unselected date on white', '#e9e9e9', '#ffffff', '30']
  ],

  starters: {
    segmented: { label: 'Taping', options: ['Morning taping', 'Afternoon taping'] },
    dropdown: { label: 'Sort episodes', options: ['Newest', 'Most watched', 'Oldest'] },
    chips: { label: 'Browse', options: ['Episodes', 'Videos', 'Giveaways', 'Articles'] },
    accordion: [['How do I get tickets to a taping?', 'Pick a date in the calendar, then choose a morning or afternoon taping with tickets available (sample).'], ['When do new episodes air?', 'New episodes every weekday at 2pm (sample).']]
  },

    fontUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap',
    css: " #ds-popup [data-ds=\"sherri\"] .s-row{display: flex;flex-wrap: wrap;gap: 16px;align-items: center}#ds-popup [data-ds=\"sherri\"] .s-stack{display: flex;flex-direction: column;align-items: flex-start;gap: 16px}#ds-popup [data-ds=\"sherri\"] .s-stack .s-arrow{align-self: flex-start}#ds-popup [data-ds=\"sherri\"] .s-btn{display: inline-flex;align-items: center;justify-content: center;min-height: 56px;padding: 0 42px;border: 0;border-radius: 4px;background: #fe3b84;color: #fff;font: 900 16px/16px var(--font);text-transform: uppercase;cursor: pointer;transition: background-color .15s}#ds-popup [data-ds=\"sherri\"] .s-btn:hover{background: #e5347a}#ds-popup [data-ds=\"sherri\"] .s-btn:active{background: #cc2d6b}#ds-popup [data-ds=\"sherri\"] .s-btn.teal{min-height: 50px;padding: 0 44px;background: #43bbcf}#ds-popup [data-ds=\"sherri\"] .s-btn.teal:hover{background: #5ac5d8}#ds-popup [data-ds=\"sherri\"] .s-btn.teal:active{background: #3aacbe}#ds-popup [data-ds=\"sherri\"] .s-btn:disabled{background: #f4f4f4;color: #d3d3d3;cursor: not-allowed}#ds-popup [data-ds=\"sherri\"] .s-arrow{display: inline-flex;align-items: center;gap: 12px;min-height: 44px;padding: 0 0 8px;border: 0;border-bottom: 1px solid #222;background: none;color: #222;font: 900 16px/16px var(--font);text-transform: uppercase;cursor: pointer;transition: color .15s,border-color .15s;align-self: flex-end}#ds-popup [data-ds=\"sherri\"] .s-arrow:hover{color: #fe3b84;border-color: #fe3b84}#ds-popup [data-ds=\"sherri\"] .s-arrow:active{color: #cc2d6b;border-color: #cc2d6b}#ds-popup [data-ds=\"sherri\"] .s-arrow svg{width: 18px;height: 9px}#ds-popup [data-ds=\"sherri\"] .s-link{display: inline-flex;align-items: center;gap: 10px;min-height: 44px;padding: 0;border: 0;background: none;color: #222;font: 900 16px/16px var(--font);text-transform: uppercase;cursor: pointer}#ds-popup [data-ds=\"sherri\"] .s-link:hover{opacity: .8}#ds-popup [data-ds=\"sherri\"] .s-link svg{width: 18px;height: 18px}#ds-popup [data-ds=\"sherri\"] .s-small{position: relative;height: 23px;min-width: 70px;padding: 0 11px;border: 0;border-radius: 4px;background: #f4f4f4;color: #666;font: 900 10px/13px var(--font);text-transform: uppercase;cursor: pointer}#ds-popup [data-ds=\"sherri\"] .s-small::after{content: \"\";position: absolute;inset: -11px -4px}#ds-popup [data-ds=\"sherri\"] .s-small:hover{background: #e5e5e5}#ds-popup [data-ds=\"sherri\"] .s-small:active{background: #d4d4d4}#ds-popup [data-ds=\"sherri\"] .s-dark{display: inline-flex;padding: 8px;border-radius: 8px;background: #032a36}#ds-popup [data-ds=\"sherri\"] .s-up{width: 50px;height: 50px;padding: 0;border: 0;border-radius: 50%;background: none;color: #e4fafc;cursor: pointer;transition: opacity .15s}#ds-popup [data-ds=\"sherri\"] .s-up:hover{opacity: .8}#ds-popup [data-ds=\"sherri\"] .s-up svg{width: 50px;height: 50px;display: block}#ds-popup [data-ds=\"sherri\"] .s-up:focus-visible{outline-color: #e4fafc}#ds-popup [data-ds=\"sherri\"] .s-head{display: flex;flex-wrap: wrap;align-items: center;gap: 8px 16px}#ds-popup [data-ds=\"sherri\"] .s-head svg.dots{width: 47px;height: 13px;flex: none}#ds-popup [data-ds=\"sherri\"] .s-title{font: 900 28px/1.2 var(--font);text-transform: uppercase;color: #222}#ds-popup [data-ds=\"sherri\"] .s-more{margin-left: auto;display: inline-flex;align-items: center;gap: 8px;min-height: 44px;padding: 0;border: 0;background: none;color: #fe3b84;font: 900 14px/16px var(--font);text-transform: uppercase;cursor: pointer}#ds-popup [data-ds=\"sherri\"] .s-more:hover{opacity: .8}#ds-popup [data-ds=\"sherri\"] .s-more svg{width: 8px;height: 9px}#ds-popup [data-ds=\"sherri\"] .s-tick{display: flex;align-items: center;gap: 8px;min-width: 0}#ds-popup [data-ds=\"sherri\"] .s-tick-win{flex: 1;min-width: 0;height: 28px;display: flex;align-items: center;overflow: hidden;border-radius: 4px;background: #f4f4f4;box-shadow: inset 0 0 0 1px #d3d3d3}#ds-popup [data-ds=\"sherri\"] .s-tick-track{display: flex;white-space: nowrap;color: #646464;font: 500 12px/16px var(--font);text-transform: uppercase;animation: ds-sherri-tick 40s linear infinite}#ds-popup [data-ds=\"sherri\"] .s-tick-track span{padding: 0 16px}#ds-popup [data-ds=\"sherri\"] .s-tick.is-paused .s-tick-track{animation-play-state: paused}@keyframes ds-sherri-tick{to{transform: translateX(-50%)}}#ds-popup [data-ds=\"sherri\"] .s-tick-btn{position: relative;width: 28px;height: 28px;flex: none;display: grid;place-items: center;padding: 0;border: 1px solid #d3d3d3;border-radius: 4px;background: #f4f4f4;color: #646464;cursor: pointer}#ds-popup [data-ds=\"sherri\"] .s-tick-btn::after{content: \"\";position: absolute;inset: -8px}#ds-popup [data-ds=\"sherri\"] .s-tick-btn:hover{background: #e4fafc}#ds-popup [data-ds=\"sherri\"] .s-tick-btn svg{width: 12px;height: 12px}#ds-popup [data-ds=\"sherri\"] .s-form{display: flex;flex-direction: column;gap: 20px}#ds-popup [data-ds=\"sherri\"] .s-field{display: flex;flex-direction: column;gap: 16px}#ds-popup [data-ds=\"sherri\"] .s-lab{font: 400 16px/22px var(--font);color: #032a36}#ds-popup [data-ds=\"sherri\"] .s-box{height: 50px;display: flex;align-items: center;gap: 8px;padding: 0 16px;border-radius: 4px;background: #f4f4f4;box-shadow: inset 0 0 0 1px #e9e9e9;transition: background-color .15s,box-shadow .15s}#ds-popup [data-ds=\"sherri\"] .s-box:hover{background: #e4fafc}#ds-popup [data-ds=\"sherri\"] .s-box:focus-within{background: #fff;box-shadow: inset 0 0 0 2px #43bbcf}#ds-popup [data-ds=\"sherri\"] .s-box input{flex: 1;min-width: 0;height: 100%;border: 0;background: transparent;outline: none;color: #032a36;font: 400 16px/22px var(--font)}#ds-popup [data-ds=\"sherri\"] .s-box input::placeholder{color: #7a7a7a}#ds-popup [data-ds=\"sherri\"] .s-box input:focus-visible{outline: none}#ds-popup [data-ds=\"sherri\"] .s-box .ic{width: 24px;height: 24px;flex: none;color: #fe3b84;display: none}#ds-popup [data-ds=\"sherri\"] .s-field.is-error .s-box{background: #fff0f3;box-shadow: inset 0 0 0 1px #fe3b84}#ds-popup [data-ds=\"sherri\"] .s-field.is-error .s-box:focus-within{background: #fff;box-shadow: inset 0 0 0 2px #fe3b84}#ds-popup [data-ds=\"sherri\"] .s-field.is-error .s-box .ic{display: block}#ds-popup [data-ds=\"sherri\"] .s-msg{font: 400 12px/16px var(--font);color: #7a7a7a;margin-top: -8px}#ds-popup [data-ds=\"sherri\"] .s-msg:empty{display: none}#ds-popup .is-error > .s-msg{color: #fe3b84}#ds-popup [data-ds=\"sherri\"] .s-check{position: relative;display: flex;align-items: center;gap: 12px;min-height: 44px;color: #222;font: 400 14px/20px var(--font);cursor: pointer}#ds-popup [data-ds=\"sherri\"] .s-check input{position: absolute;width: 20px;height: 20px;opacity: 0;margin: 0}#ds-popup [data-ds=\"sherri\"] .s-cb{width: 20px;height: 20px;flex: none;display: grid;place-items: center;border-radius: 4px;background: #fff;box-shadow: inset 0 0 0 2px #1f9bc1;color: #fff}#ds-popup [data-ds=\"sherri\"] .s-cb svg{width: 14px;height: 14px;opacity: 0}#ds-popup [data-ds=\"sherri\"] .s-check input:checked + .s-cb{background: #1f9bc1}#ds-popup [data-ds=\"sherri\"] .s-check input:checked + .s-cb svg{opacity: 1}#ds-popup [data-ds=\"sherri\"] .s-check input:focus-visible + .s-cb{outline: 2px solid #43bbcf;outline-offset: 2px}#ds-popup .is-error .s-cb{box-shadow: inset 0 0 0 2px #fe3b84}#ds-popup [data-ds=\"sherri\"] .s-cal{min-width: 0;display: flex;flex-direction: column;gap: 10px;padding: 40px 0 32px;border: 1px solid #d3d3d3;border-radius: 8px;background: #f4f4f4}#ds-popup [data-ds=\"sherri\"] .s-dates{display: flex;gap: 24px;overflow-x: auto;padding: 6px 16px 16px;scroll-snap-type: x mandatory;scrollbar-width: none}#ds-popup [data-ds=\"sherri\"] .s-dates::-webkit-scrollbar{display: none}#ds-popup [data-ds=\"sherri\"] .s-date{width: 93px;height: 93px;flex: none;display: flex;flex-direction: column;padding: 0;overflow: hidden;border: 1px solid #d3d3d3;border-radius: 4px;background: #fff;cursor: pointer;scroll-snap-align: center;transition: transform .15s,box-shadow .15s;font-family: var(--font)}#ds-popup [data-ds=\"sherri\"] .s-date:hover{transform: scale(1.05);box-shadow: 0 4px 6px -1px rgb(0 0 0 / .1),0 2px 4px -2px rgb(0 0 0 / .1)}#ds-popup [data-ds=\"sherri\"] .s-date .top{flex: 1;display: flex;flex-direction: column;align-items: center;justify-content: center;color: #e9e9e9;font-weight: 900;transition: color .15s}#ds-popup [data-ds=\"sherri\"] .s-date .m{font-size: 14px;line-height: 14px}#ds-popup [data-ds=\"sherri\"] .s-date .n{font-size: 38px;line-height: 38px}#ds-popup [data-ds=\"sherri\"] .s-date .b{height: 21px;display: grid;place-items: center;background: #032a36;color: #fff;font: 900 14px/16px var(--font);transition: background-color .15s}#ds-popup [data-ds=\"sherri\"] .s-date[aria-checked=\"true\"] .top{color: #222}#ds-popup [data-ds=\"sherri\"] .s-date[aria-checked=\"true\"] .b{background: #fe3b84}#ds-popup [data-ds=\"sherri\"] .s-evs{display: flex;flex-wrap: wrap;gap: 24px;padding: 20px 16px 0}#ds-popup [data-ds=\"sherri\"] .s-ph{flex: 1 1 260px;min-height: 200px;border-radius: 8px;background: #032a36;display: grid;place-items: center;color: #e4fafc;font: 400 12px/16px var(--font)}#ds-popup [data-ds=\"sherri\"] .s-list{flex: 1 1 260px;display: flex;flex-direction: column;justify-content: center;gap: 36px;padding: 0 8px}#ds-popup [data-ds=\"sherri\"] .s-ev{display: flex;flex-direction: column;gap: 12px}#ds-popup [data-ds=\"sherri\"] .s-ev-info{display: flex;flex-direction: column;gap: 4px;color: #222}#ds-popup [data-ds=\"sherri\"] .s-ev-type{font: 900 18px/20px var(--font);text-transform: uppercase;margin-bottom: 2px}#ds-popup [data-ds=\"sherri\"] .s-ev-guest{font: 400 12px/18px var(--font)}#ds-popup [data-ds=\"sherri\"] .s-ev-time{font: 900 14px/16px var(--font);text-transform: uppercase}#ds-popup [data-ds=\"sherri\"] .s-tk{min-height: 44px;padding: 0 10px;border: 0;border-radius: 4px;background: #43bbcf;color: #fff;font: 900 12px/16px var(--font);cursor: pointer;transition: background-color .15s}#ds-popup [data-ds=\"sherri\"] .s-tk:hover{background: #3aa8bb}#ds-popup [data-ds=\"sherri\"] .s-tk:active{background: #329099}#ds-popup [data-ds=\"sherri\"] .s-tk:disabled{background: #fe3b84;opacity: .8;cursor: not-allowed}#ds-popup [data-ds=\"sherri\"] .s-none{color: #7a7a7a;text-align: center;font: 900 18px/22px var(--font);text-transform: uppercase}#ds-popup [data-ds=\"sherri\"] .s-search{height: 44px;display: flex;align-items: center;gap: 8px;padding: 0 24px;background: #e4fafc}#ds-popup [data-ds=\"sherri\"] .s-search svg{width: 18px;height: 18px;flex: none;color: #fc5872}#ds-popup [data-ds=\"sherri\"] .s-search input{flex: 1;min-width: 0;height: 100%;border: 0;background: transparent;outline: none;color: #383838;font: 400 16px/22px var(--font)}#ds-popup [data-ds=\"sherri\"] .s-search input::placeholder{color: #959595}#ds-popup [data-ds=\"sherri\"] .s-search:focus-within{box-shadow: inset 0 0 0 2px #43bbcf}#ds-popup [data-ds=\"sherri\"] .s-search input:focus-visible{outline: none}#ds-popup [data-ds=\"sherri\"] .s-player{display: flex;min-width: 0}#ds-popup [data-ds=\"sherri\"] .s-screen{flex: 1;min-width: 0;aspect-ratio: 16 / 9;max-height: 480px;position: relative;display: flex;flex-direction: column;justify-content: flex-end;gap: 6px;padding: 24px;background: #fe3b84;color: #fff}#ds-popup [data-ds=\"sherri\"] .s-screen .k{font: 900 14px/16px var(--font);text-transform: uppercase}#ds-popup [data-ds=\"sherri\"] .s-screen .t{font: 900 24px/29px var(--font);text-transform: uppercase}#ds-popup [data-ds=\"sherri\"] .s-screen .play{position: absolute;inset: 0;margin: auto;width: 72px;height: 72px;border-radius: 50%;background: rgb(3 42 54 / .85);display: grid;place-items: center}#ds-popup [data-ds=\"sherri\"] .s-screen .play svg{width: 28px;height: 28px}#ds-popup [data-ds=\"sherri\"] .s-rail{position: relative;width: 285px;flex: none;background: #032a36}#ds-popup [data-ds=\"sherri\"] .s-plist{position: absolute;inset: 0;overflow-y: auto;scrollbar-width: thin;scrollbar-color: #ffd755 #032a36;margin: 0;padding: 0;list-style: none}#ds-popup [data-ds=\"sherri\"] .s-plist::-webkit-scrollbar{width: 6px}#ds-popup [data-ds=\"sherri\"] .s-plist::-webkit-scrollbar-track{background: #032a36}#ds-popup [data-ds=\"sherri\"] .s-plist::-webkit-scrollbar-thumb{background: #ffd755}#ds-popup [data-ds=\"sherri\"] .s-ep{display: flex;flex-direction: column;justify-content: flex-end;gap: 4px;width: 100%;height: 120px;padding: 16px 20px;border: 0;border-bottom: 1px solid rgb(228 250 252 / .12);background: #032a36;color: #e4fafc;text-align: left;cursor: pointer;opacity: .7;transition: opacity .15s}#ds-popup [data-ds=\"sherri\"] .s-ep:hover{opacity: .9}#ds-popup [data-ds=\"sherri\"] .s-ep[aria-current=\"true\"]{opacity: 1;background: #0b4152}#ds-popup [data-ds=\"sherri\"] .s-ep .k{font: 900 12px/16px var(--font);text-transform: uppercase;color: #ffd755}#ds-popup [data-ds=\"sherri\"] .s-ep .t{font: 900 16px/20px var(--font);text-transform: uppercase}#ds-popup [data-ds=\"sherri\"] .s-ep:focus-visible{outline: 2px solid #ffd755;outline-offset: -4px}#ds-popup [data-ds=\"sherri\"] .s-empty{padding: 24px 20px;color: #e4fafc;font: 400 14px/20px var(--font)}@media (prefers-reduced-motion: reduce){#ds-popup [data-ds=\"sherri\"] .s-tick-track{animation-play-state: paused}#ds-popup [data-ds=\"sherri\"] .s-date:hover{transform: none}}@media (max-width: 900px){#ds-popup [data-ds=\"sherri\"] .s-title{font-size: 22px;flex-basis: 100%}#ds-popup [data-ds=\"sherri\"] .s-more{margin-left: 0}#ds-popup [data-ds=\"sherri\"] .s-player{flex-direction: column}#ds-popup [data-ds=\"sherri\"] .s-rail{width: auto;height: 240px}}#ds-popup [data-ds=\"sherri\"] [data-custom] > .d-live{margin-top: 16px}#ds-popup [data-ds=\"sherri\"] .r-radius div{border: 0}@media (max-width: 900px){#ds-popup [data-ds=\"sherri\"] .c-acc-head{padding-block: 14px}}",
    components: {
      html: CUSTOM.map(function (c, i) { return '<div class="d' + (c.width && c.width !== 6 ? ' w' + c.width : '') + '"><div class="d-head"><span class="d-name">' + esc(c.name) + '</span><span class="d-uses">' + esc(c.uses) + '</span></div><div data-custom="' + i + '">' + c.html + '</div></div>'; }).join(''),
      init: function (root) { CUSTOM.forEach(function (c, i) { c.init(root.querySelector('[data-custom="' + i + '"]')); }); }
    }
  });
})();

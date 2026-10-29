/* NYSF App — The Great New York State Fair + NYS Fairgrounds. Opens with href="#ds-nysf".
   One app, two experiences: the custom demos switch between The Fair and Fairgrounds tokens.
   Built from the Figma file "NYSF App Design". All schedules, events and alerts are sample data. */
(function () {
  var NX = (function () {
    var P = {"back":{"w":29.0,"h":23.0,"d":["M0.582278 12.9097L9.89874 22.4064C10.6682 23.1908 11.9159 23.1908 12.6854 22.4064C13.4548 21.6221 13.4548 20.3502 12.6854 19.5659L6.717 13.482H27.0452C28.1266 13.482 29.0208 12.5917 29.0208 11.4682C29.0208 10.3447 28.1474 9.45438 27.0452 9.45438H6.717L12.6854 3.37051C13.4548 2.58618 13.4548 1.31429 12.6854 0.529954C12.2902 0.148387 11.7911 -0.0635945 11.292 -0.0635945C10.7929 -0.0635945 10.2939 0.127189 9.89874 0.529954L0.582278 10.0903C0.207957 10.4931 0 11.0018 0 11.5106C0 12.0194 0.187161 12.5281 0.582278 12.9309V12.9097Z"]},"menu":{"w":33.0,"h":20.0,"d":["M14.85 18.6957C14.85 17.9826 15.411 17.3913 16.0875 17.3913H31.7625C32.439 17.3913 33 17.9826 33 18.6957C33 19.4087 32.439 20 31.7625 20H16.0875C15.411 20 14.85 19.4087 14.85 18.6957ZM0 10C0 9.28696 0.561 8.69565 1.2375 8.69565H31.7625C32.439 8.69565 33 9.28696 33 10C33 10.713 32.439 11.3043 31.7625 11.3043H1.2375C0.561 11.3043 0 10.713 0 10ZM6.6 1.30435C6.6 0.591304 7.161 0 7.8375 0H31.7625C32.439 0 33 0.591304 33 1.30435C33 2.01739 32.439 2.6087 31.7625 2.6087H7.8375C7.161 2.6087 6.6 2.01739 6.6 1.30435Z"]},"plus":{"w":14.0,"h":14.0,"d":["M6.91797 0C7.74573 3.61828e-08 8.41699 0.671258 8.41699 1.49902V5.33496L8.41895 5.34082L8.41797 5.58105L12.501 5.58301C13.3287 5.58301 14 6.25428 14 7.08203C14 7.9098 13.3287 8.58105 12.501 8.58105H8.41797L8.41699 12.501C8.41699 13.3287 7.74573 14 6.91797 14C6.0903 13.9999 5.41895 13.3287 5.41895 12.501V8.58105H1.49902C0.671258 8.58105 0 7.9098 0 7.08203C2.08735e-05 6.25428 0.671271 5.58301 1.49902 5.58301H5.33496L5.34082 5.58105H5.41895V1.49902C5.41895 0.671327 6.0903 0.000111022 6.91797 0Z"]},"minus":{"w":14.0,"h":3.0,"d":["M0 1.5012C0 0.673431 0.671037 0.00239506 1.4988 0.00239506H5.33543C5.33651 0.00239506 5.33755 0.0019642 5.33832 0.00119725C5.33909 0.000430316 5.34013 -3.57628e-07 5.34121 0L12.5012 0.00239506C13.329 0.00239506 14 0.673431 14 1.5012C14 2.32896 13.329 3 12.5012 3H1.4988C0.671037 3 0 2.32896 0 1.5012Z"]},"caretDown":{"w":10.0,"h":6.0,"d":["M4.28891 0.277457C4.60495 -0.0924853 5.39505 -0.0924858 5.71109 0.277456L9.88877 5.16763C10.2048 5.53757 9.80976 6 9.17768 6H0.822326C0.190243 6 -0.20481 5.53757 0.111231 5.16763L4.28891 0.277457Z"]},"chevLeft":{"w":7.69,"h":13.1,"d":["M1.14 13.09C0.84 13.09 0.55 12.97 0.33 12.76C-0.11 12.32 -0.11 11.59 0.33 11.15L4.93 6.55L0.33 1.95C-0.11 1.51 -0.11 0.78 0.33 0.33C0.55 0.12 0.83 0 1.14 0C1.45 0 1.73 0.12 1.95 0.33L7.36 5.74C7.58 5.96 7.69 6.24 7.69 6.55C7.69 6.86 7.57 7.14 7.36 7.36L1.95 12.77C1.74 12.99 1.45 13.1 1.14 13.1V13.09Z"]},"chevRight":{"w":7.69,"h":13.1,"d":["M1.14 13.09C0.84 13.09 0.55 12.97 0.33 12.76C-0.11 12.32 -0.11 11.59 0.33 11.15L4.93 6.55L0.33 1.95C-0.11 1.51 -0.11 0.78 0.33 0.33C0.55 0.12 0.83 0 1.14 0C1.45 0 1.73 0.12 1.95 0.33L7.36 5.74C7.58 5.96 7.69 6.24 7.69 6.55C7.69 6.86 7.57 7.14 7.36 7.36L1.95 12.77C1.74 12.99 1.45 13.1 1.14 13.1V13.09Z"]},"heartFilled":{"w":23.4,"h":20.95,"d":["M23.4 6.72C23.4 13.17 11.7 20.95 11.7 20.95C11.7 20.95 0 13.38 0 6.72C0 3.44 2.76 0 6.15 0C8.61 0 10.7199 1.41 11.7 3.42C12.69 1.41 14.8 0 17.26 0C20.65 0 23.4 3.44 23.4 6.72Z"]},"heartOutline":{"w":23.4,"h":20.95,"d":["M23.4 6.72C23.4 13.17 11.7 20.95 11.7 20.95C11.7 20.95 0 13.38 0 6.72C0 3.44 2.76 0 6.15 0C8.61 0 10.7199 1.41 11.7 3.42C12.69 1.41 14.8 0 17.26 0C20.65 0 23.4 3.44 23.4 6.72Z"]},"search":{"w":23.0,"h":23.0,"d":["M15.8324 2.74769C12.2106 -0.915897 6.3382 -0.915897 2.71637 2.74769C-0.905457 6.41128 -0.905457 12.3503 2.71637 16.015C5.94116 19.2769 10.9515 19.6338 14.5669 17.0866L19.8772 22.4582C20.5914 23.1806 21.7501 23.1806 22.4643 22.4582C23.1786 21.7357 23.1786 20.5636 22.4643 19.8412L17.1001 14.4151C19.3852 10.7864 18.9623 5.91691 15.8303 2.74878L15.8324 2.74769ZM13.7124 13.8694C11.2612 16.3489 7.28762 16.3478 4.83746 13.8694C2.38623 11.3899 2.38623 7.37055 4.83746 4.89215C7.2887 2.41265 11.2622 2.41374 13.7124 4.89215C16.1625 7.37055 16.1636 11.3899 13.7124 13.8694Z"]},"close":{"w":15.0,"h":15.0,"d":["M9.25281 7.53386L14.5787 2.18397C15.0506 1.70993 15.0506 0.965011 14.5787 0.490971L14.4438 0.35553C13.9719 -0.11851 13.2303 -0.11851 12.7584 0.35553L7.43258 5.70542L2.17416 0.35553C1.70225 -0.11851 0.960674 -0.11851 0.488764 0.35553L0.353933 0.490971C-0.117978 0.965011 -0.117978 1.70993 0.353933 2.18397L5.67977 7.53386L0.353933 12.816C-0.117978 13.2901 -0.117978 14.035 0.353933 14.509L0.488764 14.6445C0.960674 15.1185 1.70225 15.1185 2.17416 14.6445L7.5 9.29458L12.8258 14.6445C13.2978 15.1185 14.0393 15.1185 14.5112 14.6445L14.6461 14.509C15.118 14.035 15.118 13.2901 14.6461 12.816L9.25281 7.53386Z"]},"reset":{"w":25.0,"h":20.0,"d":["M14.6552 20C20.3707 20 25 15.525 25 10C25 4.475 20.3707 0 14.6552 0C8.93966 0 4.31034 4.475 4.31034 10V15.1667L1.2069 12.1667L0 13.3333L5.17241 18.3333L10.3448 13.3333L9.13793 12.1667L6.03448 15.1667V10C6.03448 5.4 9.89655 1.66667 14.6552 1.66667C19.4138 1.66667 23.2759 5.4 23.2759 10C23.2759 14.6 19.4138 18.3333 14.6552 18.3333V20Z"]},"nextCircle":{"w":28.06,"h":28.06,"d":["M14.03 27.54C21.4914 27.54 27.54 21.4914 27.54 14.03C27.54 6.56863 21.4914 0.52 14.03 0.52C6.56863 0.52 0.52 6.56863 0.52 14.03C0.52 21.4914 6.56863 27.54 14.03 27.54Z","M12.2799 21.05C11.9799 21.05 11.6899 20.93 11.4699 20.72C11.0299 20.28 11.0299 19.55 11.4699 19.11L16.0699 14.51L11.4699 9.91002C11.0299 9.47002 11.0299 8.74002 11.4699 8.29002C11.6899 8.08002 11.9699 7.96002 12.2799 7.96002C12.5899 7.96002 12.8699 8.08002 13.0899 8.29002L18.4999 13.7C18.7199 13.92 18.8299 14.2 18.8299 14.51C18.8299 14.82 18.7099 15.1 18.4999 15.32L13.0899 20.73C12.8799 20.95 12.5899 21.06 12.2799 21.06V21.05Z"]},"searchLarge":{"w":39.0,"h":39.0,"d":["M23.8324 10.7477C20.2106 7.0841 14.3382 7.0841 10.7164 10.7477C7.09454 14.4113 7.09454 20.3503 10.7164 24.015C13.9412 27.2769 18.9515 27.6338 22.5669 25.0866L27.8772 30.4582C28.5914 31.1806 29.7501 31.1806 30.4643 30.4582C31.1786 29.7357 31.1786 28.5636 30.4643 27.8412L25.1001 22.4151C27.3852 18.7864 26.9623 13.9169 23.8303 10.7488L23.8324 10.7477ZM21.7124 21.8694C19.2612 24.3489 15.2876 24.3478 12.8375 21.8694C10.3862 19.3899 10.3862 15.3706 12.8375 12.8921C15.2887 10.4127 19.2622 10.4137 21.7124 12.8921C24.1625 15.3706 24.1636 19.3899 21.7124 21.8694Z"]}}, n = 0;
    function ic(k, cls, w, h) {
      var p = P[k], line = k === 'heartOutline';
      return '<svg class="' + (cls || '') + '" width="' + (w || p.w) + '" height="' + (h || p.h) + '" viewBox="0 0 ' + p.w + ' ' + p.h + '" aria-hidden="true" focusable="false">' +
        p.d.map(function (d, i) { return '<path d="' + d + '"' + (line ? ' fill="none" stroke="currentColor" stroke-width="1.6"' : ' fill="currentColor"') + (k === 'nextCircle' && i === 1 ? ' class="c2"' : '') + '/>'; }).join('') + '</svg>';
    }
    function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function uid(p) { n++; return 'nx-' + p + '-' + n; }
    function heart(on, label) { return '<button type="button" class="nx-ib nx-fav" aria-pressed="' + !!on + '" aria-label="' + esc(label) + '">' + ic(on ? 'heartFilled' : 'heartOutline', '', 23, 21) + '</button>'; }
    /* Navy dropdown with a cream listbox: click, or Arrow keys, Home/End, Enter/Space, Esc, Tab. */
    function dropdown(root, label, opts, onPick) {
      var id = uid('dd'), sel = 0, act = 0;
      root.innerHTML = '<button type="button" class="nx-dd-btn" aria-haspopup="listbox" aria-expanded="false" aria-controls="' + id + '"><span></span>' + ic('caretDown', 'fy', 10, 6) + '</button><ul class="nx-dd-menu" id="' + id + '" role="listbox" tabindex="-1" aria-label="' + esc(label) + '" hidden></ul>';
      var btn = root.querySelector('button'), menu = root.querySelector('ul'), svg = function () { return btn.querySelector('svg'); };
      function paint() {
        btn.querySelector('span').textContent = opts[sel]; btn.setAttribute('aria-label', label + ': ' + opts[sel]);
        menu.innerHTML = opts.map(function (o, i) { return '<li class="nx-dd-opt' + (i === act ? ' is-active' : '') + '" role="option" id="' + id + '-' + i + '" aria-selected="' + (i === sel) + '">' + esc(o) + '</li>'; }).join('');
        menu.setAttribute('aria-activedescendant', id + '-' + act);
      }
      function open() { act = sel; paint(); menu.hidden = false; btn.setAttribute('aria-expanded', 'true'); svg().setAttribute('class', ''); menu.focus(); }
      function close(f) { if (menu.hidden) return; menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); svg().setAttribute('class', 'fy'); if (f) btn.focus(); }
      function pick(i) { sel = i; close(true); paint(); onPick(i); }
      btn.addEventListener('click', function () { menu.hidden ? open() : close(); });
      btn.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(); } });
      menu.addEventListener('click', function (e) { var o = e.target.closest('[role="option"]'); if (o) pick(+o.id.split('-').pop()); });
      menu.addEventListener('keydown', function (e) {
        var k = e.key;
        if (k === 'ArrowDown') act = Math.min(opts.length - 1, act + 1); else if (k === 'ArrowUp') act = Math.max(0, act - 1); else if (k === 'Home') act = 0; else if (k === 'End') act = opts.length - 1;
        else if (k === 'Enter' || k === ' ') { e.preventDefault(); pick(act); return; } else if (k === 'Escape') { e.preventDefault(); e.stopPropagation(); close(true); return; } else if (k === 'Tab') { close(); return; } else return;
        e.preventDefault(); paint();
      });
      document.addEventListener('click', function (e) { if (!root.contains(e.target)) close(); });
      paint();
      return { reset: function () { sel = 0; act = 0; paint(); } };
    }
    /* Roving-tabindex tab row: click or Left/Right/Home/End. */
    function tabs(row, onPick) {
      row.addEventListener('click', function (e) { var t = e.target.closest('[role="tab"]'); if (t) onPick(+t.dataset.i, true); });
      row.addEventListener('keydown', function (e) {
        var t = e.target.closest && e.target.closest('[role="tab"]'); if (!t) return;
        var all = row.querySelectorAll('[role="tab"]'), cur = +t.dataset.i, k = e.key, nx;
        if (k === 'ArrowRight') nx = (cur + 1) % all.length; else if (k === 'ArrowLeft') nx = (cur - 1 + all.length) % all.length; else if (k === 'Home') nx = 0; else if (k === 'End') nx = all.length - 1; else return;
        e.preventDefault(); onPick(nx, true);
      });
    }
    function tabRow(id, label, items, sel) {
      return '<div class="nx-tabs" role="tablist" aria-label="' + esc(label) + '">' + items.map(function (t, i) { return '<button type="button" class="nx-tab" role="tab" id="' + id + '-t' + i + '" data-i="' + i + '" aria-controls="' + id + '-p" aria-selected="' + (i === sel) + '" tabindex="' + (i === sel ? 0 : -1) + '"><small>' + esc(t[0]) + '</small><span>' + esc(t[1]) + '</span></button>'; }).join('') + '</div>';
    }
    function setSide(side) { document.querySelectorAll('#ds-popup .nx').forEach(function (n) { n.setAttribute('data-side', side); }); document.querySelectorAll('#ds-popup [data-ds="nysf"]').forEach(function (n) { n.setAttribute('data-xside', side); }); }
    return { setSide: setSide, ic: ic, esc: esc, uid: uid, heart: heart, dropdown: dropdown, tabs: tabs, tabRow: tabRow };
  })();

  /* Project demos: { name, uses, width: 5|6|7|12, html, init(el) }. */
  var CUSTOM = [
    {
      name: 'Two experiences, one system',
      uses: 'Breadcrumb · DayButton · ListCard · FavoriteButton · SignUp, on The Fair or Fairgrounds tokens',
      width: 12,
      html: '<div class="nx nx-a" data-side="fairgrounds"><div class="nx-a-side">' +
        '<div class="nx-switch" role="group" aria-label="Experience"><button type="button" aria-pressed="false" data-side="fair">The Fair</button><button type="button" aria-pressed="true" data-side="fairgrounds">Fairgrounds</button></div>' +
        '<ul class="nx-a-list"><li><b>Bars:</b> Irish Green with Lalezar titles, or slate with PT Sans Narrow.</li><li><b>Tabs:</b> navy days with a Pomegranate selection, or grey months with French Blue.</li><li><b>Shape:</b> 15px tabs and pill buttons, or square 4px corners.</li><li><b>Switch:</b> every component below follows this choice.</li><li><b>Try it:</b> arrow keys move between tabs, hearts save a row, Sign up checks the email.</li></ul>' +
        '<p class="d-live" data-live aria-live="polite"></p><p class="nx-sample">Schedule entries are sample data.</p></div><div class="nx-phone" data-phone></div></div>',
      init: function (el) {
        var root = el.querySelector('.nx'), phone = el.querySelector('[data-phone]'), live = el.querySelector('[data-live]'), id = NX.uid('a'), side = 'fairgrounds', tab = { fair: 0, fairgrounds: 0 }, fav = {};
        var D = {
          fair: { title: 'Daily schedule', label: 'Day', tabs: [['Fri, Sept 14', 'Day 1'], ['Sat, Sept 15', 'Day 2'], ['Sun, Sept 16', 'Day 3']], rows: [
            [['State Fair 4-H Dog Show', '9am · Toyota Coliseum'], ['Hollywood Racing Pigs', '12:30pm · Family Fun Zone'], ['Bandaloni the One Man Band', '3pm · Chevy Court']],
            [['Butter Sculpture Unveiling', '11am · Dairy Products Building'], ['Dinosaur Expedition', '1pm · Science & Industry'], ['Chubby Checker and the Band', '8pm · Chevy Court']],
            [['Sheep Shearing Demo', '2pm · Sheep & Swine Barn'], ['Steve Miller Band', '8pm · Chevy Court'], ['Fireworks over the Midway', '9:30pm · Midway']]] },
          fairgrounds: { title: 'Upcoming events', label: 'Month', tabs: [['2025', 'Jun'], ['2025', 'July'], ['2025', 'Aug']], rows: [
            [['Salt City Cluster Dog Show', 'Fri, Jun 6 • 7:00am – 8:00pm'], ['Spring NYS RV Show', 'Thu, Jun 12 • 10:00am – 6:00pm'], ['Gem & Mineral Show', 'Sat, Jun 21 • 9:00am – 5:00pm']],
            [['NASP Bullseye Tournament', 'Fri, Jul 11 • 8:00am – 8:00pm'], ['Antique Tractor Pull', 'Sat, Jul 19 • 11:00am – 4:00pm'], ['Summer Craft Fair', 'Sun, Jul 27 • 10:00am – 5:00pm']],
            [['Fairgrounds Farmers Market', 'Wed, Aug 6 • 8:00am – 1:00pm'], ['Classic Car Cruise-In', 'Sat, Aug 9 • 4:00pm – 9:00pm'], ['Horse Show Finals', 'Sun, Aug 10 • 9:00am – 6:00pm']]] }
        };
        function say(m) { live.innerHTML = m; }
        function favCount() { var k = side + ':' + tab[side] + ':', c = 0; Object.keys(fav).forEach(function (x) { if (x.indexOf(k) === 0 && fav[x]) c++; }); return c; }
        function render(focusTab) {
          var d = D[side], t = tab[side], email = (phone.querySelector('input') || {}).value || '';
          phone.innerHTML = '<div class="nx-bar nx-dark"><button type="button" class="nx-ib" data-act="back" aria-label="Back">' + NX.ic('back', '', 26, 21) + '</button><h4 class="nx-bar-title">' + NX.esc(d.title) + '</h4><button type="button" class="nx-ib nx-menu" data-act="menu" aria-label="Menu">' + NX.ic('menu', '', 30, 18) + '</button></div>' +
            NX.tabRow(id + side, d.label, d.tabs, t) +
            '<div class="nx-listp' + (side === 'fair' ? ' nx-dark' : '') + '" role="tabpanel" id="' + id + side + '-p" aria-labelledby="' + id + side + '-t' + t + '">' + d.rows[t].map(function (r, i) { var on = !!fav[side + ':' + t + ':' + i]; return '<div class="nx-row"><div class="nx-row-t"><b>' + NX.esc(r[0]) + '</b><span>' + NX.esc(r[1]) + '</span></div>' + NX.heart(on, (on ? 'Remove ' : 'Save ') + r[0]).replace('class="nx-ib nx-fav"', 'class="nx-ib nx-fav" data-fav="' + i + '"') + '</div>'; }).join('') + '</div>' +
            '<form class="nx-su" novalidate><h4>Keep in touch</h4><label for="' + id + '-em">Email*</label><input id="' + id + '-em" type="email" placeholder="Enter your email" autocomplete="off" aria-describedby="' + id + '-er"><span class="nx-su-err" id="' + id + '-er"></span><button type="submit" class="nx-pill">Sign up</button><span class="nx-su-ok" aria-live="polite"></span></form>';
          phone.querySelector('input').value = email;
          if (focusTab) phone.querySelector('[aria-selected="true"]').focus();
        }
        el.querySelector('.nx-switch').addEventListener('click', function (e) {
          var b = e.target.closest('button'); if (!b) return; side = b.dataset.side; NX.setSide(side);
          el.querySelectorAll('.nx-switch button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
          render(false); say('Showing <strong>' + (side === 'fair' ? 'The Fair' : 'Fairgrounds') + '</strong> across every component.');
        });
        phone.addEventListener('click', function (e) {
          var h = e.target.closest('[data-fav]'), a = e.target.closest('[data-act]');
          if (h) { var k = side + ':' + tab[side] + ':' + h.dataset.fav, on = !fav[k]; fav[k] = on; var name = D[side].rows[tab[side]][+h.dataset.fav][0]; h.setAttribute('aria-pressed', String(on)); h.setAttribute('aria-label', (on ? 'Remove ' : 'Save ') + name); h.innerHTML = NX.ic(on ? 'heartFilled' : 'heartOutline', '', 23, 21); say((on ? 'Saved ' : 'Removed ') + '<strong>' + NX.esc(name) + '</strong> · ' + favCount() + ' saved on this tab'); }
          if (a) say(a.dataset.act === 'back' ? 'Back goes to the previous screen in the app.' : 'Menu opens the full-screen menu in the app.');
        });
        NX.tabs(phone, function (i, focus) { tab[side] = i; render(focus); say('Showing <strong>' + D[side].tabs[i].join(' ') + '</strong>'); });
        phone.addEventListener('submit', function (e) {
          e.preventDefault(); var f = e.target, inp = f.querySelector('input'), er = f.querySelector('.nx-su-err'), ok = f.querySelector('.nx-su-ok'), v = inp.value.trim(), m = '';
          if (!v) m = 'Enter your email address.'; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) m = 'Enter an email like name@example.com.';
          er.textContent = m; inp.setAttribute('aria-invalid', m ? 'true' : 'false'); ok.textContent = m ? '' : 'You’re on the list. This is a demo, so nothing was sent.';
          if (m) inp.focus(); else inp.value = '';
        });
        phone.addEventListener('input', function (e) { if (e.target.matches('input')) { e.target.setAttribute('aria-invalid', 'false'); phone.querySelector('.nx-su-err').textContent = ''; } });
        NX.setSide(side);
        /* The popup keeps its state between opens, so go back to the Fairgrounds default whenever it closes. */
        var pop = document.getElementById('ds-popup');
        if (pop && window.MutationObserver) new MutationObserver(function () {
          if (pop.getAttribute('aria-hidden') !== 'true' || side === 'fairgrounds') return;
          side = 'fairgrounds'; NX.setSide(side);
          el.querySelectorAll('.nx-switch button').forEach(function (x) { x.setAttribute('aria-pressed', String(x.dataset.side === side)); });
          render(false); live.innerHTML = '';
        }).observe(pop, { attributes: true, attributeFilter: ['aria-hidden'] });
        render(false);
      }
    },
    {
      name: 'Concert filters',
      uses: 'DropdownButton · ListMediaCard · FavoriteButton · ResetButton',
      width: 7,
      html: '<div class="nx" data-side="fairgrounds"><div class="nx-b nx-dark"><div class="nx-b-top"><button type="button" class="nx-favf" aria-pressed="false" data-favf></button><button type="button" class="nx-reset" data-reset></button></div><div class="nx-dds"><div class="nx-dd" data-dd="date"></div><div class="nx-dd" data-dd="genre"></div></div><div class="nx-cl" data-list></div></div><p class="d-live" data-live aria-live="polite" style="margin-top:12px"></p><p class="nx-sample">Lineup is sample data.</p></div>',
      init: function (el) {
        var C = [['Chubby Checker and the Band', 'Classic Rock', 1, '1pm', 'CC'], ['The Concert: A Tribute to ABBA', 'Tribute', 1, '8pm', 'AB'], ['Steve Miller Band', 'Classic Rock', 2, '8pm', 'SM'], ['Gimme Gimme That 24K Magic', 'Tribute', 2, '6pm', '24K'], ['Cheap Trick', 'Classic Rock', 3, '8pm', 'CT']];
        var dates = ['Any date', 'Wed, Aug 21', 'Thu, Aug 22', 'Fri, Aug 23'], genres = ['All genres', 'Classic Rock', 'Tribute'], st = { d: 0, g: 0, fo: false }, fav = { 2: true };
        var list = el.querySelector('[data-list]'), live = el.querySelector('[data-live]'), ff = el.querySelector('[data-favf]'), rs = el.querySelector('[data-reset]');
        ff.innerHTML = NX.ic('heartOutline', '', 17, 15) + 'My Favorites'; rs.innerHTML = NX.ic('reset', '', 25, 20) + 'Reset';
        function draw() {
          var rows = C.map(function (c, i) { return [c, i]; }).filter(function (x) { var c = x[0]; return (!st.d || c[2] === st.d) && (!st.g || c[1] === genres[st.g]) && (!st.fo || fav[x[1]]); });
          list.innerHTML = rows.length ? rows.map(function (x) { var c = x[0], i = x[1]; return '<div class="nx-cr"><span class="nx-thumb" aria-hidden="true">' + c[4] + '</span><div class="nx-cr-t"><small>Chevy Court</small><b>' + NX.esc(c[0]) + '</b><span>' + dates[c[2]] + ' • ' + c[3] + ' · ' + c[1] + '</span></div>' + NX.heart(!!fav[i], (fav[i] ? 'Remove ' : 'Save ') + c[0]).replace('nx-fav"', 'nx-fav" data-i="' + i + '"') + '</div>'; }).join('')
            : '<p class="nx-empty">No concerts match these filters. <button type="button" data-clear>Reset filters</button></p>';
          live.innerHTML = '<strong>' + rows.length + ' of ' + C.length + '</strong> concerts' + (st.fo ? ' · favorites only' : '');
          ff.setAttribute('aria-pressed', String(st.fo)); ff.querySelector('svg').outerHTML = NX.ic(st.fo ? 'heartFilled' : 'heartOutline', '', 17, 15);
        }
        var dd1 = NX.dropdown(el.querySelector('[data-dd="date"]'), 'Date', dates, function (i) { st.d = i; draw(); });
        var dd2 = NX.dropdown(el.querySelector('[data-dd="genre"]'), 'Genre', genres, function (i) { st.g = i; draw(); });
        function reset() { st = { d: 0, g: 0, fo: false }; dd1.reset(); dd2.reset(); draw(); }
        ff.addEventListener('click', function () { st.fo = !st.fo; draw(); });
        rs.addEventListener('click', reset);
        list.addEventListener('click', function (e) {
          if (e.target.closest('[data-clear]')) { reset(); rs.focus(); return; }
          var h = e.target.closest('[data-i]'); if (!h) return; var i = +h.dataset.i; fav[i] = !fav[i]; draw();
          var again = list.querySelector('[data-i="' + i + '"]'); (again || ff).focus();
        });
        draw();
      }
    },
    {
      name: 'Event search',
      uses: 'SearchField · DayButton (month tabs) · EventPost',
      width: 5,
      html: '<div class="nx" data-side="fairgrounds"><div class="nx-c"><div class="nx-search" role="search"><input type="search" placeholder="Search Events" aria-label="Search events" autocomplete="off"><button type="button" class="nx-ib" data-sb></button></div><div data-tabs></div><div class="nx-res" role="tabpanel" data-res></div></div><p class="d-live" data-live aria-live="polite" style="margin-top:12px"></p><p class="nx-sample">Events are sample data.</p></div>',
      init: function (el) {
        var id = NX.uid('c'), M = ['June', 'July', 'August'], m = 0, inp = el.querySelector('input'), sb = el.querySelector('[data-sb]'), res = el.querySelector('[data-res]'), live = el.querySelector('[data-live]'), tw = el.querySelector('[data-tabs]');
        var E = [[['Fri, Jun 6 • 7:00 am - 8:00 pm', 'Salt City Cluster Spring Dog Show'], ['Thu, Jun 12 • 10:00 am - 6:00 pm', 'Spring NYS RV Show'], ['Sat, Jun 21 • 9:00 am - 5:00 pm', 'Central NY Gem & Mineral Show']],
          [['Fri, Jul 11 • 8:00 am - 8:00 pm', 'NASP NYS Bullseye Tournament'], ['Sat, Jul 19 • 11:00 am - 4:00 pm', 'Antique Tractor Pull'], ['Sun, Jul 27 • 10:00 am - 5:00 pm', 'Summer Craft Fair']],
          [['Wed, Aug 6 • 8:00 am - 1:00 pm', 'Fairgrounds Farmers Market'], ['Sat, Aug 9 • 4:00 pm - 9:00 pm', 'Classic Car Cruise-In'], ['Sun, Aug 10 • 9:00 am - 6:00 pm', 'Horse Show Finals']]];
        function hi(t, q) { if (!q) return NX.esc(t); var i = t.toLowerCase().indexOf(q.toLowerCase()); return i < 0 ? NX.esc(t) : NX.esc(t.slice(0, i)) + '<mark>' + NX.esc(t.slice(i, i + q.length)) + '</mark>' + NX.esc(t.slice(i + q.length)); }
        function draw(focusTab) {
          var q = inp.value.trim();
          tw.innerHTML = NX.tabRow(id, 'Month', [['2025', 'Jun'], ['2025', 'July'], ['2025', 'Aug']], m);
          res.id = id + '-p'; res.setAttribute('aria-labelledby', id + '-t' + m);
          var rows = E[m].filter(function (e) { return !q || e[1].toLowerCase().indexOf(q.toLowerCase()) > -1; });
          res.innerHTML = rows.length ? rows.map(function (e) { return '<div class="nx-ev"><span>' + NX.esc(e[0]) + '</span><b>' + hi(e[1], q) + '</b></div>'; }).join('') : '<p class="nx-empty">No ' + M[m] + ' events match “' + NX.esc(q) + '”. <button type="button" data-clear>Clear search</button></p>';
          sb.innerHTML = q ? NX.ic('close', '', 18, 18) : NX.ic('searchLarge', '', 39, 39); sb.setAttribute('aria-label', q ? 'Clear search' : 'Search');
          live.innerHTML = '<strong>' + rows.length + '</strong> ' + M[m] + (rows.length === 1 ? ' event' : ' events') + (q ? ' matching “' + NX.esc(q) + '”' : '');
          if (focusTab) tw.querySelector('[aria-selected="true"]').focus();
        }
        function clear() { inp.value = ''; draw(false); inp.focus(); }
        inp.addEventListener('input', function () { draw(false); });
        inp.addEventListener('keydown', function (e) { if (e.key === 'Escape' && inp.value) { e.preventDefault(); e.stopPropagation(); clear(); } });
        sb.addEventListener('click', function () { inp.value ? clear() : inp.focus(); });
        res.addEventListener('click', function (e) { if (e.target.closest('[data-clear]')) clear(); });
        NX.tabs(tw, function (i, f) { m = i; draw(f); });
        draw(false);
      }
    },
    {
      name: 'Real-time updates',
      uses: 'Toggle · NotificationCard · PrevNextButton',
      width: 6,
      html: '<div class="nx" data-side="fairgrounds"><div class="nx-d"><div class="nx-d-bar nx-dark"><span data-lbl>Push notifications</span><button type="button" class="nx-tog" role="switch" aria-checked="true" data-tog><i></i></button></div><div class="nx-d-body"><article class="nx-note" aria-live="polite" data-note></article><div class="nx-pager"><button type="button" class="nx-pn" data-step="-1"></button><button type="button" class="nx-pn" data-step="1"></button></div><p class="nx-off" data-off aria-live="polite"></p></div></div><p class="nx-sample" style="margin-top:12px">Alerts are sample data.</p></div>',
      init: function (el) {
        var N = [['Wed, Aug 21 • 6pm', 'Parking alert', 'The RV lot is at full capacity. Use the Orange Lot and ride the free shuttle to Gate 1.'], ['Wed, Aug 21 • 2pm', 'Chevrolet Music Series lineup announcement', 'The 2025 Chevrolet Music Series lineup has been announced. See every Chevy Court show in Concerts.'], ['Tue, Aug 20 • 4pm', 'The Red Jumpsuit Apparatus to perform this summer', 'Get ready to embrace the energy: the band plays Chevy Court on Monday, August 25 at 8pm.'], ['Tue, Aug 20 • 11am', 'Gimme Gimme Gimme that 24K Magic!', 'A tribute show packed with hits comes to the Experience Stage on Thursday night.']];
        var i = 0, note = el.querySelector('[data-note]'), prev = el.querySelector('[data-step="-1"]'), next = el.querySelector('[data-step="1"]'), tog = el.querySelector('[data-tog]'), off = el.querySelector('[data-off]'), lbl = el.querySelector('[data-lbl]');
        lbl.id = NX.uid('lbl'); tog.setAttribute('aria-labelledby', lbl.id);
        prev.innerHTML = NX.ic('chevLeft', 'fx', 8, 13) + 'Previous'; next.innerHTML = 'Next' + NX.ic('chevRight', '', 8, 13);
        function draw() { var n = N[i]; note.innerHTML = '<small>' + NX.esc(n[0]) + '</small><h4>' + NX.esc(n[1]) + '</h4><p>' + NX.esc(n[2]) + '</p>'; prev.disabled = i === 0; next.disabled = i === N.length - 1; }
        [prev, next].forEach(function (b) { b.addEventListener('click', function () { i = Math.max(0, Math.min(N.length - 1, i + +b.dataset.step)); draw(); if (b.disabled) (b === prev ? next : prev).focus(); }); });
        tog.addEventListener('click', function () { var on = tog.getAttribute('aria-checked') !== 'true'; tog.setAttribute('aria-checked', String(on)); off.textContent = on ? 'Push alerts are on.' : 'Push alerts are off. Updates still appear here.'; });
        draw();
      }
    },
    {
      name: 'Plan your visit',
      uses: 'Breadcrumb · PageButton · AccordionMenu',
      width: 6,
      html: '<div class="nx" data-side="fairgrounds"><div class="nx-e"><div class="nx-bar nx-dark" data-bar></div><div class="nx-e-body" data-body></div></div><p class="nx-sample" style="margin-top:12px">Lots and answers are sample data.</p></div>',
      init: function (el) {
        var id = NX.uid('e'), bar = el.querySelector('[data-bar]'), body = el.querySelector('[data-body]'), view = null, from = 0, open = 0;
        var S = [['Directions', 'copy', '<b>From the west:</b> take I-690 East to exit 7 and follow signs to State Fair Blvd. <b>From the east:</b> take I-690 West to exit 7. Gates open at 10am.'],
          ['Parking', 'acc', [['Orange Lot', 'Free. Shuttles run to Gate 1 every 15 minutes, 8am to midnight.'], ['Brown Lot', 'Free. A short walk to the Main Gate across the pedestrian bridge.'], ['Accessible parking', 'Spaces next to Gates 1 and 2 with a valid placard.']]],
          ['FAQs', 'acc', [['Can I re-enter the Fair?', 'Yes. Get a hand stamp at the gate on your way out.'], ['Are pets allowed?', 'Only service animals are allowed on the grounds.'], ['Where is lost and found?', 'At the Guest Services booth inside the Main Gate.']]]];
        function render(focusSel) {
          var title = view === null ? 'Plan your visit' : S[view][0];
          bar.innerHTML = (view === null ? '<span style="width:44px"></span>' : '<button type="button" class="nx-ib" data-back aria-label="Back to Plan your visit">' + NX.ic('back', '', 26, 21) + '</button>') + '<h4 class="nx-bar-title" tabindex="-1">' + NX.esc(title) + '</h4><button type="button" class="nx-ib nx-menu" aria-label="Menu">' + NX.ic('menu', '', 30, 18) + '</button>';
          if (view === null) body.innerHTML = S.map(function (s, i) { return '<button type="button" class="nx-pb" data-go="' + i + '">' + NX.esc(s[0]) + NX.ic('nextCircle', '', 28, 28) + '</button>'; }).join('');
          else if (S[view][1] === 'copy') body.innerHTML = '<p class="nx-e-copy">' + S[view][2] + '</p>';
          else body.innerHTML = (view === 1 ? '<div class="nx-ticker" style="margin:-16px -16px 0">RV Parking lot is at Full Capacity</div>' : '') + '<div class="nx-acc nx-dark"' + (view === 1 ? '' : ' style="margin-top:-16px"') + '>' + S[view][2].map(function (a, j) { var o = j === open; return '<button type="button" class="nx-acc-h" id="' + id + '-h' + j + '" aria-expanded="' + o + '" aria-controls="' + id + '-a' + j + '" data-acc="' + j + '"><span>' + NX.esc(a[0]) + '</span>' + NX.ic(o ? 'minus' : 'plus', '', 14, o ? 3 : 14) + '</button><div class="nx-acc-p" id="' + id + '-a' + j + '" role="region" aria-labelledby="' + id + '-h' + j + '"' + (o ? '' : ' hidden') + '>' + NX.esc(a[1]) + '</div>'; }).join('') + '</div>';
          if (focusSel) { var t = el.querySelector(focusSel); if (t) t.focus(); }
        }
        el.addEventListener('click', function (e) {
          var g = e.target.closest('[data-go]'), b = e.target.closest('[data-back]'), a = e.target.closest('[data-acc]');
          if (g) { from = +g.dataset.go; view = from; open = 0; render('[data-back]'); }
          else if (b) { view = null; render('[data-go="' + from + '"]'); }
          else if (a) { var j = +a.dataset.acc; open = open === j ? -1 : j; render('[data-acc="' + j + '"]'); }
        });
        el.addEventListener('keydown', function (e) {
          var a = e.target.closest && e.target.closest('[data-acc]'); if (!a || (e.key !== 'ArrowDown' && e.key !== 'ArrowUp')) return;
          var all = el.querySelectorAll('[data-acc]'), j = +a.dataset.acc + (e.key === 'ArrowDown' ? 1 : -1); if (all[j]) { e.preventDefault(); all[j].focus(); }
        });
        render(false);
      }
    }
  ];

  DSPopup.register('nysf', {

  name: 'NYSF App Design System',
  intro: 'One app, two experiences: The Fair and the Fairgrounds share every component and swap tokens. Every component below works with the mouse and the keyboard. Content is sample data.',
  cta: { label: 'View prototype', url: 'https://vsenses55.github.io/nysf-mobile-app/' },

  /* Theme: The Fair's tokens drive the popup and the starter components. */
  theme: {
    font: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
    primary: '#098944', primaryHover: '#076e36', onPrimary: '#f4e8ab',
    accent: '#1f3667', onAccent: '#ffffff',
    danger: '#be381c',
    surface: '#ffffff', hover: '#fbf6dd', focusFill: '#fff6dc',
    text: '#0a0f12', textMuted: '#475157', placeholder: '#757d81',
    border: '#757d81', borderStrong: '#475157',
    disabled: '#ebedef', disabledInk: '#757d81',
    cta: '#fdd252', onCta: '#1f3667',
    radiusControl: '50px', radiusField: '4px', radiusCard: '10px', radiusOverlay: '15px'
  },

  /* Color section: groups of [token, hex, where it's used]. Contrast against white is computed. */
  colors: [
    { label: 'The Fair', tokens: [['irish-green', '#098944', 'Bars, main pill button, open accordion row'], ['salem', '#089C43', 'Toggle track'], ['light-mustard', '#FDD252', 'Page ground, icons on green'], ['pale-goldenrod', '#F4E8AB', 'Cards, inputs, text on green'], ['rhino', '#1F3667', 'Control rows, footer, sign-up title'], ['chambray', '#33559C', 'Open dropdown, accordion panel'], ['pomegranate', '#EE4623', 'Selected day, sign-up frame, alt button'], ['ripe-lemon', '#F0D115', 'Caret on an open dropdown']] },
    { label: 'Fairgrounds', tokens: [['fg-dark', '#19262D', 'Bars, sign-up, control rows'], ['fg-french-blue', '#0077C8', 'Actions, selected month, links'], ['fg-rubber-ducky', '#FFD100', 'Icons on slate, Sign up button'], ['fg-porcelain', '#EBEDEF', 'Page ground'], ['surface-input', '#EFF8FF', 'Form fields'], ['tab', '#DBE2EA', 'Unselected month tab']] },
    { label: 'Text & neutrals (shared)', tokens: [['ink', '#0A0F12', 'Primary text (neutral-800)'], ['ink-secondary', '#343434', 'Card titles and copy'], ['neutral-400', '#475157', 'Muted text'], ['neutral-300', '#757D81', 'Placeholder, field borders'], ['neutral-100', '#D1D4D5', 'Dividers'], ['grey-50', '#F1F1F1', 'Text on dark rows']] }
  ],

  /* Type section: [role, weight, size, line, mobile size, mobile line, sample, family]. Mobile only, so both sizes match. */
  typeNote: 'Lalezar for Fair headings, PT Sans Narrow Bold for Fairgrounds headings, Inter for everything else on both sides. Fair headings run on a 1.125 scale from 32px with tight 20–24px leading.',
  type: [
    ['h1 · Fair', 400, 32, 24, 32, 24, 'KEEP IN TOUCH'], ['h2 · Fair', 400, 29, 24, 29, 24, 'Plan Your Visit'],
    ['h3 · Fair', 400, 26, 24, 26, 24, 'DAILY SCHEDULE'], ['h4 · Fair', 400, 23, 20, 23, 20, 'PARKING ALERT'],
    ['h5 · Fair', 400, 20, 20, 20, 20, 'FOLLOW US'],
    ['fg-title', 700, 31, 40, 31, 40, 'KEEP IN TOUCH'], ['fg-heading', 700, 22.78, 40, 22.78, 40, 'UPCOMING EVENTS'],
    ['fg-section', 700, 20.25, 40, 20.25, 40, 'Rental Opportunities'],
    ['body-large-bold', 800, 20, 24, 20, 24, 'Chubby Checker and the Band'], ['body', 400, 16, 20, 16, 20, 'Everything you need for a day at the Fair.'],
    ['body-small', 400, 14, 20, 14, 20, 'The RV lot is at full capacity. Use the Orange Lot.'], ['label', 800, 13, 16, 13, 16, 'WED, AUG 21 • 6PM'],
    ['caption', 400, 12, 16, 12, 16, 'Excepteur sint occaecat cupidatat non proident.'], ['button', 900, 16, 24, 16, 24, 'SIGN UP']
  ],

  /* Spacing (px) and radii [token, value, where]. */
  spacing: [4, 8, 10, 12, 16, 20, 24, 25, 30, 38, 40, 48],
  spacingNote: 'The steps used in the file. 25 pads every bar and control, 20 is the screen gutter (430 frame, 390 column) and card padding, 30 separates posts, 40 pads sections.',
  radii: [['radius-4', '4px', 'inputs, Fairgrounds buttons and tabs'], ['radius-5', '5px', 'Fairgrounds photos'], ['radius-10', '10px', 'cards, navy buttons'], ['radius-15', '15px', 'dropdowns, day tabs'], ['radius-pill', '50px', 'Fair buttons, FG search']],

  /* Accessibility: [label, text color, background, sample]. Ratios and AA verdicts are computed. */
  pairs: [
    ['Cream on Irish Green · button, bar title', '#f4e8ab', '#098944', 'Aa'], ['Mustard on Irish Green · icons', '#fdd252', '#098944', '←'],
    ['White on Pomegranate · selected day', '#ffffff', '#ee4623', '1'], ['Cream on Pomegranate · alt button', '#f4e8ab', '#ee4623', 'Aa'],
    ['Irish Green on white · ghost, links', '#098944', '#ffffff', 'Aa'], ['Off-white on Rhino · control rows', '#f1f1f1', '#1f3667', 'Aa'],
    ['Ink on Light Mustard · page text', '#0a0f12', '#fdd252', 'Aa'], ['Rhino on Light Mustard · sign-up title', '#1f3667', '#fdd252', 'Aa'],
    ['Off-white on French Blue · FG button, tab', '#f1f1f1', '#0077c8', 'Aa'], ['French Blue on white · FG links', '#0077c8', '#ffffff', 'Aa'],
    ['French Blue on Porcelain · FG links on page', '#0077c8', '#ebedef', 'Aa'], ['Slate on Rubber Ducky · FG Sign up', '#19262d', '#ffd100', 'Aa'],
    ['Placeholder on FG input', '#6f7985', '#eff8ff', 'Aa'], ['Placeholder in FG sign-up', '#7c7c7c', '#f1f1f1', 'Aa']
  ],

  /* Starter components, themed from CONFIG.theme (The Fair). */
  starters: {
    button: { primary: 'Sign up', ghost: 'Plan your visit' },
    field: { label: 'Email', placeholder: 'Enter your email' },
    segmented: { label: 'Events view', options: ['List', 'Calendar'] },
    dropdown: { label: 'Day', options: ['Day 1', 'Day 2', 'Day 3', 'Day 4'] },
    chips: { label: 'Map categories', options: ['Food & Beverage', 'Rides', 'Restrooms', 'First Aid', 'Parking'] },
    accordion: [['When is the Fair open?', 'Daily from 10am to 10pm; buildings close at 9pm (sample).'], ['Can I bring a stroller?', 'Yes. Strollers and wheelchairs can be rented at Gate 1 (sample).']]
  },
    fontUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Lalezar&family=PT+Sans+Narrow:wght@700&display=swap',
    css: "#ds-popup .nx{--x-disp:\"Lalezar\",\"Arial Black\",sans-serif;--x-body:\"Inter\",system-ui,sans-serif;--x-narrow:\"PT Sans Narrow\",\"Arial Narrow\",sans-serif;--x-page:#fdd252;--x-raised:#f4e8ab;--x-hdr:#098944;--x-on-hdr:#f4e8ab;--x-hicon:#fdd252;--x-block:#1f3667;--x-block-act:#33559c;--x-on-block:#f1f1f1;--x-ink:#0a0f12;--x-ink2: #343434;--x-act:#098944;--x-on-act:#f4e8ab;--x-alt:#ee4623;--x-tab:#1f3667;--x-on-tab:#ffffff;--x-tab-sel:#ee4623;--x-on-tab-sel:#ffffff;--x-input:#f4e8ab;--x-fav:#fdd252;--x-list:#098944;--x-on-list:#ffffff;--x-fav-o:#f4e8ab;--x-signup:#fdd252;--x-frame:#ee4623;--x-su-h:#1f3667;--x-su-ink:#0a0f12;--x-err:#8f2a15;--x-track:#089c43;--x-knob-on:#fdd252;--x-knob-off:#146233;--x-ring:#1f3667;--x-ring-dark:#fdd252;--x-link:#1f3667;--x-head:var(--x-disp);font-family:var(--x-body);color:var(--x-ink)}#ds-popup .nx[data-side=\"fairgrounds\"]{--x-page:#ebedef;--x-raised:#ffffff;--x-hdr:#19262d;--x-on-hdr:#f1f1f1;--x-hicon:#ffd100;--x-block:#19262d;--x-block-act:#0077c8;--x-ink:#19262d;--x-act:#0077c8;--x-on-act:#f1f1f1;--x-alt:#ffd100;--x-tab:#dbe2ea;--x-on-tab:#19262d;--x-tab-sel:#0077c8;--x-on-tab-sel:#f1f1f1;--x-input:#eff8ff;--x-list:#ffffff;--x-on-list:#19262d;--x-fav-o:#19262d;--x-signup:#19262d;--x-frame:#19262d;--x-su-h:#f1f1f1;--x-su-ink:#f1f1f1;--x-err:#f8b5a7;--x-track:#0077c8;--x-knob-on:#19262d;--x-knob-off:#19262d;--x-ring:#0077c8;--x-ring-dark:#ffd100;--x-link:#0077c8;--x-head:var(--x-narrow)}#ds-popup .nx :focus-visible{outline:3px solid var(--x-ring);outline-offset:2px}#ds-popup .nx .nx-dark :focus-visible,#ds-popup .nx .nx-dark:focus-visible{outline-color:var(--x-ring-dark)}#ds-popup .nx svg{display:block;flex:none}#ds-popup .nx .fx{transform:scaleX(-1)}#ds-popup .nx .fy{transform:scaleY(-1)}#ds-popup .nx button{cursor:pointer}#ds-popup .nx-ib{width:44px;height:44px;display:grid;place-items:center;border:0;background:none;padding:0;border-radius:10px;color:inherit;flex:none}#ds-popup .nx-sample{font:500 12px/16px var(--font);color:var(--text-muted)}#ds-popup .nx-switch{display:inline-flex;gap:4px;padding:4px;border-radius:999px;background:var(--hover);align-self:flex-start}#ds-popup .nx-switch button{min-height:44px;padding:0 18px;border:0;border-radius:999px;background:transparent;font:700 14px/20px var(--font);color:var(--text)}#ds-popup .nx-switch button[aria-pressed=\"true\"]{background:var(--text);color:#fff}#ds-popup .nx-a{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,360px);gap:32px;align-items:start}#ds-popup .nx-a-side{display:flex;flex-direction:column;gap:16px}#ds-popup .nx-a-list{margin:0;padding:0 0 0 18px;font:500 14px/22px var(--font);color:var(--text-muted)}#ds-popup .nx-a-list b{color:var(--text)}#ds-popup .nx-phone{width:100%;max-width:360px;justify-self:center;border-radius:22px;overflow:hidden;background:var(--x-page);box-shadow:0 0 0 1px rgb(0 0 0 / .08),0 12px 32px rgb(0 0 0 / .12)}#ds-popup .nx-bar{position:relative;height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 8px;background:var(--x-hdr);color:var(--x-hicon)}#ds-popup .nx-bar-title{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font:400 20px/24px var(--x-head);text-transform:uppercase;color:var(--x-on-hdr);white-space:nowrap;margin:0;padding-top:3px}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-bar-title{font-weight:700;font-size:15px;padding-top:0;letter-spacing:.5px}#ds-popup .nx-bar .nx-menu{color:var(--x-on-hdr)}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-bar .nx-menu{color:var(--x-hicon)}#ds-popup .nx-tabs{display:flex;gap:8px;padding:16px}#ds-popup .nx-tab{flex:1 1 0;min-width:0;height:60px;border:0;border-radius:15px;background:var(--x-tab);color:var(--x-on-tab);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;letter-spacing:.5px}#ds-popup .nx-tab[aria-selected=\"true\"]{background:var(--x-tab-sel);color:var(--x-on-tab-sel)}#ds-popup .nx-tab small{font:800 11px/14px var(--x-body);text-transform:uppercase}#ds-popup .nx-tab span{font:400 24px/24px var(--x-disp);padding-top:3px}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-tab{border-radius:4px}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-tab small{font-weight:600;font-size:13px;text-transform:none}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-tab span{font:700 20px/22px var(--x-body);padding-top:0}#ds-popup .nx-listp{background:var(--x-list);color:var(--x-on-list);padding:8px 16px 16px}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-listp{border-radius:10px 10px 0 0}#ds-popup .nx-row{display:flex;align-items:flex-start;gap:12px;padding:12px 0}#ds-popup .nx-row + .nx-row{border-top:1px solid rgb(255 255 255 / .18)}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-row + .nx-row{border-top-color:#dbe2ea}#ds-popup .nx-row-t{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px;padding-top:4px}#ds-popup .nx-row-t b{font:800 17px/22px var(--x-body)}#ds-popup .nx-row-t span{font:700 13px/16px var(--x-body)}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-row-t span{color:var(--x-link)}#ds-popup .nx-fav{color:var(--x-fav-o)}#ds-popup .nx-fav[aria-pressed=\"true\"]{color:var(--x-fav)}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-fav[aria-pressed=\"true\"]{color:#0077c8}#ds-popup .nx-su{margin:0;background:var(--x-signup);border:12px solid var(--x-frame);padding:20px 18px 24px;display:flex;flex-direction:column;align-items:center;gap:14px}#ds-popup .nx-su h4{margin:0;font:400 26px/24px var(--x-head);color:var(--x-su-h);text-transform:uppercase;padding-top:4px}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-su h4{font-weight:700;font-size:26px;line-height:32px;padding-top:0;letter-spacing:.5px}#ds-popup .nx-su label{align-self:stretch;font:800 12px/16px var(--x-body);text-transform:uppercase;color:var(--x-su-h)}#ds-popup .nx-su input{align-self:stretch;height:48px;border:0;border-radius:4px;padding:0 14px;background:var(--x-input);font:400 16px/24px var(--x-body);color:#0a0f12}#ds-popup .nx-su input::placeholder{color:#475157}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-su input{background:#f1f1f1}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-b .nx-fav{color:#fff}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-b .nx-fav[aria-pressed=\"true\"]{color:#ffd100}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-b .nx-dd-btn{background:#2d4150}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-b .nx-dd-btn[aria-expanded=\"true\"]{background:#0077c8}#ds-popup [data-ds=\"nysf\"][data-xside=\"fairgrounds\"] .d:not(:has(.nx)){--primary:#0077c8;--primary-hover:#005f9f;--on-primary:#f1f1f1;--accent:#19262d;--on-accent:#f1f1f1;--surface:#ffffff;--hover:#eff8ff;--focus-fill:#eff8ff;--text:#19262d;--placeholder:#6f7985;--border:#6f7985;--border-strong:#19262d;--disabled:#ebedef;--disabled-ink:#757d81;--radius-control:4px;--radius-field:4px;--radius-card:4px}#ds-popup [data-ds=\"nysf\"][data-xside=\"fairgrounds\"] .d:not(:has(.nx)) .c-btn{background:#ffd100;color:#19262d;text-transform:uppercase;letter-spacing:.5px}#ds-popup [data-ds=\"nysf\"][data-xside=\"fairgrounds\"] .d:not(:has(.nx)) .c-btn:hover{background:#e6bc00}#ds-popup [data-ds=\"nysf\"][data-xside=\"fairgrounds\"] .d:not(:has(.nx)) .c-btn.ghost{background:transparent;color:#19262d;box-shadow:inset 0 0 0 1px #19262d}#ds-popup [data-ds=\"nysf\"][data-xside=\"fairgrounds\"] .d:not(:has(.nx)) .c-btn.ghost:hover{background:#eff8ff}#ds-popup [data-ds=\"nysf\"][data-xside=\"fairgrounds\"] .d:not(:has(.nx)) .c-btn:disabled{background:#ebedef;color:#757d81}#ds-popup .nx-su .nx-pill{align-self:stretch;min-width:0}#ds-popup .nx-su-err{align-self:stretch;font:700 13px/18px var(--x-body);color:var(--x-err)}#ds-popup .nx-su-err:empty{display:none}#ds-popup .nx-pill{min-width:160px;height:52px;padding:0 20px;border:0;border-radius:50px;background:var(--x-act);color:var(--x-on-act);font:900 15px/24px var(--x-body);letter-spacing:.5px;text-transform:uppercase}#ds-popup .nx[data-side=\"fairgrounds\"] .nx-pill{border-radius:4px;background:var(--x-alt);color:#19262d;font-weight:700}#ds-popup .nx-su-ok{font:700 13px/18px var(--x-body);color:var(--x-su-ink);text-align:center}#ds-popup .nx-su-ok:empty{display:none}#ds-popup .nx-b{background:var(--x-hdr);border-radius:10px;padding:16px;display:flex;flex-direction:column;gap:12px;color:#fff}#ds-popup .nx-b-top{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}#ds-popup .nx-favf{min-height:44px;display:inline-flex;align-items:center;gap:10px;padding:0 10px;border:0;border-radius:10px;background:transparent;color:var(--x-raised);font:700 14px/20px var(--x-body)}#ds-popup .nx-favf svg{color:var(--x-raised)}#ds-popup .nx-favf[aria-pressed=\"true\"] svg{color:var(--x-fav)}#ds-popup .nx-favf[aria-pressed=\"true\"]{background:rgb(0 0 0 / .18)}#ds-popup .nx-reset{min-height:44px;display:inline-flex;align-items:center;gap:10px;padding:0 10px;border:0;border-radius:10px;background:transparent;color:var(--x-raised);font:700 15px/20px var(--x-body)}#ds-popup .nx-dds{display:grid;grid-template-columns:1fr 1fr;gap:8px}#ds-popup .nx-dd{position:relative;min-width:0}#ds-popup .nx-dd-btn{width:100%;height:50px;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:0 18px;border:0;border-radius:15px;background:var(--x-block);color:var(--x-on-block);font:700 15px/20px var(--x-body)}#ds-popup .nx-dd-btn span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#ds-popup .nx-dd-btn svg{color:var(--x-raised)}#ds-popup .nx-dd-btn[aria-expanded=\"true\"]{background:var(--x-block-act)}#ds-popup .nx-dd-btn[aria-expanded=\"true\"] svg{color:#f0d115;transform:none}#ds-popup .nx-dd-menu{position:absolute;z-index:6;left:0;right:0;top:calc(100% + 8px);margin:0;padding:10px;list-style:none;border-radius:15px;background:var(--x-raised);box-shadow:0 10px 24px rgb(0 0 0 / .25)}#ds-popup .nx-dd-menu[hidden]{display:none}#ds-popup .nx-dd-opt{min-height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;border-radius:10px;font:700 16px/20px var(--x-body);color:#202020;cursor:pointer}#ds-popup .nx-dd-opt.is-active{background:#f6edbc}#ds-popup .nx-dd-opt[aria-selected=\"true\"]::after{content:\"\";width:8px;height:8px;border-radius:50%;background:var(--x-alt)}#ds-popup .nx-cl{display:flex;flex-direction:column;gap:4px}#ds-popup .nx-cr{display:flex;align-items:flex-start;gap:14px;padding:8px 0}#ds-popup .nx-thumb{width:72px;height:72px;border-radius:6px;background:#202020;border:3px solid var(--x-raised);display:grid;place-items:center;font:400 26px/1 var(--x-disp);color:var(--x-page);padding-top:4px;flex:none}#ds-popup .nx-cr-t{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}#ds-popup .nx-cr-t small{font:800 12px/16px var(--x-body);text-transform:uppercase}#ds-popup .nx-cr-t b{font:800 18px/22px var(--x-body)}#ds-popup .nx-cr-t span{font:400 14px/20px var(--x-body)}#ds-popup .nx-empty{font:700 14px/20px var(--x-body);color:var(--x-raised);padding:16px 0}#ds-popup .nx-empty button{border:0;background:none;padding:0;color:var(--x-page);font:inherit;text-decoration:underline;min-height:44px}#ds-popup .nx-c{background:var(--x-page);border-radius:10px;padding:16px;display:flex;flex-direction:column;gap:14px}#ds-popup .nx-search{height:60px;display:flex;align-items:center;gap:8px;padding:0 8px 0 24px;border:1px solid #e3ebf0;border-radius:50px;background:#fafdff}#ds-popup .nx-search input{flex:1;min-width:0;height:100%;border:0;background:none;outline:none;font:400 16px/24px var(--x-body);letter-spacing:.5px;color:#19262d}#ds-popup .nx-search input::placeholder{color:#6f7985}#ds-popup .nx-search input::-webkit-search-cancel-button{display:none}#ds-popup .nx-search:focus-within{border-color:#0077c8;box-shadow:0 0 0 2px #0077c8}#ds-popup .nx-search .nx-ib{color:#0077c8}#ds-popup .nx-c .nx-tabs{padding:0}#ds-popup .nx-c .nx-tab{height:56px}#ds-popup .nx-res{background:#fff;border-radius:10px;padding:4px 16px;min-height:120px}#ds-popup .nx-ev{padding:12px 0;display:flex;flex-direction:column;gap:4px;letter-spacing:.5px}#ds-popup .nx-ev + .nx-ev{border-top:1px solid #dbe2ea}#ds-popup .nx-ev span{font:600 13px/20px var(--x-body);color:#0077c8}#ds-popup .nx-ev b{font:700 15px/22px var(--x-body);color:#343434}#ds-popup .nx-ev mark{background:#ffd100;color:#19262d;border-radius:2px}#ds-popup .nx-c .nx-empty{color:#343434}#ds-popup .nx-d{background:var(--x-page);border-radius:10px;overflow:hidden;display:flex;flex-direction:column}#ds-popup .nx-d-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:64px;padding:0 16px;background:var(--x-hdr);color:var(--x-on-hdr);font:700 16px/20px var(--x-body)}#ds-popup .nx-tog{width:50px;height:30px;padding:5px 4px;border:0;border-radius:15px;background:var(--x-track);display:flex;justify-content:flex-start;position:relative;flex:none}#ds-popup .nx-tog::before{content:\"\";position:absolute;inset:-7px -2px}#ds-popup .nx-tog[aria-checked=\"true\"]{justify-content:flex-end}#ds-popup .nx-tog i{width:22px;height:20px;border-radius:10px;background:var(--x-knob-off)}#ds-popup .nx-tog[aria-checked=\"true\"] i{background:var(--x-knob-on)}#ds-popup .nx-d-body{padding:16px;display:flex;flex-direction:column;gap:14px}#ds-popup .nx-note{background:var(--x-raised);border-radius:10px;padding:24px 20px;display:flex;flex-direction:column;gap:14px;color:#0a0f12;min-height:196px}#ds-popup .nx-note small{font:800 13px/16px var(--x-body);text-transform:uppercase}#ds-popup .nx-note h4{margin:0;font:400 23px/22px var(--x-disp);text-transform:uppercase;padding-top:3px}#ds-popup .nx-note p{margin:0;font:400 14px/20px var(--x-body)}#ds-popup .nx-pager{display:flex;align-items:stretch;gap:12px}#ds-popup .nx-pn{min-width:0;flex:1 1 0;height:64px;display:inline-flex;align-items:center;justify-content:center;gap:10px;border:0;border-radius:10px;background:var(--x-block);color:var(--x-on-block);font:700 17px/16px var(--x-body);letter-spacing:.5px}#ds-popup .nx-pn svg{color:var(--x-raised)}#ds-popup .nx-pn:disabled{opacity:.45;cursor:not-allowed}#ds-popup .nx-off{font:700 14px/20px var(--x-body);color:#1f3667}#ds-popup .nx-e{background:var(--x-page);border-radius:10px;overflow:hidden}#ds-popup .nx-e .nx-bar{height:60px}#ds-popup .nx-e-body{padding:16px;display:flex;flex-direction:column;gap:8px}#ds-popup .nx-pb{width:100%;height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border:0;border-radius:10px;background:var(--x-block);color:#fff;font:800 19px/24px var(--x-body);text-align:left}#ds-popup .nx-pb .c2{fill:var(--x-block)}#ds-popup .nx-pb svg{color:var(--x-hicon)}#ds-popup .nx-e-copy{margin:0;font:400 14px/20px var(--x-body);color:#0a0f12}#ds-popup .nx-e-copy b{font-weight:800}#ds-popup .nx-acc{margin:0 -16px}#ds-popup .nx-acc-h{width:100%;min-height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border:0;background:var(--x-block);color:var(--x-on-block);font:700 16px/20px var(--x-body);text-align:left}#ds-popup .nx-acc-h svg{color:var(--x-hicon)}#ds-popup .nx-acc-h[aria-expanded=\"true\"]{background:var(--x-hdr);min-height:72px}#ds-popup .nx-acc-p{background:var(--x-block-act);color:var(--x-on-block);padding:18px 28px 22px;font:400 14px/20px var(--x-body)}#ds-popup .nx-acc-p[hidden]{display:none}#ds-popup .nx-ticker{background:var(--x-raised);padding:14px 16px;font:700 14px/20px var(--x-body);color:#0a0f12;text-align:center}@media (max-width: 900px){#ds-popup .nx-a{grid-template-columns:minmax(0,1fr)}}@media (max-width: 420px){#ds-popup .nx-dds{grid-template-columns:minmax(0,1fr)}#ds-popup .nx-tab span{font-size:21px}}#ds-popup [data-ds=\"nysf\"] #ds-nysf-type .r-type:nth-child(-n+5) .r-sample{font-family:\"Lalezar\",\"Arial Black\",sans-serif}#ds-popup [data-ds=\"nysf\"] #ds-nysf-type .r-type:nth-child(n+6):nth-child(-n+8) .r-sample{font-family:\"PT Sans Narrow\",\"Arial Narrow\",sans-serif}",
    components: {
      html: CUSTOM.map(function (c, i) { return '<div class="d' + (c.width && c.width !== 6 ? ' w' + c.width : '') + '"><div class="d-head"><span class="d-name">' + NX.esc(c.name) + '</span><span class="d-uses">' + NX.esc(c.uses) + '</span></div><div data-custom="' + i + '">' + c.html + '</div></div>'; }).join(''),
      init: function (root) { CUSTOM.forEach(function (c, i) { c.init(root.querySelector('[data-custom="' + i + '"]')); }); }
    }
  });
})();

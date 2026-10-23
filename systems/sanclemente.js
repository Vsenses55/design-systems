/* City of San Clemente — homepage concept for the City of San Clemente, CA. Opens with href="#ds-sanclemente".
   Built from the city-san-clemente-concept repo (Vsenses55/city-san-clemente-concept): src/CityOfSanClemente/styles.css,
   guidelines/design.md and the Header, Hero, QuickLinks, EventsCalendar, NewsPromo, VideoSection, MiscLinks and Footer
   components. Images in systems/sanclemente/. Labels, nav, headlines and meeting names are from the build; the extra
   alerts, the language list and which day each meeting falls on are sample data. */
(function () {
  var SRC = (document.currentScript && document.currentScript.src) || '';
  var IMG = SRC.replace(/[^/]*$/, '') + 'sanclemente/';
  var esc = DSPopup.helpers.esc;

  /* Icons from src/components/icons.tsx */
  var I = {
    world: '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M31.4525 19.3017C31.3823 15.9364 30.9411 12.6459 29.9849 9.36844C31.8604 8.81547 33.6598 8.12723 35.3796 7.19098C38.2303 10.6334 39.8383 14.8079 39.9929 19.2898L31.4525 19.3017Z" fill="#EEC47D" /><path d="M8.57248 19.2922L0.00708008 19.2875C0.153365 14.7984 1.81245 10.6025 4.62873 7.19098C6.35799 8.13791 8.14195 8.82378 10.0068 9.36844C9.09934 12.6162 8.59626 15.8225 8.57248 19.291V19.2922Z" fill="#EEC47D" /><path d="M35.4223 32.7818C33.6479 31.8598 31.8936 31.1312 29.9872 30.6174C30.9125 27.3826 31.3894 24.1146 31.4405 20.7233H40C39.8917 23.5534 39.2341 26.2328 38.0162 28.7354C37.305 30.1747 36.4689 31.4682 35.4223 32.7818Z" fill="#EEC47B" /><path d="M10.0128 30.6197C8.11584 31.1478 6.3735 31.8503 4.62046 32.7818C1.78872 29.3856 0.185532 25.1909 0 20.7268L8.56183 20.715C8.61059 24.0992 9.07323 27.315 10.0116 30.6209L10.0128 30.6197Z" fill="#EEC37B" /><path d="M19.2918 19.3028L10.0164 19.3064C10.077 16.0693 10.4921 12.8808 11.4174 9.71252C14.0184 10.3058 16.6253 10.5966 19.2918 10.6357V19.3028Z" fill="#EEC47B" /><path d="M19.2941 29.3298C16.6527 29.3654 14.0636 29.6763 11.4376 30.2732C10.5337 27.182 10.0996 24.0054 10.0116 20.722L19.2882 20.7173L19.2941 29.331V29.3298Z" fill="#EEC47C" /><path d="M30.0122 19.2839L20.7118 19.2922L20.7201 10.6333C23.3782 10.5989 25.9352 10.3118 28.5505 9.70184C29.0762 11.413 29.427 13.1241 29.6578 14.9123C29.8576 16.3481 29.9444 17.7211 30.0122 19.2827V19.2839Z" fill="#EEC47C" /><path d="M29.2522 27.5428L28.5743 30.2673C25.9959 29.674 23.4079 29.3571 20.7153 29.3275V20.7173L29.9967 20.7137C29.9539 23.0205 29.6875 25.2751 29.2522 27.544V27.5428Z" fill="#EEC47A" /><path d="M11.886 8.33371C12.8529 5.57836 14.506 2.49669 16.9703 0.878131C17.6803 0.436706 18.3927 0.102077 19.2871 -0.00115967L19.2966 9.20706C16.8288 9.14417 14.4109 8.90566 11.886 8.33371Z" fill="#EEC47A" /><path d="M19.293 40C15.4254 39.3415 13.1752 35.1408 11.886 31.6533C14.2896 31.1098 16.7669 30.8084 19.2918 30.7704V40H19.293Z" fill="#EEC27A" /><path d="M26.2076 35.6949C24.9279 37.7276 23.1523 39.6037 20.7142 39.9929L20.7118 30.7692C23.1891 30.8025 25.6403 31.0837 28.1212 31.645C27.5931 33.057 27.0175 34.392 26.2076 35.6949Z" fill="#EEC27A" /><path d="M24.0883 1.70874C25.9852 3.48275 27.24 5.91177 28.1034 8.33605C25.6546 8.90089 23.2344 9.15245 20.7095 9.2011L20.7202 0C22.0403 0.172061 23.1202 0.848438 24.0883 1.70874Z" fill="#EEC47B" /><path d="M29.5507 7.99549C29.2534 7.21707 29.0179 6.5039 28.6468 5.78481C27.7691 3.84111 26.5632 2.13118 25.0028 0.590942C28.6373 1.49278 31.8021 3.41749 34.4186 6.07316C32.8748 6.89905 31.2919 7.49236 29.5507 7.99549Z" fill="#EEC27C" /><path d="M25.0231 39.3984C26.0518 38.3245 26.9854 37.2506 27.7276 35.9572C28.503 34.7077 29.0548 33.3798 29.5436 31.9962C31.2313 32.4424 32.8321 33.0713 34.4222 33.8758C31.8485 36.5374 28.7016 38.4455 25.0231 39.3996V39.3984Z" fill="#EEC27A" /><path d="M12.8743 3.08165C11.8289 4.62189 11.0392 6.22621 10.4505 7.98598C8.72715 7.51489 7.12515 6.88598 5.59094 6.09094C8.17531 3.42103 11.3591 1.51056 14.971 0.594482C14.1968 1.40851 13.5058 2.15252 12.8743 3.08165Z" fill="#EEC27C" /><path d="M14.9626 39.3948C11.7931 38.5713 8.91857 36.9753 6.54233 34.8014L5.59326 33.8924C7.12628 33.0713 8.77109 32.4638 10.4563 31.9879C10.8881 33.3051 11.4173 34.4822 12.0857 35.6487C12.8469 37.0382 13.8126 38.1928 14.9614 39.3948H14.9626Z" fill="#EEC37A" /></svg>',
    alert: '<svg viewBox="0 0 91 80" fill="none" aria-hidden="true"><path d="M9.51959 79.8797L9.64732 79.6127L45.1204 79.6006L45.2216 79.5092L45.2337 67.0244L45.1614 66.933L40.2401 66.9089C40.0329 66.8608 40.0184 66.7044 40.1389 66.5216C40.2763 66.3459 40.3245 66.3579 40.2859 66.5624C40.2425 66.3026 40.3606 66.2665 40.6426 66.4566L45.494 66.4686L45.6386 66.293C47.328 66.3435 48.9741 66.3146 50.5791 66.2064V56.1997C48.9765 56.0915 47.328 56.0626 45.6386 56.1107C45.5904 56.0337 45.5422 55.976 45.494 55.9736C43.7925 55.9351 42.038 55.9567 40.3775 56.0193L40.2859 55.8412C40.2811 55.9062 40.2329 55.9495 40.1389 55.9736C39.975 55.7474 40.0305 55.6006 40.3004 55.5766C41.9754 55.6079 43.6262 55.5838 45.2554 55.502L45.2289 50.8849C45.4361 50.7501 45.6892 50.69 45.988 50.7044L46.0121 50.6009H50.5189L50.7888 50.447C50.7478 41.6409 50.7671 32.8518 50.8466 24.077C50.5574 23.976 50.502 24.0073 50.6852 24.1685H45.6386L45.4916 23.9952L40.4908 23.9904C40.4353 24.2479 40.3173 24.2334 40.1365 23.9423C39.9654 23.7209 40.0064 23.5742 40.2811 23.5405L45.1566 23.579C45.2457 15.8461 45.2674 8.09147 45.2241 0.317639C44.8698 0.392225 44.6553 0.305609 44.5782 0.0577892C47.1786 -0.228527 49.8079 0.493278 51.989 2.10531C53.2398 3.03162 54.0809 4.1817 54.881 5.52185L61.0627 15.8942L89.2166 63.2782C90.1926 64.924 90.9494 66.6082 90.9711 68.5137L90.9952 70.3952C90.4674 75.597 86.2643 79.6127 81.0129 79.9712L9.83771 79.9928C9.61358 79.9928 9.58225 79.9423 9.51477 79.8749L9.51959 79.8797Z" fill="#F5AA02" /><path d="M44.583 0.0626026L45.5012 0.0529785V23.8557L40.298 23.81C40.204 23.81 40.1438 23.9014 40.1413 23.9495C40.257 23.988 40.257 24.0313 40.1413 24.0819C40.2233 24.4283 40.2498 24.7844 40.2257 25.1525L40.4089 25.2512L40.4233 50.1534C40.1124 50.2569 40.0883 50.4061 40.3558 50.6009L45.9013 50.6058L45.9929 50.7092L45.4988 50.8079L45.5302 55.8412L40.3004 55.8461C40.2016 55.8461 40.1486 55.9423 40.1438 55.9784C40.2329 56.5414 40.2594 57.1549 40.2257 57.8214L40.4113 57.9369C40.4113 60.4921 40.4113 63.0425 40.4113 65.588L40.2377 65.6722C40.2377 65.985 40.2064 66.2689 40.1438 66.5216C40.163 66.5673 40.1992 66.6298 40.3028 66.6563L45.5061 66.6683L45.494 79.8701L9.52202 79.8822C4.37663 79.4322 0.226573 75.1038 0.00967084 69.8755C-0.08432 67.5802 0.436245 65.5856 1.59788 63.6295L25.674 23.1146L36.0588 5.60366C37.9338 2.44215 40.8788 0.105911 44.583 0.0626026Z" fill="#F8C302" /><path d="M50.8491 24.0794C50.8129 32.9431 50.7671 41.7852 50.7141 50.6081L40.2113 50.584C40.1534 50.033 40.1655 49.7034 40.7487 50.0932L45.1614 50.098C45.294 41.6481 45.2892 32.8108 45.1614 24.3561L40.6908 24.3512C40.7969 24.8733 40.6571 25.1861 40.2739 25.292L40.1414 24.0794V23.947V23.9109L50.8491 23.9061V24.0818V24.0794Z" fill="#344947" /><path d="M40.2884 66.5601C39.9895 65.7757 40.433 64.9023 40.7366 66.0837L45.2361 66.0764L45.2458 56.4572C43.7877 56.3585 42.2959 56.3297 40.7704 56.3754C40.7053 56.8542 40.6643 57.3546 40.645 57.8792C40.5221 58.0476 40.2594 58.1101 40.2474 58.0139C40.1606 57.3522 40.1968 56.4692 40.2884 55.8461H50.8515V66.5625H40.2908L40.2884 66.5601Z" fill="#344947" /><path d="M40.2884 66.56H40.1414V66.5191V55.976V55.8436H40.2884L40.3076 57.8502C40.351 57.8502 40.3968 57.8286 40.4209 57.7781L40.4282 56.1083H45.5109L45.5012 66.3772L40.5776 66.3507C40.3799 66.3363 40.4089 65.7444 40.3727 65.5904C40.1896 65.8526 40.3052 66.2256 40.286 66.56H40.2884Z" fill="#3E565A" /><path d="M50.8491 24.0794L50.8635 50.7043H45.9929L40.1558 50.7092L40.1414 24.077C40.4016 24.3392 40.257 24.741 40.3101 25.1621C40.5294 24.8373 40.3944 24.4812 40.4257 24.077L45.5037 24.0866V50.3603L40.5053 50.3531C40.4691 50.0186 40.11 50.1077 40.2667 50.483L50.7189 50.5046L50.7141 24.2382C50.7141 24.1107 50.8009 24.0722 50.8491 24.0746V24.0794Z" fill="#3E5659" /></svg>',
    instagram: '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="4" y="4" width="32" height="32" rx="9" stroke="currentColor" stroke-width="2" /><circle cx="20" cy="20" r="7.5" stroke="currentColor" stroke-width="2" /><circle cx="29" cy="11" r="1.8" fill="currentColor" /></svg>',
    facebook: '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="16" stroke="currentColor" stroke-width="2" /><path d="M23 13h-3a3 3 0 0 0-3 3v3h-3v4h3v9h4v-9h3.2l.8-4H21v-2.4c0-.9.3-1.6 1.6-1.6H24z" fill="currentColor" /></svg>',
    x: '<svg viewBox="0 0 34 35" fill="none" aria-hidden="true"><rect x="1" y="1.5" width="32" height="32" rx="8" stroke="currentColor" stroke-width="2" /><path d="M10 10l14 15M24 10L10 25" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>',
    tiktok: '<svg viewBox="0 0 32 38" fill="none" aria-hidden="true"><path d="M22 2c1 4 3.5 6.5 7 7v5c-2.7 0-5-.8-7-2.2v11.7C22 29.5 17.7 33 12.6 33 7.4 33 3 28.9 3 23.7c0-5 4.2-9.2 9.4-9.2 1 0 1.9.1 2.8.4v5.4a4.7 4.7 0 0 0-2.8-.9 4.5 4.5 0 1 0 4.4 5.4V2h5.2z" fill="currentColor" /></svg>',
    menu: '<svg viewBox="0 0 24 18" fill="none" aria-hidden="true"><path d="M0 1h24M0 9h24M0 17h24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    left: '<svg viewBox="0 0 12 18" fill="none" aria-hidden="true"><path d="M10 2L3 9l7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    right: '<svg viewBox="0 0 12 18" fill="none" aria-hidden="true"><path d="M2 2l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    play: '<svg viewBox="0 0 76 53" fill="none" aria-hidden="true"><rect width="76" height="53" rx="14" fill="#0B366A"/><path class="sc-tri" d="M30 16l22 10.5L30 37V16z" fill="#fff"/><path class="sc-pause" d="M29 16h6v21h-6zM41 16h6v21h-6z" fill="#fff"/></svg>'
  };

  var UTILITY = ['3-1-1', 'Animal Services', 'Campaign Disclosures', 'Homelessness Info', 'Muni-Code', 'Transparency'];
  var MAIN = ['Residents', 'Business', 'Government', 'Visitors', 'Connect'];
  var QUICK = [['pay-a-bill', 'Pay A Bill', 'Pay A Bill'], ['recreation', 'Recreation Sign-up', 'Recreation'], ['compliance', 'Code Compliance & Service Requests', 'Compliance'], ['permits', 'Permits & Business Licensee', 'Permits'], ['meetings', 'Meetings & Agendas', 'Meetings'], ['current-projects', 'Current Projects', 'Projects']];
  var MISC = [['ada', 'ADA'], ['beach-camera', 'Beach Camera'], ['city-hall', 'City Hall'], ['contact', 'Contact Us'], ['weather', 'Live Weather'], ['press', 'Press Releases']];
  var NEWS = ['Ballot Measure BB, City Council Candidates, City of San Clemente General Municipal', 'City of San Clemente Begins its Search for Offshore Sand', 'First Approval Received in Effort to Restart the SCOUP Program', '3rd Annual Monster Dash 5K & Creepy Crawl Fun Run Set for October 26, 2024'];
  var M = { zoning: ['1:00 p.m.', 'Zoning Administration Meeting'], design: ['3:30 p.m.', 'Design Review Subcommittee'], planning: ['6:00 p.m.', 'Planning Commission Meeting'], parks: ['6:00 p.m.', 'Parks & Recreation Workshop'] };

  function tabs(label, opts, attr) {
    return '<div class="sc-tabs" role="group" aria-label="' + esc(label) + '">' + opts.map(function (o, i) { return '<button type="button" aria-pressed="' + (i === 0) + '" ' + attr + '="' + o[0] + '">' + esc(o[1]) + '</button>'; }).join('') + '</div>';
  }
  function pinTabs(el, attr, targets, out, msgs) {
    var bs = el.querySelectorAll('[' + attr + ']');
    bs.forEach(function (b) {
      b.addEventListener('click', function () {
        bs.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        var s = b.getAttribute(attr);
        targets().forEach(function (t) { t.classList.remove('is-hover'); if (s) t.classList.add(s); });
        out.textContent = s ? msgs[1] : msgs[0];
      });
    });
  }
  function links(el, sel, out, suffix) {
    el.querySelectorAll(sel).forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); out.innerHTML = '<strong>' + esc(a.getAttribute('data-name') || a.textContent.trim()) + '</strong> ' + suffix; });
    });
  }

  var CUSTOM = [
    {
      name: 'Utility bar',
      uses: 'UtilityBar · Translate  ·  Header.tsx',
      width: 12,
      html: '<div class="sc-hdr"><div class="sc-util"><nav aria-label="Utility (sample)">' + UTILITY.map(function (l) { return '<a href="#" data-k>' + esc(l) + '</a>'; }).join('') + '</nav><div class="sc-tr" data-tr></div></div></div>' +
        '<p class="d-live" aria-live="polite" data-o>Hover or tab through the links, or choose a language. Languages are sample data.</p>',
      init: function (el, H) {
        var out = el.querySelector('[data-o]');
        H.dropdown(el.querySelector('[data-tr]'), { id: 'sc-tr', label: 'Translate', icon: I.world, options: ['English', 'Español', 'Tiếng Việt', '한국어', '中文'], onChange: function (i, v) { out.innerHTML = 'Page language set to <strong>' + esc(v) + '</strong>. In the build this hands off to the translation service.'; } });
        links(el, '[data-k]', out, 'would open its page.');
      }
    },
    {
      name: 'City Alerts and quick links',
      uses: 'QuickLinks · City Alerts bar with alert dots · service tiles (Default, Hover)  ·  QuickLinks.tsx',
      width: 12,
      html: tabs('Tile state', [['', 'Live'], ['is-hover', 'Hover']], 'data-st') +
        '<section class="sc-ql"><div class="sc-alert"><div class="sc-alert-t">' + I.alert + '<p>City Alerts</p></div><div class="sc-msgs" aria-live="polite" data-msgs></div><div class="sc-dots" role="group" aria-label="Choose alert" data-dots></div></div>' +
        '<div class="sc-tiles">' + QUICK.map(function (q, i) { return '<a href="#" class="sc-tile' + (i > 2 ? ' r2' : '') + '" data-q data-name="' + esc(q[1]) + '"><img src="' + IMG + q[0] + '.png" alt="" aria-hidden="true"><span class="sc-long">' + esc(q[1]) + '</span><span class="sc-short" aria-hidden="true">' + esc(q[2]) + '</span></a>'; }).join('') + '</div></section>' +
        '<p class="d-live" aria-live="polite" data-o>Pick an alert, then a service. Alerts 2 to 4 are sample data.</p>',
      init: function (el) {
        var out = el.querySelector('[data-o]'), alerts = ['High Tide Report and Weather Statement', 'Pier Bowl parking lot closed for resurfacing', 'Water quality advisory at North Beach', 'Street sweeping moves to Thursday this week'];
        var msgs = el.querySelector('[data-msgs]'), dots = el.querySelector('[data-dots]'), cur = 1;
        msgs.innerHTML = alerts.map(function (a, i) { return '<p aria-hidden="' + (i !== cur) + '">' + esc(a) + '</p>'; }).join('');
        dots.innerHTML = alerts.map(function (a, i) { return '<button type="button" aria-label="Alert ' + (i + 1) + ' of 4"' + (i === cur ? ' aria-current="true"' : '') + '><span></span></button>'; }).join('');
        var ps = msgs.children, bs = dots.children;
        function show(i, f) { cur = i; for (var j = 0; j < 4; j++) { ps[j].setAttribute('aria-hidden', String(j !== i)); if (j === i) bs[j].setAttribute('aria-current', 'true'); else bs[j].removeAttribute('aria-current'); bs[j].tabIndex = j === i ? 0 : -1; } if (f) bs[i].focus(); out.innerHTML = 'Alert ' + (i + 1) + ' of 4: <strong>' + esc(alerts[i]) + '</strong>'; }
        Array.prototype.forEach.call(bs, function (b, j) {
          b.tabIndex = j === cur ? 0 : -1;
          b.addEventListener('click', function () { show(j); });
          b.addEventListener('keydown', function (e) { var n = e.key === 'ArrowRight' ? (cur + 1) % 4 : e.key === 'ArrowLeft' ? (cur + 3) % 4 : e.key === 'Home' ? 0 : e.key === 'End' ? 3 : -1; if (n > -1) { e.preventDefault(); show(n, true); } });
        });
        links(el, '[data-q]', out, 'would open the service page.');
        pinTabs(el, 'data-st', function () { return el.querySelectorAll('.sc-tile'); }, out, ['Live states restored.', 'Showing the hover state on every tile.']);
      }
    },
    {
      name: 'Events calendar',
      uses: 'EventsCalendar · month grid (desktop) · week strip (mobile) · date badge · Meetings and Events lists  ·  EventsCalendar.tsx',
      width: 12,
      html: '<div class="sc-cal-bar">' + tabs('Calendar view', [['month', 'Month'], ['week', 'Week']], 'data-view') + '<span class="d-uses">Arrow keys move a day, Page Up and Page Down a month. Meeting names are from the build; the schedule is sample data.</span></div>' +
        '<div class="sc-views"><section class="sc-cal" data-month aria-label="Month view"><div class="sc-grid-side"><div class="sc-cal-head"><button type="button" class="sc-arr" data-m="-1" aria-label="Previous month">' + I.left + '</button><p data-mlabel aria-live="polite"></p><button type="button" class="sc-arr" data-m="1" aria-label="Next month">' + I.right + '</button></div>' +
        '<table class="sc-month" role="presentation"><thead><tr>' + ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(function (d) { return '<th scope="col">' + d + '</th>'; }).join('') + '</tr></thead><tbody data-cells></tbody></table></div>' +
        '<div class="sc-panel"><div class="sc-badge" aria-hidden="true"><span data-bm></span><b data-bd></b></div><p class="sc-sel" data-sel></p><div class="sc-lists" data-lists></div></div></section>' +
        '<section class="sc-week" data-week aria-label="Week view" aria-hidden="true"><div class="sc-cal-head"><button type="button" class="sc-arr" data-w="-1" aria-label="Previous week">' + I.left + '</button><p data-wlabel></p><button type="button" class="sc-arr" data-w="1" aria-label="Next week">' + I.right + '</button></div><div class="sc-strip" data-strip></div><div class="sc-wlist" data-wlist></div></section></div>' +
        '<p class="d-live" aria-live="polite" data-o></p>',
      init: function (el) {
        var today = new Date(); today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var sel = today, view = 'month', out = el.querySelector('[data-o]');
        var same = function (a, b) { return a.toDateString() === b.toDateString(); };
        function add(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
        function sched(d) {
          if (same(d, today)) return { m: [M.zoning, M.design], e: [M.planning, M.parks] };
          return [{ m: [], e: [] }, { m: [M.zoning], e: [] }, { m: [M.zoning, M.design], e: [M.planning] }, { m: [M.design], e: [M.parks] }, { m: [M.zoning, M.design], e: [M.planning, M.parks] }, { m: [], e: [M.parks] }, { m: [], e: [] }][d.getDay()];
        }
        function fmt(d, o) { return d.toLocaleDateString('en-US', o); }
        function list(title, items, cards, dot) {
          return '<div class="sc-list"><p class="sc-lh">' + title + '</p>' + (items.length ? items.map(function (x, i) { return cards ? '<div class="sc-ecard"><span style="background:' + (dot ? '#AFA683' : i === 0 ? '#24B6E5' : '#F4D193') + '"></span><p><b>' + x[0] + '</b>' + esc(x[1]) + '</p></div>' : '<div class="sc-item"><span></span><p><b>' + x[0] + '</b>' + esc(x[1]) + '</p></div>'; }).join('') : '<p class="sc-none">No ' + title.toLowerCase() + ' scheduled.</p>') + '</div>';
        }
        var cells = el.querySelector('[data-cells]');
        function renderMonth(focus) {
          var y = sel.getFullYear(), mo = sel.getMonth(), first = new Date(y, mo, 1).getDay(), n = new Date(y, mo + 1, 0).getDate(), h = '', c = 0;
          el.querySelector('[data-mlabel]').textContent = fmt(sel, { month: 'long', year: 'numeric' });
          var row = '<tr>'; for (var i = 0; i < first; i++) { row += '<td></td>'; c++; }
          for (var d = 1; d <= n; d++) {
            var dt = new Date(y, mo, d), isT = same(dt, today), isS = same(dt, sel);
            row += '<td><button type="button" data-d="' + d + '" tabindex="' + (isS ? 0 : -1) + '" aria-pressed="' + isS + '"' + (isT ? ' aria-current="date" class="is-today"' : '') + ' aria-label="' + fmt(dt, { weekday: 'long', month: 'long', day: 'numeric' }) + (isT ? ', today' : '') + '">' + d + '</button></td>';
            if (++c % 7 === 0) { h += row + '</tr>'; row = '<tr>'; }
          }
          if (c % 7) { while (c++ % 7) row += '<td></td>'; h += row + '</tr>'; }
          while ((h.match(/<tr>/g) || []).length < 6) h += '<tr><td colspan="7"><span class="sc-blank"></span></td></tr>';
          cells.innerHTML = h;
          if (focus) cells.querySelector('[tabindex="0"]').focus();
        }
        function renderPanel() {
          var s = sched(sel);
          el.querySelector('[data-bm]').textContent = fmt(sel, { month: 'short' }); el.querySelector('[data-bd]').textContent = sel.getDate();
          el.querySelector('[data-sel]').textContent = same(sel, today) ? 'Today' : fmt(sel, { weekday: 'long', month: 'long', day: 'numeric' });
          el.querySelector('[data-lists]').innerHTML = list('Meetings', s.m) + list('Events', s.e);
          el.querySelector('[data-wlist]').innerHTML = list('Meetings', s.m, true) + list('Events', s.e, true, true);
          var t = s.m.length + s.e.length;
          out.innerHTML = '<strong>' + (same(sel, today) ? 'Today' : fmt(sel, { weekday: 'long', month: 'long', day: 'numeric' })) + '</strong>: ' + (t ? t + (t === 1 ? ' item' : ' items') + ' scheduled.' : 'nothing scheduled.');
        }
        function renderWeek(focus) {
          var start = add(sel, -sel.getDay()), mid = add(start, 3);
          el.querySelector('[data-wlabel]').textContent = fmt(mid, { month: 'long' }) + ', ' + mid.getFullYear();
          el.querySelector('[data-strip]').innerHTML = [0, 1, 2, 3, 4, 5, 6].map(function (i) { var d = add(start, i), isS = same(d, sel), isT = same(d, today); return '<button type="button" data-wd="' + i + '" tabindex="' + (isS ? 0 : -1) + '" aria-pressed="' + isS + '"' + (isT ? ' aria-current="date"' : '') + ' class="' + (isT ? 'is-today' : '') + '" aria-label="' + fmt(d, { weekday: 'long', month: 'long', day: 'numeric' }) + (isT ? ', today' : '') + '"><span>' + fmt(d, { weekday: 'short' }) + '</span><b>' + d.getDate() + '</b></button>'; }).join('');
          if (focus) el.querySelector('[data-strip] [tabindex="0"]').focus();
        }
        function go(d, focus) { sel = d; renderMonth(focus && view === 'month'); renderWeek(focus && view === 'week'); renderPanel(); }
        cells.addEventListener('click', function (e) { var b = e.target.closest('[data-d]'); if (b) go(new Date(sel.getFullYear(), sel.getMonth(), +b.getAttribute('data-d')), true); });
        el.querySelector('[data-strip]').addEventListener('click', function (e) { var b = e.target.closest('[data-wd]'); if (b) go(add(add(sel, -sel.getDay()), +b.getAttribute('data-wd')), true); });
        function keys(e, week) {
          var k = e.key, d = null;
          if (k === 'ArrowRight') d = add(sel, 1); else if (k === 'ArrowLeft') d = add(sel, -1);
          else if (!week && k === 'ArrowDown') d = add(sel, 7); else if (!week && k === 'ArrowUp') d = add(sel, -7);
          else if (k === 'Home') d = add(sel, -sel.getDay()); else if (k === 'End') d = add(sel, 6 - sel.getDay());
          else if (!week && k === 'PageDown') d = new Date(sel.getFullYear(), sel.getMonth() + 1, Math.min(sel.getDate(), 28));
          else if (!week && k === 'PageUp') d = new Date(sel.getFullYear(), sel.getMonth() - 1, Math.min(sel.getDate(), 28));
          if (d) { e.preventDefault(); go(d, true); }
        }
        cells.addEventListener('keydown', function (e) { if (e.target.closest('[data-d]')) keys(e, false); });
        el.querySelector('[data-strip]').addEventListener('keydown', function (e) { if (e.target.closest('[data-wd]')) keys(e, true); });
        el.querySelectorAll('[data-m]').forEach(function (b) { b.addEventListener('click', function () { var n = +b.getAttribute('data-m'); go(new Date(sel.getFullYear(), sel.getMonth() + n, 1)); }); });
        el.querySelectorAll('[data-w]').forEach(function (b) { b.addEventListener('click', function () { go(add(sel, 7 * +b.getAttribute('data-w'))); }); });
        var mv = el.querySelector('[data-month]'), wv = el.querySelector('[data-week]');
        el.querySelectorAll('[data-view]').forEach(function (b) {
          b.addEventListener('click', function () {
            el.querySelectorAll('[data-view]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
            view = b.getAttribute('data-view');
            mv.setAttribute('aria-hidden', String(view !== 'month')); wv.setAttribute('aria-hidden', String(view !== 'week'));
            renderPanel();
          });
        });
        go(today);
      }
    },
    {
      name: 'Latest News',
      uses: 'NewsPromo · headline list on the events blue  ·  NewsPromo.tsx',
      width: 7,
      html: '<div class="sc-news"><h4>Latest News</h4><ul>' + NEWS.map(function (n) { return '<li><a href="#" data-n>' + esc(n) + '</a></li>'; }).join('') + '</ul></div><p class="d-live" aria-live="polite" data-o>Headlines are the build’s copy.</p>',
      init: function (el) { links(el, '[data-n]', el.querySelector('[data-o]'), 'would open the press release.'); }
    },
    {
      name: 'Beach camera',
      uses: 'VideoSection · IconPlay · Default, Playing  ·  VideoSection.tsx',
      width: 5,
      html: '<button type="button" class="sc-cam" aria-pressed="false" aria-label="Play San Clemente Beach Camera livestream"><span class="sc-live">Live</span>' + I.play + '<span class="sc-cam-t">San Clemente Beach Camera</span></button><p class="d-live" aria-live="polite" data-o>Press play. No video loads in this demo.</p>',
      init: function (el) {
        var b = el.querySelector('.sc-cam'), out = el.querySelector('[data-o]');
        b.addEventListener('click', function () { var on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', String(on)); b.setAttribute('aria-label', (on ? 'Pause' : 'Play') + ' San Clemente Beach Camera livestream'); out.innerHTML = on ? '<strong>Playing.</strong> In the build the livestream starts here.' : 'Paused.'; });
      }
    },
    {
      name: 'Resource links',
      uses: 'MiscLinks · warm tiles with line icons (Default, Hover)  ·  MiscLinks.tsx, Icon_*.svg',
      width: 12,
      html: '<div class="sc-misc">' + MISC.map(function (m) { return '<a href="#" data-r><img src="' + IMG + 'icon-' + m[0] + '.svg" alt="" aria-hidden="true">' + esc(m[1]) + '</a>'; }).join('') + '</div><p class="d-live" aria-live="polite" data-o></p>',
      init: function (el) { links(el, '[data-r]', el.querySelector('[data-o]'), 'would open its page.'); }
    },
    {
      name: 'Footer',
      uses: 'Footer · city seal, two link columns, Follow Us  ·  Footer.tsx',
      width: 12,
      html: '<footer class="sc-foot"><div class="sc-foot-top"><img src="' + IMG + 'cosc-seal.png" alt="City of San Clemente seal" width="206" height="206">' +
        '<div class="sc-cols"><nav aria-label="Footer sections (sample)">' + MAIN.map(function (l) { return '<a href="#" data-f>' + esc(l) + '</a>'; }).join('') + '</nav><nav aria-label="Footer services (sample)">' + ['3-1-1', 'Animal Services', 'Muni-Code', 'Transparency', 'Homelessness Info'].map(function (l) { return '<a href="#" data-f>' + esc(l) + '</a>'; }).join('') + '</nav></div>' +
        '<div class="sc-follow"><p>Follow Us</p><div>' + [['instagram', 'Instagram'], ['facebook', 'Facebook'], ['x', 'X'], ['tiktok', 'TikTok']].map(function (s) { return '<a href="#" data-f data-name="' + s[1] + '" aria-label="' + s[1] + '">' + I[s[0]] + '</a>'; }).join('') + '</div></div></div>' +
        '<p class="sc-copy">© ' + new Date().getFullYear() + ' City of San Clemente, CA. All Rights Reserved. Connecting People and Government</p><p class="d-live" aria-live="polite" data-o></p></footer>',
      init: function (el) { links(el, '[data-f]', el.querySelector('[data-o]'), 'would open in the site.'); }
    }
  ];

  var C = {
    name: 'City of San Clemente Design System',
    intro: 'Every component below works with mouse, touch and keyboard. Navigation, service names, headlines and meeting names come from the homepage build; extra alerts, the language list and the meeting schedule are sample data, and nothing is sent.',
    cta: { label: 'View prototype', url: 'https://vsenses55.github.io/city-san-clemente-concept/' },
    fontUrl: 'https://fonts.googleapis.com/css2?family=Signika:wght@400;600;700&family=Arimo:wght@400;700&display=swap',

    theme: {
      font: 'Arimo, Arial, sans-serif',
      primary: '#0B366A', primaryHover: '#07192E', onPrimary: '#ffffff',
      accent: '#F4D193', onAccent: '#07192E',
      danger: '#D93025',
      surface: '#ffffff', hover: '#E9EEF0', focusFill: '#ffffff',
      text: '#07192E', textMuted: '#524D37', placeholder: '#AFA683',
      border: '#D2D0C6', borderStrong: '#AFA683',
      disabled: '#F1F0EF', disabledInk: '#AFA683',
      cta: '#0B366A', onCta: '#ffffff',
      radiusControl: '8px', radiusField: '8px', radiusCard: '16px', radiusOverlay: '16px'
    },

    colorNote: 'Exact values from src/CityOfSanClemente/styles.css. The ratio on each chip is contrast against white.',
    colors: [
      { label: 'Primary · navy', tokens: [['primary/100', '#DCE1E8', 'Tint'], ['primary/300', '#7199C9', 'Tint'], ['primary/500', '#0B366A', 'surface/primary, interactive/primary: utility bar, alerts bar, calendar, CTAs'], ['primary/700', '#07192E', 'text/primary, surface/dark: body text, footer, mobile menu'], ['primary/900', '#03080E', 'Hero scrim, video gradient']] },
      { label: 'Secondary · warm stone', tokens: [['secondary/100', '#F1F0EF', 'surface/card, border/subtle'], ['secondary/300', '#D2D0C6', 'border/default'], ['secondary/500', '#AFA683', 'text/muted, border/strong, date badge'], ['secondary/700', '#524D37', 'text/secondary'], ['secondary/900', '#1B1913', 'Shade']] },
      { label: 'Accent · ocean blue', tokens: [['accent/100', '#E9EEF0', 'surface/accent-subtle: tile hover'], ['accent/300', '#A7CFDC', 'Tint'], ['accent/500', '#24B6E5', 'text/link, interactive/default, surface/accent'], ['accent/700', '#115166', 'interactive/hover'], ['accent/900', '#071A20', 'Shade']] },
      { label: 'Surfaces', tokens: [['surface/background', '#F6E8CF', 'Warm parchment page background'], ['surface/warm', '#F4D193', 'Today, resource tiles, nav hover'], ['surface/white', '#FFFFFF', 'Tiles, fields']] },
      { label: 'Status', tokens: [['danger/100', '#EFE9E8', 'status/error-subtle'], ['danger/500', '#D93025', 'status/error'], ['success/100', '#E0E9E5', 'status/success-subtle'], ['success/500', '#1A8754', 'status/success'], ['warning/100', '#F0ECE7', 'status/warning-subtle'], ['warning/500', '#E8890C', 'status/warning']] },
      { label: 'Component values outside the palette', tokens: [['events blue', '#0D4281', 'Meetings & Events panel, Latest News'], ['tile border', '#E8E2E2', 'Quick link tile stroke'], ['tile fade 1', '#F8F6F6', 'Quick link gradient, row 1'], ['tile fade 2', '#F1E8E8', 'Quick link gradient, row 2'], ['warm tile border', '#E5BE7D', 'Resource tile stroke'], ['alert yellow', '#F8C302', 'City Alerts icon']] }
    ],

    typeNote: 'Signika (SemiBold 600, Bold 700) for headings; Arimo (Regular 400, Bold 700) for body and UI. Values are the kit’s heading-* and body-* utilities. Mobile values are what the components switch to: the hero headline steps down to heading-h2 and quick link labels to heading-h6. Alex Brush is reserved for the logo lockup and is not part of the content type system.',
    type: [
      ['heading-display', 700, 72, 80, 40, 48, 'The Spanish Village by the Sea'], ['heading-h1', 700, 56, 64, 56, 64, 'San Clemente'],
      ['heading-h2', 700, 40, 48, 40, 48, 'City Services'], ['heading-h3', 600, 32, 40, 32, 40, 'Latest News'],
      ['heading-h4', 600, 24, 32, 24, 32, 'City Alerts'], ['heading-h5', 600, 20, 28, 16, 24, 'Recreation Sign-up'],
      ['heading-h6', 600, 16, 24, 16, 24, 'Residents'],
      ['body-body-lg', 400, 18, 28, 18, 28, 'High Tide Report and Weather Statement'], ['body-body', 400, 16, 26, 16, 26, 'Find the service you need below.'],
      ['body-body-bold', 700, 16, 26, 16, 26, 'Oct'], ['body-body-sm', 400, 14, 22, 14, 22, 'City of San Clemente Begins its Search for Offshore Sand'],
      ['body-caption', 400, 12, 18, 12, 18, 'Animal Services · Muni-Code · Transparency'], ['body-overline', 700, 11, 16, 11, 16, 'OVERLINE'],
      ['body-event-time', 700, 15, 22, 15, 22, '6:00 p.m.'], ['body-event-description', 400, 15, 22, 15, 22, 'Planning Commission Meeting']
    ],

    spacing: [2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
    spacingNote: 'space/1 to space/15 are unitless px (2 to 128). Semantic aliases: gap/tight 4, gap/default 8, gap/relaxed 16, gap/loose 24, gap/section 40, gap/between-sections 48; padding/comfortable 16 for cards, padding/spacious 24 for panels, padding/page 96. The homepage stacks sections 40px apart on mobile and 56px on desktop inside a 1200px column.',
    radii: [['radius/sm', '4px', 'Badges, tags'], ['radius/md', '8px', 'Buttons, inputs, calendar days'], ['radius/lg', '16px', 'Modal, panel'], ['radius/xl', '24px', 'Homepage section cards'], ['date badge', '0 0 0 40px', 'Calendar date corner'], ['radius/full', '9999px', 'Pills, dots']],

    a11yNote: 'Ratios and WCAG AA verdicts are computed from the exact token values. Nothing is re-tinted: the failing pairs below are real uses in the build, flagged with the limit they need.',
    pairs: [
      ['White on primary/500', '#ffffff', '#0B366A', 'Aa'],
      ['White on surface/dark (footer)', '#ffffff', '#07192E', 'Aa'],
      ['White on events blue', '#ffffff', '#0D4281', 'Aa'],
      ['text/primary on surface/warm', '#07192E', '#F4D193', '23'],
      ['text/primary on parchment', '#07192E', '#F6E8CF', 'Aa'],
      ['surface/warm on primary (nav hover)', '#F4D193', '#0B366A', 'Aa'],
      ['text/secondary on white', '#524D37', '#ffffff', 'Aa'],
      ['Event titles (white 65%) on events blue', '#aabdd3', '#0D4281', 'Aa'],
      ['Week strip days (white 50%) on primary', '#859ab4', '#0B366A', 'Fr'],
      ['text/link on white (accent/500)', '#24B6E5', '#ffffff', 'Aa'],
      ['text/link on surface/dark (footer hover)', '#24B6E5', '#07192E', 'Aa'],
      ['text/on-accent on surface/accent', '#ffffff', '#24B6E5', 'Aa'],
      ['text/muted on white', '#AFA683', '#ffffff', 'Aa'],
      ['White on secondary/500 (date badge)', '#ffffff', '#AFA683', '23'],
      ['status/error on white', '#D93025', '#ffffff', '!'],
      ['status/success on white', '#1A8754', '#ffffff', '✓'],
      ['status/warning on white', '#E8890C', '#ffffff', '!']
    ],

    starters: {
      button: { primary: 'Pay A Bill', ghost: 'Current Projects' },
      field: { label: 'Email for City Alerts', placeholder: 'name@example.com' },
      segmented: { label: 'Calendar view', options: ['Month', 'Week'] },
      dropdown: { label: 'Translate', options: ['English', 'Español', 'Tiếng Việt', '한국어', '中文'] },
      chips: { label: 'Main nav sections', options: MAIN },
      accordion: [
        ['Why “The Spanish Village by the Sea”?', 'It is the city’s tagline and the hero headline on the homepage, set over the coastline and pier photo.'],
        ['Where do service requests go?', 'Code Compliance & Service Requests in the quick links, or 3-1-1 in the utility bar. This answer is sample copy.']
      ]
    }
  };

  var S = '#ds-popup [data-ds="sanclemente"]';
  C.css = [
    '$ { --head: "Signika", Arial, sans-serif; --navy: #0B366A; --deep: #07192E; --warm: #F4D193; --evt: #0D4281; --stone: #AFA683; }',
    '$ .p-sec > h3 { font: 700 32px/40px var(--head); color: var(--deep); }',
    '$ .r-type:nth-child(-n+7) .r-sample { font-family: var(--head); }',
    '$ .r-type:nth-child(13) .r-sample { text-transform: uppercase; letter-spacing: 1.5px; }',
    '$ .d-name { font: 600 20px/28px var(--head); letter-spacing: .15px; }',
    '$ .d { gap: 28px; }',
    '$ .d-head { margin-bottom: -4px; }',
    '$ .d-live { padding-top: 12px; border-top: 1px solid #ECEAE6; }',
    '$ .d-live:empty { display: none; }',
    '$ [data-custom] { display: flex; flex-direction: column; gap: 28px; min-width: 0; }',
    '$ .c-btn { font-weight: 700; }',
    '$ .c-chip[aria-pressed="true"] { border-color: #E5BE7D; }',
    /* state switcher */
    '$ .sc-tabs { display: inline-flex; flex-wrap: wrap; gap: 4px; padding: 4px; border-radius: 10px; background: #F1F0EF; align-self: flex-start; }',
    '$ .sc-tabs button { min-height: 44px; padding: 0 16px; border: 0; border-radius: 8px; background: transparent; font: 600 15px/20px var(--head); color: var(--deep); cursor: pointer; }',
    '$ .sc-tabs button:hover { background: #fff; }',
    '$ .sc-tabs button[aria-pressed="true"] { background: var(--navy); color: #fff; }',
    /* header */
    '$ .sc-hdr { border-radius: 24px; background: var(--navy); color: #fff; }', '$ .sc-util { display: flex; align-items: center; justify-content: space-between; gap: 8px 24px; flex-wrap: wrap; padding: 0 16px 0 24px; background: var(--navy); border-radius: 24px; }',
    '$ .sc-util nav { display: flex; flex-wrap: wrap; column-gap: 24px; }',
    '$ .sc-util a { display: inline-flex; align-items: center; min-height: 44px; min-width: 44px; font: 400 12px/18px var(--font); letter-spacing: .4px; color: #fff; transition: color .15s; }',
    '$ .sc-util a:hover { color: var(--warm); }',
    '$ .sc-tr .c-dd-btn { height: 44px; padding: 0 8px; gap: 8px; border: 0; background: transparent; font: 400 12px/18px var(--font); letter-spacing: .4px; color: #fff; }',
    '$ .sc-tr .c-dd-btn:hover, $ .sc-tr .c-dd-btn[aria-expanded="true"] { background: rgb(255 255 255 / .1); }',
    '$ .sc-tr .c-dd-btn svg { width: 20px; height: 20px; }',
    '$ .sc-tr .c-dd-btn svg.chev { width: 16px; height: 16px; }',
    '$ .sc-tr .c-menu { left: auto; right: 0; z-index: 6; }',
    '$ .sc-hdr :focus-visible, $ .sc-ql .sc-alert :focus-visible, $ .sc-cal :focus-visible, $ .sc-week :focus-visible, $ .sc-news :focus-visible, $ .sc-foot :focus-visible { outline-color: var(--warm); }',
    /* alerts + quick links */
    '$ .sc-ql { border-radius: 24px; overflow: hidden; }',
    '$ .sc-alert { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 12px 24px; padding: 12px 24px 12px 44px; background: var(--navy); color: #fff; }',
    '$ .sc-alert-t { display: flex; align-items: center; gap: 12px; }',
    '$ .sc-alert-t svg { width: 40px; height: 35px; flex: none; }',
    '$ .sc-alert-t p { font: 600 24px/32px var(--head); white-space: nowrap; color: #fff; }',
    '$ .sc-msgs { display: grid; text-align: center; }',
    '$ .sc-msgs p { grid-area: 1 / 1; font: 400 16px/26px var(--font); letter-spacing: .25px; color: #fff; }',
    '$ .sc-msgs p[aria-hidden="true"] { visibility: hidden; }',
    '$ .sc-dots { display: flex; }',
    '$ .sc-dots button { width: 24px; height: 44px; display: grid; place-items: center; border: 0; background: none; cursor: pointer; padding: 0; }',
    '$ .sc-dots button span { width: 14px; height: 14px; border-radius: 50%; background: rgb(255 255 255 / .4); transition: background .15s; }',
    '$ .sc-dots button:hover span { background: rgb(255 255 255 / .7); }',
    '$ .sc-dots button[aria-current="true"] span { background: #fff; }',
    '$ .sc-tiles { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }',
    '$ .sc-tile { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 13px; height: 220px; padding: 0 24px; border: 1px solid #E8E2E2; background: linear-gradient(#fff, #F8F6F6); text-align: center; transition: background .15s; }',
    '$ .sc-tile.r2 { background: linear-gradient(#fff, #F1E8E8); }',
    '$ .sc-tile:hover, $ .sc-tile.is-hover { background: #E9EEF0; }',
    '$ .sc-tile img { width: 88px; height: 88px; object-fit: contain; object-position: bottom; }',
    '$ .sc-tile span { font: 600 20px/28px var(--head); letter-spacing: .15px; color: var(--deep); }',
    '$ .sc-tile .sc-short { display: none; }',
    '$ .sc-tile:focus-visible { outline-offset: -4px; }',
    /* calendar */
    '$ .sc-cal-bar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px 16px; }',
    '$ .sc-views { display: grid; }',
    '$ .sc-views > section { grid-area: 1 / 1; min-width: 0; }',
    '$ .sc-views > section[aria-hidden="true"] { visibility: hidden; }',
    '$ .sc-cal { display: grid; grid-template-columns: 520fr 680fr; border-radius: 24px; overflow: hidden; background: var(--navy); color: #fff; }',
    '$ .sc-grid-side { display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 32px 24px; }',
    '$ .sc-cal-head { display: flex; align-items: center; justify-content: center; gap: 8px; }',
    '$ .sc-cal-head p { font: 600 24px/32px var(--head); white-space: nowrap; min-width: 200px; text-align: center; color: #fff; }',
    '$ .sc-arr { width: 44px; height: 44px; display: grid; place-items: center; border: 0; border-radius: 8px; background: none; color: rgb(255 255 255 / .8); cursor: pointer; }',
    '$ .sc-arr:hover { color: #fff; background: rgb(255 255 255 / .08); }',
    '$ .sc-arr svg { width: 12px; height: 18px; }',
    '$ .sc-month { width: 100%; max-width: 340px; border-collapse: collapse; border-spacing: 0; table-layout: fixed; text-align: center; }',
    '$ .sc-month th { padding-bottom: 6px; font: 600 16px/24px var(--head); color: rgb(255 255 255 / .7); }',
    '$ .sc-month td { padding: 1px 0; height: 46px; }',
    '$ .sc-month button { width: 44px; height: 44px; max-width: 100%; border: 0; border-radius: 8px; background: none; font: 400 16px/26px var(--font); color: #fff; cursor: pointer; }',
    '$ .sc-month button:hover { background: rgb(255 255 255 / .1); }',
    '$ .sc-month button[aria-pressed="true"] { box-shadow: inset 0 0 0 2px var(--warm); }',
    '$ .sc-month button.is-today { background: var(--warm); color: var(--deep); font-weight: 700; }',
    '$ .sc-blank { display: block; height: 44px; }', '$ .sc-sel, $ .sc-lh, $ .sc-item p, $ .sc-none, $ .sc-copy, $ .sc-ecard p { margin: 0; }',
    '$ .sc-panel { position: relative; background: var(--evt); padding: 40px 48px; display: flex; flex-direction: column; justify-content: center; gap: 24px; }',
    '$ .sc-badge { position: absolute; top: 0; right: 0; width: 110px; height: 110px; border-radius: 0 0 0 40px; background: var(--stone); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; }',
    '$ .sc-badge span { font: 700 16px/1 var(--font); letter-spacing: .25px; text-transform: uppercase; }',
    '$ .sc-badge b { font: 700 64px/1 var(--head); letter-spacing: -1.5px; }',
    '$ .sc-sel { font: 700 11px/16px var(--font); letter-spacing: 1.5px; text-transform: uppercase; color: var(--warm); padding-right: 110px; }',
    '$ .sc-lists { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }',
    '$ .sc-list { display: flex; flex-direction: column; gap: 16px; min-height: 160px; }',
    '$ .sc-lh { font: 600 24px/32px var(--head); color: #fff; }',
    '$ .sc-item { display: flex; gap: 12px; }',
    '$ .sc-item span { margin-top: 7px; width: 10px; height: 10px; border-radius: 50%; background: var(--warm); flex: none; }',
    '$ .sc-item p, $ .sc-ecard p { font: 400 15px/22px var(--font); color: #fff; }',
    '$ .sc-item b, $ .sc-ecard b { display: block; font-weight: 700; }',
    '$ .sc-none { font: 400 15px/22px var(--font); color: rgb(255 255 255 / .8); }',
    '$ .sc-week { border-radius: 24px; overflow: hidden; background: var(--navy); color: #fff; align-self: start; }',
    '$ .sc-week > .sc-cal-head { padding: 20px 16px 12px; }',
    '$ .sc-week .sc-cal-head p { font-size: 32px; line-height: 40px; min-width: 0; }',
    '$ .sc-strip { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 4px; padding: 0 12px 24px; border-bottom: 1px solid rgb(255 255 255 / .1); }',
    '$ .sc-strip button { min-height: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; padding: 8px 0; border: 0; border-radius: 6px; background: none; color: rgb(255 255 255 / .5); font: 400 15px/1 var(--font); cursor: pointer; }',
    '$ .sc-strip button span { font-size: 11px; text-transform: uppercase; }',
    '$ .sc-strip button b { font-weight: 400; }',
    '$ .sc-strip button:hover { background: rgb(255 255 255 / .08); color: #fff; }',
    '$ .sc-strip button[aria-pressed="true"] { color: #fff; box-shadow: inset 0 0 0 2px var(--warm); }',
    '$ .sc-strip button.is-today { background: var(--warm); color: var(--deep); }',
    '$ .sc-strip button.is-today b, $ .sc-strip button.is-today span { font-weight: 700; }',
    '$ .sc-wlist { background: var(--evt); padding: 20px 24px 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px 24px; }',
    '$ .sc-wlist .sc-list { gap: 10px; min-height: 184px; }',
    '$ .sc-wlist .sc-lh { font-size: 24px; }',
    '$ .sc-ecard { display: flex; align-items: center; gap: 12px; padding: 14px; border-radius: 12px; background: rgb(255 255 255 / .07); border: 1px solid rgb(255 255 255 / .1); }',
    '$ .sc-ecard span { width: 3px; height: 36px; border-radius: 2px; flex: none; }',
    '$ .sc-ecard p { font-size: 13px; line-height: 18px; color: #aabdd3; }',
    '$ .sc-ecard b { color: #fff; }',
    /* news */
    '$ .sc-news { background: var(--evt); border-radius: 24px; padding: 40px 48px; display: flex; flex-direction: column; gap: 20px; flex: 1; justify-content: center; }',
    '$ .sc-news h4 { margin: 0; font: 600 32px/40px var(--head); color: #fff; }',
    '$ .sc-news ul { margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 2px; list-style: disc; }',
    '$ .sc-news li { color: rgb(255 255 255 / .5); font: 400 14px/22px var(--font); }',
    '$ .sc-news a { display: block; padding: 11px 0; font: 400 14px/22px var(--font); letter-spacing: .25px; color: rgb(255 255 255 / .9); }',
    '$ .sc-news a { transition: color .15s; }', '$ .sc-news a:hover { color: #F4D193; }', '$ .c-acc-head { min-height: 56px; padding: 14px 12px 14px 20px; font: 600 16px/22px var(--head); letter-spacing: .15px; }', '$ .c-acc-head span { width: 32px; height: 32px; }', '$ .c-acc-body { padding: 4px 20px 20px; font-size: 15px; line-height: 24px; }',
    '$ [data-custom] > .sc-news { flex: 1; }',
    /* camera */
    '$ .sc-cam { position: relative; width: 100%; aspect-ratio: 16 / 9; flex: 1; min-height: 220px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; border: 0; border-radius: 24px; background: linear-gradient(135deg, #03080E, #0B366A); color: #fff; cursor: pointer; overflow: hidden; }',
    '$ .sc-cam > svg { width: 72px; height: auto; transition: transform .2s; }',
    '$ .sc-cam:hover > svg { transform: scale(1.1); }',
    '$ .sc-cam .sc-pause { display: none; }',
    '$ .sc-cam[aria-pressed="true"] .sc-pause { display: inline; }',
    '$ .sc-cam[aria-pressed="true"] .sc-tri { display: none; }',
    '$ .sc-cam-t { font: 600 20px/28px var(--head); letter-spacing: .15px; padding: 0 16px; text-align: center; }',
    '$ .sc-live { position: absolute; top: 16px; left: 16px; padding: 2px 10px; border-radius: 9999px; background: #D93025; font: 700 11px/16px var(--font); letter-spacing: 1.5px; text-transform: uppercase; visibility: hidden; }',
    '$ .sc-cam[aria-pressed="true"] .sc-live { visibility: visible; }',
    '$ .sc-cam:focus-visible { outline-offset: 3px; }',
    /* misc links */
    '$ .sc-misc { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-radius: 24px; overflow: hidden; }',
    '$ .sc-misc a { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 13px; padding: 32px 16px; border: 1px solid #E5BE7D; background: #F4D193; font: 600 20px/28px var(--head); letter-spacing: .5px; text-transform: uppercase; text-align: center; color: var(--deep); transition: filter .15s; }',
    '$ .sc-misc a:hover { filter: brightness(.95); }',
    '$ .sc-misc img { width: 75px; height: 75px; }',
    '$ .sc-misc a:focus-visible { outline-offset: -4px; }',
    /* footer */
    '$ .sc-foot { background: var(--deep); border-radius: 24px; padding: 40px; display: flex; flex-direction: column; gap: 32px; color: #fff; }',
    '$ .sc-foot-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 32px 40px; flex-wrap: wrap; }',
    '$ .sc-foot-top > img { width: 140px; height: 140px; flex: none; }',
    '$ .sc-cols { display: grid; grid-template-columns: auto auto; column-gap: 56px; }',
    '$ .sc-cols nav { display: flex; flex-direction: column; }',
    '$ .sc-cols a { display: inline-flex; align-items: center; min-height: 44px; font: 400 16px/26px var(--font); letter-spacing: .25px; color: #fff; }',
    '$ .sc-cols a:hover, $ .sc-follow a:hover { color: #24B6E5; }',
    '$ .sc-follow > p { font: 600 20px/28px var(--head); letter-spacing: .15px; margin-bottom: 8px; color: #fff; }',
    '$ .sc-follow > div { display: flex; gap: 4px; margin-left: -4px; }',
    '$ .sc-follow a { width: 44px; height: 44px; display: grid; place-items: center; color: #fff; }',
    '$ .sc-follow svg { width: 36px; height: 36px; }',
    '$ .sc-copy { font: 400 12px/18px var(--font); letter-spacing: .4px; color: rgb(255 255 255 / .6); }',
    '$ .sc-foot .d-live { color: #cfd3d8; border-top-color: rgb(255 255 255 / .12); }',
    '$ .sc-foot .d-live strong { color: #fff; }',
    /* tablet */
    '@media (max-width: 1100px) { $ .sc-cal { grid-template-columns: minmax(0, 1fr); } $ .sc-panel { padding: 32px; } $ .sc-news { padding: 32px; } }',
    /* mobile */
    '@media (max-width: 760px) {' +
      ' $ .d-live { min-height: 52px; }' + ' $ .sc-tiles, $ .sc-misc { grid-template-columns: repeat(2, minmax(0, 1fr)); }' +
      ' $ .sc-tile { height: 127px; gap: 6px; padding: 0 12px; }' +
      ' $ .sc-tile img { width: 56px; height: 56px; }' +
      ' $ .sc-tile span { font-size: 16px; line-height: 24px; }' +
      ' $ .sc-tile .sc-long { display: none; }' +
      ' $ .sc-tile .sc-short { display: inline; }' +
      ' $ .sc-misc a { padding: 24px 8px; font-size: 16px; line-height: 24px; }' +
      ' $ .sc-misc img { width: 56px; height: 56px; }' +
      ' $ .sc-lists { grid-template-columns: minmax(0, 1fr); gap: 20px; }' +
      ' $ .sc-list { min-height: 152px; }' + ' $ .sc-wlist { grid-template-columns: minmax(0, 1fr); padding: 20px 16px 24px; }' + ' $ .sc-wlist .sc-list { min-height: 184px; }' +
      ' $ .sc-panel { padding: 24px 20px; }' +
      ' $ .sc-badge { width: 84px; height: 84px; border-radius: 0 0 0 32px; }' +
      ' $ .sc-badge b { font-size: 44px; }' +
      ' $ .sc-sel { padding-right: 84px; }' +
      ' $ .sc-grid-side { padding: 20px 0; }' +
      ' $ .sc-cal-head p { font-size: 20px; line-height: 28px; min-width: 160px; }' +
      ' $ .sc-week .sc-cal-head p { font-size: 24px; line-height: 32px; }' +
      ' $ .sc-news { padding: 28px 24px; }' +
      ' $ .sc-news h4 { font-size: 28px; line-height: 36px; }' +
      ' $ .sc-foot { padding: 28px 24px; }' +
      ' $ .sc-foot-top > img { width: 100px; height: 100px; }' +
      ' $ .sc-cols { column-gap: 32px; }' +
    ' }',
    '@media (max-width: 640px) { $ .sc-alert { grid-template-columns: minmax(0, 1fr); justify-items: center; padding: 16px 20px 8px; gap: 8px; } $ .sc-alert-t p { font-size: 24px; } }'
  ].join(' ').replace(/\$/g, S);

  C.components = {
    html: CUSTOM.map(function (c, i) { return '<div class="d' + (c.width && c.width !== 6 ? ' w' + c.width : '') + '"><div class="d-head"><span class="d-name">' + esc(c.name) + '</span><span class="d-uses">' + esc(c.uses) + '</span></div><div data-custom="' + i + '">' + c.html + '</div></div>'; }).join(''),
    init: function (root, H) { CUSTOM.forEach(function (c, i) { if (c.init) c.init(root.querySelector('[data-custom="' + i + '"]'), H); }); }
  };
  DSPopup.register('sanclemente', C);
})();

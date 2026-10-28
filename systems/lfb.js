/* Lead From Behind (Colorectal Cancer Alliance) — colon cancer prevention campaign. Opens with href="#ds-lfb".
   Built from the lead-from-behind repo (Vsenses55/lead-from-behind): Colors, Typography, Spacing and Components pages,
   SignupForm, FormField, NumberedContent 1-4 and Footer. Step copy is from the site; names, likes and form entries are sample data. */
(function () {
/* =====================================================================
   CONFIG: the only part that changes between projects.
   Source: github.com/Vsenses55/lead-from-behind (Colors, Typography, Spacing
   and Components pages, SignupForm, FormField, NumberedContent, Footer).
   ===================================================================== */
var C = {
  name: 'Lead From Behind Design System',
  intro: 'Every component below works with mouse, touch and keyboard. Step copy comes from the live site; names, likes and form entries are sample data and nothing is sent.',
  cta: { label: 'View prototype', url: 'https://vsenses55.github.io/lead-from-behind/prototype' },

  theme: {
    font: 'Avenir, "Avenir Next", "Century Gothic", Arial, sans-serif',
    primary: '#0072ca', primaryHover: '#147bca', onPrimary: '#ffffff',
    accent: '#ffdd00', onAccent: '#28324b',
    danger: '#d4183d',
    surface: '#ffffff', hover: '#ececec', focusFill: '#ffffff',
    text: '#28324b', textMuted: '#535b6f', placeholder: '#a3a3a3',
    border: '#28324b', borderStrong: '#28324b',
    disabled: '#d4d6db', disabledInk: '#535b6f',
    cta: '#0072ca', onCta: '#ffffff',
    radiusControl: '40px', radiusField: '8px', radiusCard: '16px', radiusOverlay: '16px'
  },

  colors: [
    { label: 'Primary · navy', tokens: [['Primary/100', '#d4d6db', 'Tint'], ['Primary/300', '#7e8493', 'Tint'], ['Primary/500', '#28324b', 'Headings, body, field borders, panels, footer'], ['Primary/700', '#181e2d', 'Shade'], ['Primary/900', '#080a0f', 'Shade']] },
    { label: 'Secondary · blue', tokens: [['Secondary/100', '#cce3f4', 'Tint'], ['Secondary/300', '#66aadf', 'Tint'], ['Secondary/500', '#0072ca', 'Buttons, focus, highlighted words'], ['Secondary/700', '#004479', 'Shade'], ['Secondary/900', '#001728', 'Shade']] },
    { label: 'Accent · yellow', tokens: [['Accent/100', '#fff8cc', 'Tint'], ['Accent/300', '#ffeb66', 'Tint'], ['Accent/500', '#ffdd00', 'Number circles, arrows, checkmarks, highlights'], ['Accent/700', '#998500', 'Shade'], ['Accent/900', '#332c00', 'Shade']] },
    { label: 'Danger', tokens: [['Danger/100', '#ffd8cc', 'Tint'], ['Danger/300', '#ff8a66', 'Tint'], ['Danger/500', '#ff3c00', 'Error state on the DS Components page'], ['Danger/700', '#992400', 'Shade'], ['Danger/900', '#330c00', 'Shade']] },
    { label: 'Success', tokens: [['Success/100', '#f5ffcc', 'Tint'], ['Success/300', '#e0ff66', 'Tint'], ['Success/500', '#ccff00', 'Base'], ['Success/700', '#7a9900', 'Shade'], ['Success/900', '#293300', 'Shade']] },
    { label: 'Component values outside the palette', tokens: [['pill hover', '#147BCA', 'Pill button hover'], ['donate hover', '#005A9E', 'Donate button hover'], ['field hover', '#ECECEC', 'Input hover fill'], ['placeholder', '#A3A3A3', 'Input hints'], ['form error', '#D4183D', 'Signup form errors (live site)'], ['footer text', '#DADADA', 'Footer contact copy']] }
  ],

  typeNote: 'Montserrat (Black 900, ExtraBold 800, Bold 700) for display and headings; Avenir (Book 400, Heavy 900) for body, labels and captions. The source gives one size per role; mobile values are the overrides the components use.',
  type: [
    ['Display 1', 900, 90, 84, 90, 84, 'Lead'], ['Display 2', 900, 76, 70, 76, 70, 'From'],
    ['H1', 900, 61, 60, 32, 35, 'Join us'], ['H2', 900, 48, 54, 48, 54, 'Be a leader'],
    ['H3', 800, 39, 43, 28, 32, 'Early detection saves lives'], ['H4', 700, 28, 35, 28, 35, 'The good news'],
    ['H5', 700, 20, 28, 20, 28, 'How to prevent'], ['Body (Large)', 400, 20, 25, 20, 25, 'Colon cancer is the preventable cancer.'],
    ['Body', 400, 20, 32, 16, 26, 'Join Lead From Behind and help prevent colon cancer in yourself and others.'],
    ['Body (Small)', 400, 16, 24, 16, 24, 'Talk to your healthcare provider about when to start screening.'],
    ['Labels', 900, 14, 16, 14, 16, 'First name'], ['Captions', 400, 13, 16, 13, 16, 'By providing information, I agree to receive email updates.']
  ],

  spacing: [2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160],
  spacingNote: 'The token number is the value in px. Recipes from the build: label to field 12, between paired fields 16, between form rows 48 (32 mobile), image to copy 64 (40 mobile), footer padding 120 by 60.',
  radii: [['donate', '6px', 'Donate button'], ['field', '8px', 'Inputs'], ['card', '16px', 'Posts, content cards'], ['image', '20px', 'Step photos'], ['panel', '25px', 'Info panel'], ['pill', '40px', 'Pill buttons'], ['circle', '200px', 'Number circles']],

  pairs: [
    ['White on blue (buttons)', '#ffffff', '#0072ca', 'Aa'],
    ['Yellow on pill hover', '#ffdd00', '#147bca', 'Aa'],
    ['White on pill hover', '#ffffff', '#147bca', 'Aa'],
    ['White on donate hover', '#ffffff', '#005a9e', 'Aa'],
    ['Navy on yellow (numbers)', '#28324b', '#ffdd00', '1'],
    ['Yellow on navy (highlights)', '#ffdd00', '#28324b', 'Aa'],
    ['Footer copy on navy', '#dadada', '#28324b', 'Aa'],
    ['Danger/500 on white', '#ff3c00', '#ffffff', '!'],
    ['Form error on white', '#d4183d', '#ffffff', '!'],
    ['Placeholder on white', '#a3a3a3', '#ffffff', 'Aa'],
    ['Valid check on white', '#10b981', '#ffffff', '✓'],
    ['#ececec on Secondary/500 (doc says AA)', '#ececec', '#0072ca', 'Aa'],
    ['White on Accent/700 (doc says AA)', '#ffffff', '#998500', 'Aa'],
    ['White on Success/700 (doc says AAA)', '#ffffff', '#7a9900', 'Aa']
  ],

  starters: {
    button: { primary: 'Join the movement', ghost: 'How to prevent' },
    field: { label: 'Email', placeholder: 'Enter Email Address' },
    segmented: { label: 'Content layout', options: ['Image left', 'Image right'] },
    dropdown: { label: 'Footer section', options: ['About', 'Colon cancer', 'How to prevent', 'Act'] },
    chips: { label: 'Hashtags', options: ['#coloncancerstory', '#colorectalcancer', '#coloncancerawareness'] },
    accordion: [
      ['What is Lead From Behind?', 'A movement to help prevent colon cancer in yourself and others, from the Colorectal Cancer Alliance.'],
      ['Why colon cancer?', 'It is the second biggest cancer killer in America and it is rising in young people. Yet it is preventable.']
    ]
  },

  custom: [
    {
      name: 'Buttons',
      uses: 'Button (Pill) · Default, Hover, Press  ·  Button Donate · Default, Hover',
      width: 12,
      html: '<div class="lfb-tabs" role="group" aria-label="Preview state"><button type="button" aria-pressed="true" data-st="">Live</button><button type="button" aria-pressed="false" data-st="is-hover">Hover</button><button type="button" aria-pressed="false" data-st="is-press">Press</button></div>' +
        '<div class="lfb-row"><button class="lfb-pill" type="button" data-b="submit">submit<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M19.9704 7.82657C19.9403 7.59541 19.8503 7.37774 19.7105 7.19793L13.4731 0.383471C13.2559 0.14427 12.9586 0.00638227 12.6461 4.62485e-07V4.62485e-07C12.4134 -0.000211934 12.1858 0.0727376 11.9919 0.209698C11.798 0.346657 11.6464 0.541524 11.5562 0.769839C11.466 0.998155 11.4411 1.24976 11.4848 1.49305C11.5284 1.73634 11.6386 1.9605 11.8015 2.13738L16.0189 6.74532H1.18133C0.868024 6.74532 0.567493 6.87778 0.34595 7.11357C0.124407 7.34935 0 7.66915 0 8.0026C0 8.33605 0.124407 8.65584 0.34595 8.89162C0.567493 9.12741 0.868024 9.25988 1.18133 9.25988H16.0189L11.8015 13.8678C11.5869 14.1014 11.4661 14.4148 11.4648 14.7416C11.4646 14.9916 11.5344 15.2359 11.6653 15.4435C11.7962 15.651 11.9823 15.8123 12.1997 15.9068C12.4172 16.0012 12.6561 16.0246 12.8861 15.9738C13.116 15.923 13.3266 15.8004 13.4908 15.6217L19.5983 8.95184L19.7283 8.88269L19.7696 8.74439C19.8988 8.5611 19.9784 8.34372 20 8.11575C20.0007 8.01847 19.9907 7.92142 19.9704 7.82657Z"/></svg></button>' +
        '<button class="lfb-donate" type="button" aria-pressed="false" data-b="donate"><svg viewBox="0 0 18.9147 16.9808" aria-hidden="true"><path fill="#fff" fill-rule="evenodd" d="M17.4841 8.94049L9.67038 16.9035C9.62032 16.9531 9.55328 16.9808 9.48348 16.9808C9.41369 16.9808 9.34664 16.9531 9.29658 16.9035V16.9035L1.48287 8.94049C0.527997 7.9528 -0.00501929 6.62046 3.56284e-05 5.23393C0.00509055 3.8474 0.547813 2.51913 1.50986 1.5387C2.47191 0.558268 3.77527 0.00518783 5.1358 3.63093e-05C6.49633 -0.00511521 7.80369 0.538087 8.77286 1.51121L9.4782 2.23218L10.1836 1.51121C11.1563 0.556326 12.4579 0.0286313 13.8084 0.0416112C15.1589 0.054591 16.4505 0.607209 17.4054 1.58062C18.3603 2.55402 18.9022 3.87046 18.9145 5.24681C18.9269 6.62316 18.4087 7.94946 17.4714 8.94049H17.4841Z"/></svg>Donate</button></div>' +
        '<p class="d-live" aria-live="polite" data-o>Hover, press, or use Tab and Enter. “Live” shows real states; the others pin one for touch screens.</p>',
      init: function (el) {
        var out = el.querySelector('[data-o]'), pill = el.querySelector('.lfb-pill'), don = el.querySelector('.lfb-donate'), n = 0;
        el.querySelectorAll('[data-st]').forEach(function (b) {
          b.addEventListener('click', function () {
            el.querySelectorAll('[data-st]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
            [pill, don].forEach(function (x) { x.classList.remove('is-hover', 'is-press'); });
            var s = b.getAttribute('data-st');
            if (s) { pill.classList.add(s); if (s === 'is-hover') don.classList.add(s); }
            out.textContent = s ? 'Showing the ' + b.textContent.toLowerCase() + ' state.' : 'Live states restored.';
          });
        });
        pill.addEventListener('click', function () { n++; out.innerHTML = '<strong>submit</strong> pressed ' + n + (n === 1 ? ' time' : ' times') + '.'; });
        don.addEventListener('click', function () { var on = don.getAttribute('aria-pressed') !== 'true'; don.setAttribute('aria-pressed', String(on)); out.innerHTML = on ? '<strong>Donate</strong> selected. In the build this opens the Alliance donation page.' : 'Donate cleared.'; });
      }
    },
    {
      name: 'Signup form',
      uses: 'Form · Input Field (Default, Hover, Entry, Error) · Checkbox · Button (Pill)',
      width: 12,
      html: '<form class="lfb-form" novalidate data-f><p class="lfb-title">Join us and be a leader<span>who proudly checks their a**</span></p>' +
        '<div class="lfb-grid">' +
        ['firstName|First name|First Name|text|given-name', 'lastName|Last name|Last Name|text|family-name', 'email|Email|Enter Email Address|email|off', 'dob|Date of birth|00/00/0000|text|off'].map(function (r) {
          var p = r.split('|');
          return '<div class="lfb-f"><label for="lfb-' + p[0] + '">' + p[1] + '</label><input id="lfb-' + p[0] + '" name="' + p[0] + '" type="' + p[3] + '" placeholder="' + p[2] + '" autocomplete="' + p[4] + '"' + (p[0] === 'dob' ? ' inputmode="numeric" maxlength="10"' : '') + ' aria-describedby="lfb-' + p[0] + '-err"><span class="lfb-err" id="lfb-' + p[0] + '-err"></span></div>';
        }).join('') + '</div>' +
        '<label class="lfb-check"><input type="checkbox" name="optin"><span class="lfb-box"><svg viewBox="0 0 10 8" aria-hidden="true"><path fill="#ffdd00" d="M9.68815 0.32967C9.48025 0.10989 9.20998 0 8.91892 0C8.62786 0 8.35759 0.10989 8.14969 0.32967L3.45114 5.27473L1.85031 3.6044C1.64241 3.38462 1.37214 3.27473 1.08108 3.27473C0.790021 3.27473 0.519751 3.38462 0.31185 3.6044C-0.10395 4.04396 -0.10395 4.76923 0.31185 5.20879L2.66112 7.67033C2.86902 7.89011 3.13929 8 3.43035 8C3.72141 8 3.99168 7.89011 4.19958 7.67033L9.68815 1.93407C10.104 1.49451 10.104 0.791209 9.68815 0.32967Z"/></svg></span><span>By providing information, I agree to receive email updates from the Colorectal Cancer Alliance.</span></label>' +
        '<div class="lfb-row"><button class="lfb-pill" type="submit">submit<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M19.9704 7.82657C19.9403 7.59541 19.8503 7.37774 19.7105 7.19793L13.4731 0.383471C13.2559 0.14427 12.9586 0.00638227 12.6461 4.62485e-07V4.62485e-07C12.4134 -0.000211934 12.1858 0.0727376 11.9919 0.209698C11.798 0.346657 11.6464 0.541524 11.5562 0.769839C11.466 0.998155 11.4411 1.24976 11.4848 1.49305C11.5284 1.73634 11.6386 1.9605 11.8015 2.13738L16.0189 6.74532H1.18133C0.868024 6.74532 0.567493 6.87778 0.34595 7.11357C0.124407 7.34935 0 7.66915 0 8.0026C0 8.33605 0.124407 8.65584 0.34595 8.89162C0.567493 9.12741 0.868024 9.25988 1.18133 9.25988H16.0189L11.8015 13.8678C11.5869 14.1014 11.4661 14.4148 11.4648 14.7416C11.4646 14.9916 11.5344 15.2359 11.6653 15.4435C11.7962 15.651 11.9823 15.8123 12.1997 15.9068C12.4172 16.0012 12.6561 16.0246 12.8861 15.9738C13.116 15.923 13.3266 15.8004 13.4908 15.6217L19.5983 8.95184L19.7283 8.88269L19.7696 8.74439C19.8988 8.5611 19.9784 8.34372 20 8.11575C20.0007 8.01847 19.9907 7.92142 19.9704 7.82657Z"/></svg></button></div>' +
        '<p class="d-live" aria-live="polite" data-o></p></form>',
      init: function (el) {
        var form = el.querySelector('[data-f]'), out = el.querySelector('[data-o]');
        var rules = {
          firstName: function (v) { return v ? null : 'This field is required.'; },
          lastName: function (v) { return v ? null : 'This field is required.'; },
          email: function (v) { return !v ? 'This field is required.' : /^\S+@\S+\.\S+$/.test(v) ? null : 'Enter a valid email address.'; },
          dob: function (v) { return !v ? 'This field is required.' : /^\d{2}\/\d{2}\/\d{4}$/.test(v) ? null : 'Use MM/DD/YYYY format.'; }
        };
        function check(inp) {
          var m = rules[inp.name](inp.value.trim()), f = inp.parentNode;
          f.classList.toggle('is-error', !!m); f.querySelector('.lfb-err').textContent = m ? '*' + m : '';
          inp.setAttribute('aria-invalid', m ? 'true' : 'false'); return !m;
        }
        Object.keys(rules).forEach(function (k) {
          var inp = form.querySelector('[name="' + k + '"]');
          inp.addEventListener('blur', function () { check(inp); });
          inp.addEventListener('input', function () {
            if (k === 'dob') { var d = inp.value.replace(/\D/g, '').slice(0, 8); inp.value = d.length > 4 ? d.slice(0, 2) + '/' + d.slice(2, 4) + '/' + d.slice(4) : d.length > 2 ? d.slice(0, 2) + '/' + d.slice(2) : d; }
            if (inp.parentNode.classList.contains('is-error')) check(inp);
          });
        });
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var bad = Object.keys(rules).map(function (k) { return form.querySelector('[name="' + k + '"]'); }).filter(function (i) { return !check(i); });
          if (bad.length) { out.textContent = bad.length === 1 ? '1 field needs attention.' : bad.length + ' fields need attention.'; bad[0].focus(); return; }
          out.innerHTML = '<strong>Welcome, ' + form.firstName.value.trim().replace(/[<>&"]/g, '') + '.</strong> This is a demo, so nothing was sent.';
          form.reset(); form.querySelectorAll('input').forEach(function (i) { i.removeAttribute('aria-invalid'); });
        });
      }
    },
    {
      name: 'Numbered content section',
      uses: 'Content Section · Image Left / Image Right + Numbered · Number circle',
      width: 12,
      html: '<div class="lfb-step-bar"><div class="lfb-nums" role="tablist" aria-label="Step">' + [1, 2, 3, 4].map(function (n) { return '<button type="button" role="tab" id="lfb-tab-' + n + '" aria-controls="lfb-step" aria-selected="' + (n === 1) + '" tabindex="' + (n === 1 ? 0 : -1) + '">' + n + '</button>'; }).join('') + '</div>' +
        '<div class="lfb-tabs" role="group" aria-label="Image side"><button type="button" aria-pressed="true" data-side="left">Image left</button><button type="button" aria-pressed="false" data-side="right">Image right</button></div></div>' +
        '<div class="lfb-step" id="lfb-step" role="tabpanel" aria-labelledby="lfb-tab-1"><div class="lfb-img" role="img" data-img></div><div class="lfb-copies" data-copies></div></div>',
      init: function (el) {
        var steps = [
          { img: 'Person with gray hair in blue sweater', h: "It's killing a lot of people, no matter your gender or age", t: 'Colon cancer kills more people each year than every other type of cancer except lung cancer. If you are between 45 and 65 right now, cancer is the most likely thing that would kill you. And colon cancer is super common. One in 24 Americans will get colon cancer. And one in 250 of us will get it before we turn 49.' },
          { img: 'Smiling person wearing glasses in blue sweater', h: 'Health disparities are systemic and real', t: 'People of color tend to receive later-stage diagnoses and lower quality of care. Black Americans get colon cancer about 15% more often than White Americans, and are 35% more likely to die from it. The American Indian and Alaska Native communities experience the highest mortality and incidence rates in the nation.' },
          { img: 'Person with curly hair wearing orange sunglasses', h: "It's a problem for you people, too", t: "Colon cancer is predicted to be the top cancer killer for people under 50 by 2030. It's also going up by 90% in people under 35 by 2030. Unfortunately, even though risks are rising quickly, most people under 45 aren't eligible for screening unless they already have cancer symptoms or family history. If you see blood in your poop, call your doc ASAP – no matter your age." },
          { img: 'Smiling woman in light blue tank top', h: 'THE GOOD NEWS:', s: 'Colon Cancer is <span>The Preventable Cancer</span>', t: 'You can prevent colon cancer by finding and removing precancerous polyps before they become cancer. Colonoscopy can prevent cancer or stop it early, and among the at-home options, Cologuard is able to detect precancer and cancer that may be present in the colon.' }
        ];
        var box = el.querySelector('[data-copies]');
        box.innerHTML = steps.map(function (s, i) {
          return '<div class="lfb-copy" aria-hidden="' + (i !== 0) + '"><div class="lfb-num" aria-hidden="true">' + (i + 1) + '</div><h4 class="lfb-h" style="margin:0">' + s.h.replace(/</g, '&lt;') + '</h4>' + (s.s ? '<p class="lfb-sub">' + s.s + '</p>' : '') + '<p class="lfb-body">' + s.t.replace(/</g, '&lt;') + '</p></div>';
        }).join('');
        var copies = Array.prototype.slice.call(box.children), tabs = Array.prototype.slice.call(el.querySelectorAll('[role="tab"]')), panel = el.querySelector('#lfb-step'), img = el.querySelector('[data-img]'), cur = 0;
        function show(i, focus) {
          cur = i;
          tabs.forEach(function (t, j) { t.setAttribute('aria-selected', String(j === i)); t.tabIndex = j === i ? 0 : -1; });
          copies.forEach(function (c, j) { c.setAttribute('aria-hidden', String(j !== i)); });
          if (focus) tabs[i].focus();
          panel.setAttribute('aria-labelledby', tabs[i].id);
          img.setAttribute('aria-label', steps[i].img + ' (photo placeholder)'); img.textContent = 'Photo: ' + steps[i].img;
        }
        tabs.forEach(function (t, j) {
          t.addEventListener('click', function () { show(j); });
          t.addEventListener('keydown', function (e) {
            var k = e.key, n = k === 'ArrowRight' ? (cur + 1) % 4 : k === 'ArrowLeft' ? (cur + 3) % 4 : k === 'Home' ? 0 : k === 'End' ? 3 : -1;
            if (n > -1) { e.preventDefault(); show(n, true); }
          });
        });
        el.querySelectorAll('[data-side]').forEach(function (b) {
          b.addEventListener('click', function () {
            el.querySelectorAll('[data-side]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
            panel.classList.toggle('is-right', b.getAttribute('data-side') === 'right');
          });
        });
        show(0);
      }
    },
    {
      name: 'Info panel',
      uses: 'Info Panel · icon + highlighted statement',
      width: 7,
      html: '<div class="lfb-info"><svg viewBox="0 0 131.14 121.86" aria-hidden="true"><path d="M8.23036 64.4799C8.75938 63.5273 9.35765 62.6149 10.0204 61.7499C14.9104 57.3999 21.5804 50.5599 28.1604 48.9499C28.1604 48.5299 28.2104 48.1099 28.2104 47.6899C28.2104 47.2699 28.2104 46.7399 28.2104 46.2499C25.6381 43.7237 23.4059 40.873 21.5704 37.77C20.059 34.7371 19.262 31.3985 19.2404 28.0099C17.8407 27.7687 16.41 27.7687 15.0104 28.0099C3.38036 30.2799 -2.39964 43.5099 0.90036 54.2499C2.36036 58.0799 4.90036 62.1799 8.23036 64.4799Z"/><path d="M119.34 28.0701L119.1 27.9401L119.16 28.6301C119.61 34.4801 116.62 39.3401 112.47 43.5201C119.72 46.8901 124.35 54.3701 126.91 61.9301C128.878 59.7788 130.202 57.1176 130.73 54.2501C132.38 44.3301 129.08 31.9301 119.34 28.0701Z"/><path d="M53.07 120.2C51.6464 119.183 50.4929 117.834 49.71 116.27C48.48 114.05 47.1 111.69 45.78 109.27C43.3437 110.41 40.7408 111.152 38.07 111.47C36.8342 111.521 35.5965 111.434 34.38 111.21C32.86 110.743 31.3333 110.217 29.8 109.63C30.9662 111.48 32.3792 113.162 34 114.63C36.4896 117.034 39.5261 118.797 42.848 119.767C46.17 120.737 49.6779 120.886 53.07 120.2Z"/><path d="M109.21 100.8C108.03 101.39 106.82 101.99 105.6 102.51C104.5 106.154 102.811 109.593 100.6 112.69C108.44 110.95 116.09 107.58 120.01 99.6899C120.991 97.7996 121.427 95.6738 121.27 93.5499C117.937 96.9598 113.784 99.4562 109.21 100.8Z"/><path d="M114.39 50.44C112.263 49.2211 109.959 48.3438 107.56 47.84C105.34 49.59 103.04 51.21 100.91 52.73L100.38 52.84C101.492 59.0799 101.174 65.4908 99.45 71.59C101.426 73.1916 103.065 75.1698 104.27 77.41C107.27 83.41 107.98 90.99 106.64 98.22C111.58 96.77 116.5 93.29 119.98 89.81C131.56 78.23 125.81 60.04 114.39 50.44Z"/><path d="M81.1205 19.53C81.2792 22.0451 80.8227 24.561 79.7905 26.86C84.6773 29.0166 89.0709 32.151 92.7005 36.07C95.2088 39.0682 97.178 42.4788 98.5205 46.15L99.3105 45.99C105.93 44.33 112.54 37.72 115.02 31.93C119.16 18.7 104.27 8.78001 93.2705 3.39001C91.3148 2.78341 89.3057 2.36484 87.2705 2.14001C82.4271 1.75133 77.5563 2.39555 72.9805 4.03003C77.5751 7.96648 80.4878 13.5129 81.1205 19.53V19.53Z"/><path d="M94.35 114.61C100.97 107.17 105.93 93.12 100.97 81.54C100.13 79.8334 98.8403 78.3882 97.24 77.36C92.16 86.97 82.48 95.63 71.42 96.83C68.2627 97.9812 64.9395 98.6128 61.58 98.7L60.82 98.53C60.226 99.2656 59.5556 99.936 58.82 100.53C55.6888 103.034 52.4276 105.37 49.05 107.53C50.7061 110.539 52.895 113.223 55.51 115.45C65.41 124.53 84.43 123.75 94.35 114.61Z"/><path d="M38.9603 106.34C45.0703 104.6 51.1803 101.24 54.4903 96.3401C42.6803 91.0001 33.7303 79.1001 32.3403 66.6201C31.7938 62.7985 31.8817 58.913 32.6003 55.1201L32.0603 54.6301C31.756 54.5377 31.4377 54.5005 31.1203 54.5201C15.8103 58.3501 2.58033 73.2301 10.0203 89.7701C14.9803 100.56 27.3803 109.65 38.9603 106.34Z"/><path d="M24.07 24.49C22.42 31.93 27.38 39.37 33.17 41.85C34.4634 42.4028 35.8016 42.8444 37.17 43.17C41.5315 35.855 47.9095 29.9526 55.54 26.17C61.0657 23.7264 67.2484 23.195 73.11 24.66C73.64 23.78 74.11 22.91 74.56 22.04C80.35 9.63996 63.81 0.53998 50.93 0.93998C49.0112 0.325862 47.0043 0.0319343 44.99 0.0699846C32.34 2.16998 26.55 12.92 24.07 24.49Z"/><path d="M90.22 40.2C86.08 33.59 77.82 33.59 72.06 31.2C68.61 30.05 65.37 29.05 62.21 29.09C46.4 33.59 34.82 51.78 38.13 68.31C40.61 79.89 49.71 93.12 62.13 93.12C89.39 93.94 103.45 63.35 90.22 40.2Z"/></svg><p>Because colon cancer is the second biggest cancer killer in America. It\'s rising in young people. <b>Yet, it\'s preventable.</b> Yep, you read that right - colon cancer is preventable. And the best way to prevent it is by having a colonoscopy.</p></div>'
    },
    {
      name: 'Instagram post',
      uses: 'Instagram Post · header, image, like, hashtags',
      width: 5,
      html: '<article class="lfb-post"><div class="lfb-post-head"><span class="lfb-ava" aria-hidden="true">LFB</span>LEADFROMBEHIND</div><div class="lfb-post-img" role="img" aria-label="Post image placeholder">Post image (sample)</div><div class="lfb-post-body"><button class="lfb-like" type="button" aria-pressed="false"><svg viewBox="0 0 18.9147 16.9808" aria-hidden="true"><path d="M17.4841 8.94049L9.67038 16.9035C9.62032 16.9531 9.55328 16.9808 9.48348 16.9808C9.41369 16.9808 9.34664 16.9531 9.29658 16.9035V16.9035L1.48287 8.94049C0.527997 7.9528 -0.00501929 6.62046 3.56284e-05 5.23393C0.00509055 3.8474 0.547813 2.51913 1.50986 1.5387C2.47191 0.558268 3.77527 0.00518783 5.1358 3.63093e-05C6.49633 -0.00511521 7.80369 0.538087 8.77286 1.51121L9.4782 2.23218L10.1836 1.51121C11.1563 0.556326 12.4579 0.0286313 13.8084 0.0416112C15.1589 0.054591 16.4505 0.607209 17.4054 1.58062C18.3603 2.55402 18.9022 3.87046 18.9145 5.24681C18.9269 6.62316 18.4087 7.94946 17.4714 8.94049H17.4841Z"/></svg><span data-l>128 likes</span></button><p class="lfb-tags">#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness</p><p class="d-uses">Like count is sample data.</p></div></article>',
      init: function (el) {
        var b = el.querySelector('.lfb-like'), l = el.querySelector('[data-l]');
        b.addEventListener('click', function () { var on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', String(on)); l.textContent = (on ? 129 : 128) + ' likes'; b.setAttribute('aria-label', on ? 'Unlike post' : 'Like post'); });
        b.setAttribute('aria-label', 'Like post');
      }
    },
    {
      name: 'Footer',
      uses: 'Footer · navigation, contact, back to top',
      width: 12,
      html: '<footer class="lfb-foot"><div class="lfb-foot-top"><p class="lfb-brand">Lead <span>from</span> behind</p><button class="lfb-top" type="button">Back to top<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M19.9704 7.82657C19.9403 7.59541 19.8503 7.37774 19.7105 7.19793L13.4731 0.383471C13.2559 0.14427 12.9586 0.00638227 12.6461 4.62485e-07V4.62485e-07C12.4134 -0.000211934 12.1858 0.0727376 11.9919 0.209698C11.798 0.346657 11.6464 0.541524 11.5562 0.769839C11.466 0.998155 11.4411 1.24976 11.4848 1.49305C11.5284 1.73634 11.6386 1.9605 11.8015 2.13738L16.0189 6.74532H1.18133C0.868024 6.74532 0.567493 6.87778 0.34595 7.11357C0.124407 7.34935 0 7.66915 0 8.0026C0 8.33605 0.124407 8.65584 0.34595 8.89162C0.567493 9.12741 0.868024 9.25988 1.18133 9.25988H16.0189L11.8015 13.8678C11.5869 14.1014 11.4661 14.4148 11.4648 14.7416C11.4646 14.9916 11.5344 15.2359 11.6653 15.4435C11.7962 15.651 11.9823 15.8123 12.1997 15.9068C12.4172 16.0012 12.6561 16.0246 12.8861 15.9738C13.116 15.923 13.3266 15.8004 13.4908 15.6217L19.5983 8.95184L19.7283 8.88269L19.7696 8.74439C19.8988 8.5611 19.9784 8.34372 20 8.11575C20.0007 8.01847 19.9907 7.92142 19.9704 7.82657Z"/></svg></button></div>' +
        '<nav class="lfb-links" aria-label="Footer sample">' + ['About', 'Colon cancer', 'How to prevent', 'Act'].map(function (s) { return '<a href="#" data-k>' + s + '</a>'; }).join('') + '</nav>' +
        '<p class="lfb-contact">Call our Helpline 877-422-2030 · hello@leadfrombehind.org<br>© 2021 Colorectal Cancer Alliance, a 501(c)(3) non-profit.</p><p class="d-live" style="color:#dadada" aria-live="polite" data-o></p></footer>',
      init: function (el) {
        var out = el.querySelector('[data-o]');
        el.querySelectorAll('[data-k]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); out.textContent = a.textContent + ' would open its section on the site.'; }); });
        el.querySelector('.lfb-top').addEventListener('click', function () {
          var sc = el.closest('.p-scroll'); sc.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
          var x = document.querySelector('#ds-popup .p-x'); if (x) x.focus({ preventScroll: true });
        });
      }
    }
  ]
};

  var CUSTOM = C.custom, esc = DSPopup.helpers.esc;
  delete C.custom;
  C.fontUrl = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&display=swap';
  C.css = "#ds-popup [data-ds=\"lfb\"] { --head: \"Montserrat\", \"Arial Black\", Arial, sans-serif; --navy: #28324b; --yellow: #ffdd00; } #ds-popup [data-ds=\"lfb\"] .p-sec > h3 { color: var(--navy); } #ds-popup [data-ds=\"lfb\"] .r-type:nth-child(-n+7) .r-sample { font-family: var(--head); } #ds-popup [data-ds=\"lfb\"] .r-type:nth-child(-n+4) .r-sample, #ds-popup [data-ds=\"lfb\"] .r-type:nth-child(6) .r-sample, #ds-popup [data-ds=\"lfb\"] .r-type:nth-child(7) .r-sample, #ds-popup [data-ds=\"lfb\"] .r-type:nth-child(11) .r-sample { text-transform: uppercase; } #ds-popup [data-ds=\"lfb\"] .c-field > label { font: 900 14px/16px var(--font); text-transform: uppercase; transition: color .15s; } #ds-popup [data-ds=\"lfb\"] .c-field:focus-within > label { color: var(--primary); } #ds-popup [data-ds=\"lfb\"] .c-field.is-error > label { color: var(--danger); } #ds-popup [data-ds=\"lfb\"] .c-box { height: 54px; padding: 0 25px; } #ds-popup [data-ds=\"lfb\"] .c-box:hover { background: var(--hover); } #ds-popup [data-ds=\"lfb\"] .c-box:focus-within { background: var(--surface); box-shadow: inset 0 0 0 1px var(--primary); } #ds-popup [data-ds=\"lfb\"] .c-box input { font: 400 16px/24px var(--font); } #ds-popup [data-ds=\"lfb\"] .c-err { font: 700 13px/16px var(--font); text-transform: uppercase; } #ds-popup [data-ds=\"lfb\"] .c-btn { font-weight: 900; } #ds-popup [data-ds=\"lfb\"] .d, #ds-popup [data-ds=\"lfb\"] .p-panel { background: transparent; border: 1px solid #d4d6db; } #ds-popup [data-ds=\"lfb\"] .d { gap: 28px; } #ds-popup [data-ds=\"lfb\"] .d-head { margin-bottom: -4px; } #ds-popup [data-ds=\"lfb\"] .d-live { padding-top: 12px; border-top: 1px solid #ececec; } #ds-popup [data-ds=\"lfb\"] .d-live:empty { display: none; } #ds-popup [data-ds=\"lfb\"] [data-custom] { display: flex; flex-direction: column; gap: 28px; min-width: 0; } #ds-popup [data-ds=\"lfb\"] .lfb-foot .d-live { border-top-color: rgb(255 255 255 / .15); } #ds-popup [data-ds=\"lfb\"] .lfb-row { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; } #ds-popup [data-ds=\"lfb\"] .lfb-pill { display: inline-flex; align-items: center; justify-content: center; gap: 10px; height: 60px; padding: 0 30px; border: 0; border-radius: 40px; background: #0072ca; color: #fff; font: 900 20px/32px var(--font); cursor: pointer; transition: background .15s, color .15s; } #ds-popup [data-ds=\"lfb\"] .lfb-pill svg { width: 20px; height: 16px; flex: none; } #ds-popup [data-ds=\"lfb\"] .lfb-pill svg path { fill: #ffdd00; transition: fill .15s; } #ds-popup [data-ds=\"lfb\"] .lfb-pill:hover, #ds-popup [data-ds=\"lfb\"] .lfb-pill.is-hover { background: #147bca; color: #ffdd00; } #ds-popup [data-ds=\"lfb\"] .lfb-pill:active, #ds-popup [data-ds=\"lfb\"] .lfb-pill.is-press { background: #ffdd00; color: #000; } #ds-popup [data-ds=\"lfb\"] .lfb-pill:active svg path, #ds-popup [data-ds=\"lfb\"] .lfb-pill.is-press svg path { fill: #28324b; } #ds-popup [data-ds=\"lfb\"] .lfb-donate { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 56px; padding: 0 40px; border: 0; border-radius: 6px; background: #0072ca; color: #fff; font: 900 16px/24px var(--font); cursor: pointer; transition: background .15s; } #ds-popup [data-ds=\"lfb\"] .lfb-donate svg { width: 19px; height: 17px; flex: none; } #ds-popup [data-ds=\"lfb\"] .lfb-donate:hover, #ds-popup [data-ds=\"lfb\"] .lfb-donate.is-hover { background: #005a9e; } #ds-popup [data-ds=\"lfb\"] .lfb-donate[aria-pressed=\"true\"] svg path { fill: #ffdd00; } #ds-popup [data-ds=\"lfb\"] .lfb-tabs { display: inline-flex; flex-wrap: wrap; gap: 4px; padding: 4px; border-radius: 40px; background: #ececec; align-self: flex-start; } #ds-popup [data-ds=\"lfb\"] .lfb-tabs button { min-height: 40px; padding: 0 16px; border: 0; border-radius: 40px; background: transparent; font: 900 13px/20px var(--font); color: #28324b; cursor: pointer; text-transform: uppercase; } #ds-popup [data-ds=\"lfb\"] .lfb-tabs button:hover { background: #fff; } #ds-popup [data-ds=\"lfb\"] .lfb-tabs button[aria-pressed=\"true\"] { background: #28324b; color: #fff; } #ds-popup [data-ds=\"lfb\"] .lfb-form { display: flex; flex-direction: column; gap: 32px; } #ds-popup [data-ds=\"lfb\"] .lfb-title { font: 900 32px/35px var(--head); text-transform: uppercase; color: #28324b; } #ds-popup [data-ds=\"lfb\"] .lfb-title span { color: #0072ca; display: block; } #ds-popup [data-ds=\"lfb\"] .lfb-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px 16px; } #ds-popup [data-ds=\"lfb\"] .lfb-f { display: flex; flex-direction: column; gap: 12px; min-width: 0; } #ds-popup [data-ds=\"lfb\"] .lfb-f label { font: 900 14px/16px var(--font); text-transform: uppercase; color: #28324b; transition: color .15s; } #ds-popup [data-ds=\"lfb\"] .lfb-f input { width: 100%; height: 54px; padding: 0 25px; border: 1px solid #28324b; border-radius: 8px; background: #fff; font: 400 16px/24px var(--font); color: #28324b; outline: none; transition: background .15s, border-color .15s; } #ds-popup [data-ds=\"lfb\"] .lfb-f input::placeholder { color: #a3a3a3; } #ds-popup [data-ds=\"lfb\"] .lfb-f input:hover { background: #ececec; } #ds-popup [data-ds=\"lfb\"] .lfb-f input:focus { background: #fff; border-color: #0072ca; box-shadow: inset 0 0 0 1px #0072ca; } #ds-popup [data-ds=\"lfb\"] .lfb-f:focus-within label { color: #0072ca; } #ds-popup [data-ds=\"lfb\"] .lfb-f.is-error label { color: var(--danger); } #ds-popup [data-ds=\"lfb\"] .lfb-f.is-error input { border-color: var(--danger); box-shadow: none; } #ds-popup [data-ds=\"lfb\"] .lfb-f.is-error input:focus { box-shadow: inset 0 0 0 1px var(--danger); } #ds-popup [data-ds=\"lfb\"] .lfb-f .lfb-err { font: 700 13px/16px var(--font); text-transform: uppercase; color: var(--danger); } #ds-popup [data-ds=\"lfb\"] .lfb-f .lfb-err:empty { display: none; } #ds-popup [data-ds=\"lfb\"] .lfb-check { display: flex; gap: 8px; align-items: flex-start; position: relative; cursor: pointer; padding: 12px 0; margin: -12px 0; font: 400 13px/16px var(--font); color: #28324b; } #ds-popup [data-ds=\"lfb\"] .lfb-check input { position: absolute; opacity: 0; width: 44px; height: 44px; left: -12px; top: 0; margin: 0; cursor: pointer; } #ds-popup [data-ds=\"lfb\"] .lfb-box { width: 20px; height: 20px; flex: none; margin-top: -2px; border: 1px solid #28324b; border-radius: 5px; background: #fff; display: grid; place-items: center; } #ds-popup [data-ds=\"lfb\"] .lfb-box svg { width: 10px; height: 8px; opacity: 0; } #ds-popup [data-ds=\"lfb\"] .lfb-check input:checked + .lfb-box { background: #0072ca; } #ds-popup [data-ds=\"lfb\"] .lfb-check input:checked + .lfb-box svg { opacity: 1; } #ds-popup [data-ds=\"lfb\"] .lfb-check input:focus-visible + .lfb-box { outline: 2px solid #0072ca; outline-offset: 2px; } #ds-popup [data-ds=\"lfb\"] .lfb-step-bar { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between; } #ds-popup [data-ds=\"lfb\"] .lfb-step { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 40px; align-items: start; } #ds-popup [data-ds=\"lfb\"] .lfb-step.is-right .lfb-img { order: 2; } #ds-popup [data-ds=\"lfb\"] .lfb-img { aspect-ratio: 536 / 548; max-width: 100%; border-radius: 20px; background: #181e2d; display: flex; align-items: flex-end; padding: 16px; color: #a9adb7; font: 400 13px/16px var(--font); } #ds-popup [data-ds=\"lfb\"] .lfb-copies { display: grid; } #ds-popup [data-ds=\"lfb\"] .lfb-copy { grid-area: 1 / 1; display: flex; flex-direction: column; gap: 24px; align-items: flex-start; min-width: 0; } #ds-popup [data-ds=\"lfb\"] .lfb-copy[aria-hidden=\"true\"] { visibility: hidden; } #ds-popup [data-ds=\"lfb\"] .lfb-num { width: 80px; height: 80px; border-radius: 200px; background: #ffdd00; display: grid; place-items: center; font: 900 40px/1 var(--head); color: #28324b; } #ds-popup [data-ds=\"lfb\"] .lfb-h { font: 800 28px/32px var(--head); color: #28324b; } #ds-popup [data-ds=\"lfb\"] .lfb-sub { font: 900 20px/24px var(--font); color: #28324b; } #ds-popup [data-ds=\"lfb\"] .lfb-sub span { color: #0072ca; } #ds-popup [data-ds=\"lfb\"] .lfb-body { font: 400 18px/28px var(--font); color: #28324b; } #ds-popup [data-ds=\"lfb\"] .lfb-nums { display: flex; gap: 8px; } #ds-popup [data-ds=\"lfb\"] .lfb-nums button { width: 44px; height: 44px; border-radius: 50%; border: 2px solid #28324b; background: #fff; font: 900 18px/1 var(--head); color: #28324b; cursor: pointer; } #ds-popup [data-ds=\"lfb\"] .lfb-nums button:hover { background: #fff8cc; } #ds-popup [data-ds=\"lfb\"] .lfb-nums button[aria-selected=\"true\"] { background: #ffdd00; border-color: #ffdd00; } #ds-popup [data-ds=\"lfb\"] .lfb-info { background: #28324b; border-radius: 25px; padding: 40px; display: flex; flex-direction: column; gap: 24px; align-items: center; text-align: center; } #ds-popup [data-ds=\"lfb\"] .lfb-info svg { width: 86px; height: 80px; } #ds-popup [data-ds=\"lfb\"] .lfb-info svg path { fill: #ffdd00; } #ds-popup [data-ds=\"lfb\"] .lfb-info p { font: 400 20px/32px var(--head); color: #fff; } #ds-popup [data-ds=\"lfb\"] .lfb-info b { font-weight: 700; color: #ffdd00; } #ds-popup [data-ds=\"lfb\"] .lfb-post { background: #fff; border: 1px solid #e3e3df; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column; } #ds-popup [data-ds=\"lfb\"] .lfb-post-head { display: flex; align-items: center; gap: 10px; padding: 12px 16px; font: 900 14px/16px var(--head); color: #28324b; } #ds-popup [data-ds=\"lfb\"] .lfb-ava { width: 32px; height: 32px; border-radius: 50%; background: #ffdd00; display: grid; place-items: center; font: 900 12px/1 var(--head); color: #28324b; } #ds-popup [data-ds=\"lfb\"] .lfb-post-img { aspect-ratio: 1; background: #0072ca; display: flex; align-items: flex-end; padding: 16px; color: #cce3f4; font: 400 13px/16px var(--font); } #ds-popup [data-ds=\"lfb\"] .lfb-post-body { padding: 8px 16px 16px; display: flex; flex-direction: column; gap: 8px; } #ds-popup [data-ds=\"lfb\"] .lfb-like { align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 8px 0 0; border: 0; background: none; font: 900 14px/20px var(--font); color: #28324b; cursor: pointer; } #ds-popup [data-ds=\"lfb\"] .lfb-like svg { width: 24px; height: 22px; } #ds-popup [data-ds=\"lfb\"] .lfb-like svg path { fill: none; stroke: #28324b; stroke-width: 1.6; } #ds-popup [data-ds=\"lfb\"] .lfb-like[aria-pressed=\"true\"] svg path { fill: #ff3c00; stroke: #ff3c00; } #ds-popup [data-ds=\"lfb\"] .lfb-tags { font: 400 13px/18px var(--font); color: #0072ca; overflow-wrap: anywhere; } #ds-popup [data-ds=\"lfb\"] .lfb-foot { background: #28324b; border-radius: 16px; padding: 32px; display: flex; flex-direction: column; gap: 24px; color: #fff; } #ds-popup [data-ds=\"lfb\"] .lfb-foot-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; flex-wrap: wrap; } #ds-popup [data-ds=\"lfb\"] .lfb-brand { font: 900 22px/24px var(--head); text-transform: uppercase; color: #fff; } #ds-popup [data-ds=\"lfb\"] .lfb-brand span { color: #ffdd00; } #ds-popup [data-ds=\"lfb\"] .lfb-links { display: flex; flex-wrap: wrap; gap: 4px 24px; } #ds-popup [data-ds=\"lfb\"] .lfb-links a { display: inline-flex; align-items: center; min-height: 44px; min-width: 44px; font: 900 14px/16px var(--font); color: #fff; text-transform: uppercase; } #ds-popup [data-ds=\"lfb\"] .lfb-links a:hover { color: #ffdd00; } #ds-popup [data-ds=\"lfb\"] .lfb-contact { font: 400 14px/20px var(--font); color: #dadada; } #ds-popup [data-ds=\"lfb\"] .lfb-top { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border: 1px solid #ffdd00; border-radius: 40px; background: transparent; color: #ffdd00; font: 900 14px/20px var(--font); cursor: pointer; text-transform: uppercase; } #ds-popup [data-ds=\"lfb\"] .lfb-top:hover { background: #ffdd00; color: #28324b; } #ds-popup [data-ds=\"lfb\"] .lfb-top svg { width: 16px; height: 16px; transform: rotate(-90deg); } #ds-popup [data-ds=\"lfb\"] .lfb-top svg path { fill: currentColor; } #ds-popup [data-ds=\"lfb\"] .lfb-foot :focus-visible, #ds-popup [data-ds=\"lfb\"] .lfb-info :focus-visible { outline-color: #ffdd00; } @media (min-width: 1100px) { #ds-popup [data-ds=\"lfb\"] .lfb-num { width: 112px; height: 112px; font-size: 61px; } #ds-popup [data-ds=\"lfb\"] .lfb-h { font-size: 39px; line-height: 43px; } #ds-popup [data-ds=\"lfb\"] .lfb-body { font-size: 20px; line-height: 32px; } #ds-popup [data-ds=\"lfb\"] .lfb-title { font-size: 48px; line-height: 52px; } } @media (max-width: 760px) { #ds-popup [data-ds=\"lfb\"] .lfb-grid, #ds-popup [data-ds=\"lfb\"] .lfb-step { grid-template-columns: minmax(0, 1fr); } #ds-popup [data-ds=\"lfb\"] .lfb-step.is-right .lfb-img { order: 0; } #ds-popup [data-ds=\"lfb\"] .lfb-img { aspect-ratio: 4 / 3; } #ds-popup [data-ds=\"lfb\"] .lfb-info { padding: 32px 24px; } #ds-popup [data-ds=\"lfb\"] .lfb-pill { height: 50px; padding: 0 24px; font-size: 18px; } #ds-popup [data-ds=\"lfb\"] .lfb-foot { padding: 24px; } }";
  C.components = {
    html: CUSTOM.map(function (c, i) { return '<div class="d' + (c.width && c.width !== 6 ? ' w' + c.width : '') + '"><div class="d-head"><span class="d-name">' + esc(c.name) + '</span><span class="d-uses">' + esc(c.uses) + '</span></div><div data-custom="' + i + '">' + c.html + '</div></div>'; }).join(''),
    init: function (root) { CUSTOM.forEach(function (c, i) { if (c.init) c.init(root.querySelector('[data-custom="' + i + '"]')); }); }
  };
  DSPopup.register('lfb', C);
})();

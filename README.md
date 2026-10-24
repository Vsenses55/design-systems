# Design systems

One popup for every design system on visualsenses.design. The engine loads once, site-wide; each design system is a small file that loads only when someone opens it.

```
ds-engine.js          the popup: shell, open/close, starter components, color/type/spacing/accessibility sections
systems/bbb.js        Big Blue Bus (City of Santa Monica), with its own working components
systems/nysf.js       NYSF App (The Fair + Fairgrounds), with its own working components
systems/lakings.js    LA Kings Insider, with its own working components (images in systems/lakings/)
systems/sherri.js     Sherri Show TV, with its own working components
systems/lfb.js        Lead From Behind (Colorectal Cancer Alliance), with its own working components
systems/sanclemente.js City of San Clemente homepage concept, with its own working components (images in systems/sanclemente/)
systems/paramount.js  Paramount VX virtual event platform, with its own working components (images in systems/paramount/)
systems/example.js    starter-only example to copy for a new project
index.html            test page listing every system
```

## Install on Webflow (once)

Site Settings → Custom Code → Footer code:

```html
<script src="https://vsenses55.github.io/design-systems/ds-engine.js" data-default="bbb" defer></script>
```

## Open a design system

| From | Do this |
| --- | --- |
| Any link or button | Set its URL to `#ds-<id>`, e.g. `#ds-bbb`. Same tab. |
| A circle button component | Set its **Link** prop to `#ds-<id>`. |
| An image, card or div | Add the attribute `data-ds-open` = `<id>`. |
| Another page | Link to `/projects/santa-monica#ds-bbb`; the popup opens on arrival. |

`#design-system` still works and opens the `data-default` system (Big Blue Bus).

The engine catches these clicks before Webflow interactions run, so the circle button's Page Out animation does not fire.

## Add a new design system

1. Copy `systems/example.js` to `systems/<id>.js` (lowercase, no spaces, e.g. `paramount-vx`).
2. Change `DSPopup.register('example', …)` to the new id.
3. Fill in `theme`, `colors`, `type`, `spacing`, `radii` and `pairs` from the project's real tokens. Set `fontUrl` to the Google Fonts link for its font.
4. Starter components (button, field, toggle, dropdown, chips, accordion) are themed automatically. Add project-specific demos in `components: { html, init(root, helpers) }`; see `systems/bbb.js`.
5. Commit and push with GitHub Desktop. Point a button at `#ds-<id>`. No Webflow code changes.

## Updating

Edit the system file and push. GitHub Pages can cache files for up to 10 minutes; to force an update, change the script tag to `ds-engine.js?v=2` (the version is passed on to every system file).

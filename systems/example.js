/* Example system: copy this file to systems/<your-id>.js, change the id below and fill in the brand.
   Open it with href="#ds-example". Starter components are on; add project-specific demos in components. */
DSPopup.register('example', {
  name: 'Example Design System',
  intro: 'Starter components themed from this file. Replace the values with a real brand.',
  cta: { label: 'View prototype', url: 'https://example.com/' },
  fontUrl: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap',
  theme: {
    font: '"DM Sans", system-ui, sans-serif',
    primary: '#6b2fd6', primaryHover: '#5422b0', onPrimary: '#ffffff',
    accent: '#0f766e', onAccent: '#ffffff', danger: '#b42318',
    surface: '#ffffff', hover: '#f3f1f7', focusFill: '#ece4fb',
    text: '#1f1a2b', textMuted: '#5d5670', placeholder: '#8a8499',
    border: '#d9d4e3', borderStrong: '#6f6880', disabled: '#f1eff4', disabledInk: '#b3adbf',
    cta: '#1f1a2b', onCta: '#ffffff',
    radiusControl: '10px', radiusField: '10px', radiusCard: '14px', radiusOverlay: '16px'
  },
  colors: [{ label: 'Brand', tokens: [['primary', '#6B2FD6', 'Actions'], ['accent', '#0F766E', 'Selected chips'], ['danger', '#B42318', 'Errors'], ['text', '#1F1A2B', 'Body text']] }],
  typeNote: 'DM Sans at Medium (500) and Bold (700).',
  type: [['heading', 700, 28, 32, 24, 30, 'Section heading'], ['body', 500, 16, 24, 16, 24, 'Body copy for reading.'], ['label', 700, 13, 20, 13, 20, 'LABEL']],
  spacing: [4, 8, 12, 16, 24, 32, 48],
  spacingNote: 'An 8px-based scale.',
  radii: [['radius-control', '10px', 'buttons, fields'], ['radius-card', '14px', 'cards']],
  pairs: [['White on primary', '#ffffff', '#6b2fd6'], ['Muted on white', '#5d5670', '#ffffff']],
  starters: {
    button: { primary: 'Get started', ghost: 'Learn more' },
    field: { label: 'Email address', placeholder: 'name@example.com' },
    segmented: { label: 'View', options: ['Grid', 'List'] },
    dropdown: { label: 'Sort by', options: ['Newest', 'Popular', 'A–Z'] },
    chips: { label: 'Tags', options: ['Design', 'Code', 'Motion'] },
    accordion: [['What is this?', 'A sample accordion item.'], ['How do I change it?', 'Edit this file.']]
  }
});

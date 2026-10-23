# src/styles/theme.css

```css
/* Cores base. O tema escuro e o padrao. */
:root {
  --bg: #101010;
  --surface: #181818;
  --border: #2a2a2d;
  --hairline: var(--border);
  --hairline-soft: color-mix(in srgb, var(--text) 6%, transparent);
  --border-strong: color-mix(in srgb, var(--text) 24%, transparent);
  --tint-1: color-mix(in srgb, var(--text) 3%, transparent);
  --accent-tint-3: color-mix(in srgb, var(--accent) 20%, transparent);
  --shadow-color-2: rgb(0 0 0 / 18%);
  --surface-3: #202024;
  --hairline-strong: color-mix(in srgb, var(--text) 20%, transparent);
  --surface-inset: #141414;
  --surface-2: #222222;
  --shadow-color-1: rgb(0 0 0 / 12%);
  --shadow-sm: 0 2px 10px rgb(0 0 0 / 16%);
  --sidebar-bg: var(--surface);
  --sidebar-bg-end: var(--surface);
  --accent-tint-1: color-mix(in srgb, var(--accent) 7%, transparent);
  --accent-tint-2: color-mix(in srgb, var(--accent) 13%, transparent);
  --accent-line-2: color-mix(in srgb, var(--accent) 35%, transparent);
  --accent-border: var(--accent-line-2);
  --tone-red: #c81d25;

  --text: #f5f5f5;
  --text-muted: #a8aeb9;

  --blue-500: #075BC7;
  --logo-border: #008cff;
  --logo-background: radial-gradient(ellipse at center, #001133 25%, #003bac 70%, #008cff 100%);
  --accent: var(--blue-500);
  --accent-strong: #0E6FDC;
  --accent-text: var(--accent-light);
  --accent-light: #2498F2;
  --accent-soft: #102b4c;
  --text-subtle: var(--text-muted);
  --accent-hover: #064ba3;
  --on-accent: #ffffff;

  --success: #22c55e;
  --success-text: #4ade80;
  --success-soft: color-mix(in srgb, var(--success) 13%, transparent);
  --warning: #f59e0b;
  --danger: #ef4444;
}

/* Ativado com data-theme="light" no elemento html. */
:root[data-theme="light"] {
  --bg: #f7f7f7;
  --surface: #ffffff;
  --border: #e5e7eb;
  --surface-inset: #f7f7f7;
  --surface-2: #f0f2f5;
  --surface-3: #eef1f6;
  --shadow-color-2: rgb(15 23 42 / 9%);
  --shadow-color-1: rgb(15 23 42 / 5%);
  --shadow-sm: 0 2px 10px rgb(15 23 42 / 8%);

  --text: #000000;
  --text-muted: #4b5563;

  --accent-hover: #064ba3;
  --accent-text: var(--accent);
  --accent-soft: #eaf2ff;

  --success: #16a34a;
  --success-text: #15803d;
  --warning: #d97706;
  --danger: #dc2626;
}
```

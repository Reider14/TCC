# src/styles/global.css

```css
@import "./theme.css";

/* Tipografia e dimensoes base. As fontes sao carregadas no layout. */
:root {
  --font-main: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-display: var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif;
  --nav-width: 320px;
  --nav-rail-width: 76px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
}

html {
  font-size: 20px;
  line-height: 1.5;
  background: var(--bg);
  color-scheme: dark;
  scrollbar-width: none;
}

:root[data-theme="light"] {
  color-scheme: light;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none;
}

body {
  margin: 0;
  overflow-x: hidden;
  color: var(--text);
  background: var(--bg);
  font-family: var(--font-main);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  transition: background-color 0.2s ease, color 0.2s ease;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
}

button, input, textarea, select {
  font: inherit;
  color: inherit;
}

button {
  border: 0;
  background: transparent;
}

svg,
img {
  display: block;
  vertical-align: middle;
}

button, a, input {
  -webkit-tap-highlight-color: transparent;
}

a {
  color: var(--accent-text);
  font-weight: 760;
  text-decoration: none;
}

/* data-plain desativa o sublinhado em links de imagens e cartoes. */
a:not([data-plain]) {
  background-image: linear-gradient(90deg, var(--accent-light), var(--accent));
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 0% 2px;
  transition: background-size 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

a:not([data-plain]):hover,
a:not([data-plain]):focus-visible {
  background-size: 100% 2px;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid var(--accent-light);
  outline-offset: 3px;
}

::selection {
  color: var(--text);
  background: var(--accent-soft);
}

::placeholder {
  color: var(--text-subtle);
}

@media (prefers-reduced-motion: reduce) {
  body,
  a:not([data-plain]) {
    transition: none;
  }
}

/* Propriedades globais para animar o gradiente de autenticacao. */
@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@property --gradient-angle-offset {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@property --gradient-percent {
  syntax: "<percentage>";
  initial-value: 5%;
  inherits: false;
}

@property --gradient-shine {
  syntax: "<color>";
  initial-value: #eaf2ff;
  inherits: false;
}
```

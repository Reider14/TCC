# src/app/(platform)/page.module.css

```css
.feed {
  width: min(100%, 650px);
  max-width: 100%;
  margin-inline: auto;
}

.heading {
  width: 100%;
  margin-inline: 0;
}

.composer {
  width: 100%;
  contain: inline-size;
}

.toast {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 200;
  max-width: calc(100vw - 48px);
  padding: 12px 18px;
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  background: var(--surface);
  box-shadow: 0 10px 30px var(--shadow-color-1);
}
```

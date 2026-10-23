# src/components/SearchBar/styles.module.css

```css
.search {
  min-width: 0;
}

.label {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.inputWrap {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 10px;
  padding: 0 10px 0 12px;
  border: 1px solid var(--hairline);
  border-radius: 14px;
  background: var(--surface);
}

.inputWrap:focus-within {
  border-color: var(--accent-light);
}

.inputWrap svg {
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  fill: none;
  stroke: var(--text-muted);
  stroke-width: 1.7;
}

.inputWrap input {
  width: 100%;
  min-width: 0;
  min-height: 48px;
  padding: 0;
  border: 0;
  color: var(--text);
  background: transparent;
  font-family: var(--font-main);
  font-size: 0.75rem;
  outline: 0;
}

.searchIcon {
  display: grid;
  width: 28px;
  height: 36px;
  flex-shrink: 0;
  place-items: center;
  padding: 0;
  border: 0;
  color: var(--text-muted);
  background: transparent;
  cursor: pointer;
}

.shortcut {
  flex-shrink: 0;
  padding: 4px 6px;
  border: 1px solid var(--hairline-strong);
  border-radius: 7px;
  color: var(--text-muted);
  background: transparent;
  font-size: 0.55rem;
  cursor: pointer;
}

.shortcut kbd {
  font: inherit;
}

.error {
  margin: 10px 0 0;
  color: var(--danger);
  font-size: 0.65rem;
}

@media (max-width: 480px) {
  .shortcut {
    display: none;
  }
}
```

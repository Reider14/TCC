# src/components/FilterTabs/styles.module.css

```css
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tab {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 10px 16px;
  border: 1px solid transparent;
  border-radius: 12px;
  color: var(--text-muted);
  background: transparent;
  font-family: var(--font-main);
  font-size: 0.75rem;
  font-weight: 650;
  cursor: pointer;
}

.tab svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tab[aria-pressed="true"] {
  color: var(--on-accent);
  background: var(--accent);
  box-shadow: 0 6px 18px var(--accent-tint-2);
}

.tab:hover:not([aria-pressed="true"]) {
  color: var(--text);
  background: var(--surface);
}

@media (max-width: 480px) {
  .tabs {
    gap: 4px;
  }

  .tab {
    padding: 8px 10px;
    font-size: 0.65rem;
  }
}
```

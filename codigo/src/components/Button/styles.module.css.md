# src/components/Button/styles.module.css

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  flex-shrink: 0;
  border: 1px solid transparent;
  border-radius: 10px;
  font-family: var(--font-main);
  font-weight: 900;
  line-height: 1.5;
  cursor: pointer;
}

.small {
  min-height: 36px;
  padding: 0 15px;
  font-size: 0.75rem;
}

.medium {
  min-height: 42px;
  padding: 0 18px;
  font-size: 0.875rem;
}

.large {
  min-height: 50px;
  padding: 0 18px;
  font-size: 0.875rem;
}

.primary {
  color: var(--on-accent);
  background: linear-gradient(105deg, var(--accent), var(--accent-strong), var(--accent));
}

.primary:hover:enabled {
  filter: brightness(1.08);
}

.secondary {
  border-color: var(--hairline);
  color: var(--text);
  background: var(--surface);
}

.secondary:hover:enabled {
  background: var(--surface-2);
}

.ghost {
  color: var(--text-muted);
  background: transparent;
  font-weight: 760;
}

.ghost.small {
  min-height: 34px;
  padding: 0 11px;
}

.ghost:hover:enabled {
  color: var(--text);
  background: var(--surface-2);
}

.button:disabled {
  cursor: not-allowed;
}

.icon {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}

.button svg {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}
```

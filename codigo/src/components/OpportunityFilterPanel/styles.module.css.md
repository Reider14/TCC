# src/components/OpportunityFilterPanel/styles.module.css

```css
.panel {
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: var(--surface);
  box-shadow: var(--shadow-sm);
  font-family: var(--font-main);
}

.head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.head h2 {
  max-width: 150px;
  margin: 0;
  color: var(--text);
  font-family: var(--font-display);
  font-size: 1rem;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.head button {
  padding: 2px 0;
  border: 0;
  color: var(--accent-light);
  background: transparent;
  font: inherit;
  font-size: 0.7rem;
  font-weight: 800;
  line-height: 1.2;
  text-align: right;
  cursor: pointer;
}

.fields {
  display: grid;
  margin-top: 14px;
  gap: 10px;
}

.fields label {
  display: grid;
  gap: 5px;
}

.fields label > span {
  color: var(--text-muted);
  font-size: 0.68rem;
  font-weight: 800;
}

.fields select {
  width: 100%;
  height: 40px;
  padding: 0 13px;
  border: 1px solid var(--border-strong);
  border-radius: 12px;
  color: var(--text);
  background: var(--surface-inset);
  font: inherit;
  font-size: 0.75rem;
  cursor: pointer;
}

.apply {
  width: 100%;
  min-height: 42px;
  margin-top: 14px;
  border-radius: 12px;
}

.head button:focus-visible,
.fields select:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

@media (max-width: 980px) {
  .fields {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .fields {
    grid-template-columns: 1fr;
  }
}
```

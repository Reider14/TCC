# src/components/PartnerCompanies/styles.module.css

```css
.panel {
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: var(--surface);
  box-shadow: var(--shadow-sm);
  font-family: var(--font-main);
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.head h2 {
  margin: 0;
  color: var(--text);
  font-family: var(--font-display);
  font-size: 0.95rem;
  letter-spacing: -0.025em;
}

.head button {
  padding: 0;
  border: 0;
  color: var(--accent-light);
  background: transparent;
  font: inherit;
  font-size: 0.7rem;
  font-weight: 800;
  cursor: pointer;
}

.list {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}

.list li + li {
  border-top: 1px solid var(--hairline);
}

.list a {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  align-items: center;
  padding: 10px 0;
  color: inherit;
  text-decoration: none;
  gap: 11px;
}

.list a:hover strong {
  color: var(--accent-light);
}

.logo {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 13px;
  color: #fff;
  background: var(--accent);
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.logo[data-tone="cyan"] { background: #087eaf; }
.logo[data-tone="green"] { background: #16845b; }
.logo[data-tone="orange"] { background: #d66118; }
.logo[data-tone="purple"] { background: #6d4bc3; }

.company {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.company strong {
  overflow: hidden;
  color: var(--text);
  font-family: var(--font-display);
  font-size: 0.76rem;
  line-height: 1.25;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.16s ease;
}

.company small {
  overflow: hidden;
  color: var(--text-muted);
  font-size: 0.64rem;
  line-height: 1.3;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 14px;
  gap: 7px;
}

.pagination i {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--accent-tint-3);
}

.pagination .active {
  width: 22px;
  background: var(--accent);
}

.head button:focus-visible,
.list a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

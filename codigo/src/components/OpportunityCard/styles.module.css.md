# src/components/OpportunityCard/styles.module.css

```css
.card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface);
  box-shadow: var(--shadow-sm);
  gap: 14px;
  transition:
    border-color 0.16s ease,
    box-shadow 0.16s ease;
}

.card:hover {
  border-color: var(--accent-border);
  box-shadow:
    0 2px 4px var(--accent-tint-1),
    0 12px 28px var(--accent-tint-1);
}

.logo {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border-radius: 16px;
  color: var(--on-accent);
  background: var(--tone-red);
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
}

.logo[data-tone="purple"] { background: #6d4bc3; }
.logo[data-tone="orange"] { background: #d66a19; }
.logo[data-tone="green"] { background: #16845b; }
.logo[data-tone="blue"] { background: var(--accent); }

.body {
  min-width: 0;
  align-self: start;
}

.body h3 {
  margin: 0;
  color: var(--text);
  font-family: var(--font-display);
  font-size: 0.96875rem;
  line-height: 1.2;
  letter-spacing: -0.015em;
}

.company {
  margin: 2px 0 0;
  color: var(--text-muted);
  font-size: 0.78125rem;
  line-height: 1.3;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  margin-top: 7px;
  color: var(--text-subtle);
  font-size: 0.71875rem;
  gap: 12px;
  line-height: 1.3;
}

.meta span {
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

.meta svg,
.bookmark svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.description {
  margin: 8px 0 0;
  color: var(--text-muted);
  font-size: 0.78125rem;
  line-height: 1.4;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  gap: 7px;
}

.tags span {
  padding: 5px 9px;
  border-radius: 999px;
  color: var(--accent-text);
  background: var(--accent-soft);
  font-size: 0.65625rem;
  font-weight: 700;
}

.side {
  display: grid;
  align-content: space-between;
  justify-items: end;
  height: 100%;
  gap: 10px;
}

.sideTop {
  display: flex;
  align-items: center;
  gap: 11px;
}

.badge {
  padding: 4px 8px;
  border-radius: 999px;
  color: var(--success-text);
  background: var(--success-soft);
  font-size: 0.625rem;
  font-weight: 800;
}

.published {
  color: var(--text-subtle);
  font-size: 0.6875rem;
  white-space: nowrap;
}

.bookmark {
  display: grid;
  width: 30px;
  height: 30px;
  padding: 0;
  place-items: center;
  border: 0;
  border-radius: 9px;
  color: var(--text-subtle);
  background: transparent;
  cursor: pointer;
}

.bookmark:hover,
.bookmark.saved {
  color: var(--accent-text);
  background: var(--accent-soft);
}

.bookmark svg {
  width: 17px;
  height: 17px;
}

.bookmark.saved svg {
  fill: currentColor;
}

.apply {
  height: 38px;
  min-height: 38px;
  padding: 0 20px;
  border: 1px solid var(--accent-border);
  border-radius: 11px;
  color: var(--accent-text);
  background: var(--surface);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 800;
  white-space: nowrap;
  cursor: pointer;
}

.apply:hover:enabled {
  color: var(--on-accent);
  background: var(--accent);
}

.candidates {
  display: flex;
  align-items: center;
  color: var(--text-subtle);
  font-size: 0.6875rem;
  gap: 10px;
}

.avatars {
  display: flex;
}

.avatars i {
  display: grid;
  width: 24px;
  height: 24px;
  margin-left: -8px;
  place-items: center;
  border: 2px solid var(--surface);
  border-radius: 50%;
  color: var(--on-accent);
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 900;
}

.avatars i:first-child {
  margin-left: 0;
}

.bookmark:focus-visible,
.apply:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

@media (max-width: 720px) {
  .card {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .side {
    grid-column: 1 / -1;
    justify-items: start;
  }

  .sideTop {
    flex-wrap: wrap;
  }
}
```

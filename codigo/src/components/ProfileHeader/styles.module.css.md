# src/components/ProfileHeader/styles.module.css

```css
.header {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface);
  box-shadow: var(--shadow-sm);
}

.body {
  display: grid;
  grid-template-columns: 156px minmax(0, 1fr) auto;
  align-items: start;
  padding: 0 26px 18px;
  gap: 0 22px;
}

.avatarWrap {
  position: relative;
  width: 140px;
  height: 140px;
  margin-top: -56px;
}

.crest {
  position: relative;
  display: grid;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 4px solid var(--surface);
  border-radius: 50%;
  color: #fff;
  background: linear-gradient(145deg, var(--accent-light), var(--accent), #083276);
  box-shadow: 0 8px 22px var(--accent-tint-1);
  font-family: var(--font-display);
  font-size: 1.65rem;
  font-weight: 800;
  place-items: center;
}

.crest img {
  border-radius: inherit;
  object-fit: cover;
  object-position: center 48%;
  transform: scale(1.05);
}

.avatarEdit {
  position: absolute;
  right: -2px;
  bottom: 2px;
  z-index: 2;
  display: grid;
  width: 38px;
  height: 38px;
  padding: 0;
  place-items: center;
  border: 3px solid var(--surface);
  border-radius: 50%;
  color: var(--text);
  background: var(--surface-2);
  cursor: pointer;
}

.avatarEdit:hover {
  color: var(--on-accent);
  background: var(--accent);
}

.avatarEdit svg {
  width: 17px;
  height: 17px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.identity {
  min-width: 0;
  padding-top: 16px;
}

.name {
  display: flex;
  align-items: center;
  margin: 0;
  color: var(--text);
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  text-wrap: balance;
  gap: 8px;
}

.verified {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.tagline {
  margin: 7px 0 0;
  color: var(--text-muted);
  font-size: 0.75rem;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  margin: 11px 0 0;
  padding: 0;
  list-style: none;
  gap: 6px 18px;
}

.meta li {
  display: flex;
  align-items: center;
  color: var(--text-subtle);
  font-size: 0.65rem;
  gap: 6px;
}

.meta svg {
  width: 14px;
  height: 14px;
  flex: 0 0 auto;
  fill: none;
  stroke: var(--accent-light);
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.actions {
  display: flex;
  align-items: center;
  padding-top: 16px;
  gap: 8px;
}

.connect,
.ghost {
  display: flex;
  height: 38px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-family: inherit;
  font-size: 0.7rem;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.16s ease;
}

.connect {
  border-color: var(--accent);
  color: var(--accent-text);
  background: transparent;
}

.connect:hover { background: var(--accent-soft); }

.ghost {
  border-color: var(--border-strong);
  color: var(--text-muted);
  background: var(--surface);
}

.ghost:hover,
.more:hover {
  color: var(--text);
  background: var(--surface-2);
}

.more {
  display: grid;
  width: 38px;
  height: 38px;
  border: 1px solid var(--border-strong);
  border-radius: 50%;
  color: var(--text-muted);
  background: var(--surface);
  cursor: pointer;
  place-items: center;
}

.more svg {
  width: 17px;
  height: 17px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.4;
  stroke-linecap: round;
}

@media (max-width: 860px) {
  .body {
    grid-template-columns: minmax(0, 1fr);
    padding: 0 18px 16px;
    gap: 14px;
  }

  .avatarWrap {
    width: 112px;
    height: 112px;
    margin-top: -44px;
  }

  .identity { padding-top: 0; }
  .actions { flex-wrap: wrap; padding-top: 0; }
  .connect,
  .ghost { flex: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .connect,
  .ghost { transition: none; }
}
```

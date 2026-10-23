# src/app/(platform)/perfis/[id]/styles.module.css

```css
.page {
  width: 100%;
  max-width: 1290px;
  padding-bottom: 24px;
}

.profileGrid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 288px;
  align-items: start;
  gap: 14px;
}

.mainColumn {
  display: grid;
  min-width: 0;
  gap: 18px;
}

.profileAside {
  position: sticky;
  top: 22px;
  display: grid;
  overflow-y: auto;
  max-height: calc(100vh - 44px);
  gap: 16px;
  scrollbar-width: none;
}

.profileAside::-webkit-scrollbar { display: none; }

.panel {
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--surface);
  box-shadow: var(--shadow-sm);
}

.panelHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.panelHead h2 {
  margin: 0;
  color: var(--text);
  font-size: 1rem;
  letter-spacing: -0.025em;
}

.panelHead button {
  padding: 0;
  border: 0;
  color: var(--accent-light);
  background: transparent;
  font: inherit;
  font-size: 0.65rem;
  font-weight: 800;
  cursor: pointer;
}

.about {
  margin: 13px 0 0;
  color: var(--text-muted);
  font-size: 0.69rem;
  line-height: 1.65;
}

.infoList {
  display: grid;
  margin-top: 17px;
  color: var(--text);
  font-size: 0.65rem;
  gap: 12px;
}

.infoList span {
  display: flex;
  align-items: center;
  gap: 7px;
}

.infoList svg {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  fill: none;
  stroke: var(--text-muted);
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.infoList .available {
  color: var(--success-text);
  font-weight: 700;
}

.available i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 0 4px var(--success-soft);
}

.skills {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  gap: 7px;
}

.skills span {
  padding: 6px 9px;
  border-radius: 9px;
  color: var(--accent-text);
  background: var(--accent-soft);
  font-size: 0.58rem;
  font-weight: 750;
}

.education {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  margin-top: 16px;
  gap: 11px;
}

.education > span {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 13px;
  color: #fff;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 800;
}

.education strong {
  font-family: var(--font-display);
  font-size: 0.7rem;
}

.education p {
  margin: 3px 0;
  color: var(--text-muted);
  font-size: 0.6rem;
}

.education small {
  color: var(--text-subtle);
  font-size: 0.55rem;
}

.notice {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 200;
  padding: 12px 18px;
  border: 1px solid var(--hairline);
  border-radius: 12px;
  color: var(--text);
  background: var(--surface);
  box-shadow: 0 10px 30px var(--shadow-color-1);
  cursor: pointer;
}

@media (min-width: 1121px) {
  .page {
    position: relative;
    left: 50%;
    width: min(1290px, calc(100vw - 344px));
    transform: translateX(-50%);
  }
}

@media (max-width: 1180px) {
  .profileGrid {
    grid-template-columns: 1fr;
  }

  .profileAside {
    position: static;
    grid-template-columns: 1fr 1fr;
    overflow: visible;
    max-height: none;
  }
}

@media (max-width: 620px) {
  .profileAside {
    grid-template-columns: 1fr;
  }
}
```

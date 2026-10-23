# src/app/(platform)/projetos/[id]/styles.module.css

```css
.page {
  width: 100%;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 28px;
}

.header .heading {
  width: auto;
  margin: 0;
}

.heading h1 { font-size: 40px; }
.heading p { font-size: 16px; }

.headerActions {
  display: grid;
  grid-template-columns: minmax(280px, 430px) auto;
  align-items: start;
  gap: 12px;
}

.search { width: 430px; max-width: 100%; }

.filters {
  justify-content: flex-start;
  overflow-x: auto;
  flex-wrap: nowrap;
  margin: 27px 0 24px;
  padding-bottom: 4px;
  scrollbar-width: none;
}

.filters::-webkit-scrollbar { display: none; }
.filters button { white-space: nowrap; }

.layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 248px;
  align-items: start;
  gap: 20px;
}

.mainColumn { min-width: 0; }

.hero {
  display: block;
  width: 100%;
  overflow: hidden;
  padding: 0;
  border: 1px solid var(--accent-line-2);
  border-radius: 22px;
  background: #eef0ff;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
}

.hero img {
  display: block;
  width: 100%;
  height: auto;
}

.hero:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.projectsSection { margin-top: 24px; }

.sectionHead,
.sideHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.sectionHead { margin-bottom: 13px; }

.sectionHead h2,
.sideHead h2 {
  margin: 0;
  color: var(--text);
  font-family: var(--font-display);
  letter-spacing: -0.025em;
}

.sectionHead h2 { font-size: 1.1rem; }
.sideHead h2 { font-size: 0.88rem; }

.sectionHead button,
.sideHead button {
  padding: 0;
  border: 0;
  color: var(--accent-light);
  background: transparent;
  font: inherit;
  font-size: 0.65rem;
  font-weight: 800;
  cursor: pointer;
}

.projectGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.sidebarColumn {
  position: sticky;
  top: 24px;
  display: grid;
  gap: 16px;
}

.sidePanel {
  padding: 17px;
  border: 1px solid var(--border);
  border-radius: 19px;
  background: var(--surface);
  box-shadow: var(--shadow-sm);
}

.categoryList {
  display: grid;
  margin-top: 13px;
  gap: 6px;
}

.categoryList > button {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  padding: 6px 0;
  border: 0;
  color: var(--text);
  background: transparent;
  text-align: left;
  cursor: pointer;
  column-gap: 9px;
}

.categoryList > button > span {
  display: grid;
  width: 38px;
  height: 38px;
  grid-row: 1 / 3;
  place-items: center;
  border-radius: 11px;
  color: var(--accent-light);
  background: var(--accent-soft);
}

.categoryList > button > span[data-tone="purple"] { color: #a58aff; background: rgb(112 71 235 / 14%); }
.categoryList > button > span[data-tone="red"] { color: #ff6974; background: rgb(239 68 68 / 12%); }
.categoryList > button > span[data-tone="cyan"] { color: #28b9d8; background: rgb(40 185 216 / 12%); }
.categoryList > button > span[data-tone="orange"] { color: #f59e0b; background: rgb(245 158 11 / 12%); }
.categoryList > button > span[data-tone="green"] { color: #35bb78; background: rgb(34 197 94 / 12%); }

.categoryList svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.categoryList strong {
  overflow: hidden;
  align-self: end;
  font-family: var(--font-display);
  font-size: 0.66rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.categoryList small {
  align-self: start;
  color: var(--text-muted);
  font-size: 0.55rem;
}

.skillList {
  display: grid;
  margin-top: 14px;
  gap: 13px;
}

.skillList button {
  display: grid;
  padding: 0;
  border: 0;
  color: var(--text);
  background: transparent;
  cursor: pointer;
  gap: 6px;
}

.skillList span {
  display: flex;
  justify-content: space-between;
  font-size: 0.6rem;
}

.skillList small { color: var(--text-muted); }

.skillList i {
  position: relative;
  height: 4px;
  overflow: hidden;
  border-radius: 99px;
  background: var(--accent-soft);
}

.skillList i::after {
  display: block;
  width: var(--skill-width);
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  content: "";
}

.empty {
  padding: 40px 20px;
  border: 1px dashed var(--hairline-strong);
  border-radius: 18px;
  color: var(--text-muted);
  text-align: center;
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

@media (max-width: 1060px) {
  .header { display: grid; }
  .headerActions { width: 100%; }
  .search { width: 100%; }
  .layout { grid-template-columns: 1fr; }
  .sidebarColumn { position: static; grid-template-columns: 1fr 1fr; grid-row: 1; }
}

@media (max-width: 900px) {
  .projectGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 620px) {
  .headerActions { grid-template-columns: 1fr; }
  .headerActions > button { justify-self: start; }
  .sidebarColumn { grid-template-columns: 1fr; }
  .projectGrid { grid-template-columns: 1fr; }
}
```

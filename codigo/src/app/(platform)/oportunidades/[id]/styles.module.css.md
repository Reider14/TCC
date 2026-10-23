# src/app/(platform)/oportunidades/[id]/styles.module.css

```css
.page {
  width: 100%;
}

.header {
  display: grid;
  grid-template-columns: minmax(310px, 1fr) minmax(320px, 460px) auto;
  align-items: start;
  gap: 24px;
}

.header .heading {
  width: 100%;
  margin: 0;
  justify-self: start;
}

.heading h1 {
  font-size: 40px;
}

.heading p {
  font-size: 16px;
}

.search {
  min-width: 0;
}

.filters {
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: 28px 0 32px;
  padding-bottom: 4px;
  scrollbar-width: none;
}

.filters::-webkit-scrollbar {
  display: none;
}

.filters button {
  white-space: nowrap;
}

.section {
  width: 100%;
  min-width: 0;
  font-family: var(--font-main);
}

.resultsLayout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  align-items: start;
  gap: 20px;
}

.sideColumn {
  position: sticky;
  top: 24px;
  display: grid;
  gap: 16px;
}

.listHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 14px;
  gap: 14px;
}

.listHead h2 {
  margin: 0;
  color: var(--text);
  font-family: var(--font-display);
  font-size: 1.125rem;
  letter-spacing: -0.02em;
}

.sort {
  display: flex;
  align-items: center;
  color: var(--text-muted);
  font-size: 0.75rem;
  gap: 9px;
}

.sort select {
  height: 36px;
  padding: 0 12px;
  border: 1px solid var(--border-strong);
  border-radius: 10px;
  color: var(--text);
  background: var(--surface);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
}

.list {
  display: grid;
  gap: 14px;
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

@media (max-width: 1020px) {
  .header {
    grid-template-columns: 1fr auto;
  }

  .search {
    grid-column: 1 / -1;
    grid-row: 2;
    max-width: 620px;
  }

  .resultsLayout {
    grid-template-columns: 1fr;
  }

  .sideColumn {
    position: static;
    grid-row: 1;
  }

}

@media (max-width: 720px) {
  .listHead {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 620px) {
  .header {
    grid-template-columns: 1fr;
  }

  .header > button {
    justify-self: start;
  }

  .search {
    grid-column: auto;
    grid-row: auto;
    width: 100%;
  }

  .filters {
    margin-top: 22px;
  }

  .sort {
    width: 100%;
    justify-content: space-between;
  }
}
```

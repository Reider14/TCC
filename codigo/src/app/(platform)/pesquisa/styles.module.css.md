# src/app/(platform)/pesquisa/styles.module.css

```css
.page {
  width: 100%;
  margin-inline: auto;
}

.topbar {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
  align-items: start;
  gap: 28px;
}

.topbar .heading {
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
  margin-top: 5px;
}

.filters {
  margin: 28px 0 24px;
}

.suggestions button {
  padding: 8px 13px;
  border: 1px solid var(--hairline);
  border-radius: 999px;
  color: var(--text-muted);
  background: var(--surface);
  font-size: 0.65rem;
  font-weight: 500;
  cursor: pointer;
}

.suggestions button:hover {
  border-color: var(--accent-line-2);
  color: var(--accent-text);
}

.summary {
  margin: 0 0 14px;
  color: var(--text-muted);
  font-size: 0.65rem;
}

.results {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.result {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 14px;
  padding: 18px;
  border: 1px solid var(--hairline);
  border-radius: 18px;
  color: var(--text);
  background: var(--surface);
  text-align: left;
  cursor: pointer;
}

.result:hover {
  border-color: var(--accent-line-2);
  background: linear-gradient(105deg, var(--accent-tint-1), var(--surface));
}

.avatar {
  display: grid;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  place-items: center;
  border-radius: 14px;
  color: var(--accent-text);
  background: var(--accent-tint-2);
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
}

.resultBody {
  display: grid;
  min-width: 0;
  gap: 3px;
  flex: 1;
  overflow-wrap: anywhere;
}

.resultBody strong {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
}

.kind {
  color: var(--accent-text);
  font-size: 0.55rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.subtitle {
  color: var(--text-muted);
  font-size: 0.65rem;
}

.arrow {
  color: var(--text-muted);
  font-size: 1rem;
}

.empty {
  padding: 36px 24px;
  border: 1px dashed var(--hairline-strong);
  border-radius: 20px;
  text-align: center;
}

.emptyIcon {
  display: inline-grid;
  width: 54px;
  height: 54px;
  place-items: center;
  border-radius: 17px;
  color: var(--accent-text);
  background: var(--accent-tint-2);
  font-size: 1.8rem;
}

.empty h2 {
  margin: 16px 0 8px;
  font-size: 1.1rem;
}

.empty p {
  max-width: 400px;
  margin: 0 auto 20px;
  color: var(--text-muted);
  font-size: 0.75rem;
}

.suggestions,
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.suggestions {
  justify-content: center;
}

.dialog {
  width: min(520px, calc(100% - 32px));
  max-height: calc(100dvh - 48px);
  box-sizing: border-box;
  overflow-wrap: anywhere;
  padding: 24px;
  border: 1px solid var(--hairline);
  border-radius: 22px;
  color: var(--text);
  background: var(--surface);
  font-size: 0.75rem;
}

.dialog::backdrop {
  background: rgb(0 0 0 / 40%);
  backdrop-filter: blur(4px);
}

.dialogHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dialog h2 {
  margin: 12px 0 4px;
  font-size: 1.2rem;
  line-height: 1.2;
}

.tags span {
  padding: 5px 10px;
  border-radius: 999px;
  background: var(--accent-tint-1);
  font-size: 0.6rem;
}

@media (max-width: 900px) {
  .topbar { grid-template-columns: 1fr; gap: 20px; }
  .search { max-width: 520px; margin-top: 0; }
}

@media (max-width: 480px) {
  .heading h1 { font-size: 34px; }
  .filters { margin-top: 20px; }
  .result { padding: 14px; gap: 10px; }
}
```

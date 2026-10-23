# src/components/PostComposer/PostComposer.module.css

```css
.composer {
  margin-bottom: 16px;
  padding: 13px;
  border: 1px solid var(--hairline);
  border-radius: 22px;
  background: linear-gradient(180deg, var(--surface), var(--surface-inset));
  box-shadow: 0 14px 46px var(--shadow-color-1);
}

.composerTop {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  font-family: var(--font-display);
  display: grid;
  width: 38px;
  height: 38px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--hairline-strong);
  border-radius: 13px;
  color: var(--on-accent);
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  font-size: 0.75rem;
  font-weight: 700;
}

.composerInput {
  display: flex;
  height: 43px;
  flex: 1;
  align-items: center;
  padding: 0 15px;
  border: 1px solid var(--hairline);
  border-radius: 14px;
  color: var(--text-muted);
  background: var(--surface-inset);
  cursor: text;
  font-size: 0.8125rem;
  text-align: left;
}

.composerActions {
  display: flex;
  align-items: center;
  margin-top: 11px;
  padding-top: 10px;
  border-top: 1px solid var(--hairline);
  gap: 8px;
}

.composerActions > :last-child {
  margin-left: auto;
}

@media (max-width: 620px) {
  .composerActions {
    gap: 2px;
    flex-wrap: wrap;
  }

  .composerActions .miniButton {
    padding: 0 8px;
  }
}
```

# src/components/feed-post/styles.module.css

```css
.post {
  min-width: 0;
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid var(--hairline);
  border-radius: 22px;
  background: var(--surface);
  box-shadow: 0 14px 46px var(--shadow-color-1);
}

.header {
  display: flex;
  align-items: center;
  gap: 11px;
}

.avatar {
  font-family: var(--font-display);
  display: grid;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  place-items: center;
  border-radius: 13px;
  color: var(--on-accent);
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  font-size: 0.75rem;
  font-weight: 700;
}

.author {
  min-width: 0;
  flex: 1;
  overflow-wrap: anywhere;
}

.author strong {
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 700;
}

.author p {
  margin: 3px 0 0;
  color: var(--text-muted);
  font-size: 0.625rem;
}

.copy {
  margin: 12px 0;
  color: var(--text-subtle);
  font-size: 0.8125rem;
  line-height: 1.55;
}

.copy strong {
  color: var(--text);
}

.copy > span {
  color: var(--accent-text);
  font-weight: 760;
}

.cover {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 14px;
  border: 1px solid var(--hairline);
  border-radius: 18px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 -16px -16px;
  padding: 10px 16px;
  border-top: 1px solid var(--hairline);
}

.post .actions > button {
  padding: 0 8px;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 400;
}

.post .actions svg {
  width: 22px;
  height: 22px;
  stroke-width: 1.7;
}

.actions > button:last-child {
  margin-left: auto;
}

.actions > button[aria-pressed="true"] {
  color: var(--accent-text);
  background: var(--accent-tint-1);
}

@media (max-width: 400px) {
  .post {
    padding: 12px;
  }

  .actions {
    margin: 0 -12px -12px;
    padding-inline: 12px;
    gap: 2px;
  }

  .post .actions > button {
    padding-inline: 6px;
  }

}
```

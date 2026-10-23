# src/app/(auth)/login/styles.module.css

```css
.page {
  display: grid;
  min-height: 100dvh;
  place-items: center;
  padding: 24px;
}

.card {
  width: min(100%, 420px);
  padding: 32px;
  border: 1px solid var(--hairline);
  border-radius: 24px;
  background: var(--surface);
  box-shadow: 0 14px 46px var(--shadow-color-1);
}

.brand {
  color: var(--accent-text);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
}

.card h1 {
  margin: 28px 0 8px;
  font-size: 1.5rem;
  line-height: 1.15;
}

.card p {
  margin: 0 0 28px;
  color: var(--text-muted);
  font-size: 0.75rem;
}

.form {
  display: grid;
  gap: 10px;
  font-size: 0.7rem;
}

.form label { font-weight: 600; }

.form input {
  width: 100%;
  min-height: 44px;
  margin-bottom: 8px;
  padding: 10px 12px;
  border: 1px solid var(--hairline);
  border-radius: 12px;
  color: var(--text);
  background: var(--surface-inset);
}

.form button { margin-top: 8px; }

@media (max-width: 480px) {
  .card { padding: 24px; }
}
```

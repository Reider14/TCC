# src/components/Heading/styles.module.css

```css
.header {
  display: flex;
  width: fit-content;
  min-width: 0;
  max-width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin: 0 auto 13px;
  text-align: left;
}

.content {
  min-width: 0;
}

.title {
  margin: 0;
  color: var(--text);
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.05em;
  overflow-wrap: anywhere;
}

.description {
  margin: 9px 0 0;
  color: var(--text-muted);
  font-family: var(--font-main);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  overflow-wrap: anywhere;
}
```

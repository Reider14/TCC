# src/components/Sidebar/styles.module.css

```css
.sidebar {
  flex-shrink: 0;
}
.brand {
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  height: 74px;
  align-items: center;
  gap: 11px;
  padding: 0 24px;
  background: linear-gradient(
    to bottom,
    var(--sidebar-bg),
    var(--sidebar-bg-end)
  );
  color: var(--text);
  font-family: var(--font-display);
}
.logo {
  display: flex;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--logo-border);
  border-radius: 13px;
  background: var(--logo-background);
  color: var(--on-accent);
  font-family: Georgia, serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  box-shadow: 0 10px 30px var(--accent-tint-2);
}
.brandName {
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
}
.navigation {
  position: fixed;
  top: 68px;
  bottom: 0;
  left: 0;
  z-index: 110;
  display: none;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 24px 14px 40px;
  background: linear-gradient(
    to bottom,
    var(--sidebar-bg),
    var(--sidebar-bg-end)
  );
  scrollbar-width: none;
}
.navigation::-webkit-scrollbar {
  display: none;
}
.items {
  display: grid;
  gap: 8px;
}
.item,
.themeButton {
  display: grid;
  grid-template-columns: 30px 1fr auto;
  align-items: center;
  padding: 0 18px;
  border: 1px solid transparent;
  border-radius: 16px;
  color: var(--text-subtle);
  font-family: var(--font-main);
  font-size: 16px;
  text-align: left;
}
.item {
  position: relative;
  height: 54px;
  font-weight: 700;
}
.item:hover,
.themeButton:hover {
  background: var(--surface);
  color: var(--text);
}
.item.active {
  border-color: var(--accent-line-2);
  background: linear-gradient(
    100deg,
    var(--accent-tint-2),
    var(--accent-tint-1)
  );
  color: var(--text);
}
.activeIcon {
  color: var(--accent-text);
}
.footer {
  display: grid;
  gap: 8px;
  margin-top: 24px;
  padding: 18px 8px 0;
  border-top: 1px solid var(--border);
}
.themeButton {
  height: 50px;
  cursor: pointer;
}
.themeLabel {
  font-size: 12px;
}

.logout:hover {
  border-color: color-mix(in srgb, var(--danger) 25%, transparent);
  color: var(--danger);
  background: color-mix(in srgb, var(--danger) 8%, transparent);
}
@media (min-width: 1121px) {
  .sidebar,
  .brand,
  .navigation {
    width: 280px;
  }
  .brand {
    position: fixed;
  }
  .navigation {
    display: block;
  }
}
```

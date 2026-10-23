# src/components/ProjectCard/styles.module.css

```css
.card {
  overflow: hidden;
  min-width: 0;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface);
  box-shadow: var(--shadow-sm);
}

.cover {
  position: relative;
  display: grid;
  min-height: 142px;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 80% 20%, rgb(255 255 255 / 28%), transparent 25%),
    linear-gradient(135deg, #075bc7, #083b83);
}

.cover::before,
.cover::after {
  position: absolute;
  width: 110px;
  height: 110px;
  border: 1px solid rgb(255 255 255 / 16%);
  border-radius: 28px;
  content: "";
  transform: rotate(34deg);
}

.cover::before { top: -52px; right: -20px; }
.cover::after { bottom: -72px; left: -20px; }
.cover[data-tone="green"] { background: linear-gradient(135deg, #16845b, #0c4e38); }
.cover[data-tone="purple"] { background: linear-gradient(135deg, #7354d9, #3e278c); }
.cover[data-tone="orange"] { background: linear-gradient(135deg, #dc741e, #8f3d08); }
.cover[data-tone="cyan"] { background: linear-gradient(135deg, #128eb3, #07516d); }
.cover[data-tone="red"] { background: linear-gradient(135deg, #d23b47, #7f1620); }

.cover > svg {
  position: relative;
  z-index: 1;
  width: 52px;
  height: 52px;
  fill: none;
  stroke: #fff;
  stroke-width: 1.3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cover small {
  position: absolute;
  right: 12px;
  bottom: 10px;
  z-index: 1;
  color: rgb(255 255 255 / 78%);
  font-size: 0.55rem;
  font-weight: 800;
}

.status {
  position: absolute;
  top: 11px;
  left: 11px;
  z-index: 2;
  padding: 5px 8px;
  border-radius: 8px;
  color: var(--text);
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  font-size: 0.55rem;
  font-weight: 800;
  backdrop-filter: blur(8px);
}

.body {
  display: grid;
  min-height: 230px;
  padding: 15px;
}

.body h3 {
  margin: 0;
  color: var(--text);
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: -0.03em;
}

.body p {
  margin: 7px 0 0;
  color: var(--text-muted);
  font-size: 0.68rem;
  line-height: 1.5;
}

.tags {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-top: 12px;
  gap: 6px;
}

.tags span {
  padding: 5px 8px;
  border-radius: 8px;
  color: var(--accent-text);
  background: var(--accent-soft);
  font-size: 0.55rem;
  font-weight: 750;
}

.footer {
  display: flex;
  align-self: end;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}

.members,
.avatars {
  display: flex;
  align-items: center;
}

.members {
  gap: 7px;
}

.members small {
  color: var(--text-muted);
  font-size: 0.58rem;
}

.avatars i {
  display: grid;
  width: 25px;
  height: 25px;
  margin-left: -7px;
  place-items: center;
  border: 2px solid var(--surface);
  border-radius: 50%;
  color: #fff;
  background: var(--accent);
  font-size: 0.44rem;
  font-style: normal;
  font-weight: 900;
}

.avatars i:first-child { margin-left: 0; }

.support {
  display: flex;
  align-items: center;
  padding: 5px;
  border: 0;
  color: var(--text-muted);
  background: transparent;
  font: inherit;
  font-size: 0.62rem;
  cursor: pointer;
  gap: 6px;
}

.support svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
}

.support.supported {
  color: var(--danger);
}

.support.supported svg {
  fill: currentColor;
}
```

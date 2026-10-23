# src/components/ProfilePosts/styles.module.css

```css
.feed {
  display: grid;
  gap: 12px;
}

.feedHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.sectionTitle {
  margin: 0;
  color: var(--text);
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.feedHead button {
  padding: 0;
  border: 0;
  color: var(--accent-light);
  background: transparent;
  font-family: inherit;
  font-size: 0.65rem;
  font-weight: 700;
  cursor: pointer;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow: hidden;
  border-radius: 14px;
  gap: 4px;
}

.tile {
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0;
  aspect-ratio: 1;
  border: 0;
  background: var(--surface-inset);
  cursor: pointer;
}

.media {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

.tile:hover .media {
  transform: scale(1.26);
}

.mark {
  position: absolute;
  top: 8px;
  right: 8px;
  display: grid;
  width: 26px;
  height: 26px;
  place-items: center;
  border-radius: 8px;
  color: #fff;
  background: rgb(0 0 0 / 52%);
  backdrop-filter: blur(6px);
}

.mark svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.caption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  align-content: end;
  padding: 35px 12px 11px;
  color: #fff;
  background: linear-gradient(to top, rgb(0 0 0 / 82%), transparent);
  gap: 2px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.tile:hover .caption,
.tile:focus-visible .caption { opacity: 1; }

.caption strong {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 0.68rem;
  line-height: 1.35;
}

.caption small {
  color: rgb(255 255 255 / 72%);
  font-size: 0.55rem;
}

@media (max-width: 560px) {
  .grid { gap: 3px; }
}

@media (prefers-reduced-motion: reduce) {
  .media,
  .caption { transition: none; }
  .tile:hover .media { transform: none; }
}
```

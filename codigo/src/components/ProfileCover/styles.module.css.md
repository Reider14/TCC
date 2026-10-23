# src/components/ProfileCover/styles.module.css

```css
.cover {
  position: relative;
  width: 100%;
  max-height: 320px;
  overflow: hidden;
  aspect-ratio: 3 / 1;
  background: var(--surface-inset);
}

.cover::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgb(0 0 0 / 42%));
  content: "";
}

.cover > img {
  object-fit: cover;
  object-position: center 68%;
}

.edit {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
  border-color: rgb(255 255 255 / 30%);
  border-radius: 999px;
  color: #fff;
  background: rgb(18 24 38 / 66%);
  backdrop-filter: blur(10px);
  min-height: 32px;
  height: 32px;
}

@media (max-width: 640px) {
  .cover {
    aspect-ratio: 2.5 / 1;
  }
}
```

# src/components/PostModal/styles.module.css

```css
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 500;
  display: grid;
  padding: 16px;
  place-items: center;
  background: rgb(0 0 0 / 72%);
  backdrop-filter: blur(8px);
}

.modal {
  position: relative;
  width: min(660px, calc(100vw - 32px));
  max-height: calc(100vh - 32px);
  overflow: auto;
  border: 1px solid var(--border-strong);
  border-radius: 20px;
  background: var(--surface);
  box-shadow: 0 24px 70px rgb(0 0 0 / 38%);
  scrollbar-width: none;
}

.modal::-webkit-scrollbar { display: none; }

.modalHead {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
}

.modalHead > div:not(.avatar) {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.modalHead strong {
  font-family: var(--font-display);
  font-size: 0.7rem;
}

.modalHead small {
  overflow: hidden;
  color: var(--text-muted);
  font-size: 0.56rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.avatar {
  position: relative;
  overflow: hidden;
  width: 50px;
  height: 50px;
  flex: 0 0 auto;
  border-radius: 14px;
}

.avatar img {
  object-fit: cover;
  object-position: center 40%;
  transform: scale(1.35);
}

.media {
  position: relative;
  width: 100%;
  max-height: 400px;
  aspect-ratio: 8 / 5;
  background: var(--surface-inset);
}

.media iframe,
.media video {
  width: 100%;
  height: 100%;
  border: 0;
}

.media video {
  object-fit: cover;
}

.copy {
  padding: 17px 20px;
}

.copy h2 {
  margin: 0;
  font-size: 1rem;
}

.copy p {
  margin: 4px 0 0;
  color: var(--text-muted);
  font-size: 0.65rem;
}

.copy a {
  display: inline-block;
  margin-top: 10px;
  font-size: 0.62rem;
}

.close {
  display: grid;
  width: 36px;
  height: 36px;
  margin-left: auto;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 50%;
  color: var(--text-muted);
  background: var(--surface-2);
  font-size: 1.2rem;
  cursor: pointer;
}

@media (max-width: 620px) {
  .backdrop { padding: 0; }

  .modal {
    width: 100vw;
    height: 100vh;
    max-height: none;
    border: 0;
    border-radius: 0;
  }
}
```

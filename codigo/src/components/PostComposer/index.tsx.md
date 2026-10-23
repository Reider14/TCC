# src/components/PostComposer/index.tsx

```tsx
"use client";

import styles from "./PostComposer.module.css";
import Button from "@/components/Button";

type PostComposerProps = {
  initials?: string;
  showToast: (message: string) => void;
};

export default function PostComposer({ initials = "MF", showToast }: PostComposerProps) {
  return (
    <section className={styles.composer}>
      <div className={styles.composerTop}>
        <span className={styles.avatar}>{initials}</span>

        <button
          type="button"
          className={styles.composerInput}
          onClick={() => showToast("Criar publicação")}
        >
          Partilha um projeto, conquista, reflexão ou oportunidade...
        </button>
      </div>

      <div className={styles.composerActions}>
        <Button
          variant="ghost"
          size="small"
          className={styles.miniButton}
          onClick={() => showToast("Adicionar projeto")}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M3 5h7l2 3h9v12H3Z" />
          </svg>
          Projeto
        </Button>

        <Button
          variant="ghost"
          size="small"
          className={styles.miniButton}
          onClick={() => showToast("Adicionar imagem")}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8" cy="8" r="1.5" />
            <path d="m3 17 5-5 4 4 4-6 5 7" />
          </svg>
          Imagem
        </Button>

        <Button
          variant="primary"
          size="small"
          onClick={() => showToast("Publicação criada")}
        >
          Publicar
        </Button>
      </div>
    </section>
  );
}
```

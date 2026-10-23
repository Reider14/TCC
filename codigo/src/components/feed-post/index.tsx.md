# src/components/feed-post/index.tsx

```tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/Button";
import type { FeedPostData } from "@/db/data/feed-post";
import PostIcon from "./icons";
import styles from "./styles.module.css";

type FeedPostProps = {
  post: FeedPostData;
  showToast: (message: string) => void;
};

export default function FeedPost({ post, showToast }: FeedPostProps) {
  const [reacted, setReacted] = useState(false);
  const [saved, setSaved] = useState(false);
  const { id, author, content, hashtags, cover, metrics } = post;
  const reactions = metrics.reactions + Number(reacted);

  return (
    <article className={styles.post} aria-labelledby={`post-author-${id}`}>
      <header className={styles.header}>
        <span aria-hidden="true" className={styles.avatar}>
          {author.initials}
        </span>
        <div className={styles.author}>
          <strong id={`post-author-${id}`}>{author.name}</strong>
          <p>{author.meta}</p>
        </div>
        <Button
          variant="ghost"
          size="small"
          aria-label={`Mais opções da publicação de ${author.name}`}
          onClick={() => showToast("Opções da publicação")}
        >
          ···
        </Button>
      </header>

      <p className={styles.copy}>
        {content.map((part, index) =>
          part.bold ? <strong key={index}>{part.text}</strong> : part.text,
        )}
        {hashtags.length > 0 && <span> {hashtags.join(" ")}</span>}
      </p>

      <Image
        className={styles.cover}
        src={cover.src}
        alt={cover.alt}
        sizes="(max-width: 650px) 100vw, 618px"
      />

      <footer className={styles.actions}>
        <Button
          variant="ghost"
          size="small"
          icon={<PostIcon name="heart" />}
          aria-label={`Reagir: ${reactions} reações`}
          aria-pressed={reacted}
          onClick={() => setReacted((current) => !current)}
        >
          {reactions}
        </Button>
        <Button
          variant="ghost"
          size="small"
          icon={<PostIcon name="comment" />}
          aria-label={`${metrics.comments} comentários`}
          onClick={() => showToast("Comentários")}
        >
          {metrics.comments}
        </Button>
        <Button
          variant="ghost"
          size="small"
          icon={<PostIcon name="share" />}
          aria-label={`Partilhar: ${metrics.shares} partilhas`}
          onClick={() => showToast("Partilhar publicação")}
        >
          {metrics.shares}
        </Button>
        <Button
          variant="ghost"
          size="small"
          icon={<PostIcon name="bookmark" />}
          aria-label={saved ? "Remover dos guardados" : "Guardar publicação"}
          aria-pressed={saved}
          onClick={() => setSaved((current) => !current)}
        />
      </footer>
    </article>
  );
}
```

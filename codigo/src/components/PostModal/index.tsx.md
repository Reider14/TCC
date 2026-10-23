# src/components/PostModal/index.tsx

```tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import profilePhoto from "@/assets/images/profile/reider-guilherme-profile.jpg";
import type { ProfilePost } from "@/db/data/profile-posts";
import styles from "./styles.module.css";

type PostModalProps = {
  post: ProfilePost | null;
  onClose: () => void;
};

export default function PostModal({ post, onClose }: PostModalProps) {
  useEffect(() => {
    if (!post) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose, post]);

  if (!post) return null;

  return (
    <div className={styles.backdrop} role="presentation" onMouseDown={onClose}>
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-post-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className={styles.modalHead}>
          <div className={styles.avatar}>
            <Image src={profilePhoto} alt="Reider Guilherme" fill sizes="50px" />
          </div>
          <div>
            <strong>Reider Guilherme</strong>
            <small>{post.author} · {post.source}</small>
          </div>
          <button type="button" className={styles.close} aria-label="Fechar publicação" onClick={onClose}>×</button>
        </div>

        <div className={styles.media}>
          {post.kind === "youtube" ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${post.videoId}?autoplay=1`}
              title={post.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video src={post.videoUrl} controls autoPlay playsInline />
          )}
        </div>

        <div className={styles.copy}>
          <h2 id="profile-post-title">{post.title}</h2>
          <p>{post.author} · {post.source}</p>
          <a href={post.url} target="_blank" rel="noreferrer">
            {post.kind === "youtube" ? "Abrir no YouTube" : "Abrir na Apple Careers"}
          </a>
        </div>
      </section>
    </div>
  );
}
```

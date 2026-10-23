# src/components/ProfilePosts/index.tsx

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import PostModal from "@/components/PostModal";
import { profilePosts, type ProfilePost } from "@/db/data/profile-posts";
import styles from "./styles.module.css";

type ProfilePostsProps = {
  showToast?: (message: string) => void;
};

export default function ProfilePosts({ showToast }: ProfilePostsProps) {
  const [opened, setOpened] = useState<ProfilePost | null>(null);

  return (
    <>
      <section className={styles.feed} aria-labelledby="profile-posts">
        <div className={styles.feedHead}>
          <h2 className={styles.sectionTitle} id="profile-posts">Publicações</h2>
          <button type="button" onClick={() => showToast?.("Todas as publicações")}>Ver todas</button>
        </div>

        <div className={styles.grid}>
          {profilePosts.map((post) => (
            <button className={styles.tile} type="button" key={post.id} onClick={() => setOpened(post)}>
              {post.kind === "youtube" ? (
                <Image className={styles.media} src={post.thumbnail} alt={post.title} fill sizes="(max-width: 560px) 33vw, 350px" />
              ) : (
                <video className={styles.media} src={`${post.videoUrl}#t=0.1`} muted playsInline preload="auto" aria-label={post.title} />
              )}
              <span className={styles.mark} aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7Z" /></svg>
              </span>
              <span className={styles.caption}>
                <strong>{post.title}</strong>
                <small>{post.author} · {post.source}</small>
              </span>
            </button>
          ))}
        </div>
      </section>

      <PostModal key={opened?.id} post={opened} onClose={() => setOpened(null)} />
    </>
  );
}
```

# src/app/(platform)/page.tsx

```tsx
"use client";

import { useEffect, useState } from "react";
import FeedPost from "@/components/feed-post";
import Heading from "@/components/Heading";
import PostComposer from "@/components/PostComposer";
import { joaoPost } from "@/db/data/feed-post";
import styles from "./page.module.css";

export default function Home() {
  const [toast, setToast] = useState<{ message: string } | null>(null);

  function showToast(message: string) {
    setToast({ message });
  }

  useEffect(() => {
    if (!toast) return;
    const timeout = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timeout);
  }, [toast]);

  return (
    <div className={styles.feed}>
      <Heading
        className={styles.heading}
        title="O teu feed"
        description="Pessoas, projetos e oportunidades relevantes para o teu percurso."
      />
      <div className={styles.composer}>
        <PostComposer showToast={showToast} />
      </div>
      <FeedPost post={joaoPost} showToast={showToast} />
      {toast && (
        <div role="status" className={styles.toast}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
```

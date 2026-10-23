# src/app/(platform)/layout.tsx

```tsx
import type { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import styles from "./styles.module.css";

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.platform}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
```

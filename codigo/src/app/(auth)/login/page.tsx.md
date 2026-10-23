# src/app/(auth)/login/page.tsx

```tsx
"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import styles from "./styles.module.css";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="login-title">
        <span className={styles.brand}>UniVerse</span>
        <h1 id="login-title">Bem-vindo de volta</h1>
        <p>Entra para continuar ligado à tua comunidade.</p>
        <form onSubmit={(event) => { event.preventDefault(); router.push("/"); }} className={styles.form}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="O teu email" required />
          <label htmlFor="password">Palavra-passe</label>
          <input id="password" name="password" type="password" autoComplete="current-password" placeholder="A tua palavra-passe" required />
          <Button type="submit">Iniciar sessão</Button>
        </form>
      </section>
    </main>
  );
}
```

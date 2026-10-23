# src/app/layout.tsx

```tsx
import styles from "./styles.module.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/global.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UniVerse",
  description: "O teu ecossitema universitário",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      data-theme="light"
      className={`${inter.variable} ${spaceGrotesk.variable} ${styles.document}`}
    >
      <body className={styles.body}>{children}</body>
    </html>
  );
}
```

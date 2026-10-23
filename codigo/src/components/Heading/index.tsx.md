# src/components/Heading/index.tsx

```tsx
import styles from "./styles.module.css";

export type HeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export default function Heading({
  title,
  description,
  className,
}: HeadingProps) {
  return (
    <header className={`${styles.header}${className ? ` ${className}` : ""}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </header>
  );
}
```

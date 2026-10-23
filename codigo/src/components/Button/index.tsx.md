# src/components/Button/index.tsx

```tsx
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./styles.module.css";

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
};

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  icon,
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]}${className ? ` ${className}` : ""}`}
    >
      {icon && <span aria-hidden="true" className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}
```

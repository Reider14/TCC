# src/components/SearchBar/index.tsx

```tsx
"use client";

import { useEffect, useRef } from "react";
import type { FormEvent } from "react";
import styles from "./styles.module.css";

type SearchBarProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  error?: string;
  className?: string;
};

export default function SearchBar({
  id,
  label,
  placeholder,
  value,
  onChange,
  onSubmit,
  error,
  className,
}: SearchBarProps) {
  const input = useRef<HTMLInputElement>(null);
  const errorId = `${id}-error`;

  useEffect(() => {
    function focusSearch(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        input.current?.focus();
      }
    }

    document.addEventListener("keydown", focusSearch);
    return () => document.removeEventListener("keydown", focusSearch);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.();
  }

  return (
    <form
      role="search"
      onSubmit={submit}
      className={`${styles.search}${className ? ` ${className}` : ""}`}
    >
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputWrap}>
        <button type="submit" aria-label={label} className={styles.searchIcon}>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <circle cx="10.5" cy="10.5" r="7.5" />
            <path d="m16 16 5 5" />
          </svg>
        </button>
        <input
          ref={input}
          id={id}
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
        <button
          type="button"
          aria-label="Focar pesquisa, Control ou Command K"
          onClick={() => input.current?.focus()}
          className={styles.shortcut}
        >
          <kbd>Ctrl K</kbd>
        </button>
      </div>
      {error && (
        <p id={errorId} role="alert" className={styles.error}>
          {error}
        </p>
      )}
    </form>
  );
}
```

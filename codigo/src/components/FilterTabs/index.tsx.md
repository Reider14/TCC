# src/components/FilterTabs/index.tsx

```tsx
import styles from "./styles.module.css";

export type FilterItem<Value extends string> = {
  value: Value;
  label: string;
  icon: string;
};

type FilterTabsProps<Value extends string> = {
  items: readonly FilterItem<Value>[];
  value: Value;
  onChange: (value: Value) => void;
  ariaLabel: string;
  className?: string;
};

export default function FilterTabs<Value extends string>({
  items,
  value,
  onChange,
  ariaLabel,
  className,
}: FilterTabsProps<Value>) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={`${styles.tabs}${className ? ` ${className}` : ""}`}
    >
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          aria-pressed={value === item.value}
          className={styles.tab}
          onClick={() => onChange(item.value)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d={item.icon} />
          </svg>
          {item.label}
        </button>
      ))}
    </div>
  );
}
```

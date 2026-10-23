# src/components/feed-post/icons.tsx

```tsx
const paths = {
  heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
  comment: "M21 11.5a9 9 0 0 1-9 9 10 10 0 0 1-4-.8L3 21l1.3-5a9 9 0 1 1 16.7-4.5Z",
  bookmark: "M6 3h12v18l-6-4-6 4Z",
};

export default function PostIcon({ name }: { name: keyof typeof paths | "share" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {name === "share" ? (
        <>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" />
        </>
      ) : (
        <path d={paths[name]} />
      )}
    </svg>
  );
}
```

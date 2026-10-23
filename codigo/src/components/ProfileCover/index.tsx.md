# src/components/ProfileCover/index.tsx

```tsx
import Image, { type StaticImageData } from "next/image";
import Button from "@/components/Button";
import styles from "./styles.module.css";

type ProfileCoverProps = {
  image: StaticImageData;
  alt: string;
  onEdit: () => void;
};

export default function ProfileCover({ image, alt, onEdit }: ProfileCoverProps) {
  return (
    <div className={styles.cover}>
      <Image src={image} alt={alt} fill preload sizes="(max-width: 1120px) 100vw, 814px" />
      <Button
        variant="secondary"
        size="small"
        className={styles.edit}
        icon={
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
          </svg>
        }
        onClick={onEdit}
      >
        Editar capa
      </Button>
    </div>
  );
}
```

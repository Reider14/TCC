# src/components/ProfileHeader/index.tsx

```tsx
import Image, { type StaticImageData } from "next/image";
import ProfileCover from "@/components/ProfileCover";
import { studentProfile } from "@/db/data/student-profile";
import styles from "./styles.module.css";

type ProfileHeaderProps = {
  cover: StaticImageData;
  avatar: StaticImageData;
  showToast: (message: string) => void;
};

function Icon({ path }: { path: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );
}

export default function ProfileHeader({ cover, avatar, showToast }: ProfileHeaderProps) {
  return (
    <header className={styles.header}>
      <ProfileCover
        image={cover}
        alt="Participantes do Re!nventa Hackathon a trabalhar em equipa"
        onEdit={() => showToast("Editar capa")}
      />

      <div className={styles.body}>
        <div className={styles.avatarWrap}>
          <div className={styles.crest}>
            <Image
              src={avatar}
              alt={`Fotografia de ${studentProfile.name}`}
              fill
              sizes="(max-width: 860px) 112px, 140px"
            />
          </div>
          <button
            type="button"
            className={styles.avatarEdit}
            aria-label="Alterar foto de perfil"
            onClick={() => showToast("Alterar foto de perfil")}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M14.5 5 13 3h-2L9.5 5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Z" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          </button>
        </div>

        <div className={styles.identity}>
          <h1 className={styles.name}>
            {studentProfile.name}
            <svg className={styles.verified} viewBox="0 0 24 24" aria-label="Perfil verificado" role="img">
              <path fill="var(--accent)" d="m12 1.8 2.4 1.9 3-.3 1 2.9 2.6 1.6-1 2.9 1 2.9-2.6 1.6-1 2.9-3-.3-2.4 1.9-2.4-1.9-3 .3-1-2.9L3 13.7l1-2.9-1-2.9 2.6-1.6 1-2.9 3 .3z" />
              <path d="m8.6 12.1 2.3 2.3 4.5-4.7" fill="none" stroke="var(--on-accent)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h1>

          <p className={styles.tagline}>{studentProfile.tagline}</p>

          <ul className={styles.meta}>
            {studentProfile.meta.map((item) => (
              <li key={item.label}>
                <Icon path={item.icon} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.connect} onClick={() => showToast("Conectar — demonstração da interface")}>
            Conectar
          </button>
          <button type="button" className={styles.ghost} onClick={() => showToast("Mensagem — demonstração da interface")}>
            Mensagem
          </button>
          <button type="button" className={styles.more} aria-label="Mais opções" onClick={() => showToast("Mais opções")}>
            <Icon path="M5 12h.01M12 12h.01M19 12h.01" />
          </button>
        </div>
      </div>
    </header>
  );
}
```

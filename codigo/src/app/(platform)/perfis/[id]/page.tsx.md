# src/app/(platform)/perfis/[id]/page.tsx

```tsx
"use client";

import { useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import ProfilePosts from "@/components/ProfilePosts";
import profileCover from "@/assets/images/profile/reinventa-hackathon-cover.jpg";
import profilePhoto from "@/assets/images/profile/reider-guilherme-profile.jpg";
import styles from "./styles.module.css";

function Icon({ path }: { path: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );
}

export default function ProfilePage() {
  const [notice, setNotice] = useState("");

  return (
    <main className={styles.page}>
      <div className={styles.profileGrid}>
        <div className={styles.mainColumn}>
          <ProfileHeader cover={profileCover} avatar={profilePhoto} showToast={setNotice} />
          <ProfilePosts showToast={setNotice} />
        </div>

        <aside className={styles.profileAside}>
          <section className={styles.panel} aria-labelledby="about-title">
            <div className={styles.panelHead}>
              <h2 id="about-title">Sobre mim</h2>
              <button type="button" onClick={() => setNotice("Editar apresentação")}>Editar</button>
            </div>
            <p className={styles.about}>
              Estudante interessado em criar produtos digitais úteis para a comunidade académica. Gosto de transformar ideias em interfaces simples e acessíveis.
            </p>
            <div className={styles.infoList}>
              <span><Icon path="m3 8 9-5 9 5-9 5ZM6 11v6c4 3 8 3 12 0v-6" />Engenharia Informática</span>
              <span><Icon path="M4 21V5l8-3 8 3v16M9 9h6M9 13h6M9 17h6" />Universidade do Mindelo</span>
              <span><Icon path="M12 21S4 15 4 9a8 8 0 1 1 16 0c0 6-8 12-8 12Z" />Mindelo, Cabo Verde</span>
              <span className={styles.available}><i />Disponível para colaborar</span>
            </div>
          </section>

          <section className={styles.panel} aria-labelledby="skills-title">
            <div className={styles.panelHead}>
              <h2 id="skills-title">Competências</h2>
              <button type="button" onClick={() => setNotice("Editar competências")}>Editar</button>
            </div>
            <div className={styles.skills}>
              {["React", "TypeScript", "Next.js", "UI/UX", "Node.js", "Figma"].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          <section className={styles.panel} aria-labelledby="education-title">
            <div className={styles.panelHead}>
              <h2 id="education-title">Formação</h2>
              <button type="button" onClick={() => setNotice("Editar formação")}>Editar</button>
            </div>
            <div className={styles.education}>
              <span aria-hidden="true">UM</span>
              <div>
                <strong>Engenharia Informática</strong>
                <p>Universidade do Mindelo</p>
                <small>2023 — presente</small>
              </div>
            </div>
          </section>
        </aside>
      </div>

      {notice && (
        <button type="button" className={styles.notice} onClick={() => setNotice("")}>
          {notice}
        </button>
      )}
    </main>
  );
}
```

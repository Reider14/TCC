# src/components/ProjectCard/index.tsx

```tsx
"use client";

import { useState } from "react";
import type { Project } from "@/db/data/projects";
import styles from "./styles.module.css";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [supported, setSupported] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.cover} data-tone={project.tone}>
        <span className={styles.status}>{project.status}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d={project.icon} />
        </svg>
        <small>{project.areaLabel}</small>
      </div>

      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <div className={styles.footer}>
          <div className={styles.members} aria-label={`${project.members.length + project.extraMembers} membros`}>
            <span className={styles.avatars} aria-hidden="true">
              {project.members.map((member) => <i key={member}>{member}</i>)}
            </span>
            <small>+{project.extraMembers}</small>
          </div>

          <button
            type="button"
            className={`${styles.support}${supported ? ` ${styles.supported}` : ""}`}
            aria-label={supported ? "Retirar apoio" : "Apoiar projeto"}
            aria-pressed={supported}
            onClick={() => setSupported((current) => !current)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M20.8 5.5a5 5 0 0 0-7.1 0L12 7.2l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.4a5 5 0 0 0 0-7.1Z" />
            </svg>
            {project.supports + (supported ? 1 : 0)}
          </button>
        </div>
      </div>
    </article>
  );
}
```

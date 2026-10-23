# src/components/OpportunityCard/index.tsx

```tsx
"use client";

import { useState } from "react";
import Button from "@/components/Button";
import type { Opportunity } from "@/db/data/opportunities";
import styles from "./styles.module.css";

const icons = {
  location: "M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0ZM12 7v6M9 10h6",
  mode: "M3 5h18v12H3ZM8 21h8M12 17v4",
  duration: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 6v6l4 2",
  bookmark: "M6 3h12v18l-6-4-6 4Z",
};

function Icon({ name }: { name: keyof typeof icons }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={icons[name]} />
    </svg>
  );
}

type OpportunityCardProps = {
  opportunity: Opportunity;
  onApply: (opportunity: Opportunity) => void;
};

export default function OpportunityCard({
  opportunity,
  onApply,
}: OpportunityCardProps) {
  const [saved, setSaved] = useState(false);

  return (
    <article className={styles.card}>
      <span className={styles.logo} data-tone={opportunity.tone} aria-hidden="true">
        {opportunity.initials}
      </span>

      <div className={styles.body}>
        <h3>{opportunity.title}</h3>
        <p className={styles.company}>{opportunity.organization}</p>

        <div className={styles.meta}>
          <span><Icon name="location" />{opportunity.location}</span>
          <span><Icon name="mode" />{opportunity.mode}</span>
          <span><Icon name="duration" />{opportunity.duration}</span>
        </div>

        <p className={styles.description}>{opportunity.description}</p>
        <div className={styles.tags}>
          {opportunity.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>

      <div className={styles.side}>
        <div className={styles.sideTop}>
          <span className={styles.badge}>{opportunity.status}</span>
          <span className={styles.published}>{opportunity.publishedAt}</span>
          <button
            type="button"
            className={`${styles.bookmark}${saved ? ` ${styles.saved}` : ""}`}
            aria-label={saved ? "Remover dos guardados" : "Guardar oportunidade"}
            aria-pressed={saved}
            onClick={() => setSaved((current) => !current)}
          >
            <Icon name="bookmark" />
          </button>
        </div>

        <Button
          variant="secondary"
          size="small"
          className={styles.apply}
          onClick={() => onApply(opportunity)}
        >
          Candidatar-se
        </Button>

        <div className={styles.candidates}>
          <div className={styles.avatars} aria-hidden="true">
            {opportunity.candidateInitials.map((initials) => (
              <i key={initials}>{initials}</i>
            ))}
          </div>
          <span>+{opportunity.applicants} candidatos</span>
        </div>
      </div>
    </article>
  );
}
```

# src/components/PartnerCompanies/index.tsx

```tsx
import type { PartnerCompany } from "@/db/data/partner-companies";
import styles from "./styles.module.css";

type PartnerCompaniesProps = {
  companies: PartnerCompany[];
  onViewAll?: () => void;
};

export default function PartnerCompanies({
  companies,
  onViewAll,
}: PartnerCompaniesProps) {
  return (
    <section className={styles.panel} aria-labelledby="partner-companies-title">
      <div className={styles.head}>
        <h2 id="partner-companies-title">Empresas parceiras</h2>
        <button type="button" onClick={onViewAll}>Ver todas</button>
      </div>

      <ul className={styles.list}>
        {companies.map((company) => (
          <li key={company.name}>
            <a href={company.website} target="_blank" rel="noreferrer">
              <span className={styles.logo} data-tone={company.tone} aria-hidden="true">
                {company.initials}
              </span>
              <span className={styles.company}>
                <strong>{company.name}</strong>
                <small>{company.category}</small>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.pagination} aria-hidden="true">
        <i className={styles.active} />
        <i />
        <i />
      </div>
    </section>
  );
}
```

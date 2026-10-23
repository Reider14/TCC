# src/components/OpportunityFilterPanel/index.tsx

```tsx
import Button from "@/components/Button";
import type { OpportunityFilter } from "@/db/data/opportunities";
import styles from "./styles.module.css";

export type OpportunityFilterValues = {
  type: OpportunityFilter;
  area: string;
  location: string;
  mode: string;
  date: "any" | "day" | "week" | "month";
};

type FilterOption = {
  value: string;
  label: string;
};

type OpportunityFilterPanelProps = {
  value: OpportunityFilterValues;
  types: FilterOption[];
  areas: string[];
  locations: string[];
  modes: string[];
  onChange: (value: OpportunityFilterValues) => void;
  onApply: () => void;
  onClear: () => void;
};

export const emptyOpportunityFilters: OpportunityFilterValues = {
  type: "all",
  area: "all",
  location: "all",
  mode: "all",
  date: "any",
};

export default function OpportunityFilterPanel({
  value,
  types,
  areas,
  locations,
  modes,
  onChange,
  onApply,
  onClear,
}: OpportunityFilterPanelProps) {
  function update<Key extends keyof OpportunityFilterValues>(
    key: Key,
    nextValue: OpportunityFilterValues[Key],
  ) {
    onChange({ ...value, [key]: nextValue });
  }

  return (
    <aside className={styles.panel} aria-labelledby="opportunity-filter-title">
      <div className={styles.head}>
        <h2 id="opportunity-filter-title">Filtrar oportunidades</h2>
        <button type="button" onClick={onClear}>Limpar filtros</button>
      </div>

      <div className={styles.fields}>
        <label>
          <span>Tipo</span>
          <select value={value.type} onChange={(event) => update("type", event.target.value as OpportunityFilter)}>
            {types.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Área</span>
          <select value={value.area} onChange={(event) => update("area", event.target.value)}>
            <option value="all">Todas as áreas</option>
            {areas.map((area) => <option key={area} value={area}>{area}</option>)}
          </select>
        </label>

        <label>
          <span>Localização</span>
          <select value={value.location} onChange={(event) => update("location", event.target.value)}>
            <option value="all">Qualquer lugar</option>
            {locations.map((location) => <option key={location} value={location}>{location}</option>)}
          </select>
        </label>

        <label>
          <span>Modalidade</span>
          <select value={value.mode} onChange={(event) => update("mode", event.target.value)}>
            <option value="all">Qualquer modalidade</option>
            {modes.map((mode) => <option key={mode} value={mode}>{mode}</option>)}
          </select>
        </label>

        <label>
          <span>Data de publicação</span>
          <select value={value.date} onChange={(event) => update("date", event.target.value as OpportunityFilterValues["date"])}>
            <option value="any">Qualquer período</option>
            <option value="day">Últimas 24 horas</option>
            <option value="week">Últimos 7 dias</option>
            <option value="month">Últimos 30 dias</option>
          </select>
        </label>
      </div>

      <Button className={styles.apply} size="large" onClick={onApply}>
        Aplicar filtros
      </Button>
    </aside>
  );
}
```

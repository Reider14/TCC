# src/app/(platform)/oportunidades/[id]/page.tsx

```tsx
"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";
import FilterTabs from "@/components/FilterTabs";
import Heading from "@/components/Heading";
import OpportunityCard from "@/components/OpportunityCard";
import OpportunityFilterPanel, {
  emptyOpportunityFilters,
  type OpportunityFilterValues,
} from "@/components/OpportunityFilterPanel";
import PartnerCompanies from "@/components/PartnerCompanies";
import SearchBar from "@/components/SearchBar";
import {
  opportunities,
  opportunityFilters,
  type Opportunity,
  type OpportunityFilter,
} from "@/db/data/opportunities";
import { partnerCompanies } from "@/db/data/partner-companies";
import styles from "./styles.module.css";

function Icon({ path }: { path: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );
}

const areas = [...new Set(opportunities.map((opportunity) => opportunity.area))];
const locations = [...new Set(opportunities.map((opportunity) => opportunity.location))];
const modes = [...new Set(opportunities.map((opportunity) => opportunity.mode))];

export default function OpportunitiesPage() {
  const [filter, setFilter] = useState<OpportunityFilter>("all");
  const [draftFilters, setDraftFilters] =
    useState<OpportunityFilterValues>(emptyOpportunityFilters);
  const [appliedFilters, setAppliedFilters] =
    useState<OpportunityFilterValues>(emptyOpportunityFilters);
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const [sort, setSort] = useState("recent");

  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("pt");
    const maximumAge = {
      any: Number.POSITIVE_INFINITY,
      day: 1440,
      week: 10080,
      month: 43200,
    }[appliedFilters.date];

    const filtered = opportunities.filter((opportunity) => {
      const matchesType = filter === "all" || opportunity.type === filter;
      const matchesArea =
        appliedFilters.area === "all" || opportunity.area === appliedFilters.area;
      const matchesLocation =
        appliedFilters.location === "all" ||
        opportunity.location === appliedFilters.location;
      const matchesMode =
        appliedFilters.mode === "all" || opportunity.mode === appliedFilters.mode;
      const matchesDate = opportunity.publishedMinutes <= maximumAge;
      const searchable =
        `${opportunity.area} ${opportunity.title} ${opportunity.organization} ${opportunity.location} ${opportunity.tags.join(" ")}`
          .toLocaleLowerCase("pt");

      return (
        matchesType &&
        matchesArea &&
        matchesLocation &&
        matchesMode &&
        matchesDate &&
        searchable.includes(term)
      );
    });

    return filtered.toSorted((first, second) => {
      if (sort === "applicants") return second.applicants - first.applicants;
      if (sort === "title") return first.title.localeCompare(second.title, "pt");
      return first.publishedMinutes - second.publishedMinutes;
    });
  }, [appliedFilters, filter, query, sort]);

  function selectType(nextFilter: OpportunityFilter) {
    setFilter(nextFilter);
    setDraftFilters((current) => ({ ...current, type: nextFilter }));
    setAppliedFilters((current) => ({ ...current, type: nextFilter }));
  }

  function applyFilters() {
    setAppliedFilters(draftFilters);
    setFilter(draftFilters.type);
  }

  function clearFilters() {
    setDraftFilters(emptyOpportunityFilters);
    setAppliedFilters(emptyOpportunityFilters);
    setFilter("all");
  }

  function apply(opportunity: Opportunity) {
    setNotice(`Candidatura: ${opportunity.title}`);
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Heading
          className={styles.heading}
          title="Oportunidades"
          description="Encontra estágios, empregos, bolsas e projetos perfeitos para ti."
        />

        <SearchBar
          id="opportunities-search"
          label="Pesquisar oportunidades"
          placeholder="Pesquisar oportunidades, empresas..."
          value={query}
          onChange={setQuery}
          className={styles.search}
        />

        <Button
          variant="primary"
          size="large"
          icon={<Icon path="M12 5v14M5 12h14" />}
          onClick={() => setNotice("Criar oportunidade")}
        >
          Publicar
        </Button>
      </div>

      <FilterTabs
        items={opportunityFilters}
        value={filter}
        onChange={selectType}
        ariaLabel="Filtrar oportunidades"
        className={styles.filters}
      />

      <div className={styles.resultsLayout}>
        <section className={styles.section} aria-label="Lista de oportunidades">
          <div className={styles.listHead}>
            <h2>Oportunidades em destaque</h2>
            <label className={styles.sort}>
              <span>Ordenar por:</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="recent">Mais recentes</option>
                <option value="applicants">Mais candidaturas</option>
                <option value="title">Título</option>
              </select>
            </label>
          </div>

          {results.length > 0 ? (
            <div className={styles.list} aria-live="polite">
              {results.map((opportunity) => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  onApply={apply}
                />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              Não encontrámos oportunidades com estes filtros.
            </div>
          )}
        </section>

        <div className={styles.sideColumn}>
          <OpportunityFilterPanel
            value={draftFilters}
            types={opportunityFilters.map(({ value, label }) => ({ value, label }))}
            areas={areas}
            locations={locations}
            modes={modes}
            onChange={setDraftFilters}
            onApply={applyFilters}
            onClear={clearFilters}
          />

          <PartnerCompanies
            companies={partnerCompanies}
            onViewAll={() => setNotice("Ver todas as empresas parceiras")}
          />
        </div>
      </div>

      {notice && (
        <button className={styles.notice} type="button" onClick={() => setNotice("")}>
          {notice}
        </button>
      )}
    </div>
  );
}
```

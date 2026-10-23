# src/app/(platform)/pesquisa/page.tsx

```tsx
"use client";

import { useRef, useState } from "react";
import Button from "@/components/Button";
import FilterTabs from "@/components/FilterTabs";
import Heading from "@/components/Heading";
import SearchBar from "@/components/SearchBar";
import { findSearchResults, resultLabels, searchFilters } from "@/db/data/search-results";
import type { SearchFilter, SearchResult } from "@/db/data/search-results";
import styles from "./styles.module.css";

const filterIcons: Record<SearchFilter, string> = {
  all: "M3 3h6v6H3ZM15 3h6v6h-6ZM3 15h6v6H3ZM15 15h6v6h-6Z",
  student: "m2 8 10-5 10 5-10 5ZM6 10v7c4 3 8 3 12 0v-7M22 8v8",
  company: "M4 21V3h12v18M16 9h4v12M2 21h20M8 7h4M8 11h4M8 15h4M9 21v-3h2v3",
  project: "M3 5h7l2 3h9v12H3Z",
  opportunity: "M3 7h18v14H3ZM8 7V3h8v4M3 12h18M10 12v3h4v-3",
};

const filterItems = searchFilters.map((item) => ({
  ...item,
  icon: filterIcons[item.value],
}));

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<SearchFilter>("all");
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<SearchResult | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const results = findSearchResults(query, filter);

  function search() {
    if (!input.trim()) {
      setError("Escreve um nome ou título para pesquisar.");
      return;
    }
    setError("");
    setQuery(input.trim());
  }

  function openResult(result: SearchResult) {
    setSelected(result);
    dialog.current?.showModal();
  }

  return (
    <div className={styles.page}>
      <div className={styles.topbar}>
        <Heading title="Pesquisar" description="Descobre estudantes, empresas, projetos e oportunidades." className={styles.heading} />

        <SearchBar
          id="platform-search"
          label="Pesquisar na plataforma"
          placeholder="Pesquisar na comunidade..."
          value={input}
          onChange={(value) => {
            setInput(value);
            setError("");
            if (!value.trim()) setQuery("");
          }}
          onSubmit={search}
          error={error}
          className={styles.search}
        />
      </div>

      <FilterTabs
        items={filterItems}
        value={filter}
        onChange={setFilter}
        ariaLabel="Filtrar resultados por tipo"
        className={styles.filters}
      />

      <section aria-label="Resultados da pesquisa">
        <p role="status" className={styles.summary}>
          {query ? `${results.length} ${results.length === 1 ? "resultado" : "resultados"} para “${query}”` : "Pesquisa na comunidade UniVerse"}
        </p>
        {!query ? (
          <div className={styles.empty}>
            <span aria-hidden="true" className={styles.emptyIcon}>⌕</span>
            <h2>Uma pesquisa, novas ligações</h2>
            <p>Procura estudantes e empresas pelo nome, ou projetos e oportunidades pelo título.</p>
            <div className={styles.suggestions}>
              {["João", "Campus", "TechPark", "Estágio"].map((term) => (
                <button key={term} type="button" onClick={() => { setInput(term); setQuery(term); setError(""); }}>{term} ↗</button>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className={styles.empty}>
            <h2>Não encontrámos resultados</h2>
            <p>Tenta outro termo{filter !== "all" ? " ou seleciona Todos para pesquisar em todas as categorias" : ""}.</p>
            {filter !== "all" && <Button variant="secondary" size="small" onClick={() => setFilter("all")}>Ver todos os tipos</Button>}
          </div>
        ) : (
          <ul className={styles.results}>
            {results.map((result) => (
              <li key={result.id}>
                <button type="button" className={styles.result} onClick={() => openResult(result)}>
                  <span aria-hidden="true" className={styles.avatar}>{result.initials}</span>
                  <span className={styles.resultBody}>
                    <span className={styles.kind}>{resultLabels[result.type]}</span>
                    <strong>{result.title}</strong>
                    <span className={styles.subtitle}>{result.subtitle}</span>
                  </span>
                  <span aria-hidden="true" className={styles.arrow}>↗</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <dialog ref={dialog} className={styles.dialog} aria-labelledby="result-title">
        {selected && (
          <>
            <div className={styles.dialogHeader}>
              <span className={styles.kind}>{resultLabels[selected.type]}</span>
              <Button variant="ghost" size="small" aria-label="Fechar detalhe" onClick={() => dialog.current?.close()}>×</Button>
            </div>
            <h2 id="result-title">{selected.title}</h2>
            <p className={styles.subtitle}>{selected.subtitle}</p>
            <p>{selected.description}</p>
            <div className={styles.tags}>{selected.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </>
        )}
      </dialog>
    </div>
  );
}
```

# src/db/data/search-results.ts

```ts
export type SearchType = "student" | "company" | "project" | "opportunity";
export type SearchFilter = "all" | SearchType;

export type SearchResult = {
  id: string;
  type: SearchType;
  title: string;
  subtitle: string;
  initials: string;
  description: string;
  tags: string[];
};

export const searchFilters: { value: SearchFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "student", label: "Estudantes" },
  { value: "company", label: "Empresas" },
  { value: "project", label: "Projetos" },
  { value: "opportunity", label: "Oportunidades" },
];

export const resultLabels: Record<SearchType, string> = {
  student: "Estudante",
  company: "Empresa",
  project: "Projeto",
  opportunity: "Oportunidade",
};

export const searchResults: SearchResult[] = [
  {
    id: "joao-lopes",
    type: "student",
    title: "João Lopes",
    subtitle: "Design de Produto · UniMindelo",
    initials: "JL",
    description: "Estudante de Design de Produto, com interesse em criar experiências digitais para a comunidade académica. Responsável pelo projeto Campus Flow.",
    tags: ["UX Research", "Figma", "Product Design"],
  },
  {
    id: "techpark-cv",
    type: "company",
    title: "TechPark CV",
    subtitle: "Tecnologia e inovação · São Vicente",
    initials: "TP",
    description: "Empresa dedicada à tecnologia, ao produto digital e à inovação, com oportunidades para estudantes que querem começar o seu percurso profissional.",
    tags: ["Tecnologia", "Produto digital", "Inovação"],
  },
  {
    id: "campus-flow",
    type: "project",
    title: "Campus Flow",
    subtitle: "João Lopes · Design de Produto",
    initials: "CF",
    description: "Uma experiência simples para descobrir atividades, eventos e comunidades dentro da universidade.",
    tags: ["UX Research", "Figma", "Product Design"],
  },
  {
    id: "estagio-produto",
    type: "opportunity",
    title: "Programa de Estágio — Produto & Tecnologia",
    subtitle: "TechPark CV · São Vicente · Híbrido",
    initials: "TP",
    description: "Uma oportunidade para estudantes interessados em produto digital, tecnologia e inovação. Programa de estágio com duração de 3 a 6 meses.",
    tags: ["Estágio", "3–6 meses", "Híbrido"],
  },
];

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt").trim();
}

export function findSearchResults(term: string, filter: SearchFilter) {
  const query = normalize(term);
  if (!query) return [];

  return searchResults.filter((result) =>
    (filter === "all" || result.type === filter) && normalize(result.title).includes(query),
  );
}
```

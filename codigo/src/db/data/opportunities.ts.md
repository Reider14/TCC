# src/db/data/opportunities.ts

```ts
export type OpportunityType =
  | "internship"
  | "job"
  | "scholarship"
  | "paid-project"
  | "volunteering"
  | "freelance";

export type OpportunityFilter = "all" | OpportunityType;

export type Opportunity = {
  id: number;
  type: OpportunityType;
  area: string;
  title: string;
  organization: string;
  initials: string;
  tone: "blue" | "purple" | "green" | "orange";
  location: string;
  mode: string;
  duration: string;
  description: string;
  tags: string[];
  status: "Novo" | "Destaque";
  publishedAt: string;
  publishedMinutes: number;
  applicants: number;
  candidateInitials: string[];
};

export const opportunityFilters: {
  value: OpportunityFilter;
  label: string;
  icon: string;
}[] = [
  { value: "all", label: "Todas", icon: "M4 4h6v6H4ZM14 4h6v6h-6ZM4 14h6v6H4ZM14 14h6v6h-6Z" },
  { value: "internship", label: "Estágios", icon: "M4 8h16v12H4ZM9 8V4h6v4" },
  { value: "job", label: "Empregos", icon: "M5 3h14v18H5ZM9 7h6M9 11h6M9 15h4" },
  { value: "scholarship", label: "Bolsa de estudo", icon: "m2 8 10-5 10 5-10 5ZM6 10v7c4 3 8 3 12 0v-7" },
  { value: "paid-project", label: "Projetos pagos", icon: "M3 6h7l2 3h9v11H3Z" },
  { value: "volunteering", label: "Voluntariado", icon: "M20.8 5.5a5 5 0 0 0-7.1 0L12 7.2l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.4a5 5 0 0 0 0-7.1Z" },
  { value: "freelance", label: "Freelance", icon: "M20 21a8 8 0 0 0-16 0M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0" },
];

export const opportunities: Opportunity[] = [
  {
    id: 1,
    type: "internship",
    area: "Direito",
    title: "Estágio em Direito Empresarial",
    organization: "Legal CV",
    initials: "LC",
    tone: "purple",
    location: "Praia",
    mode: "Presencial",
    duration: "6 meses",
    description: "Apoia a equipa jurídica na análise de contratos, pesquisa legislativa e preparação de processos.",
    tags: ["Direito Comercial", "Contratos", "Pesquisa Jurídica"],
    status: "Novo",
    publishedAt: "Publicado há 2h",
    publishedMinutes: 120,
    applicants: 18,
    candidateInitials: ["AM", "JL", "SN", "DR"],
  },
  {
    id: 2,
    type: "internship",
    area: "Ortótica Dentária",
    title: "Estágio em Ortótica Dentária",
    organization: "Clínica Sorriso",
    initials: "CS",
    tone: "orange",
    location: "Mindelo",
    mode: "Presencial",
    duration: "4 meses",
    description: "Participa na preparação de aparelhos, acompanhamento clínico e organização do laboratório dentário.",
    tags: ["Ortótica", "Laboratório", "Saúde Oral"],
    status: "Novo",
    publishedAt: "Publicado há 5h",
    publishedMinutes: 300,
    applicants: 12,
    candidateInitials: ["LM", "TC", "IF", "MA"],
  },
  {
    id: 3,
    type: "job",
    area: "Enfermagem",
    title: "Enfermeiro/a Júnior",
    organization: "Hospital Baptista de Sousa",
    initials: "HB",
    tone: "green",
    location: "São Vicente",
    mode: "Por turnos",
    duration: "Tempo inteiro",
    description: "Integra uma equipa multidisciplinar e presta cuidados gerais aos pacientes em contexto hospitalar.",
    tags: ["Cuidados Gerais", "Urgência", "Saúde Comunitária"],
    status: "Destaque",
    publishedAt: "Publicado há 1 dia",
    publishedMinutes: 1440,
    applicants: 26,
    candidateInitials: ["ER", "MN", "CL", "JA"],
  },
  {
    id: 4,
    type: "internship",
    area: "Engenharia de Software",
    title: "Estágio em Engenharia de Software",
    organization: "TechPark CV",
    initials: "TP",
    tone: "blue",
    location: "Praia",
    mode: "Híbrido",
    duration: "6 meses",
    description: "Desenvolve produtos digitais para a comunidade académica com acompanhamento de uma equipa experiente.",
    tags: ["TypeScript", "React", "APIs"],
    status: "Novo",
    publishedAt: "Publicado há 2 dias",
    publishedMinutes: 2880,
    applicants: 34,
    candidateInitials: ["AL", "PG", "CM", "JP"],
  },
];
```

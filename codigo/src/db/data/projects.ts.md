# src/db/data/projects.ts

```ts
export type ProjectArea =
  | "software"
  | "law"
  | "nursing"
  | "dental"
  | "education"
  | "sustainability";

export type ProjectFilter =
  | "for-you"
  | "featured"
  | "recent"
  | "supported"
  | "members"
  | "mine";

export type Project = {
  id: number;
  title: string;
  area: ProjectArea;
  areaLabel: string;
  description: string;
  status: "À procura de membros" | "Em desenvolvimento" | "À procura de apoio";
  tone: "blue" | "green" | "purple" | "orange" | "cyan" | "red";
  icon: string;
  tags: string[];
  members: string[];
  extraMembers: number;
  supports: number;
  featured: boolean;
  recent: boolean;
  owned: boolean;
};

export const projectFilters: {
  value: ProjectFilter;
  label: string;
  icon: string;
}[] = [
  { value: "for-you", label: "Para ti", icon: "M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" },
  { value: "featured", label: "Em destaque", icon: "m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" },
  { value: "recent", label: "Recentes", icon: "M12 7v5l3 2M21 12a9 9 0 1 1-9-9" },
  { value: "supported", label: "Mais apoiados", icon: "m4 14 5-5 4 4 7-8M15 5h5v5" },
  { value: "members", label: "À procura de membros", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
  { value: "mine", label: "Os meus projetos", icon: "M9 11l2 2 4-4M4 4h16v16H4Z" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Campus Flow",
    area: "software",
    areaLabel: "Engenharia de Software",
    description: "Plataforma para descobrir eventos, projetos e comunidades dentro das universidades.",
    status: "À procura de membros",
    tone: "blue",
    icon: "M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14",
    tags: ["React", "Node.js", "UX"],
    members: ["JL", "RG", "AM"],
    extraMembers: 4,
    supports: 72,
    featured: true,
    recent: true,
    owned: false,
  },
  {
    id: 2,
    title: "Justiça Clara",
    area: "law",
    areaLabel: "Direito",
    description: "Conteúdos jurídicos simples para ajudar jovens a compreender direitos e deveres.",
    status: "Em desenvolvimento",
    tone: "purple",
    icon: "M12 3v18M7 6h10M5 9l-3 6h6L5 9Zm14 0-3 6h6l-3-6ZM8 21h8",
    tags: ["Direito", "Pesquisa", "Cidadania"],
    members: ["LC", "MD", "SF"],
    extraMembers: 2,
    supports: 54,
    featured: true,
    recent: false,
    owned: false,
  },
  {
    id: 3,
    title: "Cuidar+",
    area: "nursing",
    areaLabel: "Enfermagem",
    description: "Programa de educação e acompanhamento para prevenção de doenças crónicas.",
    status: "À procura de apoio",
    tone: "red",
    icon: "M12 21S4 16.5 4 10a4 4 0 0 1 7-2.6L12 9l1-1.6A4 4 0 0 1 20 10c0 6.5-8 11-8 11ZM9 13h6M12 10v6",
    tags: ["Saúde", "Comunidade", "Prevenção"],
    members: ["ER", "CL", "MN"],
    extraMembers: 6,
    supports: 98,
    featured: true,
    recent: true,
    owned: false,
  },
  {
    id: 4,
    title: "Sorriso 3D",
    area: "dental",
    areaLabel: "Ortótica Dentária",
    description: "Fluxo digital para planear e produzir dispositivos ortodônticos personalizados.",
    status: "Em desenvolvimento",
    tone: "cyan",
    icon: "M8 3c-3 0-5 3-4 7 1 3 2 3 2 7 0 3 2 4 3 4 2 0 1-6 3-6s1 6 3 6c1 0 3-1 3-4 0-4 1-4 2-7 1-4-1-7-4-7-2 0-3 1-4 1S10 3 8 3Z",
    tags: ["Modelação 3D", "Saúde Oral", "CAD"],
    members: ["TC", "IF", "LM"],
    extraMembers: 3,
    supports: 41,
    featured: true,
    recent: false,
    owned: true,
  },
  {
    id: 5,
    title: "Aprender Juntos",
    area: "education",
    areaLabel: "Educação",
    description: "Rede de mentoria entre estudantes para reforçar aprendizagem e inclusão académica.",
    status: "À procura de membros",
    tone: "orange",
    icon: "m3 8 9-5 9 5-9 5ZM6 11v6c4 3 8 3 12 0v-6",
    tags: ["Mentoria", "Educação", "Inclusão"],
    members: ["PV", "SA", "JR"],
    extraMembers: 5,
    supports: 63,
    featured: false,
    recent: true,
    owned: false,
  },
  {
    id: 6,
    title: "EcoIlha",
    area: "sustainability",
    areaLabel: "Sustentabilidade",
    description: "Mapa colaborativo de reciclagem e ações ambientais nas ilhas de Cabo Verde.",
    status: "À procura de apoio",
    tone: "green",
    icon: "M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-9 10-16ZM4 20c3-7 8-10 16-12",
    tags: ["Ambiente", "Mapas", "Comunidade"],
    members: ["DA", "RM", "JS"],
    extraMembers: 8,
    supports: 87,
    featured: false,
    recent: true,
    owned: true,
  },
];
```

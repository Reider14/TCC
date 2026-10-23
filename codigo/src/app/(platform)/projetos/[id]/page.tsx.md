# src/app/(platform)/projetos/[id]/page.tsx

```tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import collaborationBanner from "@/assets/images/projects/banner-collab.png";
import Button from "@/components/Button";
import FilterTabs from "@/components/FilterTabs";
import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";
import {
  projectFilters,
  projects,
  type ProjectArea,
  type ProjectFilter,
} from "@/db/data/projects";
import styles from "./styles.module.css";

const categories: { area: ProjectArea; label: string; icon: string; tone: string }[] = [
  { area: "software", label: "Engenharia de Software", icon: "M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14", tone: "blue" },
  { area: "law", label: "Direito", icon: "M12 3v18M7 6h10M5 9l-3 6h6L5 9Zm14 0-3 6h6l-3-6Z", tone: "purple" },
  { area: "nursing", label: "Enfermagem", icon: "M9 12h6M12 9v6M12 21S4 16.5 4 10a4 4 0 0 1 7-2.6L12 9l1-1.6A4 4 0 0 1 20 10c0 6.5-8 11-8 11Z", tone: "red" },
  { area: "dental", label: "Ortótica Dentária", icon: "M8 3c-3 0-5 3-4 7 1 3 2 3 2 7 0 3 2 4 3 4 2 0 1-6 3-6s1 6 3 6c1 0 3-1 3-4 0-4 1-4 2-7 1-4-1-7-4-7-2 0-3 1-4 1S10 3 8 3Z", tone: "cyan" },
  { area: "education", label: "Educação", icon: "m3 8 9-5 9 5-9 5ZM6 11v6c4 3 8 3 12 0v-6", tone: "orange" },
  { area: "sustainability", label: "Sustentabilidade", icon: "M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-9 10-16ZM4 20c3-7 8-10 16-12", tone: "green" },
];

const popularSkills = ["React", "Pesquisa", "Saúde", "Modelação 3D", "Mentoria"];

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectFilter>("for-you");
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");

  const visibleProjects = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("pt");
    const filtered = projects.filter((project) => {
      const matchesSearch = `${project.title} ${project.areaLabel} ${project.description} ${project.tags.join(" ")}`
        .toLocaleLowerCase("pt")
        .includes(term);

      if (!matchesSearch) return false;
      if (filter === "featured") return project.featured;
      if (filter === "recent") return project.recent;
      if (filter === "members") return project.status === "À procura de membros";
      if (filter === "mine") return project.owned;
      return true;
    });

    if (filter === "supported") {
      return filtered.toSorted((first, second) => second.supports - first.supports);
    }

    return filtered;
  }, [filter, query]);

  function showAll() {
    setFilter("for-you");
    setQuery("");
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Heading
          className={styles.heading}
          title="Projetos"
          description="Cria, descobre e colabora em projetos de diferentes áreas."
        />

        <div className={styles.headerActions}>
          <SearchBar
            id="projects-search"
            label="Pesquisar projetos"
            placeholder="Pesquisar projetos, áreas ou competências..."
            value={query}
            onChange={setQuery}
            className={styles.search}
          />
          <Button size="large" icon={<PlusIcon />} onClick={() => setNotice("Criar novo projeto")}>
            Novo projeto
          </Button>
        </div>
      </div>

      <FilterTabs
        items={projectFilters}
        value={filter}
        onChange={setFilter}
        ariaLabel="Filtrar projetos"
        className={styles.filters}
      />

      <div className={styles.layout}>
        <main className={styles.mainColumn}>
          <button
            type="button"
            className={styles.hero}
            aria-label="Encontrar colaboradores para um projeto"
            onClick={() => setFilter("members")}
          >
            <Image
              src={collaborationBanner}
              alt=""
              preload
              sizes="(max-width: 1060px) 100vw, 884px"
            />
          </button>

          <section className={styles.projectsSection} aria-labelledby="featured-projects-title">
            <div className={styles.sectionHead}>
              <h2 id="featured-projects-title">Projetos em destaque</h2>
              <button type="button" onClick={showAll}>Ver todos</button>
            </div>

            {visibleProjects.length > 0 ? (
              <div className={styles.projectGrid} aria-live="polite">
                {visibleProjects.slice(0, 4).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className={styles.empty}>Não encontrámos projetos com estes filtros.</div>
            )}
          </section>
        </main>

        <aside className={styles.sidebarColumn}>
          <section className={styles.sidePanel} aria-labelledby="project-categories-title">
            <div className={styles.sideHead}>
              <h2 id="project-categories-title">Áreas</h2>
              <button type="button" onClick={showAll}>Ver todas</button>
            </div>

            <div className={styles.categoryList}>
              {categories.map((category) => {
                const total = projects.filter((project) => project.area === category.area).length;
                return (
                  <button
                    key={category.area}
                    type="button"
                    onClick={() => setQuery(category.label)}
                  >
                    <span data-tone={category.tone}>
                      <svg aria-hidden="true" viewBox="0 0 24 24"><path d={category.icon} /></svg>
                    </span>
                    <strong>{category.label}</strong>
                    <small>{total} projeto{total === 1 ? "" : "s"}</small>
                  </button>
                );
              })}
            </div>
          </section>

          <section className={styles.sidePanel} aria-labelledby="popular-skills-title">
            <div className={styles.sideHead}>
              <h2 id="popular-skills-title">Competências em alta</h2>
              <button type="button" onClick={showAll}>Ver todas</button>
            </div>

            <div className={styles.skillList}>
              {popularSkills.map((skill, index) => (
                <button key={skill} type="button" onClick={() => setQuery(skill)}>
                  <span><strong>{skill}</strong><small>{projects.length * (6 - index)}</small></span>
                  <i style={{ "--skill-width": `${92 - index * 12}%` } as React.CSSProperties} />
                </button>
              ))}
            </div>
          </section>
        </aside>
      </div>

      {notice && (
        <button type="button" className={styles.notice} onClick={() => setNotice("")}>
          {notice}
        </button>
      )}
    </div>
  );
}
```

# src/components/Sidebar/index.tsx

```tsx
"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const items = [
  {
    label: "Início",
    href: "/",
    icon: "m3 10 9-8 9 8v11h-6v-7H9v7H3Z",
  },
  {
    label: "Pesquisar",
    href: "/pesquisa",
    icon: "m21 21-5-5 M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  },
  {
    label: "Oportunidades",
    href: "/oportunidades",
    icon: "M3 7h18v14H3Z M8 7V3h8v4 M3 12h18 M10 12v3h4v-3",
  },
  {
    label: "Projetos",
    href: "/projetos",
    icon: "M2 5h8l2 3h10v13H2Z",
  },
  {
    label: "O meu perfil",
    href: "/perfil",
    icon: "M20 21a8 8 0 0 0-16 0 M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  },
];

function Icon({ path }: { path: string }) {

  return (

    <svg
      aria-hidden="true"
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >

      <path d={path} />
    </svg>
  );

}

export default function Sidebar() {

  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  return (

    <aside className={styles.sidebar}>

      <Link
        href="/"
        data-plain
        aria-label="UniVerse — início"
        className={styles.brand}
      >
        <span aria-hidden="true" className={styles.logo}>
          U
        </span>
        <strong className={styles.brandName}>UniVerse</strong>
      </Link>


      <nav
        id="side-navigation"
        aria-label="Navegação principal"
        className={styles.navigation}
      >

        <div className={styles.items}>
          {items.map(({ label, href, icon }) => {
            
            const active = href === "/" ? pathname === href : pathname.startsWith(href);

            return (

              <Link
                key={href}
                href={href}
                data-plain
                aria-label={label}
                aria-current={active ? "page" : undefined}
                className={`${styles.item}${active ? ` ${styles.active}` : ""}`}
              >
                <span className={active ? styles.activeIcon : undefined}>
                  <Icon path={icon} />
                </span>
                <strong>
                  {label}
                </strong>
              </Link>

            );
          })}

        </div>

        <div className={styles.footer}>

          <button
            type="button"
            onClick={() => {
              const next = !dark;
              setDark(next);
              document.documentElement.dataset.theme = next ? "dark" : "light";
            }}
            aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"}
            className={styles.themeButton}
          >
            
            <Icon path="M21 13a9 9 0 0 1-10-10 9 9 0 1 0 10 10Z" />
            <strong>Tema</strong>
            <small className={styles.themeLabel}>
              {dark ? "Escuro" : "Claro"}
            </small>
          </button>
          <Link href="/login" data-plain className={`${styles.themeButton} ${styles.logout}`}>
            <Icon path="M9 3H4v18h5M10 12h11m-4-4 4 4-4 4" />
            <strong>Terminar sessão</strong>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
```

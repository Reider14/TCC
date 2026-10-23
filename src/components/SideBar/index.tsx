"use client";

import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  FolderKanban,
  House,
  LogOut,
  MoonIcon,
  Search,
  SunIcon,
  UserRound,
} from "lucide-react";
import Link from "next/link";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Início", href: "/feed", icon: House },
  { label: "Pesquisar", href: "/pesquisa", icon: Search },
  { label: "Oportunidades", href: "/oportunidades", icon: BriefcaseBusiness },
  { label: "Projetos", href: "/projetos", icon: FolderKanban },
  { label: "O meu perfil", href: "/perfil", icon: UserRound },
];

type Theme = "light" | "dark";

const themeOptions = {
  light: { icon: SunIcon, label: "Claro" },
  dark: { icon: MoonIcon, label: "Escuro" },
} as const;

export default function Sidebar() {
  const pathname = usePathname();

  const [theme, setTheme] = useState<Theme>("dark");
  const { icon: ThemeIcon, label: themeLabel } = themeOptions[theme];

  // Recupera o tema salvo quando a Sidebar e montada.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      // O estado precisa refletir a preferencia persistida do navegador.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
      return;
    }

    document.documentElement.dataset.theme = "dark";
  }, []);

  // Alterna entre os temas claro e escuro.
  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <aside className={styles.sidebar}>
      <Link href="/feed" className={styles.brand}>
        UniVerse
      </Link>

      <nav className={styles.navigation} aria-label="Navegação principal">
        {navigationItems.map((item) => {
          const isActive =
            pathname === item.href ||
            // Só vamos verificar as sub-rotas se o link não for o Início || startsWith() verifica se uma string começa com determinado texto.
            (item.href !== "/" && pathname.startsWith(`${item.href}/`));

          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${isActive ? styles.active : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <button
          type="button"
          className={styles.footerAction}
          onClick={toggleTheme}
          aria-label={`Mudar para o tema ${theme === "light" ? "escuro" : "claro"}`}
          aria-pressed={theme === "dark"}
        >
          <ThemeIcon size={24} aria-hidden="true" />
          <strong>Tema</strong>
          <span className={styles.themeLabel}>{themeLabel}</span>
        </button>

        <Link href={"/login"} className={styles.footerAction}>
          <LogOut size={24} />
          <strong>Terminar Sessão</strong>
        </Link>
      </div>
    </aside>
  );
}

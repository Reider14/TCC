import type { Metadata } from "next";

import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Universe - O teu ecossitema Universitario",
  description: "Centralizando a tua vida Universitaria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

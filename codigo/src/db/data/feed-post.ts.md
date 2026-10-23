# src/db/data/feed-post.ts

```ts
import type { StaticImageData } from "next/image";
import projectCover from "@/assets/images/post-feed/projeto em destaque dark.png";

export type FeedPostData = {
  id: number;
  author: {
    initials: string;
    name: string;
    meta: string;
  };
  content: { text: string; bold?: boolean }[];
  hashtags: string[];
  cover: {
    src: StaticImageData;
    alt: string;
  };
  metrics: {
    reactions: number;
    comments: number;
    shares: number;
  };
};

export const joaoPost = {
  id: 1,
  author: {
    initials: "JL",
    name: "João Lopes",
    meta: "Design de Produto · UniMindelo · 38 min",
  },
  content: [
    { text: "Terminámos hoje a primeira versão do " },
    { text: "Campus Flow", bold: true },
    {
      text: ", um projeto para melhorar a descoberta de eventos e atividades académicas. O feedback inicial foi excelente.",
    },
  ],
  hashtags: ["#UX", "#Produto", "#Universidade"],
  cover: {
    src: projectCover,
    alt: "Projeto Campus Flow em destaque",
  },
  metrics: {
    reactions: 48,
    comments: 12,
    shares: 7,
  },
} satisfies FeedPostData;
```

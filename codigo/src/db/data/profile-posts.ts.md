# src/db/data/profile-posts.ts

```ts
import type { StaticImageData } from "next/image";
import webSummitThumbnail from "@/assets/images/profile-posts/web-summit-2023.jpg";
import techParkThumbnail from "@/assets/images/profile-posts/tech-park-mindelo.jpg";
import digitalAwardsThumbnail from "@/assets/images/profile-posts/digital-awards-cabo-verde.jpg";
import gptAstraThumbnail from "@/assets/images/profile-posts/gpt-6-astra.jpg";
import granterThumbnail from "@/assets/images/profile-posts/granter-web-summit-2025.jpg";
import yCombinatorThumbnail from "@/assets/images/profile-posts/y-combinator-community.jpg";
import stationFThumbnail from "@/assets/images/profile-posts/station-f-startup-campus.jpg";
import workAiThumbnail from "@/assets/images/profile-posts/trabalho-era-ia.jpg";

type ProfilePostBase = {
  id: number;
  title: string;
  author: string;
  source: string;
  url: string;
};

export type YouTubeProfilePost = ProfilePostBase & {
  kind: "youtube";
  videoId: string;
  thumbnail: StaticImageData;
};

export type VideoProfilePost = ProfilePostBase & {
  kind: "video";
  videoUrl: string;
};

export type ProfilePost = YouTubeProfilePost | VideoProfilePost;

export const profilePosts: ProfilePost[] = [
  {
    id: 1,
    title: "Web Summit 2023 — Official Trailer",
    author: "Web Summit",
    source: "YouTube",
    kind: "youtube",
    videoId: "k4xBNPMRD6M",
    url: "https://youtu.be/k4xBNPMRD6M",
    thumbnail: webSummitThumbnail,
  },
  {
    id: 2,
    title: "Tech Park MIT — Polo do Mindelo",
    author: "TechPark CV",
    source: "YouTube",
    kind: "youtube",
    videoId: "Zvs2v7wAeRo",
    url: "https://www.youtube.com/watch?v=Zvs2v7wAeRo",
    thumbnail: techParkThumbnail,
  },
  {
    id: 3,
    title: "Digital Awards Cabo Verde — A Gala",
    author: "Digital Awards Cabo Verde",
    source: "YouTube",
    kind: "youtube",
    videoId: "zmBdLoeBbOQ",
    url: "https://www.youtube.com/watch?v=zmBdLoeBbOQ",
    thumbnail: digitalAwardsThumbnail,
  },
  {
    id: 4,
    title: "Introducing GPT-6 Astra",
    author: "OpenAI",
    source: "YouTube",
    kind: "youtube",
    videoId: "1QNsdr-Qx_I",
    url: "https://www.youtube.com/watch?v=1QNsdr-Qx_I",
    thumbnail: gptAstraThumbnail,
  },
  {
    id: 5,
    title: "Cecile — Machine Learning e IA",
    author: "Apple Careers",
    source: "Apple",
    kind: "video",
    videoUrl: "https://www.apple.com/careers/global/media/acvideo/2021/index/redesign/us/cecile/cecile-jobsite-cc-us-2021_1280x720i.mp4",
    url: "https://www.apple.com/careers/us/life-at-apple.html",
  },
  {
    id: 6,
    title: "Startup Winner Web Summit 2025 — Granter Final Pitch",
    author: "SEEDX",
    source: "YouTube",
    kind: "youtube",
    videoId: "FXW1u_2OwiM",
    url: "https://www.youtube.com/watch?v=FXW1u_2OwiM",
    thumbnail: granterThumbnail,
  },
  {
    id: 7,
    title: "Inside the Most Powerful Startup Community in the World",
    author: "Y Combinator",
    source: "YouTube",
    kind: "youtube",
    videoId: "EiRnSjcVIqk",
    url: "https://www.youtube.com/watch?v=EiRnSjcVIqk",
    thumbnail: yCombinatorThumbnail,
  },
  {
    id: 8,
    title: "Inside the World's Largest Startup Campus",
    author: "CNBC International",
    source: "YouTube",
    kind: "youtube",
    videoId: "GAjTqXRWizc",
    url: "https://www.youtube.com/watch?v=GAjTqXRWizc",
    thumbnail: stationFThumbnail,
  },
  {
    id: 9,
    title: "Revolução Industrial vs. IA",
    author: "WebDocs Brasil",
    source: "YouTube",
    kind: "youtube",
    videoId: "TEMwrdrGuW8",
    url: "https://www.youtube.com/watch?v=TEMwrdrGuW8",
    thumbnail: workAiThumbnail,
  },
];
```

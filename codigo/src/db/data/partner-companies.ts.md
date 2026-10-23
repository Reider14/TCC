# src/db/data/partner-companies.ts

```ts
export type PartnerCompany = {
  name: string;
  initials: string;
  category: string;
  tone: "blue" | "cyan" | "green" | "orange" | "purple";
  website: string;
};

export const partnerCompanies: PartnerCompany[] = [
  {
    name: "TechPark CV",
    initials: "TP",
    category: "Tecnologia e inovação",
    tone: "purple",
    website: "https://www.techpark.cv/",
  },
  {
    name: "Unitel T+",
    initials: "U+",
    category: "Telecomunicações e tecnologia",
    tone: "orange",
    website: "https://www.uniteltmais.cv/",
  },
  {
    name: "ENACOL",
    initials: "EN",
    category: "Energia e indústria",
    tone: "green",
    website: "https://www.enacol.cv/",
  },
];
```

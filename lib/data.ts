export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  image: string;
  links: { live: string; code: string };
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Aster Ledger",
    category: "Fintech Platform",
    description: "A premium financial operations dashboard for tracking forecasts, cash flow, and investor reporting.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    links: { live: "https://example.com", code: "https://github.com" }
  },
  {
    title: "Northwind Studio",
    category: "Brand System",
    description: "A boutique digital experience built to unify product storytelling, media, and client engagement.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    links: { live: "https://example.com", code: "https://github.com" }
  },
  {
    title: "Atlas Commerce",
    category: "E-commerce UX",
    description: "A conversion-focused storefront experience blending elegant merchandising and streamlined checkout flows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    links: { live: "https://example.com", code: "https://github.com" }
  }
];

export const skillGroups = [
  { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind", "Accessibility", "Performance"] },
  { title: "Design", items: ["UI Systems", "Design Tokens", "Figma", "Motion Design", "Brand Direction", "Prototyping"] },
  { title: "Product", items: ["Strategy", "Roadmapping", "User Research", "Growth UX", "Analytics", "Stakeholder Alignment"] },
  { title: "Data & Ops", items: ["PostgreSQL", "Supabase", "Cloud Storage", "APIs", "Automation", "DevOps"] }
];

export const timeline = [
  { period: "2022 — Present", title: "Senior Product Designer & Developer", company: "Independent Studio", description: "Designing premium digital experiences and product systems for founders, startups, and growing brands." },
  { period: "2019 — 2022", title: "Lead Frontend Engineer", company: "Northstar Labs", description: "Led the front-end architecture for SaaS products and built modular design-driven interfaces." },
  { period: "2016 — 2019", title: "Visual Designer", company: "Ambient Works", description: "Crafted digital identities, campaign systems, and conversion-focused UI experiences." }
];

export const education = [
  { period: "2014 — 2018", title: "B.A. in Interactive Media", school: "University of Creative Arts", details: "Focused on digital design, product storytelling, and interface systems." },
  { period: "2012 — 2014", title: "Creative Technologies Diploma", school: "Art & Design Academy", details: "Built a strong foundation in visual communication and front-end craft." }
];

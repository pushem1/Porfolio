export const services = [
  { id: "web", index: "01", name: "Web Development", short: "WEB", detail: "Full-stack web applications", stack: "Next.js / React / REST APIs" },
  { id: "mobile", index: "02", name: "Mobile Applications", short: "MOBILE", detail: "Purpose-built mobile experiences", stack: "Flutter / APIs / UX" },
  { id: "desktop", index: "03", name: "Desktop Applications", short: "DESKTOP", detail: "Reliable tools for real workflows", stack: "Custom systems / data" },
  { id: "ai", index: "04", name: "AI Integration", short: "AI", detail: "Practical AI-powered product features", stack: "LLM / API integration" },
  { id: "backend", index: "05", name: "API / Backend Development", short: "API", detail: "Connected, maintainable services", stack: "Node.js / PHP / databases" },
  { id: "realtime", index: "06", name: "Realtime Systems", short: "REALTIME", detail: "Interfaces that stay in sync", stack: "WebSockets / realtime data" },
];

export const projects = [
  { name: "MLPerformance", code: "MLP-01", type: "AUTOMOTIVE TUNING PLATFORM", desc: "Professional automotive tuning and ECU service platform.", tech: ["Next.js", "Supabase", "REST APIs", "WebSockets", "Payments", "Authentication"], href: "https://www.ml-performance.com/", shape: "ecu" },
  { name: "Lyocense", code: "LYO-02", type: "WEB EXPERIENCE", desc: "Web project created for Lyocense.", tech: [], href: "https://lyocense.vercel.app/", shape: "data" },
  { name: "Herbarium", code: "HRB-03", type: "WEB EXPERIENCE", desc: "Web project created for Herbarium.", tech: [], href: "https://herbarium-psi.vercel.app/", shape: "library" },
  { name: "Sanad", code: "SND-04", type: "WEB EXPERIENCE", desc: "Web project created for Sanad.", tech: [], href: "https://sanad-tan.vercel.app/", shape: "garage" },
  { name: "Sultan Library", code: "SLB-05", type: "E-COMMERCE", desc: "Online store for Islamic books, perfumes, gifts, and cultural products.", tech: ["E-commerce", "Catalog", "Customer accounts", "Shopping cart"], href: "https://www.sultanlibrary.com/", shape: "library" },
  { name: "So Elevate", code: "SOE-06", type: "WEB EXPERIENCE", desc: "Web project created for So Elevate.", tech: [], href: "https://so-elevate.com/accueil", shape: "shop" },
  { name: "Med Tint Shop", code: "MTS-07", type: "SERVICE BOOKING PLATFORM", desc: "Automotive restyling and protection services with an online booking flow.", tech: ["Service catalog", "Booking flow", "Vehicle details"], href: "https://medtintshop.com/", shape: "garage" },
];

export const techGroups = [
  ["Frontend", "React · Next.js · Flutter · HTML · CSS · JavaScript"],
  ["Backend", "Node.js · PHP · REST API · WebSockets"],
  ["Data", "PostgreSQL · Supabase · MySQL · SQL"],
  ["Infrastructure", "Git · GitHub · Vercel · APIs · Authentication"],
  ["AI", "AI integration · AI-assisted development · LLM/API integration"],
] as const;

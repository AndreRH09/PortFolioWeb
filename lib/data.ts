export const projects = [
  {
    id: 1,
    title: "Kata Alpaca",
    description: "Multilingual landing page with dynamic blog CMS integration.",
    image: "/projects/kataalpaca/kataalpaca.png",
    features: ["Multi-language (EN/ES)", "Headless CMS", "Lazy loading", "SEO optimized"],
    tech: ["Next.js", "React", "Hygraph CMS", "i18n", "Tailwind CSS"],
    github: "https://github.com/FranksVilca/kata_alpaca_web.git",
    live: "https://www.kataalpaca.com/es",
    problem: "Needed a scalable landing page supporting multiple languages with dynamic content management for blog entries.",
    solution: "Built with Next.js and Hygraph headless CMS, implementing i18n for ES/EN support and lazy loading for performance.",
    context: "Production landing page deployed on cPanel with seamless content updates via Hygraph dashboard.",
  },
  {
    id: 2,
    title: "PanicShield 2.0",
    description: "Intelligent mobile emergency panic alert system with dual SMS & cloud sync.",
    image: "/projects/panicshield/panicshield.png",
    features: ["Dual SMS Alerts", "Real-time Geolocation", "Heat Maps", "Emergency Contacts", "Offline Resilience"],
    tech: ["Kotlin", "Jetpack Compose", "Android SDK", "Supabase", "Room Database", "Hilt", "Coroutines", "Mapbox"],
    github: "https://github.com/AndreRH09/PanicShield2.0.git",
    live: null,
    problem: "Critical need for immediate, reliable panic alert mechanism capable of operating with both Internet connectivity and SMS-only cellular network.",
    solution: "Developed resilient Android app using Jetpack Compose and MVVM + Clean Architecture with parallel dual-alert system (SMS + cloud sync) and real-time geolocation.",
    context: "University advanced systems engineering project (UNSA) focused on secure, responsive, high-impact social platforms.",
  },
  {
    id: 3,
    title: "SENSES Psicólogos v2.0",
    description: "Clinical management platform with QA strategy, testing & quality metrics.",
    image: "/projects/senses/senses.png",
    features: ["QA & Unit Testing", "Clinical Records", "Real-time Comms", "Financial Module", "Role-based Access", "Analytics Dashboard"],
    tech: ["React", "Vite.js", "TypeScript", "Jest/Vitest", "Node.js 22", "Express 5", "Prisma 6.8", "PostgreSQL", "Socket.IO", "GCS"],
    github: "https://github.com/AndreRH09/senses-frontend",
    live: "https://senses-frontend-five.vercel.app/auth",
    problem: "Multi-branch psychological centers lacked centralized clinical/financial management, audit trails, and software quality assurance before deployment.",
    solution: "Built modular monolith SPA (React/Vite) with rigorous QA strategy, unit testing, quality metrics, and backend API (Node/Express/PostgreSQL) supporting 43 Prisma models for clinic, financial, and inventory management.",
    context: "Led QA engineering, unit testing strategy, quality metrics analysis, and frontend optimization for multi-role clinical-administrative platform.",
  },
  {
    id: 4,
    title: "Project Delta",
    description: "Reusable component design system.",
    image: "/work/placeholder-4.svg",
    features: ["Component library", "Design tokens", "Documentation"],
    tech: ["React", "Storybook", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    problem: "Inconsistent UI components across projects led to maintenance overhead.",
    solution: "Created comprehensive design system with documented components and tokens.",
    context: "Shared across multiple projects reducing development time and ensuring consistency.",
  },
];

export const skills = {
  languages: ["Python", "Java", "C++", "C#", "TypeScript", "Dart", "SQL"],
  frontend: ["Next.js", "Flutter", "React", "Tailwind CSS", "Jetpack Compose"],
  backend: ["Supabase", "PostgreSQL", "Google Cloud Platform", "Vercel"],
  tools: ["Git", "GitHub", "VS Code"],
};

export const experience = [
  {
    id: 1,
    role: "Senior Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading frontend architecture and mentoring junior developers.",
  },
  {
    id: 2,
    role: "Full-stack Developer",
    company: "Startup Inc",
    period: "2020 - 2022",
    description: "Built and maintained production web applications for millions of users.",
  },
];

export const certifications = [
  {
    id: 1,
    name: "DELF B1 - Diplôme d'Études en Langue Française",
    description: "French language proficiency certification",
    issuer: "Alliance Française de Arequipa",
    date: "02/03/2025",
    year: 2025,
    link: "/certifications/b1.pdf",
  },
  {
    id: 2,
    name: "Hack4edu - Fundación Telefónica & HAKU",
    description: "Advanced preparation program in systems engineering and digital innovation",
    issuer: "Facultad de Ingeniería de Sistemas (UNSA) + Fundación Telefónica + HAKU",
    date: "Agosto - Octubre 2025",
    year: 2025,
    link: "/certifications/hack4edu.pdf",
  },
  {
    id: 3,
    name: "ENGIETEK S.A. - International Engineering Congress",
    description: "Attendance certificate - International engineering and technology conference",
    issuer: "ASME PERU SECTION & ENGIETEK S.A.",
    date: "Agosto 2025",
    year: 2025,
    link: "/certifications/perumec.pdf",
  },
  {
    id: 4,
    name: "Google Cloud Computing Foundations Certificate",
    description: "Cloud infrastructure and foundational cloud computing skills",
    issuer: "Google Cloud",
    year: 2024,
    link: "https://www.credly.com/earner/earned/badge/00da02e3-94be-4767-bcca-85a469350b8b",
  },
  {
    id: 5,
    name: "Cisco Networking Academy",
    description: "Multiple skill badges in networking, security, and infrastructure",
    issuer: "Cisco Networking",
    year: 2024,
  },
];

export const contact = {
  email: "andreahrenzo@gmail.com",
  linkedin: "https://linkedin.com/in/andrerh09",
  github: "https://github.com/AndreRH09",
};

export const cvUrl = "/cv.pdf";

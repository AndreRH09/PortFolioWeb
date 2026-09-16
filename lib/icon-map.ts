import { createElement } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Database,
  Award,
  FileText,
  BarChart3,
  Code,
  Globe,
  Layers,
  Zap,
  Package,
} from "lucide-react";

// Simple Icons from react-icons/si
import {
  SiPython,
  SiCplusplus,
  SiSharp,
  SiTypescript,
  SiDart,
  SiNextdotjs,
  SiFlutter,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiGooglecloud,
  SiVercel,
  SiGit,
  SiGithub,
  SiJetpackcompose,
  SiKotlin,
  SiAndroid,
  SiMapbox,
  SiVite,
  SiJest,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiSocketdotio,
  SiStorybook,
  SiContentful,
} from "react-icons/si";

// Devicons from react-icons/di
import { DiJava } from "react-icons/di";

type IconEntry = 
  | { kind: "component"; Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color?: string }
  | { kind: "lucide"; Icon: LucideIcon }
  | { kind: "image"; src: string };

const techIcons: Record<string, IconEntry> = {
  // Languages
  Python: { kind: "component", Icon: SiPython, color: "#3776AB" },
  Java: { kind: "component", Icon: DiJava, color: "#007396" },
  "C++": { kind: "component", Icon: SiCplusplus, color: "#00599C" },
  "C#": { kind: "component", Icon: SiSharp, color: "#239120" },
  TypeScript: { kind: "component", Icon: SiTypescript, color: "#3178C6" },
  Dart: { kind: "component", Icon: SiDart, color: "#0175C2" },
  Kotlin: { kind: "component", Icon: SiKotlin, color: "#7F52FF" },
  SQL: { kind: "lucide", Icon: Database },

  // Frontend & Mobile
  "Next.js": { kind: "component", Icon: SiNextdotjs }, // monochrome by design
  Flutter: { kind: "component", Icon: SiFlutter, color: "#02569B" },
  React: { kind: "component", Icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { kind: "component", Icon: SiTailwindcss, color: "#06B6D4" },
  "Jetpack Compose": { kind: "component", Icon: SiJetpackcompose, color: "#4285F4" },
  "Vite.js": { kind: "component", Icon: SiVite, color: "#646CFF" },

  // Backend & Infrastructure
  Supabase: { kind: "component", Icon: SiSupabase, color: "#3ECF8E" },
  PostgreSQL: { kind: "component", Icon: SiPostgresql, color: "#4169E1" },
  "Google Cloud Platform": { kind: "component", Icon: SiGooglecloud, color: "#4285F4" },
  Vercel: { kind: "component", Icon: SiVercel }, // monochrome by design
  "Power BI": { kind: "lucide", Icon: BarChart3 }, // react-icons has no Power BI brand icon
  "Node.js": { kind: "component", Icon: SiNodedotjs, color: "#68A063" },
  "Node.js 22": { kind: "component", Icon: SiNodedotjs, color: "#68A063" },
  Express: { kind: "component", Icon: SiExpress, color: "#000000" },
  "Express 5": { kind: "component", Icon: SiExpress, color: "#000000" },
  Prisma: { kind: "component", Icon: SiPrisma, color: "#2D3748" },
  "Prisma 6.8": { kind: "component", Icon: SiPrisma, color: "#2D3748" },
  "Socket.IO": { kind: "component", Icon: SiSocketdotio, color: "#010101" },

  // CMS & Content
  "Hygraph CMS": { kind: "component", Icon: SiContentful, color: "#009CAF" },

  // Mobile/Android specific
  "Android SDK": { kind: "component", Icon: SiAndroid, color: "#3DDC84" },
  "Room Database": { kind: "lucide", Icon: Database },
  Hilt: { kind: "lucide", Icon: Layers },
  Coroutines: { kind: "lucide", Icon: Zap },

  // Geolocation & Maps
  Mapbox: { kind: "component", Icon: SiMapbox, color: "#000000" },

  // Testing & Tools
  Jest: { kind: "component", Icon: SiJest, color: "#C63D14" },
  "Jest/Vitest": { kind: "component", Icon: SiJest, color: "#C63D14" },
  Vitest: { kind: "lucide", Icon: Code },
  Storybook: { kind: "component", Icon: SiStorybook, color: "#FF4785" },

  // i18n & Internationalization
  i18n: { kind: "lucide", Icon: Globe },

  // Google Cloud Services
  GCS: { kind: "component", Icon: SiGooglecloud, color: "#4285F4" },

  // Tools
  Git: { kind: "component", Icon: SiGit, color: "#F05032" },
  GitHub: { kind: "component", Icon: SiGithub }, // monochrome by design
  "VS Code": { kind: "image", src: "/icons/vscode.svg" },

  // Productivity
  "Microsoft Office Suite (Word, Excel)": { kind: "image", src: "/icons/ms-office.svg" },
  "MOS Certified": { kind: "lucide", Icon: Award },
  "Document Automation": { kind: "lucide", Icon: FileText },
  "Data Analysis & Spreadsheet Modeling": { kind: "lucide", Icon: BarChart3 },
};

const fallbackIcon: IconEntry = { kind: "lucide", Icon: Code };

export function getIcon(techName: string): IconEntry {
  return techIcons[techName] || fallbackIcon;
}

export function TechIcon({ name }: { name: string }) {
  const entry = getIcon(name);

  if (entry.kind === "component") {
    const Icon = entry.Icon;
    return createElement(Icon, {
      className: "w-5 h-5",
      style: entry.color ? { color: entry.color } : undefined,
    });
  }

  if (entry.kind === "lucide") {
    const Icon = entry.Icon;
    return createElement(Icon, { className: "w-5 h-5" });
  }

  if (entry.kind === "image") {
    return createElement("img", {
      src: entry.src,
      alt: name,
      className: "w-5 h-5 object-contain",
    });
  }

  return null;
}

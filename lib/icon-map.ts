import { createElement } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Triangle,
  Atom,
  Code,
  Palette,
  Zap,
  Database,
  Cloud,
  Rocket,
  Layers,
  Smartphone,
  Book,
  Terminal,
  GitBranch,
  Package,
} from "lucide-react";

const techIcons: Record<string, LucideIcon> = {
  "Next.js": Triangle,
  React: Atom,
  TypeScript: Code,
  "Tailwind CSS": Palette,
  "Node.js": Zap,
  PostgreSQL: Database,
  "Google Cloud Platform": Cloud,
  Vercel: Rocket,
  Express: Layers,
  Flutter: Smartphone,
  "Jetpack Compose": Smartphone,
  Storybook: Book,
  "VS Code": Terminal,
  Git: GitBranch,
  Supabase: Package,
  SQL: Database,
};

const fallbackIcon = Code;

export function getIcon(techName: string): LucideIcon {
  return techIcons[techName] || fallbackIcon;
}

export function TechIcon({ name }: { name: string }) {
  const Icon = getIcon(name);
  return createElement(Icon, { className: "w-5 h-5" });
}

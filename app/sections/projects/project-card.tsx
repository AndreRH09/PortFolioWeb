"use client";

import { TechIcon } from "@/lib/icon-map";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  live: string;
  isCenter: boolean;
  onClick: () => void;
  onLinkClick: (e: React.MouseEvent) => void;
}

export default function ProjectCard({
  title,
  description,
  features,
  tech,
  github,
  live,
  isCenter,
  onClick,
  onLinkClick,
}: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer ${
        isCenter ? "flex-shrink-0 w-80" : "flex-shrink-0 w-64"
      }`}
      whileHover={isCenter ? { scale: 1.02 } : { scale: 1 }}
    >
      <div
        className={`border border-border p-6 space-y-4 h-full flex flex-col transition-all ${
          isCenter ? "bg-background" : "bg-background/50 opacity-60"
        }`}
      >
        <div>
          <h3 className="text-lg font-medium tracking-tight mb-2">{title}</h3>
          <p className="text-sm text-muted leading-relaxed">{description}</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
            Features
          </p>
          <div className="space-y-1.5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="text-xs text-muted border border-border/50 px-2 py-1"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {tech.map((t) => (
            <div
              key={t}
              className="flex items-center gap-1 text-xs text-muted border border-border px-2 py-1"
            >
              <TechIcon name={t} />
              <span>{t}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-auto pt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="text-xs font-medium text-foreground hover:opacity-60 transition-opacity"
          >
            GitHub →
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="text-xs font-medium text-foreground hover:opacity-60 transition-opacity"
          >
            Live →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

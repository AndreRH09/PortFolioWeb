"use client";

import { motion } from "framer-motion";
import { TechIcon } from "@/lib/icon-map";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    problem: string;
    solution: string;
    context: string;
    tech: string[];
    gallery?: { src: string; caption: string }[];
  } | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  if (!project || !isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-background border border-border max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        >
              {/* Header with gradient background */}
              <div className="relative h-48 bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-end p-6">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-border hover:bg-foreground/10 transition-colors"
                >
                  ✕
                </button>
                <h2 className="text-3xl font-medium tracking-tight text-foreground">
                  {project.title}
                </h2>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Problem */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                    Problem
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                    Solution
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {project.solution}
                  </p>
                </div>

                {/* Context */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                    Background
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {project.context}
                  </p>
                </div>

                {/* Gallery */}
                {project.gallery && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                      Screenshots
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.gallery.map(({ src, caption }) => (
                        <figure key={src} className="space-y-2">
                          <img src={src} alt={caption} className="w-full max-h-96 object-contain border border-border" />
                          <figcaption className="text-xs text-muted">{caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="space-y-3 border-t border-border pt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 text-sm text-muted border border-border px-3 py-2"
                      >
                        <TechIcon name={tech} />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      );
}

"use client";

import { projects } from "@/lib/data";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Projects
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            Selected work and experiments exploring modern web architecture, design systems, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

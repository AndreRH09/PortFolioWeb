"use client";

import { useState } from "react";
import { projects as projectsData } from "@/lib/data";
import DepthCarousel from "../../projects/DepthCarousel";
import ProjectModal from "./project-modal";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentProject = projectsData[activeIndex];

  return (
    <>
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Projects
            </h2>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Selected work exploring modern web architecture and full-stack
              development.
            </p>
          </div>

          <div className="relative" style={{ height: "640px" }}>
            <DepthCarousel
              items={projectsData}
              cardWidth={850}
              cardHeight={500}
              radius={8}
              depth={320}
              spread={160}
              tilt={25}
              tiltDirection="right"
              perspective={1600}
              visibleCards={2}
              falloff={0.3}
              blur={7}
              duration={700}
              autoplay
              autoplayDelay={5000}
              loop
              showControls
              showIndicators
              onChange={(index) => setActiveIndex(index)}
              onCardActivate={() => setIsModalOpen(true)}
              renderItem={(project) => (
                <div className="flex w-full h-full bg-background">
                  {/* Image - landscape, wider than tall */}
                  <div className="w-[70%] h-full overflow-hidden bg-foreground/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      draggable={false}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-[25%] h-full p-5 flex flex-col justify-center">
                    <div className="space-y-5">
                      <h3 className="text-[45px] font-medium tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-[17px] text-muted leading-snug line-clamp-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tech.slice(0, 3).map((tech: string) => (
                          <span
                            key={tech}
                            className="text-[13px] font-medium text-muted border border-border px-2 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[14px] font-medium text-foreground hover:opacity-60 transition-opacity"
                        >
                          GitHub →
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[14px] font-medium text-foreground hover:opacity-60 transition-opacity"
                          >
                            Live →
                          </a>
                        )}
                      </div>
                      <p className="text-[13px] uppercase tracking-widest text-foreground/50 pt-2">
                        Click to view details
                      </p>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={
          currentProject
            ? {
                title: currentProject.title,
                problem: currentProject.problem,
                solution: currentProject.solution,
                context: currentProject.context,
                tech: currentProject.tech,
              }
            : null
        }
      />
    </>
  );
}

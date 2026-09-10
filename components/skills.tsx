"use client";

import { skills } from "@/lib/data";

const skillCategories = [
  { label: "Languages", key: "languages" },
  { label: "Frontend & Mobile", key: "frontend" },
  { label: "Backend & Infrastructure", key: "backend" },
  { label: "Tools", key: "tools" },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Technologies & Skills
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            A focused set of languages, frameworks, and tools I use to build modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map(({ label, key }) => (
            <div key={key} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[key as keyof typeof skills].map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium text-foreground border border-border px-3 py-1.5 hover:border-foreground/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

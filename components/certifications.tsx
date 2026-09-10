"use client";

import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Certifications
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            Professional credentials and skill badges demonstrating expertise in cloud computing, networking, and modern development practices.
          </p>
        </div>

        <div className="space-y-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-border pb-4 last:border-b-0"
            >
              <div className="space-y-1">
                <h3 className="text-base font-medium text-foreground">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted">{cert.issuer}</p>
              </div>
              <span className="text-sm text-muted mt-2 sm:mt-0 sm:ml-4">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

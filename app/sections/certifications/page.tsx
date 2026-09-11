"use client";

import { certifications } from "@/lib/data";

const formatMonth = (date: Date) => {
  return new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(date);
};

const sortedCertifications = [...certifications].sort((a, b) => b.date.getTime() - a.date.getTime());

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

        <div className="space-y-4">
          {sortedCertifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col gap-3 border border-border rounded-lg p-4 hover:bg-white/5 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1 space-y-1">
                  <h3 className="text-base font-medium text-foreground">
                    {cert.name}
                  </h3>
                  {cert.description && (
                    <p className="text-sm text-muted">{cert.description}</p>
                  )}
                </div>
                <span className="text-sm text-muted whitespace-nowrap">
                  {formatMonth(cert.date)}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="text-xs text-foreground/60">{cert.issuer}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target={cert.link.startsWith("http") ? "_blank" : undefined}
                    rel={cert.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-xs font-medium text-foreground hover:opacity-60 transition-opacity inline-block"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

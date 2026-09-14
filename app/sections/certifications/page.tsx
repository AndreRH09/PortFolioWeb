"use client";

import { useState } from "react";
import { certifications } from "@/lib/data";
import { Award } from "lucide-react";

const formatMonth = (date: Date) => {
  return new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(date);
};

const ITEMS_PER_PAGE = 4;

export default function Certifications() {
  const [sortBy, setSortBy] = useState<"relevance" | "date">("relevance");
  const [currentPage, setCurrentPage] = useState(0);

  const sortedCertifications = [...certifications].sort((a, b) => {
    if (sortBy === "relevance") {
      return (b.relevance || 0) - (a.relevance || 0);
    }
    return b.date.getTime() - a.date.getTime();
  });

  const totalPages = Math.ceil(sortedCertifications.length / ITEMS_PER_PAGE);
  const startIdx = currentPage * ITEMS_PER_PAGE;
  const paginatedCerts = sortedCertifications.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2 flex-1">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Certifications
            </h2>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Professional credentials and skill badges demonstrating expertise in cloud computing, networking, and modern development practices.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort-filter" className="text-sm text-muted">
              Sort by:
            </label>
            <select
              id="sort-filter"
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as "relevance" | "date");
                setCurrentPage(0);
              }}
              className="px-3 py-1.5 text-sm border border-border rounded-md bg-background transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-foreground"
            >
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {paginatedCerts.map((cert) => (
            <div
              key={cert.id}
              className="flex gap-4 border border-border rounded-lg p-4 hover:bg-white/5 transition-colors"
            >
              {/* Logo or fallback */}
              <div className="flex-shrink-0">
                {cert.logo ? (
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-10 h-10 object-contain rounded bg-white/10 p-1"
                  />
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center rounded bg-white/10">
                    <Award className="w-5 h-5 text-muted" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-base font-medium text-foreground">
                      {cert.name}
                    </h3>
                    {cert.description && (
                      <p className="text-sm text-muted mt-1">{cert.description}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <span className="text-sm text-muted">{formatMonth(cert.date)}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1">
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
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Prev
            </button>
            <span className="text-sm text-muted">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setLastScrollY(currentScrollY);

      const sectionElements = sections
        .map((s) => document.getElementById(s.id))
        .filter((el) => el !== null) as HTMLElement[];

      if (sectionElements.length > 0) {
        const closest = sectionElements.reduce((prev, curr) => {
          const prevDistance = Math.abs(prev.getBoundingClientRect().top - 100);
          const currDistance = Math.abs(curr.getBoundingClientRect().top - 100);
          return currDistance < prevDistance ? curr : prev;
        });

        const activeSectionId =
          sections.find((s) => s.id === closest.id)?.id || "hero";
        setActiveSection(activeSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="flex justify-center p-4 md:p-6">
        <div className="flex gap-1 md:gap-10 px-4 py-2.5 md:px-15 md:py-2.5 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 shadow-3xl opacity-100">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`
                px-2 py-2 md:px-10 md:py-2 rounded-full font-medium text-sm md:text-base opacity-120 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground
                transition-all duration-300 ease-out whitespace-nowrap
                ${
                  activeSection === section.id
                    ? "bg-white/30 text-foreground shadow-lg backdrop-blur-xl border border-white/30"
                    : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                }
              `}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

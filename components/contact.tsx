"use client";

import { contact } from "@/lib/data";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    value: contact.email,
  },
  {
    label: "GitHub",
    href: contact.github,
    value: "github.com/AndreRH09",
  },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    value: "linkedin.com/in/andrerh09",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            Interested in collaborating or have a question? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="space-y-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 group"
            >
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium uppercase tracking-widest text-foreground">
                  {link.label}
                </p>
                <p className="text-base text-muted group-hover:text-foreground transition-colors">
                  {link.value}
                </p>
              </div>
              <span className="text-muted group-hover:text-foreground transition-colors">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

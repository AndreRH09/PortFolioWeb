export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-tight">
            Andre Renzo
          </h1>
          <p className="text-xl md:text-2xl text-muted font-light tracking-wide">
            Full-stack Developer
          </p>
        </div>

        <p className="text-lg leading-relaxed text-muted max-w-xl">
          Building clean, minimal web experiences with focus on performance and user experience.
          Currently exploring Next.js, React, and modern web architecture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-foreground text-background font-medium hover:opacity-80 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="/cv.pdf"
            className="px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

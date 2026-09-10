import { FiMail, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const creationYear = 2024;

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Social Links Bubbles */}
          <div className="flex gap-4 md:gap-6">
            {/* Email */}
            <a
              href="mailto:andreahrenzo@gmail.com"
              className="group relative"
              aria-label="Email"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                <FiMail className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
              </div>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Email
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/andr%C3%A9-renzo-a%C3%B1azco-huamanquispe"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="LinkedIn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                <FiLinkedin className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
              </div>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-foreground/70">
              © {creationYear}
              {currentYear !== creationYear && `-${currentYear}`} André Renzo
            </p>
            <p className="text-xs text-foreground/50">
              Built in {" "}
              <span className="text-red-500"></span> using Next.js, React &
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

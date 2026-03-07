import { useState, useEffect } from "react";
import { Linkedin, Github, Download } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
import MagneticWrapper from "./MagneticWrapper";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["contact", "projects", "skills", "experience", "about"];
      const offset = window.scrollY + 120;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && offset >= el.offsetTop) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f5f7]/85 dark:bg-black/80 backdrop-blur-xl border-b border-[#d2d2d7]/70 dark:border-[#3a3a3c]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 flex items-center justify-between py-4">
        {/* Name */}
        <a href="#" className="text-sm font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight" aria-label="Go to top">
          Naikaj Shiradkar
        </a>

        {/* Nav links — desktop only */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={label}
                href={href}
                className={`relative text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-[#1d1d1f] dark:text-[#f5f5f7] font-medium"
                    : "text-[#6e6e73] dark:text-[#98989d] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]"
                }`}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: social icons + resume */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 text-[#6e6e73] dark:text-[#98989d]">
            <MagneticWrapper strength={0.4}>
              <a
                href="https://linkedin.com/in/naikaj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-200"
              >
                <Linkedin size={16} aria-hidden="true" />
              </a>
            </MagneticWrapper>
            <MagneticWrapper strength={0.4}>
              <a
                href="https://github.com/naikaj18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-200"
              >
                <Github size={16} aria-hidden="true" />
              </a>
            </MagneticWrapper>
            <MagneticWrapper strength={0.4}>
              <a
                href="https://leetcode.com/u/naikaj18/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
                className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-200"
              >
                <SiLeetcode className="text-base" aria-hidden="true" />
              </a>
            </MagneticWrapper>
          </div>
          <ThemeToggle />
          <MagneticWrapper>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume PDF"
              className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full border border-[#d2d2d7] dark:border-[#3a3a3c] bg-white/60 dark:bg-transparent text-[#1d1d1f] dark:text-[#f5f5f7] hover:border-[#1d1d1f] dark:hover:border-[#f5f5f7] hover:bg-white dark:hover:bg-white/5 transition-all duration-200"
            >
              <Download size={11} aria-hidden="true" />
              Resume
            </a>
          </MagneticWrapper>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

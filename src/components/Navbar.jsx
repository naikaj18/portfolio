import { useState, useEffect } from "react";
import { Linkedin, Github, Download, Menu, X } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? "bg-[#f5f5f7]/70 dark:bg-white/[0.04] backdrop-blur-xl dark:backdrop-blur-xl border-b border-[#d2d2d7]/70 dark:border-[#3a3a3c]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 flex items-center justify-between py-5">
        {/* Name */}
        <a href="#" className="text-base sm:text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight" aria-label="Go to top">
          Naikaj Shiradkar
        </a>

        {/* Nav links - desktop only */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={label}
                href={href}
                className={`relative text-[15px] transition-colors duration-200 ${
                  isActive
                    ? "text-[#1d1d1f] dark:text-[#f5f5f7] font-medium"
                    : "text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]"
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
          <div className="hidden sm:flex items-center gap-4 text-[#6e6e73] dark:text-[#a1a1a6]">
            <MagneticWrapper strength={0.4}>
              <a
                href="https://linkedin.com/in/naikaj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-200"
              >
                <Linkedin size={18} aria-hidden="true" />
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
                <Github size={18} aria-hidden="true" />
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
          {/* Hamburger - mobile only */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-md text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-200"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <MagneticWrapper>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume PDF"
              className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full border border-[#d2d2d7] dark:border-white/10 bg-white/60 dark:bg-white/10 dark:backdrop-blur-md text-[#1d1d1f] dark:text-[#f5f5f7] hover:border-[#1d1d1f] dark:hover:border-white/30 hover:bg-white dark:hover:bg-white/15 transition-all duration-200"
            >
              <Download size={13} aria-hidden="true" />
              Resume
            </a>
          </MagneticWrapper>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-[#f5f5f7]/90 dark:bg-[#1c1c1e]/90 backdrop-blur-xl border-b border-[#d2d2d7]/70 dark:border-[#3a3a3c]"
          >
            <div className="mx-auto max-w-5xl px-6 sm:px-10 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`relative py-2.5 text-sm font-medium transition-colors duration-200 border-b border-[#d2d2d7]/40 dark:border-[#3a3a3c]/60 last:border-0 ${
                      isActive
                        ? "text-[#1d1d1f] dark:text-[#f5f5f7]"
                        : "text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 w-6 h-px rounded-full"
                        style={{ background: "var(--accent)" }}
                        aria-hidden="true"
                      />
                    )}
                  </a>
                );
              })}

              {/* Social icons row */}
              <div className="flex items-center gap-5 pt-3 text-[#6e6e73] dark:text-[#a1a1a6]">
                <a
                  href="https://linkedin.com/in/naikaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-200"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/naikaj18"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-200"
                >
                  <Github size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://leetcode.com/u/naikaj18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-200"
                >
                  <SiLeetcode className="text-lg" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

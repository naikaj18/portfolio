import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

const Contact = () => {
  return (
    <section id="contact" className="py-28 border-t border-[#d2d2d7] dark:border-[#3a3a3c] relative overflow-hidden">

      {/* Large faint background text — purely decorative */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] lg:text-[12rem] font-bold tracking-tighter text-[#1d1d1f] dark:text-[#f5f5f7] leading-none opacity-[0.04] whitespace-nowrap"
      >
        Say Hello
      </span>

      {/* All real content sits above the ghost text */}
      <div className="relative">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-label uppercase mb-6"
        >
          06 — Contact
        </motion.p>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight mb-4"
        >
          Open to new opportunities.
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-[#6e6e73] dark:text-[#98989d] text-sm leading-relaxed max-w-sm mb-10"
        >
          {CONTACT.location} — Available for full-time roles in AI engineering, cloud, or full-stack development.
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-3 mb-16"
        >
          <MagneticWrapper>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Send email to Naikaj"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-black text-sm font-medium hover:bg-[#3d3d3f] dark:hover:bg-[#e5e5e7] transition-colors duration-200"
            >
              <Mail size={14} aria-hidden="true" />
              {CONTACT.email}
            </a>
          </MagneticWrapper>
          <MagneticWrapper>
            <a
              href="https://linkedin.com/in/naikaj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#d2d2d7] dark:border-[#3a3a3c] bg-white dark:bg-[#1c1c1e] text-sm text-[#1d1d1f] dark:text-[#f5f5f7] hover:border-[#1d1d1f] dark:hover:border-[#f5f5f7] transition-colors duration-200"
            >
              <Linkedin size={15} aria-hidden="true" />
              LinkedIn
            </a>
          </MagneticWrapper>
          <MagneticWrapper>
            <a
              href="https://github.com/naikaj18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#d2d2d7] dark:border-[#3a3a3c] bg-white dark:bg-[#1c1c1e] text-sm text-[#1d1d1f] dark:text-[#f5f5f7] hover:border-[#1d1d1f] dark:hover:border-[#f5f5f7] transition-colors duration-200"
            >
              <Github size={15} aria-hidden="true" />
              GitHub
            </a>
          </MagneticWrapper>
        </motion.div>

        {/* Footer divider + copyright */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.4, delay: 0.28 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-6 border-t border-[#e8e8ed] dark:border-[#3a3a3c]"
        >
          <p className="text-xs text-[#6e6e73] dark:text-[#98989d]">
            © {new Date().getFullYear()} Naikaj Shiradkar
          </p>
          <p className="text-xs text-[#6e6e73] dark:text-[#98989d]">
            AI, Cloud &amp; Full Stack Engineer · San Francisco
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

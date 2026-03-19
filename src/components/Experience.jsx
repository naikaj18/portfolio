import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { isDark } = useTheme();
  return (
    <section id="experience" className="py-20 border-t border-[#d2d2d7] dark:border-[#3a3a3c]">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-label uppercase mb-12"
      >
        02 — Experience
      </motion.p>

      {/* Timeline wrapper — thin vertical line on desktop */}
      <div className="experience-timeline space-y-10 lg:pl-6">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="experience-block grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-8"
          >
            <div className="lg:col-span-1 pt-1">
              <p className="text-xs text-[#6e6e73] dark:text-[#98989d] leading-relaxed tabular-nums">{experience.year}</p>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-0.5">
                {experience.role}
                {experience.type && (
                  <span className="ml-2 text-xs font-normal text-[#6e6e73] dark:text-[#98989d]">({experience.type})</span>
                )}
              </h3>
              <p className="text-sm text-[#6e6e73] dark:text-[#98989d] mb-4 font-medium">{experience.company}</p>
              <ul className="space-y-3 mb-5">
                {experience.description.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#1d1d1f] dark:text-[#f5f5f7] leading-relaxed pl-3.5"
                    style={{ borderLeft: `1.5px solid ${isDark ? "#3a3a3c" : "#c7c7cc"}` }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-white/10 dark:backdrop-blur-sm border border-[#d2d2d7] dark:border-white/10 text-[#1d1d1f] dark:text-[#f5f5f7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

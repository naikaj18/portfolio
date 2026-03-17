import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { isDark } = useTheme();
  return (
    <section id="projects" className="py-20 border-t border-[#d2d2d7] dark:border-[#3a3a3c]">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-label uppercase mb-12"
      >
        04 — Projects
      </motion.p>

      <div className="space-y-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.08}
              glareColor="#ffffff"
              glarePosition="all"
              scale={1.01}
              transitionSpeed={500}
              className="project-card rounded-2xl"
            >
              {/* project-card-inner carries the accent left-border on hover */}
              <div
                className="project-card-inner project-card rounded-2xl p-7 border border-[#d2d2d7] dark:border-[#3a3a3c] cursor-default overflow-hidden"
                style={{
                  background: isDark
                    ? "linear-gradient(160deg, #1c1c1e 0%, #161618 100%)"
                    : "linear-gradient(160deg, #ffffff 0%, #fafafa 100%)",
                  boxShadow: isDark
                    ? "0 1px 4px rgba(0,0,0,0.3), 0 0 0 0.5px rgba(255,255,255,0.04)"
                    : "0 1px 4px rgba(0,0,0,0.05), 0 0 0 0.5px rgba(0,0,0,0.03)",
                }}
              >
                {/* Title row */}
                <div className="flex items-start justify-between mb-1 group">
                  <h3 className="text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] flex items-center gap-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        {project.title}
                        <ArrowUpRight
                          aria-hidden="true"
                          size={15}
                          className="text-[#6e6e73] dark:text-[#98989d] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    ) : (
                      <>
                        {project.title}
                        <ArrowUpRight
                          aria-hidden="true"
                          size={15}
                          className="text-[#6e6e73] dark:text-[#98989d] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </h3>
                  <span
                    className="text-xs ml-4 mt-0.5 shrink-0 tabular-nums font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <p className="text-xs text-[#6e6e73] dark:text-[#98989d] mb-4 font-medium">{project.subtitle}</p>
                <p className="text-sm text-[#1d1d1f] dark:text-[#f5f5f7] leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#e5e5ea] dark:border-[#3a3a3c] text-[#1d1d1f] dark:text-[#f5f5f7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

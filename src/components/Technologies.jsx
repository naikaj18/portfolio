import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const CATEGORY_META = {
  "Languages & Frameworks": {
    index: "01",
    pill: "bg-white dark:bg-white/10 dark:backdrop-blur-sm border-[#d2d2d7] dark:border-white/10 text-[#1d1d1f] dark:text-[#f5f5f7]",
    container: "bg-white/50 dark:bg-white/[0.04] dark:backdrop-blur-xl border border-[#e8e8ed] dark:border-white/10 rounded-2xl p-4",
  },
  "AI / ML": {
    index: "02",
    pill: "bg-[#f0f0f5] dark:bg-white/10 dark:backdrop-blur-sm border-[#d2d2d7] dark:border-white/10 text-[#1d1d1f] dark:text-[#f5f5f7]",
    container: "bg-[#f7f7fa]/60 dark:bg-white/[0.04] dark:backdrop-blur-xl border border-[#e8e8ed] dark:border-white/10 rounded-2xl p-4",
  },
  "Cloud & DevOps": {
    index: "03",
    pill: "bg-white dark:bg-white/10 dark:backdrop-blur-sm border-[#d2d2d7] dark:border-white/10 text-[#1d1d1f] dark:text-[#f5f5f7]",
    container: "bg-white/30 dark:bg-white/[0.04] dark:backdrop-blur-xl border border-[#e8e8ed] dark:border-white/10 rounded-2xl p-4",
  },
};

const fallbackMeta = (i) => ({
  index: String(i + 1).padStart(2, "0"),
  pill: "bg-white dark:bg-white/10 dark:backdrop-blur-sm border-[#d2d2d7] dark:border-white/10 text-[#1d1d1f] dark:text-[#f5f5f7]",
  container: "bg-white/40 dark:bg-white/[0.04] dark:backdrop-blur-xl border border-[#e8e8ed] dark:border-white/10 rounded-2xl p-4",
});

const Technologies = () => {
  return (
    <section id="skills" className="py-12 sm:py-20 border-t border-[#d2d2d7] dark:border-[#3a3a3c]">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-label uppercase mb-12"
      >
        03 — Skills
      </motion.p>

      <div className="space-y-4">
        {Object.entries(SKILLS).map(([category, skills], index) => {
          const meta = CATEGORY_META[category] || fallbackMeta(index);
          return (
            <motion.div
              key={category}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8 lg:items-start"
            >
              {/* Category label with accent-colored index number */}
              <div className="lg:col-span-1 pt-1 lg:pt-5">
                <p className="flex items-baseline gap-2">
                  <span
                    className="text-[10px] font-semibold tabular-nums tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    {meta.index}
                  </span>
                  <span className="text-xs font-medium text-[#6e6e73] dark:text-[#a1a1a6]">
                    {category}
                  </span>
                </p>
              </div>

              <div className={`lg:col-span-3 ${meta.container}`}>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`skill-pill text-xs px-2.5 py-1 rounded-full border cursor-default ${meta.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;

import { SKILLS } from "../constants";
import { motion } from "framer-motion";

// Subtle tint per category so groups feel visually distinct without color
const CATEGORY_STYLES = {
  "Languages & Frameworks": {
    pill: "bg-white dark:bg-[#2c2c2e] border-[#d2d2d7] dark:border-[#3a3a3c] text-[#1d1d1f] dark:text-[#f5f5f7]",
    container: "bg-white/50 dark:bg-[#1c1c1e]/60 border border-[#e8e8ed] dark:border-[#3a3a3c] rounded-2xl p-4",
  },
  "AI / ML": {
    pill: "bg-[#f0f0f5] dark:bg-[#2c2c2e] border-[#d2d2d7] dark:border-[#3a3a3c] text-[#1d1d1f] dark:text-[#f5f5f7]",
    container: "bg-[#f7f7fa]/60 dark:bg-[#1c1c1e]/40 border border-[#e8e8ed] dark:border-[#3a3a3c] rounded-2xl p-4",
  },
  "Cloud & DevOps": {
    pill: "bg-white dark:bg-[#2c2c2e] border-[#d2d2d7] dark:border-[#3a3a3c] text-[#1d1d1f] dark:text-[#f5f5f7]",
    container: "bg-white/30 dark:bg-[#1c1c1e]/30 border border-[#e8e8ed] dark:border-[#3a3a3c] rounded-2xl p-4",
  },
};

const fallbackStyle = {
  pill: "bg-white dark:bg-[#2c2c2e] border-[#d2d2d7] dark:border-[#3a3a3c] text-[#1d1d1f] dark:text-[#f5f5f7]",
  container: "bg-white/40 dark:bg-[#1c1c1e]/40 border border-[#e8e8ed] dark:border-[#3a3a3c] rounded-2xl p-4",
};

const Technologies = () => {
  return (
    <section id="skills" className="py-20 border-t border-[#d2d2d7] dark:border-[#3a3a3c]">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-label uppercase text-[#6e6e73] dark:text-[#98989d] mb-12"
      >
        03 — Skills
      </motion.p>

      <div className="space-y-4">
        {Object.entries(SKILLS).map(([category, skills], index) => {
          const style = CATEGORY_STYLES[category] || fallbackStyle;
          return (
            <motion.div
              key={category}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8 lg:items-start"
            >
              <div className="lg:col-span-1 pt-1 lg:pt-5">
                <p className="text-xs font-medium text-[#6e6e73] dark:text-[#98989d]">{category}</p>
              </div>
              <div className={`lg:col-span-3 ${style.container}`}>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 rounded-full border ${style.pill}`}
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

import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-[#d2d2d7] dark:border-[#3a3a3c]">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-label uppercase mb-6"
      >
        01 — About
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        {ABOUT_TEXT.map((paragraph, i) => (
          <p
            key={i}
            className="text-lg lg:text-xl font-normal text-[#1d1d1f] dark:text-[#f5f5f7] leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useTheme } from "../context/ThemeContext";

const Education = () => {
  const { isDark } = useTheme();
  const cardStyle = {
    background: isDark
      ? "linear-gradient(160deg, #1c1c1e 0%, #161618 100%)"
      : "linear-gradient(160deg, #ffffff 0%, #fafafa 100%)",
    boxShadow: isDark
      ? "0 1px 4px rgba(0,0,0,0.3), 0 0 0 0.5px rgba(255,255,255,0.04)"
      : "0 1px 4px rgba(0,0,0,0.05), 0 0 0 0.5px rgba(0,0,0,0.03)",
  };
  return (
    <section id="education" className="py-20 border-t border-[#d2d2d7] dark:border-[#3a3a3c]">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-label uppercase text-[#6e6e73] dark:text-[#98989d] mb-12"
      >
        05 — Education &amp; Certification
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
            className="h-full"
          >
            <div
              className="project-card rounded-2xl p-7 border border-[#d2d2d7] dark:border-[#3a3a3c] h-full"
              style={cardStyle}
            >
              <p className="section-label text-[#6e6e73] dark:text-[#98989d] mb-3 uppercase">Master of Computer Science</p>
              <h3 className="text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">California State University, Fullerton</h3>
              <p className="text-sm text-[#6e6e73] dark:text-[#98989d]">GPA: 3.74</p>
            </div>
          </Tilt>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
            className="h-full"
          >
            <div
              className="project-card rounded-2xl p-7 border border-[#d2d2d7] dark:border-[#3a3a3c] h-full"
              style={cardStyle}
            >
              <p className="section-label text-[#6e6e73] dark:text-[#98989d] mb-3 uppercase">Certification</p>
              <h3 className="text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">AWS Certified Developer</h3>
              <p className="text-sm text-[#6e6e73] dark:text-[#98989d]">Associate — Amazon Web Services</p>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

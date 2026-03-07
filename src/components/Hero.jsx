import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Naikaj.jpg";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

// Word-by-word reveal — avoids mid-word line breaks
const TypewriterText = ({ text, className }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.35, staggerChildren: 0.06 },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 8, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} style={{ display: "inline-block", marginRight: "0.28em" }} aria-hidden="true">
          {w}
        </motion.span>
      ))}
    </motion.p>
  );
};

const Hero = () => {
  const { isDark } = useTheme();

  const nameGradient = isDark
    ? "linear-gradient(180deg, #ffffff 0%, #a0a0a5 100%)"
    : "linear-gradient(180deg, #1d1d1f 0%, #3d3d3f 100%)";

  return (
    <section className="py-24 lg:py-36 relative">


      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-20 relative">

        {/* Text content */}
        <div className="flex-1 mt-10 lg:mt-0">

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d2d2d7] dark:border-[#3a3a3c] bg-white/70 dark:bg-white/[0.08] backdrop-blur-sm mb-6"
          >
            <span
              className="pulse-dot w-1.5 h-1.5 rounded-full shrink-0"
              aria-hidden="true"
            />
            <span className="text-xs text-[#1d1d1f] dark:text-[#f5f5f7] font-medium tracking-tight">
              Currently at AAA · Open to work
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="section-label uppercase mb-4"
          >
            AI, Cloud &amp; Full Stack Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-6xl lg:text-8xl font-semibold tracking-tight leading-tight mb-6"
            style={{
              backgroundImage: nameGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Naikaj Shiradkar
          </motion.h1>

          {/* Typewriter tagline */}
          <TypewriterText
            text={HERO_CONTENT}
            className="text-lg lg:text-xl text-[#6e6e73] dark:text-[#98989d] max-w-md leading-relaxed mb-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="mailto:naikaj18@gmail.com"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-black text-sm font-medium hover:bg-[#3d3d3f] dark:hover:bg-[#e5e5e7] transition-colors duration-200"
            >
              Get in touch
            </a>
            <span className="text-xs text-[#6e6e73] dark:text-[#98989d] border border-[#d2d2d7] dark:border-[#3a3a3c] bg-white/60 dark:bg-transparent rounded-full px-3.5 py-1.5 backdrop-blur-sm">
              AWS Certified Developer – Associate
            </span>
          </motion.div>
        </div>

        {/* Photo with tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="flex-shrink-0 lg:w-96"
        >
          <motion.div
            whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } }}
            className="photo-ring w-56 lg:w-96 rounded-3xl overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <img
              src={profilePic}
              alt="Naikaj Shiradkar"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 8%", filter: "grayscale(15%) brightness(1.03) contrast(0.97)" }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

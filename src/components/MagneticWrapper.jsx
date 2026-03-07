import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

const SPRING_CONFIG = { damping: 15, stiffness: 150, mass: 0.1 };

const MagneticWrapper = ({ children, strength = 0.35, className = "" }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, SPRING_CONFIG);
  const y = useSpring(0, SPRING_CONFIG);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = (e.clientX - centerX) * strength;
    const distY = (e.clientY - centerY) * strength;

    x.set(distX);
    y.set(distY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;

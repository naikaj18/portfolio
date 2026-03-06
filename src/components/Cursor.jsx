import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse position (dot follows exactly)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Springy ring position
  const ringX = useSpring(dotX, { stiffness: 180, damping: 22, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 180, damping: 22, mass: 0.5 });

  useEffect(() => {
    // Only activate on fine pointer devices (non-touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);

    const onOver = (e) => {
      const el = e.target;
      const isLink =
        el.closest("a") ||
        el.closest("button") ||
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.closest("[role='button']");
      const isCardEl = el.closest(".project-card");

      setIsPointer(!!isLink);
      setIsCard(!!isCardEl && !isLink);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
    };
  }, [dotX, dotY, isVisible]);

  // Ring size / opacity based on state
  const ringSize = isPointer ? 44 : isCard ? 48 : 32;
  const ringOpacity = isPointer ? 0.85 : 0.6;
  const ringBg = isPointer ? "rgba(29,29,31,0.08)" : "transparent";
  const dotSize = isPointer ? 4 : 6;

  return (
    <>
      {/* Springy hollow ring */}
      <motion.div
        style={{
          left: ringX,
          top: ringY,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: isVisible ? ringOpacity : 0,
          backgroundColor: ringBg,
          x: "-50%",
          y: "-50%",
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 30 },
          height: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
        }}
        className="fixed top-0 left-0 rounded-full border border-[#1d1d1f]/30 pointer-events-none z-[9999]"
      />

      {/* Precise dot */}
      <motion.div
        style={{
          left: dotX,
          top: dotY,
        }}
        animate={{
          width: dotSize,
          height: dotSize,
          opacity: isVisible ? 1 : 0,
          x: "-50%",
          y: "-50%",
        }}
        transition={{
          width: { type: "spring", stiffness: 400, damping: 28 },
          height: { type: "spring", stiffness: 400, damping: 28 },
          opacity: { duration: 0.15 },
        }}
        className="fixed top-0 left-0 rounded-full bg-[#1d1d1f] pointer-events-none z-[9999]"
      />
    </>
  );
};

export default Cursor;

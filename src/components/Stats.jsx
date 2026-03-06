import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const STATS = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "", label: "Companies" },
  { value: 1, suffix: "x", label: "AWS Certified" },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-b border-[#d2d2d7] dark:border-[#3a3a3c] py-8">
      <div className="flex items-center justify-around gap-0">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`flex-1 flex flex-col items-center gap-0.5 ${
              i < STATS.length - 1 ? "border-r border-[#d2d2d7] dark:border-[#3a3a3c]" : ""
            } px-4`}
          >
            <span className="text-2xl lg:text-3xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] tabular-nums leading-none">
              {isInView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={1.6}
                  delay={i * 0.15}
                  useEasing
                  suffix={stat.suffix}
                />
              ) : (
                `0${stat.suffix}`
              )}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#6e6e73] dark:text-[#98989d] font-medium mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

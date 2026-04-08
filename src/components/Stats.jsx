import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const STATS = [
  { value: 4, label: "Years Experience", superscript: "+" },
  { value: 3, label: "Companies", superscript: "+" },
  { value: 1, label: "AWS Certified", suffix: "x" },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
    <section ref={ref} className="border-t border-b border-[#d2d2d7] dark:border-[#3a3a3c] py-10">
      <div className="flex items-center justify-around gap-0">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`flex-1 flex flex-col items-center gap-1 ${
              i < STATS.length - 1 ? "border-r border-[#d2d2d7] dark:border-[#3a3a3c]" : ""
            } px-4`}
          >
            <span
              className="text-4xl lg:text-5xl font-bold tracking-tight tabular-nums leading-none"
              style={{ color: "var(--accent)" }}
            >
              {isInView ? (
                <>
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={1.6}
                    delay={i * 0.15}
                    useEasing
                    suffix={stat.suffix ?? ""}
                  />
                  {stat.superscript && (
                    <sup className="text-2xl lg:text-3xl font-bold align-super">{stat.superscript}</sup>
                  )}
                </>
              ) : (
                <>
                  0{stat.suffix ?? ""}
                  {stat.superscript && (
                    <sup className="text-2xl lg:text-3xl font-bold align-super">{stat.superscript}</sup>
                  )}
                </>
              )}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#6e6e73] dark:text-[#a1a1a6] font-medium mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

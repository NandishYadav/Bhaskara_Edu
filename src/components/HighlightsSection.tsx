import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, BookOpen, Award, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: 1200, suffix: "+", label: "Students" },
  { icon: BookOpen, value: 50, suffix: "+", label: "Courses" },
  { icon: Award, value: 80, suffix: "+", label: "Expert Faculty" },
  { icon: Globe, value: 15, suffix: "+", label: "Years of Excellence" },
];

function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{count}</>;
}

const HighlightsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="highlights" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Our Impact</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Status & Highlights
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse-glow" />
            Open Now · Online + In-Person Classes Available
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i, type: "spring", stiffness: 200 }}
              className="group rounded-2xl bg-primary p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
            >
              <s.icon className="mx-auto mb-3 h-8 w-8 text-accent" />
              <div className="font-display text-4xl font-bold text-primary-foreground counter-glow">
                <Counter target={s.value} inView={inView} />
                {s.suffix}
              </div>
              <p className="mt-2 text-sm text-primary-foreground/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;

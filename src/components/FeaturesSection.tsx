import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { School, Monitor, UserCheck, HeartHandshake } from "lucide-react";

const features = [
  { icon: School, title: "Campus Learning", desc: "State-of-the-art facilities for immersive on-campus education.", accent: "bg-accent/10 text-accent" },
  { icon: Monitor, title: "Online Classes", desc: "Flexible online learning options accessible from anywhere.", accent: "bg-saffron/10 text-saffron" },
  { icon: UserCheck, title: "Experienced Faculty", desc: "Learn from industry experts and passionate educators.", accent: "bg-gold/10 text-gold" },
  { icon: HeartHandshake, title: "Student Support", desc: "Comprehensive support for academic and personal growth.", accent: "bg-teal/10 text-teal" },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">What We Offer</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Features & Services
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group relative rounded-2xl bg-card p-8 shadow-[var(--shadow-sm)] transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Glow accent */}
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${f.accent} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent/0 group-hover:bg-accent/60 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

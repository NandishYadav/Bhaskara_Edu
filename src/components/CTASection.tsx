import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl cta-bg px-8 py-16 sm:px-16 sm:py-20 text-center"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl floating" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-saffron/15 blur-3xl floating" style={{ animationDelay: "2s" }} />

          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Join Bhaskara Educational<br />Institutions Today
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">
              Take the first step toward a successful future. Apply now and become part of our thriving academic community.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-colors hover:bg-accent/90"
            >
              Apply Now
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

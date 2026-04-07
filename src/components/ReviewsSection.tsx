import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, MessageSquare } from "lucide-react";

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-lg mx-auto text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Student Reviews
          </h2>

          <div className="mt-10 rounded-2xl bg-card p-10 shadow-[var(--shadow-md)]">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                >
                  <Star className="h-7 w-7 text-saffron/30" />
                </motion.div>
              ))}
            </div>
            <p className="text-muted-foreground">Not yet rated</p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground/60">
              <MessageSquare size={16} />
              Be the first to leave a review
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;

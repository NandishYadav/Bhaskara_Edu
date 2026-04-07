import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Lightbulb, Users } from "lucide-react";

const cards = [
  {
    icon: Trophy,
    title: "Student Success",
    desc: "We nurture talent and guide every student toward academic and personal excellence.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Embracing modern teaching methodologies and technology-driven learning experiences.",
    color: "bg-saffron/10 text-saffron",
  },
  {
    icon: Users,
    title: "Accessibility",
    desc: "Quality education accessible to all, fostering an inclusive and supportive community.",
    color: "bg-gold/10 text-gold",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">About Us</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
            About Bhaskara Educational Institutions
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Located in Roypeta, Narsapuram, Andhra Pradesh, Bhaskara Educational Institutions is dedicated to providing world-class education that empowers students to achieve their dreams. We combine traditional values with modern innovation.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group glass-card-light rounded-2xl p-8 text-center glow-hover"
            >
              <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${c.color} transition-transform duration-300 group-hover:scale-110`}>
                <c.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

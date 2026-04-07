import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import campusImg from "@/assets/campus-hero.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={campusImg}
          alt="Bhaskara campus"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-bg opacity-90" />
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl floating" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-saffron/10 blur-3xl floating" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-gold/8 blur-2xl floating" style={{ animationDelay: "1.5s" }} />

      <div className="container relative mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-sm text-primary-foreground/80"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse-glow" />
            Open Now · Admissions Active
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground"
          >
            Empowering Students for a{" "}
            <span className="text-gradient">Brighter Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-xl text-lg text-primary-foreground/70 font-body"
          >
            Student-centered and innovation-driven education at Bhaskara Educational Institutions. Building tomorrow's leaders with excellence and integrity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              <BookOpen size={18} />
              Explore Courses
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl glass-card px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-foreground/10"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

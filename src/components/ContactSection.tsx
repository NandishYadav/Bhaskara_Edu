import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Globe, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const info = [
    { icon: MapPin, label: "Location", value: "Roypeta, Narsapuram, Andhra Pradesh" },
    { icon: Phone, label: "Phone", value: "+91 94939 43737", href: "tel:+919493943737" },
    { icon: Mail, label: "Email", value: "bjcnsp@gmail.com", href: "mailto:bjcnsp@gmail.com" },
  ];

  const links = [
    { label: "Official Website", href: "#", icon: Globe },
    { label: "Google Sites Page", href: "#", icon: ExternalLink },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Get in Touch</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Contact & Information
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info cards */}
          <div className="space-y-4">
            {info.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href || "#"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="group flex items-center gap-5 rounded-[2rem] bg-card p-4 pr-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1 hover:bg-accent/5 border border-border/50"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent text-accent group-hover:text-accent-foreground transition-colors duration-300 shadow-sm">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors">{item.label}</span>
                  <span className="text-foreground font-semibold text-lg">{item.value}</span>
                </div>
              </motion.a>
            ))}

            {/* Digital Presence */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Digital Presence</p>
              <div className="flex gap-3">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="inline-flex items-center gap-2 rounded-xl bg-accent/5 px-4 py-2.5 text-sm font-medium text-accent hover:bg-accent/10 transition-colors"
                  >
                    <l.icon size={16} />
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="overflow-hidden rounded-2xl shadow-[var(--shadow-md)]"
          >
            <iframe
              title="Bhaskara Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30608.34!2d81.68!3d16.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37c2e0e!2sNarsapuram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1"
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

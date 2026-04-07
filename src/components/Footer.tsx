import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/bhaskara-logo.png";

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

const Footer = () => (
  <footer className="bg-primary pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid gap-10 md:grid-cols-3 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Bhaskara Logo" className="h-12 w-auto brightness-0 invert" />
            <span className="font-display text-xl font-bold text-primary-foreground">Bhaskara</span>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
            Empowering students for a brighter future through innovation-driven education in Narsapuram, Andhra Pradesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Features", "Highlights", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-200"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Roypeta, Narsapuram, AP</li>
            <li className="flex items-center gap-2"><Phone size={16} className="shrink-0" /> +91 94939 43737</li>
            <li className="flex items-center gap-2"><Mail size={16} className="shrink-0" /> bjcnsp@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Bhaskara Educational Institutions. All rights reserved.
        </p>
        <div className="flex gap-3">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

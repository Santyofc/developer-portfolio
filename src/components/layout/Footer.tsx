import { Link } from "react-router-dom";
import { Linkedin, Mail, Globe } from "lucide-react";

const socialLinks = [
  { href: "https://www.linkedin.com/in/santi-delgados/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:delgadoleiva60@gmail.com", icon: Mail, label: "Email" },
  { href: "https://zonasurtech.online", icon: Globe, label: "Zona Sur Tech" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zs-bg-primary border-t border-zs-border-subtle overflow-hidden">
      {/* Subtle top light ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-zs-accent-primary/50 to-transparent" />
      
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-heading font-bold text-lg text-zs-text-primary">
              <div className="w-6 h-6 rounded bg-zs-accent-primary/10 border border-zs-accent-primary/20 flex items-center justify-center">
                <span className="text-[10px]">SD</span>
              </div>
              SANTI_DELGADO
            </div>
            <p className="text-xs text-zs-text-muted font-mono leading-relaxed max-w-xs">
              Building next-gen digital infrastructure and secure systems at 
              <span className="text-zs-accent-primary block">ZONA_SUR_TECH_LABS</span>
            </p>
          </div>

          {/* Technical Data */}
          <div className="flex flex-col gap-2 font-mono text-[10px] text-zs-text-muted uppercase tracking-widest">
            <div className="flex items-center gap-4 py-1 border-b border-zs-border-subtle/50">
              <span className="text-zs-accent-primary opacity-50">STATUS:</span>
              <span className="text-zs-text-secondary">SYSTEM_OPTIMIZED</span>
            </div>
            <div className="flex items-center gap-4 py-1 border-b border-zs-border-subtle/50">
              <span className="text-zs-accent-primary opacity-50">LOC:</span>
              <span className="text-zs-text-secondary">COSTA_RICA_CR</span>
            </div>
            <div className="flex items-center gap-4 py-1">
              <span className="text-zs-accent-primary opacity-50">AUTH:</span>
              <span className="text-zs-text-secondary">SANTI_DEL_01</span>
            </div>
          </div>

          {/* Socials & Legal */}
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-zs-border-subtle flex items-center justify-center text-zs-text-secondary hover:text-zs-accent-primary hover:border-zs-accent-primary/50 hover:bg-zs-accent-primary/5 transition-all group"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-zs-text-muted uppercase tracking-widest">
              <Link to="/styleguide" className="hover:text-zs-accent-primary transition-colors">
                STYLE_GUIDE
              </Link>
              <span>/</span>
              <span>© {currentYear}_STG_DEL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

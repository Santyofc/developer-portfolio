import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Award,
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { fadeUp } from "@/lib/motion";

export default function CV() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout>
      <div className="min-h-screen pb-20 pt-32">
        <div className="container">
          {/* Controls - Hidden on Print */}
          <div className="flex justify-between items-center mb-10 no-print">
            <Link to="/about" className="inline-flex items-center gap-2 font-mono text-xs text-zs-text-muted hover:text-zs-accent-primary transition-colors">
              <ArrowLeft className="h-4 w-4" /> [ BACK_TO_PROFILE ]
            </Link>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" onClick={handlePrint} className="font-mono text-xs h-10 border-zs-border-subtle">
                <Printer className="mr-2 h-4 w-4" /> PRINT_PDF
              </Button>
            </div>
          </div>

          {/* CV Page - Styled for high fidelity and print */}
          <motion.div 
            {...fadeUp()}
            className="max-w-[900px] mx-auto bg-white text-zinc-900 p-10 md:p-16 shadow-2xl rounded-sm cv-container relative overflow-hidden"
          >
            {/* Header / Personal Branding */}
            <header className="flex flex-col md:flex-row justify-between gap-10 border-b-2 border-zinc-100 pb-10">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-outfit font-extrabold tracking-tighter text-zinc-900">
                  José Santiago <br /> Delgado Leiva
                </h1>
                <p className="text-xl font-medium text-emerald-600 font-mono tracking-tight uppercase">
                  Founder & Full Stack Developer
                </p>
                <p className="text-zinc-500 max-w-md leading-relaxed">
                  Experto en construcción de infraestructura web escalable, sistemas de identidad segura y soluciones digitales de alto rendimiento.
                </p>
              </div>

              <div className="space-y-3 font-mono text-[13px] text-zinc-600 shrink-0">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-emerald-600" />
                  <a href="mailto:delgadoleiva60@gmail.com" className="hover:text-emerald-600 transition-colors">delgadoleiva60@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <a href="tel:+50660581663" className="hover:text-emerald-600 transition-colors">+506 6058 1663</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-emerald-600" />
                  <span>San José, Costa Rica</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-emerald-600" />
                  <a href="https://zonasurtech.online" target="_blank" className="hover:text-emerald-600 transition-colors">zonasurtech.online</a>
                </div>
              </div>
            </header>

            <div className="grid md:grid-cols-3 gap-12 pt-10">
              {/* Sidebar Section */}
              <aside className="space-y-10">
                <section>
                  <h2 className="font-mono text-[11px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4 border-b border-zinc-100 pb-2">Skills</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[10px] font-bold text-zinc-400 uppercase mb-2">Frontend</h3>
                      <p className="text-sm font-medium">HTML5, CSS3, JavaScript (ES6+), React, Next.js, UI/UX Design</p>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-zinc-400 uppercase mb-2">Backend</h3>
                      <p className="text-sm font-medium">PHP (Core), Node.js, REST APIs, Secure Auth Flows</p>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-zinc-400 uppercase mb-2">Infrastructure</h3>
                      <p className="text-sm font-medium">Linux Server Admin, MySQL, PostgreSQL, WordPress, Networking</p>
                    </div>
                  </div>
                </section>

                <section>
                   <h2 className="font-mono text-[11px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4 border-b border-zinc-100 pb-2">Certifications</h2>
                   <div className="space-y-4">
                      <div className="flex gap-3">
                        <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                        <div>
                          <p className="text-xs font-bold leading-tight">Ethical Hacking Essentials</p>
                          <p className="text-[10px] text-zinc-400">EC-Council</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                        <div>
                          <p className="text-xs font-bold leading-tight">Cybersecurity Intro</p>
                          <p className="text-[10px] text-zinc-400">Cisco Academy</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                        <div>
                          <p className="text-xs font-bold leading-tight">Cyber Fundamentals</p>
                          <p className="text-[10px] text-zinc-400">IBM</p>
                        </div>
                      </div>
                   </div>
                </section>

                <section>
                   <h2 className="font-mono text-[11px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4 border-b border-zinc-100 pb-2">Languages</h2>
                   <div className="space-y-2 text-xs">
                      <p><span className="font-bold">Spanish:</span> Native</p>
                      <p><span className="font-bold">English:</span> Intermediate (Technical)</p>
                   </div>
                </section>
              </aside>

              {/* Main Section */}
              <div className="md:col-span-2 space-y-10">
                <section>
                  <h2 className="font-mono text-[11px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-6 border-b border-zinc-100 pb-2 flex justify-between">
                    Experience <span className="text-zinc-300">/WORK_LOG</span>
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold">Telecom Field Technician</h3>
                        <span className="text-xs text-zinc-400 font-mono">2021 — Present</span>
                      </div>
                      <p className="text-sm font-medium text-emerald-600 mb-3">PIKI Solutions S.A — Claro CR</p>
                      <ul className="text-sm text-zinc-600 space-y-2 list-none p-0">
                        <li className="flex gap-2"><span className="text-emerald-500">•</span> Instalación y configuración avanzada de infraestructura de red y routers residenciales.</li>
                        <li className="flex gap-2"><span className="text-emerald-500">•</span> Optimización de conectividad y diagnósticos técnicos en sitio.</li>
                        <li className="flex gap-2 font-bold text-zinc-800"><span className="text-emerald-500">•</span> Logro: Incremento del 30% en cierre de ventas mediante automatización de seguimiento digital.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-mono text-[11px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-6 border-b border-zinc-100 pb-2 flex justify-between">
                    Featured Projects <span className="text-zinc-300">/ENGINEERING</span>
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-bold">Zona Sur Tech (Founder)</h3>
                      <p className="text-xs font-medium text-zinc-400 mb-2 font-mono">PHP, MySQL, Linux Engine</p>
                      <p className="text-sm text-zinc-600 leading-relaxed mb-3">
                        Plataforma de infraestructura moderna centrada en la seguridad digital y escalabilidad para pequeñas empresas.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Secure Identity Engine</h3>
                      <p className="text-xs font-medium text-zinc-400 mb-2 font-mono">Security Focus, Cryptography</p>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        Sistema robusto de gestión de identidades endurecido contra vectores de ataque OWASP modernos (SQLi, XSS, Brute Force).
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Print-only footer */}
            <footer className="mt-16 pt-6 border-t border-zinc-100 text-[10px] text-zinc-300 font-mono flex justify-between">
              <span>GENERATED_BY: ZS_CORE_ENGINE_V2</span>
              <span>CONFIDENTIAL_DATA // 2026</span>
            </footer>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .cv-container { box-shadow: none !important; margin: 0 !important; width: 100% !important; padding: 0 !important; }
          header { border-color: #f1f5f9 !important; }
          .container { max-width: 100% !important; padding: 0 !important; }
          @page { margin: 15mm; }
        }
      `}</style>
    </Layout>
  );
}

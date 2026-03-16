import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import profilePhoto from "@/assets/profile-photo.png";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ShieldCheck, Globe, Cpu, Network, FileText, Download, Briefcase, Zap } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { EditableText } from "@/components/ui/EditableText";
import { useLanguage } from "@/core/LanguageContext";

const stack = [
  "HTML", "CSS", "JavaScript", "PHP",
  "MySQL", "PostgreSQL", "WordPress",
  "Linux", "Next.js", "TypeScript",
];

export default function About() {
  const { language, t } = useLanguage();

  const currentPhilosophy = language === "en" ? [
    "Security first, scalability always",
    "Build infrastructure that grows with the business",
    "Combine development with real-world field experience",
    "Deliver digital solutions with measurable impact",
  ] : [
    "Seguridad primero, escalabilidad siempre",
    "Construir infraestructura que crezca con el negocio",
    "Combinar el desarrollo con experiencia de campo real",
    "Entregar soluciones digitales con impacto medible",
  ];

  const currentSkills = language === "en" ? [
    { label: "Full Stack Web Development", Icon: Cpu },
    { label: "Cybersecurity Fundamentals", Icon: ShieldCheck },
    { label: "Network Administration",     Icon: Network },
    { label: "Digital Infrastructure",     Icon: Globe },
  ] : [
    { label: "Desarrollo Web Full Stack", Icon: Cpu },
    { label: "Fundamentos de Ciberseguridad", Icon: ShieldCheck },
    { label: "Administración de Redes", Icon: Network },
    { label: "Infraestructura Digital", Icon: Globe },
  ];

  const currentCertifications = language === "en" ? [
    { name: "Ethical Hacking Essentials", issuer: "EC-Council" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco" },
    { name: "Cybersecurity Fundamentals",   issuer: "IBM" },
    { name: "Introduction to Dark Web",     issuer: "EC-Council" },
    { name: "IT & Communication Technologies", issuer: "INA" },
  ] : [
    { name: "Fundamentos de Hacking Ético", issuer: "EC-Council" },
    { name: "Introducción a la Ciberseguridad", issuer: "Cisco" },
    { name: "Fundamentos de Ciberseguridad",   issuer: "IBM" },
    { name: "Introducción a la Dark Web",     issuer: "EC-Council" },
    { name: "Tecnologías de IT y Comunicación", issuer: "INA" },
  ];
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-grid-cyber overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px]" />
        <div className="container relative z-10">
          <motion.div {...fadeUp()} className="max-w-3xl">
            <p className="font-mono text-xs text-zs-accent-primary uppercase tracking-[0.3em] mb-4">
              {t('about.log')}
            </p>
            <h1 className="mb-6 leading-tight tracking-tighter">
              <EditableText tag="h1" className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">{t('about.title')}</span>
                <br />
                <span className="text-zs-text-secondary text-3xl md:text-4xl">
                  José Santiago Delgado Leiva
                </span>
              </EditableText>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-10">
              {/* Profile Card */}
              <motion.div {...fadeUp(0.1)} className="flex items-start gap-8 p-8 bg-zs-bg-secondary border border-zs-border-subtle rounded-2xl">
                <div className="relative shrink-0">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden border-2 border-zs-accent-primary/30 hover:border-zs-accent-primary transition-all duration-300 glow-green">
                    <img
                      src={profilePhoto}
                      alt="Santiago Delgado — Full Stack Architect"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-zs-accent-primary rounded text-[10px] font-mono text-zs-bg-primary font-bold">
                    ONLINE
                  </div>
                </div>
                <div className="space-y-3">
                  <EditableText tag="h2" className="text-xl font-bold text-zs-text-primary">
                    {t('about.role')}
                  </EditableText>
                  <EditableText tag="p" className="text-sm text-zs-text-secondary font-mono">
                    @ ZONA_SUR_TECH · San Isidro, Pérez Zeledón, CR
                  </EditableText>
                  <EditableText tag="p" className="text-sm text-zs-text-muted leading-relaxed">
                    Builder of things that run fast, stay secure, and scale elegantly.
                    Combining development + cybersecurity + telecom field experience.
                  </EditableText>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div {...fadeUp(0.2)} className="space-y-5 text-zs-text-secondary leading-relaxed">
                <EditableText tag="p">
                  {t('about.bio1')}
                </EditableText>
                <EditableText tag="p">
                  {t('about.bio2')}
                </EditableText>
                
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button className="font-mono h-12 px-8 rounded-xl glow-green hover:scale-[1.02] transition-all" asChild>
                    <Link to={`/${language}/cv`}>
                      <FileText className="mr-2 h-4 w-4" />
                      {t('cv.view')}
                    </Link>
                  </Button>
                  <Button variant="outline" className="font-mono h-12 px-8 rounded-xl border-zs-border-subtle" asChild>
                    <a href="mailto:delgadoleiva60@gmail.com">
                      <FileText className="mr-2 h-4 w-4" />
                      GET_IN_TOUCH
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div {...fadeUp(0.3)}>
                <CodeDivider label="PROFESSIONAL_EXPERIENCE" />
                <div className="space-y-8 mt-6">
                  <div className="relative pl-8 border-l border-zs-border-subtle hover:border-zs-accent-primary transition-colors group">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-zs-bg-primary border-2 border-zs-accent-primary group-hover:scale-125 transition-transform" />
                    <div className="space-y-2">
                       <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-zs-text-primary">Telecom Field Technician</h3>
                          <p className="font-mono text-xs text-zs-accent-primary">PIKI Solutions S.A — Claro CR</p>
                        </div>
                        <span className="font-mono text-[10px] px-2 py-1 bg-zs-bg-secondary border border-zs-border-subtle rounded text-zs-text-muted">
                          2021 — PRESENT
                        </span>
                      </div>
                      <div className="text-sm text-zs-text-secondary space-y-2">
                        <p>Specialized in high-speed connectivity infrastructure and network optimization.</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 font-mono text-[11px] text-zs-text-muted">
                          <li className="flex items-center gap-2">
                            <Briefcase className="h-3 w-3 text-zs-accent-primary/50" />
                            Router_Configuration
                          </li>
                          <li className="flex items-center gap-2">
                            <Briefcase className="h-3 w-3 text-zs-accent-primary/50" />
                            Network_Sustenance
                          </li>
                          <li className="flex items-center gap-2">
                            <Briefcase className="h-3 w-3 text-zs-accent-primary/50" />
                            Client_Infrastructure
                          </li>
                          <li className="flex items-center gap-2 text-zs-accent-primary font-bold">
                            <Zap className="h-3 w-3" />
                            +30%_Sales_Closure
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Philosophy */}
              <motion.div {...fadeUp(0.3)}>
                <CodeDivider label="CORE_PHILOSOPHY" />
                <div className="grid gap-3 mt-2">
                  {currentPhilosophy.map((line, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-zs-bg-secondary/50 border border-zs-border-subtle/50 rounded-xl hover:border-zs-accent-primary/30 hover:bg-zs-bg-secondary transition-all"
                    >
                      <span className="text-zs-accent-primary font-mono text-sm shrink-0">0{i + 1}.</span>
                      <span className="text-sm text-zs-text-secondary">{line}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Skills */}
              <motion.div {...fadeUp(0.2)}>
                <h2 className="font-mono text-[10px] text-zs-text-muted uppercase tracking-[0.25em] mb-4">
                  [ SKILL_SET ]
                </h2>
                <div className="grid gap-2">
                  {currentSkills.map(({ label, Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 px-4 py-3 bg-zs-bg-secondary border border-zs-border-subtle rounded-xl hover:border-zs-accent-primary/30 transition-colors group"
                    >
                      <Icon className="h-4 w-4 text-zs-accent-primary/60 group-hover:text-zs-accent-primary transition-colors shrink-0" />
                      <span className="text-sm text-zs-text-secondary">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div {...fadeUp(0.3)}>
                <h2 className="font-mono text-[10px] text-zs-text-muted uppercase tracking-[0.25em] mb-4">
                  [ TECH_STACK ]
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div {...fadeUp(0.4)}>
                <h2 className="font-mono text-[10px] text-zs-text-muted uppercase tracking-[0.25em] mb-4">
                  [ CERTIFICATIONS ]
                </h2>
                <div className="space-y-2">
                  {currentCertifications.map(({ name, issuer }) => (
                    <div
                      key={name}
                      className="p-3 bg-zs-bg-secondary border border-zs-border-subtle rounded-lg"
                    >
                      <p className="text-xs font-medium text-zs-text-primary">{name}</p>
                      <p className="text-[10px] font-mono text-zs-accent-primary/70 mt-0.5">{issuer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div {...fadeUp(0.5)}>
                <h2 className="font-mono text-[10px] text-zs-text-muted uppercase tracking-[0.25em] mb-4">
                  [ LANGUAGES ]
                </h2>
                <div className="space-y-2">
                  {[
                    { lang: "Spanish", level: "Native", pct: 100 },
                    { lang: "English",  level: "Intermediate", pct: 65 },
                  ].map(({ lang, level, pct }) => (
                    <div key={lang} className="p-4 bg-zs-bg-secondary border border-zs-border-subtle rounded-xl">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-zs-text-primary font-medium">{lang}</span>
                        <span className="font-mono text-zs-text-muted">{level}</span>
                      </div>
                      <div className="h-1 bg-zs-bg-primary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-zs-accent-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

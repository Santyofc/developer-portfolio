import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { projects } from "@/data/projects";
import { 
  ArrowLeft, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Server, 
  Zap,
  ExternalLink,
  Code2
} from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/core/LanguageContext";

export default function ProjectDetail() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const project = projects.find((p) => p.id === id);
  
  const content = project ? (project[language as Language] || project.en) : null;

  if (!project || !content) {
    return (
      <Layout>
        <div className="container py-40 text-center font-mono">
          <h1 className="text-3xl font-bold mb-4">[ ERROR: RECORD_NOT_FOUND ]</h1>
          <Link to={`/${language}`} className="text-zs-accent-primary hover:underline">← {t('nav.home').toUpperCase()}</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Header Section */}
        <section className="relative pt-32 pb-20 border-b border-zs-border-subtle overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-cyber opacity-20" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-zs-accent-primary/5 rounded-full blur-[120px]" />
          
          <div className="container relative z-10">
            <Link 
              to={`/${language}/work`} 
              className="inline-flex items-center gap-2 mb-8 font-mono text-xs text-zs-text-muted hover:text-zs-accent-primary transition-colors transition-transform hover:-translate-x-1"
            >
              <ArrowLeft className="h-4 w-4" /> 
              [ BACK_TO_FILES ]
            </Link>
            
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
              <div className="max-w-3xl">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  <span className="inline-block px-3 py-1 rounded-full bg-zs-accent-primary/10 border border-zs-accent-primary/20 font-mono text-[10px] text-zs-accent-primary mb-6 uppercase tracking-widest">
                    {project.category} // CASE_STUDY_REF_{project.id.toUpperCase()}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                    {content.title}
                  </h1>
                  <p className="text-xl text-zs-text-secondary leading-relaxed mb-8">
                    {content.fullDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zs-bg-secondary border border-zs-border-subtle rounded-md font-mono text-xs text-zs-text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="w-full lg:w-80 space-y-4">
                {project.link && (
                  <Button asChild className="w-full h-12 rounded-xl font-mono glow-green" variant="default">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      DEPLOYED_APP <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild className="w-full h-12 rounded-xl font-mono" variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      SOURCE_CODE <Code2 className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-16">
              
              {/* Main Column */}
              <div className="lg:col-span-2 space-y-20">
                
                {/* 1. Problem & Solution */}
                <motion.div {...fadeUp(0.1)} className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-zs-accent-primary">
                      <Terminal className="h-5 w-5" />
                      <h2 className="font-mono text-xs uppercase tracking-widest">[ PROBLEM_STATEMENT ]</h2>
                    </div>
                    <p className="text-zs-text-secondary leading-relaxed">
                      {content.problem}
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-zs-accent-primary">
                      <Zap className="h-5 w-5" />
                      <h2 className="font-mono text-xs uppercase tracking-widest">[ DEV_SOLUTION ]</h2>
                    </div>
                    <p className="text-zs-text-secondary leading-relaxed">
                      {content.solution}
                    </p>
                  </div>
                </motion.div>

                {/* 2. System Architecture / Diagram */}
                <motion.div {...fadeUp(0.2)}>
                  <div className="flex items-center gap-3 text-zs-accent-primary mb-8">
                    <Cpu className="h-5 w-5" />
                    <h2 className="font-mono text-xs uppercase tracking-widest">[ SYSTEM_ARCHITECTURE ]</h2>
                  </div>
                  
                  <div className="p-8 bg-zs-bg-secondary border border-zs-border-subtle rounded-2xl mb-10">
                    {/* Simulated Mermaid Diagram Placeholder */}
                    <div className="aspect-video bg-zs-bg-primary/50 border border-zs-border-subtle rounded-xl flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-grid-cyber opacity-10" />
                      <div className="text-center font-mono">
                         <div className="flex justify-center gap-8 mb-4">
                            <div className="p-3 border border-zs-accent-primary/40 rounded bg-zs-bg-primary">FE</div>
                            <div className="self-center text-zs-accent-primary">──▶</div>
                            <div className="p-3 border border-zs-accent-primary/40 rounded bg-zs-bg-primary">BE</div>
                            <div className="self-center text-zs-accent-primary">──▶</div>
                            <div className="p-3 border border-zs-accent-primary/40 rounded bg-zs-bg-primary">DB</div>
                         </div>
                         <p className="text-[10px] text-zs-text-muted">// ARCH_DIAGRAM_V1.0</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-zs-bg-secondary border border-zs-border-subtle rounded-xl">
                      <span className="font-mono text-[10px] text-zs-text-muted uppercase">Presentation</span>
                      <p className="text-sm font-medium mt-1">{content.architecture.frontend}</p>
                    </div>
                    <div className="p-4 bg-zs-bg-secondary border border-zs-border-subtle rounded-xl">
                      <span className="font-mono text-[10px] text-zs-text-muted uppercase">Engine</span>
                      <p className="text-sm font-medium mt-1">{content.architecture.backend}</p>
                    </div>
                    <div className="p-4 bg-zs-bg-secondary border border-zs-border-subtle rounded-xl">
                      <span className="font-mono text-[10px] text-zs-text-muted uppercase">Storage</span>
                      <p className="text-sm font-medium mt-1">{content.architecture.database}</p>
                    </div>
                    <div className="p-4 bg-zs-bg-secondary border border-zs-border-subtle rounded-xl">
                      <span className="font-mono text-[10px] text-zs-text-muted uppercase">Infrastructure</span>
                      <p className="text-sm font-medium mt-1">{content.architecture.infrastructure}</p>
                    </div>
                  </div>
                </motion.div>

                {/* 3. Technical Decisions */}
                <motion.div {...fadeUp(0.3)}>
                   <div className="flex items-center gap-3 text-zs-accent-primary mb-8">
                    <ShieldCheck className="h-5 w-5" />
                    <h2 className="font-mono text-xs uppercase tracking-widest">[ ENGINEERING_DECISIONS ]</h2>
                  </div>
                  <div className="space-y-6">
                    {content.decisions.map((d, i) => (
                      <div key={i} className="p-6 bg-zs-bg-secondary/50 border-l-2 border-zs-accent-primary rounded-r-xl">
                        <h3 className="font-bold text-lg mb-2 text-zs-text-primary underline decoration-zs-accent-primary/30 decoration-2 underline-offset-4">{d.question}</h3>
                        <p className="text-zs-text-secondary leading-relaxed italic">
                          " {d.answer} "
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>

              {/* Sidebar Column */}
              <div className="space-y-12">
                
                {/* Challenges */}
                <motion.div {...fadeUp(0.4)} className="space-y-6">
                  <h2 className="font-mono text-xs text-zs-accent-primary uppercase tracking-widest">[ CRITICAL_CHALLENGES ]</h2>
                  <div className="space-y-4">
                    {content.challenges.map((c, i) => (
                      <div key={i} className="p-5 bg-zs-bg-primary border border-zs-border-subtle rounded-xl hover:border-zs-accent-primary/30 transition-colors">
                        <h3 className="text-sm font-bold text-zs-accent-primary mb-2 flex items-center gap-2">
                           <Zap className="h-3 w-3" /> {c.title}
                        </h3>
                        <p className="text-xs text-zs-text-muted leading-relaxed">
                          {c.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Learnings */}
                <motion.div {...fadeUp(0.5)} className="space-y-6">
                  <h2 className="font-mono text-xs text-zs-accent-primary uppercase tracking-widest">[ CORE_LEARNINGS ]</h2>
                  <ul className="space-y-3 font-mono text-[11px] text-zs-text-secondary uppercase">
                    {content.learnings.map((l, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="text-zs-accent-primary">•</span> 
                        {l}
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

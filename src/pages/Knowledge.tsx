import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  BookOpen, 
  Terminal, 
  ShieldAlert, 
  Cpu, 
  Code2, 
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { useLanguage, Language } from "@/core/LanguageContext";

const articlesContent = {
  en: [
    {
      category: "Cybersecurity",
      title: "The Architecture of a Secure Auth Engine",
      excerpt: "Why BCRYPT and session rotation are only the tip of the iceberg in modern identity systems.",
      date: "2026-03-10",
      readTime: "5 min read"
    },
    {
      category: "Architecture",
      title: "PHP vs Node.js in 2026: A Contextual Analysis",
      excerpt: "Decoupling runtime performance from scalability when designing small-to-medium enterprise solutions.",
      date: "2026-03-05",
      readTime: "8 min read"
    },
    {
      category: "Snippets",
      title: "Hardening Linux/Apache for Web Apps",
      excerpt: "A collection of configuration scripts to mitigate common OWASP Top 10 vulnerabilities at the server level.",
      date: "2026-02-28",
      readTime: "4 min read"
    }
  ],
  es: [
    {
      category: "Ciberseguridad",
      title: "La Arquitectura de un Motor de Autenticación Seguro",
      excerpt: "Por qué BCRYPT y la rotación de sesiones son solo la punta del iceberg en los sistemas de identidad modernos.",
      date: "2026-03-10",
      readTime: "5 min lectura"
    },
    {
      category: "Arquitectura",
      title: "PHP vs Node.js en 2026: Un Análisis Contextual",
      excerpt: "Desacoplando el rendimiento del tiempo de ejecución de la escalabilidad al diseñar soluciones para pequeñas y medianas empresas.",
      date: "2026-03-05",
      readTime: "8 min lectura"
    },
    {
      category: "Snippets",
      title: "Fortalecimiento de Linux/Apache para Aplicaciones Web",
      excerpt: "Una colección de scripts de configuración para mitigar vulnerabilidades comunes de OWASP Top 10 a nivel de servidor.",
      date: "2026-02-28",
      readTime: "4 min lectura"
    }
  ]
};

const getIcon = (category: string) => {
  if (category.includes("Cyber") || category.includes("Ciber")) return ShieldAlert;
  if (category.includes("Arch") || category.includes("Arqu")) return Cpu;
  return Terminal;
};

export default function Knowledge() {
  const { language, t } = useLanguage();
  const currentArticles = articlesContent[language as Language] || articlesContent.en;
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-40 pb-20 border-b border-zs-border-subtle bg-grid-cyber">
          <div className="container relative">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zs-accent-primary/10 border border-zs-accent-primary/20 font-mono text-[10px] text-zs-accent-primary mb-6">
                 [ KNOWLEDGE_BASE.INIT ]
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                <span className="text-gradient">{t('knowledge.title')}</span>
              </h1>
              <p className="text-lg text-zs-text-secondary max-w-2xl leading-relaxed">
                {t('knowledge.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentArticles.map((article, idx) => {
                const Icon = getIcon(article.category);
                return (
                  <motion.article 
                    key={article.title}
                    {...fadeUp(0.1 * idx)}
                    className="group relative flex flex-col p-8 bg-zs-bg-secondary border border-zs-border-subtle rounded-2xl hover:border-zs-accent-primary/40 transition-all cursor-pointer overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                       <Icon className="w-24 h-24" />
                    </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="font-mono text-[9px] text-zs-accent-primary uppercase tracking-[0.2em] px-2 py-0.5 border border-zs-accent-primary/20 rounded">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-zs-text-muted font-mono">{article.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-4 group-hover:text-zs-accent-primary transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-sm text-zs-text-secondary leading-relaxed mb-10">
                      {article.excerpt}
                    </p>
                    
                    <div className="mt-auto flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zs-text-muted">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1 group-hover:gap-3 group-hover:text-zs-accent-primary transition-all">
                        {language === "en" ? "READ_LOG" : "VER_LOG"} <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              )})}
            </div>

            {/* Quick Snippet Console */}
            <div className="mt-32 p-8 bg-zs-bg-primary border border-zs-border-subtle rounded-2xl border-dashed">
               <div className="flex items-center gap-3 mb-8">
                  <Code2 className="h-5 w-5 text-zs-accent-primary" />
                  <h2 className="font-mono text-xs uppercase tracking-widest">Incoming_Snippets (BETA)</h2>
               </div>
               <div className="bg-zs-bg-secondary p-6 rounded-xl border border-zs-border-subtle font-mono text-[13px] overflow-x-auto text-zs-text-secondary">
                  <code className="block mb-2 text-zs-accent-primary opacity-50">// Session Hardening Patch</code>
                  <div className="flex gap-4">
                    <span className="text-zs-text-muted">01</span>
                    <span>ini_set('session.cookie_httponly', 1);</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-zs-text-muted">02</span>
                    <span>ini_set('session.use_only_cookies', 1);</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-zs-text-muted">03</span>
                    <span>session_regenerate_id(true);</span>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

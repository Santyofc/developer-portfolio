import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/core/LanguageContext";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Work() {
  const { t } = useLanguage();
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-grid-cyber overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-96 h-64 bg-zs-accent-secondary/5 rounded-full blur-[120px]" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs text-zs-accent-primary uppercase tracking-[0.3em] mb-4">
              [ PROJECT_REGISTRY.json ]
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="text-gradient">{t('work.title')}</span>
            </h1>
            <p className="text-lg text-zs-text-secondary max-w-xl leading-relaxed">
              {t('work.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <CodeDivider label={`TOTAL_PROJECTS: ${projects.length}`} />
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 mt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

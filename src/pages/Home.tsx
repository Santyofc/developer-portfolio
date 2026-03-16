import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowRight, Briefcase, Zap } from "lucide-react";
import { projects } from "@/data/projects";
import { EditableText } from "@/components/ui/EditableText";
import { useLanguage } from "@/core/LanguageContext";

const featuredProjects = projects.slice(0, 2);

export default function Home() {
  const { language, t } = useLanguage();
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-grid-cyber">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] animate-glow-pulse delay-1000" />

        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Code-style label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CodeLabel className="mb-6 border-zs-accent-primary/50 text-zs-accent-primary bg-zs-accent-primary/5">
                Senior Full Stack SaaS Architect
              </CodeLabel>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="mb-8 leading-[1.1] tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <EditableText tag="h1" className="text-5xl md:text-7xl lg:text-8xl font-bold">
                <span className="text-gradient">{t('hero.name')}</span>
                <br />
                <span className="text-zs-text-secondary text-4xl md:text-6xl lg:text-7x">
                  {t('hero.headline')}
                </span>
              </EditableText>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <EditableText tag="p" className="text-lg md:text-xl text-zs-text-muted">
                {t('hero.subheadline')}
              </EditableText>
            </motion.p>

            {/* CTA */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Button className="font-mono h-12 px-8 rounded-xl glow-green hover:scale-[1.02] transition-all" asChild>
                  <Link to={`/${language}/work`}>
                    <Briefcase className="mr-2 h-4 w-4" />
                    {t('hero.cta.work')}
                  </Link>
                </Button>
                <Button variant="outline" className="font-mono h-12 px-8 rounded-xl border-zs-border-subtle" asChild>
                  <Link to={`/${language}/contact`}>
                    <Zap className="mr-2 h-4 w-4" />
                    {t('hero.cta.contact')}
                  </Link>
                </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 relative bg-zs-bg-primary">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <CodeDivider label="FEATURED_PROJECTS" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* View All Link */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link 
              to={`/${language}/work`} 
              className="group inline-flex items-center font-mono text-sm text-zs-text-muted hover:text-zs-accent-primary transition-colors py-4 px-8 rounded-full border border-zs-border-subtle hover:border-zs-accent-primary/30 bg-zs-bg-secondary/50 backdrop-blur-sm"
            >
              <span className="text-zs-accent-primary mr-2 opacity-50 group-hover:opacity-100 transition-opacity">{"//"}</span>
              {t('work.view_all')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

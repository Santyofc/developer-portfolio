import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TechTag } from "./TechTag";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

import { Project } from "@/types/project";
import { useLanguage, Language } from "@/core/LanguageContext";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { language } = useLanguage();
  const content = project[language as Language] || project.en;
  const { title, description } = content;
  const { tags, id } = project;
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link to={`/${language}/work/${id}`} className="block h-full">
        <article
          className={cn(
            "group h-full p-8 bg-zs-bg-secondary border border-zs-border-subtle rounded-2xl transition-all hover:border-zs-accent-primary/40 hover:bg-zs-bg-tertiary cursor-pointer relative overflow-hidden",
            className
          )}
        >
          {/* Subtle Ambient Glow on Hover */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            {/* Project Name */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-xl font-bold text-zs-text-primary group-hover:text-zs-accent-primary transition-colors">
                {title}
              </h3>
              <div className="p-2 rounded-full bg-zs-bg-primary border border-zs-border-subtle group-hover:border-zs-accent-primary/50 transition-colors">
                <ArrowRight className="h-4 w-4 text-zs-text-muted group-hover:text-zs-accent-primary group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zs-text-secondary mb-6 leading-relaxed">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tech) => (
                <TechTag key={tech} className="bg-zs-bg-primary text-[10px] py-0.5 border-zs-border-subtle">
                  {tech}
                </TechTag>
              ))}
            </div>

            {/* Impact indicator - Using category as system type */}
            <div className="pt-5 border-t border-zs-border-subtle">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-zs-accent-primary animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-zs-accent-primary/80">
                  SYSTEM_TYPE: {project.category}
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

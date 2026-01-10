import { TechTag } from "./TechTag";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string[];
  impact: string;
  className?: string;
}

export function ProjectCard({ name, description, stack, impact, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group p-6 bg-card border border-border rounded-lg transition-colors hover:border-primary/50",
        className
      )}
    >
      {/* Project Name */}
      <h3 className="font-mono text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
        {name}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>

      {/* Impact */}
      <div className="pt-4 border-t border-border">
        <span className="font-mono text-xs text-primary">
          <span className="text-muted-foreground">{"//"}</span> {impact}
        </span>
      </div>
    </article>
  );
}

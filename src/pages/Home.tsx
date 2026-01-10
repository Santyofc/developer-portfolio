import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    name: "Scalable Fintech Platform",
    description: "Development of a scalable financial platform handling millions of transactions with real-time processing and robust security measures.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    impact: "35% latency reduction, millions of users supported",
  },
  {
    name: "Internal Design System",
    description: "Creation of a robust design system enabling multiple teams to build consistent, accessible interfaces at scale.",
    stack: ["React", "Storybook", "CSS-in-JS"],
    impact: "40% increase in team productivity",
  },
  {
    name: "Real-Time Analytics Dashboard",
    description: "Real-time dashboard for instant decision-making with live data visualization and customizable metrics.",
    stack: ["Next.js", "WebSockets", "D3.js"],
    impact: "Instant insights for product and business teams",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-grid">
        <div className="container">
          <div className="max-w-3xl">
            {/* Code-style label */}
            <CodeLabel className="mb-6">Senior Developer</CodeLabel>

            {/* Headline with typing cursor */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              I design and build reliable digital systems
              <TypingCursor />
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Focused on building products that scale, perform, and deliver real impact. 
              Working at the intersection of engineering, product, and design to turn 
              complex problems into elegant solutions.
            </p>

            {/* CTA */}
            <Button asChild size="lg" className="font-mono">
              <Link to="/work">
                View Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <CodeDivider label="Featured Work" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <Link 
              to="/work" 
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary mr-2">{"//"}</span>
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

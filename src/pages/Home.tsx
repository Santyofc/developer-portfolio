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
    name: "Zona Sur Tech",
    slug: "zona-sur-tech",
    description: "Technology platform focused on developing modern software infrastructure, secure digital systems, and scalable web solutions for businesses in Costa Rica and beyond.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    impact: "Full stack web development with secure authentication systems",
  },
  {
    name: "Secure Authentication Systems",
    slug: "secure-authentication-systems",
    description: "Implementation of secure identity and authentication systems with cybersecurity best practices, ethical hacking fundamentals, and network security principles.",
    stack: ["PHP", "MySQL", "Linux", "Network Security"],
    impact: "Robust identity management with security-first approach",
  },
  {
    name: "Telecom Field Operations",
    slug: "telecom-field-operations",
    description: "Technical sales and field support for Claro telecommunications services, including router configuration, network troubleshooting, and digital client management.",
    stack: ["Networking", "Router Config", "CRM", "WhatsApp Business"],
    impact: "30% increase in sales closure rate through structured follow-up",
  },
  {
    name: "Digital Infrastructure Solutions",
    slug: "digital-infrastructure-solutions",
    description: "Distributed web infrastructure and high-performance web platforms built with scalable backend architecture and modern development practices.",
    stack: ["PostgreSQL", "WordPress", "PHP", "MySQL"],
    impact: "Scalable backend architecture for growing businesses",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-grid">
        <div className="container">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            {/* Code-style label */}
            <CodeLabel className="mb-6">Founder & Full Stack Developer</CodeLabel>

            {/* Headline with typing cursor */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm Santiago Delgado.
              <br />
              <span className="text-muted-foreground">I build secure digital systems</span>
              <TypingCursor />
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              A Costa Rica-based developer focused on building scalable digital infrastructure, 
              secure identity systems, and modern web platforms. 
              Founder of Zona Sur Tech — combining software development, cybersecurity, 
              and telecom experience to deliver real impact.
            </p>

            {/* CTA */}
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <Button asChild size="lg" className="font-mono transition-transform hover:scale-105">
                <Link to="/work">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label="Featured Work" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.name} 
                className={`opacity-0 animate-fade-in-up stagger-${index + 1}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link 
              to="/work" 
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
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

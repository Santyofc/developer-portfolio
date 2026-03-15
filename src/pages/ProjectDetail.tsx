import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData: Record<string, {
  name: string;
  description: string;
  fullDescription: string;
  stack: string[];
  impact: string;
  challenges: string[];
  features: string[];
  liveUrl?: string;
}> = {
  "zona-sur-tech": {
    name: "Zona Sur Tech",
    description: "Technology platform focused on developing modern software infrastructure and secure digital systems.",
    fullDescription: "Founded and built Zona Sur Tech, a technology initiative focused on developing modern software infrastructure, secure digital systems, and scalable web platforms. The project combines full stack web development with cybersecurity principles to deliver robust digital solutions for businesses in Costa Rica and beyond.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
    impact: "Scalable digital infrastructure serving multiple businesses",
    challenges: [
      "Building secure authentication systems from scratch",
      "Designing distributed web infrastructure for reliability",
      "Creating high-performance platforms with limited resources",
      "Integrating cybersecurity best practices into every layer"
    ],
    features: [
      "Full stack web development platform",
      "Secure authentication and identity systems",
      "Distributed web infrastructure",
      "High-performance web platforms",
      "Scalable backend architecture"
    ],
    liveUrl: "https://zonasurtech.online"
  },
  "secure-authentication-systems": {
    name: "Secure Authentication Systems",
    description: "Implementation of secure identity and authentication systems with cybersecurity best practices.",
    fullDescription: "Designed and implemented secure identity and authentication systems applying cybersecurity fundamentals learned through EC-Council, Cisco, and IBM certifications. Built with a security-first approach, incorporating ethical hacking principles, network security basics, and robust access control mechanisms.",
    stack: ["PHP", "MySQL", "Linux", "Network Security", "Ethical Hacking"],
    impact: "Robust identity management with security-first approach",
    challenges: [
      "Implementing secure password hashing and session management",
      "Protecting against common web vulnerabilities (XSS, CSRF, SQL injection)",
      "Designing multi-layer authentication flows",
      "Applying ethical hacking knowledge to identify and fix vulnerabilities"
    ],
    features: [
      "Secure user registration and login systems",
      "Session management with proper token handling",
      "Input validation and sanitization",
      "Security audit logging and monitoring"
    ]
  },
  "telecom-field-operations": {
    name: "Telecom Field Operations — Claro",
    description: "Technical sales and field support for Claro telecommunications services.",
    fullDescription: "Provided technical sales and field support for Claro telecommunications services through PIKI Solutions S.A. and Brenda Marrero & Associates. Responsibilities included installation and configuration of home internet routers, network troubleshooting, customer technical assistance, and digital client management. Implemented digital form processes that reduced registration errors by 18%.",
    stack: ["Networking", "Router Configuration", "CRM Tools", "WhatsApp Business", "Digital Forms"],
    impact: "30% increase in sales closure rate, 18% reduction in registration errors",
    challenges: [
      "Diagnosing and resolving diverse network connectivity issues in the field",
      "Managing customer expectations while delivering technical solutions",
      "Implementing digital workflows for traditionally manual processes",
      "Maintaining high conversion rates in competitive telecom market"
    ],
    features: [
      "Home internet router installation and configuration",
      "Network troubleshooting and customer technical assistance",
      "Digital client management and service activation",
      "Structured client follow-up system for improved conversion"
    ]
  },
  "digital-infrastructure-solutions": {
    name: "Digital Infrastructure Solutions",
    description: "Distributed web infrastructure and high-performance web platforms.",
    fullDescription: "Built distributed web infrastructure and high-performance web platforms using scalable backend architecture and modern development practices. Projects include WordPress-based solutions with custom themes and plugins, database management with MySQL and PostgreSQL, and server administration for reliable hosting environments.",
    stack: ["PostgreSQL", "WordPress", "PHP", "MySQL", "Linux", "VS Code"],
    impact: "Scalable backend architecture for growing businesses",
    challenges: [
      "Optimizing database queries for large datasets",
      "Configuring server environments for maximum uptime",
      "Building custom WordPress solutions beyond standard themes",
      "Managing multiple client projects with varying requirements"
    ],
    features: [
      "Custom WordPress development (Astra, Beaver, Gutenberg)",
      "Database design and management with MySQL/PostgreSQL",
      "Server configuration and Linux administration",
      "Performance optimization and caching strategies"
    ]
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
              <Button asChild>
                <Link to="/work">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Work
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/work" 
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>

          {/* Project Header */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {project.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            {/* Impact */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <span className="font-mono text-sm text-primary">
                <span className="text-muted-foreground">{"//"}</span> Impact: {project.impact}
              </span>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label="Challenges" />
          </div>

          {/* Challenges */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-3">
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-3">
            <CodeDivider label="Features" />
          </div>

          {/* Features */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-4">
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-border opacity-0 animate-fade-in-up stagger-4">
            {project.liveUrl ? (
              <Button variant="outline" className="font-mono" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Site
                </a>
              </Button>
            ) : (
              <Button variant="outline" className="font-mono" disabled>
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

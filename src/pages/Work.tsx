import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    name: "Zona Sur Tech",
    slug: "zona-sur-tech",
    description: "Technology platform focused on developing modern software infrastructure, secure digital systems, and scalable web solutions. Full stack web development with secure authentication and distributed architecture.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    impact: "Scalable digital infrastructure for businesses",
  },
  {
    name: "Secure Authentication Systems",
    slug: "secure-authentication-systems",
    description: "Implementation of secure identity and authentication systems applying cybersecurity best practices, ethical hacking fundamentals, and network security principles for robust digital platforms.",
    stack: ["PHP", "MySQL", "Linux", "Network Security"],
    impact: "Security-first identity management systems",
  },
  {
    name: "Telecom Field Operations — Claro",
    slug: "telecom-field-operations",
    description: "Technical sales and field support for Claro telecommunications services at PIKI Solutions S.A. Router installation/configuration, network troubleshooting, and digital client management.",
    stack: ["Networking", "Router Config", "CRM", "WhatsApp Business"],
    impact: "30% increase in sales closure rate",
  },
  {
    name: "Digital Infrastructure Solutions",
    slug: "digital-infrastructure-solutions",
    description: "Distributed web infrastructure and high-performance web platforms built with scalable backend architecture, database management, and modern development practices.",
    stack: ["PostgreSQL", "WordPress", "PHP", "MySQL"],
    impact: "Scalable backend architecture for growing businesses",
  },
];

export default function Work() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              A selection of projects showcasing web development, cybersecurity, 
              and digital infrastructure. Each project combines security, scalability, 
              and modern technologies to deliver real impact.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Projects" />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

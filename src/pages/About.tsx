import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";

const skills = [
  "Full Stack Web Development",
  "Cybersecurity Fundamentals",
  "Network Administration",
  "Systems Infrastructure",
  "Technical Sales & Support",
  "Digital Client Management",
];

const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "WordPress",
  "Linux",
  "VS Code",
];

const certifications = [
  "Ethical Hacking Essentials — EC-Council",
  "Introduction to Cybersecurity — Cisco",
  "Cybersecurity Fundamentals — IBM",
  "Introduction to Dark Web — EC-Council",
  "IT & Communication Technologies — INA",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Developer Photo */}
              <div className="mb-8 opacity-0 animate-fade-in-up stagger-1">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-primary/30 transition-all duration-300 hover:border-primary">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="José Santiago Delgado Leiva - Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <span className="text-primary font-medium">José Santiago Delgado Leiva</span>, 
                  Founder and Full Stack Developer at Zona Sur Tech, based in San Isidro del General, 
                  Pérez Zeledón, Costa Rica.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  I have hands-on experience in web development, telecommunications infrastructure, 
                  networking, and cybersecurity fundamentals. I created Zona Sur Tech, a technology 
                  initiative focused on building scalable digital infrastructure, secure identity 
                  systems, and modern web platforms.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-muted-foreground leading-relaxed">
                  My background combines software development, IT support, and telecom technical 
                  services, with a strong interest in cybersecurity, distributed systems, and 
                  digital infrastructure. I build solutions that combine security, scalability, 
                  and modern web technologies.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Philosophy" />
              </div>

              <div className="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Security first, scalability always
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Build infrastructure that grows with the business
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Combine development with real-world field experience
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Deliver digital solutions with measurable impact
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills */}
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Skills <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <span className="text-primary mr-2">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Stack <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Certifications <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <span className="text-primary mr-2">✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Languages <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Spanish (Native)</p>
                  <p>English (Intermediate)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

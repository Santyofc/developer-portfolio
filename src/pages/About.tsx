import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";

const skills = [
  "Systems Architecture",
  "Frontend Engineering",
  "API Design",
  "Performance Optimization",
  "Technical Leadership",
  "Product Development",
];

const stack = [
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Next.js",
  "GraphQL",
  "Redis",
  "Docker",
  "AWS",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a developer focused on building systems that scale, perform, and last. 
                I work at the intersection of engineering, product, and design, turning 
                complex problems into reliable digital solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With years of experience in the industry, I've worked on everything from 
                early-stage startups to enterprise-scale systems. My approach combines 
                technical depth with product thinking — always focused on delivering 
                real impact, not just shipping code.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I believe in writing code that's maintainable, documented, and built to 
                evolve. Every system I design considers not just the current requirements, 
                but how it will need to change and scale over time.
              </p>

              <CodeDivider label="Philosophy" />

              <div className="space-y-4 font-mono text-sm">
                <p className="text-muted-foreground">
                  <span className="text-primary">{"//"}</span> Build for reliability, not just speed
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">{"//"}</span> Measure impact, not just output
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">{"//"}</span> Simplify complexity, don't hide it
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">{"//"}</span> Document decisions, not just code
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills */}
              <div>
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Skills <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">
                      <span className="text-primary mr-2">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Stack <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Experience <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>8+ years in software development</p>
                  <p>Startups to enterprise scale</p>
                  <p>Remote-first since 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

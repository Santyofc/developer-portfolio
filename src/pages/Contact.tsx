import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send, Phone, Globe, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { href: "https://www.linkedin.com/in/santi-delgados/", icon: Linkedin, label: "LinkedIn", handle: "/in/santi-delgados" },
  { href: "mailto:delgadoleiva60@gmail.com", icon: Mail, label: "Email", handle: "delgadoleiva60@gmail.com" },
  { href: "tel:+50660581663", icon: Phone, label: "Phone", handle: "+506 6058 1663" },
  { href: "https://zonasurtech.online", icon: Globe, label: "Zona Sur Tech", handle: "zonasurtech.online" },
  { href: "https://www.instagram.com/santidelgados", icon: Instagram, label: "Instagram", handle: "@santidelgados" },
  { href: "https://www.facebook.com/SantiagoDelgado.666/", icon: Facebook, label: "Facebook", handle: "SantiagoDelgado" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or want to discuss opportunities? 
              I'm always open to interesting conversations and collaborations.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <CodeDivider label="Send a Message" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-sm">
                    <span className="text-primary">//</span> Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-sm">
                    <span className="text-primary">//</span> Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-sm">
                    <span className="text-primary">//</span> Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-card border-border font-mono text-sm resize-none"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="font-mono">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <CodeDivider label="Connect" />
              
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                      <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {link.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-8 p-4 bg-card border border-border rounded-lg">
                <p className="font-mono text-xs text-muted-foreground mb-2">
                  <span className="text-primary">/*</span> Location <span className="text-primary">*/</span>
                </p>
                <p className="text-sm text-foreground mb-3">
                  San Isidro del General, Pérez Zeledón, Costa Rica
                </p>
                <p className="font-mono text-xs text-muted-foreground mb-2">
                  <span className="text-primary">/*</span> Availability <span className="text-primary">*/</span>
                </p>
                <p className="text-sm text-foreground">
                  Currently open to new opportunities and freelance projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

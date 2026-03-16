import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Mail, Send, Phone, Globe, Instagram, Facebook, MapPin, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { fadeUp } from "@/lib/motion";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "@/core/LanguageContext";

const socialLinks = [
  { href: "https://www.linkedin.com/in/santi-delgados/", icon: Linkedin, label: "LinkedIn",    handle: "/in/santi-delgados", color: "hover:border-blue-500/40 hover:text-blue-400" },
  { href: "mailto:delgadoleiva60@gmail.com",             icon: Mail,     label: "Email",       handle: "delgadoleiva60@gmail.com", color: "hover:border-red-500/40 hover:text-red-400" },
  { href: "tel:+50660581663",                            icon: Phone,    label: "Phone",       handle: "+506 6058 1663", color: "hover:border-green-500/40 hover:text-green-400" },
  { href: "https://zonasurtech.online",                  icon: Globe,    label: "Zona Sur Tech", handle: "zonasurtech.online", color: "hover:border-zs-accent-primary/40 hover:text-zs-accent-primary" },
  { href: "https://www.instagram.com/santidelgados_",     icon: Instagram, label: "Instagram",  handle: "@santidelgados_", color: "hover:border-pink-500/40 hover:text-pink-400" },
  { href: "https://www.facebook.com/SantiagoDelgado.666/", icon: Facebook, label: "Facebook", handle: "SantiagoDelgado", color: "hover:border-blue-600/40 hover:text-blue-500" },
];

const inputClass = "bg-zs-bg-secondary border-zs-border-subtle text-zs-text-primary placeholder:text-zs-text-muted font-mono text-sm focus:border-zs-accent-primary/50 focus:ring-0 transition-colors h-12 rounded-xl";

/**
 * ZS_CONTACT_ENGINE: Integración con Formspree.
 * Maneja la transmisión de mensajes y feedback visual al usuario.
 */
export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  // ZS_CONTACT_ENGINE: Integración con Formspree id mwvrnbzg
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID || "mwvrnbzg");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "✓ " + t('contact.form.send'),
        description: t('contact.success'),
      });
      formRef.current?.reset();
    }
  }, [state.succeeded, toast, t]);

  const isSubmitting = state.submitting;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-grid-cyber overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-zs-accent-secondary/6 rounded-full blur-[140px]" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-mono text-xs text-zs-accent-primary uppercase tracking-[0.3em] mb-4">
              [ OPEN_CHANNEL.init ]
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
              <span className="text-gradient">{t('contact.title')}</span>
            </h1>
            <p className="text-lg text-zs-text-secondary max-w-md leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* === CONTACT FORM === */}
            <motion.div {...fadeUp(0.1)}>
              <div className="p-8 bg-zs-bg-secondary border border-zs-border-subtle rounded-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-zs-accent-primary/10 border border-zs-accent-primary/20 rounded-lg">
                    <Send className="h-4 w-4 text-zs-accent-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-zs-text-primary">{t('contact.form.send')}</h2>
                    <p className="text-xs font-mono text-zs-text-muted">Avg. response time: &lt; 24h</p>
                  </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono text-xs text-zs-text-muted uppercase tracking-wider">
                        {t('contact.form.name')}
                      </Label>
                      <Input id="name" name="name" placeholder={t('contact.form.name')} required className={inputClass} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-mono text-xs text-zs-text-muted uppercase tracking-wider">
                        {t('contact.form.email')}
                      </Label>
                      <Input id="email" name="email" type="email" placeholder="you@domain.com" required className={inputClass} />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 font-mono mt-1" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-mono text-xs text-zs-text-muted uppercase tracking-wider">
                      {t('contact.form.subject')}
                    </Label>
                    <Input id="subject" name="subject" placeholder={t('contact.form.subject')} className={inputClass} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono text-xs text-zs-text-muted uppercase tracking-wider">
                      {t('contact.form.message')}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="..."
                      rows={6}
                      required
                      className={`${inputClass} mb-0 h-auto resize-none`}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 font-mono mt-1" />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl font-mono glow-green transition-all hover:scale-[1.02] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-current animate-ping" />
                        {t('contact.form.sending')}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        {t('contact.form.send')}
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* === CONNECT PANEL === */}
            <motion.div {...fadeUp(0.2)} className="space-y-6">
              {/* Status card */}
              <div className="p-6 bg-zs-bg-secondary border border-zs-accent-primary/20 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-zs-accent-primary/10 rounded-lg mt-1">
                    <Zap className="h-4 w-4 text-zs-accent-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-zs-accent-primary animate-pulse" />
                      <span className="font-mono text-xs text-zs-accent-primary uppercase tracking-widest">Available</span>
                    </div>
                    <p className="text-sm text-zs-text-primary font-medium">Open to new opportunities</p>
                    <p className="text-xs text-zs-text-muted mt-1 flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" />
                      San Isidro del General, Pérez Zeledón, Costa Rica
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="font-mono text-[10px] text-zs-text-muted uppercase tracking-[0.25em] mb-3">[ CHANNELS ]</p>
                <div className="grid gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 bg-zs-bg-secondary border border-zs-border-subtle rounded-xl transition-all group ${link.color}`}
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-zs-bg-primary border border-zs-border-subtle rounded-lg group-hover:border-current transition-colors shrink-0">
                        <link.icon className="h-4 w-4 text-zs-text-muted group-hover:text-current transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-sm text-zs-text-primary leading-none">{link.label}</p>
                        <p className="font-mono text-xs text-zs-text-muted mt-1 truncate">{link.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

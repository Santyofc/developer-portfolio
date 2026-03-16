import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CodeDividerProps {
  label: string;
  className?: string;
}

export function CodeDivider({ label, className }: CodeDividerProps) {
  return (
    <div className={cn("flex items-center gap-4 py-6", className)}>
      <span className="font-mono text-xs text-zs-accent-primary opacity-60">//</span>
      <span className="font-mono text-xs text-zs-text-muted uppercase tracking-[0.2em]">{label}</span>
      <motion.div
        className="flex-1 h-px bg-gradient-to-r from-zs-border-subtle to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
    </div>
  );
}

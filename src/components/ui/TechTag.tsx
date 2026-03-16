import { cn } from "@/lib/utils";

interface TechTagProps {
  children: string;
  className?: string;
}

export function TechTag({ children, className }: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-zs-text-muted bg-zs-bg-primary border border-zs-border-subtle rounded-lg hover:border-zs-accent-primary/30 hover:text-zs-text-secondary transition-colors",
        className
      )}
    >
      {children}
    </span>
  );
}

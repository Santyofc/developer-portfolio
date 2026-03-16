import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CodeLabelProps {
  children: ReactNode;
  className?: string;
}

export function CodeLabel({ children, className }: CodeLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 font-mono text-xs rounded-full border border-zs-accent-primary/20 bg-zs-accent-primary/5 text-zs-accent-primary",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
}

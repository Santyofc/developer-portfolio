import React, { useRef, useEffect } from "react";
import { useVisualEditor } from "@/core/VisualEditorContext";
import { cn } from "@/lib/utils";

interface EditableTextProps {
  children: React.ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export function EditableText({ children, className, tag = "div" }: EditableTextProps) {
  const { isEditMode } = useVisualEditor();
  const Tag = tag;
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (elementRef.current && isEditMode) {
      // Load from session storage if exists
      const saved = sessionStorage.getItem(`edit_${elementRef.current.innerText.slice(0, 10)}`);
      if (saved) elementRef.current.innerText = saved;
    }
  }, [isEditMode]);

  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    const text = e.currentTarget.innerText;
    // Log change or store temporarily
    console.log(`[EDIT_LOG]: ${text}`);
  };

  return (
    <Tag
      ref={elementRef as React.RefObject<any>}
      contentEditable={isEditMode}
      onInput={handleInput}
      className={cn(
        className,
        isEditMode && "outline-none ring-1 ring-zs-accent-primary/50 ring-offset-2 ring-offset-zs-bg-primary rounded px-1 transition-all animate-pulse-subtle bg-zs-accent-primary/5 cursor-text"
      )}
    >
      {children}
    </Tag>
  );
}
